import { IMapService, MapOptions, MarkerOptions } from "@maps-kit/core";

export class NaverMapService implements IMapService {
  private map!: naver.maps.Map;

  init(container: HTMLElement, options: MapOptions): void {
    this.map = new naver.maps.Map(container, {
      center: new naver.maps.LatLng(options.center.lat, options.center.lng),
      zoom: options.zoom
    });
  }

  addMarker(options: MarkerOptions): void {
    new naver.maps.Marker({
      position: new naver.maps.LatLng(options.position.lat, options.position.lng),
      map: this.map,
      title: options.title
    });
  }
}
