const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Departamento = sequelize.define('Gral_Departamentos', {
    Depa_Codigo: {type: DataTypes.STRING, primaryKey: true},
    Depa_Nombre: {type: DataTypes.STRING, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    Depa_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    Depa_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
}, {
    timestamps: false,
    tableName: 'Gral_Departamentos'
});

module.exports = Departamento;