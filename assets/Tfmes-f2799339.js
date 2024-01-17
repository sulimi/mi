import{P as e,a as l,M as i}from"./MyViewer-ea45f101.js";import{d as s,h as a,w as o,o as r,b as t}from"./index-88e0bfbd.js";import"./MyProduction-62bbaf12.js";const g=s({__name:"Tfmes",setup(n){return(u,c)=>(r(),a(e,{data:{title:"玩具工厂管理系统",date:"2022.04 - 2022.06",link:"https://devops.kintexgroup.com/tfmes/"}},{default:o(()=>[t(l,{data:[{title:"技术栈",text:"Vue3、TypeScript、Arco Design Pro 2、axios、vue-router、pinia、dayjs、lodash、vue-i18n、less"},{title:"前端人数",text:"1人"},{title:"主要负责",text:"工程管理、订单管理、采购管理、仓储管理、生产管理、销售管理、系统设置"},{title:"项目介绍",text:"为公司玩具工厂打造的一款全面的后台管理系统，优化工厂流程，实现库存、销售、订单、人员的高效管理。"},{title:"项目状态",text:"更新迭代中"},{title:"需求实现",text:`
          1、登录认证：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>刷新页面首次进入系统时，在 router.beforeEach 里判断目前有没有用户信息，如没有，则去请求用户信息接口。</li>
                <li>请求用户信息接口遇到401报错，则在响应拦截器里拦截错误，重定向到后端返回的url授权登录页，url 上必要的添加一些系统id标识、当前页面 router 地址等。</li>
                <li>授权页面是后端的一个 html 页面，该登录账号成功后，会自动跳回上一个前端页面，地址后面带有一个 code 字段，用于请求 login 接口，设置 token，授权操作完成。</li>
              </ul>
          2、数据共享：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>使用Pinia轻量级状态管理库实现跨组件/页面共享状态</li>
                <li>Pinia 没有 mutations，都是放在 actions 里面，如果需要异步函数，则用 async/await。</li>
                <li>store 数据直接解构出来会失去响应式，需要用 storeToRefs()解构。</li>
              </ul>
          3、路由：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>Arco Design Vue 通过路由表生成菜单。</li>
              </ul>
          4、权限：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>从后端获取到该账号所有的路由权限和功能权限 keys。</li>
                <li>菜单及路由权限：在路由配置项中自定义配置powerKey，新版Arco Design是配置roles，再用一个自定义hook根据权限生成路由菜单，最后在路由守卫中对用户的页面进出进行管理。</li>
                <li>功能权限：判断权限功能 keys 中是否存在某个权限 key。</li>
              </ul>
          5、多语言：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>Arco Design 国际化</li>
          </ul>`},{title:"项目收获",text:"学会使用 Arco Design、pinia"}]},null,8,["data"]),t(i,{data:[{slotValue:"登录认证",src:"imgs/tfmes1.png"},{slotValue:"工程管理",src:"imgs/tfmes5.png"},{slotValue:"仓储管理",src:"imgs/tfmes6.png"},{slotValue:"系统设置",src:"imgs/tfmes7.png"},{src:"imgs/tfmes8.png"},{slotValue:"权限配置",src:"imgs/tfmes4.png"}]},null,8,["data"])]),_:1},8,["data"]))}});export{g as default};
