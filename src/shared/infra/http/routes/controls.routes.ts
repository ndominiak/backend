import { Router } from "express";

import { CreateControlSampleController } from "@modules/patients/useCases/createControlSample/CreateControlSampleController";
import { GetControlByPatientController } from "@modules/patients/useCases/getControlByPatient/GetControlByPatientController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const controlsRoutes = Router();

const createControlSampleController = new CreateControlSampleController();
const getControlByPatientController = new GetControlByPatientController();

controlsRoutes.use(ensureAuthenticated);

controlsRoutes.post("/", createControlSampleController.handle);

controlsRoutes.get("/", getControlByPatientController.handle);

export { controlsRoutes };
