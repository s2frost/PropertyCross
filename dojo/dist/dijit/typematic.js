//>>built
define("dijit/typematic","dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/on dojo/sniff ./main".split(" "),function(q,r,e,m,s,t){var c=t.typematic={_fireEventAndReload:function(){this._timer=null;this._callback(++this._count,this._node,this._evt);this._currentTimeout=Math.max(0>this._currentTimeout?this._initialDelay:1<this._subsequentDelay?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay);this._timer=setTimeout(e.hitch(this,"_fireEventAndReload"),
this._currentTimeout)},trigger:function(b,a,c,n,f,g,h,d){if(f!=this._obj){this.stop();this._initialDelay=h||500;this._subsequentDelay=g||0.9;this._minDelay=d||10;this._obj=f;this._node=c;this._count=this._currentTimeout=-1;this._callback=e.hitch(a,n);this._evt={faux:!0};for(var k in b)"layerX"!=k&&"layerY"!=k&&(a=b[k],"function"!=typeof a&&"undefined"!=typeof a&&(this._evt[k]=a));this._fireEventAndReload()}},stop:function(){this._timer&&(clearTimeout(this._timer),this._timer=null);this._obj&&(this._callback(-1,
this._node,this._evt),this._obj=null)},addKeyListener:function(b,a,p,n,f,g,h){var d="keyCode"in a?"keyCode":"charCode"in a?"charCode":"charOrCode",k=[m(b,"keyCode"in a?"keydown":"charCode"in a?"keypress":r._keypress,e.hitch(this,function(l){l[d]==a[d]&&(void 0===a.ctrlKey||a.ctrlKey==l.ctrlKey)&&(void 0===a.altKey||a.altKey==l.altKey)&&(void 0===a.metaKey||a.metaKey==(l.metaKey||!1))&&(void 0===a.shiftKey||a.shiftKey==l.shiftKey)?(l.stopPropagation(),l.preventDefault(),c.trigger(l,p,b,n,a,f,g,h)):
c._obj==a&&c.stop()})),m(b,"keyup",e.hitch(this,function(){c._obj==a&&c.stop()}))];return{remove:function(){q.forEach(k,function(a){a.remove()})}}},addMouseListener:function(b,a,p,n,f,g){var h=[m(b,"mousedown",e.hitch(this,function(d){d.preventDefault();c.trigger(d,a,b,p,b,n,f,g)})),m(b,"mouseup",e.hitch(this,function(a){this._obj&&a.preventDefault();c.stop()})),m(b,"mouseout",e.hitch(this,function(a){this._obj&&a.preventDefault();c.stop()})),m(b,"dblclick",e.hitch(this,function(d){d.preventDefault();
9>s("ie")&&(c.trigger(d,a,b,p,b,n,f,g),setTimeout(e.hitch(this,c.stop),50))}))];return{remove:function(){q.forEach(h,function(a){a.remove()})}}},addListener:function(b,a,c,e,f,g,h,d){var k=[this.addKeyListener(a,c,e,f,g,h,d),this.addMouseListener(b,e,f,g,h,d)];return{remove:function(){q.forEach(k,function(a){a.remove()})}}}};return c});
//@ sourceMappingURL=typematic.js.map