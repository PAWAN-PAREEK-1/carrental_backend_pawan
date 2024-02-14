import express from 'express';
import { routes } from './routes/index.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();




const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/admin" , require("./routes/adminRoute"))
app.use("/api", routes)

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});