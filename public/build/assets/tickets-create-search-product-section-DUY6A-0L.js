import{c as k,r,j as e}from"./page-Cja0WINH.js";import{I as P}from"./input-DIWVxFKX.js";import{M as v}from"./modal-DJ-xVGoT.js";import{u as m,a as _}from"./app-Dg0WR6X9.js";import{M as L}from"./MagnifyingGlassIcon-BA_qo1pp.js";const p=k({name:"tickets_create",initialState:{form:{isHasEmail:"true",country:"CA",state:"AB",call_type:"CF-Warranty Claim",isSendEmail:!0}},reducers:{setForm:(a,c)=>{a.form=c.payload}}}),{setForm:M}=p.actions;p.reducer;function I(){const{products:a}=m(t=>t.ticket_form),{form:c}=m(t=>t.tickets_create),[h,o]=r.useState(!1),[x,f]=r.useState(null),[i,l]=r.useState(!1),[j,C]=r.useState([]),y=_();async function g(t){try{l(!0);const s=a.slice(2),N=t===""?null:t.toLowerCase(),S=s.filter(n=>n.some(u=>typeof u=="string"&&u.toLowerCase().includes(N)));C(S),f(t),await new Promise(n=>setTimeout(n,500)),l(!1)}catch(s){console.error("An error occurred:",s),l(!1)}}const d=j.map(t=>({brand:t[0],item_number:t[1],unit:t[2],class:t[3]}));function b(t){y(M({...c,...t})),o(!1)}function w(t){o(!0)}return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>w(),className:"p-3 rounded-sm bg-blue-500 text-white hover:bg-blue-600",children:"Select Product"}),e.jsxs(v,{setOpen:o,open:h,title:"Products",width:"max-w-5xl",position:"items-start",children:[e.jsxs("div",{className:"pt-2 relative mx-auto text-gray-600 w-full",children:[e.jsx(P,{onChange:g,name:"product",value:x,label:"Search Product",type:"text",errorMessage:d.length==""&&"Products not found!"}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-4",children:e.jsx(L,{className:"h-6 text-blue-600"})})]}),e.jsx("div",{className:"relative my-2",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 ",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Brand"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Item Number"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Unit"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Item Class"})]})}),e.jsxs("tbody",{children:[e.jsx("tr",{className:"w-full ",children:e.jsx("th",{colSpan:4,className:"w-full",children:i&&e.jsx("div",{className:"flex h-52 w-full items-center justify-center",children:e.jsxs("svg",{className:"w-6 h-6 text-gray-300 animate-spin",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:[e.jsx("path",{d:"M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-900"})]})})})}),!i&&d.map((t,s)=>e.jsxs("tr",{onClick:()=>b(t),className:"bg-white hover:cursor-pointer border-b hover:bg-gray-200",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",children:t.brand}),e.jsx("td",{className:"px-6 py-4",children:t.item_number}),e.jsx("td",{className:"px-6 py-4",children:t.unit}),e.jsx("td",{className:"px-6 py-4",children:t.class})]},s))]})]})})]})]})}const B=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as T,B as a,M as s,p as t};