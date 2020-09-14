(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{FHCi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),i=a("013z"),n=a("T0C+");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=c("PageDescription"),p=c("AnchorLinks"),b=c("AnchorLink"),m={_frontmatter:s},u=i.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(u,o({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use Artifactory to store artifacts such as Helm charts")),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"}),"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage. The ",Object(r.b)(n.a,{name:"env",mdxType:"Globals"})," uses Artifactory as an artifact repository manager, which it uses to host its Helm repository."),Object(r.b)("h2",null,"What is Artifactory"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://jfrog.com/artifactory/"}),"Artifactory")," is an artifact management repository."),Object(r.b)("p",null,"An artifact repository manager hosts multiple binary repositories, like a database management system for artifacts. The binary repository compliments the source code repository: the code from an SCM is the input to the build process, whereas a binary repository stores the output of the build process, often called artifacts. The artifacts are often individual application components that can later be assembled into a full product."),Object(r.b)("p",null,"An artifact repository manager is an integral part of a CI/CD solution, a companion to the pipeline. As the pipeline builds artifacts, they’re stored in the repositories. When the pipeline later needs artifacts that have already been built, they’re retrieved from the repositories. This enables a build to be broken into smaller stages with well-defined inputs and outputs and provides better tracking of each stage’s results. Often a failed pipeline can restart in the middle using artifacts that were already built and stored."),Object(r.b)("p",null,"An artifact repository often serves as the storage for a package manager, which assembles an application from artifacts. Here are some common package managers and their repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org"}),Object(r.b)("strong",{parentName:"a"},"Maven")),": Builds Java artifacts (such as Jar, War, Ear, etc.) and projects stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/guides/introduction/introduction-to-repositories.html"}),"Maven repositories")," such as ",Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/repository/index.html"}),"Maven Central")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-npm/"}),Object(r.b)("strong",{parentName:"a"},"npm")),": Assembles programs from JavaScript packages stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/misc/registry"}),"npm-registries")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-the-public-npm-registry"}),"public npm registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://pypi.org/project/pip/"}),Object(r.b)("strong",{parentName:"a"},"PIP")),": Installs Python packages from ",Object(r.b)("a",o({parentName:"li"},{href:"https://packaging.python.org/guides/hosting-your-own-index/"}),"index repositories")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://pypi.org/"}),"Python Package Index (PyPI)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh"}),Object(r.b)("strong",{parentName:"a"},"Helm")),": Deploys applications to Kubernetes using charts stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm repositories")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh/blog/intro-helm-hub/"}),"Helm Hub")," catalog of repositories")),Object(r.b)("p",null,"Docker is not a package manager, but its architecture includes an artifact repository:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://www.docker.com/"}),Object(r.b)("strong",{parentName:"a"},"Docker")),": Stores images in ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/registry/"}),"Docker registries")," such as ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/docker-hub/"}),"Docker Hub"))),Object(r.b)("p",null,"Note that you do not need a very large team to start reaping benefits from an artifact repository manager. The initial investment is not very large and the benefits are felt immediately."),Object(r.b)("h2",null,"Artifact management in the Pipeline"),Object(r.b)("p",null,"The ",Object(r.b)(n.a,{name:"env",mdxType:"Globals"})," will eventually be extended to store a number of artifact types in Artifactory. Thus far, the CI and CD pipelines exchange two types of artifacts: Docker images and Helm charts. The CI pipeline (",Object(r.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"}),"Jenkins"),", ",Object(r.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"}),"Tekton"),", etc.) builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Docker images"),": The ",Object(r.b)("a",o({parentName:"li"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/image-registry"}),"Developer Tools Image Registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Helm charts"),": A Helm repository in Artifactory")),Object(r.b)("p",null,"The ",Object(r.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/resources/codepatterns-overview"}),Object(r.b)(n.a,{name:"templates",mdxType:"Globals"}))," have also been configured to store their Helm charts in Artifactory."),Object(r.b)("p",null,"Artifactory is part of the ",Object(r.b)(n.a,{name:"env",mdxType:"Globals"}),"’s complete CI/CD solution:"),Object(r.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(b,{to:"../../guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(r.b)(b,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery")),Object(r.b)("h3",null,"Artifactory dashboard"),Object(r.b)("p",null,"Use the Artifactory dashboard to browse the repositories and their artifacts."),Object(r.b)("p",null,"Open the Artifactory web UI for your environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the OpenShift console. On the top, you will find an icon of a square made of 9 small squares. "),Object(r.b)("li",{parentName:"ul"},"Clicking on that icon will give you all the tools shortcut. Select Artifactory to navigate to the Artifactory dashboard.")),Object(r.b)("p",null,"Browse the Helm repository."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the sidebar on the left, select Artifactory > Artifacts."),Object(r.b)("li",{parentName:"ul"},"Expand the tree for the ",Object(r.b)("inlineCode",{parentName:"li"},"generic-local")," repository, which is the Helm repository"),Object(r.b)("li",{parentName:"ul"},"Expand the branch for your environment’s cluster, such as ",Object(r.b)("inlineCode",{parentName:"li"},"showcase-dev-iks"))),Object(r.b)("p",null,"The artifacts in the cluster’s branch follow the ",Object(r.b)("a",o({parentName:"p"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm chart repository")," structure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"index.yaml"),": Helm’s index of all of the charts in the repository"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"charts"),": The ",Object(r.b)("inlineCode",{parentName:"li"},"tgz")," files named for the application they deploy\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABKUlEQVQoz6WSbZODIAyE/f+/tDNXFeQd0dxuKk6v9fqlzKwgSZ4s6DDNs0yzER+i1LVJykUilbIqQLlUKesquWKunA9hn3UJOYvzWjvcxklG68QjGJFkYwIwy7SMYpyRZVlUpRTZ911aa7Jt27nmjIfGCxoOP/e7WBSwEzc2BHMt4muQshdpW5MV7iiCXoF9TVXkDAVu6MBBMQQNsDjBacMVcGTkBMSccwrg6BB1eLw/gLBKIAtYqEB0jikqmMN7L9ZaFdfM5UyxSUpJ896AjzsRBfKdsQ7s8X78Z3H/BNIVuxBacYccTKKbGOMb8L9xHjnD7oxfxxijgH5kNupfkU7ZjLq6wz8fhYV0Q5cd0I6iT25e1yeQXekswmnv1D64eAZcAq+6fwP8BZsCYF7Q2JmoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/ibm-gsi-cloudnative-journey/static/f31dbe246e8c0196f464a4efb9b5dc1a/3cbba/Artifactory01.png",srcSet:["/ibm-gsi-cloudnative-journey/static/f31dbe246e8c0196f464a4efb9b5dc1a/7fc1e/Artifactory01.png 288w","/ibm-gsi-cloudnative-journey/static/f31dbe246e8c0196f464a4efb9b5dc1a/a5df1/Artifactory01.png 576w","/ibm-gsi-cloudnative-journey/static/f31dbe246e8c0196f464a4efb9b5dc1a/3cbba/Artifactory01.png 1152w","/ibm-gsi-cloudnative-journey/static/f31dbe246e8c0196f464a4efb9b5dc1a/830c1/Artifactory01.png 1269w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("p",null,"Browse the artifacts to see how a Helm repository is organized."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"index.yaml")," file and View it to see its contents\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB+klEQVQ4y6WT6XKjMBCE8/5PuNkfLmMjMIc4bCQhDnd6JMvrpDaVrVqqPkYg0cxMS2/94FA3N7Ta4HrzuF5njCSM/4m4Vr7pB4O3dd1gjEPbdpiMhTwLy5f4HWF+2+Gcx+1GQfBaFg+lFJqmwTiOXLhi29YY1xh/ZsG+73iT2/1+Z4YtsiwLotZaeL/wRwujDzFmlD6OY3n/yidBrTVOpzMulwp5rkge4vF4RN/3mOeZrbHhZ4JzM0XWT7wI7ug6jbJUqOsSVVXwuaFBPVvQsTcDpmkMMWHtjd9Ja5i98Frytm0YBouyMKgunsIzRT3HS6CuYryUC9fIvEeh4rppWpltZN/vYsodzm44ZQ7ZkVuomqHbhb307Cth1G0c68dz86Dlur5fmMzCSh6CKUMx5Xw+s9SW6Xt6v7GkxPpX9p0l77Fs4VmyIO4eDgeWUZLLE6UK9myiKT4YkZDnb10WtG7p6glFkTPTjG4X/EnFXpYsqaNBw5NoyhSyl/2aeArKntL6SrGRQoaNn9hL9rOeHzgKO845ztG80nKt5TtLU2aK+0AQlJNizIrf7yPefw3cixRWBvl5gsonZs2o4jghc2m+qgya2tAsE7x4mtJ1Hf9ahPLinlq/lPMnJtLxTEc1ZCinREi93LZIfPcz6Vs5KTIOJf/vJULislwfDAbXN/8V9vIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Repository Index",title:"Helm Repository Index",src:"/ibm-gsi-cloudnative-journey/static/e56e80b22df94589b97039d92e048497/3cbba/ArtifactoryIndexyaml.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e56e80b22df94589b97039d92e048497/7fc1e/ArtifactoryIndexyaml.png 288w","/ibm-gsi-cloudnative-journey/static/e56e80b22df94589b97039d92e048497/a5df1/ArtifactoryIndexyaml.png 576w","/ibm-gsi-cloudnative-journey/static/e56e80b22df94589b97039d92e048497/3cbba/ArtifactoryIndexyaml.png 1152w","/ibm-gsi-cloudnative-journey/static/e56e80b22df94589b97039d92e048497/a0a4d/ArtifactoryIndexyaml.png 1726w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("li",{parentName:"ul"},"Expand a chart’s branch to see that the ",Object(r.b)("inlineCode",{parentName:"li"},"tgz")," file contains the chart directory structure\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABOElEQVQoz3WSC5KEIAxEvf9Nt1YFka8CvWlmcBxXY6WAInnpBAdtDGalofQC5wO2PSOkhBDFw8t9iO2c9h1p+/YQY8vjvRcfFu/wMyvMxsKlDV6ARgBeoMYZTGaCc1bAASVn0GqtX07LchclZ2D133GEWde3wh0M4eqSQ6oJRb5aaksqpfwDdufdwE0U2WZZsAo0BE8N7dKuFlEK0lqMjEdrjW3bDkD3A1hkk9ieBDvnWiKBWS53UZnfbbJlxlhrj5UCujewsAYmphQxTVMLIoDVuLIQnea9b9C7GfY5NoVJHoJJSimMMksqZEucYVfBBMK4p+ona8B89F+xyBzZNuqrZUJYrM+ZznO+ee0bYGlAttZ/gx7Y7Qp4BPIR2CaH3VvqwGvSGX7dn4Cf36K8z2eFT49wXZn7Bw4DYNvAmK+PAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Chart Structure",title:"Helm Chart Structure",src:"/ibm-gsi-cloudnative-journey/static/9a60c64e6931cfc7820d3a5592798643/3cbba/artifactoryuntar.png",srcSet:["/ibm-gsi-cloudnative-journey/static/9a60c64e6931cfc7820d3a5592798643/7fc1e/artifactoryuntar.png 288w","/ibm-gsi-cloudnative-journey/static/9a60c64e6931cfc7820d3a5592798643/a5df1/artifactoryuntar.png 576w","/ibm-gsi-cloudnative-journey/static/9a60c64e6931cfc7820d3a5592798643/3cbba/artifactoryuntar.png 1152w","/ibm-gsi-cloudnative-journey/static/9a60c64e6931cfc7820d3a5592798643/ac582/artifactoryuntar.png 1268w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("p",null,"Notice that each chart has its own URL in Artifactory, and index lists the URL for a chart."),Object(r.b)("h2",null,"Conclusion"),Object(r.b)("p",null,"The ",Object(r.b)(n.a,{name:"env",mdxType:"Globals"})," includes an artifact repository manager called Artifactory, which it uses to host a Helm repository.\nAs the CI pipeline builds the Helm chart for an application, it stores the chart in the Artifactory repository. When the ArgoCD pipeline deploys an application, it retrieves the chart from the Artifactory repository."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-artifact-management-index-mdx-9b6e503599c8ee1b913b.js.map