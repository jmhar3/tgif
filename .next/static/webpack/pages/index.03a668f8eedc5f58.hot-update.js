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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeather\": function() { return /* binding */ useWeather; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useGeolocation */ \"./src/public/hooks/api/useGeolocation.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar useWeather = function() {\n    var currentLocation = (0,_useGeolocation__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)().currentLocation;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentWeather = ref[0], setCurrentWeather = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), weatherForecast = ref1[0], setWeatherForecast = ref1[1];\n    var fetchCurrentWeather = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(currentLocation && process.env.WEATHER_API_KEY)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setCurrentWeather(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    var fetchWeatherForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!currentLocation) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setWeatherForecast(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchCurrentWeather();\n        fetchWeatherForecast();\n    }, [\n        fetchCurrentWeather,\n        fetchWeatherForecast\n    ]);\n    var isDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var sunrise = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunrise;\n            var sunset = weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunset;\n            var currentTime = Math.round(Date.now() / 1000);\n            console.log(currentTime > sunrise && currentTime < sunset);\n            if (currentTime > sunrise && currentTime < sunset) {\n                return true;\n            } else {\n                false;\n            }\n        }\n    }, [\n        weatherForecast\n    ]);\n    console.log(isDay);\n    return {\n        currentWeather: currentWeather,\n        weatherForecast: weatherForecast,\n        isDay: isDay\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLElBQUk7YUFDWCxNQUFNO2dCQUNOLEtBQUs7YUFDTDtTQUNEO0tBQ0QsRUFBRTtRQUFDakIsZUFBZTtLQUFDLENBQUM7SUFFckJXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUM7SUFFbEIsT0FBTztRQUFFaEIsY0FBYyxFQUFkQSxjQUFjO1FBQUVFLGVBQWUsRUFBZkEsZUFBZTtRQUFFYyxLQUFLLEVBQUxBLEtBQUs7S0FBRSxDQUFDO0NBQ25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9ob29rcy9hcGkvdXNlV2VhdGhlci50cz85NjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSBcIi4vdXNlR2VvbG9jYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50V2VhdGhlciB7XG4gIHdpbmQ6IHtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIGRlZzogbnVtYmVyO1xuICB9O1xuICBtYWluOiB7XG4gICAgZmVlbHNfbGlrZTogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBudW1iZXI7XG4gICAgdGVtcDogbnVtYmVyO1xuICAgIHRlbXBfbWF4OiBudW1iZXI7XG4gICAgdGVtcF9taW46IG51bWJlcjtcbiAgfTtcbiAgd2VhdGhlcjoge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgbWFpbjogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9yZWNhc3Qge1xuICBkdF90eHQ6IHN0cmluZztcbiAgbWFpbjoge1xuICAgIGZlZWxzX2xpa2U6IG51bWJlcjtcbiAgICBodW1pZGl0eTogbnVtYmVyO1xuICAgIHRlbXA6IG51bWJlcjtcbiAgICB0ZW1wX21heDogbnVtYmVyO1xuICAgIHRlbXBfbWluOiBudW1iZXI7XG4gIH07XG4gIHJhaW46IHtcbiAgICBcIjNoXCI6IG51bWJlcjtcbiAgfTtcbiAgd2VhdGhlcjoge1xuICAgIG1haW46IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9W107XG4gIHdpbmQ6IHtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIGRlZzogbnVtYmVyO1xuICAgIGd1c3Q6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xuICBjaXR5OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN1bnJpc2U6IG51bWJlcjtcbiAgICBzdW5zZXQ6IG51bWJlcjtcbiAgfTtcbiAgbGlzdDogRm9yZWNhc3RbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudExvY2F0aW9uIH0gPSB1c2VHZW9sb2NhdGlvbigpO1xuXG4gIGNvbnN0IFtjdXJyZW50V2VhdGhlciwgc2V0Q3VycmVudFdlYXRoZXJdID0gdXNlU3RhdGU8Q3VycmVudFdlYXRoZXI+KCk7XG4gIGNvbnN0IFt3ZWF0aGVyRm9yZWNhc3QsIHNldFdlYXRoZXJGb3JlY2FzdF0gPSB1c2VTdGF0ZTxXZWF0aGVyRm9yZWNhc3Q+KCk7XG5cbiAgY29uc3QgZmV0Y2hDdXJyZW50V2VhdGhlciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3VycmVudExvY2F0aW9uICYmIHByb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2N1cnJlbnRMb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7Y3VycmVudExvY2F0aW9uLmxvbmdpdHVkZX0mYXBwaWQ9NTZkZTllOTRhOWZmY2YzMjZkZTE1YTU0ZTMxODZjZDkmdW5pdHM9bWV0cmljYFxuICAgICAgICApO1xuICAgICAgICBzZXRDdXJyZW50V2VhdGhlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50TG9jYXRpb24sIHByb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWV0pO1xuXG4gIGNvbnN0IGZldGNoV2VhdGhlckZvcmVjYXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y3VycmVudExvY2F0aW9uLmxhdGl0dWRlfSZsb249JHtjdXJyZW50TG9jYXRpb24ubG9uZ2l0dWRlfSZhcHBpZD01NmRlOWU5NGE5ZmZjZjMyNmRlMTVhNTRlMzE4NmNkOSZ1bml0cz1tZXRyaWNgXG4gICAgICAgICk7XG4gICAgICAgIHNldFdlYXRoZXJGb3JlY2FzdChyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50TG9jYXRpb24sIHByb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDdXJyZW50V2VhdGhlcigpO1xuICAgIGZldGNoV2VhdGhlckZvcmVjYXN0KCk7XG4gIH0sIFtmZXRjaEN1cnJlbnRXZWF0aGVyLCBmZXRjaFdlYXRoZXJGb3JlY2FzdF0pO1xuXG4gIGNvbnN0IGlzRGF5ID0gdXNlTWVtbzxib29sZWFuIHwgdW5kZWZpbmVkPigoKSA9PiB7XG4gICBpZiAod2VhdGhlckZvcmVjYXN0KSB7XG4gICAgY29uc3Qgc3VucmlzZSA9IHdlYXRoZXJGb3JlY2FzdD8uY2l0eS5zdW5yaXNlXG4gICAgY29uc3Qgc3Vuc2V0ID0gd2VhdGhlckZvcmVjYXN0Py5jaXR5LnN1bnNldFxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gTWF0aC5yb3VuZChEYXRlLm5vdygpLzEwMDApXG4gXG4gICAgY29uc29sZS5sb2coY3VycmVudFRpbWUgPiBzdW5yaXNlICYmIGN1cnJlbnRUaW1lIDwgc3Vuc2V0KVxuICAgIGlmIChjdXJyZW50VGltZSA+IHN1bnJpc2UgJiYgY3VycmVudFRpbWUgPCBzdW5zZXQpIHtcbiAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICBmYWxzZVxuICAgIH1cbiAgIH1cbiAgfSwgW3dlYXRoZXJGb3JlY2FzdF0pXG5cbiAgY29uc29sZS5sb2coaXNEYXkpXG5cbiAgcmV0dXJuIHsgY3VycmVudFdlYXRoZXIsIHdlYXRoZXJGb3JlY2FzdCwgaXNEYXkgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJheGlvcyIsInVzZUdlb2xvY2F0aW9uIiwidXNlV2VhdGhlciIsImN1cnJlbnRMb2NhdGlvbiIsImN1cnJlbnRXZWF0aGVyIiwic2V0Q3VycmVudFdlYXRoZXIiLCJ3ZWF0aGVyRm9yZWNhc3QiLCJzZXRXZWF0aGVyRm9yZWNhc3QiLCJmZXRjaEN1cnJlbnRXZWF0aGVyIiwicmVzcG9uc2UiLCJwcm9jZXNzIiwiZW52IiwiV0VBVEhFUl9BUElfS0VZIiwiZ2V0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoV2VhdGhlckZvcmVjYXN0IiwiaXNEYXkiLCJzdW5yaXNlIiwiY2l0eSIsInN1bnNldCIsImN1cnJlbnRUaW1lIiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsIm5vdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/public/hooks/api/useWeather.ts\n"));

/***/ })

});