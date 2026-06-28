import { GeometriesService } from "./geometries.service.js";

const service = new GeometriesService();

export class GeometriesController {
  create = async (req: any, res: any) => {
    const result = await service.create(req.body);
    res.json(result);
  };

  getAll = async (_: any, res: any) => {
    const result = await service.getAll();
    res.json(result);
  };

  delete = async (req: any, res: any) => {
    await service.delete(req.params.id);
    res.json({ ok: true });
  };
}