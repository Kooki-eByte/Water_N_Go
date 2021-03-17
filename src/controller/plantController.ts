import {
  addPlantQuery,
  deletePlantQuery,
  getPlantsQuery,
  updatePlantQuery,
} from "../db/queries/plantQueries";

export const getPlants = async ({ params }: any, res: any) => {
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
    plantImageData: string;
    plantName: string;
    userId: string;
    howLongToWaterAgain: number;
  };
};

export const addPlant = async ({ body }: plantData, res: any) => {
  const { plantImageData, plantName, userId, howLongToWaterAgain } = body;

  await addPlantQuery({
    plantImage: plantImageData,
    name: plantName,
    isWatered: true,
    id: userId,
    daysToWaterAgain: howLongToWaterAgain,
  })
    .then((res) => {
      res.json({ message: "Successful!" });
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: plantController.ts ~ line 48 ~ addPlant ~ err",
        err
      );

      res.json({ message: err });
    });
};

export const deletePlant = async (req: any, res: any) => {
  try {
    const deletedPlant = await deletePlantQuery(req.body);
    return res.json(deletedPlant);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 37 ~ deletePlant ~ err",
      err
    );

    return res.json({ message: "Error deleting plant" });
  }
};

export const updatePlant = async (req: any, res: any) => {
  try {
    const result = await updatePlantQuery(req.body);
    return res.json(result);
  } catch (err) {
    console.log(
      "🚀 ~ file: plantController.ts ~ line 74 ~ updatePlant ~ err",
      err
    );
    return res.json({ message: "Error trying to update plant info" });
  }
};
