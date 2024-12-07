import cors from 'cors';
import express from "express";
import connectToDatabase from "./db/connection.js";
import userRoutes from './routes/users.route.js';

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);

app.listen(8080, async () => {
  console.log("Server running on port 8080");

  connectToDatabase();
});
