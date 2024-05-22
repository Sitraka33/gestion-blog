import swaggerUi from 'swagger-ui-express';

const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./config/initSequelize')
const bodyparser = require('body-parser')
const Article = require('./models/article.js')
const Utilisateur = require('./models/utilisateur.js')

const utilisateurRouter = require('./routes/utilisateurRoute.js')
const articleRouter = require('./routes/articleRouter.js')

app.use(bodyparser.json());
const swaggerDocument = require("./swagger.json");


//Use routes
app.use('/soa' , utilisateurRouter);
app.use('/soa' , articleRouter) ;
app.use('/api-doc',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

sequelize.sync().then(() => {
  console.log('Base de données connectée et modèles synchronisés.');
  
}).catch(err => {
  console.error('Erreur de synchronisation des modèles :', err);
});



// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

