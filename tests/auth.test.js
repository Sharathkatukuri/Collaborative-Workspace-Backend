import request from "supertest";
import app from "../app.js";

const request = require("supertest");
const app = require("../app.js");

describe("Auth API", () => {
  it("should block unauthorized access", async () => {
    const res = await request(app).get("/api/v1/projects");
    expect(res.statusCode).toBe(401);
  });
});
