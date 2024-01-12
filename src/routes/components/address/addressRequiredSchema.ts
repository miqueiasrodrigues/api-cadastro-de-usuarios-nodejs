import { Joi } from "celebrate";

const ADDRESS_REQUIRED_SCHEMA = {
  userId: Joi.number().positive().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "number.base": "O '{{#label}}' deve ser um número.",
    "number.integer": "O '{{#label}}' deve ser um número inteiro.",
    "number.positive": "O '{{#label}}' deve ser um número positivo.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  street: Joi.string().trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  neighborhood: Joi.string().trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  number: Joi.string().trim().max(5).required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
    "string.max":
      "O campo '{{#label}}' deve ter no máximo {{#limit}} caracteres.",
  }),
  complement: Joi.string().trim().allow('').messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
  }),
  city: Joi.string().trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  state: Joi.string().trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  zipCode: Joi.string().trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  
};

export default ADDRESS_REQUIRED_SCHEMA;
