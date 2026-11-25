import express from 'express';
import dotenv from 'dotenv';
import initializeModules from './modules/initializeModules.ts';
import { connectDB } from './config/mongoConfig.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeModules(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

connectDB();