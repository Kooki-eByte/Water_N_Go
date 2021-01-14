const dbModel = require("../../models");

const addPlantQuery = async (data: object) => {
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

const deletePlantQuery = async (data: object) => {
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
