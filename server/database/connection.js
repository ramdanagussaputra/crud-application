const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
