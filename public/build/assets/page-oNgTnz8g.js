import{r as s,s as e,j as o}from"./page-CweAZ6u7.js";import a from"./content-notes-comment-section-BH3yOiIN.js";import n from"./content-notes-textarea-section-BTCLqK2c.js";import{c}from"./tickets-thunk-B8hne1ut.js";import{u}from"./app-DRmlIzze.js";import{A as f}from"./administrator-layout-LAKlLIyK.js";import x from"./ticket-content-layout-kNSxtkt8.js";import{W as d}from"./warehouse-layout-O6a1CbOj.js";import{A as y}from"./asc-layout-C7GI9Rmx.js";import{A as l}from"./agent-layout-i23r7U-6.js";import{C}from"./curtis-layout-BaVXrkdw.js";import"./page-CTYwbZqa.js";import"./loading-2wh1A-cr.js";import"./tickets-service-Lhq1CC4v.js";import"./internals-service-B9kSbxh_.js";import"./index-Dm0ZtCym.js";import"./layout-sidebar-list-component-CV76CYwb.js";import"./HomeIcon-C5tor5XT.js";import"./UserGroupIcon-hx-x1HE9.js";import"./InboxArrowDownIcon-C5xkSaaL.js";import"./TicketIcon-ffkCofxs.js";import"./WrenchScrewdriverIcon-DJBOgMyD.js";import"./UserCircleIcon-Du_lfoFG.js";import"./search-ticket-section-ClcGoRVZ.js";import"./modal-DKAyK5v3.js";import"./transition-jVNLuPE9.js";import"./dialog-CIS6DQWk.js";import"./user-service-B_1tDVeV.js";import"./customer-tickets-thunk-CutpAgGn.js";import"./files-service-CtJ1q5XI.js";import"./skeleton-BEIoV8xK.js";import"./tickets-details-move-assign-section_-Su60uwNz.js";import"./tickets-details-move-assign-components-BvwvFyFH.js";import"./routing-BzgBYGmF.js";import"./InboxStackIcon-C7K024Yo.js";import"./CheckBadgeIcon-BFQFUvBY.js";import"./ArrowsRightLeftIcon-CEIUAp2W.js";import"./Cog8ToothIcon-CqNz9oxS.js";import"./EnvelopeIcon--EY3hyoA.js";function it({auth:r}){const{ticket:i}=u(p=>p.customer_tickets);s.useEffect(()=>{e.dispatch(c())},[i.id]);const t=r.user.role_id,m=t==1?f:t==3?d:t==4?y:t==5?l:C;return o.jsx(m,{account:r.user,children:o.jsxs(x,{children:[o.jsx(n,{}),o.jsx(a,{})]})})}export{it as default};