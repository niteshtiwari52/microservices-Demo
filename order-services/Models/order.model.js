const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,  
      unique: true,    
    },
    itemName: {
      type: String,
      required: true,  
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],  
      default: "Pending", 
    },
    orderBy : {
      
    }
  },
  {
    timestamps: true,  
  }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;

