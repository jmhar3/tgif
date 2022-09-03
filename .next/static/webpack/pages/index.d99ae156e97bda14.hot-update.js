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

/***/ "./src/components/activity/window/Activities.tsx":
/*!*******************************************************!*\
  !*** ./src/components/activity/window/Activities.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Activities\": function() { return /* binding */ Activities; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _ActivityHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityHighlight */ \"./src/components/activity/window/ActivityHighlight.tsx\");\n/* harmony import */ var _RewardCentre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RewardCentre */ \"./src/components/activity/window/RewardCentre.tsx\");\n/* harmony import */ var _buttons_ActivityButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../buttons/ActivityButton */ \"./src/components/buttons/ActivityButton.tsx\");\n/* harmony import */ var _modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modals/ActivityInfoModal */ \"./src/components/modals/ActivityInfoModal.tsx\");\n/* harmony import */ var _hooks_useActivities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useActivities */ \"./src/hooks/useActivities.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Activities = function() {\n    _s();\n    var activities = (0,_hooks_useActivities__WEBPACK_IMPORTED_MODULE_6__.useActivities)().activities;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBoolean)(), 2), isInfoModalOpen = ref[0], setIsInfoModalOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedActivity = ref1[0], setSelectedActivity = ref1[1];\n    var onActivityButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(index) {\n        var activity = activities.find(function(activity) {\n            return activity.index === index;\n        });\n        if (activity) {\n            setSelectedActivity(activity);\n            setIsInfoModalOpen.on();\n        }\n    }, [\n        activities,\n        setSelectedActivity,\n        setIsInfoModalOpen\n    ]);\n    var activityButtons = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        var activityButtonRows = [];\n        for(var i = 0; i < activities.length; i += 4){\n            activityButtonRows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {\n                spacing: \"3\",\n                w: \"100%\",\n                children: activities.slice(i, i + 4).map(function(activity) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_ActivityButton__WEBPACK_IMPORTED_MODULE_4__.ActivityButton, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, activity), {\n                        onClick: onActivityButtonClick\n                    }), void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this));\n        }\n        return activityButtonRows;\n    }, [\n        activities\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                w: \"100%\",\n                spacing: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                        w: \"100%\",\n                        direction: [\n                            \"column\",\n                            \"row\"\n                        ],\n                        spacing: \"3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ActivityHighlight__WEBPACK_IMPORTED_MODULE_2__.ActivityHighlight, {}, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RewardCentre__WEBPACK_IMPORTED_MODULE_3__.RewardCentre, {}, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.VStack, {\n                        spacing: \"3\",\n                        children: activityButtons\n                    }, void 0, false, {\n                        fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            isInfoModalOpen && selectedActivity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_5__.ActivityInfoModal, {\n                isOpen: isInfoModalOpen,\n                onClose: setIsInfoModalOpen.off,\n                activity: selectedActivity\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/Activities.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Activities, \"BgguZwW/LT6IN9FtdAXwr1GOBtU=\", false, function() {\n    return [\n        _hooks_useActivities__WEBPACK_IMPORTED_MODULE_6__.useActivities,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBoolean\n    ];\n});\n_c = Activities;\nvar _c;\n$RefreshReg$(_c, \"Activities\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdGllcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXVEO0FBQ2M7QUFFYjtBQUNWO0FBQ2dCO0FBQ0s7QUFDUTtBQUVwRSxJQUFNWSxVQUFVLEdBQUcsV0FBTTs7SUFDOUIsSUFBTSxVQUFZLEdBQUtELG1FQUFhLEVBQUUsQ0FBOUJFLFVBQVU7SUFFbEIsSUFBOENQLEdBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBbkRRLGVBQWUsR0FBd0JSLEdBQVksR0FBcEMsRUFBRVMsa0JBQWtCLEdBQUlULEdBQVksR0FBaEI7SUFDMUMsSUFBZ0RMLElBQXdCLEdBQXhCQSwrQ0FBUSxFQUFnQixFQUFqRWUsZ0JBQWdCLEdBQXlCZixJQUF3QixHQUFqRCxFQUFFZ0IsbUJBQW1CLEdBQUloQixJQUF3QixHQUE1QjtJQUU1QyxJQUFNaUIscUJBQXFCLEdBQUdoQixrREFBVyxDQUN2QyxTQUFDaUIsS0FBYSxFQUFLO1FBQ2pCLElBQU1DLFFBQVEsR0FBR1AsVUFBVSxDQUFDUSxJQUFJLENBQUMsU0FBQ0QsUUFBUTttQkFBS0EsUUFBUSxDQUFDRCxLQUFLLEtBQUtBLEtBQUs7U0FBQSxDQUFDO1FBRXhFLElBQUlDLFFBQVEsRUFBRTtZQUNaSCxtQkFBbUIsQ0FBQ0csUUFBUSxDQUFDLENBQUM7WUFDOUJMLGtCQUFrQixDQUFDTyxFQUFFLEVBQUUsQ0FBQztTQUN6QjtLQUNGLEVBQ0Q7UUFBQ1QsVUFBVTtRQUFFSSxtQkFBbUI7UUFBRUYsa0JBQWtCO0tBQUMsQ0FDdEQ7SUFFRCxJQUFNUSxlQUFlLEdBQUd2Qiw4Q0FBTyxDQUFDLFdBQU07UUFDcEMsSUFBSXdCLGtCQUFrQixHQUFHLEVBQUU7UUFFM0IsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdaLFVBQVUsQ0FBQ2EsTUFBTSxFQUFFRCxDQUFDLElBQUksQ0FBQyxDQUFFO1lBQzdDRCxrQkFBa0IsQ0FBQ0csSUFBSSxlQUNyQiw4REFBQ3RCLG9EQUFNO2dCQUFDdUIsT0FBTyxFQUFDLEdBQUc7Z0JBQUNDLENBQUMsRUFBQyxNQUFNOzBCQUN6QmhCLFVBQVUsQ0FBQ2lCLEtBQUssQ0FBQ0wsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNNLEdBQUcsQ0FBQyxTQUFDWCxRQUFRO3lDQUN2Qyw4REFBQ1gsbUVBQWMsMktBQUtXLFFBQVE7d0JBQUVZLE9BQU8sRUFBRWQscUJBQXFCOzs7Ozs2QkFBSTtpQkFDakUsQ0FBQzs7Ozs7cUJBQ0ssQ0FDVixDQUFDO1NBQ0g7UUFFRCxPQUFPTSxrQkFBa0IsQ0FBQztLQUMzQixFQUFFO1FBQUNYLFVBQVU7S0FBQyxDQUFDO0lBRWhCLHFCQUNFOzswQkFDRSw4REFBQ1YsbURBQUs7Z0JBQUMwQixDQUFDLEVBQUMsTUFBTTtnQkFBQ0QsT0FBTyxFQUFDLEdBQUc7O2tDQUN6Qiw4REFBQ3pCLG1EQUFLO3dCQUFDMEIsQ0FBQyxFQUFDLE1BQU07d0JBQUNJLFNBQVMsRUFBRTs0QkFBQyxRQUFROzRCQUFFLEtBQUs7eUJBQUM7d0JBQUVMLE9BQU8sRUFBQyxHQUFHOzswQ0FDdkQsOERBQUNyQixpRUFBaUI7Ozs7cUNBQUc7MENBQ3JCLDhEQUFDQyx1REFBWTs7OztxQ0FBRzs7Ozs7OzZCQUNWO2tDQUVSLDhEQUFDSixvREFBTTt3QkFBQ3dCLE9BQU8sRUFBQyxHQUFHO2tDQUFFTCxlQUFlOzs7Ozs2QkFBVTs7Ozs7O3FCQUN4QztZQUVQVCxlQUFlLElBQUlFLGdCQUFnQixrQkFDbEMsOERBQUNOLHdFQUFpQjtnQkFDaEJ3QixNQUFNLEVBQUVwQixlQUFlO2dCQUN2QnFCLE9BQU8sRUFBRXBCLGtCQUFrQixDQUFDcUIsR0FBRztnQkFDL0JoQixRQUFRLEVBQUVKLGdCQUFnQjs7Ozs7cUJBQzFCOztvQkFFSCxDQUNIO0NBQ0gsQ0FBQztHQXREV0osVUFBVTs7UUFDRUQsK0RBQWE7UUFFVUwsd0RBQVU7OztBQUg3Q00sS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdGllcy50c3g/ZWM1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0YWNrLCBWU3RhY2ssIEhTdGFjaywgdXNlQm9vbGVhbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IEFjdGl2aXR5SGlnaGxpZ2h0IH0gZnJvbSBcIi4vQWN0aXZpdHlIaWdobGlnaHRcIjtcbmltcG9ydCB7IFJld2FyZENlbnRyZSB9IGZyb20gXCIuL1Jld2FyZENlbnRyZVwiO1xuaW1wb3J0IHsgQWN0aXZpdHlCdXR0b24gfSBmcm9tIFwiLi4vLi4vYnV0dG9ucy9BY3Rpdml0eUJ1dHRvblwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmZvTW9kYWwgfSBmcm9tIFwiLi4vLi4vbW9kYWxzL0FjdGl2aXR5SW5mb01vZGFsXCI7XG5pbXBvcnQgeyB1c2VBY3Rpdml0aWVzLCBBY3Rpdml0eURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQWN0aXZpdGllc1wiO1xuXG5leHBvcnQgY29uc3QgQWN0aXZpdGllcyA9ICgpID0+IHtcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSB1c2VBY3Rpdml0aWVzKCk7XG5cbiAgY29uc3QgW2lzSW5mb01vZGFsT3Blbiwgc2V0SXNJbmZvTW9kYWxPcGVuXSA9IHVzZUJvb2xlYW4oKTtcbiAgY29uc3QgW3NlbGVjdGVkQWN0aXZpdHksIHNldFNlbGVjdGVkQWN0aXZpdHldID0gdXNlU3RhdGU8QWN0aXZpdHlEYXRhPigpO1xuXG4gIGNvbnN0IG9uQWN0aXZpdHlCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGFjdGl2aXRpZXMuZmluZCgoYWN0aXZpdHkpID0+IGFjdGl2aXR5LmluZGV4ID09PSBpbmRleCk7XG5cbiAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICBzZXRTZWxlY3RlZEFjdGl2aXR5KGFjdGl2aXR5KTtcbiAgICAgICAgc2V0SXNJbmZvTW9kYWxPcGVuLm9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbYWN0aXZpdGllcywgc2V0U2VsZWN0ZWRBY3Rpdml0eSwgc2V0SXNJbmZvTW9kYWxPcGVuXVxuICApO1xuXG4gIGNvbnN0IGFjdGl2aXR5QnV0dG9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBhY3Rpdml0eUJ1dHRvblJvd3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZpdGllcy5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgYWN0aXZpdHlCdXR0b25Sb3dzLnB1c2goXG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz1cIjNcIiB3PVwiMTAwJVwiPlxuICAgICAgICAgIHthY3Rpdml0aWVzLnNsaWNlKGksIGkgKyA0KS5tYXAoKGFjdGl2aXR5KSA9PiAoXG4gICAgICAgICAgICA8QWN0aXZpdHlCdXR0b24gey4uLmFjdGl2aXR5fSBvbkNsaWNrPXtvbkFjdGl2aXR5QnV0dG9uQ2xpY2t9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZpdHlCdXR0b25Sb3dzO1xuICB9LCBbYWN0aXZpdGllc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFjayB3PVwiMTAwJVwiIHNwYWNpbmc9XCIzXCI+XG4gICAgICAgIDxTdGFjayB3PVwiMTAwJVwiIGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwicm93XCJdfSBzcGFjaW5nPVwiM1wiPlxuICAgICAgICAgIDxBY3Rpdml0eUhpZ2hsaWdodCAvPlxuICAgICAgICAgIDxSZXdhcmRDZW50cmUgLz5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9XCIzXCI+e2FjdGl2aXR5QnV0dG9uc308L1ZTdGFjaz5cbiAgICAgIDwvU3RhY2s+XG5cbiAgICAgIHtpc0luZm9Nb2RhbE9wZW4gJiYgc2VsZWN0ZWRBY3Rpdml0eSAmJiAoXG4gICAgICAgIDxBY3Rpdml0eUluZm9Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17aXNJbmZvTW9kYWxPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9e3NldElzSW5mb01vZGFsT3Blbi5vZmZ9XG4gICAgICAgICAgYWN0aXZpdHk9e3NlbGVjdGVkQWN0aXZpdHl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIlN0YWNrIiwiVlN0YWNrIiwiSFN0YWNrIiwidXNlQm9vbGVhbiIsIkFjdGl2aXR5SGlnaGxpZ2h0IiwiUmV3YXJkQ2VudHJlIiwiQWN0aXZpdHlCdXR0b24iLCJBY3Rpdml0eUluZm9Nb2RhbCIsInVzZUFjdGl2aXRpZXMiLCJBY3Rpdml0aWVzIiwiYWN0aXZpdGllcyIsImlzSW5mb01vZGFsT3BlbiIsInNldElzSW5mb01vZGFsT3BlbiIsInNlbGVjdGVkQWN0aXZpdHkiLCJzZXRTZWxlY3RlZEFjdGl2aXR5Iiwib25BY3Rpdml0eUJ1dHRvbkNsaWNrIiwiaW5kZXgiLCJhY3Rpdml0eSIsImZpbmQiLCJvbiIsImFjdGl2aXR5QnV0dG9ucyIsImFjdGl2aXR5QnV0dG9uUm93cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3BhY2luZyIsInciLCJzbGljZSIsIm1hcCIsIm9uQ2xpY2siLCJkaXJlY3Rpb24iLCJpc09wZW4iLCJvbkNsb3NlIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/activity/window/Activities.tsx\n"));

/***/ })

});