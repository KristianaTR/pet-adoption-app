import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

dotenv.config();

app.use('/', petsRoute);

app.listen(port, () => {
    // connectiontoDB()
    console.log(`Server started on port: ${port}`);
});