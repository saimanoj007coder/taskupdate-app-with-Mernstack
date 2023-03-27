const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://jackmanoj8686:100171007@atlascluster.bshuteh.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify: false 

}, err => {
    if(err) 
    console.log(`MongoDB Connection Suceeded...`)
    console.log(`Error in DB Connection ${err}`);
})