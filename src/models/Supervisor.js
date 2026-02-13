const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Supervisor = sequelize.define('Gral_Supervisores', {
  Supe_Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Supe_DNI: { type: DataTypes.STRING, allowNull: false, unique: true },
  Supe_Nombres: { type: DataTypes.STRING, allowNull: false },
  Supe_Apellidos: { type: DataTypes.STRING, allowNull: false },
  Supe_Sexo: { type: DataTypes.CHAR, allowNull: false },
  Supe_Telefono: { type: DataTypes.STRING, allowNull: false },
  Supe_Correo: { type: DataTypes.STRING, allowNull: false},
  EsCi_Id: { type: DataTypes.INTEGER, allowNull: false },

  // Campos de auditoría 
  Usua_Creacion: { type: DataTypes.INTEGER },
  Supe_FechaCreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Usua_Modificacion: { type: DataTypes.INTEGER },
  Supe_FechaModificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Supe_Estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  timestamps: false,
  tableName: 'Gral_Supervisores'
});

module.exports = Supervisor;