  const express=require('express');
  const mongoose=require('mongoose');
  const BrandName=require('./model')
  const cors=require('cors')
  const app=express();
  
  app.use(express.json())
  app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
    credentials: true,
  }));
  
  mongoose.connect('mongodb+srv://srinureddy:srinureddy@cluster0.nwxf3wp.mongodb.net/?retryWrites=true&w=majority')
  .then( ()=> console.log('dB connected ...!')
  ).catch(err =>console.log(err))


app.post('/addbrands', async (req, res) => {
  const { brandname, brandcost } = req.body;
  try {
    const newData = new BrandName({ brandname, brandcost });
    await newData.save();
    const brands = await BrandName.find();
    return res.json(brands);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

  app.get('/getall',async(req,res)=>{
    try{
        const allData=await BrandName.find();
        return res.json(allData);
    }catch(err){
        console.log(err.message);
    }
  })
  app.get('/getall/:id',async(req,res)=>{
    try{
        const Data=await BrandName.findById(req.params.id)
        return res.json(Data);
    }catch(err){
        console.log(err.message);
    }
  })  

  app.delete('/deletebrand/:id',async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id);
        return res.json(await BrandName.find())
    }catch(err){
        console.log(err.message);
    }
  })

  app.put('/updatebrand/:id', async (req, res) => {
    const { id } = req.params;
    const { brandname, brandcost } = req.body;
  
    try {
      const updatedBrand = await BrandName.findByIdAndUpdate(id, { brandname, brandcost }, { new: true });
  
      if (!updatedBrand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
  
      const brandNames = await BrandName.find();
      return res.json(brandNames);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.listen(3000,()=>console.log('server running..... '))