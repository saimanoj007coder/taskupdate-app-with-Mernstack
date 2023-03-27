const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DB_LOCAL_URI,{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify: false 

}, err => {
    if(err) 
    console.log(`MongoDB Connection Suceeded...`)
    console.log(`Error in DB Connection ${err}`);
})