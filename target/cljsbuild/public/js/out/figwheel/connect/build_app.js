// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('practice.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('practice.app');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43666__delegate = function (x){
if(cljs.core.truth_(practice.core.mount_components)){
return cljs.core.apply.call(null,practice.core.mount_components,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'practice.core/mount-components' is missing");
}
};
var G__43666 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__43667__i = 0, G__43667__a = new Array(arguments.length -  0);
while (G__43667__i < G__43667__a.length) {G__43667__a[G__43667__i] = arguments[G__43667__i + 0]; ++G__43667__i;}
  x = new cljs.core.IndexedSeq(G__43667__a,0,null);
} 
return G__43666__delegate.call(this,x);};
G__43666.cljs$lang$maxFixedArity = 0;
G__43666.cljs$lang$applyTo = (function (arglist__43668){
var x = cljs.core.seq(arglist__43668);
return G__43666__delegate(x);
});
G__43666.cljs$core$IFn$_invoke$arity$variadic = G__43666__delegate;
return G__43666;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1502988646155
