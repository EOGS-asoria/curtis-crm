import{r,s as i,j as t,y as s}from"./store-BLsqIzVE.js";import{A as p}from"./administrator-layout-CM7s7Vsl.js";import a from"./tickets-table-section-DrL0rEJj.js";import{g as o}from"./tickets-thunk-DtHnjS33.js";import{u as c}from"./app-Bjqn6gf7.js";import n from"./tickets-search-section-BkXYskBW.js";import l from"./tickets-export-file-section-_S-r4tCi.js";import d from"./ticket-filter-section-Byd9HwOs.js";import{g as h}from"./ticket-form-thunk-CbyH1ewW.js";import"./layout-sidebar-list-component-CvoISxp4.js";import"./HomeIcon-C0et7MWZ.js";import"./UserGroupIcon-CXLfR73L.js";import"./InboxArrowDownIcon-Cnn-5W_t.js";import"./TicketIcon-DFl-iNXO.js";import"./WrenchScrewdriverIcon-8h1kgI2t.js";import"./UserCircleIcon-DpHcdft_.js";import"./search-ticket-section-DTfnwwkN.js";import"./modal-B1z7aczi.js";import"./transition-DGqxMoVZ.js";import"./dialog-Bm7dWKU6.js";import"./tickets-service-BwseCM9u.js";import"./Cog8ToothIcon-BdtEBLdk.js";import"./user-service-CRyu2-kL.js";import"./main-BUnL3_0o.js";import"./moment-Cl4UOzQZ.js";import"./Table-CXj_H7OD.js";import"./compact-item-CFo22WZK.js";import"./index-DXnsrRsh.js";import"./addEventListener-Bl0DHK6V.js";import"./motion-L0wigdRl.js";import"./roundedArrow-BG6kAaXd.js";import"./reactNode-CUDZo4jG.js";import"./colors-CYU_NMCv.js";import"./index-CcMIJV2g.js";import"./index-JXWgXWzS.js";import"./index-C7ZkuZnR.js";import"./useForceUpdate-C5eEUd2s.js";import"./collapse-C1MjllT7.js";import"./button-CgNkLwJ6.js";import"./index-DlFD_j4O.js";import"./Pagination-CijLb67n.js";import"./index-DotnBgm1.js";import"./internals-service-B9kSbxh_.js";import"./index-kR89Ob8v.js";import"./DeleteOutlined-CTZG9w6j.js";import"./product-search-CjdPs_Lo.js";function st(){const{search:e}=c(m=>m.tickets);return r.useEffect(()=>{window.location.hash==""?i.dispatch(o(window.location.search)):i.dispatch(o("?search="+window.location.hash.slice(1)))},[e.page??""]),r.useEffect(()=>{i.dispatch(h())},[]),t.jsx(p,{children:t.jsxs("div",{className:"py-12",children:[t.jsxs("div",{className:"px-5 flex items-start justify-between gap-4",children:[t.jsx("button",{onClick:()=>s.visit("/administrator/tickets/create"),className:"p-2 bg-green-500 text-white hover:bg-green-600 rounded-md",children:"CREATE TICKET"}),t.jsx(l,{})]}),t.jsxs("div",{className:"m-3 flex items-center justify-between gap-3 ",children:[t.jsx(n,{}),t.jsx(d,{})]}),t.jsx("div",{className:"px-3",children:t.jsx(a,{})})]})})}export{st as default};