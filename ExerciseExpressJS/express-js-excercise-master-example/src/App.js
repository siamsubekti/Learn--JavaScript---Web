import express from 'express';

const app = express();
const port = 3000;

function handleRequest(req, res, next){
  const {query, params, body} = req;
  res.json({
    msg : `<h1> Request ${req.method} to ${req.originalUrl}, ${req.params.name}, ${req.body.name} <h1>`,
    params,
    body,
    query
  })
}

app.use(express.json());
app.use(express.urlencoded());

//request URL : http://localhost:3000/user/ayi
app.get('/user/:name', handleRequest, );

//request URL : http://localhost:3000/posts/story
app.get('/posts/:post/', handleRequest);

//request URL : http://localhost:3000/posts/story/category/horor
app.get('/posts/:post/category/:category', handleRequest);

//request URL : http://localhost:3000/posts/category/horor/author/gue
app.get('/posts/category/:category/author/:author', handleRequest);

//request URL : http://localhost:3000/trains/routes?from=jakarta&to=surabaya
app.get('/trains/routes', handleRequest);

//request URL : http://localhost:3000/train/routes/?from=jakarta-?to=surabaya
app.get('/train/routes/:from-:to', handleRequest);

//request URL : http://localhost:3000/user/userId/12
app.get('/user/userId/:id(\\d+)', handleRequest);

//request URL : http://localhost:3000/user/gender/female
//request URL : http://localhost:3000/user/gender/male
app.get('/user/gender/:gen(male|female)', handleRequest);



app.use((req, res, next)=> res.status(404).send(`<center><h1> RESOURCE NOT FOUND</h1></center>`))

app.listen(port, ()=>{
  console.log(`This App is Listening on Port : ${port}`);
  
})
