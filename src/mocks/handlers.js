import { http } from "msw";

export const handlers = [
  http.get("/api-sample", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 10, name: "taro" }));
  }),
];

// {
//     "id": 1,
//     "name": "taro"
// }