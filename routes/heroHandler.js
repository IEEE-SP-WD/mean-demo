/**
 * Created by user on 7/14/2017.
 */
var express = require("express");
var heroRouter = express.Router();
var Hero = require("../models/hero");
heroRouter.route("/:heroName")
    .get(function(req,res){
        Hero.findOne({'name' : req.params.heroName},function (err,hero) {
            if(err)
                res.send('DB Err : ' + err);
            else
                res.send(hero);
            console.log(hero);

        })
    })
    .post(function(req,res){
        Hero.update({'name' : req.params.heroName},req.body,function (err) {
            if(err)
                res.send(error);
            else
                res.send("Hero Updated!");
        });
    });
module.exports = heroRouter;
