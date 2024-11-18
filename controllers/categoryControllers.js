import Category from "../models/category.js";
import { isAdminValid } from "./userControllers.js";

//post - create
export function postCategory(req,res){
    const user = req.user
    if (!isAdminValid(req)){
        res.status(401).json({
            message : "Unauthorized"
        })
        return
    }
    const category = req.body
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
        (result)=>{
            res.json({
                categories : result
            })
        }
    ).catch(
        ()=>{
            res.status(401).json({
                message : "Failed to get categories"
            })
        }
    )
}

//get by name
export function getCategoryByName(req,res){
    const name = req.params.name
    Category.findOne({name:name}).then(
        (result)=>{
            if(result == null){
                res.json({
                    message : "Category not found"
                })
            }else{
                res.json({
                    category : result
                })
            }
            
        }
    ).catch(
        ()=>{
            res.status(401).json({
                message : "Failed to get category"
            })
        }
    )
}


//update
export function updateCategory(req,res){
    if (!isAdminValid(req)){
        res.status(401).json({
            message : "Unauthorized"
        })
        return
    }

    const name = req.params.name
    Category.updateOne({name : name},req.body).then(
        ()=>{
            res.json({
                message : "Category updated successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Category item updation failed"
            })
        }
    )
}


//delete
export function deleteCategory(req,res){
    if (!isAdminValid(req)){
        res.status(401).json({
            message : "Unauthorized"
        })
        return
    }
    const name = req.params.name
    Category.findOneAndDelete({name : name}).then(
        ()=>{
            res.json({
                message : "Category deleted successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Category item deletion failed"
            })
        }
    )
    
}



