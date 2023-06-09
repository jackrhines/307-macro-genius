const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");

mongoose.set("debug", true);

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/users",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((error) => console.log(error));

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findUserByUserName(username) {
  return await userModel.find({ username: username });
}

async function deleteUserByUsername(Id) {
  return await userModel.findByIdAndDelete(Id);
}

exports.deleteUserByUsername = deleteUserByUsername;
exports.addUser = addUser;
exports.findUserByUserName = findUserByUserName;
