import Base from './Base';
import CompanyModel from '../models/Company';

class CompanyBase extends Base {
  constructor() {
    super(CompanyModel);
  }

  async create(CompanyInfo) {
    let date = new Date();
    CompanyInfo.registerDate =
      date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    const company = await super.create(CompanyInfo);
    return company;
  }
  async getIdByCpfCnpj(CompanyInfo) {
    if (CompanyInfo.companyDocument) {
      console.log(CompanyInfo.companyDocument);
      const company = await super.findOne({
        where: { document: CompanyInfo.companyDocument },
      });
      console.log(company);
      return company.idCompany;
    } else {
      throw { status: 401, message: 'Verifique seu documento.' };
    }
  }
}
export default new CompanyBase();
