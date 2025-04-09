import {
  FotoCartItem,
  getCartFotos,
  getCartMusics,
  getCartVideos,
  getFotoLicTypesBought,
  getMusicLicTypesBought,
  getVideoLicTypesBought,
  MusicCartItem,
  VideoCartItem,
} from "@/api/cart";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

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

  const videos = videosResponse.data;
  const fotos = fotosResponse.data;
  const musics = musicResponse.data;
  console.log("videos");

  if (videos.length > 0) {
    const response = await getVideoLicTypesBought();
    const boughtIds = response.data.map(({ vid }) => vid);
    videos.forEach((video) => {
      if (boughtIds.includes(video.vid)) {
        video.bought = true;
      }
    });
  }

  if (fotos.length > 0) {
    const response = await getFotoLicTypesBought();
    const boughtIds = response.data.map(({ fid }) => fid);
    fotos.forEach((foto) => {
      if (boughtIds.includes(foto.fid)) {
        foto.bought = true;
      }
    });
  }

  if (musics.length > 0) {
    const response = await getMusicLicTypesBought();
    const boughtIds = response.data.map(({ mid }) => mid);
    musics.forEach((music) => {
      if (boughtIds.includes(music.mid)) {
        music.bought = true;
      }
    });
  }

  console.log("videos222");

  return {
    videos,
    fotos,
    musics,
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
