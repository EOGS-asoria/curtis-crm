import{r as n,j as e,y as d,s as j}from"./page-CweAZ6u7.js";import{T as _}from"./textarea-Clh5s7X1.js";import{u as g,a as N}from"./app-DnHy6rUk.js";import{L as x}from"./loading-2wh1A-cr.js";import{I as i}from"./input-BakRJ-kO.js";import{u as S}from"./tickets-thunk-BaAwlPMp.js";import{h as f}from"./page-CTYwbZqa.js";import{s as E}from"./replacement-service-CUrN_spP.js";import{r as u}from"./routing-BzgBYGmF.js";import"./index-Dm0ZtCym.js";import"./tickets-service-7nSwhJGZ.js";import"./internals-service-B9kSbxh_.js";function F(){const{internals:k,ticket:s}=g(r=>r.tickets),{user:m}=g(r=>r.app),[c,p]=n.useState(!1),[h,o]=n.useState(!1);N();const[t,l]=n.useState({});n.useEffect(()=>{l({...s,...s==null?void 0:s.replacement,ship_date:f().format("L"),serial_number:""})},[s]);function a(r,v){l({...t,[v]:r})}async function y(){if(confirm("Are you sure you want to shipped the ticket?")){p(!0);try{const r=await E({...t,ticket_id:s.id,account:m,status:"PROCESSED TICKET"});d.visit(u("files"))}catch{d.visit(u("files")),p(!1)}}}async function b(){if(confirm("Are you sure you want to move in refund?")){o(!0);try{await j.dispatch(S(s.id,"REFUND",{...t,ticket_id:s.id,account:m,status:"NOT SHIPPED"})),o(!1),d.visit(u("refund"))}catch{o(!0)}}}return e.jsxs("div",{className:"bg-white h-full px-3",children:[e.jsxs("div",{className:"mt-10 w-full border-b-2 border-gray-600",children:[e.jsx("h1",{className:"mt-2",children:"Warranty Internal Remarks/Notes."}),s.validation_notes]}),e.jsxs("div",{className:"mt-5 my-4 w-full",children:[e.jsxs("div",{className:"my-3 flex flex-col",children:["Date: ",t.ship_date??"",e.jsx("input",{type:"date",className:"w-52",name:"ship_date",pattern:"\\d{1,2}/\\d{1,2}/\\d{4}",onChange:r=>l({...t,ship_date:f(r.target.value).format("L")})})]}),e.jsxs("div",{className:"px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0",children:[e.jsx(i,{onChange:a,name:"unit",span:"",required:!0,value:String(t.unit??" "),label:"Unit",type:"text",errorMessage:"Unit is required"}),e.jsx(i,{onChange:a,name:"brand",span:"",required:!0,value:String(t.brand??" "),label:"Brand",type:"text",errorMessage:"Brand is required"})]}),e.jsxs("div",{className:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx(i,{onChange:a,name:"model",span:"",required:!0,value:String(t.model??" "),label:"model",type:"text",errorMessage:"model is required"}),e.jsx(i,{onChange:a,name:"serial_number",span:"",required:!0,value:String(t.serial_number??" "),label:"Serial",type:"text",errorMessage:"Serial is required"}),e.jsx(i,{onChange:a,name:"tracking",span:"",required:!0,value:String(t.tracking??" "),label:"Tracking",type:"text",errorMessage:"Tracking is required"})]}),e.jsx("div",{className:"px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0",children:e.jsx(_,{required:!0,onChange:a,name:"notes",value:String(t.notes??" "),label:"Resource Notes:",type:"text",errorMessage:"notes is required"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{disabled:c,onClick:y,type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ",children:c?e.jsx(x,{}):"REPLACEMENT SHIPPED"}),e.jsx("button",{onClick:b,type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ",children:h?e.jsx(x,{}):"REPLACEMENT NOT SHIPPED"})]})]})]})}export{F as default};