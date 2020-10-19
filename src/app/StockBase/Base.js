// aqui fica todas as funcções do sequelize relacionadas a model, como create, update, findOne, findAll ...
class Base {
  constructor(modelBase) {
    this.modelBase = modelBase;
  }

  async create(data) {
    const respose = await this.modelBase.create(data);
    return respose;
  }

  async finOne(data) {
    const respose = await this.modelBase.finOne(data);
    return respose;
  }
  async findAll(data) {
    const respose = await this.modelBase.findAll(data);
    return respose;
  }
  async update(data) {
    const respose = await this.modelBase.update(data);
    return respose;
  }
}

export default Base;
