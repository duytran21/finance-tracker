!function(){"use strict";var t=function(t){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)},e=function(t){var e=t.selection.getNode();return"A"===e.tagName&&""===t.dom.getAttrib(e,"href")?e.id||e.name:""},n=function(t,e){var n=t.selection.getNode();"A"===n.tagName&&""===t.dom.getAttrib(n,"href")?(n.removeAttribute("name"),n.id=e):(t.focus(),t.selection.collapse(!0),t.execCommand("mceInsertContent",!1,t.dom.createHTML("a",{id:e})))},o=function(o){var r=e(o);o.windowManager.open({title:"Anchor",body:{type:"textbox",name:"id",size:40,label:"Id",value:r},onsubmit:function(e){var r,a,i=e.data.id;r=o,(t(a=i)?(n(r,a),0):(r.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),1))&&e.preventDefault()}})},r=function(t){t.addCommand("mceAnchor",function(){o(t)})},a=function(t){return function(e){for(var n=0;n<e.length;n++)(o=e[n]).attr("href")||!o.attr("id")&&!o.attr("name")||o.firstChild||e[n].attr("contenteditable",t);var o}},i=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("a",a("false")),t.serializer.addNodeFilter("a",a(null))})},c=function(t){t.addButton("anchor",{icon:"anchor",tooltip:"Anchor",cmd:"mceAnchor",stateSelector:"a:not([href])"}),t.addMenuItem("anchor",{icon:"anchor",text:"Anchor",context:"insert",cmd:"mceAnchor"})};tinymce.util.Tools.resolve("tinymce.PluginManager").add("anchor",function(t){i(t),r(t),c(t)})}();
