// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__39610__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39610__auto__){
return or__39610__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__39610__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
var or__39610__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__39610__auto____$1)){
return or__39610__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49236_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49236_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49237 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49238 = null;
var count__49239 = (0);
var i__49240 = (0);
while(true){
if((i__49240 < count__49239)){
var n = cljs.core._nth.call(null,chunk__49238,i__49240);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49241 = seq__49237;
var G__49242 = chunk__49238;
var G__49243 = count__49239;
var G__49244 = (i__49240 + (1));
seq__49237 = G__49241;
chunk__49238 = G__49242;
count__49239 = G__49243;
i__49240 = G__49244;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49237);
if(temp__4657__auto__){
var seq__49237__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49237__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__49237__$1);
var G__49245 = cljs.core.chunk_rest.call(null,seq__49237__$1);
var G__49246 = c__40444__auto__;
var G__49247 = cljs.core.count.call(null,c__40444__auto__);
var G__49248 = (0);
seq__49237 = G__49245;
chunk__49238 = G__49246;
count__49239 = G__49247;
i__49240 = G__49248;
continue;
} else {
var n = cljs.core.first.call(null,seq__49237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49249 = cljs.core.next.call(null,seq__49237__$1);
var G__49250 = null;
var G__49251 = (0);
var G__49252 = (0);
seq__49237 = G__49249;
chunk__49238 = G__49250;
count__49239 = G__49251;
i__49240 = G__49252;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49262_49270 = cljs.core.seq.call(null,deps);
var chunk__49263_49271 = null;
var count__49264_49272 = (0);
var i__49265_49273 = (0);
while(true){
if((i__49265_49273 < count__49264_49272)){
var dep_49274 = cljs.core._nth.call(null,chunk__49263_49271,i__49265_49273);
topo_sort_helper_STAR_.call(null,dep_49274,(depth + (1)),state);

var G__49275 = seq__49262_49270;
var G__49276 = chunk__49263_49271;
var G__49277 = count__49264_49272;
var G__49278 = (i__49265_49273 + (1));
seq__49262_49270 = G__49275;
chunk__49263_49271 = G__49276;
count__49264_49272 = G__49277;
i__49265_49273 = G__49278;
continue;
} else {
var temp__4657__auto___49279 = cljs.core.seq.call(null,seq__49262_49270);
if(temp__4657__auto___49279){
var seq__49262_49280__$1 = temp__4657__auto___49279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49262_49280__$1)){
var c__40444__auto___49281 = cljs.core.chunk_first.call(null,seq__49262_49280__$1);
var G__49282 = cljs.core.chunk_rest.call(null,seq__49262_49280__$1);
var G__49283 = c__40444__auto___49281;
var G__49284 = cljs.core.count.call(null,c__40444__auto___49281);
var G__49285 = (0);
seq__49262_49270 = G__49282;
chunk__49263_49271 = G__49283;
count__49264_49272 = G__49284;
i__49265_49273 = G__49285;
continue;
} else {
var dep_49286 = cljs.core.first.call(null,seq__49262_49280__$1);
topo_sort_helper_STAR_.call(null,dep_49286,(depth + (1)),state);

var G__49287 = cljs.core.next.call(null,seq__49262_49280__$1);
var G__49288 = null;
var G__49289 = (0);
var G__49290 = (0);
seq__49262_49270 = G__49287;
chunk__49263_49271 = G__49288;
count__49264_49272 = G__49289;
i__49265_49273 = G__49290;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49266){
var vec__49267 = p__49266;
var seq__49268 = cljs.core.seq.call(null,vec__49267);
var first__49269 = cljs.core.first.call(null,seq__49268);
var seq__49268__$1 = cljs.core.next.call(null,seq__49268);
var x = first__49269;
var xs = seq__49268__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49267,seq__49268,first__49269,seq__49268__$1,x,xs,get_deps__$1){
return (function (p1__49253_SHARP_){
return clojure.set.difference.call(null,p1__49253_SHARP_,x);
});})(vec__49267,seq__49268,first__49269,seq__49268__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49291 = cljs.core.seq.call(null,provides);
var chunk__49292 = null;
var count__49293 = (0);
var i__49294 = (0);
while(true){
if((i__49294 < count__49293)){
var prov = cljs.core._nth.call(null,chunk__49292,i__49294);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49295_49303 = cljs.core.seq.call(null,requires);
var chunk__49296_49304 = null;
var count__49297_49305 = (0);
var i__49298_49306 = (0);
while(true){
if((i__49298_49306 < count__49297_49305)){
var req_49307 = cljs.core._nth.call(null,chunk__49296_49304,i__49298_49306);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49307,prov);

var G__49308 = seq__49295_49303;
var G__49309 = chunk__49296_49304;
var G__49310 = count__49297_49305;
var G__49311 = (i__49298_49306 + (1));
seq__49295_49303 = G__49308;
chunk__49296_49304 = G__49309;
count__49297_49305 = G__49310;
i__49298_49306 = G__49311;
continue;
} else {
var temp__4657__auto___49312 = cljs.core.seq.call(null,seq__49295_49303);
if(temp__4657__auto___49312){
var seq__49295_49313__$1 = temp__4657__auto___49312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49295_49313__$1)){
var c__40444__auto___49314 = cljs.core.chunk_first.call(null,seq__49295_49313__$1);
var G__49315 = cljs.core.chunk_rest.call(null,seq__49295_49313__$1);
var G__49316 = c__40444__auto___49314;
var G__49317 = cljs.core.count.call(null,c__40444__auto___49314);
var G__49318 = (0);
seq__49295_49303 = G__49315;
chunk__49296_49304 = G__49316;
count__49297_49305 = G__49317;
i__49298_49306 = G__49318;
continue;
} else {
var req_49319 = cljs.core.first.call(null,seq__49295_49313__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49319,prov);

var G__49320 = cljs.core.next.call(null,seq__49295_49313__$1);
var G__49321 = null;
var G__49322 = (0);
var G__49323 = (0);
seq__49295_49303 = G__49320;
chunk__49296_49304 = G__49321;
count__49297_49305 = G__49322;
i__49298_49306 = G__49323;
continue;
}
} else {
}
}
break;
}

var G__49324 = seq__49291;
var G__49325 = chunk__49292;
var G__49326 = count__49293;
var G__49327 = (i__49294 + (1));
seq__49291 = G__49324;
chunk__49292 = G__49325;
count__49293 = G__49326;
i__49294 = G__49327;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49291);
if(temp__4657__auto__){
var seq__49291__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49291__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__49291__$1);
var G__49328 = cljs.core.chunk_rest.call(null,seq__49291__$1);
var G__49329 = c__40444__auto__;
var G__49330 = cljs.core.count.call(null,c__40444__auto__);
var G__49331 = (0);
seq__49291 = G__49328;
chunk__49292 = G__49329;
count__49293 = G__49330;
i__49294 = G__49331;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49291__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49299_49332 = cljs.core.seq.call(null,requires);
var chunk__49300_49333 = null;
var count__49301_49334 = (0);
var i__49302_49335 = (0);
while(true){
if((i__49302_49335 < count__49301_49334)){
var req_49336 = cljs.core._nth.call(null,chunk__49300_49333,i__49302_49335);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49336,prov);

var G__49337 = seq__49299_49332;
var G__49338 = chunk__49300_49333;
var G__49339 = count__49301_49334;
var G__49340 = (i__49302_49335 + (1));
seq__49299_49332 = G__49337;
chunk__49300_49333 = G__49338;
count__49301_49334 = G__49339;
i__49302_49335 = G__49340;
continue;
} else {
var temp__4657__auto___49341__$1 = cljs.core.seq.call(null,seq__49299_49332);
if(temp__4657__auto___49341__$1){
var seq__49299_49342__$1 = temp__4657__auto___49341__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49299_49342__$1)){
var c__40444__auto___49343 = cljs.core.chunk_first.call(null,seq__49299_49342__$1);
var G__49344 = cljs.core.chunk_rest.call(null,seq__49299_49342__$1);
var G__49345 = c__40444__auto___49343;
var G__49346 = cljs.core.count.call(null,c__40444__auto___49343);
var G__49347 = (0);
seq__49299_49332 = G__49344;
chunk__49300_49333 = G__49345;
count__49301_49334 = G__49346;
i__49302_49335 = G__49347;
continue;
} else {
var req_49348 = cljs.core.first.call(null,seq__49299_49342__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49348,prov);

var G__49349 = cljs.core.next.call(null,seq__49299_49342__$1);
var G__49350 = null;
var G__49351 = (0);
var G__49352 = (0);
seq__49299_49332 = G__49349;
chunk__49300_49333 = G__49350;
count__49301_49334 = G__49351;
i__49302_49335 = G__49352;
continue;
}
} else {
}
}
break;
}

var G__49353 = cljs.core.next.call(null,seq__49291__$1);
var G__49354 = null;
var G__49355 = (0);
var G__49356 = (0);
seq__49291 = G__49353;
chunk__49292 = G__49354;
count__49293 = G__49355;
i__49294 = G__49356;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49357_49361 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49358_49362 = null;
var count__49359_49363 = (0);
var i__49360_49364 = (0);
while(true){
if((i__49360_49364 < count__49359_49363)){
var ns_49365 = cljs.core._nth.call(null,chunk__49358_49362,i__49360_49364);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49365);

var G__49366 = seq__49357_49361;
var G__49367 = chunk__49358_49362;
var G__49368 = count__49359_49363;
var G__49369 = (i__49360_49364 + (1));
seq__49357_49361 = G__49366;
chunk__49358_49362 = G__49367;
count__49359_49363 = G__49368;
i__49360_49364 = G__49369;
continue;
} else {
var temp__4657__auto___49370 = cljs.core.seq.call(null,seq__49357_49361);
if(temp__4657__auto___49370){
var seq__49357_49371__$1 = temp__4657__auto___49370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49357_49371__$1)){
var c__40444__auto___49372 = cljs.core.chunk_first.call(null,seq__49357_49371__$1);
var G__49373 = cljs.core.chunk_rest.call(null,seq__49357_49371__$1);
var G__49374 = c__40444__auto___49372;
var G__49375 = cljs.core.count.call(null,c__40444__auto___49372);
var G__49376 = (0);
seq__49357_49361 = G__49373;
chunk__49358_49362 = G__49374;
count__49359_49363 = G__49375;
i__49360_49364 = G__49376;
continue;
} else {
var ns_49377 = cljs.core.first.call(null,seq__49357_49371__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49377);

var G__49378 = cljs.core.next.call(null,seq__49357_49371__$1);
var G__49379 = null;
var G__49380 = (0);
var G__49381 = (0);
seq__49357_49361 = G__49378;
chunk__49358_49362 = G__49379;
count__49359_49363 = G__49380;
i__49360_49364 = G__49381;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__39610__auto__ = goog.require__;
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49382__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49383__i = 0, G__49383__a = new Array(arguments.length -  0);
while (G__49383__i < G__49383__a.length) {G__49383__a[G__49383__i] = arguments[G__49383__i + 0]; ++G__49383__i;}
  args = new cljs.core.IndexedSeq(G__49383__a,0,null);
} 
return G__49382__delegate.call(this,args);};
G__49382.cljs$lang$maxFixedArity = 0;
G__49382.cljs$lang$applyTo = (function (arglist__49384){
var args = cljs.core.seq(arglist__49384);
return G__49382__delegate(args);
});
G__49382.cljs$core$IFn$_invoke$arity$variadic = G__49382__delegate;
return G__49382;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49385 = cljs.core._EQ_;
var expr__49386 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49385.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49386))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49385,expr__49386){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49385,expr__49386))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49385,expr__49386){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49388){if((e49388 instanceof Error)){
var e = e49388;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49388;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49385,expr__49386))
} else {
if(cljs.core.truth_(pred__49385.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49386))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49385.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49386))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49385.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49386))){
return ((function (pred__49385,expr__49386){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49389){if((e49389 instanceof Error)){
var e = e49389;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49389;

}
}})());
});
;})(pred__49385,expr__49386))
} else {
return ((function (pred__49385,expr__49386){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49385,expr__49386))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49390,callback){
var map__49391 = p__49390;
var map__49391__$1 = ((((!((map__49391 == null)))?((((map__49391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49391):map__49391);
var file_msg = map__49391__$1;
var request_url = cljs.core.get.call(null,map__49391__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49391,map__49391__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49391,map__49391__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__){
return (function (state_49415){
var state_val_49416 = (state_49415[(1)]);
if((state_val_49416 === (7))){
var inst_49411 = (state_49415[(2)]);
var state_49415__$1 = state_49415;
var statearr_49417_49434 = state_49415__$1;
(statearr_49417_49434[(2)] = inst_49411);

(statearr_49417_49434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (1))){
var state_49415__$1 = state_49415;
var statearr_49418_49435 = state_49415__$1;
(statearr_49418_49435[(2)] = null);

(statearr_49418_49435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (4))){
var inst_49395 = (state_49415[(7)]);
var inst_49395__$1 = (state_49415[(2)]);
var state_49415__$1 = (function (){var statearr_49419 = state_49415;
(statearr_49419[(7)] = inst_49395__$1);

return statearr_49419;
})();
if(cljs.core.truth_(inst_49395__$1)){
var statearr_49420_49436 = state_49415__$1;
(statearr_49420_49436[(1)] = (5));

} else {
var statearr_49421_49437 = state_49415__$1;
(statearr_49421_49437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (6))){
var state_49415__$1 = state_49415;
var statearr_49422_49438 = state_49415__$1;
(statearr_49422_49438[(2)] = null);

(statearr_49422_49438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (3))){
var inst_49413 = (state_49415[(2)]);
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49415__$1,inst_49413);
} else {
if((state_val_49416 === (2))){
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49415__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49416 === (11))){
var inst_49407 = (state_49415[(2)]);
var state_49415__$1 = (function (){var statearr_49423 = state_49415;
(statearr_49423[(8)] = inst_49407);

return statearr_49423;
})();
var statearr_49424_49439 = state_49415__$1;
(statearr_49424_49439[(2)] = null);

(statearr_49424_49439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (9))){
var inst_49399 = (state_49415[(9)]);
var inst_49401 = (state_49415[(10)]);
var inst_49403 = inst_49401.call(null,inst_49399);
var state_49415__$1 = state_49415;
var statearr_49425_49440 = state_49415__$1;
(statearr_49425_49440[(2)] = inst_49403);

(statearr_49425_49440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (5))){
var inst_49395 = (state_49415[(7)]);
var inst_49397 = figwheel.client.file_reloading.blocking_load.call(null,inst_49395);
var state_49415__$1 = state_49415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49415__$1,(8),inst_49397);
} else {
if((state_val_49416 === (10))){
var inst_49399 = (state_49415[(9)]);
var inst_49405 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49399);
var state_49415__$1 = state_49415;
var statearr_49426_49441 = state_49415__$1;
(statearr_49426_49441[(2)] = inst_49405);

(statearr_49426_49441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49416 === (8))){
var inst_49401 = (state_49415[(10)]);
var inst_49395 = (state_49415[(7)]);
var inst_49399 = (state_49415[(2)]);
var inst_49400 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49401__$1 = cljs.core.get.call(null,inst_49400,inst_49395);
var state_49415__$1 = (function (){var statearr_49427 = state_49415;
(statearr_49427[(9)] = inst_49399);

(statearr_49427[(10)] = inst_49401__$1);

return statearr_49427;
})();
if(cljs.core.truth_(inst_49401__$1)){
var statearr_49428_49442 = state_49415__$1;
(statearr_49428_49442[(1)] = (9));

} else {
var statearr_49429_49443 = state_49415__$1;
(statearr_49429_49443[(1)] = (10));

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
});})(c__45759__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45672__auto__ = null;
var figwheel$client$file_reloading$state_machine__45672__auto____0 = (function (){
var statearr_49430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49430[(0)] = figwheel$client$file_reloading$state_machine__45672__auto__);

(statearr_49430[(1)] = (1));

return statearr_49430;
});
var figwheel$client$file_reloading$state_machine__45672__auto____1 = (function (state_49415){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_49415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e49431){if((e49431 instanceof Object)){
var ex__45675__auto__ = e49431;
var statearr_49432_49444 = state_49415;
(statearr_49432_49444[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49445 = state_49415;
state_49415 = G__49445;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45672__auto__ = function(state_49415){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45672__auto____1.call(this,state_49415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45672__auto____0;
figwheel$client$file_reloading$state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45672__auto____1;
return figwheel$client$file_reloading$state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__))
})();
var state__45761__auto__ = (function (){var statearr_49433 = f__45760__auto__.call(null);
(statearr_49433[(6)] = c__45759__auto__);

return statearr_49433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__))
);

return c__45759__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49446,callback){
var map__49447 = p__49446;
var map__49447__$1 = ((((!((map__49447 == null)))?((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49447):map__49447);
var file_msg = map__49447__$1;
var namespace = cljs.core.get.call(null,map__49447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49447,map__49447__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49447,map__49447__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49449){
var map__49450 = p__49449;
var map__49450__$1 = ((((!((map__49450 == null)))?((((map__49450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49450):map__49450);
var file_msg = map__49450__$1;
var namespace = cljs.core.get.call(null,map__49450__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49452){
var map__49453 = p__49452;
var map__49453__$1 = ((((!((map__49453 == null)))?((((map__49453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49453):map__49453);
var file_msg = map__49453__$1;
var namespace = cljs.core.get.call(null,map__49453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39598__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__39598__auto__){
var or__39610__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
var or__39610__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39610__auto____$1)){
return or__39610__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39598__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49455,callback){
var map__49456 = p__49455;
var map__49456__$1 = ((((!((map__49456 == null)))?((((map__49456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49456):map__49456);
var file_msg = map__49456__$1;
var request_url = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__45759__auto___49506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___49506,out){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___49506,out){
return (function (state_49491){
var state_val_49492 = (state_49491[(1)]);
if((state_val_49492 === (1))){
var inst_49465 = cljs.core.seq.call(null,files);
var inst_49466 = cljs.core.first.call(null,inst_49465);
var inst_49467 = cljs.core.next.call(null,inst_49465);
var inst_49468 = files;
var state_49491__$1 = (function (){var statearr_49493 = state_49491;
(statearr_49493[(7)] = inst_49468);

(statearr_49493[(8)] = inst_49466);

(statearr_49493[(9)] = inst_49467);

return statearr_49493;
})();
var statearr_49494_49507 = state_49491__$1;
(statearr_49494_49507[(2)] = null);

(statearr_49494_49507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (2))){
var inst_49468 = (state_49491[(7)]);
var inst_49474 = (state_49491[(10)]);
var inst_49473 = cljs.core.seq.call(null,inst_49468);
var inst_49474__$1 = cljs.core.first.call(null,inst_49473);
var inst_49475 = cljs.core.next.call(null,inst_49473);
var inst_49476 = (inst_49474__$1 == null);
var inst_49477 = cljs.core.not.call(null,inst_49476);
var state_49491__$1 = (function (){var statearr_49495 = state_49491;
(statearr_49495[(10)] = inst_49474__$1);

(statearr_49495[(11)] = inst_49475);

return statearr_49495;
})();
if(inst_49477){
var statearr_49496_49508 = state_49491__$1;
(statearr_49496_49508[(1)] = (4));

} else {
var statearr_49497_49509 = state_49491__$1;
(statearr_49497_49509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (3))){
var inst_49489 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49491__$1,inst_49489);
} else {
if((state_val_49492 === (4))){
var inst_49474 = (state_49491[(10)]);
var inst_49479 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49474);
var state_49491__$1 = state_49491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49491__$1,(7),inst_49479);
} else {
if((state_val_49492 === (5))){
var inst_49485 = cljs.core.async.close_BANG_.call(null,out);
var state_49491__$1 = state_49491;
var statearr_49498_49510 = state_49491__$1;
(statearr_49498_49510[(2)] = inst_49485);

(statearr_49498_49510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (6))){
var inst_49487 = (state_49491[(2)]);
var state_49491__$1 = state_49491;
var statearr_49499_49511 = state_49491__$1;
(statearr_49499_49511[(2)] = inst_49487);

(statearr_49499_49511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49492 === (7))){
var inst_49475 = (state_49491[(11)]);
var inst_49481 = (state_49491[(2)]);
var inst_49482 = cljs.core.async.put_BANG_.call(null,out,inst_49481);
var inst_49468 = inst_49475;
var state_49491__$1 = (function (){var statearr_49500 = state_49491;
(statearr_49500[(7)] = inst_49468);

(statearr_49500[(12)] = inst_49482);

return statearr_49500;
})();
var statearr_49501_49512 = state_49491__$1;
(statearr_49501_49512[(2)] = null);

(statearr_49501_49512[(1)] = (2));


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
});})(c__45759__auto___49506,out))
;
return ((function (switch__45671__auto__,c__45759__auto___49506,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____0 = (function (){
var statearr_49502 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49502[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__);

(statearr_49502[(1)] = (1));

return statearr_49502;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____1 = (function (state_49491){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_49491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e49503){if((e49503 instanceof Object)){
var ex__45675__auto__ = e49503;
var statearr_49504_49513 = state_49491;
(statearr_49504_49513[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49514 = state_49491;
state_49491 = G__49514;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__ = function(state_49491){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____1.call(this,state_49491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___49506,out))
})();
var state__45761__auto__ = (function (){var statearr_49505 = f__45760__auto__.call(null);
(statearr_49505[(6)] = c__45759__auto___49506);

return statearr_49505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___49506,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49515,opts){
var map__49516 = p__49515;
var map__49516__$1 = ((((!((map__49516 == null)))?((((map__49516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49516):map__49516);
var eval_body = cljs.core.get.call(null,map__49516__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39598__auto__ = eval_body;
if(cljs.core.truth_(and__39598__auto__)){
return typeof eval_body === 'string';
} else {
return and__39598__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49518){var e = e49518;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49519_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49519_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49520){
var vec__49521 = p__49520;
var k = cljs.core.nth.call(null,vec__49521,(0),null);
var v = cljs.core.nth.call(null,vec__49521,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49524){
var vec__49525 = p__49524;
var k = cljs.core.nth.call(null,vec__49525,(0),null);
var v = cljs.core.nth.call(null,vec__49525,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49531,p__49532){
var map__49533 = p__49531;
var map__49533__$1 = ((((!((map__49533 == null)))?((((map__49533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49533):map__49533);
var opts = map__49533__$1;
var before_jsload = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49534 = p__49532;
var map__49534__$1 = ((((!((map__49534 == null)))?((((map__49534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49534):map__49534);
var msg = map__49534__$1;
var files = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49534__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49688){
var state_val_49689 = (state_49688[(1)]);
if((state_val_49689 === (7))){
var inst_49550 = (state_49688[(7)]);
var inst_49551 = (state_49688[(8)]);
var inst_49549 = (state_49688[(9)]);
var inst_49548 = (state_49688[(10)]);
var inst_49556 = cljs.core._nth.call(null,inst_49549,inst_49551);
var inst_49557 = figwheel.client.file_reloading.eval_body.call(null,inst_49556,opts);
var inst_49558 = (inst_49551 + (1));
var tmp49690 = inst_49550;
var tmp49691 = inst_49549;
var tmp49692 = inst_49548;
var inst_49548__$1 = tmp49692;
var inst_49549__$1 = tmp49691;
var inst_49550__$1 = tmp49690;
var inst_49551__$1 = inst_49558;
var state_49688__$1 = (function (){var statearr_49693 = state_49688;
(statearr_49693[(7)] = inst_49550__$1);

(statearr_49693[(8)] = inst_49551__$1);

(statearr_49693[(9)] = inst_49549__$1);

(statearr_49693[(10)] = inst_49548__$1);

(statearr_49693[(11)] = inst_49557);

return statearr_49693;
})();
var statearr_49694_49777 = state_49688__$1;
(statearr_49694_49777[(2)] = null);

(statearr_49694_49777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (20))){
var inst_49591 = (state_49688[(12)]);
var inst_49599 = figwheel.client.file_reloading.sort_files.call(null,inst_49591);
var state_49688__$1 = state_49688;
var statearr_49695_49778 = state_49688__$1;
(statearr_49695_49778[(2)] = inst_49599);

(statearr_49695_49778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (27))){
var state_49688__$1 = state_49688;
var statearr_49696_49779 = state_49688__$1;
(statearr_49696_49779[(2)] = null);

(statearr_49696_49779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (1))){
var inst_49540 = (state_49688[(13)]);
var inst_49537 = before_jsload.call(null,files);
var inst_49538 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49539 = (function (){return ((function (inst_49540,inst_49537,inst_49538,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49528_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49528_SHARP_);
});
;})(inst_49540,inst_49537,inst_49538,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49540__$1 = cljs.core.filter.call(null,inst_49539,files);
var inst_49541 = cljs.core.not_empty.call(null,inst_49540__$1);
var state_49688__$1 = (function (){var statearr_49697 = state_49688;
(statearr_49697[(14)] = inst_49537);

(statearr_49697[(13)] = inst_49540__$1);

(statearr_49697[(15)] = inst_49538);

return statearr_49697;
})();
if(cljs.core.truth_(inst_49541)){
var statearr_49698_49780 = state_49688__$1;
(statearr_49698_49780[(1)] = (2));

} else {
var statearr_49699_49781 = state_49688__$1;
(statearr_49699_49781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (24))){
var state_49688__$1 = state_49688;
var statearr_49700_49782 = state_49688__$1;
(statearr_49700_49782[(2)] = null);

(statearr_49700_49782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (39))){
var inst_49641 = (state_49688[(16)]);
var state_49688__$1 = state_49688;
var statearr_49701_49783 = state_49688__$1;
(statearr_49701_49783[(2)] = inst_49641);

(statearr_49701_49783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (46))){
var inst_49683 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49702_49784 = state_49688__$1;
(statearr_49702_49784[(2)] = inst_49683);

(statearr_49702_49784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (4))){
var inst_49585 = (state_49688[(2)]);
var inst_49586 = cljs.core.List.EMPTY;
var inst_49587 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49586);
var inst_49588 = (function (){return ((function (inst_49585,inst_49586,inst_49587,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49529_SHARP_){
var and__39598__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49529_SHARP_);
if(cljs.core.truth_(and__39598__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49529_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49529_SHARP_)));
} else {
return and__39598__auto__;
}
});
;})(inst_49585,inst_49586,inst_49587,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49589 = cljs.core.filter.call(null,inst_49588,files);
var inst_49590 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49591 = cljs.core.concat.call(null,inst_49589,inst_49590);
var state_49688__$1 = (function (){var statearr_49703 = state_49688;
(statearr_49703[(17)] = inst_49585);

(statearr_49703[(18)] = inst_49587);

(statearr_49703[(12)] = inst_49591);

return statearr_49703;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49704_49785 = state_49688__$1;
(statearr_49704_49785[(1)] = (16));

} else {
var statearr_49705_49786 = state_49688__$1;
(statearr_49705_49786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (15))){
var inst_49575 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49706_49787 = state_49688__$1;
(statearr_49706_49787[(2)] = inst_49575);

(statearr_49706_49787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (21))){
var inst_49601 = (state_49688[(19)]);
var inst_49601__$1 = (state_49688[(2)]);
var inst_49602 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49601__$1);
var state_49688__$1 = (function (){var statearr_49707 = state_49688;
(statearr_49707[(19)] = inst_49601__$1);

return statearr_49707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49688__$1,(22),inst_49602);
} else {
if((state_val_49689 === (31))){
var inst_49686 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49688__$1,inst_49686);
} else {
if((state_val_49689 === (32))){
var inst_49641 = (state_49688[(16)]);
var inst_49646 = inst_49641.cljs$lang$protocol_mask$partition0$;
var inst_49647 = (inst_49646 & (64));
var inst_49648 = inst_49641.cljs$core$ISeq$;
var inst_49649 = (cljs.core.PROTOCOL_SENTINEL === inst_49648);
var inst_49650 = (inst_49647) || (inst_49649);
var state_49688__$1 = state_49688;
if(cljs.core.truth_(inst_49650)){
var statearr_49708_49788 = state_49688__$1;
(statearr_49708_49788[(1)] = (35));

} else {
var statearr_49709_49789 = state_49688__$1;
(statearr_49709_49789[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (40))){
var inst_49663 = (state_49688[(20)]);
var inst_49662 = (state_49688[(2)]);
var inst_49663__$1 = cljs.core.get.call(null,inst_49662,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49664 = cljs.core.get.call(null,inst_49662,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49665 = cljs.core.not_empty.call(null,inst_49663__$1);
var state_49688__$1 = (function (){var statearr_49710 = state_49688;
(statearr_49710[(20)] = inst_49663__$1);

(statearr_49710[(21)] = inst_49664);

return statearr_49710;
})();
if(cljs.core.truth_(inst_49665)){
var statearr_49711_49790 = state_49688__$1;
(statearr_49711_49790[(1)] = (41));

} else {
var statearr_49712_49791 = state_49688__$1;
(statearr_49712_49791[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (33))){
var state_49688__$1 = state_49688;
var statearr_49713_49792 = state_49688__$1;
(statearr_49713_49792[(2)] = false);

(statearr_49713_49792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (13))){
var inst_49561 = (state_49688[(22)]);
var inst_49565 = cljs.core.chunk_first.call(null,inst_49561);
var inst_49566 = cljs.core.chunk_rest.call(null,inst_49561);
var inst_49567 = cljs.core.count.call(null,inst_49565);
var inst_49548 = inst_49566;
var inst_49549 = inst_49565;
var inst_49550 = inst_49567;
var inst_49551 = (0);
var state_49688__$1 = (function (){var statearr_49714 = state_49688;
(statearr_49714[(7)] = inst_49550);

(statearr_49714[(8)] = inst_49551);

(statearr_49714[(9)] = inst_49549);

(statearr_49714[(10)] = inst_49548);

return statearr_49714;
})();
var statearr_49715_49793 = state_49688__$1;
(statearr_49715_49793[(2)] = null);

(statearr_49715_49793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (22))){
var inst_49609 = (state_49688[(23)]);
var inst_49605 = (state_49688[(24)]);
var inst_49604 = (state_49688[(25)]);
var inst_49601 = (state_49688[(19)]);
var inst_49604__$1 = (state_49688[(2)]);
var inst_49605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49604__$1);
var inst_49606 = (function (){var all_files = inst_49601;
var res_SINGLEQUOTE_ = inst_49604__$1;
var res = inst_49605__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49609,inst_49605,inst_49604,inst_49601,inst_49604__$1,inst_49605__$1,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49530_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49530_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49609,inst_49605,inst_49604,inst_49601,inst_49604__$1,inst_49605__$1,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49607 = cljs.core.filter.call(null,inst_49606,inst_49604__$1);
var inst_49608 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49608);
var inst_49610 = cljs.core.not_empty.call(null,inst_49609__$1);
var state_49688__$1 = (function (){var statearr_49716 = state_49688;
(statearr_49716[(23)] = inst_49609__$1);

(statearr_49716[(24)] = inst_49605__$1);

(statearr_49716[(25)] = inst_49604__$1);

(statearr_49716[(26)] = inst_49607);

return statearr_49716;
})();
if(cljs.core.truth_(inst_49610)){
var statearr_49717_49794 = state_49688__$1;
(statearr_49717_49794[(1)] = (23));

} else {
var statearr_49718_49795 = state_49688__$1;
(statearr_49718_49795[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (36))){
var state_49688__$1 = state_49688;
var statearr_49719_49796 = state_49688__$1;
(statearr_49719_49796[(2)] = false);

(statearr_49719_49796[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (41))){
var inst_49663 = (state_49688[(20)]);
var inst_49667 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49668 = cljs.core.map.call(null,inst_49667,inst_49663);
var inst_49669 = cljs.core.pr_str.call(null,inst_49668);
var inst_49670 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49669)].join('');
var inst_49671 = figwheel.client.utils.log.call(null,inst_49670);
var state_49688__$1 = state_49688;
var statearr_49720_49797 = state_49688__$1;
(statearr_49720_49797[(2)] = inst_49671);

(statearr_49720_49797[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (43))){
var inst_49664 = (state_49688[(21)]);
var inst_49674 = (state_49688[(2)]);
var inst_49675 = cljs.core.not_empty.call(null,inst_49664);
var state_49688__$1 = (function (){var statearr_49721 = state_49688;
(statearr_49721[(27)] = inst_49674);

return statearr_49721;
})();
if(cljs.core.truth_(inst_49675)){
var statearr_49722_49798 = state_49688__$1;
(statearr_49722_49798[(1)] = (44));

} else {
var statearr_49723_49799 = state_49688__$1;
(statearr_49723_49799[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (29))){
var inst_49609 = (state_49688[(23)]);
var inst_49605 = (state_49688[(24)]);
var inst_49604 = (state_49688[(25)]);
var inst_49601 = (state_49688[(19)]);
var inst_49607 = (state_49688[(26)]);
var inst_49641 = (state_49688[(16)]);
var inst_49637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49640 = (function (){var all_files = inst_49601;
var res_SINGLEQUOTE_ = inst_49604;
var res = inst_49605;
var files_not_loaded = inst_49607;
var dependencies_that_loaded = inst_49609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49641,inst_49637,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49639){
var map__49724 = p__49639;
var map__49724__$1 = ((((!((map__49724 == null)))?((((map__49724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49724):map__49724);
var namespace = cljs.core.get.call(null,map__49724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49641,inst_49637,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49641__$1 = cljs.core.group_by.call(null,inst_49640,inst_49607);
var inst_49643 = (inst_49641__$1 == null);
var inst_49644 = cljs.core.not.call(null,inst_49643);
var state_49688__$1 = (function (){var statearr_49726 = state_49688;
(statearr_49726[(28)] = inst_49637);

(statearr_49726[(16)] = inst_49641__$1);

return statearr_49726;
})();
if(inst_49644){
var statearr_49727_49800 = state_49688__$1;
(statearr_49727_49800[(1)] = (32));

} else {
var statearr_49728_49801 = state_49688__$1;
(statearr_49728_49801[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (44))){
var inst_49664 = (state_49688[(21)]);
var inst_49677 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49664);
var inst_49678 = cljs.core.pr_str.call(null,inst_49677);
var inst_49679 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49678)].join('');
var inst_49680 = figwheel.client.utils.log.call(null,inst_49679);
var state_49688__$1 = state_49688;
var statearr_49729_49802 = state_49688__$1;
(statearr_49729_49802[(2)] = inst_49680);

(statearr_49729_49802[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (6))){
var inst_49582 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49730_49803 = state_49688__$1;
(statearr_49730_49803[(2)] = inst_49582);

(statearr_49730_49803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (28))){
var inst_49607 = (state_49688[(26)]);
var inst_49634 = (state_49688[(2)]);
var inst_49635 = cljs.core.not_empty.call(null,inst_49607);
var state_49688__$1 = (function (){var statearr_49731 = state_49688;
(statearr_49731[(29)] = inst_49634);

return statearr_49731;
})();
if(cljs.core.truth_(inst_49635)){
var statearr_49732_49804 = state_49688__$1;
(statearr_49732_49804[(1)] = (29));

} else {
var statearr_49733_49805 = state_49688__$1;
(statearr_49733_49805[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (25))){
var inst_49605 = (state_49688[(24)]);
var inst_49621 = (state_49688[(2)]);
var inst_49622 = cljs.core.not_empty.call(null,inst_49605);
var state_49688__$1 = (function (){var statearr_49734 = state_49688;
(statearr_49734[(30)] = inst_49621);

return statearr_49734;
})();
if(cljs.core.truth_(inst_49622)){
var statearr_49735_49806 = state_49688__$1;
(statearr_49735_49806[(1)] = (26));

} else {
var statearr_49736_49807 = state_49688__$1;
(statearr_49736_49807[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (34))){
var inst_49657 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
if(cljs.core.truth_(inst_49657)){
var statearr_49737_49808 = state_49688__$1;
(statearr_49737_49808[(1)] = (38));

} else {
var statearr_49738_49809 = state_49688__$1;
(statearr_49738_49809[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (17))){
var state_49688__$1 = state_49688;
var statearr_49739_49810 = state_49688__$1;
(statearr_49739_49810[(2)] = recompile_dependents);

(statearr_49739_49810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (3))){
var state_49688__$1 = state_49688;
var statearr_49740_49811 = state_49688__$1;
(statearr_49740_49811[(2)] = null);

(statearr_49740_49811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (12))){
var inst_49578 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49741_49812 = state_49688__$1;
(statearr_49741_49812[(2)] = inst_49578);

(statearr_49741_49812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (2))){
var inst_49540 = (state_49688[(13)]);
var inst_49547 = cljs.core.seq.call(null,inst_49540);
var inst_49548 = inst_49547;
var inst_49549 = null;
var inst_49550 = (0);
var inst_49551 = (0);
var state_49688__$1 = (function (){var statearr_49742 = state_49688;
(statearr_49742[(7)] = inst_49550);

(statearr_49742[(8)] = inst_49551);

(statearr_49742[(9)] = inst_49549);

(statearr_49742[(10)] = inst_49548);

return statearr_49742;
})();
var statearr_49743_49813 = state_49688__$1;
(statearr_49743_49813[(2)] = null);

(statearr_49743_49813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (23))){
var inst_49609 = (state_49688[(23)]);
var inst_49605 = (state_49688[(24)]);
var inst_49604 = (state_49688[(25)]);
var inst_49601 = (state_49688[(19)]);
var inst_49607 = (state_49688[(26)]);
var inst_49612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49614 = (function (){var all_files = inst_49601;
var res_SINGLEQUOTE_ = inst_49604;
var res = inst_49605;
var files_not_loaded = inst_49607;
var dependencies_that_loaded = inst_49609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49612,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49613){
var map__49744 = p__49613;
var map__49744__$1 = ((((!((map__49744 == null)))?((((map__49744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49744):map__49744);
var request_url = cljs.core.get.call(null,map__49744__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49612,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49615 = cljs.core.reverse.call(null,inst_49609);
var inst_49616 = cljs.core.map.call(null,inst_49614,inst_49615);
var inst_49617 = cljs.core.pr_str.call(null,inst_49616);
var inst_49618 = figwheel.client.utils.log.call(null,inst_49617);
var state_49688__$1 = (function (){var statearr_49746 = state_49688;
(statearr_49746[(31)] = inst_49612);

return statearr_49746;
})();
var statearr_49747_49814 = state_49688__$1;
(statearr_49747_49814[(2)] = inst_49618);

(statearr_49747_49814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (35))){
var state_49688__$1 = state_49688;
var statearr_49748_49815 = state_49688__$1;
(statearr_49748_49815[(2)] = true);

(statearr_49748_49815[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (19))){
var inst_49591 = (state_49688[(12)]);
var inst_49597 = figwheel.client.file_reloading.expand_files.call(null,inst_49591);
var state_49688__$1 = state_49688;
var statearr_49749_49816 = state_49688__$1;
(statearr_49749_49816[(2)] = inst_49597);

(statearr_49749_49816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (11))){
var state_49688__$1 = state_49688;
var statearr_49750_49817 = state_49688__$1;
(statearr_49750_49817[(2)] = null);

(statearr_49750_49817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (9))){
var inst_49580 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49751_49818 = state_49688__$1;
(statearr_49751_49818[(2)] = inst_49580);

(statearr_49751_49818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (5))){
var inst_49550 = (state_49688[(7)]);
var inst_49551 = (state_49688[(8)]);
var inst_49553 = (inst_49551 < inst_49550);
var inst_49554 = inst_49553;
var state_49688__$1 = state_49688;
if(cljs.core.truth_(inst_49554)){
var statearr_49752_49819 = state_49688__$1;
(statearr_49752_49819[(1)] = (7));

} else {
var statearr_49753_49820 = state_49688__$1;
(statearr_49753_49820[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (14))){
var inst_49561 = (state_49688[(22)]);
var inst_49570 = cljs.core.first.call(null,inst_49561);
var inst_49571 = figwheel.client.file_reloading.eval_body.call(null,inst_49570,opts);
var inst_49572 = cljs.core.next.call(null,inst_49561);
var inst_49548 = inst_49572;
var inst_49549 = null;
var inst_49550 = (0);
var inst_49551 = (0);
var state_49688__$1 = (function (){var statearr_49754 = state_49688;
(statearr_49754[(32)] = inst_49571);

(statearr_49754[(7)] = inst_49550);

(statearr_49754[(8)] = inst_49551);

(statearr_49754[(9)] = inst_49549);

(statearr_49754[(10)] = inst_49548);

return statearr_49754;
})();
var statearr_49755_49821 = state_49688__$1;
(statearr_49755_49821[(2)] = null);

(statearr_49755_49821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (45))){
var state_49688__$1 = state_49688;
var statearr_49756_49822 = state_49688__$1;
(statearr_49756_49822[(2)] = null);

(statearr_49756_49822[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (26))){
var inst_49609 = (state_49688[(23)]);
var inst_49605 = (state_49688[(24)]);
var inst_49604 = (state_49688[(25)]);
var inst_49601 = (state_49688[(19)]);
var inst_49607 = (state_49688[(26)]);
var inst_49624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49626 = (function (){var all_files = inst_49601;
var res_SINGLEQUOTE_ = inst_49604;
var res = inst_49605;
var files_not_loaded = inst_49607;
var dependencies_that_loaded = inst_49609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49624,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49625){
var map__49757 = p__49625;
var map__49757__$1 = ((((!((map__49757 == null)))?((((map__49757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49757):map__49757);
var namespace = cljs.core.get.call(null,map__49757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49624,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49627 = cljs.core.map.call(null,inst_49626,inst_49605);
var inst_49628 = cljs.core.pr_str.call(null,inst_49627);
var inst_49629 = figwheel.client.utils.log.call(null,inst_49628);
var inst_49630 = (function (){var all_files = inst_49601;
var res_SINGLEQUOTE_ = inst_49604;
var res = inst_49605;
var files_not_loaded = inst_49607;
var dependencies_that_loaded = inst_49609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49624,inst_49626,inst_49627,inst_49628,inst_49629,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49609,inst_49605,inst_49604,inst_49601,inst_49607,inst_49624,inst_49626,inst_49627,inst_49628,inst_49629,state_val_49689,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49631 = setTimeout(inst_49630,(10));
var state_49688__$1 = (function (){var statearr_49759 = state_49688;
(statearr_49759[(33)] = inst_49624);

(statearr_49759[(34)] = inst_49629);

return statearr_49759;
})();
var statearr_49760_49823 = state_49688__$1;
(statearr_49760_49823[(2)] = inst_49631);

(statearr_49760_49823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (16))){
var state_49688__$1 = state_49688;
var statearr_49761_49824 = state_49688__$1;
(statearr_49761_49824[(2)] = reload_dependents);

(statearr_49761_49824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (38))){
var inst_49641 = (state_49688[(16)]);
var inst_49659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49641);
var state_49688__$1 = state_49688;
var statearr_49762_49825 = state_49688__$1;
(statearr_49762_49825[(2)] = inst_49659);

(statearr_49762_49825[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (30))){
var state_49688__$1 = state_49688;
var statearr_49763_49826 = state_49688__$1;
(statearr_49763_49826[(2)] = null);

(statearr_49763_49826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (10))){
var inst_49561 = (state_49688[(22)]);
var inst_49563 = cljs.core.chunked_seq_QMARK_.call(null,inst_49561);
var state_49688__$1 = state_49688;
if(inst_49563){
var statearr_49764_49827 = state_49688__$1;
(statearr_49764_49827[(1)] = (13));

} else {
var statearr_49765_49828 = state_49688__$1;
(statearr_49765_49828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (18))){
var inst_49595 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
if(cljs.core.truth_(inst_49595)){
var statearr_49766_49829 = state_49688__$1;
(statearr_49766_49829[(1)] = (19));

} else {
var statearr_49767_49830 = state_49688__$1;
(statearr_49767_49830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (42))){
var state_49688__$1 = state_49688;
var statearr_49768_49831 = state_49688__$1;
(statearr_49768_49831[(2)] = null);

(statearr_49768_49831[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (37))){
var inst_49654 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49769_49832 = state_49688__$1;
(statearr_49769_49832[(2)] = inst_49654);

(statearr_49769_49832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (8))){
var inst_49561 = (state_49688[(22)]);
var inst_49548 = (state_49688[(10)]);
var inst_49561__$1 = cljs.core.seq.call(null,inst_49548);
var state_49688__$1 = (function (){var statearr_49770 = state_49688;
(statearr_49770[(22)] = inst_49561__$1);

return statearr_49770;
})();
if(inst_49561__$1){
var statearr_49771_49833 = state_49688__$1;
(statearr_49771_49833[(1)] = (10));

} else {
var statearr_49772_49834 = state_49688__$1;
(statearr_49772_49834[(1)] = (11));

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
}
});})(c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45671__auto__,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____0 = (function (){
var statearr_49773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49773[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__);

(statearr_49773[(1)] = (1));

return statearr_49773;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____1 = (function (state_49688){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_49688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e49774){if((e49774 instanceof Object)){
var ex__45675__auto__ = e49774;
var statearr_49775_49835 = state_49688;
(statearr_49775_49835[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49836 = state_49688;
state_49688 = G__49836;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__ = function(state_49688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____1.call(this,state_49688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45761__auto__ = (function (){var statearr_49776 = f__45760__auto__.call(null);
(statearr_49776[(6)] = c__45759__auto__);

return statearr_49776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__,map__49533,map__49533__$1,opts,before_jsload,on_jsload,reload_dependents,map__49534,map__49534__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45759__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49839,link){
var map__49840 = p__49839;
var map__49840__$1 = ((((!((map__49840 == null)))?((((map__49840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49840):map__49840);
var file = cljs.core.get.call(null,map__49840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__49840,map__49840__$1,file){
return (function (p1__49837_SHARP_,p2__49838_SHARP_){
if(cljs.core._EQ_.call(null,p1__49837_SHARP_,p2__49838_SHARP_)){
return p1__49837_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__49840,map__49840__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49843){
var map__49844 = p__49843;
var map__49844__$1 = ((((!((map__49844 == null)))?((((map__49844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49844):map__49844);
var match_length = cljs.core.get.call(null,map__49844__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49844__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49842_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49842_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49846_SHARP_,p2__49847_SHARP_){
return cljs.core.assoc.call(null,p1__49846_SHARP_,cljs.core.get.call(null,p2__49847_SHARP_,key),p2__49847_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_49848 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49848);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49848);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49849,p__49850){
var map__49851 = p__49849;
var map__49851__$1 = ((((!((map__49851 == null)))?((((map__49851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49851):map__49851);
var on_cssload = cljs.core.get.call(null,map__49851__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49852 = p__49850;
var map__49852__$1 = ((((!((map__49852 == null)))?((((map__49852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49852):map__49852);
var files_msg = map__49852__$1;
var files = cljs.core.get.call(null,map__49852__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1502732694176
