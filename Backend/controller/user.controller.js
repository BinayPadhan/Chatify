import User from "../models/auth.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        console.log(loggedInUser);
        const filteredUser = await User.find({ _id: { $ne: loggedInUser }}).select("-password");
        res.status(200).json(filteredUser);
    } catch (error) {
        console.error("Error during getUserForSidebar:", error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};