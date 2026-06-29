import express from "express";
import cors from "cors";

import { db } from "./database/postgres.js";
import geometriesRoutes from "./modules/geometries/geometries.routes.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/geometries", geometriesRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.get("/health-db", async (_, res) => {
  const result = await db.query("SELECT NOW()");
  res.json(result.rows[0]);
});