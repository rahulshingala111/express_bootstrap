const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json')

app.use(express.static(path.join(__dirname,'/publicStaticAsset')));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))


//home
app.get('/',(req, res)=>{
    res.render('home.ejs');   //aa file view dir ma che...ee by default pelle thi nakki j hoy
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() *10)+1;
    res.render('random',{ num })
})

app.get('/r/:subreddit',(req,res)=>{
    const { subreddit } = req.params;  // aa line thi string mathi object convert thai jay automatic
    const data = redditdata[subreddit];
    //console.log(data);    //ana thi console ma print tahy...khali verify mate
    if(data){
    res.render('subreddit',{ ...data }) //idk about ...data
    }else{
        res.render('notfound',{ subreddit })
    }
})

app.listen(3000,()=>{
    console.log("Listening on POrt 3000");
})



