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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Outfit\": function() { return /* binding */ Outfit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useWarnings */ \"./src/hooks/useWarnings.ts\");\n/* harmony import */ var _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useOutfit */ \"./src/hooks/useOutfit.ts\");\n/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Warning */ \"./src/components/outfit/window/Warning.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Outfit = function(props) {\n    _s();\n    var forecast = props.forecast, weatherStats = props.weatherStats, _isActive = props.isActive, isActive = _isActive === void 0 ? false : _isActive;\n    var warnings = (0,_hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__.useWarnings)(forecast).warnings;\n    var outfitRecommendation = (0,_hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__.useOutfit)({\n        weatherStats: weatherStats,\n        isActive: isActive\n    }).outfitRecommendation;\n    var timeOfDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(dateTime) {\n        var time = dateTime.slice(11);\n        switch(time){\n            case \"00:00:00\":\n                return \"midnight\";\n            case \"03:00:00\":\n                return \"night\";\n            case \"06:00:00\":\n                return \"dawn\";\n            case \"09:00:00\":\n                return \"morning\";\n            case \"12:00:00\":\n                return \"noon\";\n            case \"15:00:00\":\n                return \"afternoon\";\n            case \"18:00:00\":\n                return \"dusk\";\n            case \"21:00:00\":\n                return \"evening\";\n            default:\n                return \"\";\n        }\n    }, []);\n    var weatherIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(weather, timeBlock) {\n        var isTimeDay = [\n            \"dawn\",\n            \"morning\",\n            \"noon\",\n            \"afternoon\"\n        ].indexOf(timeBlock) >= 0 && true;\n        switch(weather){\n            case \"Clouds\":\n                return \"/images/clouds.png\";\n            case \"Thunderstorm\":\n                return \"/images/thunderstorm.png\";\n            case \"Drizzle\":\n                return \"/images/drizzle.png\";\n            case \"Snow\":\n                return \"/images/snow.png\";\n            case \"Atmosphere\":\n                return \"/images/fog.png\";\n            case \"Rain\":\n                return \"/images/heavy.png\";\n            case \"Hail\":\n                return \"/images/hail.png\";\n            case \"Clear\":\n                return isTimeDay ? \"/images/sun2.png\" : \"/images/night.png\";\n            default:\n                return undefined;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        minH: \"100vh\",\n        w: \"45%\",\n        padding: \"30px\",\n        backgroundColor: \"neutral.light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                gap: \"3\",\n                align: \"flex-start\",\n                pb: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                        justify: \"space-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: \"xl\",\n                                children: forecast[0].weather[0].description\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                                children: [\n                                    outfitRecommendation.accessory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.accessory\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.top && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.top\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.bottoms && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"9\",\n                                        src: outfitRecommendation.bottoms\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {\n                        gap: \"3\",\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        children: forecast.map(function(report) {\n                            var timeBlock = timeOfDay(report.dt_txt);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                                        maxW: \"12\",\n                                        src: weatherIcon(report.weather[0].main, timeBlock)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                        children: timeBlock\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                        size: \"lg\",\n                                        children: [\n                                            Math.round(report.main.feels_like),\n                                            \"\\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                gap: \"3\",\n                children: warnings.map(function(warning) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Warning__WEBPACK_IMPORTED_MODULE_4__.Warning, {\n                        warning: warning\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_s(Outfit, \"d8C52lu/cVt9zoe4qw4mkix4W6c=\", false, function() {\n    return [\n        _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_2__.useWarnings,\n        _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_3__.useOutfit\n    ];\n});\n_c = Outfit;\nvar _c;\n$RefreshReg$(_c, \"Outfit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFvQztBQUV1QztBQUdsQjtBQUNKO0FBQ2pCO0FBUzdCLElBQU1VLE1BQU0sR0FBRyxTQUFDQyxLQUFZLEVBQUs7O0lBQ3RDLElBQVFDLFFBQVEsR0FBcUNELEtBQUssQ0FBbERDLFFBQVEsRUFBRUMsWUFBWSxHQUF1QkYsS0FBSyxDQUF4Q0UsWUFBWSxjQUF1QkYsS0FBSyxDQUExQkcsUUFBUSxFQUFSQSxRQUFRLDBCQUFHLEtBQUs7SUFFaEQsSUFBTSxRQUFVLEdBQUtQLCtEQUFXLENBQUNLLFFBQVEsQ0FBQyxDQUFsQ0csUUFBUTtJQUNoQixJQUFNLG9CQUFzQixHQUFLUCwyREFBUyxDQUFDO1FBQUVLLFlBQVksRUFBWkEsWUFBWTtRQUFFQyxRQUFRLEVBQVJBLFFBQVE7S0FBRSxDQUFDLENBQTlERSxvQkFBb0I7SUFFNUIsSUFBTUMsU0FBUyxHQUFHakIsa0RBQVcsQ0FBQyxTQUFDa0IsUUFBZ0IsRUFBSztRQUNsRCxJQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMvQixPQUFRRCxJQUFJO1lBQ1YsS0FBSyxVQUFVO2dCQUNiLE9BQU8sVUFBVSxDQUFDO1lBQ3BCLEtBQUssVUFBVTtnQkFDYixPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssVUFBVTtnQkFDYixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxXQUFXLENBQUM7WUFDckIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssVUFBVTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztTQUNiO0tB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QUM0QyxJQUFJLEVBQUMsSUFBSTs7NENBQ2ZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxNQUFNLENBQUNFLElBQUksQ0FBQ0ksVUFBVSxDQUFDOzRDQUFDLE1BQ3RDOzs7Ozs7NkNBQVU7Ozs7OztxQ0FDSCxDQUNUO3lCQUNILENBQUM7Ozs7OzZCQUNLOzs7Ozs7cUJBQ0Y7MEJBQ1QsOERBQUM3QyxvREFBTTtnQkFBQzJCLEdBQUcsRUFBQyxHQUFHOzBCQUNaaEIsUUFBUSxDQUFDMkIsR0FBRyxDQUFDLFNBQUNRLE9BQU87eUNBQ3BCLDhEQUFDekMsNkNBQU87d0JBQUN5QyxPQUFPLEVBQUVBLE9BQU87Ozs7OzZCQUFJO2lCQUM5QixDQUFDOzs7OztxQkFDSzs7Ozs7O2FBQ0wsQ0FDTjtDQUNILENBQUM7R0FuR1d4QyxNQUFNOztRQUdJSCwyREFBVztRQUNDQyx1REFBUzs7O0FBSi9CRSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL291dGZpdC93aW5kb3cvT3V0Zml0LnRzeD9lYzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJveCwgSGVhZGluZywgSFN0YWNrLCBWU3RhY2ssIFRleHQsIEltZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IEZvcmVjYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL2FwaS91c2VXZWF0aGVyXCI7XG5pbXBvcnQgeyB1c2VXYXJuaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VXYXJuaW5nc1wiO1xuaW1wb3J0IHsgdXNlT3V0Zml0IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZU91dGZpdFwiO1xuaW1wb3J0IHsgV2FybmluZyB9IGZyb20gXCIuL1dhcm5pbmdcIjtcbmltcG9ydCB7IFdlYXRoZXJTdGF0cyB9IGZyb20gXCIuLi8uLi8uLi9wYWdlcy9pbmRleFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9yZWNhc3Q6IEZvcmVjYXN0W107XG4gIHdlYXRoZXJTdGF0czogV2VhdGhlclN0YXRzO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdXRmaXQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZm9yZWNhc3QsIHdlYXRoZXJTdGF0cywgaXNBY3RpdmUgPSBmYWxzZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB3YXJuaW5ncyB9ID0gdXNlV2FybmluZ3MoZm9yZWNhc3QpO1xuICBjb25zdCB7IG91dGZpdFJlY29tbWVuZGF0aW9uIH0gPSB1c2VPdXRmaXQoeyB3ZWF0aGVyU3RhdHMsIGlzQWN0aXZlIH0pO1xuXG4gIGNvbnN0IHRpbWVPZkRheSA9IHVzZUNhbGxiYWNrKChkYXRlVGltZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGRhdGVUaW1lLnNsaWNlKDExKTtcbiAgICBzd2l0Y2ggKHRpbWUpIHtcbiAgICAgIGNhc2UgXCIwMDowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJtaWRuaWdodFwiO1xuICAgICAgY2FzZSBcIjAzOjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCI7XG4gICAgICBjYXNlIFwiMDY6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiZGF3blwiO1xuICAgICAgY2FzZSBcIjA5OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcIm1vcm5pbmdcIjtcbiAgICAgIGNhc2UgXCIxMjowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJub29uXCI7XG4gICAgICBjYXNlIFwiMTU6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiYWZ0ZXJub29uXCI7XG4gICAgICBjYXNlIFwiMTg6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiZHVza1wiO1xuICAgICAgY2FzZSBcIjIxOjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImV2ZW5pbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gdXNlQ2FsbGJhY2soKHdlYXRoZXI6IHN0cmluZywgdGltZUJsb2NrOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpc1RpbWVEYXkgPVxuICAgICAgW1wiZGF3blwiLCBcIm1vcm5pbmdcIiwgXCJub29uXCIsIFwiYWZ0ZXJub29uXCJdLmluZGV4T2YodGltZUJsb2NrKSA+PSAwICYmIHRydWU7XG5cbiAgICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9jbG91ZHMucG5nXCI7XG4gICAgICBjYXNlIFwiVGh1bmRlcnN0b3JtXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvdGh1bmRlcnN0b3JtLnBuZ1wiO1xuICAgICAgY2FzZSBcIkRyaXp6bGVcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9kcml6emxlLnBuZ1wiO1xuICAgICAgY2FzZSBcIlNub3dcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9zbm93LnBuZ1wiO1xuICAgICAgY2FzZSBcIkF0bW9zcGhlcmVcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9mb2cucG5nXCI7XG4gICAgICBjYXNlIFwiUmFpblwiOlxuICAgICAgICByZXR1cm4gXCIvaW1hZ2VzL2hlYXZ5LnBuZ1wiO1xuICAgICAgY2FzZSBcIkhhaWxcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9oYWlsLnBuZ1wiO1xuICAgICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICAgIHJldHVybiBpc1RpbWVEYXkgPyBcIi9pbWFnZXMvc3VuMi5wbmdcIiA6IFwiL2ltYWdlcy9uaWdodC5wbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1pbkg9XCIxMDB2aFwiIHc9XCI0NSVcIiBwYWRkaW5nPVwiMzBweFwiIGJhY2tncm91bmRDb2xvcj1cIm5ldXRyYWwubGlnaHRcIj5cbiAgICAgIDxWU3RhY2sgZ2FwPVwiM1wiIGFsaWduPVwiZmxleC1zdGFydFwiIHBiPVwiM1wiPlxuICAgICAgICA8SFN0YWNrIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntmb3JlY2FzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufTwvSGVhZGluZz5cbiAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLmFjY2Vzc29yeSAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9e291dGZpdFJlY29tbWVuZGF0aW9uLmFjY2Vzc29yeX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3V0Zml0UmVjb21tZW5kYXRpb24udG9wICYmIChcbiAgICAgICAgICAgICAgPEltZyBtYXhXPVwiOVwiIHNyYz17b3V0Zml0UmVjb21tZW5kYXRpb24udG9wfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtvdXRmaXRSZWNvbW1lbmRhdGlvbi5ib3R0b21zICYmIChcbiAgICAgICAgICAgICAgPEltZyBtYXhXPVwiOVwiIHNyYz17b3V0Zml0UmVjb21tZW5kYXRpb24uYm90dG9tc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvSFN0YWNrPlxuXG4gICAgICAgIDxIU3RhY2sgZ2FwPVwiM1wiIHc9XCIxMDAlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICB7Zm9yZWNhc3QubWFwKChyZXBvcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVCbG9jazogc3RyaW5nID0gdGltZU9mRGF5KHJlcG9ydC5kdF90eHQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICBtYXhXPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgc3JjPXt3ZWF0aGVySWNvbihyZXBvcnQud2VhdGhlclswXS5tYWluLCB0aW1lQmxvY2spfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQ+e3RpbWVCbG9ja308L1RleHQ+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChyZXBvcnQubWFpbi5mZWVsc19saWtlKX3CsFxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvVlN0YWNrPlxuICAgICAgPFZTdGFjayBnYXA9XCIzXCI+XG4gICAgICAgIHt3YXJuaW5ncy5tYXAoKHdhcm5pbmcpID0+IChcbiAgICAgICAgICA8V2FybmluZyB3YXJuaW5nPXt3YXJuaW5nfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsIkJveCIsIkhlYWRpbmciLCJIU3RhY2siLCJWU3RhY2siLCJUZXh0IiwiSW1nIiwidXNlV2FybmluZ3MiLCJ1c2VPdXRmaXQiLCJXYXJuaW5nIiwiT3V0Zml0IiwicHJvcHMiLCJmb3JlY2FzdCIsIndlYXRoZXJTdGF0cyIsImlzQWN0aXZlIiwid2FybmluZ3MiLCJvdXRmaXRSZWNvbW1lbmRhdGlvbiIsInRpbWVPZkRheSIsImRhdGVUaW1lIiwidGltZSIsInNsaWNlIiwid2VhdGhlckljb24iLCJ3ZWF0aGVyIiwidGltZUJsb2NrIiwiaXNUaW1lRGF5IiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsIm1pbkgiLCJ3IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImdhcCIsImFsaWduIiwicGIiLCJqdXN0aWZ5IiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiIsImFjY2Vzc29yeSIsIm1heFciLCJzcmMiLCJ0b3AiLCJib3R0b21zIiwibWFwIiwicmVwb3J0IiwiZHRfdHh0IiwibWFpbiIsInNpemUiLCJNYXRoIiwicm91bmQiLCJmZWVsc19saWtlIiwid2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/outfit/window/Outfit.tsx\n"));

/***/ })

});