const mongoose = require("mongoose");
const foodModel = require("./food");
const dotenv = require("dotenv");
mongoose.set("debug", true);

dotenv.config();

async function getFoods(name, user) {
  let result;
  if (user === undefined) {
    result = await foodModel.find();
  } else if (name === undefined) {
    result = await foodModel.find({ user: user });
  } else if (name) {
    result = await findFoodByName(name, user);
  }
  return result;
}

async function getDailyFoods(user, start, end) {
  if (user === undefined || start === undefined || end === undefined) {
    console.error("input undefined for getDailyFoods");
    return false;
  }

  return foodModel.find({
    user: user,
    date: {
      $gte: start,
      $lte: end,
    },
  });
}

async function findFoodById(id) {
  try {
    return await foodModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findFoodByName(name, user) {
  return foodModel.find({ name: name, user: user });
}

async function addFood(food) {
  try {
    const foodToAdd = new foodModel(food);
    return await foodToAdd.save();
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteFoodById(id) {
  try {
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
exports.getDailyFoods = getDailyFoods;
