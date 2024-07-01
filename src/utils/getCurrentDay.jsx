const theDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function getDayName() {
  const date = new Date();
  const day = date.getDay();
  return theDays[day];
}

// const currentDay = getDayName();
// console.log(currentDay); 