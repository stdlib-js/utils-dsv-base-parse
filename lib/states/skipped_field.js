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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var logger = require( 'debug' );
var state2enum = require( './state2enum.js' );


// VARIABLES //

var debug = logger( 'state:skipped_field' );

// Possible transition states...
var INIT = state2enum[ 'init' ];
var SKIPPED_ESCAPE = state2enum[ 'skipped_escape' ];
var SKIPPED_FIELD = state2enum[ 'skipped_field' ];
var SKIPPED_QUOTED_FIELD = state2enum[ 'skipped_quoted_field' ];


// MAIN //

/**
* Returns a function for processing a field within a skipped line.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var delimiterLastIndex;
	var newlineLastIndex;
	var escapeLastIndex;
	var quoteLastIndex;
	var delimiter;
	var newline;
	var quoting;
	var escape;
	var quote;

	escapeLastIndex = parser._escapeLastIndex;
	escape = parser._escape;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

	quoting = parser._quoting;

	return next;

	/**
	* Processes a character.
	*
	* @private
	* @param {string} ch - character
	* @returns {void}
	*/
	function next( ch ) {
		var idx = parser._cursor - parser._cidx + 1;

		debug( 'Char: %s', ch );

		/*
		* Check for an escape character sequence.
		*
		* ## Notes
		*
		* -   An escape sequence escapes the delimiter, newline, and escape sequences in **non-quoted** fields.
		* -   When `doublequote` is `false`, the escape sequence escapes quote sequences within **quoted** fields.
		* -   If not immediately followed by a special character sequence, then the escape sequence has no special meaning.
		*/
		if (
			ch === escape[ escapeLastIndex ] &&     // we have a potential match
			parser._scan( escape, escapeLastIndex ) // we found a match
		) {
			debug( 'Escape.' );
			parser._push( ch )._changeState( SKIPPED_ESCAPE );
			return;
		}
		/*
		* Check for a quote character sequence.
		*
		* ## Notes
		*
		* -   When `quoting` is `true`, in order for a field to be quoted, the quote sequence must be the first character(s) of the field.
		* -   When `quoting` is `false`, quote sequences do **not** have any special meaning, and we process quote sequences as normal field text.
		*/
		if (
			idx-quoteLastIndex === 0 &&           // only search the first character(s) of the field
			ch === quote[ quoteLastIndex ] &&     // we have a potential match
			parser._scan( quote, quoteLastIndex ) // we found a match
		) {
			parser._push( ch );
			if ( quoting ) {
				debug( 'Quote.' );
				parser._changeState( SKIPPED_QUOTED_FIELD );
				return;
			}
			// Continue processing until we can transition to a new state:
			return;
		}
		/*
		* Check for a field delimiter.
		*/
		if (
			ch === delimiter[ delimiterLastIndex ] &&
			parser._scan( delimiter, delimiterLastIndex )
		) {
			debug( 'Delimiter.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		/*
		* Check for a row separator.
		*/
		if (
			ch === newline[ newlineLastIndex ] &&
			parser._scan( newline, newlineLastIndex )
		) {
			// Rewind the cursor to point to the last character before the newline character sequence:
			debug( 'Newline.' );
			parser._rewind( newlineLastIndex )._changeState( INIT );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;