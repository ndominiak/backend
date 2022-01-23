import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUsercontroller = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUsercontroller.handle);

export { authenticateRoutes };
