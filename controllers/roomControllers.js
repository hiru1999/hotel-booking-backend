import Room from "../models/room.js";
import { isAdminValid } from "./userControllers.js";

//Post
export function createRoom(req,res){
    if(!isAdminValid(req)){
        res.status(401).json({
            message : "Unauthorized"
        })
    return
    }  
    
    const room = req.body
    const newRoom = new Room(room)
    newRoom.save().then(
        (result)=>{

            res.json({
                message : "Room created successfully",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Room creation failed",
                error : err
            })
        }
    )
}


//Delete
export function deleteRoom(req,res){
    if (!isAdminValid(req)){
        res.status(401).json({
            message : "Unauthorized"
        })
        return
    }
    const roomId = req.params.roomId
    Room.findOneAndDelete({roomId : roomId}).then(
        ()=>{
            res.json({
                message : "Room deleted successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Room deletion failed"
            })
        }
    )
    
}