// Compiled by ClojureScript 0.0-2760 {}
goog.provide('timeline.render');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.core');
goog.require('cljs.core.async');
/**
* 
*/
timeline.render.Button = quiescent.core.component.call(null,(function (category,channel){
return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"buttons",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__){
return (function (state_21295){
var state_val_21296 = (state_21295[(1)]);
if((state_val_21296 === (2))){
var inst_21293 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21295__$1,inst_21293);
} else {
if((state_val_21296 === (1))){
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21295__$1,(2),channel,category);
} else {
return null;
}
}
});})(c__6513__auto__))
;
return ((function (switch__6457__auto__,c__6513__auto__){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_21300 = [null,null,null,null,null,null,null];
(statearr_21300[(0)] = state_machine__6458__auto__);

(statearr_21300[(1)] = (1));

return statearr_21300;
});
var state_machine__6458__auto____1 = (function (state_21295){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_21295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e21301){if((e21301 instanceof Object)){
var ex__6461__auto__ = e21301;
var statearr_21302_21304 = state_21295;
(statearr_21302_21304[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21305 = state_21295;
state_21295 = G__21305;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_21295){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_21295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__))
})();
var state__6515__auto__ = (function (){var statearr_21303 = f__6514__auto__.call(null);
(statearr_21303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_21303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__))
);

return c__6513__auto__;
})], null),category);
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Event = quiescent.core.component.call(null,(function (ev,wikidata,channels){
var make_url = (function (s){
return [cljs.core.str("http://wikipedia.com"),cljs.core.str(s)].join('');
});
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cd-timeline-content"], null),cljs.core.apply.call(null,quiescent.dom.div,null,cljs.core.map.call(null,((function (make_url){
return (function (p1__21306_SHARP_){
var wdata = cljs.core.get.call(null,wikidata,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21306_SHARP_));
var show_class = (cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__21306_SHARP_))?"vis":" invis ");
return quiescent.dom.div.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (wdata,show_class,make_url){
return (function (_){
var c__6513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6513__auto__,wdata,show_class,make_url){
return (function (){
var f__6514__auto__ = (function (){var switch__6457__auto__ = ((function (c__6513__auto__,wdata,show_class,make_url){
return (function (state_21312){
var state_val_21313 = (state_21312[(1)]);
if((state_val_21313 === (2))){
var inst_21310 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21312__$1,inst_21310);
} else {
if((state_val_21313 === (1))){
var inst_21307 = new cljs.core.Keyword(null,"toggle-details","toggle-details",1826628390).cljs$core$IFn$_invoke$arity$1(channels);
var inst_21308 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21306_SHARP_);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21312__$1,(2),inst_21307,inst_21308);
} else {
return null;
}
}
});})(c__6513__auto__,wdata,show_class,make_url))
;
return ((function (switch__6457__auto__,c__6513__auto__,wdata,show_class,make_url){
return (function() {
var state_machine__6458__auto__ = null;
var state_machine__6458__auto____0 = (function (){
var statearr_21317 = [null,null,null,null,null,null,null];
(statearr_21317[(0)] = state_machine__6458__auto__);

(statearr_21317[(1)] = (1));

return statearr_21317;
});
var state_machine__6458__auto____1 = (function (state_21312){
while(true){
var ret_value__6459__auto__ = (function (){try{while(true){
var result__6460__auto__ = switch__6457__auto__.call(null,state_21312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6460__auto__;
}
break;
}
}catch (e21318){if((e21318 instanceof Object)){
var ex__6461__auto__ = e21318;
var statearr_21319_21321 = state_21312;
(statearr_21319_21321[(5)] = ex__6461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21322 = state_21312;
state_21312 = G__21322;
continue;
} else {
return ret_value__6459__auto__;
}
break;
}
});
state_machine__6458__auto__ = function(state_21312){
switch(arguments.length){
case 0:
return state_machine__6458__auto____0.call(this);
case 1:
return state_machine__6458__auto____1.call(this,state_21312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6458__auto____0;
state_machine__6458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6458__auto____1;
return state_machine__6458__auto__;
})()
;})(switch__6457__auto__,c__6513__auto__,wdata,show_class,make_url))
})();
var state__6515__auto__ = (function (){var statearr_21320 = f__6514__auto__.call(null);
(statearr_21320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6513__auto__);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6515__auto__);
});})(c__6513__auto__,wdata,show_class,make_url))
);

return c__6513__auto__;
});})(wdata,show_class,make_url))
], null),quiescent.dom.h2.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"title"], null),[cljs.core.str(new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(p1__21306_SHARP_)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(p1__21306_SHARP_))].join(''))),quiescent.dom.p.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),show_class], null),new cljs.core.Keyword(null,"initial-paragraph","initial-paragraph",1595796734).cljs$core$IFn$_invoke$arity$1(wdata),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),make_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(wdata)),new cljs.core.Keyword(null,"className","className",-1983287057),"cd-read-more"], null),"Learn more")));
});})(make_url))
,new cljs.core.Keyword(null,"laureates","laureates",-281138969).cljs$core$IFn$_invoke$arity$1(ev))),quiescent.dom.p.call(null,null,new cljs.core.Keyword(null,"prize","prize",-2147369496).cljs$core$IFn$_invoke$arity$1(ev)),quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cd-date"], null),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(ev)));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Section = quiescent.core.component.call(null,(function (section,wikidata,channels){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cd-timeline-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cd-timeline-img cd-picture"], null),quiescent.dom.span.call(null,null,new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section))),cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"timeline-series"], null),cljs.core.map.call(null,(function (p1__21323_SHARP_){
return timeline.render.Event.call(null,p1__21323_SHARP_,wikidata,channels);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(section))));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Timeline = quiescent.core.component.call(null,(function (state,channels){
return quiescent.dom.div.call(null,null,cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"button-row"], null),cljs.core.map.call(null,(function (p1__21324_SHARP_){
return timeline.render.Button.call(null,p1__21324_SHARP_,new cljs.core.Keyword(null,"filter-by-category","filter-by-category",-1483829482).cljs$core$IFn$_invoke$arity$1(channels));
}),new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(state))),quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"cd-timeline",new cljs.core.Keyword(null,"className","className",-1983287057),""], null),cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cd-container"], null),cljs.core.map.call(null,(function (p1__21325_SHARP_){
return timeline.render.Section.call(null,p1__21325_SHARP_,new cljs.core.Keyword(null,"wikidata","wikidata",2100084440).cljs$core$IFn$_invoke$arity$1(state),channels);
}),new cljs.core.Keyword(null,"filtered","filtered",-437499761).cljs$core$IFn$_invoke$arity$1(state)))));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.App = quiescent.core.component.call(null,(function (state,channels){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),""], null),quiescent.dom.header.call(null,null,quiescent.dom.h1.call(null,null,"Nobel Prize Winners")),timeline.render.Timeline.call(null,state,channels),quiescent.dom.footer.call(null,null,quiescent.dom.p.call(null,null,"Design from http://codyhouse.co/gem/vertical-timeline/")));
}),cljs.core.PersistentArrayMap.EMPTY);
var render_pending_QMARK__21326 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
timeline.render.request_render = ((function (render_pending_QMARK__21326){
return (function request_render(app){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__21326,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__21326){
return (function (){
quiescent.core.render.call(null,timeline.render.App.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app)),document.getElementById("qui"));

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__21326,false);
});})(render_pending_QMARK__21326))
);
} else {
return null;
}
});})(render_pending_QMARK__21326))
;

//# sourceMappingURL=render.js.map