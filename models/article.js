const { DataTypes } = require('sequelize');
const sequelize = require('../config/initSequelize.js'); 
const Utilisateur = require('./utilisateur.js'); 

const Article = sequelize.define('Article', {
  IdArticle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Ajouté pour générer automatiquement les ID
  },
  titre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  contenu: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  IdUtilusateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: 'IdUtilusateur',
    },
  },
}, {
  tableName: 'Article',
  timestamps: false, // Si vous n'avez pas de colonnes createdAt et updatedAt
});

Article.belongsTo(Utilisateur, { foreignKey: 'IdUtilusateur' });
Utilisateur.hasMany(Article, { foreignKey: 'IdUtilusateur' });

module.exports = Article;
