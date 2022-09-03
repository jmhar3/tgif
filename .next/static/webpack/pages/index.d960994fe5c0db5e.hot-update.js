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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Outfit\": function() { return /* binding */ Outfit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useWarnings */ \"./src/hooks/useWarnings.ts\");\n/* harmony import */ var _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOutfit */ \"./src/hooks/useOutfit.ts\");\n/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Warning */ \"./src/components/outfit/window/Warning.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Outfit = function(props) {\n    _s();\n    var forecast = props.forecast, weatherStats = props.weatherStats, _isActive = props.isActive, isActive = _isActive === void 0 ? false : _isActive;\n    var warnings = (0,_hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__.useWarnings)(forecast).warnings;\n    var outfitRecommendation = (0,_hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__.useOutfit)({\n        weatherStats: weatherStats,\n        isActive: isActive\n    }).outfitRecommendation;\n    var timeOfDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(dateTime) {\n        var time = dateTime.slice(11);\n        switch(time){\n            case \"00:00:00\":\n                return \"midnight\";\n            case \"03:00:00\":\n                return \"night\";\n            case \"06:00:00\":\n                return \"dawn\";\n            case \"09:00:00\":\n                return \"morning\";\n            case \"12:00:00\":\n                return \"noon\";\n            case \"15:00:00\":\n                return \"afternoon\";\n            case \"18:00:00\":\n                return \"dusk\";\n            case \"21:00:00\":\n                return \"evening\";\n            default:\n                return \"\";\n        }\n    }, []);\n    var weatherIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(weather, timeBlock) {\n        var isTimeDay = [\n            \"dawn\",\n            \"morning\",\n            \"noon\",\n            \"afternoon\"\n        ].indexOf(timeBlock) >= 0 && true;\n        switch(weather){\n            case \"Clouds\":\n                return \"/images/clouds.png\";\n            case \"Thunderstorm\":\n                return \"/images/thunderstorm.png\";\n            case \"Drizzle\":\n                return \"/images/drizzle.png\";\n            case \"Snow\":\n                return \"/images/snow.png\";\n            case \"Atmosphere\":\n                return \"/images/fog.png\";\n            case \"Rain\":\n                return \"/images/heavy.png\";\n            case \"Hail\":\n                return \"/images/hail.png\";\n            case \"Clear\":\n                return isTimeDay ? \"/images/sun2.png\" : \"/images/night.png\";\n            default:\n                return undefined;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        minH: \"100vh\",\n        w: \"45%\",\n        padding: \"30px\",\n        backgroundColor: \"neutral.light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                gap: \"3\",\n                align: \"flex-start\",\n                pb: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        bg: \"neutral.main\",\n                        p: \"3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: \"xl\",\n                                children: forecast[0].weather[0].description\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                                children: [\n                                    outfitRecommendation.accessory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.accessory\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.top && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.top\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.bottoms && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.bottoms\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                        gap: \"3\",\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        children: forecast.map(function(report) {\n                            var timeBlock = timeOfDay(report.dt_txt);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"12\",\n                                        src: weatherIcon(report.weather[0].main, timeBlock)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                        children: timeBlock\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                        size: \"lg\",\n                                        children: [\n                                            Math.round(report.main.feels_like),\n                                            \"\\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                gap: \"3\",\n                children: warnings.map(function(warning) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Warning__WEBPACK_IMPORTED_MODULE_4__.Warning, {\n                        warning: warning\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_s(Outfit, \"d8C52lu/cVt9zoe4qw4mkix4W6c=\", false, function() {\n    return [\n        _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__.useWarnings,\n        _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__.useOutfit\n    ];\n});\n_c = Outfit;\nvar _c;\n$RefreshReg$(_c, \"Outfit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFvQztBQUV1QztBQUdsQjtBQUNKO0FBQ2pCO0FBUzdCLElBQU1VLE1BQU0sR0FBRyxTQUFDQyxLQUFZLEVBQUs7O0lBQ3RDLElBQVFDLFFBQVEsR0FBcUNELEtBQUssQ0FBbERDLFFBQVEsRUFBRUMsWUFBWSxHQUF1QkYsS0FBSyxDQUF4Q0UsWUFBWSxjQUF1QkYsS0FBSyxDQUExQkcsUUFBUSxFQUFSQSxRQUFRLDBCQUFHLEtBQUs7SUFFaEQsSUFBTSxRQUFVLEdBQUtQLCtEQUFXLENBQUNLLFFBQVEsQ0FBQyxDQUFsQ0csUUFBUTtJQUNoQixJQUFNLG9CQUFzQixHQUFLUCwyREFBUyxDQUFDO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFQyxRQUFRLEVBQVJBLFFBQVE7S0FBRSxDQUFDLENBQTlERSxvQkFBb0I7SUFFNUIsSUFBTUMsU0FBUyxHQUFHakIsa0RBQVcsQ0FBQyxTQUFDa0IsUUFBZ0IsRUFBSztRQUNsRCxJQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMvQixPQUFRRCxJQUFJO1lBQ1YsS0FBSyxVQUFVO2dCQUNiLE9BQU8sVUFBVSxDQUFDO1lBQ3BCLEtBQUssVUFBVTtnQkFDYixPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssVUFBVTtnQkFDYixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxXQUFXLENBQUM7WUFDckIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssVUFBVTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztTQUNiO0tB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a0RBQ0YsOERBQUNsQixrREFBSTtrREFBRWtCLFNBQVM7Ozs7OzZDQUFRO2tEQUN4Qiw4REFBQ3JCLHFEQUFPO3dDQUFDOEMsSUFBSSxFQUFDLElBQUk7OzRDQUNmQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsTUFBTSxDQUFDRSxJQUFJLENBQUNJLFVBQVUsQ0FBQzs0Q0FBQyxNQUN0Qzs7Ozs7OzZDQUFVOzs7Ozs7cUNBQ0gsQ0FDVDt5QkFDSCxDQUFDOzs7Ozs2QkFDSzs7Ozs7O3FCQUNGOzBCQUNULDhEQUFDL0Msb0RBQU07Z0JBQUMyQixHQUFHLEVBQUMsR0FBRzswQkFDWmhCLFFBQVEsQ0FBQzZCLEdBQUcsQ0FBQyxTQUFDUSxPQUFPO3lDQUNwQiw4REFBQzNDLDZDQUFPO3dCQUFDMkMsT0FBTyxFQUFFQSxPQUFPOzs7Ozs2QkFBSTtpQkFDOUIsQ0FBQzs7Ozs7cUJBQ0s7Ozs7OzthQUNMLENBQ047Q0FDSCxDQUFDO0dBbkdXMUMsTUFBTTs7UUFHSUgsMkRBQVc7UUFDQ0MsdURBQVM7OztBQUovQkUsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdC50c3g/ZWMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIEhTdGFjaywgVlN0YWNrLCBUZXh0LCBJbWcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBGb3JlY2FzdCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy9hcGkvdXNlV2VhdGhlclwiO1xuaW1wb3J0IHsgdXNlV2FybmluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlV2FybmluZ3NcIjtcbmltcG9ydCB7IHVzZU91dGZpdCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VPdXRmaXRcIjtcbmltcG9ydCB7IFdhcm5pbmcgfSBmcm9tIFwiLi9XYXJuaW5nXCI7XG5pbXBvcnQgeyBXZWF0aGVyU3RhdHMgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGZvcmVjYXN0OiBGb3JlY2FzdFtdO1xuICB3ZWF0aGVyU3RhdHM6IFdlYXRoZXJTdGF0cztcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3V0Zml0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGZvcmVjYXN0LCB3ZWF0aGVyU3RhdHMsIGlzQWN0aXZlID0gZmFsc2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgd2FybmluZ3MgfSA9IHVzZVdhcm5pbmdzKGZvcmVjYXN0KTtcbiAgY29uc3QgeyBvdXRmaXRSZWNvbW1lbmRhdGlvbiB9ID0gdXNlT3V0Zml0KHsgd2VhdGhlclN0YXRzLCBpc0FjdGl2ZSB9KTtcblxuICBjb25zdCB0aW1lT2ZEYXkgPSB1c2VDYWxsYmFjaygoZGF0ZVRpbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBkYXRlVGltZS5zbGljZSgxMSk7XG4gICAgc3dpdGNoICh0aW1lKSB7XG4gICAgICBjYXNlIFwiMDA6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwibWlkbmlnaHRcIjtcbiAgICAgIGNhc2UgXCIwMzowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJuaWdodFwiO1xuICAgICAgY2FzZSBcIjA2OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImRhd25cIjtcbiAgICAgIGNhc2UgXCIwOTowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJtb3JuaW5nXCI7XG4gICAgICBjYXNlIFwiMTI6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwibm9vblwiO1xuICAgICAgY2FzZSBcIjE1OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImFmdGVybm9vblwiO1xuICAgICAgY2FzZSBcIjE4OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImR1c2tcIjtcbiAgICAgIGNhc2UgXCIyMTowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJldmVuaW5nXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IHVzZUNhbGxiYWNrKCh3ZWF0aGVyOiBzdHJpbmcsIHRpbWVCbG9jazogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaXNUaW1lRGF5ID1cbiAgICAgIFtcImRhd25cIiwgXCJtb3JuaW5nXCIsIFwibm9vblwiLCBcImFmdGVybm9vblwiXS5pbmRleE9mKHRpbWVCbG9jaykgPj0gMCAmJiB0cnVlO1xuXG4gICAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgICBjYXNlIFwiQ2xvdWRzXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiO1xuICAgICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgICByZXR1cm4gXCIvaW1hZ2VzL3RodW5kZXJzdG9ybS5wbmdcIjtcbiAgICAgIGNhc2UgXCJEcml6emxlXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvZHJpenpsZS5wbmdcIjtcbiAgICAgIGNhc2UgXCJTbm93XCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvc25vdy5wbmdcIjtcbiAgICAgIGNhc2UgXCJBdG1vc3BoZXJlXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvZm9nLnBuZ1wiO1xuICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9oZWF2eS5wbmdcIjtcbiAgICAgIGNhc2UgXCJIYWlsXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvaGFpbC5wbmdcIjtcbiAgICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgICByZXR1cm4gaXNUaW1lRGF5ID8gXCIvaW1hZ2VzL3N1bjIucG5nXCIgOiBcIi9pbWFnZXMvbmlnaHQucG5nXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtaW5IPVwiMTAwdmhcIiB3PVwiNDUlXCIgcGFkZGluZz1cIjMwcHhcIiBiYWNrZ3JvdW5kQ29sb3I9XCJuZXV0cmFsLmxpZ2h0XCI+XG4gICAgICA8VlN0YWNrIGdhcD1cIjNcIiBhbGlnbj1cImZsZXgtc3RhcnRcIiBwYj1cIjNcIj5cbiAgICAgICAgPEhTdGFjayB3PVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYmc9XCJuZXV0cmFsLm1haW5cIiBwPVwiM1wiPlxuICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj57Zm9yZWNhc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L0hlYWRpbmc+XG4gICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgIHtvdXRmaXRSZWNvbW1lbmRhdGlvbi5hY2Nlc3NvcnkgJiYgKFxuICAgICAgICAgICAgICA8SW1nIG1heFc9XCI5XCIgc3JjPXtvdXRmaXRSZWNvbW1lbmRhdGlvbi5hY2Nlc3Nvcnl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLnRvcCAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9e291dGZpdFJlY29tbWVuZGF0aW9uLnRvcH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3V0Zml0UmVjb21tZW5kYXRpb24uYm90dG9tcyAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9e291dGZpdFJlY29tbWVuZGF0aW9uLmJvdHRvbXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8L0hTdGFjaz5cblxuICAgICAgICA8SFN0YWNrIGdhcD1cIjNcIiB3PVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAge2ZvcmVjYXN0Lm1hcCgocmVwb3J0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lQmxvY2s6IHN0cmluZyA9IHRpbWVPZkRheShyZXBvcnQuZHRfdHh0KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgbWF4Vz1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17d2VhdGhlckljb24ocmVwb3J0LndlYXRoZXJbMF0ubWFpbiwgdGltZUJsb2NrKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0Pnt0aW1lQmxvY2t9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocmVwb3J0Lm1haW4uZmVlbHNfbGlrZSl9wrBcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIDxWU3RhY2sgZ2FwPVwiM1wiPlxuICAgICAgICB7d2FybmluZ3MubWFwKCh3YXJuaW5nKSA9PiAoXG4gICAgICAgICAgPFdhcm5pbmcgd2FybmluZz17d2FybmluZ30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJCb3giLCJIZWFkaW5nIiwiSFN0YWNrIiwiVlN0YWNrIiwiVGV4dCIsIkltZyIsInVzZVdhcm5pbmdzIiwidXNlT3V0Zml0IiwiV2FybmluZyIsIk91dGZpdCIsInByb3BzIiwiZm9yZWNhc3QiLCJ3ZWF0aGVyU3RhdHMiLCJpc0FjdGl2ZSIsIndhcm5pbmdzIiwib3V0Zml0UmVjb21tZW5kYXRpb24iLCJ0aW1lT2ZEYXkiLCJkYXRlVGltZSIsInRpbWUiLCJzbGljZSIsIndlYXRoZXJJY29uIiwid2VhdGhlciIsInRpbWVCbG9jayIsImlzVGltZURheSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJtaW5IIiwidyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnYXAiLCJhbGlnbiIsInBiIiwianVzdGlmeSIsImJnIiwicCIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJhY2Nlc3NvcnkiLCJtYXhXIiwic3JjIiwidG9wIiwiYm90dG9tcyIsIm1hcCIsInJlcG9ydCIsImR0X3R4dCIsIm1haW4iLCJzaXplIiwiTWF0aCIsInJvdW5kIiwiZmVlbHNfbGlrZSIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/outfit/window/Outfit.tsx\n"));

/***/ })

});