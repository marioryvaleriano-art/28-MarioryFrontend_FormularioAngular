const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // IMPORTANTE: Esto permite que Angular (puerto 4200) le hable a Node (puerto 3000)

// Configuración de tu SQL Server en Docker
const dbConfig = {
    user: 'sa',
    password: 'Password123!', 
    server: 'localhost',
    database: 'TerrorGamingDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433
};

// Ruta para GUARDAR (POST)
app.post('/api/juegos', async (req, res) => {
    const { titulo, categoria, imagen, descripcion } = req.body;
    try {
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('titulo', sql.VarChar, titulo)
            .input('categoria', sql.VarChar, categoria)
            .input('imagen', sql.VarChar, imagen)
            .input('descripcion', sql.Text, descripcion)
            .query('INSERT INTO Juegos (titulo, categoria, imagen, descripcion) VALUES (@titulo, @categoria, @imagen, @descripcion)');
        
        res.status(200).json({ message: 'Guardado con éxito' });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error en el servidor: " + err.message);
    }
});

// Ruta para LEER (GET)
app.get('/api/juegos', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query('SELECT * FROM Juegos');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => console.log('🚀 Backend listo en el puerto 3000'));