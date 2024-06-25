const Dao = require('../dao')
const Validations = require('../validations')

module.exports = {
    getAllMaterials: async () => {
        try {
            return (materials = await Dao.materialsDao.getAll())
        } catch (err) {
            throw err
        }
    },

    getMaterialById: async (id) => {
        try {
            return (materials = await Dao.materialsDao.getById(id))
        } catch (err) {
            throw err
        }
    },

    createMaterial: async (requestData) => {
        const { error } = Validations.material.createMaterial(requestData)
        if (error) throw error
        try {
            return (materials = await Dao.materialsDao.create(requestData))
        } catch (err) {
            throw err
        }
    },

    updateMaterial: async (id, requestData) => {
        const { error } = Validations.material.updateMaterial(requestData)
        if (error) throw error
        try {
            return await Dao.materialsDao.update(id, requestData)
        } catch (err) {
            throw err
        }
    },

    deleteMaterialById: async (id) => {
        try {
            return await Dao.materialsDao.delete(id)
        } catch (err) {
            throw err
        }
    },
}
