const { DataTypes } = require('sequelize');
const sequelize = require('../config/initSequelize.js')

const Utilisateur = sequelize.define('Utilisateur', {
  IdUtilusateur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Ajouté pour générer automatiquement les ID
  },
  nomUtilisateur: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  motdepasse: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'Utilisateur',
  timestamps: false, // Si vous n'avez pas de colonnes createdAt et updatedAt
});

module.exports = Utilisateur;
