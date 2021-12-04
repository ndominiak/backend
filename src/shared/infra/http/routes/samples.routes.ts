import { Router } from "express";

import { CreateSampleController } from "@modules/patients/useCases/createSample/CreateSampleController";

const samplesRoutes = Router();

const createSampleController = new CreateSampleController();

samplesRoutes.post("/", createSampleController.handle);

export { samplesRoutes };
