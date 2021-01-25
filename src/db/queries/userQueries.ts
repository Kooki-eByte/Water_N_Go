const dbModel = require("../../models");

export const addUserQuery = async <T extends { email: string; name: string }>(
  data: T
) => {
  try {
    const user = await dbModel.User.create({
      name: data.name,
      email: data.email, // TODO - Change the property to whatever google auth has in there obj.
    });

    if (!user) {
      throw new Error("User could not be added");
    }
    return Promise.resolve(user);
  } catch (err) {
    console.log(
      "🚀 ~ file: userQueries.ts ~ line 16 ~ addUserQuery ~ err",
      err
    );

    return Promise.reject(err);
  }
};

export const getUserQuery = async <T extends { email: string }>(data: T) => {
  try {
    const user = await dbModel.User.findAll({
      where: data.email, // Email becasue we are using googles OAuth for logging in
    });

    if (!user) {
      throw new Error("User could not be found");
    }

    return Promise.resolve(user);
  } catch (err) {
    console.log(
      "🚀 ~ file: userQueries.ts ~ line 34 ~ getUserQuery ~ err",
      err
    );

    return Promise.reject(err);
  }
};
