import { container } from "tsyringe";

import { PatientsRepository } from "../../modules/patients/repositories/implementations/PatientsRepository";
import { IPatientsRepository } from "../../modules/patients/repositories/IPatientsRepository";

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
);
