const exp=require('express')
const app=exp()
const cors=require('cors')
require('dotenv').config()
const mongoClient=require('mongodb').MongoClient
const path=require('path')
const { config } = require('dotenv')

app.use(cors({
    origin: ["https://fp-frontend-indol.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
}))

// app.use(exp.static(path.join(__dirname,'../fp/build')))
// app.use(exp.json())

let hackathonCollection
let exploreCollection

mongoClient.connect(process.env.DB_URL)
.then((client)=>{
    const db=client.db('fpdb')

    hackathonCollection=db.collection('hackathonCollection')
    exploreCollection=db.collection('exploreCollection')

    app.set('hackathonCollection',hackathonCollection)
    app.set('exploreCollection',exploreCollection)

    console.log('DB Connection success')
})
.catch((err)=>console.log('Error in db connection',err))

// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})

app.get('/hackathon',async(req,res)=>{
    let resObj=await hackathonCollection.findOne()
    if(resObj!=null){
        res.send({
            message:'Success',
            data:{
                past:resObj.past,
                current:resObj.current,
                upcoming:resObj.upcoming
            }
        })
    }
})

app.get('/explore',async(req,res)=>{
    let resObj=await exploreCollection.findOne()
    if(resObj!=null){
        res.send({
            message:'Success',
            data:{
                ideas:resObj.ideas,
                alumini:resObj.alumini
            }
        })
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.post('/hackathon/past',async(req,res)=>{
    let obj=req.body
    let resObj1=await hackathonCollection.findOne()
    if(resObj1!=null){
        resObj1.past.push(obj)
        let resObj2=await hackathonCollection.updateOne({},{$set:{past:resObj1.past}})
        if(resObj2.modifiedCount>0){
            res.send({
                message:'Success'
            })
        }
        else{
            res.send({
                message:'Error updating'
            })
        }
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.post('/hackathon/current',async(req,res)=>{
    let obj=req.body
    let resObj1=await hackathonCollection.findOne()
    if(resObj1!=null){
        resObj1.current.push(obj)
        let resObj2=await hackathonCollection.updateOne({},{$set:{current:resObj1.current}})
        if(resObj2.modifiedCount>0){
            res.send({
                message:'Success'
            })
        }
        else{
            res.send({
                message:'Error updating'
            })
        }
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.post('/hackathon/upcoming',async(req,res)=>{
    let obj=req.body
    let resObj1=await hackathonCollection.findOne()
    if(resObj1!=null){
        resObj1.upcoming.push(obj)
        let resObj2=await hackathonCollection.updateOne({},{$set:{upcoming:resObj1.upcoming}})
        if(resObj2.modifiedCount>0){
            res.send({
                message:'Success'
            })
        }
        else{
            res.send({
                message:'Error updating'
            })
        }
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.post('/explore/ideas',async(req,res)=>{
    let obj=req.body
    let resObj1=await exploreCollection.findOne()
    if(resObj1!=null){
        resObj1.ideas.push(obj)
        let resObj2=await exploreCollection.updateOne({},{$set:{ideas:resObj1.ideas}})
        if(resObj2.modifiedCount>0){
            res.send({
                message:'Success'
            })
        }
        else{
            res.send({
                message:'Error updating'
            })
        }
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.post('/explore/alumini',async(req,res)=>{
    let obj=req.body
    let resObj1=await exploreCollection.findOne()
    if(resObj1!=null){
        resObj1.alumini.push(obj)
        let resObj2=await exploreCollection.updateOne({},{$set:{alumini:resObj1.alumini}})
        if(resObj2.modifiedCount>0){
            res.send({
                message:'Success'
            })
        }
        else{
            res.send({
                message:'Error updating'
            })
        }
    }
    else{
        res.send({
            message:'Error occurred'
        })
    }
})

app.use((err,req,res,next)=>{
    res.send({
        err:err
    }) 
})

app.listen(4000,()=>console.log("Server running on port 4000..."))
