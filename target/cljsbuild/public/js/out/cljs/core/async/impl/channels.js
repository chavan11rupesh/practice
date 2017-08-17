// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717 = (function (val,meta44718){
this.val = val;
this.meta44718 = meta44718;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44719,meta44718__$1){
var self__ = this;
var _44719__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717(self__.val,meta44718__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44719){
var self__ = this;
var _44719__$1 = this;
return self__.meta44718;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta44718","meta44718",1213513283,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels44717";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels44717");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels44717 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels44717(val__$1,meta44718){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717(val__$1,meta44718));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44717(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__40293__auto__ = (((this$ == null))?null:this$);
var m__40294__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,this$);
} else {
var m__40294__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_44731 = self__.puts.pop();
if((putter_44731 == null)){
} else {
var put_handler_44732 = putter_44731.handler;
var val_44733 = putter_44731.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_44732)){
var put_cb_44734 = cljs.core.async.impl.protocols.commit.call(null,put_handler_44732);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_44734,put_handler_44732,val_44733,putter_44731,this$__$1){
return (function (){
return put_cb_44734.call(null,true);
});})(put_cb_44734,put_handler_44732,val_44733,putter_44731,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__39598__auto__ = self__.buf;
if(cljs.core.truth_(and__39598__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__39598__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__44735 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__44735;
continue;
} else {
var G__44736 = takers;
takers = G__44736;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__44720_44737 = cljs.core.seq.call(null,take_cbs);
var chunk__44721_44738 = null;
var count__44722_44739 = (0);
var i__44723_44740 = (0);
while(true){
if((i__44723_44740 < count__44722_44739)){
var f_44741 = cljs.core._nth.call(null,chunk__44721_44738,i__44723_44740);
cljs.core.async.impl.dispatch.run.call(null,f_44741);

var G__44742 = seq__44720_44737;
var G__44743 = chunk__44721_44738;
var G__44744 = count__44722_44739;
var G__44745 = (i__44723_44740 + (1));
seq__44720_44737 = G__44742;
chunk__44721_44738 = G__44743;
count__44722_44739 = G__44744;
i__44723_44740 = G__44745;
continue;
} else {
var temp__4657__auto___44746 = cljs.core.seq.call(null,seq__44720_44737);
if(temp__4657__auto___44746){
var seq__44720_44747__$1 = temp__4657__auto___44746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44720_44747__$1)){
var c__40444__auto___44748 = cljs.core.chunk_first.call(null,seq__44720_44747__$1);
var G__44749 = cljs.core.chunk_rest.call(null,seq__44720_44747__$1);
var G__44750 = c__40444__auto___44748;
var G__44751 = cljs.core.count.call(null,c__40444__auto___44748);
var G__44752 = (0);
seq__44720_44737 = G__44749;
chunk__44721_44738 = G__44750;
count__44722_44739 = G__44751;
i__44723_44740 = G__44752;
continue;
} else {
var f_44753 = cljs.core.first.call(null,seq__44720_44747__$1);
cljs.core.async.impl.dispatch.run.call(null,f_44753);

var G__44754 = cljs.core.next.call(null,seq__44720_44747__$1);
var G__44755 = null;
var G__44756 = (0);
var G__44757 = (0);
seq__44720_44737 = G__44754;
chunk__44721_44738 = G__44755;
count__44722_44739 = G__44756;
i__44723_44740 = G__44757;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__44724 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__39598__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__39598__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__39598__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__44758 = cbs__$1;
cbs = G__44758;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__44724,(0),null);
var cbs = cljs.core.nth.call(null,vec__44724,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__44727_44759 = cljs.core.seq.call(null,cbs);
var chunk__44728_44760 = null;
var count__44729_44761 = (0);
var i__44730_44762 = (0);
while(true){
if((i__44730_44762 < count__44729_44761)){
var cb_44763 = cljs.core._nth.call(null,chunk__44728_44760,i__44730_44762);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__44727_44759,chunk__44728_44760,count__44729_44761,i__44730_44762,cb_44763,val,vec__44724,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_44763.call(null,true);
});})(seq__44727_44759,chunk__44728_44760,count__44729_44761,i__44730_44762,cb_44763,val,vec__44724,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__44764 = seq__44727_44759;
var G__44765 = chunk__44728_44760;
var G__44766 = count__44729_44761;
var G__44767 = (i__44730_44762 + (1));
seq__44727_44759 = G__44764;
chunk__44728_44760 = G__44765;
count__44729_44761 = G__44766;
i__44730_44762 = G__44767;
continue;
} else {
var temp__4657__auto___44768 = cljs.core.seq.call(null,seq__44727_44759);
if(temp__4657__auto___44768){
var seq__44727_44769__$1 = temp__4657__auto___44768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44727_44769__$1)){
var c__40444__auto___44770 = cljs.core.chunk_first.call(null,seq__44727_44769__$1);
var G__44771 = cljs.core.chunk_rest.call(null,seq__44727_44769__$1);
var G__44772 = c__40444__auto___44770;
var G__44773 = cljs.core.count.call(null,c__40444__auto___44770);
var G__44774 = (0);
seq__44727_44759 = G__44771;
chunk__44728_44760 = G__44772;
count__44729_44761 = G__44773;
i__44730_44762 = G__44774;
continue;
} else {
var cb_44775 = cljs.core.first.call(null,seq__44727_44769__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__44727_44759,chunk__44728_44760,count__44729_44761,i__44730_44762,cb_44775,seq__44727_44769__$1,temp__4657__auto___44768,val,vec__44724,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_44775.call(null,true);
});})(seq__44727_44759,chunk__44728_44760,count__44729_44761,i__44730_44762,cb_44775,seq__44727_44769__$1,temp__4657__auto___44768,val,vec__44724,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__44776 = cljs.core.next.call(null,seq__44727_44769__$1);
var G__44777 = null;
var G__44778 = (0);
var G__44779 = (0);
seq__44727_44759 = G__44776;
chunk__44728_44760 = G__44777;
count__44729_44761 = G__44778;
i__44730_44762 = G__44779;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__39598__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__39598__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__39598__auto__;
}
})())){
var has_val = (function (){var and__39598__auto__ = self__.buf;
if(cljs.core.truth_(and__39598__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__39598__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__39598__auto__ = self__.buf;
if(cljs.core.truth_(and__39598__auto__)){
return (self__.puts.length === (0));
} else {
return and__39598__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_44780 = self__.takes.pop();
if((taker_44780 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_44780)){
var take_cb_44781 = cljs.core.async.impl.protocols.commit.call(null,taker_44780);
var val_44782 = (cljs.core.truth_((function (){var and__39598__auto__ = self__.buf;
if(cljs.core.truth_(and__39598__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__39598__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_44781,val_44782,taker_44780,this$__$1){
return (function (){
return take_cb_44781.call(null,val_44782);
});})(take_cb_44781,val_44782,taker_44780,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__39610__auto__ = exh;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__44784 = arguments.length;
switch (G__44784) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__44788 = null;
var G__44788__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e44785){var t = e44785;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__44788__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e44786){var t = e44786;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__44788 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__44788__1.call(this,buf__$1);
case 2:
return G__44788__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__44788.cljs$core$IFn$_invoke$arity$1 = G__44788__1;
G__44788.cljs$core$IFn$_invoke$arity$2 = G__44788__2;
return G__44788;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1502732687037
