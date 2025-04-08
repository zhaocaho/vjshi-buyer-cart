import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/vjh/buyer/cart/videos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage:
            "https://pp.vjshi.com/p/2025-02-13/d609f6ce27b840618805fb12de75842c/main.jpg",
          price: 100,
          softwareType: "视频素材",
          title: "视频一",
          licType: "NP",
          vid: 888,
        },
        {
          auditStatus: "SUCCESS",
          coverImage:
            "https://pp.vjshi.com/p/2024-12-25/8ccf2d2ee68446828f388fedaba0efb1/main.jpg",
          price: 50,
          softwareType: "视频素材",
          title: "视频二",
          licType: "NP",
          vid: 999,
        },
      ],
    });
  }),

  http.get("/vjf/buyer/cart/fotos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage:
            "https://pp.vjshi.com/p/2025-02-13/d609f6ce27b840618805fb12de75842c/main.jpg",
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
          coverImage:
            "https://pp.vjshi.com/p/2025-02-13/d609f6ce27b840618805fb12de75842c/main.jpg",
          price: 100,
          softwareType: "音乐素材",
          title: "江南音乐",
          licType: "NP",
          mid: 123,
        },
        {
          auditStatus: "SUCCESS",
          coverImage:
            "https://pp.vjshi.com/p/2025-02-13/d609f6ce27b840618805fb12de75842c/main.jpg",
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
