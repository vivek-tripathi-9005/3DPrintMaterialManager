const Controllers = require('../controllers')

module.exports = (router) => {
    router.get('/materials', Controllers.materialsControllers.getAllMaterials)
    router.get('/materials/:id', Controllers.materialsControllers.getMaterialById)
    router.post('/materials', Controllers.materialsControllers.createMaterial)
    router.put('/materials/:id', Controllers.materialsControllers.updateMaterial)
    router.delete('/materials/:id', Controllers.materialsControllers.deleteMaterial)
}
