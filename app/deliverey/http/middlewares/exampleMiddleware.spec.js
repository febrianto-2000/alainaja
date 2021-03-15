const exampleMiddleware = require("./exampleMiddleware");

describe("testing middlewareExample function", () => {
  it("should have returned", () => {
    const res = {};
    const req = {};
    const spy = jest.spyOn(console, "log");
    const next = jest.fn().mockReturnValue(true);

    const result = exampleMiddleware(req, res, next);
    expect(result).toEqual(true);
    expect(next).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });
});
