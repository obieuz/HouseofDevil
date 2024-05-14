module.exports = (req,res,next)=>{
    res.status(404).json({
        err:"Path "+req.path+" does not exist",
        method:req.method,
        headers:req.headers,
    })
}