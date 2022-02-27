import { Router } from "express";
import controller from "../controller/di.controller.js";

const router = Router();

router.post('/add', controller.addUsers)
router.get('/get', controller.getUsers)

export default router; 