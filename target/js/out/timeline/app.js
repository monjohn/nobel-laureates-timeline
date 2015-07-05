// Compiled by ClojureScript 0.0-2760 {}
goog.provide('timeline.app');
goog.require('cljs.core');
goog.require('timeline.wikipedia');
goog.require('timeline.render');
goog.require('timeline.data');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
timeline.app.get_nobel_data = (function get_nobel_data(response_chan){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__){
return (function (state_17367){
var state_val_17368 = (state_17367[(1)]);
if((state_val_17368 === (3))){
var inst_17365 = (state_17367[(2)]);
var state_17367__$1 = state_17367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17367__$1,inst_17365);
} else {
if((state_val_17368 === (2))){
var inst_17359 = (state_17367[(2)]);
var inst_17360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17361 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"prizes","prizes",-1872146334)];
var inst_17362 = (new cljs.core.PersistentVector(null,2,(5),inst_17360,inst_17361,null));
var inst_17363 = cljs.core.get_in.call(null,inst_17359,inst_17362);
var state_17367__$1 = state_17367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17367__$1,(3),response_chan,inst_17363);
} else {
if((state_val_17368 === (1))){
var inst_17354 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_17355 = [false];
var inst_17356 = cljs.core.PersistentHashMap.fromArrays(inst_17354,inst_17355);
var inst_17357 = cljs_http.client.get.call(null,"http://api.nobelprize.org/v1/prize.json",inst_17356);
var state_17367__$1 = state_17367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17367__$1,(2),inst_17357);
} else {
return null;
}
}
}
});})(c__6513__auto__))
;
return ((function (switch__6457__auto__,c__6513__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17372 = [null,null,null,null,null,null,null];
(statearr_17372[(0)] = state_machine__6458__auto__);

(statearr_17372[(1)] = (1));

return statearr_17372;
});
var state_machine__6458__auto____1 = (function (state_17367){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17373){if((e17373 instanceof Object)){
var ex__6461__auto__ = e17373;
var statearr_17374_17376 = state_17367;
(statearr_17374_17376[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17377 = state_17367;
state_17367 = G__17377;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17367){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__))
})();
var state__6515__auto__ = (function (){var statearr_17375 = f__6514__auto__.call(null);
(statearr_17375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_17375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__))
);

return c__6513__auto__;
});
timeline.app.sample_data = (function sample_data(response_chan){
return cljs.core.async._GT__BANG_.call(null,response_chan,timeline.data.data.call(null));
});
timeline.app.format_nobel_people = (function format_nobel_people(people){
return cljs.core.map.call(null,(function (x){
var laureates = cljs.core.map.call(null,(function (p1__17378_SHARP_){
return cljs.core.assoc.call(null,p1__17378_SHARP_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
}),new cljs.core.Keyword(null,"laureates","laureates",-281138969).cljs$core$IFn$_invoke$arity$1(x));
var prize = [cljs.core.str(new cljs.core.Keyword(null,"motivation","motivation",-1247284575).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"laureates","laureates",-281138969).cljs$core$IFn$_invoke$arity$1(x))))].join('');
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"laureates","laureates",-281138969),laureates,new cljs.core.Keyword(null,"prize","prize",-2147369496),prize);
}),people);
});
timeline.app.format_nobel_data = (function format_nobel_data(data){
var sorted = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"year","year",335913393),data));
return cljs.core.map.call(null,((function (sorted){
return (function (p1__17379_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-title","section-title",1261938902),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.core.first.call(null,p1__17379_SHARP_),cljs.core.second.call(null,p1__17379_SHARP_)]);
});})(sorted))
,sorted);
});
timeline.app.filter_by_category = (function filter_by_category(state,category){
var data = cljs.core.filter.call(null,(function (p1__17380_SHARP_){
return cljs.core._EQ_.call(null,category,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__17380_SHARP_));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"filtered","filtered",-437499761),timeline.app.format_nobel_data.call(null,data),new cljs.core.Keyword(null,"filter","filter",-948537934),category);
});
timeline.app.make_invisible = (function make_invisible(laureates){
return cljs.core.map.call(null,(function (x){



return true;
}),laureates);
});
timeline.app.init_nobel_data = (function init_nobel_data(data){
var sorted = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"year","year",335913393),data));
return cljs.core.map.call(null,((function (sorted){
return (function (p1__17381_SHARP_){
var NOT_USED = cljs.core.map.call(null,((function (sorted){
return (function (prize){
return cljs.core.update.call(null,prize,new cljs.core.Keyword(null,"laureates","laureates",-281138969),timeline.app.make_invisible);
});})(sorted))
,cljs.core.second.call(null,p1__17381_SHARP_));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-title","section-title",1261938902),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.core.first.call(null,p1__17381_SHARP_),data]);
});})(sorted))
,sorted);
});
timeline.app.handle_response = (function handle_response(state,data){
var formatted = timeline.app.init_nobel_data.call(null,timeline.app.format_nobel_people.call(null,data));
var categories = cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",-593092832),data));
return timeline.app.filter_by_category.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"categories","categories",178386610),categories,new cljs.core.Keyword(null,"data","data",-232669377),timeline.app.format_nobel_people.call(null,data),new cljs.core.Keyword(null,"filter","filter",-948537934),"physics",new cljs.core.Keyword(null,"filtered","filtered",-437499761),formatted),"physics");
});
timeline.app.laureate_vis = (function laureate_vis(laureates,id){
return cljs.core.map.call(null,(function (p1__17382_SHARP_){
if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17382_SHARP_))){
return cljs.core.update.call(null,p1__17382_SHARP_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.not);
} else {
return p1__17382_SHARP_;
}
}),laureates);
});
timeline.app.laureates_visibility = (function laureates_visibility(prizes,id){
return cljs.core.map.call(null,(function (p1__17383_SHARP_){
return cljs.core.update.call(null,p1__17383_SHARP_,new cljs.core.Keyword(null,"laureates","laureates",-281138969),timeline.app.laureate_vis,id);
}),prizes);
});
timeline.app.toggle_detail_visibility = (function toggle_detail_visibility(state,id){
var filtered = new cljs.core.Keyword(null,"filtered","filtered",-437499761).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"filtered","filtered",-437499761),cljs.core.map.call(null,((function (filtered){
return (function (p1__17384_SHARP_){
return cljs.core.update_in.call(null,p1__17384_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),timeline.app.laureates_visibility,id);
});})(filtered))
,new cljs.core.Keyword(null,"filtered","filtered",-437499761).cljs$core$IFn$_invoke$arity$1(state)));
});
timeline.app.load_app = (function load_app(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wikidata","wikidata",2100084440),timeline.wikipedia.wikidata], null)),new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-details","toggle-details",1826628390),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"filter-by-category","filter-by-category",-1483829482),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"http-response","http-response",361218721),cljs.core.async.chan.call(null)], null),new cljs.core.Keyword(null,"consumers","consumers",270616753),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-details","toggle-details",1826628390),timeline.app.toggle_detail_visibility,new cljs.core.Keyword(null,"filter-by-category","filter-by-category",-1483829482),timeline.app.filter_by_category,new cljs.core.Keyword(null,"http-response","http-response",361218721),timeline.app.handle_response], null)], null);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
timeline.app.init_updates = (function init_updates(app){
var seq__17459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"consumers","consumers",270616753).cljs$core$IFn$_invoke$arity$1(app));
var chunk__17460 = null;
var count__17461 = (0);
var i__17462 = (0);
while(true){
if((i__17462 < count__17461)){
var vec__17463 = cljs.core._nth.call(null,chunk__17460,i__17462);
var ch = cljs.core.nth.call(null,vec__17463,(0),null);
var update_fn = cljs.core.nth.call(null,vec__17463,(1),null);
var c__6513__auto___17533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17533,vec__17463,ch,update_fn){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17533,vec__17463,ch,update_fn){
return (function (state_17482){
var state_val_17483 = (state_17482[(1)]);
if((state_val_17483 === (7))){
var inst_17469 = (state_17482[(2)]);
var inst_17470 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], received value ["),cljs.core.str(inst_17469),cljs.core.str("]")].join('');
var inst_17471 = cljs.core.println.call(null,inst_17470);
var inst_17472 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_17473 = cljs.core.swap_BANG_.call(null,inst_17472,update_fn,inst_17469);
var inst_17474 = timeline.render.request_render.call(null,app);
var state_17482__$1 = (function (){var statearr_17484 = state_17482;
(statearr_17484[(7)] = inst_17473);

(statearr_17484[(8)] = inst_17471);

(statearr_17484[(9)] = inst_17474);

return statearr_17484;
})();
var statearr_17485_17534 = state_17482__$1;
(statearr_17485_17534[(2)] = null);

(statearr_17485_17534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17483 === (6))){
var inst_17478 = (state_17482[(2)]);
var state_17482__$1 = state_17482;
var statearr_17486_17535 = state_17482__$1;
(statearr_17486_17535[(2)] = inst_17478);

(statearr_17486_17535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17483 === (5))){
var state_17482__$1 = state_17482;
var statearr_17487_17536 = state_17482__$1;
(statearr_17487_17536[(2)] = null);

(statearr_17487_17536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17483 === (4))){
var inst_17466 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_17467 = cljs.core.get.call(null,inst_17466,ch);
var state_17482__$1 = state_17482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17482__$1,(7),inst_17467);
} else {
if((state_val_17483 === (3))){
var inst_17480 = (state_17482[(2)]);
var state_17482__$1 = state_17482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17482__$1,inst_17480);
} else {
if((state_val_17483 === (2))){
var state_17482__$1 = state_17482;
var statearr_17488_17537 = state_17482__$1;
(statearr_17488_17537[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17483 === (1))){
var state_17482__$1 = state_17482;
var statearr_17490_17538 = state_17482__$1;
(statearr_17490_17538[(2)] = null);

(statearr_17490_17538[(1)] = (2));


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
});})(seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17533,vec__17463,ch,update_fn))
;
return ((function (seq__17459,chunk__17460,count__17461,i__17462,switch__6457__auto__,c__6513__auto___17533,vec__17463,ch,update_fn){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17494[(0)] = state_machine__6458__auto__);

(statearr_17494[(1)] = (1));

return statearr_17494;
});
var state_machine__6458__auto____1 = (function (state_17482){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17495){if((e17495 instanceof Object)){
var ex__6461__auto__ = e17495;
var statearr_17496_17539 = state_17482;
(statearr_17496_17539[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17540 = state_17482;
state_17482 = G__17540;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17482){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(seq__17459,chunk__17460,count__17461,i__17462,switch__6457__auto__,c__6513__auto___17533,vec__17463,ch,update_fn))
})();
var state__6515__auto__ = (function (){var statearr_17497 = f__6514__auto__.call(null);
(statearr_17497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___17533);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17533,vec__17463,ch,update_fn))
);


var G__17541 = seq__17459;
var G__17542 = chunk__17460;
var G__17543 = count__17461;
var G__17544 = (i__17462 + (1));
seq__17459 = G__17541;
chunk__17460 = G__17542;
count__17461 = G__17543;
i__17462 = G__17544;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17459);
if(temp__4126__auto__){
var seq__17459__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17459__$1)){
var c__4522__auto__ = cljs.core.chunk_first.call(null,seq__17459__$1);
var G__17545 = cljs.core.chunk_rest.call(null,seq__17459__$1);
var G__17546 = c__4522__auto__;
var G__17547 = cljs.core.count.call(null,c__4522__auto__);
var G__17548 = (0);
seq__17459 = G__17545;
chunk__17460 = G__17546;
count__17461 = G__17547;
i__17462 = G__17548;
continue;
} else {
var vec__17498 = cljs.core.first.call(null,seq__17459__$1);
var ch = cljs.core.nth.call(null,vec__17498,(0),null);
var update_fn = cljs.core.nth.call(null,vec__17498,(1),null);
var c__6513__auto___17549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__){
return (function (state_17517){
var state_val_17518 = (state_17517[(1)]);
if((state_val_17518 === (7))){
var inst_17504 = (state_17517[(2)]);
var inst_17505 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], received value ["),cljs.core.str(inst_17504),cljs.core.str("]")].join('');
var inst_17506 = cljs.core.println.call(null,inst_17505);
var inst_17507 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_17508 = cljs.core.swap_BANG_.call(null,inst_17507,update_fn,inst_17504);
var inst_17509 = timeline.render.request_render.call(null,app);
var state_17517__$1 = (function (){var statearr_17519 = state_17517;
(statearr_17519[(7)] = inst_17508);

(statearr_17519[(8)] = inst_17509);

(statearr_17519[(9)] = inst_17506);

return statearr_17519;
})();
var statearr_17520_17550 = state_17517__$1;
(statearr_17520_17550[(2)] = null);

(statearr_17520_17550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (6))){
var inst_17513 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
var statearr_17521_17551 = state_17517__$1;
(statearr_17521_17551[(2)] = inst_17513);

(statearr_17521_17551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (5))){
var state_17517__$1 = state_17517;
var statearr_17522_17552 = state_17517__$1;
(statearr_17522_17552[(2)] = null);

(statearr_17522_17552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (4))){
var inst_17501 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_17502 = cljs.core.get.call(null,inst_17501,ch);
var state_17517__$1 = state_17517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17517__$1,(7),inst_17502);
} else {
if((state_val_17518 === (3))){
var inst_17515 = (state_17517[(2)]);
var state_17517__$1 = state_17517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17517__$1,inst_17515);
} else {
if((state_val_17518 === (2))){
var state_17517__$1 = state_17517;
var statearr_17523_17553 = state_17517__$1;
(statearr_17523_17553[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17518 === (1))){
var state_17517__$1 = state_17517;
var statearr_17525_17554 = state_17517__$1;
(statearr_17525_17554[(2)] = null);

(statearr_17525_17554[(1)] = (2));


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
});})(seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__))
;
return ((function (seq__17459,chunk__17460,count__17461,i__17462,switch__6457__auto__,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_17529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17529[(0)] = state_machine__6458__auto__);

(statearr_17529[(1)] = (1));

return statearr_17529;
});
var state_machine__6458__auto____1 = (function (state_17517){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_17517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e17530){if((e17530 instanceof Object)){
var ex__6461__auto__ = e17530;
var statearr_17531_17555 = state_17517;
(statearr_17531_17555[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17556 = state_17517;
state_17517 = G__17556;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_17517){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(seq__17459,chunk__17460,count__17461,i__17462,switch__6457__auto__,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__))
})();
var state__6515__auto__ = (function (){var statearr_17532 = f__6514__auto__.call(null);
(statearr_17532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto___17549);

return statearr_17532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(seq__17459,chunk__17460,count__17461,i__17462,c__6513__auto___17549,vec__17498,ch,update_fn,seq__17459__$1,temp__4126__auto__))
);


var G__17557 = cljs.core.next.call(null,seq__17459__$1);
var G__17558 = null;
var G__17559 = (0);
var G__17560 = (0);
seq__17459 = G__17557;
chunk__17460 = G__17558;
count__17461 = G__17559;
i__17462 = G__17560;
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
var app = timeline.app.load_app.call(null);
timeline.app.init_updates.call(null,app);

timeline.app.get_nobel_data.call(null,cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"http-response","http-response",361218721)], null)));

return timeline.render.request_render.call(null,app);
});
goog.exportSymbol('timeline.app.init', timeline.app.init);

//# sourceMappingURL=app.js.map