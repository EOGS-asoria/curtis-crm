import{r as m,j as e}from"./store-BLsqIzVE.js";import{A as u}from"./administrator-layout-CM7s7Vsl.js";import{W as f}from"./wysiwyg-CoskcL_t.js";import{s as x}from"./email-template-service-Rg9-R0s0.js";import{I as d}from"./input-sY_DG3lm.js";import{B as y}from"./button-CgNkLwJ6.js";import"./layout-sidebar-list-component-CvoISxp4.js";import"./HomeIcon-C0et7MWZ.js";import"./UserGroupIcon-CXLfR73L.js";import"./InboxArrowDownIcon-Cnn-5W_t.js";import"./TicketIcon-DFl-iNXO.js";import"./WrenchScrewdriverIcon-8h1kgI2t.js";import"./UserCircleIcon-DpHcdft_.js";import"./search-ticket-section-DTfnwwkN.js";import"./modal-B1z7aczi.js";import"./transition-DGqxMoVZ.js";import"./dialog-Bm7dWKU6.js";import"./tickets-service-BwseCM9u.js";import"./app-Bjqn6gf7.js";import"./Cog8ToothIcon-BdtEBLdk.js";import"./user-service-CRyu2-kL.js";import"./quill.snow-DVaSpX3h.js";import"./compact-item-CFo22WZK.js";import"./index-C7ZkuZnR.js";import"./reactNode-CUDZo4jG.js";function P(){const[t,r]=m.useState({template_name:"",template_text:" "}),[p,i]=m.useState(!1),[n,s]=m.useState(!1);async function o(a,c){t.id!==0&&await r({...t,[c]:a})}async function l(a){a.preventDefault(),s(!0),await x(t),i(!0),setTimeout(()=>{r({template_name:"",template_text:" "}),i(!1),s(!1)},2e3)}return e.jsx(u,{children:e.jsxs("form",{className:"m-4",onSubmit:()=>l(),children:[e.jsx("div",{className:"flex w-full text-2xl font-black items-center justify-center",children:"Create Email Template"}),p&&e.jsx("div",{className:"text-2xl text-green-500 font-black my-8",children:"Updated Successfully!"}),e.jsx(d,{onChange:o,name:"template_name",value:t.template_name,label:"Template Name",type:"text",errorMessage:"Template Name is required"}),e.jsx(f,{label:"WYSIWYG",name:"template_text",value:(t==null?void 0:t.template_text)??" ",onChange:o}),e.jsx("div",{className:"mt-14",children:e.jsx(y,{loading:n,onClick:l,type:"primary",size:"large",children:"Create Template"})})]})})}export{P as default};