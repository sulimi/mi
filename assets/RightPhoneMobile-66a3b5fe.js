import{P as t,a as s,M as e}from"./MyViewer-ea45f101.js";import{d as i,h as u,w as a,o as r,b as l}from"./index-88e0bfbd.js";import"./MyProduction-62bbaf12.js";const k=i({__name:"RightPhoneMobile",setup(n){return(o,p)=>(r(),u(t,{data:{title:"RightPhone 商城 | 移动端",date:"2021.3 - 2021.5",link:"https://m-uk.rightphone.com/"}},{default:a(()=>[l(s,{data:[{title:"技术栈",text:"Vue3、TypeScript、vue cli 4、Vant 3、vue-router、vuex、umi-request、less、stripe-js、vue-i18n、dayjs、js-cookie"},{title:"前端人数",text:"3人"},{title:"主要负责",text:"首页、订单列表、购物车列表、地址管理、物流查询、邮件模板。"},{title:"项目介绍",text:"用于销售公司电子产品的移动端商城，销售商品有二手手机、二手平板、电子配件等，主要针对国外、香港客户人群。"},{title:"项目状态",text:"已经停止运营"},{title:"具体功能",text:"登录注册、商品列表、商品详情、商品加购、提交订单，支付、订单列表、物流查询、多语言翻译等。"},{title:"需求实现",text:`
          1、登录、注册：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>游客登录：可浏览、可加购，不可提交订单。</li>
                <li>注册登录：登录注册有两种方式，填写表单和授权第三方。</li>
                <li>第三方登录：点击第三方登录时，会带类型字段请求后台【第三方登录】接口，拿到返回的渲染 url 打开
                  (window.open(url, ...))新窗口第三方授权登录页。同时开启一个 setInterval 
                  监听是否关闭了授权登录页。当登录页被关闭，清除 setInterval，并用上一个请求回来的数据，
                  去请求【第三方登录token】接口，拿到 token 令牌，进行后续的接口请求。</li>
                <li>登录成功：更新 vuex 的用户信息，把游客状态的购物车商品带过来。</li>
              </ul>
          2、商品列表：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>根据路由跳转带过来的 router.query，请求列表接口显示不同的商品。</li>
                <li>用 Vant 的 List 组件布局，管理、优化列表显示，加入下拉滚动【加载更多】功能。</li>
                <li>列表搜索/排序/分类选择：用 watch 监听列表 searchValue/sortValue/类型id变化，重新请求排序/列表接口。</li>
              </ul>
          3、商品详情：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>商品图片：Swipe 轮播图组件实现商品详情图轮播。</li>
                <li>商品加购：点击商品加购按钮，弹出 sku 选择框。</li>
                <li>商品评论：Collapse 展示评论信息。</li>
              </ul>
          4、商品sku实现：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>封装 sku 组件，渲染显示商品所有属性。封装一个 sku 算法，当选择属性时去匹配 skulist。</li>
                <li>具体实现：在表格下面用图片展示。</li>
              </ul>
          5、提交订单：
              <ul style='list-style: disc; margin-left: 30px'>
                <li>提交订单首先要有一个地址，如有旧地址，去地址列表页获取。如没有，则跳到新增地址表单。</li>
                <li>填好地址跳到支付页面。</li>
              </ul>
          6、支付：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>支付方式：国外银行卡、PayPal、转账。</li>
            <li>银行卡：进入支付页，调用 Stripe 平台 loadStripe 接口，创建支付输入框。然后依次调用获取支付 token 接口避免订单重复提交、订单支付接口告诉后台以什么方式支付、stripe 的 confirmCardPayment 支付接口、订单成功接口告诉后台 stripe 这边已经成功支付。</li>
            <li>PayPal、转账：PayPal 支付后台直接返回一个支付窗口，转账直接显示账号，倒计时未支付取消订单。</li>
          </ul>
          7、物流查询：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>后台接入物流公司查询接口，前端调用返回物流信息数据。</li>
          </ul>
          8、多语言翻译：
          <ul style='list-style: disc; margin-left: 30px'>
            <li>用 vue-i18n 插件创建方法 createI18n 传入地区信息、手动翻译的语言包文件等，生成一个实例对象，在 main.ts 里面 use 注册。使用的时候用 vue-i18n 的 useI18n() 引入方法t，传入语言包里对应的key到具体文字内容里完成翻译。</li>
          </ul>
          `},{title:"项目收获",text:"加深学习了 Vant 的使用。"}]},null,8,["data"]),l(e,{data:[{slotValue:"sku 实现：",type:"title"},{src:"imgs/sku1.png",slotValue:"用这个商品属性，去渲染 sku 组件："},{src:"imgs/sku2.png",slotValue:"商品属性结构："},{src:"imgs/sku3.png",slotValue:"当在商品属性面板上渲染、或者被选中的时候，都调用计算，所选中的所有属性跟哪个sku匹配，来设置当前属性按钮是否可选："},{src:"imgs/sku4.png",slotValue:""},{src:"imgs/sku5.png",slotValue:""},{src:"imgs/sku6.png",slotValue:"当更改选中、取消选中属性时，更新设置选中的商品属性集合，此时也会触发上面的判断："},{src:"imgs/sku7.png",slotValue:""},{src:"imgs/sku8.png",slotValue:"根据选中的商品属性集合，判断是否已经选择好所有的 sku ："},{src:"imgs/sku9.png",slotValue:"如果是已经选择好，那么这个选择的商品 sku 属性组合是："},{src:"imgs/sku10.png",slotValue:"怎么找到这个组合呢？用选中的商品属性，去这个商品所有的 sku 列表找："},{slotValue:"然后那这个 sku 组合去加购。"},{slotValue:"一些项目截图：",type:"title"},{src:"imgs/rpmo1.png"},{src:"imgs/rpmo2.png"},{src:"imgs/rpmo3.png"},{src:"imgs/rpmo4.png"},{src:"imgs/rpmo5.png"},{src:"imgs/rpmo6.png"},{src:"imgs/rpmo7.png"}]},null,8,["data"])]),_:1},8,["data"]))}});export{k as default};
