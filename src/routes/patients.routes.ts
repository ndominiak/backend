import { Router } from "express";

import { PatientRepository } from "../repositories/PatientRepository";

const patientsRoutes = Router();
const patientsRepository = new PatientRepository();

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  patientsRepository.create({ name, cpf, birthday, genre });

  return response.status(201).send();
});

export { patientsRoutes };
