!function(){"use strict";var t=function(t){t.addCommand("mcePrint",function(){t.getWin().print()})},n=function(t){t.addButton("print",{title:"Print",cmd:"mcePrint"}),t.addMenuItem("print",{text:"Print",cmd:"mcePrint",icon:"print"})};tinymce.util.Tools.resolve("tinymce.PluginManager").add("print",function(i){t(i),n(i),i.addShortcut("Meta+P","","mcePrint")})}();
