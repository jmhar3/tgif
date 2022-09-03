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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Outfit\": function() { return /* binding */ Outfit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var just_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-capitalize */ \"./node_modules/just-capitalize/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n/* harmony import */ var _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useWarnings */ \"./src/hooks/useWarnings.ts\");\n/* harmony import */ var _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useOutfit */ \"./src/hooks/useOutfit.ts\");\n/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Warning */ \"./src/components/outfit/window/Warning.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Outfit = function(props) {\n    _s();\n    var weatherStats = props.weatherStats, _isActive = props.isActive, isActive = _isActive === void 0 ? false : _isActive;\n    var warnings = (0,_hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__.useWarnings)().warnings;\n    var ref = (0,_hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__.useWeather)(), forecast = ref.todaysForecast;\n    var outfitRecommendation = (0,_hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__.useOutfit)({\n        weatherStats: weatherStats,\n        isActive: isActive\n    }).outfitRecommendation;\n    var timeOfDay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(dateTime) {\n        var time = dateTime.slice(11);\n        switch(time){\n            case \"00:00:00\":\n                return \"midnight\";\n            case \"03:00:00\":\n                return \"night\";\n            case \"06:00:00\":\n                return \"dawn\";\n            case \"09:00:00\":\n                return \"morning\";\n            case \"12:00:00\":\n                return \"noon\";\n            case \"15:00:00\":\n                return \"afternoon\";\n            case \"18:00:00\":\n                return \"dusk\";\n            case \"21:00:00\":\n                return \"evening\";\n            default:\n                return \"\";\n        }\n    }, []);\n    var weatherIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(weather, timeBlock) {\n        var isTimeDay = [\n            \"dawn\",\n            \"morning\",\n            \"noon\",\n            \"afternoon\"\n        ].indexOf(timeBlock) >= 0 && true;\n        switch(weather){\n            case \"Clouds\":\n                return \"/images/clouds.png\";\n            case \"Thunderstorm\":\n                return \"/images/thunderstorm.png\";\n            case \"Drizzle\":\n                return \"/images/drizzle.png\";\n            case \"Snow\":\n                return \"/images/snow.png\";\n            case \"Atmosphere\":\n                return \"/images/fog.png\";\n            case \"Rain\":\n                return \"/images/heavy.png\";\n            case \"Hail\":\n                return \"/images/hail.png\";\n            case \"Clear\":\n                return isTimeDay ? \"/images/sun2.png\" : \"/images/night.png\";\n            default:\n                return undefined;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        minH: \"100vh\",\n        w: \"45%\",\n        padding: \"30px\",\n        backgroundColor: \"neutral.light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                gap: \"3\",\n                align: \"flex-start\",\n                pb: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        justify: \"space-between\",\n                        // bg=\"neutral.main\"\n                        borderRadius: \"lg\",\n                        // p=\"3\"\n                        w: \"100%\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                fontSize: \"xl\",\n                                children: forecast[0] && (0,just_capitalize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(forecast[0].weather[0].description)\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                                children: [\n                                    outfitRecommendation.accessory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"12\",\n                                        src: outfitRecommendation.accessory\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.top && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"12\",\n                                        src: outfitRecommendation.top\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, _this),\n                                    outfitRecommendation.bottoms && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"12\",\n                                        src: outfitRecommendation.bottoms\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        justify: \"space-between\",\n                        bg: \"neutral.main\",\n                        borderRadius: \"lg\",\n                        h: \"1\",\n                        w: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        gap: \"3\",\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        children: forecast.map(function(report) {\n                            var timeBlock = timeOfDay(report.dt_txt);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                        maxW: \"9\",\n                                        src: weatherIcon(report.weather[0].main, timeBlock)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        children: timeBlock\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                        fontSize: \"md\",\n                                        children: [\n                                            Math.round(report.main.feels_like),\n                                            \"\\xb0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                gap: \"3\",\n                children: warnings.map(function(warning) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Warning__WEBPACK_IMPORTED_MODULE_6__.Warning, {\n                        warning: warning\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/outfit/window/Outfit.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, _this);\n};\n_s(Outfit, \"HuNmUoRGiFvG8fDLJuuCeqMMe8c=\", false, function() {\n    return [\n        _hooks_useWarnings__WEBPACK_IMPORTED_MODULE_4__.useWarnings,\n        _hooks_api_useWeather__WEBPACK_IMPORTED_MODULE_3__.useWeather,\n        _hooks_useOutfit__WEBPACK_IMPORTED_MODULE_5__.useOutfit\n    ];\n});\n_c = Outfit;\nvar _c;\n$RefreshReg$(_c, \"Outfit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdXRmaXQvd2luZG93L091dGZpdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW9DO0FBQ0s7QUFFa0M7QUFFaEI7QUFDRjtBQUNKO0FBQ2pCO0FBUTdCLElBQU1ZLE1BQU0sR0FBRyxTQUFDQyxLQUFZLEVBQUs7O0lBQ3RDLElBQVFDLFlBQVksR0FBdUJELEtBQUssQ0FBeENDLFlBQVksY0FBdUJELEtBQUssQ0FBMUJFLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxLQUFLO0lBRXRDLElBQU0sUUFBVSxHQUFLTiwrREFBVyxFQUFFLENBQTFCTyxRQUFRO0lBQ2hCLElBQXFDUixHQUFZLEdBQVpBLGlFQUFVLEVBQUUsRUFBekNTLFFBQXdCLEdBQUtULEdBQVksQ0FBekNTLGNBQWM7SUFDdEIsSUFBTSxvQkFBc0IsR0FBS1AsMkRBQVMsQ0FBQztRQUFFSSxZQUFZLEVBQVpBLFlBQVk7UUFBRUMsUUFBUSxFQUFSQSxRQUFRO0tBQUUsQ0FBQyxDQUE5REksb0JBQW9CO0lBRTVCLElBQU1DLFNBQVMsR0FBR3BCLGtEQUFXLENBQUMsU0FBQ3FCLFFBQWdCLEVBQUs7UUFDbEQsSUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBUUQsSUFBSTtZQUNWLEtBQUssVUFBVTtnQkFDYixPQUFPLFVBQVUsQ0FBQztZQUNwQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssVUFBVTtnQkFDYixPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxVQUFVO2dCQUNiLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssVUFBVTtnQkFDYixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxTQUFTLENB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NEJBQ3hCLElBQU12QixTQUFTLEdBQVdOLFNBQVMsQ0FBQzZCLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDOzRCQUNsRCxxQkFDRSw4REFBQzdDLG9EQUFNOztrREFDTCw4REFBQ0UsaURBQUc7d0NBQ0ZtQyxJQUFJLEVBQUMsR0FBRzt3Q0FDUkMsR0FBRyxFQUFFbkIsV0FBVyxDQUFDeUIsTUFBTSxDQUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMEIsSUFBSSxFQUFFekIsU0FBUyxDQUFDOzs7Ozs2Q0FDbkQ7a0RBQ0YsOERBQUNwQixrREFBSTtrREFBR29CLFNBQVM7Ozs7OzZDQUFRO2tEQUN6Qiw4REFBQ3ZCLHFEQUFPO3dDQUFDb0MsUUFBUSxFQUFDLElBQUk7OzRDQUNuQmEsSUFBSSxDQUFDQyxLQUFLLENBQUNKLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRyxVQUFVLENBQUM7NENBQUMsTUFDdEM7Ozs7Ozs2Q0FBVTs7Ozs7O3FDQUNILENBQ1Q7eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0s7Ozs7OztxQkFDRjswQkFDVCw4REFBQ2pELG9EQUFNO2dCQUFDNkIsR0FBRyxFQUFDLEdBQUc7MEJBQ1psQixRQUFRLENBQUNnQyxHQUFHLENBQUMsU0FBQ08sT0FBTzt5Q0FDcEIsOERBQUM1Qyw2Q0FBTzt3QkFBQzRDLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NkJBQUk7aUJBQzlCLENBQUM7Ozs7O3FCQUNLOzs7Ozs7YUFDTCxDQUNOO0NBQ0gsQ0FBQztHQXBIVzNDLE1BQU07O1FBR0lILDJEQUFXO1FBQ0tELDZEQUFVO1FBQ2RFLHVEQUFTOzs7QUFML0JFLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3V0Zml0L3dpbmRvdy9PdXRmaXQudHN4P2VjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gXCJqdXN0LWNhcGl0YWxpemVcIjtcblxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBIU3RhY2ssIFZTdGFjaywgVGV4dCwgSW1nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlV2VhdGhlciB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy9hcGkvdXNlV2VhdGhlclwiO1xuaW1wb3J0IHsgdXNlV2FybmluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlV2FybmluZ3NcIjtcbmltcG9ydCB7IHVzZU91dGZpdCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VPdXRmaXRcIjtcbmltcG9ydCB7IFdhcm5pbmcgfSBmcm9tIFwiLi9XYXJuaW5nXCI7XG5pbXBvcnQgeyBXZWF0aGVyU3RhdHMgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvaW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHdlYXRoZXJTdGF0czogV2VhdGhlclN0YXRzO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdXRmaXQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgd2VhdGhlclN0YXRzLCBpc0FjdGl2ZSA9IGZhbHNlIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHdhcm5pbmdzIH0gPSB1c2VXYXJuaW5ncygpO1xuICBjb25zdCB7IHRvZGF5c0ZvcmVjYXN0OiBmb3JlY2FzdCB9ID0gdXNlV2VhdGhlcigpO1xuICBjb25zdCB7IG91dGZpdFJlY29tbWVuZGF0aW9uIH0gPSB1c2VPdXRmaXQoeyB3ZWF0aGVyU3RhdHMsIGlzQWN0aXZlIH0pO1xuXG4gIGNvbnN0IHRpbWVPZkRheSA9IHVzZUNhbGxiYWNrKChkYXRlVGltZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGRhdGVUaW1lLnNsaWNlKDExKTtcbiAgICBzd2l0Y2ggKHRpbWUpIHtcbiAgICAgIGNhc2UgXCIwMDowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJtaWRuaWdodFwiO1xuICAgICAgY2FzZSBcIjAzOjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcIm5pZ2h0XCI7XG4gICAgICBjYXNlIFwiMDY6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiZGF3blwiO1xuICAgICAgY2FzZSBcIjA5OjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcIm1vcm5pbmdcIjtcbiAgICAgIGNhc2UgXCIxMjowMDowMFwiOlxuICAgICAgICByZXR1cm4gXCJub29uXCI7XG4gICAgICBjYXNlIFwiMTU6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiYWZ0ZXJub29uXCI7XG4gICAgICBjYXNlIFwiMTg6MDA6MDBcIjpcbiAgICAgICAgcmV0dXJuIFwiZHVza1wiO1xuICAgICAgY2FzZSBcIjIxOjAwOjAwXCI6XG4gICAgICAgIHJldHVybiBcImV2ZW5pbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gdXNlQ2FsbGJhY2soKHdlYXRoZXI6IHN0cmluZywgdGltZUJsb2NrOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpc1RpbWVEYXkgPVxuICAgICAgW1wiZGF3blwiLCBcIm1vcm5pbmdcIiwgXCJub29uXCIsIFwiYWZ0ZXJub29uXCJdLmluZGV4T2YodGltZUJsb2NrKSA+PSAwICYmIHRydWU7XG5cbiAgICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9jbG91ZHMucG5nXCI7XG4gICAgICBjYXNlIFwiVGh1bmRlcnN0b3JtXCI6XG4gICAgICAgIHJldHVybiBcIi9pbWFnZXMvdGh1bmRlcnN0b3JtLnBuZ1wiO1xuICAgICAgY2FzZSBcIkRyaXp6bGVcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9kcml6emxlLnBuZ1wiO1xuICAgICAgY2FzZSBcIlNub3dcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9zbm93LnBuZ1wiO1xuICAgICAgY2FzZSBcIkF0bW9zcGhlcmVcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9mb2cucG5nXCI7XG4gICAgICBjYXNlIFwiUmFpblwiOlxuICAgICAgICByZXR1cm4gXCIvaW1hZ2VzL2hlYXZ5LnBuZ1wiO1xuICAgICAgY2FzZSBcIkhhaWxcIjpcbiAgICAgICAgcmV0dXJuIFwiL2ltYWdlcy9oYWlsLnBuZ1wiO1xuICAgICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICAgIHJldHVybiBpc1RpbWVEYXkgPyBcIi9pbWFnZXMvc3VuMi5wbmdcIiA6IFwiL2ltYWdlcy9uaWdodC5wbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1pbkg9XCIxMDB2aFwiIHc9XCI0NSVcIiBwYWRkaW5nPVwiMzBweFwiIGJhY2tncm91bmRDb2xvcj1cIm5ldXRyYWwubGlnaHRcIj5cbiAgICAgIDxWU3RhY2sgZ2FwPVwiM1wiIGFsaWduPVwiZmxleC1zdGFydFwiIHBiPVwiM1wiPlxuICAgICAgICA8SFN0YWNrXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIC8vIGJnPVwibmV1dHJhbC5tYWluXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgLy8gcD1cIjNcIlxuICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj5cbiAgICAgICAgICAgIHtmb3JlY2FzdFswXSAmJiBjYXBpdGFsaXplKGZvcmVjYXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLmFjY2Vzc29yeSAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjEyXCIgc3JjPXtvdXRmaXRSZWNvbW1lbmRhdGlvbi5hY2Nlc3Nvcnl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLnRvcCAmJiAoXG4gICAgICAgICAgICAgIDxJbWcgbWF4Vz1cIjEyXCIgc3JjPXtvdXRmaXRSZWNvbW1lbmRhdGlvbi50b3B9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge291dGZpdFJlY29tbWVuZGF0aW9uLmJvdHRvbXMgJiYgKFxuICAgICAgICAgICAgICA8SW1nIG1heFc9XCIxMlwiIHNyYz17b3V0Zml0UmVjb21tZW5kYXRpb24uYm90dG9tc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvSFN0YWNrPlxuXG4gICAgICAgIDxIU3RhY2tcbiAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgYmc9XCJuZXV0cmFsLm1haW5cIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICBoPVwiMVwiXG4gICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxIU3RhY2sgZ2FwPVwiM1wiIHc9XCIxMDAlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICB7Zm9yZWNhc3QubWFwKChyZXBvcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVCbG9jazogc3RyaW5nID0gdGltZU9mRGF5KHJlcG9ydC5kdF90eHQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICBtYXhXPVwiOVwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3dlYXRoZXJJY29uKHJlcG9ydC53ZWF0aGVyWzBdLm1haW4sIHRpbWVCbG9jayl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCA+e3RpbWVCbG9ja308L1RleHQ+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocmVwb3J0Lm1haW4uZmVlbHNfbGlrZSl9wrBcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIDxWU3RhY2sgZ2FwPVwiM1wiPlxuICAgICAgICB7d2FybmluZ3MubWFwKCh3YXJuaW5nKSA9PiAoXG4gICAgICAgICAgPFdhcm5pbmcgd2FybmluZz17d2FybmluZ30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJjYXBpdGFsaXplIiwiQm94IiwiSGVhZGluZyIsIkhTdGFjayIsIlZTdGFjayIsIlRleHQiLCJJbWciLCJ1c2VXZWF0aGVyIiwidXNlV2FybmluZ3MiLCJ1c2VPdXRmaXQiLCJXYXJuaW5nIiwiT3V0Zml0IiwicHJvcHMiLCJ3ZWF0aGVyU3RhdHMiLCJpc0FjdGl2ZSIsIndhcm5pbmdzIiwidG9kYXlzRm9yZWNhc3QiLCJmb3JlY2FzdCIsIm91dGZpdFJlY29tbWVuZGF0aW9uIiwidGltZU9mRGF5IiwiZGF0ZVRpbWUiLCJ0aW1lIiwic2xpY2UiLCJ3ZWF0aGVySWNvbiIsIndlYXRoZXIiLCJ0aW1lQmxvY2siLCJpc1RpbWVEYXkiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwibWluSCIsInciLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZ2FwIiwiYWxpZ24iLCJwYiIsImp1c3RpZnkiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiYWNjZXNzb3J5IiwibWF4VyIsInNyYyIsInRvcCIsImJvdHRvbXMiLCJiZyIsImgiLCJtYXAiLCJyZXBvcnQiLCJkdF90eHQiLCJtYWluIiwiTWF0aCIsInJvdW5kIiwiZmVlbHNfbGlrZSIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/outfit/window/Outfit.tsx\n"));

/***/ })

});