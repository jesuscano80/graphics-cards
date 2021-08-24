const {Router}= require("express");
const Graphics = require("../model/Graphics");

const GraphicCtrl = require("../controller/graphics-controller");

const router= Router();

router.get("/graphics-cards", GraphicCtrl.getCards)

router.get("/graphics-cards/:id", GraphicCtrl.getOneCard)

router.post("/graphics-cards/", GraphicCtrl.postCard)


module.exports= router;