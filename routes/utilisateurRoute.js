const express = require('express')
const router = express.Router();

const utilisateurController = require('../controllers/utilisateurController.js')

router.get('/utilisateurs' , utilisateurController.findAllUtilisateurs);
router.post('/utilisateur' , utilisateurController.createUtilisateur);
router.get('/utilisateur/:id' , utilisateurController.findUtilisateurById);
router.put('/utilisateur/:id' ,utilisateurController.updateUtilisateur);
router.delete('/utilisateur/:id' , utilisateurController.deleteUtilisateur);


module.exports = router;