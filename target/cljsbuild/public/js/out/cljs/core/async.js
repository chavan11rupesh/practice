// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45805 = arguments.length;
switch (G__45805) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45806 = (function (f,blockable,meta45807){
this.f = f;
this.blockable = blockable;
this.meta45807 = meta45807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45808,meta45807__$1){
var self__ = this;
var _45808__$1 = this;
return (new cljs.core.async.t_cljs$core$async45806(self__.f,self__.blockable,meta45807__$1));
});

cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45808){
var self__ = this;
var _45808__$1 = this;
return self__.meta45807;
});

cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45807","meta45807",1961432150,null)], null);
});

cljs.core.async.t_cljs$core$async45806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45806";

cljs.core.async.t_cljs$core$async45806.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async45806");
});

cljs.core.async.__GT_t_cljs$core$async45806 = (function cljs$core$async$__GT_t_cljs$core$async45806(f__$1,blockable__$1,meta45807){
return (new cljs.core.async.t_cljs$core$async45806(f__$1,blockable__$1,meta45807));
});

}

return (new cljs.core.async.t_cljs$core$async45806(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45812 = arguments.length;
switch (G__45812) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45815 = arguments.length;
switch (G__45815) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45818 = arguments.length;
switch (G__45818) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45820 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45820);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45820,ret){
return (function (){
return fn1.call(null,val_45820);
});})(val_45820,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45822 = arguments.length;
switch (G__45822) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__40550__auto___45824 = n;
var x_45825 = (0);
while(true){
if((x_45825 < n__40550__auto___45824)){
(a[x_45825] = (0));

var G__45826 = (x_45825 + (1));
x_45825 = G__45826;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45827 = (i + (1));
i = G__45827;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45828 = (function (flag,meta45829){
this.flag = flag;
this.meta45829 = meta45829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45830,meta45829__$1){
var self__ = this;
var _45830__$1 = this;
return (new cljs.core.async.t_cljs$core$async45828(self__.flag,meta45829__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45830){
var self__ = this;
var _45830__$1 = this;
return self__.meta45829;
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45829","meta45829",904952879,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45828";

cljs.core.async.t_cljs$core$async45828.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async45828");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45828 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45828(flag__$1,meta45829){
return (new cljs.core.async.t_cljs$core$async45828(flag__$1,meta45829));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45828(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45831 = (function (flag,cb,meta45832){
this.flag = flag;
this.cb = cb;
this.meta45832 = meta45832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45833,meta45832__$1){
var self__ = this;
var _45833__$1 = this;
return (new cljs.core.async.t_cljs$core$async45831(self__.flag,self__.cb,meta45832__$1));
});

cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45833){
var self__ = this;
var _45833__$1 = this;
return self__.meta45832;
});

cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45832","meta45832",-1752650913,null)], null);
});

cljs.core.async.t_cljs$core$async45831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45831";

cljs.core.async.t_cljs$core$async45831.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async45831");
});

cljs.core.async.__GT_t_cljs$core$async45831 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45831(flag__$1,cb__$1,meta45832){
return (new cljs.core.async.t_cljs$core$async45831(flag__$1,cb__$1,meta45832));
});

}

return (new cljs.core.async.t_cljs$core$async45831(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45834_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45834_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45835_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45835_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__39610__auto__ = wport;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45836 = (i + (1));
i = G__45836;
continue;
}
} else {
return null;
}
break;
}
})();
var or__39610__auto__ = ret;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__39598__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__39598__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__39598__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__40781__auto__ = [];
var len__40774__auto___45842 = arguments.length;
var i__40775__auto___45843 = (0);
while(true){
if((i__40775__auto___45843 < len__40774__auto___45842)){
args__40781__auto__.push((arguments[i__40775__auto___45843]));

var G__45844 = (i__40775__auto___45843 + (1));
i__40775__auto___45843 = G__45844;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((1) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40782__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45839){
var map__45840 = p__45839;
var map__45840__$1 = ((((!((map__45840 == null)))?((((map__45840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45840):map__45840);
var opts = map__45840__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45837){
var G__45838 = cljs.core.first.call(null,seq45837);
var seq45837__$1 = cljs.core.next.call(null,seq45837);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45838,seq45837__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45846 = arguments.length;
switch (G__45846) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45759__auto___45892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___45892){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___45892){
return (function (state_45870){
var state_val_45871 = (state_45870[(1)]);
if((state_val_45871 === (7))){
var inst_45866 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45872_45893 = state_45870__$1;
(statearr_45872_45893[(2)] = inst_45866);

(statearr_45872_45893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (1))){
var state_45870__$1 = state_45870;
var statearr_45873_45894 = state_45870__$1;
(statearr_45873_45894[(2)] = null);

(statearr_45873_45894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (4))){
var inst_45849 = (state_45870[(7)]);
var inst_45849__$1 = (state_45870[(2)]);
var inst_45850 = (inst_45849__$1 == null);
var state_45870__$1 = (function (){var statearr_45874 = state_45870;
(statearr_45874[(7)] = inst_45849__$1);

return statearr_45874;
})();
if(cljs.core.truth_(inst_45850)){
var statearr_45875_45895 = state_45870__$1;
(statearr_45875_45895[(1)] = (5));

} else {
var statearr_45876_45896 = state_45870__$1;
(statearr_45876_45896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (13))){
var state_45870__$1 = state_45870;
var statearr_45877_45897 = state_45870__$1;
(statearr_45877_45897[(2)] = null);

(statearr_45877_45897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (6))){
var inst_45849 = (state_45870[(7)]);
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45870__$1,(11),to,inst_45849);
} else {
if((state_val_45871 === (3))){
var inst_45868 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45870__$1,inst_45868);
} else {
if((state_val_45871 === (12))){
var state_45870__$1 = state_45870;
var statearr_45878_45898 = state_45870__$1;
(statearr_45878_45898[(2)] = null);

(statearr_45878_45898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (2))){
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45870__$1,(4),from);
} else {
if((state_val_45871 === (11))){
var inst_45859 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
if(cljs.core.truth_(inst_45859)){
var statearr_45879_45899 = state_45870__$1;
(statearr_45879_45899[(1)] = (12));

} else {
var statearr_45880_45900 = state_45870__$1;
(statearr_45880_45900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (9))){
var state_45870__$1 = state_45870;
var statearr_45881_45901 = state_45870__$1;
(statearr_45881_45901[(2)] = null);

(statearr_45881_45901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (5))){
var state_45870__$1 = state_45870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45882_45902 = state_45870__$1;
(statearr_45882_45902[(1)] = (8));

} else {
var statearr_45883_45903 = state_45870__$1;
(statearr_45883_45903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (14))){
var inst_45864 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45884_45904 = state_45870__$1;
(statearr_45884_45904[(2)] = inst_45864);

(statearr_45884_45904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (10))){
var inst_45856 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45885_45905 = state_45870__$1;
(statearr_45885_45905[(2)] = inst_45856);

(statearr_45885_45905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45871 === (8))){
var inst_45853 = cljs.core.async.close_BANG_.call(null,to);
var state_45870__$1 = state_45870;
var statearr_45886_45906 = state_45870__$1;
(statearr_45886_45906[(2)] = inst_45853);

(statearr_45886_45906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___45892))
;
return ((function (switch__45671__auto__,c__45759__auto___45892){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_45887 = [null,null,null,null,null,null,null,null];
(statearr_45887[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_45887[(1)] = (1));

return statearr_45887;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_45870){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_45870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e45888){if((e45888 instanceof Object)){
var ex__45675__auto__ = e45888;
var statearr_45889_45907 = state_45870;
(statearr_45889_45907[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45908 = state_45870;
state_45870 = G__45908;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_45870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_45870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___45892))
})();
var state__45761__auto__ = (function (){var statearr_45890 = f__45760__auto__.call(null);
(statearr_45890[(6)] = c__45759__auto___45892);

return statearr_45890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___45892))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45909){
var vec__45910 = p__45909;
var v = cljs.core.nth.call(null,vec__45910,(0),null);
var p = cljs.core.nth.call(null,vec__45910,(1),null);
var job = vec__45910;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45759__auto___46081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results){
return (function (state_45917){
var state_val_45918 = (state_45917[(1)]);
if((state_val_45918 === (1))){
var state_45917__$1 = state_45917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45917__$1,(2),res,v);
} else {
if((state_val_45918 === (2))){
var inst_45914 = (state_45917[(2)]);
var inst_45915 = cljs.core.async.close_BANG_.call(null,res);
var state_45917__$1 = (function (){var statearr_45919 = state_45917;
(statearr_45919[(7)] = inst_45914);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45917__$1,inst_45915);
} else {
return null;
}
}
});})(c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results))
;
return ((function (switch__45671__auto__,c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_45920 = [null,null,null,null,null,null,null,null];
(statearr_45920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__);

(statearr_45920[(1)] = (1));

return statearr_45920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1 = (function (state_45917){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_45917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e45921){if((e45921 instanceof Object)){
var ex__45675__auto__ = e45921;
var statearr_45922_46082 = state_45917;
(statearr_45922_46082[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46083 = state_45917;
state_45917 = G__46083;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = function(state_45917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1.call(this,state_45917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results))
})();
var state__45761__auto__ = (function (){var statearr_45923 = f__45760__auto__.call(null);
(statearr_45923[(6)] = c__45759__auto___46081);

return statearr_45923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46081,res,vec__45910,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45924){
var vec__45925 = p__45924;
var v = cljs.core.nth.call(null,vec__45925,(0),null);
var p = cljs.core.nth.call(null,vec__45925,(1),null);
var job = vec__45925;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__40550__auto___46084 = n;
var __46085 = (0);
while(true){
if((__46085 < n__40550__auto___46084)){
var G__45928_46086 = type;
var G__45928_46087__$1 = (((G__45928_46086 instanceof cljs.core.Keyword))?G__45928_46086.fqn:null);
switch (G__45928_46087__$1) {
case "compute":
var c__45759__auto___46089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46085,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (__46085,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function (state_45941){
var state_val_45942 = (state_45941[(1)]);
if((state_val_45942 === (1))){
var state_45941__$1 = state_45941;
var statearr_45943_46090 = state_45941__$1;
(statearr_45943_46090[(2)] = null);

(statearr_45943_46090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (2))){
var state_45941__$1 = state_45941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45941__$1,(4),jobs);
} else {
if((state_val_45942 === (3))){
var inst_45939 = (state_45941[(2)]);
var state_45941__$1 = state_45941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45941__$1,inst_45939);
} else {
if((state_val_45942 === (4))){
var inst_45931 = (state_45941[(2)]);
var inst_45932 = process.call(null,inst_45931);
var state_45941__$1 = state_45941;
if(cljs.core.truth_(inst_45932)){
var statearr_45944_46091 = state_45941__$1;
(statearr_45944_46091[(1)] = (5));

} else {
var statearr_45945_46092 = state_45941__$1;
(statearr_45945_46092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (5))){
var state_45941__$1 = state_45941;
var statearr_45946_46093 = state_45941__$1;
(statearr_45946_46093[(2)] = null);

(statearr_45946_46093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (6))){
var state_45941__$1 = state_45941;
var statearr_45947_46094 = state_45941__$1;
(statearr_45947_46094[(2)] = null);

(statearr_45947_46094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (7))){
var inst_45937 = (state_45941[(2)]);
var state_45941__$1 = state_45941;
var statearr_45948_46095 = state_45941__$1;
(statearr_45948_46095[(2)] = inst_45937);

(statearr_45948_46095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46085,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
;
return ((function (__46085,switch__45671__auto__,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_45949 = [null,null,null,null,null,null,null];
(statearr_45949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__);

(statearr_45949[(1)] = (1));

return statearr_45949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1 = (function (state_45941){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_45941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e45950){if((e45950 instanceof Object)){
var ex__45675__auto__ = e45950;
var statearr_45951_46096 = state_45941;
(statearr_45951_46096[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46097 = state_45941;
state_45941 = G__46097;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = function(state_45941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1.call(this,state_45941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__;
})()
;})(__46085,switch__45671__auto__,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
})();
var state__45761__auto__ = (function (){var statearr_45952 = f__45760__auto__.call(null);
(statearr_45952[(6)] = c__45759__auto___46089);

return statearr_45952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(__46085,c__45759__auto___46089,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
);


break;
case "async":
var c__45759__auto___46098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46085,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (__46085,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function (state_45965){
var state_val_45966 = (state_45965[(1)]);
if((state_val_45966 === (1))){
var state_45965__$1 = state_45965;
var statearr_45967_46099 = state_45965__$1;
(statearr_45967_46099[(2)] = null);

(statearr_45967_46099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (2))){
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45965__$1,(4),jobs);
} else {
if((state_val_45966 === (3))){
var inst_45963 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45965__$1,inst_45963);
} else {
if((state_val_45966 === (4))){
var inst_45955 = (state_45965[(2)]);
var inst_45956 = async.call(null,inst_45955);
var state_45965__$1 = state_45965;
if(cljs.core.truth_(inst_45956)){
var statearr_45968_46100 = state_45965__$1;
(statearr_45968_46100[(1)] = (5));

} else {
var statearr_45969_46101 = state_45965__$1;
(statearr_45969_46101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (5))){
var state_45965__$1 = state_45965;
var statearr_45970_46102 = state_45965__$1;
(statearr_45970_46102[(2)] = null);

(statearr_45970_46102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (6))){
var state_45965__$1 = state_45965;
var statearr_45971_46103 = state_45965__$1;
(statearr_45971_46103[(2)] = null);

(statearr_45971_46103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (7))){
var inst_45961 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
var statearr_45972_46104 = state_45965__$1;
(statearr_45972_46104[(2)] = inst_45961);

(statearr_45972_46104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46085,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
;
return ((function (__46085,switch__45671__auto__,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_45973 = [null,null,null,null,null,null,null];
(statearr_45973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__);

(statearr_45973[(1)] = (1));

return statearr_45973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1 = (function (state_45965){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_45965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e45974){if((e45974 instanceof Object)){
var ex__45675__auto__ = e45974;
var statearr_45975_46105 = state_45965;
(statearr_45975_46105[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46106 = state_45965;
state_45965 = G__46106;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = function(state_45965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1.call(this,state_45965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__;
})()
;})(__46085,switch__45671__auto__,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
})();
var state__45761__auto__ = (function (){var statearr_45976 = f__45760__auto__.call(null);
(statearr_45976[(6)] = c__45759__auto___46098);

return statearr_45976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(__46085,c__45759__auto___46098,G__45928_46086,G__45928_46087__$1,n__40550__auto___46084,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45928_46087__$1)].join('')));

}

var G__46107 = (__46085 + (1));
__46085 = G__46107;
continue;
} else {
}
break;
}

var c__45759__auto___46108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46108,jobs,results,process,async){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46108,jobs,results,process,async){
return (function (state_45998){
var state_val_45999 = (state_45998[(1)]);
if((state_val_45999 === (1))){
var state_45998__$1 = state_45998;
var statearr_46000_46109 = state_45998__$1;
(statearr_46000_46109[(2)] = null);

(statearr_46000_46109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (2))){
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45998__$1,(4),from);
} else {
if((state_val_45999 === (3))){
var inst_45996 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45998__$1,inst_45996);
} else {
if((state_val_45999 === (4))){
var inst_45979 = (state_45998[(7)]);
var inst_45979__$1 = (state_45998[(2)]);
var inst_45980 = (inst_45979__$1 == null);
var state_45998__$1 = (function (){var statearr_46001 = state_45998;
(statearr_46001[(7)] = inst_45979__$1);

return statearr_46001;
})();
if(cljs.core.truth_(inst_45980)){
var statearr_46002_46110 = state_45998__$1;
(statearr_46002_46110[(1)] = (5));

} else {
var statearr_46003_46111 = state_45998__$1;
(statearr_46003_46111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (5))){
var inst_45982 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45998__$1 = state_45998;
var statearr_46004_46112 = state_45998__$1;
(statearr_46004_46112[(2)] = inst_45982);

(statearr_46004_46112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (6))){
var inst_45984 = (state_45998[(8)]);
var inst_45979 = (state_45998[(7)]);
var inst_45984__$1 = cljs.core.async.chan.call(null,(1));
var inst_45985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45986 = [inst_45979,inst_45984__$1];
var inst_45987 = (new cljs.core.PersistentVector(null,2,(5),inst_45985,inst_45986,null));
var state_45998__$1 = (function (){var statearr_46005 = state_45998;
(statearr_46005[(8)] = inst_45984__$1);

return statearr_46005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45998__$1,(8),jobs,inst_45987);
} else {
if((state_val_45999 === (7))){
var inst_45994 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46006_46113 = state_45998__$1;
(statearr_46006_46113[(2)] = inst_45994);

(statearr_46006_46113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (8))){
var inst_45984 = (state_45998[(8)]);
var inst_45989 = (state_45998[(2)]);
var state_45998__$1 = (function (){var statearr_46007 = state_45998;
(statearr_46007[(9)] = inst_45989);

return statearr_46007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45998__$1,(9),results,inst_45984);
} else {
if((state_val_45999 === (9))){
var inst_45991 = (state_45998[(2)]);
var state_45998__$1 = (function (){var statearr_46008 = state_45998;
(statearr_46008[(10)] = inst_45991);

return statearr_46008;
})();
var statearr_46009_46114 = state_45998__$1;
(statearr_46009_46114[(2)] = null);

(statearr_46009_46114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___46108,jobs,results,process,async))
;
return ((function (switch__45671__auto__,c__45759__auto___46108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_46010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__);

(statearr_46010[(1)] = (1));

return statearr_46010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1 = (function (state_45998){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_45998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46011){if((e46011 instanceof Object)){
var ex__45675__auto__ = e46011;
var statearr_46012_46115 = state_45998;
(statearr_46012_46115[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46116 = state_45998;
state_45998 = G__46116;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = function(state_45998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1.call(this,state_45998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46108,jobs,results,process,async))
})();
var state__45761__auto__ = (function (){var statearr_46013 = f__45760__auto__.call(null);
(statearr_46013[(6)] = c__45759__auto___46108);

return statearr_46013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46108,jobs,results,process,async))
);


var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__,jobs,results,process,async){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__,jobs,results,process,async){
return (function (state_46051){
var state_val_46052 = (state_46051[(1)]);
if((state_val_46052 === (7))){
var inst_46047 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46053_46117 = state_46051__$1;
(statearr_46053_46117[(2)] = inst_46047);

(statearr_46053_46117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (20))){
var state_46051__$1 = state_46051;
var statearr_46054_46118 = state_46051__$1;
(statearr_46054_46118[(2)] = null);

(statearr_46054_46118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (1))){
var state_46051__$1 = state_46051;
var statearr_46055_46119 = state_46051__$1;
(statearr_46055_46119[(2)] = null);

(statearr_46055_46119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (4))){
var inst_46016 = (state_46051[(7)]);
var inst_46016__$1 = (state_46051[(2)]);
var inst_46017 = (inst_46016__$1 == null);
var state_46051__$1 = (function (){var statearr_46056 = state_46051;
(statearr_46056[(7)] = inst_46016__$1);

return statearr_46056;
})();
if(cljs.core.truth_(inst_46017)){
var statearr_46057_46120 = state_46051__$1;
(statearr_46057_46120[(1)] = (5));

} else {
var statearr_46058_46121 = state_46051__$1;
(statearr_46058_46121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (15))){
var inst_46029 = (state_46051[(8)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46051__$1,(18),to,inst_46029);
} else {
if((state_val_46052 === (21))){
var inst_46042 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46059_46122 = state_46051__$1;
(statearr_46059_46122[(2)] = inst_46042);

(statearr_46059_46122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (13))){
var inst_46044 = (state_46051[(2)]);
var state_46051__$1 = (function (){var statearr_46060 = state_46051;
(statearr_46060[(9)] = inst_46044);

return statearr_46060;
})();
var statearr_46061_46123 = state_46051__$1;
(statearr_46061_46123[(2)] = null);

(statearr_46061_46123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (6))){
var inst_46016 = (state_46051[(7)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46051__$1,(11),inst_46016);
} else {
if((state_val_46052 === (17))){
var inst_46037 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
if(cljs.core.truth_(inst_46037)){
var statearr_46062_46124 = state_46051__$1;
(statearr_46062_46124[(1)] = (19));

} else {
var statearr_46063_46125 = state_46051__$1;
(statearr_46063_46125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (3))){
var inst_46049 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46051__$1,inst_46049);
} else {
if((state_val_46052 === (12))){
var inst_46026 = (state_46051[(10)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46051__$1,(14),inst_46026);
} else {
if((state_val_46052 === (2))){
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46051__$1,(4),results);
} else {
if((state_val_46052 === (19))){
var state_46051__$1 = state_46051;
var statearr_46064_46126 = state_46051__$1;
(statearr_46064_46126[(2)] = null);

(statearr_46064_46126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (11))){
var inst_46026 = (state_46051[(2)]);
var state_46051__$1 = (function (){var statearr_46065 = state_46051;
(statearr_46065[(10)] = inst_46026);

return statearr_46065;
})();
var statearr_46066_46127 = state_46051__$1;
(statearr_46066_46127[(2)] = null);

(statearr_46066_46127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (9))){
var state_46051__$1 = state_46051;
var statearr_46067_46128 = state_46051__$1;
(statearr_46067_46128[(2)] = null);

(statearr_46067_46128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (5))){
var state_46051__$1 = state_46051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46068_46129 = state_46051__$1;
(statearr_46068_46129[(1)] = (8));

} else {
var statearr_46069_46130 = state_46051__$1;
(statearr_46069_46130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (14))){
var inst_46029 = (state_46051[(8)]);
var inst_46031 = (state_46051[(11)]);
var inst_46029__$1 = (state_46051[(2)]);
var inst_46030 = (inst_46029__$1 == null);
var inst_46031__$1 = cljs.core.not.call(null,inst_46030);
var state_46051__$1 = (function (){var statearr_46070 = state_46051;
(statearr_46070[(8)] = inst_46029__$1);

(statearr_46070[(11)] = inst_46031__$1);

return statearr_46070;
})();
if(inst_46031__$1){
var statearr_46071_46131 = state_46051__$1;
(statearr_46071_46131[(1)] = (15));

} else {
var statearr_46072_46132 = state_46051__$1;
(statearr_46072_46132[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (16))){
var inst_46031 = (state_46051[(11)]);
var state_46051__$1 = state_46051;
var statearr_46073_46133 = state_46051__$1;
(statearr_46073_46133[(2)] = inst_46031);

(statearr_46073_46133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (10))){
var inst_46023 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46074_46134 = state_46051__$1;
(statearr_46074_46134[(2)] = inst_46023);

(statearr_46074_46134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (18))){
var inst_46034 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46075_46135 = state_46051__$1;
(statearr_46075_46135[(2)] = inst_46034);

(statearr_46075_46135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (8))){
var inst_46020 = cljs.core.async.close_BANG_.call(null,to);
var state_46051__$1 = state_46051;
var statearr_46076_46136 = state_46051__$1;
(statearr_46076_46136[(2)] = inst_46020);

(statearr_46076_46136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto__,jobs,results,process,async))
;
return ((function (switch__45671__auto__,c__45759__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_46077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__);

(statearr_46077[(1)] = (1));

return statearr_46077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1 = (function (state_46051){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46078){if((e46078 instanceof Object)){
var ex__45675__auto__ = e46078;
var statearr_46079_46137 = state_46051;
(statearr_46079_46137[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46138 = state_46051;
state_46051 = G__46138;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__ = function(state_46051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1.call(this,state_46051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__,jobs,results,process,async))
})();
var state__45761__auto__ = (function (){var statearr_46080 = f__45760__auto__.call(null);
(statearr_46080[(6)] = c__45759__auto__);

return statearr_46080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__,jobs,results,process,async))
);

return c__45759__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46140 = arguments.length;
switch (G__46140) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46143 = arguments.length;
switch (G__46143) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46146 = arguments.length;
switch (G__46146) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45759__auto___46195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46195,tc,fc){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46195,tc,fc){
return (function (state_46172){
var state_val_46173 = (state_46172[(1)]);
if((state_val_46173 === (7))){
var inst_46168 = (state_46172[(2)]);
var state_46172__$1 = state_46172;
var statearr_46174_46196 = state_46172__$1;
(statearr_46174_46196[(2)] = inst_46168);

(statearr_46174_46196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (1))){
var state_46172__$1 = state_46172;
var statearr_46175_46197 = state_46172__$1;
(statearr_46175_46197[(2)] = null);

(statearr_46175_46197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (4))){
var inst_46149 = (state_46172[(7)]);
var inst_46149__$1 = (state_46172[(2)]);
var inst_46150 = (inst_46149__$1 == null);
var state_46172__$1 = (function (){var statearr_46176 = state_46172;
(statearr_46176[(7)] = inst_46149__$1);

return statearr_46176;
})();
if(cljs.core.truth_(inst_46150)){
var statearr_46177_46198 = state_46172__$1;
(statearr_46177_46198[(1)] = (5));

} else {
var statearr_46178_46199 = state_46172__$1;
(statearr_46178_46199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (13))){
var state_46172__$1 = state_46172;
var statearr_46179_46200 = state_46172__$1;
(statearr_46179_46200[(2)] = null);

(statearr_46179_46200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (6))){
var inst_46149 = (state_46172[(7)]);
var inst_46155 = p.call(null,inst_46149);
var state_46172__$1 = state_46172;
if(cljs.core.truth_(inst_46155)){
var statearr_46180_46201 = state_46172__$1;
(statearr_46180_46201[(1)] = (9));

} else {
var statearr_46181_46202 = state_46172__$1;
(statearr_46181_46202[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (3))){
var inst_46170 = (state_46172[(2)]);
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46172__$1,inst_46170);
} else {
if((state_val_46173 === (12))){
var state_46172__$1 = state_46172;
var statearr_46182_46203 = state_46172__$1;
(statearr_46182_46203[(2)] = null);

(statearr_46182_46203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (2))){
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46172__$1,(4),ch);
} else {
if((state_val_46173 === (11))){
var inst_46149 = (state_46172[(7)]);
var inst_46159 = (state_46172[(2)]);
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46172__$1,(8),inst_46159,inst_46149);
} else {
if((state_val_46173 === (9))){
var state_46172__$1 = state_46172;
var statearr_46183_46204 = state_46172__$1;
(statearr_46183_46204[(2)] = tc);

(statearr_46183_46204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (5))){
var inst_46152 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46153 = cljs.core.async.close_BANG_.call(null,fc);
var state_46172__$1 = (function (){var statearr_46184 = state_46172;
(statearr_46184[(8)] = inst_46152);

return statearr_46184;
})();
var statearr_46185_46205 = state_46172__$1;
(statearr_46185_46205[(2)] = inst_46153);

(statearr_46185_46205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (14))){
var inst_46166 = (state_46172[(2)]);
var state_46172__$1 = state_46172;
var statearr_46186_46206 = state_46172__$1;
(statearr_46186_46206[(2)] = inst_46166);

(statearr_46186_46206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (10))){
var state_46172__$1 = state_46172;
var statearr_46187_46207 = state_46172__$1;
(statearr_46187_46207[(2)] = fc);

(statearr_46187_46207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46173 === (8))){
var inst_46161 = (state_46172[(2)]);
var state_46172__$1 = state_46172;
if(cljs.core.truth_(inst_46161)){
var statearr_46188_46208 = state_46172__$1;
(statearr_46188_46208[(1)] = (12));

} else {
var statearr_46189_46209 = state_46172__$1;
(statearr_46189_46209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___46195,tc,fc))
;
return ((function (switch__45671__auto__,c__45759__auto___46195,tc,fc){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_46190 = [null,null,null,null,null,null,null,null,null];
(statearr_46190[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_46190[(1)] = (1));

return statearr_46190;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_46172){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46191){if((e46191 instanceof Object)){
var ex__45675__auto__ = e46191;
var statearr_46192_46210 = state_46172;
(statearr_46192_46210[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46211 = state_46172;
state_46172 = G__46211;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_46172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_46172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46195,tc,fc))
})();
var state__45761__auto__ = (function (){var statearr_46193 = f__45760__auto__.call(null);
(statearr_46193[(6)] = c__45759__auto___46195);

return statearr_46193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46195,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__){
return (function (state_46232){
var state_val_46233 = (state_46232[(1)]);
if((state_val_46233 === (7))){
var inst_46228 = (state_46232[(2)]);
var state_46232__$1 = state_46232;
var statearr_46234_46252 = state_46232__$1;
(statearr_46234_46252[(2)] = inst_46228);

(statearr_46234_46252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (1))){
var inst_46212 = init;
var state_46232__$1 = (function (){var statearr_46235 = state_46232;
(statearr_46235[(7)] = inst_46212);

return statearr_46235;
})();
var statearr_46236_46253 = state_46232__$1;
(statearr_46236_46253[(2)] = null);

(statearr_46236_46253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (4))){
var inst_46215 = (state_46232[(8)]);
var inst_46215__$1 = (state_46232[(2)]);
var inst_46216 = (inst_46215__$1 == null);
var state_46232__$1 = (function (){var statearr_46237 = state_46232;
(statearr_46237[(8)] = inst_46215__$1);

return statearr_46237;
})();
if(cljs.core.truth_(inst_46216)){
var statearr_46238_46254 = state_46232__$1;
(statearr_46238_46254[(1)] = (5));

} else {
var statearr_46239_46255 = state_46232__$1;
(statearr_46239_46255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (6))){
var inst_46215 = (state_46232[(8)]);
var inst_46212 = (state_46232[(7)]);
var inst_46219 = (state_46232[(9)]);
var inst_46219__$1 = f.call(null,inst_46212,inst_46215);
var inst_46220 = cljs.core.reduced_QMARK_.call(null,inst_46219__$1);
var state_46232__$1 = (function (){var statearr_46240 = state_46232;
(statearr_46240[(9)] = inst_46219__$1);

return statearr_46240;
})();
if(inst_46220){
var statearr_46241_46256 = state_46232__$1;
(statearr_46241_46256[(1)] = (8));

} else {
var statearr_46242_46257 = state_46232__$1;
(statearr_46242_46257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (3))){
var inst_46230 = (state_46232[(2)]);
var state_46232__$1 = state_46232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46232__$1,inst_46230);
} else {
if((state_val_46233 === (2))){
var state_46232__$1 = state_46232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46232__$1,(4),ch);
} else {
if((state_val_46233 === (9))){
var inst_46219 = (state_46232[(9)]);
var inst_46212 = inst_46219;
var state_46232__$1 = (function (){var statearr_46243 = state_46232;
(statearr_46243[(7)] = inst_46212);

return statearr_46243;
})();
var statearr_46244_46258 = state_46232__$1;
(statearr_46244_46258[(2)] = null);

(statearr_46244_46258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (5))){
var inst_46212 = (state_46232[(7)]);
var state_46232__$1 = state_46232;
var statearr_46245_46259 = state_46232__$1;
(statearr_46245_46259[(2)] = inst_46212);

(statearr_46245_46259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (10))){
var inst_46226 = (state_46232[(2)]);
var state_46232__$1 = state_46232;
var statearr_46246_46260 = state_46232__$1;
(statearr_46246_46260[(2)] = inst_46226);

(statearr_46246_46260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46233 === (8))){
var inst_46219 = (state_46232[(9)]);
var inst_46222 = cljs.core.deref.call(null,inst_46219);
var state_46232__$1 = state_46232;
var statearr_46247_46261 = state_46232__$1;
(statearr_46247_46261[(2)] = inst_46222);

(statearr_46247_46261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45672__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45672__auto____0 = (function (){
var statearr_46248 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46248[(0)] = cljs$core$async$reduce_$_state_machine__45672__auto__);

(statearr_46248[(1)] = (1));

return statearr_46248;
});
var cljs$core$async$reduce_$_state_machine__45672__auto____1 = (function (state_46232){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46249){if((e46249 instanceof Object)){
var ex__45675__auto__ = e46249;
var statearr_46250_46262 = state_46232;
(statearr_46250_46262[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46263 = state_46232;
state_46232 = G__46263;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45672__auto__ = function(state_46232){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45672__auto____1.call(this,state_46232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45672__auto____0;
cljs$core$async$reduce_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45672__auto____1;
return cljs$core$async$reduce_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__))
})();
var state__45761__auto__ = (function (){var statearr_46251 = f__45760__auto__.call(null);
(statearr_46251[(6)] = c__45759__auto__);

return statearr_46251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__))
);

return c__45759__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__,f__$1){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__,f__$1){
return (function (state_46269){
var state_val_46270 = (state_46269[(1)]);
if((state_val_46270 === (1))){
var inst_46264 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46269__$1 = state_46269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46269__$1,(2),inst_46264);
} else {
if((state_val_46270 === (2))){
var inst_46266 = (state_46269[(2)]);
var inst_46267 = f__$1.call(null,inst_46266);
var state_46269__$1 = state_46269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46269__$1,inst_46267);
} else {
return null;
}
}
});})(c__45759__auto__,f__$1))
;
return ((function (switch__45671__auto__,c__45759__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45672__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45672__auto____0 = (function (){
var statearr_46271 = [null,null,null,null,null,null,null];
(statearr_46271[(0)] = cljs$core$async$transduce_$_state_machine__45672__auto__);

(statearr_46271[(1)] = (1));

return statearr_46271;
});
var cljs$core$async$transduce_$_state_machine__45672__auto____1 = (function (state_46269){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46272){if((e46272 instanceof Object)){
var ex__45675__auto__ = e46272;
var statearr_46273_46275 = state_46269;
(statearr_46273_46275[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46276 = state_46269;
state_46269 = G__46276;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45672__auto__ = function(state_46269){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45672__auto____1.call(this,state_46269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45672__auto____0;
cljs$core$async$transduce_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45672__auto____1;
return cljs$core$async$transduce_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__,f__$1))
})();
var state__45761__auto__ = (function (){var statearr_46274 = f__45760__auto__.call(null);
(statearr_46274[(6)] = c__45759__auto__);

return statearr_46274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__,f__$1))
);

return c__45759__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46278 = arguments.length;
switch (G__46278) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__){
return (function (state_46303){
var state_val_46304 = (state_46303[(1)]);
if((state_val_46304 === (7))){
var inst_46285 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46305_46326 = state_46303__$1;
(statearr_46305_46326[(2)] = inst_46285);

(statearr_46305_46326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (1))){
var inst_46279 = cljs.core.seq.call(null,coll);
var inst_46280 = inst_46279;
var state_46303__$1 = (function (){var statearr_46306 = state_46303;
(statearr_46306[(7)] = inst_46280);

return statearr_46306;
})();
var statearr_46307_46327 = state_46303__$1;
(statearr_46307_46327[(2)] = null);

(statearr_46307_46327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (4))){
var inst_46280 = (state_46303[(7)]);
var inst_46283 = cljs.core.first.call(null,inst_46280);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46303__$1,(7),ch,inst_46283);
} else {
if((state_val_46304 === (13))){
var inst_46297 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46308_46328 = state_46303__$1;
(statearr_46308_46328[(2)] = inst_46297);

(statearr_46308_46328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (6))){
var inst_46288 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
if(cljs.core.truth_(inst_46288)){
var statearr_46309_46329 = state_46303__$1;
(statearr_46309_46329[(1)] = (8));

} else {
var statearr_46310_46330 = state_46303__$1;
(statearr_46310_46330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (3))){
var inst_46301 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46303__$1,inst_46301);
} else {
if((state_val_46304 === (12))){
var state_46303__$1 = state_46303;
var statearr_46311_46331 = state_46303__$1;
(statearr_46311_46331[(2)] = null);

(statearr_46311_46331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (2))){
var inst_46280 = (state_46303[(7)]);
var state_46303__$1 = state_46303;
if(cljs.core.truth_(inst_46280)){
var statearr_46312_46332 = state_46303__$1;
(statearr_46312_46332[(1)] = (4));

} else {
var statearr_46313_46333 = state_46303__$1;
(statearr_46313_46333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (11))){
var inst_46294 = cljs.core.async.close_BANG_.call(null,ch);
var state_46303__$1 = state_46303;
var statearr_46314_46334 = state_46303__$1;
(statearr_46314_46334[(2)] = inst_46294);

(statearr_46314_46334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (9))){
var state_46303__$1 = state_46303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46315_46335 = state_46303__$1;
(statearr_46315_46335[(1)] = (11));

} else {
var statearr_46316_46336 = state_46303__$1;
(statearr_46316_46336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (5))){
var inst_46280 = (state_46303[(7)]);
var state_46303__$1 = state_46303;
var statearr_46317_46337 = state_46303__$1;
(statearr_46317_46337[(2)] = inst_46280);

(statearr_46317_46337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (10))){
var inst_46299 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46318_46338 = state_46303__$1;
(statearr_46318_46338[(2)] = inst_46299);

(statearr_46318_46338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (8))){
var inst_46280 = (state_46303[(7)]);
var inst_46290 = cljs.core.next.call(null,inst_46280);
var inst_46280__$1 = inst_46290;
var state_46303__$1 = (function (){var statearr_46319 = state_46303;
(statearr_46319[(7)] = inst_46280__$1);

return statearr_46319;
})();
var statearr_46320_46339 = state_46303__$1;
(statearr_46320_46339[(2)] = null);

(statearr_46320_46339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_46321 = [null,null,null,null,null,null,null,null];
(statearr_46321[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_46321[(1)] = (1));

return statearr_46321;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_46303){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46322){if((e46322 instanceof Object)){
var ex__45675__auto__ = e46322;
var statearr_46323_46340 = state_46303;
(statearr_46323_46340[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46341 = state_46303;
state_46303 = G__46341;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_46303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_46303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__))
})();
var state__45761__auto__ = (function (){var statearr_46324 = f__45760__auto__.call(null);
(statearr_46324[(6)] = c__45759__auto__);

return statearr_46324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__))
);

return c__45759__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__40293__auto__ = (((_ == null))?null:_);
var m__40294__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,_);
} else {
var m__40294__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__40294__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,ch);
} else {
var m__40294__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m);
} else {
var m__40294__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46342 = (function (ch,cs,meta46343){
this.ch = ch;
this.cs = cs;
this.meta46343 = meta46343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46344,meta46343__$1){
var self__ = this;
var _46344__$1 = this;
return (new cljs.core.async.t_cljs$core$async46342(self__.ch,self__.cs,meta46343__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46344){
var self__ = this;
var _46344__$1 = this;
return self__.meta46343;
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46343","meta46343",869076611,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46342";

cljs.core.async.t_cljs$core$async46342.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async46342");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46342 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46342(ch__$1,cs__$1,meta46343){
return (new cljs.core.async.t_cljs$core$async46342(ch__$1,cs__$1,meta46343));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46342(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45759__auto___46564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46564,cs,m,dchan,dctr,done){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46564,cs,m,dchan,dctr,done){
return (function (state_46479){
var state_val_46480 = (state_46479[(1)]);
if((state_val_46480 === (7))){
var inst_46475 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46481_46565 = state_46479__$1;
(statearr_46481_46565[(2)] = inst_46475);

(statearr_46481_46565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (20))){
var inst_46378 = (state_46479[(7)]);
var inst_46390 = cljs.core.first.call(null,inst_46378);
var inst_46391 = cljs.core.nth.call(null,inst_46390,(0),null);
var inst_46392 = cljs.core.nth.call(null,inst_46390,(1),null);
var state_46479__$1 = (function (){var statearr_46482 = state_46479;
(statearr_46482[(8)] = inst_46391);

return statearr_46482;
})();
if(cljs.core.truth_(inst_46392)){
var statearr_46483_46566 = state_46479__$1;
(statearr_46483_46566[(1)] = (22));

} else {
var statearr_46484_46567 = state_46479__$1;
(statearr_46484_46567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (27))){
var inst_46420 = (state_46479[(9)]);
var inst_46347 = (state_46479[(10)]);
var inst_46427 = (state_46479[(11)]);
var inst_46422 = (state_46479[(12)]);
var inst_46427__$1 = cljs.core._nth.call(null,inst_46420,inst_46422);
var inst_46428 = cljs.core.async.put_BANG_.call(null,inst_46427__$1,inst_46347,done);
var state_46479__$1 = (function (){var statearr_46485 = state_46479;
(statearr_46485[(11)] = inst_46427__$1);

return statearr_46485;
})();
if(cljs.core.truth_(inst_46428)){
var statearr_46486_46568 = state_46479__$1;
(statearr_46486_46568[(1)] = (30));

} else {
var statearr_46487_46569 = state_46479__$1;
(statearr_46487_46569[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (1))){
var state_46479__$1 = state_46479;
var statearr_46488_46570 = state_46479__$1;
(statearr_46488_46570[(2)] = null);

(statearr_46488_46570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (24))){
var inst_46378 = (state_46479[(7)]);
var inst_46397 = (state_46479[(2)]);
var inst_46398 = cljs.core.next.call(null,inst_46378);
var inst_46356 = inst_46398;
var inst_46357 = null;
var inst_46358 = (0);
var inst_46359 = (0);
var state_46479__$1 = (function (){var statearr_46489 = state_46479;
(statearr_46489[(13)] = inst_46359);

(statearr_46489[(14)] = inst_46357);

(statearr_46489[(15)] = inst_46356);

(statearr_46489[(16)] = inst_46358);

(statearr_46489[(17)] = inst_46397);

return statearr_46489;
})();
var statearr_46490_46571 = state_46479__$1;
(statearr_46490_46571[(2)] = null);

(statearr_46490_46571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (39))){
var state_46479__$1 = state_46479;
var statearr_46494_46572 = state_46479__$1;
(statearr_46494_46572[(2)] = null);

(statearr_46494_46572[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (4))){
var inst_46347 = (state_46479[(10)]);
var inst_46347__$1 = (state_46479[(2)]);
var inst_46348 = (inst_46347__$1 == null);
var state_46479__$1 = (function (){var statearr_46495 = state_46479;
(statearr_46495[(10)] = inst_46347__$1);

return statearr_46495;
})();
if(cljs.core.truth_(inst_46348)){
var statearr_46496_46573 = state_46479__$1;
(statearr_46496_46573[(1)] = (5));

} else {
var statearr_46497_46574 = state_46479__$1;
(statearr_46497_46574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (15))){
var inst_46359 = (state_46479[(13)]);
var inst_46357 = (state_46479[(14)]);
var inst_46356 = (state_46479[(15)]);
var inst_46358 = (state_46479[(16)]);
var inst_46374 = (state_46479[(2)]);
var inst_46375 = (inst_46359 + (1));
var tmp46491 = inst_46357;
var tmp46492 = inst_46356;
var tmp46493 = inst_46358;
var inst_46356__$1 = tmp46492;
var inst_46357__$1 = tmp46491;
var inst_46358__$1 = tmp46493;
var inst_46359__$1 = inst_46375;
var state_46479__$1 = (function (){var statearr_46498 = state_46479;
(statearr_46498[(13)] = inst_46359__$1);

(statearr_46498[(18)] = inst_46374);

(statearr_46498[(14)] = inst_46357__$1);

(statearr_46498[(15)] = inst_46356__$1);

(statearr_46498[(16)] = inst_46358__$1);

return statearr_46498;
})();
var statearr_46499_46575 = state_46479__$1;
(statearr_46499_46575[(2)] = null);

(statearr_46499_46575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (21))){
var inst_46401 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46503_46576 = state_46479__$1;
(statearr_46503_46576[(2)] = inst_46401);

(statearr_46503_46576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (31))){
var inst_46427 = (state_46479[(11)]);
var inst_46431 = done.call(null,null);
var inst_46432 = cljs.core.async.untap_STAR_.call(null,m,inst_46427);
var state_46479__$1 = (function (){var statearr_46504 = state_46479;
(statearr_46504[(19)] = inst_46431);

return statearr_46504;
})();
var statearr_46505_46577 = state_46479__$1;
(statearr_46505_46577[(2)] = inst_46432);

(statearr_46505_46577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (32))){
var inst_46420 = (state_46479[(9)]);
var inst_46419 = (state_46479[(20)]);
var inst_46421 = (state_46479[(21)]);
var inst_46422 = (state_46479[(12)]);
var inst_46434 = (state_46479[(2)]);
var inst_46435 = (inst_46422 + (1));
var tmp46500 = inst_46420;
var tmp46501 = inst_46419;
var tmp46502 = inst_46421;
var inst_46419__$1 = tmp46501;
var inst_46420__$1 = tmp46500;
var inst_46421__$1 = tmp46502;
var inst_46422__$1 = inst_46435;
var state_46479__$1 = (function (){var statearr_46506 = state_46479;
(statearr_46506[(9)] = inst_46420__$1);

(statearr_46506[(20)] = inst_46419__$1);

(statearr_46506[(21)] = inst_46421__$1);

(statearr_46506[(22)] = inst_46434);

(statearr_46506[(12)] = inst_46422__$1);

return statearr_46506;
})();
var statearr_46507_46578 = state_46479__$1;
(statearr_46507_46578[(2)] = null);

(statearr_46507_46578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (40))){
var inst_46447 = (state_46479[(23)]);
var inst_46451 = done.call(null,null);
var inst_46452 = cljs.core.async.untap_STAR_.call(null,m,inst_46447);
var state_46479__$1 = (function (){var statearr_46508 = state_46479;
(statearr_46508[(24)] = inst_46451);

return statearr_46508;
})();
var statearr_46509_46579 = state_46479__$1;
(statearr_46509_46579[(2)] = inst_46452);

(statearr_46509_46579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (33))){
var inst_46438 = (state_46479[(25)]);
var inst_46440 = cljs.core.chunked_seq_QMARK_.call(null,inst_46438);
var state_46479__$1 = state_46479;
if(inst_46440){
var statearr_46510_46580 = state_46479__$1;
(statearr_46510_46580[(1)] = (36));

} else {
var statearr_46511_46581 = state_46479__$1;
(statearr_46511_46581[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (13))){
var inst_46368 = (state_46479[(26)]);
var inst_46371 = cljs.core.async.close_BANG_.call(null,inst_46368);
var state_46479__$1 = state_46479;
var statearr_46512_46582 = state_46479__$1;
(statearr_46512_46582[(2)] = inst_46371);

(statearr_46512_46582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (22))){
var inst_46391 = (state_46479[(8)]);
var inst_46394 = cljs.core.async.close_BANG_.call(null,inst_46391);
var state_46479__$1 = state_46479;
var statearr_46513_46583 = state_46479__$1;
(statearr_46513_46583[(2)] = inst_46394);

(statearr_46513_46583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (36))){
var inst_46438 = (state_46479[(25)]);
var inst_46442 = cljs.core.chunk_first.call(null,inst_46438);
var inst_46443 = cljs.core.chunk_rest.call(null,inst_46438);
var inst_46444 = cljs.core.count.call(null,inst_46442);
var inst_46419 = inst_46443;
var inst_46420 = inst_46442;
var inst_46421 = inst_46444;
var inst_46422 = (0);
var state_46479__$1 = (function (){var statearr_46514 = state_46479;
(statearr_46514[(9)] = inst_46420);

(statearr_46514[(20)] = inst_46419);

(statearr_46514[(21)] = inst_46421);

(statearr_46514[(12)] = inst_46422);

return statearr_46514;
})();
var statearr_46515_46584 = state_46479__$1;
(statearr_46515_46584[(2)] = null);

(statearr_46515_46584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (41))){
var inst_46438 = (state_46479[(25)]);
var inst_46454 = (state_46479[(2)]);
var inst_46455 = cljs.core.next.call(null,inst_46438);
var inst_46419 = inst_46455;
var inst_46420 = null;
var inst_46421 = (0);
var inst_46422 = (0);
var state_46479__$1 = (function (){var statearr_46516 = state_46479;
(statearr_46516[(9)] = inst_46420);

(statearr_46516[(27)] = inst_46454);

(statearr_46516[(20)] = inst_46419);

(statearr_46516[(21)] = inst_46421);

(statearr_46516[(12)] = inst_46422);

return statearr_46516;
})();
var statearr_46517_46585 = state_46479__$1;
(statearr_46517_46585[(2)] = null);

(statearr_46517_46585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (43))){
var state_46479__$1 = state_46479;
var statearr_46518_46586 = state_46479__$1;
(statearr_46518_46586[(2)] = null);

(statearr_46518_46586[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (29))){
var inst_46463 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46519_46587 = state_46479__$1;
(statearr_46519_46587[(2)] = inst_46463);

(statearr_46519_46587[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (44))){
var inst_46472 = (state_46479[(2)]);
var state_46479__$1 = (function (){var statearr_46520 = state_46479;
(statearr_46520[(28)] = inst_46472);

return statearr_46520;
})();
var statearr_46521_46588 = state_46479__$1;
(statearr_46521_46588[(2)] = null);

(statearr_46521_46588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (6))){
var inst_46411 = (state_46479[(29)]);
var inst_46410 = cljs.core.deref.call(null,cs);
var inst_46411__$1 = cljs.core.keys.call(null,inst_46410);
var inst_46412 = cljs.core.count.call(null,inst_46411__$1);
var inst_46413 = cljs.core.reset_BANG_.call(null,dctr,inst_46412);
var inst_46418 = cljs.core.seq.call(null,inst_46411__$1);
var inst_46419 = inst_46418;
var inst_46420 = null;
var inst_46421 = (0);
var inst_46422 = (0);
var state_46479__$1 = (function (){var statearr_46522 = state_46479;
(statearr_46522[(9)] = inst_46420);

(statearr_46522[(30)] = inst_46413);

(statearr_46522[(20)] = inst_46419);

(statearr_46522[(29)] = inst_46411__$1);

(statearr_46522[(21)] = inst_46421);

(statearr_46522[(12)] = inst_46422);

return statearr_46522;
})();
var statearr_46523_46589 = state_46479__$1;
(statearr_46523_46589[(2)] = null);

(statearr_46523_46589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (28))){
var inst_46438 = (state_46479[(25)]);
var inst_46419 = (state_46479[(20)]);
var inst_46438__$1 = cljs.core.seq.call(null,inst_46419);
var state_46479__$1 = (function (){var statearr_46524 = state_46479;
(statearr_46524[(25)] = inst_46438__$1);

return statearr_46524;
})();
if(inst_46438__$1){
var statearr_46525_46590 = state_46479__$1;
(statearr_46525_46590[(1)] = (33));

} else {
var statearr_46526_46591 = state_46479__$1;
(statearr_46526_46591[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (25))){
var inst_46421 = (state_46479[(21)]);
var inst_46422 = (state_46479[(12)]);
var inst_46424 = (inst_46422 < inst_46421);
var inst_46425 = inst_46424;
var state_46479__$1 = state_46479;
if(cljs.core.truth_(inst_46425)){
var statearr_46527_46592 = state_46479__$1;
(statearr_46527_46592[(1)] = (27));

} else {
var statearr_46528_46593 = state_46479__$1;
(statearr_46528_46593[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (34))){
var state_46479__$1 = state_46479;
var statearr_46529_46594 = state_46479__$1;
(statearr_46529_46594[(2)] = null);

(statearr_46529_46594[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (17))){
var state_46479__$1 = state_46479;
var statearr_46530_46595 = state_46479__$1;
(statearr_46530_46595[(2)] = null);

(statearr_46530_46595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (3))){
var inst_46477 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46479__$1,inst_46477);
} else {
if((state_val_46480 === (12))){
var inst_46406 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46531_46596 = state_46479__$1;
(statearr_46531_46596[(2)] = inst_46406);

(statearr_46531_46596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (2))){
var state_46479__$1 = state_46479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46479__$1,(4),ch);
} else {
if((state_val_46480 === (23))){
var state_46479__$1 = state_46479;
var statearr_46532_46597 = state_46479__$1;
(statearr_46532_46597[(2)] = null);

(statearr_46532_46597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (35))){
var inst_46461 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46533_46598 = state_46479__$1;
(statearr_46533_46598[(2)] = inst_46461);

(statearr_46533_46598[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (19))){
var inst_46378 = (state_46479[(7)]);
var inst_46382 = cljs.core.chunk_first.call(null,inst_46378);
var inst_46383 = cljs.core.chunk_rest.call(null,inst_46378);
var inst_46384 = cljs.core.count.call(null,inst_46382);
var inst_46356 = inst_46383;
var inst_46357 = inst_46382;
var inst_46358 = inst_46384;
var inst_46359 = (0);
var state_46479__$1 = (function (){var statearr_46534 = state_46479;
(statearr_46534[(13)] = inst_46359);

(statearr_46534[(14)] = inst_46357);

(statearr_46534[(15)] = inst_46356);

(statearr_46534[(16)] = inst_46358);

return statearr_46534;
})();
var statearr_46535_46599 = state_46479__$1;
(statearr_46535_46599[(2)] = null);

(statearr_46535_46599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (11))){
var inst_46378 = (state_46479[(7)]);
var inst_46356 = (state_46479[(15)]);
var inst_46378__$1 = cljs.core.seq.call(null,inst_46356);
var state_46479__$1 = (function (){var statearr_46536 = state_46479;
(statearr_46536[(7)] = inst_46378__$1);

return statearr_46536;
})();
if(inst_46378__$1){
var statearr_46537_46600 = state_46479__$1;
(statearr_46537_46600[(1)] = (16));

} else {
var statearr_46538_46601 = state_46479__$1;
(statearr_46538_46601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (9))){
var inst_46408 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46539_46602 = state_46479__$1;
(statearr_46539_46602[(2)] = inst_46408);

(statearr_46539_46602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (5))){
var inst_46354 = cljs.core.deref.call(null,cs);
var inst_46355 = cljs.core.seq.call(null,inst_46354);
var inst_46356 = inst_46355;
var inst_46357 = null;
var inst_46358 = (0);
var inst_46359 = (0);
var state_46479__$1 = (function (){var statearr_46540 = state_46479;
(statearr_46540[(13)] = inst_46359);

(statearr_46540[(14)] = inst_46357);

(statearr_46540[(15)] = inst_46356);

(statearr_46540[(16)] = inst_46358);

return statearr_46540;
})();
var statearr_46541_46603 = state_46479__$1;
(statearr_46541_46603[(2)] = null);

(statearr_46541_46603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (14))){
var state_46479__$1 = state_46479;
var statearr_46542_46604 = state_46479__$1;
(statearr_46542_46604[(2)] = null);

(statearr_46542_46604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (45))){
var inst_46469 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46543_46605 = state_46479__$1;
(statearr_46543_46605[(2)] = inst_46469);

(statearr_46543_46605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (26))){
var inst_46411 = (state_46479[(29)]);
var inst_46465 = (state_46479[(2)]);
var inst_46466 = cljs.core.seq.call(null,inst_46411);
var state_46479__$1 = (function (){var statearr_46544 = state_46479;
(statearr_46544[(31)] = inst_46465);

return statearr_46544;
})();
if(inst_46466){
var statearr_46545_46606 = state_46479__$1;
(statearr_46545_46606[(1)] = (42));

} else {
var statearr_46546_46607 = state_46479__$1;
(statearr_46546_46607[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (16))){
var inst_46378 = (state_46479[(7)]);
var inst_46380 = cljs.core.chunked_seq_QMARK_.call(null,inst_46378);
var state_46479__$1 = state_46479;
if(inst_46380){
var statearr_46547_46608 = state_46479__$1;
(statearr_46547_46608[(1)] = (19));

} else {
var statearr_46548_46609 = state_46479__$1;
(statearr_46548_46609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (38))){
var inst_46458 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46549_46610 = state_46479__$1;
(statearr_46549_46610[(2)] = inst_46458);

(statearr_46549_46610[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (30))){
var state_46479__$1 = state_46479;
var statearr_46550_46611 = state_46479__$1;
(statearr_46550_46611[(2)] = null);

(statearr_46550_46611[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (10))){
var inst_46359 = (state_46479[(13)]);
var inst_46357 = (state_46479[(14)]);
var inst_46367 = cljs.core._nth.call(null,inst_46357,inst_46359);
var inst_46368 = cljs.core.nth.call(null,inst_46367,(0),null);
var inst_46369 = cljs.core.nth.call(null,inst_46367,(1),null);
var state_46479__$1 = (function (){var statearr_46551 = state_46479;
(statearr_46551[(26)] = inst_46368);

return statearr_46551;
})();
if(cljs.core.truth_(inst_46369)){
var statearr_46552_46612 = state_46479__$1;
(statearr_46552_46612[(1)] = (13));

} else {
var statearr_46553_46613 = state_46479__$1;
(statearr_46553_46613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (18))){
var inst_46404 = (state_46479[(2)]);
var state_46479__$1 = state_46479;
var statearr_46554_46614 = state_46479__$1;
(statearr_46554_46614[(2)] = inst_46404);

(statearr_46554_46614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (42))){
var state_46479__$1 = state_46479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46479__$1,(45),dchan);
} else {
if((state_val_46480 === (37))){
var inst_46447 = (state_46479[(23)]);
var inst_46438 = (state_46479[(25)]);
var inst_46347 = (state_46479[(10)]);
var inst_46447__$1 = cljs.core.first.call(null,inst_46438);
var inst_46448 = cljs.core.async.put_BANG_.call(null,inst_46447__$1,inst_46347,done);
var state_46479__$1 = (function (){var statearr_46555 = state_46479;
(statearr_46555[(23)] = inst_46447__$1);

return statearr_46555;
})();
if(cljs.core.truth_(inst_46448)){
var statearr_46556_46615 = state_46479__$1;
(statearr_46556_46615[(1)] = (39));

} else {
var statearr_46557_46616 = state_46479__$1;
(statearr_46557_46616[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46480 === (8))){
var inst_46359 = (state_46479[(13)]);
var inst_46358 = (state_46479[(16)]);
var inst_46361 = (inst_46359 < inst_46358);
var inst_46362 = inst_46361;
var state_46479__$1 = state_46479;
if(cljs.core.truth_(inst_46362)){
var statearr_46558_46617 = state_46479__$1;
(statearr_46558_46617[(1)] = (10));

} else {
var statearr_46559_46618 = state_46479__$1;
(statearr_46559_46618[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___46564,cs,m,dchan,dctr,done))
;
return ((function (switch__45671__auto__,c__45759__auto___46564,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45672__auto__ = null;
var cljs$core$async$mult_$_state_machine__45672__auto____0 = (function (){
var statearr_46560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46560[(0)] = cljs$core$async$mult_$_state_machine__45672__auto__);

(statearr_46560[(1)] = (1));

return statearr_46560;
});
var cljs$core$async$mult_$_state_machine__45672__auto____1 = (function (state_46479){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46561){if((e46561 instanceof Object)){
var ex__45675__auto__ = e46561;
var statearr_46562_46619 = state_46479;
(statearr_46562_46619[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46620 = state_46479;
state_46479 = G__46620;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45672__auto__ = function(state_46479){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45672__auto____1.call(this,state_46479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45672__auto____0;
cljs$core$async$mult_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45672__auto____1;
return cljs$core$async$mult_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46564,cs,m,dchan,dctr,done))
})();
var state__45761__auto__ = (function (){var statearr_46563 = f__45760__auto__.call(null);
(statearr_46563[(6)] = c__45759__auto___46564);

return statearr_46563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46564,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46622 = arguments.length;
switch (G__46622) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,ch);
} else {
var m__40294__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,ch);
} else {
var m__40294__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m);
} else {
var m__40294__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,state_map);
} else {
var m__40294__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__40293__auto__ = (((m == null))?null:m);
var m__40294__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,m,mode);
} else {
var m__40294__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__40781__auto__ = [];
var len__40774__auto___46634 = arguments.length;
var i__40775__auto___46635 = (0);
while(true){
if((i__40775__auto___46635 < len__40774__auto___46634)){
args__40781__auto__.push((arguments[i__40775__auto___46635]));

var G__46636 = (i__40775__auto___46635 + (1));
i__40775__auto___46635 = G__46636;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((3) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40782__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46628){
var map__46629 = p__46628;
var map__46629__$1 = ((((!((map__46629 == null)))?((((map__46629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46629):map__46629);
var opts = map__46629__$1;
var statearr_46631_46637 = state;
(statearr_46631_46637[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46629,map__46629__$1,opts){
return (function (val){
var statearr_46632_46638 = state;
(statearr_46632_46638[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46629,map__46629__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46633_46639 = state;
(statearr_46633_46639[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46624){
var G__46625 = cljs.core.first.call(null,seq46624);
var seq46624__$1 = cljs.core.next.call(null,seq46624);
var G__46626 = cljs.core.first.call(null,seq46624__$1);
var seq46624__$2 = cljs.core.next.call(null,seq46624__$1);
var G__46627 = cljs.core.first.call(null,seq46624__$2);
var seq46624__$3 = cljs.core.next.call(null,seq46624__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46625,G__46626,G__46627,seq46624__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46640 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46641){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46641 = meta46641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46642,meta46641__$1){
var self__ = this;
var _46642__$1 = this;
return (new cljs.core.async.t_cljs$core$async46640(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46641__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46642){
var self__ = this;
var _46642__$1 = this;
return self__.meta46641;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46641","meta46641",-908070755,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46640";

cljs.core.async.t_cljs$core$async46640.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async46640");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46640 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46640(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46641){
return (new cljs.core.async.t_cljs$core$async46640(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46641));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46640(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45759__auto___46804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46744){
var state_val_46745 = (state_46744[(1)]);
if((state_val_46745 === (7))){
var inst_46659 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46746_46805 = state_46744__$1;
(statearr_46746_46805[(2)] = inst_46659);

(statearr_46746_46805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (20))){
var inst_46671 = (state_46744[(7)]);
var state_46744__$1 = state_46744;
var statearr_46747_46806 = state_46744__$1;
(statearr_46747_46806[(2)] = inst_46671);

(statearr_46747_46806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (27))){
var state_46744__$1 = state_46744;
var statearr_46748_46807 = state_46744__$1;
(statearr_46748_46807[(2)] = null);

(statearr_46748_46807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (1))){
var inst_46646 = (state_46744[(8)]);
var inst_46646__$1 = calc_state.call(null);
var inst_46648 = (inst_46646__$1 == null);
var inst_46649 = cljs.core.not.call(null,inst_46648);
var state_46744__$1 = (function (){var statearr_46749 = state_46744;
(statearr_46749[(8)] = inst_46646__$1);

return statearr_46749;
})();
if(inst_46649){
var statearr_46750_46808 = state_46744__$1;
(statearr_46750_46808[(1)] = (2));

} else {
var statearr_46751_46809 = state_46744__$1;
(statearr_46751_46809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (24))){
var inst_46718 = (state_46744[(9)]);
var inst_46704 = (state_46744[(10)]);
var inst_46695 = (state_46744[(11)]);
var inst_46718__$1 = inst_46695.call(null,inst_46704);
var state_46744__$1 = (function (){var statearr_46752 = state_46744;
(statearr_46752[(9)] = inst_46718__$1);

return statearr_46752;
})();
if(cljs.core.truth_(inst_46718__$1)){
var statearr_46753_46810 = state_46744__$1;
(statearr_46753_46810[(1)] = (29));

} else {
var statearr_46754_46811 = state_46744__$1;
(statearr_46754_46811[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (4))){
var inst_46662 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46662)){
var statearr_46755_46812 = state_46744__$1;
(statearr_46755_46812[(1)] = (8));

} else {
var statearr_46756_46813 = state_46744__$1;
(statearr_46756_46813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (15))){
var inst_46689 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46689)){
var statearr_46757_46814 = state_46744__$1;
(statearr_46757_46814[(1)] = (19));

} else {
var statearr_46758_46815 = state_46744__$1;
(statearr_46758_46815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (21))){
var inst_46694 = (state_46744[(12)]);
var inst_46694__$1 = (state_46744[(2)]);
var inst_46695 = cljs.core.get.call(null,inst_46694__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46696 = cljs.core.get.call(null,inst_46694__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46697 = cljs.core.get.call(null,inst_46694__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46744__$1 = (function (){var statearr_46759 = state_46744;
(statearr_46759[(13)] = inst_46696);

(statearr_46759[(12)] = inst_46694__$1);

(statearr_46759[(11)] = inst_46695);

return statearr_46759;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46744__$1,(22),inst_46697);
} else {
if((state_val_46745 === (31))){
var inst_46726 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46726)){
var statearr_46760_46816 = state_46744__$1;
(statearr_46760_46816[(1)] = (32));

} else {
var statearr_46761_46817 = state_46744__$1;
(statearr_46761_46817[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (32))){
var inst_46703 = (state_46744[(14)]);
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46744__$1,(35),out,inst_46703);
} else {
if((state_val_46745 === (33))){
var inst_46694 = (state_46744[(12)]);
var inst_46671 = inst_46694;
var state_46744__$1 = (function (){var statearr_46762 = state_46744;
(statearr_46762[(7)] = inst_46671);

return statearr_46762;
})();
var statearr_46763_46818 = state_46744__$1;
(statearr_46763_46818[(2)] = null);

(statearr_46763_46818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (13))){
var inst_46671 = (state_46744[(7)]);
var inst_46678 = inst_46671.cljs$lang$protocol_mask$partition0$;
var inst_46679 = (inst_46678 & (64));
var inst_46680 = inst_46671.cljs$core$ISeq$;
var inst_46681 = (cljs.core.PROTOCOL_SENTINEL === inst_46680);
var inst_46682 = (inst_46679) || (inst_46681);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46682)){
var statearr_46764_46819 = state_46744__$1;
(statearr_46764_46819[(1)] = (16));

} else {
var statearr_46765_46820 = state_46744__$1;
(statearr_46765_46820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (22))){
var inst_46703 = (state_46744[(14)]);
var inst_46704 = (state_46744[(10)]);
var inst_46702 = (state_46744[(2)]);
var inst_46703__$1 = cljs.core.nth.call(null,inst_46702,(0),null);
var inst_46704__$1 = cljs.core.nth.call(null,inst_46702,(1),null);
var inst_46705 = (inst_46703__$1 == null);
var inst_46706 = cljs.core._EQ_.call(null,inst_46704__$1,change);
var inst_46707 = (inst_46705) || (inst_46706);
var state_46744__$1 = (function (){var statearr_46766 = state_46744;
(statearr_46766[(14)] = inst_46703__$1);

(statearr_46766[(10)] = inst_46704__$1);

return statearr_46766;
})();
if(cljs.core.truth_(inst_46707)){
var statearr_46767_46821 = state_46744__$1;
(statearr_46767_46821[(1)] = (23));

} else {
var statearr_46768_46822 = state_46744__$1;
(statearr_46768_46822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (36))){
var inst_46694 = (state_46744[(12)]);
var inst_46671 = inst_46694;
var state_46744__$1 = (function (){var statearr_46769 = state_46744;
(statearr_46769[(7)] = inst_46671);

return statearr_46769;
})();
var statearr_46770_46823 = state_46744__$1;
(statearr_46770_46823[(2)] = null);

(statearr_46770_46823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (29))){
var inst_46718 = (state_46744[(9)]);
var state_46744__$1 = state_46744;
var statearr_46771_46824 = state_46744__$1;
(statearr_46771_46824[(2)] = inst_46718);

(statearr_46771_46824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (6))){
var state_46744__$1 = state_46744;
var statearr_46772_46825 = state_46744__$1;
(statearr_46772_46825[(2)] = false);

(statearr_46772_46825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (28))){
var inst_46714 = (state_46744[(2)]);
var inst_46715 = calc_state.call(null);
var inst_46671 = inst_46715;
var state_46744__$1 = (function (){var statearr_46773 = state_46744;
(statearr_46773[(15)] = inst_46714);

(statearr_46773[(7)] = inst_46671);

return statearr_46773;
})();
var statearr_46774_46826 = state_46744__$1;
(statearr_46774_46826[(2)] = null);

(statearr_46774_46826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (25))){
var inst_46740 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46775_46827 = state_46744__$1;
(statearr_46775_46827[(2)] = inst_46740);

(statearr_46775_46827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (34))){
var inst_46738 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46776_46828 = state_46744__$1;
(statearr_46776_46828[(2)] = inst_46738);

(statearr_46776_46828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (17))){
var state_46744__$1 = state_46744;
var statearr_46777_46829 = state_46744__$1;
(statearr_46777_46829[(2)] = false);

(statearr_46777_46829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (3))){
var state_46744__$1 = state_46744;
var statearr_46778_46830 = state_46744__$1;
(statearr_46778_46830[(2)] = false);

(statearr_46778_46830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (12))){
var inst_46742 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46744__$1,inst_46742);
} else {
if((state_val_46745 === (2))){
var inst_46646 = (state_46744[(8)]);
var inst_46651 = inst_46646.cljs$lang$protocol_mask$partition0$;
var inst_46652 = (inst_46651 & (64));
var inst_46653 = inst_46646.cljs$core$ISeq$;
var inst_46654 = (cljs.core.PROTOCOL_SENTINEL === inst_46653);
var inst_46655 = (inst_46652) || (inst_46654);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46655)){
var statearr_46779_46831 = state_46744__$1;
(statearr_46779_46831[(1)] = (5));

} else {
var statearr_46780_46832 = state_46744__$1;
(statearr_46780_46832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (23))){
var inst_46703 = (state_46744[(14)]);
var inst_46709 = (inst_46703 == null);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46709)){
var statearr_46781_46833 = state_46744__$1;
(statearr_46781_46833[(1)] = (26));

} else {
var statearr_46782_46834 = state_46744__$1;
(statearr_46782_46834[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (35))){
var inst_46729 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46729)){
var statearr_46783_46835 = state_46744__$1;
(statearr_46783_46835[(1)] = (36));

} else {
var statearr_46784_46836 = state_46744__$1;
(statearr_46784_46836[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (19))){
var inst_46671 = (state_46744[(7)]);
var inst_46691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46671);
var state_46744__$1 = state_46744;
var statearr_46785_46837 = state_46744__$1;
(statearr_46785_46837[(2)] = inst_46691);

(statearr_46785_46837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (11))){
var inst_46671 = (state_46744[(7)]);
var inst_46675 = (inst_46671 == null);
var inst_46676 = cljs.core.not.call(null,inst_46675);
var state_46744__$1 = state_46744;
if(inst_46676){
var statearr_46786_46838 = state_46744__$1;
(statearr_46786_46838[(1)] = (13));

} else {
var statearr_46787_46839 = state_46744__$1;
(statearr_46787_46839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (9))){
var inst_46646 = (state_46744[(8)]);
var state_46744__$1 = state_46744;
var statearr_46788_46840 = state_46744__$1;
(statearr_46788_46840[(2)] = inst_46646);

(statearr_46788_46840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (5))){
var state_46744__$1 = state_46744;
var statearr_46789_46841 = state_46744__$1;
(statearr_46789_46841[(2)] = true);

(statearr_46789_46841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (14))){
var state_46744__$1 = state_46744;
var statearr_46790_46842 = state_46744__$1;
(statearr_46790_46842[(2)] = false);

(statearr_46790_46842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (26))){
var inst_46704 = (state_46744[(10)]);
var inst_46711 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46704);
var state_46744__$1 = state_46744;
var statearr_46791_46843 = state_46744__$1;
(statearr_46791_46843[(2)] = inst_46711);

(statearr_46791_46843[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (16))){
var state_46744__$1 = state_46744;
var statearr_46792_46844 = state_46744__$1;
(statearr_46792_46844[(2)] = true);

(statearr_46792_46844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (38))){
var inst_46734 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46793_46845 = state_46744__$1;
(statearr_46793_46845[(2)] = inst_46734);

(statearr_46793_46845[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (30))){
var inst_46696 = (state_46744[(13)]);
var inst_46704 = (state_46744[(10)]);
var inst_46695 = (state_46744[(11)]);
var inst_46721 = cljs.core.empty_QMARK_.call(null,inst_46695);
var inst_46722 = inst_46696.call(null,inst_46704);
var inst_46723 = cljs.core.not.call(null,inst_46722);
var inst_46724 = (inst_46721) && (inst_46723);
var state_46744__$1 = state_46744;
var statearr_46794_46846 = state_46744__$1;
(statearr_46794_46846[(2)] = inst_46724);

(statearr_46794_46846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (10))){
var inst_46646 = (state_46744[(8)]);
var inst_46667 = (state_46744[(2)]);
var inst_46668 = cljs.core.get.call(null,inst_46667,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46669 = cljs.core.get.call(null,inst_46667,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46670 = cljs.core.get.call(null,inst_46667,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46671 = inst_46646;
var state_46744__$1 = (function (){var statearr_46795 = state_46744;
(statearr_46795[(16)] = inst_46670);

(statearr_46795[(17)] = inst_46669);

(statearr_46795[(18)] = inst_46668);

(statearr_46795[(7)] = inst_46671);

return statearr_46795;
})();
var statearr_46796_46847 = state_46744__$1;
(statearr_46796_46847[(2)] = null);

(statearr_46796_46847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (18))){
var inst_46686 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46797_46848 = state_46744__$1;
(statearr_46797_46848[(2)] = inst_46686);

(statearr_46797_46848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (37))){
var state_46744__$1 = state_46744;
var statearr_46798_46849 = state_46744__$1;
(statearr_46798_46849[(2)] = null);

(statearr_46798_46849[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (8))){
var inst_46646 = (state_46744[(8)]);
var inst_46664 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46646);
var state_46744__$1 = state_46744;
var statearr_46799_46850 = state_46744__$1;
(statearr_46799_46850[(2)] = inst_46664);

(statearr_46799_46850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45671__auto__,c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45672__auto__ = null;
var cljs$core$async$mix_$_state_machine__45672__auto____0 = (function (){
var statearr_46800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46800[(0)] = cljs$core$async$mix_$_state_machine__45672__auto__);

(statearr_46800[(1)] = (1));

return statearr_46800;
});
var cljs$core$async$mix_$_state_machine__45672__auto____1 = (function (state_46744){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46801){if((e46801 instanceof Object)){
var ex__45675__auto__ = e46801;
var statearr_46802_46851 = state_46744;
(statearr_46802_46851[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46852 = state_46744;
state_46744 = G__46852;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45672__auto__ = function(state_46744){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45672__auto____1.call(this,state_46744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45672__auto____0;
cljs$core$async$mix_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45672__auto____1;
return cljs$core$async$mix_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45761__auto__ = (function (){var statearr_46803 = f__45760__auto__.call(null);
(statearr_46803[(6)] = c__45759__auto___46804);

return statearr_46803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__40293__auto__ = (((p == null))?null:p);
var m__40294__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__40294__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__40293__auto__ = (((p == null))?null:p);
var m__40294__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,p,v,ch);
} else {
var m__40294__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46854 = arguments.length;
switch (G__46854) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__40293__auto__ = (((p == null))?null:p);
var m__40294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,p);
} else {
var m__40294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__40293__auto__ = (((p == null))?null:p);
var m__40294__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__40293__auto__)]);
if(!((m__40294__auto__ == null))){
return m__40294__auto__.call(null,p,v);
} else {
var m__40294__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__40294__auto____$1 == null))){
return m__40294__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46858 = arguments.length;
switch (G__46858) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__39610__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__39610__auto__,mults){
return (function (p1__46856_SHARP_){
if(cljs.core.truth_(p1__46856_SHARP_.call(null,topic))){
return p1__46856_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46856_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39610__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46859 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46860){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46860 = meta46860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46861,meta46860__$1){
var self__ = this;
var _46861__$1 = this;
return (new cljs.core.async.t_cljs$core$async46859(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46860__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46861){
var self__ = this;
var _46861__$1 = this;
return self__.meta46860;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46860","meta46860",843729830,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46859";

cljs.core.async.t_cljs$core$async46859.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async46859");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46859 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46859(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46860){
return (new cljs.core.async.t_cljs$core$async46859(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46860));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46859(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45759__auto___46979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___46979,mults,ensure_mult,p){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___46979,mults,ensure_mult,p){
return (function (state_46933){
var state_val_46934 = (state_46933[(1)]);
if((state_val_46934 === (7))){
var inst_46929 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46935_46980 = state_46933__$1;
(statearr_46935_46980[(2)] = inst_46929);

(statearr_46935_46980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (20))){
var state_46933__$1 = state_46933;
var statearr_46936_46981 = state_46933__$1;
(statearr_46936_46981[(2)] = null);

(statearr_46936_46981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (1))){
var state_46933__$1 = state_46933;
var statearr_46937_46982 = state_46933__$1;
(statearr_46937_46982[(2)] = null);

(statearr_46937_46982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (24))){
var inst_46912 = (state_46933[(7)]);
var inst_46921 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46912);
var state_46933__$1 = state_46933;
var statearr_46938_46983 = state_46933__$1;
(statearr_46938_46983[(2)] = inst_46921);

(statearr_46938_46983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (4))){
var inst_46864 = (state_46933[(8)]);
var inst_46864__$1 = (state_46933[(2)]);
var inst_46865 = (inst_46864__$1 == null);
var state_46933__$1 = (function (){var statearr_46939 = state_46933;
(statearr_46939[(8)] = inst_46864__$1);

return statearr_46939;
})();
if(cljs.core.truth_(inst_46865)){
var statearr_46940_46984 = state_46933__$1;
(statearr_46940_46984[(1)] = (5));

} else {
var statearr_46941_46985 = state_46933__$1;
(statearr_46941_46985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (15))){
var inst_46906 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46942_46986 = state_46933__$1;
(statearr_46942_46986[(2)] = inst_46906);

(statearr_46942_46986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (21))){
var inst_46926 = (state_46933[(2)]);
var state_46933__$1 = (function (){var statearr_46943 = state_46933;
(statearr_46943[(9)] = inst_46926);

return statearr_46943;
})();
var statearr_46944_46987 = state_46933__$1;
(statearr_46944_46987[(2)] = null);

(statearr_46944_46987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (13))){
var inst_46888 = (state_46933[(10)]);
var inst_46890 = cljs.core.chunked_seq_QMARK_.call(null,inst_46888);
var state_46933__$1 = state_46933;
if(inst_46890){
var statearr_46945_46988 = state_46933__$1;
(statearr_46945_46988[(1)] = (16));

} else {
var statearr_46946_46989 = state_46933__$1;
(statearr_46946_46989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (22))){
var inst_46918 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
if(cljs.core.truth_(inst_46918)){
var statearr_46947_46990 = state_46933__$1;
(statearr_46947_46990[(1)] = (23));

} else {
var statearr_46948_46991 = state_46933__$1;
(statearr_46948_46991[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (6))){
var inst_46912 = (state_46933[(7)]);
var inst_46864 = (state_46933[(8)]);
var inst_46914 = (state_46933[(11)]);
var inst_46912__$1 = topic_fn.call(null,inst_46864);
var inst_46913 = cljs.core.deref.call(null,mults);
var inst_46914__$1 = cljs.core.get.call(null,inst_46913,inst_46912__$1);
var state_46933__$1 = (function (){var statearr_46949 = state_46933;
(statearr_46949[(7)] = inst_46912__$1);

(statearr_46949[(11)] = inst_46914__$1);

return statearr_46949;
})();
if(cljs.core.truth_(inst_46914__$1)){
var statearr_46950_46992 = state_46933__$1;
(statearr_46950_46992[(1)] = (19));

} else {
var statearr_46951_46993 = state_46933__$1;
(statearr_46951_46993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (25))){
var inst_46923 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46952_46994 = state_46933__$1;
(statearr_46952_46994[(2)] = inst_46923);

(statearr_46952_46994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (17))){
var inst_46888 = (state_46933[(10)]);
var inst_46897 = cljs.core.first.call(null,inst_46888);
var inst_46898 = cljs.core.async.muxch_STAR_.call(null,inst_46897);
var inst_46899 = cljs.core.async.close_BANG_.call(null,inst_46898);
var inst_46900 = cljs.core.next.call(null,inst_46888);
var inst_46874 = inst_46900;
var inst_46875 = null;
var inst_46876 = (0);
var inst_46877 = (0);
var state_46933__$1 = (function (){var statearr_46953 = state_46933;
(statearr_46953[(12)] = inst_46899);

(statearr_46953[(13)] = inst_46875);

(statearr_46953[(14)] = inst_46876);

(statearr_46953[(15)] = inst_46877);

(statearr_46953[(16)] = inst_46874);

return statearr_46953;
})();
var statearr_46954_46995 = state_46933__$1;
(statearr_46954_46995[(2)] = null);

(statearr_46954_46995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (3))){
var inst_46931 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46933__$1,inst_46931);
} else {
if((state_val_46934 === (12))){
var inst_46908 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46955_46996 = state_46933__$1;
(statearr_46955_46996[(2)] = inst_46908);

(statearr_46955_46996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (2))){
var state_46933__$1 = state_46933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46933__$1,(4),ch);
} else {
if((state_val_46934 === (23))){
var state_46933__$1 = state_46933;
var statearr_46956_46997 = state_46933__$1;
(statearr_46956_46997[(2)] = null);

(statearr_46956_46997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (19))){
var inst_46864 = (state_46933[(8)]);
var inst_46914 = (state_46933[(11)]);
var inst_46916 = cljs.core.async.muxch_STAR_.call(null,inst_46914);
var state_46933__$1 = state_46933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46933__$1,(22),inst_46916,inst_46864);
} else {
if((state_val_46934 === (11))){
var inst_46888 = (state_46933[(10)]);
var inst_46874 = (state_46933[(16)]);
var inst_46888__$1 = cljs.core.seq.call(null,inst_46874);
var state_46933__$1 = (function (){var statearr_46957 = state_46933;
(statearr_46957[(10)] = inst_46888__$1);

return statearr_46957;
})();
if(inst_46888__$1){
var statearr_46958_46998 = state_46933__$1;
(statearr_46958_46998[(1)] = (13));

} else {
var statearr_46959_46999 = state_46933__$1;
(statearr_46959_46999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (9))){
var inst_46910 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46960_47000 = state_46933__$1;
(statearr_46960_47000[(2)] = inst_46910);

(statearr_46960_47000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (5))){
var inst_46871 = cljs.core.deref.call(null,mults);
var inst_46872 = cljs.core.vals.call(null,inst_46871);
var inst_46873 = cljs.core.seq.call(null,inst_46872);
var inst_46874 = inst_46873;
var inst_46875 = null;
var inst_46876 = (0);
var inst_46877 = (0);
var state_46933__$1 = (function (){var statearr_46961 = state_46933;
(statearr_46961[(13)] = inst_46875);

(statearr_46961[(14)] = inst_46876);

(statearr_46961[(15)] = inst_46877);

(statearr_46961[(16)] = inst_46874);

return statearr_46961;
})();
var statearr_46962_47001 = state_46933__$1;
(statearr_46962_47001[(2)] = null);

(statearr_46962_47001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (14))){
var state_46933__$1 = state_46933;
var statearr_46966_47002 = state_46933__$1;
(statearr_46966_47002[(2)] = null);

(statearr_46966_47002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (16))){
var inst_46888 = (state_46933[(10)]);
var inst_46892 = cljs.core.chunk_first.call(null,inst_46888);
var inst_46893 = cljs.core.chunk_rest.call(null,inst_46888);
var inst_46894 = cljs.core.count.call(null,inst_46892);
var inst_46874 = inst_46893;
var inst_46875 = inst_46892;
var inst_46876 = inst_46894;
var inst_46877 = (0);
var state_46933__$1 = (function (){var statearr_46967 = state_46933;
(statearr_46967[(13)] = inst_46875);

(statearr_46967[(14)] = inst_46876);

(statearr_46967[(15)] = inst_46877);

(statearr_46967[(16)] = inst_46874);

return statearr_46967;
})();
var statearr_46968_47003 = state_46933__$1;
(statearr_46968_47003[(2)] = null);

(statearr_46968_47003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (10))){
var inst_46875 = (state_46933[(13)]);
var inst_46876 = (state_46933[(14)]);
var inst_46877 = (state_46933[(15)]);
var inst_46874 = (state_46933[(16)]);
var inst_46882 = cljs.core._nth.call(null,inst_46875,inst_46877);
var inst_46883 = cljs.core.async.muxch_STAR_.call(null,inst_46882);
var inst_46884 = cljs.core.async.close_BANG_.call(null,inst_46883);
var inst_46885 = (inst_46877 + (1));
var tmp46963 = inst_46875;
var tmp46964 = inst_46876;
var tmp46965 = inst_46874;
var inst_46874__$1 = tmp46965;
var inst_46875__$1 = tmp46963;
var inst_46876__$1 = tmp46964;
var inst_46877__$1 = inst_46885;
var state_46933__$1 = (function (){var statearr_46969 = state_46933;
(statearr_46969[(13)] = inst_46875__$1);

(statearr_46969[(17)] = inst_46884);

(statearr_46969[(14)] = inst_46876__$1);

(statearr_46969[(15)] = inst_46877__$1);

(statearr_46969[(16)] = inst_46874__$1);

return statearr_46969;
})();
var statearr_46970_47004 = state_46933__$1;
(statearr_46970_47004[(2)] = null);

(statearr_46970_47004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (18))){
var inst_46903 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46971_47005 = state_46933__$1;
(statearr_46971_47005[(2)] = inst_46903);

(statearr_46971_47005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (8))){
var inst_46876 = (state_46933[(14)]);
var inst_46877 = (state_46933[(15)]);
var inst_46879 = (inst_46877 < inst_46876);
var inst_46880 = inst_46879;
var state_46933__$1 = state_46933;
if(cljs.core.truth_(inst_46880)){
var statearr_46972_47006 = state_46933__$1;
(statearr_46972_47006[(1)] = (10));

} else {
var statearr_46973_47007 = state_46933__$1;
(statearr_46973_47007[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___46979,mults,ensure_mult,p))
;
return ((function (switch__45671__auto__,c__45759__auto___46979,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_46974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46974[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_46974[(1)] = (1));

return statearr_46974;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_46933){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_46933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e46975){if((e46975 instanceof Object)){
var ex__45675__auto__ = e46975;
var statearr_46976_47008 = state_46933;
(statearr_46976_47008[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47009 = state_46933;
state_46933 = G__47009;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_46933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_46933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___46979,mults,ensure_mult,p))
})();
var state__45761__auto__ = (function (){var statearr_46977 = f__45760__auto__.call(null);
(statearr_46977[(6)] = c__45759__auto___46979);

return statearr_46977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___46979,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47011 = arguments.length;
switch (G__47011) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47014 = arguments.length;
switch (G__47014) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47017 = arguments.length;
switch (G__47017) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45759__auto___47084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47056){
var state_val_47057 = (state_47056[(1)]);
if((state_val_47057 === (7))){
var state_47056__$1 = state_47056;
var statearr_47058_47085 = state_47056__$1;
(statearr_47058_47085[(2)] = null);

(statearr_47058_47085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (1))){
var state_47056__$1 = state_47056;
var statearr_47059_47086 = state_47056__$1;
(statearr_47059_47086[(2)] = null);

(statearr_47059_47086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (4))){
var inst_47020 = (state_47056[(7)]);
var inst_47022 = (inst_47020 < cnt);
var state_47056__$1 = state_47056;
if(cljs.core.truth_(inst_47022)){
var statearr_47060_47087 = state_47056__$1;
(statearr_47060_47087[(1)] = (6));

} else {
var statearr_47061_47088 = state_47056__$1;
(statearr_47061_47088[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (15))){
var inst_47052 = (state_47056[(2)]);
var state_47056__$1 = state_47056;
var statearr_47062_47089 = state_47056__$1;
(statearr_47062_47089[(2)] = inst_47052);

(statearr_47062_47089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (13))){
var inst_47045 = cljs.core.async.close_BANG_.call(null,out);
var state_47056__$1 = state_47056;
var statearr_47063_47090 = state_47056__$1;
(statearr_47063_47090[(2)] = inst_47045);

(statearr_47063_47090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (6))){
var state_47056__$1 = state_47056;
var statearr_47064_47091 = state_47056__$1;
(statearr_47064_47091[(2)] = null);

(statearr_47064_47091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (3))){
var inst_47054 = (state_47056[(2)]);
var state_47056__$1 = state_47056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47056__$1,inst_47054);
} else {
if((state_val_47057 === (12))){
var inst_47042 = (state_47056[(8)]);
var inst_47042__$1 = (state_47056[(2)]);
var inst_47043 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47042__$1);
var state_47056__$1 = (function (){var statearr_47065 = state_47056;
(statearr_47065[(8)] = inst_47042__$1);

return statearr_47065;
})();
if(cljs.core.truth_(inst_47043)){
var statearr_47066_47092 = state_47056__$1;
(statearr_47066_47092[(1)] = (13));

} else {
var statearr_47067_47093 = state_47056__$1;
(statearr_47067_47093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (2))){
var inst_47019 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47020 = (0);
var state_47056__$1 = (function (){var statearr_47068 = state_47056;
(statearr_47068[(7)] = inst_47020);

(statearr_47068[(9)] = inst_47019);

return statearr_47068;
})();
var statearr_47069_47094 = state_47056__$1;
(statearr_47069_47094[(2)] = null);

(statearr_47069_47094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (11))){
var inst_47020 = (state_47056[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47056,(10),Object,null,(9));
var inst_47029 = chs__$1.call(null,inst_47020);
var inst_47030 = done.call(null,inst_47020);
var inst_47031 = cljs.core.async.take_BANG_.call(null,inst_47029,inst_47030);
var state_47056__$1 = state_47056;
var statearr_47070_47095 = state_47056__$1;
(statearr_47070_47095[(2)] = inst_47031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (9))){
var inst_47020 = (state_47056[(7)]);
var inst_47033 = (state_47056[(2)]);
var inst_47034 = (inst_47020 + (1));
var inst_47020__$1 = inst_47034;
var state_47056__$1 = (function (){var statearr_47071 = state_47056;
(statearr_47071[(10)] = inst_47033);

(statearr_47071[(7)] = inst_47020__$1);

return statearr_47071;
})();
var statearr_47072_47096 = state_47056__$1;
(statearr_47072_47096[(2)] = null);

(statearr_47072_47096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (5))){
var inst_47040 = (state_47056[(2)]);
var state_47056__$1 = (function (){var statearr_47073 = state_47056;
(statearr_47073[(11)] = inst_47040);

return statearr_47073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47056__$1,(12),dchan);
} else {
if((state_val_47057 === (14))){
var inst_47042 = (state_47056[(8)]);
var inst_47047 = cljs.core.apply.call(null,f,inst_47042);
var state_47056__$1 = state_47056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47056__$1,(16),out,inst_47047);
} else {
if((state_val_47057 === (16))){
var inst_47049 = (state_47056[(2)]);
var state_47056__$1 = (function (){var statearr_47074 = state_47056;
(statearr_47074[(12)] = inst_47049);

return statearr_47074;
})();
var statearr_47075_47097 = state_47056__$1;
(statearr_47075_47097[(2)] = null);

(statearr_47075_47097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (10))){
var inst_47024 = (state_47056[(2)]);
var inst_47025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47056__$1 = (function (){var statearr_47076 = state_47056;
(statearr_47076[(13)] = inst_47024);

return statearr_47076;
})();
var statearr_47077_47098 = state_47056__$1;
(statearr_47077_47098[(2)] = inst_47025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47057 === (8))){
var inst_47038 = (state_47056[(2)]);
var state_47056__$1 = state_47056;
var statearr_47078_47099 = state_47056__$1;
(statearr_47078_47099[(2)] = inst_47038);

(statearr_47078_47099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45671__auto__,c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47079[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47079[(1)] = (1));

return statearr_47079;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47056){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47080){if((e47080 instanceof Object)){
var ex__45675__auto__ = e47080;
var statearr_47081_47100 = state_47056;
(statearr_47081_47100[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47101 = state_47056;
state_47056 = G__47101;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45761__auto__ = (function (){var statearr_47082 = f__45760__auto__.call(null);
(statearr_47082[(6)] = c__45759__auto___47084);

return statearr_47082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47084,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47104 = arguments.length;
switch (G__47104) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47158,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47158,out){
return (function (state_47136){
var state_val_47137 = (state_47136[(1)]);
if((state_val_47137 === (7))){
var inst_47115 = (state_47136[(7)]);
var inst_47116 = (state_47136[(8)]);
var inst_47115__$1 = (state_47136[(2)]);
var inst_47116__$1 = cljs.core.nth.call(null,inst_47115__$1,(0),null);
var inst_47117 = cljs.core.nth.call(null,inst_47115__$1,(1),null);
var inst_47118 = (inst_47116__$1 == null);
var state_47136__$1 = (function (){var statearr_47138 = state_47136;
(statearr_47138[(9)] = inst_47117);

(statearr_47138[(7)] = inst_47115__$1);

(statearr_47138[(8)] = inst_47116__$1);

return statearr_47138;
})();
if(cljs.core.truth_(inst_47118)){
var statearr_47139_47159 = state_47136__$1;
(statearr_47139_47159[(1)] = (8));

} else {
var statearr_47140_47160 = state_47136__$1;
(statearr_47140_47160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (1))){
var inst_47105 = cljs.core.vec.call(null,chs);
var inst_47106 = inst_47105;
var state_47136__$1 = (function (){var statearr_47141 = state_47136;
(statearr_47141[(10)] = inst_47106);

return statearr_47141;
})();
var statearr_47142_47161 = state_47136__$1;
(statearr_47142_47161[(2)] = null);

(statearr_47142_47161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (4))){
var inst_47106 = (state_47136[(10)]);
var state_47136__$1 = state_47136;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47136__$1,(7),inst_47106);
} else {
if((state_val_47137 === (6))){
var inst_47132 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47143_47162 = state_47136__$1;
(statearr_47143_47162[(2)] = inst_47132);

(statearr_47143_47162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (3))){
var inst_47134 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47136__$1,inst_47134);
} else {
if((state_val_47137 === (2))){
var inst_47106 = (state_47136[(10)]);
var inst_47108 = cljs.core.count.call(null,inst_47106);
var inst_47109 = (inst_47108 > (0));
var state_47136__$1 = state_47136;
if(cljs.core.truth_(inst_47109)){
var statearr_47145_47163 = state_47136__$1;
(statearr_47145_47163[(1)] = (4));

} else {
var statearr_47146_47164 = state_47136__$1;
(statearr_47146_47164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (11))){
var inst_47106 = (state_47136[(10)]);
var inst_47125 = (state_47136[(2)]);
var tmp47144 = inst_47106;
var inst_47106__$1 = tmp47144;
var state_47136__$1 = (function (){var statearr_47147 = state_47136;
(statearr_47147[(11)] = inst_47125);

(statearr_47147[(10)] = inst_47106__$1);

return statearr_47147;
})();
var statearr_47148_47165 = state_47136__$1;
(statearr_47148_47165[(2)] = null);

(statearr_47148_47165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (9))){
var inst_47116 = (state_47136[(8)]);
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47136__$1,(11),out,inst_47116);
} else {
if((state_val_47137 === (5))){
var inst_47130 = cljs.core.async.close_BANG_.call(null,out);
var state_47136__$1 = state_47136;
var statearr_47149_47166 = state_47136__$1;
(statearr_47149_47166[(2)] = inst_47130);

(statearr_47149_47166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (10))){
var inst_47128 = (state_47136[(2)]);
var state_47136__$1 = state_47136;
var statearr_47150_47167 = state_47136__$1;
(statearr_47150_47167[(2)] = inst_47128);

(statearr_47150_47167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47137 === (8))){
var inst_47117 = (state_47136[(9)]);
var inst_47115 = (state_47136[(7)]);
var inst_47116 = (state_47136[(8)]);
var inst_47106 = (state_47136[(10)]);
var inst_47120 = (function (){var cs = inst_47106;
var vec__47111 = inst_47115;
var v = inst_47116;
var c = inst_47117;
return ((function (cs,vec__47111,v,c,inst_47117,inst_47115,inst_47116,inst_47106,state_val_47137,c__45759__auto___47158,out){
return (function (p1__47102_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47102_SHARP_);
});
;})(cs,vec__47111,v,c,inst_47117,inst_47115,inst_47116,inst_47106,state_val_47137,c__45759__auto___47158,out))
})();
var inst_47121 = cljs.core.filterv.call(null,inst_47120,inst_47106);
var inst_47106__$1 = inst_47121;
var state_47136__$1 = (function (){var statearr_47151 = state_47136;
(statearr_47151[(10)] = inst_47106__$1);

return statearr_47151;
})();
var statearr_47152_47168 = state_47136__$1;
(statearr_47152_47168[(2)] = null);

(statearr_47152_47168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47158,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47158,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47153[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47153[(1)] = (1));

return statearr_47153;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47136){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47154){if((e47154 instanceof Object)){
var ex__45675__auto__ = e47154;
var statearr_47155_47169 = state_47136;
(statearr_47155_47169[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47170 = state_47136;
state_47136 = G__47170;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47158,out))
})();
var state__45761__auto__ = (function (){var statearr_47156 = f__45760__auto__.call(null);
(statearr_47156[(6)] = c__45759__auto___47158);

return statearr_47156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47158,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47172 = arguments.length;
switch (G__47172) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47217,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47217,out){
return (function (state_47196){
var state_val_47197 = (state_47196[(1)]);
if((state_val_47197 === (7))){
var inst_47178 = (state_47196[(7)]);
var inst_47178__$1 = (state_47196[(2)]);
var inst_47179 = (inst_47178__$1 == null);
var inst_47180 = cljs.core.not.call(null,inst_47179);
var state_47196__$1 = (function (){var statearr_47198 = state_47196;
(statearr_47198[(7)] = inst_47178__$1);

return statearr_47198;
})();
if(inst_47180){
var statearr_47199_47218 = state_47196__$1;
(statearr_47199_47218[(1)] = (8));

} else {
var statearr_47200_47219 = state_47196__$1;
(statearr_47200_47219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (1))){
var inst_47173 = (0);
var state_47196__$1 = (function (){var statearr_47201 = state_47196;
(statearr_47201[(8)] = inst_47173);

return statearr_47201;
})();
var statearr_47202_47220 = state_47196__$1;
(statearr_47202_47220[(2)] = null);

(statearr_47202_47220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (4))){
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47196__$1,(7),ch);
} else {
if((state_val_47197 === (6))){
var inst_47191 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47203_47221 = state_47196__$1;
(statearr_47203_47221[(2)] = inst_47191);

(statearr_47203_47221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (3))){
var inst_47193 = (state_47196[(2)]);
var inst_47194 = cljs.core.async.close_BANG_.call(null,out);
var state_47196__$1 = (function (){var statearr_47204 = state_47196;
(statearr_47204[(9)] = inst_47193);

return statearr_47204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47196__$1,inst_47194);
} else {
if((state_val_47197 === (2))){
var inst_47173 = (state_47196[(8)]);
var inst_47175 = (inst_47173 < n);
var state_47196__$1 = state_47196;
if(cljs.core.truth_(inst_47175)){
var statearr_47205_47222 = state_47196__$1;
(statearr_47205_47222[(1)] = (4));

} else {
var statearr_47206_47223 = state_47196__$1;
(statearr_47206_47223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (11))){
var inst_47173 = (state_47196[(8)]);
var inst_47183 = (state_47196[(2)]);
var inst_47184 = (inst_47173 + (1));
var inst_47173__$1 = inst_47184;
var state_47196__$1 = (function (){var statearr_47207 = state_47196;
(statearr_47207[(10)] = inst_47183);

(statearr_47207[(8)] = inst_47173__$1);

return statearr_47207;
})();
var statearr_47208_47224 = state_47196__$1;
(statearr_47208_47224[(2)] = null);

(statearr_47208_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (9))){
var state_47196__$1 = state_47196;
var statearr_47209_47225 = state_47196__$1;
(statearr_47209_47225[(2)] = null);

(statearr_47209_47225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (5))){
var state_47196__$1 = state_47196;
var statearr_47210_47226 = state_47196__$1;
(statearr_47210_47226[(2)] = null);

(statearr_47210_47226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (10))){
var inst_47188 = (state_47196[(2)]);
var state_47196__$1 = state_47196;
var statearr_47211_47227 = state_47196__$1;
(statearr_47211_47227[(2)] = inst_47188);

(statearr_47211_47227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47197 === (8))){
var inst_47178 = (state_47196[(7)]);
var state_47196__$1 = state_47196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47196__$1,(11),out,inst_47178);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47217,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47217,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47212[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47212[(1)] = (1));

return statearr_47212;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47196){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47213){if((e47213 instanceof Object)){
var ex__45675__auto__ = e47213;
var statearr_47214_47228 = state_47196;
(statearr_47214_47228[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47229 = state_47196;
state_47196 = G__47229;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47217,out))
})();
var state__45761__auto__ = (function (){var statearr_47215 = f__45760__auto__.call(null);
(statearr_47215[(6)] = c__45759__auto___47217);

return statearr_47215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47217,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47231 = (function (f,ch,meta47232){
this.f = f;
this.ch = ch;
this.meta47232 = meta47232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47233,meta47232__$1){
var self__ = this;
var _47233__$1 = this;
return (new cljs.core.async.t_cljs$core$async47231(self__.f,self__.ch,meta47232__$1));
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47233){
var self__ = this;
var _47233__$1 = this;
return self__.meta47232;
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47234 = (function (f,ch,meta47232,_,fn1,meta47235){
this.f = f;
this.ch = ch;
this.meta47232 = meta47232;
this._ = _;
this.fn1 = fn1;
this.meta47235 = meta47235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47236,meta47235__$1){
var self__ = this;
var _47236__$1 = this;
return (new cljs.core.async.t_cljs$core$async47234(self__.f,self__.ch,self__.meta47232,self__._,self__.fn1,meta47235__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47236){
var self__ = this;
var _47236__$1 = this;
return self__.meta47235;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47230_SHARP_){
return f1.call(null,(((p1__47230_SHARP_ == null))?null:self__.f.call(null,p1__47230_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47232","meta47232",-724157283,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47231","cljs.core.async/t_cljs$core$async47231",1523787082,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47235","meta47235",284710591,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47234";

cljs.core.async.t_cljs$core$async47234.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async47234");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47234 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47234(f__$1,ch__$1,meta47232__$1,___$2,fn1__$1,meta47235){
return (new cljs.core.async.t_cljs$core$async47234(f__$1,ch__$1,meta47232__$1,___$2,fn1__$1,meta47235));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47234(self__.f,self__.ch,self__.meta47232,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__39598__auto__ = ret;
if(cljs.core.truth_(and__39598__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__39598__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47232","meta47232",-724157283,null)], null);
});

cljs.core.async.t_cljs$core$async47231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47231";

cljs.core.async.t_cljs$core$async47231.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async47231");
});

cljs.core.async.__GT_t_cljs$core$async47231 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47231(f__$1,ch__$1,meta47232){
return (new cljs.core.async.t_cljs$core$async47231(f__$1,ch__$1,meta47232));
});

}

return (new cljs.core.async.t_cljs$core$async47231(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47237 = (function (f,ch,meta47238){
this.f = f;
this.ch = ch;
this.meta47238 = meta47238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47239,meta47238__$1){
var self__ = this;
var _47239__$1 = this;
return (new cljs.core.async.t_cljs$core$async47237(self__.f,self__.ch,meta47238__$1));
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47239){
var self__ = this;
var _47239__$1 = this;
return self__.meta47238;
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47238","meta47238",833963001,null)], null);
});

cljs.core.async.t_cljs$core$async47237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47237";

cljs.core.async.t_cljs$core$async47237.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async47237");
});

cljs.core.async.__GT_t_cljs$core$async47237 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47237(f__$1,ch__$1,meta47238){
return (new cljs.core.async.t_cljs$core$async47237(f__$1,ch__$1,meta47238));
});

}

return (new cljs.core.async.t_cljs$core$async47237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47240 = (function (p,ch,meta47241){
this.p = p;
this.ch = ch;
this.meta47241 = meta47241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47242,meta47241__$1){
var self__ = this;
var _47242__$1 = this;
return (new cljs.core.async.t_cljs$core$async47240(self__.p,self__.ch,meta47241__$1));
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47242){
var self__ = this;
var _47242__$1 = this;
return self__.meta47241;
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47241","meta47241",2124486724,null)], null);
});

cljs.core.async.t_cljs$core$async47240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47240";

cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.core.async/t_cljs$core$async47240");
});

cljs.core.async.__GT_t_cljs$core$async47240 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47240(p__$1,ch__$1,meta47241){
return (new cljs.core.async.t_cljs$core$async47240(p__$1,ch__$1,meta47241));
});

}

return (new cljs.core.async.t_cljs$core$async47240(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47244 = arguments.length;
switch (G__47244) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47284,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47284,out){
return (function (state_47265){
var state_val_47266 = (state_47265[(1)]);
if((state_val_47266 === (7))){
var inst_47261 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47267_47285 = state_47265__$1;
(statearr_47267_47285[(2)] = inst_47261);

(statearr_47267_47285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (1))){
var state_47265__$1 = state_47265;
var statearr_47268_47286 = state_47265__$1;
(statearr_47268_47286[(2)] = null);

(statearr_47268_47286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (4))){
var inst_47247 = (state_47265[(7)]);
var inst_47247__$1 = (state_47265[(2)]);
var inst_47248 = (inst_47247__$1 == null);
var state_47265__$1 = (function (){var statearr_47269 = state_47265;
(statearr_47269[(7)] = inst_47247__$1);

return statearr_47269;
})();
if(cljs.core.truth_(inst_47248)){
var statearr_47270_47287 = state_47265__$1;
(statearr_47270_47287[(1)] = (5));

} else {
var statearr_47271_47288 = state_47265__$1;
(statearr_47271_47288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (6))){
var inst_47247 = (state_47265[(7)]);
var inst_47252 = p.call(null,inst_47247);
var state_47265__$1 = state_47265;
if(cljs.core.truth_(inst_47252)){
var statearr_47272_47289 = state_47265__$1;
(statearr_47272_47289[(1)] = (8));

} else {
var statearr_47273_47290 = state_47265__$1;
(statearr_47273_47290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (3))){
var inst_47263 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47265__$1,inst_47263);
} else {
if((state_val_47266 === (2))){
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47265__$1,(4),ch);
} else {
if((state_val_47266 === (11))){
var inst_47255 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47274_47291 = state_47265__$1;
(statearr_47274_47291[(2)] = inst_47255);

(statearr_47274_47291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (9))){
var state_47265__$1 = state_47265;
var statearr_47275_47292 = state_47265__$1;
(statearr_47275_47292[(2)] = null);

(statearr_47275_47292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (5))){
var inst_47250 = cljs.core.async.close_BANG_.call(null,out);
var state_47265__$1 = state_47265;
var statearr_47276_47293 = state_47265__$1;
(statearr_47276_47293[(2)] = inst_47250);

(statearr_47276_47293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (10))){
var inst_47258 = (state_47265[(2)]);
var state_47265__$1 = (function (){var statearr_47277 = state_47265;
(statearr_47277[(8)] = inst_47258);

return statearr_47277;
})();
var statearr_47278_47294 = state_47265__$1;
(statearr_47278_47294[(2)] = null);

(statearr_47278_47294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (8))){
var inst_47247 = (state_47265[(7)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47265__$1,(11),out,inst_47247);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47284,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47284,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47279 = [null,null,null,null,null,null,null,null,null];
(statearr_47279[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47279[(1)] = (1));

return statearr_47279;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47265){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47280){if((e47280 instanceof Object)){
var ex__45675__auto__ = e47280;
var statearr_47281_47295 = state_47265;
(statearr_47281_47295[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47296 = state_47265;
state_47265 = G__47296;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47284,out))
})();
var state__45761__auto__ = (function (){var statearr_47282 = f__45760__auto__.call(null);
(statearr_47282[(6)] = c__45759__auto___47284);

return statearr_47282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47284,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47298 = arguments.length;
switch (G__47298) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__){
return (function (state_47361){
var state_val_47362 = (state_47361[(1)]);
if((state_val_47362 === (7))){
var inst_47357 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
var statearr_47363_47401 = state_47361__$1;
(statearr_47363_47401[(2)] = inst_47357);

(statearr_47363_47401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (20))){
var inst_47327 = (state_47361[(7)]);
var inst_47338 = (state_47361[(2)]);
var inst_47339 = cljs.core.next.call(null,inst_47327);
var inst_47313 = inst_47339;
var inst_47314 = null;
var inst_47315 = (0);
var inst_47316 = (0);
var state_47361__$1 = (function (){var statearr_47364 = state_47361;
(statearr_47364[(8)] = inst_47338);

(statearr_47364[(9)] = inst_47313);

(statearr_47364[(10)] = inst_47315);

(statearr_47364[(11)] = inst_47314);

(statearr_47364[(12)] = inst_47316);

return statearr_47364;
})();
var statearr_47365_47402 = state_47361__$1;
(statearr_47365_47402[(2)] = null);

(statearr_47365_47402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (1))){
var state_47361__$1 = state_47361;
var statearr_47366_47403 = state_47361__$1;
(statearr_47366_47403[(2)] = null);

(statearr_47366_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (4))){
var inst_47302 = (state_47361[(13)]);
var inst_47302__$1 = (state_47361[(2)]);
var inst_47303 = (inst_47302__$1 == null);
var state_47361__$1 = (function (){var statearr_47367 = state_47361;
(statearr_47367[(13)] = inst_47302__$1);

return statearr_47367;
})();
if(cljs.core.truth_(inst_47303)){
var statearr_47368_47404 = state_47361__$1;
(statearr_47368_47404[(1)] = (5));

} else {
var statearr_47369_47405 = state_47361__$1;
(statearr_47369_47405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (15))){
var state_47361__$1 = state_47361;
var statearr_47373_47406 = state_47361__$1;
(statearr_47373_47406[(2)] = null);

(statearr_47373_47406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (21))){
var state_47361__$1 = state_47361;
var statearr_47374_47407 = state_47361__$1;
(statearr_47374_47407[(2)] = null);

(statearr_47374_47407[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (13))){
var inst_47313 = (state_47361[(9)]);
var inst_47315 = (state_47361[(10)]);
var inst_47314 = (state_47361[(11)]);
var inst_47316 = (state_47361[(12)]);
var inst_47323 = (state_47361[(2)]);
var inst_47324 = (inst_47316 + (1));
var tmp47370 = inst_47313;
var tmp47371 = inst_47315;
var tmp47372 = inst_47314;
var inst_47313__$1 = tmp47370;
var inst_47314__$1 = tmp47372;
var inst_47315__$1 = tmp47371;
var inst_47316__$1 = inst_47324;
var state_47361__$1 = (function (){var statearr_47375 = state_47361;
(statearr_47375[(9)] = inst_47313__$1);

(statearr_47375[(10)] = inst_47315__$1);

(statearr_47375[(11)] = inst_47314__$1);

(statearr_47375[(12)] = inst_47316__$1);

(statearr_47375[(14)] = inst_47323);

return statearr_47375;
})();
var statearr_47376_47408 = state_47361__$1;
(statearr_47376_47408[(2)] = null);

(statearr_47376_47408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (22))){
var state_47361__$1 = state_47361;
var statearr_47377_47409 = state_47361__$1;
(statearr_47377_47409[(2)] = null);

(statearr_47377_47409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (6))){
var inst_47302 = (state_47361[(13)]);
var inst_47311 = f.call(null,inst_47302);
var inst_47312 = cljs.core.seq.call(null,inst_47311);
var inst_47313 = inst_47312;
var inst_47314 = null;
var inst_47315 = (0);
var inst_47316 = (0);
var state_47361__$1 = (function (){var statearr_47378 = state_47361;
(statearr_47378[(9)] = inst_47313);

(statearr_47378[(10)] = inst_47315);

(statearr_47378[(11)] = inst_47314);

(statearr_47378[(12)] = inst_47316);

return statearr_47378;
})();
var statearr_47379_47410 = state_47361__$1;
(statearr_47379_47410[(2)] = null);

(statearr_47379_47410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (17))){
var inst_47327 = (state_47361[(7)]);
var inst_47331 = cljs.core.chunk_first.call(null,inst_47327);
var inst_47332 = cljs.core.chunk_rest.call(null,inst_47327);
var inst_47333 = cljs.core.count.call(null,inst_47331);
var inst_47313 = inst_47332;
var inst_47314 = inst_47331;
var inst_47315 = inst_47333;
var inst_47316 = (0);
var state_47361__$1 = (function (){var statearr_47380 = state_47361;
(statearr_47380[(9)] = inst_47313);

(statearr_47380[(10)] = inst_47315);

(statearr_47380[(11)] = inst_47314);

(statearr_47380[(12)] = inst_47316);

return statearr_47380;
})();
var statearr_47381_47411 = state_47361__$1;
(statearr_47381_47411[(2)] = null);

(statearr_47381_47411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (3))){
var inst_47359 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47361__$1,inst_47359);
} else {
if((state_val_47362 === (12))){
var inst_47347 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
var statearr_47382_47412 = state_47361__$1;
(statearr_47382_47412[(2)] = inst_47347);

(statearr_47382_47412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (2))){
var state_47361__$1 = state_47361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47361__$1,(4),in$);
} else {
if((state_val_47362 === (23))){
var inst_47355 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
var statearr_47383_47413 = state_47361__$1;
(statearr_47383_47413[(2)] = inst_47355);

(statearr_47383_47413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (19))){
var inst_47342 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
var statearr_47384_47414 = state_47361__$1;
(statearr_47384_47414[(2)] = inst_47342);

(statearr_47384_47414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (11))){
var inst_47313 = (state_47361[(9)]);
var inst_47327 = (state_47361[(7)]);
var inst_47327__$1 = cljs.core.seq.call(null,inst_47313);
var state_47361__$1 = (function (){var statearr_47385 = state_47361;
(statearr_47385[(7)] = inst_47327__$1);

return statearr_47385;
})();
if(inst_47327__$1){
var statearr_47386_47415 = state_47361__$1;
(statearr_47386_47415[(1)] = (14));

} else {
var statearr_47387_47416 = state_47361__$1;
(statearr_47387_47416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (9))){
var inst_47349 = (state_47361[(2)]);
var inst_47350 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47361__$1 = (function (){var statearr_47388 = state_47361;
(statearr_47388[(15)] = inst_47349);

return statearr_47388;
})();
if(cljs.core.truth_(inst_47350)){
var statearr_47389_47417 = state_47361__$1;
(statearr_47389_47417[(1)] = (21));

} else {
var statearr_47390_47418 = state_47361__$1;
(statearr_47390_47418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (5))){
var inst_47305 = cljs.core.async.close_BANG_.call(null,out);
var state_47361__$1 = state_47361;
var statearr_47391_47419 = state_47361__$1;
(statearr_47391_47419[(2)] = inst_47305);

(statearr_47391_47419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (14))){
var inst_47327 = (state_47361[(7)]);
var inst_47329 = cljs.core.chunked_seq_QMARK_.call(null,inst_47327);
var state_47361__$1 = state_47361;
if(inst_47329){
var statearr_47392_47420 = state_47361__$1;
(statearr_47392_47420[(1)] = (17));

} else {
var statearr_47393_47421 = state_47361__$1;
(statearr_47393_47421[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (16))){
var inst_47345 = (state_47361[(2)]);
var state_47361__$1 = state_47361;
var statearr_47394_47422 = state_47361__$1;
(statearr_47394_47422[(2)] = inst_47345);

(statearr_47394_47422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47362 === (10))){
var inst_47314 = (state_47361[(11)]);
var inst_47316 = (state_47361[(12)]);
var inst_47321 = cljs.core._nth.call(null,inst_47314,inst_47316);
var state_47361__$1 = state_47361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47361__$1,(13),out,inst_47321);
} else {
if((state_val_47362 === (18))){
var inst_47327 = (state_47361[(7)]);
var inst_47336 = cljs.core.first.call(null,inst_47327);
var state_47361__$1 = state_47361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47361__$1,(20),out,inst_47336);
} else {
if((state_val_47362 === (8))){
var inst_47315 = (state_47361[(10)]);
var inst_47316 = (state_47361[(12)]);
var inst_47318 = (inst_47316 < inst_47315);
var inst_47319 = inst_47318;
var state_47361__$1 = state_47361;
if(cljs.core.truth_(inst_47319)){
var statearr_47395_47423 = state_47361__$1;
(statearr_47395_47423[(1)] = (10));

} else {
var statearr_47396_47424 = state_47361__$1;
(statearr_47396_47424[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____0 = (function (){
var statearr_47397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47397[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__);

(statearr_47397[(1)] = (1));

return statearr_47397;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____1 = (function (state_47361){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47398){if((e47398 instanceof Object)){
var ex__45675__auto__ = e47398;
var statearr_47399_47425 = state_47361;
(statearr_47399_47425[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47426 = state_47361;
state_47361 = G__47426;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__ = function(state_47361){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____1.call(this,state_47361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45672__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__))
})();
var state__45761__auto__ = (function (){var statearr_47400 = f__45760__auto__.call(null);
(statearr_47400[(6)] = c__45759__auto__);

return statearr_47400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__))
);

return c__45759__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47428 = arguments.length;
switch (G__47428) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47431 = arguments.length;
switch (G__47431) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47434 = arguments.length;
switch (G__47434) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47481,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47481,out){
return (function (state_47458){
var state_val_47459 = (state_47458[(1)]);
if((state_val_47459 === (7))){
var inst_47453 = (state_47458[(2)]);
var state_47458__$1 = state_47458;
var statearr_47460_47482 = state_47458__$1;
(statearr_47460_47482[(2)] = inst_47453);

(statearr_47460_47482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (1))){
var inst_47435 = null;
var state_47458__$1 = (function (){var statearr_47461 = state_47458;
(statearr_47461[(7)] = inst_47435);

return statearr_47461;
})();
var statearr_47462_47483 = state_47458__$1;
(statearr_47462_47483[(2)] = null);

(statearr_47462_47483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (4))){
var inst_47438 = (state_47458[(8)]);
var inst_47438__$1 = (state_47458[(2)]);
var inst_47439 = (inst_47438__$1 == null);
var inst_47440 = cljs.core.not.call(null,inst_47439);
var state_47458__$1 = (function (){var statearr_47463 = state_47458;
(statearr_47463[(8)] = inst_47438__$1);

return statearr_47463;
})();
if(inst_47440){
var statearr_47464_47484 = state_47458__$1;
(statearr_47464_47484[(1)] = (5));

} else {
var statearr_47465_47485 = state_47458__$1;
(statearr_47465_47485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (6))){
var state_47458__$1 = state_47458;
var statearr_47466_47486 = state_47458__$1;
(statearr_47466_47486[(2)] = null);

(statearr_47466_47486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (3))){
var inst_47455 = (state_47458[(2)]);
var inst_47456 = cljs.core.async.close_BANG_.call(null,out);
var state_47458__$1 = (function (){var statearr_47467 = state_47458;
(statearr_47467[(9)] = inst_47455);

return statearr_47467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47458__$1,inst_47456);
} else {
if((state_val_47459 === (2))){
var state_47458__$1 = state_47458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47458__$1,(4),ch);
} else {
if((state_val_47459 === (11))){
var inst_47438 = (state_47458[(8)]);
var inst_47447 = (state_47458[(2)]);
var inst_47435 = inst_47438;
var state_47458__$1 = (function (){var statearr_47468 = state_47458;
(statearr_47468[(7)] = inst_47435);

(statearr_47468[(10)] = inst_47447);

return statearr_47468;
})();
var statearr_47469_47487 = state_47458__$1;
(statearr_47469_47487[(2)] = null);

(statearr_47469_47487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (9))){
var inst_47438 = (state_47458[(8)]);
var state_47458__$1 = state_47458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47458__$1,(11),out,inst_47438);
} else {
if((state_val_47459 === (5))){
var inst_47438 = (state_47458[(8)]);
var inst_47435 = (state_47458[(7)]);
var inst_47442 = cljs.core._EQ_.call(null,inst_47438,inst_47435);
var state_47458__$1 = state_47458;
if(inst_47442){
var statearr_47471_47488 = state_47458__$1;
(statearr_47471_47488[(1)] = (8));

} else {
var statearr_47472_47489 = state_47458__$1;
(statearr_47472_47489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (10))){
var inst_47450 = (state_47458[(2)]);
var state_47458__$1 = state_47458;
var statearr_47473_47490 = state_47458__$1;
(statearr_47473_47490[(2)] = inst_47450);

(statearr_47473_47490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47459 === (8))){
var inst_47435 = (state_47458[(7)]);
var tmp47470 = inst_47435;
var inst_47435__$1 = tmp47470;
var state_47458__$1 = (function (){var statearr_47474 = state_47458;
(statearr_47474[(7)] = inst_47435__$1);

return statearr_47474;
})();
var statearr_47475_47491 = state_47458__$1;
(statearr_47475_47491[(2)] = null);

(statearr_47475_47491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47481,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47481,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47476 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47476[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47476[(1)] = (1));

return statearr_47476;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47458){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47477){if((e47477 instanceof Object)){
var ex__45675__auto__ = e47477;
var statearr_47478_47492 = state_47458;
(statearr_47478_47492[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47493 = state_47458;
state_47458 = G__47493;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47481,out))
})();
var state__45761__auto__ = (function (){var statearr_47479 = f__45760__auto__.call(null);
(statearr_47479[(6)] = c__45759__auto___47481);

return statearr_47479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47481,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47495 = arguments.length;
switch (G__47495) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47561,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47561,out){
return (function (state_47533){
var state_val_47534 = (state_47533[(1)]);
if((state_val_47534 === (7))){
var inst_47529 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47535_47562 = state_47533__$1;
(statearr_47535_47562[(2)] = inst_47529);

(statearr_47535_47562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (1))){
var inst_47496 = (new Array(n));
var inst_47497 = inst_47496;
var inst_47498 = (0);
var state_47533__$1 = (function (){var statearr_47536 = state_47533;
(statearr_47536[(7)] = inst_47498);

(statearr_47536[(8)] = inst_47497);

return statearr_47536;
})();
var statearr_47537_47563 = state_47533__$1;
(statearr_47537_47563[(2)] = null);

(statearr_47537_47563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (4))){
var inst_47501 = (state_47533[(9)]);
var inst_47501__$1 = (state_47533[(2)]);
var inst_47502 = (inst_47501__$1 == null);
var inst_47503 = cljs.core.not.call(null,inst_47502);
var state_47533__$1 = (function (){var statearr_47538 = state_47533;
(statearr_47538[(9)] = inst_47501__$1);

return statearr_47538;
})();
if(inst_47503){
var statearr_47539_47564 = state_47533__$1;
(statearr_47539_47564[(1)] = (5));

} else {
var statearr_47540_47565 = state_47533__$1;
(statearr_47540_47565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (15))){
var inst_47523 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47541_47566 = state_47533__$1;
(statearr_47541_47566[(2)] = inst_47523);

(statearr_47541_47566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (13))){
var state_47533__$1 = state_47533;
var statearr_47542_47567 = state_47533__$1;
(statearr_47542_47567[(2)] = null);

(statearr_47542_47567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (6))){
var inst_47498 = (state_47533[(7)]);
var inst_47519 = (inst_47498 > (0));
var state_47533__$1 = state_47533;
if(cljs.core.truth_(inst_47519)){
var statearr_47543_47568 = state_47533__$1;
(statearr_47543_47568[(1)] = (12));

} else {
var statearr_47544_47569 = state_47533__$1;
(statearr_47544_47569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (3))){
var inst_47531 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47533__$1,inst_47531);
} else {
if((state_val_47534 === (12))){
var inst_47497 = (state_47533[(8)]);
var inst_47521 = cljs.core.vec.call(null,inst_47497);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47533__$1,(15),out,inst_47521);
} else {
if((state_val_47534 === (2))){
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47533__$1,(4),ch);
} else {
if((state_val_47534 === (11))){
var inst_47513 = (state_47533[(2)]);
var inst_47514 = (new Array(n));
var inst_47497 = inst_47514;
var inst_47498 = (0);
var state_47533__$1 = (function (){var statearr_47545 = state_47533;
(statearr_47545[(7)] = inst_47498);

(statearr_47545[(8)] = inst_47497);

(statearr_47545[(10)] = inst_47513);

return statearr_47545;
})();
var statearr_47546_47570 = state_47533__$1;
(statearr_47546_47570[(2)] = null);

(statearr_47546_47570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (9))){
var inst_47497 = (state_47533[(8)]);
var inst_47511 = cljs.core.vec.call(null,inst_47497);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47533__$1,(11),out,inst_47511);
} else {
if((state_val_47534 === (5))){
var inst_47498 = (state_47533[(7)]);
var inst_47497 = (state_47533[(8)]);
var inst_47506 = (state_47533[(11)]);
var inst_47501 = (state_47533[(9)]);
var inst_47505 = (inst_47497[inst_47498] = inst_47501);
var inst_47506__$1 = (inst_47498 + (1));
var inst_47507 = (inst_47506__$1 < n);
var state_47533__$1 = (function (){var statearr_47547 = state_47533;
(statearr_47547[(11)] = inst_47506__$1);

(statearr_47547[(12)] = inst_47505);

return statearr_47547;
})();
if(cljs.core.truth_(inst_47507)){
var statearr_47548_47571 = state_47533__$1;
(statearr_47548_47571[(1)] = (8));

} else {
var statearr_47549_47572 = state_47533__$1;
(statearr_47549_47572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (14))){
var inst_47526 = (state_47533[(2)]);
var inst_47527 = cljs.core.async.close_BANG_.call(null,out);
var state_47533__$1 = (function (){var statearr_47551 = state_47533;
(statearr_47551[(13)] = inst_47526);

return statearr_47551;
})();
var statearr_47552_47573 = state_47533__$1;
(statearr_47552_47573[(2)] = inst_47527);

(statearr_47552_47573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (10))){
var inst_47517 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47553_47574 = state_47533__$1;
(statearr_47553_47574[(2)] = inst_47517);

(statearr_47553_47574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (8))){
var inst_47497 = (state_47533[(8)]);
var inst_47506 = (state_47533[(11)]);
var tmp47550 = inst_47497;
var inst_47497__$1 = tmp47550;
var inst_47498 = inst_47506;
var state_47533__$1 = (function (){var statearr_47554 = state_47533;
(statearr_47554[(7)] = inst_47498);

(statearr_47554[(8)] = inst_47497__$1);

return statearr_47554;
})();
var statearr_47555_47575 = state_47533__$1;
(statearr_47555_47575[(2)] = null);

(statearr_47555_47575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47561,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47561,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47556[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47556[(1)] = (1));

return statearr_47556;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47533){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47557){if((e47557 instanceof Object)){
var ex__45675__auto__ = e47557;
var statearr_47558_47576 = state_47533;
(statearr_47558_47576[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47577 = state_47533;
state_47533 = G__47577;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47561,out))
})();
var state__45761__auto__ = (function (){var statearr_47559 = f__45760__auto__.call(null);
(statearr_47559[(6)] = c__45759__auto___47561);

return statearr_47559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47561,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47579 = arguments.length;
switch (G__47579) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45759__auto___47649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___47649,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___47649,out){
return (function (state_47621){
var state_val_47622 = (state_47621[(1)]);
if((state_val_47622 === (7))){
var inst_47617 = (state_47621[(2)]);
var state_47621__$1 = state_47621;
var statearr_47623_47650 = state_47621__$1;
(statearr_47623_47650[(2)] = inst_47617);

(statearr_47623_47650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (1))){
var inst_47580 = [];
var inst_47581 = inst_47580;
var inst_47582 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47621__$1 = (function (){var statearr_47624 = state_47621;
(statearr_47624[(7)] = inst_47582);

(statearr_47624[(8)] = inst_47581);

return statearr_47624;
})();
var statearr_47625_47651 = state_47621__$1;
(statearr_47625_47651[(2)] = null);

(statearr_47625_47651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (4))){
var inst_47585 = (state_47621[(9)]);
var inst_47585__$1 = (state_47621[(2)]);
var inst_47586 = (inst_47585__$1 == null);
var inst_47587 = cljs.core.not.call(null,inst_47586);
var state_47621__$1 = (function (){var statearr_47626 = state_47621;
(statearr_47626[(9)] = inst_47585__$1);

return statearr_47626;
})();
if(inst_47587){
var statearr_47627_47652 = state_47621__$1;
(statearr_47627_47652[(1)] = (5));

} else {
var statearr_47628_47653 = state_47621__$1;
(statearr_47628_47653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (15))){
var inst_47611 = (state_47621[(2)]);
var state_47621__$1 = state_47621;
var statearr_47629_47654 = state_47621__$1;
(statearr_47629_47654[(2)] = inst_47611);

(statearr_47629_47654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (13))){
var state_47621__$1 = state_47621;
var statearr_47630_47655 = state_47621__$1;
(statearr_47630_47655[(2)] = null);

(statearr_47630_47655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (6))){
var inst_47581 = (state_47621[(8)]);
var inst_47606 = inst_47581.length;
var inst_47607 = (inst_47606 > (0));
var state_47621__$1 = state_47621;
if(cljs.core.truth_(inst_47607)){
var statearr_47631_47656 = state_47621__$1;
(statearr_47631_47656[(1)] = (12));

} else {
var statearr_47632_47657 = state_47621__$1;
(statearr_47632_47657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (3))){
var inst_47619 = (state_47621[(2)]);
var state_47621__$1 = state_47621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47621__$1,inst_47619);
} else {
if((state_val_47622 === (12))){
var inst_47581 = (state_47621[(8)]);
var inst_47609 = cljs.core.vec.call(null,inst_47581);
var state_47621__$1 = state_47621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47621__$1,(15),out,inst_47609);
} else {
if((state_val_47622 === (2))){
var state_47621__$1 = state_47621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47621__$1,(4),ch);
} else {
if((state_val_47622 === (11))){
var inst_47589 = (state_47621[(10)]);
var inst_47585 = (state_47621[(9)]);
var inst_47599 = (state_47621[(2)]);
var inst_47600 = [];
var inst_47601 = inst_47600.push(inst_47585);
var inst_47581 = inst_47600;
var inst_47582 = inst_47589;
var state_47621__$1 = (function (){var statearr_47633 = state_47621;
(statearr_47633[(7)] = inst_47582);

(statearr_47633[(8)] = inst_47581);

(statearr_47633[(11)] = inst_47601);

(statearr_47633[(12)] = inst_47599);

return statearr_47633;
})();
var statearr_47634_47658 = state_47621__$1;
(statearr_47634_47658[(2)] = null);

(statearr_47634_47658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (9))){
var inst_47581 = (state_47621[(8)]);
var inst_47597 = cljs.core.vec.call(null,inst_47581);
var state_47621__$1 = state_47621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47621__$1,(11),out,inst_47597);
} else {
if((state_val_47622 === (5))){
var inst_47582 = (state_47621[(7)]);
var inst_47589 = (state_47621[(10)]);
var inst_47585 = (state_47621[(9)]);
var inst_47589__$1 = f.call(null,inst_47585);
var inst_47590 = cljs.core._EQ_.call(null,inst_47589__$1,inst_47582);
var inst_47591 = cljs.core.keyword_identical_QMARK_.call(null,inst_47582,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47592 = (inst_47590) || (inst_47591);
var state_47621__$1 = (function (){var statearr_47635 = state_47621;
(statearr_47635[(10)] = inst_47589__$1);

return statearr_47635;
})();
if(cljs.core.truth_(inst_47592)){
var statearr_47636_47659 = state_47621__$1;
(statearr_47636_47659[(1)] = (8));

} else {
var statearr_47637_47660 = state_47621__$1;
(statearr_47637_47660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (14))){
var inst_47614 = (state_47621[(2)]);
var inst_47615 = cljs.core.async.close_BANG_.call(null,out);
var state_47621__$1 = (function (){var statearr_47639 = state_47621;
(statearr_47639[(13)] = inst_47614);

return statearr_47639;
})();
var statearr_47640_47661 = state_47621__$1;
(statearr_47640_47661[(2)] = inst_47615);

(statearr_47640_47661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (10))){
var inst_47604 = (state_47621[(2)]);
var state_47621__$1 = state_47621;
var statearr_47641_47662 = state_47621__$1;
(statearr_47641_47662[(2)] = inst_47604);

(statearr_47641_47662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47622 === (8))){
var inst_47589 = (state_47621[(10)]);
var inst_47585 = (state_47621[(9)]);
var inst_47581 = (state_47621[(8)]);
var inst_47594 = inst_47581.push(inst_47585);
var tmp47638 = inst_47581;
var inst_47581__$1 = tmp47638;
var inst_47582 = inst_47589;
var state_47621__$1 = (function (){var statearr_47642 = state_47621;
(statearr_47642[(7)] = inst_47582);

(statearr_47642[(8)] = inst_47581__$1);

(statearr_47642[(14)] = inst_47594);

return statearr_47642;
})();
var statearr_47643_47663 = state_47621__$1;
(statearr_47643_47663[(2)] = null);

(statearr_47643_47663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45759__auto___47649,out))
;
return ((function (switch__45671__auto__,c__45759__auto___47649,out){
return (function() {
var cljs$core$async$state_machine__45672__auto__ = null;
var cljs$core$async$state_machine__45672__auto____0 = (function (){
var statearr_47644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47644[(0)] = cljs$core$async$state_machine__45672__auto__);

(statearr_47644[(1)] = (1));

return statearr_47644;
});
var cljs$core$async$state_machine__45672__auto____1 = (function (state_47621){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_47621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e47645){if((e47645 instanceof Object)){
var ex__45675__auto__ = e47645;
var statearr_47646_47664 = state_47621;
(statearr_47646_47664[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47665 = state_47621;
state_47621 = G__47665;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
cljs$core$async$state_machine__45672__auto__ = function(state_47621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45672__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45672__auto____1.call(this,state_47621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45672__auto____0;
cljs$core$async$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45672__auto____1;
return cljs$core$async$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___47649,out))
})();
var state__45761__auto__ = (function (){var statearr_47647 = f__45760__auto__.call(null);
(statearr_47647[(6)] = c__45759__auto___47649);

return statearr_47647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___47649,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502732689647
