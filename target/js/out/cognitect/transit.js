// Compiled by ClojureScript 0.0-2760 {}
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
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
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
return cljs.core._equiv.call(null,other,this$__$1);
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
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__20936_20940 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20937_20941 = null;
var count__20938_20942 = (0);
var i__20939_20943 = (0);
while(true){
if((i__20939_20943 < count__20938_20942)){
var k_20944 = cljs.core._nth.call(null,chunk__20937_20941,i__20939_20943);
var v_20945 = (b[k_20944]);
(a[k_20944] = v_20945);

var G__20946 = seq__20936_20940;
var G__20947 = chunk__20937_20941;
var G__20948 = count__20938_20942;
var G__20949 = (i__20939_20943 + (1));
seq__20936_20940 = G__20946;
chunk__20937_20941 = G__20947;
count__20938_20942 = G__20948;
i__20939_20943 = G__20949;
continue;
} else {
var temp__4126__auto___20950 = cljs.core.seq.call(null,seq__20936_20940);
if(temp__4126__auto___20950){
var seq__20936_20951__$1 = temp__4126__auto___20950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20936_20951__$1)){
var c__4522__auto___20952 = cljs.core.chunk_first.call(null,seq__20936_20951__$1);
var G__20953 = cljs.core.chunk_rest.call(null,seq__20936_20951__$1);
var G__20954 = c__4522__auto___20952;
var G__20955 = cljs.core.count.call(null,c__4522__auto___20952);
var G__20956 = (0);
seq__20936_20940 = G__20953;
chunk__20937_20941 = G__20954;
count__20938_20942 = G__20955;
i__20939_20943 = G__20956;
continue;
} else {
var k_20957 = cljs.core.first.call(null,seq__20936_20951__$1);
var v_20958 = (b[k_20957]);
(a[k_20957] = v_20958);

var G__20959 = cljs.core.next.call(null,seq__20936_20951__$1);
var G__20960 = null;
var G__20961 = (0);
var G__20962 = (0);
seq__20936_20940 = G__20959;
chunk__20937_20941 = G__20960;
count__20938_20942 = G__20961;
i__20939_20943 = G__20962;
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
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/MapBuilder");
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
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/VectorBuilder");
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
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20963 = (i + (2));
var G__20964 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20963;
ret = G__20964;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/KeywordHandler");
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
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/SymbolHandler");
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
var seq__20965_20969 = cljs.core.seq.call(null,v);
var chunk__20966_20970 = null;
var count__20967_20971 = (0);
var i__20968_20972 = (0);
while(true){
if((i__20968_20972 < count__20967_20971)){
var x_20973 = cljs.core._nth.call(null,chunk__20966_20970,i__20968_20972);
ret.push(x_20973);

var G__20974 = seq__20965_20969;
var G__20975 = chunk__20966_20970;
var G__20976 = count__20967_20971;
var G__20977 = (i__20968_20972 + (1));
seq__20965_20969 = G__20974;
chunk__20966_20970 = G__20975;
count__20967_20971 = G__20976;
i__20968_20972 = G__20977;
continue;
} else {
var temp__4126__auto___20978 = cljs.core.seq.call(null,seq__20965_20969);
if(temp__4126__auto___20978){
var seq__20965_20979__$1 = temp__4126__auto___20978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20965_20979__$1)){
var c__4522__auto___20980 = cljs.core.chunk_first.call(null,seq__20965_20979__$1);
var G__20981 = cljs.core.chunk_rest.call(null,seq__20965_20979__$1);
var G__20982 = c__4522__auto___20980;
var G__20983 = cljs.core.count.call(null,c__4522__auto___20980);
var G__20984 = (0);
seq__20965_20969 = G__20981;
chunk__20966_20970 = G__20982;
count__20967_20971 = G__20983;
i__20968_20972 = G__20984;
continue;
} else {
var x_20985 = cljs.core.first.call(null,seq__20965_20979__$1);
ret.push(x_20985);

var G__20986 = cljs.core.next.call(null,seq__20965_20979__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20965_20969 = G__20986;
chunk__20966_20970 = G__20987;
count__20967_20971 = G__20988;
i__20968_20972 = G__20989;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/ListHandler");
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
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/MapHandler");
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
var seq__20990_20994 = cljs.core.seq.call(null,v);
var chunk__20991_20995 = null;
var count__20992_20996 = (0);
var i__20993_20997 = (0);
while(true){
if((i__20993_20997 < count__20992_20996)){
var x_20998 = cljs.core._nth.call(null,chunk__20991_20995,i__20993_20997);
ret.push(x_20998);

var G__20999 = seq__20990_20994;
var G__21000 = chunk__20991_20995;
var G__21001 = count__20992_20996;
var G__21002 = (i__20993_20997 + (1));
seq__20990_20994 = G__20999;
chunk__20991_20995 = G__21000;
count__20992_20996 = G__21001;
i__20993_20997 = G__21002;
continue;
} else {
var temp__4126__auto___21003 = cljs.core.seq.call(null,seq__20990_20994);
if(temp__4126__auto___21003){
var seq__20990_21004__$1 = temp__4126__auto___21003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20990_21004__$1)){
var c__4522__auto___21005 = cljs.core.chunk_first.call(null,seq__20990_21004__$1);
var G__21006 = cljs.core.chunk_rest.call(null,seq__20990_21004__$1);
var G__21007 = c__4522__auto___21005;
var G__21008 = cljs.core.count.call(null,c__4522__auto___21005);
var G__21009 = (0);
seq__20990_20994 = G__21006;
chunk__20991_20995 = G__21007;
count__20992_20996 = G__21008;
i__20993_20997 = G__21009;
continue;
} else {
var x_21010 = cljs.core.first.call(null,seq__20990_21004__$1);
ret.push(x_21010);

var G__21011 = cljs.core.next.call(null,seq__20990_21004__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20990_20994 = G__21011;
chunk__20991_20995 = G__21012;
count__20992_20996 = G__21013;
i__20993_20997 = G__21014;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/SetHandler");
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
var seq__21015_21019 = cljs.core.seq.call(null,v);
var chunk__21016_21020 = null;
var count__21017_21021 = (0);
var i__21018_21022 = (0);
while(true){
if((i__21018_21022 < count__21017_21021)){
var x_21023 = cljs.core._nth.call(null,chunk__21016_21020,i__21018_21022);
ret.push(x_21023);

var G__21024 = seq__21015_21019;
var G__21025 = chunk__21016_21020;
var G__21026 = count__21017_21021;
var G__21027 = (i__21018_21022 + (1));
seq__21015_21019 = G__21024;
chunk__21016_21020 = G__21025;
count__21017_21021 = G__21026;
i__21018_21022 = G__21027;
continue;
} else {
var temp__4126__auto___21028 = cljs.core.seq.call(null,seq__21015_21019);
if(temp__4126__auto___21028){
var seq__21015_21029__$1 = temp__4126__auto___21028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21015_21029__$1)){
var c__4522__auto___21030 = cljs.core.chunk_first.call(null,seq__21015_21029__$1);
var G__21031 = cljs.core.chunk_rest.call(null,seq__21015_21029__$1);
var G__21032 = c__4522__auto___21030;
var G__21033 = cljs.core.count.call(null,c__4522__auto___21030);
var G__21034 = (0);
seq__21015_21019 = G__21031;
chunk__21016_21020 = G__21032;
count__21017_21021 = G__21033;
i__21018_21022 = G__21034;
continue;
} else {
var x_21035 = cljs.core.first.call(null,seq__21015_21029__$1);
ret.push(x_21035);

var G__21036 = cljs.core.next.call(null,seq__21015_21029__$1);
var G__21037 = null;
var G__21038 = (0);
var G__21039 = (0);
seq__21015_21019 = G__21036;
chunk__21016_21020 = G__21037;
count__21017_21021 = G__21038;
i__21018_21022 = G__21039;
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
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/VectorHandler");
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
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/UUIDHandler");
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
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21049 = cljs.core.clone.call(null,handlers);
x21049.forEach = ((function (x21049,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21050 = cljs.core.seq.call(null,coll);
var chunk__21051 = null;
var count__21052 = (0);
var i__21053 = (0);
while(true){
if((i__21053 < count__21052)){
var vec__21054 = cljs.core._nth.call(null,chunk__21051,i__21053);
var k = cljs.core.nth.call(null,vec__21054,(0),null);
var v = cljs.core.nth.call(null,vec__21054,(1),null);
f.call(null,v,k);

var G__21056 = seq__21050;
var G__21057 = chunk__21051;
var G__21058 = count__21052;
var G__21059 = (i__21053 + (1));
seq__21050 = G__21056;
chunk__21051 = G__21057;
count__21052 = G__21058;
i__21053 = G__21059;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21050);
if(temp__4126__auto__){
var seq__21050__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21050__$1)){
var c__4522__auto__ = cljs.core.chunk_first.call(null,seq__21050__$1);
var G__21060 = cljs.core.chunk_rest.call(null,seq__21050__$1);
var G__21061 = c__4522__auto__;
var G__21062 = cljs.core.count.call(null,c__4522__auto__);
var G__21063 = (0);
seq__21050 = G__21060;
chunk__21051 = G__21061;
count__21052 = G__21062;
i__21053 = G__21063;
continue;
} else {
var vec__21055 = cljs.core.first.call(null,seq__21050__$1);
var k = cljs.core.nth.call(null,vec__21055,(0),null);
var v = cljs.core.nth.call(null,vec__21055,(1),null);
f.call(null,v,k);

var G__21064 = cljs.core.next.call(null,seq__21050__$1);
var G__21065 = null;
var G__21066 = (0);
var G__21067 = (0);
seq__21050 = G__21064;
chunk__21051 = G__21065;
count__21052 = G__21066;
i__21053 = G__21067;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21049,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21049;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21048 = obj;
G__21048.push(kfn.call(null,k),vfn.call(null,v));

return G__21048;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t21071 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t21071 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21072){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21072 = meta21072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21071.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t21071.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t21071.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t21071.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t21071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21073){
var self__ = this;
var _21073__$1 = this;
return self__.meta21072;
});

cognitect.transit.t21071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21073,meta21072__$1){
var self__ = this;
var _21073__$1 = this;
return (new cognitect.transit.t21071(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21072__$1));
});

cognitect.transit.t21071.cljs$lang$type = true;

cognitect.transit.t21071.cljs$lang$ctorStr = "cognitect.transit/t21071";

cognitect.transit.t21071.cljs$lang$ctorPrWriter = (function (this__4322__auto__,writer__4323__auto__,opt__4324__auto__){
return cljs.core._write.call(null,writer__4323__auto__,"cognitect.transit/t21071");
});

cognitect.transit.__GT_t21071 = (function __GT_t21071(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21072){
return (new cognitect.transit.t21071(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21072));
});

}

return (new cognitect.transit.t21071(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),278,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),273,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/.boot/cache/tmp/Users/monte/Developer/try/nobel-laureate-timeline/13ub/-u0s7le/out/cognitect/transit.cljs"], null)));
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
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map