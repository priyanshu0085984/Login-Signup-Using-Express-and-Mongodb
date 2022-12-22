const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const http = require('http');
dotenv.config({path:"./config.env"});
mongoose.set('strictQuery', false);

const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(()=>{
    console.log("DB connection successful");
})
.catch(()=>{
    console.log("error");
});

const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>{
//     console.log(`APP listening to PORT ${PORT}`);
// })

const server = http.createServer(app)
server.listen(PORT)