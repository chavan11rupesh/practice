// Compiled by ClojureScript 1.9.854 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41946,handler){
var map__41947 = p__41946;
var map__41947__$1 = ((((!((map__41947 == null)))?((((map__41947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41947):map__41947);
var uri = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__41947,map__41947__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__41945_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__41945_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__41947,map__41947__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___41959 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___41959)){
var response_type_41960 = temp__4657__auto___41959;
this$__$1.responseType = cljs.core.name.call(null,response_type_41960);
} else {
}

var seq__41949_41961 = cljs.core.seq.call(null,headers);
var chunk__41950_41962 = null;
var count__41951_41963 = (0);
var i__41952_41964 = (0);
while(true){
if((i__41952_41964 < count__41951_41963)){
var vec__41953_41965 = cljs.core._nth.call(null,chunk__41950_41962,i__41952_41964);
var k_41966 = cljs.core.nth.call(null,vec__41953_41965,(0),null);
var v_41967 = cljs.core.nth.call(null,vec__41953_41965,(1),null);
this$__$1.setRequestHeader(k_41966,v_41967);

var G__41968 = seq__41949_41961;
var G__41969 = chunk__41950_41962;
var G__41970 = count__41951_41963;
var G__41971 = (i__41952_41964 + (1));
seq__41949_41961 = G__41968;
chunk__41950_41962 = G__41969;
count__41951_41963 = G__41970;
i__41952_41964 = G__41971;
continue;
} else {
var temp__4657__auto___41972 = cljs.core.seq.call(null,seq__41949_41961);
if(temp__4657__auto___41972){
var seq__41949_41973__$1 = temp__4657__auto___41972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41949_41973__$1)){
var c__40444__auto___41974 = cljs.core.chunk_first.call(null,seq__41949_41973__$1);
var G__41975 = cljs.core.chunk_rest.call(null,seq__41949_41973__$1);
var G__41976 = c__40444__auto___41974;
var G__41977 = cljs.core.count.call(null,c__40444__auto___41974);
var G__41978 = (0);
seq__41949_41961 = G__41975;
chunk__41950_41962 = G__41976;
count__41951_41963 = G__41977;
i__41952_41964 = G__41978;
continue;
} else {
var vec__41956_41979 = cljs.core.first.call(null,seq__41949_41973__$1);
var k_41980 = cljs.core.nth.call(null,vec__41956_41979,(0),null);
var v_41981 = cljs.core.nth.call(null,vec__41956_41979,(1),null);
this$__$1.setRequestHeader(k_41980,v_41981);

var G__41982 = cljs.core.next.call(null,seq__41949_41973__$1);
var G__41983 = null;
var G__41984 = (0);
var G__41985 = (0);
seq__41949_41961 = G__41982;
chunk__41950_41962 = G__41983;
count__41951_41963 = G__41984;
i__41952_41964 = G__41985;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__39610__auto__ = body;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1502732679476
