import { addUserQuery, getUserQuery } from "../db/queries/userQueries";

export const addUser = async (req: any, res: any) => {
  try {
    const user = await addUserQuery(req.body);

    return res.status(200).json(user);
  } catch (err) {
    console.log("🚀 ~ file: userController.ts ~ line 10 ~ addUser ~ err", err);

    return res.status(400).json({ message: "Error adding user to database" });
  }
};

export const loginUser = async (req: any, res: any) => {
  try {
    const user = await getUserQuery(req.body);

    return res.status(200).json(user);
  } catch (err) {
    console.log(
      "🚀 ~ file: userController.ts ~ line 22 ~ loginUser ~ err",
      err
    );

    return res.status(400).json({ message: "Error could not find the user" });
  }
};
