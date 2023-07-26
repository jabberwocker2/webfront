import{_ as w}from"./TopNav.f1bc90c8.js";import{o as r,c as i,F as v,m as k,a as t,t as p,n as x,s as h,f as T,r as F,b as _,k as a,v as y,l as b,y as $,g as I,w as C,x as N}from"./entry.946fca91.js";import{_ as z}from"./nuxt-link.4ed46cda.js";const M={class:"scrolltags flex overflow-scroll m-4 ml-[15%] mr-[20%]"},B=["id","onClick"],E={__name:"AddScrollable",setup(d){const{$generalStore:e,$userStore:n,$profileStore:m}=h(),l=[{label:"sports",value:e.sportsTag},{label:"cars",value:e.carsTag},{label:"news",value:e.newsTag},{label:"cooking",value:e.cookingTag},{label:"DIY",value:e.DIYTag},{label:"history",value:e.historyTag},{label:"music",value:e.musicTag},{label:"craft",value:e.craftTag},{label:"bikes",value:e.bikesTag},{label:"national",value:e.nationalTag},{label:"kids",value:e.kidsTag},{label:"science",value:e.scienceTag}],c=(g,u)=>{let o="";console.log("reached search",u.target.id),document.getElementById(u.target.id).style.backgroundColor?(document.getElementById(u.target.id).style.backgroundColor="",document.getElementById(u.target.id).style.color="#004151"):(document.getElementById(u.target.id).style.backgroundColor="#f0cc2c",document.getElementById(u.target.id).style.color="white");for(let s=0;s<l.length;s++)l[s].label==g.label&&(l[s].value==!0?l[s].value=!1:l[s].value=!0),l[s].value==!0&&(o==""?o+=l[s].label:o+=","+l[s].label);e.selectedTags=o,e.getAllUsersAndPosts(o)};return(g,u)=>(r(),i("div",M,[(r(),i(v,null,k(l,o=>t("button",{class:x([`${o.label}`,"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"]),id:`${o.label}`,key:o,onClick:s=>c(o,s)},p(o.label),11,B)),64))]))}},L=E,A={class:"w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md"},D={class:"flex items-center lg:mx-0 mx-auto"},V={__name:"MenuItem",props:["iconString","colorString","sizeString"],setup(d){const e=d,{iconString:n,colorString:m,sizeString:l}=T(e);let c=F("");return n.value==="For You"&&(c.value="material-symbols:home-rounded"),n.value==="Following"&&(c.value="ci:group"),n.value==="LIVE"&&(c.value="ri:live-line"),(g,u)=>{const o=y;return r(),i("div",A,[t("div",D,[_(o,{name:a(c),color:a(m),size:a(l)},null,8,["name","color","size"]),t("span",{class:x([`text-[${a(m)}]`,"lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"])},p(a(n)),3)])])}}},Y=V,P={class:"flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"},R=["src"],G={class:"lg:pl-2.5 lg:block hidden"},O={class:"flex items-center"},Q={class:"font-bold text-[14px]"},U={class:"ml-1 rounded-full bg-[#58D5EC] h-[14px] relative"},W={class:"font-light text-[12px] text-gray-600"},j={__name:"MenuItemFollow",props:["user"],setup(d){const{$generalStore:e}=h();return(n,m)=>{const l=y;return r(),i("div",P,[d.user.image?(r(),i("img",{key:0,class:"rounded-full lg:mx-0 mx-auto",width:"35",src:d.user.image},null,8,R)):b("",!0),t("div",G,[t("div",O,[t("div",Q,p(a(e).allLowerCaseNoCaps(d.user.name)),1),t("div",U,[_(l,{class:"relative -top-[7px]",name:"teenyicons:tick-small-solid",color:"#FFFFFF",size:"15"})])]),t("div",W,p(d.user.name),1)])])}}},q=j,H={class:"lg:w-full w-[55px] mx-auto"},J=t("div",{class:"border-b lg:ml-2 mt-2"},null,-1),K=t("div",{class:"lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"}," Suggested accounts ",-1),X=t("div",{class:"lg:hidden block pt-3"},null,-1),Z=["onClick"],ee=t("button",{class:"lg:block hidden text-[black] pt-1.5 pl-2 text-[13px]"}," See all ",-1),te={key:1},le=t("div",{class:"border-b lg:ml-2 mt-2"},null,-1),oe=t("div",{class:"lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"}," Following accounts ",-1),se=t("div",{class:"lg:hidden block pt-3"},null,-1),ne=t("button",{class:"lg:block hidden text-[black] pt-1.5 pl-2 text-[13px]"},"See more",-1),ae=[le,oe,se,ne],ce=t("div",{class:"lg:block hidden border-b lg:ml-2 mt-2"},null,-1),re=t("div",{class:"pb-14"},null,-1),ie={__name:"SideNavMain",setup(d){const{$generalStore:e,$userStore:n}=h(),m=$(),l=I(),c=g=>{if(!n.id){e.isLoginOpen=!0;return}setTimeout(()=>l.push(`/profile/${g.id}`),200)};return(g,u)=>{const o=Y,s=z,S=q;return r(),i("div",{id:"SideNavMain",class:x([a(m).fullPath==="/"?"lg:w-[250px]":"lg:w-[220px]","fixed z-20 bg-white dark:bg-black h-full lg:border-r-0 border-r w-[75px] overflow-auto"])},[t("div",H,[_(s,{to:"/"},{default:C(()=>[_(o,{iconString:"For You",colorString:"black",sizeString:"30"})]),_:1}),_(o,{iconString:"Following",colorString:"#000000",sizeString:"27"}),J,K,X,a(e).suggested?(r(!0),i(v,{key:0},k(a(e).suggested,f=>(r(),i("div",null,[t("div",{onClick:_e=>c(f),class:"cursor-pointer"},[_(S,{user:f},null,8,["user"])],8,Z)]))),256)):b("",!0),ee,a(n).id?(r(),i("div",te,ae)):b("",!0),ce,re])],2)}}},de=ie,ue={__name:"MainLayout",setup(d){const e=$();return(n,m)=>{const l=w,c=L,g=de;return r(),i(v,null,[_(l),_(c),t("div",{class:x([a(e).fullPath==="/"?"max-w-[1240px]":"","grid mx-auto lg:px-2.5 px-0"])},[t("div",null,[_(g)]),N(n.$slots,"default")],2)],64)}}},xe=ue;export{xe as default};
