import { Router } from "express";
const companyRoute = Router();
import { listCompany, getCompanyById } from "../controllers/index.js";

companyRoute.get("/list", listCompany);
companyRoute.get("/:companyId", getCompanyById);

export default companyRoute;
