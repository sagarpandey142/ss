// Assuming your database.js file looks something like this:

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // replace with your MongoDB connection URI

function connect() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  client.connect(err => {
    if (err) {
      console.error('MongoDB connection error:', err);
      return;
    }
    console.log('Connected to MongoDB');

    // Your code for interacting with the database goes here

    client.close(); // Close the connection when you're done
  });
}

module.exports = { connect };
