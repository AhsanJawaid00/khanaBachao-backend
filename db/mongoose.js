 // const mongoose = require('mongoose');

// // always encode special characters

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then( ()=>{
//     console.log("[+] DB Connected!!!");
// })
// .catch( (err) => {
//     console.log("[-] Something Went Wrong!!!");
//     console.log(err.message);
// });


var mongoose = require('mongoose');
const dotenv = require('dotenv')


let dbURI = process.env.MONGO_URL

mongoose.connect('mongodb+srv://ahsanjawaid4:yBPtUj3FmPdr25df@cluster0.gzlyamg.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })

///////////************** Mongodb connected or disconnected Events ***********/////////////

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected")

})

mongoose.connection.on('disconnectes', function () {
    console.log("mongoose is disconnected")
    process.exit(1)
})

mongoose.connection.on('error', function (err) {
    console.log('mongoose connecion is in error: ', err)
    process.exit(1)

})

mongoose.connection.on('SIGNIT', function () {
    console.log('app is turminating')
    mongoose.connection.close(function () {
        console.log('mongoose default connection is closed')
        process(0)
    })


})
