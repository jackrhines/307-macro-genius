const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Enter a valid username."],
      unique: [true, "Username already Exist"],
    },

    password: {
      type: String,
      required: [true, "Enter a valid password."],
      unique: false,
    },
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
