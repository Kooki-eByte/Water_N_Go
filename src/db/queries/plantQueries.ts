const dbModel = require("../../models");

// /api/plant/add
export const addPlantQuery = async <
  T extends {
    plantImage: string;
    name: string;
    numberOfTimesWatered: number;
    daysToWaterAgain: number;
    id: string;
  }
>(
  data: T
) => {
  try {
    const plantData = await dbModel.Plant.create({
      plantImageData: data.plantImage,
      name: data.name,
      numberOfTimesWatered: data.numberOfTimesWatered,
      userId: data.id,
      daysToWaterAgain: data.daysToWaterAgain,
    });
    if (!plantData) {
      throw new Error("Add plant was not saved.");
    }

    return Promise.resolve(plantData);
  } catch (error) {
    return Promise.reject(error);
  }
};

// Need to get userID to grab the write plants
export const getPlantsQuery = async <T extends { userId: number }>(id: T) => {
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

export const updatePlantQuery = async <
  T extends { id: string; updatedTimesWatered: number }
>(
  data: T
) => {
  try {
    const deletedPlant = await dbModel.Plant.update(
      {
        numberOfTimesWatered: data.updatedTimesWatered,
      },
      {
        where: {
          id: data.id,
        },
      }
    );

    return Promise.resolve(deletedPlant);
  } catch (error) {
    return Promise.reject(error);
  }
};
