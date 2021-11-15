import { Request, Response } from "express";

import { ListPatientsUseCase } from "./ListPatientsUseCase";

class ListPatientsController {
  constructor(private listPatientsUseCase: ListPatientsUseCase) {}

  handle(request: Request, response: Response): Response {
    const allPatients = this.listPatientsUseCase.execute();

    return response.json(allPatients);
  }
}

export { ListPatientsController };
