(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(16),c=n.n(i),l=n(7),o=(n(25),n(5)),u=(n(26),function(e){return a.a.createElement("header",{className:"main-header"},a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.b,{to:"/",exact:!0},"All Products")),a.a.createElement("li",null,a.a.createElement(l.b,{to:"/favorites"},"Favorites")))))}),s=(n(32),function(e){return a.a.createElement("div",{className:"card",style:e.style},e.children)}),m=n(8),d={},p=[],f={},v=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(r.useState)(d)[1];return Object(r.useEffect)(function(){return e&&p.push(t),function(){e&&(p=p.filter(function(e){return e!==t}))}},[t,e]),[d,function(e,t){var n=f[e](d,t);d=Object(m.a)({},d,{},n);var r=!0,a=!1,i=void 0;try{for(var c,l=p[Symbol.iterator]();!(r=(c=l.next()).done);r=!0)(0,c.value)(d)}catch(o){a=!0,i=o}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}}]},E=(n(33),function(e){var t=v(!1)[1];return a.a.createElement(s,{style:{marginBottom:"1rem"}},a.a.createElement("div",{className:"product-item"},a.a.createElement("h2",{className:e.isFav?"is-fav":""},e.title),a.a.createElement("p",null,e.description),a.a.createElement("button",{className:e.isFav?"":"button-outline",onClick:function(){t("TOGGLE_FAV",e.id)}},e.isFav?"Un-Favorite":"Favorite","x")))}),h=(n(15),function(e){var t=v()[0];return a.a.createElement("ul",{className:"products-list"},t.products.map(function(e){return a.a.createElement(E,{key:e.id,id:e.id,title:e.title,description:e.description,isFav:e.isFavorite})}))}),F=(n(34),function(e){return a.a.createElement(s,{style:{marginBottom:"1rem"}},a.a.createElement("div",{className:"favorite-item"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.description)))}),y=function(e){var t=v()[0].products.filter(function(e){return e.isFavorite}),n=a.a.createElement("p",{className:"placeholder"},"Got no favorites yet!");return t.length>0&&(n=a.a.createElement("ul",{className:"products-list"},t.map(function(e){return a.a.createElement(F,{key:e.id,id:e.id,title:e.title,description:e.description})}))),n},b=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("main",null,a.a.createElement(o.a,{path:"/",component:h,exact:!0}),a.a.createElement(o.a,{path:"/favorites",component:y})))},g=n(19);(function(){var e,t;e={TOGGLE_FAV:function(e,t){var n=e.products.findIndex(function(e){return e.id===t}),r=!e.products[n].isFavorite,a=Object(g.a)(e.products);return a[n]=Object(m.a)({},e.products[n],{isFavorite:r}),{products:a}}},(t={products:[{id:"p1",title:"Red Scarf",description:"A pretty red scarf.",isFavorite:!1},{id:"p2",title:"Blue T-Shirt",description:"A pretty blue t-shirt.",isFavorite:!1},{id:"p3",title:"Green Trousers",description:"A pair of lightly green trousers.",isFavorite:!1},{id:"p4",title:"Orange Hat",description:"Street style! An orange hat.",isFavorite:!1}]})&&(d=Object(m.a)({},d,{},t)),f=Object(m.a)({},f,{},e)})(),c.a.render(a.a.createElement(l.a,null,a.a.createElement(b,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7d1a82bf.chunk.js.map