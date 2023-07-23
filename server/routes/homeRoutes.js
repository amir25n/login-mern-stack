import { Router } from "express";
import bcrypt from "bcrypt";

import { User } from "../model/User.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "api is running" });
});

router.post("/signup", async (req, res) => {
    try {
        if (!req.body) {
            return res.json({ message: "input-error" });
        }
        const isMatch = await User.findOne({ userEmail: req.body.userEmail });
        if (isMatch) {
            return res.json({ message: "email-error" });
        }
        const { userEmail, userName, userPassword } = req.body;
        const hash = await bcrypt.hash(userPassword, 10);
        const user = await User.create({
            userEmail,
            userName,
            userPassword: hash,
        });
        res.status(200).json({ message: "user-ok" });
        res.end();
    } catch (error) {
        console.log(error);
    }
});

export default router;
