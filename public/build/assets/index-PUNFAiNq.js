import{r as a}from"./page-Cja0WINH.js";import{g as J,m as K,u as k,T as Y,r as Z,C as W,k as O,n as _}from"./asyncToGenerator-BBnVhYbp.js";import{o as ee}from"./compact-item-BrmzAPJC.js";import{g as oe,i as re,a as te}from"./index-DFw7ENvf.js";import{u as le,p as H}from"./useClosable-DC0TDBGR.js";import{W as ne,r as ae}from"./button-C7u-9lbV.js";const se=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:o,componentCls:r,calc:c}=e,n=c(o).sub(l).equal(),u=c(t).sub(l).equal();return{[r]:Object.assign(Object.assign({},Z(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:n,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:n}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},I=e=>{const{lineWidth:t,fontSizeIcon:l,calc:o}=e,r=e.fontSizeSM;return K(e,{tagFontSize:r,tagLineHeight:k(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(l).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},P=e=>({defaultBg:new Y(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),M=J("Tag",e=>{const t=I(e);return se(t)},P);var ce=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const ie=a.forwardRef((e,t)=>{const{prefixCls:l,style:o,className:r,checked:c,onChange:n,onClick:u}=e,d=ce(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:b,tag:g}=a.useContext(W),f=h=>{n==null||n(!c),u==null||u(h)},C=b("tag",l),[y,S,i]=M(C),$=O(C,`${C}-checkable`,{[`${C}-checkable-checked`]:c},g==null?void 0:g.className,r,S,i);return y(a.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},o),g==null?void 0:g.style),className:$,onClick:f})))}),de=ie,ge=e=>oe(e,(t,l)=>{let{textColor:o,lightBorderColor:r,lightColor:c,darkColor:n}=l;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:c,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:n,borderColor:n},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ue=_(["Tag","preset"],e=>{const t=I(e);return ge(t)},P);function Ce(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const v=(e,t,l)=>{const o=Ce(l);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},pe=_(["Tag","status"],e=>{const t=I(e);return[v(t,"success","Success"),v(t,"processing","Info"),v(t,"error","Error"),v(t,"warning","Warning")]},P);var me=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const be=a.forwardRef((e,t)=>{const{prefixCls:l,className:o,rootClassName:r,style:c,children:n,icon:u,color:d,onClose:b,bordered:g=!0,visible:f}=e,C=me(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:y,direction:S,tag:i}=a.useContext(W),[$,h]=a.useState(!0),F=ee(C,["closeIcon","closable"]);a.useEffect(()=>{f!==void 0&&h(f)},[f]);const N=re(d),j=te(d),x=N||j,L=Object.assign(Object.assign({backgroundColor:d&&!x?d:void 0},i==null?void 0:i.style),c),s=y("tag",l),[R,q,A]=M(s),D=O(s,i==null?void 0:i.className,{[`${s}-${d}`]:x,[`${s}-has-color`]:d&&!x,[`${s}-hidden`]:!$,[`${s}-rtl`]:S==="rtl",[`${s}-borderless`]:!g},o,r,q,A),E=m=>{m.stopPropagation(),b==null||b(m),!m.defaultPrevented&&h(!1)},[,X]=le(H(e),H(i),{closable:!1,closeIconRender:m=>{const G=a.createElement("span",{className:`${s}-close-icon`,onClick:E},m);return ae(m,G,p=>({onClick:B=>{var T;(T=p==null?void 0:p.onClick)===null||T===void 0||T.call(p,B),E(B)},className:O(p==null?void 0:p.className,`${s}-close-icon`)}))}}),Q=typeof C.onClick=="function"||n&&n.type==="a",w=u||null,U=w?a.createElement(a.Fragment,null,w,n&&a.createElement("span",null,n)):n,z=a.createElement("span",Object.assign({},F,{ref:t,className:D,style:L}),U,X,N&&a.createElement(ue,{key:"preset",prefixCls:s}),j&&a.createElement(pe,{key:"status",prefixCls:s}));return R(Q?a.createElement(ne,{component:"Tag"},z):z)}),V=be;V.CheckableTag=de;const xe=V;export{xe as T};