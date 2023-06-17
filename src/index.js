import "./styles/styles.scss";
async function weather() {
  //DOM//
  const switchDegreeText = document.getElementById("f-c-text");
  const toggleCheckbox = document.getElementById("toggle1");
  const feelingTemp = document.getElementById("feeling-text");
  const countryName = document.getElementById("information");
  const lastUpdatedText = document.getElementById("last-updated");
  //////
  const url = `http://api.weatherapi.com/v1/current.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const country = data.location.country;
    const city = data.location.name;
    const tempC = data.current["temp_c"];
    lastUpdatedText.textContent = data.current["last_updated"];
    switchDegreeText.textContent = `${tempC}°C`;
    feelingTemp.textContent = `${data.current["feelslike_c"]}°C`;

    // get today's date//
    const dailyDate = document.getElementById("todays-date");
    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();
    //
    dailyDate.innerHTML = `Date: ${date} <br> Current Time: ${time}`;
    toggleCheckbox.addEventListener("change", () => {
      if (toggleCheckbox.checked) {
        switchDegreeText.textContent = `${tempC}°C`;
        feelingTemp.textContent = `${data.current["feelslike_c"]}°C`;
      } else {
        switchDegreeText.textContent = `${data.current["temp_f"]}°F`;
        feelingTemp.textContent = `${data.current["feelslike_f"]}°F`;
      }
    });
    countryName.textContent = `${city}/${country}`;
  } catch (error) {
    console.log(error);
  }
}
//if pressed enter or to the search button
const submitButton = document.getElementById("submitButton");
const searchInput = document.getElementById("search");
//dom//

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
    // displayMainContainer()
  }
});
submitButton.addEventListener("click", () => {
  weather();
  sevenDays()
  clearSearchInput();
  // displayMainContainer()
});
//for search
async function showSearchResults() {
  const url = `http://api.weatherapi.com/v1/search.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;

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
  const mainContainer = document.querySelector(".container");
  mainContainer.classList.add("show");
}
//
const sevenDaysButton = document.querySelector(".sevenDaysButton");
const informationContainer = document.querySelector(".inf-container");
sevenDaysButton.addEventListener("click", function () {
  informationContainer.style.display = "none";
});

async function sevenDays(){
 
  const url = `http://api.weatherapi.com/v1/forecast.json?key=20307156973249f08ae23813231506&q=${searchInput.value}&days=7&aqi=no&alerts=no`;


  const response = await fetch(url)
  const data = await response.json()
  const forecast = data.forecast.forecastday
  console.log(forecast)
  console.log(forecast[0].date) //today
  console.log(forecast[1].date) // tomorrow
}

