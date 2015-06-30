// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$30);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t25990 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t25990 = (function (f,fn_handler,meta25991){
this.f = f;
this.fn_handler = fn_handler;
this.meta25991 = meta25991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t25990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t25990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t25990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t25990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25992){
var self__ = this;
var _25992__$1 = this;
return self__.meta25991;
});

cljs.core.async.impl.ioc_helpers.t25990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25992,meta25991__$1){
var self__ = this;
var _25992__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t25990(self__.f,self__.fn_handler,meta25991__$1));
});

cljs.core.async.impl.ioc_helpers.t25990.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t25990.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t25990";

cljs.core.async.impl.ioc_helpers.t25990.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async.impl.ioc-helpers/t25990");
});

cljs.core.async.impl.ioc_helpers.__GT_t25990 = (function __GT_t25990(f__$1,fn_handler__$1,meta25991){
return (new cljs.core.async.impl.ioc_helpers.t25990(f__$1,fn_handler__$1,meta25991));
});

}

return (new cljs.core.async.impl.ioc_helpers.t25990(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e25994){if((e25994 instanceof Object)){
var ex = e25994;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e25994;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_25998_26001 = state;
(statearr_25998_26001[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_25998_26001[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_25999_26002 = state;
(statearr_25999_26002[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26000 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26000) : cljs.core.deref.call(null,G__26000));
})());

(statearr_25999_26002[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$31;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_26006_26009 = state;
(statearr_26006_26009[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_26006_26009[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_26007_26010 = state;
(statearr_26007_26010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26008 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26008) : cljs.core.deref.call(null,G__26008));
})());

(statearr_26007_26010[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$31;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4338__auto__,k__4339__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4338__auto____$1,k__4339__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4340__auto__,k26012,else__4341__auto__){
var self__ = this;
var this__4340__auto____$1 = this;
var G__26014 = (((k26012 instanceof cljs.core.Keyword))?k26012.fqn:null);
switch (G__26014) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26012,else__4341__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4352__auto__,writer__4353__auto__,opts__4354__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
var pr_pair__4355__auto__ = ((function (this__4352__auto____$1){
return (function (keyval__4356__auto__){
return cljs.core.pr_sequential_writer(writer__4353__auto__,cljs.core.pr_writer,""," ","",opts__4354__auto__,keyval__4356__auto__);
});})(this__4352__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4353__auto__,pr_pair__4355__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4354__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4336__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4342__auto__){
var self__ = this;
var this__4342__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4333__auto__){
var self__ = this;
var this__4333__auto____$1 = this;
var h__4156__auto__ = self__.__hash;
if(!((h__4156__auto__ == null))){
return h__4156__auto__;
} else {
var h__4156__auto____$1 = cljs.core.hash_imap(this__4333__auto____$1);
self__.__hash = h__4156__auto____$1;

return h__4156__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4334__auto__,other__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3723__auto__ = other__4335__auto__;
if(cljs.core.truth_(and__3723__auto__)){
return ((this__4334__auto____$1.constructor === other__4335__auto__.constructor)) && (cljs.core.equiv_map(this__4334__auto____$1,other__4335__auto__));
} else {
return and__3723__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4347__auto__,k__4348__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$34,null,cljs.core.constant$keyword$32,null,cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$36,null,cljs.core.constant$keyword$35,null], null), null),k__4348__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4347__auto____$1),self__.__meta),k__4348__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4348__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4345__auto__,k__4346__auto__,G__26011){
var self__ = this;
var this__4345__auto____$1 = this;
var pred__26015 = cljs.core.keyword_identical_QMARK_;
var expr__26016 = k__4346__auto__;
if(cljs.core.truth_((function (){var G__26018 = cljs.core.constant$keyword$32;
var G__26019 = expr__26016;
return (pred__26015.cljs$core$IFn$_invoke$arity$2 ? pred__26015.cljs$core$IFn$_invoke$arity$2(G__26018,G__26019) : pred__26015.call(null,G__26018,G__26019));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26011,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26020 = cljs.core.constant$keyword$33;
var G__26021 = expr__26016;
return (pred__26015.cljs$core$IFn$_invoke$arity$2 ? pred__26015.cljs$core$IFn$_invoke$arity$2(G__26020,G__26021) : pred__26015.call(null,G__26020,G__26021));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26011,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26022 = cljs.core.constant$keyword$34;
var G__26023 = expr__26016;
return (pred__26015.cljs$core$IFn$_invoke$arity$2 ? pred__26015.cljs$core$IFn$_invoke$arity$2(G__26022,G__26023) : pred__26015.call(null,G__26022,G__26023));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26011,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26024 = cljs.core.constant$keyword$35;
var G__26025 = expr__26016;
return (pred__26015.cljs$core$IFn$_invoke$arity$2 ? pred__26015.cljs$core$IFn$_invoke$arity$2(G__26024,G__26025) : pred__26015.call(null,G__26024,G__26025));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26011,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26026 = cljs.core.constant$keyword$36;
var G__26027 = expr__26016;
return (pred__26015.cljs$core$IFn$_invoke$arity$2 ? pred__26015.cljs$core$IFn$_invoke$arity$2(G__26026,G__26027) : pred__26015.call(null,G__26026,G__26027));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26011,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4346__auto__,G__26011),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4350__auto__){
var self__ = this;
var this__4350__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4337__auto__,G__26011){
var self__ = this;
var this__4337__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26011,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4343__auto__,entry__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4344__auto__)){
return cljs.core._assoc(this__4343__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4344__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4344__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4343__auto____$1,entry__4344__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4372__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4372__auto__,writer__4373__auto__){
return cljs.core._write(writer__4373__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26013){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(G__26013),cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__26013),cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(G__26013),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__26013),cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__26013),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26013,cljs.core.constant$keyword$32,cljs.core.array_seq([cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_26030 = state;
(statearr_26030[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_26030;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3723__auto__ = exception;
if(cljs.core.truth_(and__3723__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3723__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3723__auto__ = exception;
if(cljs.core.truth_(and__3723__auto__)){
var and__3723__auto____$1 = catch_block;
if(cljs.core.truth_(and__3723__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3723__auto____$1;
}
} else {
return and__3723__auto__;
}
})())){
var statearr_26036 = state;
(statearr_26036[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_26036[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_26036[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_26036[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$32,null,cljs.core.array_seq([cljs.core.constant$keyword$33,null], 0)));

return statearr_26036;
} else {
if(cljs.core.truth_((function (){var and__3723__auto__ = exception;
if(cljs.core.truth_(and__3723__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3723__auto__;
}
})())){
var statearr_26037_26041 = state;
(statearr_26037_26041[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__26042 = state;
state = G__26042;
continue;
} else {
if(cljs.core.truth_((function (){var and__3723__auto__ = exception;
if(cljs.core.truth_(and__3723__auto__)){
var and__3723__auto____$1 = cljs.core.not(catch_block);
if(and__3723__auto____$1){
return cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3723__auto____$1;
}
} else {
return and__3723__auto__;
}
})())){
var statearr_26038 = state;
(statearr_26038[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26038[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$34,null));

return statearr_26038;
} else {
if(cljs.core.truth_((function (){var and__3723__auto__ = cljs.core.not(exception);
if(and__3723__auto__){
return cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3723__auto__;
}
})())){
var statearr_26039 = state;
(statearr_26039[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26039[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$34,null));

return statearr_26039;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_26040 = state;
(statearr_26040[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26040[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_26040;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
