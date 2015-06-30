// Compiled by ClojureScript 0.0-2760 {:elide-asserts true, :static-fns true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26727 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26727) : com.cognitect.transit.eq.hashCode.call(null,G__26727));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26728 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26728) : com.cognitect.transit.eq.hashCode.call(null,G__26728));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26729 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26729) : com.cognitect.transit.eq.hashCode.call(null,G__26729));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__26734_26738 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__26735_26739 = null;
var count__26736_26740 = (0);
var i__26737_26741 = (0);
while(true){
if((i__26737_26741 < count__26736_26740)){
var k_26742 = chunk__26735_26739.cljs$core$IIndexed$_nth$arity$2(null,i__26737_26741);
var v_26743 = (b[k_26742]);
(a[k_26742] = v_26743);

var G__26744 = seq__26734_26738;
var G__26745 = chunk__26735_26739;
var G__26746 = count__26736_26740;
var G__26747 = (i__26737_26741 + (1));
seq__26734_26738 = G__26744;
chunk__26735_26739 = G__26745;
count__26736_26740 = G__26746;
i__26737_26741 = G__26747;
continue;
} else {
var temp__4126__auto___26748 = cljs.core.seq(seq__26734_26738);
if(temp__4126__auto___26748){
var seq__26734_26749__$1 = temp__4126__auto___26748;
if(cljs.core.chunked_seq_QMARK_(seq__26734_26749__$1)){
var c__4522__auto___26750 = cljs.core.chunk_first(seq__26734_26749__$1);
var G__26751 = cljs.core.chunk_rest(seq__26734_26749__$1);
var G__26752 = c__4522__auto___26750;
var G__26753 = cljs.core.count(c__4522__auto___26750);
var G__26754 = (0);
seq__26734_26738 = G__26751;
chunk__26735_26739 = G__26752;
count__26736_26740 = G__26753;
i__26737_26741 = G__26754;
continue;
} else {
var k_26755 = cljs.core.first(seq__26734_26749__$1);
var v_26756 = (b[k_26755]);
(a[k_26755] = v_26756);

var G__26757 = cljs.core.next(seq__26734_26749__$1);
var G__26758 = null;
var G__26759 = (0);
var G__26760 = (0);
seq__26734_26738 = G__26757;
chunk__26735_26739 = G__26758;
count__26736_26740 = G__26759;
i__26737_26741 = G__26760;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__26761 = arr;
var G__26762 = true;
var G__26763 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__26761,G__26762,G__26763) : cljs.core.PersistentArrayMap.fromArray.call(null,G__26761,G__26762,G__26763));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__26764 = arr;
var G__26765 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__26764,G__26765) : cljs.core.PersistentVector.fromArray.call(null,G__26764,G__26765));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){
var G__26770 = cljs.core.name(type);
var G__26771 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__26770){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26770))
,":",((function (G__26770){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26770))
,"set",((function (G__26770){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__26770))
,"list",((function (G__26770){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__26770))
,"cmap",((function (G__26770){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__26772 = (i + (2));
var G__26773 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__26772;
ret = G__26773;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__26770))
], null),cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$221)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__26770,G__26771) : com.cognitect.transit.reader.call(null,G__26770,G__26771));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26774_26780 = cljs.core.seq(v);
var chunk__26775_26781 = null;
var count__26776_26782 = (0);
var i__26777_26783 = (0);
while(true){
if((i__26777_26783 < count__26776_26782)){
var x_26784 = chunk__26775_26781.cljs$core$IIndexed$_nth$arity$2(null,i__26777_26783);
ret.push(x_26784);

var G__26785 = seq__26774_26780;
var G__26786 = chunk__26775_26781;
var G__26787 = count__26776_26782;
var G__26788 = (i__26777_26783 + (1));
seq__26774_26780 = G__26785;
chunk__26775_26781 = G__26786;
count__26776_26782 = G__26787;
i__26777_26783 = G__26788;
continue;
} else {
var temp__4126__auto___26789 = cljs.core.seq(seq__26774_26780);
if(temp__4126__auto___26789){
var seq__26774_26790__$1 = temp__4126__auto___26789;
if(cljs.core.chunked_seq_QMARK_(seq__26774_26790__$1)){
var c__4522__auto___26791 = cljs.core.chunk_first(seq__26774_26790__$1);
var G__26792 = cljs.core.chunk_rest(seq__26774_26790__$1);
var G__26793 = c__4522__auto___26791;
var G__26794 = cljs.core.count(c__4522__auto___26791);
var G__26795 = (0);
seq__26774_26780 = G__26792;
chunk__26775_26781 = G__26793;
count__26776_26782 = G__26794;
i__26777_26783 = G__26795;
continue;
} else {
var x_26796 = cljs.core.first(seq__26774_26790__$1);
ret.push(x_26796);

var G__26797 = cljs.core.next(seq__26774_26790__$1);
var G__26798 = null;
var G__26799 = (0);
var G__26800 = (0);
seq__26774_26780 = G__26797;
chunk__26775_26781 = G__26798;
count__26776_26782 = G__26799;
i__26777_26783 = G__26800;
continue;
}
} else {
}
}
break;
}

var G__26778 = "array";
var G__26779 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26778,G__26779) : com.cognitect.transit.tagged.call(null,G__26778,G__26779));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26801_26807 = cljs.core.seq(v);
var chunk__26802_26808 = null;
var count__26803_26809 = (0);
var i__26804_26810 = (0);
while(true){
if((i__26804_26810 < count__26803_26809)){
var x_26811 = chunk__26802_26808.cljs$core$IIndexed$_nth$arity$2(null,i__26804_26810);
ret.push(x_26811);

var G__26812 = seq__26801_26807;
var G__26813 = chunk__26802_26808;
var G__26814 = count__26803_26809;
var G__26815 = (i__26804_26810 + (1));
seq__26801_26807 = G__26812;
chunk__26802_26808 = G__26813;
count__26803_26809 = G__26814;
i__26804_26810 = G__26815;
continue;
} else {
var temp__4126__auto___26816 = cljs.core.seq(seq__26801_26807);
if(temp__4126__auto___26816){
var seq__26801_26817__$1 = temp__4126__auto___26816;
if(cljs.core.chunked_seq_QMARK_(seq__26801_26817__$1)){
var c__4522__auto___26818 = cljs.core.chunk_first(seq__26801_26817__$1);
var G__26819 = cljs.core.chunk_rest(seq__26801_26817__$1);
var G__26820 = c__4522__auto___26818;
var G__26821 = cljs.core.count(c__4522__auto___26818);
var G__26822 = (0);
seq__26801_26807 = G__26819;
chunk__26802_26808 = G__26820;
count__26803_26809 = G__26821;
i__26804_26810 = G__26822;
continue;
} else {
var x_26823 = cljs.core.first(seq__26801_26817__$1);
ret.push(x_26823);

var G__26824 = cljs.core.next(seq__26801_26817__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26801_26807 = G__26824;
chunk__26802_26808 = G__26825;
count__26803_26809 = G__26826;
i__26804_26810 = G__26827;
continue;
}
} else {
}
}
break;
}

var G__26805 = "array";
var G__26806 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26805,G__26806) : com.cognitect.transit.tagged.call(null,G__26805,G__26806));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__26828_26832 = cljs.core.seq(v);
var chunk__26829_26833 = null;
var count__26830_26834 = (0);
var i__26831_26835 = (0);
while(true){
if((i__26831_26835 < count__26830_26834)){
var x_26836 = chunk__26829_26833.cljs$core$IIndexed$_nth$arity$2(null,i__26831_26835);
ret.push(x_26836);

var G__26837 = seq__26828_26832;
var G__26838 = chunk__26829_26833;
var G__26839 = count__26830_26834;
var G__26840 = (i__26831_26835 + (1));
seq__26828_26832 = G__26837;
chunk__26829_26833 = G__26838;
count__26830_26834 = G__26839;
i__26831_26835 = G__26840;
continue;
} else {
var temp__4126__auto___26841 = cljs.core.seq(seq__26828_26832);
if(temp__4126__auto___26841){
var seq__26828_26842__$1 = temp__4126__auto___26841;
if(cljs.core.chunked_seq_QMARK_(seq__26828_26842__$1)){
var c__4522__auto___26843 = cljs.core.chunk_first(seq__26828_26842__$1);
var G__26844 = cljs.core.chunk_rest(seq__26828_26842__$1);
var G__26845 = c__4522__auto___26843;
var G__26846 = cljs.core.count(c__4522__auto___26843);
var G__26847 = (0);
seq__26828_26832 = G__26844;
chunk__26829_26833 = G__26845;
count__26830_26834 = G__26846;
i__26831_26835 = G__26847;
continue;
} else {
var x_26848 = cljs.core.first(seq__26828_26842__$1);
ret.push(x_26848);

var G__26849 = cljs.core.next(seq__26828_26842__$1);
var G__26850 = null;
var G__26851 = (0);
var G__26852 = (0);
seq__26828_26832 = G__26849;
chunk__26829_26833 = G__26850;
count__26830_26834 = G__26851;
i__26831_26835 = G__26852;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__26871 = cljs.core.name(type);
var G__26872 = cognitect.transit.opts_merge({"unpack": ((function (G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26876 = cljs.core.clone(handlers);
x26876.forEach = ((function (x26876,G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26877 = cljs.core.seq(coll);
var chunk__26878 = null;
var count__26879 = (0);
var i__26880 = (0);
while(true){
if((i__26880 < count__26879)){
var vec__26881 = chunk__26878.cljs$core$IIndexed$_nth$arity$2(null,i__26880);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26881,(1),null);
var G__26882_26887 = v;
var G__26883_26888 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26882_26887,G__26883_26888) : f.call(null,G__26882_26887,G__26883_26888));

var G__26889 = seq__26877;
var G__26890 = chunk__26878;
var G__26891 = count__26879;
var G__26892 = (i__26880 + (1));
seq__26877 = G__26889;
chunk__26878 = G__26890;
count__26879 = G__26891;
i__26880 = G__26892;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26877);
if(temp__4126__auto__){
var seq__26877__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26877__$1)){
var c__4522__auto__ = cljs.core.chunk_first(seq__26877__$1);
var G__26893 = cljs.core.chunk_rest(seq__26877__$1);
var G__26894 = c__4522__auto__;
var G__26895 = cljs.core.count(c__4522__auto__);
var G__26896 = (0);
seq__26877 = G__26893;
chunk__26878 = G__26894;
count__26879 = G__26895;
i__26880 = G__26896;
continue;
} else {
var vec__26884 = cljs.core.first(seq__26877__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26884,(1),null);
var G__26885_26897 = v;
var G__26886_26898 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26885_26897,G__26886_26898) : f.call(null,G__26885_26897,G__26886_26898));

var G__26899 = cljs.core.next(seq__26877__$1);
var G__26900 = null;
var G__26901 = (0);
var G__26902 = (0);
seq__26877 = G__26899;
chunk__26878 = G__26900;
count__26879 = G__26901;
i__26880 = G__26902;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26876,G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26876;
})(), "objectBuilder": ((function (G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__26873 = obj;
G__26873.push((function (){var G__26874 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__26874) : kfn.call(null,G__26874));
})(),(function (){var G__26875 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__26875) : vfn.call(null,G__26875));
})());

return G__26873;
});})(G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__26871,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$221)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__26871,G__26872) : com.cognitect.transit.writer.call(null,G__26871,G__26872));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t26917 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t26917 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta26918){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta26918 = meta26918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t26917.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__26920 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__26920) : self__.tag_fn.call(null,G__26920));
});

cognitect.transit.t26917.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__26921 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__26921) : self__.rep_fn.call(null,G__26921));
});

cognitect.transit.t26917.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__26922 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__26922) : self__.str_rep_fn.call(null,G__26922));
} else {
return null;
}
});

cognitect.transit.t26917.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t26917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26919){
var self__ = this;
var _26919__$1 = this;
return self__.meta26918;
});

cognitect.transit.t26917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26919,meta26918__$1){
var self__ = this;
var _26919__$1 = this;
return (new cognitect.transit.t26917(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta26918__$1));
});

cognitect.transit.t26917.cljs$lang$type = true;

cognitect.transit.t26917.cljs$lang$ctorStr = "cognitect.transit/t26917";

cognitect.transit.t26917.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write(writer__4323__auto__,"cognitect.transit/t26917");
});

cognitect.transit.__GT_t26917 = (function __GT_t26917(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26918){
return (new cognitect.transit.t26917(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26918));
});

}

return (new cognitect.transit.t26917(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,278,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,273,cljs.core.constant$keyword$12,"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/u6h/-gmn28r/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
var G__26925 = tag;
var G__26926 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__26925,G__26926) : com.cognitect.transit.types.taggedValue.call(null,G__26925,G__26926));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__26928 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__26928) : com.cognitect.transit.types.isTaggedValue.call(null,G__26928));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__26930 = s;
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(G__26930) : com.cognitect.transit.types.intValue.call(null,G__26930));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__26932 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__26932) : com.cognitect.transit.types.isInteger.call(null,G__26932));
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__26934 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__26934) : com.cognitect.transit.types.bigInteger.call(null,G__26934));
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__26936 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__26936) : com.cognitect.transit.types.isBigInteger.call(null,G__26936));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__26938 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__26938) : com.cognitect.transit.types.bigDecimalValue.call(null,G__26938));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__26940 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__26940) : com.cognitect.transit.types.isBigDecimal.call(null,G__26940));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__26942 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__26942) : com.cognitect.transit.types.uri.call(null,G__26942));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__26944 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__26944) : com.cognitect.transit.types.isURI.call(null,G__26944));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__26946 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__26946) : com.cognitect.transit.types.uuid.call(null,G__26946));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__26948 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__26948) : com.cognitect.transit.types.isUUID.call(null,G__26948));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__26950 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__26950) : com.cognitect.transit.types.binary.call(null,G__26950));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__26952 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__26952) : com.cognitect.transit.types.isBinary.call(null,G__26952));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__26954 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__26954) : com.cognitect.transit.types.quoted.call(null,G__26954));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__26956 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__26956) : com.cognitect.transit.types.isQuoted.call(null,G__26956));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__26958 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__26958) : com.cognitect.transit.types.link.call(null,G__26958));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__26960 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__26960) : com.cognitect.transit.types.isLink.call(null,G__26960));
});
