const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Marca = sequelize.define('Gral_Marcas', {
    Marc_Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    Marc_Nombre: {type: DataTypes.STRING, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    Marc_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    Marc_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Marc_Estado: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
    timestamps: false,
    tableName: 'Gral_Marcas'
});

module.exports = Marca;