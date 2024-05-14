var express = require('express');
var router = express.Router();

const { validateRequest} = require("zod-express-middleware");
const { z} = require("zod");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/",
    validateRequest({
      body:z.object({
        imie:z.string(),
        nazwisko:z.string().min(5),
        age:z.number().min(18),
      })
}),(req,res,next)=>{
  res.status(201).json({data:req.body});
})

module.exports = router;
