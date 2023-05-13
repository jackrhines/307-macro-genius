const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
    // validate(value) {
    //   if (value < 0)
    //     throw new Error("Invalid calories.  Must be greater than 0.");
    // },
  },
  // date: {
  //   type: Date,
  //   required: false,
  //   trim: true,
  //   default: Date.now(),
  // },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;