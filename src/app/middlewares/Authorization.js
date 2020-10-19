import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  try {
    const token = req.headers['x-auth-token'];

    if (!token) {
      throw { message: 'Token não encontrado' };
    }

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.collaborator = decoded;

    return next();
  } catch (error) {
    return res.status(403).json({ message: error.message || error });
  }
}
