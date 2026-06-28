import { db } from "../../database/postgres.js";

export class GeometriesRepository {
  async create(data: any) {
    return db.query(
      `
      INSERT INTO geometries (id, name, type, source, metadata, geom)
      VALUES ($1, $2, $3, $4, $5,
        ST_SetSRID(ST_GeomFromGeoJSON($6), 4326)
      )
      `,
      [
        data.id,
        data.name,
        data.type,
        data.source,
        data.metadata,
        JSON.stringify(data.geometry),
      ]
    );
  }

  async findAll() {
    return db.query(`
      SELECT
        id,
        name,
        type,
        metadata,
        ST_AsGeoJSON(geom)::json as geometry
      FROM geometries
      ORDER BY created_at DESC
    `);
  }

  async delete(id: string) {
    return db.query(`DELETE FROM geometries WHERE id = $1`, [id]);
  }
}