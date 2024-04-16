import joi from 'joi'
export const register = (data) => {
    const schema = joi.object({
      name: joi.string().required(),
      password: joi
        .string()
        .required()
        .min(4)
        .max(16),
      confirmPassword:joi.string().valid(joi.ref('password')).required().strict(),
    });
    return schema.validate(data);
  };
  export const login=(data)=>{
    const schema=joi.object({
        name:joi.string().required(),
        password: joi
        .string()
        .required()
        .min(4)
        .max(16)
        
    })
    return schema.validate(data)
}