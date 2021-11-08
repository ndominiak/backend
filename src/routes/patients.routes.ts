import { Router } from "express";

import { PatientRepository } from "../repositories/PatientRepository";

const patientsRoutes = Router();
const patientsRepository = new PatientRepository();

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  const patientAlreadyExists = patientsRepository.findByCPF(cpf);

  if (patientAlreadyExists) {
    return response.status(400).json({ error: "Patient already exists!" });
  }

  patientsRepository.create({ name, cpf, birthday, genre });

  return response.status(201).send();
});

patientsRoutes.get("/", (request, response) => {
  const allPatients = patientsRepository.list();

  return response.json(allPatients);
});

export { patientsRoutes };
