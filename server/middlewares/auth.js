import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header("token");
    if (!token) {
        return res.json({ message: "token-erorr" });
    }
    jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
        if (err) return console.log(err);
        req.user = decoded.userMatch;
        next();
    });
};
