import mongoose from "mongoose";

const datailsSchema = new mongoose.Schema(
  {
    
    userid: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: [String],
       
    },

  },
  { timestamps: true }
);

export default mongoose.model("details", datailsSchema);
