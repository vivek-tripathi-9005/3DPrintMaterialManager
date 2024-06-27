const Controllers = require('../controllers')
const upload = require('../middlewares/multer')

module.exports = (router) => {
    router
        .get('/materials', Controllers.materialsControllers.getAllMaterials)
        .get('/materials/:id', Controllers.materialsControllers.getMaterialById)
        .post(
            '/materials',
            upload.single('imageUrl'),
            Controllers.materialsControllers.createMaterial,
        )
        .put(
            '/materials/:id',
            upload.single('imageUrl'),
            Controllers.materialsControllers.updateMaterial,
        )
        .delete('/materials/:id', Controllers.materialsControllers.deleteMaterial)
}
