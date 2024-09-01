import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d"});

    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true, //prevent xss attacks cross site scripting attacks
        sameSite: "strict", // csrf attacks cross site request protection
        secure: process.env.NODE_ENV === 'production',
    });

}

export default generateToken;