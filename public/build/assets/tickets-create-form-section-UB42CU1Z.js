import{r as x,s as u,j as e,p,y as h}from"./page-CweAZ6u7.js";import{I as t}from"./input-BakRJ-kO.js";import{a as _,u as m}from"./app-C6h2GODW.js";import{S as r}from"./select-CbznLIxD.js";import k from"./tickets-create-search-product-section-CpiatlXM.js";import{T as w}from"./textarea-Clh5s7X1.js";import{g as q}from"./ticket-form-thunk-48OCYBWa.js";import{c as f}from"./country-Z91-nUi1.js";import{c as E}from"./call_type-Hx28cB9H.js";import{t as S}from"./tickets-create-thunk-B5PgIGob.js";import{L as P}from"./loading-2wh1A-cr.js";import{A as b}from"./autocomplete-qouRQ0Jn.js";import{w as T,p as F}from"./initial-templates-PKQd-G1K.js";import H from"./ticket-close-section-DQ-3F4Zs.js";import"./index-Dm0ZtCym.js";import"./modal-DKAyK5v3.js";import"./transition-jVNLuPE9.js";import"./dialog-CIS6DQWk.js";import"./MagnifyingGlassIcon-C5u2yVwS.js";import"./product-search-CjdPs_Lo.js";import"./tickets-service-De4luahQ.js";import"./XMarkIcon-YBI9RfOA.js";import"./reason-BRIeM0DO.js";function le(){const n=_(),{form:a}=m(l=>l.tickets_create),{user:d}=m(l=>l.app),{common_issues:j}=m(l=>l.common_issues),[c,o]=x.useState(!1);function s(l,i){n(p({...a,[i]:l}))}x.useEffect(()=>{u.dispatch(q())},[]);const v=T(a),y=F(a);async function N(l){l.preventDefault(),o(!0),n(p({...a,status:null,user:d,created_from:"AGENT FORM",email:a.isHasEmail=="true"||a.isHasEmail==!0?a.email:null,body:a.call_type=="Parts"?y:v}));const i=await u.dispatch(S());o(!1),d.role_id==1?h.visit("/administrator/tickets?search="+(i==null?void 0:i.ticket_id)):h.visit("/agent/tickets?search="+(i==null?void 0:i.ticket_id))}const g=l=>f.find(i=>i.value===l),{regions:C}=g(a.country??"");return e.jsxs("form",{onSubmit:N,className:" w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-3",children:[e.jsx("div",{className:"flex items-center justify-center font-black text-3xl",children:"Ticket Form"}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(t,{required:!1,onChange:s,name:"fname",value:a.fname,label:"First Name",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{required:!1,onChange:s,name:"lname",value:a.lname,label:"Last Name",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"basis-1/3",children:e.jsx(r,{onChange:s,name:"isHasEmail",required:!1,value:a.isHasEmail??"true",label:"Has Email?",data:[{value:!0,name:"Yes"},{value:!1,name:"No"}]})}),e.jsx("div",{className:"basis-full",children:(a.isHasEmail??"true")=="true"&&e.jsx(t,{required:!1,onChange:s,name:"email",value:a.email,label:"Email",type:"email"})})]})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"phone",required:!0,value:a.phone,label:"Phone Number",type:"phone"})})]}),e.jsx("div",{className:" md:flex mb-3",children:e.jsx("div",{className:" px-3 mb-3",children:e.jsx(k,{})})}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(t,{onChange:s,name:"item_number",required:!1,value:a.item_number,label:"Item Number",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"unit",required:!1,value:a.unit,label:"Item Unit",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(t,{onChange:s,name:"brand",required:!1,value:a.brand,label:"Brand",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"class",required:!1,value:a.class,label:"Item Class",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-2/6 px-3 mb-3",children:e.jsx(t,{onChange:s,name:"serial_number",required:!1,value:a.serial_number,label:"Serial Number",type:"text"})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(r,{onChange:s,name:"call_type",required:!1,value:a.call_type,label:"Call Type",data:E})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(t,{onChange:s,name:"purchase_date",required:!1,value:a.purchase_date,label:"Purchase Date",type:"date"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/4 px-3 mb-3",children:e.jsx(t,{onChange:s,name:"zip_code",required:!1,value:a.zip_code,label:"Zip Code / Postal Code",type:"text"})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(r,{onChange:s,name:"country",required:!1,value:a.country,label:"Country",data:f.map(l=>({name:l.name,value:l.value}))})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(r,{onChange:s,name:"state",required:!1,value:a.state,label:"State",data:C})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(t,{onChange:s,name:"city",required:!1,value:a.city,label:"City",type:"text"})})]}),e.jsxs("div",{className:"flex flex-col gap-4 mb-3",children:[e.jsx("div",{className:" px-3 mb-3",children:e.jsx(t,{onChange:s,name:"address",required:!1,value:a.address,label:"Address",type:"text"})}),e.jsx("div",{className:"my-5 px-3 mb-3",children:a.call_type=="Parts"?e.jsx(b,{defaultValue:"[]",onChange:s,value:[{id:"Missing Parts",name:"Missing Parts"},{id:"Damage Parts",name:"Damage Parts"},{id:"Want to buy Parts",name:"Want to buy Parts"}]}):e.jsx(b,{defaultValue:"[]",onChange:s,value:j.map(l=>({id:l.id,name:l.name}))})}),e.jsxs("div",{className:" flex px-3 mb-3 gap-5",children:[e.jsx("div",{className:"basis-3/4",children:e.jsx(w,{required:!0,onChange:s,name:"remarks",value:a.remarks,label:"Remarks",type:"text"})}),e.jsx("div",{className:"basis-1/4 flex items-center justify-center",children:e.jsx("div",{className:"flex items-center justify-center",children:a.email!==""&&a.email!==null&&a.email!==void 0&&(a.isHasEmail??"true")=="true"&&e.jsxs(e.Fragment,{children:[e.jsx("input",{id:"checked-checkbox",checked:a.isSendEmail??!0,onChange:l=>s(l.target.checked,"isSendEmail"),type:"checkbox",name:"isSendEmail",className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "}),e.jsx("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-black text-gray-900 ",children:"Send Initial Email"})]})})})]}),e.jsxs("div",{className:"flex gap-4 items-center justify-center",children:[e.jsx("button",{disabled:c,className:"p-3 flex items-center justify-center w-36 bg-blue-500 text-white rounded-sm hover:to-blue-600",children:c?e.jsx("div",{className:"py-1.5",children:e.jsx(P,{})}):"Open"}),e.jsx(H,{data:a})]})]})]})}export{le as default};