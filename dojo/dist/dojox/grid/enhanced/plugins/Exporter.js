//>>built
define("dojox/grid/enhanced/plugins/Exporter","dojo/_base/declare dojo/_base/array dojo/_base/lang ../_Plugin ../../_RowSelector ../../EnhancedGrid ../../cells/_base".split(" "),function(m,g,c,n,p,q){var r=c.getObject("dojox.grid.cells"),e=m("dojox.grid.enhanced.plugins.Exporter",n,{name:"exporter",constructor:function(a,b){this.grid=a;this.formatter=b&&c.isObject(b)&&b.exportFormatter;this._mixinGrid()},_mixinGrid:function(){var a=this.grid;a.exportTo=c.hitch(this,this.exportTo);a.exportGrid=c.hitch(this,
this.exportGrid);a.exportSelected=c.hitch(this,this.exportSelected);a.setExportFormatter=c.hitch(this,this.setExportFormatter)},setExportFormatter:function(a){this.formatter=a},exportGrid:function(a,b,d){c.isFunction(b)&&(d=b,b={});if(c.isString(a)&&c.isFunction(d)){b=b||{};var f=this.grid,s=this,k=this._getExportWriter(a,b.writerArgs);b=b.fetchArgs&&c.isObject(b.fetchArgs)?b.fetchArgs:{};var e=b.onComplete;if(f.store)b.onComplete=function(a,b){e&&e(a,b);d(s._goThroughGridData(a,k))},b.sort=b.sort||
f.getSortProps(),f._storeLayerFetch(b);else{a=b.start||0;b=b.count||-1;for(var l=[],h=a;h!=a+b&&h<f.rowCount;++h)l.push(f.getItem(h));d(this._goThroughGridData(l,k))}}},exportSelected:function(a,b,d){if(!c.isString(a))return"";a=this._getExportWriter(a,b);return d(this._goThroughGridData(this.grid.selection.getSelected(),a))},_buildRow:function(a,b){var d=this;g.forEach(a._views,function(f,c){a.view=f;a.viewIdx=c;b.beforeView(a)&&(g.forEach(f.structure.cells,function(c,f){a.subrow=c;a.subrowIdx=f;
b.beforeSubrow(a)&&(g.forEach(c,function(c,f){a.isHeader&&d._isSpecialCol(c)&&a.spCols.push(c.index);a.cell=c;a.cellIdx=f;b.handleCell(a)}),b.afterSubrow(a))}),b.afterView(a))})},_goThroughGridData:function(a,b){var d=this.grid,c=g.filter(d.views.views,function(a){return!(a instanceof p)}),e={grid:d,isHeader:!0,spCols:[],_views:c,colOffset:c.length<d.views.views.length?-1:0};b.beforeHeader(d)&&(this._buildRow(e,b),b.afterHeader());e.isHeader=!1;b.beforeContent(a)&&(g.forEach(a,function(a,c){e.row=
a;e.rowIdx=c;b.beforeContentRow(e)&&(this._buildRow(e,b),b.afterContentRow(e))},this),b.afterContent());return b.toString()},_isSpecialCol:function(a){return a.isRowSelector||a instanceof r.RowIndex},_getExportWriter:function(a,b){var d,f;d=e;if(d.writerNames){d=d.writerNames[a.toLowerCase()];if(f=c.getObject(d))return d=new f(b),d.formatter=this.formatter,d;throw Error('Please make sure class "'+d+'" is required.');}throw Error('The writer for "'+a+'" has not been registered.');}});e.registerWriter=
function(a,b){e.writerNames=e.writerNames||{};e.writerNames[a]=b};q.registerPlugin(e);return e});
//@ sourceMappingURL=Exporter.js.map