import bcrypt from 'bcrypt';
import User from '../Models/Auth_model.js';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, dob, city } = req.body;

    if (!name || !email || !password || !dob || !city) {
      return res.status(400).send({
        success: false,
        message: "Fill all details"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name, email, password: hashedPassword, dob, city
    });

    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    console.log("error aay hai" + error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
}
