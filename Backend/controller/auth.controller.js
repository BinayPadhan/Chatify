import User from "../models/auth.model.js";
import bcrypt from 'bcrypt';
import JsonWebToken from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Validate password match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        // Set profile picture based on gender
        const profilepic = gender === 'male' 
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Create a new user object
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilepic
        });

        // Save the user and issue a JWT token
        await newUser.save();
        JsonWebToken(newUser._id, res);

        // Send success response
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilepic: newUser.profilepic,
                gender: newUser.gender
            }
        });
        
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Compare passwords
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Generate and send JWT token
        JsonWebToken(user._id, res);

        // Respond with user data
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilepic: user.profilepic
            }
        });
    } catch (error) {
        console.error("Error during login:", error.message); // Use console.error for errors
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0});
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: error.message });
    }
}