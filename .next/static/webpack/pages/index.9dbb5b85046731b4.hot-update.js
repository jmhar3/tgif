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

/***/ "./src/components/outfit/window/Outfit.tsx":
/*!*************************************************!*\
  !*** ./src/components/outfit/window/Outfit.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Outfit\": function() { return /* binding */ Outfit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var just_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-capitalize */ \"./node_modules/just-capitalize/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n/* harmony import */ var _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useWarnings */ \"./src/hooks/useWarnings.ts\");\n/* harmony import */ var _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useOutfit */ \"./src/hooks/useOutfit.ts\");\n/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Warning */ \"./src/components/outfit/window/Warning.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Outfit = function(props) {\n    _s();\n    var weatherStats = props.weatherStats, _isActive = props.isActive, isActive = _isActive === void 0 ? false : _isActive;\n    var warnings = (0,_hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__.useWarnings)().warnings;\n    var ref = (0,_hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__.useWeather)(), forecast = ref.todaysForecast;\n    var outfitRecommendation = (0,_hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__.useOutfit)({\n        weatherStats: weatherStats,\n        isActive: isActive\n    }).outfitRecommendation;\n    var timeOfDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(dateTime) {\n        var time = dateTime.slice(11);\n        switch(time){\n            case \"00:00:00\":\n                return \"midnight\";\n            case \"03:00:00\":\n                return \"night\";\n            case \"06:00:00\":\n                return \"dawn\";\n            case \"09:00:00\":\n                return \"morning\";\n            case \"12:00:00\":\n                return \"noon\";\n            case \"15:00:00\":\n                return \"afternoon\";\n            case \"18:00:00\":\n                return \"dusk\";\n            case \"21:00:00\":\n                return \"evening\";\n            default:\n                return \"\";\n        }\n    }, []);\n    var weatherIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(weather, timeBlock) {\n        var isTimeDay = [\n            \"dawn\",\n            \"morning\",\n            \"noon\",\n            \"afternoon\"\n        ].indexOf(timeBlock) >= 0 && true;\n        switch(weather){\n            case \"Clouds\":\n                return \"/images/clouds.png\";\n            case \"Thunderstorm\":\n                return \"/images/thunderstorm.png\";\n            case \"Drizzle\":\n                return \"/images/drizzle.png\";\n            case \"Snow\":\n                return \"/images/snow.png\";\n            case \"Atmosphere\":\n                return \"/images/fog.png\";\n            case \"Rain\":\n                return \"/images/heavy.png\";\n            case \"Hail\":\n                return \"/images/hail.png\";\n            case \"Clear\":\n                return isTimeDay ? \"/images/sun2.png\" : \"/images/night.png\";\n            default:\n                return undefined;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        minH: \"100vh\",\n        w: \"45%\",\n        padding: \"30px\",\n        backgroundColor: \"neutral.light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                gap: \"3\",\n                align: \"flex-start\",\n                pb: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        bg: \"neutral.main\",\n                        p: \"3\",\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                fontSize: \"xl\",\n                                children: forecast[0] && (0,just_capitalize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(forecast[0].weather[0].description)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                                children: [\n                                    outfitRecommendation.accessory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.accessory\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.top && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.top\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.bottoms && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.bottoms\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        gap: \"3\",\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        children: forecast.map(function(report) {\n                            var timeBlock = timeOfDay(report.dt_txt);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"12\",\n                                        src: weatherIcon(report.weather[0].main, timeBlock)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        children: timeBlock\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                        size: \"lg\",\n                                        children: [\n                                            Math.round(report.main.feels_like),\n                                            \"\\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                gap: \"3\",\n                children: warnings.map(function(warning) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Warning__WEBPACK_IMPORTED_MODULE_6__.Warning, {\n                        warning: warning\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, _this);\n};\n_s(Outfit, \"HuNmUoRGiFvG8fDLJuuCeqMMe8c=\", false, function() {\n    return [\n        _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__.useWarnings,\n        _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__.useWeather,\n        _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__.useOutfit\n    ];\n});\n_c = Outfit;\nvar _c;\n$RefreshReg$(_c, \"Outfit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW9DO0FBQ0s7QUFFa0M7QUFFaEI7QUFDRjtBQUNKO0FBQ2pCO0FBUTdCLElBQU1ZLE1BQU0sR0FBRyxTQUFDQyxLQUFZLEVBQUs7O0lBQ3RDLElBQVFDLFlBQVksR0FBdUJELEtBQUssQ0FBeENDLFlBQVksY0FBdUJELEtBQUssQ0FBMUJFLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxLQUFLO0lBRXRDLElBQU0sUUFBVSxHQUFLTiwrREFBVyxFQUFFLENBQTFCTyxRQUFRO0lBQ2hCLElBQXFDUixHQUFZLEdBQVpBLGlFQUFVLEVBQUUsRUFBekNTLFFBQXdCLEdBQUtULEdBQVksQ0FBekNTLGNBQWM7SUFDdEIsSUFBTSxvQkFBc0IsR0FBS1AsMkRBQVMsQ0FBQztRQUFFSSxZQUFZLEVBQVpBLFlBQVk7UUFBRUMsUUFBUSxFQUFSQSxRQUFRO0tBQUUsQ0FBQyxDQUE5REksb0JBQW9CO0lBRTVCLElBQU1DLFNBQVMsR0FBR3BCLGtEQUFXLENBQUMsU0FBQ3FCLFFBQWdCLEVBQUs7UUFDbEQsSUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBUUQsSUFBSTtZQUNWLEtBQUssVUFBVTtnQkFDYixPQUFPLFVBQVUsQ0FBQztZQUNwQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssVUFBVTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssVUFBVTtnQkFDYixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxTQUFTLENB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QUFJO3dDQUNUQyxHQUFHLEVBQUVyQixXQUFXLENBQUN5QixNQUFNLENBQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMwQixJQUFJLEVBQUV6QixTQUFTLENBQUM7Ozs7OzZDQUNuRDtrREFDRiw4REFBQ3BCLGtEQUFJO2tEQUFFb0IsU0FBUzs7Ozs7NkNBQVE7a0RBQ3hCLDhEQUFDdkIscURBQU87d0NBQUNpRCxJQUFJLEVBQUMsSUFBSTs7NENBQ2ZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxNQUFNLENBQUNFLElBQUksQ0FBQ0ksVUFBVSxDQUFDOzRDQUFDLE1BQ3RDOzs7Ozs7NkNBQVU7Ozs7OztxQ0FDSCxDQUNUO3lCQUNILENBQUM7Ozs7OzZCQUNLOzs7Ozs7cUJBQ0Y7MEJBQ1QsOERBQUNsRCxvREFBTTtnQkFBQzZCLEdBQUcsRUFBQyxHQUFHOzBCQUNabEIsUUFBUSxDQUFDZ0MsR0FBRyxDQUFDLFNBQUNRLE9BQU87eUNBQ3BCLDhEQUFDN0MsNkNBQU87d0JBQUM2QyxPQUFPLEVBQUVBLE9BQU87Ozs7OzZCQUFJO2lCQUM5QixDQUFDOzs7OztxQkFDSzs7Ozs7O2FBQ0wsQ0FDTjtDQUNILENBQUM7R0E1R1c1QyxNQUFNOztRQUdJSCwyREFBVztRQUNLRCw2REFBVTtRQUNkRSx1REFBUzs7O0FBTC9CRSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL291dGZpdC93aW5kb3cvT3V0Zml0LnRzeD9lYzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tIFwianVzdC1jYXBpdGFsaXplXCI7XG5cbmltcG9ydCB7IEJveCwgSGVhZGluZywgSFN0YWNrLCBWU3RhY2ssIFRleHQsIEltZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVdlYXRoZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvYXBpL3VzZVdlYXRoZXJcIjtcbmltcG9ydCB7IHVzZVdhcm5pbmdzIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVdhcm5pbmdzXCI7XG5pbXBvcnQgeyB1c2VPdXRmaXQgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlT3V0Zml0XCI7XG5pbXBvcnQgeyBXYXJuaW5nIH0gZnJvbSBcIi4vV2FybmluZ1wiO1xuaW1wb3J0IHsgV2VhdGhlclN0YXRzIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2luZGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB3ZWF0aGVyU3RhdHM6IFdlYXRoZXJTdGF0cztcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3V0Zml0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHdlYXRoZXJTdGF0cywgaXNBY3RpdmUgPSBmYWxzZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB3YXJuaW5ncyB9ID0gdXNlV2FybmluZ3MoKTtcbiAgY29uc3QgeyB0b2RheXNGb3JlY2FzdDogZm9yZWNhc3QgfSA9IHVzZVdlYXRoZXIoKTtcbiAgY29uc3QgeyBvdXRmaXRSZWNvbW1lbmRhdGlvbiB9ID0gdXNlT3V0Zml0KHsgd2VhdGhlclN0YXRzLCBpc0FjdGl2ZSB9KTtcblxuICBjb25zdCB0aW1lT2ZEYXkgPSB1c2VDYWxsYmFjaygoZGF0ZVRpbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBkYXRlVGltZS5zbGljZSgxMSk7XG4gICAgc3dpdGNoICh0aW1lKSB7XG4gICAgICBjYXNlIFwiMDA6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwibWlkbmlnaHRcIjtcbiAgICAgIGNhc2UgXCIwMzowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJuaWdodFwiO1xuICAgICAgY2FzZSBcIjA2OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImRhd25cIjtcbiAgICAgIGNhc2UgXCIwOTowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJtb3JuaW5nXCI7XG4gICAgICBjYXNlIFwiMTI6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwibm9vblwiO1xuICAgICAgY2FzZSBcIjE1OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImFmdGVybm9vblwiO1xuICAgICAgY2FzZSBcIjE4OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImR1c2tcIjtcbiAgICAgIGNhc2UgXCIyMTowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJldmVuaW5nXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IHVzZUNhbGxiYWNrKCh3ZWF0aGVyOiBzdHJpbmcsIHRpbWVCbG9jazogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaXNUaW1lRGF5ID1cbiAgICAgIFtcImRhd25cIiwgXCJtb3JuaW5nXCIsIFwibm9vblwiLCBcImFmdGVybm9vblwiXS5pbmRleE9mKHRpbWVCbG9jaykgPj0gMCAmJiB0cnVlO1xuXG4gICAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgICBjYXNlIFwiQ2xvdWRzXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiO1xuICAgICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgICByZXR1cm4gXCIvaW1hZ2VzL3RodW5kZXJzdG9ybS5wbmdcIjtcbiAgICAgIGNhc2UgXCJEcml6emxlXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvZHJpenpsZS5wbmdcIjtcbiAgICAgIGNhc2UgXCJTbm93XCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvc25vdy5wbmdcIjtcbiAgICAgIGNhc2UgXCJBdG1vc3BoZXJlXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvZm9nLnBuZ1wiO1xuICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9oZWF2eS5wbmdcIjtcbiAgICAgIGNhc2UgXCJIYWlsXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvaGFpbC5wbmdcIjtcbiAgICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgICByZXR1cm4gaXNUaW1lRGF5ID8gXCIvaW1hZ2VzL3N1bjIucG5nXCIgOiBcIi9pbWFnZXMvbmlnaHQucG5nXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtaW5IPVwiMTAwdmhcIiB3PVwiNDUlXCIgcGFkZGluZz1cIjMwcHhcIiBiYWNrZ3JvdW5kQ29sb3I9XCJuZXV0cmFsLmxpZ2h0XCI+XG4gICAgICA8VlN0YWNrIGdhcD1cIjNcIiBhbGlnbj1cImZsZXgtc3RhcnRcIiBwYj1cIjNcIj5cbiAgICAgICAgPEhTdGFja1xuICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgYmc9XCJuZXV0cmFsLm1haW5cIlxuICAgICAgICAgIHA9XCIzXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+XG4gICAgICAgICAgICB7Zm9yZWNhc3RbMF0gJiYgY2FwaXRhbGl6ZShmb3JlY2FzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgIHtvdXRmaXRSZWNvbW1lbmRhdGlvbi5hY2Nlc3NvcnkgJiYgKFxuICAgICAgICAgICAgICA8SW1nIG1heFc9XCI5XCIgc3JjPXtvdXRmaXRSZWNvbW1lbmRhdGlvbi5hY2Nlc3Nvcnl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLnRvcCAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9e291dGZpdFJlY29tbWVuZGF0aW9uLnRvcH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3V0Zml0UmVjb21tZW5kYXRpb24uYm90dG9tcyAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9e291dGZpdFJlY29tbWVuZGF0aW9uLmJvdHRvbXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8L0hTdGFjaz5cblxuICAgICAgICA8SFN0YWNrIGdhcD1cIjNcIiB3PVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAge2ZvcmVjYXN0Lm1hcCgocmVwb3J0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lQmxvY2s6IHN0cmluZyA9IHRpbWVPZkRheShyZXBvcnQuZHRfdHh0KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgbWF4Vz1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17d2VhdGhlckljb24ocmVwb3J0LndlYXRoZXJbMF0ubWFpbiwgdGltZUJsb2NrKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0Pnt0aW1lQmxvY2t9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocmVwb3J0Lm1haW4uZmVlbHNfbGlrZSl9wrBcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIDxWU3RhY2sgZ2FwPVwiM1wiPlxuICAgICAgICB7d2FybmluZ3MubWFwKCh3YXJuaW5nKSA9PiAoXG4gICAgICAgICAgPFdhcm5pbmcgd2FybmluZz17d2FybmluZ30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJjYXBpdGFsaXplIiwiQm94IiwiSGVhZGluZyIsIkhTdGFjayIsIlZTdGFjayIsIlRleHQiLCJJbWciLCJ1c2VXZWF0aGVyIiwidXNlV2FybmluZ3MiLCJ1c2VPdXRmaXQiLCJXYXJuaW5nIiwiT3V0Zml0IiwicHJvcHMiLCJ3ZWF0aGVyU3RhdHMiLCJpc0FjdGl2ZSIsIndhcm5pbmdzIiwidG9kYXlzRm9yZWNhc3QiLCJmb3JlY2FzdCIsIm91dGZpdFJlY29tbWVuZGF0aW9uIiwidGltZU9mRGF5IiwiZGF0ZVRpbWUiLCJ0aW1lIiwic2xpY2UiLCJ3ZWF0aGVySWNvbiIsIndlYXRoZXIiLCJ0aW1lQmxvY2siLCJpc1RpbWVEYXkiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwibWluSCIsInciLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZ2FwIiwiYWxpZ24iLCJwYiIsImp1c3RpZnkiLCJiZyIsInAiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiYWNjZXNzb3J5IiwibWF4VyIsInNyYyIsInRvcCIsImJvdHRvbXMiLCJtYXAiLCJyZXBvcnQiLCJkdF90eHQiLCJtYWluIiwic2l6ZSIsIk1hdGgiLCJyb3VuZCIsImZlZWxzX2xpa2UiLCJ3YXJuaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/outfit/window/Outfit.tsx\n"));

/***/ })

});