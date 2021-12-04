import { Router } from "express";

import { patientsRoutes } from "./patients.routes";
import { samplesRoutes } from "./samples.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/samples", samplesRoutes);

export { router };
