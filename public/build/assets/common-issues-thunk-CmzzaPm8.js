import{e as a,M as u,N as o}from"./page-Cja0WINH.js";async function c(){return(await a.get("/api/common_issues")).data}async function i(s){return(await a.post("/api/common_issues",s)).data}async function m(s){return(await a.delete("/api/common_issues/"+s)).data}async function r(s){return(await a.put(`/api/common_issues/${s.id}`,s)).data}function d(s){return async function(t,n){const e=await i(s);t(o.actions.setCommonIssues(e.data)),t(o.actions.setCommonIssuesForm({}))}}function f(){return async function(s,t){const n=(await c()).data;s(u(n))}}function p(s){return async function(t,n){const e=await m(s);t(o.actions.setCommonIssues(e.data))}}function g(s){return async function(t,n){const e=await r(s);t(o.actions.setCommonIssues(e.data))}}export{p as d,f as g,d as s,g as u};