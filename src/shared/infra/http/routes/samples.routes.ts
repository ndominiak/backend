import { Router } from "express";

import { CreateSampleController } from "@modules/patients/useCases/createSample/CreateSampleController";
import { ListSamplesController } from "@modules/patients/useCases/listSamples/ListSamplesController";

const samplesRoutes = Router();

const createSampleController = new CreateSampleController();
const listSamplesController = new ListSamplesController();

samplesRoutes.post("/", createSampleController.handle);

samplesRoutes.get("/", listSamplesController.handle);

export { samplesRoutes };
