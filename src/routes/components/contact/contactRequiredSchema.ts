import { Joi } from "celebrate";

const CONTACT_REQUIRED_SCHEMA = {
  userId: Joi.number().positive().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "number.base": "O '{{#label}}' deve ser um número.",
    "number.integer": "O '{{#label}}' deve ser um número inteiro.",
    "number.positive": "O '{{#label}}' deve ser um número positivo.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  cellPhone: Joi.string().pattern(/^\d{11}$/).required().messages({
    "string.pattern.base": "O campo '{{#label}}' deve conter exatamente 11 dígitos.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }), 
};

export default CONTACT_REQUIRED_SCHEMA;
