import{r as d,j as t,C as m,z as M,y as v}from"./store-BiYASIpe.js";import{I as i}from"./input-Nry_gRi6.js";import{g as R}from"./fedex-rate-service-C5N1557v.js";import{u as g,a as F}from"./app-D_Lsnjbi.js";import{L as C}from"./loading-Buu9gU6B.js";import{g as E}from"./receipt-service-DS-NZMNE.js";import{g as W,s as U}from"./refund-service-CBZ3piz4.js";import{S as q}from"./select-sKYrE21b.js";import{W as $}from"./wysiwyg-BUCi-FI6.js";import{r as N}from"./routing-BzgBYGmF.js";import{G as L,S as P}from"./Squares2X2Icon-B0m7973v.js";import"./quill.snow-C3LYc13O.js";function Q(){const{refund:e,ticket:a}=g(s=>s.tickets),{user:w}=g(s=>s.app),[p,h]=d.useState(!1),[S,u]=d.useState(!1),l=F(),{email_templates:x}=g(s=>s.email_templates);d.useEffect(()=>{async function s(){var _,y,f,j;const c=(await E(a.id)).status,o=await W(a.id);l(m({...e,instruction:(o==null?void 0:o.instruction)??" ",shipping_cost:String((o==null?void 0:o.shipping_cost)??0),estimated_cost:String((o==null?void 0:o.estimated_cost)??0),cheque_no:String(((_=a==null?void 0:a.refund)==null?void 0:_.cheque_no)??0),cheque_amount:String(((y=a==null?void 0:a.refund)==null?void 0:y.cheque_amount)??0),mail_date:String(((f=a==null?void 0:a.refund)==null?void 0:f.mail_date)??""),...c,id:a.id,template_text:null,notes:((j=a==null?void 0:a.refund)==null?void 0:j.notes)??" "}))}s()},[a.id]);function r(s,n){n=="wysiwyg"?l(m({...e,template_text:s})):(s||s=="")&&n&&l(m({...e,[n]:s}))}async function A(){h(!0);try{const s=await R(e);l(m({...e,shipping_cost:`${parseFloat(s.rates.FEDEX_GROUND.PAYOR_ACCOUNT_PACKAGE).toFixed(2)}`,estimated_cost:`${(parseFloat(s.rates.FEDEX_GROUND.PAYOR_ACCOUNT_PACKAGE)+parseFloat(e.unit_cost)).toFixed(2)}`}))}catch{alert("No rates Found!")}h(!1)}function D(s){const n=x.find(c=>c.id==s);l(m({...e,template_text:n.template_text}))}async function b(s){s.preventDefault(),u(!0);try{const n=await U({...e,account:w,decision_status:"REFUND"});l(M(n.status)),e.instruction=="US Warehouse"||e.instruction=="CA Warehouse"?v.visit(N("warehouse")):v.visit(N("refund")),u(!1)}catch{u(!1)}}return t.jsx(t.Fragment,{children:t.jsxs("section",{className:"container border-2 border-slate-400 py-3 bg-white",children:[t.jsx("div",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-900/10",children:t.jsx("div",{className:"w-full flex justify-center ",children:t.jsx("div",{className:"flex items-center gap-3 mt-4 my-4",children:t.jsx("h1",{className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  ",children:"REFUND"})})})}),t.jsxs("form",{onSubmit:b,className:"flex flex-col gap-6 px-4 ",children:[t.jsxs("div",{className:"flex gap-3 mt-2",children:[t.jsxs("button",{type:"button",className:"flex items-center rounded-md mt-3 bg-white px-2.5 py-1.5 text-sm text-green-500 font-semibold shadow-sm ring-1 ring-inset ring-green-500 hover:bg-green-500 hover:text-gray-500",children:[t.jsx(L,{className:"h-5"}),t.jsx("span",{children:a.country})]}),t.jsxs("button",{type:"button",className:"flex items-center rounded-md mt-3 bg-white px-2.5 py-1.5 text-sm text-yellow-500 font-semibold shadow-sm ring-1 ring-inset ring-yellow-500 hover:bg-yellow-300 hover:text-gray-500",children:[t.jsx(P,{className:"h-5"}),t.jsx("span",{children:a.item_number})]})]}),t.jsxs("div",{className:"flex gap-3 w-full",children:[t.jsx(i,{onChange:r,span:"$",name:"retailers_price",required:!0,value:(e==null?void 0:e.retailers_price)??" ",label:"Retailer's Price",type:"number",errorMessage:"Retailer's Price is required"}),t.jsx(i,{onChange:r,name:"discount",span:"$",required:!0,value:(e==null?void 0:e.discount)??" ",label:"Discount",type:"number",errorMessage:"Discount is required"}),t.jsx(i,{onChange:r,span:"$",name:"after_discount",required:!0,value:String(parseFloat(e==null?void 0:e.retailers_price)-parseFloat((e==null?void 0:e.discount)??"0")),label:"Price After Discount",type:"number",errorMessage:"Price After Discount is required",readOnly:!0})]}),t.jsxs("div",{className:"flex gap-3 w-full",children:[t.jsx(i,{onChange:r,name:"cheque_no",required:!0,value:(e==null?void 0:e.cheque_no)??" ",label:"Cheque No.",type:"text",errorMessage:"Cheque No. is required"}),t.jsx(i,{onChange:r,name:"cheque_amount",span:"$",required:!0,value:(e==null?void 0:e.cheque_amount)??" ",label:"Cheque Amount",type:"number",errorMessage:"Cheque Amount is required"}),t.jsx(i,{onChange:r,name:"mail_date",value:(e==null?void 0:e.mail_date)??" ",label:"Mail Date",type:"date"})]}),t.jsxs("div",{className:"flex gap-3 ",children:[t.jsx(i,{onChange:r,name:"unit_cost",span:"$",required:!0,value:(e==null?void 0:e.unit_cost)??"0",label:"Cost of Unit",type:"text",errorMessage:"Cost of Unit is required"}),t.jsx(i,{onChange:r,name:"cube_weight",required:!0,value:(e==null?void 0:e.cubed_weight)??"0",label:"Cube Weight",type:"number",errorMessage:"Cube Weight is required"})]}),t.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Dimension"}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx(i,{onChange:r,name:"length",required:!0,value:(e==null?void 0:e.length)??"0",label:"Length",type:"number",errorMessage:"Length is required"}),t.jsx(i,{onChange:r,name:"width",required:!0,value:(e==null?void 0:e.width)??"0",label:"Width",type:"number",errorMessage:"Width is required"}),t.jsx(i,{onChange:r,name:"height",required:!0,value:(e==null?void 0:e.height)??"0",label:"Height",type:"number",errorMessage:"Height is required"})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:A,type:"button",className:`w-96 flex items-center justify-center mr-12 py-2 ${p?"bg-blue-500":" bg-transparent  hover:bg-blue-50"}  text-blue-700 font-semibold px-4 border border-blue-500 rounded w-lg  shadow-sm shadow-black`,children:p?t.jsx(C,{}):"GET FEDEX RATES"}),t.jsx(i,{onChange:r,name:"shipping_cost",span:"$",required:!0,value:(e==null?void 0:e.shipping_cost)??"0",label:"Shipping Cost",type:"number",errorMessage:"Shipping Cost is required"}),t.jsx(i,{onChange:r,name:"estimated_cost",span:"$",required:!0,value:(e==null?void 0:e.estimated_cost)??"0",label:"Estimated Cost",type:"number",errorMessage:"Estimated Cost is required"})]}),t.jsx(q,{onChange:r,name:"instruction",required:!1,value:e.instruction??"",label:"Warranty Instruction",errorMessage:"",data:[{value:"",name:""},...e.country==="CA"?[{value:"CA Warehouse",name:"Return to (CA Warehouse)"}]:[],...e.country==="US"?[{value:"US Warehouse",name:"Return to (US Warehouse)"}]:[],{value:"home",name:"Destroy in Home"},{value:"asc",name:"Refer to ASC"}]}),t.jsx(q,{onChange:D,name:"email_template",value:"",label:"Email Templates",errorMessage:"",data:x.map(s=>({name:s.template_name,value:s.id}))}),t.jsx("div",{className:"my-12",children:t.jsx($,{label:"",name:"wysiwyg",value:(e==null?void 0:e.template_text)??null,onChange:r})}),t.jsx("div",{className:"my-6",children:t.jsx(i,{onChange:r,name:"notes",span:"",required:!0,value:(e==null?void 0:e.notes)??"",label:"Notes",type:"text",errorMessage:"Notes is required"})}),t.jsxs("div",{className:"mb-2 flex items-center justify-end gap-x-6",children:[t.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"}),t.jsx("button",{onClick:b,type:"submit",className:"rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:S?t.jsx("div",{className:"py-1",children:t.jsx(C,{})}):"Submit"})]})]})]})})}export{Q as default};