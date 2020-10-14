/* Usuários Concretos */
export interface Collaborator {
    getUserData(): {
        name: string
        password: string
        document: string
        acessLevel: string
        photo: string
    }
}
/* Fábrica dos Usuários */

export abstract class CollaboratorFactory {
    public abstract factoryMethod(): Collaborator;

    public someOperation (): string {
      const collaborator = this.factoryMethod()
      const data = collaborator.getUserData().acessLevel
      return `Create ${data}`
    }
}
