const router = require('express').Router();

const user  = require("../controllers/user");
const upload = require('../middleware/multer');

// router.post("/", user.user);
router.post("/", upload.single('image'), user.sd);

module.exports = router;