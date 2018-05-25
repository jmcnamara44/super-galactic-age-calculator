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
  mercuryLifeExpectancyRemaining(lifeExpectancy)
  {
    let lifeExpectancyInSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
    let mercuryLifeExpectancyYears = this.mercurySecondsToYears(lifeExpectancyInSeconds);
    let timeLeft = mercuryLifeExpectancyYears - this.mercurySecondsToYears(this.secondsAge);
    if (timeLeft >= 0) {
      return timeLeft
    } else {
      return (timeLeft * -1)
    }
  }
  venusLifeExpectancyRemaining(lifeExpectancy)
  {
    let lifeExpectancyInSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
    let venusLifeExpectancyYears = this.venusSecondsToYears(lifeExpectancyInSeconds);
    let timeLeft = venusLifeExpectancyYears - this.venusSecondsToYears(this.secondsAge);
    if (timeLeft >= 0) {
      return timeLeft
    } else {
      return (timeLeft * -1)
    }
  }
  earthLifeExpectancyRemaining(lifeExpectancy)
  {
    let lifeExpectancyInSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
    let earthLifeExpectancyYears = this.earthSecondsToYears(lifeExpectancyInSeconds);
    let timeLeft = earthLifeExpectancyYears - this.earthSecondsToYears(this.secondsAge);
    if (timeLeft >= 0) {
      return timeLeft
    } else {
      return (timeLeft * -1)
    }
  }
  marsLifeExpectancyRemaining(lifeExpectancy)
  {
    let lifeExpectancyInSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
    let marsLifeExpectancyYears = this.marsSecondsToYears(lifeExpectancyInSeconds);
    let timeLeft = marsLifeExpectancyYears - this.marsSecondsToYears(this.secondsAge);
    if (timeLeft >= 0) {
      return timeLeft
    } else {
      return (timeLeft * -1)
    }
  }
  jupiterLifeExpectancyRemaining(lifeExpectancy)
  {
    let lifeExpectancyInSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
    let jupiterLifeExpectancyYears = this.jupiterSecondsToYears(lifeExpectancyInSeconds);
    let timeLeft = jupiterLifeExpectancyYears - this.jupiterSecondsToYears(this.secondsAge);
    if (timeLeft >= 0) {
      return timeLeft
    } else {
      return (timeLeft * -1)
    }
  }
}
