import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/vjh/buyer/cart/videos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 10,
          softwareType: "视频素材",
          title: "视频一",
          licType: "NP",
          vid: 8884567,
        },
        {
          auditStatus: "FAIL",
          coverImage: "https://picsum.photos/300/200",
          price: 50,
          softwareType: "视频素材",
          title: "视频二",
          licType: "NP",
          vid: 999,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 50,
          softwareType: "视频素材",
          title: "视频三",
          licType: "LP",
          vid: 9991,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 50,
          softwareType: "视频素材",
          title: "视频四",
          licType: "LPPLUS",
          vid: 9992,
        },
      ],
    });
  }),

  http.get("/vjf/buyer/cart/fotos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 100,
          softwareType: "图片素材",
          title: "海边图",
          licType: "NP",
          fid: 456,
        },
      ],
    });
  }),

  http.get("/vjm/cart/music/musics", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 100,
          softwareType: "音乐素材",
          title: "江南音乐",
          licType: "NP",
          mid: 123,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 100,
          softwareType: "音乐素材",
          title: "江南音乐二",
          licType: "NP",
          mid: 124,
        },
      ],
    });
  }),

  http.get("/vjh/video/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          vid: 8884567,
        },
      ],
    });
  }),

  http.get("/vjf/foto/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          fid: 456,
        },
      ],
    });
  }),

  http.get("/vjm/music/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          mid: 123,
        },
      ],
    });
  }),
];
