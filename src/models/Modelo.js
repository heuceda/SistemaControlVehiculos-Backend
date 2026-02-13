// Haciendo referencia al modelo del vehículo

const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Modelo = sequelize.define('Gral_Modelos', {
    Mode_Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    Mode_Nombre: {type: DataTypes.STRING, allowNull: false},
    Marc_Id: {type: DataTypes.INTEGER, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    Mode_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    Mode_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Mode_Estado: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
    timestamps: false,
    tableName: 'Gral_Modelos'
});

module.exports = Modelo;