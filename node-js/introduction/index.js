const express = require('express')
const app = express()
const PORT = 8080

let fakeData = [
  { id: 1,salam:'salam'},
  { id: 2,salam1:'sagol'},
  { id: 3,sagol2:'sagol'},
  { id: 4,sagol3:'sagol'},
  { id: 5,sagol4:'salam'},
]

app.get('/', (req, res) => {
  res.send(fakeData)
})


app.post('/register',(req,res)=>{
  console.log(req.query);
  if(!req.query.name || !req.query.surname || !req.query.pass){
    res.status(405).send({ message: 'Name, surname and pass are required'})
    return;
  }

  res.status(201).send({ message: 'Successfully registered'})
})


app.get('/product', (req, res)=>{
  if(!req.query.id){
    res.status(405).send({ message: 'Product id is required'})
    return;
  }

  let product = fakeData.find(p=>p.id===req.query.id);
  if(product){
    res.status(200).send({ product })
  }else{
    res.status(204).send({ message: 'Product not found'})
  }
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})