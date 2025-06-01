const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // Temporal: En memoria

const SECRET = "tu_secreto_super_seguro"; // En producción usa una variable de entorno

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email ya registrado" });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: "Usuario registrado exitosamente" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  }

  // Genera token JWT
  const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, SECRET, { expiresIn: '2h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};
