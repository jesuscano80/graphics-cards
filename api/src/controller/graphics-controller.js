const Graphics = require("../model/Graphics");

const getCards=  async(req,res, next)=>{
    try{
        const allGraphics= await Graphics.find({});
        res.status(200).json({data: allGraphics});
    }
    catch(err){
        next(err)
    }
}


const getOneCard= async(req,res, next)=>{
    try{
        const {id}= req.params;
        const graphicsFound= await Graphics.findById(id);
        res.status(200).json({data: graphicsFound})
    }
    catch(err){
        next(err);
    }
}

const postCard = async(req,res, next)=>{
    
    try{
      const {name, brand, price, image, memory, frecuence}= req.body;
      console.log(req.body);
      const graphicCard= new Graphics({name, brand, price, image, memory, frecuence});
      const graphicSave=await graphicCard.save();
      res.status(200).json({data: graphicSave})  
    }
    catch(err){
        next(err)
    }


}

module.exports= {postCard, getCards, getOneCard};