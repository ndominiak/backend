import { Router } from "express";

import { CreatePatientController } from "@modules/patients/useCases/createPatient/CreatePatientController";
import { GetPatientByCpfController } from "@modules/patients/useCases/getPatientByCpf/GetPatientByCpfController";
import { ListPatientsController } from "@modules/patients/useCases/listPatients/ListPatientsController";

const patientsRoutes = Router();

const createPatientController = new CreatePatientController();
const listPatientsController = new ListPatientsController();
const getPatientByCpfController = new GetPatientByCpfController();

patientsRoutes.post("/", createPatientController.handle);

patientsRoutes.get("/", getPatientByCpfController.handle);

patientsRoutes.get("/list", listPatientsController.handle);

export { patientsRoutes };
