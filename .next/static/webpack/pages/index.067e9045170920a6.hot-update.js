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

/***/ "./src/public/hooks/useWarnings.ts":
/*!*****************************************!*\
  !*** ./src/public/hooks/useWarnings.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWarnings\": function() { return /* binding */ useWarnings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_useWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/useWeather */ \"./src/public/hooks/api/useWeather.ts\");\n\n\n\nvar useWarnings = function(forecast) {\n    var isDay = (0,_api_useWeather__WEBPACK_IMPORTED_MODULE_1__.useWeather)().isDay;\n    var noDataWarning = {\n        colourTheme: \"white\",\n        heading: \"There's no data available\",\n        text: \"Go stand outside and collect the data yourself\",\n        icon: \"/images/clouds.png\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([\n        noDataWarning\n    ]), warnings = ref[0], setWarnings = ref[1];\n    var fetchWarnings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        if (forecast) {\n            var highlights = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Set(forecast.map(function(report) {\n                return report.weather[0].main;\n            }))).filter(Boolean);\n            highlights.forEach(function(highlight) {\n                highlight === \"Clouds\" && setWarnings(function(prevWarnings) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevWarnings).concat([\n                        {\n                            colourTheme: \"white\",\n                            heading: \"It's a little cloudy\",\n                            text: \"Perfect weather for a cardigan\",\n                            icon: \"/images/clouds.png\"\n                        }, \n                    ]);\n                });\n                highlight === \"Rain\" && setWarnings(function(prevWarnings) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevWarnings).concat([\n                        {\n                            colourTheme: \"blue\",\n                            heading: \"\".concat(isDay && \"Heads up! \", \"Looks like rain\"),\n                            text: isDay ? \"Don't forget to take an umbrella!\" : \"Sleep to the soothing sound of rain\",\n                            icon: \"/images/heavy.png\"\n                        }, \n                    ]);\n                });\n                highlight === \"Hail\" && setWarnings(function(prevWarnings) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevWarnings).concat([\n                        {\n                            colourTheme: \"red\",\n                            heading: \"Caution: Hail\",\n                            text: \"Proceed with caution\",\n                            icon: \"/images/hail.png\"\n                        }, \n                    ]);\n                });\n                highlight === \"Windy\" && setWarnings(function(prevWarnings) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevWarnings).concat([\n                        {\n                            colourTheme: \"amber\",\n                            heading: \"Caution: High Winds\",\n                            text: \"Take a hair tie or wear a hat\",\n                            icon: \"/images/wind.png\"\n                        }, \n                    ]);\n                });\n            });\n            setWarnings(function(prevWarnings) {\n                return prevWarnings.filter(function(warning) {\n                    return warning !== noDataWarning;\n                });\n            });\n        }\n    }, [\n        forecast,\n        setWarnings\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetchWarnings();\n    }, [\n        forecast,\n        fetchWarnings\n    ]);\n    return {\n        warnings: warnings\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUUzQmIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RjLGFBQWEsRUFBRSxDQUFDO0tBQ2pCLEVBQUU7UUFBQ1QsUUFBUTtRQUFFUyxhQUFhO0tBQUMsQ0FBQyxDQUFDO0lBRTlCLE9BQU87UUFBRUYsUUFBUSxFQUFSQSxRQUFRO0tBQUUsQ0FBQztDQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvaG9va3MvdXNlV2FybmluZ3MudHM/YTAwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9yZWNhc3QgfSBmcm9tIFwiLi9hcGkvdXNlV2VhdGhlclwiO1xuaW1wb3J0IHsgdXNlV2VhdGhlciB9IGZyb20gXCIuL2FwaS91c2VXZWF0aGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FybmluZ0RhdGEge1xuICBjb2xvdXJUaGVtZTogc3RyaW5nO1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlV2FybmluZ3MgPSAoZm9yZWNhc3Q/OiBGb3JlY2FzdFtdKSA9PiB7XG4gY29uc3Qge2lzRGF5fSA9IHVzZVdlYXRoZXIoKVxuXG4gIGNvbnN0IG5vRGF0YVdhcm5pbmcgPSB7XG4gICAgY29sb3VyVGhlbWU6IFwid2hpdGVcIixcbiAgICBoZWFkaW5nOiBcIlRoZXJlJ3Mgbm8gZGF0YSBhdmFpbGFibGVcIixcbiAgICB0ZXh0OiBcIkdvIHN0YW5kIG91dHNpZGUgYW5kIGNvbGxlY3QgdGhlIGRhdGEgeW91cnNlbGZcIixcbiAgICBpY29uOiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiLFxuICB9O1xuXG4gIGNvbnN0IFt3YXJuaW5ncywgc2V0V2FybmluZ3NdID0gdXNlU3RhdGU8V2FybmluZ0RhdGFbXT4oW25vRGF0YVdhcm5pbmddKTtcblxuICBjb25zdCBmZXRjaFdhcm5pbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChmb3JlY2FzdCkge1xuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IFtcbiAgICAgICAgLi4ubmV3IFNldChmb3JlY2FzdC5tYXAoKHJlcG9ydCkgPT4gcmVwb3J0LndlYXRoZXJbMF0ubWFpbikpLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAgIGhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0KSA9PiB7XG4gICAgICAgIGhpZ2hsaWdodCA9PT0gXCJDbG91ZHNcIiAmJlxuICAgICAgICAgIHNldFdhcm5pbmdzKChwcmV2V2FybmluZ3MpID0+IFtcbiAgICAgICAgICAgIC4uLnByZXZXYXJuaW5ncyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3VyVGhlbWU6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgaGVhZGluZzogXCJJdCdzIGEgbGl0dGxlIGNsb3VkeVwiLFxuICAgICAgICAgICAgICB0ZXh0OiBcIlBlcmZlY3Qgd2VhdGhlciBmb3IgYSBjYXJkaWdhblwiLFxuICAgICAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgaGlnaGxpZ2h0ID09PSBcIlJhaW5cIiAmJlxuICAgICAgICAgIHNldFdhcm5pbmdzKChwcmV2V2FybmluZ3MpID0+IFtcbiAgICAgICAgICAgIC4uLnByZXZXYXJuaW5ncyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3VyVGhlbWU6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICBoZWFkaW5nOiBgJHtpc0RheSAmJiBcIkhlYWRzIHVwISBcIn1Mb29rcyBsaWtlIHJhaW5gLFxuICAgICAgICAgICAgICB0ZXh0OiBpc0RheSA/IFwiRG9uJ3QgZm9yZ2V0IHRvIHRha2UgYW4gdW1icmVsbGEhXCIgOiBcIlNsZWVwIHRvIHRoZSBzb290aGluZyBzb3VuZCBvZiByYWluXCIsXG4gICAgICAgICAgICAgIGljb246IFwiL2ltYWdlcy9oZWF2eS5wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSk7XG4gICAgICAgIGhpZ2hsaWdodCA9PT0gXCJIYWlsXCIgJiZcbiAgICAgICAgICBzZXRXYXJuaW5ncygocHJldldhcm5pbmdzKSA9PiBbXG4gICAgICAgICAgICAuLi5wcmV2V2FybmluZ3MsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbG91clRoZW1lOiBcInJlZFwiLFxuICAgICAgICAgICAgICBoZWFkaW5nOiBcIkNhdXRpb246IEhhaWxcIixcbiAgICAgICAgICAgICAgdGV4dDogXCJQcm9jZWVkIHdpdGggY2F1dGlvblwiLFxuICAgICAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvaGFpbC5wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSk7XG4gICAgICAgIGhpZ2hsaWdodCA9PT0gXCJXaW5keVwiICYmXG4gICAgICAgICAgc2V0V2FybmluZ3MoKHByZXZXYXJuaW5ncykgPT4gW1xuICAgICAgICAgICAgLi4ucHJldldhcm5pbmdzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvdXJUaGVtZTogXCJhbWJlclwiLFxuICAgICAgICAgICAgICBoZWFkaW5nOiBcIkNhdXRpb246IEhpZ2ggV2luZHNcIixcbiAgICAgICAgICAgICAgdGV4dDogXCJUYWtlIGEgaGFpciB0aWUgb3Igd2VhciBhIGhhdFwiLFxuICAgICAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvd2luZC5wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSk7XG4gICAgICB9KTtcblxuICAgICAgc2V0V2FybmluZ3MoKHByZXZXYXJuaW5ncykgPT5cbiAgICAgICAgcHJldldhcm5pbmdzLmZpbHRlcigod2FybmluZykgPT4gd2FybmluZyAhPT0gbm9EYXRhV2FybmluZylcbiAgICAgICk7XG4gICAgfVxuICB9LCBbZm9yZWNhc3QsIHNldFdhcm5pbmdzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFdhcm5pbmdzKCk7XG4gIH0sIFtmb3JlY2FzdCwgZmV0Y2hXYXJuaW5nc10pO1xuXG4gIHJldHVybiB7IHdhcm5pbmdzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VXZWF0aGVyIiwidXNlV2FybmluZ3MiLCJmb3JlY2FzdCIsImlzRGF5Iiwibm9EYXRhV2FybmluZyIsImNvbG91clRoZW1lIiwiaGVhZGluZyIsInRleHQiLCJpY29uIiwid2FybmluZ3MiLCJzZXRXYXJuaW5ncyIsImZldGNoV2FybmluZ3MiLCJoaWdobGlnaHRzIiwiU2V0IiwibWFwIiwicmVwb3J0Iiwid2VhdGhlciIsIm1haW4iLCJmaWx0ZXIiLCJCb29sZWFuIiwiZm9yRWFjaCIsImhpZ2hsaWdodCIsInByZXZXYXJuaW5ncyIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/public/hooks/useWarnings.ts\n"));

/***/ })

});