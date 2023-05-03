const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(
    `mongodb+srv://roshan836sharma:MwTiF8WYxHhnZNeN@cluster0.fhe4sra.mongodb.net/test`
  );
});

module.exports = connection;
