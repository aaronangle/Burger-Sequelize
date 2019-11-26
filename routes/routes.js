var db = require("../models");
const express = require("express")
const router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll({})
        .then(function (burger) {
            res.render("index", { burger })
        })
})

router.post("/burger", function (req, res) {
    db.Burger.create({
        name: req.body.name,
        eaten: false
    }).then(function (burger) {
        res.json(burger)
    })
})

router.put("/burger/:id", function (req, res) {
    db.Burger.update({
        eaten: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (burger) {
        res.json(burger)
    })
    // const id = req.params.id
    // orm.update(id, function (err, result) {
    //     res.status(200).end();
    // })
})



module.exports = router;