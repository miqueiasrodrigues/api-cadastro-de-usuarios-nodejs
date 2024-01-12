import { Joi } from "celebrate";

const CONTACT_NO_REQUIRED_SCHEMA = {
  userId: Joi.number().positive().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "number.base": "O '{{#label}}' deve ser um número.",
    "number.integer": "O '{{#label}}' deve ser um número inteiro.",
    "number.positive": "O '{{#label}}' deve ser um número positivo.",
  }),
  email: Joi.string().email().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  cellPhone: Joi.string()
    .pattern(/^\d{11}$/)
    .messages({
      "string.pattern.base":
        "O campo '{{#label}}' deve conter exatamente 11 dígitos.",
    }),
};

export default CONTACT_NO_REQUIRED_SCHEMA;
