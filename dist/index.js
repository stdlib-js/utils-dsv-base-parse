"use strict";var m=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var re=m(function(yn,ne){
var J=require('@stdlib/utils-noop/dist');function It(e){throw e}function xt(){return{comment:"",delimiter:",",doublequote:!0,escape:"",ltrim:!1,maxRows:1e308,newline:"\r\n",onClose:J,onColumn:J,onComment:null,onError:It,onRow:J,onSkip:null,onWarn:null,quote:'"',quoting:!0,rowBuffer:[],rtrim:!1,skip:"",skipBlankRows:!1,skipRow:null,strict:!0,trimComment:!0,whitespace:[" "]}}ne.exports=xt
});var B=m(function(Fn,wt){wt.exports=["closed","comment","escape","error","field","init","invalid_quote_end","quote_end","quoted_escape","quoted_field","skip","skipped_comment","skipped_escape","skipped_field","skipped_invalid_quote_end","skipped_quote_end","skipped_quoted_escape","skipped_quoted_field"]});var x=m(function(Wn,_e){
var se=B();function gt(){var e,t;for(e={},t=0;t<se.length;t++)e[se[t]]=t;return e}var Et=gt();_e.exports=Et
});var oe=m(function(An,ae){
var pt=x(),Lt=pt.closed;function kt(e){return t;function t(){e._changeState(Lt)}}ae.exports=kt
});var ce=m(function(Un,de){
var St=require("debug"),Dt=x(),ue=St("state:comment"),Ct=Dt.init;function bt(e){var t,i;return t=e._newlineLastIndex,i=e._newline,r;function r(n){if(ue("Char: %s",n),n===i[t]&&e._scan(i,t)){ue("Newline."),e._rewind(t)._changeState(Ct);return}e._push(n)}}de.exports=bt
});var he=m(function(Kn,le){
var Pt=x(),Rt=Pt.error;function Nt(e){return t;function t(){e._changeState(Rt)}}le.exports=Nt
});var F=m(function(Vn,ve){
function Ot(e,t){return e<t?t:e}ve.exports=Ot
});var Ie=m(function(Bn,qe){
var Qt=require("debug"),fe=F(),me=x(),L=Qt("state:escape"),Tt=me.error,b=me.field;function yt(e){var t,i,r,n,s,_,a,c,l,o,f,d,h;return t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,c=e._newline,r=e._commentLastIndex,l=e._comment,s=e._skipLastIndex,d=e._skip,n=e._escapeLastIndex,_=e._escapeLength,o=e._escape,f=e._strict,h=fe(fe(t,i),n),p;function p(w){var u=e._cursor,I=e._eidx,V=u-I;if(L("Char: %s",w),V===t&&w===a[t]&&e._scan(a,t)){L("Delimiter."),e._copyWithin(I-n,I+1,t)._rewind(_)._push(w)._changeState(b);return}if(V===i&&w===c[i]&&e._scan(c,i)){L("Newline."),e._copyWithin(I-n,I+1,i)._rewind(_)._push(w)._changeState(b);return}if(V===n&&w===o[n]&&e._scan(o,n)){L("Escape."),e._copyWithin(I-n,I+1,n)._rewind(_)._push(w)._changeState(b);return}if(l&&u-r===0&&w===l[r]&&e._scan(l,r)){L("Comment."),e._copyWithin(I-r,I+1,r)._rewind(_)._push(w)._changeState(b);return}if(d&&u-s===0&&w===d[s]&&e._scan(d,s)){L("Skip."),e._copyWithin(I-s,I+1,s)._rewind(_)._push(w)._changeState(b);return}if(V>=h){if(f){L("Error."),e._setErrorState("INVALID_ESCAPE")._changeState(Tt);return}L("Escape sequence is not followed by a special character sequence."),e._raiseWarning("INVALID_ESCAPE")._push(w)._changeState(b);return}e._push(w)}}qe.exports=yt
});var ge=m(function(Gn,we){
var Ft=require("debug"),G=x(),P=Ft("state:field"),Wt=G.escape,At=G.field,Ut=G.init,xe=G.quoted_field;function Kt(e){var t,i,r,n,s,_,a,c,l,o;return r=e._escapeLastIndex,c=e._escape,n=e._quoteLastIndex,o=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,_=e._newline,a=e._quoting,l=e._strict,f;function f(d){var h=e._cursor-e._cidx+1;if(P("Char: %s",d),d===c[r]&&e._scan(c,r)){P("Escape."),e._push(d)._changeState(Wt);return}if(h-n===0&&d===o[n]&&e._scan(o,n)){if(a){P("Quote."),e._rewind(n)._changeState(xe);return}e._push(d);return}if(l===!1&&d===o[n]&&e._scan(o,n)){if(a&&e._isWhitespace(e._cidx,e._cursor-n)){P("Quote."),e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(h)._changeState(xe);return}e._push(d);return}if(d===s[t]&&e._scan(s,t)){P("Delimiter."),e._rewind(t)._changeState(At);return}if(d===_[i]&&e._scan(_,i)){P("Newline."),e._rewind(i)._changeState(Ut);return}e._push(d)}}we.exports=Kt
});var Le=m(function(Mn,pe){
var Vt=require("debug"),R=x(),k=Vt("state:init"),Bt=R.comment,Gt=R.field,Mt=R.escape,$t=R.init,Ee=R.quoted_field,zt=R.skip;function jt(e){var t,i,r,n,s,_,a,c,l,o,f,d,h,p;return r=e._commentLastIndex,l=e._comment,_=e._skipLastIndex,p=e._skip,n=e._escapeLastIndex,f=e._escape,s=e._quoteLastIndex,h=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,c=e._newline,o=e._quoting,d=e._strict,w;function w(u){var I=e._cursor+1;if(k("Char: %s",u),l&&I-r===0&&u===l[r]&&e._scan(l,r)){k("Comment."),e._rewind(r)._changeState(Bt);return}if(p&&I-_===0&&u===p[_]&&e._scan(p,_)){k("Skip."),e._rewind(_)._changeState(zt);return}if(u===f[n]&&e._scan(f,n)){k("Escape."),e._push(u)._changeState(Mt);return}if(I-s===0&&u===h[s]&&e._scan(h,s)){if(o){k("Quote."),e._rewind(s)._changeState(Ee);return}e._push(u);return}if(d===!1&&u===h[s]&&e._scan(h,s)){if(o&&e._isWhitespace(0,e._cursor-s)){k("Quote."),e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(I)._changeState(Ee);return}e._push(u);return}if(u===a[t]&&e._scan(a,t)){k("Delimiter."),e._rewind(t)._changeState(Gt);return}if(u===c[i]&&e._scan(c,i)){k("Newline."),e._rewind(i)._changeState($t);return}e._push(u)}}pe.exports=jt
});var De=m(function($n,Se){
var Ht=require("debug"),X=x(),M=Ht("state:invalid_quote_end"),Jt=X.error,Xt=X.field,Yt=X.init;function ke(e,t){if(e._isWhitespace(e._qidx+1,e._cursor)){e._raiseWarning("INVALID_CLOSING_QUOTE")._rewind(e._cursor-e._qidx)._changeState(t);return}M("Error."),e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(Jt)}function Zt(e){var t,i,r,n;return t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,n=e._newline,s;function s(_){if(M("Char: %s",_),_===r[t]&&e._scan(r,t)){M("Delimiter."),e._rewind(t),ke(e,Xt);return}if(_===n[i]&&e._scan(n,i)){M("Newline."),e._rewind(i),ke(e,Yt);return}e._push(_)}}Se.exports=Zt
});var Pe=m(function(zn,be){
var ei=require("debug"),Ce=F(),W=x(),N=ei("state:quote_end"),ti=W.error,ii=W.field,ni=W.init,ri=W.invalid_quote_end,si=W.quoted_field;function _i(e){var t,i,r,n,s,_,a,c,l;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,_=e._newline,r=e._quoteLastIndex,c=e._quote,n=e._doublequote,a=e._strict,l=Ce(Ce(t,i),r),o;function o(f){if(N("Char: %s",f),n&&f===c[r]&&e._scan(c,r)){N("Double quote."),e._push(f)._changeState(si);return}if(f===s[t]&&e._scan(s,t)){N("Delimiter."),e._rewind(t)._changeState(ii);return}if(f===_[i]&&e._scan(_,i)){N("Newline."),e._rewind(i)._changeState(ni);return}if(e._cursor-e._qidx>=l){if(a){N("Error."),e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(ti);return}N("Invalid closing quote."),e._push(f)._changeState(ri);return}e._push(f)}}be.exports=_i
});var Qe=m(function(jn,Oe){
var ai=require("debug"),Ne=x(),$=ai("state:quoted_escape"),oi=Ne.error,Re=Ne.quoted_field;function ui(e){var t,i,r,n,s;return i=e._quoteLastIndex,s=e._quote,t=e._escapeLastIndex,r=e._escapeLength,n=e._strict,_;function _(a){var c=e._cursor,l=e._eidx,o=c-l;if($("Char: %s",a),o===i&&a===s[i]&&e._scan(s,i)){$("Quote."),e._copyWithin(l-t,l+1,i)._rewind(r)._push(a)._changeState(Re);return}if(o>=i){if(n){$("Error."),e._setErrorState("INVALID_QUOTED_ESCAPE")._changeState(oi);return}$("Escape sequence is not followed by a quote sequence."),e._raiseWarning("INVALID_QUOTED_ESCAPE")._push(a)._changeState(Re);return}e._push(a)}}Oe.exports=ui
});var Fe=m(function(Hn,ye){
var di=require("debug"),Te=x(),Y=di("state:quoted_field"),ci=Te.quote_end,li=Te.quoted_escape;function hi(e){var t,i,r,n,s;return t=e._escapeLastIndex,n=e._escape,i=e._quoteLastIndex,s=e._quote,r=e._doublequote,_;function _(a){if(Y("Char: %s",a),r===!1&&a===n[t]&&e._scan(n,t)){Y("Escape."),e._push(a)._changeState(li);return}if(a===s[i]&&e._scan(s,i)){Y("Quote."),e._rewind(i)._changeState(ci);return}e._push(a)}}ye.exports=hi
});var Ue=m(function(Jn,Ae){
var vi=require("debug"),O=x(),S=vi("state:skip"),fi=O.init,mi=O.skip,qi=O.skipped_comment,Ii=O.skipped_field,xi=O.skipped_escape,We=O.skipped_quoted_field;function wi(e){var t,i,r,n,s,_,a,c,l,o,f,d,h,p;return r=e._commentLastIndex,l=e._comment,_=e._skipLastIndex,p=e._skip,n=e._escapeLastIndex,f=e._escape,s=e._quoteLastIndex,h=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,c=e._newline,o=e._quoting,d=e._strict,w;function w(u){var I=e._cursor+1;if(S("Char: %s",u),l&&I-r===0&&u===l[r]&&e._scan(l,r)){S("Comment."),e._push(u)._changeState(qi);return}if(p&&I-_===0&&u===p[_]&&e._scan(p,_)){S("Skip."),e._push(u)._changeState(mi);return}if(u===f[n]&&e._scan(f,n)){S("Escape."),e._push(u)._changeState(xi);return}if(I-s===0&&u===h[s]&&e._scan(h,s)){if(o){S("Quote."),e._push(u)._changeState(We);return}e._push(u);return}if(d===!1&&u===h[s]&&e._scan(h,s)){if(o&&e._isWhitespace(0,e._cursor-s)){S("Quote."),e._push(u)._changeState(We);return}e._push(u);return}if(u===a[t]&&e._scan(a,t)){S("Delimiter."),e._push(u)._changeState(Ii);return}if(u===c[i]&&e._scan(c,i)){S("Newline."),e._rewind(i)._changeState(fi);return}e._push(u)}}Ae.exports=wi
});var Be=m(function(Xn,Ve){
var gi=require("debug"),Ei=x(),Ke=gi("state:skipped_comment"),pi=Ei.init;function Li(e){var t,i;return t=e._newlineLastIndex,i=e._newline,r;function r(n){if(Ke("Char: %s",n),n===i[t]&&e._scan(i,t)){Ke("Newline."),e._rewind(t)._changeState(pi);return}e._push(n)}}Ve.exports=Li
});var $e=m(function(Yn,Me){
var ki=require("debug"),Ge=F(),Si=x(),D=ki("state:skipped_escape"),Q=Si.skipped_field;function Di(e){var t,i,r,n,s,_,a,c,l,o,f;return t=e._delimiterLastIndex,_=e._delimiter,i=e._newlineLastIndex,a=e._newline,r=e._commentLastIndex,c=e._comment,s=e._skipLastIndex,o=e._skip,n=e._escapeLastIndex,l=e._escape,f=Ge(Ge(t,i),n),d;function d(h){var p=e._cursor,w=e._eidx,u=p-w;if(D("Char: %s",h),u===t&&h===_[t]&&e._scan(_,t)){D("Delimiter."),e._push(h)._changeState(Q);return}if(u===i&&h===a[i]&&e._scan(a,i)){D("Newline."),e._push(h)._changeState(Q);return}if(u===n&&h===l[n]&&e._scan(l,n)){D("Escape."),e._push(h)._changeState(Q);return}if(c&&p-r===0&&h===c[r]&&e._scan(c,r)){D("Comment."),e._push(h)._changeState(Q);return}if(o&&p-s===0&&h===o[s]&&e._scan(o,s)){D("Skip."),e._push(h)._changeState(Q);return}if(u>=f){D("Normal character sequence."),e._push(h)._changeState(Q);return}e._push(h)}}Me.exports=Di
});var He=m(function(Zn,je){
var Ci=require("debug"),z=x(),T=Ci("state:skipped_field"),bi=z.init,Pi=z.skipped_escape,Ri=z.skipped_field,ze=z.skipped_quoted_field;function Ni(e){var t,i,r,n,s,_,a,c,l,o;return r=e._escapeLastIndex,c=e._escape,n=e._quoteLastIndex,o=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,_=e._newline,a=e._quoting,l=e._strict,f;function f(d){var h=e._cursor-e._cidx+1;if(T("Char: %s",d),d===c[r]&&e._scan(c,r)){T("Escape."),e._push(d)._changeState(Pi);return}if(h-n===0&&d===o[n]&&e._scan(o,n)){if(e._push(d),a){T("Quote."),e._changeState(ze);return}return}if(l===!1&&d===o[n]&&e._scan(o,n)){if(e._push(d),a&&e._isWhitespace(e._cidx,e._cursor-n)){T("Quote."),e._changeState(ze);return}return}if(d===s[t]&&e._scan(s,t)){T("Delimiter."),e._push(d)._changeState(Ri);return}if(d===_[i]&&e._scan(_,i)){T("Newline."),e._rewind(i)._changeState(bi);return}e._push(d)}}je.exports=Ni
});var Ye=m(function(er,Xe){
var Oi=require("debug"),Je=x(),Z=Oi("state:skipped_invalid_quote_end"),Qi=Je.skipped_field,Ti=Je.init;function yi(e){var t,i,r,n;return t=e._delimiterLastIndex,r=e._delimiter,i=e._newlineLastIndex,n=e._newline,s;function s(_){if(Z("Char: %s",_),_===r[t]&&e._scan(r,t)){Z("Delimiter."),e._push(_)._changeState(Qi);return}if(_===n[i]&&e._scan(n,i)){Z("Newline."),e._rewind(i)._changeState(Ti);return}e._push(_)}}Xe.exports=yi
});var tt=m(function(tr,et){
var Fi=require("debug"),Ze=F(),j=x(),A=Fi("state:skipped_quote_end"),Wi=j.init,Ai=j.skipped_field,Ui=j.skipped_invalid_quote_end,Ki=j.skipped_quoted_field;function Vi(e){var t,i,r,n,s,_,a,c;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,_=e._newline,r=e._quoteLastIndex,a=e._quote,n=e._doublequote,c=Ze(Ze(t,i),r),l;function l(o){if(A("Char: %s",o),n&&o===a[r]&&e._scan(a,r)){A("Double quote."),e._push(o)._changeState(Ki);return}if(o===s[t]&&e._scan(s,t)){A("Delimiter."),e._push(o)._changeState(Ai);return}if(o===_[i]&&e._scan(_,i)){A("Newline."),e._rewind(i)._changeState(Wi);return}if(e._cursor-e._qidx>=c){A("Invalid closing quote."),e._push(o)._changeState(Ui);return}e._push(o)}}et.exports=Vi
});var rt=m(function(ir,nt){
var Bi=require("debug"),Gi=x(),ee=Bi("state:skipped_quoted_escape"),it=Gi.skipped_quoted_field;function Mi(e){var t,i;return t=e._quoteLastIndex,i=e._quote,r;function r(n){var s=e._cursor,_=e._eidx,a=s-_;if(ee("Char: %s",n),a===t&&n===i[t]&&e._scan(i,t)){ee("Quote."),e._push(n)._changeState(it);return}if(a>=t){ee("Escape sequence is not followed by a quote sequence."),e._push(n)._changeState(it);return}e._push(n)}}nt.exports=Mi
});var at=m(function(nr,_t){
var $i=require("debug"),st=x(),te=$i("state:skipped_quoted_field"),zi=st.skipped_quote_end,ji=st.skipped_quoted_escape;function Hi(e){var t,i,r,n,s;return t=e._escapeLastIndex,n=e._escape,i=e._quoteLastIndex,s=e._quote,r=e._doublequote,_;function _(a){if(te("Char: %s",a),r===!1&&a===n[t]&&e._scan(n,t)){te("Escape."),e._push(a)._changeState(ji);return}if(a===s[i]&&e._scan(s,i)){te("Quote."),e._push(a)._changeState(zi);return}e._push(a)}}_t.exports=Hi
});var dt=m(function(rr,ut){
var ot=B(),Ji=oe(),Xi=ce(),Yi=he(),Zi=Ie(),en=ge(),tn=Le(),nn=De(),rn=Pe(),sn=Qe(),_n=Fe(),an=Ue(),on=Be(),un=$e(),dn=He(),cn=Ye(),ln=tt(),hn=rt(),vn=at(),fn={closed:Ji,comment:Xi,escape:Zi,error:Yi,field:en,init:tn,invalid_quote_end:nn,quote_end:rn,quoted_escape:sn,quoted_field:_n,skip:an,skipped_comment:on,skipped_escape:un,skipped_field:dn,skipped_invalid_quote_end:cn,skipped_quote_end:ln,skipped_quoted_escape:hn,skipped_quoted_field:vn};function mn(e){var t,i;for(t=[],i=0;i<ot.length;i++)t.push(fn[ot[i]](e));return t}ut.exports=mn
});var qt=m(function(sr,mt){
var qn=require("debug"),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),In=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),xn=require('@stdlib/boolean-ctor/dist'),H=require('@stdlib/error-tools-fmtprodmsg/dist'),ct=require('@stdlib/utils-escape-regexp-string/dist'),y=require('@stdlib/string-base-replace/dist'),wn=re(),E=x(),lt=B(),gn=dt(),g=qn("parser"),C=E.closed,En=E.comment,U=E.error,ht=E.escape,vt=E.field,K=E.init,pn=E.invalid_quote_end,ft=E.quote_end,Ln=E.quoted_escape,kn=E.quoted_field,ie=E.skip,Sn=E.skipped_comment,Dn=E.skipped_escape,Cn=E.skipped_field,bn=E.skipped_invalid_quote_end,Pn=E.skipped_quote_end,Rn=E.skipped_quoted_escape,Nn=E.skipped_quoted_field;function On(e){var t,i;for(t="(?:",i=0;i<e.length-1;i++)t+=ct(e[i])+"|";return t+ct(e[i])+")"}function v(e){var t;return this instanceof v?(e=e||{},t=wn(),this._buffer=[],this._cursor=-1,this._cidx=0,this._qidx=-1,this._eidx=-1,this._rowBufferFLG=xn(e.rowBuffer),this._rowBuffer=e.rowBuffer||t.rowBuffer,this._col=0,this._row=0,this._line=0,this._commented=!1,this._skipped=!1,this._errname="",this._comment=e.comment||t.comment,this._delimiter=e.delimiter||t.delimiter,this._doublequote=e.doublequote===void 0?t.doublequote:e.doublequote,this._escape=e.escape||t.escape,this._ltrim=e.ltrim===void 0?t.ltrim:e.ltrim,this._maxRows=e.maxRows===void 0?t.maxRows:e.maxRows,this._newline=e.newline||t.newline,this._quote=e.quote||t.quote,this._quoting=e.quoting===void 0?t.quoting:e.quoting,this._rtrim=e.rtrim===void 0?t.rtrim:e.rtrim,this._skip=e.skip||t.skip,this._skipBlankRows=e.skipBlankRows===void 0?t.skipBlankRows:e.skipBlankRows,this._skipRow=e.skipRow||t.skipRow,this._strict=e.strict===void 0?t.strict:e.strict,this._trimComment=e.trimComment===void 0?t.trimComment:e.trimComment,this._whitespace=On(e.whitespace||t.whitespace),this._reWhitespace=new RegExp("^"+this._whitespace+"*([\\S\\s]*?)"+this._whitespace+"*$"),this._reWhitespaceLeft=new RegExp("^"+this._whitespace+"*"),this._reWhitespaceRight=new RegExp(this._whitespace+"*$"),this._onClose=e.onClose||t.onClose,this._onColumn=e.onColumn||t.onColumn,this._onComment=e.onComment||t.onComment,this._onRow=e.onRow||t.onRow,this._onSkip=e.onSkip||t.onSkip,this._onError=e.onError||t.onError,this._onWarn=e.onWarn||t.onWarn,this._commentLength=this._comment.length,this._commentLastIndex=this._commentLength-1,this._delimiterLength=this._delimiter.length,this._delimiterLastIndex=this._delimiterLength-1,this._escapeLength=this._escape.length,this._escapeLastIndex=this._escapeLength-1,this._newlineLength=this._newline.length,this._newlineLastIndex=this._newlineLength-1,this._quoteLength=this._quote.length,this._quoteLastIndex=this._quoteLength-1,this._skipLength=this._skip.length,this._skipLastIndex=this._skipLength-1,this._skipRow&&this._skipRow(0,0)?(this._state=ie,this._skipped=!0):this._state=K,this._states=gn(this),this):arguments.length?new v(e):new v}q(v.prototype,"_push",function(t){var i=this._buffer;return this._cursor+=1,this._cursor>=i.length?(i.push(t),g("Internal buffer size increased. Length: %d.",i.length)):i[this._cursor]=t,g("Cursor: %d. Push: %s",this._cursor,t),this});q(v.prototype,"_rewind",function(t){return this._cursor-=t,g("Rewind: %d. Cursor: %d.",t,this._cursor),this});q(v.prototype,"_copyWithin",function(t,i,r){var n,s;for(n=this._buffer,s=0;s<r;s++)n[t+s]=n[i+s];return this});q(v.prototype,"_slice",function(t,i){return this._buffer.slice(t,i+1).join("")});q(v.prototype,"_isWhitespace",function(t,i){return y(this._slice(t,i),this._reWhitespaceLeft,"")===""});q(v.prototype,"_reset",function(){return this._col=0,this._cidx=0,this._qidx=-1,this._eidx=-1,this._skipRow&&this._skipRow(this._row,this._line)?(this._state=ie,this._skipped=!0):(this._state=K,this._skipped=!1),this._commented=!1,this._cursor=-1,g("Parser reset."),this});q(v.prototype,"_setField",function(t,i){var r=this._rowBuffer;return i>=r.length?(r.push(t),g("Row buffer size increased. Length: %d.",r.length)):r[i]=t,this});q(v.prototype,"_getField",function(t,i){var r=this._slice(t,i);return this._ltrim?this._rtrim?y(r,this._reWhitespace,"$1"):y(r,this._reWhitespaceLeft,""):this._rtrim?y(r,this._reWhitespaceRight,""):r});q(v.prototype,"_getRow",function(){return this._rowBufferFLG?this._rowBuffer:this._rowBuffer.slice(0,this._col)});q(v.prototype,"_scan",function(t,i){var r,n,s;for(r=this._buffer,n=this._cursor-i+1,s=0;s<i&&r[n+s]===t[s];s++);return s===i});q(v.prototype,"_onField",function(){var t=this._getField(this._cidx,this._cursor);return this._setField(t,this._col),this._onColumn(t,this._row,this._col,this._line),g("Field. Line: %d. Row: %d. Column: %d. Value: %s",this._line,this._row,this._col,t),this._col+=1,this._cidx=this._cursor+1,this._qidx=-1,this._eidx=-1,this});q(v.prototype,"_onRecord",function(){var t;return t=this._getField(this._cidx,this._cursor),this._skipBlankRows&&this._col===0&&(t===""||y(t,this._reWhitespaceLeft,"")==="")?this._onSkippedRow():(this._setField(t,this._col),this._onColumn(t,this._row,this._col,this._line),this._col+=1,this._onRow(this._getRow(),this._row,this._col,this._line),g("Record. Line: %d. Fields: %d.",this._line,this._col),this._row+=1,this._line+=1,this._reset(),this._row>=this._maxRows&&this._changeState(C),this)});q(v.prototype,"_onCommentedRow",function(){var t;return this._onComment?(t=this._slice(0,this._cursor),this._trimComment&&(t=y(t,this._reWhitespaceLeft,"")),this._onComment(t,this._line),g("Comment. Line: %d. Value: %s",this._line,t)):g("Comment. Line: %d.",this._line),this._line+=1,this._reset(),this});q(v.prototype,"_onSkippedRow",function(){var t;return this._onSkip?(t=this._slice(0,this._cursor),this._onSkip(t,this._line),g("Skipped row. Line: %d. Value: %s",this._line,t)):g("Skipped row. Line: %d.",this._line),this._line+=1,this._reset(),this});q(v.prototype,"_onClosingQuote",function(){return this._qidx=this._cursor,this});q(v.prototype,"_onEscape",function(){return this._eidx=this._cursor,this});q(v.prototype,"_createException",function(t){var i;switch(t){case"INVALID_CLOSING_QUOTE":i=new Error(H('1hHET',this._col,this._line));break;case"INVALID_OPENING_QUOTE":i=new Error(H('1hHEU',this._col,this._line));break;case"INVALID_ESCAPE":i=new Error(H('1hHEV',this._col,this._line));break;case"INVALID_QUOTED_ESCAPE":i=new Error(H('1hHEW',this._col,this._line));break;case"CLOSED":i=new Error(format('1hHD6'));break;default:i=new Error(format('1hHD7'));break}return i});q(v.prototype,"_raiseWarning",function(t){var i;return this._onWarn&&(i=this._createException(t),g("Warning: %s",i.message),this._onWarn(i)),this});q(v.prototype,"_raiseException",function(){var t=this._createException(this._errname);return g("Error: %s",t.message),this._onError(t),this});q(v.prototype,"_changeState",function(t){switch(g("State transition: %s -> %s.",lt[this._state],lt[t]),t){case C:this._close();break;case En:this._commented=!0;break;case U:this._raiseException();break;case ht:this._onEscape();break;case vt:this._state!==ht&&this._onField();break;case K:this._commented?this._onCommentedRow():this._skipped?this._onSkippedRow():this._onRecord();break;case pn:break;case ft:this._onClosingQuote();break;case Ln:this._onEscape();break;case kn:break;case ie:this._skipped=!0;break;case Sn:case Dn:case Cn:case bn:case Pn:case Rn:case Nn:break}return this._state=t,this});q(v.prototype,"_setErrorState",function(t){return t?g("Error: %s.",t):g("Reset error state."),this._errname=t,this});q(v.prototype,"_close",function(){var t,i;return this.done?(this._setErrorState(C)._changeState(U),this):(this._cursor>=0?(t=this._state,t===K||t===vt||t===ft?this._changeState(K)._onClose():(this._col&&this._onRow(this._getRow(),this._row,this._col),i=this._slice(this._cidx,this._cursor),g("Flush: %s",i),this._onClose(i))):this._onClose(),g("Closed."),this)});q(v.prototype,"next",function(t){var i,r;if(g("Chunk: %s",t),this.done)return this._setErrorState(C)._changeState(U),this;for(i=this._states,r=0;r<t.length;r++)if(i[this._state](t[r]),this._state===C||this._state===U)return this;return this});q(v.prototype,"close",function(){return this.done?this:(this._changeState(C),this)});In(v.prototype,"done",function(){return this._state===C||this._state===U});mt.exports=v
});var Qn=qt();module.exports=Qn;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
