(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{yGm9:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return i}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),s=t("013z");t("qKvR");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var o={},l={_frontmatter:o},c=s.a;function i(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,s={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,["components"]);return Object(a.b)(c,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Solution"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: postgresql-pv\nspec:\n  storageClassName: localdisk\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/mnt/data"\n')),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgresql-pv-claim\nspec:\n  storageClassName: localdisk\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: postgresql-pod\nspec:\n  containers:\n  - name: postgresql\n    image: bitnami/postgresql\n    ports:\n    - containerPort: 5432\n    env:\n    - name: MYSQL_ROOT_PASSWORD\n      value: password\n    volumeMounts:\n    - name: sql-storage\n      mountPath: /bitnami/postgresql/\n  volumes:\n  - name: sql-storage\n    persistentVolumeClaim:\n      claimName: postgresql-pv-claim\n")),Object(a.b)("p",null,"verify via ",Object(a.b)("inlineCode",{parentName:"p"},"ls /mnt/data")," on node"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-10-solution-mdx-57378c6383f986ba8c54.js.map