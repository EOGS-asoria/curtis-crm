import{c as s}from"./store-BLsqIzVE.js";async function _(t){try{return(await s.put("/api/transfer_ticket_cases",t)).data}catch{return[]}}async function u(t,e,a){try{return(await s.get(`/api/cases${t}&cases=${e}&user_id=${a}`)).data.result.data}catch{return[]}}async function o(t){try{return(await s.get(`/api/direct_emails${t}`)).data}catch{return[]}}async function p(t){try{return(await s.post("/api/forward_ticket",t)).data}catch{return[]}}async function y(t){try{return(await s.get(`/api/tickets${t}`)).data.data}catch{return[]}}async function d(t){return(await s.post("/api/get_tickets_by_warehouse/"+t)).data.result}async function l(t,e){return(await s.post("/api/get_tickets_by_asc/"+e,{id:t})).data.result}async function k(t){return(await s.post("/api/tickets",t)).data.result}async function f(t,e){return(await s.get("/api/tickets/"+t+e)).data.result}async function w(t){return(await s.get("/api/get_tickets_by_email/"+t)).data.result}async function g(t){return(await s.put("/api/tickets/"+t.id,t)).data.result}async function b(t){return(await s.get("/api/get_tickets_by_ticket_id/"+t)).data.result}async function v(t,e){return(await s.put("/api/update_explanation/"+t,{explanation:e})).data.result}async function C(t,e,a,r,c){return(await s.put("/api/update_tickets_status/"+t,{status:e,user_id:a,data:r,from:c})).data.result}async function T(t,e,a){const r=t.call_type=="Parts"?"TICKET PARTS CLOSED":t.call_type=="CF-Warranty Claim"?"TICKET WARRANTY CLOSED":"TICKET TECH CLOSED";return(await s.put("/api/close_ticket/"+t.id,{reason:e,user:a,type:r})).data.result}export{f as a,g as b,u as c,o as d,w as e,p as f,b as g,T as h,l as i,d as j,y as k,C as l,k as s,_ as t,v as u};