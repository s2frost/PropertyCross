//>>built
require({cache:{"url:dojox/calendar/templates/MobileCalendar.html":'\x3cdiv\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"viewContainer" class\x3d"viewContainer"\x3e\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"buttonContainer" class\x3d"buttonContainer"\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"previousButton" data-dojo-type\x3d"dojox.mobile.Button" \x3e\u25c4\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"todayButton" data-dojo-type\x3d"dojox.mobile.Button" \x3eToday\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"dayButton" data-dojo-type\x3d"dojox.mobile.Button" \x3eDay\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"weekButton" data-dojo-type\x3d"dojox.mobile.Button" \x3eWeek\x3c/button\x3e\t\t\t\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"monthButton" data-dojo-type\x3d"dojox.mobile.Button" \x3eMonth\x3c/button\x3e\n\t\t\x3cbutton data-dojo-attach-point\x3d"nextButton" data-dojo-type\x3d"dojox.mobile.Button" \x3e\u25ba\x3c/button\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/calendar/MobileCalendar","dojo/_base/declare dojo/_base/lang ./CalendarBase ./ColumnView ./ColumnViewSecondarySheet ./MobileVerticalRenderer ./MatrixView ./MobileHorizontalRenderer ./LabelRenderer ./ExpandRenderer ./Touch dojo/text!./templates/MobileCalendar.html dojox/mobile/Button".split(" "),function(b,c,h,k,l,m,n,e,p,f,d,q){return b("dojox.calendar.MobileCalendar",h,{templateString:q,_createDefaultViews:function(){var a=b([l,d]),a=b([k,d])(c.mixin({secondarySheetClass:a,verticalRenderer:m,
horizontalRenderer:e,expandRenderer:f},this.columnViewProps)),g=b([n,d])(c.mixin({horizontalRenderer:e,labelRenderer:p,expandRenderer:f},this.matrixViewProps));this.columnView=a;this.matrixView=g;a=[a,g];this.installDefaultViewsActions(a);return a},installDefaultViewsActions:function(a){this.matrixView.on("rowHeaderClick",c.hitch(this,this.matrixViewRowHeaderClick));this.columnView.on("columnHeaderClick",c.hitch(this,this.columnViewColumnHeaderClick))}})});
//@ sourceMappingURL=MobileCalendar.js.map