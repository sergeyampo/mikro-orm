"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2734],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),k=l,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||i;return n?r.createElement(c,a(a({ref:t},m),{},{components:n})):r.createElement(c,a({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52219:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var r=n(83117),l=n(80102),i=(n(67294),n(3905)),a=["components"],o={id:"knex.knex-1.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},p="Interface: PoolConfig",d={unversionedId:"api/interfaces/knex.knex-1.poolconfig",id:"version-4.5/api/interfaces/knex.knex-1.poolconfig",title:"Interface: PoolConfig",description:"knex.Knex.PoolConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.poolconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.poolconfig",permalink:"/docs/api/interfaces/knex.knex-1.poolconfig",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1643405657,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"knex.knex-1.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig"},next:{title:"PostgreSqlColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.postgresqlcolumnbuilder"}},m=[{value:"Properties",id:"properties",children:[{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[],level:3},{value:"afterCreate",id:"aftercreate",children:[],level:3},{value:"createRetryIntervalMillis",id:"createretryintervalmillis",children:[],level:3},{value:"createTimeoutMillis",id:"createtimeoutmillis",children:[],level:3},{value:"destroyTimeoutMillis",id:"destroytimeoutmillis",children:[],level:3},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[],level:3},{value:"log",id:"log",children:[{value:"Type declaration:",id:"type-declaration",children:[],level:4},{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"max",id:"max",children:[],level:3},{value:"min",id:"min",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"priorityRange",id:"priorityrange",children:[],level:3},{value:"propagateCreateError",id:"propagatecreateerror",children:[],level:3},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[],level:3},{value:"refreshIdle",id:"refreshidle",children:[],level:3},{value:"returnToHead",id:"returntohead",children:[],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".PoolConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2095"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"aftercreate"},"afterCreate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"afterCreate"),": Function"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2080"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createretryintervalmillis"},"createRetryIntervalMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"createRetryIntervalMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2092"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createtimeoutmillis"},"createTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"createTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2093"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroytimeoutmillis"},"destroyTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"destroyTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2094"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2084"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"log"},"log"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"log"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),": ",(0,i.kt)("em",{parentName:"p"},"string"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2088"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2088"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2082"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"min"},"min"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"min"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2081"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2079"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"priorityrange"},"priorityRange"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"priorityRange"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2087"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propagatecreateerror"},"propagateCreateError"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"propagateCreateError"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2091"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"reapIntervalMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2085"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refreshidle"},"refreshIdle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"refreshIdle"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2083"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"returntohead"},"returnToHead"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"returnToHead"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2086"))}s.isMDXComponent=!0}}]);