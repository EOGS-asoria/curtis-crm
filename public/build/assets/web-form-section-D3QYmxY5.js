import{r as l,s as n,j as e,v as c}from"./page-Cja0WINH.js";import{I as t}from"./input-DIWVxFKX.js";import{a as w,u}from"./app-Dg0WR6X9.js";import{S as x}from"./select-BIswNqOu.js";import C from"./tickets-create-search-product-section-DsamT6_N.js";import{T as q}from"./textarea-CMb904BZ.js";import{g as _}from"./ticket-form-thunk-DrfZCPW5.js";import{c as p}from"./country-Z91-nUi1.js";import{L as P}from"./loading-DLb8OTQo.js";import{A as h}from"./autocomplete-DMPZAaqJ.js";import{t as M}from"./tickets-create-thunk-DOSvU4xw.js";import{g as S}from"./common-issues-thunk-CmzzaPm8.js";import{w as k,p as E}from"./initial-templates-PKQd-G1K.js";import"./index-2XY07wE6.js";import"./modal-DJ-xVGoT.js";import"./transition-CzKRX9N9.js";import"./dialog-DZg6L3QS.js";import"./MagnifyingGlassIcon-BA_qo1pp.js";import"./product-search-CjdPs_Lo.js";import"./XMarkIcon-ztye6XaL.js";import"./tickets-service-B0HV_HJ4.js";function ee(){const d=w(),{form:a}=u(r=>r.tickets_create),{common_issues:b}=u(r=>r.common_issues),[f,o]=l.useState(!1),i=(r=>new URLSearchParams(window.location.search).get(r))("call_type");console.log("window.location",i),l.useEffect(()=>{i=="CF-Warranty Claim"||i=="Parts"||(window.location.href="https://www.curtisint.com/product-support/"),n.dispatch(S())},[]);function s(r,m){d(c({...a,[m]:r}))}l.useEffect(()=>{n.dispatch(_())},[]);const j=k(a),v=E(a);async function g(r){r.preventDefault(),o(!0),d(c({...a,created_from:"WEB FORM",status:null,isSendEmail:!0,call_type:i,email:a.isHasEmail=="true"||a.isHasEmail==!0?a.email:null,body:a.call_type=="Parts"?v:j})),await n.dispatch(M()),o(!1),alert("Your ticket has been successfully filed."),window.location.href="https://www.curtisint.com/product-support/"}const N=r=>p.find(m=>m.value===r),{regions:y}=N(a.country??"CA");return e.jsxs("form",{onSubmit:g,className:" w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-center font-black text-3xl",children:["Web Ticket Form (",`${i}`,")"]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{required:!0,onChange:s,name:"fname",value:a.fname,label:"First Name",type:"text",errorMessage:"First Name is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{required:!0,onChange:s,name:"lname",value:a.lname,label:"Last Name",type:"text",errorMessage:"Last Name is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx("div",{className:"flex gap-4",children:e.jsx("div",{className:"basis-full",children:e.jsx(t,{required:!0,onChange:s,name:"email",value:a.email,label:"Email",type:"email",errorMessage:"Email is required"})})})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"phone",required:!0,value:a.phone,label:"Phone Number",type:"phone",errorMessage:"Phone Number is required"})})]}),e.jsx("div",{className:" md:flex mb-3",children:e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:e.jsx(C,{})})}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:s,name:"item_number",required:!0,value:a.item_number,label:"Item Number",type:"text",errorMessage:"Item Number is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"unit",required:!0,value:a.unit,label:"Item Unit",type:"text",errorMessage:"Item Unit is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:s,name:"brand",required:!0,value:a.brand,label:"Brand",type:"text",errorMessage:"Brand is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"class",required:!0,value:a.class,label:"Item Class",type:"text",errorMessage:"Item Class is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/2 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:s,name:"serial_number",required:!1,value:a.serial_number,label:"Serial Number",type:"text",errorMessage:"Serial Number is required"})}),e.jsx("div",{className:"md:w-1/2 px-3",children:e.jsx(t,{onChange:s,name:"purchase_date",value:a.purchase_date,label:"Purchase Date",type:"date",errorMessage:"Purchase Date is required"})})]}),e.jsxs("div",{className:" md:flex mb-3",children:[e.jsx("div",{className:"md:w-1/4 px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:s,name:"zip_code",required:!0,value:a.zip_code,label:"Zip Code / Postal Code",type:"text",errorMessage:"Zip Code is required"})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(x,{onChange:s,name:"country",required:!0,value:a.country,label:"Country",errorMessage:"Country is required",data:p.map(r=>({name:r.name,value:r.value}))})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(x,{onChange:s,name:"state",required:!0,value:a.state,label:"State",errorMessage:"State is required",data:y})}),e.jsx("div",{className:"md:w-1/4 px-3",children:e.jsx(t,{onChange:s,name:"city",required:!0,value:a.city,label:"City",type:"text",errorMessage:"City is required"})})]}),e.jsxs("div",{className:"flex flex-col gap-4 mb-3",children:[e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:e.jsx(t,{onChange:s,name:"address",value:a.address,label:"Address",type:"text"})}),e.jsx("div",{className:"md:w-full px-3 mb-3 md:mb-0",children:a.call_type=="Parts"?e.jsx(h,{defaultValue:a.issue??"[]",onChange:s,value:[{id:"Missing Parts",name:"Missing Parts"},{id:"Damage Parts",name:"Damage Parts"},{id:"Want to buy Parts",name:"Want to buy Parts"}]}):e.jsx(h,{defaultValue:a.issue??"[]",onChange:s,value:b.map(r=>({id:r.id,name:r.name}))})}),e.jsx("div",{className:"md:w-full flex px-3 mb-3 md:mb-0 gap-5",children:e.jsx("div",{className:"basis-full",children:e.jsx(q,{required:!0,onChange:s,name:"remarks",value:a.remarks,label:"Remarks",type:"text",errorMessage:"Remarks is required"})})}),e.jsx("div",{className:"flex gap-4 items-center justify-center",children:e.jsx("button",{className:"p-3 flex items-center justify-center w-36 bg-blue-500 text-white rounded-sm hover:to-blue-600",children:f?e.jsx("div",{className:"py-1.5",children:e.jsx(P,{})}):"SUBMIT"})})]})]})}export{ee as default};