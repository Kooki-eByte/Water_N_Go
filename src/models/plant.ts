module.exports = function (sequelize: any, DataTypes: any) {
  const Plant = sequelize.define(
    "Plant",
    {
      plantImageData: {
        type: DataTypes.TEXT("medium"),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
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
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        default: Date.now(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: Date.now(),
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Plant;
};
//
