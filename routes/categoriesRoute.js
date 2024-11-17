import express from 'express'
import { getCategory, postCategory } from '../controllers/categoryControllers.js';

const categoryRouter = express.Router()

categoryRouter.post("/",postCategory)

categoryRouter.get("/",getCategory)

export default categoryRouter;

