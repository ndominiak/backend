import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const patientsRoutes = Router();

const patients = [];

patientsRoutes.post("/", (request, response) => {
  const { name, cpf, birthday, genre } = request.body;

  const patient = {
    id: uuidV4(),
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
