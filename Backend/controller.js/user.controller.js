import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.find({ email });
    if (user && user.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashPassword = await bcryptjs.hash(password, 10);
      const newUser = new User({ name, email, password: hashPassword });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatched = await bcryptjs.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "User logged in successfully", user });
    }
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};
