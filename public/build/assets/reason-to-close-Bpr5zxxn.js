import{r as i,j as t,y as h}from"./page-Cja0WINH.js";import{L as g}from"./loading-DLb8OTQo.js";import{M as b}from"./modal-DJ-xVGoT.js";import{u as a}from"./app-Dg0WR6X9.js";import{r as v}from"./reason-BRIeM0DO.js";import{S as y}from"./select-BIswNqOu.js";import{e as k}from"./tickets-service-B0HV_HJ4.js";import{r as j}from"./routing-BzgBYGmF.js";import"./transition-CzKRX9N9.js";import"./dialog-DZg6L3QS.js";import"./index-2XY07wE6.js";function I({data:s}){const[c,o]=i.useState(!1),[u,r]=i.useState(!1),[n,m]=i.useState(""),{user:f}=a(e=>e.app),{ticket:d}=a(e=>e.tickets);async function l(e){if(e.preventDefault(),r(!0),n)try{await k(s,n,{...d,...f}),r(!1),h.visit(j("details"))}catch{r(!1)}else r(!1)}function p(e){m(e)}console.log("data.name",s.remarks);function x(e){e.preventDefault(),(window.location.pathname.split("/")[5]??"")=="details"?o(!0):s.fname==null||s.fname==""||s.fname==null||s.phone==null||s.phone==""||s.phone==null||s.remarks==null||s.remarks==""||s.remarks==null?alert("Name, Phone Number & Remarks must be required!"):o(!0)}return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:e=>x(e),className:"p-3 w-36 bg-red-500 text-white rounded-sm hover:to-red-600",children:"CLOSE"}),t.jsx(b,{open:c,setOpen:o,title:"Close Ticket",children:t.jsxs("form",{onSubmit:l,children:[t.jsxs("div",{className:"text-lg",children:["Ticket ID: ",s.ticket_id]}),"Are you sure you want to close the ticket?",t.jsx("div",{className:"my-4",children:t.jsx(y,{required:!0,onChange:p,name:"reason",value:n,label:"Reason to Close",errorMessage:"Reason is required",data:v.map(e=>({name:e.name,value:e.value}))})}),t.jsxs("div",{className:"flex border-gray-200 rounded-b  mt-3.5",children:[t.jsx("button",{onClick:l,type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ",children:u?t.jsx("div",{className:"py-1.5",children:t.jsx(g,{})}):"Yes, Proceed"}),t.jsx("button",{type:"button",className:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100     ",onClick:()=>o(!1),children:"Cancel"})]})]})})]})}export{I as default};