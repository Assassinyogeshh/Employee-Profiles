import express from "express";
import { detailController ,updateUserDetails} from "../controllers/detailController.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/detail", detailController );
router.put("/update", updateUserDetails)

//LOGIN || POST
// router.post("/login", loginController);



export default router;
