/**
 * Created by user on 7/14/2017.
 */

var express = require('express');
var heroesRouter = express.Router();
var Hero = require('../models/hero');

heroesRouter.route("/")
    .get(function (req,res) {

        var q = Hero.find({},'-power -_id');
        q.exec(function (err,heroes) {
            console.log(heroes);
            if(err)
                res.send("Error : " + err);
            else
                res.send(heroes);
        });
    })
    .post(function (req,res) {
        var newHero = new Hero(req.body);
        newHero.save(function (err,user) {
            if(err) {
                res.send("DB Error : " + err);
            }
            else{
                res.send("New Hero Added");
            }
        });
    });

module.exports = heroesRouter;