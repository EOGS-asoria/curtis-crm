import{j as s}from"./page-CweAZ6u7.js";import{h as t}from"./page-CTYwbZqa.js";import{u as a}from"./app-P50TBJSR.js";import"./index-Dm0ZtCym.js";function d(){const{cases_logs:r}=a(e=>e.users);return s.jsxs("div",{children:[s.jsx("div",{class:"text-gray-600 mb-2",children:s.jsx("p",{class:"font-medium text-lg",children:"Case Logs"})}),r.map((e,o)=>s.jsxs("div",{className:"my-3",children:[s.jsx("p",{children:e.user.name}),s.jsxs("p",{children:["Logged the case as ",e.case_status,s.jsx("br",{}),"On ",t(e.created_at).format("LLL")]}),s.jsxs("p",{children:["Remarks: ",e.remarks]})]}))]})}export{d as default};