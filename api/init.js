const { User } = require('../lib/db');

module.exports = async (req, res) => {
    const found = await User.findOne({ name: 'Rodrigo' });

    if (!found) {
        const rodrigo = new User({
            name: 'Rodrigo',
            life: 100,
            toxicity: 0,
            potions: 0,
        });
        const resp = await rodrigo.save();
        res.status(201).send(`User Rodrigo created. ${resp}`);
    } else {
        res.status(201).send(`User rodrigo already exists. ${found}`);
    }
};