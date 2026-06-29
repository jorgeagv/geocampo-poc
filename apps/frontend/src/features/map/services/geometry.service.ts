import { api } from "../../../api/axios";

export interface CreateGeometryDto {
  name: string;
  type: string;
  geometry: GeoJSON.Geometry;
  metadata: Record<string, unknown>;
}

export async function createGeometry(data: CreateGeometryDto) {
  const response = await api.post("/geometries", data);

  return response.data;
}