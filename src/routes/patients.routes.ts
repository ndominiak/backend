import { Router } from "express";

import { createPatientController } from "../modules/patients/useCases/createPatient";
import { listPatientsController } from "../modules/patients/useCases/listPatients";

const patientsRoutes = Router();

patientsRoutes.post("/", (request, response) => {
  return createPatientController.handle(request, response);
});

patientsRoutes.get("/", (request, response) => {
  return listPatientsController.handle(request, response);
});

export { patientsRoutes };
