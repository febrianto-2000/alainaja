jest.mock("../models/users");
jest.mock("redis")

const modelUser = require("../models/users");
const { fetchUser, checkNumber, testRedis } = require("./homeService");

describe("homeService", () => {
  describe("fetchUser function", () => {
    it("should have returned", async () => {
      modelUser.find = jest.fn().mockReturnValue(Promise.resolve(true));

      const result = await fetchUser();

      expect(modelUser.find).toHaveBeenCalled();
      expect(result).toEqual(true);
    });
  });

  describe("testRedis function",() => {
    it("should have returned",async () => {
      const result = await testRedis()

      expect(result).toEqual('helo')
    })
  })

  describe("checkNumber function", () => {
    it("should return true if value is even", () => {
      expect(checkNumber(2)).toEqual(true);
    });

    it("should return false if value is odd", () => {
      expect(checkNumber(1)).toEqual(false);
    });
  });
});
