const request = require("supertest");
const app = require("../index");

describe("API Endpoints", () => {
  it("GET /api/articles should return all articles", async () => {
    const res = await request(app).get("/api/articles");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/articles/:id should return article by ID", async () => {
    const res = await request(app).get("/api/articles/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe("1");
  });

  it("POST /api/related/articles should return related articles based on tags", async () => {
    const res = await request(app)
      .post("/api/related/articles")
      .send({ tags: ["Sociedade"] });
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/related/:type should return 400 for invalid type", async () => {
    const res = await request(app)
      .post("/api/related/invalid")
      .send({ tags: ["Sociedade"] });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe(
      "Invalid type. Must be 'articles' or 'news'."
    );
  });
});
