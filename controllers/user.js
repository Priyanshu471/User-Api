import { userModel } from "../model/user.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel.find({});
  console.log(req.query);
  res.json({
    success: true,
    users,
  });
};

export const getNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await userModel.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("token", "cookie").json({
    success: true,
    message: "Registered Successfully",
  });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findById(id);
  res.json({
    success: true,
    user,
  });
};
