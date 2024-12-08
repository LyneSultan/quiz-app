import { Router } from "express";
import { createQuiz, getQuizzes } from "../controllers/quizzes.controller.js";
import {
  login,
  register
} from "../controllers/users.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = new Router();
router.post("/register", register);
router.post("/login", login);

router.post("/createQuiz", createQuiz);
router.get("/getQuizzes", authMiddleware, getQuizzes);

export default router;
