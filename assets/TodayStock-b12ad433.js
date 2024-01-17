import{P as l,a as i,M as a}from"./MyViewer-ea45f101.js";import{d as o,h as s,w as c,o as r,b as e,p as d,g as u,a as p,_ as x}from"./index-88e0bfbd.js";import"./MyProduction-62bbaf12.js";const n=t=>(d("data-v-ae844b95"),t=t(),u(),t),_=n(()=>p("h3",{class:"code-commit"},"代码commit记录：",-1)),y=o({__name:"TodayStock",setup(t){return(m,f)=>(r(),s(l,{data:{title:"TodayStock 对外库存展示",date:"2021.7 - 2021.8",link:"https://sulimi.github.io/td/",link2:"https://inventory.todaystock.com/"}},{default:c(()=>[e(i,{data:[{title:"技术栈",text:"新版：Vue3、TypeScript、vite4、Arco Design<br />旧版：Vue2、TypeScript、vue cli、装饰器、Bootstrap<br /> vuex、vue-router、axios、exceljs、lodash、less"},{title:"前端人数",text:"1人"},{title:"主要负责",text:"整个项目"},{title:"项目介绍",text:"老板想要对外开放一个查看库存和下单的页面，免登录权限，方便客户查询公司产品。客户找到合适的产品还可以下单，提交成功的订单会流向工厂管理系统订单列表里，销售人员再通过订单上的联系方式去跟客户沟通。"},{title:"项目状态",text:"还在运行"},{title:"具体功能",text:"切换地区、查询库存、库存导出 excel、加购物车、下单，还有一些产品、公司介绍内容。"},{title:"需求实现",text:`
          1、切换地区：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>在进入路由前(router.beforeEach)，如果localStorage没有数据，则要请求一个获取【访问者ip地区】的接口，保存到localStorage，同时用动态路由addRoute()更新到router配置并跳转。</li>
                <li>如果有、或者通过手动输入url，则跳转到存储/输入地区。</li>
                <li>用地区字段，去请求回来不同的库存信息，展示到表格。</li>
              </ul>
          2、导出excel：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>单个类别的库存excel，通过前端exceljs插件实现。</li>
                <li>所有类别的库存excel，则是请求后端接口返回buffer，然后自己写bufferToExcel方法转出excel。</li>
              </ul>
          3、加购物车：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>产品列表手动封装一个带有勾选、步进器、输入价格的table。</li>
                <li>列表页加购的数据通过vuex数据共享，提供购物车弹框、页面和恢复表格勾选使用。</li>
              </ul>
          4、下单：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>下单按钮做节流，防止频繁点击重复多次下单。</li>
              </ul>
          5、等级页轮播视频：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>手动封装轮播动画，用video标签play、pause事件控制视频播放和暂停。</li>
              </ul>
          `},{title:"项目收获",text:"第一次自己一个人从选框架、UI等0到1开发一个项目，踩了一个大坑。旧版用的是Vue2 + 装饰器写TS的写法，代码比较复杂。后面用自己空余的时间写了一版Vue3版本，已经发给项目经理，各种原因未能使用。"}]},null,8,["data"]),_,e(a,{data:[{src:"imgs/todaystock2.png"}]},null,8,["data"])]),_:1},8,["data"]))}});const S=x(y,[["__scopeId","data-v-ae844b95"]]);export{S as default};
