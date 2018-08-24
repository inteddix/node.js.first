const express=require('express');

const morgan=require('morgan');

const app=express();

//requiriendo rutas
const routes=require('./routes');
const routesApi=require('./routes-api');

//settings
app.set('appName', 'my first server');
//app.set('views',_dirname);
app.set('views', __dirname +'/views');
app.set('view engine','ejs');


//middlewares
app.use(morgan('combined'));
/*app.use((req,res,next)=>{
  console.log('request url:'+req.url);
  next();
});*

app.use((req,res,next)=>{
  console.log('ha pasa por aquii');
  next();
});*/


//rutas
app.use(routes);

app.use('/api', routesApi);

app.get('*',(req,res)=>{
  res.end('archivo no encontrado');
});


app.listen(3000,()=>{
  console.log('servidor funcionando');
  console.log('app name:', app.get('appName'));
});
