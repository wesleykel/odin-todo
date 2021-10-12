const dataToDisplay = JSON.parse(window.localStorage.getItem("Task"));
for (let j = 0; j < dataToDisplay.length; j++) {
  if (dataToDisplay[j] === `${num}`) {
    console.log([j]);
    //j--;
  }
}
