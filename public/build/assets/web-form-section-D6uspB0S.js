import{r as i,s as l,j as e,n as c}from"./store-CG9dSQPZ.js";import{I as t}from"./input-CGsAMw-c.js";import{a as g,u as o}from"./app-COa7aCXQ.js";import{S as d}from"./select-BgpG_vHV.js";import N from"./tickets-create-search-product-section-DMynzxUw.js";import{T as y}from"./textarea-CpH52A2g.js";import{g as C}from"./ticket-form-thunk-Dos6yX3F.js";import{c as x}from"./country-DOt7Eaoo.js";import{c as q,A as p}from"./autocomplete-BJ2b3z89.js";import{L as w}from"./loading-DwJ_eoJg.js";import{t as _}from"./tickets-create-thunk-DrRR-fQ-.js";import{g as M}from"./common-issues-thunk-DfZ2Jj94.js";import"./modal-DVQXHRoL.js";import"./transition-Tlb-Np9s.js";import"./dialog-LVXqgeYH.js";import"./MagnifyingGlassIcon-BdldyaQT.js";import"./product-search-CjdPs_Lo.js";import"./XMarkIcon-6cY1MMKH.js";import"./tickets-service-Cz8c3VCS.js";function Y(){const n=g(),{form:s}=o(r=>r.tickets_create),{common_issues:h}=o(r=>r.common_issues),[b,u]=i.useState(!1);i.useEffect(()=>{l.dispatch(M())},[]);function a(r,m){n(c({...s,[m]:r}))}i.useEffect(()=>{l.dispatch(C())},[]);async function f(r){r.preventDefault(),u(!0),n(c({...s,created_from:"WEB FORM",status:null,isSendEmail:!0,email:s.isHasEmail=="true"||s.isHasEmail==!0?s.email:null})),await l.dispatch(_()),u(!1),alert("Your ticket has been successfully filed."),window.location.href="https://www.curtisint.com/product-support/"}const j=r=>x.find(m=>m.value===r),{regions:v}=j(s.country??"CA");return e.jsxs("form",{onSubmit:f,className:" w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-3",children:[e.jsx("div",{className:"flex items-center justify-center font-black text-3xl",children:"Web Ticket Form"}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{required:!0,onChange:a,name:"fname",value:s.fname,label:"First Name",type:"text",errorMessage:"First Name is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{required:!0,onChange:a,name:"lname",value:s.lname,label:"Last Name",type:"text",errorMessage:"Last Name is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx("div",{className:"flex gap-4",children:e.jsx("div",{className:"basis-full",children:e.jsx(t,{required:!0,onChange:a,name:"email",value:s.email,label:"Email",type:"email",errorMessage:"Email is required"})})})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:a,name:"phone",required:!0,value:s.phone,label:"Phone Number",type:"phone",errorMessage:"Phone Number is required"})})]}),e.jsx("div",{className:" md:flex mb-3",children:e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:e.jsx(N,{})})}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:a,name:"item_number",required:!0,value:s.item_number,label:"Item Number",type:"text",errorMessage:"Item Number is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:a,name:"unit",required:!0,value:s.unit,label:"Item Unit",type:"text",errorMessage:"Item Unit is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:a,name:"brand",required:!0,value:s.brand,label:"Brand",type:"text",errorMessage:"Brand is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:a,name:"class",required:!0,value:s.class,label:"Item Class",type:"text",errorMessage:"Item Class is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-2/6 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:a,name:"serial_number",required:!1,value:s.serial_number,label:"Serial Number",type:"text",errorMessage:"Serial Number is required"})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(d,{onChange:a,name:"call_type",required:!0,value:s.call_type,label:"Call Type",errorMessage:"Call Type is required",data:q})}),e.jsx("div",{className:"md:w-2/6 px-3",children:e.jsx(t,{onChange:a,name:"purchase_date",value:s.purchase_date,label:"Purchase Date",type:"date",errorMessage:"Purchase Date is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/4 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:a,name:"zip_code",required:!0,value:s.zip_code,label:"Zip Code / Postal Code",type:"text",errorMessage:"Zip Code is required"})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(d,{onChange:a,name:"country",required:!0,value:s.country,label:"Country",errorMessage:"Country is required",data:x.map(r=>({name:r.name,value:r.value}))})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(d,{onChange:a,name:"state",required:!0,value:s.state,label:"State",errorMessage:"State is required",data:v})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(t,{onChange:a,name:"city",required:!0,value:s.city,label:"City",type:"text",errorMessage:"City is required"})})]}),e.jsxs("div",{className:"flex flex-col gap-4 mb-3",children:[e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:a,name:"address",value:s.address,label:"Address",type:"text"})}),e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:s.call_type=="Parts"?e.jsx(p,{defaultValue:s.issue??"[]",onChange:a,value:[{id:"Missing Parts",name:"Missing Parts"},{id:"Damage Parts",name:"Damage Parts"},{id:"Want to buy Parts",name:"Want to buy Parts"}]}):e.jsx(p,{defaultValue:s.issue??"[]",onChange:a,value:h.map(r=>({id:r.id,name:r.name}))})}),e.jsx("div",{className:"md:w-full flex px-3 mb-3 md:mb-0 gap-5",children:e.jsx("div",{className:"basis-full",children:e.jsx(y,{required:!0,onChange:a,name:"remarks",value:s.remarks,label:"Remarks",type:"text",errorMessage:"Remarks is required"})})}),e.jsx("div",{className:"flex gap-4 items-center justify-center",children:e.jsx("button",{className:"p-3 flex items-center justify-center w-36 bg-blue-500 text-white rounded-sm hover:to-blue-600",children:b?e.jsx("div",{className:"py-1.5",children:e.jsx(w,{})}):"SUBMIT"})})]})]})}export{Y as default};