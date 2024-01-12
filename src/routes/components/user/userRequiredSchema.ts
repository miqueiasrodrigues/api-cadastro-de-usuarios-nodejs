import { Joi } from "celebrate";

const USER_REQUIRED_SCHEMA = {
  firstName: Joi.string()
    .trim()
    .pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/)
    .required()
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "any.required": "O campo '{{#label}}' é obrigatório.",
      "string.pattern.base":
        "O '{{#label}}' deve conter apenas letras e espaços.",
    }),
  lastName: Joi.string()
    .trim()
    .pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/)
    .required()
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "any.required": "O campo '{{#label}}' é obrigatório.",
      "string.pattern.base":
        "O '{{#label}}' deve conter apenas letras e espaços.",
    }),
  dateOfBirth: Joi.string()
    .pattern(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
    .required()
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "any.required": "O campo '{{#label}}' é obrigatório.",
    }),
  cpf: Joi.string().min(11).max(14).trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  gender: Joi.string().length(1).required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
    "string.length": "O '{{#label}}' deve ter exatamente 1 caractere.",
  }),
  passwordHash: Joi.string().min(6).max(24).trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "string.min": "A senha deve ter no mínimo {{#limit}} caracteres.",
    "string.max": "A senha deve ter no máximo {{#limit}} caracteres.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  imageUrl: Joi.string().optional().allow(''),
};

export default USER_REQUIRED_SCHEMA;
