var e=Object.defineProperty,t=("undefined"!=typeof require&&require,(t,a,n)=>(((t,a,n)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n})(t,"symbol"!=typeof a?a+"":a,n),n));import{d as a,h as n,R as l,S as o,N as s,a as i,r,u,p as c,c as p,i as m,o as d,w as v,b as h,e as y,f,n as g,g as _,j as w,k as b,l as P,m as x,I as E,H as k,q as j,s as C,t as I,v as L,x as A,y as S,z as D,A as O,B as N,C as T,D as q,M,F as V,E as R,G as B,J as H,K as z,L as $,O as W,P as F,Q as U,T as G,U as J,V as K,W as Y,X as Q,Y as X,Z,_ as ee,$ as te,a0 as ae,a1 as ne,a2 as le,a3 as oe,a4 as se,a5 as ie,a6 as re,a7 as ue,a8 as ce,a9 as pe,aa as me,ab as de,ac as ve,ad as he,ae as ye,af as fe,ag as ge,ah as _e,ai as we,aj as be,ak as Pe,al as xe,am as Ee,an as ke,ao as je,ap as Ce,aq as Ie,ar as Le,as as Ae,at as Se,au as De,av as Oe,aw as Ne,ax as Te,ay as qe,az as Me,aA as Ve,aB as Re,aC as Be,aD as He,aE as ze,aF as $e,aG as We,aH as Fe,aI as Ue,aJ as Ge,aK as Je,aL as Ke,aM as Ye,aN as Qe,aO as Xe,aP as Ze,aQ as et,aR as tt,aS as at}from"./vendor-d804e806-fc11c37.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const nt={},lt=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`https://cdn.jsdelivr.net/gh/mx-space/admin-next@gh-pages/${e}`)in nt)return;nt[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var ot,st;(st=ot||(ot={})).Dashboard="dashboard",st.Post="post",st.ViewPost="view-posts",st.EditPost="edit-posts",st.EditCategory="edit-category",st.Note="note",st.ViewNote="view-notes",st.EditNote="edit-notes",st.Comment="comment",st.Page="page",st.ListPage="page-list",st.EditPage="page-edit",st.Say="say",st.ListSay="say-list",st.EditSay="say-edit",st.Project="project",st.ListProject="project-list",st.EditProject="project-edit",st.Friend="friends",st.File="files",st.Analyze="analyze",st.Setting="setting",st.Profile="setting-profile",st.System="setting-system",st.Security="setting-security",st.Reset="reset",st.Other="other",st.Backup="backup",st.Markdown="markdown",st.Cron="cron",st.Log="log",st.Optimize="optimize",st.Login="login",st.Home="home",st.Setup="setup",st.ListShortHand="shorthand";const it=a({setup:()=>()=>n(l,null,{default:({Component:e})=>n(o,null,{default:()=>e,fallback:()=>n("div",{class:"fixed left-1/2 top-1/2 transform text-primary-default -translate-y-1/2 -translate-x-1/2"},n(s,{strokeWidth:14,show:!0,rotate:!0}))})})}),rt={title:window.injectData.TITLE||"静かな森"},ut="mx-admin-token";function ct(){return i.get(ut)?JSON.parse(i.get(ut)):null}function pt(){return i.remove(ut)}function mt(){const e=r(null),t=r(""),a=ct();a&&(t.value=a);const n=u();return{user:e,token:t,async fetchUser(){var t;try{const t=await xa.api.master.get();e.value=t}catch(a){"没有完成初始化!"==(null==(t=a.data)?void 0:t.message)&&n.replace("/setup")}},updateToken(e){e&&function(e,t){if(e)i.set(ut,JSON.stringify(e),{expires:t})}(e,7),t.value=e}}}const dt=(e,t,a)=>{var n,l,o,s,i;const r=((e,t)=>{let a=/^\//.test(e)?e:"/"+e;if(!a.match(/(\/?:)/))return a;if(!t||"[object Object]"!==Object.prototype.toString.call(t))throw new TypeError("params must be object");for(const n in t)a=a.replaceAll(":"+n,t[n]);return a})(e.path,null==(n=e.meta)?void 0:n.params),u=a+"/"+r;return{title:(null==(l=e.meta)?void 0:l.title)||(null==(o=e.name)?void 0:o.toString())||r,path:r,icon:null==(s=e.meta)?void 0:s.icon,subItems:vt(e,u),hasParent:t,fullPath:u.replaceAll("//","/"),query:null==(i=e.meta)?void 0:i.query}};function vt(e,t=""){return Array.isArray(e.children)?e.children.filter((e=>!e.meta||!0!==e.meta.hide)).map((e=>dt(e,!0,t))):[]}function ht(e){!e.token&&(e.token=Symbol("functional store"));const t=e();return c(e.token,t),t}function yt(e,t){const a=e.token,n=e.root;switch(t){case"optional":return m(a)||e.root||null;case"root":return e.root||(e.root=e()),e.root;default:if(m(a))return m(a);if(n)return e.root;throw new Error(`状态钩子函数${e.name}未在上层组件通过调用useProvider提供`)}}var ft=(e,t)=>{for(const[a,n]of t)e[a]=n;return e};const gt=a({props:{size:{type:Number,default:50},src:{type:String,required:!0}},setup(e){const t=r(!1),a=()=>{if(!e.src)return;const a=new Image;a.src=e.src,a.onload=e=>{t.value=!0}};return d((()=>{a()})),v((()=>e.src),(()=>{a()})),{loaded:t}}}),_t=["src"],wt=f("div",{class:"sr-only"},"一个头像",-1);var bt=ft(gt,[["render",function(e,t,a,n,l,o){return h(),y("div",{class:"avatar",style:g({height:`${e.size}px`,width:`${e.size}px`})},[f("img",{src:e.src,alt:"",style:g({display:e.loaded?"":"none"})},null,12,_t),wt],4)}]]);var Pt="_root_1ytef_1",xt="_collapse_1ytef_5",Et="_item-title_1ytef_8",kt="_has-child_1ytef_12",jt="_collapse-button_1ytef_23",Ct="_sidebar_1ytef_31",It="_items_1ytef_38",Lt="_active_1ytef_50",At="_expand_1ytef_51",St="_item_1ytef_8",Dt="_menu_1ytef_83";const Ot=window.injectData.WEB_URL||"https://innei.ren";function Nt(){const e=r({}),t=r(250),a=r(!!e.value.mobile),n=_(),l=w(n);d((()=>{const e=b(o,500,{trailing:!0});window.onresize=e,o()}));const o=()=>{const t=window.innerHeight,a=document.documentElement.getBoundingClientRect().width,{hpad:n,pad:l,mobile:o}=e.value;e.value.h&&Math.abs(t-e.value.h)<80&&a===e.value.w&&(n||l||o)||(e.value={w:a,h:t,mobile:window.screen.width<=568||window.innerWidth<=568,pad:window.innerWidth<=768&&window.innerWidth>568,hpad:window.innerWidth<=1024&&window.innerWidth>768,wider:window.innerWidth>1024&&window.innerWidth<1920,widest:window.innerWidth>=1920,phone:window.innerWidth<=768})},s=P((()=>e.value.w-t.value+(a.value?e.value.mobile?50:100:0))),i=P((()=>s.value-6*parseInt(getComputedStyle(document.documentElement).fontSize)));return v((()=>n.value),(e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})),{viewport:e,contentWidth:s,sidebarWidth:t,contentInsetWidth:i,sidebarCollapse:a,isDark:n,toggleDark:l}}const Tt=a({name:"SidebarComp",props:{collapse:{type:Boolean,required:!0},width:{type:Number,required:!0},onCollapseChange:{type:Function,required:!0}},setup(e){const t=u(),{user:a}=yt(mt),l=P((()=>t.currentRoute.value)),o=r([]);d((()=>{o.value=t.getRoutes().find((e=>"home"===e.name&&"/"===e.path)).children.filter((e=>{var t;return"*"!==e.path&&!0!==(null==(t=e.meta)?void 0:t.hide)})).map((e=>dt(e,!1,"")))}));const s=r(0);function i(e){e!==s.value?s.value=e:s.value=-1}function c(e,a){var n;(null==(n=e.subItems)?void 0:n.length)||(t.push({path:e.fullPath,query:e.query}),a&&i(a))}const p=rt.title,m=r(),v=yt(Nt);return x(m,(t=>{const a=v.viewport;(a.value.pad||a.value.mobile)&&e.onCollapseChange(!0)})),()=>{var t,r,u;return n("div",{class:C(Pt,e.collapse?xt:null),style:{width:!e.collapse&&e.width?e.width+"px":""},ref:m},n("div",{class:"fixed left-0 top-0 h-screen overflow-hidden z-10 text-white "+Ct},n("div",{class:"title relative font-medium text-center text-2xl"},n("h1",{class:"py-6",style:{display:e.collapse?"none":""}},p),n("button",{class:jt,onClick:()=>{e.onCollapseChange(!e.collapse)}},n(E,null,n(k,null)))),n(j,{class:Dt,nativeScrollbar:!1},n("div",{class:It},o.value.map(((e,t)=>{var a;return n("div",{class:C("py-2",l.value.fullPath===e.fullPath||l.value.fullPath.startsWith(e.fullPath)?Lt:"",St),"data-path":e.fullPath},n("button",{key:e.title,class:"py-2 flex w-full items-center",onClick:(null==(a=e.subItems)?void 0:a.length)?()=>i(t):()=>c(e,t)},n("span",{style:{flexBasis:"3rem"},class:"flex justify-center"},e.icon),n("span",{class:Et},e.title)),e.subItems&&n("ul",{class:C("overflow-hidden  "+(e.subItems.length?kt:""),s.value===t?At:""),style:{maxHeight:s.value===t?3.5*e.subItems.length+"rem":"0"}},e.subItems.map((e=>n("li",{key:e.path,class:C(l.value.fullPath===e.fullPath||l.value.fullPath.startsWith(e.fullPath)?Lt:"",St)},n("button",{onClick:()=>c(e),class:"flex w-full items-center py-4"},n("span",{class:"flex justify-center items-center",style:{flexBasis:"3rem"}},e.icon),n("span",{class:Et},e.title)))))))})))),n("button",{class:C("bottom-bar flex space-x-2 items-center  transform translate-y-1/3 phone:hidden",e.collapse?"px-8":"px-12"),onClick:()=>{window.open(Ot)}},n(bt,{src:null==(t=a.value)?void 0:t.avatar,size:40}),e.collapse?null:n("span",{class:"pl-12"},null==(r=a.value)?void 0:r.name)),n("button",{class:"hidden phone:flex w-full items-center justify-center absolute bottom-0 pb-4",onClick:()=>{window.open(Ot)}},n(bt,{src:null==(u=a.value)?void 0:u.avatar,size:40}))))}}});var qt="_root_5exgh_1",Mt="_content_5exgh_2";const Vt=a({name:"SidebarLayout",setup(e){const t=yt(Nt),a=t.sidebarCollapse,l=P((()=>t.viewport.value.mobile||t.viewport.value.pad));I((()=>{a.value=!!l.value}));const o=t.sidebarWidth;return()=>n("div",{class:qt},n(Tt,{collapse:a.value,width:o.value,onCollapseChange:e=>{a.value=e}}),n(j,{embedded:!0,nativeScrollbar:!1,class:Mt,style:{left:a.value?"100px":o.value+"px",pointerEvents:l.value&&!a.value?"none":"auto"}},n(it,null)))}});var Rt,Bt;(Bt=Rt||(Rt={}))[Bt["yyyy年M月d日"]=0]="yyyy年M月d日",Bt[Bt["yyyy年M月d日 HH:mm:ss"]=1]="yyyy年M月d日 HH:mm:ss",Bt[Bt["HH:mm"]=2]="HH:mm",Bt[Bt["H:mm:ss A"]=3]="H:mm:ss A",Bt[Bt["M-d HH:mm:ss"]=4]="M-d HH:mm:ss";const Ht=(e,t="yyyy年M月d日")=>L(new Date(e),t),zt=(e,t=new Date)=>{const a=6e4,n=36e5,l=864e5,o=2592e6,s=31536e6,i=+t-+(e=new Date(e));if(i<a){const e=Math.ceil(i/1e3);return e<=0?"刚刚":e+" 秒前"}return i<n?Math.round(i/a)+" 分钟前":i<l?Math.round(i/n)+" 小时前":i<o?Math.round(i/l)+" 天前":i<s?Math.round(i/o)+" 个月前":Math.round(i/s)+" 年前"},$t=(e=new Date)=>{const t=e,a=new Date(t.getFullYear(),0,0),n=t.getTime()-a.getTime();return Math.floor(n/864e5)},Wt=new Map,Ft=a({props:{ip:{type:String,required:!0},triggerEl:{type:[Object,Function],required:!0},trigger:{type:String,default:"click"}},setup(e){const t=r("获取中.."),a=e=>{t.value=`IP: ${e.ip}<br />\n      城市: ${[e.countryName,e.regionName,e.cityName].filter(Boolean).join(" - ")||"N/A"}<br />\n      ISP: ${e.ispDomain||"N/A"}<br />\n      组织: ${e.ownerDomain||"N/A"}<br />\n      范围: ${e.range?Object.values(e.range).join(" - "):"N/A"}\n      `},l=async(e,n)=>{if(n)if(e){if(Wt.has(n)){const e=Wt.get(n);return void a(e)}const e=await xa.api.tools.ip(n).get();a(e),Wt.set(n,e)}else t.value="获取中.."};return()=>n(A,{trigger:e.trigger,placement:"top",onUpdateShow:async t=>{e.ip&&await l(t,e.ip)}},{trigger:()=>"function"==typeof e.triggerEl?e.triggerEl():e.triggerEl,default:()=>n("div",{innerHTML:t.value})})}}),Ut=()=>{const e=D(),t=r("");return{create:()=>new Promise(((a,l)=>{const o=e.create({title:"速记",type:"success",content:()=>n(S,{resizable:!1,type:"textarea",onUpdateValue:e=>{t.value=e},value:t.value,class:"h-[300px] max-h-[80vh]"}),action:()=>n(N,null,n(O,{round:!0,type:"primary",onClick:()=>{xa.api.recently.post({data:{content:t.value}}).then((e=>{t.value="",message.success("记录成功"),o.destroy(),a(e)})).catch((e=>{l(e)}))}},"记好了"),n(O,{round:!0,onClick:()=>{o.destroy(),a(null)}},"不想记了"))})}))}};var Gt,Jt;(Jt=Gt||(Gt={}))["动画"]="a",Jt["漫画"]="b",Jt["游戏"]="c",Jt["文学"]="d",Jt["原创"]="e",Jt["来自网络"]="f",Jt["其他"]="g",Jt["影视"]="h",Jt["诗词"]="i",Jt["网易云"]="j",Jt["哲学"]="k",Jt["抖机灵"]="l";const Kt=async(e=Gt.文学)=>{const t=await fetch("https://v1.hitokoto.cn/"+(Array.isArray(e)?"?"+e.map((e=>"c="+e)).join("&"):"?c="+e));return await t.json()};var Yt="_header_18z7e_1",Qt="_header-blur_18z7e_9",Xt="_title_18z7e_23",Zt="_main_18z7e_30",ea="_buttons_18z7e_42",ta="_header-actions_18z7e_80";const aa=Symbol("inject"),na=()=>m(aa,{addFloatButton:e=>Symbol(),removeFloatButton(e){},setHeaderButton(e){}}),la=a({props:{actionsElement:{type:Object,required:!1},footerButtonElement:{type:Object,required:!1},title:{type:String}},setup(e,t){const{slots:a}=t,l=u(),o=P((()=>l.currentRoute)),s=()=>{var t;return null!=(t=e.actionsElement)?t:null},i=()=>{var t;return null!=(t=e.footerButtonElement)?t:null},p=r(null);c(aa,{addFloatButton(e){null!=p.value||(p.value=[]);const t="function"==typeof e?e:()=>e;return t.displayName$=t.name?Symbol(t.name):Symbol("fab"),p.value.push(t),t.displayName$},removeFloatButton(e){if(!p.value)return;const t=p.value.findIndex((t=>t.displayName$===e));t&&-1!==t&&p.value.splice(t,1)},setHeaderButton(e){v.value=e?()=>e:null}}),T((()=>{p.value=null}));const{isDark:m,toggleDark:d}=yt(Nt),v=r();return()=>{var t,l,r,u;return n(V,null,n("header",{class:Yt},n("div",{class:Qt}),n("h1",{class:Xt},null!=(t=e.title)?t:o.value.value.meta.title),n("div",{class:C(ta,"space-x-4")},v.value?n(v.value,null):e.actionsElement?n(s,null):null==(l=a.actions)?void 0:l.call(a))),n("main",{class:Zt},null==(r=a.default)?void 0:r.call(a)),n("footer",{class:ea},p.value?p.value.map((e=>n(e,{key:e.displayName}))):null,e.footerButtonElement?n(i,null):null==(u=a.buttons)?void 0:u.call(a),n("button",{onClick:()=>{d()}},n(E,null,m.value?n(q,null):n(M,null)))))}}}),oa=a({name:"Dashboard",setup(){const e=r(new Proxy({},{get:()=>"N/A"})),t=r(null),l=async()=>{const a=await xa.api.aggregate.stat.get();e.value=a,t.value=new Date},o=()=>{Kt([Gt.动画,Gt.原创,Gt.哲学,Gt.文学]).then((e=>{const t=Object.values(Z(e,["from","from_who","creator"])).filter(Boolean)[0];e.hitokoto?p.value=e.hitokoto+(t?" —— "+t:""):p.value="没有获取到句子信息"}))};let s;d((()=>{s=setTimeout((function e(){l().then((()=>{s=setTimeout(e,3e3)}))}),3e3)})),T((()=>{s=clearTimeout(s)}));const i=r(""),c=r(null);R((()=>{o(),l(),(async()=>{const e=await fetch("https://v2.jinrishici.com/one.json");return(await e.json()).data})().then((e=>{i.value=e.content,c.value=e}))}));const p=r(""),m=B(),v=yt(mt),h=u(),y=a((()=>()=>{var e,t,a,l,o;return n(V,null,n(H,{class:"text-opacity-80 font-light"},"登陆记录"),n("p",{class:"-mt-2 mb-3 relative text-gray-500"},n("span",null,"上次登陆 IP:"," ",(null==(e=v.user.value)?void 0:e.lastLoginIp)?n(Ft,{trigger:"hover",triggerEl:n("span",null,null==(t=v.user.value)?void 0:t.lastLoginIp),ip:null==(a=v.user.value)?void 0:a.lastLoginIp}):"N/A"),n("div",{class:"pt-[.5rem]"}),n("span",null,"上次登陆时间:"," ",(null==(l=v.user.value)?void 0:l.lastLoginTime)?n("time",null,Ht(null==(o=v.user.value)?void 0:o.lastLoginTime,"yyyy年M月d日 HH:mm:ss")):"N/A")),n("div",{class:"pb-4"}))})),{create:f}=Ut(),g=P((()=>[{label:"博文",value:e.value.posts,icon:n(ee,null),actions:[{name:"撰写",primary:!0,onClick(){h.push({name:ot.EditPost})}},{name:"管理",onClick(){h.push({name:ot.ViewPost,query:{page:1}})}}]},{label:"日记",value:e.value.notes,icon:n(te,null),actions:[{name:"撰写",primary:!0,onClick(){h.push({name:ot.EditNote})}},{name:"管理",onClick(){h.push({name:ot.ViewNote,query:{page:1}})}}]},{label:"页面",value:e.value.pages,icon:n(ae,null),actions:[{primary:!0,name:"管理",onClick(){h.push({name:ot.ListPage,query:{page:1}})}}]},{label:"速记",value:e.value.recently,icon:n(ne,null),actions:[{primary:!0,name:"记点啥",onClick(){f()}},{name:"管理",onClick(){h.push({name:ot.ListShortHand,query:{page:1}})}}]},{label:"分类",value:e.value.categories,icon:n(le,null),actions:[{primary:!0,name:"管理",onClick(){h.push({name:ot.EditCategory})}}]},{label:"全部评论",value:e.value.allComments,icon:n(oe,null),actions:[{primary:!0,name:"管理",onClick(){h.push({name:ot.Comment,query:{state:1}})}}]},{label:"未读评论",value:e.value.unreadComments,icon:n(se,null),actions:[{primary:!0,showBadage:!0,name:"查看",onClick(){h.push({name:ot.Comment,query:{state:0}})}}]},{label:"友链",value:e.value.links,icon:n(ie,null),actions:[{primary:!0,name:"管理",onClick(){h.push({name:ot.Friend,query:{state:0}})}}]},{label:"新的友链申请",value:e.value.linkApply,icon:n(re,null),actions:[{primary:!0,showBadage:!0,name:"查看",onClick(){h.push({name:ot.Friend,query:{state:1}})}}]},{label:"说说",value:e.value.says,icon:n(re,null),actions:[{primary:!0,name:"说一句",onClick(){h.push({name:ot.EditSay})}},{primary:!1,name:"管理",onClick(){h.push({name:ot.ListSay})}}]},{label:"API 总调用次数",value:"N/A"!==e.value.callTime?Intl.NumberFormat("en-us").format(e.value.callTime):"N/A",icon:n(ue,null),actions:[{primary:!0,name:"查看",onClick(){h.push({name:ot.Analyze})}},{name:"清空缓存",onClick(){xa.api.clean_catch.get().then((()=>{m.success("清除成功")}))}}]},{label:"今日 IP 访问次数",value:e.value.todayIpAccessCount,icon:n(ce,null),actions:[{primary:!0,name:"查看",onClick(){h.push({name:ot.Analyze})}}]},{label:"当前在线访客",value:e.value.online,icon:n(pe,null)},{label:"今日访客",value:e.value.todayOnlineTotal,icon:n(me,null)},{value:e.value.todayMaxOnline,label:"今日最多同时在线人数",icon:n(de,null)}])),_=a((()=>()=>n(V,null,n(N,{vertical:!0},n(H,{class:"text-opacity-80 font-light"},"数据统计"),n("p",{class:"-mt-4 mb-3 relative text-gray-500 flex items-center"},n("span",null,"数据更新于: "),n("time",null," ",t.value?Ht(t.value,"yyyy年M月d日 HH:mm:ss"):"N/A"),n(O,{text:!0,onClick:l,class:"ml-4 text-black"},n(E,null,n(W,null))))),n(z,{xGap:20,yGap:20,cols:"2 100:1 400:2 600:3 900:4 1200:5 1600:6"},g.value.map((e=>n($,{key:e.label},n(ra,{...e}))))))));return()=>n(la,null,n(K,{class:"font-light"},"欢迎回来"),n(z,{xGap:12,cols:"1 900:2"},n($,null,n(H,{class:"text-opacity-80 font-light !mt-[10px] !mb-[10px]"},"一言"),n(F,null,n(N,{align:"center",class:"min-h-[3rem]"},p.value?n(V,null,n(U,{class:"leading-normal"},p.value),n("div",{class:"space-x-2 flex items-center"},n(O,{text:!0,onClick:o,class:"ml-0 phone:float-right"},n(E,null,n(W,null))),n(O,{text:!0,onClick:()=>{navigator.clipboard.writeText(p.value),m.success("已复制"),m.info(p.value)}},n(E,null,n(G,null))))):n(U,null,"加载中...")))),n($,null,n(H,{class:"text-opacity-80 font-light !mt-[10px] !mb-[10px]"},"今日诗句"),n(F,null,n(A,{trigger:"hover",placement:"bottom"},{trigger:()=>n(U,null,i.value||"获取中"),default(){var e;const t=null==(e=c.value)?void 0:e.origin;return t?n(J,{class:"text-center min-w-[350px] max-w-[65vw] max-h-[60vh] overflow-auto",bordered:!1},n(H,null,t.title),t.content.map((e=>n(F,{key:e},e)))):null}})))),n(y,null),n(_,null))}}),sa=a({props:{label:String,value:[String,Number]},setup:e=>()=>n(V,null,"N/A"===e.value?n(N,{vertical:!0,align:"center",class:"min-h-[4rem]"},n(Y,{style:{height:".8rem",width:"5rem"}}),n(Y,{style:{height:"1.8rem",width:"3rem"}})):n(Q,{label:e.label,value:e.value}))}),ia=a({props:{processing:Boolean,value:[String,Number]},setup:(e,t)=>()=>n(V,null,"N/A"===e.value?t.slots:n(X,{...e},t.slots))}),ra=a({props:{label:String,value:[Number,String],icon:Function,actions:{type:Array,default:()=>[]}},setup:e=>()=>n(V,null,n(J,null,n(ve,null,{header:()=>n(sa,{label:e.label,value:e.value}),"header-extra":()=>n(E,{class:"text-4xl opacity-70"},"function"==typeof e.icon?e.icon():e.icon),action:()=>e.actions?n(N,{size:"medium",align:"center"},e.actions.map((t=>{const a=()=>t.primary?n(O,{round:!0,type:"primary",onClick:t.onClick},t.name):n(O,{text:!0,onClick:t.onClick},t.name);return t.showBadage?n(ia,{value:e.value,processing:!0},n(a,null)):n(a,null)}))):null})))});const ua=a({props:{title:{type:String,default:"Button"},type:{type:String,default:"normal",validator:e=>["normal","warning","danger"].includes(e)},forecolor:{type:String,default:"#fff"}},setup(){const e=r(),t=r();d((()=>{var a;e.value=null==(a=t.value)?void 0:a.style}));const a=P((()=>{var e;return null==(e=t.value)?void 0:e.getBoundingClientRect()}));return{parallaxBtn:t,btnStyle:e,boundingClientRect:a,down(t){e.value.setProperty("--tz","-25px")},leave(t){e.value.setProperty("--ty","0"),e.value.setProperty("--rx","0"),e.value.setProperty("--ry","0")},move(t){const n=t.clientX-a.value.left,l=t.clientY-a.value.top,o=n-a.value.width/2,s=l-a.value.height/2;e.value.setProperty("--rx",s/-1+"deg"),e.value.setProperty("--ry",o/10+"deg")},up(){e.value.setProperty("--tz","-12px")}}}}),ca=["data-title"];var pa=ft(ua,[["render",function(e,t,a,n,l,o){return h(),y("button",{ref:"parallaxBtn",class:he(["parallax-btn pr",e.type]),"data-title":e.title,style:g({color:e.forecolor}),onMousemove:t[0]||(t[0]=(...t)=>e.move&&e.move(...t)),onMouseup:t[1]||(t[1]=(...t)=>e.up&&e.up(...t)),onMousedown:t[2]||(t[2]=(...t)=>e.down&&e.down(...t)),onMouseleave:t[3]||(t[3]=(...t)=>e.leave&&e.leave(...t))},null,46,ca)}]]);const ma=window.injectData.LOGIN_BG||"https://gitee.com/xun7788/my-imagination/raw/master/images/88426823_p0.jpg",da=a({components:{Avatar:bt,ParallaxButtonVue:pa},setup(){const e=r(!1),{user:t,updateToken:a}=yt(mt),n=u(),l=r(null);R((async()=>{var e;if(!(null!=(e=window.injectData.INIT)?e:(await xa.api.init.get()).isInit))return n.replace("/setup")})),d((()=>{const t=new Image;t.src=ma,t.onload=t=>{e.value=!0},l.value.focus(),document.onkeydown=e=>{l.value.focus()}})),T((()=>{document.onkeydown=null}));const o=B(),s=r(""),i=ye();return{bgUrl:ma,loaded:e,user:t,password:s,handleLogin:async e=>{var l;null==e||e.stopPropagation();try{if(!t.value||!t.value.username)return void o.error("主人信息无法获取");const e=await xa.api.master.login.post({data:{username:null==(l=t.value)?void 0:l.username,password:s.value}});a(e.token),n.push(i.query.from?decodeURI(i.query.from):"/dashboard"),o.success("欢迎回来")}catch(r){o.error("登陆失败")}},input:l}}});fe("data-v-67010585");const va={class:"wrapper"},ha={class:"input-wrap"};ge();var ya=ft(da,[["render",function(e,t,a,n,l,o){var s;const i=_e("Avatar"),r=_e("ParallaxButtonVue");return h(),y("div",null,[f("div",{class:"bg transition-opacity duration-700",style:g({backgroundImage:`url(${e.bgUrl})`,opacity:e.loaded?1:0})},null,4),f("div",va,[we(i,{src:null==(s=e.user)?void 0:s.avatar,size:80},null,8,["src"]),f("form",{action:"#",onSubmit:t[1]||(t[1]=be(((...t)=>e.handleLogin&&e.handleLogin(...t)),["prevent"]))},[f("div",ha,[Pe(f("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=t=>e.password=t),type:"password",autofocus:""},null,512),[[xe,e.password]])]),we(r,{title:"登陆",class:"p-button-raised p-button-rounded",onClick:be(e.handleLogin,["prevent","stop"])},null,8,["onClick"])],32)])])}],["__scopeId","data-v-67010585"]]);const fa=[{path:"/dashboard",component:oa,name:ot.Dashboard,meta:{title:"仪表盘",icon:n(E,null,n(Ee,null))}},{path:"/posts",name:ot.Post,meta:{title:"博文",icon:n(E,null,n(ke,null))},redirect:"/posts/view",component:it,children:[{path:"view",name:ot.ViewPost,meta:{title:"管理文章",icon:n(E,null,n(je,null)),query:{page:1}},component:()=>lt((()=>import("./list-8988eeb7-fc11c37.js")),["list-8988eeb7-fc11c37.js","vendor-d804e806-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","Delete16Regular-2dda7012-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","edit-column-085ec1f6-fc11c37.js","relative-time-7a91ae05-fc11c37.js","use-table-3d17ebd4-fc11c37.js","rounded-button-1ba60073-fc11c37.js"]).then((e=>e.ManagePostListView))},{path:"edit",name:ot.EditPost,meta:{title:"撰写文章",icon:n(E,null,n(Ce,null))},props:!0,component:()=>lt((()=>import("./write-bf12af5a-fc11c37.js")),["write-bf12af5a-fc11c37.js","parse-button-fc0428c0-fc11c37.js","assets/parse-button.dad41530.css","vendor-d804e806-fc11c37.js","vue.runtime.esm-bundler-55d71635-fc11c37.js","rounded-button-1ba60073-fc11c37.js","props-6c0e7643-fc11c37.js","assets/props.345e3215.css","TelegramPlane-eddb6d84-fc11c37.js","underline-input-f8aa310d-fc11c37.js","assets/underline-input.f03d980b.css"])},{path:"category",name:ot.EditCategory,meta:{title:"分类/标签",icon:n(E,null,n(Ie,null))},component:()=>lt((()=>import("./category-45693edc-fc11c37.js")),["category-45693edc-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css"]).then((e=>e.CategoryView))}]},{path:"/notes",name:ot.Note,meta:{title:"记录",icon:n(E,null,n(Le,null))},redirect:"/notes/view",component:it,children:[{path:"view",name:"view-notes",meta:{title:"管理",query:{page:1},icon:n(E,null,n(je,null))},component:()=>lt((()=>import("./list-d4c502c9-fc11c37.js")),["list-d4c502c9-fc11c37.js","vendor-d804e806-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","Delete16Regular-2dda7012-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","edit-column-085ec1f6-fc11c37.js","relative-time-7a91ae05-fc11c37.js","use-table-3d17ebd4-fc11c37.js","rounded-button-1ba60073-fc11c37.js"]).then((e=>e.ManageNoteListView))},{path:"edit",name:ot.EditNote,meta:{title:"树洞",icon:n(E,null,n(Ce,null))},component:()=>lt((()=>import("./write-58152248-fc11c37.js")),["write-58152248-fc11c37.js","parse-button-fc0428c0-fc11c37.js","assets/parse-button.dad41530.css","vendor-d804e806-fc11c37.js","vue.runtime.esm-bundler-55d71635-fc11c37.js","rounded-button-1ba60073-fc11c37.js","props-6c0e7643-fc11c37.js","assets/props.345e3215.css","TelegramPlane-eddb6d84-fc11c37.js","use-parse-payload-095b7ba9-fc11c37.js"])}]},{path:"/comments",name:ot.Comment,meta:{title:"评论",query:{page:1,state:0},icon:n(E,null,n(Ae,null))},component:()=>lt((()=>import("./index-33480079-fc11c37.js")),["index-33480079-fc11c37.js","vendor-d804e806-fc11c37.js","Trash-ff8b1341-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","use-table-3d17ebd4-fc11c37.js"])},{path:"/pages",name:ot.Page,redirect:"/pages/list",meta:{title:"页面",icon:n(E,null,n(Se,null))},component:it,children:[{path:"list",name:ot.ListPage,meta:{title:"独立页面",icon:n(E,null,n(je,null)),query:{page:1}},component:()=>lt((()=>import("./list-62095c97-fc11c37.js")),["list-62095c97-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","vendor-d804e806-fc11c37.js","Delete16Regular-2dda7012-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","relative-time-7a91ae05-fc11c37.js","use-table-3d17ebd4-fc11c37.js","rounded-button-1ba60073-fc11c37.js"]).then((e=>e.ManagePageListView))},{path:"edit",name:ot.EditPage,meta:{title:"创建页面",icon:n(E,null,n(Ce,null))},component:()=>lt((()=>import("./write-28a13e74-fc11c37.js")),["write-28a13e74-fc11c37.js","parse-button-fc0428c0-fc11c37.js","assets/parse-button.dad41530.css","vendor-d804e806-fc11c37.js","vue.runtime.esm-bundler-55d71635-fc11c37.js","rounded-button-1ba60073-fc11c37.js","props-6c0e7643-fc11c37.js","assets/props.345e3215.css","TelegramPlane-eddb6d84-fc11c37.js","underline-input-f8aa310d-fc11c37.js","assets/underline-input.f03d980b.css","use-parse-payload-095b7ba9-fc11c37.js"])}]},{path:"/says",name:ot.Say,meta:{title:"说说",icon:n(E,null,n(De,null))},component:it,children:[{path:"list",name:ot.ListSay,meta:{title:"说什么了",query:{page:1},icon:n(E,null,n(je,null))},component:()=>lt((()=>import("./list-46ba3ff4-fc11c37.js")),["list-46ba3ff4-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","vendor-d804e806-fc11c37.js","Delete16Regular-2dda7012-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","relative-time-7a91ae05-fc11c37.js","use-table-3d17ebd4-fc11c37.js","rounded-button-1ba60073-fc11c37.js"])},{path:"edit",name:ot.EditSay,meta:{title:"说点什么呢",icon:n(E,null,n(Ce,null))},component:()=>lt((()=>import("./edit-0508313b-fc11c37.js")),["edit-0508313b-fc11c37.js","TelegramPlane-eddb6d84-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js","use-parse-payload-095b7ba9-fc11c37.js"])}]},{path:"/recently",name:ot.ListShortHand,meta:{title:"速记",icon:n(E,null,n(ne,null))},component:()=>lt((()=>import("./index-21030489-fc11c37.js")),["index-21030489-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js"])},{path:"/projects",name:ot.Project,meta:{title:"项目",icon:n(E,null,n(Oe,null))},component:it,children:[{path:"list",name:ot.ListProject,meta:{title:"项目列表",query:{page:1},icon:n(E,null,n(je,null))},component:()=>lt((()=>import("./list-3bb36bac-fc11c37.js")),["list-3bb36bac-fc11c37.js","Add12Filled-a2de864f-fc11c37.js","vendor-d804e806-fc11c37.js","Delete16Regular-2dda7012-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","relative-time-7a91ae05-fc11c37.js","use-table-3d17ebd4-fc11c37.js","rounded-button-1ba60073-fc11c37.js"])},{path:"edit",name:ot.EditProject,meta:{title:"创建项目",icon:n(E,null,n(Ce,null))},component:()=>lt((()=>import("./edit-e0b238e6-fc11c37.js")),["edit-e0b238e6-fc11c37.js","TelegramPlane-eddb6d84-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js","monaco-8bbad4de-fc11c37.js","assets/monaco.d41aa9fb.css","props-6c0e7643-fc11c37.js","assets/props.345e3215.css","use-parse-payload-095b7ba9-fc11c37.js"])}]},{path:"/friends",name:ot.Friend,meta:{title:"朋友们",icon:n(E,null,n(Ne,null)),query:{state:"0"}},component:()=>lt((()=>import("./index-4f4f727a-fc11c37.js")),["index-4f4f727a-fc11c37.js","Plus-15f09db1-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","use-table-3d17ebd4-fc11c37.js","vue.runtime.esm-bundler-55d71635-fc11c37.js"])},{path:"/analyze",name:ot.Analyze,component:()=>lt((()=>import("./index-9975beda-fc11c37.js")),["index-9975beda-fc11c37.js","vendor-d804e806-fc11c37.js","Trash-ff8b1341-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","use-table-3d17ebd4-fc11c37.js"]),meta:{title:"数据",icon:n(E,null,n(Te,null)),query:{page:1}}},{path:"/setting",redirect:"/setting/user",meta:{title:"设定",icon:n(E,null,n(qe,null)),params:{type:"user"}},component:()=>null},{path:"/setting/:type",name:ot.Setting,meta:{title:"设定",params:{type:"user"},hide:!0},component:()=>lt((()=>import("./index-0248f453-fc11c37.js")),["index-0248f453-fc11c37.js","assets/index.dbb24a6e.css","vendor-d804e806-fc11c37.js","Plus-15f09db1-fc11c37.js","relative-time-7a91ae05-fc11c37.js","vue.runtime.esm-bundler-55d71635-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-b9318a59-fc11c37.js"])},{path:"/other",name:ot.Other,meta:{title:"其他",icon:n(E,null,n(Me,null))},component:it,children:[{path:"backup",name:ot.Backup,meta:{title:"备份",icon:n(E,null,n(Ve,null))},component:()=>lt((()=>import("./backup-375eb39c-fc11c37.js")),["backup-375eb39c-fc11c37.js","vendor-d804e806-fc11c37.js","rounded-button-1ba60073-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","use-table-3d17ebd4-fc11c37.js","index-b9318a59-fc11c37.js"])},{path:"markdown",name:ot.Markdown,meta:{title:"Markdown 导入导出",icon:n(E,null,n(Re,null))},component:()=>lt((()=>import("./markdown-helper-14a03e77-fc11c37.js")),["markdown-helper-14a03e77-fc11c37.js","index-b9318a59-fc11c37.js","vendor-d804e806-fc11c37.js"])},{path:"cron",name:ot.Cron,meta:{title:"任务",icon:n(E,null,n(Be,null))},component:()=>lt((()=>import("./cron-45613887-fc11c37.js")),["cron-45613887-fc11c37.js","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","vendor-d804e806-fc11c37.js","use-table-3d17ebd4-fc11c37.js","index-b9318a59-fc11c37.js"])},{path:"log",name:ot.Log,meta:{title:"日志",icon:n(E,null,n(He,null))},component:()=>lt((()=>import("./log-f6da2d3d-fc11c37.js")),["log-f6da2d3d-fc11c37.js","assets/log.392acc61.css","index-ca1955a8-fc11c37.js","assets/index.6e7cf112.css","vendor-d804e806-fc11c37.js","use-table-3d17ebd4-fc11c37.js","index-51116797-fc11c37.js"])}]}],ga=[{path:"/",component:Vt,name:ot.Home,redirect:"/dashboard",children:[...fa]},{path:"/login",name:ot.Login,meta:{isPublic:!0,title:"登陆"},component:ya},{path:"/setup",name:ot.Setup,meta:{isPublic:!0,title:"初始化"},component:()=>lt((()=>import("./index-69e4b9d6-fc11c37.js")),["index-69e4b9d6-fc11c37.js","assets/index.089e2a6b.css","vendor-d804e806-fc11c37.js"])},{path:"/dev",redirect:"/",component:it,children:[]},{path:"/page/:path(.*)*",name:"page$",redirect:e=>e.fullPath.replace(/^\/page\//,"/pages/")},{path:"/extra/:path(.*)*",name:"extra",redirect:e=>e.fullPath.replace(/^\/extra/,"")},{path:"/:pathMatch(.*)*",name:"404",meta:{isPublic:!0},redirect:"/"}],_a=ze({history:$e(),routes:ga});const wa=()=>{},ba=["get","post","delete","patch","put"],Pa=["toString","valueOf","inspect","constructor",Symbol.toPrimitive,Symbol.for("util.inspect.custom")];const xa=new class{constructor(){t(this,"_$$instance",null),this._$$instance=We({prefix:window.injectData.BASE_API||"https://api.innei.ren/v2",timeout:1e4,errorHandler:async e=>{var t;const a=window.message;if(!e.request||e.response){if(e.response){try{const t=(await e.response.json()).message;Array.isArray(t)?t.forEach((e=>{a.error(e)})):a.error(t)}catch(n){console.log(n)}return 401===(null==(t=null==e?void 0:e.response)?void 0:t.status)&&_a.push("/login"),Promise.reject(e)}}else a.error("网络错误")}})}get instance(){return this._$$instance}request(e,t,a){return this._$$instance[e](t,a)}get api(){return function(e){const t=[""],a={get:(n,l)=>Pa.includes(l)?()=>t.join("/"):ba.includes(l)?async a=>{const n=await e.request(l,t.join("/"),{...a});return Array.isArray(n)||Fe(n)?(()=>{const e=Ue(n,{deep:!0});return{...e,get data(){var t;return null!=(t=e.data)?t:e}}})():n}:(t.push(l),new Proxy(wa,a)),apply:(e,n,l)=>(t.push(...l.filter((e=>null!=e))),new Proxy(wa,a))};return new Proxy(wa,a)}(this)}};function Ea(){const e=r(),t=P((()=>{var t;return new Map(null==(t=e.value)?void 0:t.map((e=>[e.id,e])))||new Map}));return{data:e,map:t,get:e=>t.value.get(e),async fetch(t){if(e.value&&!t)return e.value;{const t=await xa.api.categories.get({params:{type:"Category"}});e.value=t.data}}}}xa.instance.interceptors.request.use(((e,t)=>{const a=ct();return a&&(t.headers.Authorization="bearer "+a),{url:e+"?t="+ +new Date,options:{...t,interceptors:!0}}}),{});const ka=a({name:"Home",setup(){const{fetchUser:e}=yt(mt),t=u();return d((()=>{const a=B(),n=a.error;Object.assign(a,{error:(...e)=>{throw n.apply(this,e),e[0]}}),window.message=a,window.notification=Ge(),window.dialog=D(),lt((()=>import("./index-51116797-fc11c37.js").then((function(e){return e.i}))),["index-51116797-fc11c37.js","vendor-d804e806-fc11c37.js"]).then((e=>{e.socket.initIO()})),e().then((()=>{"true"===localStorage.getItem("to-setting")&&(t.push({name:ot.Setting,params:{type:"user"}}),localStorage.removeItem("to-setting"))}))})),()=>n(l,null)}}),ja=a({setup(){!function(...e){const t={};e.forEach((e=>{const a=ht(e);t[p(e.name)]=a}))}(Nt,mt,Ea);const{isDark:e}=ht(Nt);return()=>n(Qe,{locale:Je,dateLocale:Ke,theme:e.value?Ye:null},n(Xe,null,n(Ze,null,n(et,null,n(ka,null)))))}});const Ca=new tt({colorful:!1,color:"#1a9cf3"}),Ia=rt.title;_a.beforeEach((async e=>{var t;if(Ca.start(),"/setup"===e.path){const e=null!=(t=window.injectData.INIT)?t:(await xa.api.init.get()).isInit;if(console.log("[isInit]",e),e)return"/"}if(!e.meta.isPublic&&!e.fullPath.startsWith("/dev")){const{ok:t}=await xa.api("master")("check_logged").get();if(!t)return"/login?from="+encodeURI(e.fullPath)}})),_a.afterEach(((e,t)=>{document.title=function(e){if(e)return`${e} - ${Ia}`;return`${Ia}`}(null==e?void 0:e.meta.title),Ca.finish()})),_a.afterEach((e=>{"|publish"==e.hash&&_a.replace({...e,hash:""})})),_a.onError((()=>{Ca.finish()}));const La=at(ja);La.use(_a),La.mount("#app");export{bt as A,Ot as B,Ea as C,Ft as I,pa as P,xa as R,Gt as S,Nt as U,lt as _,la as a,zt as b,rt as c,ot as d,na as e,$t as f,ct as g,Kt as h,Ut as i,pt as j,ft as k,mt as l,Ht as p,_a as r,yt as u};
