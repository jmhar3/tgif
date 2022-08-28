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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeather\": function() { return /* binding */ useWeather; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useGeolocation */ \"./src/public/hooks/api/useGeolocation.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar useWeather = function() {\n    var currentLocation = (0,_useGeolocation__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)().currentLocation;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentWeather = ref[0], setCurrentWeather = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), weatherForecast = ref1[0], setWeatherForecast = ref1[1];\n    var fetchCurrentWeather = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(currentLocation && process.env.WEATHER_API_KEY)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setCurrentWeather(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    var fetchWeatherForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!currentLocation) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setWeatherForecast(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchCurrentWeather();\n        fetchWeatherForecast();\n    }, [\n        fetchCurrentWeather,\n        fetchWeatherForecast\n    ]);\n    var isDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var sunrise = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunrise;\n            var sunset = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunset;\n            var currentTime = Math.round(Date.now() / 1000);\n            return !!(currentTime > sunrise && currentTime < sunset);\n        }\n    }, [\n        weatherForecast\n    ]);\n    return {\n        currentWeather: currentWeather,\n        weatherForecast: weatherForecast,\n        isDay: isDay\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWM7UUFBRUUsZUFBZSxFQUFmQSxlQUFlO1FBQUVjLEtBQUssRUFBTEEsS0FBSztLQUFFLENBQUM7Q0FDbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcHVibGljL2hvb2tzL2FwaS91c2VXZWF0aGVyLnRzPzk2NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tIFwiLi91c2VHZW9sb2NhdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRXZWF0aGVyIHtcbiAgd2luZDoge1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgZGVnOiBudW1iZXI7XG4gIH07XG4gIG1haW46IHtcbiAgICBmZWVsc19saWtlOiBudW1iZXI7XG4gICAgaHVtaWRpdHk6IG51bWJlcjtcbiAgICB0ZW1wOiBudW1iZXI7XG4gICAgdGVtcF9tYXg6IG51bWJlcjtcbiAgICB0ZW1wX21pbjogbnVtYmVyO1xuICB9O1xuICB3ZWF0aGVyOiB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBtYWluOiBzdHJpbmc7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JlY2FzdCB7XG4gIGR0X3R4dDogc3RyaW5nO1xuICBtYWluOiB7XG4gICAgZmVlbHNfbGlrZTogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBudW1iZXI7XG4gICAgdGVtcDogbnVtYmVyO1xuICAgIHRlbXBfbWF4OiBudW1iZXI7XG4gICAgdGVtcF9taW46IG51bWJlcjtcbiAgfTtcbiAgcmFpbjoge1xuICAgIFwiM2hcIjogbnVtYmVyO1xuICB9O1xuICB3ZWF0aGVyOiB7XG4gICAgbWFpbjogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIH1bXTtcbiAgd2luZDoge1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgZGVnOiBudW1iZXI7XG4gICAgZ3VzdDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdCB7XG4gIGNpdHk6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc3VucmlzZTogbnVtYmVyO1xuICAgIHN1bnNldDogbnVtYmVyO1xuICB9O1xuICBsaXN0OiBGb3JlY2FzdFtdO1xufVxuXG5leHBvcnQgY29uc3QgdXNlV2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgeyBjdXJyZW50TG9jYXRpb24gfSA9IHVzZUdlb2xvY2F0aW9uKCk7XG5cbiAgY29uc3QgW2N1cnJlbnRXZWF0aGVyLCBzZXRDdXJyZW50V2VhdGhlcl0gPSB1c2VTdGF0ZTxDdXJyZW50V2VhdGhlcj4oKTtcbiAgY29uc3QgW3dlYXRoZXJGb3JlY2FzdCwgc2V0V2VhdGhlckZvcmVjYXN0XSA9IHVzZVN0YXRlPFdlYXRoZXJGb3JlY2FzdD4oKTtcblxuICBjb25zdCBmZXRjaEN1cnJlbnRXZWF0aGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjdXJyZW50TG9jYXRpb24gJiYgcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y3VycmVudExvY2F0aW9uLmxhdGl0dWRlfSZsb249JHtjdXJyZW50TG9jYXRpb24ubG9uZ2l0dWRlfSZhcHBpZD01NmRlOWU5NGE5ZmZjZjMyNmRlMTVhNTRlMzE4NmNkOSZ1bml0cz1tZXRyaWNgXG4gICAgICAgICk7XG4gICAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2N1cnJlbnRMb2NhdGlvbiwgcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZXSk7XG5cbiAgY29uc3QgZmV0Y2hXZWF0aGVyRm9yZWNhc3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtjdXJyZW50TG9jYXRpb24ubGF0aXR1ZGV9Jmxvbj0ke2N1cnJlbnRMb2NhdGlvbi5sb25naXR1ZGV9JmFwcGlkPTU2ZGU5ZTk0YTlmZmNmMzI2ZGUxNWE1NGUzMTg2Y2Q5JnVuaXRzPW1ldHJpY2BcbiAgICAgICAgKTtcbiAgICAgICAgc2V0V2VhdGhlckZvcmVjYXN0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2N1cnJlbnRMb2NhdGlvbiwgcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEN1cnJlbnRXZWF0aGVyKCk7XG4gICAgZmV0Y2hXZWF0aGVyRm9yZWNhc3QoKTtcbiAgfSwgW2ZldGNoQ3VycmVudFdlYXRoZXIsIGZldGNoV2VhdGhlckZvcmVjYXN0XSk7XG5cbiAgY29uc3QgaXNEYXkgPSB1c2VNZW1vPGJvb2xlYW4gfCB1bmRlZmluZWQ+KCgpID0+IHtcbiAgIGlmICh3ZWF0aGVyRm9yZWNhc3QpIHtcbiAgICBjb25zdCBzdW5yaXNlID0gd2VhdGhlckZvcmVjYXN0Py5jaXR5LnN1bnJpc2VcbiAgICBjb25zdCBzdW5zZXQgPSB3ZWF0aGVyRm9yZWNhc3Q/LmNpdHkuc3Vuc2V0XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLnJvdW5kKERhdGUubm93KCkvMTAwMClcbiAgICByZXR1cm4gISEoY3VycmVudFRpbWUgPiBzdW5yaXNlICYmIGN1cnJlbnRUaW1lIDwgc3Vuc2V0KVxuICAgfVxuICB9LCBbd2VhdGhlckZvcmVjYXN0XSlcblxuICByZXR1cm4geyBjdXJyZW50V2VhdGhlciwgd2VhdGhlckZvcmVjYXN0LCBpc0RheSB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsImF4aW9zIiwidXNlR2VvbG9jYXRpb24iLCJ1c2VXZWF0aGVyIiwiY3VycmVudExvY2F0aW9uIiwiY3VycmVudFdlYXRoZXIiLCJzZXRDdXJyZW50V2VhdGhlciIsIndlYXRoZXJGb3JlY2FzdCIsInNldFdlYXRoZXJGb3JlY2FzdCIsImZldGNoQ3VycmVudFdlYXRoZXIiLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJXRUFUSEVSX0FQSV9LRVkiLCJnZXQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hXZWF0aGVyRm9yZWNhc3QiLCJpc0RheSIsInN1bnJpc2UiLCJjaXR5Iiwic3Vuc2V0IiwiY3VycmVudFRpbWUiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/public/hooks/api/useWeather.ts\n"));

/***/ })

});