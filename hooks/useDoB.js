import { renderFirstName } from "../utils";

class Age {
  constructor(dob) {
    this.dob = dob;
  }
  getAge() {
    let currentDate = new Date();
    let dobDate = new Date(this.dob);
    let dobYear = dobDate.getFullYear();
    let dobMonth = dobDate.getMonth() + 1;
    let dobDay = dobDate.getDate();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let ageMonth = currentMonth - dobMonth,
      ageDay = currentDay - dobDay,
      ageYear = currentYear - dobYear;
    let daysInMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    let remainingMonth = 11 - ageMonth,
      remainingDay = daysInMonth - ageDay;

    if (
      currentYear < dobYear ||
      (currentYear === dobYear && currentMonth < dobMonth) ||
      (currentYear === dobYear &&
        currentMonth === dobMonth &&
        currentDay < dobDay)
    ) {
      return ["Your Date of birth is invalid! Make sure your date is correct"];
    } else {
      if (currentMonth < dobMonth) {
        ageYear -= 1;
        ageMonth += 12;
        remainingMonth -= 11;
      }
      if (currentDay < dobDay) {
        ageDay += daysInMonth;
        remainingDay -= daysInMonth;
        if (currentMonth !== dobMonth) {
          ageMonth -= 1;
        } else {
          remainingMonth = 0;
          ageYear -= 1;
          ageMonth = 11;
        }
      }
      if (currentDay === dobDay) remainingDay = 0;

      return [ageYear, ageMonth, ageDay, remainingMonth, remainingDay];
    }
  }
  getDayOfBirth() {
    let birthDay = new Date(this.dob).getDay();
    let bDay = "";
    switch (birthDay) {
      case 0:
        bDay = "Sunday";
        break;
      case 1:
        bDay = "Monday";
        break;
      case 2:
        bDay = "Tuesday";
        break;
      case 3:
        bDay = "Wednesday";
        break;
      case 4:
        bDay = "Thursday";
        break;
      case 5:
        bDay = "Friday";
        break;
      case 6:
        bDay = "Saturday";
        break;
      default:
        break;
    }
    return bDay;
  }
}

const useDoB = (dob, name) => {
  let isBday = false;
  let error = null;
  let remainderText = undefined;
  let ageText = undefined;

  let newDob = new Age(dob);
  let birthDayText = `You were born on ${newDob.getDayOfBirth()}.`;
  let newAge = newDob.getAge();
  let formalName = renderFirstName(name);
  let showName = formalName !== "" ? `, ${formalName}!` : "!";

  // for year, month and day in curent age
  let sDay = newAge[2] > 1 ? "days" : "day";
  let sMonth = newAge[1] > 1 ? "months" : "month";
  let sYear = newAge[0] > 1 ? "years" : "year";
  // for remaining day and month to next age
  let nextYearAge = newAge[0] + 1;
  let rDay = newAge[4] > 1 ? "days" : "day",
    rMonth = newAge[3] > 1 ? "months" : "month";
  let nextAge = newAge[0] > 0 ? "years" : "year";

  // check if DoB is valid.
  if (newAge.length > 1) {
    //check if the age is 0.
    if (newAge[0] === 0 && newAge[1] === 0 && newAge[2] === 0) {
      error = "Oops! You have not aged a day!";
    } else {
      // InnerText of remainders to next age
      if (newAge[1] !== 0 || newAge[2] !== 0) {
        if (newAge[3] === 0 && newAge[4] !== 0) {
          remainderText = `You have ${newAge[4]} ${rDay} left to be ${nextYearAge} ${nextAge} old.`;
        } else if (newAge[3] !== 0 && newAge[4] === 0) {
          remainderText = `You have ${newAge[3]} ${rMonth} left to be ${nextYearAge} ${nextAge} old.`;
        } else {
          remainderText = `You have ${newAge[3]} ${rMonth} and ${newAge[4]} ${rDay} left to be ${nextYearAge} ${nextAge} old.`;
        }
      }

      // check if the current date is equivalent to the DoB
      if (newAge[2] === 0 && newAge[1] === 0) {
        isBday = true;
        ageText = `Happy Birthday${showName}! You're ${newAge[0]} ${sYear} old.`;
      } else if (newAge[0] !== 0) {
        // filter the 0s if age year is not 0
        if (newAge[1] === 0 && newAge[2] !== 0) {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear} and ${newAge[2]} ${sDay} old.`;
        } else if (newAge[2] === 0 && newAge[1] !== 0) {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear} and ${newAge[1]} ${sMonth} old.`;
        } else {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear}, ${newAge[1]} ${sMonth} and ${newAge[2]} ${sDay} old.`;
        }
      } else {
        // filter the 0s if year is 0
        if (newAge[1] === 0 && newAge[2] !== 0) {
          ageText = `Hello${showName} You're ${newAge[2]} ${sDay} old.`;
        } else if (newAge[2] === 0 && newAge[1] !== 0) {
          ageText = `Hello${showName} You're ${newAge[1]} ${sMonth} old.`;
        } else {
          ageText = `Hello${showName} You're ${newAge[1]} ${sMonth} and ${newAge[2]} ${sDay} old.`;
        }
      }
    }
  } else {
    // DoB is invalid
    error = `${newAge[0]}`;
  }

  return { remainderText, birthDayText, ageText, error, isBday };
};

export default useDoB;
