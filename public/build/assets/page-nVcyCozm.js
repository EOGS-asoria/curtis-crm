import{r as m,j as t,y as c,G as n}from"./page-CweAZ6u7.js";import{A as p}from"./agent-layout-i23r7U-6.js";import l from"./customer-details-section-CEciElf3.js";import d from"./case-logs-section-C7nihomy.js";import g from"./log-case-section-CzYAEOOX.js";import{a as h}from"./app-DRmlIzze.js";import{g as u}from"./cases-log-service-Bst4UA1q.js";import{A as x}from"./ArrowLeftOutlined-pnb3AMi8.js";import"./user-service-B_1tDVeV.js";import"./search-ticket-section-ClcGoRVZ.js";import"./modal-DKAyK5v3.js";import"./transition-jVNLuPE9.js";import"./dialog-CIS6DQWk.js";import"./index-Dm0ZtCym.js";import"./tickets-service-Lhq1CC4v.js";import"./layout-sidebar-list-component-CV76CYwb.js";import"./HomeIcon-C5tor5XT.js";import"./TicketIcon-ffkCofxs.js";import"./InboxArrowDownIcon-C5xkSaaL.js";import"./EnvelopeIcon--EY3hyoA.js";import"./page-CTYwbZqa.js";import"./button-1iq2fvtm.js";import"./asyncToGenerator-BuJCPQbh.js";import"./compact-item-CHBqaovt.js";import"./index-DHBa1jUv.js";import"./reactNode-BWNDasVd.js";import"./render-Btzrk6Bh.js";function Q({auth:s}){const r=s.user,e=new URLSearchParams(window.location.search).get("email"),i=h();return m.useEffect(()=>{async function o(j){const a=await u(window.location.pathname.split("/")[3]);i(n(a.data))}o()},[]),t.jsx(p,{account:r,children:t.jsx("div",{className:"p-10 bg-gray-100 min-h-screen",children:t.jsx("div",{className:"container mx-auto",children:t.jsx("div",{className:"bg-white rounded-lg shadow-lg p-2 md:p-4",children:t.jsxs("div",{className:"grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3",children:[t.jsxs("div",{className:"md:col-span-2",children:[t.jsx(l,{email:e}),t.jsx(d,{})]}),t.jsxs("div",{className:"border-l p-2 md:pl-4 overflow-auto",children:[t.jsx("div",{className:"flex gap-4",children:t.jsxs("button",{onClick:()=>c.visit("/agent/direct_emails?page=1"),className:"bg-gray-300 hover:bg-gray-400 items-center justify-center font-bold w-full py-2 px-4 rounded",children:[t.jsx(x,{className:"mr-2"}),"Previous"]})}),t.jsx(g,{account:s.user,ticket_id:window.location.pathname.split("/")[3]})]})]})})})})})}export{Q as default};