//>>built
define("dojox/charting/plot2d/commonStacked",["dojo/_base/lang","./common"],function(h,l){var k=h.getObject("dojox.charting.plot2d.commonStacked",!0);return h.mixin(k,{collectStats:function(g){for(var e=h.delegate(l.defaultStats),f=0;f<g.length;++f)for(var b=g[f],a=0;a<b.data.length;a++){var d,c;null!==b.data[a]&&("number"==typeof b.data[a]||!b.data[a].hasOwnProperty("x")?(c=k.getIndexValue(g,f,a)[0],d=a+1):(d=b.data[a].x,null!==d&&(c=k.getValue(g,f,d)[0],c=null!=c&&c.y?c.y:null)),e.hmin=Math.min(e.hmin,
d),e.hmax=Math.max(e.hmax,d),e.vmin=Math.min(e.vmin,c),e.vmax=Math.max(e.vmax,c))}return e},getIndexValue:function(g,e,f){var b=0,a,d,c;for(d=0;d<=e;++d)c=b,a=g[d].data[f],null!=a&&(isNaN(a)&&(a=a.y||0),b+=a);return[b,c]},getValue:function(g,e,f){var b=null,a,d,c,h;for(a=0;a<=e;++a)for(d=0;d<g[a].data.length;d++)if(h=b,c=g[a].data[d],null!==c)if(c.x==f){b||(b={x:f});null!=c.y&&(null==b.y&&(b.y=0),b.y+=c.y);break}else if(c.x>f)break;return[b,h]}})});
//@ sourceMappingURL=commonStacked.js.map