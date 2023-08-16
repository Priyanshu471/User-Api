import express from "express";
import { userModel } from "../model/user.js";
import { getAllUsers, getNewUser, getUserById } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", getNewUser);

router.get("/userid/:id", getUserById);

export default router;
