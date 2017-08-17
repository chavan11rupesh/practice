// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__40235__auto__,writer__40236__auto__,opt__40237__auto__){
return cljs.core._write.call(null,writer__40236__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49858 = arguments.length;
var i__40775__auto___49859 = (0);
while(true){
if((i__40775__auto___49859 < len__40774__auto___49858)){
args__40781__auto__.push((arguments[i__40775__auto___49859]));

var G__49860 = (i__40775__auto___49859 + (1));
i__40775__auto___49859 = G__49860;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49857){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49857));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49862 = arguments.length;
var i__40775__auto___49863 = (0);
while(true){
if((i__40775__auto___49863 < len__40774__auto___49862)){
args__40781__auto__.push((arguments[i__40775__auto___49863]));

var G__49864 = (i__40775__auto___49863 + (1));
i__40775__auto___49863 = G__49864;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49861){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49861));
});

var g_QMARK__49865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_49866 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49865){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49865))
,null));
var mkg_49867 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49865,g_49866){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49865,g_49866))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49865,g_49866,mkg_49867){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49865).call(null,x);
});})(g_QMARK__49865,g_49866,mkg_49867))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49865,g_49866,mkg_49867){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49867).call(null,gfn);
});})(g_QMARK__49865,g_49866,mkg_49867))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49865,g_49866,mkg_49867){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49866).call(null,generator);
});})(g_QMARK__49865,g_49866,mkg_49867))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42170__auto___49887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42170__auto___49887){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49888 = arguments.length;
var i__40775__auto___49889 = (0);
while(true){
if((i__40775__auto___49889 < len__40774__auto___49888)){
args__40781__auto__.push((arguments[i__40775__auto___49889]));

var G__49890 = (i__40775__auto___49889 + (1));
i__40775__auto___49889 = G__49890;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49887))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49887),args);
});})(g__42170__auto___49887))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42170__auto___49887){
return (function (seq49868){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49868));
});})(g__42170__auto___49887))
;


var g__42170__auto___49891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42170__auto___49891){
return (function cljs$spec$gen$alpha$list(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49892 = arguments.length;
var i__40775__auto___49893 = (0);
while(true){
if((i__40775__auto___49893 < len__40774__auto___49892)){
args__40781__auto__.push((arguments[i__40775__auto___49893]));

var G__49894 = (i__40775__auto___49893 + (1));
i__40775__auto___49893 = G__49894;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49891))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49891),args);
});})(g__42170__auto___49891))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42170__auto___49891){
return (function (seq49869){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49869));
});})(g__42170__auto___49891))
;


var g__42170__auto___49895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42170__auto___49895){
return (function cljs$spec$gen$alpha$map(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49896 = arguments.length;
var i__40775__auto___49897 = (0);
while(true){
if((i__40775__auto___49897 < len__40774__auto___49896)){
args__40781__auto__.push((arguments[i__40775__auto___49897]));

var G__49898 = (i__40775__auto___49897 + (1));
i__40775__auto___49897 = G__49898;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49895))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49895),args);
});})(g__42170__auto___49895))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42170__auto___49895){
return (function (seq49870){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49870));
});})(g__42170__auto___49895))
;


var g__42170__auto___49899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42170__auto___49899){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49900 = arguments.length;
var i__40775__auto___49901 = (0);
while(true){
if((i__40775__auto___49901 < len__40774__auto___49900)){
args__40781__auto__.push((arguments[i__40775__auto___49901]));

var G__49902 = (i__40775__auto___49901 + (1));
i__40775__auto___49901 = G__49902;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49899))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49899),args);
});})(g__42170__auto___49899))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42170__auto___49899){
return (function (seq49871){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49871));
});})(g__42170__auto___49899))
;


var g__42170__auto___49903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42170__auto___49903){
return (function cljs$spec$gen$alpha$set(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49904 = arguments.length;
var i__40775__auto___49905 = (0);
while(true){
if((i__40775__auto___49905 < len__40774__auto___49904)){
args__40781__auto__.push((arguments[i__40775__auto___49905]));

var G__49906 = (i__40775__auto___49905 + (1));
i__40775__auto___49905 = G__49906;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49903))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49903),args);
});})(g__42170__auto___49903))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42170__auto___49903){
return (function (seq49872){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49872));
});})(g__42170__auto___49903))
;


var g__42170__auto___49907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42170__auto___49907){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49908 = arguments.length;
var i__40775__auto___49909 = (0);
while(true){
if((i__40775__auto___49909 < len__40774__auto___49908)){
args__40781__auto__.push((arguments[i__40775__auto___49909]));

var G__49910 = (i__40775__auto___49909 + (1));
i__40775__auto___49909 = G__49910;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49907))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49907),args);
});})(g__42170__auto___49907))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42170__auto___49907){
return (function (seq49873){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49873));
});})(g__42170__auto___49907))
;


var g__42170__auto___49911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42170__auto___49911){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49912 = arguments.length;
var i__40775__auto___49913 = (0);
while(true){
if((i__40775__auto___49913 < len__40774__auto___49912)){
args__40781__auto__.push((arguments[i__40775__auto___49913]));

var G__49914 = (i__40775__auto___49913 + (1));
i__40775__auto___49913 = G__49914;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49911))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49911),args);
});})(g__42170__auto___49911))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42170__auto___49911){
return (function (seq49874){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49874));
});})(g__42170__auto___49911))
;


var g__42170__auto___49915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42170__auto___49915){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49916 = arguments.length;
var i__40775__auto___49917 = (0);
while(true){
if((i__40775__auto___49917 < len__40774__auto___49916)){
args__40781__auto__.push((arguments[i__40775__auto___49917]));

var G__49918 = (i__40775__auto___49917 + (1));
i__40775__auto___49917 = G__49918;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49915))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49915),args);
});})(g__42170__auto___49915))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42170__auto___49915){
return (function (seq49875){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49875));
});})(g__42170__auto___49915))
;


var g__42170__auto___49919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42170__auto___49919){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49920 = arguments.length;
var i__40775__auto___49921 = (0);
while(true){
if((i__40775__auto___49921 < len__40774__auto___49920)){
args__40781__auto__.push((arguments[i__40775__auto___49921]));

var G__49922 = (i__40775__auto___49921 + (1));
i__40775__auto___49921 = G__49922;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49919))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49919),args);
});})(g__42170__auto___49919))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42170__auto___49919){
return (function (seq49876){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49876));
});})(g__42170__auto___49919))
;


var g__42170__auto___49923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42170__auto___49923){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49924 = arguments.length;
var i__40775__auto___49925 = (0);
while(true){
if((i__40775__auto___49925 < len__40774__auto___49924)){
args__40781__auto__.push((arguments[i__40775__auto___49925]));

var G__49926 = (i__40775__auto___49925 + (1));
i__40775__auto___49925 = G__49926;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49923))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49923),args);
});})(g__42170__auto___49923))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42170__auto___49923){
return (function (seq49877){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49877));
});})(g__42170__auto___49923))
;


var g__42170__auto___49927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42170__auto___49927){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49928 = arguments.length;
var i__40775__auto___49929 = (0);
while(true){
if((i__40775__auto___49929 < len__40774__auto___49928)){
args__40781__auto__.push((arguments[i__40775__auto___49929]));

var G__49930 = (i__40775__auto___49929 + (1));
i__40775__auto___49929 = G__49930;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49927))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49927),args);
});})(g__42170__auto___49927))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42170__auto___49927){
return (function (seq49878){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49878));
});})(g__42170__auto___49927))
;


var g__42170__auto___49931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42170__auto___49931){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49932 = arguments.length;
var i__40775__auto___49933 = (0);
while(true){
if((i__40775__auto___49933 < len__40774__auto___49932)){
args__40781__auto__.push((arguments[i__40775__auto___49933]));

var G__49934 = (i__40775__auto___49933 + (1));
i__40775__auto___49933 = G__49934;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49931))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49931),args);
});})(g__42170__auto___49931))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42170__auto___49931){
return (function (seq49879){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49879));
});})(g__42170__auto___49931))
;


var g__42170__auto___49935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42170__auto___49935){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49936 = arguments.length;
var i__40775__auto___49937 = (0);
while(true){
if((i__40775__auto___49937 < len__40774__auto___49936)){
args__40781__auto__.push((arguments[i__40775__auto___49937]));

var G__49938 = (i__40775__auto___49937 + (1));
i__40775__auto___49937 = G__49938;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49935))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49935),args);
});})(g__42170__auto___49935))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42170__auto___49935){
return (function (seq49880){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49880));
});})(g__42170__auto___49935))
;


var g__42170__auto___49939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42170__auto___49939){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49940 = arguments.length;
var i__40775__auto___49941 = (0);
while(true){
if((i__40775__auto___49941 < len__40774__auto___49940)){
args__40781__auto__.push((arguments[i__40775__auto___49941]));

var G__49942 = (i__40775__auto___49941 + (1));
i__40775__auto___49941 = G__49942;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49939))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49939),args);
});})(g__42170__auto___49939))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42170__auto___49939){
return (function (seq49881){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49881));
});})(g__42170__auto___49939))
;


var g__42170__auto___49943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42170__auto___49943){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49944 = arguments.length;
var i__40775__auto___49945 = (0);
while(true){
if((i__40775__auto___49945 < len__40774__auto___49944)){
args__40781__auto__.push((arguments[i__40775__auto___49945]));

var G__49946 = (i__40775__auto___49945 + (1));
i__40775__auto___49945 = G__49946;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49943))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49943){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49943),args);
});})(g__42170__auto___49943))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42170__auto___49943){
return (function (seq49882){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49882));
});})(g__42170__auto___49943))
;


var g__42170__auto___49947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42170__auto___49947){
return (function cljs$spec$gen$alpha$return(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49948 = arguments.length;
var i__40775__auto___49949 = (0);
while(true){
if((i__40775__auto___49949 < len__40774__auto___49948)){
args__40781__auto__.push((arguments[i__40775__auto___49949]));

var G__49950 = (i__40775__auto___49949 + (1));
i__40775__auto___49949 = G__49950;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49947))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49947){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49947),args);
});})(g__42170__auto___49947))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42170__auto___49947){
return (function (seq49883){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49883));
});})(g__42170__auto___49947))
;


var g__42170__auto___49951 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42170__auto___49951){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49952 = arguments.length;
var i__40775__auto___49953 = (0);
while(true){
if((i__40775__auto___49953 < len__40774__auto___49952)){
args__40781__auto__.push((arguments[i__40775__auto___49953]));

var G__49954 = (i__40775__auto___49953 + (1));
i__40775__auto___49953 = G__49954;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49951))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49951){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49951),args);
});})(g__42170__auto___49951))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42170__auto___49951){
return (function (seq49884){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49884));
});})(g__42170__auto___49951))
;


var g__42170__auto___49955 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42170__auto___49955){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49956 = arguments.length;
var i__40775__auto___49957 = (0);
while(true){
if((i__40775__auto___49957 < len__40774__auto___49956)){
args__40781__auto__.push((arguments[i__40775__auto___49957]));

var G__49958 = (i__40775__auto___49957 + (1));
i__40775__auto___49957 = G__49958;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49955))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49955){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49955),args);
});})(g__42170__auto___49955))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42170__auto___49955){
return (function (seq49885){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49885));
});})(g__42170__auto___49955))
;


var g__42170__auto___49959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42170__auto___49959){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49960 = arguments.length;
var i__40775__auto___49961 = (0);
while(true){
if((i__40775__auto___49961 < len__40774__auto___49960)){
args__40781__auto__.push((arguments[i__40775__auto___49961]));

var G__49962 = (i__40775__auto___49961 + (1));
i__40775__auto___49961 = G__49962;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42170__auto___49959))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42170__auto___49959){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42170__auto___49959),args);
});})(g__42170__auto___49959))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42170__auto___49959){
return (function (seq49886){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49886));
});})(g__42170__auto___49959))
;

var g__42183__auto___49984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42183__auto___49984){
return (function cljs$spec$gen$alpha$any(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49985 = arguments.length;
var i__40775__auto___49986 = (0);
while(true){
if((i__40775__auto___49986 < len__40774__auto___49985)){
args__40781__auto__.push((arguments[i__40775__auto___49986]));

var G__49987 = (i__40775__auto___49986 + (1));
i__40775__auto___49986 = G__49987;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___49984))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___49984){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___49984);
});})(g__42183__auto___49984))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42183__auto___49984){
return (function (seq49963){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49963));
});})(g__42183__auto___49984))
;


var g__42183__auto___49988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42183__auto___49988){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49989 = arguments.length;
var i__40775__auto___49990 = (0);
while(true){
if((i__40775__auto___49990 < len__40774__auto___49989)){
args__40781__auto__.push((arguments[i__40775__auto___49990]));

var G__49991 = (i__40775__auto___49990 + (1));
i__40775__auto___49990 = G__49991;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___49988))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___49988){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___49988);
});})(g__42183__auto___49988))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42183__auto___49988){
return (function (seq49964){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49964));
});})(g__42183__auto___49988))
;


var g__42183__auto___49992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42183__auto___49992){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49993 = arguments.length;
var i__40775__auto___49994 = (0);
while(true){
if((i__40775__auto___49994 < len__40774__auto___49993)){
args__40781__auto__.push((arguments[i__40775__auto___49994]));

var G__49995 = (i__40775__auto___49994 + (1));
i__40775__auto___49994 = G__49995;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___49992))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___49992){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___49992);
});})(g__42183__auto___49992))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42183__auto___49992){
return (function (seq49965){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49965));
});})(g__42183__auto___49992))
;


var g__42183__auto___49996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42183__auto___49996){
return (function cljs$spec$gen$alpha$char(var_args){
var args__40781__auto__ = [];
var len__40774__auto___49997 = arguments.length;
var i__40775__auto___49998 = (0);
while(true){
if((i__40775__auto___49998 < len__40774__auto___49997)){
args__40781__auto__.push((arguments[i__40775__auto___49998]));

var G__49999 = (i__40775__auto___49998 + (1));
i__40775__auto___49998 = G__49999;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___49996))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___49996){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___49996);
});})(g__42183__auto___49996))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42183__auto___49996){
return (function (seq49966){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49966));
});})(g__42183__auto___49996))
;


var g__42183__auto___50000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42183__auto___50000){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50001 = arguments.length;
var i__40775__auto___50002 = (0);
while(true){
if((i__40775__auto___50002 < len__40774__auto___50001)){
args__40781__auto__.push((arguments[i__40775__auto___50002]));

var G__50003 = (i__40775__auto___50002 + (1));
i__40775__auto___50002 = G__50003;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50000))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50000){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50000);
});})(g__42183__auto___50000))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42183__auto___50000){
return (function (seq49967){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49967));
});})(g__42183__auto___50000))
;


var g__42183__auto___50004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42183__auto___50004){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50005 = arguments.length;
var i__40775__auto___50006 = (0);
while(true){
if((i__40775__auto___50006 < len__40774__auto___50005)){
args__40781__auto__.push((arguments[i__40775__auto___50006]));

var G__50007 = (i__40775__auto___50006 + (1));
i__40775__auto___50006 = G__50007;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50004))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50004){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50004);
});})(g__42183__auto___50004))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42183__auto___50004){
return (function (seq49968){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49968));
});})(g__42183__auto___50004))
;


var g__42183__auto___50008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42183__auto___50008){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50009 = arguments.length;
var i__40775__auto___50010 = (0);
while(true){
if((i__40775__auto___50010 < len__40774__auto___50009)){
args__40781__auto__.push((arguments[i__40775__auto___50010]));

var G__50011 = (i__40775__auto___50010 + (1));
i__40775__auto___50010 = G__50011;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50008))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50008){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50008);
});})(g__42183__auto___50008))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42183__auto___50008){
return (function (seq49969){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49969));
});})(g__42183__auto___50008))
;


var g__42183__auto___50012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42183__auto___50012){
return (function cljs$spec$gen$alpha$double(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50013 = arguments.length;
var i__40775__auto___50014 = (0);
while(true){
if((i__40775__auto___50014 < len__40774__auto___50013)){
args__40781__auto__.push((arguments[i__40775__auto___50014]));

var G__50015 = (i__40775__auto___50014 + (1));
i__40775__auto___50014 = G__50015;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50012))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50012){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50012);
});})(g__42183__auto___50012))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42183__auto___50012){
return (function (seq49970){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49970));
});})(g__42183__auto___50012))
;


var g__42183__auto___50016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42183__auto___50016){
return (function cljs$spec$gen$alpha$int(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50017 = arguments.length;
var i__40775__auto___50018 = (0);
while(true){
if((i__40775__auto___50018 < len__40774__auto___50017)){
args__40781__auto__.push((arguments[i__40775__auto___50018]));

var G__50019 = (i__40775__auto___50018 + (1));
i__40775__auto___50018 = G__50019;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50016))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50016){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50016);
});})(g__42183__auto___50016))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42183__auto___50016){
return (function (seq49971){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49971));
});})(g__42183__auto___50016))
;


var g__42183__auto___50020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42183__auto___50020){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50021 = arguments.length;
var i__40775__auto___50022 = (0);
while(true){
if((i__40775__auto___50022 < len__40774__auto___50021)){
args__40781__auto__.push((arguments[i__40775__auto___50022]));

var G__50023 = (i__40775__auto___50022 + (1));
i__40775__auto___50022 = G__50023;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50020))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50020){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50020);
});})(g__42183__auto___50020))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42183__auto___50020){
return (function (seq49972){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49972));
});})(g__42183__auto___50020))
;


var g__42183__auto___50024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42183__auto___50024){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50025 = arguments.length;
var i__40775__auto___50026 = (0);
while(true){
if((i__40775__auto___50026 < len__40774__auto___50025)){
args__40781__auto__.push((arguments[i__40775__auto___50026]));

var G__50027 = (i__40775__auto___50026 + (1));
i__40775__auto___50026 = G__50027;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50024))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50024){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50024);
});})(g__42183__auto___50024))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42183__auto___50024){
return (function (seq49973){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49973));
});})(g__42183__auto___50024))
;


var g__42183__auto___50028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42183__auto___50028){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50029 = arguments.length;
var i__40775__auto___50030 = (0);
while(true){
if((i__40775__auto___50030 < len__40774__auto___50029)){
args__40781__auto__.push((arguments[i__40775__auto___50030]));

var G__50031 = (i__40775__auto___50030 + (1));
i__40775__auto___50030 = G__50031;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50028))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50028){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50028);
});})(g__42183__auto___50028))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42183__auto___50028){
return (function (seq49974){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49974));
});})(g__42183__auto___50028))
;


var g__42183__auto___50032 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42183__auto___50032){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50033 = arguments.length;
var i__40775__auto___50034 = (0);
while(true){
if((i__40775__auto___50034 < len__40774__auto___50033)){
args__40781__auto__.push((arguments[i__40775__auto___50034]));

var G__50035 = (i__40775__auto___50034 + (1));
i__40775__auto___50034 = G__50035;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50032))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50032){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50032);
});})(g__42183__auto___50032))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42183__auto___50032){
return (function (seq49975){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49975));
});})(g__42183__auto___50032))
;


var g__42183__auto___50036 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42183__auto___50036){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50037 = arguments.length;
var i__40775__auto___50038 = (0);
while(true){
if((i__40775__auto___50038 < len__40774__auto___50037)){
args__40781__auto__.push((arguments[i__40775__auto___50038]));

var G__50039 = (i__40775__auto___50038 + (1));
i__40775__auto___50038 = G__50039;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50036))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50036){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50036);
});})(g__42183__auto___50036))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42183__auto___50036){
return (function (seq49976){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49976));
});})(g__42183__auto___50036))
;


var g__42183__auto___50040 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42183__auto___50040){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50041 = arguments.length;
var i__40775__auto___50042 = (0);
while(true){
if((i__40775__auto___50042 < len__40774__auto___50041)){
args__40781__auto__.push((arguments[i__40775__auto___50042]));

var G__50043 = (i__40775__auto___50042 + (1));
i__40775__auto___50042 = G__50043;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50040))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50040){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50040);
});})(g__42183__auto___50040))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42183__auto___50040){
return (function (seq49977){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49977));
});})(g__42183__auto___50040))
;


var g__42183__auto___50044 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42183__auto___50044){
return (function cljs$spec$gen$alpha$string(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50045 = arguments.length;
var i__40775__auto___50046 = (0);
while(true){
if((i__40775__auto___50046 < len__40774__auto___50045)){
args__40781__auto__.push((arguments[i__40775__auto___50046]));

var G__50047 = (i__40775__auto___50046 + (1));
i__40775__auto___50046 = G__50047;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50044))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50044){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50044);
});})(g__42183__auto___50044))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42183__auto___50044){
return (function (seq49978){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49978));
});})(g__42183__auto___50044))
;


var g__42183__auto___50048 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42183__auto___50048){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50049 = arguments.length;
var i__40775__auto___50050 = (0);
while(true){
if((i__40775__auto___50050 < len__40774__auto___50049)){
args__40781__auto__.push((arguments[i__40775__auto___50050]));

var G__50051 = (i__40775__auto___50050 + (1));
i__40775__auto___50050 = G__50051;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50048))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50048){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50048);
});})(g__42183__auto___50048))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42183__auto___50048){
return (function (seq49979){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49979));
});})(g__42183__auto___50048))
;


var g__42183__auto___50052 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42183__auto___50052){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50053 = arguments.length;
var i__40775__auto___50054 = (0);
while(true){
if((i__40775__auto___50054 < len__40774__auto___50053)){
args__40781__auto__.push((arguments[i__40775__auto___50054]));

var G__50055 = (i__40775__auto___50054 + (1));
i__40775__auto___50054 = G__50055;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50052))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50052){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50052);
});})(g__42183__auto___50052))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42183__auto___50052){
return (function (seq49980){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49980));
});})(g__42183__auto___50052))
;


var g__42183__auto___50056 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42183__auto___50056){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50057 = arguments.length;
var i__40775__auto___50058 = (0);
while(true){
if((i__40775__auto___50058 < len__40774__auto___50057)){
args__40781__auto__.push((arguments[i__40775__auto___50058]));

var G__50059 = (i__40775__auto___50058 + (1));
i__40775__auto___50058 = G__50059;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50056))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50056){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50056);
});})(g__42183__auto___50056))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42183__auto___50056){
return (function (seq49981){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49981));
});})(g__42183__auto___50056))
;


var g__42183__auto___50060 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42183__auto___50060){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50061 = arguments.length;
var i__40775__auto___50062 = (0);
while(true){
if((i__40775__auto___50062 < len__40774__auto___50061)){
args__40781__auto__.push((arguments[i__40775__auto___50062]));

var G__50063 = (i__40775__auto___50062 + (1));
i__40775__auto___50062 = G__50063;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50060))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50060){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50060);
});})(g__42183__auto___50060))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42183__auto___50060){
return (function (seq49982){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49982));
});})(g__42183__auto___50060))
;


var g__42183__auto___50064 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42183__auto___50064){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50065 = arguments.length;
var i__40775__auto___50066 = (0);
while(true){
if((i__40775__auto___50066 < len__40774__auto___50065)){
args__40781__auto__.push((arguments[i__40775__auto___50066]));

var G__50067 = (i__40775__auto___50066 + (1));
i__40775__auto___50066 = G__50067;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});})(g__42183__auto___50064))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42183__auto___50064){
return (function (args){
return cljs.core.deref.call(null,g__42183__auto___50064);
});})(g__42183__auto___50064))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42183__auto___50064){
return (function (seq49983){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49983));
});})(g__42183__auto___50064))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50070 = arguments.length;
var i__40775__auto___50071 = (0);
while(true){
if((i__40775__auto___50071 < len__40774__auto___50070)){
args__40781__auto__.push((arguments[i__40775__auto___50071]));

var G__50072 = (i__40775__auto___50071 + (1));
i__40775__auto___50071 = G__50072;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50068_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50068_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50069){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50069));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50073_SHARP_){
return (new Date(p1__50073_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1502732694637
