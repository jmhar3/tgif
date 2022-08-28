"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/public/hooks/api/useWeather.ts":
/*!********************************************!*\
  !*** ./src/public/hooks/api/useWeather.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeather\": function() { return /* binding */ useWeather; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useGeolocation */ \"./src/public/hooks/api/useGeolocation.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar useWeather = function() {\n    var currentLocation = (0,_useGeolocation__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)().currentLocation;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentWeather = ref[0], setCurrentWeather = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), weatherForecast = ref1[0], setWeatherForecast = ref1[1];\n    var fetchCurrentWeather = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(currentLocation && process.env.WEATHER_API_KEY)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setCurrentWeather(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    var fetchWeatherForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!currentLocation) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setWeatherForecast(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchCurrentWeather();\n        fetchWeatherForecast();\n    }, [\n        fetchCurrentWeather,\n        fetchWeatherForecast\n    ]);\n    var isDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var sunrise = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunrise;\n            var sunset = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunset;\n            var currentTime = Math.round(Date.now() / 1000);\n            console.log(\"sunrise\", sunrise);\n            console.log(\"sunset\", sunset);\n            console.log(\"currentTime\", Math.round(currentTime / 1000));\n            if (currentTime > sunrise && currentTime < sunset) {\n                return true;\n            } else {\n                false;\n            }\n        }\n    }, [\n        weatherForecast\n    ]);\n    console.log(isDay);\n    return {\n        currentWeather: currentWeather,\n        weatherForecast: weatherForecast,\n        isDay: isDay\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsV0FBVyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hELElBQUlBLFdBQVcsR0FBR0gsT0FBTyxJQUFJRyxXQUFXLEdBQUdELE1BQU0sRUFBRTtnQkFDbEQsT0FBTyxJQUFJO2FBQ1gsTUFBTTtnQkFDTixLQUFLO2FBQ0w7U0FDRDtLQUNELEVBQUU7UUFBQ2pCLGVBQWU7S0FBQyxDQUFDO0lBRXJCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDO0lBRWxCLE9BQU87UUFBRWhCLGNBQWMsRUFBZEEsY0FBYztRQUFFRSxlQUFlLEVBQWZBLGVBQWU7UUFBRWMsS0FBSyxFQUFMQSxLQUFLO0tBQUUsQ0FBQztDQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvaG9va3MvYXBpL3VzZVdlYXRoZXIudHM/OTY2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gXCIuL3VzZUdlb2xvY2F0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudFdlYXRoZXIge1xuICB3aW5kOiB7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBkZWc6IG51bWJlcjtcbiAgfTtcbiAgbWFpbjoge1xuICAgIGZlZWxzX2xpa2U6IG51bWJlcjtcbiAgICBodW1pZGl0eTogbnVtYmVyO1xuICAgIHRlbXA6IG51bWJlcjtcbiAgICB0ZW1wX21heDogbnVtYmVyO1xuICAgIHRlbXBfbWluOiBudW1iZXI7XG4gIH07XG4gIHdlYXRoZXI6IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIG1haW46IHN0cmluZztcbiAgfVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcmVjYXN0IHtcbiAgZHRfdHh0OiBzdHJpbmc7XG4gIG1haW46IHtcbiAgICBmZWVsc19saWtlOiBudW1iZXI7XG4gICAgaHVtaWRpdHk6IG51bWJlcjtcbiAgICB0ZW1wOiBudW1iZXI7XG4gICAgdGVtcF9tYXg6IG51bWJlcjtcbiAgICB0ZW1wX21pbjogbnVtYmVyO1xuICB9O1xuICByYWluOiB7XG4gICAgXCIzaFwiOiBudW1iZXI7XG4gIH07XG4gIHdlYXRoZXI6IHtcbiAgICBtYWluOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfVtdO1xuICB3aW5kOiB7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBkZWc6IG51bWJlcjtcbiAgICBndXN0OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgY2l0eToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdW5yaXNlOiBudW1iZXI7XG4gICAgc3Vuc2V0OiBudW1iZXI7XG4gIH07XG4gIGxpc3Q6IEZvcmVjYXN0W107XG59XG5cbmV4cG9ydCBjb25zdCB1c2VXZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRMb2NhdGlvbiB9ID0gdXNlR2VvbG9jYXRpb24oKTtcblxuICBjb25zdCBbY3VycmVudFdlYXRoZXIsIHNldEN1cnJlbnRXZWF0aGVyXSA9IHVzZVN0YXRlPEN1cnJlbnRXZWF0aGVyPigpO1xuICBjb25zdCBbd2VhdGhlckZvcmVjYXN0LCBzZXRXZWF0aGVyRm9yZWNhc3RdID0gdXNlU3RhdGU8V2VhdGhlckZvcmVjYXN0PigpO1xuXG4gIGNvbnN0IGZldGNoQ3VycmVudFdlYXRoZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbiAmJiBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjdXJyZW50TG9jYXRpb24ubGF0aXR1ZGV9Jmxvbj0ke2N1cnJlbnRMb2NhdGlvbi5sb25naXR1ZGV9JmFwcGlkPTU2ZGU5ZTk0YTlmZmNmMzI2ZGUxNWE1NGUzMTg2Y2Q5JnVuaXRzPW1ldHJpY2BcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q3VycmVudFdlYXRoZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VycmVudExvY2F0aW9uLCBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVldKTtcblxuICBjb25zdCBmZXRjaFdlYXRoZXJGb3JlY2FzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2N1cnJlbnRMb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7Y3VycmVudExvY2F0aW9uLmxvbmdpdHVkZX0mYXBwaWQ9NTZkZTllOTRhOWZmY2YzMjZkZTE1YTU0ZTMxODZjZDkmdW5pdHM9bWV0cmljYFxuICAgICAgICApO1xuICAgICAgICBzZXRXZWF0aGVyRm9yZWNhc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VycmVudExvY2F0aW9uLCBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ3VycmVudFdlYXRoZXIoKTtcbiAgICBmZXRjaFdlYXRoZXJGb3JlY2FzdCgpO1xuICB9LCBbZmV0Y2hDdXJyZW50V2VhdGhlciwgZmV0Y2hXZWF0aGVyRm9yZWNhc3RdKTtcblxuICBjb25zdCBpc0RheSA9IHVzZU1lbW88Ym9vbGVhbiB8IHVuZGVmaW5lZD4oKCkgPT4ge1xuICAgaWYgKHdlYXRoZXJGb3JlY2FzdCkge1xuICAgIGNvbnN0IHN1bnJpc2UgPSB3ZWF0aGVyRm9yZWNhc3Q/LmNpdHkuc3VucmlzZVxuICAgIGNvbnN0IHN1bnNldCA9IHdlYXRoZXJGb3JlY2FzdD8uY2l0eS5zdW5zZXRcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKS8xMDAwKVxuIFxuICAgIGNvbnNvbGUubG9nKFwic3VucmlzZVwiLCBzdW5yaXNlKVxuICAgIGNvbnNvbGUubG9nKFwic3Vuc2V0XCIsIHN1bnNldClcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRUaW1lXCIsIE1hdGgucm91bmQoY3VycmVudFRpbWUvMTAwMCkpXG4gICAgaWYgKGN1cnJlbnRUaW1lID4gc3VucmlzZSAmJiBjdXJyZW50VGltZSA8IHN1bnNldCkge1xuICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgIGZhbHNlXG4gICAgfVxuICAgfVxuICB9LCBbd2VhdGhlckZvcmVjYXN0XSlcblxuICBjb25zb2xlLmxvZyhpc0RheSlcblxuICByZXR1cm4geyBjdXJyZW50V2VhdGhlciwgd2VhdGhlckZvcmVjYXN0LCBpc0RheSB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsImF4aW9zIiwidXNlR2VvbG9jYXRpb24iLCJ1c2VXZWF0aGVyIiwiY3VycmVudExvY2F0aW9uIiwiY3VycmVudFdlYXRoZXIiLCJzZXRDdXJyZW50V2VhdGhlciIsIndlYXRoZXJGb3JlY2FzdCIsInNldFdlYXRoZXJGb3JlY2FzdCIsImZldGNoQ3VycmVudFdlYXRoZXIiLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJXRUFUSEVSX0FQSV9LRVkiLCJnZXQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hXZWF0aGVyRm9yZWNhc3QiLCJpc0RheSIsInN1bnJpc2UiLCJjaXR5Iiwic3Vuc2V0IiwiY3VycmVudFRpbWUiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/public/hooks/api/useWeather.ts\n"));

/***/ })

});