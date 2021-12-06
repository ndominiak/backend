import { Router } from "express";

import { controlsRoutes } from "./controls.routes";
import { patientsRoutes } from "./patients.routes";
import { samplesRoutes } from "./samples.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/samples", samplesRoutes);
router.use("/controls", controlsRoutes);

export { router };
