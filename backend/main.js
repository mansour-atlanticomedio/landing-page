const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' }); 

const sequelize = new Sequelize('landing_pagedb', 
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD || '1234', 
    {
        host: process.env.DB_HOST || 'database', 
        dialect: 'mysql'
    }
);

const Inscription = sequelize.define('Inscription', {
    name: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    profile: { type: DataTypes.STRING, allowNull: false },
    coments: { type: DataTypes.TEXT }
});

const Contact = sequelize.define('Contact', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false }
});

const Documentation = sequelize.define('Documentation', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    reference: { type: DataTypes.STRING },
    notes: { type: DataTypes.TEXT },
    files_paths: { type: DataTypes.JSON }
});

app.post('/inscription', async (req, res) => {
    try {
        const newInscription = await Inscription.create(req.body);
        res.status(201).json(newInscription);
    } catch (err) {
        res.status(400).json({ error: "Error al procesar la inscripción", details: err.message });
    }
});

app.post('/contact', async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ error: "Error al enviar mensaje", details: err.message });
    }
});


app.post('/documentation', upload.array('files', 10), async (req, res) => {
    try {
        const { name, email, reference, notes } = req.body;
        
        
        const filePaths = req.files ? req.files.map(file => file.path) : [];

        const newDoc = await Documentation.create({
            name,
            email,
            reference,
            notes,
            files_paths: filePaths
        });

        res.status(201).json(newDoc);
    } catch (err) {
        res.status(400).json({ error: "Error al enviar documentación", details: err.message });
    }
});

const PORT = 3000;
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});