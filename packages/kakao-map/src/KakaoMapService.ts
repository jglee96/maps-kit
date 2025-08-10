import { IMapService, MapOptions, MarkerOptions } from "@maps-kit/core";

export class KakaoMapService implements IMapService {
  private map!: any;

  init(container: HTMLElement, options: MapOptions): void {
    const kakao = (window as any).kakao;
    this.map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(options.center.lat, options.center.lng),
      level: options.zoom
    });
  }

  addMarker(options: MarkerOptions): void {
    const kakao = (window as any).kakao;
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(options.position.lat, options.position.lng),
      map: this.map,
      title: options.title
    });
    marker.setMap(this.map);
  }
}
