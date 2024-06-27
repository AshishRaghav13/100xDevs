const express = require('express');
const { createTODO, updateTODO } = require('./types');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/',(req,res)=>{
  const createPayload = req.body;
  const parsedPayload = createTODO.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
  }
})


app.put('/completed',(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTODO.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs",
        })
        return;
    }
})


app.listen(port,()=>{
console.log(`your server is running at ${port}`);
})
