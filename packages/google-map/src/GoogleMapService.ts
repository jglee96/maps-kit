import { IMapService, MapOptions, MarkerOptions } from "@maps-kit/core";

export class GoogleMapService implements IMapService {
  private map!: google.maps.Map;

  init(container: HTMLElement, options: MapOptions): void {
    this.map = new google.maps.Map(container, {
      center: { lat: options.center.lat, lng: options.center.lng },
      zoom: options.zoom,
    });
  }

  addMarker(options: MarkerOptions): void {
    new google.maps.Marker({
      position: { lat: options.position.lat, lng: options.position.lng },
      title: options.title,
      map: this.map,
    });
  }
}
