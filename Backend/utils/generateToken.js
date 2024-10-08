import jwt from 'jsonwebtoken';

const JsonWebToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === 'production',
    });
}

export default JsonWebToken;
