import { fetchData } from "@/utils/request";

export enum CartItemAuditStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export enum LicType {
  NP = "NP",
  LP = "LP",
  LPPLUS = "LPPLUS",
}

interface BaseCartItem {
  auditStatus: CartItemAuditStatus;
  coverImage: string;
  price: number;
  softwareType: string;
  title: string;
  licType: LicType;
  bought?: boolean;
}

export interface VideoCartItem extends BaseCartItem {
  vid: number;
}

export interface FotoCartItem extends BaseCartItem {
  fid: number;
}

export interface MusicCartItem extends BaseCartItem {
  mid: number;
}

interface VideoLicTypesBought {
  licTypes: LicType[];
  vid: number;
}

interface FotoLicTypesBought {
  licTypes: LicType[];
  fid: number;
}

interface MusicTypesBought {
  licTypes: LicType[];
  mid: number;
}

export function getCartVideos() {
  return fetchData<{ data: VideoCartItem[] }>("/vjh/buyer/cart/videos");
}

export function getCartFotos() {
  return fetchData<{ data: FotoCartItem[] }>("/vjf/buyer/cart/fotos");
}

export function getCartMusics() {
  return fetchData<{ data: MusicCartItem[] }>("/vjm/cart/music/musics");
}

export function getVideoLicTypesBought() {
  return fetchData<{ data: VideoLicTypesBought[] }>("/vjh/video/download/lic-types-bought");
}

export function getFotoLicTypesBought() {
  return fetchData<{ data: FotoLicTypesBought[] }>("/vjf/foto/download/lic-types-bought");
}

export function getMusicLicTypesBought() {
  return fetchData<{ data: MusicTypesBought[] }>("/vjm/music/download/lic-types-bought");
}
