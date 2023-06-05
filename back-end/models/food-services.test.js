require("./user-services");
const foodServices = require("./food-services");

test("test getDailyFoods", async () => {
  const start = new Date("2023-06-05T07:00:00.000Z");
  const end = new Date("2023-06-06T06:59:59.999Z");

  const result = await foodServices.getDailyFoods("FOODTESTS", start, end);

  console.log(result);

  expect(result[0].name).toBe("TEST1");
  expect(result[0].calories).toBe(999);
});
