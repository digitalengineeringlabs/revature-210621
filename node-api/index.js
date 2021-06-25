const express = require('express')
const cors = require('cors')

const {add,find,remove} = require('./customer')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    find(2).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
    
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(5000,()=>{
    console.log('listening on port 5000...')
})