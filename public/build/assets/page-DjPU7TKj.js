import{r as d,j as i}from"./page-CweAZ6u7.js";import n from"./layout-OjCSUHtR.js";import{h as u}from"./page-CTYwbZqa.js";import{u as x}from"./app-D_-1D7ZA.js";import f from"./handled-cases-list-section-DTFmo95E.js";import{C as j}from"./Collapse-DoeHqI3t.js";import{T as a}from"./index-EdXEaFCW.js";import"./administrator-layout-2dLig9T4.js";import"./layout-sidebar-list-component-CV76CYwb.js";import"./HomeIcon-C5tor5XT.js";import"./UserGroupIcon-hx-x1HE9.js";import"./InboxArrowDownIcon-C5xkSaaL.js";import"./TicketIcon-ffkCofxs.js";import"./WrenchScrewdriverIcon-DJBOgMyD.js";import"./UserCircleIcon-Du_lfoFG.js";import"./search-ticket-section-Bj5ztdRc.js";import"./modal-DKAyK5v3.js";import"./transition-jVNLuPE9.js";import"./dialog-CIS6DQWk.js";import"./index-Dm0ZtCym.js";import"./tickets-service-7nSwhJGZ.js";import"./user-service-B_1tDVeV.js";import"./skeleton-BEIoV8xK.js";import"./users-cases-pagination-section-CceAEQg7.js";import"./Pagination-DJ7OGbXG.js";import"./asyncToGenerator-BuJCPQbh.js";import"./useForceUpdate-Bx3W7tDo.js";import"./index-BBUFz-fT.js";import"./compact-item-CHBqaovt.js";import"./KeyCode-DNlgD2sM.js";import"./useZIndex-CjGH_iRa.js";import"./index-BsoQnBFX.js";import"./useIcons-DnjaHSn_.js";import"./motion-DJ7hMwu8.js";import"./index-DSbbDzQi.js";import"./reactNode-BWNDasVd.js";import"./collapse-C1MjllT7.js";import"./colors-Df3uN78M.js";import"./useClosable-BswVY9ij.js";import"./index-DHBa1jUv.js";import"./render-Btzrk6Bh.js";function mt(){const{tickets:o}=x(t=>t.customer_tickets);return d.useState([]),i.jsx(n,{children:i.jsx("div",{className:"mx-3",children:i.jsx(j,{accordion:!0,items:o==null?void 0:o.map((t,l)=>{var r,m,e,p,s;return{key:l,label:i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("div",{children:((m=(r=t.emails[0])==null?void 0:r.emails[0])==null?void 0:m.from)??"No Emails"}),i.jsxs("div",{children:[t.ticket.status=="CLOSED"?i.jsx(a,{color:"red",children:t.ticket.status}):i.jsx(a,{color:"green",children:t.ticket.status}),u((p=(e=t==null?void 0:t.emails[0])==null?void 0:e.emails[0])==null?void 0:p.date).format("LLL")]})]}),children:(s=t.emails[0])==null?void 0:s.emails.map(c=>i.jsx(f,{data:c}))}})})})})}export{mt as default};