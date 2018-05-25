import { Age } from "./../src/age.js"

describe("Age", function() {
  it("should test if age calculation works", function() {
    let todaysDate = new Date(2018, 4, 25);
    let testBirthday = new Date(2018, 3, 14);
    let testAge = new Age(testBirthday, todaysDate);
    expect(testAge.ageInSeconds()).toEqual(3542400);
  });
});
