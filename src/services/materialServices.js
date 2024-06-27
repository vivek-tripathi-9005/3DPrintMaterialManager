const Dao = require('../dao')
const Validations = require('../validations')
const ApiError = require('../utils/ApiError')

module.exports = {
    getAllMaterials: async () => {
        console.log('Getting all 3D printing materials')

        try {
            return (materials = await Dao.materialsDao.getAll())
        } catch (err) {
            throw new ApiError('PRINTING_MATERIALS_0001', 500, 'Failed to fetch printing materials')
        }
    },

    getMaterialById: async (id) => {
        console.log(`Getting printing material with id ${id}`)

        try {
            return (materials = await Dao.materialsDao.getById(id))
        } catch (err) {
            throw new ApiError(
                'PRINTING_MATERIALS_0002',
                500,
                `Failed to fetch a printing materials with id ${id}`,
            )
        }
    },

    createMaterial: async (requestData) => {
        console.log(`Getting printing material with name ${requestData.name}`)

        const { error } = Validations.material.createMaterial(requestData)
        if (error) throw error
        try {
            return (materials = await Dao.materialsDao.create(requestData))
        } catch (err) {
            throw new ApiError(
                'PRINTING_MATERIALS_0003',
                500,
                `Error creating printing material with name ${requestData.name}`,
            )
        }
    },

    updateMaterial: async (id, requestData) => {
        console.log(`Updating printing material with id ${id}`)

        // check if material exists
        material = materials = await Dao.materialsDao.getById(id)
        if (!material)
            throw new ApiError(
                'PRINTING_MATERIALS_0006',
                404,
                `3D Printing Material with ${id} does not exists`,
            )

        // validating the update request data
        const { error } = Validations.material.updateMaterial(requestData)
        if (error) throw error

        try {
            return await Dao.materialsDao.update(id, requestData)
        } catch (err) {
            throw new ApiError(
                'PRINTING_MATERIALS_0004',
                500,
                `Error creating printing material with id ${id}`,
            )
        }
    },

    deleteMaterialById: async (id) => {
        console.log(`Deleting printing material with id ${id}`)

        try {
            // check if material exists
            material = materials = await Dao.materialsDao.getById(id)
            if (!material)
                throw new ApiError(
                    'PRINTING_MATERIALS_0006',
                    404,
                    `3D Printing Material with ${id} does not exists`,
                )

            return await Dao.materialsDao.delete(id)
        } catch (err) {
            throw new ApiError(
                'PRINTING_MATERIALS_0005',
                500,
                `Failed to delete a printing materials with id ${id}`,
            )
        }
    },
}
