import { MapFactory } from "@maps-kit/core";

async function bootstrap() {
  const container = document.createElement("div");
  container.id = "map";
  container.style.width = "600px";
  container.style.height = "400px";
  document.body.appendChild(container);

  const map = await MapFactory.create("naver"); // or "google", "kakao"
  map.init(container, { center: { lat: 37.5665, lng: 126.978 }, zoom: 14 });
  map.addMarker({
    position: { lat: 37.5665, lng: 126.978 },
    title: "서울 시청",
  });
}

bootstrap();
