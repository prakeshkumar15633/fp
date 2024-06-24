const exp=require('express')
const adminApp=exp.Router()

let hackathonCollection
let exploreCollection

adminApp.use(exp.json())

adminApp.use((req, res, next) => {
    hackathonCollection = req.app.get('hackathonCollection')
    exploreCollection = req.app.get('exploreCollection')
    next()
})

adminApp.get('/hackathon',async(req,res)=>{
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

adminApp.get('/explore',async(req,res)=>{
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

adminApp.post('/hackathon/past',async(req,res)=>{
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

adminApp.post('/hackathon/current',async(req,res)=>{
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

adminApp.post('/hackathon/upcoming',async(req,res)=>{
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

adminApp.post('/explore/ideas',async(req,res)=>{
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

adminApp.post('/explore/alumini',async(req,res)=>{
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

module.exports=adminApp