export class Age {
  constructor(birthday, compareToDate)
  {
    this.birthday = birthday;
    this.compareToDate = compareToDate;
  }
  ageInSeconds()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    return secondsAge;
  }
  mercuryAgeYears()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    let earthAge = (secondsAge/86400/365);
    let mercuryAge = Math.round(earthAge / .24);
    return mercuryAge;
  }
  venusAgeYears()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    let earthAge = (secondsAge/86400/365);
    let venusAge = Math.round(earthAge / .62);
    return venusAge;
  }
  earthAgeYears()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    let earthAge = Math.round(secondsAge/86400/365);
    return earthAge;
  }
  marsAgeYears()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    let earthAge = (secondsAge/86400/365);
    let marsAge =Math.round( earthAge / 1.88);
    return marsAge;
  }
  jupiterAgeYears()
  {
    let secondsAge = ((this.compareToDate - this.birthday)/1000);
    let earthAge = (secondsAge/86400/365);
    let jupiterAge = Math.round(earthAge / 11.87);
    return jupiterAge;
  }
}
