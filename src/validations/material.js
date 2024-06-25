const Joi = require('joi')

module.exports = {
    createMaterial: (userObj) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            technology: Joi.string().required(),
            colors: Joi.array().items(Joi.string()).required(),
            applicationTypes: Joi.array().items(Joi.string()),
            pricePerGram: Joi.number().required(),
            imageUrl: Joi.string().required(),
        })
        return schema.validate(userObj)
    },
    updateMaterial: (userObj) => {
        const schema = Joi.object({
            name: Joi.string(),
            technology: Joi.string(),
            colors: Joi.array().items(Joi.string()),
            applicationTypes: Joi.array().items(Joi.string()),
            pricePerGram: Joi.number(),
            imageUrl: Joi.string(),
        })
        return schema.validate(userObj)
    },
}
