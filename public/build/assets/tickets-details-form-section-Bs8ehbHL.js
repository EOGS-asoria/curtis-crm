import{q as m,r as a,j as r,s as l}from"./store-0Qzhg5Cj.js";import c from"./customer-tickets-bill-of-sale-section-BueR79-A.js";import p from"./customer-tickets-front-of-the-unit-section-DxBaNSnH.js";import u from"./customer-tickets-rear-of-the-unit-section-CM6S-Li5.js";import d from"./customer-tickets-readable-serial-section-Dbw_50Cf.js";import f from"./customer-tickets-defect-issue-section-UDkv-S6H.js";import n from"./customer-tickets-update-explanation-CXyqFgbK.js";import{g as x,b}from"./customer-tickets-thunk-ClwpVTaM.js";import{a as j,u as h}from"./app-BTSTYVcR.js";import C from"./customer-tickets-clear-model-DiQU-MpO.js";import T from"./customer-tickets-parts-model-Cohtnxtl.js";import y from"./customer-tickets-receipt-model-B8692lMl.js";import k from"./customer-tickets-serial-model-C7gbeBa3.js";import"./loading-9B-ceNpQ.js";import"./image-view-CTMyvzfL.js";import"./TrashIcon-BYRyR17s.js";import"./transition-BQz_x7pe.js";import"./dialog-B3BbVgJi.js";import"./tickets-service-Bb19xu0O.js";import"./files-service-EugUQ0yZ.js";import"./textarea-B1AQylMR.js";function H(){const{url:t}=m(),i=j(),{ticket:e}=h(o=>o.customer_tickets);return a.useEffect(()=>{(async()=>{try{const s=await l.dispatch(x(t.split("/")[3]));console.log("res",s),i(b(s))}catch(s){console.error("Error fetching data:",s)}})()},[t]),r.jsxs(r.Fragment,{children:[r.jsx(n,{}),e!=null&&e.call_type&&(e==null?void 0:e.call_type)=="CF-Warranty Claim"?r.jsxs(r.Fragment,{children:[r.jsx(c,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(p,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(u,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(d,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(f,{})]}):r.jsxs(r.Fragment,{children:[r.jsx(C,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(T,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(y,{}),r.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),r.jsx(k,{})]})]})}export{H as default};