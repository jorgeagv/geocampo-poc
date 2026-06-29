import { MapContainer } from "react-leaflet";

import { BaseTileLayer } from "./BaseTileLayer";
import { GeometryLayer } from "./GeometryLayer";
import { DrawControl } from "./DrawControl";

export function MapView() {
  const handleGeometryCreated = (feature: GeoJSON.Feature) => {
    console.log("Nueva geometría:");
    console.log(feature);
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