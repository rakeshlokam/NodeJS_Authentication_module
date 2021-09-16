const express = require('express');
const router = express.Router();

router.post('/register', async (req, res, next) => {

    res.send("register")
});

router.post('/login', async (req, res, next) => {

});

router.post('/refreshtoken', async (req, res, next) => {

});
router.delete('/logout', async (req, res, next) => {

});
module.exports = router;