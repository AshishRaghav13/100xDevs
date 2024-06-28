const express = require('express');
const cors = require('cors')
const { createTODO, updateTODO } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.post('/todo',async (req,res)=>{
  const createPayload = req.body;
  const parsedPayload = createTODO.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
  }
  // put it in db
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  })
  res.json({
    msg:"todo created"
  })
})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos,
    })
})


app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTODO.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs",
        })
        return;
    }

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})


app.listen(port,()=>{
console.log(`your server is running at ${port}`);
})
