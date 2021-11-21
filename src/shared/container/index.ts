import { container } from "tsyringe";

import { PatientsRepository } from "@modules/patients/infra/typeorm/repositories/PatientsRepository";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
);
