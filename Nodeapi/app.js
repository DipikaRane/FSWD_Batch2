var express=require('express');
var dotenv=require('dotenv');
var app = express();
var mongo = require('mongodb');
var MongoClient=mongo.MongoClient;
dotenv.config();
const mongoUrl=process.env.mongoLiveUrl;
var port=process.env.PORT || 8124;
var db;
//first default route
app.get('/',(req,res)=>{
    res.send("<h1>Hi from Express</h1>");
})

app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//params example
app.get('/location/:id',(req,res)=>{
    //var id=req.params.id
    // console.log(id);
    // res.send('ok');
    var id=parseInt(req.params.id);
    db.collection('location').find({"location_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get('/rest',(req,res)=>{
    db.collection('restdata').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.get('/rest/:name',(req,res)=>{
    //var id=req.params.id
    // console.log(id);
    // res.send('ok');
    var name=Number(req.params.name);
    db.collection('restdata').find({"restaurant_id":name}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get('/mealtype',(req,res)=>{
    db.collection('menu').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.get('/mealtype/:id',(req,res)=>{
    //var id=req.params.id
    // console.log(id);
    // res.send('ok');
    var id=Number(req.params.id);
    db.collection('menu').find({"mealtype_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get('/restmenu',(req,res)=>{
    db.collection('restmenu').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.get('/restmenu/:id',(req,res)=>{
    //var id=req.params.id
    // console.log(id);
    // res.send('ok');
    var id=Number(req.params.id);
    db.collection('restmenu').find({"menu_id":id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//connecting to mongodb server
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while connecting");
    db=client.db('Swiggy');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})