const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const TipoDeMovimiento = sequelize.define('Gral_TiposDeMovimiento', {
    TiMo_Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    TiMo_Descripcion: {type: DataTypes.STRING, allowNull: false},

    Usua_Creacion: {type: DataTypes.INTEGER},
    TiMo_FechaCreacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    Usua_Modificacion: {type: DataTypes.INTEGER},
    TiMo_FechaModificacion: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
}, {
    timestamps: false,
    tableName: 'Gral_TiposDeMovimiento'
});

module.exports = TipoDeMovimiento;