const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//using our middleware
app.use(cors());
//using express.json instead of body-parser
app.use(express.json());
//setting up our database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log(`MongoDB database connection is established successfully`);
})

//importing our routes
const agentsRouter = require('./routes/agents');
const ordersRouter = require('./routes/orders');
const resellersRouter = require('./routes/resellers');
const pickupsRouter = require('./routes/pickups')

app.use('/agents',agentsRouter);
app.use('/orders',ordersRouter);
app.use('/resellers',resellersRouter);
app.use('/pickups',pickupsRouter);



//listening to the port 5000
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});