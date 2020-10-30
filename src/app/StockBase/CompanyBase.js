import Base from './Base';
import CompanyModel from '../models/Company';

class CompanyBase extends Base {
  constructor() {
    super(CompanyModel);
  }

  async create(CompanyInfo) {
    let date = new Date();
    CompanyInfo.registerDate = date.toLocaleDateString()+" "+date.toLocaleTimeString();

    const company = await super.create(CompanyInfo);
    return company;
  }
}
export default new CompanyBase();