import { CollaboratorFactory, Collaborator } from './Collaborator'
import Sequelize, { Model } from 'sequelize'
import database from '../database'

export class SellerFactory extends CollaboratorFactory {
  public factoryMethod (): Collaborator {
    return new Seller()
  }
}

/* Usuários Concretos */

export class Seller extends Model implements Collaborator {
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

Seller.init(
  {

    name: Sequelize.STRING,
    password: Sequelize.STRING,
    document: Sequelize.STRING,
    accessLevel: Sequelize.STRING,
    photo: Sequelize.STRING
  },
  {
    sequelize: database.connection,
    freezeTableName: true
  }
)

/* Recebe uma fábrica */
function clientCode (CollaboratorFactory) {
  console.log(CollaboratorFactory.someOperation())
}

clientCode(new SellerFactory())
