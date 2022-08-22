const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    title: {
        type: 'string',
    },
    desc: {
        type: 'string',
    },
    img: {
        type: 'string',
    },
    price: {
        type: 'string',
    },
    shop: {
        type: 'string',
    },
    publisher: {
        type: 'string',
    },
    status: {
        type: 'boolean',
    },
    created_datetime: {
        type: 'string',
    },
    updated_datetime: {
        type: 'string',
    },
    isDeleted: {
        type: 'boolean',
    },
});

module.exports = mongoose.model("user", userSchema);