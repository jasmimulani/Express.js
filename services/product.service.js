const product = require('../model/product_model')

class ProductServices {
    async addNewProduct(body){
        return await product.create(body);
    }

    async getProduct(body){
        try {
            return await product.findOne(body)
        } catch (err) {
            console.log(err);
            return err;
            
        }
    }
};

module.exports = ProductServices;