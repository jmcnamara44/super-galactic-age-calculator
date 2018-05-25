import { Age } from "./../src/age.js"

describe("Age", function() {
  let reusableTodaysDate;
  let reusableTestBirthday;
  let reusableTestAge;
  beforeEach(function() {
    reusableTodaysDate = new Date(2018, 4, 25);
    reusableTestBirthday = new Date(2000, 0, 1);
    reusableTestAge = new Age(reusableTestBirthday, reusableTodaysDate);
  });
  it("should test if age calculation works", function() {
    let todaysDate = new Date(2018, 4, 25);
    let testBirthday = new Date(2018, 3, 14);
    let testAge = new Age(testBirthday, todaysDate);
    expect(testAge.secondsAge).toEqual(3542400);
  });
  it("should test if age calculation for Mercury works", function() {
    expect(reusableTestAge.mercurySecondsToYears(reusableTestAge.secondsAge)).toEqual(77);
  });
  it("should test if age calculation for Venus works", function() {
    expect(reusableTestAge.venusSecondsToYears(reusableTestAge.secondsAge)).toEqual(30);
  });
  it("should test if age calculation for Earth works", function() {
    expect(reusableTestAge.earthSecondsToYears(reusableTestAge.secondsAge)).toEqual(18);
  });
  it("should test if age calculation for Mars works", function() {
    expect(reusableTestAge.marsSecondsToYears(reusableTestAge.secondsAge)).toEqual(10);
  });
  it("should test if age calculation for Jupiter works", function() {
    expect(reusableTestAge.jupiterSecondsToYears(reusableTestAge.secondsAge)).toEqual(2);
  });
  it("should test how much longer use has to live based on their inputted life expectancy", function() {
    let lifeExpectancy = 72;
    expect(reusableTestAge.earthLifeExpectancyRemaining(lifeExpectancy)).toEqual(54);
  });
});
