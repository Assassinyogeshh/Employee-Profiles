import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  const url = 'mongodb+srv://new-mukesh_28:2885716@mernstack.zbyik4g.mongodb.net/form';
  try {
    const conn = await mongoose.connect(url);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
