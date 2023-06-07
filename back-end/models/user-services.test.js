const userServices = require("./user-services");
const { connection } = require("mongoose");

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  connection.close();
  done();
});

test("test findUserByUserName", async () => {
  const result = await userServices.findUserByUserName("alimm");
  expect(result[0].username).toBe("alimm");
});

test("test add user", async () => {
  user = { username: "jestTest", password: "123" };
  const add = await userServices.addUser(user);
  const result = await userServices.findUserByUserName("jestTest");

  expect(result[0].username).toBe("jestTest");
});
//add a delete for user-services for testing add user.
test("test add user -- error", async () => {
  user = { username: "jestTest", password: "123" };
  const result = await userServices.addUser(user);

  expect(result).toBe(false);
});

test("test delete user by username", async () => {
  const result = await userServices.findUserByUserName("jestTest");
  const del = await userServices.deleteUserByUsername(result[0]._id);

  const after_result = await userServices.findUserByUserName("jestTest");
  expect(after_result).toEqual([]);
});
