import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const app = express();

// CORS middleware setup
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.use(express.json());
app.use('/auth', authRouter); 

// Root route
app.get('/', (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
