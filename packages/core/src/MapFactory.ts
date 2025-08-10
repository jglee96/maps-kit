import { IMapService } from "./types";

async function loadScript(src: string): Promise<void> {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => res();
    script.onerror = () => rej(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export class MapFactory {
  static async create(provider: "google" | "naver" | "kakao"): Promise<IMapService> {
    switch (provider) {
      case "google":
        await loadScript(
          `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY`
        );
        return new (await import("@maps-kit/google-map")).GoogleMapService();
      case "naver":
        await loadScript(
          `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_NAVER_CLIENT_ID`
        );
        return new (await import("@maps-kit/naver-map")).NaverMapService();
      case "kakao":
        await loadScript(
          `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY`
        );
        return new (await import("@maps-kit/kakao-map")).KakaoMapService();
      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }
  }
}
