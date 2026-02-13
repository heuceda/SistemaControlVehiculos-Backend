const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Movimiento = sequelize.define('Movi_Movimientos', {
  Movi_Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  TiMo_Id: { type: DataTypes.INTEGER},
  Moto_Id: { type: DataTypes.INTEGER},
  Vehi_Id: { type: DataTypes.INTEGER},
  Movi_Fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Movi_Hora: { type: DataTypes.TIME, defaultValue: DataTypes.NOW },
  Movi_Kilometraje: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  Movi_Observaciones: { type: DataTypes.STRING, allowNull: true },

  // Campos de auditoría 
  Usua_Creacion: { type: DataTypes.INTEGER },
  Movi_FechaCreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Usua_Modificacion: { type: DataTypes.INTEGER },
  Movi_FechaModificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Movi_Estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  timestamps: false,
  tableName: 'Movi_Movimientos'
});

module.exports = Movimiento;