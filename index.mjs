// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.0-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";function o(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var n=Function.bind.apply(t,i);return new n}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var a=o(Object.freeze({__proto__:null,default:()=>()=>{}}));function c(e){throw e}function h(){return{comment:"",delimiter:",",doublequote:!0,escape:"",ltrim:!1,maxRows:1e308,newline:"\r\n",onClose:_,onColumn:_,onComment:null,onError:c,onRow:_,onSkip:null,onWarn:null,quote:'"',quoting:!0,rowBuffer:[],rtrim:!1,skip:"",skipBlankRows:!1,skipRow:null,strict:!0,trimComment:!0,whitespace:[" "]}}var d=["closed","comment","escape","error","field","init","invalid_quote_end","quote_end","quoted_escape","quoted_field","skip","skipped_comment","skipped_escape","skipped_field","skipped_invalid_quote_end","skipped_quote_end","skipped_quoted_escape","skipped_quoted_field"];var u=function(){var e,t;for(e={},t=0;t<d.length;t++)e[d[t]]=t;return e}(),p=u.closed;var l=a("state:comment"),f=u.init;var m=u.error;function v(e,t){return e<t?t:e}var w=a("state:escape"),g=u.error,k=u.field;var q=a("state:field"),x=u.escape,S=u.field,L=u.init,I=u.quoted_field;var E=a("state:init"),C=u.comment,b=u.field,y=u.escape,R=u.init,N=u.quoted_field,W=u.skip;var D=a("state:invalid_quote_end"),j=u.error,O=u.field,Q=u.init;function A(e,t){e._isWhitespace(e._qidx+1,e._cursor)?e._raiseWarning("INVALID_CLOSING_QUOTE")._rewind(e._cursor-e._qidx)._changeState(t):(D("Error."),e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(j))}var F=a("state:quote_end"),B=u.error,P=u.field,V=u.init,T=u.invalid_quote_end,U=u.quoted_field;var G=a("state:quoted_escape"),z=u.error,$=u.quoted_field;var M=a("state:quoted_field"),H=u.quote_end,J=u.quoted_escape;var K=a("state:skip"),X=u.init,Y=u.skip,Z=u.skipped_comment,ee=u.skipped_field,te=u.skipped_escape,ie=u.skipped_quoted_field;var ne=a("state:skipped_comment"),se=u.init;var re=a("state:skipped_escape"),_e=u.skipped_field;var oe=a("state:skipped_field"),ae=u.init,ce=u.skipped_escape,he=u.skipped_field,de=u.skipped_quoted_field;var ue=a("state:skipped_invalid_quote_end"),pe=u.skipped_field,le=u.init;var fe=a("state:skipped_quote_end"),me=u.init,ve=u.skipped_field,we=u.skipped_invalid_quote_end,ge=u.skipped_quoted_field;var ke=a("state:skipped_quoted_escape"),qe=u.skipped_quoted_field;var xe=a("state:skipped_quoted_field"),Se=u.skipped_quote_end,Le=u.skipped_quoted_escape;var Ie={closed:function(e){return function(){e._changeState(p)}},comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(l("Char: %s",n),n===i[t]&&e._scan(i,t))return l("Newline."),void e._rewind(t)._changeState(f);e._push(n)}},escape:function(e){var t,i,n,s,r,_,o,a,c,h,d,u,p;return t=e._delimiterLastIndex,o=e._delimiter,i=e._newlineLastIndex,a=e._newline,n=e._commentLastIndex,c=e._comment,r=e._skipLastIndex,u=e._skip,s=e._escapeLastIndex,_=e._escapeLength,h=e._escape,d=e._strict,p=v(v(t,i),s),function(l){var f=e._cursor,m=e._eidx,v=f-m;if(w("Char: %s",l),v===t&&l===o[t]&&e._scan(o,t))return w("Delimiter."),void e._copyWithin(m-s,m+1,t)._rewind(_)._push(l)._changeState(k);if(v===i&&l===a[i]&&e._scan(a,i))return w("Newline."),void e._copyWithin(m-s,m+1,i)._rewind(_)._push(l)._changeState(k);if(v===s&&l===h[s]&&e._scan(h,s))return w("Escape."),void e._copyWithin(m-s,m+1,s)._rewind(_)._push(l)._changeState(k);if(c&&f-n==0&&l===c[n]&&e._scan(c,n))return w("Comment."),void e._copyWithin(m-n,m+1,n)._rewind(_)._push(l)._changeState(k);if(u&&f-r==0&&l===u[r]&&e._scan(u,r))return w("Skip."),void e._copyWithin(m-r,m+1,r)._rewind(_)._push(l)._changeState(k);if(v>=p)return d?(w("Error."),void e._setErrorState("INVALID_ESCAPE")._changeState(g)):(w("Escape sequence is not followed by a special character sequence."),void e._raiseWarning("INVALID_ESCAPE")._push(l)._changeState(k));e._push(l)}},error:function(e){return function(){e._changeState(m)}},field:function(e){var t,i,n,s,r,_,o,a,c,h;return n=e._escapeLastIndex,a=e._escape,s=e._quoteLastIndex,h=e._quote,t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,_=e._newline,o=e._quoting,c=e._strict,function(d){var u=e._cursor-e._cidx+1;if(q("Char: %s",d),d===a[n]&&e._scan(a,n))return q("Escape."),void e._push(d)._changeState(x);if(u-s==0&&d===h[s]&&e._scan(h,s))return o?(q("Quote."),void e._rewind(s)._changeState(I)):void e._push(d);if(!1===c&&d===h[s]&&e._scan(h,s))return o&&e._isWhitespace(e._cidx,e._cursor-s)?(q("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(u)._changeState(I)):void e._push(d);if(d===r[t]&&e._scan(r,t))return q("Delimiter."),void e._rewind(t)._changeState(S);if(d===_[i]&&e._scan(_,i))return q("Newline."),void e._rewind(i)._changeState(L);e._push(d)}},init:function(e){var t,i,n,s,r,_,o,a,c,h,d,u,p,l;return n=e._commentLastIndex,c=e._comment,_=e._skipLastIndex,l=e._skip,s=e._escapeLastIndex,d=e._escape,r=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,o=e._delimiter,i=e._newlineLastIndex,a=e._newline,h=e._quoting,u=e._strict,function(f){var m=e._cursor+1;if(E("Char: %s",f),c&&m-n==0&&f===c[n]&&e._scan(c,n))return E("Comment."),void e._rewind(n)._changeState(C);if(l&&m-_==0&&f===l[_]&&e._scan(l,_))return E("Skip."),void e._rewind(_)._changeState(W);if(f===d[s]&&e._scan(d,s))return E("Escape."),void e._push(f)._changeState(y);if(m-r==0&&f===p[r]&&e._scan(p,r))return h?(E("Quote."),void e._rewind(r)._changeState(N)):void e._push(f);if(!1===u&&f===p[r]&&e._scan(p,r))return h&&e._isWhitespace(0,e._cursor-r)?(E("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(m)._changeState(N)):void e._push(f);if(f===o[t]&&e._scan(o,t))return E("Delimiter."),void e._rewind(t)._changeState(b);if(f===a[i]&&e._scan(a,i))return E("Newline."),void e._rewind(i)._changeState(R);e._push(f)}},invalid_quote_end:function(e){var t,i,n,s;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,s=e._newline,function(r){if(D("Char: %s",r),r===n[t]&&e._scan(n,t))return D("Delimiter."),e._rewind(t),void A(e,O);if(r===s[i]&&e._scan(s,i))return D("Newline."),e._rewind(i),void A(e,Q);e._push(r)}},quote_end:function(e){var t,i,n,s,r,_,o,a,c;return t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,_=e._newline,n=e._quoteLastIndex,a=e._quote,s=e._doublequote,o=e._strict,c=v(v(t,i),n),function(h){if(F("Char: %s",h),s&&h===a[n]&&e._scan(a,n))return F("Double quote."),void e._push(h)._changeState(U);if(h===r[t]&&e._scan(r,t))return F("Delimiter."),void e._rewind(t)._changeState(P);if(h===_[i]&&e._scan(_,i))return F("Newline."),void e._rewind(i)._changeState(V);if(e._cursor-e._qidx>=c)return o?(F("Error."),void e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(B)):(F("Invalid closing quote."),void e._push(h)._changeState(T));e._push(h)}},quoted_escape:function(e){var t,i,n,s,r;return i=e._quoteLastIndex,r=e._quote,t=e._escapeLastIndex,n=e._escapeLength,s=e._strict,function(_){var o=e._cursor,a=e._eidx,c=o-a;if(G("Char: %s",_),c===i&&_===r[i]&&e._scan(r,i))return G("Quote."),void e._copyWithin(a-t,a+1,i)._rewind(n)._push(_)._changeState($);if(c>=i)return s?(G("Error."),void e._setErrorState("INVALID_QUOTED_ESCAPE")._changeState(z)):(G("Escape sequence is not followed by a quote sequence."),void e._raiseWarning("INVALID_QUOTED_ESCAPE")._push(_)._changeState($));e._push(_)}},quoted_field:function(e){var t,i,n,s,r;return t=e._escapeLastIndex,s=e._escape,i=e._quoteLastIndex,r=e._quote,n=e._doublequote,function(_){if(M("Char: %s",_),!1===n&&_===s[t]&&e._scan(s,t))return M("Escape."),void e._push(_)._changeState(J);if(_===r[i]&&e._scan(r,i))return M("Quote."),void e._rewind(i)._changeState(H);e._push(_)}},skip:function(e){var t,i,n,s,r,_,o,a,c,h,d,u,p,l;return n=e._commentLastIndex,c=e._comment,_=e._skipLastIndex,l=e._skip,s=e._escapeLastIndex,d=e._escape,r=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,o=e._delimiter,i=e._newlineLastIndex,a=e._newline,h=e._quoting,u=e._strict,function(f){var m=e._cursor+1;if(K("Char: %s",f),c&&m-n==0&&f===c[n]&&e._scan(c,n))return K("Comment."),void e._push(f)._changeState(Z);if(l&&m-_==0&&f===l[_]&&e._scan(l,_))return K("Skip."),void e._push(f)._changeState(Y);if(f===d[s]&&e._scan(d,s))return K("Escape."),void e._push(f)._changeState(te);if(m-r==0&&f===p[r]&&e._scan(p,r))return h?(K("Quote."),void e._push(f)._changeState(ie)):void e._push(f);if(!1===u&&f===p[r]&&e._scan(p,r))return h&&e._isWhitespace(0,e._cursor-r)?(K("Quote."),void e._push(f)._changeState(ie)):void e._push(f);if(f===o[t]&&e._scan(o,t))return K("Delimiter."),void e._push(f)._changeState(ee);if(f===a[i]&&e._scan(a,i))return K("Newline."),void e._rewind(i)._changeState(X);e._push(f)}},skipped_comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(ne("Char: %s",n),n===i[t]&&e._scan(i,t))return ne("Newline."),void e._rewind(t)._changeState(se);e._push(n)}},skipped_escape:function(e){var t,i,n,s,r,_,o,a,c,h,d;return t=e._delimiterLastIndex,_=e._delimiter,i=e._newlineLastIndex,o=e._newline,n=e._commentLastIndex,a=e._comment,r=e._skipLastIndex,h=e._skip,s=e._escapeLastIndex,c=e._escape,d=v(v(t,i),s),function(u){var p=e._cursor,l=e._eidx,f=p-l;if(re("Char: %s",u),f===t&&u===_[t]&&e._scan(_,t))return re("Delimiter."),void e._push(u)._changeState(_e);if(f===i&&u===o[i]&&e._scan(o,i))return re("Newline."),void e._push(u)._changeState(_e);if(f===s&&u===c[s]&&e._scan(c,s))return re("Escape."),void e._push(u)._changeState(_e);if(a&&p-n==0&&u===a[n]&&e._scan(a,n))return re("Comment."),void e._push(u)._changeState(_e);if(h&&p-r==0&&u===h[r]&&e._scan(h,r))return re("Skip."),void e._push(u)._changeState(_e);if(f>=d)return re("Normal character sequence."),void e._push(u)._changeState(_e);e._push(u)}},skipped_field:function(e){var t,i,n,s,r,_,o,a,c,h;return n=e._escapeLastIndex,a=e._escape,s=e._quoteLastIndex,h=e._quote,t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,_=e._newline,o=e._quoting,c=e._strict,function(d){var u=e._cursor-e._cidx+1;if(oe("Char: %s",d),d===a[n]&&e._scan(a,n))return oe("Escape."),void e._push(d)._changeState(ce);if(u-s==0&&d===h[s]&&e._scan(h,s))return e._push(d),o?(oe("Quote."),void e._changeState(de)):void 0;if(!1===c&&d===h[s]&&e._scan(h,s))return e._push(d),o&&e._isWhitespace(e._cidx,e._cursor-s)?(oe("Quote."),void e._changeState(de)):void 0;if(d===r[t]&&e._scan(r,t))return oe("Delimiter."),void e._push(d)._changeState(he);if(d===_[i]&&e._scan(_,i))return oe("Newline."),void e._rewind(i)._changeState(ae);e._push(d)}},skipped_invalid_quote_end:function(e){var t,i,n,s;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,s=e._newline,function(r){if(ue("Char: %s",r),r===n[t]&&e._scan(n,t))return ue("Delimiter."),void e._push(r)._changeState(pe);if(r===s[i]&&e._scan(s,i))return ue("Newline."),void e._rewind(i)._changeState(le);e._push(r)}},skipped_quote_end:function(e){var t,i,n,s,r,_,o,a;return t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,_=e._newline,n=e._quoteLastIndex,o=e._quote,s=e._doublequote,a=v(v(t,i),n),function(c){if(fe("Char: %s",c),s&&c===o[n]&&e._scan(o,n))return fe("Double quote."),void e._push(c)._changeState(ge);if(c===r[t]&&e._scan(r,t))return fe("Delimiter."),void e._push(c)._changeState(ve);if(c===_[i]&&e._scan(_,i))return fe("Newline."),void e._rewind(i)._changeState(me);if(e._cursor-e._qidx>=a)return fe("Invalid closing quote."),void e._push(c)._changeState(we);e._push(c)}},skipped_quoted_escape:function(e){var t,i;return t=e._quoteLastIndex,i=e._quote,function(n){var s=e._cursor,r=e._eidx,_=s-r;if(ke("Char: %s",n),_===t&&n===i[t]&&e._scan(i,t))return ke("Quote."),void e._push(n)._changeState(qe);if(_>=t)return ke("Escape sequence is not followed by a quote sequence."),void e._push(n)._changeState(qe);e._push(n)}},skipped_quoted_field:function(e){var t,i,n,s,r;return t=e._escapeLastIndex,s=e._escape,i=e._quoteLastIndex,r=e._quote,n=e._doublequote,function(_){if(xe("Char: %s",_),!1===n&&_===s[t]&&e._scan(s,t))return xe("Escape."),void e._push(_)._changeState(Le);if(_===r[i]&&e._scan(r,i))return xe("Quote."),void e._push(_)._changeState(Se);e._push(_)}}};function Ee(e){var t,i;for(t=[],i=0;i<d.length;i++)t.push(Ie[d[i]](e));return t}var Ce=a("parser"),be=u.closed,ye=u.comment,Re=u.error,Ne=u.escape,We=u.field,De=u.init,je=u.invalid_quote_end,Oe=u.quote_end,Qe=u.quoted_escape,Ae=u.quoted_field,Fe=u.skip;function Be(e){var t,i;for(t="(?:",i=0;i<e.length-1;i++)t+=s(e[i])+"|";return t+s(e[i])+")"}function Pe(e){var t;return this instanceof Pe?(e=e||{},t=h(),this._buffer=[],this._cursor=-1,this._cidx=0,this._qidx=-1,this._eidx=-1,this._rowBufferFLG=i(e.rowBuffer),this._rowBuffer=e.rowBuffer||t.rowBuffer,this._col=0,this._row=0,this._line=0,this._commented=!1,this._skipped=!1,this._errname="",this._comment=e.comment||t.comment,this._delimiter=e.delimiter||t.delimiter,this._doublequote=void 0===e.doublequote?t.doublequote:e.doublequote,this._escape=e.escape||t.escape,this._ltrim=void 0===e.ltrim?t.ltrim:e.ltrim,this._maxRows=void 0===e.maxRows?t.maxRows:e.maxRows,this._newline=e.newline||t.newline,this._quote=e.quote||t.quote,this._quoting=void 0===e.quoting?t.quoting:e.quoting,this._rtrim=void 0===e.rtrim?t.rtrim:e.rtrim,this._skip=e.skip||t.skip,this._skipBlankRows=void 0===e.skipBlankRows?t.skipBlankRows:e.skipBlankRows,this._skipRow=e.skipRow||t.skipRow,this._strict=void 0===e.strict?t.strict:e.strict,this._trimComment=void 0===e.trimComment?t.trimComment:e.trimComment,this._whitespace=Be(e.whitespace||t.whitespace),this._reWhitespace=new RegExp("^"+this._whitespace+"*([\\S\\s]*?)"+this._whitespace+"*$"),this._reWhitespaceLeft=new RegExp("^"+this._whitespace+"*"),this._reWhitespaceRight=new RegExp(this._whitespace+"*$"),this._onClose=e.onClose||t.onClose,this._onColumn=e.onColumn||t.onColumn,this._onComment=e.onComment||t.onComment,this._onRow=e.onRow||t.onRow,this._onSkip=e.onSkip||t.onSkip,this._onError=e.onError||t.onError,this._onWarn=e.onWarn||t.onWarn,this._commentLength=this._comment.length,this._commentLastIndex=this._commentLength-1,this._delimiterLength=this._delimiter.length,this._delimiterLastIndex=this._delimiterLength-1,this._escapeLength=this._escape.length,this._escapeLastIndex=this._escapeLength-1,this._newlineLength=this._newline.length,this._newlineLastIndex=this._newlineLength-1,this._quoteLength=this._quote.length,this._quoteLastIndex=this._quoteLength-1,this._skipLength=this._skip.length,this._skipLastIndex=this._skipLength-1,this._skipRow&&this._skipRow(0,0)?(this._state=Fe,this._skipped=!0):this._state=De,this._states=Ee(this),this):arguments.length?new Pe(e):new Pe}u.skipped_comment,u.skipped_escape,u.skipped_field,u.skipped_invalid_quote_end,u.skipped_quote_end,u.skipped_quoted_escape,u.skipped_quoted_field,e(Pe.prototype,"_push",(function(e){var t=this._buffer;return this._cursor+=1,this._cursor>=t.length?(t.push(e),Ce("Internal buffer size increased. Length: %d.",t.length)):t[this._cursor]=e,Ce("Cursor: %d. Push: %s",this._cursor,e),this})),e(Pe.prototype,"_rewind",(function(e){return this._cursor-=e,Ce("Rewind: %d. Cursor: %d.",e,this._cursor),this})),e(Pe.prototype,"_copyWithin",(function(e,t,i){var n,s;for(n=this._buffer,s=0;s<i;s++)n[e+s]=n[t+s];return this})),e(Pe.prototype,"_slice",(function(e,t){return this._buffer.slice(e,t+1).join("")})),e(Pe.prototype,"_isWhitespace",(function(e,t){return""===r(this._slice(e,t),this._reWhitespaceLeft,"")})),e(Pe.prototype,"_reset",(function(){return this._col=0,this._cidx=0,this._qidx=-1,this._eidx=-1,this._skipRow&&this._skipRow(this._row,this._line)?(this._state=Fe,this._skipped=!0):(this._state=De,this._skipped=!1),this._commented=!1,this._cursor=-1,Ce("Parser reset."),this})),e(Pe.prototype,"_setField",(function(e,t){var i=this._rowBuffer;return t>=i.length?(i.push(e),Ce("Row buffer size increased. Length: %d.",i.length)):i[t]=e,this})),e(Pe.prototype,"_getField",(function(e,t){var i=this._slice(e,t);return this._ltrim?this._rtrim?r(i,this._reWhitespace,"$1"):r(i,this._reWhitespaceLeft,""):this._rtrim?r(i,this._reWhitespaceRight,""):i})),e(Pe.prototype,"_getRow",(function(){return this._rowBufferFLG?this._rowBuffer:this._rowBuffer.slice(0,this._col)})),e(Pe.prototype,"_scan",(function(e,t){var i,n,s;for(i=this._buffer,n=this._cursor-t+1,s=0;s<t&&i[n+s]===e[s];s++);return s===t})),e(Pe.prototype,"_onField",(function(){var e=this._getField(this._cidx,this._cursor);return this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),Ce("Field. Line: %d. Row: %d. Column: %d. Value: %s",this._line,this._row,this._col,e),this._col+=1,this._cidx=this._cursor+1,this._qidx=-1,this._eidx=-1,this})),e(Pe.prototype,"_onRecord",(function(){var e;return e=this._getField(this._cidx,this._cursor),!this._skipBlankRows||0!==this._col||""!==e&&""!==r(e,this._reWhitespaceLeft,"")?(this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),this._col+=1,this._onRow(this._getRow(),this._row,this._col,this._line),Ce("Record. Line: %d. Fields: %d.",this._line,this._col),this._row+=1,this._line+=1,this._reset(),this._row>=this._maxRows&&this._changeState(be),this):this._onSkippedRow()})),e(Pe.prototype,"_onCommentedRow",(function(){var e;return this._onComment?(e=this._slice(0,this._cursor),this._trimComment&&(e=r(e,this._reWhitespaceLeft,"")),this._onComment(e,this._line),Ce("Comment. Line: %d. Value: %s",this._line,e)):Ce("Comment. Line: %d.",this._line),this._line+=1,this._reset(),this})),e(Pe.prototype,"_onSkippedRow",(function(){var e;return this._onSkip?(e=this._slice(0,this._cursor),this._onSkip(e,this._line),Ce("Skipped row. Line: %d. Value: %s",this._line,e)):Ce("Skipped row. Line: %d.",this._line),this._line+=1,this._reset(),this})),e(Pe.prototype,"_onClosingQuote",(function(){return this._qidx=this._cursor,this})),e(Pe.prototype,"_onEscape",(function(){return this._eidx=this._cursor,this})),e(Pe.prototype,"_createException",(function(e){var t;switch(e){case"INVALID_CLOSING_QUOTE":t=new Error(n("unexpected error. Encountered an invalid record. Field %d on line %d contains a closing quote which is not immediately followed by a delimiter or newline.",this._col,this._line));break;case"INVALID_OPENING_QUOTE":t=new Error(n("unexpected error. Encountered an invalid record. Field %d on line %d contains an opening quote which does not immediately follow a delimiter or newline.",this._col,this._line));break;case"INVALID_ESCAPE":t=new Error(n("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence which is not immediately followed by a special character sequence.",this._col,this._line));break;case"INVALID_QUOTED_ESCAPE":t=new Error(n("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence within a quoted field which is not immediately followed by a quote sequence.",this._col,this._line));break;case"CLOSED":t=new Error("invalid operation. Parser is unable to parse new chunks, as the parser has been closed. To parse new chunks, create a new parser instance.");break;default:t=new Error("invalid operation. Parser is in an unrecoverable error state. To parse new chunks, create a new parser instance.")}return t})),e(Pe.prototype,"_raiseWarning",(function(e){var t;return this._onWarn&&(t=this._createException(e),Ce("Warning: %s",t.message),this._onWarn(t)),this})),e(Pe.prototype,"_raiseException",(function(){var e=this._createException(this._errname);return Ce("Error: %s",e.message),this._onError(e),this})),e(Pe.prototype,"_changeState",(function(e){switch(Ce("State transition: %s -> %s.",d[this._state],d[e]),e){case be:this._close();break;case ye:this._commented=!0;break;case Re:this._raiseException();break;case Ne:this._onEscape();break;case We:this._state!==Ne&&this._onField();break;case De:this._commented?this._onCommentedRow():this._skipped?this._onSkippedRow():this._onRecord();break;case je:break;case Oe:this._onClosingQuote();break;case Qe:this._onEscape();break;case Ae:break;case Fe:this._skipped=!0}return this._state=e,this})),e(Pe.prototype,"_setErrorState",(function(e){return e?Ce("Error: %s.",e):Ce("Reset error state."),this._errname=e,this})),e(Pe.prototype,"_close",(function(){var e,t;return this.done?(this._setErrorState(be)._changeState(Re),this):(this._cursor>=0?(e=this._state)===De||e===We||e===Oe?this._changeState(De)._onClose():(this._col&&this._onRow(this._getRow(),this._row,this._col),t=this._slice(this._cidx,this._cursor),Ce("Flush: %s",t),this._onClose(t)):this._onClose(),Ce("Closed."),this)})),e(Pe.prototype,"next",(function(e){var t,i;if(Ce("Chunk: %s",e),this.done)return this._setErrorState(be)._changeState(Re),this;for(t=this._states,i=0;i<e.length;i++)if(t[this._state](e[i]),this._state===be||this._state===Re)return this;return this})),e(Pe.prototype,"close",(function(){return this.done||this._changeState(be),this})),t(Pe.prototype,"done",(function(){return this._state===be||this._state===Re}));export{Pe as default};
//# sourceMappingURL=index.mjs.map