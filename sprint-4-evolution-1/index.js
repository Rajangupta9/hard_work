
const express = require('express');
const connectDB = require('./config/db.js');


const app = express();
app.use(express.json());

connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
