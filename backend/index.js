import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// Protection CSRF
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection); // Appliquer globalement

// Route pour obtenir le token CSRF
app.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Route pour traiter le formulaire
app.post('/submit', (req, res) => {
    res.send("Les données sont bien traitées");
});

// Démarrer le serveur
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
