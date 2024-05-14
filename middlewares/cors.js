module.exports = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin,Content-Type,Accept, X-API-TOKEN");
    next();
}