import { Router } from "express";

import { auth } from "../middlewares/auth.js";

const router = Router();

router.get("/verify", auth, (req, res) => {
    res.json({ message: "auth-ok" });
});

export default router;
