const mongoose = require('mongoose');

const connctDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn');
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
};
module.exports = connctDB;