// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.12";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e50941){if((e50941 instanceof Error)){
var e = e50941;
return "Error: Unable to stringify";
} else {
throw e50941;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50944 = arguments.length;
switch (G__50944) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50942_SHARP_){
if(typeof p1__50942_SHARP_ === 'string'){
return p1__50942_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50942_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50947 = arguments.length;
var i__40775__auto___50948 = (0);
while(true){
if((i__40775__auto___50948 < len__40774__auto___50947)){
args__40781__auto__.push((arguments[i__40775__auto___50948]));

var G__50949 = (i__40775__auto___50948 + (1));
i__40775__auto___50948 = G__50949;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50946){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50946));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__40781__auto__ = [];
var len__40774__auto___50951 = arguments.length;
var i__40775__auto___50952 = (0);
while(true){
if((i__40775__auto___50952 < len__40774__auto___50951)){
args__40781__auto__.push((arguments[i__40775__auto___50952]));

var G__50953 = (i__40775__auto___50952 + (1));
i__40775__auto___50952 = G__50953;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50950){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50950));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50954){
var map__50955 = p__50954;
var map__50955__$1 = ((((!((map__50955 == null)))?((((map__50955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50955):map__50955);
var message = cljs.core.get.call(null,map__50955__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50955__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39610__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39598__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39598__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39598__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__45759__auto___51034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___51034,ch){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___51034,ch){
return (function (state_51006){
var state_val_51007 = (state_51006[(1)]);
if((state_val_51007 === (7))){
var inst_51002 = (state_51006[(2)]);
var state_51006__$1 = state_51006;
var statearr_51008_51035 = state_51006__$1;
(statearr_51008_51035[(2)] = inst_51002);

(statearr_51008_51035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (1))){
var state_51006__$1 = state_51006;
var statearr_51009_51036 = state_51006__$1;
(statearr_51009_51036[(2)] = null);

(statearr_51009_51036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (4))){
var inst_50959 = (state_51006[(7)]);
var inst_50959__$1 = (state_51006[(2)]);
var state_51006__$1 = (function (){var statearr_51010 = state_51006;
(statearr_51010[(7)] = inst_50959__$1);

return statearr_51010;
})();
if(cljs.core.truth_(inst_50959__$1)){
var statearr_51011_51037 = state_51006__$1;
(statearr_51011_51037[(1)] = (5));

} else {
var statearr_51012_51038 = state_51006__$1;
(statearr_51012_51038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (15))){
var inst_50966 = (state_51006[(8)]);
var inst_50981 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50966);
var inst_50982 = cljs.core.first.call(null,inst_50981);
var inst_50983 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50982);
var inst_50984 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50983)].join('');
var inst_50985 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50984);
var state_51006__$1 = state_51006;
var statearr_51013_51039 = state_51006__$1;
(statearr_51013_51039[(2)] = inst_50985);

(statearr_51013_51039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (13))){
var inst_50990 = (state_51006[(2)]);
var state_51006__$1 = state_51006;
var statearr_51014_51040 = state_51006__$1;
(statearr_51014_51040[(2)] = inst_50990);

(statearr_51014_51040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (6))){
var state_51006__$1 = state_51006;
var statearr_51015_51041 = state_51006__$1;
(statearr_51015_51041[(2)] = null);

(statearr_51015_51041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (17))){
var inst_50988 = (state_51006[(2)]);
var state_51006__$1 = state_51006;
var statearr_51016_51042 = state_51006__$1;
(statearr_51016_51042[(2)] = inst_50988);

(statearr_51016_51042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (3))){
var inst_51004 = (state_51006[(2)]);
var state_51006__$1 = state_51006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51006__$1,inst_51004);
} else {
if((state_val_51007 === (12))){
var inst_50965 = (state_51006[(9)]);
var inst_50979 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50965,opts);
var state_51006__$1 = state_51006;
if(cljs.core.truth_(inst_50979)){
var statearr_51017_51043 = state_51006__$1;
(statearr_51017_51043[(1)] = (15));

} else {
var statearr_51018_51044 = state_51006__$1;
(statearr_51018_51044[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (2))){
var state_51006__$1 = state_51006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51006__$1,(4),ch);
} else {
if((state_val_51007 === (11))){
var inst_50966 = (state_51006[(8)]);
var inst_50971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50972 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50966);
var inst_50973 = cljs.core.async.timeout.call(null,(1000));
var inst_50974 = [inst_50972,inst_50973];
var inst_50975 = (new cljs.core.PersistentVector(null,2,(5),inst_50971,inst_50974,null));
var state_51006__$1 = state_51006;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51006__$1,(14),inst_50975);
} else {
if((state_val_51007 === (9))){
var inst_50966 = (state_51006[(8)]);
var inst_50992 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50993 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50966);
var inst_50994 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50993);
var inst_50995 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50994)].join('');
var inst_50996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50995);
var state_51006__$1 = (function (){var statearr_51019 = state_51006;
(statearr_51019[(10)] = inst_50992);

return statearr_51019;
})();
var statearr_51020_51045 = state_51006__$1;
(statearr_51020_51045[(2)] = inst_50996);

(statearr_51020_51045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (5))){
var inst_50959 = (state_51006[(7)]);
var inst_50961 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50962 = (new cljs.core.PersistentArrayMap(null,2,inst_50961,null));
var inst_50963 = (new cljs.core.PersistentHashSet(null,inst_50962,null));
var inst_50964 = figwheel.client.focus_msgs.call(null,inst_50963,inst_50959);
var inst_50965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50964);
var inst_50966 = cljs.core.first.call(null,inst_50964);
var inst_50967 = figwheel.client.autoload_QMARK_.call(null);
var state_51006__$1 = (function (){var statearr_51021 = state_51006;
(statearr_51021[(9)] = inst_50965);

(statearr_51021[(8)] = inst_50966);

return statearr_51021;
})();
if(cljs.core.truth_(inst_50967)){
var statearr_51022_51046 = state_51006__$1;
(statearr_51022_51046[(1)] = (8));

} else {
var statearr_51023_51047 = state_51006__$1;
(statearr_51023_51047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (14))){
var inst_50977 = (state_51006[(2)]);
var state_51006__$1 = state_51006;
var statearr_51024_51048 = state_51006__$1;
(statearr_51024_51048[(2)] = inst_50977);

(statearr_51024_51048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (16))){
var state_51006__$1 = state_51006;
var statearr_51025_51049 = state_51006__$1;
(statearr_51025_51049[(2)] = null);

(statearr_51025_51049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (10))){
var inst_50998 = (state_51006[(2)]);
var state_51006__$1 = (function (){var statearr_51026 = state_51006;
(statearr_51026[(11)] = inst_50998);

return statearr_51026;
})();
var statearr_51027_51050 = state_51006__$1;
(statearr_51027_51050[(2)] = null);

(statearr_51027_51050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51007 === (8))){
var inst_50965 = (state_51006[(9)]);
var inst_50969 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50965,opts);
var state_51006__$1 = state_51006;
if(cljs.core.truth_(inst_50969)){
var statearr_51028_51051 = state_51006__$1;
(statearr_51028_51051[(1)] = (11));

} else {
var statearr_51029_51052 = state_51006__$1;
(statearr_51029_51052[(1)] = (12));

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
});})(c__45759__auto___51034,ch))
;
return ((function (switch__45671__auto__,c__45759__auto___51034,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____0 = (function (){
var statearr_51030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51030[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__);

(statearr_51030[(1)] = (1));

return statearr_51030;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____1 = (function (state_51006){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_51006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e51031){if((e51031 instanceof Object)){
var ex__45675__auto__ = e51031;
var statearr_51032_51053 = state_51006;
(statearr_51032_51053[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51054 = state_51006;
state_51006 = G__51054;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__ = function(state_51006){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____1.call(this,state_51006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45672__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___51034,ch))
})();
var state__45761__auto__ = (function (){var statearr_51033 = f__45760__auto__.call(null);
(statearr_51033[(6)] = c__45759__auto___51034);

return statearr_51033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___51034,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51055_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51055_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51057 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51057){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51056){if((e51056 instanceof Error)){
var e = e51056;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51057], null));
} else {
var e = e51056;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51057))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51058){
var map__51059 = p__51058;
var map__51059__$1 = ((((!((map__51059 == null)))?((((map__51059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51059):map__51059);
var opts = map__51059__$1;
var build_id = cljs.core.get.call(null,map__51059__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51059,map__51059__$1,opts,build_id){
return (function (p__51061){
var vec__51062 = p__51061;
var seq__51063 = cljs.core.seq.call(null,vec__51062);
var first__51064 = cljs.core.first.call(null,seq__51063);
var seq__51063__$1 = cljs.core.next.call(null,seq__51063);
var map__51065 = first__51064;
var map__51065__$1 = ((((!((map__51065 == null)))?((((map__51065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51065):map__51065);
var msg = map__51065__$1;
var msg_name = cljs.core.get.call(null,map__51065__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51063__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51062,seq__51063,first__51064,seq__51063__$1,map__51065,map__51065__$1,msg,msg_name,_,map__51059,map__51059__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51062,seq__51063,first__51064,seq__51063__$1,map__51065,map__51065__$1,msg,msg_name,_,map__51059,map__51059__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51059,map__51059__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51067){
var vec__51068 = p__51067;
var seq__51069 = cljs.core.seq.call(null,vec__51068);
var first__51070 = cljs.core.first.call(null,seq__51069);
var seq__51069__$1 = cljs.core.next.call(null,seq__51069);
var map__51071 = first__51070;
var map__51071__$1 = ((((!((map__51071 == null)))?((((map__51071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51071):map__51071);
var msg = map__51071__$1;
var msg_name = cljs.core.get.call(null,map__51071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51069__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51073){
var map__51074 = p__51073;
var map__51074__$1 = ((((!((map__51074 == null)))?((((map__51074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51074):map__51074);
var on_compile_warning = cljs.core.get.call(null,map__51074__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51074__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51074,map__51074__$1,on_compile_warning,on_compile_fail){
return (function (p__51076){
var vec__51077 = p__51076;
var seq__51078 = cljs.core.seq.call(null,vec__51077);
var first__51079 = cljs.core.first.call(null,seq__51078);
var seq__51078__$1 = cljs.core.next.call(null,seq__51078);
var map__51080 = first__51079;
var map__51080__$1 = ((((!((map__51080 == null)))?((((map__51080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51080):map__51080);
var msg = map__51080__$1;
var msg_name = cljs.core.get.call(null,map__51080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51078__$1;
var pred__51082 = cljs.core._EQ_;
var expr__51083 = msg_name;
if(cljs.core.truth_(pred__51082.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51083))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51082.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51083))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51074,map__51074__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__,msg_hist,msg_names,msg){
return (function (state_51172){
var state_val_51173 = (state_51172[(1)]);
if((state_val_51173 === (7))){
var inst_51092 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51092)){
var statearr_51174_51221 = state_51172__$1;
(statearr_51174_51221[(1)] = (8));

} else {
var statearr_51175_51222 = state_51172__$1;
(statearr_51175_51222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (20))){
var inst_51166 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51176_51223 = state_51172__$1;
(statearr_51176_51223[(2)] = inst_51166);

(statearr_51176_51223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (27))){
var inst_51162 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51177_51224 = state_51172__$1;
(statearr_51177_51224[(2)] = inst_51162);

(statearr_51177_51224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (1))){
var inst_51085 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51085)){
var statearr_51178_51225 = state_51172__$1;
(statearr_51178_51225[(1)] = (2));

} else {
var statearr_51179_51226 = state_51172__$1;
(statearr_51179_51226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (24))){
var inst_51164 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51180_51227 = state_51172__$1;
(statearr_51180_51227[(2)] = inst_51164);

(statearr_51180_51227[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (4))){
var inst_51170 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51172__$1,inst_51170);
} else {
if((state_val_51173 === (15))){
var inst_51168 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51181_51228 = state_51172__$1;
(statearr_51181_51228[(2)] = inst_51168);

(statearr_51181_51228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (21))){
var inst_51121 = (state_51172[(2)]);
var inst_51122 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51123 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51122);
var state_51172__$1 = (function (){var statearr_51182 = state_51172;
(statearr_51182[(7)] = inst_51121);

return statearr_51182;
})();
var statearr_51183_51229 = state_51172__$1;
(statearr_51183_51229[(2)] = inst_51123);

(statearr_51183_51229[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (31))){
var inst_51151 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51151)){
var statearr_51184_51230 = state_51172__$1;
(statearr_51184_51230[(1)] = (34));

} else {
var statearr_51185_51231 = state_51172__$1;
(statearr_51185_51231[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (32))){
var inst_51160 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51186_51232 = state_51172__$1;
(statearr_51186_51232[(2)] = inst_51160);

(statearr_51186_51232[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (33))){
var inst_51147 = (state_51172[(2)]);
var inst_51148 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51149 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51148);
var state_51172__$1 = (function (){var statearr_51187 = state_51172;
(statearr_51187[(8)] = inst_51147);

return statearr_51187;
})();
var statearr_51188_51233 = state_51172__$1;
(statearr_51188_51233[(2)] = inst_51149);

(statearr_51188_51233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (13))){
var inst_51106 = figwheel.client.heads_up.clear.call(null);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(16),inst_51106);
} else {
if((state_val_51173 === (22))){
var inst_51127 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51128 = figwheel.client.heads_up.append_warning_message.call(null,inst_51127);
var state_51172__$1 = state_51172;
var statearr_51189_51234 = state_51172__$1;
(statearr_51189_51234[(2)] = inst_51128);

(statearr_51189_51234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (36))){
var inst_51158 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51190_51235 = state_51172__$1;
(statearr_51190_51235[(2)] = inst_51158);

(statearr_51190_51235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (29))){
var inst_51138 = (state_51172[(2)]);
var inst_51139 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51140 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51139);
var state_51172__$1 = (function (){var statearr_51191 = state_51172;
(statearr_51191[(9)] = inst_51138);

return statearr_51191;
})();
var statearr_51192_51236 = state_51172__$1;
(statearr_51192_51236[(2)] = inst_51140);

(statearr_51192_51236[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (6))){
var inst_51087 = (state_51172[(10)]);
var state_51172__$1 = state_51172;
var statearr_51193_51237 = state_51172__$1;
(statearr_51193_51237[(2)] = inst_51087);

(statearr_51193_51237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (28))){
var inst_51134 = (state_51172[(2)]);
var inst_51135 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51136 = figwheel.client.heads_up.display_warning.call(null,inst_51135);
var state_51172__$1 = (function (){var statearr_51194 = state_51172;
(statearr_51194[(11)] = inst_51134);

return statearr_51194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(29),inst_51136);
} else {
if((state_val_51173 === (25))){
var inst_51132 = figwheel.client.heads_up.clear.call(null);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(28),inst_51132);
} else {
if((state_val_51173 === (34))){
var inst_51153 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(37),inst_51153);
} else {
if((state_val_51173 === (17))){
var inst_51112 = (state_51172[(2)]);
var inst_51113 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51114 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51113);
var state_51172__$1 = (function (){var statearr_51195 = state_51172;
(statearr_51195[(12)] = inst_51112);

return statearr_51195;
})();
var statearr_51196_51238 = state_51172__$1;
(statearr_51196_51238[(2)] = inst_51114);

(statearr_51196_51238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (3))){
var inst_51104 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51104)){
var statearr_51197_51239 = state_51172__$1;
(statearr_51197_51239[(1)] = (13));

} else {
var statearr_51198_51240 = state_51172__$1;
(statearr_51198_51240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (12))){
var inst_51100 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51199_51241 = state_51172__$1;
(statearr_51199_51241[(2)] = inst_51100);

(statearr_51199_51241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (2))){
var inst_51087 = (state_51172[(10)]);
var inst_51087__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51172__$1 = (function (){var statearr_51200 = state_51172;
(statearr_51200[(10)] = inst_51087__$1);

return statearr_51200;
})();
if(cljs.core.truth_(inst_51087__$1)){
var statearr_51201_51242 = state_51172__$1;
(statearr_51201_51242[(1)] = (5));

} else {
var statearr_51202_51243 = state_51172__$1;
(statearr_51202_51243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (23))){
var inst_51130 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51130)){
var statearr_51203_51244 = state_51172__$1;
(statearr_51203_51244[(1)] = (25));

} else {
var statearr_51204_51245 = state_51172__$1;
(statearr_51204_51245[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (35))){
var state_51172__$1 = state_51172;
var statearr_51205_51246 = state_51172__$1;
(statearr_51205_51246[(2)] = null);

(statearr_51205_51246[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (19))){
var inst_51125 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51125)){
var statearr_51206_51247 = state_51172__$1;
(statearr_51206_51247[(1)] = (22));

} else {
var statearr_51207_51248 = state_51172__$1;
(statearr_51207_51248[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (11))){
var inst_51096 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51208_51249 = state_51172__$1;
(statearr_51208_51249[(2)] = inst_51096);

(statearr_51208_51249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (9))){
var inst_51098 = figwheel.client.heads_up.clear.call(null);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(12),inst_51098);
} else {
if((state_val_51173 === (5))){
var inst_51089 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51172__$1 = state_51172;
var statearr_51209_51250 = state_51172__$1;
(statearr_51209_51250[(2)] = inst_51089);

(statearr_51209_51250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (14))){
var inst_51116 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51116)){
var statearr_51210_51251 = state_51172__$1;
(statearr_51210_51251[(1)] = (18));

} else {
var statearr_51211_51252 = state_51172__$1;
(statearr_51211_51252[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (26))){
var inst_51142 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51172__$1 = state_51172;
if(cljs.core.truth_(inst_51142)){
var statearr_51212_51253 = state_51172__$1;
(statearr_51212_51253[(1)] = (30));

} else {
var statearr_51213_51254 = state_51172__$1;
(statearr_51213_51254[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (16))){
var inst_51108 = (state_51172[(2)]);
var inst_51109 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51110 = figwheel.client.heads_up.display_exception.call(null,inst_51109);
var state_51172__$1 = (function (){var statearr_51214 = state_51172;
(statearr_51214[(13)] = inst_51108);

return statearr_51214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(17),inst_51110);
} else {
if((state_val_51173 === (30))){
var inst_51144 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51145 = figwheel.client.heads_up.display_warning.call(null,inst_51144);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(33),inst_51145);
} else {
if((state_val_51173 === (10))){
var inst_51102 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51215_51255 = state_51172__$1;
(statearr_51215_51255[(2)] = inst_51102);

(statearr_51215_51255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (18))){
var inst_51118 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51119 = figwheel.client.heads_up.display_exception.call(null,inst_51118);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(21),inst_51119);
} else {
if((state_val_51173 === (37))){
var inst_51155 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51216_51256 = state_51172__$1;
(statearr_51216_51256[(2)] = inst_51155);

(statearr_51216_51256[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (8))){
var inst_51094 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51172__$1,(11),inst_51094);
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
});})(c__45759__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45671__auto__,c__45759__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____0 = (function (){
var statearr_51217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51217[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__);

(statearr_51217[(1)] = (1));

return statearr_51217;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____1 = (function (state_51172){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_51172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e51218){if((e51218 instanceof Object)){
var ex__45675__auto__ = e51218;
var statearr_51219_51257 = state_51172;
(statearr_51219_51257[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51258 = state_51172;
state_51172 = G__51258;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__ = function(state_51172){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____1.call(this,state_51172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__,msg_hist,msg_names,msg))
})();
var state__45761__auto__ = (function (){var statearr_51220 = f__45760__auto__.call(null);
(statearr_51220[(6)] = c__45759__auto__);

return statearr_51220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__,msg_hist,msg_names,msg))
);

return c__45759__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45759__auto___51287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto___51287,ch){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto___51287,ch){
return (function (state_51273){
var state_val_51274 = (state_51273[(1)]);
if((state_val_51274 === (1))){
var state_51273__$1 = state_51273;
var statearr_51275_51288 = state_51273__$1;
(statearr_51275_51288[(2)] = null);

(statearr_51275_51288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (2))){
var state_51273__$1 = state_51273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51273__$1,(4),ch);
} else {
if((state_val_51274 === (3))){
var inst_51271 = (state_51273[(2)]);
var state_51273__$1 = state_51273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51273__$1,inst_51271);
} else {
if((state_val_51274 === (4))){
var inst_51261 = (state_51273[(7)]);
var inst_51261__$1 = (state_51273[(2)]);
var state_51273__$1 = (function (){var statearr_51276 = state_51273;
(statearr_51276[(7)] = inst_51261__$1);

return statearr_51276;
})();
if(cljs.core.truth_(inst_51261__$1)){
var statearr_51277_51289 = state_51273__$1;
(statearr_51277_51289[(1)] = (5));

} else {
var statearr_51278_51290 = state_51273__$1;
(statearr_51278_51290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (5))){
var inst_51261 = (state_51273[(7)]);
var inst_51263 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51261);
var state_51273__$1 = state_51273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51273__$1,(8),inst_51263);
} else {
if((state_val_51274 === (6))){
var state_51273__$1 = state_51273;
var statearr_51279_51291 = state_51273__$1;
(statearr_51279_51291[(2)] = null);

(statearr_51279_51291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (7))){
var inst_51269 = (state_51273[(2)]);
var state_51273__$1 = state_51273;
var statearr_51280_51292 = state_51273__$1;
(statearr_51280_51292[(2)] = inst_51269);

(statearr_51280_51292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51274 === (8))){
var inst_51265 = (state_51273[(2)]);
var state_51273__$1 = (function (){var statearr_51281 = state_51273;
(statearr_51281[(8)] = inst_51265);

return statearr_51281;
})();
var statearr_51282_51293 = state_51273__$1;
(statearr_51282_51293[(2)] = null);

(statearr_51282_51293[(1)] = (2));


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
});})(c__45759__auto___51287,ch))
;
return ((function (switch__45671__auto__,c__45759__auto___51287,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45672__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45672__auto____0 = (function (){
var statearr_51283 = [null,null,null,null,null,null,null,null,null];
(statearr_51283[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45672__auto__);

(statearr_51283[(1)] = (1));

return statearr_51283;
});
var figwheel$client$heads_up_plugin_$_state_machine__45672__auto____1 = (function (state_51273){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_51273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e51284){if((e51284 instanceof Object)){
var ex__45675__auto__ = e51284;
var statearr_51285_51294 = state_51273;
(statearr_51285_51294[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51295 = state_51273;
state_51273 = G__51295;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45672__auto__ = function(state_51273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45672__auto____1.call(this,state_51273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45672__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45672__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto___51287,ch))
})();
var state__45761__auto__ = (function (){var statearr_51286 = f__45760__auto__.call(null);
(statearr_51286[(6)] = c__45759__auto___51287);

return statearr_51286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto___51287,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__){
return (function (state_51301){
var state_val_51302 = (state_51301[(1)]);
if((state_val_51302 === (1))){
var inst_51296 = cljs.core.async.timeout.call(null,(3000));
var state_51301__$1 = state_51301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51301__$1,(2),inst_51296);
} else {
if((state_val_51302 === (2))){
var inst_51298 = (state_51301[(2)]);
var inst_51299 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51301__$1 = (function (){var statearr_51303 = state_51301;
(statearr_51303[(7)] = inst_51298);

return statearr_51303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51301__$1,inst_51299);
} else {
return null;
}
}
});})(c__45759__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____0 = (function (){
var statearr_51304 = [null,null,null,null,null,null,null,null];
(statearr_51304[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__);

(statearr_51304[(1)] = (1));

return statearr_51304;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____1 = (function (state_51301){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_51301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e51305){if((e51305 instanceof Object)){
var ex__45675__auto__ = e51305;
var statearr_51306_51308 = state_51301;
(statearr_51306_51308[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51309 = state_51301;
state_51301 = G__51309;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__ = function(state_51301){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____1.call(this,state_51301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45672__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__))
})();
var state__45761__auto__ = (function (){var statearr_51307 = f__45760__auto__.call(null);
(statearr_51307[(6)] = c__45759__auto__);

return statearr_51307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__))
);

return c__45759__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45759__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45759__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__45760__auto__ = (function (){var switch__45671__auto__ = ((function (c__45759__auto__,figwheel_version,temp__4657__auto__){
return (function (state_51316){
var state_val_51317 = (state_51316[(1)]);
if((state_val_51317 === (1))){
var inst_51310 = cljs.core.async.timeout.call(null,(2000));
var state_51316__$1 = state_51316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51316__$1,(2),inst_51310);
} else {
if((state_val_51317 === (2))){
var inst_51312 = (state_51316[(2)]);
var inst_51313 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_51314 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51313);
var state_51316__$1 = (function (){var statearr_51318 = state_51316;
(statearr_51318[(7)] = inst_51312);

return statearr_51318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51316__$1,inst_51314);
} else {
return null;
}
}
});})(c__45759__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__45671__auto__,c__45759__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____0 = (function (){
var statearr_51319 = [null,null,null,null,null,null,null,null];
(statearr_51319[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__);

(statearr_51319[(1)] = (1));

return statearr_51319;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____1 = (function (state_51316){
while(true){
var ret_value__45673__auto__ = (function (){try{while(true){
var result__45674__auto__ = switch__45671__auto__.call(null,state_51316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45674__auto__;
}
break;
}
}catch (e51320){if((e51320 instanceof Object)){
var ex__45675__auto__ = e51320;
var statearr_51321_51323 = state_51316;
(statearr_51321_51323[(5)] = ex__45675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51324 = state_51316;
state_51316 = G__51324;
continue;
} else {
return ret_value__45673__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__ = function(state_51316){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____1.call(this,state_51316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45672__auto__;
})()
;})(switch__45671__auto__,c__45759__auto__,figwheel_version,temp__4657__auto__))
})();
var state__45761__auto__ = (function (){var statearr_51322 = f__45760__auto__.call(null);
(statearr_51322[(6)] = c__45759__auto__);

return statearr_51322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45761__auto__);
});})(c__45759__auto__,figwheel_version,temp__4657__auto__))
);

return c__45759__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51325){
var map__51326 = p__51325;
var map__51326__$1 = ((((!((map__51326 == null)))?((((map__51326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51326):map__51326);
var file = cljs.core.get.call(null,map__51326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51326__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51326__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51328 = "";
var G__51328__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51328),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51328);
var G__51328__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51328__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51328__$1);
if(cljs.core.truth_((function (){var and__39598__auto__ = line;
if(cljs.core.truth_(and__39598__auto__)){
return column;
} else {
return and__39598__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51328__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51328__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51329){
var map__51330 = p__51329;
var map__51330__$1 = ((((!((map__51330 == null)))?((((map__51330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51330):map__51330);
var ed = map__51330__$1;
var formatted_exception = cljs.core.get.call(null,map__51330__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51330__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51330__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51332_51336 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51333_51337 = null;
var count__51334_51338 = (0);
var i__51335_51339 = (0);
while(true){
if((i__51335_51339 < count__51334_51338)){
var msg_51340 = cljs.core._nth.call(null,chunk__51333_51337,i__51335_51339);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51340);

var G__51341 = seq__51332_51336;
var G__51342 = chunk__51333_51337;
var G__51343 = count__51334_51338;
var G__51344 = (i__51335_51339 + (1));
seq__51332_51336 = G__51341;
chunk__51333_51337 = G__51342;
count__51334_51338 = G__51343;
i__51335_51339 = G__51344;
continue;
} else {
var temp__4657__auto___51345 = cljs.core.seq.call(null,seq__51332_51336);
if(temp__4657__auto___51345){
var seq__51332_51346__$1 = temp__4657__auto___51345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51332_51346__$1)){
var c__40444__auto___51347 = cljs.core.chunk_first.call(null,seq__51332_51346__$1);
var G__51348 = cljs.core.chunk_rest.call(null,seq__51332_51346__$1);
var G__51349 = c__40444__auto___51347;
var G__51350 = cljs.core.count.call(null,c__40444__auto___51347);
var G__51351 = (0);
seq__51332_51336 = G__51348;
chunk__51333_51337 = G__51349;
count__51334_51338 = G__51350;
i__51335_51339 = G__51351;
continue;
} else {
var msg_51352 = cljs.core.first.call(null,seq__51332_51346__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51352);

var G__51353 = cljs.core.next.call(null,seq__51332_51346__$1);
var G__51354 = null;
var G__51355 = (0);
var G__51356 = (0);
seq__51332_51336 = G__51353;
chunk__51333_51337 = G__51354;
count__51334_51338 = G__51355;
i__51335_51339 = G__51356;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51357){
var map__51358 = p__51357;
var map__51358__$1 = ((((!((map__51358 == null)))?((((map__51358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51358):map__51358);
var w = map__51358__$1;
var message = cljs.core.get.call(null,map__51358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__39598__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39598__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39598__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51360 = cljs.core.seq.call(null,plugins);
var chunk__51361 = null;
var count__51362 = (0);
var i__51363 = (0);
while(true){
if((i__51363 < count__51362)){
var vec__51364 = cljs.core._nth.call(null,chunk__51361,i__51363);
var k = cljs.core.nth.call(null,vec__51364,(0),null);
var plugin = cljs.core.nth.call(null,vec__51364,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51370 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51360,chunk__51361,count__51362,i__51363,pl_51370,vec__51364,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51370.call(null,msg_hist);
});})(seq__51360,chunk__51361,count__51362,i__51363,pl_51370,vec__51364,k,plugin))
);
} else {
}

var G__51371 = seq__51360;
var G__51372 = chunk__51361;
var G__51373 = count__51362;
var G__51374 = (i__51363 + (1));
seq__51360 = G__51371;
chunk__51361 = G__51372;
count__51362 = G__51373;
i__51363 = G__51374;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51360);
if(temp__4657__auto__){
var seq__51360__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51360__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__51360__$1);
var G__51375 = cljs.core.chunk_rest.call(null,seq__51360__$1);
var G__51376 = c__40444__auto__;
var G__51377 = cljs.core.count.call(null,c__40444__auto__);
var G__51378 = (0);
seq__51360 = G__51375;
chunk__51361 = G__51376;
count__51362 = G__51377;
i__51363 = G__51378;
continue;
} else {
var vec__51367 = cljs.core.first.call(null,seq__51360__$1);
var k = cljs.core.nth.call(null,vec__51367,(0),null);
var plugin = cljs.core.nth.call(null,vec__51367,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51360,chunk__51361,count__51362,i__51363,pl_51379,vec__51367,k,plugin,seq__51360__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51379.call(null,msg_hist);
});})(seq__51360,chunk__51361,count__51362,i__51363,pl_51379,vec__51367,k,plugin,seq__51360__$1,temp__4657__auto__))
);
} else {
}

var G__51380 = cljs.core.next.call(null,seq__51360__$1);
var G__51381 = null;
var G__51382 = (0);
var G__51383 = (0);
seq__51360 = G__51380;
chunk__51361 = G__51381;
count__51362 = G__51382;
i__51363 = G__51383;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51385 = arguments.length;
switch (G__51385) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51386_51391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51387_51392 = null;
var count__51388_51393 = (0);
var i__51389_51394 = (0);
while(true){
if((i__51389_51394 < count__51388_51393)){
var msg_51395 = cljs.core._nth.call(null,chunk__51387_51392,i__51389_51394);
figwheel.client.socket.handle_incoming_message.call(null,msg_51395);

var G__51396 = seq__51386_51391;
var G__51397 = chunk__51387_51392;
var G__51398 = count__51388_51393;
var G__51399 = (i__51389_51394 + (1));
seq__51386_51391 = G__51396;
chunk__51387_51392 = G__51397;
count__51388_51393 = G__51398;
i__51389_51394 = G__51399;
continue;
} else {
var temp__4657__auto___51400 = cljs.core.seq.call(null,seq__51386_51391);
if(temp__4657__auto___51400){
var seq__51386_51401__$1 = temp__4657__auto___51400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51386_51401__$1)){
var c__40444__auto___51402 = cljs.core.chunk_first.call(null,seq__51386_51401__$1);
var G__51403 = cljs.core.chunk_rest.call(null,seq__51386_51401__$1);
var G__51404 = c__40444__auto___51402;
var G__51405 = cljs.core.count.call(null,c__40444__auto___51402);
var G__51406 = (0);
seq__51386_51391 = G__51403;
chunk__51387_51392 = G__51404;
count__51388_51393 = G__51405;
i__51389_51394 = G__51406;
continue;
} else {
var msg_51407 = cljs.core.first.call(null,seq__51386_51401__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51407);

var G__51408 = cljs.core.next.call(null,seq__51386_51401__$1);
var G__51409 = null;
var G__51410 = (0);
var G__51411 = (0);
seq__51386_51391 = G__51408;
chunk__51387_51392 = G__51409;
count__51388_51393 = G__51410;
i__51389_51394 = G__51411;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__40781__auto__ = [];
var len__40774__auto___51416 = arguments.length;
var i__40775__auto___51417 = (0);
while(true){
if((i__40775__auto___51417 < len__40774__auto___51416)){
args__40781__auto__.push((arguments[i__40775__auto___51417]));

var G__51418 = (i__40775__auto___51417 + (1));
i__40775__auto___51417 = G__51418;
continue;
} else {
}
break;
}

var argseq__40782__auto__ = ((((0) < args__40781__auto__.length))?(new cljs.core.IndexedSeq(args__40781__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40782__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51413){
var map__51414 = p__51413;
var map__51414__$1 = ((((!((map__51414 == null)))?((((map__51414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51414):map__51414);
var opts = map__51414__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51412){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51412));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51419){if((e51419 instanceof Error)){
var e = e51419;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51419;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51420){
var map__51421 = p__51420;
var map__51421__$1 = ((((!((map__51421 == null)))?((((map__51421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51421):map__51421);
var msg_name = cljs.core.get.call(null,map__51421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502732696903
