import Product from "../model/productModel.js"

export const register = async (req, res) => {
    try {
        const product = new Product(req.body);

        if (!product) {
            return res.status(404).json({ msg: "Data not found" })
        }
        const savedData = await product.save();
        res.status(200).json(savedData)
    }
    catch (e) {
        return res.status(404).json(e)
    }
}
export const getdata = async (req, res) => {
    try {


        const products = await Product.find().sort({ createdAt: -1 }).exec();

        if (!products) {
            return res.status(404).json({ msg: "Data not found" })
        }
        res.status(200).json(products)
    }
    catch (e) {
        return res.status(404).json(e)
    }
}