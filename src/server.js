import express from "express";
import cors from "cors";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { usersRouter } from "./routers/usersRouter.js";

const app = express();
const port = process.env.PORT || 3033;

app.use(cookieParser());
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "process.env.SESSION_SECRET"
    })
);


app.use(express.json());
app.use(cors());
app.use("/", usersRouter);
app.listen(port, () => console.log(`http://localhost:${port}`));
