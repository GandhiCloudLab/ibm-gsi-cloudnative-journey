(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{yB1Z:function(e,t,b){"use strict";b.r(t),b.d(t,"_frontmatter",(function(){return a})),b.d(t,"default",(function(){return j}));b("91GP"),b("rGqo"),b("yt8O"),b("Btvt"),b("RW0V"),b("q1tI");var n=b("7ljp"),c=b("013z");b("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&(e[n]=b[n])}return e}).apply(this,arguments)}var a={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=l("AnchorLinks"),o=l("AnchorLink"),s=l("Tabs"),i=l("Tab"),u={_frontmatter:a},O=c.a;function j(e){var t=e.components,b=function(e,t){if(null==e)return{};var b,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)b=r[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,["components"]);return Object(n.b)(O,r({},u,b,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(o,{mdxType:"AnchorLink"},"Debugging Applications"),Object(n.b)(o,{mdxType:"AnchorLink"},"Activities")),Object(n.b)("h1",null,"Debugging Applications"),Object(n.b)("p",null,"Kubernetes provides tools to help troubleshoot and debug problems with applications."),Object(n.b)("p",null,"Usually is getting familiar with how primitives objects interact with each other, checking the status of objects, and finally checking logs for any last resource clues."),Object(n.b)("h2",null,"Resources"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OpenShift")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_developer_cli/debugging-applications-in-odo.html"}),"Debugging Applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-troubleshooting-debugging.html"}),"Debugging Metrics"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IKS")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/"}),"Debugging Applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/"}),"Debugging Services")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-pod-replication-controller/"}),"Debugging Replication Controllers"))),Object(n.b)("h2",null,"References"),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Broken setup to debug")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"curl -sL https://gist.githubusercontent.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091/raw/1e2a0cca964c7b54ce3df2fc3fbf33a232511877/debugk8s.64 | base64 -d | oc apply -f -\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Expose the service using port-forward ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc port-forward service/my-service 8080:80 -n debug\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Try to access the service ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"curl http://localhost:8080\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Try Out these Commands to Debug ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get pods --all-namespaces\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get deployments\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc describe pod\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc explain Pod.spec.containers.resources.requests\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc explain Pod.spec.containers.livenessProbe\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc edit deployment\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc logs\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get service\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get ep\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc describe service\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get pods --show-labels\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get deployment --show-labels\n"))),Object(n.b)(i,{label:"IKS",mdxType:"Tab"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Broken setup to debug")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"curl -s https://gist.githubusercontent.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091/raw/a92550dd499ebefc205fa2cd5c18123409186712/debugk8s.64 | base64 -d | kubectl apply -f -\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Expose the service using port-forward ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl port-forward service/my-service 8080:80 -n debug\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Try to access the service ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"curl http://localhost:8080\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Try Out these Commands to Debug ")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get pods --all-namespaces\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get deployments\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl describe pod\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl explain Pod.spec.containers.resources.requests\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl explain Pod.spec.containers.livenessProbe\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl edit deployment\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl logs\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get service\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get ep\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl describe service\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get pods --show-labels\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get deployment --show-labels\n")))),Object(n.b)("h3",null,"Solution"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://gist.github.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091#file-debugk8s-yaml"}),"https://gist.github.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091#file-debugk8s-yaml"))),Object(n.b)("h2",null,"Activities"),Object(n.b)("p",null,"The continuous integration activities focus around Tekton the integration platform. These labs will show you how to build pipelines and test your code before deployment."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Link"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:"left"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Debugging"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Find which service is breaking in your cluster and find out why."),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("a",r({parentName:"td"},{href:"../activities/labs/lab5"}),"Debugging"))))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-troubleshooting-index-mdx-96957883d5476ac1efe4.js.map