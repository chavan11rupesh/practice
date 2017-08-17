// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50653){
var map__50654 = p__50653;
var map__50654__$1 = ((((!((map__50654 == null)))?((((map__50654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50654):map__50654);
var m = map__50654__$1;
var n = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50656_50678 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50657_50679 = null;
var count__50658_50680 = (0);
var i__50659_50681 = (0);
while(true){
if((i__50659_50681 < count__50658_50680)){
var f_50682 = cljs.core._nth.call(null,chunk__50657_50679,i__50659_50681);
cljs.core.println.call(null,"  ",f_50682);

var G__50683 = seq__50656_50678;
var G__50684 = chunk__50657_50679;
var G__50685 = count__50658_50680;
var G__50686 = (i__50659_50681 + (1));
seq__50656_50678 = G__50683;
chunk__50657_50679 = G__50684;
count__50658_50680 = G__50685;
i__50659_50681 = G__50686;
continue;
} else {
var temp__4657__auto___50687 = cljs.core.seq.call(null,seq__50656_50678);
if(temp__4657__auto___50687){
var seq__50656_50688__$1 = temp__4657__auto___50687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50656_50688__$1)){
var c__40444__auto___50689 = cljs.core.chunk_first.call(null,seq__50656_50688__$1);
var G__50690 = cljs.core.chunk_rest.call(null,seq__50656_50688__$1);
var G__50691 = c__40444__auto___50689;
var G__50692 = cljs.core.count.call(null,c__40444__auto___50689);
var G__50693 = (0);
seq__50656_50678 = G__50690;
chunk__50657_50679 = G__50691;
count__50658_50680 = G__50692;
i__50659_50681 = G__50693;
continue;
} else {
var f_50694 = cljs.core.first.call(null,seq__50656_50688__$1);
cljs.core.println.call(null,"  ",f_50694);

var G__50695 = cljs.core.next.call(null,seq__50656_50688__$1);
var G__50696 = null;
var G__50697 = (0);
var G__50698 = (0);
seq__50656_50678 = G__50695;
chunk__50657_50679 = G__50696;
count__50658_50680 = G__50697;
i__50659_50681 = G__50698;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50699 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39610__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39610__auto__)){
return or__39610__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50699);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50699)))?cljs.core.second.call(null,arglists_50699):arglists_50699));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50660_50700 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50661_50701 = null;
var count__50662_50702 = (0);
var i__50663_50703 = (0);
while(true){
if((i__50663_50703 < count__50662_50702)){
var vec__50664_50704 = cljs.core._nth.call(null,chunk__50661_50701,i__50663_50703);
var name_50705 = cljs.core.nth.call(null,vec__50664_50704,(0),null);
var map__50667_50706 = cljs.core.nth.call(null,vec__50664_50704,(1),null);
var map__50667_50707__$1 = ((((!((map__50667_50706 == null)))?((((map__50667_50706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50667_50706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50667_50706):map__50667_50706);
var doc_50708 = cljs.core.get.call(null,map__50667_50707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50709 = cljs.core.get.call(null,map__50667_50707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50705);

cljs.core.println.call(null," ",arglists_50709);

if(cljs.core.truth_(doc_50708)){
cljs.core.println.call(null," ",doc_50708);
} else {
}

var G__50710 = seq__50660_50700;
var G__50711 = chunk__50661_50701;
var G__50712 = count__50662_50702;
var G__50713 = (i__50663_50703 + (1));
seq__50660_50700 = G__50710;
chunk__50661_50701 = G__50711;
count__50662_50702 = G__50712;
i__50663_50703 = G__50713;
continue;
} else {
var temp__4657__auto___50714 = cljs.core.seq.call(null,seq__50660_50700);
if(temp__4657__auto___50714){
var seq__50660_50715__$1 = temp__4657__auto___50714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50660_50715__$1)){
var c__40444__auto___50716 = cljs.core.chunk_first.call(null,seq__50660_50715__$1);
var G__50717 = cljs.core.chunk_rest.call(null,seq__50660_50715__$1);
var G__50718 = c__40444__auto___50716;
var G__50719 = cljs.core.count.call(null,c__40444__auto___50716);
var G__50720 = (0);
seq__50660_50700 = G__50717;
chunk__50661_50701 = G__50718;
count__50662_50702 = G__50719;
i__50663_50703 = G__50720;
continue;
} else {
var vec__50669_50721 = cljs.core.first.call(null,seq__50660_50715__$1);
var name_50722 = cljs.core.nth.call(null,vec__50669_50721,(0),null);
var map__50672_50723 = cljs.core.nth.call(null,vec__50669_50721,(1),null);
var map__50672_50724__$1 = ((((!((map__50672_50723 == null)))?((((map__50672_50723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50672_50723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50672_50723):map__50672_50723);
var doc_50725 = cljs.core.get.call(null,map__50672_50724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50726 = cljs.core.get.call(null,map__50672_50724__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50722);

cljs.core.println.call(null," ",arglists_50726);

if(cljs.core.truth_(doc_50725)){
cljs.core.println.call(null," ",doc_50725);
} else {
}

var G__50727 = cljs.core.next.call(null,seq__50660_50715__$1);
var G__50728 = null;
var G__50729 = (0);
var G__50730 = (0);
seq__50660_50700 = G__50727;
chunk__50661_50701 = G__50728;
count__50662_50702 = G__50729;
i__50663_50703 = G__50730;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__50674 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50675 = null;
var count__50676 = (0);
var i__50677 = (0);
while(true){
if((i__50677 < count__50676)){
var role = cljs.core._nth.call(null,chunk__50675,i__50677);
var temp__4657__auto___50731__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50731__$1)){
var spec_50732 = temp__4657__auto___50731__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_50732));
} else {
}

var G__50733 = seq__50674;
var G__50734 = chunk__50675;
var G__50735 = count__50676;
var G__50736 = (i__50677 + (1));
seq__50674 = G__50733;
chunk__50675 = G__50734;
count__50676 = G__50735;
i__50677 = G__50736;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__50674);
if(temp__4657__auto____$1){
var seq__50674__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50674__$1)){
var c__40444__auto__ = cljs.core.chunk_first.call(null,seq__50674__$1);
var G__50737 = cljs.core.chunk_rest.call(null,seq__50674__$1);
var G__50738 = c__40444__auto__;
var G__50739 = cljs.core.count.call(null,c__40444__auto__);
var G__50740 = (0);
seq__50674 = G__50737;
chunk__50675 = G__50738;
count__50676 = G__50739;
i__50677 = G__50740;
continue;
} else {
var role = cljs.core.first.call(null,seq__50674__$1);
var temp__4657__auto___50741__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50741__$2)){
var spec_50742 = temp__4657__auto___50741__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_50742));
} else {
}

var G__50743 = cljs.core.next.call(null,seq__50674__$1);
var G__50744 = null;
var G__50745 = (0);
var G__50746 = (0);
seq__50674 = G__50743;
chunk__50675 = G__50744;
count__50676 = G__50745;
i__50677 = G__50746;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502732696107
