import { Router } from "express";

const patientsRoutes = Router();

const patients = [];

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  const patient = {
    name,
    cpf,
    birthday: new Date(birthday),
    genre,
    created_at: new Date(),
  };

  patients.push(patient);

  return response.status(201).json({ patient });
});

export { patientsRoutes };
