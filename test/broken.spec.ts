import { app } from "../src/app";

describe("Broken Suite", () => {
  it("should break", () => {
    app("invalid input");
  });
});
