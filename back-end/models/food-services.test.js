require("./user-services");
const foodModel = require("./food");
const foodServices = require("./food-services");
const { connection } = require("mongoose");

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  connection.close();
  done();
});

test("test getDailyFoods -- happy case", async () => {
  const start = new Date("2023-06-05T07:00:00.000Z");
  const end = new Date("2023-06-06T06:59:59.999Z");

  const result = await foodServices.getDailyFoods("FOODTESTS", start, end);

  expect(result[0].name).toBe("TEST1");
  expect(result[0].calories).toBe(999);
});

test("test getDailyFoods -- invalid input", async () => {
  const result = await foodServices.getDailyFoods("FOODTESTS");
  expect(result).toBeFalsy();
});

test("test findFoodById -- happy", async () => {
  const testId = "647e10a87f33ce316247b64f";
  const result = await foodServices.findFoodById(testId);

  expect(result.name).toBe("TEST1");
  expect(result.calories).toBe(999);
});

test("test findFoodById -- error", async () => {
  const result = await foodServices.findFoodById("fakeId");

  expect(result).toBe(undefined);
});

test("test add and delete food", async () => {
  const testFood = new foodModel({
    name: "TEST999",
    calories: 999,
    user: "FOODTESTS",
  });

  const result = await foodServices.addFood(testFood);
  expect(result.name).toBe("TEST999");

  expect(() => foodServices.deleteFoodById(result._id)).not.toThrow();
});

test("test add food -- error", async () => {
  const result = await foodServices.addFood();
  expect(result).toBeFalsy();
});

test("test delete food -- error", async () => {
  const result = await foodServices.deleteFoodById("fakeId");
  expect(result).toBeFalsy();
});
