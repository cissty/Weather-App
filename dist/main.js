/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const audio = document.getElementById(\"backgroundMusic\");\n  const toggleButton = document.getElementById(\"toggleButton\");\n  const volumeSlider = document.getElementById(\"volumeSlider\");\n  let isPlaying = true;\n  toggleButton.addEventListener(\"click\", () => {\n    if (audio.paused) {\n      audio.play();\n      isPlaying = true;\n    } else {\n      audio.pause();\n      isPlaying = false;\n    }\n  });\n  volumeSlider.addEventListener(\"input\", () => {\n    audio.volume = volumeSlider.value;\n  });\n});\nasync function weather() {\n  //DOM//\n  const switchDegreeText = document.getElementById(\"f-c-text\");\n  const toggleCheckbox = document.getElementById(\"toggle1\");\n  const feelingTemp = document.getElementById(\"feeling-text\");\n  const countryName = document.getElementById(\"information\");\n  const lastUpdatedText = document.getElementById(\"last-updated\");\n  const dailyImage = document.querySelector(\".daily-img\");\n  //////\n  const url = `https://api.weatherapi.com/v1/forecast.json?key=20307156973249f08ae23813231506&q=${searchInput.value}&days=7&aqi=no&alerts=no`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const country = data.location.country;\n    const city = data.location.name;\n    const tempC = data.current[\"temp_c\"];\n    lastUpdatedText.textContent = data.current[\"last_updated\"];\n    switchDegreeText.textContent = `${tempC}°C`;\n    feelingTemp.textContent = `${data.current[\"feelslike_c\"]}°C`;\n\n    // first page conditional image\n    dailyImage.innerHTML = \"\";\n    const img = document.createElement(\"img\");\n    img.src = \"https:\" + data.current.condition.icon;\n    dailyImage.appendChild(img);\n    updateTimer();\n    setInterval(updateTimer, 1000);\n    countryName.textContent = `${city}/${country}`;\n    toggleCheckbox.addEventListener(\"change\", () => {\n      if (toggleCheckbox.checked) {\n        switchDegreeText.textContent = `${tempC}°C`;\n        feelingTemp.textContent = `${data.current[\"feelslike_c\"]}°C`;\n        for (let i = 0; i < 7; i++) {\n          checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempC[i], \"°C\");\n          checkBoxOnChangeForLoop(minTempsInDom[i], minTempC[i], \"°C\");\n          checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempC[i], \"°C\");\n        }\n      } else {\n        switchDegreeText.textContent = `${data.current[\"temp_f\"]}°F`;\n        feelingTemp.textContent = `${data.current[\"feelslike_f\"]}°F`;\n        for (let i = 0; i < 7; i++) {\n          checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempF[i], \"°F\");\n          checkBoxOnChangeForLoop(minTempsInDom[i], minTempF[i], \"°F\");\n          checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempF[i], \"°F\");\n        }\n      }\n    });\n\n    //7days//\n    const forecastDay = data.forecast.forecastday;\n    //get avgTemps and store them in an array\n    const avgTempC = [];\n    const avgTempF = [];\n    const weatherConditions = [];\n    const weatherConditionsIcons = [];\n    const minTempC = [];\n    const minTempF = [];\n    const maxTempC = [];\n    const maxTempF = [];\n    forecastDay.forEach(index => {\n      avgTempC.push(index.day.avgtemp_c);\n      avgTempF.push(index.day.avgtemp_f);\n      weatherConditions.push(index.day.condition.text);\n      weatherConditionsIcons.push(index.day.condition.icon);\n      minTempC.push(index.day.mintemp_c);\n      minTempF.push(index.day.mintemp_f);\n      maxTempC.push(index.day.maxtemp_c);\n      maxTempF.push(index.day.maxtemp_f);\n    });\n    const avgTempTextsInDom = [...document.querySelectorAll(\".f-c-texts\")];\n    const conditionInDom = [...document.querySelectorAll(\"h5\")];\n    const minTempsInDom = [...document.querySelectorAll(\".min-temp\")];\n    const maxTempsInDom = [...document.querySelectorAll(\".max-temp\")];\n    const imagesInDom = [...document.querySelectorAll(\".img\")];\n    imagesInDom.forEach(el => {\n      el.innerHTML = \"\";\n    });\n    for (let i = 0; i < 7; i++) {\n      checkBoxOnChangeForLoop(avgTempTextsInDom[i], avgTempC[i], \"°C\");\n      checkBoxOnChangeForLoop(minTempsInDom[i], minTempC[i], \"°C\");\n      conditionInDom[i].textContent = weatherConditions[i];\n      checkBoxOnChangeForLoop(maxTempsInDom[i], maxTempC[i], \"°C\");\n      const img = document.createElement(\"img\");\n      img.src = \"https:\" + weatherConditionsIcons[i];\n      imagesInDom[i].appendChild(img);\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}\n//if pressed enter or to the search button\nconst submitButton = document.getElementById(\"submitButton\");\nconst searchInput = document.getElementById(\"search\");\nsearchInput.addEventListener(\"keydown\", function (event) {\n  if (event.key === \"Enter\") {\n    submitButton.click();\n    displayMainContainer();\n  }\n});\nsubmitButton.addEventListener(\"click\", () => {\n  weather();\n  clearSearchInput();\n  displayMainContainer();\n});\n//for search\nasync function showSearchResults() {\n  const url = `https://api.weatherapi.com/v1/search.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    if (searchInput.value === \"\") {\n      clearSearchInput();\n    } else {\n      autoCompleteDiv.style.border = \"1px solid gray\";\n    }\n    let myArr = [];\n    let displayCompletedText = \"\";\n    data.forEach(element => {\n      myArr.push(element.name);\n    });\n    myArr.forEach(splitNewLine);\n    autoCompleteDiv.innerHTML = displayCompletedText;\n    function splitNewLine(value) {\n      displayCompletedText += value + \"<br>\";\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}\n//listening each keyword on search input.//\nconst autoCompleteDiv = document.querySelector(\".auto-complete\");\nsearchInput.addEventListener(\"keyup\", showSearchResults);\nfunction clearSearchInput() {\n  searchInput.value = \"\";\n  autoCompleteDiv.textContent = \"\";\n  autoCompleteDiv.style.border = \"0px\";\n}\n\n//main container\nfunction displayMainContainer() {\n  const mainContainer = document.querySelector(\"main\");\n  mainContainer.classList.add(\"show\");\n}\n//\nconst sevenDaysButton = document.querySelector(\".sevenDaysButton\");\nconst informationContainer = document.querySelector(\".inf-container\");\nconst daysSection = document.querySelector(\"section\");\nsevenDaysButton.addEventListener(\"click\", function () {\n  if (sevenDaysButton.textContent === \"See 7 days\") {\n    sevenDaysButton.textContent = \"See current Day\";\n    informationContainer.style.display = \"none\";\n    daysSection.style.display = \"grid\";\n  } else if (sevenDaysButton.textContent === \"See current Day\") {\n    sevenDaysButton.textContent = \"See 7 days\";\n    daysSection.style.display = \"none\";\n    informationContainer.style.display = \"flex\";\n  }\n});\n\n//get days//\nfunction getDays(date) {\n  const daysOfWeek = [];\n  for (let i = 0; i < 7; i++) {\n    daysOfWeek.push(date.toLocaleDateString(\"en-US\", {\n      weekday: \"long\",\n      month: \"short\",\n      day: \"numeric\"\n    }));\n    date.setDate(date.getDate() + 1);\n  }\n  return daysOfWeek;\n}\n\n//push the days inside dom//\nfunction main() {\n  const domDays = [...document.querySelectorAll(\".days\")];\n  const date = new Date();\n  const daysOfWeek = getDays(date);\n  for (let i = 1; i < daysOfWeek.length; i++) {\n    domDays[i].textContent = daysOfWeek[i];\n  }\n\n  //today\n  setAtt(domDays[0], daysOfWeek[0], \"Today\");\n  //tomorrow\n  setAtt(domDays[1], daysOfWeek[1], \"Tomorrow\");\n  function setAtt(day, el, index) {\n    day.setAttribute(\"style\", \"text-align: center;\");\n    day.innerHTML = `<span>${el}</span><br><span class=\"current-day\">(${index})</span>`;\n  }\n}\nmain();\nfunction checkBoxOnChangeForLoop(array, array2, cf) {\n  array.textContent = `${array2}${cf}`;\n}\nfunction updateTimer() {\n  const currentTime = new Date();\n  // Update the date and time element\n  const dailyDate = document.getElementById(\"todays-date\");\n  const date = currentTime.toLocaleDateString();\n  const time = currentTime.toLocaleTimeString();\n  dailyDate.innerHTML = `Date: ${date} <br> Current Time: ${time}`;\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;