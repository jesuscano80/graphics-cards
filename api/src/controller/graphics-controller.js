const Graphics = require("../model/Graphics");

const getCards = async (req, res, next) => {
  const { buscar } = req.query;
  if (buscar != undefined) {
    try {
      const busqueda = await Graphics.find({ name: new RegExp(buscar, "i") });

      res.status(200).json({ data: busqueda });
    } catch (err) {
      next(err);
    }
  } else {
    try {
      const { limite } = req.query;
      const show = parseInt(limite);
      const allGraphics = await Graphics.find({}).limit(show);
      res.status(200).json({ data: allGraphics });
    } catch (err) {
      next(err);
    }
  }
};

const getOneCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const graphicsFound = await Graphics.findById(id);
    res.status(200).json({ data: graphicsFound });
  } catch (err) {
    next(err);
  }
};

const postCard = async (req, res, next) => {
  try {
    const { name, brand, price, image, memory, frecuence } = req.body;
    const graphicCard = new Graphics({
      name,
      brand,
      price,
      image,
      memory,
      frecuence,
    });
    const graphicSave = await graphicCard.save();
    res.status(200).json({ data: graphicSave });
  } catch (err) {
    next(err);
  }
};

module.exports = { postCard, getCards, getOneCard };
