(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Gszj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z"),r=n("T0C+");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s,c={},p=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),l={_frontmatter:c},b=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use Pact to test your code’s API")),Object(a.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing"}),"contract-driven testing"),". ",Object(a.b)("a",o({parentName:"p"},{href:"https://docs.pact.io/"}),"Pact")," automates contract testing and enables it to be added to a continuous integration pipeline. The ",Object(a.b)(r.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"}),"Jenkins"),", ",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"}),"Tekton"),", etc.) includes a Pact stage. Simply by building your app using the CI pipeline, your code’s contract gets tested, just open the Pact UI to browse the results."),Object(a.b)("h2",null,"What is contract testing"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Contract testing")," is a testing discipline that ensures two applications (a consumer and\na provider) have a shared understanding of the interactions or the ",Object(a.b)("em",{parentName:"p"},"contract")," between them."),Object(a.b)("p",null,"The Pact framework has been selected for the provided tool set. Pact is a\nconsumer-driven contract testing framework. More details can be found here -\n",Object(a.b)("a",o({parentName:"p"},{href:"https://docs.pact.io/"}),"Pact overview"),". The framework has been built into the ",Object(a.b)(r.a,{name:"templates",mdxType:"Globals"}),"\nand a Pact Broker instance is provisioned in the cluster along with the other tools."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"consumer-driven contract testing")," it is the consumer who defines the ",Object(a.b)("inlineCode",{parentName:"p"},"contract")," in terms of the\nexpected interactions, the data structure, and the expected responses. That ",Object(a.b)("inlineCode",{parentName:"p"},"contract")," can then be used\non the consumer-side to mock the interactions and validate the consumer behavior. More importantly,\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"contract")," can be shared with the provider of the interaction so that the provider’s responses\ncan be validated to ensure the consumer’s expectations are met."),Object(a.b)("p",null,"In the Pact framework, the contract is called a ",Object(a.b)("inlineCode",{parentName:"p"},"pact"),". A ",Object(a.b)("inlineCode",{parentName:"p"},"pact")," consists of one or more\n",Object(a.b)("inlineCode",{parentName:"p"},"interactions"),". Each ",Object(a.b)("inlineCode",{parentName:"p"},"interaction")," has the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"Given a *state* of {state}\n\n*upon receiving* a {description} request\n\n*with request* parameters\n- HTTP method\n- path\n- headers\n- body\n\n*will respond with* values like\n- status\n- headers\n- body\n")),Object(a.b)("p",null,"where:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"{state} is an optional string that describes the initial state. This value can be used by the\nprovider during testing to make sure the preconditions are met"),Object(a.b)("li",{parentName:"ul"},"{description} is a unique description of the interaction"),Object(a.b)("li",{parentName:"ul"},"the request parameters can contain any values that describe the interaction"),Object(a.b)("li",{parentName:"ul"},"the response contains the relevant information for the consumer. The response values can be exact values\nor using matchers for type, regular expressions, etc")),Object(a.b)("h2",null,"Consumer"),Object(a.b)("p",null,"Using the Pact framework libraries in conjunction with the unit testing framework on the consumer, the\n",Object(a.b)("inlineCode",{parentName:"p"},"pact")," for the interaction between the consumer and provider is generated and validated. As part of the\npact test setup, a Pact server is started and configured with the expected interactions. All of the consumer\nservice invocations are directed at the Pact server which provides mock responses based on the\ninteractions defined by the ",Object(a.b)("inlineCode",{parentName:"p"},"pact"),". At the end of the test, if all the interactions completed successfully\na file containing the pact definition is generated."),Object(a.b)("p",null,"The following diagram gives an overview of the consumer interactions:\n",Object(a.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"607px"}}),"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAACC0lEQVQ4y42U544CMQyEef93AyEh8QOJ3ntdOvj0WZqV2exxFymQdZzx2J6kYoUxn8+tWq1avV63RqNhj8fDbreb1Wo163a71mq17HA4WNl4v99WOR6Ppsnhy+Vii8XCgVerldter5ctl0vb7/e22+3ser26nTOn08myLHMfRgXHZrNpk8nEmeA8m81sOp3adru15/Ppjuv12sbjsQeTX7/f9yzww+aARCIykVgziUh02J7PZ5+ssbF3v9/dj9RhzDfpOiA/sFMqAiEAUWEFWw5hY5/JHkQ2m01eP68hH0QuDqX6zUbdCJ4AEp1aDodDZ0szVBMOqTHYtI6gAsxThjaTFJg0AGBKwLrT6dhgMLB2u+2NIDBpUyZmwjB2UwMbbLBrSi6sxRi/Dx3Gw7FWMCgTbnHoXJIyEiAi616v56mRJh2GGXKhzhK/Ok39E0AJEyPspLPYEAaixpcrSF0JTgOTGrKBxgDT3R2NRvmVIgD/XEdkoquKf5TcB2DUE4cB44C++SdQUTJq5kfK1IaawYA1kgGw2Ailr/TEPkkZEPQmB5ogYcsxAkaGscs5oC74X1ePw5Ex61JAJACgBIwTLFlzc9SAMmErEw0HpKOwZFOvDSAAUE/eR9bY9JTxTTD2ZGM6IBsxRenxPy8QlwB9MulDLpvYhLLu6VVSl/VNBknK0ty37v3WZVKPfj+ayLNBucbMvAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact consumer interactions",title:"Pact consumer interactions",src:"/ibm-gsi-cloudnative-journey/static/39dbe818c7125f745c85a2314aa88d5b/4d9f3/PactFramework-consumer.png",srcSet:["/ibm-gsi-cloudnative-journey/static/39dbe818c7125f745c85a2314aa88d5b/7fc1e/PactFramework-consumer.png 288w","/ibm-gsi-cloudnative-journey/static/39dbe818c7125f745c85a2314aa88d5b/a5df1/PactFramework-consumer.png 576w","/ibm-gsi-cloudnative-journey/static/39dbe818c7125f745c85a2314aa88d5b/4d9f3/PactFramework-consumer.png 607w"],sizes:"(max-width: 607px) 100vw, 607px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(a.b)("p",null,"An example pact test on a Typescript consumer using the jest testing framework is provided below. It has\nbeen broken into several parts."),Object(a.b)("h3",null,"Pact server config"),Object(a.b)("p",null,"At the beginning of the test file, the pact server is configured and started in the\n",Object(a.b)("inlineCode",{parentName:"p"},"beforeAll()")," block. The ",Object(a.b)("inlineCode",{parentName:"p"},"afterAll()")," block finalizes the pacts by writing them out\nto a file and stopping the pact server."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"  const port = 1234;\n  const baseUrl = `http://localhost:${port}`;\n  let pact: Pact;\n  beforeAll(() => {\n    pact = new Pact({\n      consumer: consumerName,\n      provider: providerName,\n      logLevel: 'error',\n      port,\n    });\n\n    return pact.setup();\n  });\n\n  afterAll(() => {\n    return pact.finalize()\n      .catch(err => console.error('Error finalizing pact', err));\n  });\n")),Object(a.b)("h3",null,"Setup the service"),Object(a.b)("p",null,"Next, an instance of the component that will be tested is loaded and configured with the\npact server host and port as the base url used for the interactions. In this example,\nthe consumer is using the ",Object(a.b)("inlineCode",{parentName:"p"},"typescript-ioc")," library to inject the ",Object(a.b)("inlineCode",{parentName:"p"},"baseUrl")," config value\ninto the service."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"  let service: SampleApi;\n  beforeAll(() => {\n    Container\n      .bind(MyServiceConfig)\n      .provider({get: () => ({baseUrl})});\n    \n    service = Container.get(SampleService);\n  });\n")),Object(a.b)("h3",null,"Define and test the interaction"),Object(a.b)("p",null,"For each interaction with the provider, a test similar to the one provided below is created. In\nit, the Pact framework is used to define the interaction. The ",Object(a.b)("inlineCode",{parentName:"p"},"addInteraction()")," publishes the\ninteraction to the Pact server so that it can be used to provide a mock response when the\nrequest is made."),Object(a.b)("p",null,"The mock response is then used to validate the behavior of the component that is being tested.\nThe example below is simple and passes the provider response directly through the service api\nbut in more sophisticated examples the value would be transformed."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"  describe('given createWidget()', () => {\n    context('when called with valid request', () => {\n      const widgetRequest = {...};\n      const widgetResponse = {...};\n      \n      beforeEach(() => {\n        return pact.addInteraction({\n          uponReceiving: 'a valid widget request',\n          withRequest: {\n            method: 'POST',\n            path: '/widgets',\n            headers: {\n              'Content-Type': 'application/json',\n              'Accept': 'application/json',\n            },\n            body: widgetRequest,\n          },\n          willRespondWith: {\n            status: 200,\n            headers: {\n              'Content-Type': Matchers.regex({\n                generate: 'application/json', matcher: 'application/json.*'\n              }),\n            },\n            body: Matchers.like(widgetResponse),\n          },\n        });\n      });\n\n      test('then return 200 status', async () => {\n        expect(await service.createWidget(widgetRequest)).toEqual(widgetResponse);\n      });\n    });\n  });\n")),Object(a.b)("h2",null,"Provider"),Object(a.b)("p",null,"The provider uses the Pact framework to verify the running server against the ",Object(a.b)("inlineCode",{parentName:"p"},"pact"),", either\none started locally as part of the test or another instance running elsewhere. The interactions\nin the pact are sent to the provider by a mock consumer in the Pact framework and the results\nare verified against the expected results defined by the pact."),Object(a.b)("p",null,"As an optional configuration for the verification process, an endpoint can be provided that handles\nthe state information in the pact in order to ensure the preconditions for the test are met. (E.g.\nstate=“given an empty database”). In order for these tests to be repeatable, it is often advisable\nto stand up a clean backend to run the pact tests when the tests start and tear it down when the\ntests are completed. For example, if a provider interacts with a Cloudant database point the\ntest provider at a new database instance for the tests."),Object(a.b)("p",null,"The following diagram shows the interactions for the pact provider:\n",Object(a.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"401px"}}),"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAABp0lEQVQ4y52U6aoCMQyF5/3fwT8+kKKiKIrguOG+jrtGvkAutXaq3kBop+mcnqQnTer1urTbbanVajKdTmW32wn2eDzEN1tjXCwWMpvNZDAYSJqmkmWZFItFSarVqpRKJfXtdiv7/f4rQPZuNhsl02q15Ha7SaFQkAQATmPECcQAbf14PMrhcFBm5/NZRzwheLlcgkw+McUAc78TPgyQ+f1+f2Hig/vrp9NJ/7E1ZUjKnBRjkhfjvzfA4XAozWZTut2udDodHalPDDQKCAC3BX2Kjbub3FT91IOAsPJT9usV8twaIkwT9K8G2BvgZDJR1VM30yNz1iuVinZRo9FQnVkcR9z9fl+u1+s74Hq9VlGTOo6USMcOYWTN4ran1+tpx7wA0sNcxH8MsCCg+yi4RV8ul/oAwNaNW93m87lm9wI4Go1Ui6RAauawtheFtAE1J0baALqa/WNoDGIWEjkkXHkpICxwajEej7UVcbusWE8HdchNlctlZYomAQKYOSnliTu3U2i71Wr1U6ofW89u2X2+Qu33FSDs3Dcx9mz5gMEaumDfWh7DJygAuIf0+7XPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact provider interactions",title:"Pact provider interactions",src:"/ibm-gsi-cloudnative-journey/static/5b87a6af5243f5b34ff2164e1f6370d6/bcc02/PactFramework-provider.png",srcSet:["/ibm-gsi-cloudnative-journey/static/5b87a6af5243f5b34ff2164e1f6370d6/7fc1e/PactFramework-provider.png 288w","/ibm-gsi-cloudnative-journey/static/5b87a6af5243f5b34ff2164e1f6370d6/bcc02/PactFramework-provider.png 401w"],sizes:"(max-width: 401px) 100vw, 401px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(a.b)("h2",null,"Pact Broker"),Object(a.b)("p",null,"One of the underpinning requirements of the pact verification process is the ability to make the\npact files generated by the consumer available to the provider. When the pact verification is run\nin an automated pipeline this is difficult without an intermediary. Within the Pact framework,\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"Pact Broker")," provides the facility for consumers and providers to share the pact definitions\nwith minimal dependencies between the systems."),Object(a.b)("p",null,"Additionally, the Pact Broker provides a place to define webhooks to trigger the provider build\nprocess when the pact definition changes and a way record and visualise the results of the\nverification process. The high-level interaction is shown below:\n",Object(a.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"481px"}}),"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz3WQ62qDQBBG9/1fpvRXQ1vohTYN5ioGG5oGzaVqvMaouNlVv7o2yhLSgWFFZg7nGzLbTTA2FUw3Y4y3ClKaQFRVVVffsizB2QkrO4O2OUE1EsyMFPoPQ2/ogCgrBY+TB/QX71CtKRIJeAljjCFJkrqP+DRDLOwSH3Mbb+oOy32Fu9EeZB2a2EQmzMDAwtJBOf3XUMDaCpIChkthujl2YYFtwKCuDiCQilLatGzYAvM8b4BhGCKO4+ZflqbgnJ23/+aIvEhPFJ7ndQstjHOOtIYV9ev7PtIGxDtjcdeWQeRjR1EEy7IaYJplnbn4Ls5zbcnx22qAsolceRBgPRrC0nW4cw359xKZadSWrIkv4gpb27bhOE6XishHb1roC+O9A3uoQNc0rF+eEL8+wx/0kRwOyGpjkUhEF6bibW9PLpW7u3kujsoAX/c9zG9v4NZAps9RFbwdvhr5F3HvszutCAiZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact broker interactions",title:"Pact broker interactions",src:"/ibm-gsi-cloudnative-journey/static/a7a882a6504c5c1ab5ba0e4cf7d13345/64c99/PactFramework-pactbroker.png",srcSet:["/ibm-gsi-cloudnative-journey/static/a7a882a6504c5c1ab5ba0e4cf7d13345/7fc1e/PactFramework-pactbroker.png 288w","/ibm-gsi-cloudnative-journey/static/a7a882a6504c5c1ab5ba0e4cf7d13345/64c99/PactFramework-pactbroker.png 481w"],sizes:"(max-width: 481px) 100vw, 481px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(a.b)("h2",null,Object(a.b)(r.a,{name:"templates",mdxType:"Globals"})),Object(a.b)("p",null,"The ",Object(a.b)(r.a,{name:"templates",mdxType:"Globals"})," have been built with the frameworks necessary to generate and publish pacts for\napi consumers and verify against pacts and publish the results for api providers. The pipelines\nwill do all the publishing and verification against Pact Broker if an instance of Pact Broker has\nbeen configured within the cluster."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can review you pact contracts using the ",Object(a.b)("strong",{parentName:"p"},"Pact")," Dashboard.app")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use the ",Object(a.b)("a",o({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/getting-started/dashboard"}),Object(a.b)(r.a,{name:"dashboard",mdxType:"Globals"}))," to open the ",Object(a.b)("strong",{parentName:"p"},"Pact")," dashboard"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-contract-testing-index-mdx-96ae60415a5f63edf2c4.js.map