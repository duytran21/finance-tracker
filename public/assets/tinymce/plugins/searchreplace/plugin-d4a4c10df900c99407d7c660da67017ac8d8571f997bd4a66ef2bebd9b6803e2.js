!function(){"use strict";var e=function(t){var n=t,r=function(){return n};return{get:r,set:function(e){n=e},clone:function(){return e(r())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.Tools");function r(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var a={findAndReplaceDOMText:function(e,t,n,a,i){var o,d,c,l,s,u,f=[],p=0;function g(e,t){if(t=t||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var n=e.index;if(t>0){var r=e[t];if(!r)throw new Error("Invalid capture group");n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}if(c=t.ownerDocument,l=i.getBlockElements(),s=i.getWhiteSpaceElements(),u=i.getShortEndedElements(),d=function h(e){var t;if(3===e.nodeType)return e.data;if(s[e.nodeName]&&!l[e.nodeName])return"";if(t="",r(e))return"\n";if((l[e.nodeName]||u[e.nodeName])&&(t+="\n"),e=e.firstChild)do{t+=h(e)}while(e=e.nextSibling);return t}(t)){if(e.global)for(;o=e.exec(d);)f.push(g(o,a));else o=d.match(e),f.push(g(o,a));return f.length&&(p=f.length,function(e,t,n){var a,i,o,d,c=[],f=0,p=e,g=t.shift(),h=0;e:for(;;){if((l[p.nodeName]||u[p.nodeName]||r(p))&&f++,3===p.nodeType&&(!i&&p.length+f>=g[1]?(i=p,d=g[1]-f):a&&c.push(p),!a&&p.length+f>g[0]&&(a=p,o=g[0]-f),f+=p.length),a&&i){if(p=n({startNode:a,startNodeIndex:o,endNode:i,endNodeIndex:d,innerNodes:c,match:g[2],matchIndex:h}),f-=i.length-d,a=null,i=null,c=[],h++,!(g=t.shift()))break}else if(s[p.nodeName]&&!l[p.nodeName]||!p.firstChild){if(p.nextSibling){p=p.nextSibling;continue}}else if(!r(p)){p=p.firstChild;continue}for(;;){if(p.nextSibling){p=p.nextSibling;break}if(p.parentNode===e)break e;p=p.parentNode}}}(t,f,function(e){var t;if("function"!=typeof e){var n=e.nodeType?e:c.createElement(e);t=function(e,t){var r=n.cloneNode(!1);return r.setAttribute("data-mce-index",t),e&&r.appendChild(c.createTextNode(e)),r}}else t=e;return function(e){var n,r,a,i=e.startNode,o=e.endNode,d=e.matchIndex;if(i===o){var l=i;a=l.parentNode,e.startNodeIndex>0&&(n=c.createTextNode(l.data.substring(0,e.startNodeIndex)),a.insertBefore(n,l));var s=t(e.match[0],d);return a.insertBefore(s,l),e.endNodeIndex<l.length&&(r=c.createTextNode(l.data.substring(e.endNodeIndex)),a.insertBefore(r,l)),l.parentNode.removeChild(l),s}n=c.createTextNode(i.data.substring(0,e.startNodeIndex)),r=c.createTextNode(o.data.substring(e.endNodeIndex));for(var u=t(i.data.substring(e.startNodeIndex),d),f=[],p=0,g=e.innerNodes.length;p<g;++p){var h=e.innerNodes[p],m=t(h.data,d);h.parentNode.replaceChild(m,h),f.push(m)}var v=t(o.data.substring(0,e.endNodeIndex),d);return(a=i.parentNode).insertBefore(n,i),a.insertBefore(u,i),a.removeChild(i),(a=o.parentNode).insertBefore(v,o),a.insertBefore(r,o),a.removeChild(o),v}}(n))),p}}},i=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},o=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},d=function(e,t){var r,a=[];if((r=n.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<r.length;o++){var d=i(r[o]);null!==d&&d.length&&d===t.toString()&&a.push(r[o])}return a},c=function(e,t,n){var r=t.get(),a=e.dom;(n=!1!==n)?r++:r--,a.removeClass(d(e,t.get()),"mce-match-marker-selected");var i=d(e,r);return i.length?(a.addClass(d(e,r),"mce-match-marker-selected"),e.selection.scrollIntoView(i[0]),r):-1},l=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},s=function(e,t){var n=c(e,t,!0);-1!==n&&t.set(n)},u=function(e,t){var n=c(e,t,!1);-1!==n&&t.set(n)},f=function(e){var t=i(e);return null!==t&&t.length>0},p=function(e,t,r){var a,d,c,l;for(d=n.toArray(e.getBody().getElementsByTagName("span")),a=0;a<d.length;a++){var s=i(d[a]);null!==s&&s.length&&(s===t.get().toString()&&(c||(c=d[a].firstChild),l=d[a].firstChild),o(d[a]))}if(c&&l){var u=e.dom.createRng();return u.setStart(c,0),u.setEnd(l,l.data.length),!1!==r&&e.selection.setRng(u),u}},g=function(e,t){return d(e,t.get()+1).length>0},h=function(e,t){return d(e,t.get()-1).length>0},m={done:p,find:function(e,t,n,r,i){n=(n=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"\\s"),n=i?"\\b"+n+"\\b":n;var o,d,l,s,u,f=(o=e,d=t,l=new RegExp(n,r?"g":"gi"),(u=o.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",s=o.getBody(),p(o,d,!1),a.findAndReplaceDOMText(l,s,u,!1,o.schema));return f&&(t.set(-1),t.set(c(e,t,!0))),f},next:s,prev:u,replace:function(e,t,r,a,d){var c,p,m,v,x,b,N=t.get();for(a=!1!==a,m=e.getBody(),p=n.grep(n.toArray(m.getElementsByTagName("span")),f),c=0;c<p.length;c++){var y=i(p[c]);if(v=x=parseInt(y,10),d||v===t.get()){for(r.length?(p[c].firstChild.nodeValue=r,o(p[c])):l(e.dom,p[c]);p[++c];){if((v=parseInt(i(p[c]),10))!==x){c--;break}l(e.dom,p[c])}a&&N--}else x>t.get()&&p[c].setAttribute("data-mce-index",x-1)}return t.set(N),a?(b=g(e,t),s(e,t)):(b=h(e,t),u(e,t)),!d&&b},hasNext:g,hasPrev:h},v=function(e,t){return{done:function(n){return m.done(e,t,n)},find:function(n,r,a){return m.find(e,t,n,r,a)},next:function(){return m.next(e,t)},prev:function(){return m.prev(e,t)},replace:function(n,r,a){return m.replace(e,t,n,r,a)}}},x=function(e,t){var r,a={};function i(){d.statusbar.find("#next").disabled(!1===m.hasNext(e,t)),d.statusbar.find("#prev").disabled(!1===m.hasPrev(e,t))}function o(){e.windowManager.alert("Could not find the specified string.",function(){d.find("#find")[0].focus()})}e.undoManager.add(),r=n.trim(e.selection.getContent({format:"text"}));var d=e.windowManager.open({layout:"flex",pack:"center",align:"center",onClose:function(){e.focus(),m.done(e,t),e.undoManager.add()},onSubmit:function(n){var r,c,l,s;return n.preventDefault(),c=d.find("#case").checked(),s=d.find("#words").checked(),(l=d.find("#find").value()).length?a.text===l&&a.caseState===c&&a.wholeWord===s?m.hasNext(e,t)?(m.next(e,t),void i()):void o():((r=m.find(e,t,l,c,s))||o(),d.statusbar.items().slice(1).disabled(0===r),i(),void(a={text:l,caseState:c,wholeWord:s})):(m.done(e,t,!1),void d.statusbar.items().slice(1).disabled(!0))},buttons:[{text:"Find",subtype:"primary",onclick:function(){d.submit()}},{text:"Replace",disabled:!0,onclick:function(){m.replace(e,t,d.find("#replace").value())||(d.statusbar.items().slice(1).disabled(!0),t.set(-1),a={})}},{text:"Replace all",disabled:!0,onclick:function(){m.replace(e,t,d.find("#replace").value(),!0,!0),d.statusbar.items().slice(1).disabled(!0),a={}}},{type:"spacer",flex:1},{text:"Prev",name:"prev",disabled:!0,onclick:function(){m.prev(e,t),i()}},{text:"Next",name:"next",disabled:!0,onclick:function(){m.next(e,t),i()}}],title:"Find and replace",items:{type:"form",padding:20,labelGap:30,spacing:10,items:[{type:"textbox",name:"find",size:40,label:"Find",value:r},{type:"textbox",name:"replace",size:40,label:"Replace with"},{type:"checkbox",name:"case",text:"Match case",label:" "},{type:"checkbox",name:"words",text:"Whole words",label:" "}]}})},b=function(e,t){e.addCommand("SearchReplace",function(){x(e,t)})},N=function(e,t){return function(){x(e,t)}},y=function(e,t){e.addMenuItem("searchreplace",{text:"Find and replace",shortcut:"Meta+F",onclick:N(e,t),separator:"before",context:"edit"}),e.addButton("searchreplace",{tooltip:"Find and replace",onclick:N(e,t)}),e.shortcuts.add("Meta+F","",N(e,t))};t.add("searchreplace",function(t){var n=e(-1);return b(t,n),y(t,n),v(t,n)})}();