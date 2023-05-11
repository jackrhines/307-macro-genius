const mongoose = require("mongoose");
const foodModel = require("./food");
const dotenv = require("dotenv");
mongoose.set("debug", true);

dotenv.config();

// mongoose
//   .connect(
//     "mongodb+srv://" +
//     process.env.MONGO_USER +
//     ":" +
//     process.env.MONGO_PWD +
//     "@" +
//     process.env.MONGO_CLUSTER +
//     process.env.MONGO_DB +
//     "?retryWrites=true&w=majority",
//     // "mongodb://localhost:27017/users",
//     {
//       useNewUrlParser: true, //useFindAndModify: false,
//       useUnifiedTopology: true,
//     }
//   )
//   .catch((error) => console.log(error));

async function getFoods(name) {
  let result;
  if (name === undefined) {
    result = await foodModel.find();
  } else if (name) {
    result = await findFoodByName(name);
  }
  return result;
}

async function findFoodById(id) {
  try {
    return await foodModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findFoodByName(name) {
  return await foodModel.find({ name: name });
}

async function addFood(food) {
  try {
    console.log(food);
    const foodToAdd = new foodModel(food);
    const savedFood = await foodToAdd.save();
    return savedFood;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteFoodById(id) {
  try {
    console.log(id);
    return await foodModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.getFoods = getFoods;
exports.findFoodByName = findFoodByName;
exports.findFoodById = findFoodById;
exports.addFood = addFood;
exports.deleteFoodById = deleteFoodById;
