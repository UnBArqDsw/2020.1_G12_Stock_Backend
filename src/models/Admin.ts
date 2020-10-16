import { CollaboratorFactory, Collaborator } from './Collaborator'
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";
import database from '../database'

const sequelize = new Sequelize("mysql://root:asd123@localhost:5432/mydb");

export class AdminFactory extends CollaboratorFactory {
  public factoryMethod(): Collaborator {
    return new Admin()
  }
}

/* Usuários Concretos */

export class Admin implements Collaborator {
  public idCollaborator!: number
  public idAcessLevel: number
  public idCompany: number

  public name: string
  public password: string
  public document: string
  public accessLevel: string
  public photo: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  static init: any;
}

Admin.init(
  {
 
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    document: Sequelize.STRING,
    accessLevel: Sequelize.STRING,
    photo: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

/* Recebe uma fábrica */
function clientCode(CollaboratorFactory) {
  console.log(CollaboratorFactory.someOperation())
}

clientCode(new AdminFactory())
