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
      // How many times plant is watered defaults to 1
      numberOfTimesWatered: {
        type: DataTypes.INTEGER,
        default: 1,
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
