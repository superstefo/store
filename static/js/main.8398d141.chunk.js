(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u}));var n=a(23),r=a(0),l=a.n(r),i=a(19),c=function(e){return l.a.createElement("div",{className:"text-left text-wrap"},l.a.createElement("label",null,e.title))},s=function(e){return l.a.createElement("div",null,l.a.createElement(i.b,{exact:!0,activeClassName:"active",to:e.to},l.a.createElement("button",{type:"button",className:"btn btn-primary"},e.label)))},o=function(e){var t=e.orderedItem,a=e.wholeOrder,n=e.onChangeFunc,r=e.initialValue;return l.a.createElement("div",{className:"text-center text-wrap"},l.a.createElement("input",{className:"form-control",onChange:function(e){return n(e,t,a)},value:r,type:"number",min:"0"}))},u=function(e){var t=e.stateFieldName,a=e.statefulObject,r=e.label,i=e.type,c=e.disabled,s=e.min,o=e.max,u=a.state[t]||"";return i||(i="text"),l.a.createElement("div",{className:"text-left"},l.a.createElement("label",{className:"mb-0"},r),l.a.createElement("div",{className:"text-center text-wrap mb-2"},l.a.createElement("input",{className:"form-control",onChange:function(e){return function(e,t){var r;a.setState(Object(n.a)({},t,null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value))}(e,t)},value:u,type:i,disabled:c,min:s,max:o})))}},11:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(4),i=a(0),c=a.n(i),s=a(41),o=a.n(s),u=a(9),m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).execute=function(t,a,n,r){var l={"Content-Type":"application/json;charset=utf-8"};return l[u.a.AUTH_HEADER_NAME]=e[u.a.AUTH_HEADER_NAME],r&&(n=JSON.stringify(n).replace("{","")),o()({method:t,url:a,data:{json:n},headers:l})},e.doPost=function(t,a,n){return e.execute("post",t,a,n)},e.doPut=function(t,a,n){return e.execute("put",t,a,n)},e.doGet=function(t){return e.execute("get",t,{},!1)},e.doDelete=function(t){return e.execute("delete",t,{},!1)},e.setSecret=function(t){e[u.a.AUTH_HEADER_NAME]=t},e.wakeServer=function(){e.doGet(u.a.URLS.WAKE_SERVER)},e}return a}(c.a.Component);t.a=new m},2:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(3),r=a(7),l=a(5),i=a(4),c=a(0),s=a.n(c),o=a(8),u=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var l=e.history,i=e.historyHolder;return l&&i?i.importHistory(l):console.error("Those objects should NOT be null "+l+i),r}return Object(r.a)(a,[{key:"render",value:function(){return null}}]),a}(s.a.Component),m=Object(o.f)(u),d=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).importHistory=function(t){t?e.history=t:console.error("One object CANNOT be null: "+t)},e.goTo=function(t,a){e.history?e.history.push({pathname:t,state:a}):console.error("The object should NOT be null: "+e.history)},e}return a}(s.a.Component);t.b=new d},40:function(e,t,a){"use strict";(function(e){var n=a(3),r=a(7),l=a(5),i=a(4),c=a(0),s=a.n(c),o=(a(18),a(9)),u=a(11),m=a(1),d=a(2),b=a(6),v=function(t){Object(l.a)(c,t);var a=Object(i.a)(c);function c(t){var r;return Object(n.a)(this,c),(r=a.call(this,t)).handleSubmit=function(){var t=e.from(r.state.name+":"+r.state.pass).toString("base64");u.a.doPost(o.a.URLS.AUTH,t,!1).then((function(e){u.a.setSecret(null===e||void 0===e?void 0:e.data),b.a.setIsAdmin(!0),d.b.goTo("/get-orders")})).catch((function(e){d.b.goTo("/error",e),u.a.setSecret(null)}))},r.state={},r}return Object(r.a)(c,[{key:"render",value:function(){return s.a.createElement("div",{className:"text-center text-wrap"},s.a.createElement("br",null),s.a.createElement("p",null),s.a.createElement("br",null),s.a.createElement("p",null),s.a.createElement("label",null,"\u0417\u0430 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440:"),s.a.createElement("br",null),s.a.createElement("div",{className:" btn-group "},s.a.createElement(m.c,{stateFieldName:"name",statefulObject:this,label:"Username"})),s.a.createElement("br",null),s.a.createElement("div",{className:" btn-group "},s.a.createElement(m.c,{stateFieldName:"pass",statefulObject:this,label:"Password",type:"password"})),s.a.createElement("br",null),s.a.createElement("p",null),s.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"\u0412\u0445\u043e\u0434"))}}]),c}(s.a.Component);t.a=v}).call(this,a(49).Buffer)},43:function(e,t,a){e.exports=a.p+"static/media/snacking.88595abc.gif"},44:function(e,t,a){e.exports=a(79)},6:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(4),i=a(0),c=a.n(i),s=a(9),o=a(11),u=a(2),m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getCurrentOrder=function(){return r.currentOrder},r.getOrdersForDate=function(e){return r.allOrders[e]},r.setOrdersForDate=function(e,t){r.allOrders[e]=t},r.getSelectedDateForOrders=function(){return r.selectedDateForOrders},r.setSelectedDateForOrders=function(e){r.selectedDateForOrders=e},r.clearCurrentOrder=function(){r.currentOrder={}},r.isPristine=function(){return r.isSitePristine},r.setPristine=function(e){r.isSitePristine=e},r.getPriceListObj=function(){var e=r.getPriceList(),t={};return e.forEach((function(e){t[e.id]=e})),t},r.getPriceList=function(){return r.priceList&&r.priceList.length>0||o.a.doGet(s.a.URLS.ITEMS).then((function(e){var t;r.setPriceList((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.items)||[])})).catch((function(e){u.b.goTo("/error",e)})),r.priceList},r.setPriceList=function(e){r.priceList=e},r.getIsAdmin=function(){return r.isAdmin},r.setIsAdmin=function(e){r.isAdmin=e},r.currentOrder={},r.isSitePristine=!0,r.allOrders={},r.selectedDateForOrders="",r.isAdmin=!1,r.priceList=[],o.a.wakeServer(),r}return a}(c.a.Component);t.a=new m},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),i=a.n(l),c=a(40),s=a(13),o=a(3),u=a(7),m=a(5),d=a(4),b=(a(18),a(16)),v=a.n(b),h=a(8),f=a(1),E=a(6),p="000000000000000000000";function O(e,t){var a=""+e;return a=function(e,t){var a=e.split("."),n=(a[1]||p)+p;return a[0]+n.substring(0,t)}(a,t).replace(".",""),parseInt(a)}function g(e,t){var a=p+e,n=a.substring(a.length-t),r=a.substring(0,a.length-n.length);return parseFloat(r+"."+n)}var j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).text=function(e){return r.a.createElement(f.d,{title:e})},n.state={beanId:e.beanId,allFr:[],currentOrder:E.a.getCurrentOrder()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=E.a.getCurrentOrder(),t=[];Object.keys(e).forEach((function(a){t.push(e[a])})),t=t.filter((function(e){return 0!==e.quantity})).map((function(e){return Object(s.a)(Object(s.a)({},e.orderedItem),{},{quantity:e.quantity})})),t=y(t);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.a,{className:"-striped -highlight",data:t,columns:[{columns:[{Header:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",accessor:"title"},{Header:"\u0418\u043d\u0444\u043e",accessor:"info",width:250},{Header:"\u0426\u0435\u043d\u0430, \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0430",accessor:"price",width:140},{Header:"\u041a-\u0432\u043e",accessor:"quantity",width:75},{Header:"\u041e\u0431\u0449\u043e",accessor:"total",width:100}]}],sortable:!1,defaultPageSize:t.length,pageSize:t.length,showPagination:!1}),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:" btn-group "},r.a.createElement(f.a,{to:"/items",label:"\u041d\u0430\u0437\u0430\u0434"}),r.a.createElement("div",{className:"ml-1"},r.a.createElement(f.a,{to:"/order-details",label:"\u041d\u0430\u043f\u0440\u0435\u0434"})))))}}]),a}(r.a.Component),N=Object(h.f)(j),y=function(e){var t=0;return(e=e.map((function(e){var a=e.quantity,n=a*O(e.price,2);t+=n;var l={title:r.a.createElement(f.d,{title:e.title}),quantity:r.a.createElement(f.d,{title:a}),info:r.a.createElement(f.d,{title:e.info}),price:r.a.createElement(f.d,{title:e.price+" \u043b\u0432"}),total:r.a.createElement(f.d,{title:g(n,2)+" \u043b\u0432"})};return Object(s.a)({},l)}))).push({title:r.a.createElement(f.d,{title:"\u041e\u0431\u0449\u043e \u0437\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0430"}),quantity:r.a.createElement(f.d,{title:""}),price:r.a.createElement(f.d,{title:""}),total:r.a.createElement(f.d,{title:g(t,2)+" \u043b\u0432"})}),e},w=a(11),S=a(9),x=a(2),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r,l;Object(o.a)(this,a),(l=t.call(this,e)).stateToObj=function(){var e=""+l.state.price;return e=parseFloat(e.replace(",",".")),{title:l.state.title,id:l.state.id,price:parseFloat(e),info:l.state.info}},l.getId=function(){var e=(new Date).getTime()+"i";return e=e.split("").reverse().join("").substring(0,6),E.a.getPriceList().findIndex((function(t){return t.id===e}))>-1?l.getId():e},l.change=function(){l.setState({isDisabled:!0});var e=E.a.getPriceListObj(),t=l.stateToObj();e[t.id]=t;var a=[];Object.keys(e).forEach((function(t){a.push(e[t])})),l.saveToBackend(a)},l.cancel=function(){x.b.goTo("/edit-items-list")},l.delete=function(e){if(window.confirm("\ud83d\udd25\ud83d\udd25\ud83d\udd25 \u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435 \u0437\u0430\u0432\u0438\u043d\u0430\u0433\u0438? \ud83d\udd25\ud83d\udd25\ud83d\udd25")){l.setState({isDisabled:!0});for(var t=E.a.getPriceList(),a=[],n=0,r=0;r<t.length;r++){var i=t[r];i.id!==e&&(a[n]=i,n++)}l.saveToBackend(a)}},l.saveToBackend=function(e){w.a.doPost(S.a.URLS.ITEMS,{items:e},!0).then((function(t){E.a.setPriceList(e),x.b.goTo("/edit-items-list")})).catch((function(e){x.b.goTo("/error",e),l.setState({isDisabled:!1})}))};var i=(null===e||void 0===e||null===(n=e.location)||void 0===n||null===(r=n.state)||void 0===r?void 0:r.item)||{};return l.state={title:i.title||"",id:i.id||l.getId(),price:i.price||"",info:i.info||"",isDisabled:!1},l}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{title:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0411\u0430\u0434\u0435\u043c, \u0411\u0435\u043b\u0435\u043d\u0438 \u0441\u0435\u043c\u043a\u0438 \u0438 \u0442\u043d."},r.a.createElement(f.c,{stateFieldName:"title",statefulObject:this,label:"\u0418\u043c\u0435 \u043d\u0430 \u0430\u0440\u0442\u0438\u043a\u0443\u043b "})),r.a.createElement("div",{title:"\u0426\u0435\u043d\u0430 \u0432 \u043b\u0435\u0432\u0430 \u0437\u0430 1 \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0430, \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442 \u0434\u043e \u0432\u0442\u043e\u0440\u0438\u044f \u0437\u043d\u0430\u043a. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 18.05."},r.a.createElement(f.c,{stateFieldName:"price",statefulObject:this,label:"\u0426\u0435\u043d\u0430",type:"number"})),r.a.createElement("div",{title:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0435\u0433\u043b\u043e \u0438\u043b\u0438 \u0433\u043e\u043b\u0435\u043c\u0438\u043d\u0430 \u043d\u0430 \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0438\u0442\u0435."},r.a.createElement(f.c,{stateFieldName:"info",statefulObject:this,label:"\u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.state.isDisabled,onClick:this.change},"\u0417\u0430\u043f\u0430\u0437\u0438"),r.a.createElement("button",{className:"btn btn-primary",onClick:this.cancel},"\u041e\u0442\u043a\u0430\u0436\u0438")),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center",title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!!! \u0418\u0437\u0442\u0440\u0438\u0432\u0430 \u0442\u043e\u0437\u0438 \u0430\u0440\u0442\u0438\u043a\u0443\u043b \u043e\u0442 \u0431\u0430\u0437\u0430\u0442\u0430!"},r.a.createElement("button",{className:"btn btn-danger",disabled:this.state.isDisabled,onClick:function(){var t;return e.delete(null===(t=e.state)||void 0===t?void 0:t.id)}},"\u0418\u0437\u0442\u0440\u0438\u0439")))}}]),a}(r.a.Component),C=Object(h.f)(k),T=function(e){var t=e.submitF,a=e.item;return r.a.createElement("div",{className:"text-center text-wrap"},r.a.createElement("div",{className:" btn-group "},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t(a)}},"\ud83d\udee0\ufe0f")))},D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeFunc=function(e,t,a){var r={quantity:parseInt(e.target.value),orderedItem:t};a[t.id]=r,n.setState({currentOrder:a})},n.orderWrapperProps=function(e){var t;return{orderedItem:e,wholeOrder:n.state.currentOrder,onChangeFunc:n.onChangeFunc,initialValue:(null===(t=n.state.currentOrder[e.id])||void 0===t?void 0:t.quantity)||""}},n.submit=function(e){x.b.goTo("/edit-item",{item:e})},n.goToFaqView=function(){x.b.goTo("/faq")},n.prepareViewData=function(e){return e.map((function(e){var t={title:r.a.createElement(f.d,{title:e.title}),info:r.a.createElement(f.d,{title:e.info}),price:r.a.createElement(f.d,{title:e.price+" \u043b\u0432"}),buttons:r.a.createElement(T,{item:e,submitF:n.submit})};return Object(s.a)({},t)}))},n.state={currentOrder:E.a.getCurrentOrder()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=E.a.getPriceList(),a=this.prepareViewData(t);return r.a.createElement("div",null,r.a.createElement("div",{className:"text-left"},r.a.createElement("div",{className:" btn-group "},r.a.createElement("button",{className:"btn btn-primary mr-1",title:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e",onClick:this.goToFaqView},"\u25c0\ufe0f"),r.a.createElement("button",{className:"btn btn-primary",title:"\u0414\u043e\u0431\u0430\u0432\u0438 \u043d\u043e\u0432 \u0430\u0440\u0442\u0438\u043a\u0443\u043b",onClick:function(){return e.submit()}},"\u2795"))),r.a.createElement("br",null),r.a.createElement(v.a,{className:"-striped -highlight",data:a,columns:[{columns:[{Header:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",accessor:"title"},{Header:"\u0418\u043d\u0444\u043e",accessor:"info"},{Header:"\u0426\u0435\u043d\u0430, \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0430",accessor:"price",width:140},{Header:"",accessor:"buttons",width:60}]}],sortable:!1,defaultPageSize:a.length,pageSize:a.length,showPagination:!1}),r.a.createElement("br",null))}}]),a}(r.a.Component),F=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r;Object(o.a)(this,a),(r=t.call(this,e)).ok=function(){x.b.goTo("/edit-items-list")};var l=(null===(n=e.location)||void 0===n?void 0:n.state)||{};return r.state={text:""+l},r}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("label",null,this.state.text),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement(f.a,{to:"/",label:"OK"})),r.a.createElement("br",null))}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).submit=function(){x.b.goTo("/auth")},e.getData=function(){return[{question:"\u043a\u0430\u043a\u0432\u0438 \u0441\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438\u0442\u0435 \u0412\u0438?",answer:"........"},{question:"\u041a\u0430\u043a \u0441\u0442\u0430\u0432\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0430\u0442\u0430...",answer:"\u0441\u0442\u0430\u0432\u0430..."},{question:"\u0418\u043c\u0430 \u043b\u0438 \u0446\u0435\u043d\u0430 \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",answer:"\u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u0430\u0434 ... \u043b\u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u044a\u0442 \u0435 \u0431\u0435\u0437\u043f\u043b\u0430\u0442\u0435\u043d"}]},e.prepareViewData=function(e){return e.map((function(e){var t={question:r.a.createElement(f.d,{title:e.question}),answer:r.a.createElement(f.d,{title:e.answer})};return Object(s.a)({},t)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.getData(),t=this.prepareViewData(e);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.a,{className:"-striped -highlight",data:t,columns:[{columns:[{Header:"\u0412\u044a\u043f\u0440\u043e\u0441\u0438",accessor:"question",width:250},{Header:"\u041e\u0442\u0433\u043e\u0432\u043e\u0440\u0438",accessor:"answer"}]}],sortable:!1,defaultPageSize:t.length,pageSize:t.length,showPagination:!1}),r.a.createElement("br",null)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.submit},"\ud83d\udee0\ufe0f"),r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("label",null,"ver: ",S.a.VERSION))}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getOrders=function(){var e,t,a=null===(e=n.state)||void 0===e?void 0:e.month,r=null===(t=n.state)||void 0===t?void 0:t.date;a&&r&&(a=a.startsWith("0")?a.replace("0",""):a,r=a+"/"+(r=r.startsWith("0")?r.replace("0",""):r),w.a.doGet(S.a.URLS.ORDERS+r).then((function(e){E.a.setSelectedDateForOrders(r),E.a.setOrdersForDate(r,null===e||void 0===e?void 0:e.data),x.b.goTo("/select-orders")})).catch((function(e){})))},n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("label",null,"\u041f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0438. \u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0430:"),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{className:"mr-3"},r.a.createElement(f.c,{stateFieldName:"date",statefulObject:this,min:1,max:31,type:"number",label:"\u0414\u0430\u0442\u0430"})),r.a.createElement(f.c,{stateFieldName:"month",statefulObject:this,min:1,max:12,type:"number",label:"\u041c\u0435\u0441\u0435\u0446"})),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.getOrders()}},"\u041e\u041a"))}}]),a}(r.a.Component),I=Object(h.f)(P),L=a(43),A=a.n(L),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getPriceList=function(){return n.setState({isHidden:!1,isButtonDisabled:!0}),w.a.doGet(S.a.URLS.ITEMS).then((function(e){var t;E.a.setPristine(!1),E.a.setPriceList((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.items)||[]),x.b.goTo("/items")})).catch((function(e){x.b.goTo("/error",e)})),n.priceList},n.state={isHidden:!0,isButtonDisabled:!1},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("img",{src:A.a,alt:"loading..."}),r.a.createElement("br",null),r.a.createElement("h5",null,"\u0417\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0430 \u043d\u0430 \u044f\u0434\u043a\u0438, \u043c\u043e\u043b\u044f, \u0440\u0430\u0437\u0433\u043b\u0435\u0434\u0430\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430!"),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("button",{disabled:this.state.isButtonDisabled,className:"btn btn-primary",onClick:this.getPriceList},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"),r.a.createElement("p",null),r.a.createElement("br",null),this.state.isHidden?null:r.a.createElement("div",{className:"spinner-border text-primary",role:"status"}))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submit=function(){x.b.goTo("/basket")},n.onChangeFunc=function(e,t,a){var r={quantity:parseInt(e.target.value),orderedItem:t};a[t.id]=r,n.setState({currentOrder:a})},n.orderWrapperProps=function(e){var t;return{orderedItem:e,wholeOrder:n.state.currentOrder,onChangeFunc:n.onChangeFunc,initialValue:(null===(t=n.state.currentOrder[null===e||void 0===e?void 0:e.id])||void 0===t?void 0:t.quantity)||""}},n.prepareViewData=function(e){return e.map((function(e){var t={title:r.a.createElement(f.d,{title:e.title}),info:r.a.createElement(f.d,{title:e.info}),price:r.a.createElement(f.d,{title:e.price+" \u043b\u0432."}),order:r.a.createElement(f.b,n.orderWrapperProps(e))};return Object(s.a)({},t)}))},n.state={currentOrder:E.a.getCurrentOrder()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=E.a.getPriceList(),t=this.prepareViewData(e);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.a,{className:"-striped -highlight",data:t,columns:[{columns:[{Header:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",accessor:"title"},{Header:"\u0418\u043d\u0444\u043e",accessor:"info",width:250},{Header:"\u0426\u0435\u043d\u0430, \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0430",accessor:"price",width:140},{Header:"\u041a-\u0432\u043e",accessor:"order",width:75}]}],sortable:!1,defaultPageSize:t.length,pageSize:t.length,showPagination:!1}),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.submit},"\u041d\u0430\u043f\u0440\u0435\u0434")))}}]),a}(r.a.Component),V=Object(h.f)(q),U=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r,l,i,c,s,u;Object(o.a)(this,a),(u=t.call(this,e)).makeStateObject=function(e){for(var t=E.a.getPriceListObj(),a=(null===e||void 0===e?void 0:e.order)||[],n=0;n<a.length;n++){var r=a[n],l=t[r.id]||{};r.title=l.title;var i="";l.price!==r.price&&(i="\u26a0\ufe0f \u0420\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0446\u0435\u043d\u0438: \u0446\u0435\u043d\u043e\u0432\u0430 \u043b\u0438\u0441\u0442\u0430: "+l.price+"; \u043f\u043e\u0440\u044a\u0447\u043a\u0430: "+r.price+"; "),r.info=i+l.info}return{address:e.address||" ",email:e.email||" ",more:e.more||" ",hour:new Date(parseInt(e.date+"000")).toLocaleString()||" ",name:e.name||" ",phone:e.phone||" ",orderedItems:a||[]}},u.setTheState=function(e){if(void 0!==e){var t=u.allOrders[e]||{},a=u.makeStateObject(t);u.setState(a)}},u.prev=function(){u.index<1||(u.index--,u.setTheState(u.index))},u.next=function(){u.index>=u.allOrders.length-1||(u.index++,u.setTheState(u.index))},u.goToView=function(){x.b.goTo("/select-orders")},u.allOrders=(null===e||void 0===e||null===(n=e.location)||void 0===n||null===(r=n.state)||void 0===r?void 0:r.allOrders)||[];var m=(null===e||void 0===e||null===(l=e.location)||void 0===l||null===(i=l.state)||void 0===i?void 0:i.order)||{};return u.index=(null===e||void 0===e||null===(c=e.location)||void 0===c||null===(s=c.state)||void 0===s?void 0:s.index)||0,u.state=u.makeStateObject(m),u}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.orderedItems;t=y(t);return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:" btn-group "},r.a.createElement("div",{className:"text-left"},r.a.createElement("button",{className:"btn btn-primary mr-4",onClick:this.goToView},"\u041e\u0431\u0440\u0430\u0442\u043d\u043e")),r.a.createElement("div",{className:"mr-1"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prev()}},"\u25c0\ufe0f")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.next()}},"\u25b6\ufe0f"))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"name",statefulObject:this,label:"\u0418\u043c\u0435",disabled:!0})),r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"phone",statefulObject:this,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",disabled:!0})),r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"email",statefulObject:this,label:"e-mail",disabled:!0})),r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"hour",statefulObject:this,label:"\u0427\u0430\u0441 \u043d\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0430",disabled:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"address",statefulObject:this,label:"\u0410\u0434\u0440\u0435\u0441",disabled:!0})),r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"more",statefulObject:this,label:"\u0414\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",disabled:!0})))),r.a.createElement("br",null),r.a.createElement(v.a,{className:"-striped -highlight",data:t,columns:[{columns:[{Header:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",accessor:"title"},{Header:"\u0418\u043d\u0444\u043e",accessor:"info",width:250},{Header:"\u0426\u0435\u043d\u0430, \u043e\u043f\u0430\u043a\u043e\u0432\u043a\u0430",accessor:"price",width:140},{Header:"\u041a-\u0432\u043e",accessor:"quantity",width:75},{Header:"\u041e\u0431\u0449\u043e",accessor:"total",width:100}]}],sortable:!1,defaultPageSize:t.length,pageSize:t.length,showPagination:!1}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-primary mr-1",title:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e",onClick:this.goToView},"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"))))}}]),a}(r.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=function(){var e=E.a.getSelectedDateForOrders(),t=E.a.getOrdersForDate(e)||{};return n.objToArr(t)},n.objToArr=function(e){for(var t=[],a=Object.keys(e),n=0;n<a.length;n++){var r=a[n],l=Object(s.a)({date:r},e[r]);t[n]=l}return t},n.submit=function(e,t,a){x.b.goTo("/review-order",{order:e,index:t,allOrders:a})},n.prepareViewData=function(e){var t=0;return e.map((function(a){var l,i,c=new Date(parseInt(a.date+"000")).toLocaleString();c=null===(l=c.split(", "))||void 0===l?void 0:l[1];var o=t++,u={name:r.a.createElement(f.d,{title:a.name}),phone:r.a.createElement(f.d,{title:a.phone}),address:r.a.createElement(f.d,{title:a.address}),count:r.a.createElement(f.d,{title:null===(i=a.order)||void 0===i?void 0:i.length}),buttons:r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n.submit(a,o,e)}},"\ud83d\udd0d"),hour:r.a.createElement(f.d,{title:c})};return Object(s.a)({},u)}))},n.state={orders:n.getData()},n}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this.prepareViewData(null===(e=this.state)||void 0===e?void 0:e.orders);return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(v.a,{className:"-striped -highlight",data:t,columns:[{columns:[{Header:"\u041a\u043b\u0438\u0435\u043d\u0442",accessor:"name"},{Header:"\u0410\u0434\u0440\u0435\u0441",accessor:"address"},{Header:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",accessor:"phone",width:140},{Header:"\u041f\u0430\u043a\u0435\u0442\u0438",accessor:"count",width:65},{Header:"\u0427\u0430\u0441",accessor:"hour",width:90},{Header:"",accessor:"buttons",width:60}]}],sortable:!1,defaultPageSize:t.length,pageSize:t.length}))}}]),a}(r.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=n.state;if(e.name&&e.email&&e.address&&e.phone){if(window.confirm("\u041c\u043e\u043b\u044f, \u043f\u043e\u0442\u0432\u044a\u0440\u0434\u0435\u0442\u0435 \u043f\u043e\u0440\u044a\u0447\u043a\u0430\u0442\u0430!")){var t=E.a.getCurrentOrder(),a=[];Object.keys(t).forEach((function(e){a.push(t[e])})),a=a.filter((function(e){return 0!==e.quantity})).map((function(e){return{quantity:e.quantity,price:e.orderedItem.price,id:e.orderedItem.id}}));var r={name:n.state.name,email:n.state.email,address:n.state.address,phone:n.state.phone,more:n.state.more,order:a};n.setState({isDisabled:!0}),w.a.doPost(S.a.URLS.ORDER,r,!0).then((function(e){x.b.goTo("/order-result",{result:"\u041f\u043e\u0440\u044a\u0447\u043a\u0430 \u043d\u043e\u043c\u0435\u0440: "+e.data+" \u0431\u0435\u0448\u0435 \u043f\u0440\u0438\u0435\u0442\u0430."})})).catch((function(e){n.setState({isDisabled:!1}),x.b.goTo("/error",e)}))}}else window.alert("\u0417\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0438 \u043f\u043e\u043b\u0435\u0442\u0430: \u0418\u043c\u0435, email, \u0430\u0434\u0440\u0435\u0441, \u0442\u0435\u043b\u0435\u0444\u043e\u043d!")},n.state={isDisabled:!1},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-left text-wrap"},r.a.createElement("label",null,"\u0414\u0435\u0442\u0430\u0439\u043b\u0438 \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430\u0442\u0430:"),r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-left text-wrap"},r.a.createElement(f.c,{stateFieldName:"name",statefulObject:this,label:"\u0418\u043ce"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"phone",statefulObject:this,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",type:"tel"})),r.a.createElement("div",{className:"col"},r.a.createElement(f.c,{stateFieldName:"email",statefulObject:this,label:"e-mail",type:"email"}))),r.a.createElement(f.c,{stateFieldName:"address",statefulObject:this,label:"A\u0434\u0440\u0435\u0441 \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),r.a.createElement(f.c,{stateFieldName:"more",statefulObject:this,label:"\u041e\u0449\u0435 \u043d\u0430\u0441\u043e\u043a\u0438"}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:" btn-group "},r.a.createElement(f.a,{to:"/basket",label:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary ml-1",disabled:this.state.isDisabled,onClick:this.handleSubmit},"\u041f\u043e\u0440\u044a\u0447\u0430\u0439!"))))))}}]),a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n,r,l;return Object(o.a)(this,a),(l=t.call(this,e)).submit=function(){E.a.clearCurrentOrder(),x.b.goTo("/items")},l.result=(null===e||void 0===e||null===(n=e.location)||void 0===n||null===(r=n.state)||void 0===r?void 0:r.result)||"Unknown result...",l}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement("h5",null," ",this.result),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:this.submit},"\u0414\u0440\u0443\u0433\u0430 \u043f\u043e\u0440\u044a\u0447\u043a\u0430?"))}}]),a}(r.a.Component),W=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=E.a.isPristine(),t=E.a.getIsAdmin();return r.a.createElement("nav",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"btn-group"},e?null:r.a.createElement(f.a,{to:"/items",label:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),e?null:r.a.createElement(f.a,{to:"/basket",label:"\u041a\u043e\u0448\u043d\u0438\u0446\u0430"}),e?null:r.a.createElement(f.a,{to:"/faq",label:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),t?r.a.createElement(f.a,{to:"/edit-items-list",label:"\u041f\u0440\u043e\u043c\u044f\u043d\u0430"}):null,t?r.a.createElement(f.a,{to:"/get-orders",label:"\u041f\u043e\u0440\u044a\u0447\u043a\u0438"}):null)),r.a.createElement("br",null))}}]),a}(r.a.Component),M=Object(h.f)(W),G=a(19),J=function(){return r.a.createElement("div",{className:"container",style:{paddingTop:10}},r.a.createElement(G.a,null,r.a.createElement(M,null),r.a.createElement(x.a,{historyHolder:x.b}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:R}),r.a.createElement(h.a,{exact:!0,path:"/basket",component:N}),r.a.createElement(h.a,{path:"/get-orders",component:I}),r.a.createElement(h.a,{path:"/select-orders",component:z}),r.a.createElement(h.a,{path:"/review-order",component:U}),r.a.createElement(h.a,{path:"/items",component:V}),r.a.createElement(h.a,{path:"/faq",component:H}),r.a.createElement(h.a,{path:"/order-details",component:_}),r.a.createElement(h.a,{path:"/order-result",component:B}),r.a.createElement(h.a,{path:"/auth",component:c.a}),r.a.createElement(h.a,{path:"/edit-items-list",component:D}),r.a.createElement(h.a,{path:"/edit-item",component:C}),r.a.createElement(h.a,{path:"/error",component:F}),r.a.createElement(h.a,{path:"*",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){"use strict";var n="https://nut-store.herokuapp.com/",r={URLS:{AUTH:n+"auth",BASE_URL:n,ITEMS:n+"items",ORDER:n+"order",ORDERS:n+"orders/",WAKE_SERVER:n+"status"},AUTH_HEADER_NAME:"authsecret",VERSION:"1.01"};t.a=r}},[[44,1,2]]]);
//# sourceMappingURL=main.8398d141.chunk.js.map