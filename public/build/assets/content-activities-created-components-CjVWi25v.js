import{r as S,j as s}from"./store-BLsqIzVE.js";import{M as w}from"./modal-B1z7aczi.js";import"./transition-DGqxMoVZ.js";import"./dialog-Bm7dWKU6.js";function M({data:e}){var c,n,r,o,x,m,f,N,h,j,v,p,k,b,t,g,u,d,C,T,y;const[l,i]=S.useState(!1),A=JSON.parse(e.message);return console.log("resultresult",A),s.jsxs("div",{children:[s.jsx("button",{onClick:()=>i(!l),className:"bg-green-500 p-3 rounded-md text-white hover:bg-green-600",children:"TICKET CREATED"}),s.jsx(w,{open:l,setOpen:i,title:"Ticket Created Activities",width:"max-w-5xl",position:"",children:s.jsxs("div",{className:"flex flex-col w-full my-4",children:[s.jsx("div",{className:"flex gap-3 items-center justify-between my-3",children:s.jsxs("div",{className:"font-black",children:["TICKET INFORMATION",s.jsx("div",{className:"text-green-500 border rounded-md border-green-500 items-center justify-center flex px-2",children:e.type})]})}),s.jsx("div",{className:"font-black my-4 flex gap-2",children:"Ticket Information:"}),s.jsxs("div",{className:"flex flex-col ",children:[s.jsxs("div",{className:"flex gap-2",children:["Ticket ID:",s.jsx("div",{className:"font-bold",children:((c=e==null?void 0:e.ticket)==null?void 0:c.ticket_id)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Customer's Name:",s.jsxs("div",{className:"font-bold",children:[((n=e==null?void 0:e.ticket)==null?void 0:n.fname)??""," ",((r=e==null?void 0:e.ticket)==null?void 0:r.lname)??""]})]}),s.jsxs("div",{className:"flex gap-2",children:["Email:",s.jsx("div",{className:"font-bold",children:((o=e==null?void 0:e.ticket)==null?void 0:o.email)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Phone:",s.jsx("div",{className:"font-bold",children:((x=e==null?void 0:e.ticket)==null?void 0:x.phone)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Address:",s.jsxs("div",{className:"font-bold",children:[((m=e==null?void 0:e.ticket)==null?void 0:m.address)??""," ",((f=e==null?void 0:e.ticket)==null?void 0:f.city)??""," ",((N=e==null?void 0:e.ticket)==null?void 0:N.state)??""," ",((h=e==null?void 0:e.ticket)==null?void 0:h.zip_code)??""," ",((j=e==null?void 0:e.ticket)==null?void 0:j.country)=="CA"?"CANADA":"UNITED STATE"]})]}),s.jsxs("div",{className:"flex gap-2",children:["Brand:",s.jsx("div",{className:"font-bold",children:((v=e==null?void 0:e.ticket)==null?void 0:v.brand)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Class:",s.jsx("div",{className:"font-bold",children:((p=e==null?void 0:e.ticket)==null?void 0:p.class)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Item Number:",s.jsx("div",{className:"font-bold",children:((k=e==null?void 0:e.ticket)==null?void 0:k.item_number)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Number Serial:",s.jsx("div",{className:"font-bold",children:((b=e==null?void 0:e.ticket)==null?void 0:b.serial_number)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Address:",s.jsx("div",{className:"font-bold",children:((t=e==null?void 0:e.ticket)==null?void 0:t.address)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Country:",s.jsx("div",{className:"font-bold",children:((g=e==null?void 0:e.ticket)==null?void 0:g.country)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["State:",s.jsx("div",{className:"font-bold",children:((u=e==null?void 0:e.ticket)==null?void 0:u.state)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["City:",s.jsx("div",{className:"font-bold",children:((d=e==null?void 0:e.ticket)==null?void 0:d.city)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Zip Code:",s.jsx("div",{className:"font-bold",children:((C=e==null?void 0:e.ticket)==null?void 0:C.zip_code)??""})]}),s.jsxs("div",{className:"flex gap-2",children:["Issue:",JSON.parse((T=e==null?void 0:e.ticket)==null?void 0:T.issue).map((E,I)=>s.jsx("div",{className:"font-bold",children:E??""},I))]}),s.jsxs("div",{className:"flex flex-col",children:["Remarks:",s.jsx("div",{className:"font-bold indent-8",children:((y=e==null?void 0:e.ticket)==null?void 0:y.remarks)??""})]})]})]})})]})}export{M as default};