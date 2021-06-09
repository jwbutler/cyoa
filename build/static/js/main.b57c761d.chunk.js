(this.webpackJsonpcyoa=this.webpackJsonpcyoa||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"backyard","name":"Backyard","description":"You\'re in the backyard.  There\'s a swing set on one end of the yard, and a small shed on another side.","actions":[{"text":"Go back inside","scene":"dining_room"},{"text":"Go in the shed","scene":"shed_locked","forbids":{"items":["shed_key"]}},{"text":"Go in the shed","scene":"shed_inside","requires":{"items":["shed_key"]}},{"text":"Go to the driveway","scene":"driveway"}]},{"id":"den","name":"Den","description":"You\'re in the den.  There\'s a long desk here with two desktop computers on it.  You can go into the dining room, the living room, or the family room.","actions":[{"text":"Go to the dining room","scene":"dining_room"},{"text":"Go to the living room","scene":"living_room"},{"text":"Go to the family room","scene":"family_room"}]},{"id":"dining_room","name":"Dining Room","description":"You\'re in the dining room.  It has red wallpaper and a large dining table in the middle of the room.  There is a large window through which you can see the backyard.  There\'s a door that leads to the backyard.  You can also go to the den, the kitchen, or the main hall","actions":[{"text":"Go to the main hall","scene":"main_hall"},{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go to the den","scene":"den"},{"text":"Go outside","scene":"backyard"}]},{"id":"downstairs_bathroom","name":"Downstairs Bathroom","description":"You\'re in the downstairs bathroom.  There\'s a toilet and a sink here.","actions":[{"text":"Exit","scene":"front_hall"}]},{"id":"driveway","name":"Driveway","description":"You\'re in the driveway.  There\'s a garage here with two cars outside it.  You can go to the backyard or into the kitchen through the back door.","actions":[{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go in the garage","scene":"garage"},{"text":"Go to the backyard","scene":"backyard"}]},{"id":"family_room","name":"Family Room","description":"You\'re in the family room.  There\'s a large TV here, and a couch and a recliner in front of it.  There are several game consoles and controllers on the floor.  There\'s a cabinet next to the TV containing a DVD player and various videos.","actions":[{"text":"Go to the den","scene":"den"}]},{"id":"front_hall","name":"Front Hall","description":"You\'re in the front hall.  The front door of the house is here.  The entrance to the downstairs bathroom is to the right of the door.  You can also go further inside to the main hall.","actions":[{"text":"Go outside","scene":"outside_front_door"},{"text":"Go into the bathroom","scene":"downstairs_bathroom"},{"text":"Go further inside","scene":"main_hall"}]},{"id":"garage","name":"Garage","description":"You\'re in the garage.  There\'s a snowblower here, along with several trash cans and various other junk.  It\'s big enough for two cars, but there\'s currently only enough free space for one.","actions":[{"text":"Go outside","scene":"driveway"}]},{"id":"kitchen","name":"Kitchen","description":"You\'re in the kitchen.  There\'s a refrigerator, stove, and a counter with a sink here, with shelves and cabinets above them.  There\'s a dining table on the other side of the room.  You can go out the back door into the driveway, or go to the main hall or the dining room.","actions":[{"text":"Go outside","scene":"driveway"},{"text":"Go to the main hall","scene":"main_hall"},{"text":"Go to the dining room","scene":"dining_room"},{"text":"Check the counter drawer","scene":"kitchen_counter_drawer","forbids":{"items":["shed_key"]},"adds":{"items":["shed_key"]}},{"text":"Check the counter drawer","scene":"kitchen_counter_drawer_without_key","requires":{"items":["shed_key"]}}]},{"id":"kitchen_counter_drawer","name":"Drawer","description":"There\'s a bunch of junk in here.  You also find a key!  You take the key.","actions":[{"text":"Back","scene":"kitchen"}]},{"id":"kitchen_counter_drawer_without_key","name":"Drawer","description":"There\'s nothing in here but junk.","actions":[{"text":"Back","scene":"kitchen"}]},{"id":"living_room","name":"Living Room","description":"You\'re in the living room.  There is a couch and several chairs here.  There\'s a stereo system on one wall, with a record player and a shelf containing an extensive record collection.","actions":[{"text":"Go to the den","scene":"den"},{"text":"Go to the main hall","scene":"main_hall"}]},{"id":"main_hall","name":"Main Hall","description":"You\'re in the main hall.  There are stairs that lead to the second floor, as well as entrances to the dining room, kitchen room, living room, and the front hall.  There\'s an upright piano, as well as a desk.","actions":[{"text":"Go to the kitchen","scene":"kitchen"},{"text":"Go to the living room","scene":"living_room"},{"text":"Go to the dining room","scene":"dining_room"},{"text":"Go to the front hall","scene":"front_hall"}]},{"id":"outside_front_door","name":"Outside the House","description":"You are standing outside the front door of the house.","actions":[{"text":"Go inside","scene":"front_hall"}]},{"id":"shed_inside","name":"Shed","description":"You\'re in the shed.  It\'s stuffed with assorted outdoor toys, such as frisbees and various types of ball.","actions":[{"text":"Go outside","scene":"backyard"}]},{"id":"shed_locked","name":"Shed","description":"It\'s locked.  Maybe there\'s a key somewhere...","actions":[{"text":"Back","scene":"backyard"}]}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(8),s=n.n(i),a=(n(14),n(5)),c=n(6),h=n(7),d=n(9),u=function(e){f(y(e),e),f(e.hasOwnProperty("id")&&"string"===typeof e.id,e),f(e.hasOwnProperty("name")&&"string"===typeof e.name,e),e.hasOwnProperty("description")&&f("string"===typeof e.description,e),f(e.hasOwnProperty("actions")&&Array.isArray(e.actions),e);var t=e.actions.map((function(e){return l(e)}));return Object(h.a)(Object(h.a)({},e),{},{actions:t})},l=function(e){return f(e.hasOwnProperty("text")&&"string"===typeof e.text,e),e.hasOwnProperty("scene")&&f("string"===typeof e.scene,e),e.hasOwnProperty("requires")&&(f(y(e.requires),e),e.requires.hasOwnProperty("items")&&(f(Array.isArray(e.requires.items),e),e.requires.items.forEach((function(t){return f("string"===typeof t,e)})))),e.hasOwnProperty("forbids")&&(f(y(e.forbids),e),e.forbids.hasOwnProperty("items")&&(f(Array.isArray(e.forbids.items),e),e.forbids.items.forEach((function(t){return f("string"===typeof t,e)})))),e.hasOwnProperty("adds")&&(f(y(e.adds),e),e.adds.hasOwnProperty("items")&&(f(Array.isArray(e.adds.items),e),e.adds.items.forEach((function(t){return f("string"===typeof t,e)})))),e.hasOwnProperty("removes")&&(f(y(e.removes),e),e.removes.hasOwnProperty("items")&&(f(Array.isArray(e.removes.items),e),e.removes.items.forEach((function(t){return f("string"===typeof t,e)})))),e},m=function(e){Object.values(e).forEach((function(t){t.actions.forEach((function(t){t.scene&&f(null!=e[t.scene],t)}))}))},f=function(e,t){if(!e)throw new Error("Invalid definition: "+JSON.stringify(t))},y=function(e){return"object"===typeof e&&!Array.isArray(e)},g=(n(15),n(0)),p=function(e){var t=e.title,n=e.description,o=e.children;return Object(g.jsxs)("div",{className:"menu",children:[Object(g.jsx)("h1",{children:t}),Object(g.jsx)("div",{className:"description",children:n}),o]})},k=(n(17),function(e){var t=e.text,n=e.onClick;return Object(g.jsx)("div",{className:"action",onClick:n,children:t},t)}),b=(n(18),function(){var e={};return d.forEach((function(t){var n=u(t),o=n.id;e[o]=n})),m(e),e}()),w=function(){var e=Object(o.useState)("outside_front_door"),t=Object(c.a)(e,2),n=t[0],r=t[1],i=b[n],s=Object(o.useState)([]),h=Object(c.a)(s,2),d=h[0],u=h[1];return Object(g.jsx)(p,{title:i.name,description:i.description,children:i.actions.filter((function(e){return function(e){return!(e.requires&&e.requires.items&&!e.requires.items.every((function(e){return d.includes(e)})))&&!(e.forbids&&e.forbids.items&&e.forbids.items.find((function(e){return d.includes(e)})))}(e)})).map((function(e){return Object(g.jsx)(k,{text:e.text,onClick:function(){return function(e){if(e.scene&&r(e.scene),e.adds&&e.adds.items){var t=[].concat(Object(a.a)(d),Object(a.a)(e.adds.items));u(t)}if(e.removes&&e.removes.items){var n=e.removes.items,o=d.filter((function(e){return n&&!n.includes(e)}));u(o)}}(e)}})}))})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),x()}],[[19,1,2]]]);
//# sourceMappingURL=main.b57c761d.chunk.js.map