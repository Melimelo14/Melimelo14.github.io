(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[380],{5380:function(e,t,i){"use strict";i.d(t,{m:function(){return G}});var o=i(5893),n=i(7294),a=i(5675),l=i.n(a),s=i(1664),r=i.n(s),c=i(5152),d=i.n(c),u=i(3967),m=i.n(u),v=i(1163),p=i(8254),h=i(7554);function g(){return"undefined"==typeof document?null:(0,o.jsx)(h.D5,{token:"eyJraWQiOiJaSjhRN04zOFAzIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI4U0VQRlNDN1MzIiwiaWF0IjoxNzI0NzY1NDk1LCJvcmlnaW4iOiJtdGMtcGFzc3ktbW9udC1ibGFuYy5jb20ifQ.BnZafyCLLpsxruJ3ObOgeyJtAEh8WcNEyQgNLWSb1eqiUyaAAIscvb4S5CjnTwQz-Zfn6G6KzXD8gefQwYuzVg",colorScheme:0,showsCompass:2,showsScale:2,showsUserLocationControl:!0,initialRegion:{centerLatitude:45.92486412862045,centerLongitude:6.681416146791913,latitudeDelta:.02,longitudeDelta:.04},children:(0,o.jsx)(h.Jx,{latitude:45.92486412862045,longitude:6.681416146791913})})}var x=i(4304),_=i(4793),b=i(7040),j=i(9016),N=i(2896);let f=(e,t)=>{if(!e)return null;if(e.startsWith("data:")||N.EN&&e.startsWith(N.EN))return e;if(e.startsWith("/images")&&(e="https://www.notion.so".concat(e)),!e.startsWith("https://images.unsplash.com")){let i=new URL(e="https://www.notion.so".concat(e.startsWith("/image")?e:"/image/".concat(encodeURIComponent(e)))),o="space"===t.parent_table?"block":t.parent_table;"collection"===o&&(o="block"),i.searchParams.set("table",o),i.searchParams.set("id",t.id),i.searchParams.set("cache","v2"),e=i.toString()}return k(e)},k=e=>e.startsWith("data:")?e:N.EN?"".concat(N.EN,"/").concat(encodeURIComponent(e)):e;var w=i(7593),y=i.n(w),I=i(520),C=i.n(I);let T=()=>(0,o.jsx)("div",{className:y().container,children:(0,o.jsxs)("svg",{className:C().loadingIcon,viewBox:"0 0 24 24",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1",children:[(0,o.jsx)("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),(0,o.jsx)("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"})]})}),(0,o.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",children:(0,o.jsx)("g",{transform:"translate(-236.000000, -286.000000)",children:(0,o.jsxs)("g",{transform:"translate(238.000000, 286.000000)",children:[(0,o.jsx)("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),(0,o.jsx)("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})]})})})]})});var S=i(1815),W=i(7369),L=i(5696),M=i(7822),D=i(4493),P=i.n(D);let O=e=>{let[t,i]=n.useState(0),a=e=>i(e),{block:l,ctx:s}=e,r=l.collection_id,c=l.view_ids[0];if(!r||!c)return null;let d=s.recordMap.collection[r],u=s.recordMap.collection_view[c],m=d.value.schema,v=u.value.page_sort.map(e=>s.recordMap.block[e]).map(e=>Object.entries(e.value.properties).reduce((e,t)=>{var i,o;let[n,a]=t;return e[null!==(o=null===(i=m[n])||void 0===i?void 0:i.name)&&void 0!==o?o:n]=a[0],e},{})).reduce((e,t,i)=>{let o=Math.floor(i/3);return e[o]||(e[o]=[]),e[o].push(t),e},[]);return console.log({collection:d,testimonialList:v,props:e}),(0,o.jsx)("section",{className:P().testimonialSection,children:(0,o.jsxs)("div",{className:"container px-4 mx-auto",children:[(0,o.jsx)("div",{className:P().testimonialGrid,children:v[t].map((e,t)=>{var i;return(0,o.jsx)("div",{className:P().testimonialItem,children:(0,o.jsxs)("div",{className:P().testimonialContent,children:[(0,o.jsx)("p",{className:P().testimonialText,children:null!==(i=e.Text)&&void 0!==i?i:"foo bar"}),(0,o.jsx)("p",{className:P().testimonialName,children:e.Name})]})},t)})}),(0,o.jsx)("div",{className:P().testimonialNavigation,children:v.map((e,i)=>(0,o.jsx)("button",{className:t===i?P().testimonialNavButtonActive:P().testimonialNavButton,onClick:()=>a(i)},i))})]})})},E=d()(()=>Promise.all([i.e(276),i.e(472)]).then(i.bind(i,635)).then(e=>e.Collection),{loadableGenerated:{webpack:()=>[635]}}),G=e=>{var t,i,a,s,c,d;let{site:u,pageMap:h,recordMap:k,error:w,pageId:I}=e,C=(0,v.useRouter)(),D=new URLSearchParams({});if(n.useEffect(()=>{!async function(){let e=await (0,p.o)();e("ui",{styles:{branding:{brandColor:"#4c6074"}},hideEventTypeDetails:!1,layout:"month_view"}),e("on",{action:"eventTypeSelected",callback:e=>{var t,i;(0,x.B)("select_event_type",{type:String(null===(i=e.detail)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.eventType)})}}),e("on",{action:"bookingSuccessful",callback:e=>{var t,i;(0,x.B)("booking_successful",{type:String(null===(i=e.detail)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.eventType)})}})}()},[]),C.isFallback)return(0,o.jsx)(T,{});let P=Object.keys((null==k?void 0:k.block)||{}),G=null==k?void 0:null===(i=k.block)||void 0===i?void 0:null===(t=i[P[0]])||void 0===t?void 0:t.value;if(w||!k||!P.length||!G)return(0,o.jsx)(S.l,{site:u,pageId:I,error:w,recordMap:k,pageMap:h});let R=(0,b.Ho)(G,k)||u.name;if(N.r8&&console.log("notion page",{isDev:N.r8,title:R,pageId:I,rootNotionPageId:u.rootNotionPageId,recordMap:k}),!N.sk&&N.r8){let e=window;e.pageId=I,e.recordMap=k,e.block=G}let U=(0,j.O)(u,k,D),B=N.r8?void 0:(0,j.K)(u,k)(I),F=f(null===(a=G.format)||void 0===a?void 0:a.page_cover,G),z=null!==(s=null!==(d=null===(c=G.properties)||void 0===c?void 0:c.Description)&&void 0!==d?d:(0,b.rp)("Description",G,k))&&void 0!==s?s:N.WL;return G.properties={title:[[R]],Description:[[z]]},(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.H,{site:u,title:R,description:z,image:F,canonicalPageUrl:B}),(0,o.jsx)(M.h,{site:u,pageMap:h}),(0,o.jsx)(_.cp,{bodyClassName:m()(y().notion),components:{nextImage:l(),nextLink:r(),Collection:e=>{var t;return(null===(t=e.block)||void 0===t?void 0:t.collection_id)==="b038533a-5aae-4423-bb02-1f4b60681450"?(0,o.jsx)(O,{...e}):(0,o.jsx)(E,{...e})},Embed:e=>{var t,i,a,l,s,r,c,d;return(null===(l=e.block)||void 0===l?void 0:null===(a=l.properties)||void 0===a?void 0:null===(i=a.source)||void 0===i?void 0:null===(t=i[0])||void 0===t?void 0:t[0])==="https://cal.com/mtc-passy-mont-blanc"?(0,o.jsx)(p.Z,{calLink:"mtc-passy-mont-blanc",style:{width:"100%",height:"auto",overflow:"scroll"}}):(null===(d=e.block)||void 0===d?void 0:null===(c=d.properties)||void 0===c?void 0:null===(r=c.source)||void 0===r?void 0:null===(s=r[0])||void 0===s?void 0:s[0])==="https://maps.app.goo.gl/4SLAhoq8NFsDuEjj7"?(0,o.jsx)(n.Suspense,{children:(0,o.jsx)(g,{})}):null},PageLink:r()},recordMap:k,rootPageId:u.rootNotionPageId,showCollectionViewDropdown:!1,mapPageUrl:U,mapImageUrl:f,pageHeader:null,pageFooter:null}),(0,o.jsx)(L.$,{site:u,pageMap:h})]})}},520:function(e){e.exports={loadingIcon:"Loading_loadingIcon___MQrk",spinner:"Loading_spinner__kKSyD"}},4493:function(e){e.exports={testimonialSection:"Testimonials_testimonialSection__Tr_7R",testimonialGrid:"Testimonials_testimonialGrid__rOn73",testimonialItem:"Testimonials_testimonialItem__FbnQI",testimonialContent:"Testimonials_testimonialContent___7HD0",testimonialName:"Testimonials_testimonialName__qnIRT",testimonialText:"Testimonials_testimonialText__2_p92",testimonialNavigation:"Testimonials_testimonialNavigation__dKvwF",testimonialNavButton:"Testimonials_testimonialNavButton__r8Gu9",testimonialNavButtonActive:"Testimonials_testimonialNavButtonActive__i89Ps"}}}]);