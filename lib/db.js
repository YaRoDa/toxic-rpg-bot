const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', { 
    name: String,
    life: Number,
    toxicity: Number,
    potions: Number,
    // TODO: Id, index
});

module.exports = {
    User,
    mongoose,
};