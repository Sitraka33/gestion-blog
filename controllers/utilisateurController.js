const Utilisateur = require("../models/utilisateur.js");

exports.findAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUtilisateur = async (req, res) => {
  try {
    const newUtilisateur = await Utilisateur.create(req.body);
    res.status(201).json(newUtilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findUtilisateurById = async (req , res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (utilisateur) {
          res.status(200).json(utilisateur);
        } else {
          res.status(404).json({ error: 'Utilisateur not found' });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

exports.updateUtilisateur = async (req, res) => {
    try {
      const [updated] = await Utilisateur.update(req.body, {
        where: { IdUtilusateur: req.params.id }
      });
      if (updated) {
        const updatedUtilisateur = await Utilisateur.findByPk(req.params.id);
        res.status(200).json(updatedUtilisateur);
      } else {
        res.status(404).json({ error: 'Utilisateur not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.deleteUtilisateur = async (req, res) => {
    try {
      const deleted = await Utilisateur.destroy({
        where: { IdUtilusateur: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Utilisateur not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };