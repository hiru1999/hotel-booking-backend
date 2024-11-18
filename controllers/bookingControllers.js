import Booking from "../models/booking.js";

export function createBooking(req,res){
    const startingId = 1200;

    Booking.countDocuments({}).then(
        (count)=>{
            console.log(count);
            const newId = startingId + count + 1;
            // const newId = "INV" + startingId + count + 1;
        }
    )
}


// export function createBooking(req,res){
//     if(!isAdminValid(req)){
//         res.status(401).json({
//             message : "Unauthorized"
//         })
//     return
//     }  
    
//     const room = req.body
//     const newRoom = new Room(room)
//     newRoom.save().then(
//         (result)=>{

//             res.json({
//                 message : "Room created successfully",
//                 result : result
//             })
//         }
//     ).catch(
//         (err)=>{
//             res.status(500).json({
//                 message : "Room creation failed",
//                 error : err
//             })
//         }
//     )
// }
