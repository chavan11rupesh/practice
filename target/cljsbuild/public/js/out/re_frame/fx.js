// Compiled by ClojureScript 1.9.854 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__44074 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44075 = null;
var count__44076 = (0);
var i__44077 = (0);
while(true){
if((i__44077 < count__44076)){
var vec__44078 = cljs.core._nth.call(null,chunk__44075,i__44077);
var effect_k = cljs.core.nth.call(null,vec__44078,(0),null);
var value = cljs.core.nth.call(null,vec__44078,(1),null);
var temp__4655__auto___44084 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___44084)){
var effect_fn_44085 = temp__4655__auto___44084;
effect_fn_44085.call(null,value);
} else {
}

var G__44086 = seq__44074;
var G__44087 = chunk__44075;
var G__44088 = count__44076;
var G__44089 = (i__44077 + (1));
seq__44074 = G__44086;
chunk__44075 = G__44087;
count__44076 = G__44088;
i__44077 = G__44089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44074);
if(temp__4657__auto__){
var seq__44074__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44074__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__44074__$1);
var G__44090 = cljs.core.chunk_rest.call(null,seq__44074__$1);
var G__44091 = c__40444__auto__;
var G__44092 = cljs.core.count.call(null,c__40444__auto__);
var G__44093 = (0);
seq__44074 = G__44090;
chunk__44075 = G__44091;
count__44076 = G__44092;
i__44077 = G__44093;
continue;
} else {
var vec__44081 = cljs.core.first.call(null,seq__44074__$1);
var effect_k = cljs.core.nth.call(null,vec__44081,(0),null);
var value = cljs.core.nth.call(null,vec__44081,(1),null);
var temp__4655__auto___44094 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___44094)){
var effect_fn_44095 = temp__4655__auto___44094;
effect_fn_44095.call(null,value);
} else {
}

var G__44096 = cljs.core.next.call(null,seq__44074__$1);
var G__44097 = null;
var G__44098 = (0);
var G__44099 = (0);
seq__44074 = G__44096;
chunk__44075 = G__44097;
count__44076 = G__44098;
i__44077 = G__44099;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__44100 = cljs.core.seq.call(null,value);
var chunk__44101 = null;
var count__44102 = (0);
var i__44103 = (0);
while(true){
if((i__44103 < count__44102)){
var map__44104 = cljs.core._nth.call(null,chunk__44101,i__44103);
var map__44104__$1 = ((((!((map__44104 == null)))?((((map__44104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44104):map__44104);
var effect = map__44104__$1;
var ms = cljs.core.get.call(null,map__44104__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44104__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44100,chunk__44101,count__44102,i__44103,map__44104,map__44104__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44100,chunk__44101,count__44102,i__44103,map__44104,map__44104__$1,effect,ms,dispatch))
,ms);
}

var G__44108 = seq__44100;
var G__44109 = chunk__44101;
var G__44110 = count__44102;
var G__44111 = (i__44103 + (1));
seq__44100 = G__44108;
chunk__44101 = G__44109;
count__44102 = G__44110;
i__44103 = G__44111;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44100);
if(temp__4657__auto__){
var seq__44100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44100__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__44100__$1);
var G__44112 = cljs.core.chunk_rest.call(null,seq__44100__$1);
var G__44113 = c__40444__auto__;
var G__44114 = cljs.core.count.call(null,c__40444__auto__);
var G__44115 = (0);
seq__44100 = G__44112;
chunk__44101 = G__44113;
count__44102 = G__44114;
i__44103 = G__44115;
continue;
} else {
var map__44106 = cljs.core.first.call(null,seq__44100__$1);
var map__44106__$1 = ((((!((map__44106 == null)))?((((map__44106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44106):map__44106);
var effect = map__44106__$1;
var ms = cljs.core.get.call(null,map__44106__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44106__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44100,chunk__44101,count__44102,i__44103,map__44106,map__44106__$1,effect,ms,dispatch,seq__44100__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44100,chunk__44101,count__44102,i__44103,map__44106,map__44106__$1,effect,ms,dispatch,seq__44100__$1,temp__4657__auto__))
,ms);
}

var G__44116 = cljs.core.next.call(null,seq__44100__$1);
var G__44117 = null;
var G__44118 = (0);
var G__44119 = (0);
seq__44100 = G__44116;
chunk__44101 = G__44117;
count__44102 = G__44118;
i__44103 = G__44119;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__44120 = cljs.core.seq.call(null,value);
var chunk__44121 = null;
var count__44122 = (0);
var i__44123 = (0);
while(true){
if((i__44123 < count__44122)){
var event = cljs.core._nth.call(null,chunk__44121,i__44123);
re_frame.router.dispatch.call(null,event);

var G__44124 = seq__44120;
var G__44125 = chunk__44121;
var G__44126 = count__44122;
var G__44127 = (i__44123 + (1));
seq__44120 = G__44124;
chunk__44121 = G__44125;
count__44122 = G__44126;
i__44123 = G__44127;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44120);
if(temp__4657__auto__){
var seq__44120__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44120__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__44120__$1);
var G__44128 = cljs.core.chunk_rest.call(null,seq__44120__$1);
var G__44129 = c__40444__auto__;
var G__44130 = cljs.core.count.call(null,c__40444__auto__);
var G__44131 = (0);
seq__44120 = G__44128;
chunk__44121 = G__44129;
count__44122 = G__44130;
i__44123 = G__44131;
continue;
} else {
var event = cljs.core.first.call(null,seq__44120__$1);
re_frame.router.dispatch.call(null,event);

var G__44132 = cljs.core.next.call(null,seq__44120__$1);
var G__44133 = null;
var G__44134 = (0);
var G__44135 = (0);
seq__44120 = G__44132;
chunk__44121 = G__44133;
count__44122 = G__44134;
i__44123 = G__44135;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__44136 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__44137 = null;
var count__44138 = (0);
var i__44139 = (0);
while(true){
if((i__44139 < count__44138)){
var event = cljs.core._nth.call(null,chunk__44137,i__44139);
clear_event.call(null,event);

var G__44140 = seq__44136;
var G__44141 = chunk__44137;
var G__44142 = count__44138;
var G__44143 = (i__44139 + (1));
seq__44136 = G__44140;
chunk__44137 = G__44141;
count__44138 = G__44142;
i__44139 = G__44143;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44136);
if(temp__4657__auto__){
var seq__44136__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44136__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__44136__$1);
var G__44144 = cljs.core.chunk_rest.call(null,seq__44136__$1);
var G__44145 = c__40444__auto__;
var G__44146 = cljs.core.count.call(null,c__40444__auto__);
var G__44147 = (0);
seq__44136 = G__44144;
chunk__44137 = G__44145;
count__44138 = G__44146;
i__44139 = G__44147;
continue;
} else {
var event = cljs.core.first.call(null,seq__44136__$1);
clear_event.call(null,event);

var G__44148 = cljs.core.next.call(null,seq__44136__$1);
var G__44149 = null;
var G__44150 = (0);
var G__44151 = (0);
seq__44136 = G__44148;
chunk__44137 = G__44149;
count__44138 = G__44150;
i__44139 = G__44151;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1502732685524
