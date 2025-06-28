const mongoose = require('mongoose');

function connectToDb() {
    const dbURI = process.env.DB_CONNECT;

    if (!dbURI) {
        console.error('❌ DB_CONNECT environment variable not set.');
        process.exit(1);
    }

    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1); // Exit if connection fails
    });
}

module.exports = connectToDb;
