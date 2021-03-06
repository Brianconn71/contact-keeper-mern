const express = require('express');
const router = express.Router();


// @route       GET api/auth
// @desc        Get logged in user
// @access      private
router.get('/', (req, res) => {
    res.send('Get a logged in user');
});

// @route       POST api/auth
// @desc        Auth User and get token
// @access      Public
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;
