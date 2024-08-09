import express from 'express';
import { registerController } from "../Controllers/authController.js";
import { registerValidationRules } from "../Helpers/validationRules.js";
import { validate } from "../middlewares/validate.js";
const app = express();

const authRoutes = express.Router();

authRoutes.post('/register', registerValidationRules(), validate, registerController);

export default authRoutes;