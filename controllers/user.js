const router = require('express').Router();
const cloudinary = require('../middleware/cloudinary');
// const upload = require('../middleware/multer');

const User = require('../model/user');

exports.sd = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        // create document(user)
        let user = new User({
            title: req.body.title,
            desc: result.secure_url,
            img: result.public_id,
        })
        // save document(user)
        await user.save();
        res.json(user);
    } catch (error) {
        res.send(error);
    }
}