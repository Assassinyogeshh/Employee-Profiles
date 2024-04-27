import userModel from "../models/userModel.js";
import fs from "fs";

import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password ,joingDate,joingTime,curctc,dateOfbirth} = req.fields;
    //validations
    const { panImage,addarImage} = req.files;
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" }); 
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }

    if(!joingDate){
      return res.send({ message: "joingDate is Required" });
    }

    if(!joingTime){
      return res.send({ message: "joingTime is Required" });
    }

    if(!curctc){
      return res.send({ message: "curctc is Required" });
    }

    if(!dateOfbirth){
      return res.send({ message: "dateOfbirth is Required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      joingDate,
      joingTime,
      curctc,
      dateOfbirth,
      
    }).save();

    if (panImage && addarImage) {
      user.panImage.data = fs.readFileSync(panImage.path);
      user.addarImage.data = fs.readFileSync(addarImage.path);
      user.panImage.contentType = panImage.type;
      user.addarImage.contentType = addarImage.type;
    }
    
    await user.save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
        user,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, "KJBKJMHK234245", {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: user,
      token,
    });
    console.log(user.name);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const getOne = async(req,res)=>{
    try{
      const { id } = req.params;


        const emp = await userModel.findOne({ _id:id });

        if (!emp) {
          return res.status(404).send({
            success: false,
            message: "Emp not found",
            emp,
          });
        }

        res.status(200).send({
          success: true,
          message: "emp found successfully",
          empdetails: emp,
        });
    }catch(error){
      res.status(500).send({
        success: false,
        message: "Error in geting the emp details",
        error,
      });
    }
}

export const getAllemp = async(req,res) =>{
      
   try{
    const allemp = await userModel.find({});
  
    if(!allemp){
     return res.status(404).send({
       success: false,
       message: "AllEmp are not found",
       allemp,
     });
    }
 
    res.status(200).send({
     success: true,
     message: "emp found successfully",
     emp: allemp,
   });
   }catch(error){
    res.status(500).send({
      success: false,
      message: "Error in geting the emp details",
      error,
    });
   }
  
}
