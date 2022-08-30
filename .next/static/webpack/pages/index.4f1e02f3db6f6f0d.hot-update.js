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

/***/ "./src/components/activity/window/ActivityHighlight.tsx":
/*!**************************************************************!*\
  !*** ./src/components/activity/window/ActivityHighlight.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActivityHighlight\": function() { return /* binding */ ActivityHighlight; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/ActivityInfoModal */ \"./src/components/modals/ActivityInfoModal.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ActivityHighlight = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isInfoModalOpen = ref[0], setIsInfoModalOpen = ref[1];\n    var activity = {\n        image: \"/images/gardens.jpg\",\n        title: \"Soak up some sun\",\n        blurb: \"Go for a stroll and find somewhere nice to read\",\n        icons: [\n            \"/images/sun.png\",\n            \"/images/walking-the-dog.png\",\n            \"/images/open-book.png\", \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                backgroundColor: \"neutral.boldSheer\",\n                transition: \"all .3s\",\n                _hover: {\n                    backgroundColor: \"neutral.main\"\n                },\n                onClick: setIsInfoModalOpen.on,\n                color: \"accent.main\",\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                w: \"120%\",\n                minH: \"280px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                    spacing: \"0\",\n                    w: \"100%\",\n                    p: \"none\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                            p: \"3\",\n                            align: \"flex-end\",\n                            justify: \"flex-start\",\n                            bg: \"url(\".concat(activity.image, \") center/cover no-repeat\"),\n                            w: \"100%\",\n                            minH: \"150px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                src: \"/images/reload.png\",\n                                maxW: \"9\"\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                            p: \"3\",\n                            bg: \"neutral.light\",\n                            textAlign: \"center\",\n                            h: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                    justify: \"center\",\n                                    w: \"100%\",\n                                    children: activity.icons.map(function(icon) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                            src: icon,\n                                            maxW: \"12\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    children: activity.blurb\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__.ActivityInfoModal, {\n                isOpen: isInfoModalOpen,\n                onClose: setIsInfoModalOpen.off,\n                activity: activity\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ActivityHighlight, \"3pukcO2NGpa74vNaeucBEqcQhBY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean\n    ];\n});\n_c = ActivityHighlight;\nvar _c;\n$RefreshReg$(_c, \"ActivityHighlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBVTBCO0FBSWM7QUFFakMsSUFBTU8saUJBQWlCLEdBQUcsV0FBTTs7SUFDckMsSUFBOENILEdBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBbkRJLGVBQWUsR0FBd0JKLEdBQVksR0FBcEMsRUFBRUssa0JBQWtCLEdBQUlMLEdBQVksR0FBaEI7SUFFMUMsSUFBTU0sUUFBUSxHQUFHO1FBQ2ZDLEtBQUssRUFBRSxxQkFBcUI7UUFDNUJDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLEtBQUssRUFBRSxpREFBaUQ7UUFDeERDLEtBQUssRUFBRTtZQUNMLGlCQUFpQjtZQUNqQiw2QkFBNkI7WUFDN0IsdUJBQXVCO1NBQ3hCO0tBQ0Y7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNYLG9EQUFNO2dCQUNMWSxlQUFlLEVBQUMsbUJBQW1CO2dCQUNuQ0MsVUFBVSxFQUFDLFNBQVM7Z0JBQ3BCQyxNQUFNLEVBQUU7b0JBQUVGLGVBQWUsRUFBRSxjQUFjO2lCQUFFO2dCQUMzQ0csT0FBTyxFQUFFVCxrQkFBa0IsQ0FBQ1UsRUFBRTtnQkFDOUJDLEtBQUssRUFBQyxhQUFhO2dCQUNuQkMsWUFBWSxFQUFDLElBQUk7Z0JBQ2pCQyxRQUFRLEVBQUMsUUFBUTtnQkFDakJDLENBQUMsRUFBQyxNQUFNO2dCQUNSQyxJQUFJLEVBQUMsT0FBTzswQkFFWiw0RUFBQ3hCLG9EQUFNO29CQUFDeUIsT0FBTyxFQUFDLEdBQUc7b0JBQUNGLENBQUMsRUFBQyxNQUFNO29CQUFDRyxDQUFDLEVBQUMsTUFBTTs7c0NBQ25DLDhEQUFDMUIsb0RBQU07NEJBQ0wwQixDQUFDLEVBQUMsR0FBRzs0QkFDTEMsS0FBSyxFQUFDLFVBQVU7NEJBQ2hCQyxPQUFPLEVBQUMsWUFBWTs0QkFDcEJDLEVBQUUsRUFBRSxNQUFLLENBQWlCLE1BQXdCLENBQXZDbkIsUUFBUSxDQUFDQyxLQUFLLEVBQUMsMEJBQXdCLENBQUM7NEJBQ25EWSxDQUFDLEVBQUMsTUFBTTs0QkFDUkMsSUFBSSxFQUFDLE9BQU87c0NBRVosNEVBQUN2QixpREFBRztnQ0FBQzZCLEdBQUcsRUFBQyxvQkFBb0I7Z0NBQUNDLElBQUksRUFBQyxHQUFHOzs7OztxQ0FBRzs7Ozs7aUNBQ2xDO3NDQUNULDhEQUFDL0Isb0RBQU07NEJBQUMwQixDQUFDLEVBQUMsR0FBRzs0QkFBQ0csRUFBRSxFQUFDLGVBQWU7NEJBQUNHLFNBQVMsRUFBQyxRQUFROzRCQUFDQyxDQUFDLEVBQUMsTUFBTTs7OENBQzFELDhEQUFDNUIsb0RBQU07b0NBQUN1QixPQUFPLEVBQUMsUUFBUTtvQ0FBQ0wsQ0FBQyxFQUFDLE1BQU07OENBQzlCYixRQUFRLENBQUNJLEtBQUssQ0FBQ29CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJOzZEQUN2Qiw4REFBQ2xDLGlEQUFHOzRDQUFDNkIsR0FBRyxFQUFFSyxJQUFJOzRDQUFFSixJQUFJLEVBQUMsSUFBSTs7Ozs7aURBQUc7cUNBQzdCLENBQUM7Ozs7O3lDQUNLOzhDQUNULDhEQUFDN0Isa0RBQUk7OENBQUVRLFFBQVEsQ0FBQ0csS0FBSzs7Ozs7eUNBQVE7Ozs7OztpQ0FDdEI7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7MEJBRVQsOERBQUNQLHdFQUFpQjtnQkFDaEI4QixNQUFNLEVBQUU1QixlQUFlO2dCQUN2QjZCLE9BQU8sRUFBRTVCLGtCQUFrQixDQUFDNkIsR0FBRztnQkFDL0I1QixRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUNsQjs7b0JBQ0QsQ0FDSDtDQUNILENBQUM7R0F4RFdILGlCQUFpQjs7UUFDa0JILHdEQUFVOzs7QUFEN0NHLEtBQUFBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4PzMyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFZTdGFjayxcbiAgSGVhZGluZyxcbiAgSW1nLFxuICBUZXh0LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIHVzZUJvb2xlYW4sXG4gIEhTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7XG4gIEFjdGl2aXR5SW5mb01vZGFsLFxuICBBY3Rpdml0eURhdGEsXG59IGZyb20gXCIuLi8uLi9tb2RhbHMvQWN0aXZpdHlJbmZvTW9kYWxcIjtcblxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBbaXNJbmZvTW9kYWxPcGVuLCBzZXRJc0luZm9Nb2RhbE9wZW5dID0gdXNlQm9vbGVhbigpO1xuXG4gIGNvbnN0IGFjdGl2aXR5ID0ge1xuICAgIGltYWdlOiBcIi9pbWFnZXMvZ2FyZGVucy5qcGdcIixcbiAgICB0aXRsZTogXCJTb2FrIHVwIHNvbWUgc3VuXCIsXG4gICAgYmx1cmI6IFwiR28gZm9yIGEgc3Ryb2xsIGFuZCBmaW5kIHNvbWV3aGVyZSBuaWNlIHRvIHJlYWRcIixcbiAgICBpY29uczogW1xuICAgICAgXCIvaW1hZ2VzL3N1bi5wbmdcIixcbiAgICAgIFwiL2ltYWdlcy93YWxraW5nLXRoZS1kb2cucG5nXCIsXG4gICAgICBcIi9pbWFnZXMvb3Blbi1ib29rLnBuZ1wiLFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJuZXV0cmFsLmJvbGRTaGVlclwiXG4gICAgICAgIHRyYW5zaXRpb249XCJhbGwgLjNzXCJcbiAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogXCJuZXV0cmFsLm1haW5cIiB9fVxuICAgICAgICBvbkNsaWNrPXtzZXRJc0luZm9Nb2RhbE9wZW4ub259XG4gICAgICAgIGNvbG9yPVwiYWNjZW50Lm1haW5cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgdz1cIjEyMCVcIlxuICAgICAgICBtaW5IPVwiMjgwcHhcIlxuICAgICAgPlxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9XCIwXCIgdz1cIjEwMCVcIiBwPVwibm9uZVwiPlxuICAgICAgICAgIDxWU3RhY2tcbiAgICAgICAgICAgIHA9XCIzXCJcbiAgICAgICAgICAgIGFsaWduPVwiZmxleC1lbmRcIlxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgYmc9e2B1cmwoJHthY3Rpdml0eS5pbWFnZX0pIGNlbnRlci9jb3ZlciBuby1yZXBlYXRgfVxuICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgbWluSD1cIjE1MHB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvcmVsb2FkLnBuZ1wiIG1heFc9XCI5XCIgLz5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICA8VlN0YWNrIHA9XCIzXCIgYmc9XCJuZXV0cmFsLmxpZ2h0XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgaD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIHthY3Rpdml0eS5pY29ucy5tYXAoKGljb24pID0+IChcbiAgICAgICAgICAgICAgICA8SW1nIHNyYz17aWNvbn0gbWF4Vz1cIjEyXCIgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgIDxUZXh0PnthY3Rpdml0eS5ibHVyYn08L1RleHQ+XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxBY3Rpdml0eUluZm9Nb2RhbFxuICAgICAgICBpc09wZW49e2lzSW5mb01vZGFsT3Blbn1cbiAgICAgICAgb25DbG9zZT17c2V0SXNJbmZvTW9kYWxPcGVuLm9mZn1cbiAgICAgICAgYWN0aXZpdHk9e2FjdGl2aXR5fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVlN0YWNrIiwiSW1nIiwiVGV4dCIsIkJ1dHRvbiIsInVzZUJvb2xlYW4iLCJIU3RhY2siLCJBY3Rpdml0eUluZm9Nb2RhbCIsIkFjdGl2aXR5SGlnaGxpZ2h0IiwiaXNJbmZvTW9kYWxPcGVuIiwic2V0SXNJbmZvTW9kYWxPcGVuIiwiYWN0aXZpdHkiLCJpbWFnZSIsInRpdGxlIiwiYmx1cmIiLCJpY29ucyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJfaG92ZXIiLCJvbkNsaWNrIiwib24iLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidyIsIm1pbkgiLCJzcGFjaW5nIiwicCIsImFsaWduIiwianVzdGlmeSIsImJnIiwic3JjIiwibWF4VyIsInRleHRBbGlnbiIsImgiLCJtYXAiLCJpY29uIiwiaXNPcGVuIiwib25DbG9zZSIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/activity/window/ActivityHighlight.tsx\n"));

/***/ })

});