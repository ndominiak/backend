import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSamplesUseCase } from "./ListSamplesUseCase";

class ListSamplesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSamplesUseCase = container.resolve(ListSamplesUseCase);
    const allSamples = await listSamplesUseCase.execute();

    return response.json(allSamples);
  }
}

export { ListSamplesController };
