import{f as L,r as d,z as C,o as u,c as p,a as e,t as m,k as l,n as R,g as B,b as y,l as h,w as I,F as N,E as w,A as P,B as S,C as V,v as E,s as O}from"./entry.f5625d91.js";import $ from"./uploadLayout.57eff78d.js";import"./TopNav.d96a6528.js";import"./nuxt-link.a6f9bb0b.js";const A={class:"w-[100%] relative flex justify-center"},H={__name:"uploadError",props:["errorType"],setup(k){const v=k,{errorType:c}=L(v);let o=d("");return C(()=>c.value,()=>{c.value=="caption"?o.value="Maximum 150 characters.":c.value=="bio"?o.value="Maximum 80 characters.":c.value=="file"?o.value="Unsupported file. Use MP4 instead.":o.value=""}),(x,f)=>(u(),p("div",A,[e("div",{class:R(["absolute top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm",l(c)?"visible":"invisible"])},m(l(o)),3)]))}},G=H,K={key:0,class:"fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50"},Y={class:"w-full mt-[80px] mb-[40px] bg-white dark:bg-black shadow-lg rounded-md py-6 md:px-10 px-4"},q=e("div",null,[e("div",{class:"text-[23px] font-semibold"},"Upload video or a thought"),e("div",{class:"text-gray-400 mt-1"},"Post a video or a thought to your account")],-1),J={class:"mt-8 md:flex gap-6"},Q=["onDrop"],W=e("div",{class:"mt-4 text-[17px]"},"Select video to upload",-1),X=e("div",{class:"mt-1.5 text-gray-500 text-[13px]"},"Or drag and drop a file",-1),Z=e("div",{class:"mt-12 text-gray-400 text-sm"},"MP4",-1),ee=e("div",{class:"mt-2 text-gray-400 text-[13px]"},"Up to 30 minutes",-1),te=e("div",{class:"mt-2 text-gray-400 text-[13px]"},"Less than 2 GB",-1),se=e("div",{class:"px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#f0cc2c] rounded-sm"}," Select file ",-1),le={key:1,class:"md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative"},ne=e("div",{class:"bg-black h-full w-full"},null,-1),oe=["src"],re={class:"absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300"},ie={class:"flex items-center truncate"},ae={class:"text-[11px] pl-1 truncate text-ellipsis"},de={class:"mt-4 mb-6"},ue={class:"mt-5"},pe={class:"flex items-center justify-between"},ce=e("div",{class:"mb-1 text-[15px]"},"Thought",-1),xe={class:"text-gray-400 text-[12px]"},ge={class:"mt-5"},me={class:"flex items-center justify-between"},fe=e("div",{class:"mb-1 text-[15px]"},"Tags",-1),ye={class:"text-gray-400 text-[12px]"},ve=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Sports ",-1),be=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),_e=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),he=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Te=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),ke=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),we=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Ce=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Ue=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),je=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),De=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),ze=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Fe=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Me=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Le=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Re=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Be=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Ie=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Ne=e("div",{class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag ",-1),Pe={class:"flex gap-3"},Se={key:0,class:"mt-4"},Ve={key:0,class:"text-red-600"},Ee={key:1,class:"text-red-600"},Ge={__name:"index",setup(k){const{$userStore:v}=O(),c=B();let o=d(null),x=d(null),f=d(null),i=d(""),g=d(null),a=d(null),b=d(!1),_="All";C(()=>i.value,r=>{if(r.length>=150){f.value="caption";return}f.value=null});const U=()=>{x.value=URL.createObjectURL(o.value.files[0]),g.value=o.value.files[0]},j=r=>{f.value="",o.value=r.dataTransfer.files[0],g.value=r.dataTransfer.files[0],o.value.name.substring(o.value.name.lastIndexOf(".")+1),x.value=URL.createObjectURL(r.dataTransfer.files[0])},n=r=>(console.log(r.target.innerHTML),_+=", "+r.target.innerHTML,_),D=()=>{o.value=null,x.value=null,g.value=null,i.value=""},z=async()=>{a.value=null;let r=new FormData;r.append("video",g.value||""),r.append("text",i.value||""),r.append("tags",_),console.log(_),g.value&&i.value&&(b.value=!0);try{(await v.createPost(r)).status===200&&setTimeout(()=>{c.push("/profile/"+v.id),b.value=!1},1e3)}catch(t){a.value=t.response.data,console.log(a.value),b.value=!1}},F=()=>{o.value=null,x.value=null,g.value=null};return(r,t)=>{const M=G,T=E;return u(),p(N,null,[y(M,{errorType:l(f)},null,8,["errorType"]),l(b)?(u(),p("div",K,[y(T,{class:"animate-spin ml-1",name:"mingcute:loading-line",size:"100",color:"#FFFFFF"})])):h("",!0),y($,null,{default:I(()=>[e("div",Y,[q,e("div",J,[l(x)?(u(),p("div",le,[ne,e("video",{autoplay:"",loop:"",muted:"",class:"absolute rounded-xl object-cover z-10 p-[13px] w-full h-full",src:l(x)},null,8,oe),e("div",re,[e("div",ie,[y(T,{name:"clarity:success-standard-line",size:"16",class:"min-w-[16px]"}),e("div",ae,m(l(g).name),1)]),e("button",{onClick:F,class:"text-[11px] ml-2 font-semibold"}," Change ")])])):(u(),p("label",{key:0,for:"fileInput",onDrop:w(j,["prevent"]),onDragover:t[0]||(t[0]=w(()=>{},["prevent"])),class:"md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"},[y(T,{name:"majesticons:cloud-upload",size:"40",color:"#b3b3b1"}),W,X,Z,ee,te,se,e("input",{ref_key:"file",ref:o,type:"file",id:"fileInput",onInput:U,hidden:""},null,544)],40,Q)),e("div",de,[e("div",ue,[e("div",pe,[ce,e("div",xe,m(l(i).length)+"/150",1)]),P(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>V(i)?i.value=s:i=s),maxlength:"150",type:"text",class:"w-full border p-2.5 rounded-md focus:outline-none"},null,512),[[S,l(i)]])]),e("div",ge,[e("div",me,[fe,e("div",ye,m(l(i).length)+"/150",1)]),ve,e("div",{onClick:t[2]||(t[2]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer",value:"history"}," History "),e("div",{onClick:t[3]||(t[3]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," News "),e("div",{onClick:t[4]||(t[4]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Cooking "),e("div",{onClick:t[5]||(t[5]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," National "),e("div",{onClick:t[6]||(t[6]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," DIY "),e("div",{onClick:t[7]||(t[7]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Kids "),e("div",{onClick:t[8]||(t[8]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Music "),e("div",{onClick:t[9]||(t[9]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Craft "),e("div",{onClick:t[10]||(t[10]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Science "),e("div",{onClick:t[11]||(t[11]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Cars "),e("div",{onClick:t[12]||(t[12]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Bikes "),e("div",{onClick:t[13]||(t[13]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag "),e("div",{onClick:t[14]||(t[14]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag "),e("div",{onClick:t[15]||(t[15]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag "),e("div",{onClick:t[16]||(t[16]=s=>n(s)),class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full cursor-pointer"}," Tag "),be,_e,he,Te,ke,we,Ce,Ue,je,De,ze,Fe,Me,Le,Re,Be,Ie,Ne]),e("div",Pe,[e("button",{onClick:t[17]||(t[17]=s=>D()),class:"px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"}," Discard "),e("button",{onClick:t[18]||(t[18]=s=>z()),class:"px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#f0cc2c] rounded-sm"}," Post ")]),l(a)?(u(),p("div",Se,[l(a)&&l(a).video?(u(),p("div",Ve,m(l(a).video[0]),1)):h("",!0),l(a)&&l(a).text?(u(),p("div",Ee,m(l(a).text[0]),1)):h("",!0)])):h("",!0)])])])]),_:1})],64)}}};export{Ge as default};
