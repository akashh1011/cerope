import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from "./routes/user.route.js"
const app = express()


const allowedOrigins = [
  "http://localhost:5173",
  "https://cerope-ochre.vercel.app",
];


app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // mobile apps / curl etc.
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.use("/api/v1/users",userRouter)


export default app