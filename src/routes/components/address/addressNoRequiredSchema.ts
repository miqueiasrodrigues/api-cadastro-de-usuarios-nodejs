import { Joi } from "celebrate";

const ADDRESS_NO_REQUIRED_SCHEMA = {
  userId: Joi.number().positive().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "number.base": "O '{{#label}}' deve ser um número.",
    "number.integer": "O '{{#label}}' deve ser um número inteiro.",
    "number.positive": "O '{{#label}}' deve ser um número positivo.",
  }),
  street: Joi.string().trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  neighborhood: Joi.string().trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  number: Joi.string().trim().max(5).messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "string.max":
      "O campo '{{#label}}' deve ter no máximo {{#limit}} caracteres.",
  }),
  complement: Joi.string().trim().allow('').messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  city: Joi.string().trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  state: Joi.string().trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  zipCode: Joi.string().trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
 
};

export default ADDRESS_NO_REQUIRED_SCHEMA;
