import Sequelize, { Model } from 'sequelize';
import hashPass from '../../utils/hashPass';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

class CollaboratorModel extends Model {
  static init(connection) {
    super.init(
      {
        idCollaborator: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idAccessLevel: Sequelize.NUMBER,
        idCompany: Sequelize.NUMBER,
        name: Sequelize.STRING,
        document: Sequelize.STRING,
        passsword: Sequelize.STRING,
        photo: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      { sequelize: connection, tableName: 'collaborators' }
    );
    this.addHook('beforeSave', async (collaborator) => {
      if (collaborator.passsword) {
        collaborator.passsword = await hashPass(collaborator.passsword);
      }
    });

    return this;
  }
  static associate(models) {
    this.hasOne(models.AccessLevelModel, {
      foreignKey: 'idAccessLevel',
      as: 'AcessLevel',
    });
    this.belongsTo(models.CompanyModel, {
      foreignKey: 'idCompany',
      as: 'Company',
    });
  }

  verifyPassword(passsword) {
    return compare(passsword, this.passsword);
  }
  generateJWT() {
    const payload = {
      idCollaborator: this.idCollaborator,
      idCompany: this.idCompany,
      idAccessLevel: this.idAccessLevel,
      document: this.document,
      name: this.name,
    };
    return jwt.sign(payload, process.env.PRIVATE_KEY);
  }
}

export default CollaboratorModel;
