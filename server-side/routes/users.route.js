import { Router } from "express";
import {
  login,
  register
} from "../controllers/users.controller.js";


const router = new Router();
router.post("/register", register);
router.post("/login", login);


export default router;
