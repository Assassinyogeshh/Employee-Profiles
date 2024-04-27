import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    joingDate:{
      type:String,
      required:true
    },
    joingTime:{
      type:String,
      required:true
    },
    curctc:{
      type:Number,
      required:true
    },
    dateOfbirth:{
      type:String,
      required:true
    },

    panImage:{
      data: Buffer,
      contentType: String,
    },
    addarImage:{
      data: Buffer,
      contentType: String,
    }

  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
