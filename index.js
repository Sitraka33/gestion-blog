const express = require('express')
const app = express()
const port = 2580
const sequelize = require('./config/initSequelize')
const bodyparser = require('body-parser')
const Article = require('./models/article.js')
const Utilisateur = require('./models/utilisateur.js')

const utilisateurRouter = require('./routes/utilisateurRoute.js')
const articleRouter = require('./routes/articleRouter.js')

app.use(bodyparser.json());

//Use routes
app.use('/soa' , utilisateurRouter);
app.use('/soa/blog' , articleRouter) ;


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

