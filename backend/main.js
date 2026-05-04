const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('landing_pagedb', 'root', '1234', {
    host: 'localhost', 
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    puesto: { type: DataTypes.STRING }
});

const Message = sequelize.define('Message', {
    remitente: { type: DataTypes.STRING },
    contenido: { type: DataTypes.TEXT },
    tipo: { type: DataTypes.ENUM('contacto', 'sugerencia'), defaultValue: 'contacto' }
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: "Error al inscribir usuario" });
    }
});

app.get('/messages', async (req, res) => {
    const messages = await Message.findAll();
    res.json(messages);
});

app.post('/messages', async (req, res) => {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
});

const PORT = 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://192.168.0.157:${PORT}`);
    });
});