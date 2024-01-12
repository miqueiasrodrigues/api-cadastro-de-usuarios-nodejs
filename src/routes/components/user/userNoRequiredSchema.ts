import { Joi } from "celebrate";

const USER_NO_REQUIRED_SCHEMA = {
  firstName: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "string.pattern.base":
        "O '{{#label}}' deve conter apenas letras e espaços.",
    }),
  lastName: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "string.pattern.base":
        "O '{{#label}}' deve conter apenas letras e espaços.",
    }),
  dateOfBirth: Joi.string()
    .pattern(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
    .messages({
      "string.empty": "O campo '{{#label}}' não pode estar vazio.",
      "string.isoDate": "Formato de data inválido. Use 'YYYY-MM-DD'.",
    }),
  cpf: Joi.string().min(11).max(14).trim().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.invalid": "O '{{#label}}' é inválido",
  }),
  gender: Joi.string().length(1).messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "string.length": "O '{{#label}}' deve ter exatamente 1 caractere.",
  }),
  passwordHash: Joi.string().trim().min(6).max(24).messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "string.min": "A senha deve ter no mínimo {{#limit}} caracteres.",
    "string.max": "A senha deve ter no máximo {{#limit}} caracteres.",
  }),
  imageUrl: Joi.string().optional().allow(''),
};

export default USER_NO_REQUIRED_SCHEMA;
