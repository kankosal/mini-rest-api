import dotenv from 'dotenv';
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import { authRoute, companyRoute, campaignRoute } from './src/routes/index.js';


const app = express();
app.use(json());
app.use(cors());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/campaign", campaignRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
