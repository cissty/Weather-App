/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");\n\nconst p = document.getElementById("information");\nconst submitButton = document.getElementById("submitButton");\nconst searchInput = document.getElementById("search");\nasync function weather() {\n  const url = `http://api.weatherapi.com/v1/current.json?key=20307156973249f08ae23813231506&q=${searchInput.value}`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const country = data.location.country;\n    const city = data.location.name;\n    const tempC = data.current["temp_c"];\n    const tempF = data.current["temp_f"];\n    const lastUpdated = data.current["last_updated"];\n    p.textContent = `${city}/${country} ${tempC}°C ${tempF}F last updated ${lastUpdated}`;\n    console.log(data);\n  } catch (error) {\n    console.log(error);\n  }\n}\nsearchInput.addEventListener(\'keydown\', function (event) {\n  if (event.key === \'Enter\') {\n    submitButton.click();\n  }\n});\nsubmitButton.addEventListener("click", weather);\nasync function showSearchResults() {\n  const autoCompleteDiv = document.querySelector(\'.auto-complete\');\n  const url = `http://api.weatherapi.com/v1/search.json?key=20307156973249f08ae23813231506&q=ceno`;\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log(error);\n  }\n}\nfunction listenToWords() {\n  console.log(searchInput.value);\n}\nsearchInput.addEventListener(\'onkeyup\', listenToWords);\n\n//# sourceURL=webpack://weather-app/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/styles/styles.scss":
      /*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.scss?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
