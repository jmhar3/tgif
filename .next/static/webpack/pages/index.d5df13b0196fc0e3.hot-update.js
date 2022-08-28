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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeather\": function() { return /* binding */ useWeather; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useGeolocation */ \"./src/public/hooks/api/useGeolocation.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar useWeather = function() {\n    var currentLocation = (0,_useGeolocation__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)().currentLocation;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentWeather = ref[0], setCurrentWeather = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), weatherForecast = ref1[0], setWeatherForecast = ref1[1];\n    var sunrise = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunrise;\n    }, [\n        weatherForecast\n    ]);\n    var sunset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return weatherForecast === null || weatherForecast === void 0 ? void 0 : weatherForecast.city.sunset;\n    }, [\n        weatherForecast\n    ]);\n    var isDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (sunrise && sunset) {\n            var currentTime = Math.round(Date.now() / 1000);\n            return !!(currentTime > sunrise && currentTime < sunset);\n        }\n    }, [\n        sunrise,\n        sunset\n    ]);\n    var fetchCurrentWeather = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(currentLocation && process.env.WEATHER_API_KEY)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setCurrentWeather(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    var fetchWeatherForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response;\n        return _home_jmhar_Development_code_projects_tgif_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!currentLocation) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(currentLocation.latitude, \"&lon=\").concat(currentLocation.longitude, \"&appid=56de9e94a9ffcf326de15a54e3186cd9&units=metric\"));\n                case 4:\n                    response = _ctx.sent;\n                    setWeatherForecast(response.data);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        currentLocation,\n        process.env.WEATHER_API_KEY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchCurrentWeather();\n        fetchWeatherForecast();\n    }, [\n        fetchCurrentWeather,\n        fetchWeatherForecast\n    ]);\n    return {\n        currentWeather: currentWeather,\n        weatherForecast: weatherForecast,\n        isDay: isDay,\n        sunrise: sunrise,\n        sunset: sunset\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2hvb2tzL2FwaS91c2VXZWF0aGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0U7QUFDeEM7QUFHd0I7QUFvRDNDLElBQU1NLFVBQVUsR0FBRyxXQUFNO0lBQzlCLElBQU0sZUFBaUIsR0FBS0QsK0RBQWMsRUFBRSxDQUFwQ0UsZUFBZTtJQUV2QixJQUE0Q0wsR0FBMEIsR0FBMUJBLCtDQUFRLEVBQWtCLEVBQS9ETSxjQUFjLEdBQXVCTixHQUEwQixHQUFqRCxFQUFFTyxpQkFBaUIsR0FBSVAsR0FBMEIsR0FBOUI7SUFDeEMsSUFBOENBLElBQTJCLEdBQTNCQSwrQ0FBUSxFQUFtQixFQUFsRVEsZUFBZSxHQUF3QlIsSUFBMkIsR0FBbkQsRUFBRVMsa0JBQWtCLEdBQUlULElBQTJCLEdBQS9CO0lBRTFDLElBQU1VLE9BQU8sR0FBR1QsOENBQU8sQ0FDckI7UUFBTU8sT0FBQUEsZUFBZSxhQUFmQSxlQUFlLFdBQU0sR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxlQUFlLENBQUVHLElBQUksQ0FBQ0QsT0FBTztLQUFBLEVBQ25DO1FBQUNGLGVBQWU7S0FBQyxDQUNsQjtJQUVELElBQU1JLE1BQU0sR0FBR1gsOENBQU8sQ0FDcEI7UUFBTU8sT0FBQUEsZUFBZSxhQUFmQSxlQUFlLFdBQU0sR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxlQUFlLENBQUVHLElBQUksQ0FBQ0MsTUFBTTtLQUFBLEVBQ2xDO1FBQUNKLGVBQWU7S0FBQyxDQUNsQjtJQUVELElBQU1LLEtBQUssR0FBR1osOENBQU8sQ0FBc0IsV0FBTTtRQUMvQyxJQUFJUyxPQUFPLElBQUlFLE1BQU0sRUFBRTtZQUNyQixJQUFNRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNqRCxPQUFPLENBQUMsQ0FBQyxDQUFDSixXQUFXLEdBQUdKLE9BQU8sSUFBSUksV0FBVyxHQUFHRixNQUFNLENBQUMsQ0FBQztTQUMxRDtLQUNGLEVBQUU7UUFBQ0YsT0FBTztRQUFFRSxNQUFNO0tBQUMsQ0FBQztJQUVyQixJQUFNTyxtQkFBbUIsR0FBR3JCLGtEQUFXLENBQUMsNlBBQVk7WUFHeENzQixRQUFROzs7O3dCQUZkZixDQUFBQSxDQUFBQSxlQUFlLElBQUlnQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTs7Ozs7OzJCQUV2QnJCLGdEQUFTLENBQzlCLHNEQUFxRCxDQUFrQ0csTUFBeUIsQ0FBekRBLGVBQWUsQ0FBQ29CLFFBQVEsRUFBQyxPQUFLLENBQTRCLE9BQW9ELENBQTlFcEIsZUFBZSxDQUFDcUIsU0FBUyxFQUFDLHNEQUFvRCxDQUFDLENBQ3ZLOztvQkFGS04sUUFBUSxZQUViO29CQUNEYixpQkFBaUIsQ0FBQ2EsUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQzs7Ozs7O29CQUVqQ0MsT0FBTyxDQUFDQyxHQUFHLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7S0FHeEIsSUFBRTtRQUFDeEIsZUFBZTtRQUFFZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7S0FBQyxDQUFDO0lBRWxELElBQU1PLG9CQUFvQixHQUFHaEMsa0RBQVcsQ0FBQyw2UEFBWTtZQUd6Q3NCLFFBQVE7Ozs7d0JBRmRmLENBQUFBLGVBQWU7Ozs7OzsyQkFFUUgsZ0RBQVMsQ0FDOUIsdURBQXNELENBQWtDRyxNQUF5QixDQUF6REEsZUFBZSxDQUFDb0IsUUFBUSxFQUFDLE9BQUssQ0FBNEIsT0FBb0QsQ0FBOUVwQixlQUFlLENBQUNxQixTQUFTLEVBQUMsc0RBQW9ELENBQUMsQ0FDeEs7O29CQUZLTixRQUFRLFlBRWI7b0JBQ0RYLGtCQUFrQixDQUFDVyxRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDOzs7Ozs7b0JBRWxDQyxPQUFPLENBQUNDLEdBQUcsU0FBTyxDQUFDOzs7Ozs7Ozs7OztLQUd4QixJQUFFO1FBQUN4QixlQUFlO1FBQUVnQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtLQUFDLENBQUM7SUFFbER4QixnREFBUyxDQUFDLFdBQU07UUFDZG9CLG1CQUFtQixFQUFFLENBQUM7UUFDdEJXLG9CQUFvQixFQUFFLENBQUM7S0FDeEIsRUFBRTtRQUFDWCxtQkFBbUI7UUFBRVcsb0JBQW9CO0tBQUMsQ0FBQyxDQUFDO0lBRWhELE9BQU87UUFBRXhCLGNBQWMsRUFBZEEsY0FBYztRQUFFRSxlQUFlLEVBQWZBLGVBQWU7UUFBRUssS0FBSyxFQUFMQSxLQUFLO1FBQUVILE9BQU8sRUFBUEEsT0FBTztRQUFFRSxNQUFNLEVBQU5BLE1BQU07S0FBRSxDQUFDO0NBQ3BFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9ob29rcy9hcGkvdXNlV2VhdGhlci50cz85NjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSBcIi4vdXNlR2VvbG9jYXRpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50V2VhdGhlciB7XG4gIHdpbmQ6IHtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIGRlZzogbnVtYmVyO1xuICB9O1xuICBtYWluOiB7XG4gICAgZmVlbHNfbGlrZTogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBudW1iZXI7XG4gICAgdGVtcDogbnVtYmVyO1xuICAgIHRlbXBfbWF4OiBudW1iZXI7XG4gICAgdGVtcF9taW46IG51bWJlcjtcbiAgfTtcbiAgd2VhdGhlcjoge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgbWFpbjogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9yZWNhc3Qge1xuICBkdF90eHQ6IHN0cmluZztcbiAgbWFpbjoge1xuICAgIGZlZWxzX2xpa2U6IG51bWJlcjtcbiAgICBodW1pZGl0eTogbnVtYmVyO1xuICAgIHRlbXA6IG51bWJlcjtcbiAgICB0ZW1wX21heDogbnVtYmVyO1xuICAgIHRlbXBfbWluOiBudW1iZXI7XG4gIH07XG4gIHJhaW46IHtcbiAgICBcIjNoXCI6IG51bWJlcjtcbiAgfTtcbiAgd2VhdGhlcjoge1xuICAgIG1haW46IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9W107XG4gIHdpbmQ6IHtcbiAgICBzcGVlZDogbnVtYmVyO1xuICAgIGRlZzogbnVtYmVyO1xuICAgIGd1c3Q6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xuICBjaXR5OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN1bnJpc2U6IG51bWJlcjtcbiAgICBzdW5zZXQ6IG51bWJlcjtcbiAgfTtcbiAgbGlzdDogRm9yZWNhc3RbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudExvY2F0aW9uIH0gPSB1c2VHZW9sb2NhdGlvbigpO1xuXG4gIGNvbnN0IFtjdXJyZW50V2VhdGhlciwgc2V0Q3VycmVudFdlYXRoZXJdID0gdXNlU3RhdGU8Q3VycmVudFdlYXRoZXI+KCk7XG4gIGNvbnN0IFt3ZWF0aGVyRm9yZWNhc3QsIHNldFdlYXRoZXJGb3JlY2FzdF0gPSB1c2VTdGF0ZTxXZWF0aGVyRm9yZWNhc3Q+KCk7XG5cbiAgY29uc3Qgc3VucmlzZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gd2VhdGhlckZvcmVjYXN0Py5jaXR5LnN1bnJpc2UsXG4gICAgW3dlYXRoZXJGb3JlY2FzdF1cbiAgKTtcblxuICBjb25zdCBzdW5zZXQgPSB1c2VNZW1vKFxuICAgICgpID0+IHdlYXRoZXJGb3JlY2FzdD8uY2l0eS5zdW5zZXQsXG4gICAgW3dlYXRoZXJGb3JlY2FzdF1cbiAgKTtcblxuICBjb25zdCBpc0RheSA9IHVzZU1lbW88Ym9vbGVhbiB8IHVuZGVmaW5lZD4oKCkgPT4ge1xuICAgIGlmIChzdW5yaXNlICYmIHN1bnNldCkge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgIHJldHVybiAhIShjdXJyZW50VGltZSA+IHN1bnJpc2UgJiYgY3VycmVudFRpbWUgPCBzdW5zZXQpO1xuICAgIH1cbiAgfSwgW3N1bnJpc2UsIHN1bnNldF0pO1xuXG4gIGNvbnN0IGZldGNoQ3VycmVudFdlYXRoZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbiAmJiBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjdXJyZW50TG9jYXRpb24ubGF0aXR1ZGV9Jmxvbj0ke2N1cnJlbnRMb2NhdGlvbi5sb25naXR1ZGV9JmFwcGlkPTU2ZGU5ZTk0YTlmZmNmMzI2ZGUxNWE1NGUzMTg2Y2Q5JnVuaXRzPW1ldHJpY2BcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Q3VycmVudFdlYXRoZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VycmVudExvY2F0aW9uLCBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVldKTtcblxuICBjb25zdCBmZXRjaFdlYXRoZXJGb3JlY2FzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2N1cnJlbnRMb2NhdGlvbi5sYXRpdHVkZX0mbG9uPSR7Y3VycmVudExvY2F0aW9uLmxvbmdpdHVkZX0mYXBwaWQ9NTZkZTllOTRhOWZmY2YzMjZkZTE1YTU0ZTMxODZjZDkmdW5pdHM9bWV0cmljYFxuICAgICAgICApO1xuICAgICAgICBzZXRXZWF0aGVyRm9yZWNhc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbY3VycmVudExvY2F0aW9uLCBwcm9jZXNzLmVudi5XRUFUSEVSX0FQSV9LRVldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ3VycmVudFdlYXRoZXIoKTtcbiAgICBmZXRjaFdlYXRoZXJGb3JlY2FzdCgpO1xuICB9LCBbZmV0Y2hDdXJyZW50V2VhdGhlciwgZmV0Y2hXZWF0aGVyRm9yZWNhc3RdKTtcblxuICByZXR1cm4geyBjdXJyZW50V2VhdGhlciwgd2VhdGhlckZvcmVjYXN0LCBpc0RheSwgc3VucmlzZSwgc3Vuc2V0IH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiYXhpb3MiLCJ1c2VHZW9sb2NhdGlvbiIsInVzZVdlYXRoZXIiLCJjdXJyZW50TG9jYXRpb24iLCJjdXJyZW50V2VhdGhlciIsInNldEN1cnJlbnRXZWF0aGVyIiwid2VhdGhlckZvcmVjYXN0Iiwic2V0V2VhdGhlckZvcmVjYXN0Iiwic3VucmlzZSIsImNpdHkiLCJzdW5zZXQiLCJpc0RheSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsIm5vdyIsImZldGNoQ3VycmVudFdlYXRoZXIiLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJXRUFUSEVSX0FQSV9LRVkiLCJnZXQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hXZWF0aGVyRm9yZWNhc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/public/hooks/api/useWeather.ts\n"));

/***/ })

});