const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User');
const userRouter = require('./Route/UserRouter')


const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ProjectEcom')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection Error : ', err);
    });



// // GEt Users

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json({
//             message: 'User fetched successfully',
//             data: users
//         });
//     }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })

// // Post Method -- create user

// app.post('/adduser', async (req, res) => {
//     try{
//         const user = new User(req.body);
//         await user.save();

//         res.status(201).json({
//             message: 'User Created',
//             data: user
//         });
//     }
//     catch(error){
//         res.status(400).json({
//             error : error.message
//         })
//     }
// })

app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log('Server running on port 3000');
})