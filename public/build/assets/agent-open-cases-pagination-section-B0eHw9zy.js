import{j as n,y as p}from"./page-CweAZ6u7.js";import{u}from"./app-DRmlIzze.js";import{P as g}from"./Pagination-DJ7OGbXG.js";import"./index-Dm0ZtCym.js";import"./asyncToGenerator-BuJCPQbh.js";import"./useForceUpdate-Bx3W7tDo.js";import"./index-BBUFz-fT.js";import"./compact-item-CHBqaovt.js";import"./KeyCode-DNlgD2sM.js";import"./useZIndex-CjGH_iRa.js";import"./index-BsoQnBFX.js";import"./useIcons-DnjaHSn_.js";import"./motion-DJ7hMwu8.js";import"./index-DSbbDzQi.js";function z(){const{tickets:a}=u(t=>t.customer_tickets),i=window.location.pathname+window.location.search,r=((t,e)=>new URLSearchParams(t.split("?")[1]).get(e))(i,"page"),s=r?parseInt(r,10):1;function c(t,e){const o=new URLSearchParams(window.location.search);o.set("page",t);const m=window.location.pathname+"?"+o.toString();p.visit(m)}return n.jsx("div",{children:n.jsx(g,{onChange:c,defaultCurrent:s,showSizeChanger:!1,total:(a==null?void 0:a.ticket_count)??0})})}export{z as default};