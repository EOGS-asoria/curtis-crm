import{r as u,j as t,B as x,y as s}from"./store-BiYASIpe.js";import{L as n}from"./loading-Buu9gU6B.js";import{v as f}from"./email-template-service-snXPrXSR.js";import{u as r,a as g}from"./app-D_Lsnjbi.js";import{r as i}from"./routing-BzgBYGmF.js";function L(){const{selectedTemplate:d}=r(e=>e.tickets),{ticket:l}=r(e=>e.tickets),{user:m}=r(e=>e.app),[o,c]=u.useState(""),p=g();async function a(e){c(e),await f({...d,user:m,mark:e}),p(x({})),c(""),l.call_type=="CF-Warranty Claim"?e=="IW"||e=="OOW"?s.visit(i("decision")):s.visit(i("files")):l.call_type=="Parts"?e=="IW"?s.visit(i("internals")):e=="OOW"?s.visit(i("internals")):s.visit(i("files")):s.visit(i("files"))}return t.jsxs("div",{className:"py-4 flex gap-4",children:[t.jsx("button",{onClick:()=>a("IW"),className:"p-2 bg-green-500 text-white rounded-md hover:bg-green-600",children:o=="IW"?t.jsx(n,{}):"MARK VALID - IW"}),t.jsx("button",{onClick:()=>a("OOW"),className:"p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",children:o=="OOW"?t.jsx(n,{}):" MARK VALID - OOW"}),t.jsx("button",{onClick:()=>a("INVALID"),className:"p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600",children:o=="INVALID"?t.jsx(n,{}):"MARK INVALID"}),t.jsx("button",{onClick:()=>a("INCOMPLETE"),className:"p-2 bg-red-500 text-white rounded-md hover:bg-red-600",children:o=="INCOMPLETE"?t.jsx(n,{}):"MARK INCOMPLETE"})]})}export{L as default};