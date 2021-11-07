import { Router } from "express";

import { Patient } from "../model/Patient";

const patientsRoutes = Router();

const patients: Patient[] = [];

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  const patient = new Patient();

  Object.assign(patient, {
    name,
    cpf,
    birthday: new Date(birthday),
    genre,
    created_at: new Date(),
  });

  patients.push(patient);

  return response.status(201).json({ patient });
});

export { patientsRoutes };
