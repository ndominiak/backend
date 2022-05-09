import { Router } from "express";

import { CreateControlSampleController } from "@modules/patients/useCases/createControlSample/CreateControlSampleController";
import { GetControlByPatientController } from "@modules/patients/useCases/getControlByPatient/GetControlByPatientController";
import { ListControlsController } from "@modules/patients/useCases/listControls/ListControlsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const controlsRoutes = Router();

const createControlSampleController = new CreateControlSampleController();
const getControlByPatientController = new GetControlByPatientController();
const listControlsController = new ListControlsController();

controlsRoutes.use(ensureAuthenticated);

controlsRoutes.post("/", createControlSampleController.handle);

controlsRoutes.get("/", getControlByPatientController.handle);

controlsRoutes.get("/list", listControlsController.handle);

export { controlsRoutes };
