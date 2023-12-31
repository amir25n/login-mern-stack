import { Router } from "express";

import { User } from "../model/User.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "api is running" });
});

router.post("/signup", async (req, res) => {
    console.log(req.body);
    if (!req.body) {
        return res.json({ message: "input is not valid" });
    }
    const isMatch = await User.findOne({ userEmail: req.body.userEmail });
    if (isMatch) {
        return res.json({ message: "email is already used !" });
    }
    const user = await User.create(req.body);
    res.status(200);
    console.log("user created !");
    res.end();
});

export default router;
