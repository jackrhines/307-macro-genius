const userServices = require("./user-services");

test("test findUserByUserName", async () => {
  const result = await userServices.findUserByUserName("alimm");
  expect(result[0].username).toBe("alimm");
});

