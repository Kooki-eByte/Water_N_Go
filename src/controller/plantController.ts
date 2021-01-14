import {
  addPlantQuery,
  deletePlantQuery,
  getPlantsQuery,
} from "../db/queries/plantQueries";

const getPlants = async (req: any, res: any) => {
  try {
    const plants = await getPlantsQuery(req.body);

    return res.status(200).json(plants);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 9 ~ getPlants ~ err",
      err
    );

    return res.status(400).json({ message: "Error retrieving all plants" });
  }
};

const addPlant = async (req: any, res: any) => {
  try {
    const plant = await addPlantQuery(req.body);
    return res.status(200).json(plant);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 21 ~ addPlant ~ err",
      err
    );

    return res.status(400).json({ message: err });
  }
};

const deletePlant = async (req: any, res: any) => {
  try {
    const deletedPlant = await deletePlantQuery(req.body);
    return res.status(200).json(deletedPlant);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 37 ~ deletePlant ~ err",
      err
    );

    return res.status(400).json({ message: "Error deleting plant" });
  }
};

module.exports = {
  addPlant,
  getPlants,
  deletePlant,
};
