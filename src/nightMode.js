export function showMoon() {
  const moonIcon = document.getElementById("moon");
  const sunIcon = document.getElementById("hide-moon-or-sun-icon");
  const body = document.querySelector("body");
  console.log(body);
  if (moonIcon.id === "moon") {
    moonIcon.id = "hide-moon-or-sun-icon";
    sunIcon.id = "sun";
    body.id = "night-body";
  }
}

export function showSun() {
  const moonIcon = document.getElementById("hide-moon-or-sun-icon");
  const sunIcon = document.getElementById("sun");
  const body = document.querySelector("body");
  if (sunIcon.id === "sun") {
    moonIcon.id = "moon";
    sunIcon.id = "hide-moon-or-sun-icon";
    body.id = "day-body";
  }
}
