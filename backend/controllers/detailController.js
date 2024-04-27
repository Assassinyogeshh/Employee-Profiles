import detailsModel from "../models/detailsModel.js";

export const detailController = async(req,res)=>{
     
    try{
        const {userid,date} = req.body;

        if (!userid) {
            return res.send({ error: "Userid is Required" });
          }
          if (!date) {
            return res.send({ message: "Date is Required" });
          }

          const exisitingUser = await detailsModel.findOne({ userid});

          if (exisitingUser) {
            return res.status(200).send({
              success: false,
              message: "Already Register please login",
            });
          }
        
          const date1 = [];
          date1.push(date);
          const user = await new detailsModel({
            userid,
            date:date1,
            
          }).save();
      console.log(date1);
          res.status(201).send({
            success: true,
            message: "User data update Successfully",
            user,
          });
          console.log(user);

    }catch(error){
        res.status(500).send({
            success: false,
            message: "Errro in Registeration",
            error,
          });
    }
}

export const updateUserDetails = async(req,res)=>{
      try{
           const{date1,id} = req.body;
           const filter = { _id: req.body.id };
           const user = await detailsModel.findById({_id:id});
        //    console.log(user);
           const date2 = [date1,...user.date];
            
           const user2 = await detailsModel.findByIdAndUpdate(
             filter,
             {date:date2},
             {new:true}
        )

        console.log(date2);
           
        if(user2){
            res.status(201).send({
                user2,
              });
        }

           

      }catch(error){
        res.status(500).send({
            // success: false,
            // message: "Errro in Registeration",
            error,
          });
      }
}