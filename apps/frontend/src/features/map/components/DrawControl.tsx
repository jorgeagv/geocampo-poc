import { useEffect, useRef } from "react";
import { FeatureGroup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";

interface DrawControlProps {
  onGeometryCreated?: (feature: GeoJSON.Feature) => void;
}

export function DrawControl({
  onGeometryCreated,
}: DrawControlProps) {
  const map = useMap();
  const featureGroupRef = useRef<L.FeatureGroup>(null);

  useEffect(() => {
    if (!featureGroupRef.current) return;

    const drawControl = new (L.Control as any).Draw({
      edit: {
        featureGroup: featureGroupRef.current,
      },
      draw: {
        polygon: true,
        polyline: true,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
    });

    map.addControl(drawControl);

    const handleCreated = (event: any) => {
      const layer = event.layer;

      featureGroupRef.current?.addLayer(layer);

      const feature = layer.toGeoJSON() as GeoJSON.Feature;

      onGeometryCreated?.(feature);
    };

    map.on((L as any).Draw.Event.CREATED, handleCreated);

    return () => {
      map.off((L as any).Draw.Event.CREATED, handleCreated);
      map.removeControl(drawControl);
    };
  }, [map, onGeometryCreated]);

  return <FeatureGroup ref={featureGroupRef} />;
}