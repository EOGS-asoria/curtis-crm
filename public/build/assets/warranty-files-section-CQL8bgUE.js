import{r as c,j as e,y as d}from"./store-BiYASIpe.js";import n from"./customer-tickets-bill-of-sale-section-CJyPEIMg.js";import x from"./customer-tickets-front-of-the-unit-section-wxZU8_KY.js";import p from"./customer-tickets-rear-of-the-unit-section-DM6I1JDv.js";import f from"./customer-tickets-readable-serial-section-f31HPamM.js";import u from"./customer-tickets-defect-issue-section-AJmZsals.js";import b from"./customer-tickets-clear-model-Ck8xMBnV.js";import j from"./customer-tickets-parts-model-DJg53z9o.js";import h from"./customer-tickets-receipt-model-B6IoIdmZ.js";import y from"./customer-tickets-serial-model-BxzHnU2a.js";import{u as l}from"./app-D_Lsnjbi.js";import{a as k}from"./files-service-a7hW2aLM.js";import _ from"./customer-tickets-destroy-DXNRCDIT.js";import{B as v}from"./button-C_v5SUoV.js";import"./details-contents-file-components-file-DQ8OZi6v.js";import"./customer-tickets-thunk-BZBbkGqG.js";import"./tickets-service-CJHvwIki.js";import"./compact-item-CXE2nw3L.js";import"./index-sWHT3kvJ.js";import"./collapse-C1MjllT7.js";import"./index-B7-gLqwI.js";import"./motion-L0wigdRl.js";import"./zoom-me1pAZx9.js";import"./useForceUpdate-BgXq0-Wt.js";import"./reactNode-DM5GGJMJ.js";import"./DeleteOutlined-DGI5gyMy.js";import"./addEventListener-DPC9GuYG.js";import"./roundedArrow-Cr6s27hV.js";import"./colors-B2Jz-uBo.js";import"./index-DnJEa495.js";function ee(){const{ticket:r}=l(o=>o.tickets),{filesData:t}=l(o=>o.customer_tickets),[i,s]=c.useState(!1);function a(){return r.isUploading=="true"||r.call_type=="CF-Warranty Claim"&&t.bill_of_sale&&t.front_of_the_unit&&t.rear_of_the_unit&&t.readable_serial_section&&t.defect_issue&&r.isUploading=="true"?!0:!!(r.call_type=="Parts"&&t.clear_model&&t.parts_model&&t.receipt_model&&t.serial_model&&r.isUploading=="true")}async function m(o){s(!0);try{await k({ticket_id:r.id}),d.visit(window.location.pathname),s(!1)}catch{s(!1)}}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3",children:a()?e.jsxs("div",{className:"text-green-600 text-2xl font-black border border-green-600 p-2 px-5",children:["Information Completed"," "]}):e.jsx("div",{className:"text-red-600 text-2xl font-black border border-red-600 p-2  px-5",children:"Incomplete Information"})}),r.call_type=="CF-Warranty Claim"&&e.jsxs("div",{className:"flex gap-2 border-b border-black my-5",children:[e.jsx("div",{className:"text-xl",children:" Detailed Explanation: "}),e.jsx("div",{className:"text-xl font-bold",children:r.explanation})]}),e.jsx("div",{className:"text-4xl font-black text-blue-600",children:"Warranty Files"}),e.jsx(n,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(x,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(p,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(f,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(u,{}),e.jsxs("div",{className:"flex flex-col gap-2 border-t border-black my-5",children:[e.jsx("div",{className:"text-xl font-black",children:"Destroy or Cut Cord Photo: "}),e.jsx("div",{className:"text-xl font-bold",children:e.jsx(_,{})})]}),e.jsx("div",{className:"text-4xl font-black text-blue-600  border-t-2 border-black my-6",children:"Part Files"}),r.call_type=="Parts"&&e.jsxs("div",{className:"flex gap-2 border-b border-black my-5",children:[e.jsx("div",{className:"text-xl",children:" Detailed Explanation: "}),e.jsx("div",{className:"text-xl font-bold",children:r.explanation})]}),e.jsx(y,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(h,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(j,{}),e.jsx("div",{className:"h-px my-8 border border-blue-500 w-full"}),e.jsx(b,{}),e.jsx(v,{loading:i,onClick:()=>m(),type:"primary",size:"large",className:"my-10 w-full",children:"UPLOAD PHOTOS"})]})}export{ee as default};