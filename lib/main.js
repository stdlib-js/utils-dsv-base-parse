/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this, max-len, no-underscore-dangle, max-lines */

'use strict';

// MODULES //

var logger = require( 'debug' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var Boolean = require( '@stdlib/boolean-ctor' );
var format = require( '@stdlib/string-format' );
var defaults = require( './defaults.js' );
var state2enum = require( './states/state2enum.js' );
var enum2state = require( './states/enum2state.json' );
var states = require( './states' );


// VARIABLES //

var debug = logger( 'parser' );

// Parser states:
var CLOSED = state2enum[ 'closed' ];
var COMMENT = state2enum[ 'comment' ];
var ERROR = state2enum[ 'error' ];
var ESCAPE = state2enum[ 'escape' ];
var FIELD = state2enum[ 'field' ];
var INIT = state2enum[ 'init' ];
var QUOTE_END = state2enum[ 'quote_end' ];
var QUOTED_ESCAPE = state2enum[ 'quoted_escape' ];
var QUOTED_FIELD = state2enum[ 'quoted_field' ];


// MAIN //

/**
* Returns an incremental parser for delimiter-separated values.
*
* @constructor
* @param {Options} options - options object
* @returns {Parser} parser instance
*
* @example
* var parser = new Parser();
*
* // ...
*
* parser.next( '1,2,3,4\n' );
*
* // ...
*
* parser.next( '5,6,7,8\n' );
*
* // ...
*
* parser.next( '9,10,11,12\n' );
*
* // ...
*
* parser.close();
*
* // ...
*
* var bool = parser.done;
* // returns true
*/
function Parser( options ) {
	var opts;

	if ( !( this instanceof Parser ) ) {
		if ( arguments.length ) {
			return new Parser( options );
		}
		return new Parser();
	}
	// TODO: option validation; enforce quote, comment, delimiter, escape, and newline all being different and none can be a substring of the other (i.e., no escape equal to `,,` and delimiter equal to `,`, and no delimiter equal to `,` and newline being `,,` and vice versa; is `,,` an escape or simply an empty field?); require thousands and decimal be different and not substrings of the other
	options = options || {};
	opts = defaults();

	// Buffer for tracking internal state:
	this._buffer = [];

	// Index of the most recently processed character:
	this._cursor = -1;

	// Index marking the beginning of the current field:
	this._cidx = 0;

	// Indices marking the most recent unescaped quote sequence:
	this._qidx = -1;

	// Indices marking the most recent escape sequence:
	this._eidx = -1;

	// Buffer for storing the field values for the current row:
	this._rowBufferFLG = Boolean( options.rowBuffer );
	this._rowBuffer = options.rowBuffer || opts.rowBuffer;

	// Column, row, and line counters:
	this._col = 0;
	this._row = 0;
	this._line = 0;

	// Initialize the state flag:
	this._state = INIT;

	// Initialize the error state:
	this._errname = '';

	// Extract various options:
	this._comment = options.comment || opts.comment;
	this._decimal = options.decimal || opts.decimal;
	this._delimiter = options.delimiter || opts.delimiter;
	this._doublequote = ( options.doublequote === void 0 ) ? opts.doublequote : options.doublequote;
	this._escape = options.escape || opts.escape;
	this._false = options.false || opts.false; // TODO: convert to regexp
	this._missing = options.missing || opts.missing; // TODO: convert to regexp
	this._newline = options.newline || opts.newline;
	this._quote = options.quote || opts.quote;
	this._quoting = ( options.quoting === void 0 ) ? opts.quoting : options.quoting;
	this._schema = options.schema || opts.schema;
	this._strict = ( options.strict === void 0 ) ? opts.strict : options.strict;
	this._thousands = options.thousands || opts.thousands;
	this._trim = ( options.trim === void 0 ) ? opts.trim : options.trim;
	this._trimComment = ( options.trimComment === void 0 ) ? opts.trimComment : options.trimComment;
	this._trimNonNumeric = ( options.trimNonNumeric === void 0 ) ? opts.trimNonNumeric : options.trimNumeric;
	this._true = options.true || opts.true; // TODO: convert to regexp
	this._whitespace = options.whitespace || opts.whitespace; // TODO: convert to regexp

	this._onClose = options.onClose || opts.onClose;
	this._onColumn = options.onColumn || opts.onColumn;
	this._onComment = options.onComment || opts.onComment;
	this._onRow = options.onRow || opts.onRow;

	this._onError = options.onError || opts.onError;
	this._onWarn = options.onWarn || opts.onWarn;

	this._commentLength = this._comment.length;
	this._commentLastIndex = this._commentLength - 1;

	this._delimiterLength = this._delimiter.length;
	this._delimiterLastIndex = this._delimiterLength - 1;

	this._escapeLength = this._escape.length;
	this._escapeLastIndex = this._escapeLength - 1;

	this._newlineLength = this._newline.length;
	this._newlineLastIndex = this._newlineLength - 1;

	this._quoteLength = this._quote.length;
	this._quoteLastIndex = this._quoteLength - 1;

	// Initialize state processors...
	this._states = states( this ); // NOTE: this should come after all other initialization!

	return this;
}

/**
* Updates state by adding a processed character to an internal buffer.
*
* @private
* @name _push
* @memberof Parser.prototype
* @type {Function}
* @param {string} ch - character
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_push', function push( ch ) {
	var buf = this._buffer;

	// Increment the internal buffer pointer:
	this._cursor += 1;

	// Only expand the internal buffer if we've run out of previously allocated memory...
	if ( this._cursor >= buf.length ) {
		buf.push( ch );
		debug( 'Internal buffer size increased. Length: %d.', buf.length );
	} else {
		// Reuse existing memory:
		buf[ this._cursor ] = ch;
	}
	debug( 'Cursor: %d. Push: %s', this._cursor, ch );
	return this;
});

/**
* Rewinds the internal buffer cursor by a specified amount.
*
* @private
* @name _rewind
* @memberof Parser.prototype
* @type {Function}
* @param {NonNegativeInteger} N - number of elements to rewind
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_rewind', function rewind( N ) {
	this._cursor -= N;

	debug( 'Rewind: %d. Cursor: %d.', N, this._cursor );
	return this;
});

/**
* Copies a sequence of internal buffer elements to an earlier position in the buffer.
*
* @private
* @name _copyWithin
* @memberof Parser.prototype
* @type {Function}
* @param {NonNegativeInteger} target - starting position to which to copy elements
* @param {NonNegativeInteger} start - staring index of the elements to copy (inclusive)
* @param {NonNegativeInteger} N - number of elements to copy
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_copyWithin', function copyWithin( target, start, N ) {
	var buf;
	var i;

	buf = this._buffer;
	for ( i = 0; i < N; i++ ) {
		buf[ target+i ] = buf[ start+i ];
	}
	return this;
});

/**
* Resets the parser.
*
* @private
* @name _reset
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_reset', function reset() {
	// Reset counters and indices:
	this._col = 0;
	this._cidx = 0;
	this._qidx = -1;
	this._eidx = -1;

	// Reset the parser state to attempting to parse the first field of the next record:
	this._state = INIT;

	// Reset the buffer:
	this._cursor = -1;

	debug( 'Parser reset.' );
	return this;
});

/**
* Sets a field value in an internal row buffer.
*
* @private
* @name _set
* @memberof Parser.prototype
* @type {Function}
* @param {*} value - field value
* @param {NonNegativeInteger} idx - field index
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_setField', function set( value, idx ) {
	var buf = this._rowBuffer;

	// FIXME: as buffer may be provided from userland, use `set` accessor and consider using `@stdlib/utils/push` to allow support of dynamically resizing fixed length buffers

	// Only expand the row buffer if we've run out of previously allocated memory...
	if ( idx >= buf.length ) {
		buf.push( value );
		debug( 'Row buffer size increased. Length: %d.', buf.length );
	} else {
		// Reuse existing memory:
		buf[ idx ] = value;
	}
	return this;
});

/**
* Returns a field value.
*
* @private
* @name _getField
* @memberof Parser.prototype
* @type {Function}
* @param {NonNegativeInteger} start - starting character index (inclusive)
* @param {NonNegativeInteger} end - ending character index (inclusive)
* @returns {string} field value
*/
setReadOnly( Parser.prototype, '_getField', function get( start, end ) {
	var buf;
	var re;
	var i;

	buf = this._buffer;
	i = start;

	// TODO: consider whether to support other trimming modalities, such as ltrim, rtrim, and both
	if ( this._trim ) {
		re = this._whitespace;
		for ( ; i <= end; i++ ) {
			if ( re.test( buf[ i ] ) === false ) {
				break;
			}
		}
	}

	// TODO: presumably this is where we should perform any conversions/transformations

	return buf.slice( i, end+1 ).join( '' );
});

/**
* Returns the current row of values.
*
* @private
* @name _getRow
* @memberof Parser.prototype
* @type {Function}
* @returns {ArrayLikeObject} row of values
*/
setReadOnly( Parser.prototype, '_getRow', function get() {
	if ( this._rowBufferFLG ) {
		return this._rowBuffer;
	}
	// Return a shallow copy to avoid mutating internal state:
	return this._rowBuffer.slice( 0, this._col );
});

/**
* Scans the internal buffer for a specified character sequence.
*
* ## Notes
*
* -   Given an internal buffer
*
*     ```text
*     | ... | a | b |
*     ```
*
*     search character sequence
*
*     ```text
*     | a | b | c |
*     ```
*
*     and `N` equal to `2`, the method will begin scanning from the position of `a` in the internal buffer above and compare to each element of the first `N` characters of the search character sequence.
*
*     This method is intended to be used in scenarios where we already know that an incoming character matches the last character of the search sequence, and we want to know whether the rest of the search sequence matches the most recently added elements in the internal buffer.
*
* @private
* @name _scan
* @memberof Parser.prototype
* @type {Function}
* @param {StringArray} search - character sequence
* @param {NonNegativeInteger} N - number of characters to search
* @returns {boolean} boolean indicating whether a match was found
*/
setReadOnly( Parser.prototype, '_scan', function scan( search, N ) {
	var buf;
	var idx;
	var i;

	buf = this._buffer;
	idx = this._cursor - N + 1;
	for ( i = 0; i < N; i++ ) {
		if ( buf[ idx+i ] !== search[ i ] ) {
			break;
		}
	}
	return ( i === N );
});

/**
* Processes a field.
*
* @private
* @name _onField
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_onField', function onField() {
	// Extract the field value:
	var v = this._getField( this._cidx, this._cursor );

	// Insert the field value into the row buffer:
	this._setField( v, this._col );

	// Invoke a callback for receiving field values:
	this._onColumn( v, this._row, this._col );

	// Increment the field counter to record that we've moved on to the next field:
	this._col += 1;

	// Increment the index marking the beginning of the next field:
	this._cidx = this._cursor + 1; // +1 as the cursor currently points to the last character in the current field, and, thus, the next field should start at the next index

	// Reset indices:
	this._qidx = -1;
	this._eidx = -1;

	debug( 'New field. Line: %d. Field: %d. Value: %s', this._line+1, this._col, v );
	return this;
});

/**
* Processes a record.
*
* @private
* @name _onRecord
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_onRecord', function onRecord() {
	// FIXME: check for whether `onEmpty` should be invoked and/or handle blank lines

	// Extract the field value:
	var v = this._getField( this._cidx, this._cursor );

	// Insert the field value into the row buffer:
	this._setField( v, this._col );

	// Invoke a callback for receiving field values:
	this._onColumn( v, this._row, this._col );
	this._col += 1;

	// Invoke a callback for receiving rows:
	this._onRow( this._getRow(), this._row, this._col );
	this._row += 1;
	this._line += 1;

	debug( 'New record. Line: %d. Fields: %d.', this._line, this._col );

	// Reset the parser:
	this._reset();

	return this;
});

/**
* Processes a commented row.
*
* @private
* @name _onCommentedRow
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_onCommentedRow', function onCommentedRow() {
	var v;

	// Invoke a callback for receiving commented lines:
	if ( this._onComment ) {
		v = this._buffer.slice( 0, this._cursor+1 ).join( '' );
		if ( this._trimComment ) {
			// FIXME: trim the leading and trailing whitespace (e.g., using @stdlib/string/base/trim)
		}
		this._onComment( v, this._line );
		debug( 'New comment. Line: %d. Value: %s', this._line, v );
	}
	// Increment the counter for how many lines have been processed:
	this._line += 1;

	// Reset the parser:
	this._reset();

	return this;
});

/**
* Processes a closing quote sequence.
*
* @private
* @name _onClosingQuote
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_onClosingQuote', function onClosingQuote() {
	// Cache the cursor position marking the end of the closing quote sequence:
	this._qidx = this._cursor;
	return this;
});

/**
* Processes an escape sequence.
*
* @private
* @name _onEscape
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_onEscape', function onEscape() {
	// Cache the cursor position marking the end of the escape sequence:
	this._eidx = this._cursor;
	return this;
});

/**
* Creates a parser exception.
*
* @private
* @name _createException
* @memberof Parser.prototype
* @type {Function}
* @param {string} name - exception name
* @returns {Error} parser exception
*/
setReadOnly( Parser.prototype, '_createException', function createException( name ) {
	var err;

	switch ( name ) {
	case 'INVALID_CLOSING_QUOTE':
		err = new Error( format( 'unexpected error. Encountered an invalid record. Field %d on line %d contains a closing quote which is not immediately followed by a delimiter or newline.', this._col+1, this._line+1 ) );
		break;
	case 'INVALID_ESCAPE':
		err = new Error( format( 'unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence which is not immediately followed by a special character sequence.', this._col+1, this._line+1 ) );
		break;
	case 'INVALID_QUOTED_ESCAPE':
		err = new Error( format( 'unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence within a quoted field which is not immediately followed by a quote sequence.', this._col+1, this._line+1 ) );
		break;
	case 'CLOSED':
		err = new Error( 'invalid operation. Parser is unable to parse new chunks, as the parser has been closed. To parse new chunks, create a new parser instance.' );
		break;
	default:
		err = new Error( 'invalid operation. Parser is in an unrecoverable error state. To parse new chunks, create a new parser instance.' );
		break;
	}
	return err;
});

/**
* Raises a parser warning.
*
* @private
* @name _raiseWarning
* @memberof Parser.prototype
* @type {Function}
* @param {string} name - exception name
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_raiseWarning', function raiseWarning( name ) {
	var err;

	if ( this._onWarn ) {
		err = this._createException( name );

		debug( 'Warning: %s', err.message );
		this._onWarn( err );
	}
	return this;
});

/**
* Raises a parser exception.
*
* @private
* @name _raiseException
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_raiseException', function raiseException() {
	var err = this._createException( this._errname );

	debug( 'Error: %s', err.message );
	this._onError( err );

	return this;
});

/**
* Updates the parser state.
*
* @private
* @name _changeState
* @memberof Parser.prototype
* @type {Function}
* @param {NonNegativeInteger} state - state enumeration constant
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_changeState', function changeState( state ) {
	debug( 'State transition: %s -> %s.', enum2state[ this._state ], enum2state[ state ] );

	if ( this._state === COMMENT ) {
		this._onCommentedRow();
		this._state = state;
		return this;
	}
	switch ( state ) { // eslint-disable-line default-case
	case CLOSED:
		this._close();
		break;
	case COMMENT:
		break;
	case ERROR:
		this._raiseException();
		break;
	case ESCAPE:
		this._onEscape();
		break;
	case FIELD:
		if ( this._state !== ESCAPE ) {
			this._onField();
		}
		break;
	case INIT:
		this._onRecord();
		break;
	case QUOTE_END:
		this._onClosingQuote();
		break;
	case QUOTED_ESCAPE:
		this._onEscape();
		break;
	case QUOTED_FIELD:
		break;
	}
	this._state = state;
	return this;
});

/**
* Sets the parser's error state.
*
* @private
* @name _setErrorState
* @memberof Parser.prototype
* @type {Function}
* @param {string} name - error name
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_setErrorState', function setErrorState( name ) {
	if ( name ) {
		debug( 'Error: %s.', name );
	} else {
		debug( 'Reset error state.' );
	}
	this._errname = name;
	return this;
});

/**
* Closes the parser.
*
* @private
* @name _close
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*/
setReadOnly( Parser.prototype, '_close', function close() {
	var state;
	var v;

	if ( this.done ) {
		this._setErrorState( CLOSED )._changeState( ERROR );
		return this;
	}
	if ( this._cursor >= 0 ) {
		state = this._state;
		if ( state === INIT || state === FIELD || state === QUOTE_END ) {
			// If the current state is "field" or "quote end", we're in a valid state and can simply transition to our initial state to indicate that we've processed a record:
			this._changeState( INIT )._onClose();
		} else {
			// Check if we were able to process part of a row...
			if ( this._col ) {
				// This may be an incomplete row!!!
				this._onRow( this._getRow(), this._row, this._col );
			}
			// Extract however much of the current field we were able to process:
			v = this._buffer.slice( this._cidx, this._cursor+1 ).join( '' );

			// Return the unfinished field to the client (although this may not be equal to the original character sequence, as escape sequences may have already been stripped!):
			debug( 'Flush: %s', v );
			this._onClose( v );
		}
	} else {
		this._onClose();
	}
	debug( 'Closed.' );
	return this;
});

/**
* Parses the next chunk.
*
* @name next
* @memberof Parser.prototype
* @type {Function}
* @param {string} chunk - chunk
* @throws {Error} unable to parse new chunks
* @throws {Error} invalid field
* @throws {Error} invalid record
* @returns {Parser} parser instance
*
* @example
* var parser = new Parser();
*
* // ...
*
* parser.next( '1,2,3,4\n' );
*
* // ...
*
* parser.next( '5,6,7,8\n' );
*
* // ...
*
* parser.next( '9,10,11,12\n' );
*/
setReadOnly( Parser.prototype, 'next', function next( chunk ) {
	var states;
	var i;

	debug( 'Chunk: %s', chunk );

	if ( this.done ) {
		this._setErrorState( CLOSED )._changeState( ERROR );
		return this;
	}
	states = this._states;
	for ( i = 0; i < chunk.length; i++ ) {
		states[ this._state ]( chunk[ i ] );
		if ( this._state === ERROR ) {
			return this;
		}
	}
	return this;
});

/**
* Closes the parser.
*
* @name close
* @memberof Parser.prototype
* @type {Function}
* @returns {Parser} parser instance
*
* @example
* var parser = new Parser();
*
* // ...
*
* parser.next( '1,2,3,4\n' );
*
* // ...
*
* parser.next( '5,6,7,8\n' );
*
* // ...
*
* parser.next( '9,10,11,12\n' );
*
* // ...
*
* parser.close();
*/
setReadOnly( Parser.prototype, 'close', function close() {
	if ( this.done ) {
		return this;
	}
	this._changeState( CLOSED );
	return this;
});

/**
* Boolean indicating whether a parser is able to process new chunks.
*
* @name done
* @memberof Parser.prototype
* @readonly
* @type {boolean}
*
* @example
* var parser = new Parser();
*
* // ...
*
* parser.next( '1,2,3,4\n' );
*
* // ...
*
* parser.next( '5,6,7,8\n' );
*
* // ...
*
* parser.next( '9,10,11,12\n' );
*
* // ...
*
* parser.close();
*
* // ...
*
* var bool = parser.done;
* // returns true
*/
setReadOnlyAccessor( Parser.prototype, 'done', function get() {
	return ( this._state === CLOSED ) || ( this._state === ERROR );
});


// EXPORTS //

module.exports = Parser;