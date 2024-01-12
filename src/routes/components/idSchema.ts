import { Joi } from "celebrate";

const ID_SCHEMA = {
  id: Joi.number().positive().required().messages({
    "string.empty": "O campo '{{#label}}' não pode estar vazio.",
    "any.required": "O campo '{{#label}}' é obrigatório.",
    "number.base": "O '{{#label}}' deve ser um número.",
    "number.integer": "O '{{#label}}' deve ser um número inteiro.",
    "number.positive": "O '{{#label}}' deve ser um número positivo.",
  }),
};

export default ID_SCHEMA;
