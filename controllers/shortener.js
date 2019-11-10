const LinkSchema = require('../models/link');

const characters = '23456789bcdfghjkmnpqrstvwzBCDFGHJKMNPQRSTVWZ-_'
const base = characters.length;

const saveUrl = async (req, res) => {
    if (req.body.url) {
        const link = new LinkSchema(req.body);
        await link.save((err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error', error: err.message });
            }
            if (data) {
                const code = encode(data._id);
                res.status(200).json({
                    code: code,
                    link: req.protocol + '://' + req.get('host') + '/' + code
                });
            }
        })
    } else {
        res.status(400).json({ message: 'The url is not valid'});
    }
}

const getUrl = async (req, res) => {
    if (req.params.code) {
        const id = decode(req.params.code);

        await LinkSchema.findById(id, (err, link) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error', error: err });
            }

            if (link === null) {
                return res.status(404).json({ message: 'URL not found' });
            }

            res.status(200).json(link);
        })
    }
}

const encode = (num) => {
    let code = '';
    while (num > 0) {
        code = characters.charAt(num % base) + code;
        num = Math.floor(num / base);
    }
    return code;
}

const decode = (code) => {
    let num = 0;
    for (let i = 0; i < code.length; i++) {
        num = num * base + characters.indexOf(code.charAt(i));
    }
    return num;
}

module.exports = { saveUrl, getUrl };