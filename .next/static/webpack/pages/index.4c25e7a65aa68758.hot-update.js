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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/DefaultLayout */ \"./src/components/layout/DefaultLayout.tsx\");\n/* harmony import */ var _components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/outfit/window/Outfit */ \"./src/components/outfit/window/Outfit.tsx\");\n/* harmony import */ var _components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/activity/window/Activities */ \"./src/components/activity/window/Activities.tsx\");\n/* harmony import */ var _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,_hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather)(), weatherForecast = ref.weatherForecast, isDay = ref.isDay;\n    var currentDateTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var dateTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(\"YYYY-MM-DD HH:mm:ss\");\n        var date = dateTime.slice(0, 11);\n        var time = +dateTime.slice(11, 13);\n        var currentTime = function() {\n            if (time < 3) {\n                return \"00:00:00\";\n            } else if (time < 6) {\n                return \"03:00:00\";\n            } else if (time < 9) {\n                return \"06:00:00\";\n            } else if (time < 12) {\n                return \"09:00:00\";\n            } else if (time < 15) {\n                return \"12:00:00\";\n            } else if (time < 18) {\n                return \"15:00:00\";\n            } else if (time < 21) {\n                return \"18:00:00\";\n            } else {\n                return \"21:00:00\";\n            }\n        };\n        return \"\".concat(date).concat(currentTime());\n    }, []);\n    var todaysForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var currentIndex = weatherForecast.list.findIndex(function(report) {\n                return report.dt_txt === currentDateTime;\n            });\n            return weatherForecast.list.slice(currentIndex, currentIndex + 4);\n        } else {\n            return [];\n        }\n    }, [\n        weatherForecast,\n        currentDateTime\n    ]);\n    var weatherStats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var forecast = todaysForecast[0];\n        var rain = function() {\n            if (forecast.main.feels_like <= 2) {\n                return \"low\";\n            } else if (forecast.main.feels_like <= 8) {\n                return \"medium\";\n            } else {\n                return \"high\";\n            }\n        };\n        var light = function() {\n            if (!isDay) {\n                return \"low\";\n            } else if (forecast.weather[0].main === \"clear\") {\n                return \"high\";\n            } else {\n                return \"medium\";\n            }\n        };\n        return {\n            isCold: (forecast === null || forecast === void 0 ? void 0 : forecast.main.feels_like) <= 18,\n            isWindy: (forecast === null || forecast === void 0 ? void 0 : forecast.wind.speed) > 20,\n            isHumid: (forecast === null || forecast === void 0 ? void 0 : forecast.main.humidity) <= 65,\n            rain: forecast && rain(),\n            light: forecast && light()\n        };\n    }, [\n        isDay,\n        todaysForecast\n    ]);\n    var username = \"titfairy\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: todaysForecast.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                        justify: \"flex-start\",\n                        align: \"flex-start\",\n                        padding: \"20px\",\n                        width: \"100%\",\n                        minH: \"100vh\",\n                        spacing: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                size: \"lg\",\n                                children: [\n                                    \"Howdy \",\n                                    username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__.Activities, {}, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__.Outfit, {\n                        forecast: todaysForecast,\n                        weatherStats: weatherStats\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JMm22Rqqwv/mO8S9qBC7hDoxp50=\", false, function() {\n    return [\n        _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7O29DQUFDLFFBQU07b0NBQUNSLFFBQVE7Ozs7OztvQ0FBVzswQ0FDN0MsOERBQUMvQiw4RUFBVTs7OztvQ0FBRzs7Ozs7OzRCQUNQO2tDQUNULDhEQUFDRCxvRUFBTTt3QkFBQ29CLFFBQVEsRUFBRVAsY0FBYzt3QkFBRU0sWUFBWSxFQUFFQSxZQUFZOzs7Ozs0QkFBSTs7Ozs7O29CQUN6RDt5QkFFVjs7Ozs7WUFDVyxDQUNoQjtDQUNIO0dBakdRaEIsSUFBSTs7UUFDd0JELDZEQUFVOzs7QUFEdENDLEtBQUFBLElBQUk7QUFtR2IsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuaW1wb3J0IHsgVlN0YWNrLCBIU3RhY2ssIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0RlZmF1bHRMYXlvdXRcIjtcbmltcG9ydCB7IE91dGZpdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL291dGZpdC93aW5kb3cvT3V0Zml0XCI7XG5pbXBvcnQgeyBBY3Rpdml0aWVzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aXZpdHkvd2luZG93L0FjdGl2aXRpZXNcIjtcblxuaW1wb3J0IHsgdXNlV2VhdGhlciB9IGZyb20gXCIuLi9ob29rcy9hcGkvdXNlV2VhdGhlclwiO1xuXG5leHBvcnQgdHlwZSBXZWF0aGVyU3RhdHMgPSB7XG4gIGlzQ29sZDogYm9vbGVhbjtcbiAgaXNXaW5keTogYm9vbGVhbjtcbiAgaXNIdW1pZDogYm9vbGVhbjtcbiAgcmFpbjogc3RyaW5nO1xuICBsaWdodDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB3ZWF0aGVyRm9yZWNhc3QsIGlzRGF5IH0gPSB1c2VXZWF0aGVyKCk7XG5cbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBkYXlqcygpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lLnNsaWNlKDAsIDExKTtcbiAgICBjb25zdCB0aW1lID0gK2RhdGVUaW1lLnNsaWNlKDExLCAxMyk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGltZSA8IDMpIHtcbiAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiMDM6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDkpIHtcbiAgICAgICAgcmV0dXJuIFwiMDY6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDEyKSB7XG4gICAgICAgIHJldHVybiBcIjA5OjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCAxNSkge1xuICAgICAgICByZXR1cm4gXCIxMjowMDowMFwiO1xuICAgICAgfSBlbHNlIGlmICh0aW1lIDwgMTgpIHtcbiAgICAgICAgcmV0dXJuIFwiMTU6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDIxKSB7XG4gICAgICAgIHJldHVybiBcIjE4OjAwOjAwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIyMTowMDowMFwiO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGAke2RhdGV9JHtjdXJyZW50VGltZSgpfWA7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh3ZWF0aGVyRm9yZWNhc3QpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHdlYXRoZXJGb3JlY2FzdC5saXN0LmZpbmRJbmRleCgocmVwb3J0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXBvcnQuZHRfdHh0ID09PSBjdXJyZW50RGF0ZVRpbWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdC5saXN0LnNsaWNlKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0sIFt3ZWF0aGVyRm9yZWNhc3QsIGN1cnJlbnREYXRlVGltZV0pO1xuXG4gIGNvbnN0IHdlYXRoZXJTdGF0cyA9IHVzZU1lbW88V2VhdGhlclN0YXRzPigoKSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB0b2RheXNGb3JlY2FzdFswXTtcblxuICAgIGNvbnN0IHJhaW4gPSAoKSA9PiB7XG4gICAgICBpZiAoZm9yZWNhc3QubWFpbi5mZWVsc19saWtlIDw9IDIpIHtcbiAgICAgICAgcmV0dXJuIFwibG93XCI7XG4gICAgICB9IGVsc2UgaWYgKGZvcmVjYXN0Lm1haW4uZmVlbHNfbGlrZSA8PSA4KSB7XG4gICAgICAgIHJldHVybiBcIm1lZGl1bVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiaGlnaFwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghaXNEYXkpIHtcbiAgICAgICAgcmV0dXJuIFwibG93XCI7XG4gICAgICB9IGVsc2UgaWYgKGZvcmVjYXN0LndlYXRoZXJbMF0ubWFpbiA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgIHJldHVybiBcImhpZ2hcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm1lZGl1bVwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNDb2xkOiBmb3JlY2FzdD8ubWFpbi5mZWVsc19saWtlIDw9IDE4LFxuICAgICAgaXNXaW5keTogZm9yZWNhc3Q/LndpbmQuc3BlZWQgPiAyMCxcbiAgICAgIGlzSHVtaWQ6IGZvcmVjYXN0Py5tYWluLmh1bWlkaXR5IDw9IDY1LFxuICAgICAgcmFpbjogZm9yZWNhc3QgJiYgcmFpbigpLFxuICAgICAgbGlnaHQ6IGZvcmVjYXN0ICYmIGxpZ2h0KCksXG4gICAgfTtcbiAgfSwgW2lzRGF5LCB0b2RheXNGb3JlY2FzdF0pO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gXCJ0aXRmYWlyeVwiO1xuXG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRMYXlvdXQ+XG4gICAgICA8PlxuICAgICAgICB7dG9kYXlzRm9yZWNhc3QubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEhTdGFjayB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxWU3RhY2tcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwiMjBweFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCI1XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+SG93ZHkge3VzZXJuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPEFjdGl2aXRpZXMgLz5cbiAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgPE91dGZpdCBmb3JlY2FzdD17dG9kYXlzRm9yZWNhc3R9IHdlYXRoZXJTdGF0cz17d2VhdGhlclN0YXRzfSAvPlxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9EZWZhdWx0TGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJkYXlqcyIsIlZTdGFjayIsIkhTdGFjayIsIkhlYWRpbmciLCJEZWZhdWx0TGF5b3V0IiwiT3V0Zml0IiwiQWN0aXZpdGllcyIsInVzZVdlYXRoZXIiLCJIb21lIiwid2VhdGhlckZvcmVjYXN0IiwiaXNEYXkiLCJjdXJyZW50RGF0ZVRpbWUiLCJkYXRlVGltZSIsImZvcm1hdCIsImRhdGUiLCJzbGljZSIsInRpbWUiLCJjdXJyZW50VGltZSIsInRvZGF5c0ZvcmVjYXN0IiwiY3VycmVudEluZGV4IiwibGlzdCIsImZpbmRJbmRleCIsInJlcG9ydCIsImR0X3R4dCIsIndlYXRoZXJTdGF0cyIsImZvcmVjYXN0IiwicmFpbiIsIm1haW4iLCJmZWVsc19saWtlIiwibGlnaHQiLCJ3ZWF0aGVyIiwiaXNDb2xkIiwiaXNXaW5keSIsIndpbmQiLCJzcGVlZCIsImlzSHVtaWQiLCJodW1pZGl0eSIsInVzZXJuYW1lIiwibGVuZ3RoIiwid2lkdGgiLCJqdXN0aWZ5IiwiYWxpZ24iLCJwYWRkaW5nIiwibWluSCIsInNwYWNpbmciLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});