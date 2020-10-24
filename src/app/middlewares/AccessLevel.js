export default function (req, res, next) {
  try {
    const accessLevel = req.collaborator.accessLevel;

    if (accessLevel == 3) {
      res.status('401').send('Usuário não autorizado.');
    } else {
      return next();
    }
  } catch (error) {
    return res.status(403).json({ message: error.message || error });
  }
}
