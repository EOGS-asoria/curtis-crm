import{r as e,y as k,j as i}from"./store-BiYASIpe.js";import"./main-EBHAsuc-.js";import{u as S}from"./app-D_Lsnjbi.js";import{i as b}from"./tickets-service-CJHvwIki.js";import{h as w}from"./moment-Cl4UOzQZ.js";import{T as _}from"./Table-C5pX-xaN.js";import"./compact-item-CXE2nw3L.js";import"./index-sWHT3kvJ.js";import"./addEventListener-DPC9GuYG.js";import"./motion-L0wigdRl.js";import"./roundedArrow-Cr6s27hV.js";import"./reactNode-DM5GGJMJ.js";import"./zoom-me1pAZx9.js";import"./colors-B2Jz-uBo.js";import"./index-CUqc7FeL.js";import"./useIcons-C1tZSTn6.js";import"./index-DnJEa495.js";import"./useForceUpdate-BgXq0-Wt.js";import"./collapse-C1MjllT7.js";import"./button-C_v5SUoV.js";import"./index-CjyvlYdd.js";import"./Pagination-D2dvdvi0.js";import"./index-BKzc7XUN.js";function M({account:s}){S(a=>a.users),e.useState(""),e.useState(""),e.useRef(null);const[l,m]=e.useState([]),[p,r]=e.useState(!0),[d,j]=e.useState(10),[u,c]=e.useState(0);e.useEffect(()=>{async function a(){const t=await b(s.id,window.location.search??"page=1");m(t.result.data),c(t.result.total),r(!1)}a()},[]);const h=l.map((a,t)=>({key:t,email:a.email,date:w(a.date).format("LLLL"),link:a.threadId,id:a.id})),g=[{title:"Email",dataIndex:"email",key:"email"},{title:"Date Completed",dataIndex:"date",key:"date"},{title:"Email Link",dataIndex:"link",key:"link",render:(a,t)=>i.jsx("a",{href:"https://mail.google.com/mail/u/0/#inbox/"+(t==null?void 0:t.link),target:"_blank",children:"https://mail.google.com/mail/u/0/#inbox/"+(t==null?void 0:t.link)})},{title:"Action",dataIndex:"overdue_direct_emails",key:"overdue_direct_emails",render:(a,t)=>{const o=t==null?void 0:t.email,f=/<([^>]+)>/,n=o==null?void 0:o.match(f);return i.jsx("a",{target:"_blank",href:`${window.location.pathname}/${t==null?void 0:t.id}?email= ${n?n[1]:""}`,className:"bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-sm px-3",children:"VIEW"})}}],x={showSizeChanger:!1,current:parseInt(window.location.search.split("=")[1]??1),pageSize:d,total:u,onChange:(a,t)=>{k.visit(window.location.pathname+`?page=${a}`)}};return i.jsx("div",{children:i.jsxs("div",{className:"p-3 rounded-md",children:[i.jsx("div",{className:"flex"}),i.jsx(_,{loading:p,pagination:x,columns:g,dataSource:h})]})})}export{M as default};