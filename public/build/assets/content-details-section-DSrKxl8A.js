import{r as o,j as s,y as m,s as p}from"./store-0Qzhg5Cj.js";import{u as r}from"./app-iblUVWI8.js";import{u as g}from"./tickets-thunk-CnyLg-0a.js";import h from"./reason-to-close-CzoiWAAf.js";import{r as j}from"./routing-BzgBYGmF.js";import u from"./move-ticket-assignement-CbbQAm6y.js";import"./tickets-service-Bb19xu0O.js";import"./internals-service-B9kSbxh_.js";import"./loading-9B-ceNpQ.js";import"./modal-BB8Ob1Bx.js";import"./transition-BQz_x7pe.js";import"./dialog-B3BbVgJi.js";import"./select-BwWH4uaK.js";import"./initial-templates-5lqeSJoI.js";import"./compact-item-ChDpuMA4.js";import"./index-B3DuilCu.js";import"./reactNode-DWH_taMQ.js";import"./index-DKL3dOtB.js";import"./index-B7yFuZzI.js";import"./motion-L0wigdRl.js";import"./zoom-B5xuVmsw.js";import"./button-CssXxmN1.js";import"./useClosable-HxJLQi_H.js";import"./useIcons-7TvxhsOb.js";import"./index-B-Pf3FXT.js";function Z(){var a,d;const{ticket:e}=r(t=>t.tickets),{user:n}=r(t=>t.app),[f,i]=o.useState(!1);function c(t){n.role_id==1?m.visit(`/administrator/tickets/details/${e.id}/edit`):m.visit(`/agent/tickets/details/${e.id}/edit`)}async function x(t){if(confirm("Are you sure you want to open the ticket?")){i(!0);try{await p.dispatch(g(e.id,"OPEN")),i(!1),m.visit(j("details"))}catch{i(!1)}}}return s.jsxs("div",{className:"m-5 py-5",children:[s.jsxs("div",{className:"px-4 sm:px-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:"Ticket Details"}),s.jsxs("div",{className:"flex gap-5",children:[s.jsx(u,{}),s.jsx("button",{onClick:c,className:"bg-blue-500 p-2 text-white  hover:bg-blue-600  w-48",children:s.jsx("div",{className:"p-1 w-full flex items-center justify-center",children:"EDIT TICKET"})}),e.status=="CLOSED"?s.jsx("button",{onClick:x,className:"bg-violet-500 p-3 text-white  hover:bg-violet-600 w-48",children:"OPEN"}):s.jsx(h,{data:e})]})]}),s.jsx("h3",{className:"text-base font-semibold leading-7 text-red-600",children:e.move_status??""}),s.jsx("p",{className:"mt-1 max-w-2xl text-sm leading-6  font-medium text-gray-500",children:"Personal details and ticket."})]}),s.jsx("div",{className:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{className:"divide-y divide-gray-100",children:[s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Full name :"})," ",e.fname," ",e.lname]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Email :"})," ",e.email]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Phone :"})," ",(a=e.phone)==null?void 0:a.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Purchase Date :"})," ",e.purchase_date]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Store Name:"})," ",((d=e==null?void 0:e.receipt)==null?void 0:d.store)??"NA"]}),s.jsx("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0"})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Model # :"})," ",e.item_number]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Unit :"})," ",e.unit]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Serial # :"})," ",e.serial_number]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Item Type :"})," ",e.class]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900 flex",children:[s.jsx("b",{children:"Issue :"})," ",e.issue&&JSON.parse(e.issue).map((t,l)=>s.jsx("div",{className:"flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-blue-100 bg-blue-700 border border-blue-700",children:s.jsx("div",{className:"text-xs font-normal leading-none max-w-full flex-initial",children:t})},l))]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Resolution :"})," ",e.call_type]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Country :"})," ",e.country]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Zip Code / Postal :"})," ",e.zip_code]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Address :"})," ",e.address]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"State :"})," ",e.state]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"City :"})," ",e.city]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Authorized Service Center:"})," N/A"]})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsxs("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:[s.jsx("b",{children:"Remarks :"})," ",e.remarks]}),s.jsxs("dd",{className:"mt-1 text-sm leading-6  font-medium text-gray-700 sm:col-span-2 sm:mt-0",children:[s.jsx("b",{children:"Explanation :"})," ",e.explanation]})]})]})})]})}export{Z as default};