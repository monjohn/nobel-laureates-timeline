// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if(typeof cljs.core.async.impl.channels.t26115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t26115 = (function (val,box,meta26116){
this.val = val;
this.box = box;
this.meta26116 = meta26116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t26115.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t26115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26117){
var self__ = this;
var _26117__$1 = this;
return self__.meta26116;
});

cljs.core.async.impl.channels.t26115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26117,meta26116__$1){
var self__ = this;
var _26117__$1 = this;
return (new cljs.core.async.impl.channels.t26115(self__.val,self__.box,meta26116__$1));
});

cljs.core.async.impl.channels.t26115.cljs$lang$type = true;

cljs.core.async.impl.channels.t26115.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t26115";

cljs.core.async.impl.channels.t26115.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async.impl.channels/t26115");
});

cljs.core.async.impl.channels.__GT_t26115 = (function __GT_t26115(val__$1,box__$1,meta26116){
return (new cljs.core.async.impl.channels.t26115(val__$1,box__$1,meta26116));
});

}

return (new cljs.core.async.impl.channels.t26115(val,box,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,22,cljs.core.constant$keyword$9,18,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,17,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cljs/core/async/impl/channels.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj26119 = {};
return obj26119;
})();

cljs.core.async.impl.channels.abort = (function abort(this$){
if((function (){var and__3723__auto__ = this$;
if(and__3723__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__3723__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4379__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3735__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__26123 = x__4379__auto__;
return goog.typeOf(G__26123);
})()]);
if(or__3735__auto__){
return or__3735__auto__;
} else {
var or__3735__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__3735__auto____$1){
return or__3735__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3723__auto__ = self__.buf;
if(cljs.core.truth_(and__3723__auto__)){
return (self__.puts.length === (0));
} else {
return and__3723__auto__;
}
})())){
var G__26124_26136 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__26124_26136) : self__.add_BANG_.call(null,G__26124_26136));
} else {
}

while(true){
var taker_26137 = self__.takes.pop();
if((taker_26137 == null)){
} else {
if(taker_26137.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_26138 = taker_26137.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_26139 = (cljs.core.truth_((function (){var and__3723__auto__ = self__.buf;
if(cljs.core.truth_(and__3723__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3723__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_26138,val_26139,taker_26137,this$__$1){
return (function (){
var G__26125 = val_26139;
return (take_cb_26138.cljs$core$IFn$_invoke$arity$1 ? take_cb_26138.cljs$core$IFn$_invoke$arity$1(G__26125) : take_cb_26138.call(null,G__26125));
});})(take_cb_26138,val_26139,taker_26137,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_26140 = self__.puts.pop();
if((putter_26140 == null)){
} else {
var put_handler_26141 = putter_26140.handler;
var val_26142 = putter_26140.val;
if(put_handler_26141.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_26143 = put_handler_26141.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_26143,put_handler_26141,val_26142,putter_26140,_,retval,this$__$1){
return (function (){
var G__26126 = true;
return (put_cb_26143.cljs$core$IFn$_invoke$arity$1 ? put_cb_26143.cljs$core$IFn$_invoke$arity$1(G__26126) : put_cb_26143.call(null,G__26126));
});})(put_cb_26143,put_handler_26141,val_26142,putter_26140,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__26127 = self__.buf;
var G__26128 = val_26142;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__26127,G__26128) : self__.add_BANG_.call(null,G__26127,G__26128));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__26129 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__26129) : put_cb.call(null,G__26129));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__26130_26144 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__26130_26144) : self__.add_BANG_.call(null,G__26130_26144));
} else {
}

if(cljs.core.truth_((function (){var and__3723__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3723__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3723__auto__;
}
})())){
var has_val = (function (){var and__3723__auto__ = self__.buf;
if(cljs.core.truth_(and__3723__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3723__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}


self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__3723__auto__ = self__.buf;
if(cljs.core.truth_(and__3723__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__3723__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__26131 = self__.buf;
var G__26132 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__26131,G__26132) : self__.add_BANG_.call(null,G__26131,G__26132));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_26145 = self__.takes.pop();
if(taker_26145.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_26146 = taker_26145.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_26147__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_26146,val_26147__$1,taker_26145,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__26133 = val_26147__$1;
return (take_cb_26146.cljs$core$IFn$_invoke$arity$1 ? take_cb_26146.cljs$core$IFn$_invoke$arity$1(G__26133) : take_cb_26146.call(null,G__26133));
});})(take_cb_26146,val_26147__$1,taker_26145,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__26134 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__26134) : take_cb.call(null,G__26134));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}


self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_26148 = self__.puts.pop();
if((putter_26148 == null)){
} else {
var put_handler_26149 = putter_26148.handler;
var val_26150 = putter_26148.val;
if(put_handler_26149.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_26151 = put_handler_26149.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_26151,put_handler_26149,val_26150,putter_26148,this$__$1){
return (function (){
var G__26135 = true;
return (put_cb_26151.cljs$core$IFn$_invoke$arity$1 ? put_cb_26151.cljs$core$IFn$_invoke$arity$1(G__26135) : put_cb_26151.call(null,G__26135));
});})(put_cb_26151,put_handler_26149,val_26150,putter_26148,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){
var else$ = (function (){var or__3735__auto__ = exh;
if(cljs.core.truth_(or__3735__auto__)){
return or__3735__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){
return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__26163 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26163) : xform.call(null,G__26163));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__26169 = null;
var G__26169__1 = (function (buf__$1){
try{var G__26165 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__26165) : add_BANG_.call(null,G__26165));
}catch (e26164){var t = e26164;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__26169__2 = (function (buf__$1,val){
try{var G__26167 = buf__$1;
var G__26168 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__26167,G__26168) : add_BANG_.call(null,G__26167,G__26168));
}catch (e26166){var t = e26166;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__26169 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__26169__1.call(this,buf__$1);
case 2:
return G__26169__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26169.cljs$core$IFn$_invoke$arity$1 = G__26169__1;
G__26169.cljs$core$IFn$_invoke$arity$2 = G__26169__2;
return G__26169;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
