const mongoose = require('mongoose');

const walkthroughSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    postThumbnail: String,
    images: [String],
    texts: [String],

},
{
timestamps: true
});

module.exports = mongoose.model('Walkthrough', walkthroughSchema);