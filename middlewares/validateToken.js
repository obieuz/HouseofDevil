module.exports=(req,res,next)=>{
    const tokens=["123","321"];

    const token=req.headers["x-api-token"];

    let doesValidate=false;
    tokens.map((e)=>{
        if(e===token){
            doesValidate=true;
            next();
        }
    })
    if(!doesValidate){
        res.status(407).json({
            err:"Try again later",
            headers:req.headers,
        })
    }

}