import express from 'express';
import { createRoom, deleteRoom, findRoomById, getRoom, updateRoom } from '../controllers/roomControllers.js';

const roomRouter = express.Router()

roomRouter.post("/",createRoom)

roomRouter.get("/",getRoom)

roomRouter.delete("/:roomId",deleteRoom)

roomRouter.get("/:roomId",findRoomById)

roomRouter.put("/:roomId",updateRoom)

export default roomRouter;