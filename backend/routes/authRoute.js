import express from "express";
import formidable from "express-formidable";
import {
  registerController,
  loginController,
  getOne,
  getAllemp,
  
} from "../controllers/authController.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register",formidable(), registerController);

//LOGIN || POST
router.post("/login", loginController);
router.get("/getOneEmp/:id",getOne);
router.get("/getAllEmp",getAllemp);



export default router;
