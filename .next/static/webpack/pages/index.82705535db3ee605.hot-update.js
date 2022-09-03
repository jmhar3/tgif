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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useActivities\": function() { return /* binding */ useActivities; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_useWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/useWeather */ \"./src/hooks/api/useWeather.ts\");\n\n\n\nvar useActivities = function() {\n    var ref = (0,_api_useWeather__WEBPACK_IMPORTED_MODULE_1__.useWeather)(), isDay = ref.isDay, forecast = ref.todaysForecast, weatherStats = ref.weatherStats;\n    var generalActivities = [\n        {\n            title: \"Tone and limber\",\n            blurb: \"Time to get zen. Stretch it out with your inner yogi\",\n            text: \"\",\n            icons: [\n                \"/images/pilates.png\",\n                \"/images/yoga.png\",\n                \"/images/yoga-pose.png\", \n            ]\n        },\n        {\n            title: \"Get Inspired\",\n            blurb: \"Travel to a far away world or learn something new\",\n            text: \"The world (and beyond) is your oyster when you hve a book in hand. Travel time and space or live like the whores of yore.\",\n            icons: [\n                \"/images/history-book.png\",\n                \"/images/book-shop.png\",\n                \"/images/romance.png\", \n            ]\n        },\n        {\n            title: \"Deep Soak\",\n            blurb: \"Relax with a steam, refresh with a swim\",\n            text: \"\",\n            icons: [\n                \"/images/whirlpool.png\",\n                \"/images/towel.png\",\n                \"/images/woman.png\", \n            ]\n        }, \n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generalActivities), activities = ref1[0], setActivities = ref1[1];\n    var fetchActivities = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        if (forecast) {\n            var highlights = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new Set(forecast.map(function(report) {\n                return report.weather[0].main;\n            }))).filter(Boolean);\n            isDay && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        title: \"Green Thumbelina\",\n                        blurb: \"Get in touch with your inner Horticulturist\",\n                        text: \"\",\n                        icons: [\n                            \"/images/gardening.png\",\n                            \"/images/gardening2.png\",\n                            \"/images/gardening3.png\", \n                        ]\n                    }, \n                ]);\n            });\n            isDay && !weatherStats.isRainy && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        image: \"/images/gardens.jpg\",\n                        title: \"Soak up some sun\",\n                        blurb: \"Go for a stroll and find somewhere nice to read\",\n                        icons: [\n                            \"/images/sun.png\",\n                            \"/images/walking-the-dog.png\",\n                            \"/images/open-book.png\", \n                        ]\n                    }, \n                ]);\n            });\n            !isDay && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        title: \"Ready Player One\",\n                        blurb: \"Start your engines... 3. 2. 1. GO!\",\n                        text: \"\",\n                        icons: [\n                            \"/images/joystick.png\",\n                            \"/images/game-boy.png\",\n                            \"/images/game-pad.png\", \n                        ]\n                    }, \n                ]);\n            });\n            !isDay && setActivities(function(prevActivities) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prevActivities).concat([\n                    {\n                        title: \"Get puzzling\",\n                        blurb: \"Put your thinking cap on\",\n                        text: \"\",\n                        icons: [\n                            \"/images/puzzle.png\",\n                            \"/images/heart-puzzle.png\",\n                            \"/images/crossword.png\", \n                        ]\n                    }, \n                ]);\n            });\n        }\n    }, [\n        forecast,\n        setActivities\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        activities === generalActivities && fetchActivities();\n    }, [\n        forecast,\n        fetchActivities\n    ]);\n    return {\n        activities: activities\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBQSxDQUFDLENBQUM7WUFFTCxDQUFDUixLQUFLLElBQ0pVLGFBQWEsQ0FBQyxTQUFDVSxjQUFjO3VCQUFLLHFGQUM3QkEsY0FBYyxDQUFkQSxRQUQ2QjtvQkFFaEM7d0JBQ0VmLEtBQUssRUFBRSxjQUFjO3dCQUNyQkMsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakNDLElBQUksRUFBRSxFQUFFO3dCQUNSQyxLQUFLLEVBQUU7NEJBQ0wsb0JBQW9COzRCQUNwQiwwQkFBMEI7NEJBQzFCLHVCQUF1Qjt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFBQSxDQUFDLENBQUM7U0FDTjtLQUNGLEVBQUU7UUFBQ04sUUFBUTtRQUFFUSxhQUFhO0tBQUMsQ0FBQztJQUU3QmYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RjLFVBQVUsS0FBS0wsaUJBQWlCLElBQUlPLGVBQWUsRUFBRSxDQUFDO0tBQ3ZELEVBQUU7UUFBQ1QsUUFBUTtRQUFFUyxlQUFlO0tBQUMsQ0FBQyxDQUFDO0lBRWhDLE9BQU87UUFBRUYsVUFBVSxFQUFWQSxVQUFVO0tBQUUsQ0FBQztDQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VBY3Rpdml0aWVzLnRzPzViMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdlYXRoZXIgfSBmcm9tIFwiLi9hcGkvdXNlV2VhdGhlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhcm5pbmdEYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYmx1cmI6IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgaWNvbnM6IHN0cmluZ1tdO1xuICBsb2NhdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNEYXksIHRvZGF5c0ZvcmVjYXN0OiBmb3JlY2FzdCwgd2VhdGhlclN0YXRzIH0gPSB1c2VXZWF0aGVyKCk7XG5cbiAgY29uc3QgZ2VuZXJhbEFjdGl2aXRpZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiVG9uZSBhbmQgbGltYmVyXCIsXG4gICAgICBibHVyYjogXCJUaW1lIHRvIGdldCB6ZW4uIFN0cmV0Y2ggaXQgb3V0IHdpdGggeW91ciBpbm5lciB5b2dpXCIsXG4gICAgICB0ZXh0OiBcIlwiLFxuICAgICAgaWNvbnM6IFtcbiAgICAgICAgXCIvaW1hZ2VzL3BpbGF0ZXMucG5nXCIsXG4gICAgICAgIFwiL2ltYWdlcy95b2dhLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMveW9nYS1wb3NlLnBuZ1wiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkdldCBJbnNwaXJlZFwiLFxuICAgICAgYmx1cmI6IFwiVHJhdmVsIHRvIGEgZmFyIGF3YXkgd29ybGQgb3IgbGVhcm4gc29tZXRoaW5nIG5ld1wiLFxuICAgICAgdGV4dDogXCJUaGUgd29ybGQgKGFuZCBiZXlvbmQpIGlzIHlvdXIgb3lzdGVyIHdoZW4geW91IGh2ZSBhIGJvb2sgaW4gaGFuZC4gVHJhdmVsIHRpbWUgYW5kIHNwYWNlIG9yIGxpdmUgbGlrZSB0aGUgd2hvcmVzIG9mIHlvcmUuXCIsXG4gICAgICBpY29uczogW1xuICAgICAgICBcIi9pbWFnZXMvaGlzdG9yeS1ib29rLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvYm9vay1zaG9wLnBuZ1wiLFxuICAgICAgICBcIi9pbWFnZXMvcm9tYW5jZS5wbmdcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJEZWVwIFNvYWtcIixcbiAgICAgIGJsdXJiOiBcIlJlbGF4IHdpdGggYSBzdGVhbSwgcmVmcmVzaCB3aXRoIGEgc3dpbVwiLFxuICAgICAgdGV4dDogXCJcIixcbiAgICAgIGljb25zOiBbXG4gICAgICAgIFwiL2ltYWdlcy93aGlybHBvb2wucG5nXCIsXG4gICAgICAgIFwiL2ltYWdlcy90b3dlbC5wbmdcIixcbiAgICAgICAgXCIvaW1hZ2VzL3dvbWFuLnBuZ1wiLFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFthY3Rpdml0aWVzLCBzZXRBY3Rpdml0aWVzXSA9XG4gICAgdXNlU3RhdGU8V2FybmluZ0RhdGFbXT4oZ2VuZXJhbEFjdGl2aXRpZXMpO1xuXG4gIGNvbnN0IGZldGNoQWN0aXZpdGllcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoZm9yZWNhc3QubWFwKChyZXBvcnQpID0+IHJlcG9ydC53ZWF0aGVyWzBdLm1haW4pKSxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICBpc0RheSAmJlxuICAgICAgICBzZXRBY3Rpdml0aWVzKChwcmV2QWN0aXZpdGllcykgPT4gW1xuICAgICAgICAgIC4uLnByZXZBY3Rpdml0aWVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkdyZWVuIFRodW1iZWxpbmFcIixcbiAgICAgICAgICAgIGJsdXJiOiBcIkdldCBpbiB0b3VjaCB3aXRoIHlvdXIgaW5uZXIgSG9ydGljdWx0dXJpc3RcIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICBcIi9pbWFnZXMvZ2FyZGVuaW5nLnBuZ1wiLFxuICAgICAgICAgICAgICBcIi9pbWFnZXMvZ2FyZGVuaW5nMi5wbmdcIixcbiAgICAgICAgICAgICAgXCIvaW1hZ2VzL2dhcmRlbmluZzMucG5nXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICBpc0RheSAmJlxuICAgICAgICAhd2VhdGhlclN0YXRzLmlzUmFpbnkgJiZcbiAgICAgICAgc2V0QWN0aXZpdGllcygocHJldkFjdGl2aXRpZXMpID0+IFtcbiAgICAgICAgICAuLi5wcmV2QWN0aXZpdGllcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2dhcmRlbnMuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJTb2FrIHVwIHNvbWUgc3VuXCIsXG4gICAgICAgICAgICBibHVyYjogXCJHbyBmb3IgYSBzdHJvbGwgYW5kIGZpbmQgc29tZXdoZXJlIG5pY2UgdG8gcmVhZFwiLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAgXCIvaW1hZ2VzL3N1bi5wbmdcIixcbiAgICAgICAgICAgICAgXCIvaW1hZ2VzL3dhbGtpbmctdGhlLWRvZy5wbmdcIixcbiAgICAgICAgICAgICAgXCIvaW1hZ2VzL29wZW4tYm9vay5wbmdcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICFpc0RheSAmJlxuICAgICAgICBzZXRBY3Rpdml0aWVzKChwcmV2QWN0aXZpdGllcykgPT4gW1xuICAgICAgICAgIC4uLnByZXZBY3Rpdml0aWVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlYWR5IFBsYXllciBPbmVcIixcbiAgICAgICAgICAgIGJsdXJiOiBcIlN0YXJ0IHlvdXIgZW5naW5lcy4uLiAzLiAyLiAxLiBHTyFcIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICBcIi9pbWFnZXMvam95c3RpY2sucG5nXCIsXG4gICAgICAgICAgICAgIFwiL2ltYWdlcy9nYW1lLWJveS5wbmdcIixcbiAgICAgICAgICAgICAgXCIvaW1hZ2VzL2dhbWUtcGFkLnBuZ1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgIWlzRGF5ICYmXG4gICAgICAgIHNldEFjdGl2aXRpZXMoKHByZXZBY3Rpdml0aWVzKSA9PiBbXG4gICAgICAgICAgLi4ucHJldkFjdGl2aXRpZXMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiR2V0IHB1enpsaW5nXCIsXG4gICAgICAgICAgICBibHVyYjogXCJQdXQgeW91ciB0aGlua2luZyBjYXAgb25cIixcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICBcIi9pbWFnZXMvcHV6emxlLnBuZ1wiLFxuICAgICAgICAgICAgICBcIi9pbWFnZXMvaGVhcnQtcHV6emxlLnBuZ1wiLFxuICAgICAgICAgICAgICBcIi9pbWFnZXMvY3Jvc3N3b3JkLnBuZ1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG4gIH0sIFtmb3JlY2FzdCwgc2V0QWN0aXZpdGllc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZpdGllcyA9PT0gZ2VuZXJhbEFjdGl2aXRpZXMgJiYgZmV0Y2hBY3Rpdml0aWVzKCk7XG4gIH0sIFtmb3JlY2FzdCwgZmV0Y2hBY3Rpdml0aWVzXSk7XG5cbiAgcmV0dXJuIHsgYWN0aXZpdGllcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlV2VhdGhlciIsInVzZUFjdGl2aXRpZXMiLCJpc0RheSIsInRvZGF5c0ZvcmVjYXN0IiwiZm9yZWNhc3QiLCJ3ZWF0aGVyU3RhdHMiLCJnZW5lcmFsQWN0aXZpdGllcyIsInRpdGxlIiwiYmx1cmIiLCJ0ZXh0IiwiaWNvbnMiLCJhY3Rpdml0aWVzIiwic2V0QWN0aXZpdGllcyIsImZldGNoQWN0aXZpdGllcyIsImhpZ2hsaWdodHMiLCJTZXQiLCJtYXAiLCJyZXBvcnQiLCJ3ZWF0aGVyIiwibWFpbiIsImZpbHRlciIsIkJvb2xlYW4iLCJwcmV2QWN0aXZpdGllcyIsImlzUmFpbnkiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useActivities.ts\n"));

/***/ })

});