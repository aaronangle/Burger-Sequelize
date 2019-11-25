var db = require("../models");

router.get("/", function (req, res) {
    db.Burger.findAll({})
        .then(function (dbBurger) {
            res.render("index", { burger: dbBurger })
        })
})

router.post("/burger", function (req, res) {
    db.Burger.create({
        name: req.body.name,
        eaten: false
    }).then(function (dbBurger) {
        res.json(dbBurger)
    })
})

router.put("/burger/:id", function (req, res) {
    db.Burger.update({
        text: req.body.text
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (dbBurger) {
        res.json(dbBurger)
    })
    // const id = req.params.id
    // orm.update(id, function (err, result) {
    //     res.status(200).end();
    // })
})



module.exports = router;