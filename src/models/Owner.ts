import { CollaboratorFactory, Collaborator } from './Collaborator'

export class OwnerFactory extends CollaboratorFactory {
  public factoryMethod (): Collaborator {
    return new Owner()
  }
}

/* Usuários Concretos */

class Owner implements Collaborator {
  public getUserData () {
    const userData = {
      name: 'João',
      password: '123456',
      document: '00123',
      acessLevel: 'owner',
      photo: 'url1'
    }
    return userData
  }
}

/* Recebe uma fábrica */
function clientCode (CollaboratorFactory) {
  console.log(CollaboratorFactory.someOperation())
}

clientCode(new OwnerFactory())
