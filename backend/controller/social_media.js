const {socialMedia, validateItem} = require("../models/social_media")
exports.getAllItem = (req, res, next) => {
    socialMedia.find().then((item) => {
        res.send(item).status(200)
    }).catch((err) => {
        return res.send(err.messages).status(400)
    })
}

exports.addItem = async (req, res, next) => {
    const {error} = validateItem(req.body);
    if (error) {
        let item = error.message.split('. ');
        return res.status(400).json({
            err: item,
            status: false
        });
    }

    const {name, link, description} = req.body
    const productItem = new socialMedia({
        name,
        link,
        description,
    })
    await socialMedia.create(productItem).then((data) => {
        res.send(data).status(200)
    }).catch((err) => {
        res.send(500).json({
            status: false,
            message: err.message
        })
    })
}

exports.updateItem = async (req, res, next) => {
    socialMedia.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            link: req.body.link,
            description: req.body.description,
        }
    }).then((data) => {
        res.status(200).json(data)

    }).catch((err) => {
        res.send(500).json({
            status: false,
            message: err.message
        })
    })
}

exports.detailItem = async (req, res, next) => {
    await socialMedia.findOne({_id: req.params.id})
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Böyle bir social media yok'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        });
};
