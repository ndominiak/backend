import { Router } from "express";

import { CreatePatientController } from "../modules/patients/useCases/createPatient/CreatePatientController";
import { ListPatientsController } from "../modules/patients/useCases/listPatients/ListPatientsController";

const patientsRoutes = Router();

const createPatientController = new CreatePatientController();
const listPatientsController = new ListPatientsController();

patientsRoutes.post("/", createPatientController.handle);

patientsRoutes.get("/", listPatientsController.handle);

export { patientsRoutes };
