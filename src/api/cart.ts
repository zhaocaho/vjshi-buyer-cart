import { fetchData } from "@/utils/request";

export function getCartVideos() {
  return fetchData("/vjh/buyer/cart/videos");
}

export function getCartFotos() {
  return fetchData("/vjf/buyer/cart/fotos");
}

export function getCartMusics() {
  return fetchData("/vjm/cart/music/musics");
}
