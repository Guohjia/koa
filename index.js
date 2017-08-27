const koa =require('koa')

const App=new koa()

const first=(context)=>{
    context.response.body='<h1>First koa</h1>'
    if(context.request.path==='/name'){
        context.response.body='<h1>name is koa</h1>'
    }
    if(context.request.path==='/birth'){
        context.response.body='<h1>birthDay is 2017-08-28</h1>'
    }
    if(context.request.path==='/feel'){
        context.response.body='<h1>very interesting</h1>'
    }
}

console.log('以最帅的姿态打开127.0.0.1:8888')
App.use(first)
App.listen(8888)