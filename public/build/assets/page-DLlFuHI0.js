import{r,j as t,y as c}from"./store-CG9dSQPZ.js";import o from"./layout-C48_pnwi.js";import{h as i}from"./moment-Cl4UOzQZ.js";import{u as p}from"./app-COa7aCXQ.js";import"./administrator-layout-CLB6vf_3.js";import"./layout-sidebar-list-component-D1w1LXnh.js";import"./HomeIcon-D3NASmBr.js";import"./UserGroupIcon-Bcmiblt-.js";import"./InboxArrowDownIcon-Cpqc9-Q3.js";import"./TicketIcon-B7JpbkTT.js";import"./UserCircleIcon-wHwQt26u.js";import"./search-ticket-section-B1XXE6HA.js";import"./modal-DVQXHRoL.js";import"./transition-Tlb-Np9s.js";import"./dialog-LVXqgeYH.js";import"./tickets-service-Cz8c3VCS.js";import"./Cog8ToothIcon-CmkM027i.js";import"./user-service-DohRET-i.js";import"./skeleton-BOu12Qhb.js";import"./users-cases-pagination-section-CzSmtmQQ.js";import"./Pagination-B8Dma2Vn.js";import"./compact-item-CzEt-_Oq.js";import"./index-Bj8hjlz8.js";function T(){const{tickets:e}=p(s=>s.customer_tickets);return r.useState([]),console.log("tickets",e),t.jsx(o,{children:t.jsx("div",{className:"mx-3",children:t.jsxs("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 ",children:[t.jsx("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 ",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Added On"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Due On"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Case File"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Email"}),t.jsx("th",{scope:"col",class:"px-6 py-3",children:"Action"})]})}),t.jsx("tbody",{children:e.map((s,a)=>t.jsxs("tr",{class:"bg-white border-b",children:[t.jsx("td",{class:"px-6 py-3",children:i(s.ticket.updated_at).format("LLL")}),t.jsx("td",{class:"px-6 py-3",children:i(s.ticket.updated_at).add(2,"days").format("LLL")}),t.jsx("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",children:s.ticket.ticket_id}),t.jsxs("td",{class:"px-6 py-3",children:[" ",s.ticket.email]}),t.jsx("td",{class:"px-6 py-3",children:t.jsx("button",{onClick:()=>c.visit(`${window.location.pathname.substring(0,30)}customer_details/${s.ticket.id}`),className:"text-white bg-green-500 px-5 p-1.5 rounded-md",children:"VIEW"})})]}))})]})})})}export{T as default};