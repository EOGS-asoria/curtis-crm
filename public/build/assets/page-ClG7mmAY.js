import{r as o,j as t}from"./store-BLsqIzVE.js";import{h as a}from"./moment-Cl4UOzQZ.js";import{u as x,a as m}from"./app-Bjqn6gf7.js";import{c as g}from"./tickets-service-BwseCM9u.js";import{s as w}from"./customer-tickets-slice-Cfke7X1-.js";import{A as u}from"./agent-layout-BTxWsjKx.js";import{S as j}from"./skeleton-skMKIVzc.js";import y from"./agent-open-cases-pagination-section--kZ0gyrC.js";import"./user-service-CRyu2-kL.js";import"./search-ticket-section-DTfnwwkN.js";import"./modal-B1z7aczi.js";import"./transition-DGqxMoVZ.js";import"./dialog-Bm7dWKU6.js";import"./Cog8ToothIcon-BdtEBLdk.js";import"./layout-sidebar-list-component-CvoISxp4.js";import"./HomeIcon-C0et7MWZ.js";import"./TicketIcon-DFl-iNXO.js";import"./InboxArrowDownIcon-Cnn-5W_t.js";import"./InboxStackIcon-BAIxm4as.js";import"./EnvelopeIcon-COWxzWRl.js";import"./Pagination-CijLb67n.js";import"./compact-item-CFo22WZK.js";import"./useForceUpdate-C5eEUd2s.js";import"./index-DXnsrRsh.js";import"./motion-L0wigdRl.js";import"./index-CcMIJV2g.js";import"./index-JXWgXWzS.js";function G({auth:i}){const{tickets:l}=x(s=>s.customer_tickets),[n,c]=o.useState(!0),e=i.user,d=m(),h=window.location.pathname.split("/")[2];return o.useEffect(()=>{async function s(p){const r=await g(window.location.search,h,e.id);console.log("resres",r),d(w(r)),c(!1)}s()},[]),t.jsx(u,{account:e,children:t.jsxs("div",{className:"p-3 flex gap-5 flex-col justify-between w-full h-full",children:[n?t.jsx("div",{children:t.jsx(j,{})}):t.jsxs("div",{children:[t.jsxs("div",{class:"flex items-center my-3",children:[t.jsx("div",{class:"flex items-center ml-3",children:t.jsx("button",{title:"Reload",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})}),t.jsx("span",{class:"bg-gray-300 h-6 w-[.5px] mx-3"}),t.jsxs("div",{class:"flex items-center space-x-2",children:[t.jsx("button",{title:"Archive",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"})})}),t.jsx("button",{title:"Mark As Spam",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),t.jsx("button",{title:"Delete",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),t.jsx("span",{class:"bg-gray-300 h-6 w-[.5px] mx-3"}),t.jsxs("div",{class:"flex items-center space-x-2",children:[t.jsx("button",{title:"Mark As Read",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"})})}),t.jsx("button",{title:"Mark As Unread",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),t.jsx("button",{title:"Add Star",class:"text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})})]})]}),t.jsxs("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 ",children:[t.jsx("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 ",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Added On"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Due On"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Case File"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Email"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Action"})]})}),t.jsx("tbody",{children:l.map((s,p)=>t.jsxs("tr",{class:"bg-white border-b",children:[t.jsx("td",{class:"px-6 py-3",children:a(s.ticket.updated_at).format("LLL")}),t.jsx("td",{class:"px-6 py-3",children:a(s.ticket.updated_at).add(2,"days").format("LLL")}),t.jsx("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",children:s.ticket.ticket_id}),t.jsxs("td",{class:"px-6 py-3",children:[" ",s.ticket.email]}),t.jsx("td",{class:"px-6 py-3",children:t.jsx("button",{onClick:()=>window.open(`/agent/customer_details/${s.ticket.id}`,"_blank"),className:"text-white bg-green-500 px-5 py-1.5 rounded-md",children:"VIEW"})})]}))})]})]}),t.jsx("div",{className:"flex items-center justify-end",children:t.jsx(y,{})})]})})}export{G as default};