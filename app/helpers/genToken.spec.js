const jwt = require("jsonwebtoken");
const getToken = require("./genToken");

describe("testign  genToken function", () => {
  let res = {};
  let username = "foo";
  let data = "barr";
  let result = null;

  beforeEach(() => {
    res.cookie = jest.fn().mockReturnValue(true);
    jwt.sign = jest.fn();
    result = getToken(res, username, data);
  });

  it("should have jwt.sign has called", () => {
    expect(jwt.sign).toHaveBeenCalled();
  });

  it("should have res.cookie has called and function has returned", () => {
    expect(res.cookie).toHaveBeenCalled();
    expect(result).toEqual(true);
  });
});
