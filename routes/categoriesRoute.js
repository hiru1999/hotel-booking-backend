import express from 'express'
import { deleteCategory, getCategory, getCategoryByName, postCategory, updateCategory } from '../controllers/categoryControllers.js';

const categoryRouter = express.Router()

categoryRouter.post("/",postCategory)

// categoryRouter.get("/searchByPrice",(req,res)=>{
//     res.json({
//         message : "searchByPrice"
//     })
// })

categoryRouter.get("/:name",getCategoryByName)

categoryRouter.get("/",getCategory)

categoryRouter.put("/:name",updateCategory)

categoryRouter.delete("/:name",deleteCategory)

export default categoryRouter;

