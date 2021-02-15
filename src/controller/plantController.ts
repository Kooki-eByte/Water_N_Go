import {
  addPlantQuery,
  deletePlantQuery,
  getPlantsQuery,
} from "../db/queries/plantQueries";

export const getPlants = async ({ params }: any, res: any) => {
  console.log("Req.body on plantcontroller", params.userId);
  try {
    const plants = await getPlantsQuery(params.userId); //req.body

    return res.status(200).json(plants);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 9 ~ getPlants ~ err",
      err
    );

    return res.status(400).json({ message: "Error retrieving all plants" });
  }
};

type plantData = {
  body: {
    plantImg: string;
    plantName: string;
    userId: string;
    maxDaysToWaterAgain: number;
  };
};

export const addPlant = async ({ body }: plantData, res: any) => {
  const { plantImg, plantName, userId, maxDaysToWaterAgain } = body;
  console.log("plant controller ts file req.body is : ", body);
  try {
    const plant = await addPlantQuery({
      plantImage: plantImg,
      name: plantName,
      isWatered: true,
      id: userId,
      daysToWaterAgain: maxDaysToWaterAgain,
    });
    return res.status(200).json(plant);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 21 ~ addPlant ~ err",
      err
    );

    return res.status(400).json({ message: err });
  }
};

export const deletePlant = async (req: any, res: any) => {
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
