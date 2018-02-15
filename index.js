const koa =require('koa'),
    Router = require('koa-router')

const app=new koa(),
    router= new Router;

let users = [
    {
        name:'gj',
        email:'gj@126.com'
    }
]




router.get('/user',ctx=>{
    console.log(ctx.query.id)
    console.log(ctx)
    ctx.body = users[ctx.query.id]
})

router.post('/user/id',ctx => {
    ctx.body = Object.assign(users[ctx.params.id],ctx.request.body);
})
app.use(router.allowedMethods())
    .use(router.routes())
    .use(require('koa-body')());

    
app.listen(8888)



// const first=(context)=>{
//     // context.response.body='<h1>First koa</h1>'
//     if(context.request.path==='/name'){
//         context.response.body='<h1>name is koa</h1>'
//     }
//     if(context.request.path==='/birth'){
//         context.response.body='<h1>birthDay is 2017-08-28</h1>'
//     }
//     if(context.request.path==='/feel'){
//         context.response.body='<h1>very interesting</h1>'
//     }
// }

console.log('以最帅的姿态打开127.0.0.1:8888')