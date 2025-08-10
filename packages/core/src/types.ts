export interface LatLng {
  lat: number;
  lng: number;
}

export interface MapOptions {
  center: LatLng;
  zoom: number;
}

export interface MarkerOptions {
  position: LatLng;
  title?: string;
}

export interface IMapService {
  init(container: HTMLElement, options: MapOptions): void;
  addMarker(options: MarkerOptions): void;
}
