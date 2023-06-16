import "./styles/styles.scss";

const countryName = document.getElementById("information");
const submitButton = document.getElementById("submitButton");
const searchInput = document.getElementById("search");
const autoCompleteDiv = document.querySelector(".auto-complete");
const switchDegreeText = document.getElementById("f-c-text");
const toggleCheckbox = document.getElementById("toggle1");
const feelingTemp = document.getElementById("feeling-text");

async function weather() {
  const lastUpdatedText = document.getElementById("last-updated");
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
  }
});
submitButton.addEventListener("click", () => {
  weather();
  clearSearchInput();
});

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
searchInput.addEventListener("keyup", showSearchResults);

function clearSearchInput() {
  searchInput.value = "";
  autoCompleteDiv.textContent = "";
  autoCompleteDiv.style.border = "0px";
}
