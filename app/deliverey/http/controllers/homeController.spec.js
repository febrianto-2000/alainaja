jest.mock("../../../services/homeService");
jest.mock("../../../helpers/redis");

const { fetchUser, index, testRedis } = require("./homeController");
const homeService = require("../../../services/homeService");


const fakeReturn = {
  status: 200,
  messages: "fetched",
  data: [],
};

describe("testing homeService/Controller", () => {
  describe("testing  fetchUser function", () => {
    let result = null;
    let req = null;
    let res = null;

    beforeEach(async () => {
      req = jest.fn();
      res = {
        json: jest.fn().mockImplementation((fakeReturn) => fakeReturn),
      };
    });

    it("should have returned", async () => {
      homeService.fetchUser = jest.fn().mockReturnValue(Promise.resolve([]));
      result = await fetchUser(req, res);
      expect(result).toEqual(fakeReturn);
    });

    it("should have model and res.json has been called", async () => {
      homeService.fetchUser = jest
        .fn()
        .mockImplementation(() => Promise.resolve([]));

      await fetchUser(req, res);

      expect(res.json).toHaveBeenCalledWith(fakeReturn);
      expect(homeService.fetchUser).toHaveBeenCalled();
    });
  });

  // describe("testing testRedis", () => {

  //   it('sh')

  // })

  describe("testing index function", () => {
    it("should have return 201 if req.params.number is odd value", () => {
      const request = {
        params: {
          number: 1,
        },
      };

      const response = {};
      response.status = jest.fn().mockReturnValue(response);
      response.json = jest.fn().mockReturnValue(response);

      const result = index(request, response);
      expect(response.status).toHaveBeenCalledWith(201);
      expect(result).toEqual(response);
    });

    it("should have return 200 if req.params.number is even value", () => {
      const request = {
        params: {
          number: 2,
        },
      };

      homeService.checkNumber = jest.fn().mockImplementation((number) => true);

      const response = {};
      response.status = jest.fn().mockReturnValue(response);
      response.json = jest.fn().mockReturnValue(response);

      const result = index(request, response);
      expect(response.status).toHaveBeenCalledWith(200);
      expect(homeService.checkNumber).toHaveBeenCalled();
      expect(result).toEqual(response);
    });
  });
});
