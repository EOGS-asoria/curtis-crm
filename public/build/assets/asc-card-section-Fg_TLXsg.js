import{r as i,j as s}from"./store-Lwl4u78n.js";import e from"./asc-card-component-BVk-fV_c.js";import{L as a,b as d}from"./dashboard-service-CotCIvwx.js";function p({account:c}){const[t,r]=i.useState([]);return i.useEffect(()=>{async function n(l){const o=await d(c.id);r(o)}n()},[]),s.jsx("div",{className:"mt-12 mr-3",children:s.jsxs("div",{className:"mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3",children:[s.jsx(e,{title:"Assigned Ticket",link:"REPAIR",count:t.assigned??0,icon:s.jsx(a,{className:"h-10 text-white"})}),s.jsx(e,{title:"Successful Repairs",link:"REPAIRED",count:t.repaired??0,icon:s.jsx(a,{className:"h-10 text-white"})}),s.jsx(e,{title:"Unsuccessful Repairs",link:"NOT REPAIRED",count:t.notrepaired??0,icon:s.jsx(a,{className:"h-10 text-white"})})]})})}export{p as default};