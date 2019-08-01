const express = require('express')
const multer = require('multer');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload');
const LikeController = require('./controllers/LikeController');

const router = new express.Router();
const upload = multer(uploadConfig);

router.get('/', (req, res) => {
  return res.send("Página inicial")
})

router.post('/posts', upload.single('image'),PostController.store);
router.get('/posts', PostController.index);
router.post('/posts/:id/like',LikeController.store)

module.exports = router;
