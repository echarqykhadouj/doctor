const mongoose = require ('mongoose')

const colors = require('colors')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Server Issue:', error.message);
    process.exit(1); // optional: stop the server if DB is down
  }
};
module.exports = connectDB;