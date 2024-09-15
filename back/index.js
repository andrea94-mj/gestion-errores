import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js'
import { PORT, DOMAIN, URL } from './config/config.js'

const app = express();

// ----------------------------------
// Midlewares
// ----------------------------------

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use("/API/v1/", indexRoutes);

// ----------------------------------
// Server
// ----------------------------------

// app.get("/")

app.listen(PORT, () => {
    console.log(`Server running on ${URL}`);
});