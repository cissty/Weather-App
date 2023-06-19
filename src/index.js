import "./styles/styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundMusic");
  const toggleButton = document.getElementById("toggleButton");
  const volumeSlider = document.getElementById("volumeSlider");
  let isPlaying = true;

  toggleButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  });
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
});
async function weather() {
  //DOM//
  const switchDegreeText = document.getElementById("f-c-text");
  const toggleCheckbox = document.getElementById("toggle1");
  const feelingTemp = document.getElementById("feeling-text");
  const countryName = document.getElementById("information");
  const lastUpdatedText = document.getElementById("last-updated");
  const dailyImage = document.querySelector(".daily-img");
  //////
  const url = `https://api.weatherapi.com/v1/forecast.json?key=20307156973249f08ae23813231506&q=${searchInput.value}&days=7&aqi=no&alerts=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const country = data.location.country;
    const city = data.location.name;
    const tempC = data.current["temp_c"];
    lastUpdatedText.textContent = data.current["last_updated"];
    switchDegreeText.textContent = `${tempC}°C`;
    feelingTemp.textContent = `${data.current["feelslike_c"]}°C`;

    // first page conditional image
    dailyImage.innerHTML = "";
    const img = document.createElement("img");
    img.src = "https:" + data.current.condition.icon;
    dailyImage.appendChild(img);

    updateTimer();
    setInterval(updateTimer, 1000);

    countryName.textContent = `${city}/${country}`;

    toggleCheckbox.addEventListener("change", () => {
      if (toggleCheckbox.checked) {
        switchDegreeText.textContent = `${tempC}°C`;
        feelingTemp.textContent = `${data.current["feelslike_c"]}°C`;
        for (let i = 0; i < 7; i++) {
          checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempC[i], "°C");
          checkBoxOnChangeForLoop(minTempsInDom[i], minTempC[i], "°C");
          checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempC[i], "°C");
        }
      } else {
        switchDegreeText.textContent = `${data.current["temp_f"]}°F`;
        feelingTemp.textContent = `${data.current["feelslike_f"]}°F`;
        for (let i = 0; i < 7; i++) {
          checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempF[i], "°F");
          checkBoxOnChangeForLoop(minTempsInDom[i], minTempF[i], "°F");
          checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempF[i], "°F");
        }
      }
    });

    //7days//
    const forecastDay = data.forecast.forecastday;
    //get avgTemps and store them in an array
    const avgTempC = [];
    const avgTempF = [];
    const weatherConditions = [];
    const weatherConditionsIcons = [];
    const minTempC = [];
    const minTempF = [];
    const maxTempC = [];
    const maxTempF = [];

    forecastDay.forEach((index) => {
      avgTempC.push(index.day.avgtemp_c);
      avgTempF.push(index.day.avgtemp_f);
      weatherConditions.push(index.day.condition.text);
      weatherConditionsIcons.push(index.day.condition.icon);
      minTempC.push(index.day.mintemp_c);
      minTempF.push(index.day.mintemp_f);
      maxTempC.push(index.day.maxtemp_c);
      maxTempF.push(index.day.maxtemp_f);
    });

    const avgTempTextsInDom = [...document.querySelectorAll(".f-c-texts")];
    const conditionInDom = [...document.querySelectorAll("h5")];
    const minTempsInDom = [...document.querySelectorAll(".min-temp")];
    const maxTempsInDom = [...document.querySelectorAll(".max-temp")];
    const imagesInDom = [...document.querySelectorAll(".img")];

    imagesInDom.forEach((el) => {
      el.innerHTML = "";
    });

    for (let i = 0; i < 7; i++) {
      checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempC[i], "°C");
      checkBoxOnChangeForLoop(minTempsInDom[i], minTempC[i], "°C");
      conditionInDom[i].textContent = weatherConditions[i];
      checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempC[i], "°C");

      const img = document.createElement("img");
      img.src = "https:" + weatherConditionsIcons[i];
      imagesInDom[i].appendChild(img);
    }
  } catch (error) {
    console.log(error);
  }
}
//if pressed enter or to the search button
const submitButton = document.getElementById("submitButton");
const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
    displayMainContainer();
  }
});
submitButton.addEventListener("click", () => {
  weather();
  clearSearchInput();
  displayMainContainer();
});
//for search
async function showSearchResults() {
  const url = `https://api.weatherapi.com/v1/search.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (searchInput.value === "") {
      clearSearchInput();
    } else {
      autoCompleteDiv.style.border = "1px solid gray";
    }
    let myArr = [];
    let displayCompletedText = "";

    data.forEach((element) => {
      myArr.push(element.name);
    });

    myArr.forEach(splitNewLine);
    autoCompleteDiv.innerHTML = displayCompletedText;

    function splitNewLine(value) {
      displayCompletedText += value + "<br>";
    }
  } catch (error) {
    console.log(error);
  }
}
//listening each keyword on search input.//
const autoCompleteDiv = document.querySelector(".auto-complete");
searchInput.addEventListener("keyup", showSearchResults);

function clearSearchInput() {
  searchInput.value = "";
  autoCompleteDiv.textContent = "";
  autoCompleteDiv.style.border = "0px";
}

//main container
function displayMainContainer() {
  const mainContainer = document.querySelector("main");
  mainContainer.classList.add("show");
}
//
const sevenDaysButton = document.querySelector(".sevenDaysButton");
const informationContainer = document.querySelector(".inf-container");
const daysSection = document.querySelector("section");

sevenDaysButton.addEventListener("click", function () {
  if (sevenDaysButton.textContent === "See 7 days") {
    sevenDaysButton.textContent = "See current Day";
    informationContainer.style.display = "none";
    daysSection.style.display = "grid";
  } else if (sevenDaysButton.textContent === "See current Day") {
    sevenDaysButton.textContent = "See 7 days";
    daysSection.style.display = "none";
    informationContainer.style.display = "flex";
  }
});

//get days//
function getDays(date) {
  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      })
    );
    date.setDate(date.getDate() + 1);
  }
  return daysOfWeek;
}

//push the days inside dom//
function main() {
  const domDays = [...document.querySelectorAll(".days")];
  const date = new Date();
  const daysOfWeek = getDays(date);

  for (let i = 1; i < daysOfWeek.length; i++) {
    domDays[i].textContent = daysOfWeek[i];
  }

  //today
  setAtt(domDays[0], daysOfWeek[0], "Today");
  //tomorrow
  setAtt(domDays[1], daysOfWeek[1], "Tomorrow");

  function setAtt(day, el, index) {
    day.setAttribute("style", "text-align: center;");
    day.innerHTML = `<span>${el}</span><br><span class="current-day">(${index})</span>`;
  }
}
main();

function checkBoxOnChangeForLoop(array, array2, cf) {
  array.textContent = `${array2}${cf}`;
}

function updateTimer() {
  const currentTime = new Date();
  // Update the date and time element
  const dailyDate = document.getElementById("todays-date");
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleTimeString();
  dailyDate.innerHTML = `Date: ${date} <br> Current Time: ${time}`;
}
