const express = require('express');
const path = require('path');

const app = express();

const router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.use(router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto S (port)`));
//app.listen(3030, ()=> console.log('Servidor Corriendo'));//