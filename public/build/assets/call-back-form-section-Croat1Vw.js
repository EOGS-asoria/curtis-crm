import{r as i,j as e,w as d,y as m}from"./store-BLsqIzVE.js";import{T as y}from"./textarea-UjtR28OD.js";import{c as h}from"./email-template-service-Rg9-R0s0.js";import{u as p,a as w}from"./app-Bjqn6gf7.js";import{L as u}from"./loading-B6ZW1whT.js";import{r as f}from"./routing-BzgBYGmF.js";import{Q as v}from"./QueueListIcon-D8ApgJyC.js";function O(){const{internals:N,ticket:a}=p(s=>s.tickets),{user:c}=p(s=>s.app),[n,j]=i.useState(""),r=w(),[g,o]=i.useState(!1),[b,x]=i.useState(!1);async function l(s){if(s=="ORDER PLACED"){o(!0);const t=await h({status:"REPLACEMENT PARTS",user:c,ticket:a,callback_notes:n});r(d(t.status)),o(!1),m.visit(f("replacement_parts"))}else if(s=="CANCEL ORDER"){x(!0);const t=await h({status:"CLOSED",user:c,ticket:a,callback_notes:n});r(d(t.status)),x(!1),m.visit(f("files"))}else alert("No Calls/Answer, Stay here.")}return e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl mt-5",children:e.jsx("b",{children:"This ticket will be closed after callback"})}),e.jsx("section",{className:"container bg-white",children:e.jsxs("form",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{type:"button",className:"flex items-center rounded-md mt-3 bg-white px-2.5 py-1.5 text-sm text-blue-500 font-semibold shadow-sm ring-1 ring-inset ring-blue-500",children:[e.jsx(v,{className:"h-5"}),e.jsx("span",{children:"Valid OOW"})]}),e.jsx("i",{"aria-hidden":"true",className:"v-icon notranslate v-icon--left mdi mdi-list-status theme--light"})]}),e.jsxs("p",{children:["Parts Validation Notes:",e.jsxs("Notes:div",{className:"text-red-500",children:[" ",a.validation_notes]})]}),e.jsxs("p",{children:["Internal Notes:",e.jsxs("Notes:div",{className:"text-red-500",children:[" ",a.internal_notes]})]}),e.jsx("div",{className:"flex gap-3 w-full",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 ",children:[e.jsx("thead",{className:"",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left ",children:e.jsx("button",{className:"flex items-center gap-x-3 focus:outline-none",children:e.jsx("span",{children:"Name"})})}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left ",children:"Part Number"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left ",children:"Location"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left ",children:"Cost"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left ",children:"Status"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200 ",children:N.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h2",{className:"font-medium text-gray-800",children:s.name})})}),e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{className:"inline  py-1 text-sm font-normal rounded-full",children:s.part_number})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h4",{className:"text-gray-700 ",children:s.location})})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h4",{className:"text-gray-700 ",children:s.cost})})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h4",{className:"text-gray-700 ",children:s.status})})})]},t))})]})}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:" mb-2",children:"Remarks/Notes:"}),e.jsx(y,{value:n,onChange:s=>j(s),type:"text",className:"w-full"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>l("ORDER PLACED"),type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 ",children:g?e.jsx(u,{}):"ORDER PLACED"}),e.jsx("button",{onClick:()=>l("CANCEL ORDER"),type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 ",children:b?e.jsx(u,{}):"CANCEL ORDER"}),e.jsx("button",{onClick:()=>l("NO ANSWER"),type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ",children:"CALLBACK - NO ANSWER"})]})]})})]})}export{O as default};