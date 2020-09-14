(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{FgeD:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return o}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),p=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},b={_frontmatter:l},c=p.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,["components"]);return Object(a.b)(c,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Solution"),Object(a.b)("p",null,"   Check ",Object(a.b)("inlineCode",{parentName:"p"},"STATUS")," column for not Ready"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"    kubectl get pods --all-namespaces\n")),Object(a.b)("p",null,"   Check the description of the deployment"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"```\nkubectl describe deployment hyper-drive\n```\n")),Object(a.b)("p",null,"   Save logs for a broken pod"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(a.b)("p",null,"   In the description you will see the following is wrong:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Selector and Label names do not match.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Probe is TCP instead of HTTP Get.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Service Port is 80 instead of 8080."),Object(a.b)("p",{parentName:"li"}," To fix probe, can’t kubectl edit, need to delete and recreate the deployment"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml\n")),Object(a.b)("p",{parentName:"li"}," Delete pod"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"kubectl delete deployment <deployment name> -n <namespace>\n")),Object(a.b)("p",{parentName:"li"}," Can also use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl replace")),Object(a.b)("p",{parentName:"li"}," Edit yaml, and apply"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"kubectl apply -f hyper-drive.yml -n <namespace>\n")),Object(a.b)("p",{parentName:"li"}," Verify"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace>\n")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-5-solution-mdx-134f486b72bf9fbda25f.js.map