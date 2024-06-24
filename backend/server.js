const exp=require('express')
const app=exp()
const cors=require('cors')
require('dotenv').config()
const mongoClient=require('mongodb').MongoClient
const path=require('path')
const { config } = require('dotenv')

app.use(cors({
    origin: ["https://fp-two.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
}))

// app.use(exp.static(path.join(__dirname,'../fp/build')))
// app.use(exp.json())

mongoClient.connect(process.env.DB_URL)
.then((client)=>{
    const db=client.db('fpdb')

    const hackathonCollection=db.collection('hackathonCollection')
    const exploreCollection=db.collection('exploreCollection')

    app.set('hackathonCollection',hackathonCollection)
    app.set('exploreCollection',exploreCollection)

    console.log('DB Connection success')
})
.catch((err)=>console.log('Error in db connection',err))

const adminApp=require('./adminApi')

app.use('/admin-api',adminApp)

// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
// })

app.use((err,req,res,next)=>{
    res.send({
        err:err
    }) 
})

app.listen(4000,()=>console.log("Server running on port 4000..."))
