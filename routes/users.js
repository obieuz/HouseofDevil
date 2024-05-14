var express = require('express');
var router = express.Router();
const sql = require("../middlewares/mysql");

const validateToken=require("../middlewares/validateToken");


/* GET users listing. */
router.get('/',validateToken,(req, res, next)=> {
  sql.getUsers().then((users)=>{
    res.status(200).json({message:"Welcome to /users",users});
  })
});

module.exports = router;
