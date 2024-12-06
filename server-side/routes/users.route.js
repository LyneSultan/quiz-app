import { Router } from "express";
import {
  createUser
} from "../controllers/users.controller.js";


const router = new Router();
router.post("/", createUser);


export default router;
