var express=require('express');
var dotenv=require('dotenv');
var app = express();
var mongo = require('mongodb');
var bodyParser=require('body-parser');
var cors=require('cors');
var MongoClient=mongo.MongoClient;
dotenv.config();
const mongoUrl='mongodb+srv://swiggyBatch2:swiggy@cluster0.0kef6.mongodb.net/?retryWrites=true&w=majority';
var port=process.env.PORT || 8124;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
var db;
//first default route
app.get('/',(req,res)=>{
    res.send("<h1>Hi from Express</h1>");
})

//api for location
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

//restaurants wrt state_id example queryparams
app.get('/restaurants',(req,res)=>{
    var query={};
    if(req.query.state){
        query={state_id:Number(req.query.state)}
    }
    // console.log('query',query);
    // res.send('querystate');
    db.collection('restdata').find(query).toArray((err,result)=>{
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

//projection eaxample
//filter api to get mealTypes and cuisines
app.get('/filter/:mealId',(req,res)=>{
    var id=parseInt(req.params.mealId);
    var sort={cost:1}
    var limit=100000;
    var skip=0;
    var query={"mealTypes.mealtype_id":id};
    if(req.query.sortKey){
        var sortKey=req.query.sortKey;
        if(sortKey>1||sortKey<-1 || sortKey==0){
            sortKey=1
        }
        sort={cost:Number(sortKey)}
    }
    if(req.query.skip && req.query.limit){
        skip=Number(req.query.skip);
        limit=Number(req.query.limit);
    }
    if(req.query.lcost && req.query.hcost){
        var lcost=Number(req.query.lcost);
        var hcost=Number(req.query.hcost);
    }
    if(req.query.cuisines && req.query.lcost && req.query.hcost){
        query={$and:[{cost:{$gt:lcost,$lt:hcost}}],
                "cuisines.cuisine_id":Number(req.query.cuisines),
                "mealTypes.mealtype_id":id,              
                }
        // query={"cuisines.cuisine_id":Number(req.query.cuisines),
        // "mealTypes.mealtype_id":id,}
    }else if(req.query.cuisines){
        query={"cuisines.cuisine_id":Number(req.query.cuisines),
         "mealTypes.mealtype_id":id,}
    }
    else if(req.query.lcost && req.query.hcost){
        query={$and:[{cost:{$gt:lcost,$lt:hcost}}],
                "mealTypes.mealtype_id":id}
    }
    // else if(req.query.lcost && req.query.hcost){
    //     let lcost=Number(req.query.lcost);
    //     let hcost=Number(req.query.hcost);
    //     query={$and:[{cost:{$gt:lcost,$lt:hcost}}],
    //     "mealTypes.mealtype_id":id}
    // }
    db.collection('restdata').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.post('/menus',(req,res)=>{
    console.log(req.body);
    // res.send(req.body);
    db.collection('restmenu')
    .find({menu_id:{$in:req.body}})
    .toArray((err,result)=>{
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

//to see all orders
app.get('/orders',(req,res)=>{
    db.collection('orders').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//to place order
app.post('/placeOrder',(req,res)=>{
    console.log(req.body)
    db.collection('orders').insertOne(req.body,(err,result)=>{
        if(err) throw err;
        //res.send(req.body)
        res.send("Order Placed")
    })
})
//to update order
app.put('/update/:id',(req,res)=>{
    var id=Number(req.params.id)
    var status=req.body.status?req.body.status:"pending"
    db.collection('orders').updateOne(
        {_id:id},
        {
            $set:{
                "status":status
            }
        }
    )
    res.send('data updated')
})

//to delete one order
app.delete('/deleteOrder/:id',(req,res)=>{
    var id=Number(req.params.id)
    db.collection('orders').remove({id:id},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//to delete all orders
app.delete('/deleteAllOders',(req,res)=>{
    // console.log('delete',req)
    // res.send('deleted')
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
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