(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{1867:function(e,n,t){"use strict";t.d(n,{m:function(){return le}});var r,o=t(5893),a=(t(7294),t(5675)),i=t.n(a),s=t(1664),l=t.n(s),c=t(5152),d=t.n(c),u=t(4184),p=t.n(u),m=t(1163),g=t(4793),f=t(3893),h=t(4924),v=t(6042),x=t(9396),j=t(2899),b=t.n(j),I=t(3454);if(!b())throw new Error("Config error: invalid site.config.js");try{I.env.NEXT_PUBLIC_SITE_CONFIG&&(r=JSON.parse(I.env.NEXT_PUBLIC_SITE_CONFIG))}catch(ce){throw console.error('Invalid config "NEXT_PUBLIC_SITE_CONFIG" failed to parse'),ce}var _=(0,v.Z)({},b(),r);function w(e,n){var t=_[e];if(void 0!==t)return t;if(void 0!==n)return n;throw new Error('Config error: missing required site config value "'.concat(e,'"'))}if(!(0,f.q5)(w("rootNotionPageId"),{uuid:!1}))throw new Error('Config error invalid "rootNotionPageId"');(0,f.q5)(w("rootNotionSpaceId",null),{uuid:!0});var N=function(e){return Object.keys(e).reduce((function(n,t){var r=e[t];return(0,x.Z)((0,v.Z)({},n),(0,h.Z)({},r,t))}),{})}(W(w("pageUrlOverrides",{})||{},"pageUrlOverrides")),y=(W(w("pageUrlAdditions",{})||{},"pageUrlAdditions"),w("name"),w("author")),P=w("domain"),k=w("description","Notion Blog"),M=w("facebook",null),C=w("instagram",null),F=w("phone",null),U=w("defaultPageIcon",null),E=w("defaultPageCover",null),S=w("defaultPageCoverPosition",.5),O=w("imageCDNHost",null),T=!1,q=w("includeNotionIdInUrls",!1);(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I.env,r=t[e];if(void 0!==r)return r;if(void 0!==n)return n;throw new Error('Config error: missing required env variable "'.concat(e,'"'))})("PORT","3000"),"https://".concat(P);function W(e,n){return Object.keys(e).reduce((function(t,r){var o=e[r],a=(0,f.q5)(o,{uuid:!1});if(!a)throw new Error("Invalid ".concat(n,' page id "').concat(o,'"'));if(!r)throw new Error("Missing ".concat(n,' value for page "').concat(o,'"'));if(!r.startsWith("/"))throw new Error("Invalid ".concat(n,' value for page "').concat(o,'": value "').concat(r,'" should be a relative URI that starts with "/"'));var i=r.slice(1);return(0,x.Z)((0,v.Z)({},t),(0,h.Z)({},i,a))}),{})}function Z(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.uuid,o=void 0===r||r,a=(0,f.q5)(e,{uuid:!1});if(!a)return null;var i=N[a];return i||(0,f.Sp)(e,n,{uuid:o})}var A=!!q,R=function(e,n,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,f.Gw)(r)===e.rootNotionPageId?G("/",t):G("/".concat(Z(r,n,{uuid:A})),t)}};function G(e,n){return[e,n.toString()].filter(Boolean).join("?")}var H=function(e,n){if(!e)return null;if(e.startsWith("data:"))return e;if(O&&e.startsWith(O))return e;if(e.startsWith("/images")&&(e="https://www.notion.so".concat(e)),!e.startsWith("https://images.unsplash.com")){e="https://www.notion.so".concat(e.startsWith("/image")?e:"/image/".concat(encodeURIComponent(e)));var t=new URL(e),r="space"===n.parent_table?"block":n.parent_table;"collection"===r&&(r="block"),t.searchParams.set("table",r),t.searchParams.set("id",n.id),t.searchParams.set("cache","v2"),e=t.toString()}return B(e)},B=function(e){return e.startsWith("data:")?e:O?"".concat(O,"/").concat(encodeURIComponent(e)):e};var L=t(9008),D=t.n(L),J=function(e){var n=e.site;if(!n.fontFamily)return null;var t=[n.fontFamily],r=t.map((function(e){return e.replace(/ /g,"+")})).map((function(e){return"family=".concat(e,":ital,wght@0,200..700;1,200..700")})).join("&"),a="https://fonts.googleapis.com/css?".concat(r,"&display=swap"),i=t.map((function(e){return'"'.concat(e,'"')})).join(", ");return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(D(),{children:[(0,o.jsx)("link",{rel:"stylesheet",href:a}),(0,o.jsx)("style",{children:"\n          .notion.notion-app {\n            font-family: ".concat(i,", -apple-system, BlinkMacSystemFont,\n              'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif,\n              'Segoe UI Emoji', 'Segoe UI Symbol';\n          }\n        ")})]})})},Q=t(9534),V=t(1170),X=t.n(V),Y=function(e){var n=e.className,t=(0,Q.Z)(e,["className"]);return(0,o.jsxs)("svg",(0,x.Z)((0,v.Z)({className:p()(X().loadingIcon,n)},t),{viewBox:"0 0 24 24",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1",children:[(0,o.jsx)("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),(0,o.jsx)("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"})]})}),(0,o.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",children:(0,o.jsx)("g",{transform:"translate(-236.000000, -286.000000)",children:(0,o.jsxs)("g",{transform:"translate(238.000000, 286.000000)",children:[(0,o.jsx)("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),(0,o.jsx)("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})]})})})]}))},z=function(){return(0,o.jsx)("div",{className:X().container,children:(0,o.jsx)(Y,{})})},K=t(2484),$=t(1476),ee=function(e){var n=e.siteMap,t=e.pageId,r=(0,Q.Z)(e,["siteMap","pageId"]),a=(0,f.q5)(t),i=R(n.site,n.pageMap[a],new URLSearchParams);return(0,o.jsx)(l(),{href:i(a),children:(0,o.jsx)("a",(0,x.Z)((0,v.Z)({},r),{children:(0,f.Ho)(n.pageMap[a].block[a].value,n.pageMap[a])}))})},ne=t(1327),te=t.n(ne),re=function(e){var n=e.siteMap;return(0,o.jsx)("footer",{className:te().footer,children:(0,o.jsxs)("div",{className:te().footerWrapper,children:[(0,o.jsxs)("div",{className:te().social,children:[M&&(0,o.jsx)("a",{className:te().facebook,href:"https://facebook.com/".concat(M),title:"Facebook ".concat(M),target:"_blank",rel:"noopener noreferrer",children:"Facebook"}),C&&(0,o.jsx)("a",{className:te().instagram,href:"https://instagram.com/".concat(C),title:"LinkedIn ".concat(C),target:"_blank",rel:"noopener noreferrer",children:"Instagram"})]}),(0,o.jsxs)("div",{className:te().copyright,children:[y,(0,o.jsx)("br",{}),"Praticienne en MTC \xe0 domicile",(0,o.jsx)("br",{}),F&&(0,o.jsx)("a",{className:te().phone,href:"tel:".concat(F),title:"T\xe9l\xe9phone",target:"_blank",rel:"noopener noreferrer",children:F})]}),(0,o.jsx)("div",{className:te().settings,children:(0,o.jsx)(ee,{siteMap:n,pageId:"M-diation-protection-des-donn-es-et-mentions-l-gales-8da4703acea74082895bbeb4752c20f2"})})]})})},oe=t(1751),ae=t.n(oe),ie=function(e){var n=e.siteMap;return(0,o.jsxs)("header",{className:ae().header,children:[(0,o.jsxs)("h1",{children:["Emilie Meot",(0,o.jsx)("br",{}),"Praticienne en MTC"]}),(0,o.jsx)("nav",{"aria-label":"Main Menu",children:(0,o.jsxs)("ul",{role:"menubar",id:"menu-mtc-main-menu",children:[(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"Accueil-7f9e6130d76940deb467f36d05b17526",role:"menuitem"})}),(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"Qu-est-ce-que-la-MTC-4d3b9b280abb49d5b15152c38d8f2861",role:"menuitem"})}),(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"Qui-suis-je-3ae646cbc3804adb9e977aa25c571321",role:"menuitem"})}),(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"Votre-s-ance-de-MTC-149d56a203c54e30b9dadfd2ad65b81f",role:"menuitem"})}),(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"FAQ-5eae3a3d58e940388866a51e3a01c2a8",role:"menuitem"})}),(0,o.jsx)("li",{children:(0,o.jsx)(ee,{siteMap:n,pageId:"Rdv-et-infos-pratiques-eca1edc0fb67400aa9073dceae1f7407",role:"menuitem"})})]})})]})},se=d()((function(){return Promise.all([t.e(276),t.e(848)]).then(t.bind(t,635)).then((function(e){return e.Collection}))}),{loadableGenerated:{webpack:function(){return[635]}}}),le=function(e){var n,t,r,a=e.site,s=e.recordMap,c=e.siteMap,d=e.error,u=e.pageId,h=(0,m.useRouter)(),v=new URLSearchParams({});if(h.isFallback)return(0,o.jsx)(z,{});var x=Object.keys((null===s||void 0===s?void 0:s.block)||{}),j=null===s||void 0===s||null===(n=s.block)||void 0===n||null===(t=n[x[0]])||void 0===t?void 0:t.value;if(d||!a||!x.length||!j)return(0,o.jsx)(K.l,{site:a,pageId:u,error:d,siteMap:c});var b=(0,f.Ho)(j,s)||a.name;console.log("notion page",{isDev:T,title:b,pageId:u,rootNotionPageId:a.rootNotionPageId,recordMap:s});var I=window;I.pageId=u,I.recordMap=s,I.block=j;var _,w=R(a,s,v),N=function(e,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=(0,f.q5)(t,{uuid:!0});return(0,f.Gw)(t)===e.rootNotionPageId?"https://".concat(e.domain):"https://".concat(e.domain,"/").concat(Z(r,n,{uuid:A}))}}(a,s)(u),y=H((null===(r=j.format)||void 0===r?void 0:r.page_cover)||E,j),P=null!==(_=function(e,n){return(0,f.rp)("Description",e,n)}(j,s))&&void 0!==_?_:k;return j.properties={title:[[b]]},(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($.H,{site:a,title:b,description:P,image:y,canonicalPageUrl:N}),(0,o.jsx)(J,{site:a}),(0,o.jsx)(ie,{siteMap:c}),(0,o.jsx)(g.cp,{bodyClassName:p()(X().notion),components:{nextImage:i(),nextLink:l(),Collection:se},recordMap:s,rootPageId:a.rootNotionPageId,previewImages:!1!==a.previewImages,showCollectionViewDropdown:!1,defaultPageIcon:U,defaultPageCover:E,defaultPageCoverPosition:S,mapPageUrl:w,mapImageUrl:H,pageHeader:null,pageFooter:null}),(0,o.jsx)(re,{siteMap:c})]})}},2484:function(e,n,t){"use strict";t.d(n,{l:function(){return s}});var r=t(5893),o=(t(7294),t(1476)),a=t(1170),i=t.n(a),s=function(e){var n=e.site,t=e.pageId,a=e.error;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.H,{site:n,title:(null===n||void 0===n?void 0:n.name)||"Notion Page Not Found"}),(0,r.jsx)("div",{className:i().container,children:(0,r.jsxs)("main",{className:i().main,children:[(0,r.jsx)("h1",{children:"Notion Page Not Found"}),a?(0,r.jsx)("p",{children:a.message}):t&&(0,r.jsxs)("p",{children:['Make sure that Notion page "',t,'" is publicly accessible.']}),(0,r.jsx)("img",{src:"/404.png",alt:"404 Not Found",className:i().errorImage})]})})]})}},1476:function(e,n,t){"use strict";t.d(n,{H:function(){return i}});var r=t(5893),o=t(9008),a=t.n(o),i=(t(7294),function(e){var n=e.site,t=e.children,o=e.description,i=e.image,s=e.canonicalPageUrl,l=e.title;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"theme-color",content:"#73a252"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),l||(null===n||void 0===n?void 0:n.name)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:l||(null===n||void 0===n?void 0:n.name)}),(0,r.jsx)("meta",{property:"og:title",content:l||(null===n||void 0===n?void 0:n.name)}),(0,r.jsx)("meta",{name:"twitter:title",content:l||(null===n||void 0===n?void 0:n.name)})]}):null,o||(null===n||void 0===n?void 0:n.description)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:o||(null===n||void 0===n?void 0:n.description)}),(0,r.jsx)("meta",{property:"og:description",content:o||(null===n||void 0===n?void 0:n.description)}),(0,r.jsx)("meta",{name:"twitter:description",content:o||(null===n||void 0===n?void 0:n.description)})]}):null,(null===n||void 0===n?void 0:n.name)?(0,r.jsx)("meta",{property:"og:site_name",content:n.name}):null,(null===n||void 0===n?void 0:n.domain)?(0,r.jsx)("meta",{property:"twitter:domain",content:n.domain}):null,i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("meta",{property:"og:image",content:i})]}):(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"canonical",href:s}),(0,r.jsx)("meta",{property:"og:url",content:s}),(0,r.jsx)("meta",{property:"twitter:url",content:s})]}),t]})})},2899:function(e){"use strict";e.exports={rootNotionPageId:"7f9e6130d76940deb467f36d05b17526",rootNotionSpaceId:null,name:"Emilie Meot MTC",domain:"mtc-passy-mont-blanc.com",author:"Emilie Meot",description:"Soins Traditionnels Chinois en vall\xe9e de l'Arve, sur Passy et environs",facebook:"emilie-meot",instagram:"emilie-meot",phone:"07.67.66.15.50",defaultPageIcon:null,defaultPageCover:null,defaultPageCoverPosition:.5,pageUrlOverrides:null}},1327:function(e){e.exports={footer:"Footer_footer___O5Nl",footerWrapper:"Footer_footerWrapper__NMsFq",copyright:"Footer_copyright__j8qUS",settings:"Footer_settings__JixBV",social:"Footer_social__h2A4_"}},1751:function(e){e.exports={header:"Header_header__l1qoc"}},1170:function(e){e.exports={container:"styles_container__unOV2",loadingIcon:"styles_loadingIcon__cjsDo",spinner:"styles_spinner__YFmQJ",main:"styles_main__Y8b8e",errorImage:"styles_errorImage__SpJkk",pageActions:"styles_pageActions__hTb1P"}}}]);