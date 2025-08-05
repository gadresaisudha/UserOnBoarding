import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from './config/db';
import router from './routes/apiroute';

dotenv.config();
connectDB();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use('/api',router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
