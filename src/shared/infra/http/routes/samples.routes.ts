import { Router } from "express";

import { CreateSampleController } from "@modules/patients/useCases/createSample/CreateSampleController";
import { GetSampleByPatientController } from "@modules/patients/useCases/getSampleByPatient/GetSampleByPatientController";
import { ListSamplesController } from "@modules/patients/useCases/listSamples/ListSamplesController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const samplesRoutes = Router();

const createSampleController = new CreateSampleController();
const listSamplesController = new ListSamplesController();
const getSampleByPatientController = new GetSampleByPatientController();

samplesRoutes.use(ensureAuthenticated);

samplesRoutes.post("/", createSampleController.handle);

samplesRoutes.get("/", getSampleByPatientController.handle);

samplesRoutes.get("/list", listSamplesController.handle);

export { samplesRoutes };
