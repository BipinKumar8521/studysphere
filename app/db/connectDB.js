const mongoose = require('mongoose');

// Retrieve the MongoDB URI from the environment variables
const uri = process.env.MONGODB_URI;

// Connect to the MongoDB database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });