const Order = require("../model/order.model");
const Cart = require("../model/cart.model");
exports.addNewOrder = async(req,res) =>{
    try {
        let carts = await Cart.find({
            user:req.user._id,
            isDelete:false,
        }).populate({path:"productId"});

        if(carts.length ===0){
            return res.json({msg:"not cart found"});
        }

        let orderItems = carts.map((item)=>({
            productId :item.productId._id,
            quantity: item.qiantity,
            price: item.productId.price,
            totalprice: item.quantity * item.productId.price
        } ))
        console.log(orderItems);
        let amount = orderItems.reduce((total, item) => total +=item.totalprice ,0)
        console.log(amount);

        let order = await Order.create({
            user:req.user._id,
            items:orderItems,
            paidAmount: amount
        });
        await Cart.updateMany({user:req.user._id , isDelete:false},{isDelete:true});
        res.json({msg:"order placed",order})
        
        
        
    } catch (err) {
         console.log(err);
         res.status(500).json({msg:"internal server error"})
         
    }
}

// let find  = [
//     {
//         $match:{user:req.user._id,isDelete:false},
//     },
//     {
//         $lookup:{
//             from:"products",
//             localField:"productId",
//             foreignfield:"_id",
//             as:"product"
//         }
//     }
// ];
// let carts = await Cart.aggregate(find)


exports.cancelorder = async (req,res) =>{
    try {
        let orderId = req.body._id;
        if(!orderId){
            
            return res.status(400).json({msg:"order id is requird"})
        }
        let deleteOrder = await Order.findByIdAndUpdate(orderId,{isDelete:true},{new:true})
        res.send({msg:"your order has been cancelles",deleteOrder})

    } catch (err) {
       console.log(err);
       res.status(500).json({msg:"internal server error"})
          
    }
}


exports.getorder = async(req,res) =>{
    try {
        let carts = await Cart.find({
            user:req.user._id,
            isDelete:false}) 
            if(carts.length ===0){
                return res.json({msg:"not cart found",});
            }
    } catch (err) {
          console.log(err);
          res.status(500).json({msg:"internal server error"})
          
    }
}