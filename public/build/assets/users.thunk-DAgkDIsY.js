import{a as r,d as u,u as c}from"./user-service-VVKnHY4K.js";import{u as a}from"./page-Cja0WINH.js";function _(t){return async function(s,n){const e=(await r(t)).data;s(a.actions.setUsers(e))}}function d(t){return async function(s,n){const e=await u(t);s(a.actions.setUsers(e.data))}}function f(t){return async function(s,n){const e=await c(t);s(a.actions.setUsers(e.data))}}export{d,_ as g,f as u};