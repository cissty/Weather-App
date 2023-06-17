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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\nasync function weather() {\n  //DOM//\n  const switchDegreeText = document.getElementById(\"f-c-text\");\n  const toggleCheckbox = document.getElementById(\"toggle1\");\n  const feelingTemp = document.getElementById(\"feeling-text\");\n  const countryName = document.getElementById(\"information\");\n  const lastUpdatedText = document.getElementById(\"last-updated\");\n  //////\n  const url = `http://api.weatherapi.com/v1/current.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const country = data.location.country;\n    const city = data.location.name;\n    const tempC = data.current[\"temp_c\"];\n    lastUpdatedText.textContent = data.current[\"last_updated\"];\n    switchDegreeText.textContent = `${tempC}°C`;\n    feelingTemp.textContent = `${data.current[\"feelslike_c\"]}°C`;\n\n    // get today's date//\n    const dailyDate = document.getElementById(\"todays-date\");\n    const today = new Date();\n    const date = today.toLocaleDateString();\n    const time = today.toLocaleTimeString();\n    //\n    dailyDate.innerHTML = `Date: ${date} <br> Current Time: ${time}`;\n    toggleCheckbox.addEventListener(\"change\", () => {\n      if (toggleCheckbox.checked) {\n        switchDegreeText.textContent = `${tempC}°C`;\n        feelingTemp.textContent = `${data.current[\"feelslike_c\"]}°C`;\n      } else {\n        switchDegreeText.textContent = `${data.current[\"temp_f\"]}°F`;\n        feelingTemp.textContent = `${data.current[\"feelslike_f\"]}°F`;\n      }\n    });\n    countryName.textContent = `${city}/${country}`;\n  } catch (error) {\n    console.log(error);\n  }\n}\n//if pressed enter or to the search button\nconst submitButton = document.getElementById(\"submitButton\");\nconst searchInput = document.getElementById(\"search\");\n//dom//\n\nsearchInput.addEventListener(\"keydown\", function (event) {\n  if (event.key === \"Enter\") {\n    submitButton.click();\n    // displayMainContainer()\n  }\n});\n\nsubmitButton.addEventListener(\"click\", () => {\n  weather();\n  sevenDays();\n  clearSearchInput();\n  // displayMainContainer()\n});\n//for search\nasync function showSearchResults() {\n  const url = `http://api.weatherapi.com/v1/search.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    if (searchInput.value === \"\") {\n      clearSearchInput();\n    } else {\n      autoCompleteDiv.style.border = \"1px solid gray\";\n    }\n    let myArr = [];\n    let displayCompletedText = \"\";\n    data.forEach(element => {\n      myArr.push(element.name);\n    });\n    myArr.forEach(splitNewLine);\n    autoCompleteDiv.innerHTML = displayCompletedText;\n    function splitNewLine(value) {\n      displayCompletedText += value + \"<br>\";\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}\n//listening each keyword on search input.//\nconst autoCompleteDiv = document.querySelector(\".auto-complete\");\nsearchInput.addEventListener(\"keyup\", showSearchResults);\nfunction clearSearchInput() {\n  searchInput.value = \"\";\n  autoCompleteDiv.textContent = \"\";\n  autoCompleteDiv.style.border = \"0px\";\n}\n\n//main container\nfunction displayMainContainer() {\n  const mainContainer = document.querySelector(\".container\");\n  mainContainer.classList.add(\"show\");\n}\n//\nconst sevenDaysButton = document.querySelector(\".sevenDaysButton\");\nconst informationContainer = document.querySelector(\".inf-container\");\nsevenDaysButton.addEventListener(\"click\", function () {\n  informationContainer.style.display = \"none\";\n});\nasync function sevenDays() {\n  const url = `http://api.weatherapi.com/v1/forecast.json?key=20307156973249f08ae23813231506&q=${searchInput.value}&days=7&aqi=no&alerts=no`;\n  const response = await fetch(url);\n  const data = await response.json();\n  const forecast = data.forecast.forecastday;\n  console.log(forecast);\n  console.log(forecast[0].date); //today\n  console.log(forecast[1].date); // tomorrow\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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