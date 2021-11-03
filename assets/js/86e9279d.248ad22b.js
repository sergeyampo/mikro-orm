"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71330],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),m=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=m(n),u=a,d=g["".concat(s,".").concat(u)]||g[u]||p[u]||r;return n?i.createElement(d,o(o({ref:e},c),{},{components:n})):i.createElement(d,o({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90535:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Migrations"},s=void 0,m={unversionedId:"migrations",id:"version-4.1/migrations",isDocsHomePage:!1,title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/versioned_docs/version-4.1/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/4.1/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/migrations.md",tags:[],version:"4.1",lastUpdatedBy:"Rafa\u0142 Dzi\u0119gielewski",lastUpdatedAt:1635939827,formattedLastUpdatedAt:"11/3/2021",frontMatter:{title:"Migrations"},sidebar:"version-4.1/docs",previous:{title:"Entity Generator",permalink:"/docs/4.1/entity-generator"},next:{title:"Read Replica Connections",permalink:"/docs/4.1/read-connections"}},c=[{value:"Migration class",id:"migration-class",children:[],level:2},{value:"Initial migration",id:"initial-migration",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Using via CLI",id:"using-via-cli",children:[],level:2},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",children:[],level:2},{value:"Providing transaction context",id:"providing-transaction-context",children:[],level:2},{value:"Importing migrations statically",id:"importing-migrations-statically",children:[],level:2},{value:"Limitations",id:"limitations",children:[{value:"MySQL",id:"mysql",children:[],level:3}],level:2}],p={toc:c};function g(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MikroORM has integrated support for migrations via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows you to generate migrations with current schema differences."),(0,r.kt)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),(0,r.kt)("h2",{id:"migration-class"},"Migration class"),(0,r.kt)("p",null,"Migrations are classes that extend Migration abstract class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),(0,r.kt)("p",null,"To support undoing those changed, you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),(0,r.kt)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration")," class context."),(0,r.kt)("p",null,"You can execute queries in the migration via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.execute()")," method, which\nwill run queries in the same transaction as the rest of the migration. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.addSql()")," method also accepts instances of knex. Knex instance can be\naccessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.getKnex()"),"; "),(0,r.kt)("h2",{id:"initial-migration"},"Initial migration"),(0,r.kt)("p",null,"If you want to start using migrations, and you already have the schema generated,\nyou can do so by creating so called initial migration:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initial migration can be created only if there are no migrations previously\ngenerated or executed. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create --initial\n")),(0,r.kt)("p",null,"This will create the initial migration, containing the schema dump from\n",(0,r.kt)("inlineCode",{parentName:"p"},"schema:create")," command. The migration will be automatically marked as executed. "),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    emit: 'ts', // migration generation mode\n  },\n})\n")),(0,r.kt)("h2",{id:"using-via-cli"},"Using via CLI"),(0,r.kt)("p",null,"You can use it via CLI: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-f"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"--to")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migratee down all migrations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/installation"},"enable ",(0,r.kt)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.kt)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),(0,r.kt)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('name'); // runs only given migration, up\n  await migrator.up({ to: 'up-to-name' }); // runs migrations up to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down('name'); // runs only given migration, down\n  await migrator.down({ to: 'down-to-name' }); // runs migrations down to given version\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),(0,r.kt)("p",null,"Then run this script via ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),(0,r.kt)("h2",{id:"providing-transaction-context"},"Providing transaction context"),(0,r.kt)("p",null,"In some cases you might want to control the transaction context yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  await migrator.up({ transaction: em.getTransactionContext() });\n});\n")),(0,r.kt)("h2",{id:"importing-migrations-statically"},"Importing migrations statically"),(0,r.kt)("p",null,"If you do not want to dynamically import a folder (e.g. when bundling your code with webpack) you can import migrations\ndirectly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Migration20191019195930 } from '../migrations/Migration20191019195930.ts';\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList: [\n      {\n        name: 'Migration20191019195930.ts',\n        class: Migration20191019195930,\n      },\n    ],\n  },\n});\n")),(0,r.kt)("p",null,"With the help of (webpacks context module api)","[https://webpack.js.org/guides/dependency-management/#context-module-api]","\nwe can dynamically import the migrations making it possible to import all files in a folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { basename } from 'path';\n\nconst migrations = {};\n\nfunction importAll(r) {\n  r.keys().forEach(\n    (key) => (migrations[basename(key)] = Object.values(r(key))[0])\n  );\n}\n\nimportAll(require.context('../migrations', false, /\\.ts$/));\n\nconst migrationsList = Object.keys(migrations).map((migrationName) => ({\n  name: migrationName,\n  class: migrations[migrationName],\n}));\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList,\n  },\n});\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/index#table-of-contents"},"\u2190"," Back to table of contents")))}g.isMDXComponent=!0}}]);