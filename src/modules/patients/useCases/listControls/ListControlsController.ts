import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListControlsUseCase } from "./ListControlsUseCase";

class ListControlsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listControlsUseCase = container.resolve(ListControlsUseCase);
    const allControls = await listControlsUseCase.execute();

    return response.json(allControls);
  }
}

export { ListControlsController };
