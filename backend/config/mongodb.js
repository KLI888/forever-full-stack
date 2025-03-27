import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, { 
        useNewUrlParser: true, useUnifiedTopology: true,autoSelectFamily: false
      })

}

export default connectDB;


// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("✅ MongoDB Connected Successfully");
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:", error.message);
//         process.exit(1);
//     }
// };

// export default connectDB;
