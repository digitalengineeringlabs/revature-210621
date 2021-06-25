const express = require('express')
const cors = require('cors')

const {add,find,findAll,remove} = require('./customer')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/customers', async (req,res) => {
    
    try {
        const data = await findAll();
        res.send(data);
    } catch(err){
        res.status(400).send(err)
    }

})

// async/await

app.get('/customers/:id', (req,res) => {
    find(req.params.id).then((data) => {
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/customers', async (req,res) => {
    console.log(req.body)
    const result = await add(req.body)
    res.send(result)
})

app.listen(5000,()=>{
    console.log('listening on port 5000...')
})