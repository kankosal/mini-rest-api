import { Router } from "express";
const campaignRoute = Router();
import { getCampaignList, getCampaignById } from "../controllers/index.js";

campaignRoute.get("/list", getCampaignList);
campaignRoute.get("/:campaignId", getCampaignById);

export default campaignRoute;
