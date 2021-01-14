module.exports = function (sequelize: any, DataTypes: any) {
  const Plant = sequelize.define(
    "Plant",
    {
      // The plant image is the image the user gives
      plantImage: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // name of plant
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      // is plant watered
      isWatered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      // How mnay days to wait till we change isWatered to false and send out notification
      daysToWaterAgain: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 14,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Plant;
};
