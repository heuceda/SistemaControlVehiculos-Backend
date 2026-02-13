const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Vehiculo = sequelize.define('Gral_Vehiculos', {
  Vehi_Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Vehi_Placa: { type: DataTypes.STRING, allowNull: false, unique: true },
  Marc_Id: { type: DataTypes.INTEGER},
  Vehi_Modelo: { type: DataTypes.STRING, allowNull: false },

  // Campos de auditoría 
  Usua_Creacion: { type: DataTypes.INTEGER },
  Vehi_FechaCreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Usua_Modificacion: { type: DataTypes.INTEGER },
  Vehi_FechaModificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Vehi_Estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  timestamps: false,
  tableName: 'Gral_Vehiculos'
});

module.exports = Vehiculo;