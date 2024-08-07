import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
};

app.get('/', (req, res) => {
    res.send('API is on');
});

// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);

// Start server
const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
