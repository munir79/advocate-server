const notFound =(req, res, next)=>{
    res.status(404).json({
        success:false,
        message:"Api not Found !",
    });
}


export default notFound;