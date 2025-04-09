import { getCartFotos, getCartMusics, getCartVideos } from "@/api/cart";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

export enum CartItemAuditStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

interface BaseCartItem {
  auditStatus: CartItemAuditStatus;
  coverImage: string;
  price: number;
  softwareType: string;
  title: string;
  licType: "NP" | "LP" | "LPPLUS";
}

interface VideoCartItem extends BaseCartItem {
  vid: number;
}

interface FotoCartItem extends BaseCartItem {
  fid: number;
}

interface MusicCartItem extends BaseCartItem {
  mid: number;
}

export type CartItem = VideoCartItem | FotoCartItem | MusicCartItem;

interface CartState {
  videos: VideoCartItem[];
  fotos: FotoCartItem[];
  musics: MusicCartItem[];
  showCartIcon: boolean;
  cartDrawerOpen: boolean;
}

const initialState: CartState = {
  videos: [],
  fotos: [],
  musics: [],
  showCartIcon: false,
  cartDrawerOpen: true,
};

export const fetchCartItems = createAsyncThunk("cart/fetchItems", async () => {
  const [videosResponse, fotosResponse, musicResponse] = await Promise.all([
    getCartVideos(),
    getCartFotos(),
    getCartMusics(),
  ]);

  return {
    videos: videosResponse.data,
    fotos: fotosResponse.data,
    musics: musicResponse.data,
  };
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.cartDrawerOpen = true;
    },
    closeCartDrawer: (state) => {
      state.cartDrawerOpen = false;
    },
  },
  selectors: {
    selectVideosCount: (state: CartState) => state.videos.length,
    selectFotosCount: (state: CartState) => state.fotos.length,
    selectMusicsCount: (state: CartState) => state.musics.length,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.showCartIcon = true;
      state.videos = action.payload.videos;
      state.fotos = action.payload.fotos;
      state.musics = action.payload.musics;
      console.log("执行");
    });
  },
});

export const { openCartDrawer, closeCartDrawer } = cartSlice.actions;

export const { selectVideosCount, selectFotosCount, selectMusicsCount } = cartSlice.selectors;

// 创建一个记忆化的选择器来计算总数
export const selectCartCount = createSelector(
  [selectVideosCount, selectFotosCount, selectMusicsCount],
  (videosCount, fotosCount, musicsCount) => videosCount + fotosCount + musicsCount,
);

export default cartSlice.reducer;
