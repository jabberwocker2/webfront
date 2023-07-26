import{y as S,g as V,r as v,h as I,i as R,z as U,j as D,c as d,k as e,b as c,w as y,a as s,l as u,t as f,d as w,q as P,F as E,m as M,A as q,B as G,C as k,n as C,s as H,v as J,o as n}from"./entry.946fca91.js";import{_ as K}from"./nuxt-link.4ed46cda.js";const O={id:"PostPage",class:"fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"},Q={key:0,class:"lg:w-[calc(100%-540px)] h-full relative"},W={key:0},X=["disabled"],Y=["disabled"],Z=s("img",{class:"absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto",width:"45"},null,-1),ee=["src"],te={key:2,class:"flex items-center justify-center bg-black bg-opacity-70 h-screen lg:min-w-[480px]"},se={class:"bg-black bg-opacity-70 lg:min-w-[480px]"},oe=["src"],le={key:1,id:"InfoSection",class:"lg:max-w-[550px] relative w-full h-full bg-white dark:bg-black"},ie=s("div",{class:"py-7"},null,-1),re={class:"flex items-center justify-between px-8"},ne={class:"flex items-center"},ae=["src"],de={class:"ml-3 pt-0.5"},ce={class:"text-[17px] font-semibold"},ue={class:"text-[13px] -mt-5 font-light"},me=s("span",{class:"relative -top-[2px] text-[30px] pr-0.5"},".",-1),pe={class:"font-medium"},fe={class:"px-8 mt-4 text-sm"},_e={class:"px-8 mt-4 text-sm font-bold"},xe={class:"flex items-center px-8 mt-8"},he={class:"pb-4 text-center flex items-center"},ge={class:"text-xs pl-2 pr-4 text-gray-800 font-semibold"},ve={class:"pb-4 text-center flex items-center"},be={class:"rounded-full bg-gray-200 p-2 cursor-pointer"},ye=s("span",{class:"text-xs pl-2 text-gray-800 font-semibold"},"43",-1),we={id:"Comments",class:"bg-[#F8F8F8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto"},ke=s("div",{class:"pt-2"},null,-1),Fe={key:0,class:"text-center mt-6 text-xl text-gray-500"},Pe={class:"flex items-center relative w-full"},Ce=["src"],ze={class:"ml-14 pt-0.5 w-full"},$e={class:"text-[18px] font-semibold flex items-center justify-between"},Be={class:"text-[15px] font-light"},je=s("div",{class:"mb-28"},null,-1),Ne={key:0,id:"CreateComment",class:"absolute flex items-center justify-between bottom-0 bg-white dark:bg-black h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2"},Te=["disabled"],Ie={__name:"[id]",setup(Le){const{$generalStore:t,$userStore:a,$profileStore:z}=H(),b=S(),x=V();let h=v(null),g=v(!1),m=v(null),_=v(!1);I(async()=>{t.selectedPost=null;try{await t.getPostById(b.params.id)}catch(l){l&&l.response.status===400&&x.push("/")}h.value.addEventListener("loadeddata",l=>{l.target&&setTimeout(()=>{g.value=!0},500)})}),R(()=>{h.value.pause(),h.value.currentTime=0,h.value.src=""}),U(()=>g.value,()=>{g.value&&setTimeout(()=>h.value.play(),500)});const $=()=>{setTimeout(()=>{let l=t.ids.reverse(),o=!1;for(let i=0;i<l.length;i++){const p=l[i];if(p<b.params.id){x.push(`/post/${p}`),o=!0;return}}o||x.push(`/post/${l[0]}`)},300)},B=()=>{setTimeout(()=>{let l=!1;for(let o=0;o<t.ids.length;o++){const i=t.ids[o];if(i>b.params.id){x.push(`/post/${i}`),l=!0;return}}l||x.push(`/post/${t.ids[0]}`)},300)},F=D(()=>!!t.selectedPost.likes.find(o=>o.user_id===a.id)),j=async()=>{try{await a.likePost(t.selectedPost,!0)}catch(l){console.log(l)}},N=async()=>{try{await a.unlikePost(t.selectedPost,!0)}catch(l){console.log(l)}},T=async()=>{let l=confirm("Are you sure you want to delete this post?");try{l&&(await a.deletePost(t.selectedPost),await z.getProfile(a.id),x.push(`/profile/${a.id}`))}catch(o){console.log(o)}},L=async()=>{try{await a.addComment(t.selectedPost,m.value),m.value=null,document.getElementById("Comments").scroll({top:0,behavior:"smooth"})}catch(l){console.log(l)}},A=async(l,o)=>{let i=confirm("Are you sure you want to delete this comment?");try{i&&await a.deleteComment(l,o)}catch(p){console.log(p)}};return(l,o)=>{const i=J,p=K;return n(),d("div",O,[e(t).selectedPost?(n(),d("div",Q,[c(p,{href:e(t).isBackUrl,class:"absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"},{default:y(()=>[c(i,{name:"material-symbols:close",color:"#FFFFFF",size:"27"})]),_:1},8,["href"]),e(t).ids.length>1?(n(),d("div",W,[s("button",{disabled:!e(g),onClick:o[0]||(o[0]=r=>B()),class:"absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"},[c(i,{name:"mdi:chevron-up",size:"30",color:"#FFFFFF"})],8,X),s("button",{disabled:!e(g),onClick:o[1]||(o[1]=r=>$()),class:"absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"},[c(i,{name:"mdi:chevron-down",size:"30",color:"#FFFFFF"})],8,Y)])):u("",!0),Z,e(t).selectedPost.video?(n(),d("video",{key:1,class:"absolute object-cover w-full my-auto z-[-1] h-screen",src:e(t).selectedPost.video},null,8,ee)):u("",!0),e(g)?u("",!0):(n(),d("div",te,[c(i,{class:"animate-spin ml-1",name:"mingcute:loading-line",size:"100",color:"#FFFFFF"})])),s("div",se,[e(t).selectedPost.video?(n(),d("video",{key:0,ref_key:"video",ref:h,loop:"",muted:"",class:"h-screen mx-auto",src:e(t).selectedPost.video},null,8,oe)):u("",!0)])])):u("",!0),e(t).selectedPost?(n(),d("div",le,[ie,s("div",re,[s("div",ne,[c(p,{href:`/profile/${e(t).selectedPost.user.id}`},{default:y(()=>[s("img",{class:"rounded-full lg:mx-0 mx-auto",width:"40",src:e(t).selectedPost.user.image},null,8,ae)]),_:1},8,["href"]),s("div",de,[s("div",ce,f(e(t).allLowerCaseNoCaps(e(t).selectedPost.user.name)),1),s("div",ue,[w(f(e(t).selectedPost.user.name)+" ",1),me,s("span",pe,f(e(t).selectedPost.created_at),1)])])]),e(a).id===e(t).selectedPost.user.id?(n(),P(i,{key:0,onClick:o[2]||(o[2]=r=>T()),class:"cursor-pointer",name:"material-symbols:delete-outline-sharp",size:"25"})):u("",!0)]),s("div",fe,f(e(t).selectedPost.text),1),s("div",_e,[c(i,{name:"mdi:music",size:"17"}),w(" original sound - "+f(e(t).allLowerCaseNoCaps(e(t).selectedPost.user.name)),1)]),s("div",xe,[s("div",he,[s("button",{onClick:o[3]||(o[3]=r=>e(F)?N():j()),class:"rounded-full bg-gray-200 p-2 cursor-pointer"},[c(i,{name:"mdi:lightbulb",size:"25",color:e(F)?"#f0cc2c":""},null,8,["color"])]),s("span",ge,f(e(t).selectedPost.likes.length),1)]),s("div",ve,[s("div",be,[c(i,{name:"bx:bxs-message-rounded-dots",size:"25"})]),ye])]),s("div",we,[ke,e(t).selectedPost.comments.length<1?(n(),d("div",Fe," No comments... ")):(n(!0),d(E,{key:1},M(e(t).selectedPost.comments,r=>(n(),d("div",{key:r,class:"flex items-center justify-between px-8 mt-4"},[s("div",Pe,[c(p,{to:`/profile/${r.user.id}`},{default:y(()=>[s("img",{class:"absolute top-0 rounded-full lg:mx-0 mx-auto",width:"40",src:r.user.image},null,8,Ce)]),_:2},1032,["to"]),s("div",ze,[s("div",$e,[w(f(r.user.name)+" ",1),e(a).id===r.user.id?(n(),P(i,{key:0,onClick:Ae=>A(e(t).selectedPost,r.id),class:"cursor-pointer",name:"material-symbols:delete-outline-sharp",size:"25"},null,8,["onClick"])):u("",!0)]),s("div",Be,f(r.text),1)])])]))),128)),je]),e(a).id?(n(),d("div",Ne,[s("div",{class:C([e(_)?"border-2 border-gray-400":"border-2 border-[#F1F1F2]","bg-[#F1F1F2] flex items-center rounded-lg w-full lg:max-w-[420px]"])},[q(s("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>k(m)?m.value=r:m=r),onFocus:o[5]||(o[5]=r=>k(_)?_.value=!0:_=!0),onBlur:o[6]||(o[6]=r=>k(_)?_.value=!1:_=!1),class:"bg-[#F1F1F2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg",type:"text",placeholder:"Add comment..."},null,544),[[G,e(m)]])],2),s("button",{disabled:!e(m),onClick:o[7]||(o[7]=r=>L()),class:C([e(m)?"text-[#f0cc2c] cursor-pointer":"text-gray-400","font-semibold text-sm ml-5 pr-1"])}," Post ",10,Te)])):u("",!0)])):u("",!0)])}}};export{Ie as default};
