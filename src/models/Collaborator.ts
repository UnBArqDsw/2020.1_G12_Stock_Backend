/* Usuários Concretos */
export interface Collaborator {
  idCollaborator: number
  idAcessLevel: number
  idCompany: number

  name: string
  password: string
  document: string
  accessLevel: string
  photo: string

  createdAt: Date;
  updatedAt: Date;
}
/* Fábrica dos Usuários */

export abstract class CollaboratorFactory {
  public abstract factoryMethod(): Collaborator;

  public someOperation (): string {
    const collaborator = this.factoryMethod()
    const data = collaborator.name
    return `Create ${data}`
  }
}
