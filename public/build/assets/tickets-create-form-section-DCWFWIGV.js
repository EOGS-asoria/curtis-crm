import{r as x,s as p,j as e,v as h,y as f}from"./page-Cja0WINH.js";import{I as l}from"./input-DIWVxFKX.js";import{a as q,u as c}from"./app-Dg0WR6X9.js";import{S as m}from"./select-BIswNqOu.js";import E from"./tickets-create-search-product-section-DsamT6_N.js";import{T as S}from"./textarea-CMb904BZ.js";import{g as P}from"./ticket-form-thunk-DrfZCPW5.js";import{c as b}from"./country-Z91-nUi1.js";import{c as H}from"./call_type-Hx28cB9H.js";import{t as T}from"./tickets-create-thunk-DOSvU4xw.js";import{L as F}from"./loading-DLb8OTQo.js";import{A as j}from"./autocomplete-DMPZAaqJ.js";import{w as I,p as A}from"./initial-templates-PKQd-G1K.js";import{c as D}from"./tickets-service-B0HV_HJ4.js";import M from"./ticket-close-section-CCIHUGqn.js";import{s as L}from"./index-BvFJL0N5.js";import"./index-2XY07wE6.js";import"./modal-DJ-xVGoT.js";import"./transition-CzKRX9N9.js";import"./dialog-DZg6L3QS.js";import"./MagnifyingGlassIcon-BA_qo1pp.js";import"./product-search-CjdPs_Lo.js";import"./XMarkIcon-ztye6XaL.js";import"./reason-BRIeM0DO.js";import"./asyncToGenerator-BBnVhYbp.js";import"./render-CbybdLmA.js";import"./CheckCircleFilled-CnhmwoQ3.js";import"./pickAttrs-DrY3mkHu.js";import"./InfoCircleFilled-Brg_h0fd.js";import"./KeyCode-DNlgD2sM.js";import"./useZIndex-u452yQPw.js";function fe(){const d=q(),{form:a}=c(t=>t.tickets_create),{user:o}=c(t=>t.app),{common_issues:v}=c(t=>t.common_issues),[u,n]=x.useState(!1),[y,g]=L.useMessage();function s(t,r){d(h({...a,[r]:t}))}x.useEffect(()=>{p.dispatch(P())},[]);const N=I(a),_=A(a);async function C(t){if(t.preventDefault(),n(!0),(await D(a.serial_number)).result)y.open({type:"error",content:"Serial number is already exist!"}),n(!1);else{d(h({...a,status:null,user:o,created_from:"AGENT FORM",email:a.isHasEmail=="true"||a.isHasEmail==!0?a.email:null,body:a.call_type=="Parts"?_:N}));const i=await p.dispatch(T());n(!1),o.role_id==1?f.visit("/administrator/tickets?search="+(i==null?void 0:i.ticket_id)):f.visit("/agent/tickets?search="+(i==null?void 0:i.ticket_id))}}const k=t=>b.find(r=>r.value===t),{regions:w}=k(a.country??"");return e.jsxs("form",{onSubmit:C,className:" w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-3",children:[g,e.jsx("div",{className:"flex items-center justify-center font-black text-3xl",children:"Ticket Form"}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(l,{required:!1,onChange:s,name:"fname",value:a.fname,label:"First Name",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(l,{required:!1,onChange:s,name:"lname",value:a.lname,label:"Last Name",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"basis-1/3",children:e.jsx(m,{onChange:s,name:"isHasEmail",required:!1,value:a.isHasEmail??"true",label:"Has Email?",data:[{value:!0,name:"Yes"},{value:!1,name:"No"}]})}),e.jsx("div",{className:"basis-full",children:(a.isHasEmail??"true")=="true"&&e.jsx(l,{required:!1,onChange:s,name:"email",value:a.email,label:"Email",type:"email"})})]})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(l,{onChange:s,name:"phone",required:!0,value:a.phone,label:"Phone Number",type:"phone"})})]}),e.jsx("div",{className:" md:flex mb-3",children:e.jsx("div",{className:" px-3 mb-3",children:e.jsx(E,{})})}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(l,{onChange:s,name:"item_number",required:!1,value:a.item_number,label:"Item Number",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(l,{onChange:s,name:"unit",required:!1,value:a.unit,label:"Item Unit",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3",children:e.jsx(l,{onChange:s,name:"brand",required:!1,value:a.brand,label:"Brand",type:"text"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(l,{onChange:s,name:"class",required:!1,value:a.class,label:"Item Class",type:"text"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-2/6 px-3 mb-3",children:e.jsx(l,{onChange:s,name:"serial_number",required:!1,value:a.serial_number,label:"Serial Number",type:"text"})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(m,{onChange:s,name:"call_type",required:!1,value:a.call_type,label:"Call Type",data:H})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(l,{onChange:s,name:"purchase_date",required:!1,value:a.purchase_date,label:"Purchase Date",type:"date"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/4 px-3 mb-3",children:e.jsx(l,{onChange:s,name:"zip_code",required:!1,value:a.zip_code,label:"Zip Code / Postal Code",type:"text"})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(m,{onChange:s,name:"country",required:!1,value:a.country,label:"Country",data:b.map(t=>({name:t.name,value:t.value}))})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(m,{onChange:s,name:"state",required:!1,value:a.state,label:"State",data:w})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(l,{onChange:s,name:"city",required:!1,value:a.city,label:"City",type:"text"})})]}),e.jsxs("div",{className:"flex flex-col gap-4 mb-3",children:[e.jsx("div",{className:" px-3 mb-3",children:e.jsx(l,{onChange:s,name:"address",required:!1,value:a.address,label:"Address",type:"text"})}),e.jsx("div",{className:"my-5 px-3 mb-3",children:a.call_type=="Parts"?e.jsx(j,{defaultValue:"[]",onChange:s,value:[{id:"Missing Parts",name:"Missing Parts"},{id:"Damage Parts",name:"Damage Parts"},{id:"Want to buy Parts",name:"Want to buy Parts"}]}):e.jsx(j,{defaultValue:"[]",onChange:s,value:v.map(t=>({id:t.id,name:t.name}))})}),e.jsxs("div",{className:" flex px-3 mb-3 gap-5",children:[e.jsx("div",{className:"basis-3/4",children:e.jsx(S,{required:!0,onChange:s,name:"remarks",value:a.remarks,label:"Remarks",type:"text"})}),e.jsx("div",{className:"basis-1/4 flex items-center justify-center",children:e.jsx("div",{className:"flex items-center justify-center",children:a.email!==""&&a.email!==null&&a.email!==void 0&&(a.isHasEmail??"true")=="true"&&e.jsxs(e.Fragment,{children:[e.jsx("input",{id:"checked-checkbox",checked:a.isSendEmail??!0,onChange:t=>s(t.target.checked,"isSendEmail"),type:"checkbox",name:"isSendEmail",className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "}),e.jsx("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-black text-gray-900 ",children:"Send Initial Email"})]})})})]}),e.jsxs("div",{className:"flex gap-4 items-center justify-center",children:[(a==null?void 0:a.call_type)!=="General Inquiry"&&(a==null?void 0:a.call_type)!=="Others"&&e.jsx("button",{disabled:u,className:"p-3 flex items-center justify-center w-36 bg-blue-500 text-white rounded-sm hover:to-blue-600",children:u?e.jsx("div",{className:"py-1.5",children:e.jsx(F,{})}):"Open"}),e.jsx(M,{data:a})]})]})]})}export{fe as default};