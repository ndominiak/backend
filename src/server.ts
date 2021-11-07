import express from "express";

import { patientsRoutes } from "./routes/patients.routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/patients", patientsRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
