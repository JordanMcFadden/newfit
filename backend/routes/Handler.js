const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "jordan",
        "msg": "my first tweet",
        "username": "jdmcfadden"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});


module.exports = router;