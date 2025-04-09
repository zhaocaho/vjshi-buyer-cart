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

export enum CartItemType {
  video = "video",
  foto = "foto",
  music = "music",
}
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
    deleteCartItem: (state, action) => {
      const { id, type } = action.payload;
      if (type === CartItemType.video) {
        state.videos = state.videos.filter((video) => video.vid !== id);
      } else if (type === CartItemType.foto) {
        state.fotos = state.fotos.filter((foto) => foto.fid !== id);
      } else if (type === CartItemType.music) {
        state.musics = state.musics.filter((music) => music.mid !== id);
      }
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

export const { openCartDrawer, closeCartDrawer, deleteCartItem } = cartSlice.actions;

export const { selectVideosCount, selectFotosCount, selectMusicsCount } = cartSlice.selectors;

// 创建一个记忆化的选择器来计算总数
export const selectCartCount = createSelector(
  [selectVideosCount, selectFotosCount, selectMusicsCount],
  (videosCount, fotosCount, musicsCount) => videosCount + fotosCount + musicsCount,
);

export default cartSlice.reducer;
