// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4635_4649 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4636_4650 = null;
var count__4637_4651 = (0);
var i__4638_4652 = (0);
while(true){
if((i__4638_4652 < count__4637_4651)){
var f_4653 = cljs.core._nth.call(null,chunk__4636_4650,i__4638_4652);
cljs.core.println.call(null,"  ",f_4653);

var G__4654 = seq__4635_4649;
var G__4655 = chunk__4636_4650;
var G__4656 = count__4637_4651;
var G__4657 = (i__4638_4652 + (1));
seq__4635_4649 = G__4654;
chunk__4636_4650 = G__4655;
count__4637_4651 = G__4656;
i__4638_4652 = G__4657;
continue;
} else {
var temp__4425__auto___4658 = cljs.core.seq.call(null,seq__4635_4649);
if(temp__4425__auto___4658){
var seq__4635_4659__$1 = temp__4425__auto___4658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4635_4659__$1)){
var c__3157__auto___4660 = cljs.core.chunk_first.call(null,seq__4635_4659__$1);
var G__4661 = cljs.core.chunk_rest.call(null,seq__4635_4659__$1);
var G__4662 = c__3157__auto___4660;
var G__4663 = cljs.core.count.call(null,c__3157__auto___4660);
var G__4664 = (0);
seq__4635_4649 = G__4661;
chunk__4636_4650 = G__4662;
count__4637_4651 = G__4663;
i__4638_4652 = G__4664;
continue;
} else {
var f_4665 = cljs.core.first.call(null,seq__4635_4659__$1);
cljs.core.println.call(null,"  ",f_4665);

var G__4666 = cljs.core.next.call(null,seq__4635_4659__$1);
var G__4667 = null;
var G__4668 = (0);
var G__4669 = (0);
seq__4635_4649 = G__4666;
chunk__4636_4650 = G__4667;
count__4637_4651 = G__4668;
i__4638_4652 = G__4669;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4670 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4670);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4670)))?cljs.core.second.call(null,arglists_4670):arglists_4670));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__4639 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4640 = null;
var count__4641 = (0);
var i__4642 = (0);
while(true){
if((i__4642 < count__4641)){
var vec__4643 = cljs.core._nth.call(null,chunk__4640,i__4642);
var name = cljs.core.nth.call(null,vec__4643,(0),null);
var map__4644 = cljs.core.nth.call(null,vec__4643,(1),null);
var map__4644__$1 = ((((!((map__4644 == null)))?((((map__4644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4644):map__4644);
var doc = cljs.core.get.call(null,map__4644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4671 = seq__4639;
var G__4672 = chunk__4640;
var G__4673 = count__4641;
var G__4674 = (i__4642 + (1));
seq__4639 = G__4671;
chunk__4640 = G__4672;
count__4641 = G__4673;
i__4642 = G__4674;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4639);
if(temp__4425__auto__){
var seq__4639__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4639__$1)){
var c__3157__auto__ = cljs.core.chunk_first.call(null,seq__4639__$1);
var G__4675 = cljs.core.chunk_rest.call(null,seq__4639__$1);
var G__4676 = c__3157__auto__;
var G__4677 = cljs.core.count.call(null,c__3157__auto__);
var G__4678 = (0);
seq__4639 = G__4675;
chunk__4640 = G__4676;
count__4641 = G__4677;
i__4642 = G__4678;
continue;
} else {
var vec__4646 = cljs.core.first.call(null,seq__4639__$1);
var name = cljs.core.nth.call(null,vec__4646,(0),null);
var map__4647 = cljs.core.nth.call(null,vec__4646,(1),null);
var map__4647__$1 = ((((!((map__4647 == null)))?((((map__4647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4647):map__4647);
var doc = cljs.core.get.call(null,map__4647__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4647__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4679 = cljs.core.next.call(null,seq__4639__$1);
var G__4680 = null;
var G__4681 = (0);
var G__4682 = (0);
seq__4639 = G__4679;
chunk__4640 = G__4680;
count__4641 = G__4681;
i__4642 = G__4682;
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
}
});
