import { Router } from "express";

import { CreateControlSampleController } from "@modules/patients/useCases/createControlSample/CreateControlSampleController";
import { GetControlByPatientController } from "@modules/patients/useCases/getControlByPatient/GetControlByPatientController";

const controlsRoutes = Router();

const createControlSampleController = new CreateControlSampleController();
const getControlByPatientController = new GetControlByPatientController();

controlsRoutes.post("/", createControlSampleController.handle);

controlsRoutes.get("/", getControlByPatientController.handle);

export { controlsRoutes };
