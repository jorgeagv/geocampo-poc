import { TileLayer } from "react-leaflet";

export function BaseTileLayer() {
  return (
    <TileLayer
      attribution="&copy; OpenStreetMap contributors"
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}