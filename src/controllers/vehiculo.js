const Vehiculo = require('../models/Vehiculo');

// Listar vehículos activos
exports.getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll({
      where: { Vehi_Estado: true }
    });
    res.json({
      ok: true,
      data: vehiculos
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener vehículos',
      error: error.message
    });
  }
};


// Obtener un solo vehículo
exports.getVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk(id);

    if (!vehiculo) {
      return res.status(404).json({
        ok: false,
        msg: 'Vehículo no encontrado'
      });
    }

    res.json({
      ok: true,
      data: vehiculo
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener vehículo',
      error: error.message
    });
  }
};


// Crear vehículo
exports.createVehiculo = async (req, res) => {
  try {
    const { Vehi_Placa, Marc_Id, Vehi_Modelo } = req.body;

    if (!Vehi_Placa || !Vehi_Modelo) {
      return res.status(400).json({
        ok: false,
        msg: 'Placa y modelo son obligatorios'
      });
    }

    const nuevoVehiculo = await Vehiculo.create(req.body);

    res.status(201).json({
      ok: true,
      msg: 'Vehículo creado correctamente',
      data: nuevoVehiculo
    });

  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error al crear vehículo',
      error: error.message
    });
  }
};


// Actualizar vehículo
exports.updateVehiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk(id);

    if (!vehiculo) {
      return res.status(404).json({
        ok: false,
        msg: 'Vehículo no encontrado'
      });
    }

    await vehiculo.update(req.body);

    res.json({
      ok: true,
      msg: 'Vehículo actualizado correctamente'
    });

  } catch (error) {
    res.status(400).json({
      ok: false,
      msg: 'Error al actualizar vehículo',
      error: error.message
    });
  }
};


// Eliminado lógico de vehículo
exports.deleteVehiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk(id);

    if (!vehiculo) {
      return res.status(404).json({
        ok: false,
        msg: 'Vehículo no encontrado'
      });
    }

    await vehiculo.update({ Vehi_Estado: false });

    res.json({
      ok: true,
      msg: 'Vehículo eliminado correctamente'
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar vehículo',
      error: error.message
    });
  }
};
