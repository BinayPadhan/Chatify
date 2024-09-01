import express from 'express';
import { getMessage, sendMessage } from '../controller/message.controller.js';
import protectRoute from '../middleware/protecteRoute.js'

const router = express.Router();

router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessage);

export default router;