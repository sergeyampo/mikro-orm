"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31249],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||s;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),i=["components"],o={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},d=void 0,l={unversionedId:"embeddables",id:"version-4.5/embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/versioned_docs/version-4.5/embeddables.md",sourceDirName:".",slug:"/embeddables",permalink:"/docs/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/embeddables.md",tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637607215,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},sidebar:"version-4.5/docs",previous:{title:"Custom Types",permalink:"/docs/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/entity-schema"}},p=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[],level:2},{value:"Column Prefixing",id:"column-prefixing",children:[],level:2},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[],level:2},{value:"Array of embeddables",id:"array-of-embeddables",children:[],level:2},{value:"Nested embeddables",id:"nested-embeddables",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),(0,s.kt)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),(0,s.kt)("p",null,"Embeddables can only contain properties with basic ",(0,s.kt)("inlineCode",{parentName:"p"},"@Property()")," mapping."),(0,s.kt)("p",null,"For the purposes of this tutorial, we will assume that you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),(0,s.kt)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),(0,s.kt)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),(0,s.kt)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),(0,s.kt)("h2",{id:"column-prefixing"},"Column Prefixing"),(0,s.kt)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),(0,s.kt)("p",null,"Following the example above, your columns would be named as ",(0,s.kt)("inlineCode",{parentName:"p"},"address_street"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),(0,s.kt)("p",null,"You can change this behaviour to meet your needs by changing the ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),(0,s.kt)("p",null,"The following example shows you how to set your prefix to ",(0,s.kt)("inlineCode",{parentName:"p"},"myPrefix_"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),(0,s.kt)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix: false"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),(0,s.kt)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),(0,s.kt)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, object: true })\n  address!: Address;\n\n}\n")),(0,s.kt)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,s.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),(0,s.kt)("h2",{id:"array-of-embeddables"},"Array of embeddables"),(0,s.kt)("p",null,"Embedded arrays are always stored as JSON. It is possible to use them inside\nnested embeddables. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"  @Embedded(() => Address, { array: true })\n  addresses: Address[] = [];\n")),(0,s.kt)("h2",{id:"nested-embeddables"},"Nested embeddables"),(0,s.kt)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nclass User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nclass Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nclass Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);