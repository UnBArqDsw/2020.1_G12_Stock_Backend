import Base from './Base';
import ProductModel from '../models/Product';

class ProductBase extends Base{
    constructor(){
        super(ProductModel);
    }
    async create(ProductInfo){
        console.log(ProductInfo);
        const product = await super.create(ProductInfo);
        return product;
    }
}
export default new ProductBase();
