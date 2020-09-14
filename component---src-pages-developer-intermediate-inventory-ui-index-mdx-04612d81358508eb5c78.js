(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{SRrh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z"),r=n("T0C+");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o,s={},l=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),p={_frontmatter:s},m=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(m,c({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"Develop and deploy the UI component of the inventory application")),Object(a.b)("h4",null,"Setup"),Object(a.b)("p",null,"Get the initial project created and register the pipeline for automated builds. Detailed instructions for\neach of these steps can be found in the ",Object(a.b)("a",c({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app"}),"Deploying an App")," guide."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a new repository from the React UI Patterns ",Object(a.b)(r.a,{name:"template",mdxType:"Globals"})," into your Git org - ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/IBM/template-node-react/generate"}),"https://github.com/IBM/template-node-react/generate")),Object(a.b)("p",{parentName:"li"},"  In order to prevent naming collisions, name the repository ",Object(a.b)("inlineCode",{parentName:"p"},"inventory-management-ui-{your initials}")," replacing\n",Object(a.b)("inlineCode",{parentName:"p"},"{your initials}")," with your actual initials.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Clone the new repository to your machine")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," to install the project dependencies")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Go into the repository directory cloned and execute the following"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{}),"oc sync dev-{your initials} --dev\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Log into the cluster from the command-line then ",Object(a.b)("a",c({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app#register-the-app-in-a-devops-pipeline"}),"register the pipeline")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{}),"oc pipeline --tekton\n")),Object(a.b)("p",{parentName:"li"}," replacing ",Object(a.b)("inlineCode",{parentName:"p"},"{your initials}")," with your actual initials")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Execution of the above command. Give git credentials if prompted, and master as the git branch to use. When prompted for the pipeline, select igc-nodejs-v1-2-0.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open the ",Object(a.b)("a",c({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app#view-your-application-pipeline"}),"pipeline to see it running")))),Object(a.b)("h4",null,"Create the initial components"),Object(a.b)("p",null,"The React ",Object(a.b)(r.a,{name:"template",mdxType:"Globals"})," comes with a set UI components that implement 12 common UI Design Patterns. In the\ninitial UI, all of the components are included to create an interactive example of how they work.\nThe first step of building an application with the React ",Object(a.b)(r.a,{name:"template",mdxType:"Globals"})," is to remove those components\nfrom the menu and to create new components built from the pattern components."),Object(a.b)("p",null,"Based on the requirements of this first use case, we will create a StockItemList component based on\nthe TableList pattern."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Open a terminal and start the application in development mode to see the initial UI and the changes as we make them")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"npm run start:dev\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Access the running service. This service runs on port 3000.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Make a copy of the ",Object(a.b)("inlineCode",{parentName:"p"},"TableList")," pattern component from the ",Object(a.b)("inlineCode",{parentName:"p"},"pattern-component")," directory into the\n",Object(a.b)("inlineCode",{parentName:"p"},"components")," folder. Rename the file and the class inside to ",Object(a.b)("inlineCode",{parentName:"p"},"StockItemList"),"."))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/StockItemList.jsx",path:"client/src/components/StockItemList.jsx"}),'import React, { Component } from "react";\nimport {\n  StructuredListWrapper,\n  StructuredListRow,\n  StructuredListCell,\n  StructuredListHead,\n  StructuredListBody,\n  StructuredListInput,\n  Icon\n} from "carbon-components-react";\nimport { iconCheckmarkSolid } from "carbon-icons";\n\nimport Header from "../pattern-components/Header";\nimport "../pattern-components/patterns.scss";\n\nclass StockItemList extends Component {\n  ...\n}\n\nexport default StockItemList;\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Update UIShell.jsx"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"header")," variable to whatever name you want. “Big Blue Widgets” is used in the example"),Object(a.b)("li",{parentName:"ul"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"menuTitle")," to “Inventory Management”"),Object(a.b)("li",{parentName:"ul"},"Remove all the values from ",Object(a.b)("inlineCode",{parentName:"li"},"menuItems"))))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/UIShell.jsx",path:"client/src/components/UIShell.jsx"}),'class UIShell extends Component {\n  header = "Big Blue Widgets";\n  menuTitle = "Inventory Management";\n  menuItems = [\n    "Stock Items",\n  ];\n\n  ...\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Update UIShellBody.jsx"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Remove all of the pattern values from the ",Object(a.b)("inlineCode",{parentName:"li"},"components")," map and add one entry for Stock Item List. The value on the\nleft is the label that is displayed and the value on the right is the class that should be loaded (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},'"Stock Items": StockItemList'),").\n",Object(a.b)("strong",{parentName:"li"},"Note:")," The label value needs to match the one used on ",Object(a.b)("inlineCode",{parentName:"li"},"UIShell")),Object(a.b)("li",{parentName:"ul"},"Update the Use ",Object(a.b)("inlineCode",{parentName:"li"},"Stock Items")," as the default pattern name when none is given")))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/UIShellBody.jsx",path:"client/src/components/UIShellBody.jsx"}),'import React, {Component} from "react";\nimport "../pattern-components/patterns.scss";\n\nimport StockItemList from "./StockItemList";\n\nclass UIShellBody extends Component {\n  components = {\n    "Stock Items": StockItemList\n  };\n  defaultComponent = "Stock Items";\n\n  render() {\n    const PatternName = this.components[\n      this.props.patternName || this.defaultComponent\n    ];\n    return (\n      <div className="pattern-container">\n        <PatternName showDescription={true} />\n      </div>\n    );\n  }\n}\nexport default UIShellBody;\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"With the application running in the first terminal, open a second terminal in the repository directory\nand push the changes we’ve made to the repository")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Initial shell components"\ngit push\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Return to the ",Object(a.b)("a",c({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app#view-your-application-pipeline"}),"pipeline to see it running"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Refresh the browser from earlier (or follow the steps from before to use ",Object(a.b)("inlineCode",{parentName:"p"},"oc endpoints")," to open the browser). The changes we just made should be reflected in the UI."))),Object(a.b)("h4",null,"Update StockItemList contents"),Object(a.b)("p",null,"Now that we’ve created the initial components, we can start to customize the StockItemList to match\nthe data for our application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Start the application in development mode (if not already running) with ",Object(a.b)("inlineCode",{parentName:"p"},"npm run start:dev"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Update the ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and ",Object(a.b)("inlineCode",{parentName:"p"},"subtitle")," with values for our Stock Items view.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Update the ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," and ",Object(a.b)("inlineCode",{parentName:"p"},"data")," fields with the list of columns and sample data to match the UI. Set the ",Object(a.b)("inlineCode",{parentName:"p"},"formatters")," to ",Object(a.b)("inlineCode",{parentName:"p"},"{}")," for now."),Object(a.b)("p",{parentName:"li"},"  The value in the ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," array maps to one of the attributes in our data values\n(e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"name")," refers to the name attribute)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The result of these changes should look like the following:"))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/StockItemList.jsx",path:"client/src/components/StockItemList.jsx"}),'class StockItemList extends Component {\n    title = \'Stock Items\';\n    subtitle = \'This is the current inventory of items\';\n\n    columns = [\n      "name",\n      "description",\n      "stock",\n      "unitPrice",\n      "picture",\n      "manufacturer",\n    ];\n    formatters = {};\n    data = [\n      {\n        "name": "Item 1",\n        "description": "The first item",\n        "stock": 10,\n        "unitPrice": 100.0,\n        "picture": "test",\n        "manufacturer": "unknown",\n      },\n      {\n        "name": "Item 2",\n        "description": "The second item",\n        "stock": 15,\n        "unitPrice": 120.5,\n        "picture": "test1",\n        "manufacturer": "Apple",\n      },\n      {\n        "name": "Item 3",\n        "description": "The third item",\n        "stock": 20,\n        "unitPrice": 75.5,\n        "picture": "test1",\n        "manufacturer": "Sony",\n      }\n    ];\n\n    ...\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"View the new data in your local UI: ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Push the changes we’ve made to the repository"))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Updates the StockItemsList view"\ngit push\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Look at the Jenkins pipeline and the deployed app")),Object(a.b)("h4",null,"Add a service component to get mock Stock Items"),Object(a.b)("p",null,"So far, we’ve built a UI that displays a hard-coded set of data in a table. Eventually, we want to\ndisplay dynamic data provided from a database in the table. As a first step towards that goal, we\nneed to separate the UI logic from the logic that retrieves the data. We will do that with a service\ncomponent. For this first pass the service component will just return mock data."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a directory called ",Object(a.b)("inlineCode",{parentName:"p"},"services")," under the client/src folder")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"stock-item-mock.service.js")," in the service directory. Our\nStockItem service component will have a single asynchronous function called ",Object(a.b)("inlineCode",{parentName:"p"},"listStockItems()"),"\nthat returns a list of StockItems."))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/services/stock-item-mock.service.js",path:"client/src/services/stock-item-mock.service.js"}),"export class StockItemMockService {\n  async listStockItems() {\n    return [];\n  }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Implement the service by copying the data array from ",Object(a.b)("inlineCode",{parentName:"li"},"StockItemList")," and returning it in the function. You can add a call\nto ",Object(a.b)("inlineCode",{parentName:"li"},"timer()")," to simulate wait time")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/services/stock-item-mock.service.js",path:"client/src/services/stock-item-mock.service.js"}),'import timer from \'../util/timer\';\n\nexport class StockItemMockService {\n  async listStockItems() {\n    // wait 1 second before returning data\n    await timer(1000);\n\n    return [\n      {\n        "name": "Item 1",\n        "description": "The first item",\n        "stock": 10,\n        "unitPrice": 100.0,\n        "picture": "test",\n        "manufacturer": "unknown",\n      },\n      {\n        "name": "Item 2",\n        "description": "The second item",\n        "stock": 15,\n        "unitPrice": 120.5,\n        "picture": "test1",\n        "manufacturer": "Apple",\n      },\n      {\n        "name": "Item 3",\n        "description": "The third item",\n        "stock": 20,\n        "unitPrice": 75.5,\n        "picture": "test1",\n        "manufacturer": "Sony",\n      }\n    ];\n  }\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Update the components to pass the service in the properties")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/App.test.jsx",path:"client/src/App.test.jsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport {StockItemMockService} from \"./services/stock-item-mock.service\";\n\ndescribe('App', () => {\n  test('canary verifies test infrastructure', () => {\n     expect(true).toEqual(true);\n  });\n\n  test('renders without crashing', () => {\n    const div = document.createElement('div');\n    ReactDOM.render(<App stockService={new StockItemMockService()}/>, div);\n    ReactDOM.unmountComponentAtNode(div);\n  });\n});\n")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/App.jsx",path:"client/src/App.jsx"}),'import React, { Component } from "react";\nimport UIShell from "./components/UIShell";\nimport "./App.scss";\nimport {StockItemMockService} from "./services/stock-item-mock.service";\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n\n    this.stockService = props.stockService || new StockItemMockService();\n  }\n\n  render() {\n    return (\n      <div className="App">\n        <UIShell stockService={this.stockService}/>\n      </div>\n    );\n  }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/UIShell.jsx",path:"client/src/components/UIShell.jsx"}),'...\n\nclass UIShell extends Component {\n  ...\n\n  render() {\n    return (\n      <div>\n        <Header aria-label="IBM Platform Name">\n          <SkipToContent />\n          <HeaderName href="#" prefix="IBM">\n            {this.header}\n          </HeaderName>\n        </Header>\n        <SideNav aria-label="Side navigation">\n          <SideNavItems>\n            <SideNavMenu\n              defaultExpanded\n              icon={<Fade20 />}\n              title={this.menuTitle}\n            >\n              {this.renderSideNavItems()}\n            </SideNavMenu>\n          </SideNavItems>\n        </SideNav>\n        <Content id="main-content"><UIShellBody patternName={this.state.patternName} stockService={this.props.stockService} /></Content>\n      </div>\n    );\n  }\n}\nexport default UIShell;\n')),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/UIShellBody.jsx",path:"client/src/components/UIShellBody.jsx"}),'...\n\nclass UIShellBody extends Component {\n  components = {\n    "Stock Items": StockItemList\n  };\n  defaultComponent = "Stock Items";\n\n  render() {\n    const PatternName = this.components[\n      this.props.patternName || this.defaultComponent\n    ];\n    return (\n      <div className="pattern-container">\n        <PatternName showDescription={true} stockService={this.props.stockService} />\n      </div>\n    );\n  }\n}\nexport default UIShellBody;\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Update ",Object(a.b)("inlineCode",{parentName:"li"},"StockItemList")," to use the provided service")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=src/components/StockItemList.jsx",path:"src/components/StockItemList.jsx"}),"...\n\nclass StockItemList extends Component {\n  ...\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: [],\n      selectedRow: 0,\n    };\n  }\n\n  async componentDidMount() {\n\n    this.setState({\n      data: await this.props.stockService.listStockItems()\n    });\n  }\n\n  onRowClick = id => {\n    this.setState({ selectedRow: id });\n  };\n\n  ...\n}\nexport default StockItemList;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Update the render UI function in  ",Object(a.b)("inlineCode",{parentName:"li"},"StockItemList")," to display the values in UI")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/StockItemList.jsx",path:"client/src/components/StockItemList.jsx"}),'renderRow = (row, id) => {\n    return (\n      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>\n        <div>\n          <StructuredListInput\n            id={`row-${id}`}\n            value="row-0"\n            title="row-0"\n            name="row-0"\n            //defaultChecked={this.state.selectedRow === id}\n            checked={this.state.selectedRow === id}\n          />\n          <StructuredListCell>\n            <Icon\n              className="bx--structured-list-svg"\n              icon={iconCheckmarkSolid}\n            />\n          </StructuredListCell>\n        </div>\n        {this.columns.map(col => {\n          const format = this.formatters[col] || function(val) { return val; };\n\n          return (\n            <StructuredListCell key={col} className="simple-list-row">\n              {format(row[col])}\n            </StructuredListCell>\n          );\n        })}\n      </StructuredListRow>\n    );\n  };\n')),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/components/StockItemList.jsx",path:"client/src/components/StockItemList.jsx"}),'\n  render() {\n    const data = this.state.data;\n\n    return (\n      <div className="bx--grid pattern-container">\n        <Header\n          title={this.title}\n          subtitle={this.subtitle}\n        />\n        <div className="bx--row">\n          <div className="bx--col-xs-12">\n            <StructuredListWrapper selection border>\n              <StructuredListHead>\n                <StructuredListRow head>\n                  <StructuredListCell head />\n                  {this.columns.map(key => {\n                    return (\n                      <StructuredListCell head key={key}>\n                        {key.charAt(0).toUpperCase() +\n                          key.slice(1).replace(/([A-Z])/g, " $1")}\n                      </StructuredListCell>\n                    );\n                  })}\n                </StructuredListRow>\n              </StructuredListHead>\n\n              <StructuredListBody>\n                {data.map((row, i) => {\n                  return this.renderRow(row, i);\n                })}\n              </StructuredListBody>\n            </StructuredListWrapper>\n          </div>\n        </div>\n      </div>\n    );\n  }\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"View the new data in your local UI: ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Push the changes we’ve made to the repository"))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Adds a mock service"\ngit push\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Look at the Jenkins pipeline and the deployed app")),Object(a.b)("h4",null,"Add a service that calls the BFF"),Object(a.b)("p",null,"Now that we have a mock service that injects data, we can build an implementation of the service\nthat calls our BFF. For the service, we will use a package called ",Object(a.b)("inlineCode",{parentName:"p"},"superagent")," to make the calls\nto the BFF."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"With npm, install the ",Object(a.b)("inlineCode",{parentName:"li"},"superagent")," and ",Object(a.b)("inlineCode",{parentName:"li"},"@types/superagent")," dependencies")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"npm i -s superagent\nnpm i -D @types/superagent\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a service implementation in the ",Object(a.b)("inlineCode",{parentName:"li"},"services")," directory called ",Object(a.b)("inlineCode",{parentName:"li"},"stock-item.service.js"))),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/services/stock-item.service.js",path:"client/src/services/stock-item.service.js"}),"export class StockItemService {\n  async listStockItems() {\n    return [];\n  }\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add an implementation of ",Object(a.b)("inlineCode",{parentName:"li"},"listStockItems()")," that calls the BFF through the ",Object(a.b)("inlineCode",{parentName:"li"},"/api")," proxy")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/services/stock-item.service.js",path:"client/src/services/stock-item.service.js"}),"import * as superagent from 'superagent';\n\nexport class StockItemService {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl || '/api';\n  }\n\n  async listStockItems() {\n    return superagent\n      .get(this.baseUrl + '/stock-items')\n      .set('accept', 'application/json')\n      .then(res => {\n        console.log('Got response: ', res);\n        return res.body || [];\n      });\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," In dev mode, the proxy is configured in ",Object(a.b)("inlineCode",{parentName:"p"},"client/package.json"),". When running with the express\nserver, the proxy is configured in ",Object(a.b)("inlineCode",{parentName:"p"},"server/routers/api.js"),". By default, the value points to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:3001"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Update ",Object(a.b)("inlineCode",{parentName:"li"},"App.jsx")," to use the new service instead of the mock service.")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript",metastring:"path=client/src/App.jsx",path:"client/src/App.jsx"}),'import React, { Component } from "react";\nimport UIShell from "./components/UIShell";\nimport "./App.scss";\n\nimport {StockItemService} from "./services/stock-item.service";\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n\n    this.stockService = props.stockService || new StockItemService();\n  }\n\n  render() {\n    return (\n      <div className="App">\n        <UIShell stockService={this.stockService}/>\n      </div>\n    );\n  }\n}\nexport default App;\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Modify ",Object(a.b)("inlineCode",{parentName:"li"},"connectsTo")," property to the values.yaml file of the Helm chart. The value of the property should match the\nKubernetes service of the microservice. (For ",Object(a.b)(r.a,{name:"template",mdxType:"Globals"})," projects, the service name is the same as the name of the\napplication which is that same as the name of the repository.)")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"path=chart/base/values.yaml",path:"chart/base/values.yaml"}),"...\n\nconnectsTo: inventory-management-bff-{your initials}\n\n...\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add a new environment variable named ",Object(a.b)("inlineCode",{parentName:"li"},"API_HOST")," to the list of existing environment variables in deployment.yaml.\nThe value of this environment variable should come from the ",Object(a.b)("inlineCode",{parentName:"li"},"connectsTo")," value we defined. You can add\n",Object(a.b)("inlineCode",{parentName:"li"},"| quote")," to wrap the value in quotes in case the value is not formatted correctly.")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"path=chart/base/templates/deployment.yaml",path:"chart/base/templates/deployment.yaml"}),'  ...\n  env:\n    - name: INGRESS_HOST\n      value: ""\n    - name: PROTOCOLS\n      value: ""\n    - name: LOG_LEVEL\n      value: {{ .Values.logLevel | quote }}\n    - name: API_HOST\n      value: {{ printf "%s:80" .Values.connectsTo | quote }\n  ...\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Push the changes we’ve made to the repository")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Updates the StockItemsList view"\ngit push\n')),Object(a.b)("h2",null,"Summary"),Object(a.b)("p",null,"You have now completed the Micro App Guide demonstrating the Inventory solution."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-inventory-ui-index-mdx-04612d81358508eb5c78.js.map