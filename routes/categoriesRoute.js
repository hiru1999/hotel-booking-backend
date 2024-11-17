import express from 'express'
import { deleteCategory, getCategory, postCategory } from '../controllers/categoryControllers.js';

const categoryRouter = express.Router()

categoryRouter.post("/",postCategory)

categoryRouter.get("/",getCategory)

categoryRouter.delete("/:name",deleteCategory)

export default categoryRouter;

