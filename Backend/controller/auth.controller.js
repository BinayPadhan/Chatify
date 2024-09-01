import User from "../models/auth.model.js";
import bcrypt from 'bcrypt';
import JsonWebToken from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        
        const user = await User.findOne({username});

        //https://avatar.iran.liara.run/

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender === 'male'? boyProfile : girlProfile,
        })

        if(newUser){
            await newUser.save();
            JsonWebToken(newUser._id, res);
            res.status(201).json({ message: 'User registered successfully',
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilepic: newUser.profilepic,
                gender: newUser.gender,
                password: newUser.password
            }
         });
        }
        else{
            res.status(400).json({ message: 'Invalid user data' });
        }
        
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: error.message});
        
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username});
        const isValid = await bcrypt.compare(password, user.password)
        if (!user || !isValid) {
            return res.status(401).json({ message: "Invalid email address or password." });
        }

        JsonWebToken(user._id, res);
        res.status(200).json({
            message: "User logged in successfully",
            user: {
              _id: user._id,
              fullname: user.fullname,
              username: user.username,
              profilepic: user.profilepic
            },
          });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: error.message });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0});
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: error.message });
    }
}