import joi from 'joi';

// define the validation Schema for validation model

export const ServicesValidationSchema = joi.object({
  tittle: joi.string().required(),
  coverImg: joi.string().uri().required(),
  description: joi.object().required(),
  specialization: joi
    .array()
    .items(
      joi.object({
        name: joi.string().required(),
        experience: joi.string().required(),
        price: joi.number().required(),
      })
    )
    .min(1)
    .required(),
  availableDays: joi
    .array()
    .items(
      joi
        .string()
        .valid('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
    )
    .required(),
});
