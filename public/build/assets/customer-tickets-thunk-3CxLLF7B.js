import{u as r}from"./tickets-service-B0HV_HJ4.js";import{c as l,x as _}from"./page-Cja0WINH.js";import{g as n,u as d,d as k}from"./files-service--qQjgPPw.js";const c=l({name:"customer_tickets",initialState:{tickets:[],ticket:{},filesData:[]},reducers:{setTickets:(e,t)=>{e.tickets=t.payload},setFilesData:(e,t)=>{e.filesData=t.payload},setTicket:(e,t)=>{e.ticket=t.payload}}}),{setTickets:T,setFilesData:o,setTicket:g}=c.actions;c.reducer;function y(e,t){return async function(a,s){s().app;const i=await d(e),u=await n(t);a(_(i.status)),a(o(u.data))}}function w(e){return async function(t,a){const s=await n(e);return t(c.actions.setTicket(s.ticket)),s.data}}function S(e,t){return async function(a,s){await k(e,t);const i=await n(t);return a(o(i.data)),i.data}}function v(e,t){return async function(a,s){const i=await r(e,t);a(c.actions.setTicket(i))}}export{v as a,o as b,S as d,w as g,g as s,y as u};