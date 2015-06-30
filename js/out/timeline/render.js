// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('timeline.render');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.core');
goog.require('cljs.core.async');
/**
* 
*/
timeline.render.Button = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (category,channel){
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,"buttons",cljs.core.constant$keyword$192,(function (){
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_27217){
var state_val_27218 = (state_27217[(1)]);
if((state_val_27218 === (2))){
var inst_27215 = (state_27217[(2)]);
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27217__$1,inst_27215);
} else {
if((state_val_27218 === (1))){
var state_27217__$1 = state_27217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27217__$1,(2),channel,category);
} else {
return null;
}
}
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_27222 = [null,null,null,null,null,null,null];
(statearr_27222[(0)] = state_machine__11085__auto__);

(statearr_27222[(1)] = (1));

return statearr_27222;
});
var state_machine__11085__auto____1 = (function (state_27217){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_27217);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e27223){if((e27223 instanceof Object)){
var ex__11088__auto__ = e27223;
var statearr_27224_27226 = state_27217;
(statearr_27224_27226[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27217);

return cljs.core.constant$keyword$31;
} else {
throw e27223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__27227 = state_27217;
state_27217 = G__27227;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_27217){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_27217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_27225 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_27225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_27225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
})], null),category], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Event = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (ev,wikidata,channels){
var laureates = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(ev);
var make_url = ((function (laureates){
return (function (p1__27228_SHARP_){
return [cljs.core.str("http://wikipedia.com/"),cljs.core.str(p1__27228_SHARP_)].join('');
});})(laureates))
;
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"cd-timeline-content"], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quiescent.dom.div,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (laureates,make_url){
return (function (p1__27229_SHARP_){
var wdata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wikidata,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(p1__27229_SHARP_));
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,make_url(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(wdata)),cljs.core.constant$keyword$191,"tooltip"], null),quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,[cljs.core.str(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(p1__27229_SHARP_)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(p1__27229_SHARP_))].join('')], 0)),quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"tooltip-content"], null),cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(wdata)], 0))], 0));
});})(laureates,make_url))
,laureates)),quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(ev)], 0)),quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"cd-date"], null),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(ev)], 0))], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Section = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (section,wikidata,channels){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"cd-timeline-block"], null),quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,"cd-timeline-img cd-picture",cljs.core.constant$keyword$192,(function (){
var c__11164__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11164__auto__){
return (function (){
var f__11165__auto__ = (function (){var switch__11084__auto__ = ((function (c__11164__auto__){
return (function (state_27236){
var state_val_27237 = (state_27236[(1)]);
if((state_val_27237 === (2))){
var inst_27234 = (state_27236[(2)]);
var state_27236__$1 = (function (){var statearr_27238 = state_27236;
(statearr_27238[(7)] = inst_27234);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27236__$1,null);
} else {
if((state_val_27237 === (1))){
var inst_27231 = cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(channels);
var inst_27232 = cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(section);
var state_27236__$1 = state_27236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27236__$1,(2),inst_27231,inst_27232);
} else {
return null;
}
}
});})(c__11164__auto__))
;
return ((function (switch__11084__auto__,c__11164__auto__){
return (function() {
var state_machine__11085__auto__ = null;
var state_machine__11085__auto____0 = (function (){
var statearr_27242 = [null,null,null,null,null,null,null,null];
(statearr_27242[(0)] = state_machine__11085__auto__);

(statearr_27242[(1)] = (1));

return statearr_27242;
});
var state_machine__11085__auto____1 = (function (state_27236){
while(true){
var ret_value__11086__auto__ = (function (){try{while(true){
var result__11087__auto__ = switch__11084__auto__(state_27236);
if(cljs.core.keyword_identical_QMARK_(result__11087__auto__,cljs.core.constant$keyword$31)){
continue;
} else {
return result__11087__auto__;
}
break;
}
}catch (e27243){if((e27243 instanceof Object)){
var ex__11088__auto__ = e27243;
var statearr_27244_27249 = state_27236;
(statearr_27244_27249[(5)] = ex__11088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27236);

return cljs.core.constant$keyword$31;
} else {
throw e27243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11086__auto__,cljs.core.constant$keyword$31)){
var G__27250 = state_27236;
state_27236 = G__27250;
continue;
} else {
return ret_value__11086__auto__;
}
break;
}
});
state_machine__11085__auto__ = function(state_27236){
switch(arguments.length){
case 0:
return state_machine__11085__auto____0.call(this);
case 1:
return state_machine__11085__auto____1.call(this,state_27236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11085__auto____0;
state_machine__11085__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11085__auto____1;
return state_machine__11085__auto__;
})()
;})(switch__11084__auto__,c__11164__auto__))
})();
var state__11166__auto__ = (function (){var statearr_27245 = (function (){return (f__11165__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11165__auto__.cljs$core$IFn$_invoke$arity$0() : f__11165__auto__.call(null));
})();
(statearr_27245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11164__auto__);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11166__auto__);
});})(c__11164__auto__))
);

return c__11164__auto__;
})], null),quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(section)], 0))], 0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"timeline-series"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27230_SHARP_){
var G__27246 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27230_SHARP_,cljs.core.constant$keyword$199,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(section));
var G__27247 = wikidata;
var G__27248 = channels;
return (timeline.render.Event.cljs$core$IFn$_invoke$arity$3 ? timeline.render.Event.cljs$core$IFn$_invoke$arity$3(G__27246,G__27247,G__27248) : timeline.render.Event.call(null,G__27246,G__27247,G__27248));
}),cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(section)))], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.Timeline = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (state,channels){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"button-row"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27251_SHARP_){
var G__27253 = p1__27251_SHARP_;
var G__27254 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(channels);
return (timeline.render.Button.cljs$core$IFn$_invoke$arity$2 ? timeline.render.Button.cljs$core$IFn$_invoke$arity$2(G__27253,G__27254) : timeline.render.Button.call(null,G__27253,G__27254));
}),cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(state))),quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"cd-timeline",cljs.core.constant$keyword$191,""], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,"cd-container"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27252_SHARP_){
var G__27255 = p1__27252_SHARP_;
var G__27256 = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(state);
var G__27257 = channels;
return (timeline.render.Section.cljs$core$IFn$_invoke$arity$3 ? timeline.render.Section.cljs$core$IFn$_invoke$arity$3(G__27255,G__27256,G__27257) : timeline.render.Section.call(null,G__27255,G__27256,G__27257));
}),cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(state)))], 0))], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
* 
*/
timeline.render.App = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (state,channels){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,""], null),quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,"Nobel Prize Winners"], 0))], 0)),(function (){var G__27258 = state;
var G__27259 = channels;
return (timeline.render.Timeline.cljs$core$IFn$_invoke$arity$2 ? timeline.render.Timeline.cljs$core$IFn$_invoke$arity$2(G__27258,G__27259) : timeline.render.Timeline.call(null,G__27258,G__27259));
})(),quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,"Design from http://codyhouse.co/gem/vertical-timeline/"], 0))], 0))], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
var render_pending_QMARK__27271 = (function (){var G__27260 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27260) : cljs.core.atom.call(null,G__27260));
})();
/**
* Render the given application state tree.
*/
timeline.render.request_render = ((function (render_pending_QMARK__27271){
return (function request_render(app){
if(cljs.core.compare_and_set_BANG_(render_pending_QMARK__27271,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__27271){
return (function (){
quiescent.core.render((function (){var G__27266 = (function (){var G__27268 = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(app);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27268) : cljs.core.deref.call(null,G__27268));
})();
var G__27267 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(app);
return (timeline.render.App.cljs$core$IFn$_invoke$arity$2 ? timeline.render.App.cljs$core$IFn$_invoke$arity$2(G__27266,G__27267) : timeline.render.App.call(null,G__27266,G__27267));
})(),document.getElementById("qui"));

var G__27269 = render_pending_QMARK__27271;
var G__27270 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27269,G__27270) : cljs.core.reset_BANG_.call(null,G__27269,G__27270));
});})(render_pending_QMARK__27271))
);
} else {
return null;
}
});})(render_pending_QMARK__27271))
;
