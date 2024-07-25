import express from "express";
import {authenticateUser,logoutUser} from "../controllers/authController";

const router = express.Router();

router.post("/login", authenticateUser);
router.post("/logout", logoutUser);

export default router;