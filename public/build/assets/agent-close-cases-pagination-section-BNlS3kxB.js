import{j as o,y as i}from"./store-CG9dSQPZ.js";import{u as a}from"./app-COa7aCXQ.js";import{P as s}from"./Pagination-B8Dma2Vn.js";import"./compact-item-CzEt-_Oq.js";import"./index-Bj8hjlz8.js";function l(){const{tickets:e}=a(t=>t.customer_tickets);function n(t){i.visit(window.location.pathname+"?page="+t)}return o.jsx("div",{children:o.jsx(s,{defaultCurrent:window.location.search.substring(1),onChange:n,showSizeChanger:!1,total:e.count})})}export{l as default};