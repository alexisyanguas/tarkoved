import{R as n,r as m,a as u,j as o}from"./app-b9c4f721.js";import{L as h}from"./Layout-446a580b.js";const x=({layoutDatas:e,content:g="",map:r})=>{const t=["mapgenie","tarkovdev"],[s,i]=n.useState(t[0]),[c,d]=n.useState(r[s].link),[b,l]=n.useState(!0),a=f=>{i(f.target.value)};return m.useEffect(()=>{l(!0),d(r[s].link)},[s]),u(h,{title:e.title,page:e.page,user:e.user,isLoad:b,children:[u("div",{className:"absolute top-2 left-36 z-50 flex justify-center items-center",children:[o("button",{onClick:a,value:t[0],type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Map Genie"}),o("button",{className:"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:a,value:t[1],children:"Tarkov Dev"})]}),o("iframe",{onLoad:()=>{l(!1),document.querySelector(".layout-header_container").classList.add("fixed")},src:c,style:{width:"100%",height:"100vh"}})]})};export{x as default};
