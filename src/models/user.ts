module.exports = function (sequelize: any, DataTypes: any) {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        // The email cannot be null, and must be a proper email before creation
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  return User;
};
