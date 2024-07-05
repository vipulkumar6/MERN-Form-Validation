import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    sNumber: {
        type: String,
        required: true
    },
    dateOfInvoice: {
        type: Date,
        default: Date.now
    },
    files: [{
        filename: String,
        originalname: String,
        size: Number,
        mimetype: String,
        path: String
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
