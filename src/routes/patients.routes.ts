import { Router } from "express";

import { PatientsRepository } from "../modules/patients/repositories/PatientsRepository";
import { createPatientController } from "../modules/patients/useCases/createPatient";

const patientsRoutes = Router();
const patientsRepository = new PatientsRepository();

patientsRoutes.post("/", (request, response) => {
  return createPatientController.handle(request, response);
});

patientsRoutes.get("/", (request, response) => {
  const allPatients = patientsRepository.list();

  return response.json(allPatients);
});

export { patientsRoutes };
