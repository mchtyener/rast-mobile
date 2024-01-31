const socialMedia = require('../controller/social_media')


const router = require('express').Router();


router.get('/social-medias', socialMedia.getAllItem);
router.post('/social-media', socialMedia.addItem);
router.get('/social-media/:id', socialMedia.detailItem);
router.put('/social-media/:id', socialMedia.updateItem);
module.exports = router;
