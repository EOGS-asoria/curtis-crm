import{r as n,y as I,j as a,d as T}from"./store-CG9dSQPZ.js";import"./main-BWLt6gtd.js";import{h as A}from"./moment-Cl4UOzQZ.js";import{u as h}from"./app-COa7aCXQ.js";import{T as f,a as y,E as S}from"./Table-K2Mad1e0.js";import{T as l}from"./index-CkqWoZ2e.js";import"./compact-item-CzEt-_Oq.js";import"./index-Bj8hjlz8.js";import"./index-xaviMW18.js";import"./reactNode-NvEc2LJP.js";import"./Pagination-B8Dma2Vn.js";import"./index-DMFAzEMa.js";import"./collapse-C1MjllT7.js";import"./button-S_ei3Puu.js";function z(){var u;const{tickets:i}=h(e=>e.tickets);n.useState(""),n.useState(""),n.useRef(null);const[k,d]=n.useState(1),[o,m]=n.useState(10),c=(u=i==null?void 0:i.data)==null?void 0:u.map((e,t)=>({...e,key:e.id})),p=[{title:"Ticket ID",dataIndex:"ticket_id",key:"ticket_id"},{title:"Fullname",dataIndex:"fullname",key:"fullname",render:(e,t,s)=>a.jsxs("div",{color:"red",children:[t.fname," ",t.lname]},s)},{title:"Email",dataIndex:"email",key:"email"},{title:"Resolution",dataIndex:"call_type",key:"call_type"},{title:"Issue",dataIndex:"issue",key:"issue",render:(e,t,s)=>a.jsx(l,{color:"blue",children:JSON.parse(t.issue)},s)},{title:"Status",dataIndex:"status",key:"status",render:(e,t,s)=>{const r=t.status=="CLOSED"?"red":t.status=="PARTS VALIDATION"||t.status=="WARRANTY VALIDATION"||t.status=="TECH VALIDATION"?"orange":"green";return a.jsx(a.Fragment,{children:a.jsx(l,{color:r,children:(t.status=="PARTS VALIDATION"||t.status=="WARRANTY VALIDATION"||t.status=="TECH VALIDATION")&&t.isUploading=="false"?"OPEN":t.status},s)})}},{title:"IsUpload",dataIndex:"isUploading",key:"isUploading",render:(e,t,s)=>{const r=t.isUploading=="true"?"green":"red";return a.jsx(a.Fragment,{children:a.jsx(l,{color:r,children:t.isUploading=="true"?"UPLOADED":"PENDING"},s)})}},{title:"Created At",dataIndex:"status",key:"status",render:(e,t,s)=>a.jsx("div",{children:A(t.created_at).format("LLL")})},{title:"action",dataIndex:"action",render:(e,t)=>a.jsx(y,{placement:"topLeft",title:"View Ticket Details",children:a.jsx(T,{href:"/curtis/tickets/details/"+t.id+"/files",children:a.jsx(S,{className:"text-lg text-blue-500"})})})}],x=window.location.pathname+window.location.search,g={current:((e,t)=>new URLSearchParams(e.split("?")[1]).get(t))(x,"page"),pageSize:o,total:(i==null?void 0:i.last_page)*o,onChange:(e,t)=>{I.visit(window.location.pathname+`?page=${e}`),d(e),m(t)}};return a.jsx(f,{columns:p,pagination:g,dataSource:c})}export{z as default};