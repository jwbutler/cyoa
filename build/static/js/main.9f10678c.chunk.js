(this.webpackJsonpcyoa=this.webpackJsonpcyoa||[]).push([[3],{136:function(e,t,n){var i={"./Action.schema":[55,0],"./Action.schema.json":[55,0],"./Condition.schema":[56,1],"./Condition.schema.json":[56,1],"./Scene.schema":[57,2],"./Scene.schema.json":[57,2]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id=136,e.exports=o},137:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var i,o,r=n(4),s=n.n(r),a=n(51),c=n.n(a),d=n(19),h=n(16),u=n(5),l=n(52),f=(new(n.n(l).a),function(e,t){if(!e)throw new Error("Invalid definition: "+JSON.stringify(t))}),m=function(e){return"object"===typeof e&&!Array.isArray(e)},y=function(e,t){return!Object.keys(e).every((function(e){return t.includes(e)}))};!function(e){var t;!function(e){e.SCENE="scene",e.ITEM="item",e.ACTION="action"}(t||(t={})),e.Type=t}(i||(i={})),(o=i||(i={})).validate=function(e){return f(e.hasOwnProperty("text")&&"string"===typeof e.text,e),e.hasOwnProperty("type")&&f(Object.values(i.Type).includes(e.type),e),f(e.hasOwnProperty("scene"),e),f("string"===typeof e.scene,e),e.hasOwnProperty("adds")&&(f(m(e.adds),e),e.adds.hasOwnProperty("items")&&(f(Array.isArray(e.adds.items),e),e.adds.items.forEach((function(t){return f("string"===typeof t,e)})))),e.hasOwnProperty("removes")&&(f(m(e.removes),e),e.removes.hasOwnProperty("items")&&(f(Array.isArray(e.removes.items),e),e.removes.items.forEach((function(t){return f("string"===typeof t,e)})))),f(!y(e,["text","type","scene","adds","removes"]),e),Object(u.a)(Object(u.a)({},e),{},{type:e.type||i.Type.SCENE})},o.execute=function(e,t){var n=e.adds,i=e.removes,o=e.scene,r=t.inventory,s=t.setInventory,a=t.setSceneId;if(o&&a(o),n){var c=n.items;c&&s([].concat(Object(d.a)(r),Object(d.a)(c)))}if(i){var h=i.items;h&&s(r.filter((function(e){return h&&!h.includes(e)})))}},o.getKey=function(e){return btoa(JSON.stringify(e))},o.sort=function(e){var t=function(e){switch(e.type){case i.Type.ACTION:return 2;case i.Type.ITEM:return 1;case i.Type.SCENE:return 0}};e.sort((function(e,n){return t(n)-t(e)}))};var b,v,p=i;(v=b||(b={})).validate=function(e){return e.hasOwnProperty("requires")&&(f(m(e.requires),e),e.requires.hasOwnProperty("items")&&(f(Array.isArray(e.requires.items),e),e.requires.items.forEach((function(t){return f("string"===typeof t,e)}))),e.requires.hasOwnProperty("visited")&&(f(Array.isArray(e.requires.visited),e),e.requires.visited.forEach((function(t){return f("string"===typeof t,e)}))),f(!y(e.requires,["items","visited"]),e)),e.hasOwnProperty("forbids")&&(f(m(e.forbids),e),e.forbids.hasOwnProperty("items")&&(f(Array.isArray(e.forbids.items),e),e.forbids.items.forEach((function(t){return f("string"===typeof t,e)}))),e.forbids.hasOwnProperty("visited")&&(f(Array.isArray(e.forbids.visited),e),e.forbids.visited.forEach((function(t){return f("string"===typeof t,e)}))),f(!y(e.forbids,["items","visited"]),e)),e.hasOwnProperty("description")&&f("string"===typeof e.description,e),e.hasOwnProperty("actions")&&(f(Array.isArray(e.actions),e),e.actions.forEach(p.validate)),f(!y(e,["requires","forbids","actions","description"]),e),e},v.evaluate=function(e,t){var n=t.inventory,i=t.visited;if(e.requires){if(e.requires.items&&!e.requires.items.every((function(e){return n.includes(e)})))return!1;if(e.requires.visited&&!e.requires.visited.every((function(e){return i.includes(e)})))return!1}if(e.forbids){if(e.forbids.items&&e.forbids.items.find((function(e){return n.includes(e)})))return!1;if(e.forbids.visited&&e.forbids.visited.find((function(e){return i.includes(e)})))return!1}return!0};var x=b,g=n(15),j=n(54),O=(n(137),n(0)),w=["type","size","onClick","children"],k=function(e){var t=e.type,n=void 0===t?"white":t,i=e.size,o=void 0===i?"medium":i,r=e.onClick,s=e.children,a=Object(j.a)(e,w),c=["button",n,o].join(" ");return Object(O.jsx)("button",Object(u.a)(Object(u.a)({className:c,onClick:r},a),{},{children:s}))};k||(k={});var _,T,G,S=k,E=(_={},Object(g.a)(_,p.Type.SCENE,"white"),Object(g.a)(_,p.Type.ACTION,"white_blue"),Object(g.a)(_,p.Type.ITEM,"white_blue"),_),C=function(e){var t=e.action,n=e.controller,i=E[t.type];return Object(O.jsx)(S,{type:i,size:"medium",onClick:function(){return p.execute(t,n)},children:t.text})};(G=T||(T={})).serialize=function(e){return btoa(JSON.stringify(e))},G.deserialize=function(e){return JSON.parse(atob(e))},G.equals=function(e,t){return JSON.stringify(e)===JSON.stringify(t)};var N,Y=T,I=Y.deserialize,A=Y.serialize,q=window.localStorage;(N||(N={})).create=function(e){var t={sceneId:e.sceneId,inventory:e.inventory,visited:e.visited},n=function(t){var n=t.sceneId,i=t.inventory,o=(t.visited,e.setSceneId),r=e.setInventory;o(n),r(i)};return Object(u.a)(Object(u.a)({},e),{},{currentState:t,load:n,restart:function(){return n(e.initialState)},save:function(){var n,i=e.setSavedGame;n=t,q.setItem("save",A(n)),i(t)}})};var P,L=N,z=(n(139),function(e){var t=e.title,n=e.body,i=e.x,o=void 0===i||i,r=e.ok,s=void 0===r||r,a=e.cancel,c=void 0!==a&&a,d=e.handleClose;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"lightbox-background"}),Object(O.jsxs)("div",{className:"lightbox",children:[o&&Object(O.jsx)("div",{className:"lightbox-x",onClick:function(){return d(!1)},children:"\xd7"}),Object(O.jsx)("h2",{className:"lightbox-title",children:t||" "}),n&&Object(O.jsx)("p",{className:"lightbox-body",children:n}),(s||c)&&Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)(S,{type:"white",size:"medium",onClick:function(){return d(!0)},children:"OK"}),c&&Object(O.jsx)(S,{type:"white",size:"medium",onClick:function(){return d(!1)},children:"Cancel"})]})]})]})}),B=(n(140),function(e){var t=e.controller,n=function(){t.savedGame?(t.load(t.savedGame),t.setLightbox(Object(O.jsx)(z,{title:"Game loaded.",x:!1,handleClose:function(){return t.setLightbox(null)}}))):(t.setLightbox(Object(O.jsx)(z,{title:"Error",body:"No saved game found.",x:!1,handleClose:function(){return t.setLightbox(null)}})),t.setSavedGame(null))},i=function(){t.save(),t.setLightbox(Object(O.jsx)(z,{title:"Game saved.",x:!1,handleClose:function(){return t.setLightbox(null)}}))};return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)(S,{type:"white",size:"small",onClick:function(){t.setLightbox(Object(O.jsx)(z,{title:"Are you sure?",body:"You will lose any unsaved progress.",x:!1,cancel:!0,handleClose:function(e){e&&t.restart(),t.setLightbox(null)}}))},children:"New"}),Object(O.jsx)(S,{type:"white",size:"small",onClick:function(){Y.equals(t.currentState,t.savedGame)?i():t.setLightbox(Object(O.jsx)(z,{title:"Are you sure?",body:"You will overwrite your existing saved game.",x:!1,cancel:!0,handleClose:function(e){e?i():t.setLightbox(null)}}))},children:"Save"}),Object(O.jsx)(S,{type:"white",size:"small",onClick:function(){Y.equals(t.currentState,t.savedGame)||Y.equals(t.currentState,t.initialState)?n():t.setLightbox(Object(O.jsx)(z,{title:"Are you sure?",body:"You will lose any unsaved progress.",x:!1,cancel:!0,handleClose:function(e){e?n():t.setLightbox(null)}}))},disabled:!t.savedGame,children:"Load"})]})}),D=(n(141),function(e){var t=e.title,n=e.description,i=e.children,o=Object(r.createRef)();return Object(r.useEffect)((function(){o.current.scrollTo(0,0)})),Object(O.jsxs)("div",{className:"menu",ref:o,children:[Object(O.jsx)("h1",{className:"menu-title",children:t}),Object(O.jsx)("p",{className:"menu-description",children:n}),i]})}),J=(n(142),function(e){var t,n=e.scenes,i=e.initialState,o=Object(r.useState)(i.sceneId),s=Object(h.a)(o,2),a=s[0],c=s[1],u=Object(r.useState)(i.inventory),l=Object(h.a)(u,2),f=l[0],m=l[1],y=Object(r.useState)([]),b=Object(h.a)(y,2),v=b[0],g=b[1],j=Object(r.useState)(null),w=Object(h.a)(j,2),k=w[0],_=w[1],T=Object(r.useState)(function(){var e=q.getItem("save");if(e)try{return I(e)}catch(t){console.log(t)}return null}()),G=Object(h.a)(T,2),S=G[0],E=G[1],N=function(e,t){var n={};return e.forEach((function(e){n[t(e)]=e})),n}(n,(function(e){return e.id})),Y=L.create({initialState:i,sceneId:a,setSceneId:c,inventory:f,setInventory:m,visited:v,setVisited:g,lightbox:k,setLightbox:_,savedGame:S,setSavedGame:E}),A=N[a];v.includes(a)||v.push(a);var P=A.description,z=Object(d.a)(A.actions||[]);return null===(t=A.conditions)||void 0===t||t.forEach((function(e){var t;x.evaluate(e,Y)&&(null===e||void 0===e||null===(t=e.actions)||void 0===t||t.forEach((function(e){return z.push(e)})),P=P||e.description)})),p.sort(z),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(D,{title:A.name,description:P,children:z.map((function(e,t){return Object(O.jsx)(C,{action:e,controller:Y},"".concat(e.text,"_").concat(t))}))}),Object(O.jsx)(B,{controller:Y}),k]})}),M=n(53),F=function(e){Object.values(e).forEach((function(t){var n,i,o=[];null===(n=t.actions)||void 0===n||n.forEach((function(e){return o.push(e)})),null===(i=t.conditions)||void 0===i||i.forEach((function(e){var t;return null===e||void 0===e||null===(t=e.actions)||void 0===t?void 0:t.forEach((function(e){return o.push(e)}))})),o.forEach((function(t){t.scene&&f(null!=e[t.scene],t)}))}))};(P||(P={})).validate=function(e){f(m(e),e),f(e.hasOwnProperty("id")&&"string"===typeof e.id,e),f(e.hasOwnProperty("name")&&"string"===typeof e.name,e),e.hasOwnProperty("description")&&f("string"===typeof e.description,e);var t=[];e.hasOwnProperty("actions")&&(f(Array.isArray(e.actions),e),e.actions.forEach((function(e){return t.push(p.validate(e))})));var n=[];return e.hasOwnProperty("conditions")&&(f(Array.isArray(e.conditions),e),e.conditions.forEach((function(e){return n.push(x.validate(e))}))),f(!y(e,["id","name","description","actions","conditions"]),e),Object(u.a)(Object(u.a)({},e),{},{actions:t,conditions:n})};n(143);var R=function(){var e={};return M.forEach((function(t){var n=P.validate(t),i=n.id;e[i]=n})),F(e),Object.values(e)}();c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(J,{scenes:R,initialState:{sceneId:"outside_front_door",inventory:[],visited:[]}})}),document.getElementById("root"))},53:function(e){e.exports=JSON.parse('[{"id":"backyard","name":"Backyard","description":"You\'re in the backyard.  There\'s a swing set on one end of the yard, and a small shed on another side.","actions":[{"text":"Go back in the house","scene":"dining_room"},{"text":"Go to the driveway","scene":"driveway"},{"text":"Go in the shed","scene":"shed"}]},{"id":"basement","name":"Basement","description":"YOU WIN!"},{"id":"basement_stairs","name":"Basement","description":"You open the door to the basement.  There are thick vines here blocking your way!","actions":[{"text":"Back","scene":"kitchen"}],"conditions":[{"forbids":{"items":["axe"]}},{"requires":{"items":["axe"]},"actions":[{"text":"Cut them with your axe","type":"action","scene":"basement"}]}]},{"id":"den","name":"Den","description":"You\'re in the den.  There\'s a long desk here with two desktop computers on it.  You can go into the dining room, the living room, or the family room.","actions":[{"text":"Go to the dining room","scene":"dining_room"},{"text":"Go to the living room","scene":"living_room"},{"text":"Go to the family room","scene":"family_room"}]},{"id":"dining_room","name":"Dining Room","description":"You\'re in the dining room.  It has red wallpaper and a large dining table in the middle of the room.  There is a large window through which you can see the backyard.  There\'s a door that leads to the backyard.  You can also go to the den, the kitchen, or the main hall","actions":[{"text":"Go to the main hall","scene":"main_hall"},{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go to the den","scene":"den"},{"text":"Go outside","scene":"backyard"}]},{"id":"downstairs_bathroom","name":"Downstairs Bathroom","description":"You\'re in the downstairs bathroom.  There\'s a toilet and a sink here.","actions":[{"text":"Exit","scene":"front_hall"}]},{"id":"driveway","name":"Driveway","description":"You\'re in the driveway.  There\'s a garage here with two cars outside it.  You can go to the backyard or into the kitchen through the back door.","actions":[{"text":"Walk around to the front of the house","scene":"outside_front_door"},{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go in the garage","scene":"garage"},{"text":"Go to the backyard","scene":"backyard"}]},{"id":"family_room","name":"Family Room","description":"You\'re in the family room.  There\'s a large TV here, and a couch and a recliner in front of it.  There are several game consoles and controllers on the floor.  There\'s a cabinet next to the TV containing a DVD player and various videos.","actions":[{"text":"Go to the den","scene":"den"}]},{"id":"front_hall","name":"Front Hall","description":"You\'re in the front hall.  The front door of the house is here.  The entrance to the downstairs bathroom is to the right of the door.  You can also go further inside to the main hall.","actions":[{"text":"Go outside","scene":"outside_front_door"},{"text":"Go into the bathroom","scene":"downstairs_bathroom"},{"text":"Go to the main hall","scene":"main_hall"}]},{"id":"garage","name":"Garage","description":"You\'re in the garage.  There\'s a snowblower here, along with several trash cans and various other junk.  It\'s big enough for two cars, but there\'s currently only enough free space for one.","actions":[{"text":"Go outside","scene":"driveway"}]},{"id":"kitchen","name":"Kitchen","description":"You\'re in the kitchen.  There\'s a refrigerator, stove, and a counter with a sink here, with shelves and cabinets above them.  There\'s a dining table on the other side of the room.  You can go out the back door into the driveway, or go to the main hall or the dining room.  You can also enter the basement.","actions":[{"text":"Go outside","scene":"driveway"},{"text":"Go to the main hall","scene":"main_hall"},{"text":"Go to the dining room","scene":"dining_room"},{"text":"Enter the basement","scene":"basement_stairs"}],"conditions":[{"forbids":{"items":["shed_key"]},"actions":[{"text":"Check the counter drawer","type":"action","scene":"kitchen_counter_drawer"}]}]},{"id":"kitchen_counter_drawer","name":"Drawer","actions":[{"text":"Back","scene":"kitchen"}],"conditions":[{"forbids":{"items":["shed_key"]},"description":"There\'s a bunch of junk in here.  You notice a key in the drawer.","actions":[{"text":"Take the key!","type":"item","scene":"kitchen_counter_drawer_key","adds":{"items":["shed_key"]}}]},{"requires":{"items":["shed_key"]},"description":"There\'s nothing in here but junk."}]},{"id":"kitchen_counter_drawer_key","name":"Drawer","description":"You take the key and put it in your pocket.","actions":[{"text":"Back","scene":"kitchen"}]},{"id":"living_room","name":"Living Room","description":"You\'re in the living room.  There is a couch and several chairs here.  There\'s a stereo system on one wall, with a record player and a shelf containing an extensive record collection.","actions":[{"text":"Go to the den","scene":"den"},{"text":"Go to the main hall","scene":"main_hall"}]},{"id":"main_hall","name":"Main Hall","description":"You\'re in the main hall.  There are stairs that lead to the second floor, as well as entrances to the dining room, kitchen room, living room, and the front hall.  There\'s an upright piano, as well as a desk.","actions":[{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go to the living room","scene":"living_room"},{"text":"Go to the dining room","scene":"dining_room"},{"text":"Go to the front hall","scene":"front_hall"}],"conditions":[{"forbids":{"visited":["piano"]},"actions":[{"text":"Play the piano","type":"action","scene":"piano"}]}]},{"id":"outside_front_door","name":"Outside the House","description":"You are standing outside the front door of the house.","actions":[{"text":"Go inside","scene":"front_hall"},{"text":"Walk around to the driveway","scene":"driveway"}]},{"id":"piano","name":"Piano","description":"You bang around randomly on the piano with both hands.  It sounds awful!","actions":[{"text":"Back","scene":"main_hall"}]},{"id":"shed","name":"Shed","actions":[{"text":"Go outside","scene":"backyard"}],"conditions":[{"forbids":{"items":["shed_key"]},"description":"It\'s locked.  Maybe there\'s a key somewhere..."},{"forbids":{"items":["axe"],"visited":["basement_stairs"]},"requires":{"items":["shed_key"]},"description":"You\'re in the shed.  There\'s a workbench here with a variety of tools."},{"forbids":{"items":["axe"]},"requires":{"items":["shed_key"],"visited":["basement_stairs"]},"description":"You\'re in the shed.  There\'s a workbench here with a variety of tools, including an axe.","actions":[{"text":"Take the axe!","type":"item","scene":"shed","adds":{"items":["axe"]}}]},{"requires":{"items":["axe","shed_key"]},"description":"You\'re in the shed.  There\'s a workbench here with a variety of tools."}]},{"id":"shed_axe","name":"Shed","description":"You take the axe.  It looks a bit rusty, but fairly sharp.  It feels heavy in your hand.","actions":[{"text":"Back","scene":"shed"}]}]')}},[[144,4,5]]]);
//# sourceMappingURL=main.9f10678c.chunk.js.map