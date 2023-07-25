import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { connectDB } from "./utils/db.js";
import homeRoutes from "./routes/homeRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

//? config
if (process.env.NODE_ENV == "development") {
    dotenv.config({ path: "./config/config.env" });
}
connectDB();

const app = express();

//* custome middleware
app.use(express.json({ limit: "10mb" }));
app.use(
    express.urlencoded({
        limit: "10mb",
        extended: true,
        parameterLimit: 50000,
    })
);

app.use(cors());

//?routes
app.use(homeRoutes);
app.use(adminRoutes);

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT} in mode ${process.env.NODE_ENV}`));
