const globalErrorHandelar=(err, req, res, next)=>{
    console.error(" Global Error", err);

    res.status(err.statusCode || 500).json({
        success:false,
        message:err.message || "something went wrong ",
    })
}

export default globalErrorHandelar;