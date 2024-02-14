const express = require('express')
const cors =require('cors')
const { MongoClient } = require('mongodb')

const app=express()

app.use(cors())
app.use(express.json())
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.wvgfglz.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('register')
col.insertOne({'student':'123'})

app.post('/register', (req, res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send('Inserted Successfully')
})

app.get('/retrieve', async (req,res)=>{
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('<h1 align=center>Hello World</h1>')
})
app.listen('8081',()=>{
    console.log('Server is Running')
})