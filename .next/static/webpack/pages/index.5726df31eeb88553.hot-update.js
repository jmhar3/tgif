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

/***/ "./src/components/activity/window/RewardChart.tsx":
/*!********************************************************!*\
  !*** ./src/components/activity/window/RewardChart.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StickerChart\": function() { return /* binding */ StickerChart; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _buttons_SelfCareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../buttons/SelfCareButton */ \"./src/components/buttons/SelfCareButton.tsx\");\n/* harmony import */ var _buttons_ChallengeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../buttons/ChallengeButton */ \"./src/components/buttons/ChallengeButton.tsx\");\n/* harmony import */ var _modals_RewardStoreModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modals/RewardStoreModal */ \"./src/components/modals/RewardStoreModal.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StickerChart = function() {\n    _s();\n    var ref = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useCounter)(0), credits = ref.count, increment = ref.increment, decrement = ref.decrement;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            index: 0,\n            label: \"Exercise\",\n            image: \"/images/sport.png\",\n            isComplete: false\n        },\n        {\n            index: 1,\n            label: \"Meditate\",\n            image: \"/images/meditation.png\",\n            isComplete: false\n        },\n        {\n            index: 2,\n            label: \"Eat Healthy\",\n            image: \"/images/vegetables.png\",\n            isComplete: false\n        }, \n    ]), selfCareTasks = ref1[0], setSelfCareTasks = ref1[1];\n    var challenges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return [\n            {\n                index: 0,\n                image: \"/images/coffee-beans.png\",\n                label: \"Coffee Free\",\n                duration: 30,\n                completed: 0\n            },\n            {\n                index: 1,\n                image: \"/images/bud.png\",\n                label: \"Weed Free\",\n                duration: 30,\n                completed: 0\n            }, \n        ];\n    }, []);\n    var rewards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return [\n            {\n                label: \"Hunt A Killer\",\n                value: 30\n            },\n            {\n                label: \"Record Player\",\n                value: 90\n            },\n            {\n                label: \"23andMe\",\n                value: 45\n            },\n            {\n                label: \"Projector\",\n                value: 120\n            }, \n        ];\n    }, []);\n    var onSelfCareButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(index) {\n        setSelfCareTasks(function(prevState) {\n            return prevState.map(function(prevTask) {\n                if (prevTask.index === index) {\n                    !prevTask.isComplete ? increment() : decrement();\n                    return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prevTask), {\n                        isComplete: !prevTask.isComplete\n                    });\n                } else {\n                    return prevTask;\n                }\n            });\n        });\n    }, [\n        setSelfCareTasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.VStack, {\n        bg: \"neutral.light\",\n        borderRadius: \"lg\",\n        w: \"200%\",\n        p: \"5\",\n        spacing: \"3\",\n        justify: \"space-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                w: \"100%\",\n                spacing: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                        w: \"100%\",\n                        justify: \"space-between\",\n                        direction: [\n                            \"column\",\n                            \"row\"\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {\n                                gap: \"1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Img, {\n                                        maxW: \"9\",\n                                        src: \"/images/badge.png\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                                        fontSize: \"2xl\",\n                                        children: \"Reward Centre\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_RewardStoreModal__WEBPACK_IMPORTED_MODULE_5__.RewardStoreModal, {\n                                rewards: rewards,\n                                credits: credits\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {\n                        gap: \"3\",\n                        children: selfCareTasks.map(function(task) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_SelfCareButton__WEBPACK_IMPORTED_MODULE_3__.SelfCareButton, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, task), {\n                                onSelfCareButtonClick: onSelfCareButtonClick\n                            }), void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                direction: \"row\",\n                justify: \"space-between\",\n                w: \"100%\",\n                spacing: \"5\",\n                children: challenges.map(function(challenge) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_ChallengeButton__WEBPACK_IMPORTED_MODULE_4__.ChallengeButton, {\n                        challenge: challenge\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(StickerChart, \"4ZUwYcf7dhXR3UIpxwVSNa9X5/4=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useCounter\n    ];\n});\n_c = StickerChart;\nvar _c;\n$RefreshReg$(_c, \"StickerChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvUmV3YXJkQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUEwQztBQUNEO0FBRThCO0FBRVQ7QUFDYTtBQUNWO0FBQzdCO0FBRTdCLElBQU1ZLFlBQVksR0FBRyxXQUFNOztJQUNoQyxJQUFpRFYsR0FBYSxHQUFiQSx1REFBVSxDQUFDLENBQUMsQ0FBQyxFQUF0RFcsT0FBYyxHQUEyQlgsR0FBYSxDQUF0RFcsS0FBSyxFQUFXRSxTQUFTLEdBQWdCYixHQUFhLENBQXRDYSxTQUFTLEVBQUVDLFNBQVMsR0FBS2QsR0FBYSxDQUEzQmMsU0FBUztJQUU1QyxJQUEwQ2hCLElBbUJ4QyxHQW5Cd0NBLCtDQUFRLENBQUM7UUFDakQ7WUFDRWlCLEtBQUssRUFBRSxDQUFDO1lBQ1JDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCQyxVQUFVLEVBQUUsS0FBSztTQUNsQjtRQUNEO1lBQ0VILEtBQUssRUFBRSxDQUFDO1lBQ1JDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CQyxVQUFVLEVBQUUsS0FBSztTQUNsQjtRQUNEO1lBQ0VILEtBQUssRUFBRSxDQUFDO1lBQ1JDLEtBQUssRUFBRSxhQUFhO1lBQ3BCQyxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CQyxVQUFVLEVBQUUsS0FBSztTQUNsQjtLQUNGLENBQUMsRUFuQktDLGFBQWEsR0FBc0JyQixJQW1CeEMsR0FuQmtCLEVBQUVzQixnQkFBZ0IsR0FBSXRCLElBbUJ4QyxHQW5Cb0M7SUFxQnRDLElBQU11QixVQUFVLEdBQUd0Qiw4Q0FBTyxDQUN4QjtlQUFNO1lBQ0o7Z0JBQ0VnQixLQUFLLEVBQUUsQ0FBQztnQkFDUkUsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakNELEtBQUssRUFBRSxhQUFhO2dCQUNwQk0sUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFNBQVMsRUFB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LENBQUMsU0FBQ2MsU0FBUzt5Q0FDeEIsOERBQUNuQyxxRUFBZTt3QkFBQ21DLFNBQVMsRUFBRUEsU0FBUzs7Ozs7NkJBQUk7aUJBQzFDLENBQUM7Ozs7O3FCQUNJOzs7Ozs7YUFDRCxDQUNUO0NBQ0gsQ0FBQztHQWpIV2hDLFlBQVk7O1FBQzBCVixtREFBVTs7O0FBRGhEVSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2aXR5L3dpbmRvdy9SZXdhcmRDaGFydC50c3g/MWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ291bnRlciB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuXG5pbXBvcnQgeyBIU3RhY2ssIEltZywgSGVhZGluZywgU3RhY2ssIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFNlbGZDYXJlQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2J1dHRvbnMvU2VsZkNhcmVCdXR0b25cIjtcbmltcG9ydCB7IENoYWxsZW5nZUJ1dHRvbiwgQ2hhbGxlbmdlIH0gZnJvbSBcIi4uLy4uL2J1dHRvbnMvQ2hhbGxlbmdlQnV0dG9uXCI7XG5pbXBvcnQgeyBSZXdhcmRTdG9yZU1vZGFsIH0gZnJvbSBcIi4uLy4uL21vZGFscy9SZXdhcmRTdG9yZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU3RpY2tlckNoYXJ0ID0gKCkgPT4ge1xuICBjb25zdCB7IGNvdW50OiBjcmVkaXRzLCBpbmNyZW1lbnQsIGRlY3JlbWVudCB9ID0gdXNlQ291bnRlcigwKTtcblxuICBjb25zdCBbc2VsZkNhcmVUYXNrcywgc2V0U2VsZkNhcmVUYXNrc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaW5kZXg6IDAsXG4gICAgICBsYWJlbDogXCJFeGVyY2lzZVwiLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zcG9ydC5wbmdcIixcbiAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5kZXg6IDEsXG4gICAgICBsYWJlbDogXCJNZWRpdGF0ZVwiLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9tZWRpdGF0aW9uLnBuZ1wiLFxuICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMixcbiAgICAgIGxhYmVsOiBcIkVhdCBIZWFsdGh5XCIsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3ZlZ2V0YWJsZXMucG5nXCIsXG4gICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBjaGFsbGVuZ2VzID0gdXNlTWVtbzxDaGFsbGVuZ2VbXT4oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jb2ZmZWUtYmVhbnMucG5nXCIsXG4gICAgICAgIGxhYmVsOiBcIkNvZmZlZSBGcmVlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzMCxcbiAgICAgICAgY29tcGxldGVkOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvYnVkLnBuZ1wiLFxuICAgICAgICBsYWJlbDogXCJXZWVkIEZyZWVcIixcbiAgICAgICAgZHVyYXRpb246IDMwLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCByZXdhcmRzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7IGxhYmVsOiBcIkh1bnQgQSBLaWxsZXJcIiwgdmFsdWU6IDMwIH0sXG4gICAgICB7IGxhYmVsOiBcIlJlY29yZCBQbGF5ZXJcIiwgdmFsdWU6IDkwIH0sXG4gICAgICB7IGxhYmVsOiBcIjIzYW5kTWVcIiwgdmFsdWU6IDQ1IH0sXG4gICAgICB7IGxhYmVsOiBcIlByb2plY3RvclwiLCB2YWx1ZTogMTIwIH0sXG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IG9uU2VsZkNhcmVCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRTZWxmQ2FyZVRhc2tzKChwcmV2U3RhdGUpID0+XG4gICAgICAgIHByZXZTdGF0ZS5tYXAoKHByZXZUYXNrKSA9PiB7XG4gICAgICAgICAgaWYgKHByZXZUYXNrLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgIXByZXZUYXNrLmlzQ29tcGxldGUgPyBpbmNyZW1lbnQoKSA6IGRlY3JlbWVudCgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlRhc2ssIGlzQ29tcGxldGU6ICFwcmV2VGFzay5pc0NvbXBsZXRlIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2VGFzaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sXG4gICAgW3NldFNlbGZDYXJlVGFza3NdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrXG4gICAgICBiZz1cIm5ldXRyYWwubGlnaHRcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgdz1cIjIwMCVcIlxuICAgICAgcD1cIjVcIlxuICAgICAgc3BhY2luZz1cIjNcIlxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgID5cbiAgICAgIDxTdGFjayB3PVwiMTAwJVwiIHNwYWNpbmc9XCIzXCI+XG4gICAgICAgIDxTdGFjayB3PVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIl19PlxuICAgICAgICAgIDxIU3RhY2sgZ2FwPVwiMVwiPlxuICAgICAgICAgICAgPEltZyBtYXhXPVwiOVwiIHNyYz1cIi9pbWFnZXMvYmFkZ2UucG5nXCIgLz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCI+UmV3YXJkIENlbnRyZTwvSGVhZGluZz5cbiAgICAgICAgICA8L0hTdGFjaz5cblxuICAgICAgICAgIHsvKiA8SFN0YWNrIGJnPVwibmV1dHJhbC5tYWluXCIgcD1cIjJcIiBib3JkZXJSYWRpdXM9XCJtZFwiPlxuICAgICAgICAgICAgPEltZyBzcmM9XCIvaW1hZ2VzL21vbmV5LnBuZ1wiIG1heFc9XCI2XCIgLz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGNvbG9yPVwiYWNjZW50Lm1haW5cIiBmb250U2l6ZT1cInhsXCI+XG4gICAgICAgICAgICAgIHtjcmVkaXRzfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvSFN0YWNrPiAqL31cblxuICAgICAgICAgIDxSZXdhcmRTdG9yZU1vZGFsIHJld2FyZHM9e3Jld2FyZHN9IGNyZWRpdHM9e2NyZWRpdHN9IC8+XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEhTdGFjayBnYXA9XCIzXCI+XG4gICAgICAgICAge3NlbGZDYXJlVGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICA8U2VsZkNhcmVCdXR0b25cbiAgICAgICAgICAgICAgey4uLnRhc2t9XG4gICAgICAgICAgICAgIG9uU2VsZkNhcmVCdXR0b25DbGljaz17b25TZWxmQ2FyZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiB3PVwiMTAwJVwiIHNwYWNpbmc9XCI1XCI+XG4gICAgICAgIHtjaGFsbGVuZ2VzLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgPENoYWxsZW5nZUJ1dHRvbiBjaGFsbGVuZ2U9e2NoYWxsZW5nZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvVlN0YWNrPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VDb3VudGVyIiwiSFN0YWNrIiwiSW1nIiwiSGVhZGluZyIsIlN0YWNrIiwiVlN0YWNrIiwiU2VsZkNhcmVCdXR0b24iLCJDaGFsbGVuZ2VCdXR0b24iLCJSZXdhcmRTdG9yZU1vZGFsIiwidXNlQ2FsbGJhY2siLCJTdGlja2VyQ2hhcnQiLCJjb3VudCIsImNyZWRpdHMiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJpbmRleCIsImxhYmVsIiwiaW1hZ2UiLCJpc0NvbXBsZXRlIiwic2VsZkNhcmVUYXNrcyIsInNldFNlbGZDYXJlVGFza3MiLCJjaGFsbGVuZ2VzIiwiZHVyYXRpb24iLCJjb21wbGV0ZWQiLCJyZXdhcmRzIiwidmFsdWUiLCJvblNlbGZDYXJlQnV0dG9uQ2xpY2siLCJwcmV2U3RhdGUiLCJtYXAiLCJwcmV2VGFzayIsImJnIiwiYm9yZGVyUmFkaXVzIiwidyIsInAiLCJzcGFjaW5nIiwianVzdGlmeSIsImRpcmVjdGlvbiIsImdhcCIsIm1heFciLCJzcmMiLCJmb250U2l6ZSIsInRhc2siLCJjaGFsbGVuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/activity/window/RewardChart.tsx\n"));

/***/ })

});