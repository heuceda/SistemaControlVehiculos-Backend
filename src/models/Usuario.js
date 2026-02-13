const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Usuario = sequelize.define('Acce_Usuarios', {
    Usua_Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    Usua_Usuario: {type: DataTypes.STRING, allowNull: false, unique: true},
    Usua_Contrasena: {type: DataTypes.STRING, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    Usua_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    Usua_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Estado: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
    timestamps: false,
    tableName: 'Acce_Usuarios'
});

module.exports = Usuario;