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

/***/ "./src/hooks/useActivities.ts":
/*!************************************!*\
  !*** ./src/hooks/useActivities.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useActivities\": function() { return /* binding */ useActivities; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_useWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n\n\n\nvar useActivities = function() {\n    var ref = (0,_api_useWeather__WEBPACK_IMPORTED_MODULE_1__.useWeather)(), isDay = ref.isDay, forecast = ref.todaysForecast, weatherStats = ref.weatherStats;\n    var generalActivities = [\n        {\n            index: 1,\n            title: \"Tone and limber\",\n            blurb: \"Time to get zen. Stretch it out with your inner yogi\",\n            text: \"\",\n            icons: [\n                \"/images/pilates.png\",\n                \"/images/yoga.png\",\n                \"/images/yoga-pose.png\", \n            ]\n        },\n        {\n            index: 2,\n            title: \"Get Inspired\",\n            blurb: \"Travel to a far away world or learn something new\",\n            text: \"The world (and beyond) is your oyster when you hve a book in hand. Travel time and space or live like the whores of yore.\",\n            icons: [\n                \"/images/history-book.png\",\n                \"/images/book-shop.png\",\n                \"/images/romance.png\", \n            ]\n        },\n        {\n            index: 3,\n            title: \"Deep Soak\",\n            blurb: \"Relax with a steam, refresh with a swim\",\n            text: \"\",\n            icons: [\n                \"/images/whirlpool.png\",\n                \"/images/towel.png\",\n                \"/images/woman.png\", \n            ]\n        },\n        {\n            index: 6,\n            title: \"Ready Player One\",\n            blurb: \"Start your engines... 3. 2. 1. GO!\",\n            text: \"\",\n            icons: [\n                \"/images/joystick.png\",\n                \"/images/game-boy.png\",\n                \"/images/game-pad.png\", \n            ]\n        },\n        {\n            index: 7,\n            title: \"Get puzzling\",\n            blurb: \"Put your thinking cap on\",\n            text: \"\",\n            icons: [\n                \"/images/puzzle.png\",\n                \"/images/crossword.png\",\n                \"/images/heart-puzzle.png\", \n            ]\n        },\n        {\n            index: 8,\n            title: \"Play a tune\",\n            blurb: \"Become your very own virtuoso\",\n            text: \"\",\n            icons: [\n                \"/images/keyboard.png\",\n                \"/images/piano.png\",\n                \"/images/saxophone.png\", \n            ]\n        }, \n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generalActivities), activities = ref1[0], setActivities = ref1[1];\n    var fetchActivities = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        if (forecast) {\n            var highlights = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Set(forecast.map(function(report) {\n                return report.weather[0].main;\n            }))).filter(Boolean);\n            isDay && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        index: 4,\n                        title: \"Green Thumbelina\",\n                        blurb: \"Get in touch with your inner Horticulturist\",\n                        text: \"\",\n                        icons: [\n                            \"/images/gardening.png\",\n                            \"/images/gardening2.png\",\n                            \"/images/gardening3.png\", \n                        ]\n                    }, \n                ]);\n            });\n            isDay && !weatherStats.isRainy && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        index: 5,\n                        image: \"/images/gardens.jpg\",\n                        title: \"Soak up some sun\",\n                        blurb: \"Go for a stroll and find somewhere nice to read\",\n                        icons: [\n                            \"/images/sun.png\",\n                            \"/images/walking-the-dog.png\",\n                            \"/images/open-book.png\", \n                        ]\n                    }, \n                ]);\n            });\n        }\n    }, [\n        forecast,\n        setActivities\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        activities === generalActivities && fetchActivities();\n    }, [\n        forecast,\n        fetchActivities\n    ]);\n    return {\n        activities: activities\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBQXVCOzRCQUN2Qix3QkFBd0I7NEJBQ3hCLHdCQUF3Qjt5QkFDekI7cUJBQ0Y7aUJBQ0Y7YUFBQSxDQUFDLENBQUM7WUFFTFQsS0FBSyxJQUNILENBQUNHLFlBQVksQ0FBQ21CLE9BQU8sSUFDckJYLGFBQWEsQ0FBQyxTQUFDVSxjQUFjO3VCQUFLLHFGQUM3QkEsY0FBYyxDQUFkQSxRQUQ2QjtvQkFFaEM7d0JBQ0VoQixLQUFLLEVBQUUsQ0FBQzt3QkFDUmtCLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCakIsS0FBSyxFQUFFLGtCQUFrQjt3QkFDekJDLEtBQUssRUFBRSxpREFBaUQ7d0JBQ3hERSxLQUFLLEVBQUU7NEJBQ0wsaUJBQWlCOzRCQUNqQiw2QkFBNkI7NEJBQzdCLHVCQUF1Qjt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFBQSxDQUFDLENBQUM7U0FDTjtLQUNGLEVBQUU7UUFBQ1AsUUFBUTtRQUFFUyxhQUFhO0tBQUMsQ0FBQztJQUU3QmhCLGdEQUFTLENBQUMsV0FBTTtRQUNkZSxVQUFVLEtBQUtOLGlCQUFpQixJQUFJUSxlQUFlLEVBQUUsQ0FBQztLQUN2RCxFQUFFO1FBQUNWLFFBQVE7UUFBRVUsZUFBZTtLQUFDLENBQUMsQ0FBQztJQUVoQyxPQUFPO1FBQUVGLFVBQVUsRUFBVkEsVUFBVTtLQUFFLENBQUM7Q0FDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQWN0aXZpdGllcy50cz81YjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXZWF0aGVyIH0gZnJvbSBcIi4vYXBpL3VzZVdlYXRoZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eURhdGEge1xuICBpbmRleDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBibHVyYjogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpY29uczogc3RyaW5nW107XG4gIGxvY2F0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQWN0aXZpdGllcyA9ICgpID0+IHtcbiAgY29uc3QgeyBpc0RheSwgdG9kYXlzRm9yZWNhc3Q6IGZvcmVjYXN0LCB3ZWF0aGVyU3RhdHMgfSA9IHVzZVdlYXRoZXIoKTtcblxuICBjb25zdCBnZW5lcmFsQWN0aXZpdGllcyA9IFtcbiAgICB7XG4gICAgICBpbmRleDogMSxcbiAgICAgIHRpdGxlOiBcIlRvbmUgYW5kIGxpbWJlclwiLFxuICAgICAgYmx1cmI6IFwiVGltZSB0byBnZXQgemVuLiBTdHJldGNoIGl0IG91dCB3aXRoIHlvdXIgaW5uZXIgeW9naVwiLFxuICAgICAgdGV4dDogXCJcIixcbiAgICAgIGljb25zOiBbXG4gICAgICAgIFwiL2ltYWdlcy9waWxhdGVzLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMveW9nYS5wbmdcIixcbiAgICAgICAgXCIvaW1hZ2VzL3lvZ2EtcG9zZS5wbmdcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMixcbiAgICAgIHRpdGxlOiBcIkdldCBJbnNwaXJlZFwiLFxuICAgICAgYmx1cmI6IFwiVHJhdmVsIHRvIGEgZmFyIGF3YXkgd29ybGQgb3IgbGVhcm4gc29tZXRoaW5nIG5ld1wiLFxuICAgICAgdGV4dDogXCJUaGUgd29ybGQgKGFuZCBiZXlvbmQpIGlzIHlvdXIgb3lzdGVyIHdoZW4geW91IGh2ZSBhIGJvb2sgaW4gaGFuZC4gVHJhdmVsIHRpbWUgYW5kIHNwYWNlIG9yIGxpdmUgbGlrZSB0aGUgd2hvcmVzIG9mIHlvcmUuXCIsXG4gICAgICBpY29uczogW1xuICAgICAgICBcIi9pbWFnZXMvaGlzdG9yeS1ib29rLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvYm9vay1zaG9wLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvcm9tYW5jZS5wbmdcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMyxcbiAgICAgIHRpdGxlOiBcIkRlZXAgU29ha1wiLFxuICAgICAgYmx1cmI6IFwiUmVsYXggd2l0aCBhIHN0ZWFtLCByZWZyZXNoIHdpdGggYSBzd2ltXCIsXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgICAgaWNvbnM6IFtcbiAgICAgICAgXCIvaW1hZ2VzL3doaXJscG9vbC5wbmdcIixcbiAgICAgICAgXCIvaW1hZ2VzL3Rvd2VsLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvd29tYW4ucG5nXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5kZXg6IDYsXG4gICAgICB0aXRsZTogXCJSZWFkeSBQbGF5ZXIgT25lXCIsXG4gICAgICBibHVyYjogXCJTdGFydCB5b3VyIGVuZ2luZXMuLi4gMy4gMi4gMS4gR08hXCIsXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgICAgaWNvbnM6IFtcbiAgICAgICAgXCIvaW1hZ2VzL2pveXN0aWNrLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvZ2FtZS1ib3kucG5nXCIsXG4gICAgICAgIFwiL2ltYWdlcy9nYW1lLXBhZC5wbmdcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogNyxcbiAgICAgIHRpdGxlOiBcIkdldCBwdXp6bGluZ1wiLFxuICAgICAgYmx1cmI6IFwiUHV0IHlvdXIgdGhpbmtpbmcgY2FwIG9uXCIsXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgICAgaWNvbnM6IFtcbiAgICAgICAgXCIvaW1hZ2VzL3B1enpsZS5wbmdcIixcbiAgICAgICAgXCIvaW1hZ2VzL2Nyb3Nzd29yZC5wbmdcIixcbiAgICAgICAgXCIvaW1hZ2VzL2hlYXJ0LXB1enpsZS5wbmdcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogOCxcbiAgICAgIHRpdGxlOiBcIlBsYXkgYSB0dW5lXCIsXG4gICAgICBibHVyYjogXCJCZWNvbWUgeW91ciB2ZXJ5IG93biB2aXJ0dW9zb1wiLFxuICAgICAgdGV4dDogXCJcIixcbiAgICAgIGljb25zOiBbXG4gICAgICAgXCIvaW1hZ2VzL2tleWJvYXJkLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvcGlhbm8ucG5nXCIsXG4gICAgICAgIFwiL2ltYWdlcy9zYXhvcGhvbmUucG5nXCIsXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgW2FjdGl2aXRpZXMsIHNldEFjdGl2aXRpZXNdID1cbiAgICB1c2VTdGF0ZTxBY3Rpdml0eURhdGFbXT4oZ2VuZXJhbEFjdGl2aXRpZXMpO1xuXG4gIGNvbnN0IGZldGNoQWN0aXZpdGllcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoZm9yZWNhc3QubWFwKChyZXBvcnQpID0+IHJlcG9ydC53ZWF0aGVyWzBdLm1haW4pKSxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICBpc0RheSAmJlxuICAgICAgICBzZXRBY3Rpdml0aWVzKChwcmV2QWN0aXZpdGllcykgPT4gW1xuICAgICAgICAgIC4uLnByZXZBY3Rpdml0aWVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGluZGV4OiA0LFxuICAgICAgICAgICAgdGl0bGU6IFwiR3JlZW4gVGh1bWJlbGluYVwiLFxuICAgICAgICAgICAgYmx1cmI6IFwiR2V0IGluIHRvdWNoIHdpdGggeW91ciBpbm5lciBIb3J0aWN1bHR1cmlzdFwiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy9nYXJkZW5pbmcucG5nXCIsXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy9nYXJkZW5pbmcyLnBuZ1wiLFxuICAgICAgICAgICAgICBcIi9pbWFnZXMvZ2FyZGVuaW5nMy5wbmdcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgIGlzRGF5ICYmXG4gICAgICAgICF3ZWF0aGVyU3RhdHMuaXNSYWlueSAmJlxuICAgICAgICBzZXRBY3Rpdml0aWVzKChwcmV2QWN0aXZpdGllcykgPT4gW1xuICAgICAgICAgIC4uLnByZXZBY3Rpdml0aWVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGluZGV4OiA1LFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9nYXJkZW5zLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiU29hayB1cCBzb21lIHN1blwiLFxuICAgICAgICAgICAgYmx1cmI6IFwiR28gZm9yIGEgc3Ryb2xsIGFuZCBmaW5kIHNvbWV3aGVyZSBuaWNlIHRvIHJlYWRcIixcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy9zdW4ucG5nXCIsXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy93YWxraW5nLXRoZS1kb2cucG5nXCIsXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy9vcGVuLWJvb2sucG5nXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cbiAgfSwgW2ZvcmVjYXN0LCBzZXRBY3Rpdml0aWVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpdml0aWVzID09PSBnZW5lcmFsQWN0aXZpdGllcyAmJiBmZXRjaEFjdGl2aXRpZXMoKTtcbiAgfSwgW2ZvcmVjYXN0LCBmZXRjaEFjdGl2aXRpZXNdKTtcblxuICByZXR1cm4geyBhY3Rpdml0aWVzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VXZWF0aGVyIiwidXNlQWN0aXZpdGllcyIsImlzRGF5IiwidG9kYXlzRm9yZWNhc3QiLCJmb3JlY2FzdCIsIndlYXRoZXJTdGF0cyIsImdlbmVyYWxBY3Rpdml0aWVzIiwiaW5kZXgiLCJ0aXRsZSIsImJsdXJiIiwidGV4dCIsImljb25zIiwiYWN0aXZpdGllcyIsInNldEFjdGl2aXRpZXMiLCJmZXRjaEFjdGl2aXRpZXMiLCJoaWdobGlnaHRzIiwiU2V0IiwibWFwIiwicmVwb3J0Iiwid2VhdGhlciIsIm1haW4iLCJmaWx0ZXIiLCJCb29sZWFuIiwicHJldkFjdGl2aXRpZXMiLCJpc1JhaW55IiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useActivities.ts\n"));

/***/ })

});