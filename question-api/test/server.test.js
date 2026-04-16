const { describe, it, beforeEach } = require("mocha");
const request = require("supertest");
const { expect } = require("chai");
const fs = require("fs");
const app = require("../server");

describe("Question API Tests", () => {

  beforeEach(() => {
    if (fs.existsSync("answers.json")) {
      fs.unlinkSync("answers.json");
    }
  });
  describe("GET /questions", () => {

    it("should return all questions", async () => {
      const res = await request(app).get("/questions");

      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array"); // ensure question.json is array
    });

    it("should return 404 for invalid route", async () => {
      const res = await request(app).get("/invalid");

      expect(res.status).to.equal(404);
    });

  });
  describe("POST /submit-answers", () => {

    it("should save valid answers", async () => {
      const testData = { user: "TestUser", answers: [1, 2, 3] };

      const res = await request(app)
        .post("/submit-answers")
        .send(testData);

      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal("Answers saved successfully");
 
      const fileData = JSON.parse(fs.readFileSync("answers.json", "utf8"));
      expect(fileData.user).to.equal("TestUser");
    });

    it("should return 400 for empty body", async () => {
      const res = await request(app)
        .post("/submit-answers")
        .send({});

      expect(res.status).to.equal(400);
    });

  });

});