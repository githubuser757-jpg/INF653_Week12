const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MYAPP_DATABASE_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('Connected to MongoDB Atlas successfully!');
}).catch((e)=>{
    console.error('Error connecting to MongoDB Atlas:', e);
});


const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));