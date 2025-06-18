 export const validateRequest=(schema)=>{
    return async(req,res,next)=>{
        try{
         await schema.validateAsync(req.body);
         next();
        }
        catch(err){
            next(err)
        }
    }
}