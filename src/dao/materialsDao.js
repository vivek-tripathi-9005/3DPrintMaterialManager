const models = require('../models')

module.exports = {
    getAll: async () => await models.materials.find().select('-imageUrl'),

    getById: async (id) => await models.materials.findById(id),

    create: async (materialData) => await models.materials.create(materialData),

    update: async (id, updateRequest) =>
        await models.materials.findByIdAndUpdate(id, updateRequest, { new: true }),

    delete: async (id) => await models.materials.findByIdAndDelete(id),
}
