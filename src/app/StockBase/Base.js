// aqui fica todas as funcções do sequelize relacionadas a model, como create, update, findOne, findAll ...
class Base {
  constructor(modelBase) {
    this.modelBase = modelBase;
  }

  async create(data) {
    const response = await this.modelBase.create(data);
    return response;
  }

  async findOne(data) {
    const response = await this.modelBase.findOne(data);
    return response;
  }
  async findAll(data) {
    const response = await this.modelBase.findAll(data);
    return response;
  }
  async update(data) {
    const response = await this.modelBase.update(data);
    return response;
  }
}

export default Base;
