import{r as i,j as e,w as v,s as _,y as N}from"./store-BLsqIzVE.js";import{T as S}from"./textarea-UjtR28OD.js";import{u as m,a as k}from"./app-Bjqn6gf7.js";import{L as p}from"./loading-B6ZW1whT.js";import{I as n}from"./input-sY_DG3lm.js";import{u as E}from"./tickets-thunk-DtHnjS33.js";import{h as g}from"./moment-Cl4UOzQZ.js";import{s as C}from"./replacement-service-CUrN_spP.js";import{r as x}from"./routing-BzgBYGmF.js";import"./tickets-service-BwseCM9u.js";import"./internals-service-B9kSbxh_.js";function O(){const{internals:w,ticket:r}=m(s=>s.tickets),{user:u}=m(s=>s.app),[c,o]=i.useState(!1),[f,l]=i.useState(!1),h=k(),[t,d]=i.useState({});i.useEffect(()=>{d({...r,...r==null?void 0:r.replacement,ship_date:g().format("L"),serial_number:""})},[r]);function a(s,j){d({...t,[j]:s})}async function y(){if(confirm("Are you sure you want to shipped the ticket?")){o(!0);try{const s=await C({...t,ticket_id:r.id,account:u,status:"PROCESSED TICKET"});h(v(s.status)),o(!1),window.location.href=x("files")}catch{o(!1)}}}async function b(){if(confirm("Are you sure you want to move in refund?")){l(!0);try{await _.dispatch(E(r.id,"REFUND",{...t,ticket_id:r.id,account:u,status:"NOT SHIPPED"})),l(!1),N.visit(x("refund"))}catch{l(!0)}}}return e.jsxs("div",{className:"bg-white h-full px-3",children:[e.jsxs("div",{className:"mt-10 w-full border-b-2 border-gray-600",children:[e.jsx("h1",{className:"mt-2",children:"Warranty Internal Remarks/Notes."}),r.validation_notes]}),e.jsxs("div",{className:"mt-5 my-4 w-full",children:[e.jsxs("div",{className:"my-3 flex flex-col",children:["Date: ",t.ship_date??"",e.jsx("input",{type:"date",className:"w-52",name:"ship_date",pattern:"\\d{1,2}/\\d{1,2}/\\d{4}",onChange:s=>d({...t,ship_date:g(s.target.value).format("L")})})]}),e.jsxs("div",{className:"px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0",children:[e.jsx(n,{onChange:a,name:"unit",span:"",required:!0,value:String(t.unit??" "),label:"Unit",type:"text",errorMessage:"Unit is required"}),e.jsx(n,{onChange:a,name:"brand",span:"",required:!0,value:String(t.brand??" "),label:"Brand",type:"text",errorMessage:"Brand is required"})]}),e.jsxs("div",{className:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx(n,{onChange:a,name:"model",span:"",required:!0,value:String(t.model??" "),label:"model",type:"text",errorMessage:"model is required"}),e.jsx(n,{onChange:a,name:"serial_number",span:"",required:!0,value:String(t.serial_number??" "),label:"Serial",type:"text",errorMessage:"Serial is required"}),e.jsx(n,{onChange:a,name:"tracking",span:"",required:!0,value:String(t.tracking??" "),label:"Tracking",type:"text",errorMessage:"Tracking is required"})]}),e.jsx("div",{className:"px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0",children:e.jsx(S,{required:!0,onChange:a,name:"notes",value:String(t.notes??" "),label:"Resource Notes:",type:"text",errorMessage:"notes is required"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{disabled:c,onClick:y,type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ",children:c?e.jsx(p,{}):"REPLACEMENT SHIPPED"}),e.jsx("button",{onClick:b,type:"button",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ",children:f?e.jsx(p,{}):"REPLACEMENT NOT SHIPPED"})]})]})]})}export{O as default};