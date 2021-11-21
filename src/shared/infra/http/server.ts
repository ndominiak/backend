import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";

import "@shared/infra/typeorm";

import { AppError } from "@shared/errors/AppError";
import "@shared/container";

import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});