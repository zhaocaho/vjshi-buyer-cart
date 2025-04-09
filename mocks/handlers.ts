import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/vjh/buyer/cart/videos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 100,
          softwareType: "视频素材",
          title: "视频一",
          licType: "NP",
          vid: 888,
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
          licType: "NP",
          vid: 9991,
        },
        {
          auditStatus: "SUCCESS",
          coverImage: "https://picsum.photos/300/200",
          price: 50,
          softwareType: "视频素材",
          title: "视频四",
          licType: "NP",
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
];
