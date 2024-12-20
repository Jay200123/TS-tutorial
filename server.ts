import { globalEnvironment, connectDB } from "./project/config";
import { Request, Response } from "./project/interface";
import mongoose from "mongoose";
import express from "express";
import { users, products, auth } from "./project/route";
import { upload } from "./project/utils";
import cookieParser from "cookie-parser";
import { errorJson, errorHandler } from "./project/middleware";


globalEnvironment();
connectDB();
const app = express();

app.use(upload.array('image'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.use("/api/v1/", auth, users, products);

app.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
});

app.use(errorJson);
app.use(errorHandler);


mongoose.connection.once("open", () => {
    app.listen(process.env.PORT)
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(`Database connection established successfully`)
});

mongoose.connection.on("error", (err) => {
    console.error(err);
    process.exit(1);
});