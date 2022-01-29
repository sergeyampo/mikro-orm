"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75148],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||c[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],p={title:"Custom Types"},l=void 0,s={unversionedId:"custom-types",id:"version-3.6/custom-types",title:"Custom Types",description:"You can define custom types by extending Type abstract class. It has 4 optional methods:",source:"@site/versioned_docs/version-3.6/custom-types.md",sourceDirName:".",slug:"/custom-types",permalink:"/docs/3.6/custom-types",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/custom-types.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1643405657,formattedLastUpdatedAt:"1/28/2022",frontMatter:{title:"Custom Types"},sidebar:"version-3.6/docs",previous:{title:"Naming Strategy",permalink:"/docs/3.6/naming-strategy"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/3.6/entity-schema"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can define custom types by extending ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," abstract class. It has 4 optional methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.\nBy default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type.\nBy default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default converts to the database value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),(0,o.kt)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type.\nBy default returns ",(0,o.kt)("inlineCode",{parentName:"p"},"columnType")," of given property."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"DateType")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeType")," types are already implemented in the ORM.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Type, Platform, EntityProperty, ValidationError } from 'mikro-orm';\n\nexport class DateType extends Type {\n\n  convertToDatabaseValue(value: any, platform: Platform): any {\n    if (value instanceof Date) {\n      return value.toISOString().substr(0, 10);\n    }\n\n    if (!value || value.toString().match(/^\\d{4}-\\d{2}-\\d{2}$/)) {\n      return value;\n    }\n\n    throw ValidationError.invalidType(DateType, value, 'JS');\n  }\n\n  convertToJSValue(value: any, platform: Platform): any {\n    if (!value || value instanceof Date) {\n      return value;\n    }\n\n    const date = new Date(value);\n\n    if (date.toString() === 'Invalid Date') {\n      throw ValidationError.invalidType(DateType, value, 'database');\n    }\n\n    return date;\n  }\n\n  getColumnType(prop: EntityProperty, platform: Platform) {\n    return `date(${prop.length})`;\n  }\n\n}\n")),(0,o.kt)("p",null,"Then you can use this type when defining your entity properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class FooBar {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property({ type: DateType, length: 3 })\n  born?: Date;\n\n}\n")))}m.isMDXComponent=!0}}]);