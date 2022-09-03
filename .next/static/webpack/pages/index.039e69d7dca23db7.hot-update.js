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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/DefaultLayout */ \"./src/components/layout/DefaultLayout.tsx\");\n/* harmony import */ var _components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/outfit/window/Outfit */ \"./src/components/outfit/window/Outfit.tsx\");\n/* harmony import */ var _components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/activity/window/Activities */ \"./src/components/activity/window/Activities.tsx\");\n/* harmony import */ var _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,_hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather)(), weatherForecast = ref.weatherForecast, isDay = ref.isDay;\n    var currentDateTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var dateTime = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(\"YYYY-MM-DD HH:mm:ss\");\n        var date = dateTime.slice(0, 11);\n        var time = +dateTime.slice(11, 13);\n        var currentTime = function() {\n            if (time < 3) {\n                return \"00:00:00\";\n            } else if (time < 6) {\n                return \"03:00:00\";\n            } else if (time < 9) {\n                return \"06:00:00\";\n            } else if (time < 12) {\n                return \"09:00:00\";\n            } else if (time < 15) {\n                return \"12:00:00\";\n            } else if (time < 18) {\n                return \"15:00:00\";\n            } else if (time < 21) {\n                return \"18:00:00\";\n            } else {\n                return \"21:00:00\";\n            }\n        };\n        return \"\".concat(date).concat(currentTime());\n    }, []);\n    var todaysForecast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (weatherForecast) {\n            var currentIndex = weatherForecast.list.findIndex(function(report) {\n                return report.dt_txt === currentDateTime;\n            });\n            return weatherForecast.list.slice(currentIndex, currentIndex + 4);\n        } else {\n            return [];\n        }\n    }, [\n        weatherForecast,\n        currentDateTime\n    ]);\n    var weatherStats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var _$forecast = todaysForecast[0];\n        var rain = function() {\n            if (_$forecast.main.feels_like <= 2) {\n                return \"light rain\";\n            } else if (_$forecast.main.feels_like <= 8) {\n                return \"rain\";\n            } else {\n                return \"heavy rain\";\n            }\n        };\n        var light = function() {\n            if (!isDay) {\n                return \"shade\";\n            } else if (_$forecast.weather[0].main === \"clear\") {\n                return \"sunny\";\n            } else {\n                return \"cloudy\";\n            }\n        };\n        return {\n            isCold: _$forecast.main.feels_like <= 18,\n            isWindy: _$forecast.wind.speed > 20,\n            isHumid: _$forecast.main.humidity <= 65,\n            rain: rain,\n            light: light\n        };\n    }, [\n        isDay,\n        forecast\n    ]);\n    var username = \"titfairy\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: todaysForecast.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                        justify: \"flex-start\",\n                        align: \"flex-start\",\n                        padding: \"20px\",\n                        width: \"100%\",\n                        minH: \"100vh\",\n                        spacing: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                size: \"lg\",\n                                children: [\n                                    \"Howdy \",\n                                    username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_activity_window_Activities__WEBPACK_IMPORTED_MODULE_5__.Activities, {}, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_outfit_window_Outfit__WEBPACK_IMPORTED_MODULE_4__.Outfit, {\n                        forecast: todaysForecast\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/pages/index.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JMm22Rqqwv/mO8S9qBC7hDoxp50=\", false, function() {\n    return [\n        _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_6__.useWeather\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7O1FBQ3dCRCw2REFBVTs7O0FBRHRDQyxLQUFBQSxJQUFJO0FBa0diLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmltcG9ydCB7IFZTdGFjaywgSFN0YWNrLCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgRGVmYXVsdExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9EZWZhdWx0TGF5b3V0XCI7XG5pbXBvcnQgeyBPdXRmaXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdFwiO1xuaW1wb3J0IHsgQWN0aXZpdGllcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGl2aXR5L3dpbmRvdy9BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCB7IHVzZVdlYXRoZXIgfSBmcm9tIFwiLi4vaG9va3MvYXBpL3VzZVdlYXRoZXJcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB3ZWF0aGVyRm9yZWNhc3QsIGlzRGF5IH0gPSB1c2VXZWF0aGVyKCk7XG5cbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBkYXlqcygpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lLnNsaWNlKDAsIDExKTtcbiAgICBjb25zdCB0aW1lID0gK2RhdGVUaW1lLnNsaWNlKDExLCAxMyk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiB7XG4gICAgICBpZiAodGltZSA8IDMpIHtcbiAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiMDM6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDkpIHtcbiAgICAgICAgcmV0dXJuIFwiMDY6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDEyKSB7XG4gICAgICAgIHJldHVybiBcIjA5OjAwOjAwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRpbWUgPCAxNSkge1xuICAgICAgICByZXR1cm4gXCIxMjowMDowMFwiO1xuICAgICAgfSBlbHNlIGlmICh0aW1lIDwgMTgpIHtcbiAgICAgICAgcmV0dXJuIFwiMTU6MDA6MDBcIjtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA8IDIxKSB7XG4gICAgICAgIHJldHVybiBcIjE4OjAwOjAwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIyMTowMDowMFwiO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGAke2RhdGV9JHtjdXJyZW50VGltZSgpfWA7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh3ZWF0aGVyRm9yZWNhc3QpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHdlYXRoZXJGb3JlY2FzdC5saXN0LmZpbmRJbmRleCgocmVwb3J0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXBvcnQuZHRfdHh0ID09PSBjdXJyZW50RGF0ZVRpbWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdC5saXN0LnNsaWNlKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgNCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0sIFt3ZWF0aGVyRm9yZWNhc3QsIGN1cnJlbnREYXRlVGltZV0pO1xuICBcbiAgY29uc3Qgd2VhdGhlclN0YXRzID0gdXNlTWVtbygoKSA9PiB7XG4gICBjb25zdCBmb3JlY2FzdCA9IHRvZGF5c0ZvcmVjYXN0WzBdXG4gICBjb25zdCByYWluID0gKCkgPT4ge1xuICAgICBpZiAoZm9yZWNhc3QubWFpbi5mZWVsc19saWtlIDw9IDIpIHtcbiAgICAgICByZXR1cm4gXCJsaWdodCByYWluXCI7XG4gICAgIH0gZWxzZSBpZiAoZm9yZWNhc3QubWFpbi5mZWVsc19saWtlIDw9IDgpIHtcbiAgICAgICByZXR1cm4gXCJyYWluXCI7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgcmV0dXJuIFwiaGVhdnkgcmFpblwiO1xuICAgICB9XG4gICB9O1xuXG4gICBjb25zdCBsaWdodCA9ICgpID0+IHtcbiAgICAgaWYgKCFpc0RheSkge1xuICAgICAgIHJldHVybiBcInNoYWRlXCI7XG4gICAgIH0gZWxzZSBpZiAoZm9yZWNhc3Qud2VhdGhlclswXS5tYWluID09PSBcImNsZWFyXCIpIHtcbiAgICAgICByZXR1cm4gXCJzdW5ueVwiO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBcImNsb3VkeVwiO1xuICAgICB9XG4gICB9O1xuXG4gICByZXR1cm4ge1xuICAgICBpc0NvbGQ6IGZvcmVjYXN0Lm1haW4uZmVlbHNfbGlrZSA8PSAxOCxcbiAgICAgaXNXaW5keTogZm9yZWNhc3Qud2luZC5zcGVlZCA+IDIwLFxuICAgICBpc0h1bWlkOiBmb3JlY2FzdC5tYWluLmh1bWlkaXR5IDw9IDY1LFxuICAgICByYWluOiByYWluLFxuICAgICBsaWdodDogbGlnaHQsXG4gICB9O1xuIH0sIFtpc0RheSwgZm9yZWNhc3RdKTtcblxuICBjb25zdCB1c2VybmFtZSA9IFwidGl0ZmFpcnlcIjtcblxuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPD5cbiAgICAgICAge3RvZGF5c0ZvcmVjYXN0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxIU3RhY2sgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICA8VlN0YWNrXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgYWxpZ249XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgcGFkZGluZz1cIjIwcHhcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtaW5IPVwiMTAwdmhcIlxuICAgICAgICAgICAgICBzcGFjaW5nPVwiNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPkhvd2R5IHt1c2VybmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxBY3Rpdml0aWVzIC8+XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgIDxPdXRmaXQgZm9yZWNhc3Q9e3RvZGF5c0ZvcmVjYXN0fSAvPlxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9EZWZhdWx0TGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJkYXlqcyIsIlZTdGFjayIsIkhTdGFjayIsIkhlYWRpbmciLCJEZWZhdWx0TGF5b3V0IiwiT3V0Zml0IiwiQWN0aXZpdGllcyIsInVzZVdlYXRoZXIiLCJIb21lIiwid2VhdGhlckZvcmVjYXN0IiwiaXNEYXkiLCJjdXJyZW50RGF0ZVRpbWUiLCJkYXRlVGltZSIsImZvcm1hdCIsImRhdGUiLCJzbGljZSIsInRpbWUiLCJjdXJyZW50VGltZSIsInRvZGF5c0ZvcmVjYXN0IiwiY3VycmVudEluZGV4IiwibGlzdCIsImZpbmRJbmRleCIsInJlcG9ydCIsImR0X3R4dCIsIndlYXRoZXJTdGF0cyIsImZvcmVjYXN0IiwicmFpbiIsIm1haW4iLCJmZWVsc19saWtlIiwibGlnaHQiLCJ3ZWF0aGVyIiwiaXNDb2xkIiwiaXNXaW5keSIsIndpbmQiLCJzcGVlZCIsImlzSHVtaWQiLCJodW1pZGl0eSIsInVzZXJuYW1lIiwibGVuZ3RoIiwid2lkdGgiLCJqdXN0aWZ5IiwiYWxpZ24iLCJwYWRkaW5nIiwibWluSCIsInNwYWNpbmciLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});