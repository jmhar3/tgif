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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StickerChart\": function() { return /* binding */ StickerChart; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _buttons_SelfCareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../buttons/SelfCareButton */ \"./src/components/buttons/SelfCareButton.tsx\");\n/* harmony import */ var _buttons_ChallengeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../buttons/ChallengeButton */ \"./src/components/buttons/ChallengeButton.tsx\");\n/* harmony import */ var _modals_RewardStoreModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modals/RewardStoreModal */ \"./src/components/modals/RewardStoreModal.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar StickerChart = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useBoolean)(), 2), isRewardStoreModalsOpen = ref[0], setIsRewardStoreModalsOpen = ref[1];\n    var ref1 = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useCounter)(0), credits = ref1.count, increment = ref1.increment, decrement = ref1.decrement;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            index: 0,\n            label: \"Exercise\",\n            image: \"/images/sport.png\",\n            isComplete: false\n        },\n        {\n            index: 1,\n            label: \"Meditate\",\n            image: \"/images/meditation.png\",\n            isComplete: false\n        },\n        {\n            index: 2,\n            label: \"Eat Healthy\",\n            image: \"/images/vegetables.png\",\n            isComplete: false\n        }, \n    ]), selfCareTasks = ref2[0], setSelfCareTasks = ref2[1];\n    var challenges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return [\n            {\n                index: 0,\n                image: \"/images/coffee-beans.png\",\n                label: \"Coffee Free\",\n                duration: 30,\n                completed: 0\n            },\n            {\n                index: 1,\n                image: \"/images/bud.png\",\n                label: \"Weed Free\",\n                duration: 30,\n                completed: 0\n            }, \n        ];\n    }, []);\n    var rewards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return [\n            {\n                label: \"Hunt A Killer\",\n                value: 30\n            },\n            {\n                label: \"Record Player\",\n                value: 90\n            },\n            {\n                label: \"23andMe\",\n                value: 45\n            },\n            {\n                label: \"Projector\",\n                value: 120\n            }, \n        ];\n    }, []);\n    var onSelfCareButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(index) {\n        setSelfCareTasks(function(prevState) {\n            return prevState.map(function(prevTask) {\n                if (prevTask.index === index) {\n                    !prevTask.isComplete ? increment() : decrement();\n                    return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, prevTask), {\n                        isComplete: !prevTask.isComplete\n                    });\n                } else {\n                    return prevTask;\n                }\n            });\n        });\n    }, [\n        setSelfCareTasks\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n        bg: \"neutral.light\",\n        borderRadius: \"lg\",\n        w: \"200%\",\n        p: \"5\",\n        spacing: \"3\",\n        justify: \"space-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                w: \"100%\",\n                justify: \"space-between\",\n                direction: [\n                    \"column\",\n                    \"row\"\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                        gap: \"1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                maxW: \"9\",\n                                src: \"/images/badge.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                fontSize: \"2xl\",\n                                children: \"Reward Centre\"\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_RewardStoreModal__WEBPACK_IMPORTED_MODULE_5__.RewardStoreModal, {\n                        rewards: rewards,\n                        credits: credits,\n                        isOpen: isRewardStoreModalsOpen,\n                        onClose: setIsRewardStoreModalsOpen.off\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n                spacing: \"3\",\n                w: \"100%\",\n                children: selfCareTasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_SelfCareButton__WEBPACK_IMPORTED_MODULE_3__.SelfCareButton, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, task), {\n                        onSelfCareButtonClick: onSelfCareButtonClick\n                    }), void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                direction: \"row\",\n                justify: \"space-between\",\n                w: \"100%\",\n                spacing: \"3\",\n                children: challenges.map(function(challenge) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_ChallengeButton__WEBPACK_IMPORTED_MODULE_4__.ChallengeButton, {\n                        challenge: challenge\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/RewardChart.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(StickerChart, \"ukBRQf7RxGqVDPuKFB8yT6HumxQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useBoolean,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useCounter\n    ];\n});\n_c = StickerChart;\nvar _c;\n$RefreshReg$(_c, \"StickerChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvUmV3YXJkQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXVEO0FBQ2Q7QUFFMEM7QUFFckI7QUFDYTtBQUNWO0FBRTFELElBQU1hLFlBQVksR0FBRyxXQUFNOztJQUNqQyxJQUE4REosR0FBWSxvRkFBWkEsNERBQVUsRUFBRSxNQUFuRUssdUJBQXVCLEdBQWdDTCxHQUFZLEdBQTVDLEVBQUVNLDBCQUEwQixHQUFJTixHQUFZLEdBQWhCO0lBRXpELElBQWlETixJQUFhLEdBQWJBLHVEQUFVLENBQUMsQ0FBQyxDQUFDLEVBQXREYSxPQUFjLEdBQTJCYixJQUFhLENBQXREYSxLQUFLLEVBQVdFLFNBQVMsR0FBZ0JmLElBQWEsQ0FBdENlLFNBQVMsRUFBRUMsU0FBUyxHQUFLaEIsSUFBYSxDQUEzQmdCLFNBQVM7SUFFNUMsSUFBMENuQixJQW1CeEMsR0FuQndDQSwrQ0FBUSxDQUFDO1FBQ2pEO1lBQ0VvQixLQUFLLEVBQUUsQ0FBQztZQUNSQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQkMsVUFBVSxFQUFFLEtBQUs7U0FDbEI7UUFDRDtZQUNFSCxLQUFLLEVBQUUsQ0FBQztZQUNSQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLHdCQUF3QjtZQUMvQkMsVUFBVSxFQUFFLEtBQUs7U0FDbEI7UUFDRDtZQUNFSCxLQUFLLEVBQUUsQ0FBQztZQUNSQyxLQUFLLEVBQUUsYUFBYTtZQUNwQkMsS0FBSyxFQUFFLHdCQUF3QjtZQUMvQkMsVUFBVSxFQUFFLEtBQUs7U0FDbEI7S0FDRixDQUFDLEVBbkJLQyxhQUFhLEdBQXNCeEIsSUFtQnhDLEdBbkJrQixFQUFFeUIsZ0JBQWdCLEdBQUl6QixJQW1CeEMsR0FuQm9DO0lBcUJ0QyxJQUFNMEIsVUFBVSxHQUFHekIsOENBQU8sQ0FDeEI7ZUFBTTtZQUNKO2dCQUNFbUIsS0FB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Z0JBQUNrQyxTQUFTLEVBQUMsS0FBSztnQkFBQ0QsT0FBTyxFQUFDLGVBQWU7Z0JBQUNILENBQUMsRUFBQyxNQUFNO2dCQUFDRSxPQUFPLEVBQUMsR0FBRzswQkFDaEViLFVBQVUsQ0FBQ08sR0FBRyxDQUFDLFNBQUNpQixTQUFTO3lDQUN4Qiw4REFBQ3ZDLHFFQUFlO3dCQUFDdUMsU0FBUyxFQUFFQSxTQUFTOzs7Ozs2QkFBSTtpQkFDMUMsQ0FBQzs7Ozs7cUJBQ0k7Ozs7OzthQUNELENBQ1Q7Q0FDSCxDQUFDO0dBakhXckMsWUFBWTs7UUFDc0NKLHdEQUFVO1FBRXRCTixtREFBVTs7O0FBSGhEVSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjdGl2aXR5L3dpbmRvdy9SZXdhcmRDaGFydC50c3g/MWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvdW50ZXIgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcblxuaW1wb3J0IHsgSFN0YWNrLCBJbWcsIEhlYWRpbmcsIFN0YWNrLCBWU3RhY2ssIHVzZUJvb2xlYW4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBTZWxmQ2FyZUJ1dHRvbiB9IGZyb20gXCIuLi8uLi9idXR0b25zL1NlbGZDYXJlQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VCdXR0b24sIENoYWxsZW5nZSB9IGZyb20gXCIuLi8uLi9idXR0b25zL0NoYWxsZW5nZUJ1dHRvblwiO1xuaW1wb3J0IHsgUmV3YXJkU3RvcmVNb2RhbCB9IGZyb20gXCIuLi8uLi9tb2RhbHMvUmV3YXJkU3RvcmVNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgU3RpY2tlckNoYXJ0ID0gKCkgPT4ge1xuIGNvbnN0IFtpc1Jld2FyZFN0b3JlTW9kYWxzT3Blbiwgc2V0SXNSZXdhcmRTdG9yZU1vZGFsc09wZW5dID0gdXNlQm9vbGVhbigpO1xuXG4gIGNvbnN0IHsgY291bnQ6IGNyZWRpdHMsIGluY3JlbWVudCwgZGVjcmVtZW50IH0gPSB1c2VDb3VudGVyKDApO1xuXG4gIGNvbnN0IFtzZWxmQ2FyZVRhc2tzLCBzZXRTZWxmQ2FyZVRhc2tzXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIGxhYmVsOiBcIkV4ZXJjaXNlXCIsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nwb3J0LnBuZ1wiLFxuICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmRleDogMSxcbiAgICAgIGxhYmVsOiBcIk1lZGl0YXRlXCIsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL21lZGl0YXRpb24ucG5nXCIsXG4gICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGluZGV4OiAyLFxuICAgICAgbGFiZWw6IFwiRWF0IEhlYWx0aHlcIixcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvdmVnZXRhYmxlcy5wbmdcIixcbiAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGNoYWxsZW5nZXMgPSB1c2VNZW1vPENoYWxsZW5nZVtdPihcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2NvZmZlZS1iZWFucy5wbmdcIixcbiAgICAgICAgbGFiZWw6IFwiQ29mZmVlIEZyZWVcIixcbiAgICAgICAgZHVyYXRpb246IDMwLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9idWQucG5nXCIsXG4gICAgICAgIGxhYmVsOiBcIldlZWQgRnJlZVwiLFxuICAgICAgICBkdXJhdGlvbjogMzAsXG4gICAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHJld2FyZHMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHsgbGFiZWw6IFwiSHVudCBBIEtpbGxlclwiLCB2YWx1ZTogMzAgfSxcbiAgICAgIHsgbGFiZWw6IFwiUmVjb3JkIFBsYXllclwiLCB2YWx1ZTogOTAgfSxcbiAgICAgIHsgbGFiZWw6IFwiMjNhbmRNZVwiLCB2YWx1ZTogNDUgfSxcbiAgICAgIHsgbGFiZWw6IFwiUHJvamVjdG9yXCIsIHZhbHVlOiAxMjAgfSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3Qgb25TZWxmQ2FyZUJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHNldFNlbGZDYXJlVGFza3MoKHByZXZTdGF0ZSkgPT5cbiAgICAgICAgcHJldlN0YXRlLm1hcCgocHJldlRhc2spID0+IHtcbiAgICAgICAgICBpZiAocHJldlRhc2suaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAhcHJldlRhc2suaXNDb21wbGV0ZSA/IGluY3JlbWVudCgpIDogZGVjcmVtZW50KCk7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2VGFzaywgaXNDb21wbGV0ZTogIXByZXZUYXNrLmlzQ29tcGxldGUgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZUYXNrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbc2V0U2VsZkNhcmVUYXNrc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2tcbiAgICAgIGJnPVwibmV1dHJhbC5saWdodFwiXG4gICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICB3PVwiMjAwJVwiXG4gICAgICBwPVwiNVwiXG4gICAgICBzcGFjaW5nPVwiM1wiXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgPlxuICAgICAgPFN0YWNrIHc9XCIxMDAlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBkaXJlY3Rpb249e1tcImNvbHVtblwiLCBcInJvd1wiXX0+XG4gICAgICAgIDxIU3RhY2sgZ2FwPVwiMVwiPlxuICAgICAgICAgIDxJbWcgbWF4Vz1cIjlcIiBzcmM9XCIvaW1hZ2VzL2JhZGdlLnBuZ1wiIC8+XG4gICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIyeGxcIj5SZXdhcmQgQ2VudHJlPC9IZWFkaW5nPlxuICAgICAgICA8L0hTdGFjaz5cblxuICAgICAgICB7LyogPEhTdGFjayBiZz1cIm5ldXRyYWwubWFpblwiIHA9XCIyXCIgYm9yZGVyUmFkaXVzPVwibWRcIj5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb25leS5wbmdcIiBtYXhXPVwiNlwiIC8+XG4gICAgICAgICAgICA8SGVhZGluZyBjb2xvcj1cImFjY2VudC5tYWluXCIgZm9udFNpemU9XCJ4bFwiPlxuICAgICAgICAgICAgICB7Y3JlZGl0c31cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8L0hTdGFjaz4gKi99XG5cbiAgICAgICAgPFJld2FyZFN0b3JlTW9kYWwgcmV3YXJkcz17cmV3YXJkc30gY3JlZGl0cz17Y3JlZGl0c30gaXNPcGVuPXtpc1Jld2FyZFN0b3JlTW9kYWxzT3Blbn0gb25DbG9zZT17c2V0SXNSZXdhcmRTdG9yZU1vZGFsc09wZW4ub2ZmfSAvPlxuICAgICAgPC9TdGFjaz5cblxuICAgICAgPEhTdGFjayBzcGFjaW5nPVwiM1wiIHc9XCIxMDAlXCI+XG4gICAgICAgIHtzZWxmQ2FyZVRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgIDxTZWxmQ2FyZUJ1dHRvblxuICAgICAgICAgICAgey4uLnRhc2t9XG4gICAgICAgICAgICBvblNlbGZDYXJlQnV0dG9uQ2xpY2s9e29uU2VsZkNhcmVCdXR0b25DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvSFN0YWNrPlxuXG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiB3PVwiMTAwJVwiIHNwYWNpbmc9XCIzXCI+XG4gICAgICAgIHtjaGFsbGVuZ2VzLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgPENoYWxsZW5nZUJ1dHRvbiBjaGFsbGVuZ2U9e2NoYWxsZW5nZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvVlN0YWNrPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsInVzZUNvdW50ZXIiLCJIU3RhY2siLCJJbWciLCJIZWFkaW5nIiwiU3RhY2siLCJWU3RhY2siLCJ1c2VCb29sZWFuIiwiU2VsZkNhcmVCdXR0b24iLCJDaGFsbGVuZ2VCdXR0b24iLCJSZXdhcmRTdG9yZU1vZGFsIiwiU3RpY2tlckNoYXJ0IiwiaXNSZXdhcmRTdG9yZU1vZGFsc09wZW4iLCJzZXRJc1Jld2FyZFN0b3JlTW9kYWxzT3BlbiIsImNvdW50IiwiY3JlZGl0cyIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImluZGV4IiwibGFiZWwiLCJpbWFnZSIsImlzQ29tcGxldGUiLCJzZWxmQ2FyZVRhc2tzIiwic2V0U2VsZkNhcmVUYXNrcyIsImNoYWxsZW5nZXMiLCJkdXJhdGlvbiIsImNvbXBsZXRlZCIsInJld2FyZHMiLCJ2YWx1ZSIsIm9uU2VsZkNhcmVCdXR0b25DbGljayIsInByZXZTdGF0ZSIsIm1hcCIsInByZXZUYXNrIiwiYmciLCJib3JkZXJSYWRpdXMiLCJ3IiwicCIsInNwYWNpbmciLCJqdXN0aWZ5IiwiZGlyZWN0aW9uIiwiZ2FwIiwibWF4VyIsInNyYyIsImZvbnRTaXplIiwiaXNPcGVuIiwib25DbG9zZSIsIm9mZiIsInRhc2siLCJjaGFsbGVuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/activity/window/RewardChart.tsx\n"));

/***/ })

});