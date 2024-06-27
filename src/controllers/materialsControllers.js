const Services = require('../services')
const parseJson = require('../utils/parseJSON')
const path = require('path')
const ApiError = require('../utils/ApiError')

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
            if (!material)
                throw new ApiError(
                    'PRINTING_MATERIALS_0006',
                    404,
                    `3D Printing Material with ${id} does not exists`,
                )
            res.json(material)
        } catch (error) {
            return next(error)
        }
    },

    createMaterial: async (req, res, next) => {
        try {
            const requestData = {
                ...req.body,
                imageUrl: req.file
                    ? path.join(__dirname, '../../', req.file.path)
                    : req.body.imageUrl,
            }
            const createdMaterial = await Services.materialServices.createMaterial(
                parseJson(requestData),
            )
            res.json(createdMaterial)
        } catch (error) {
            return next(error)
        }
    },

    updateMaterial: async (req, res, next) => {
        try {
            const { id } = req.params
            const requestData = {
                ...req.body,
                imageUrl: req.file
                    ? path.join(__dirname, '../../', req.file.path)
                    : req.body.imageUrl,
            }
            const updatedMaterial = await Services.materialServices.updateMaterial(
                id,
                parseJson(requestData),
            )
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
