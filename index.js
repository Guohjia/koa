const fs=require('fs')
const util = require('util');

//普通回调写法
// fs.readFile('./package.json',(err,data)=>{
//   if(err) return console.log(err)
//   data = JSON.parse(data)
//   console.log(data.name)
// })


//promise写法  => ES6  避免回调嵌套
// util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(data=>{
//   console.log(data.name)
// }).catch(err=>{
//   console.log(err)
// })


//async => ES7 写起来的感觉像同步
async function init(params) {
  try{
    let data = await util.promisify(fs.readFile)('./package.json');
    data = JSON.parse(data);
    console.log(data.name)
  } catch (err) {
    console.log(err)
  }
}


init()

































// const Koa = require('koa')
// const app = new Koa()
// const indent = (n) => new Array(n).join(' ')
// const mid1 = () => async (ctx, next) => {
//   ctx.body = `<h3>请求 => 第一层中间件</h3>`
//   await next()
//   ctx.body += `<h3>响应 <= 第一层中间件</h3>`
// }
// const mid2 = () => async (ctx, next) => {
//   ctx.body += `<h3>${indent(4)}请求 => 第二层中间件</h3>`
//   await next()
//   ctx.body += `<h3>${indent(4)}响应 <= 第二层中间件</h3>`
// }
// app.use(mid1())
// app.use(mid2())
// app.use(async (ctx, next) => {
//   ctx.body += `<p style="color: #f60">${indent(12)}=> Koa 核心 处理业务 <=</p>`
// })
// app.listen(2333)














//     router= new Router;

// let users = [
//     {
//         name:'gj',
//         email:'gj@126.com'
//     }
// ]




// router.get('/user',ctx=>{
//     console.log(ctx.query.id)
//     console.log(ctx)
//     ctx.body = users[ctx.query.id]
// })

// router.post('/user/id',ctx => {
//     ctx.body = Object.assign(users[ctx.params.id],ctx.request.body);
// })
// app.use(router.allowedMethods())
//     .use(router.routes())
//     .use(require('koa-body')());

    
// app.listen(8888)




// console.log('以最帅的姿态打开127.0.0.1:8888')