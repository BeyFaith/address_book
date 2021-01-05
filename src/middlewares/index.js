import Joi from "@hapi/joi";

export default (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).trim().empty().required().messages({
      "string.base": "Name should be string",
      "string.empty": "Name input can't be empty",
      "any.required": "Name is required",
    }),
    number: Joi.string().min(4).trim().empty().required().messages({
      "integer.base": "Number should be a number",
      "integer.empty": "Number input can't be empty",
      "any.required": "Number is required",
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  return next();
};
