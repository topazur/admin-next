import{b as e,p as t}from"./index-fc11c37.js";import{d as r,r as o,o as s,C as i,h as a,x as m}from"./vendor-d804e806-fc11c37.js";const p=r({props:{time:{type:[String,Date],required:!0}},setup(t){const r=o(e(t.time));let a;return s((()=>{a=setInterval((()=>{r.value=e(t.time)}),1e3)})),i((()=>{a&&(a=clearInterval(a))})),()=>r.value}}),n=r({props:{time:{type:[String,Date],required:!0},showPopoverInfoAbsoluteTime:{type:Boolean,default:!0}},setup:e=>()=>e.showPopoverInfoAbsoluteTime?a(m,{trigger:"hover"},{trigger:()=>a("span",null,a(p,{time:e.time})),default:()=>t(e.time,"yyyy年M月d日 HH:mm:ss")}):a(p,{time:e.time})});export{n as R};
