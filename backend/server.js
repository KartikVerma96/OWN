import express from 'express';
import connectDB from "./DB/db.js";
import authRoutes from "./Routes/authRoutes.js";
import cors from 'cors';

const app = express();

connectDB();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/auth", authRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port no. ${PORT}`);
});
