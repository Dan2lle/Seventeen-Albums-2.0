const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    album: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    released: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {collection: 'albums'})

module.exports = mongoose.model('Album', albumSchema)