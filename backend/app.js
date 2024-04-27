import express from 'express';
// import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import detailRoute from "./routes/detailRoute.js"
import connectDB from "./config/db.js";
import cors from "cors";
// dotenv.config();
connectDB();



const app = express();

//middelwares
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/details", detailRoute);
const port = 8001;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to app</h1>");
  });

app.listen(8001,()=>{
    console.log("welcome to the server");
})