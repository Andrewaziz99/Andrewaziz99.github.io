const walkthroughModel = require('./walkthroughModel');

const AddWalkthrough = (req, res) => {
    const { title, date, description, postThumbnail, images, texts } = req.body;

    const walkthrough = walkthroughModel.create({
        title,
        date,
        description,
        postThumbnail,
        images,
        texts
    })
    res.json(walkthrough.id)
}

const getWalkthroughs = async (req, res) => {
    const allWalkthroughs = await walkthroughModel.find();
    res.json(allWalkthroughs)
}

module.exports = { AddWalkthrough, getWalkthroughs }