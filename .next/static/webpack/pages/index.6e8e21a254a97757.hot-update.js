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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/DefaultLayout */ \"./src/components/layout/DefaultLayout.tsx\");\n/* harmony import */ var _components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/outfit/window/Outfit */ \"./src/components/outfit/window/Outfit.tsx\");\n/* harmony import */ var _components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/activity/window/Activities */ \"./src/components/activity/window/Activities.tsx\");\n/* harmony import */ var _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,_hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather)(), weatherForecast = ref.weatherForecast, isDay = ref.isDay;\n    var currentDateTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var dateTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(\"YYYY-MM-DD HH:mm:ss\");\n        var date = dateTime.slice(0, 11);\n        var time = +dateTime.slice(11, 13);\n        var currentTime = function() {\n            if (time < 3) {\n                return \"00:00:00\";\n            } else if (time < 6) {\n                return \"03:00:00\";\n            } else if (time < 9) {\n                return \"06:00:00\";\n            } else if (time < 12) {\n                return \"09:00:00\";\n            } else if (time < 15) {\n                return \"12:00:00\";\n            } else if (time < 18) {\n                return \"15:00:00\";\n            } else if (time < 21) {\n                return \"18:00:00\";\n            } else {\n                return \"21:00:00\";\n            }\n        };\n        return \"\".concat(date).concat(currentTime());\n    }, []);\n    var todaysForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var currentIndex = weatherForecast.list.findIndex(function(report) {\n                return report.dt_txt === currentDateTime;\n            });\n            return weatherForecast.list.slice(currentIndex, currentIndex + 4);\n        } else {\n            return [];\n        }\n    }, [\n        weatherForecast,\n        currentDateTime\n    ]);\n    var weatherStats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var forecast = todaysForecast[0];\n        var rain = function() {\n            if (forecast.main.feels_like <= 2) {\n                return \"light rain\";\n            } else if (forecast.main.feels_like <= 8) {\n                return \"rain\";\n            } else {\n                return \"heavy rain\";\n            }\n        };\n        var light = function() {\n            if (!isDay) {\n                return \"shade\";\n            } else if (forecast.weather[0].main === \"clear\") {\n                return \"sunny\";\n            } else {\n                return \"cloudy\";\n            }\n        };\n        return {\n            isCold: forecast.main.feels_like <= 18,\n            isWindy: forecast.wind.speed > 20,\n            isHumid: forecast.main.humidity <= 65,\n            rain: rain,\n            light: light\n        };\n    }, [\n        isDay,\n        todaysForecast\n    ]);\n    var username = \"titfairy\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: todaysForecast.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                        justify: \"flex-start\",\n                        align: \"flex-start\",\n                        padding: \"20px\",\n                        width: \"100%\",\n                        minH: \"100vh\",\n                        spacing: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                size: \"lg\",\n                                children: [\n                                    \"Howdy \",\n                                    username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__.Activities, {}, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__.Outfit, {\n                        forecast: todaysForecast\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JMm22Rqqwv/mO8S9qBC7hDoxp50=\", false, function() {\n    return [\n        _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJOztRQUN3QkQsNkRBQVU7OztBQUR0Q0MsS0FBQUEsSUFBSTtBQWtHYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5pbXBvcnQgeyBWU3RhY2ssIEhTdGFjaywgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IERlZmF1bHRMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvRGVmYXVsdExheW91dFwiO1xuaW1wb3J0IHsgT3V0Zml0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3V0Zml0L3dpbmRvdy9PdXRmaXRcIjtcbmltcG9ydCB7IEFjdGl2aXRpZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdGllc1wiO1xuXG5pbXBvcnQgeyB1c2VXZWF0aGVyIH0gZnJvbSBcIi4uL2hvb2tzL2FwaS91c2VXZWF0aGVyXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgd2VhdGhlckZvcmVjYXN0LCBpc0RheSB9ID0gdXNlV2VhdGhlcigpO1xuXG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGRhdGVUaW1lID0gZGF5anMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZS5zbGljZSgwLCAxMSk7XG4gICAgY29uc3QgdGltZSA9ICtkYXRlVGltZS5zbGljZSgxMSwgMTMpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgICAgaWYgKHRpbWUgPCAzKSB7XG4gICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCA2KSB7XG4gICAgICAgIHJldHVybiBcIjAzOjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCA5KSB7XG4gICAgICAgIHJldHVybiBcIjA2OjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCAxMikge1xuICAgICAgICByZXR1cm4gXCIwOTowMDowMFwiO1xuICAgICAgfSBlbHNlIGlmICh0aW1lIDwgMTUpIHtcbiAgICAgICAgcmV0dXJuIFwiMTI6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDE4KSB7XG4gICAgICAgIHJldHVybiBcIjE1OjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCAyMSkge1xuICAgICAgICByZXR1cm4gXCIxODowMDowMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiMjE6MDA6MDBcIjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBgJHtkYXRlfSR7Y3VycmVudFRpbWUoKX1gO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9kYXlzRm9yZWNhc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAod2VhdGhlckZvcmVjYXN0KSB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB3ZWF0aGVyRm9yZWNhc3QubGlzdC5maW5kSW5kZXgoKHJlcG9ydCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVwb3J0LmR0X3R4dCA9PT0gY3VycmVudERhdGVUaW1lO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB3ZWF0aGVyRm9yZWNhc3QubGlzdC5zbGljZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIDQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LCBbd2VhdGhlckZvcmVjYXN0LCBjdXJyZW50RGF0ZVRpbWVdKTtcbiAgXG4gIGNvbnN0IHdlYXRoZXJTdGF0cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgY29uc3QgZm9yZWNhc3QgPSB0b2RheXNGb3JlY2FzdFswXVxuICAgY29uc3QgcmFpbiA9ICgpID0+IHtcbiAgICAgaWYgKGZvcmVjYXN0Lm1haW4uZmVlbHNfbGlrZSA8PSAyKSB7XG4gICAgICAgcmV0dXJuIFwibGlnaHQgcmFpblwiO1xuICAgICB9IGVsc2UgaWYgKGZvcmVjYXN0Lm1haW4uZmVlbHNfbGlrZSA8PSA4KSB7XG4gICAgICAgcmV0dXJuIFwicmFpblwiO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBcImhlYXZ5IHJhaW5cIjtcbiAgICAgfVxuICAgfTtcblxuICAgY29uc3QgbGlnaHQgPSAoKSA9PiB7XG4gICAgIGlmICghaXNEYXkpIHtcbiAgICAgICByZXR1cm4gXCJzaGFkZVwiO1xuICAgICB9IGVsc2UgaWYgKGZvcmVjYXN0LndlYXRoZXJbMF0ubWFpbiA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgcmV0dXJuIFwic3VubnlcIjtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gXCJjbG91ZHlcIjtcbiAgICAgfVxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgaXNDb2xkOiBmb3JlY2FzdC5tYWluLmZlZWxzX2xpa2UgPD0gMTgsXG4gICAgIGlzV2luZHk6IGZvcmVjYXN0LndpbmQuc3BlZWQgPiAyMCxcbiAgICAgaXNIdW1pZDogZm9yZWNhc3QubWFpbi5odW1pZGl0eSA8PSA2NSxcbiAgICAgcmFpbjogcmFpbixcbiAgICAgbGlnaHQ6IGxpZ2h0LFxuICAgfTtcbiB9LCBbaXNEYXksIHRvZGF5c0ZvcmVjYXN0XSk7XG5cbiAgY29uc3QgdXNlcm5hbWUgPSBcInRpdGZhaXJ5XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8RGVmYXVsdExheW91dD5cbiAgICAgIDw+XG4gICAgICAgIHt0b2RheXNGb3JlY2FzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8SFN0YWNrIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPFZTdGFja1xuICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIGFsaWduPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIHBhZGRpbmc9XCIyMHB4XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWluSD1cIjEwMHZoXCJcbiAgICAgICAgICAgICAgc3BhY2luZz1cIjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibGdcIj5Ib3dkeSB7dXNlcm5hbWV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8QWN0aXZpdGllcyAvPlxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICA8T3V0Zml0IGZvcmVjYXN0PXt0b2RheXNGb3JlY2FzdH0gLz5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIDwvRGVmYXVsdExheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiZGF5anMiLCJWU3RhY2siLCJIU3RhY2siLCJIZWFkaW5nIiwiRGVmYXVsdExheW91dCIsIk91dGZpdCIsIkFjdGl2aXRpZXMiLCJ1c2VXZWF0aGVyIiwiSG9tZSIsIndlYXRoZXJGb3JlY2FzdCIsImlzRGF5IiwiY3VycmVudERhdGVUaW1lIiwiZGF0ZVRpbWUiLCJmb3JtYXQiLCJkYXRlIiwic2xpY2UiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJ0b2RheXNGb3JlY2FzdCIsImN1cnJlbnRJbmRleCIsImxpc3QiLCJmaW5kSW5kZXgiLCJyZXBvcnQiLCJkdF90eHQiLCJ3ZWF0aGVyU3RhdHMiLCJmb3JlY2FzdCIsInJhaW4iLCJtYWluIiwiZmVlbHNfbGlrZSIsImxpZ2h0Iiwid2VhdGhlciIsImlzQ29sZCIsImlzV2luZHkiLCJ3aW5kIiwic3BlZWQiLCJpc0h1bWlkIiwiaHVtaWRpdHkiLCJ1c2VybmFtZSIsImxlbmd0aCIsIndpZHRoIiwianVzdGlmeSIsImFsaWduIiwicGFkZGluZyIsIm1pbkgiLCJzcGFjaW5nIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});