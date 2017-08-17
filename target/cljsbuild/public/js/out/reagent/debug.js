// Compiled by ClojureScript 1.9.854 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43314__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43315__i = 0, G__43315__a = new Array(arguments.length -  0);
while (G__43315__i < G__43315__a.length) {G__43315__a[G__43315__i] = arguments[G__43315__i + 0]; ++G__43315__i;}
  args = new cljs.core.IndexedSeq(G__43315__a,0,null);
} 
return G__43314__delegate.call(this,args);};
G__43314.cljs$lang$maxFixedArity = 0;
G__43314.cljs$lang$applyTo = (function (arglist__43316){
var args = cljs.core.seq(arglist__43316);
return G__43314__delegate(args);
});
G__43314.cljs$core$IFn$_invoke$arity$variadic = G__43314__delegate;
return G__43314;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43317__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43318__i = 0, G__43318__a = new Array(arguments.length -  0);
while (G__43318__i < G__43318__a.length) {G__43318__a[G__43318__i] = arguments[G__43318__i + 0]; ++G__43318__i;}
  args = new cljs.core.IndexedSeq(G__43318__a,0,null);
} 
return G__43317__delegate.call(this,args);};
G__43317.cljs$lang$maxFixedArity = 0;
G__43317.cljs$lang$applyTo = (function (arglist__43319){
var args = cljs.core.seq(arglist__43319);
return G__43317__delegate(args);
});
G__43317.cljs$core$IFn$_invoke$arity$variadic = G__43317__delegate;
return G__43317;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502732683168
