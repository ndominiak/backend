import { Router } from "express";

import { patientsRoutes } from "./patients.routes";

const router = Router();

router.use("/patients", patientsRoutes);

export { router };
