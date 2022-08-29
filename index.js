// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,i=Object.prototype,r=i.toString,s=i.__defineGetter__,o=i.__defineSetter__,_=i.__lookupGetter__,a=i.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,n){var c,h,u,d;if("object"!=typeof e||null===e||"[object Array]"===r.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===r.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((h="value"in n)&&(_.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=i,delete e[t],e[t]=n.value,e.__proto__=c):e[t]=n.value),u="get"in n,d="set"in n,h&&(u||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&s&&s.call(e,t,n.get),d&&o&&o.call(e,t,n.set),e};var c=e;function h(e,t,n){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var u=Boolean;function d(){var e,t=arguments,n=t[0],i="https://stdlib.io/e/"+n+"?";for(e=1;e<t.length;e++)i+="&arg[]="+encodeURIComponent(t[e]);return i}function l(){}function f(e){throw e}function p(){return{comment:"",decimal:".",delimiter:",",doublequote:!0,escape:"",false:["false"],missing:[""],newline:"\r\n",onClose:l,onColumn:l,onComment:null,onError:f,onWarn:null,onRow:l,quote:'"',quoting:!0,rowBuffer:[],schema:null,strict:!0,thousands:"",trim:!1,trimComment:!0,trimNonNumeric:!1,true:["true"],whitespace:[" "]}}var m=["closed","comment","escape","error","field","init","quote_end","quoted_escape","quoted_field"],w=function(){var e,t;for(e={},t=0;t<m.length;t++)e[m[t]]=t;return e}(),g=w.closed,v=w.init,q=w.error;function b(e,t){return e<t?t:e}var x=w.error,L=w.field,y=w.escape,S=w.field,E=w.init,I=w.quoted_field,C=w.comment,N=w.field,k=w.escape,A=w.init,F=w.quoted_field,R=w.error,W=w.field,j=w.init,P=w.quoted_field,D=w.error,O=w.quoted_field,B=w.quote_end,T=w.quoted_escape,V={closed:function(e){return function(){e._changeState(g)}},comment:function(e){var t,n;return t=e._newlineLastIndex,n=e._newline,function(i){i===n[t]&&e._scan(n,t)?e._rewind(t)._changeState(v):e._push(i)}},escape:function(e){var t,n,i,r,s,o,_,a,c,h,u;return t=e._delimiterLastIndex,o=e._delimiter,n=e._newlineLastIndex,_=e._newline,i=e._commentLastIndex,a=e._comment,r=e._escapeLastIndex,s=e._escapeLength,c=e._escape,h=e._strict,u=b(b(t,n),r),function(d){var l=e._cursor,f=e._eidx,p=l-f;if(p===t&&d===o[t]&&e._scan(o,t))e._copyWithin(f-r,f+1,t)._rewind(s)._push(d)._changeState(L);else if(p===n&&d===_[n]&&e._scan(_,n))e._copyWithin(f-r,f+1,n)._rewind(s)._push(d)._changeState(L);else if(p===r&&d===c[r]&&e._scan(c,r))e._copyWithin(f-r,f+1,r)._rewind(s)._push(d)._changeState(L);else{if(!a||l-i!=0||d!==a[i]||!e._scan(a,i))return p>=u?h?void e._setErrorState("INVALID_ESCAPE")._changeState(x):void e._raiseWarning("INVALID_ESCAPE")._push(d)._changeState(L):void e._push(d);e._copyWithin(f-i,f+1,i)._rewind(s)._push(d)._changeState(L)}}},error:function(e){return function(){e._changeState(q)}},field:function(e){var t,n,i,r,s,o,_,a,c;return i=e._escapeLastIndex,a=e._escape,r=e._quoteLastIndex,c=e._quote,t=e._delimiterLastIndex,s=e._delimiter,n=e._newlineLastIndex,o=e._newline,_=e._quoting,function(h){var u=e._cursor-e._cidx+1;if(h!==a[i]||!e._scan(a,i))return u-r==0&&h===c[r]&&e._scan(c,r)?_?void e._rewind(r)._changeState(I):void e._push(h):void(h===s[t]&&e._scan(s,t)?e._rewind(t)._changeState(S):h===o[n]&&e._scan(o,n)?e._rewind(n)._changeState(E):e._push(h));e._push(h)._changeState(y)}},init:function(e){var t,n,i,r,s,o,_,a,c,h,u;return i=e._commentLastIndex,a=e._comment,r=e._escapeLastIndex,h=e._escape,s=e._quoteLastIndex,u=e._quote,t=e._delimiterLastIndex,o=e._delimiter,n=e._newlineLastIndex,_=e._newline,c=e._quoting,function(d){var l=e._cursor+1;if(a&&l-i==0&&d===a[i]&&e._scan(a,i))e._rewind(i)._changeState(C);else{if(d!==h[r]||!e._scan(h,r))return l-s==0&&d===u[s]&&e._scan(u,s)?c?void e._rewind(s)._changeState(F):void e._push(d):void(d===o[t]&&e._scan(o,t)?e._rewind(t)._changeState(N):d===_[n]&&e._scan(_,n)?e._rewind(n)._changeState(A):e._push(d));e._push(d)._changeState(k)}}},quote_end:function(e){var t,n,i,r,s,o,_,a;return t=e._delimiterLastIndex,s=e._delimiter,n=e._newlineLastIndex,o=e._newline,i=e._quoteLastIndex,_=e._quote,r=e._doublequote,a=b(b(t,n),i),function(c){r&&c===_[i]&&e._scan(_,i)?e._push(c)._changeState(P):c===s[t]&&e._scan(s,t)?e._rewind(t)._changeState(W):c===o[n]&&e._scan(o,n)?e._rewind(n)._changeState(j):e._cursor-e._qidx>=a?e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(R):e._push(c)}},quoted_escape:function(e){var t,n,i,r,s;return n=e._quoteLastIndex,s=e._quote,t=e._escapeLastIndex,i=e._escapeLength,r=e._strict,function(o){var _=e._cursor,a=e._eidx,c=_-a;if(c!==n||o!==s[n]||!e._scan(s,n))return c>=n?r?void e._setErrorState("INVALID_QUOTED_ESCAPE")._changeState(D):void e._raiseWarning("INVALID_QUOTED_ESCAPE")._push(o)._changeState(O):void e._push(o);e._copyWithin(a-t,a+1,n)._rewind(i)._push(o)._changeState(O)}},quoted_field:function(e){var t,n,i,r,s;return t=e._escapeLastIndex,r=e._escape,n=e._quoteLastIndex,s=e._quote,i=e._doublequote,function(o){!1===i&&o===r[t]&&e._scan(r,t)?e._push(o)._changeState(T):o===s[n]&&e._scan(s,n)?e._rewind(n)._changeState(B):e._push(o)}}};function Q(e){var t,n;for(t=[],n=0;n<m.length;n++)t.push(V[m[n]](e));return t}var G,U=()=>{},z=w.closed,H=w.comment,J=w.error,K=w.escape,M=w.field,X=w.init,Y=w.quote_end,Z=w.quoted_escape;function $(e){var t;return this instanceof $?(e=e||{},t=p(),this._buffer=[],this._cursor=-1,this._cidx=0,this._qidx=-1,this._eidx=-1,this._rowBufferFLG=u(e.rowBuffer),this._rowBuffer=e.rowBuffer||t.rowBuffer,this._col=0,this._row=0,this._line=0,this._state=X,this._errname="",this._comment=e.comment||t.comment,this._decimal=e.decimal||t.decimal,this._delimiter=e.delimiter||t.delimiter,this._doublequote=void 0===e.doublequote?t.doublequote:e.doublequote,this._escape=e.escape||t.escape,this._false=e.false||t.false,this._missing=e.missing||t.missing,this._newline=e.newline||t.newline,this._quote=e.quote||t.quote,this._quoting=void 0===e.quoting?t.quoting:e.quoting,this._schema=e.schema||t.schema,this._strict=void 0===e.strict?t.strict:e.strict,this._thousands=e.thousands||t.thousands,this._trim=void 0===e.trim?t.trim:e.trim,this._trimComment=void 0===e.trimComment?t.trimComment:e.trimComment,this._trimNonNumeric=void 0===e.trimNonNumeric?t.trimNonNumeric:e.trimNumeric,this._true=e.true||t.true,this._whitespace=e.whitespace||t.whitespace,this._onClose=e.onClose||t.onClose,this._onColumn=e.onColumn||t.onColumn,this._onComment=e.onComment||t.onComment,this._onRow=e.onRow||t.onRow,this._onError=e.onError||t.onError,this._onWarn=e.onWarn||t.onWarn,this._commentLength=this._comment.length,this._commentLastIndex=this._commentLength-1,this._delimiterLength=this._delimiter.length,this._delimiterLastIndex=this._delimiterLength-1,this._escapeLength=this._escape.length,this._escapeLastIndex=this._escapeLength-1,this._newlineLength=this._newline.length,this._newlineLastIndex=this._newlineLength-1,this._quoteLength=this._quote.length,this._quoteLastIndex=this._quoteLength-1,this._states=Q(this),this):arguments.length?new $(e):new $}return w.quoted_field,h($.prototype,"_push",(function(e){var t=this._buffer;return this._cursor+=1,this._cursor>t.length?(t.push(e),U("Internal buffer size increased. Length: %d.",t.length)):t[this._cursor]=e,U("Cursor: %d. Push: %s",this._cursor,e),this})),h($.prototype,"_rewind",(function(e){return this._cursor-=e,U("Rewind: %d. Cursor: %d.",e,this._cursor),this})),h($.prototype,"_copyWithin",(function(e,t,n){var i,r;for(i=this._buffer,r=0;r<n;r++)i[e+r]=i[t+r];return this})),h($.prototype,"_reset",(function(){return this._col=0,this._cidx=0,this._qidx=-1,this._eidx=-1,this._state=X,this._cursor=-1,this})),h($.prototype,"_setField",(function(e,t){var n=this._rowBuffer;return t>=n.length?(n.push(e),U("Row buffer size increased. Length: %d.",n.length)):n[t]=e,this})),h($.prototype,"_getField",(function(e,t){var n,i,r;if(n=this._buffer,r=e,this._trim)for(i=this._whitespace;r<=t&&!1!==i.test(n[r]);r++);return n.slice(r,t+1).join("")})),h($.prototype,"_getRow",(function(){return this._rowBufferFLG?this._rowBuffer:this._rowBuffer.slice(0,this._col)})),h($.prototype,"_scan",(function(e,t){var n,i,r;for(n=this._buffer,i=this._cursor-t+1,r=0;r<t&&n[i+r]===e[r];r++);return r===t})),h($.prototype,"_onField",(function(){var e=this._getField(this._cidx,this._cursor);return this._setField(e,this._col),this._onColumn(e,this._row,this._col),this._col+=1,this._cidx=this._cursor+1,this._qidx=-1,this._eidx=-1,U("New field. Line: %d. Field: %d. Value: %s",this._line+1,this._col,e),this})),h($.prototype,"_onRecord",(function(){var e=this._getField(this._cidx,this._cursor);return this._setField(e,this._col),this._onColumn(e,this._row,this._col),this._col+=1,this._onRow(this._getRow(),this._row,this._col),this._row+=1,this._line+=1,U("New record. Line: %d. Fields: %d.",this._line,this._col),this._reset(),this})),h($.prototype,"_onCommentedRow",(function(){var e;return this._onComment&&(e=this._buffer.slice(0,this._cursor+1).join(""),this._trimComment,this._onComment(e)),this._line+=1,this._reset(),this})),h($.prototype,"_onClosingQuote",(function(){return this._qidx=this._cursor,this})),h($.prototype,"_onEscape",(function(){return this._eidx=this._cursor,this})),h($.prototype,"_createException",(function(e){var t;switch(e){case"INVALID_CLOSING_QUOTE":t=new Error(d("unexpected error. Encountered an invalid record. Field %d on line %d contains a closing quote which is not immediately followed by a delimiter or newline.",this._col+1,this._line+1));break;case"INVALID_ESCAPE":t=new Error(d("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence which is not immediately followed by a special character sequence.",this._col+1,this._line+1));break;case"INVALID_QUOTED_ESCAPE":t=new Error(d("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence within a quoted field which is not immediately followed by a quote sequence.",this._col+1,this._line+1));break;case"CLOSED":t=new Error("invalid operation. Parser is unable to parse new chunks, as the parser has been closed. To parse new chunks, create a new parser instance.");break;default:t=new Error("invalid operation. Parser is in an unrecoverable error state. To parse new chunks, create a new parser instance.")}return t})),h($.prototype,"_raiseWarning",(function(e){var t;return this._onWarn&&(t=this._createException(e),U("Warning: %s",t.message),this._onWarn(t)),this})),h($.prototype,"_raiseException",(function(){var e=this._createException(this._errname);return U("Error: %s",e.message),this._onError(e),this})),h($.prototype,"_changeState",(function(e){if(U("State transition: %s -> %s.",m[this._state],m[e]),this._state===H)return this._onCommentedRow(),this._state=e,this;switch(e){case z:this._close();break;case H:break;case J:this._raiseException();break;case K:this._onEscape();break;case M:this._state!==K&&this._onField();break;case X:this._onRecord();break;case Y:this._onClosingQuote();break;case Z:this._onEscape()}return this._state=e,this})),h($.prototype,"_setErrorState",(function(e){return this._errname=e,this})),h($.prototype,"_close",(function(){var e,t;return this.done?(this._setErrorState(z)._changeState(J),this):(this._cursor>=0?(e=this._state)===X||e===M||e===Y?this._changeState(X)._onClose():(this._col&&this._onRow(this._getRow(),this._row,this._col),t=this._buffer.slice(this._cidx,this._cursor+1).join(""),this._onClose(t)):this._onClose(),this)})),h($.prototype,"next",(function(e){var t,n;if(this.done)return this._setErrorState(z)._changeState(J),this;for(t=this._states,n=0;n<e.length;n++)if(t[this._state](e[n]),this._state===J)return this;return this})),h($.prototype,"close",(function(){return this.done||this._changeState(z),this})),G=$.prototype,c(G,"done",{configurable:!1,enumerable:!1,get:function(){return this._state===z||this._state===J}}),$},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Parser=t();
//# sourceMappingURL=index.js.map
