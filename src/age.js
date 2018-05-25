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
}
