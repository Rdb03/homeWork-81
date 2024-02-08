import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import config from "./config";
import linkRoutes from "./routers/linkRouters";

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/', linkRoutes);

const run = async () => {
    try {
        await mongoose.connect(config.mongoose.db);
        console.log('Connected to the database');

        app.listen(port, () => {
            console.log(`Server started on ${port} port!`);
        });

        process.on('exit', () => {
            mongoose.disconnect();
            console.log('Server is shutting down');
        });
    } catch (error) {
        console.error('Error during server startup:', error);
    }
};


void run();