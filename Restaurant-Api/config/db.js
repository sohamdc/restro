const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://soham:Soham%401234@sohamdc.nbzmd.mongodb.net/Restaurant_DB",
    
//     );
//     console.log("MongoDB connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };



mongoose.connect('mongodb+srv://soham:Soham%401234@sohamdc.nbzmd.mongodb.net/Restaurant_DB').then(()=>{
  console.log("Connected..")
}).catch((e)=>{
  console.log('Error: ',e)
})
