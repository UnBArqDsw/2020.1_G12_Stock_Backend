import { CollaboratorFactory, Collaborator } from './Collaborator'

/* Fábrica dos Usuários */

export class AdminFactory extends CollaboratorFactory {
  public factoryMethod (): Collaborator {
    return new Admin()
  }
}

class Admin implements Collaborator {
  public getUserData () {
    const userData = {
      name: 'João',
      password: '123456',
      document: '00123',
      acessLevel: 'admin',
      photo: 'url1'
    }
    return userData
  }
}

/* Recebe uma fábrica */
function clientCode (CollaboratorFactory) {
  console.log(CollaboratorFactory.someOperation())
}

clientCode(new AdminFactory())
