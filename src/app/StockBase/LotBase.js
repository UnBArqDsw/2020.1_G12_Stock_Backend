import Base from './Base';
import LotModel from '../models/Lot';

class LotBase extends Base {
    constructor() {
        super(LotModel);
    }
    async create(LotInfo) {
        console.log(LotInfo);
        const lot = await super.create(LotInfo);
        return lot;
    }
}
export default new LotBase();
    