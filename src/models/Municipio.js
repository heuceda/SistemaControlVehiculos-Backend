const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Municipio = sequelize.define('Gral_Municipios', {
    Muni_Codigo: {type: DataTypes.STRING, primaryKey: true},
    Muni_Nombre: {type: DataTypes.STRING, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    Muni_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    Muni_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
}, {
    timestamps: false,
    tableName: 'Gral_Municipios'
});

module.exports = Municipio;