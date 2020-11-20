import Base from './Base';
import CompanyModel from '../models/Company';

class CompanyBase extends Base {
  constructor() {
    super(CompanyModel);
  }

  async create(CompanyInfo) {
    try{
      let date = new Date();
      CompanyInfo.registerDate =
        date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

      const company = await super.create(CompanyInfo);
      return company;
    }catch(error){
      throw { status: 400, message: error.errors[0].message};
    }
  }
  async getIdByCpfCnpj(CompanyInfo) {
    if (CompanyInfo.companyDocument) {
      const company = await super.findOne({
        where: { document: CompanyInfo.companyDocument },
      });

      return company.idCompany;
    } else {
      throw { status: 400, message: 'Verifique seu documento.' };
    }
  }
}
export default new CompanyBase();
