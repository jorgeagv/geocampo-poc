import { MapContainer, TileLayer } from "react-leaflet";

export function MapView() {
  return (
    <MapContainer
      center={[20.132, -100.813]}
      zoom={16}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}