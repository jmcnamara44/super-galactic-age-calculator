export class Age {
  constructor(birthday, compareToDate)
  {
    this.birthday = birthday;
    this.compareToDate = compareToDate;
    this.secondsAge = (compareToDate - birthday)/1000;
  }
  mercurySecondsToYears(seconds)
  {
    let earthYears = (seconds/86400/365);
    let mercuryYears = Math.round(earthYears / .24);
    return mercuryYears;
  }
  venusSecondsToYears(seconds)
  {
    let earthYears = (seconds/86400/365);
    let venusYears = Math.round(earthYears / .62);
    return venusYears;
  }
  earthSecondsToYears(seconds)
  {
    let earthYears = Math.round(seconds/86400/365);
    return earthYears;
  }
  marsSecondsToYears(seconds)
  {
    let earthYears = (seconds/86400/365);
    let marsYears = Math.round(earthYears / 1.88);
    return marsYears;
  }
  jupiterSecondsToYears(seconds)
  {
    let earthYears = (seconds/86400/365);
    let jupiterYears = Math.round(earthYears / 11.87);
    return jupiterYears;
  }
  // earthLifeExpectancyRemaining(lifeExpectancy)
  // {
  //   let timeLeft = lifeExpectancy - this.earthAgeYears();
  //   return timeLeft;
  // }
}
