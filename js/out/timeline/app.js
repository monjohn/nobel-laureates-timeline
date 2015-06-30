// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('timeline.app');
goog.require('cljs.core');
goog.require('timeline.wikipedia');
goog.require('timeline.render');
goog.require('timeline.data');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
timeline.app.filter_by_category = (function filter_by_category(state,category){
var data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("all",category))?cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(state):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(p1__22342_SHARP_));
}),cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$203,(function (){var G__22344 = data;
return (timeline.app.format_nobel_data.cljs$core$IFn$_invoke$arity$1 ? timeline.app.format_nobel_data.cljs$core$IFn$_invoke$arity$1(G__22344) : timeline.app.format_nobel_data.call(null,G__22344));
})(),cljs.core.array_seq([cljs.core.constant$keyword$274,null], 0));
});
timeline.app.format_nobel_people = (function format_nobel_people(people){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var laureates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22345_SHARP_){
return [cljs.core.str(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(p1__22345_SHARP_)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(p1__22345_SHARP_))].join('');
}),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(x));
var title = (((cljs.core.count(laureates) > (1)))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" & ",laureates):cljs.core.first(laureates));
var prize = [cljs.core.str(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(x))))].join('');
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.constant$keyword$128,title,cljs.core.array_seq([cljs.core.constant$keyword$196,prize], 0));
}),people);
});
timeline.app.format_nobel_data = (function format_nobel_data(data){
var sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.group_by(cljs.core.constant$keyword$22,data));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sorted){
return (function (p1__22346_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$198,cljs.core.constant$keyword$189],[cljs.core.first(p1__22346_SHARP_),cljs.core.second(p1__22346_SHARP_)]);
});})(sorted))
,sorted);
});
timeline.app.init_nobel_data = (function init_nobel_data(data){
var sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.group_by(cljs.core.constant$keyword$22,data));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sorted){
return (function (p1__22347_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$198,cljs.core.constant$keyword$199,cljs.core.constant$keyword$189],[cljs.core.first(p1__22347_SHARP_),true,cljs.core.second(p1__22347_SHARP_)]);
});})(sorted))
,sorted);
});
timeline.app.handle_response = (function handle_response(state,data){
var formatted = timeline.app.init_nobel_data(timeline.app.format_nobel_people(data));
var categories = cljs.core.keys(cljs.core.group_by(cljs.core.constant$keyword$23,data));
return timeline.app.filter_by_category(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$201,categories,cljs.core.array_seq([cljs.core.constant$keyword$189,timeline.app.format_nobel_people(data),cljs.core.constant$keyword$274,"physics",cljs.core.constant$keyword$203,formatted], 0)),"physics");
});
timeline.app.toggle_section_visibility = (function toggle_section_visibility(state,section){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$203,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22348_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(p1__22348_SHARP_))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__22348_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199], null),cljs.core.not);
} else {
return p1__22348_SHARP_;
}
}),cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(state)));
});
timeline.app.get_nobel_data = (function get_nobel_data(response_chan){
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_22384){
var state_val_22385 = (state_22384[(1)]);
if((state_val_22385 === (3))){
var inst_22382 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22384__$1,inst_22382);
} else {
if((state_val_22385 === (2))){
var inst_22376 = (state_22384[(2)]);
var inst_22377 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22378 = [cljs.core.constant$keyword$167,cljs.core.constant$keyword$275];
var inst_22379 = (new cljs.core.PersistentVector(null,2,(5),inst_22377,inst_22378,null));
var inst_22380 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22376,inst_22379);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22384__$1,(3),response_chan,inst_22380);
} else {
if((state_val_22385 === (1))){
var inst_22371 = [cljs.core.constant$keyword$230];
var inst_22372 = [false];
var inst_22373 = cljs.core.PersistentHashMap.fromArrays(inst_22371,inst_22372);
var inst_22374 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("http://api.nobelprize.org/v1/prize.json",cljs.core.array_seq([inst_22373], 0));
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22384__$1,(2),inst_22374);
} else {
return null;
}
}
}
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_22389 = [null,null,null,null,null,null,null];
(statearr_22389[(0)] = state_machine__11085__auto__);

(statearr_22389[(1)] = (1));

return statearr_22389;
});
var state_machine__11085__auto____1 = (function (state_22384){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22384);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e22390){if((e22390 instanceof Object)){
var ex__11088__auto__ = e22390;
var statearr_22391_22393 = state_22384;
(statearr_22391_22393[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22384);

return cljs.core.constant$keyword$31;
} else {
throw e22390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__22394 = state_22384;
state_22384 = G__22394;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_22392 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_22392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_22392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
});
timeline.app.get_saved_data = (function get_saved_data(response_chan){
return cljs.core.async._GT__BANG_(response_chan,timeline.data.data());
});
timeline.app.load_app = (function load_app(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$204,(function (){var G__22396 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,timeline.wikipedia.wikidata,cljs.core.constant$keyword$277,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22396) : cljs.core.atom.call(null,G__22396));
})(),cljs.core.constant$keyword$205,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$278,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null),cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,timeline.app.filter_by_category,cljs.core.constant$keyword$278,timeline.app.handle_response], null)], null);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
timeline.app.init_updates = (function init_updates(app){
var seq__22471 = cljs.core.seq(cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(app));
var chunk__22472 = null;
var count__22473 = (0);
var i__22474 = (0);
while(true){
if((i__22474 < count__22473)){
var vec__22475 = chunk__22472.cljs$core$IIndexed$_nth$arity$2(null,i__22474);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(1),null);
var c__11164__auto___22545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22545,vec__22475,ch,update_fn){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22545,vec__22475,ch,update_fn){
return (function (state_22494){
var state_val_22495 = (state_22494[(1)]);
if((state_val_22495 === (7))){
var inst_22481 = (state_22494[(2)]);
var inst_22482 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], received value ["),cljs.core.str(inst_22481),cljs.core.str("]")].join('');
var inst_22483 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22482], 0));
var inst_22484 = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(app);
var inst_22485 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22484,update_fn,inst_22481);
var inst_22486 = timeline.render.request_render(app);
var state_22494__$1 = (function (){var statearr_22496 = state_22494;
(statearr_22496[(7)] = inst_22483);

(statearr_22496[(8)] = inst_22485);

(statearr_22496[(9)] = inst_22486);

return statearr_22496;
})();
var statearr_22497_22546 = state_22494__$1;
(statearr_22497_22546[(2)] = null);

(statearr_22497_22546[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22495 === (6))){
var inst_22490 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22498_22547 = state_22494__$1;
(statearr_22498_22547[(2)] = inst_22490);

(statearr_22498_22547[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22495 === (5))){
var state_22494__$1 = state_22494;
var statearr_22499_22548 = state_22494__$1;
(statearr_22499_22548[(2)] = null);

(statearr_22499_22548[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22495 === (4))){
var inst_22478 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(app);
var inst_22479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22478,ch);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22494__$1,(7),inst_22479);
} else {
if((state_val_22495 === (3))){
var inst_22492 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22494__$1,inst_22492);
} else {
if((state_val_22495 === (2))){
var state_22494__$1 = state_22494;
var statearr_22500_22549 = state_22494__$1;
(statearr_22500_22549[(1)] = (4));



return cljs.core.constant$keyword$31;
} else {
if((state_val_22495 === (1))){
var state_22494__$1 = state_22494;
var statearr_22502_22550 = state_22494__$1;
(statearr_22502_22550[(2)] = null);

(statearr_22502_22550[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
return null;
}
}
}
}
}
}
}
});})(seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22545,vec__22475,ch,update_fn))
;
return ((function (seq__22471,chunk__22472,count__22473,i__22474,switch__11084__auto__,c__11164__auto___22545,vec__22475,ch,update_fn){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_22506 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22506[(0)] = state_machine__11085__auto__);

(statearr_22506[(1)] = (1));

return statearr_22506;
});
var state_machine__11085__auto____1 = (function (state_22494){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22494);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e22507){if((e22507 instanceof Object)){
var ex__11088__auto__ = e22507;
var statearr_22508_22551 = state_22494;
(statearr_22508_22551[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22494);

return cljs.core.constant$keyword$31;
} else {
throw e22507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__22552 = state_22494;
state_22494 = G__22552;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22494){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(seq__22471,chunk__22472,count__22473,i__22474,switch__11084__auto__,c__11164__auto___22545,vec__22475,ch,update_fn))
})();
var state__11166__auto__ = (function (){var statearr_22509 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_22509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___22545);

return statearr_22509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22545,vec__22475,ch,update_fn))
);


var G__22553 = seq__22471;
var G__22554 = chunk__22472;
var G__22555 = count__22473;
var G__22556 = (i__22474 + (1));
seq__22471 = G__22553;
chunk__22472 = G__22554;
count__22473 = G__22555;
i__22474 = G__22556;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22471);
if(temp__4126__auto__){
var seq__22471__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22471__$1)){
var c__4522__auto__ = cljs.core.chunk_first(seq__22471__$1);
var G__22557 = cljs.core.chunk_rest(seq__22471__$1);
var G__22558 = c__4522__auto__;
var G__22559 = cljs.core.count(c__4522__auto__);
var G__22560 = (0);
seq__22471 = G__22557;
chunk__22472 = G__22558;
count__22473 = G__22559;
i__22474 = G__22560;
continue;
} else {
var vec__22510 = cljs.core.first(seq__22471__$1);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var c__11164__auto___22561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__){
return (function (state_22529){
var state_val_22530 = (state_22529[(1)]);
if((state_val_22530 === (7))){
var inst_22516 = (state_22529[(2)]);
var inst_22517 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], received value ["),cljs.core.str(inst_22516),cljs.core.str("]")].join('');
var inst_22518 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22517], 0));
var inst_22519 = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(app);
var inst_22520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22519,update_fn,inst_22516);
var inst_22521 = timeline.render.request_render(app);
var state_22529__$1 = (function (){var statearr_22531 = state_22529;
(statearr_22531[(7)] = inst_22518);

(statearr_22531[(8)] = inst_22520);

(statearr_22531[(9)] = inst_22521);

return statearr_22531;
})();
var statearr_22532_22562 = state_22529__$1;
(statearr_22532_22562[(2)] = null);

(statearr_22532_22562[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22530 === (6))){
var inst_22525 = (state_22529[(2)]);
var state_22529__$1 = state_22529;
var statearr_22533_22563 = state_22529__$1;
(statearr_22533_22563[(2)] = inst_22525);

(statearr_22533_22563[(1)] = (3));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22530 === (5))){
var state_22529__$1 = state_22529;
var statearr_22534_22564 = state_22529__$1;
(statearr_22534_22564[(2)] = null);

(statearr_22534_22564[(1)] = (6));


return cljs.core.constant$keyword$31;
} else {
if((state_val_22530 === (4))){
var inst_22513 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(app);
var inst_22514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22513,ch);
var state_22529__$1 = state_22529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22529__$1,(7),inst_22514);
} else {
if((state_val_22530 === (3))){
var inst_22527 = (state_22529[(2)]);
var state_22529__$1 = state_22529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22529__$1,inst_22527);
} else {
if((state_val_22530 === (2))){
var state_22529__$1 = state_22529;
var statearr_22535_22565 = state_22529__$1;
(statearr_22535_22565[(1)] = (4));



return cljs.core.constant$keyword$31;
} else {
if((state_val_22530 === (1))){
var state_22529__$1 = state_22529;
var statearr_22537_22566 = state_22529__$1;
(statearr_22537_22566[(2)] = null);

(statearr_22537_22566[(1)] = (2));


return cljs.core.constant$keyword$31;
} else {
return null;
}
}
}
}
}
}
}
});})(seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__))
;
return ((function (seq__22471,chunk__22472,count__22473,i__22474,switch__11084__auto__,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_22541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22541[(0)] = state_machine__11085__auto__);

(statearr_22541[(1)] = (1));

return statearr_22541;
});
var state_machine__11085__auto____1 = (function (state_22529){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_22529);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e22542){if((e22542 instanceof Object)){
var ex__11088__auto__ = e22542;
var statearr_22543_22567 = state_22529;
(statearr_22543_22567[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22529);

return cljs.core.constant$keyword$31;
} else {
throw e22542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__22568 = state_22529;
state_22529 = G__22568;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_22529){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_22529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(seq__22471,chunk__22472,count__22473,i__22474,switch__11084__auto__,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__))
})();
var state__11166__auto__ = (function (){var statearr_22544 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_22544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto___22561);

return statearr_22544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(seq__22471,chunk__22472,count__22473,i__22474,c__11164__auto___22561,vec__22510,ch,update_fn,seq__22471__$1,temp__4126__auto__))
);


var G__22569 = cljs.core.next(seq__22471__$1);
var G__22570 = null;
var G__22571 = (0);
var G__22572 = (0);
seq__22471 = G__22569;
chunk__22472 = G__22570;
count__22473 = G__22571;
i__22474 = G__22572;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Application entry point
*/
timeline.app.init = (function init(){
var app = timeline.app.load_app();
timeline.app.init_updates(app);

timeline.app.get_nobel_data(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$205,cljs.core.constant$keyword$278], null)));

return timeline.render.request_render(app);
});
goog.exportSymbol('timeline.app.init', timeline.app.init);
