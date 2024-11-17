import Category from "../models/category.js";

//post - create
export function postCategory(req,res){
    const user = req.user
    if(user == null){
        res.status(403).json({
            message : "Please login to create a category"
        })
        return 
    }
    if(user?.type != "admin"){
        res.status(403).json({
            message : "You are not authorized to create a category"
        })
        return
    }
    const category = req.body.item
    const newCategory = new Category(category)
    newCategory.save().then(
        (result)=>{

            res.json({
                message : "Category created successfully",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Category item creation failed",
                error : err
            })
        }
    )
}

//get
export function getCategory(req,res){
    Category.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )
}