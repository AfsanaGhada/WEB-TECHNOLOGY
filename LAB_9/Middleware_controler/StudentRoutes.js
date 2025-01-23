const express = require('express')
const router = express.Router;

TestMiddleware = (req, res, next) => {
    console.log("this is middleware function")
}

router.use('/', TestMiddleware);
router.get('/', (req, res) => {
    res.send("student all")
});

module.exports = router;
