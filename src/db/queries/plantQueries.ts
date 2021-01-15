const dbModel = require("../../models");

const addPlantQuery = async <
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
const getPlantsQuery = async (data: object) => {
  // <T extends {userId: string}>
  try {
    const plants = await dbModel.Plant.findAll({
      // where: {
      //   userId: data.userId,
      // },
    });

    return Promise.resolve(plants);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deletePlantQuery = async <T extends { id: string }>(data: T) => {
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

module.exports = {
  addPlantQuery,
  getPlantsQuery,
  deletePlantQuery,
};
