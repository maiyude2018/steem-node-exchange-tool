var popup=webpackJsonp_name_([1],{0:function(t,e){},Cn0e:function(t,e,n){"use strict";function o(t){n("p3n5")}var i=n("Ghiz"),r=n("I2fo"),a=n("XyMi"),s=o,l=Object(a.a)(i.a,r.a,r.b,!1,s,null,null);e.a=l.exports},Ghiz:function(t,e,n){"use strict";var o=n("mvHQ"),i=n.n(o),r=n("Gu7T"),a=n.n(r),s=n("M4fF"),l=n.n(s);e.a={data:function(){return{testSpeedButtonDisabled:!1,nodelist:[],currentNode:null,manifest:chrome.runtime.getManifest()}},watch:{nodelist:{handler:function(t){chrome.storage.local.set({nodelist:t}),-1===l.a.findIndex(this.nodelist,function(t){return"..."===t.speed})&&(this.testSpeedButtonDisabled=!1)},deep:!0}},computed:{},created:function(){console.log("New tab"),this.getNodeList()},mounted:function(){},methods:{getTemplateRow:function(t,e){this.currentNode=e.node},getNodeList:function(){var t=this;chrome.storage.local.get({nodelist:[{node:"rpc.steemviz.com"},{node:"steemd.minnowsupportproject.org"},{node:"anyx.io"}],currentNode:"rpc.steemviz.com"},function(e){t.nodelist=l.a.each(e.nodelist,function(t){return t.speed&&"..."!==t.speed||(t.speed=""),t}),t.currentNode=e.currentNode,t.setCurrentLocalNode(e.currentNode)})},setCurrentLocalNode:function(t){var e=void 0;e=localStorage.OLD_STEEM_CURRENT_NODE?JSON.parse(localStorage.OLD_STEEM_CURRENT_NODE):[],-1===l.a.findIndex(e,function(e){return e===t})&&(e=[].concat(a()(e),[t])),localStorage.OLD_STEEM_CURRENT_NODE=i()(e),localStorage.STEEM_CURRENT_NODE=t},handleCurrentChange:function(t){this.currentNode=t.node,chrome.storage.local.set({currentNode:t.node}),this.setCurrentLocalNode(t.node)},visitAuthor:function(){chrome.tabs.create({url:"https://busy.org/@liuzhixiang"})},visitGithub:function(){chrome.tabs.create({url:"https://github.com/lzx215/steem-node-exchange-tool"})},testSpeed:function(){var t=this,e=function(){return((new Date).getTime()/1e3).toFixed(1)};this.testSpeedButtonDisabled=!0,l.a.each(this.nodelist,function(n,o){t.nodelist[o].speed="...";var r="https://"+n.node,a=e();t.$http.post(r,i()({id:1,jsonrpc:"2.0",method:"condenser_api.get_account_count",params:[]})).then(function(n){var i=(e()-a).toFixed(1);t.nodelist[o].speed=i,i>100&&(t.nodelist[o].speed="> 100")},function(e){t.nodelist[o].speed="Error!"}).finally(function(){"..."===t.nodelist[o].speed&&(t.nodelist[o].speed="")})})}}}},I2fo:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-tabs",{attrs:{type:"border-card",stretch:!0}},[n("el-tab-pane",{attrs:{label:"节点管理"}},[n("el-alert",{attrs:{title:"切换后，部分应用第一次访问会有问题，刷新即可",type:"success",closable:!1}}),t._v(" "),n("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.nodelist,"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[n("el-table-column",{attrs:{label:"",width:"28","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-radio",{attrs:{label:e.row.node},nativeOn:{change:function(n){return t.getTemplateRow(e.$index,e.row)}},model:{value:t.currentNode,callback:function(e){t.currentNode=e},expression:"currentNode"}},[t._v(" ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{property:"node",label:"节点","min-width":"220"}}),t._v(" "),n("el-table-column",{attrs:{property:"speed",label:"速度",width:"80"}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{type:"primary",disabled:t.testSpeedButtonDisabled},on:{click:function(e){return t.testSpeed()}}},[t._v("节点测速")])],1)],1),t._v(" "),n("el-tab-pane",{staticClass:"notice-info",attrs:{label:"使用说明"}},[n("el-alert",{attrs:{title:"未经测试的结论：",type:"warning",description:"理论上支持所有使用官方节点的Dapp。","show-icon":"",closable:!1}}),n("br"),t._v(" "),n("el-alert",{attrs:{title:"第一版锁定了3个节点，没有其他多余功能。",type:"info",closable:!1}},[n("br"),n("br"),t._v(" "),n("div",{staticClass:"text item"},[t._v("\n            如有好的建议，请去我的busy留言。"),n("a",{on:{click:t.visitAuthor}},[t._v("点此前往>>")])])]),n("br"),t._v(" "),n("el-alert",{attrs:{title:"下一版功能征集中，目前仅有如下功能在计划中:",type:"info",closable:!1}},[n("br"),n("br"),t._v(" "),n("div",{staticClass:"text item"},[t._v("\n            1> 更新节点列表。（自动获取和手动修改）\n            ")]),t._v(" "),n("div",{staticClass:"text item"},[t._v("\n            2> 更好的测速功能。\n            ")])]),n("br")],1),t._v(" "),n("el-tab-pane",{style:{textAlign:"center"},attrs:{label:"关于插件"}},[n("img",{staticClass:"head_pic",attrs:{src:"https://steemitimages.com/u/liuzhixiang/avatar",width:"96",height:"96"}}),t._v(" "),n("div",{staticClass:"author-info"},[n("el-button",{attrs:{type:"primary"},on:{click:t.visitAuthor}},[t._v("作者：@liuzhixiang")]),n("br"),n("br"),t._v(" "),n("el-button",{attrs:{type:"info",icon:"el-icon-news"},on:{click:t.visitGithub}},[t._v(" 插件Github源码")]),n("br"),n("br"),t._v(" "),n("h3",[t._v("当前版本:"+t._s(t.manifest.version))]),t._v(" "),n("div",{staticClass:"tip"},[n("p",[t._v("Steem Node Exchange Tool是一个简单的Steem全节点切换工具。")])])],1)])],1)],1)},i=[]},dS1e:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\nhtml { \n    font-size: 14px !important;\n    color: #606266 !important;\n    width: 400px; padding: 0;\n    font-weight: 400;\n}\nbody { \n    margin: -4px 0;\n}\n.item {\n    margin-bottom: 18px;\n    font-size: 14px;\n}\n.tip {\n    padding: 8px 16px;\n    background-color: #eee;\n    border-radius: 4px;\n    border-left: #ccc 5px solid;\n    margin: 20px 0;\n    font-size: 14px;\n    color: #5e6d82;\n    line-height: 1.5em;\n    text-align: left;\n}\n.el-tabs { \n    border-bottom: 0;\n}\n.el-tabs__content { \n    height: 400px;\n}\n.notice-info .el-alert__content {\n    padding: 15px 8px;\n}\n.head_pic { \n    border: 1px solid #eee; padding: 2px; border-radius: 100%; margin: 16px 0 8px; box-shadow:3px 3px 1px #ccc;\n}\n",""])},mUJK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("Cn0e"),r=n("zL8q"),a=n.n(r),s=n("tvR6"),l=(n.n(s),n("8+8L"));o.default.config.productionTip=!1,o.default.use(a.a),o.default.use(l.a),new o.default({el:"#root",render:function(t){return t(i.a)}})},p3n5:function(t,e,n){var o=n("dS1e");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("rjj0").default;i("69a846a7",o,!0,{})},tvR6:function(t,e){}},["mUJK"]);