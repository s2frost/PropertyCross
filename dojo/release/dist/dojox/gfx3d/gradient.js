//>>built
define("dojox/gfx3d/gradient",["dojo/_base/lang","./matrix","./vector"],function(d,h,k){d=d.getObject("dojox.gfx3d",!0);var l=function(e,b){return Math.sqrt(Math.pow(b.x-e.x,2)+Math.pow(b.y-e.y,2))};d.gradient=function(e,b,a,f,c,d,g){g=h.normalize(g);var m=h.multiplyPoint(g,f*Math.cos(c)+a.x,f*Math.sin(c)+a.y,a.z),n=h.multiplyPoint(g,f*Math.cos(d)+a.x,f*Math.sin(d)+a.y,a.z),p=h.multiplyPoint(g,a.x,a.y,a.z),u=(d-c)/32,v=l(m,n)/2,q=e[b.type],r=b.finish;b=b.color;var s=[{offset:0,color:q.call(e,k.substract(m,
p),r,b)}];for(c+=u;c<d;c+=u){var t=h.multiplyPoint(g,f*Math.cos(c)+a.x,f*Math.sin(c)+a.y,a.z),w=l(m,t),x=l(n,t);s.push({offset:w/(w+x),color:q.call(e,k.substract(t,p),r,b)})}s.push({offset:1,color:q.call(e,k.substract(n,p),r,b)});return{type:"linear",x1:0,y1:-v,x2:0,y2:v,colors:s}};return d.gradient});
//@ sourceMappingURL=gradient.js.map