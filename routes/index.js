const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'))
router.use('/movies', require('./movies'))
router.use('/auth', (req, res) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
    );
});
router.use('/authfb', (req, res) => {
    res.redirect(
        `https://www.facebook.com/dialog/oauth?client_id=myclientid&redirect_uri=encodedRedirectURL`
    );
});


router.use('/oauth-callback', (req, res) => {
    res.redirect(
        "https://github.com/",
    );
     
  })

module.exports = router;