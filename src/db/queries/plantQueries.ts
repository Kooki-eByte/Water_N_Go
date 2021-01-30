const dbModel = require("../../models");

export const addPlantQuery = async <
  T extends {
    plantImage: string;
    name: string;
    isWatered: boolean;
    daysToWaterAgain: number;
  }
>(
  data: T
) => {
  try {
    const plant = await dbModel.Plant.create({
      plantImage: data.plantImage,
      name: data.name,
      isWatered: data.isWatered,
      daysToWaterAgain: data.daysToWaterAgain,
    });
    if (!plant) {
      throw new Error("Add plant was not saved.");
    }

    return Promise.resolve(plant);
  } catch (error) {
    return Promise.reject(error);
  }
};

// Need to get userID to grab the write plants
export const getPlantsQuery = async <T extends { userId: string }>(id: T) => {
  console.log("Data from plantQueries.ts", id);

  try {
    const plants = await dbModel.Plant.findAll({
      where: {
        userId: id,
      },
    });

    return Promise.resolve(plants);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deletePlantQuery = async <T extends { id: string }>(data: T) => {
  try {
    const deletedPlant = await dbModel.Plant.destroy({
      where: {
        id: data.id,
      },
    });

    return Promise.resolve(deletedPlant);
  } catch (error) {
    return Promise.reject(error);
  }
};
