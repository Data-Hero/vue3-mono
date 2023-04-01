import cors from "cors";
import express, { Express } from "express";

import { helloRouter } from "./routes/hello.js";

const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

app.use("/hello", helloRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
