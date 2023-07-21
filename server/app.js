import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./utils/db.js";
import homeRoutes from "./routes/homeRoutes.js";

//? config
if (process.env.NODE_ENV == "development") {
    dotenv.config({ path: "./config/config.env" });
}
connectDB();

const app = express();

//* custome middleware
app.use(express.json());

//?routes
app.use(homeRoutes);

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT} in mode ${process.env.NODE_ENV}`));
