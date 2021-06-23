const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send({greet:'Hi there'})
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(5000,()=>{
    console.log('listening on port 5000...')
})