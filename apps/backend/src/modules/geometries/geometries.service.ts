import { v4 as uuid } from "uuid";
import { GeometriesRepository } from "./geometries.repository.js";

const repo = new GeometriesRepository();

export class GeometriesService {
  async create(input: any) {
    const id = uuid();

    await repo.create({
      id,
      ...input,
      source: "USER",
    });

    return { id };
  }

  async getAll() {
    const result = await repo.findAll();
    return result.rows;
  }

  async delete(id: string) {
    await repo.delete(id);
  }
}