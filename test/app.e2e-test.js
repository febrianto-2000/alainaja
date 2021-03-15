const db = require('../config/mongoose');
const mongoose = require("mongoose");
const request = require("supertest");
const redis = require("../config/redisConfig");
const app = require("../app");

describe("testing api e2e", () => {

  beforeAll((done) => {
    db.initDb();
    done();
  });

  describe("endpoint /api/", () => {
    it("should have return 200 OK if params even", async () => {
      await request(app).get("/apis/2").expect(200);
    });

    it("should have return 201 if params odd", async () => {
      await request(app).get("/apis/1").expect(201);
    });
  });

  describe("endpoint /user",() => {
    it("should have return result", async () => {
      await request(app)
        .get("/apis/user/fetch")
        .expect(200);
    });
  });

  afterAll((done) => {
    mongoose.connection.close()
    redis.quit()
    done();
  });

});
