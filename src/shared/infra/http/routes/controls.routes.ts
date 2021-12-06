import { Router } from "express";

import { CreateControlSampleController } from "@modules/patients/useCases/createControlSample/CreateControlSampleController";

const controlsRoutes = Router();

const createControlSampleController = new CreateControlSampleController();

controlsRoutes.post("/", createControlSampleController.handle);

export { controlsRoutes };
