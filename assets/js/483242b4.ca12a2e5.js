"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33616],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=o,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32107:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={title:"Upgrading from v4 to v5"},p=void 0,d={unversionedId:"upgrading-v4-to-v5",id:"upgrading-v4-to-v5",isDocsHomePage:!1,title:"Upgrading from v4 to v5",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/docs/upgrading-v4-to-v5.md",sourceDirName:".",slug:"/upgrading-v4-to-v5",permalink:"/docs/next/upgrading-v4-to-v5",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/upgrading-v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Rafa\u0142 Dzi\u0119gielewski",lastUpdatedAt:1635939827,formattedLastUpdatedAt:"11/3/2021",frontMatter:{title:"Upgrading from v4 to v5"}},s=[{value:"Node 12.17.0+ (or 13.10.0+) required",id:"node-12170-or-13100-required",children:[],level:2},{value:"TypeScript 4.1+ required",id:"typescript-41-required",children:[],level:2},{value:"Options parameters",id:"options-parameters",children:[],level:2},{value:"Type-safe populate parameter with dot notation",id:"type-safe-populate-parameter-with-dot-notation",children:[],level:2},{value:"Type-safe fields parameter",id:"type-safe-fields-parameter",children:[],level:2},{value:"Type-safe orderBy parameter",id:"type-safe-orderby-parameter",children:[],level:2},{value:"Removed <code>@Repository()</code> decorator",id:"removed-repository-decorator",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,a.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),(0,a.kt)("h2",{id:"node-12170-or-13100-required"},"Node 12.17.0+ (or 13.10.0+) required"),(0,a.kt)("p",null,"Support for older node versions was dropped. "),(0,a.kt)("h2",{id:"typescript-41-required"},"TypeScript 4.1+ required"),(0,a.kt)("p",null,"Support for older TypeScript versions was dropped. "),(0,a.kt)("h2",{id:"options-parameters"},"Options parameters"),(0,a.kt)("p",null,"Previously many methods had many (often boolean) parameters, in v5 such methods are\nrefactored to use options object instead to improve readability. Some methods offered\nboth signatures - the multi parameter signatures are now removed."),(0,a.kt)("p",null,"List of such methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.find()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.findOne()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.findOneOrFail()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.findAndCount()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.merge()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.fork()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"em.begin()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.find()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.findOne()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.findOneOrFail()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.findAndCount()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.findAll()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo.merge()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"collection.init()"))),(0,a.kt)("p",null,"This also applies to the methods on ",(0,a.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface."),(0,a.kt)("h2",{id:"type-safe-populate-parameter-with-dot-notation"},"Type-safe populate parameter with dot notation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FindOptions.populate")," parameter is now strictly typed and supports only array of\nstrings or a boolean.\nObject way is no longer supported. To set loading strategy, use ",(0,a.kt)("inlineCode",{parentName:"p"},"FindOptions.strategy"),".\nThe return type of all such methods now returns properly typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Loaded")," response. "),(0,a.kt)("h2",{id:"type-safe-fields-parameter"},"Type-safe fields parameter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FindOptions.fields")," parameter is now strictly typed also for the dot notation."),(0,a.kt)("h2",{id:"type-safe-orderby-parameter"},"Type-safe orderBy parameter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FindOptions.orderBy")," parameter is now strictly typed. It also allows passing an\narray of objects instead of just a single object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const books = await em.find(Book, {}, {\n  orderBy: [\n    { title: 1 },\n    { author: { name: -1 } },\n  ],\n});\n")),(0,a.kt)("h2",{id:"removed-repository-decorator"},"Removed ",(0,a.kt)("inlineCode",{parentName:"h2"},"@Repository()")," decorator"),(0,a.kt)("p",null,"The decorator was problematic as it could only work properly it the file was required\nsoon enough - before the ORM initialization, otherwise the repository would not be\nregistered at all."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"@Entity({ customRepository: () => CustomRepository })")," in the entity definition\ninstead."))}m.isMDXComponent=!0}}]);