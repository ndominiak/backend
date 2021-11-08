import { Router } from "express";

import { PatientsRepository } from "../repositories/PatientsRepository";
import { CreatePatientService } from "../services/CreatePatientService";

const patientsRoutes = Router();
const patientsRepository = new PatientsRepository();

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  const createPatientService = new CreatePatientService(patientsRepository);

  createPatientService.execute({ name, cpf, birthday, genre });

  return response.status(201).send();
});

patientsRoutes.get("/", (request, response) => {
  const allPatients = patientsRepository.list();

  return response.json(allPatients);
});

export { patientsRoutes };
