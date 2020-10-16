class CollaboratorController {
  collaboratorTeste (req, res) {
    return res.json({ message: 'teste' })
  }
}

export default new CollaboratorController()
