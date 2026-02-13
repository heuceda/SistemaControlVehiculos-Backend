const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Motorista = sequelize.define('Gral_Motoristas', {
  Moto_Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Moto_DNI: { type: DataTypes.STRING, allowNull: false, unique: true },
  Moto_Nombres: { type: DataTypes.STRING, allowNull: false },
  Moto_Apellidos: { type: DataTypes.STRING, allowNull: false },
  Moto_Sexo: { type: DataTypes.CHAR, allowNull: false },
  Moto_Telefono: { type: DataTypes.STRING, allowNull: false },

  // Campos de auditoría 
  Usua_Creacion: { type: DataTypes.INTEGER },
  Moto_FechaCreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Usua_Modificacion: { type: DataTypes.INTEGER },
  Moto_FechaModificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Moto_Estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  timestamps: false,
  tableName: 'Gral_Motoristas'
});

module.exports = Motorista;