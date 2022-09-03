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

/***/ "./src/hooks/useOutfit.ts":
/*!********************************!*\
  !*** ./src/hooks/useOutfit.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useOutfit\": function() { return /* binding */ useOutfit; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useOutfit = function(props) {\n    var weatherStats = props.weatherStats, activityLevel = props.activityLevel;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        accessory: undefined,\n        top: undefined,\n        bottoms: undefined\n    }), outfitRecommendation = ref[0], setOutfitRecommendation = ref[1];\n    var generateOutfit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        var isCold = weatherStats.isCold, isHumid = weatherStats.isHumid, isWindy = weatherStats.isWindy, rain = weatherStats.rain, light = weatherStats.light;\n        if (isCold) {\n            if (isHumid) {\n                if (isWindy) {\n                    if (rain === \"low\") {\n                        if (activityLevel === \"low\") {\n                        // is cold + humid + windy + chance of rain + low activity\n                        } else if (activityLevel === \"medium\") {\n                        // is cold + humid + windy + chance of rain + medium activity\n                        } else {\n                        // is cold + humid + windy + chance of rain + high activity\n                        }\n                    } else if (rain === \"medium\") {\n                    // is cold + humid + windy + rain\n                    } else {\n                    // is cold + humid + windy + heavy rain\n                    }\n                } else {\n                // is cold + humid + not windy\n                }\n            } else {\n                if (isWindy) {\n                // is cold + not humid + windy\n                } else {\n                // is cold + not humid + not windy\n                }\n            }\n        } else {}\n    }, [\n        weatherStats,\n        activityLevel\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        return generateOutfit();\n    }, []);\n    return {\n        weatherStats: weatherStats,\n        outfitRecommendation: outfitRecommendation\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlT3V0Zml0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQWNsRCxJQUFNRyxTQUFTLEdBQUcsU0FBQ0MsS0FBa0IsRUFBSztJQUMvQyxJQUFRQyxZQUFZLEdBQW9CRCxLQUFLLENBQXJDQyxZQUFZLEVBQUVDLGFBQWEsR0FBS0YsS0FBSyxDQUF2QkUsYUFBYTtJQUVuQyxJQUF3REosR0FJdEQsR0FKc0RBLCtDQUFRLENBQUM7UUFDL0RLLFNBQVMsRUFBRUMsU0FBUztRQUNwQkMsR0FBRyxFQUFFRCxTQUFTO1FBQ2RFLE9BQU8sRUFBRUYsU0FBUztLQUNuQixDQUFDLEVBSktHLG9CQUFvQixHQUE2QlQsR0FJdEQsR0FKeUIsRUFBRVUsdUJBQXVCLEdBQUlWLEdBSXRELEdBSmtEO0lBTXBELElBQU1XLGNBQWMsR0FBR1osa0RBQVcsQ0FBQyxXQUFNO1FBQ3ZDLElBQVFhLE1BQU0sR0FBb0NULFlBQVksQ0FBdERTLE1BQU0sRUFBRUMsT0FBTyxHQUEyQlYsWUFBWSxDQUE5Q1UsT0FBTyxFQUFFQyxPQUFPLEdBQWtCWCxZQUFZLENBQXJDVyxPQUFPLEVBQUVDLElBQUksR0FBWVosWUFBWSxDQUE1QlksSUFBSSxFQUFFQyxLQUFLLEdBQUtiLFlBQVksQ0FBdEJhLEtBQUs7UUFFN0MsSUFBSUosTUFBTSxFQUFFO1lBQ1YsSUFBSUMsT0FBTyxFQUFFO2dCQUNYLElBQUlDLE9BQU8sRUFBRTtvQkFDWCxJQUFJQyxJQUFJLEtBQUssS0FBSyxFQUFFO3dCQUNsQixJQUFJWCxhQUFhLEtBQUssS0FBSyxFQUFFO3dCQUM3QiwwREFBMEQ7eUJBQ3pELE1BQU0sSUFBSUEsYUFBYSxLQUFLLFFBQVEsRUFBRTt3QkFDdkMsNkRBQTZEO3lCQUM1RCxNQUFNO3dCQUNOLDJEQUEyRDt5QkFDM0Q7cUJBQ0YsTUFBTSxJQUFJVyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUM3QixpQ0FBaUM7cUJBQ2pDLE1BQU07b0JBQ04sdUNBQXVDO3FCQUN2QztpQkFDRixNQUFNO2dCQUNMLDhCQUE4QjtpQkFDL0I7YUFDRixNQUFNO2dCQUNMLElBQUlELE9BQU8sRUFBRTtnQkFDWCw4QkFBOEI7aUJBQy9CLE1BQU07Z0JBQ0wsa0NBQWtDO2lCQUNuQzthQUNGO1NBQ0YsTUFBTSxFQUNOO0tBQ0YsRUFBRTtRQUFDWCxZQUFZO1FBQUVDLGFBQWE7S0FBQyxDQUFDO0lBRWpDTixnREFBUyxDQUFDO2VBQU1hLGNBQWMsRUFBRTtLQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdEMsT0FBTztRQUFFUixZQUFZLEVBQVpBLFlBQVk7UUFBRU0sb0JBQW9CLEVBQXBCQSxvQkFBb0I7S0FBRSxDQUFDO0NBQy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZU91dGZpdC50cz8wYTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWF0aGVyU3RhdHMgfSBmcm9tIFwiLi4vcGFnZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPdXRmaXRQcm9wcyB7XG4gIHdlYXRoZXJTdGF0czogV2VhdGhlclN0YXRzO1xuICBhY3Rpdml0eUxldmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0Zml0RGF0YSB7XG4gIGFjY2Vzc29yeT86IHN0cmluZztcbiAgdG9wPzogc3RyaW5nO1xuICBib3R0b21zPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlT3V0Zml0ID0gKHByb3BzOiBPdXRmaXRQcm9wcykgPT4ge1xuICBjb25zdCB7IHdlYXRoZXJTdGF0cywgYWN0aXZpdHlMZXZlbCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW291dGZpdFJlY29tbWVuZGF0aW9uLCBzZXRPdXRmaXRSZWNvbW1lbmRhdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgYWNjZXNzb3J5OiB1bmRlZmluZWQsXG4gICAgdG9wOiB1bmRlZmluZWQsXG4gICAgYm90dG9tczogdW5kZWZpbmVkLFxuICB9KTtcblxuICBjb25zdCBnZW5lcmF0ZU91dGZpdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGlzQ29sZCwgaXNIdW1pZCwgaXNXaW5keSwgcmFpbiwgbGlnaHQgfSA9IHdlYXRoZXJTdGF0cztcblxuICAgIGlmIChpc0NvbGQpIHtcbiAgICAgIGlmIChpc0h1bWlkKSB7XG4gICAgICAgIGlmIChpc1dpbmR5KSB7XG4gICAgICAgICAgaWYgKHJhaW4gPT09IFwibG93XCIpIHtcbiAgICAgICAgICAgIGlmIChhY3Rpdml0eUxldmVsID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgICAvLyBpcyBjb2xkICsgaHVtaWQgKyB3aW5keSArIGNoYW5jZSBvZiByYWluICsgbG93IGFjdGl2aXR5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2aXR5TGV2ZWwgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgIC8vIGlzIGNvbGQgKyBodW1pZCArIHdpbmR5ICsgY2hhbmNlIG9mIHJhaW4gKyBtZWRpdW0gYWN0aXZpdHlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gaXMgY29sZCArIGh1bWlkICsgd2luZHkgKyBjaGFuY2Ugb2YgcmFpbiArIGhpZ2ggYWN0aXZpdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHJhaW4gPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgLy8gaXMgY29sZCArIGh1bWlkICsgd2luZHkgKyByYWluXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgLy8gaXMgY29sZCArIGh1bWlkICsgd2luZHkgKyBoZWF2eSByYWluXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlzIGNvbGQgKyBodW1pZCArIG5vdCB3aW5keVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNXaW5keSkge1xuICAgICAgICAgIC8vIGlzIGNvbGQgKyBub3QgaHVtaWQgKyB3aW5keVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlzIGNvbGQgKyBub3QgaHVtaWQgKyBub3Qgd2luZHlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9LCBbd2VhdGhlclN0YXRzLCBhY3Rpdml0eUxldmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGdlbmVyYXRlT3V0Zml0KCksIFtdKTtcblxuICByZXR1cm4geyB3ZWF0aGVyU3RhdHMsIG91dGZpdFJlY29tbWVuZGF0aW9uIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VPdXRmaXQiLCJwcm9wcyIsIndlYXRoZXJTdGF0cyIsImFjdGl2aXR5TGV2ZWwiLCJhY2Nlc3NvcnkiLCJ1bmRlZmluZWQiLCJ0b3AiLCJib3R0b21zIiwib3V0Zml0UmVjb21tZW5kYXRpb24iLCJzZXRPdXRmaXRSZWNvbW1lbmRhdGlvbiIsImdlbmVyYXRlT3V0Zml0IiwiaXNDb2xkIiwiaXNIdW1pZCIsImlzV2luZHkiLCJyYWluIiwibGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useOutfit.ts\n"));

/***/ })

});