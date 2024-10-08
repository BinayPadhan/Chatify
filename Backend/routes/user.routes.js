import express from 'express';
import { getUserForSidebar } from '../controller/user.controller.js';
import protectRoute from '../middleware/protecteRoute.js';

const router = express.Router();

router.get("/", protectRoute, getUserForSidebar);

export default router;

