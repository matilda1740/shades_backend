import mongoose from "mongoose";

const PurchaseSchema = mongoose.Schema({
    email: String,
    name: String,
    card_number: String,
    exp_month: Date,
    exp_year: Date,
    cvc: String
})

export default mongoose.model("purchaseInfo", PurchaseSchema);