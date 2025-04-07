import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/vjh/buyer/cart/videos", () => {
    return HttpResponse.json({
      data: [
        {
          auditStatus: "SUCCESS",
          coverImage: "img",
          price: 100,
          softwareType: "视频素材",
          title: "视频素材",
          licType: "NP",
          vid: "123",
        },
      ],
    });
  }),
];
