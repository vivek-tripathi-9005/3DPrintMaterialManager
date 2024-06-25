const Services = require('../services')

module.exports = {
    getAllMaterials: async (req, res, next) => {
        try {
            const materials = await Services.materialServices.getAllMaterials()
            res.json(materials)
        } catch (error) {
            return next(error)
        }
    },

    getMaterialById: async (req, res, next) => {
        try {
            const { id } = req.params
            const material = await Services.materialServices.getMaterialById(id)
            if (material) res.json(material)
            else
                return next({
                    name: 'Not Found',
                    message: ('Material with id ', id, ' does not exists'),
                })
        } catch (error) {
            return next(error)
        }
    },

    createMaterial: async (req, res, next) => {
        try {
            const createdMaterial = await Services.materialServices.createMaterial(req.body)
            res.json(createdMaterial)
        } catch (error) {
            return next(error)
        }
    },

    updateMaterial: async (req, res, next) => {
        try {
            const { id } = req.params
            const updatedMaterial = await Services.materialServices.updateMaterial(id, req.body)
            res.json(updatedMaterial)
        } catch (error) {
            return next(error)
        }
    },

    deleteMaterial: async (req, res, next) => {
        try {
            const { id } = req.params
            await Services.materialServices.deleteMaterialById(id)
        } catch (error) {
            return next(error)
        }
    },
}
