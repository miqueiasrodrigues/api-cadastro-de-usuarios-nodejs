import { Joi } from "celebrate";

const SESSION_SCHEMA = {
  cpf: Joi.string().min(11).max(14).trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
  passwordHash: Joi.string().min(6).max(24).trim().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "string.min": "A senha deve ter no mínimo {{#limit}} caracteres.",
    "string.max": "A senha deve ter no máximo {{#limit}} caracteres.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
  }),
};

export default SESSION_SCHEMA;
