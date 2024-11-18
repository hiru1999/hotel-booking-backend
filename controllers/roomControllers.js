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


//get
export function getRoom(req,res){
    Room.find().then(
        (result)=>{
            res.json({
                rooms : result
            })
        }
    ).catch(
        ()=>{
            res.status(401).json({
                message : "Failed to get rooms"
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

//Search room
export function findRoomById(req,res){
    const roomId = req.params.roomId
    Room.findOne({roomId : roomId}).then(
        (result)=>{
            if(result == null){
                res.json({
                    message : "Room not found"
                })
                return
            }else{
                res.json({
                    message : "Room found",
                    result : result
                })
            }
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Room search failed",
                error : err
            })
            return
           
        }
    )
}

