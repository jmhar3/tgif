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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWarnings\": function() { return /* binding */ useWarnings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n[];\nvar useWarnings = function(forecast) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([\n        {\n            colour: \"#D6EAEA\",\n            heading: \"There's no data available\",\n            text: \"Go stand outside and collect the data yourself\",\n            icon: \"/images/clouds.png\"\n        }, \n    ]), warnings = ref[0], setWarnings = ref[1];\n    var fetchWarnings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        if (forecast) {\n            var highlights = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Set(forecast.map(function(report) {\n                return report.weather[0].main;\n            }))).filter(Boolean);\n            var warningData = highlights.map(function(highlight) {\n                switch(highlight){\n                    case \"Clouds\":\n                        return {\n                            colour: \"#D6EAEA\",\n                            heading: \"Nothing wrong with a few clouds\",\n                            text: \"Perfect weather for a cozy cardigan\",\n                            icon: \"/images/clouds.png\"\n                        };\n                    case \"Rain\":\n                        return {\n                            colour: \"#D6EAEA\",\n                            heading: \"Heads up! Looks like rain\",\n                            text: \"Don't forget to take an umbrella!\",\n                            icon: \"/images/heavy.png\"\n                        };\n                    case \"Hail\":\n                        return {\n                            colour: \"#D6EAEA\",\n                            heading: \"Caution: Hail\",\n                            text: \"Proceed with caution\",\n                            icon: \"/images/hail.png\"\n                        };\n                }\n            });\n            if (warningData) setWarnings(warningData);\n        }\n    }, [\n        forecast,\n        setWarnings\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetchWarnings();\n    }, [\n        forecast,\n        fetchWarnings\n    ]);\n    return {\n        warnings: warnings\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVibGljL2hvb2tzL3VzZVdhcm5pbmdzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF5RDtBQVF4RCxFQUFFLENBQUM7QUFFRyxJQUFNRyxXQUFXLEdBQUcsU0FBQ0MsUUFBcUIsRUFBSztJQUNwRCxJQUFnQ0gsR0FPOUIsR0FQOEJBLCtDQUFRLENBQVc7UUFDakQ7WUFDRUksTUFBTSxFQUFFLFNBQVM7WUFDakJDLE9BQU8sRUFBRSwyQkFBMkI7WUFDcENDLElBQUksRUFBRSxnREFBZ0Q7WUFDdERDLElBQUksRUFBRSxvQkFBb0I7U0FDM0I7S0FDRixDQUFDLEVBUEtDLFFBQVEsR0FBaUJSLEdBTzlCLEdBUGEsRUFBRVMsV0FBVyxHQUFJVCxHQU85QixHQVAwQjtJQVM1QixJQUFNVSxhQUFhLEdBQUdULGtEQUFXLENBQUMsV0FBTTtRQUN0QyxJQUFJRSxRQUFRLEVBQUU7WUFDWixJQUFNUSxVQUFVLEdBQUcscUZBQ2QsSUFBSUMsR0FBRyxDQUFDVCxRQUFRLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxNQUFNO3VCQUFLQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSTthQUFBLENBQUMsQ0FBQyxDQUF6RCxDQUNIQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztZQUVqQixJQUFNQyxXQUFXLEdBQUdSLFVBQVUsQ0FDM0JFLEdBQUcsQ0FBQyxTQUFDTyxTQUFTLEVBQUs7Z0JBQ2xCLE9BQVFBLFNBQVM7b0JBQ2YsS0FBSyxRQUFRO3dCQUNYLE9BQU87NEJBQ0xoQixNQUFNLEVBQUUsU0FBUzs0QkFDakJDLE9BQU8sRUFBRSxpQ0FBaUM7NEJBQzFDQyxJQUFJLEVBQUUscUNBQXFDOzRCQUMzQ0MsSUFBSSxFQUFFLG9CQUFvQjt5QkFDM0IsQ0FBQztvQkFDSixLQUFLLE1BQU07d0JBQ1QsT0FBTzs0QkFDTEgsTUFBTSxFQUFFLFNBQVM7NEJBQ2pCQyxPQUFPLEVBQUUsMkJBQTJCOzRCQUNwQ0MsSUFBSSxFQUFFLG1DQUFtQzs0QkFDekNDLElBQUksRUFBRSxtQkFBbUI7eUJBQzFCLENBQUM7b0JBQ0osS0FBSyxNQUFNO3dCQUNULE9BQU87NEJBQ0xILE1BQU0sRUFBRSxTQUFTOzRCQUNqQkMsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCQyxJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QkMsSUFBSSxFQUFFLGtCQUFrQjt5QkFDekIsQ0FBQztpQkFDTDthQUNGLENBQUM7WUFFSixJQUFJWSxXQUFXLEVBQUVWLFdBQVcsQ0FBQ1UsV0FBVyxDQUFDLENBQUM7U0FDM0M7S0FDRixFQUFFO1FBQUNoQixRQUFRO1FBQUVNLFdBQVc7S0FBQyxDQUFDO0lBRTNCVixnREFBUyxDQUFDLFdBQU07UUFDZFcsYUFBYSxFQUFFLENBQUM7S0FDakIsRUFBRTtRQUFDUCxRQUFRO1FBQUVPLGFBQWE7S0FBQyxDQUFDLENBQUM7SUFFOUIsT0FBTztRQUFFRixRQUFRLEVBQVJBLFFBQVE7S0FBRSxDQUFDO0NBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9ob29rcy91c2VXYXJuaW5ncy50cz9hMDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JlY2FzdCB9IGZyb20gXCIuL2FwaS91c2VXZWF0aGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FybmluZ3Mge1xuICBjb2xvdXI6IHN0cmluZztcbiAgaGVhZGluZzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn1bXTtcblxuZXhwb3J0IGNvbnN0IHVzZVdhcm5pbmdzID0gKGZvcmVjYXN0PzogRm9yZWNhc3RbXSkgPT4ge1xuICBjb25zdCBbd2FybmluZ3MsIHNldFdhcm5pbmdzXSA9IHVzZVN0YXRlPFdhcm5pbmdzPihbXG4gICAge1xuICAgICAgY29sb3VyOiBcIiNENkVBRUFcIixcbiAgICAgIGhlYWRpbmc6IFwiVGhlcmUncyBubyBkYXRhIGF2YWlsYWJsZVwiLFxuICAgICAgdGV4dDogXCJHbyBzdGFuZCBvdXRzaWRlIGFuZCBjb2xsZWN0IHRoZSBkYXRhIHlvdXJzZWxmXCIsXG4gICAgICBpY29uOiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGZldGNoV2FybmluZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KGZvcmVjYXN0Lm1hcCgocmVwb3J0KSA9PiByZXBvcnQud2VhdGhlclswXS5tYWluKSksXG4gICAgICBdLmZpbHRlcihCb29sZWFuKVxuXG4gICAgICBjb25zdCB3YXJuaW5nRGF0YSA9IGhpZ2hsaWdodHNcbiAgICAgICAgLm1hcCgoaGlnaGxpZ2h0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xvdXI6IFwiI0Q2RUFFQVwiLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiTm90aGluZyB3cm9uZyB3aXRoIGEgZmV3IGNsb3Vkc1wiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiUGVyZmVjdCB3ZWF0aGVyIGZvciBhIGNvenkgY2FyZGlnYW5cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvY2xvdWRzLnBuZ1wiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xvdXI6IFwiI0Q2RUFFQVwiLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiSGVhZHMgdXAhIExvb2tzIGxpa2UgcmFpblwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRG9uJ3QgZm9yZ2V0IHRvIHRha2UgYW4gdW1icmVsbGEhXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCIvaW1hZ2VzL2hlYXZ5LnBuZ1wiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBcIkhhaWxcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xvdXI6IFwiI0Q2RUFFQVwiLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiQ2F1dGlvbjogSGFpbFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJvY2VlZCB3aXRoIGNhdXRpb25cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvaGFpbC5wbmdcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIGlmICh3YXJuaW5nRGF0YSkgc2V0V2FybmluZ3Mod2FybmluZ0RhdGEpO1xuICAgIH1cbiAgfSwgW2ZvcmVjYXN0LCBzZXRXYXJuaW5nc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hXYXJuaW5ncygpO1xuICB9LCBbZm9yZWNhc3QsIGZldGNoV2FybmluZ3NdKTtcblxuICByZXR1cm4geyB3YXJuaW5ncyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlV2FybmluZ3MiLCJmb3JlY2FzdCIsImNvbG91ciIsImhlYWRpbmciLCJ0ZXh0IiwiaWNvbiIsIndhcm5pbmdzIiwic2V0V2FybmluZ3MiLCJmZXRjaFdhcm5pbmdzIiwiaGlnaGxpZ2h0cyIsIlNldCIsIm1hcCIsInJlcG9ydCIsIndlYXRoZXIiLCJtYWluIiwiZmlsdGVyIiwiQm9vbGVhbiIsIndhcm5pbmdEYXRhIiwiaGlnaGxpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/public/hooks/useWarnings.ts\n"));

/***/ })

});