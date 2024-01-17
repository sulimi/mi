import{P as l,a as e,M as i}from"./MyViewer-ea45f101.js";import{d as s,h as r,w as a,o as p,b as t}from"./index-88e0bfbd.js";import"./MyProduction-62bbaf12.js";const m=s({__name:"RightPhonePc",setup(u){return(n,c)=>(p(),r(l,{data:{title:"RightPhone 商城 | PC端",date:"2020.12 - 2021.3",link:"https://es.rightphone.com/"}},{default:a(()=>[t(e,{data:[{title:"技术栈",text:"Vue3、TypeScript、vue cli 4、Ant Design 2、vue-router、vuex、umi-request、less、stripe-js、vue-i18n、dayjs、js-cookie、lodash"},{title:"前端人数",text:"3人"},{title:"主要负责",text:"负责首页、订单列表、购物车列表、地址管理、物流查询、邮件模板。"},{title:"项目介绍",text:"用于销售公司电子产品的PC端商城，销售商品有二手手机、二手平板、电子配件等，主要针对国外、香港客户人群。"},{title:"项目状态",text:"已经停止运营"},{title:"具体功能",text:"登录注册、商品列表、商品详情、商品加购、提交订单，支付、订单列表、物流查询、多语言翻译等。"},{title:"需求实现",text:`
          1、登录、注册：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>游客登录：可浏览、可加购，不可提交订单。</li>
                <li>注册登录：登录注册有两种方式，填写表单和授权第三方。</li>
                <li>第三方登录：点击第三方登录时，会带类型字段请求后台【第三方登录】接口，拿到返回的渲染 url 打开
                  (window.open(url, ...))新窗口第三方授权登录页。同时开启一个 setInterval 
                  监听是否关闭了授权登录页。当登录页被关闭，清除 setInterval，并用上一个请求回来的数据，
                  去请求【第三方登录 token 】接口，拿到 token 令牌，进行后续的接口请求。</li>
                <li>登录成功：更新 vuex 的用户信息，把游客状态的购物车商品带过来。</li>
              </ul>
          2、商品列表：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>根据路由跳转带过来的 router.query，请求列表接口显示不同的商品。</li>
                <li>列表搜索/排序/分类选择：用 watch 监听列表 searchValue/sortValue/类型id变化，重新请求排序/列表接口。</li>
              </ul>
          3、商品详情：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>商品图片：自己封装 Swipe 轮播图组件实现商品详情图轮播。</li>
                <li>选择商品sku加购：首先拿到这个商品的所有属性、sku 列表，用属性渲染 sku 选择组件，维护一个已经选好的 sku 的 key 值，实时去跟 sku 列表中匹配，找到是否有满足条件的 sku，然后去设置其他属性选择按钮是否可选。</li>
              </ul>
          4、提交订单：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>用商品 id、skuid、加购数量等去提交订单。</li>
                <li>提交订单首先要有一个地址，如有旧地址，去地址列表页获取。如没有，则跳到新增地址表单。</li>
                <li>填好地址跳到支付页面。</li>
              </ul>
          5、支付：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>支付方式：国外银行卡、PayPal、转账。</li>
            <li>银行卡：进入支付页，调用 Stripe 平台 loadStripe 接口，创建支付输入框。然后依次调用获取支付 token 接口避免订单重复提交、订单支付接口告诉后台以什么方式支付、stripe 的 confirmCardPayment 支付接口、订单成功接口告诉后台 stripe 这边已经成功支付。</li>
            <li>PayPal、转账：PayPal支付后台直接返回一个支付窗口，转账直接显示账号，倒计时未支付取消订单。</li>
          </ul>
          6、物流查询：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>后台接入物流公司查询接口，前端调用返回物流信息数据。</li>
          </ul>
          7、多语言翻译：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>用 vue-i18n 插件创建方法 createI18n 传入地区信息、手动翻译的语言包文件等，生成一个实例对象，在 main.ts 里面 use 注册。使用的时候用 vue-i18n 的 useI18n() 引入方法t，传入语言包里对应的 key 到具体文字内容里完成翻译。</li>
          </ul>
          `},{title:"项目收获",text:"了解了从加购到支付、选购商品 sku、物流查询等业务流程，知道了一个网站的多语言实现，学会了封装组件。"}]},null,8,["data"]),t(i,{data:[{slotValue:"一些项目截图：",type:"title"},{src:"imgs/rppc7.png"},{src:"imgs/rppc8.png"},{src:"imgs/rppc2.png"},{src:"imgs/rppc4.png"},{src:"imgs/rppc5.png"},{src:"imgs/rppc6.png"},{src:"imgs/rppc9.png"},{src:"imgs/rppc1.png"},{src:"imgs/rppc3.png"}]},null,8,["data"])]),_:1},8,["data"]))}});export{m as default};
