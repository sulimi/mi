import{P as l,a as t,M as s}from"./MyViewer-ea45f101.js";import{d as i,h as a,w as r,o as p,b as e}from"./index-88e0bfbd.js";import"./MyProduction-62bbaf12.js";const d=i({__name:"Erp",setup(c){return(o,n)=>(p(),a(l,{data:{title:"ERP后台管理系统",date:"2021.06 - 2022.06",link:"https://devops.kintexgroup.com/erp/login"}},{default:r(()=>[e(t,{data:[{title:"技术栈",text:"React、TypeScript、Ant Design Pro 4、ahooks、dayjs、lodash、C-lodop、exceljs、less"},{title:"前端人数",text:"2人"},{title:"主要负责",text:"库存查询、销售开单、售后订单、权限、打印销售单、导出 excel 等。"},{title:"项目介绍",text:"为公司手机工厂打造的一款全面的ERP管理系统，优化工厂流程，实现库存、销售和订单管理的高效处理。"},{title:"项目状态",text:"更新迭代中"},{title:"需求实现",text:`
          1、库存查询：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>库存查询页可以切换地区、仓库查询。还可以根据显示不同表格的列，重新计算表格数据。除此之外还有筛选、排序等。</li>
              </ul>
          2、权限：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>从后端获取到该账号所有的路由权限和功能权限 keys，并书写 src/access.ts 文件。</li>
                <li>路由权限：umi路由配置 access。</li>
                <li>功能权限：用 useAccess 引入 access 对象，取出对象里对应的key进行权限判断。</li>
              </ul>
          3、打印：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>用 C-lodop 云打印服务实现销售单打印、箱单打印等。</li>
              </ul>
          4、导出excel：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>后端实现：后端接口返回 buffer 数据，前端转成 excel 导出。</li>
                <li>前端实现：exceljs 插件手动配置 excel 标题、行、列、样式等。</li>
              </ul>
          5、状态管理：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>umi 的 useModel 钩子函数。</li>
            <li>全局初始化状态：app.ts 中编写 getInitialState 方法。</li>
          </ul>`},{title:"项目收获",text:"熟悉整个后台管理系统的构成，学会使用 C-lodop 打印工具、excel 导出实现，知道 umijs 使用方法。"}]},null,8,["data"]),e(s,{data:[{slotValue:"登录",src:"imgs/erp5.png"},{slotValue:"库存查询",src:"imgs/erp1.png"},{src:"imgs/erp7.png"},{slotValue:"销售开单",src:"imgs/erp2.png"},{src:"imgs/erp8.png"},{slotValue:"打印销售单",src:"imgs/erp9.png"},{slotValue:"打印箱单",src:"imgs/erp10.png"},{src:"imgs/erp11.png"},{slotValue:"权限",src:"imgs/erp12.png"},{src:"imgs/erp13.png"},{slotValue:"其他",src:"imgs/erp4.png"},{src:"imgs/erp6.png"}]},null,8,["data"])]),_:1},8,["data"]))}});export{d as default};
