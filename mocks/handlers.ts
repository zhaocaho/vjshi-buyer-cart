import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/vjh/buyer/cart/videos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 738,
          softwareType: "视频素材",
          title: "视频一",
          licType: "NP",
          vid: 8884567,
        },
        {
          auditStatus: "FAIL",
          coverImage: "/test.jpg",
          price: 50,
          softwareType: "AE模版",
          title: "视频二",
          licType: "NP",
          vid: 1184167,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 50,
          softwareType: "C4D模版",
          title: "视频三",
          licType: "LP",
          vid: 7659801,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 50,
          softwareType: "视频素材",
          title: "视频四",
          licType: "LPPLUS",
          vid: 3409181,
        },
      ],
    });
  }),

  http.get("/vjf/buyer/cart/fotos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 100,
          softwareType: "图片素材",
          title: "海边图",
          licType: "NP",
          fid: 1212312,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 153,
          softwareType: "AI模版",
          title: "海边图1",
          licType: "LP",
          fid: 1888312,
        },
      ],
    });
  }),

  http.get("/vjm/cart/music/musics", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 100,
          title: "江南音乐",
          licType: "NP",
          mid: 9965432,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "/test.jpg",
          price: 100,
          title: "江南音乐二",
          licType: "NP",
          mid: 9087654,
        },
      ],
    });
  }),

  http.get("/vjh/video/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          vid: 1184167,
        },
      ],
    });
  }),

  http.get("/vjf/foto/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          fid: 1888312,
        },
      ],
    });
  }),

  http.get("/vjm/music/download/lic-types-bought", () => {
    return HttpResponse.json({
      data: [
        {
          licTypes: [],
          mid: 9087654,
        },
      ],
    });
  }),
];
