const mongoose = require('mongoose')
const joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    link: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
});

const validateItem = (data) => {

    const schema = joi.object({

        name: joi.string().empty().min(3).max(100).required().messages({
            "string.base": "İsim alanı metinsel(string) bir değer olmak zorunda.",
            "string.empty": "İsim alanı boş bırakılamaz.",
            "string.max": "Maximum 100 karakter girebilirsiniz.",
            "string.min": "Minimum 3 karakterden oluşturabilirsiniz.",
            "string.required": "İsim alanı zorunludur."
        }),
        link: joi.string().empty().min(3).max(100).required().messages({
            "string.base": "link alanı metinsel(string) bir değer olmak zorunda.",
            "string.empty": "link alanı boş bırakılamaz.",
            "string.max": "Maximum 100 karakter girebilirsiniz.",
            "string.min": "Minimum 3 karakterden oluşturabilirsiniz.",
            "string.required": "link alanı zorunludur."
        }),
        description: joi.string().empty().required().messages({
            "string.base": "Açıklama alanı metinsel (string) bir değer olmak zorunda.",
            "string.empty": "Açıklama alanı boş bırakılamaz.",
            "string.required": "Açıklama zorunludur."
        }),
    });
    return schema.validate(data, {abortEarly: false})
}
const socialMedia = mongoose.model('social_media', userSchema)
module.exports = {socialMedia, validateItem}
