import { createGeometry } from "../services/geometry.service";
import { MapContainer } from "react-leaflet";
import { BaseTileLayer } from "./BaseTileLayer";
import { GeometryLayer } from "./GeometryLayer";
import { DrawControl } from "./DrawControl";

export function MapView() {
  const handleGeometryCreated = async (feature: GeoJSON.Feature) => {
    try {
      console.log(feature.geometry);

      const result = await createGeometry({
        name: "Nueva geometría",
        type: feature.geometry.type.toUpperCase(),
        geometry: feature.geometry,
        metadata: {},
      });

      console.log("Guardada");

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <MapContainer
      center={[20.132, -100.813]}
      zoom={16}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <BaseTileLayer />

      <GeometryLayer />

      <DrawControl onGeometryCreated={handleGeometryCreated} />
    </MapContainer>
  );
}