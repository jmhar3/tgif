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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActivityHighlight\": function() { return /* binding */ ActivityHighlight; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/ActivityInfoModal */ \"./src/components/modals/ActivityInfoModal.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ActivityHighlight = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)(), 2), isInfoModalOpen = ref[0], setIsInfoModalOpen = ref[1];\n    var activity = {\n        image: \"/images/gardens.jpg\",\n        title: \"Soak up some sun\",\n        blurb: \"Go for a stroll and find somewhere nice to read\",\n        icons: [\n            \"/images/sun.png\",\n            \"/images/walking-the-dog.png\",\n            \"/images/open-book.png\", \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                backgroundColor: \"neutral.boldSheer\",\n                transition: \"all .3s\",\n                _hover: {\n                    backgroundColor: \"neutral.main\"\n                },\n                onClick: setIsInfoModalOpen.on,\n                color: \"accent.main\",\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                w: \"120%\",\n                minH: \"300px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                    spacing: \"0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                            p: \"3\",\n                            align: \"flex-end\",\n                            justify: \"flex-start\",\n                            bg: \"url(\".concat(activity.image, \") center/cover no-repeat\"),\n                            w: \"100%\",\n                            minH: \"150px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                src: \"/images/reload.png\",\n                                maxW: \"9\"\n                            }, void 0, false, {\n                                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                            p: \"3\",\n                            bg: \"neutral.light\",\n                            textAlign: \"center\",\n                            h: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                    justify: \"center\",\n                                    w: \"100%\",\n                                    children: activity.icons.map(function(icon) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                                            src: icon,\n                                            maxW: \"12\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    children: activity.blurb\n                                }, void 0, false, {\n                                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_ActivityInfoModal__WEBPACK_IMPORTED_MODULE_1__.ActivityInfoModal, {\n                isOpen: isInfoModalOpen,\n                onClose: setIsInfoModalOpen.off,\n                activity: activity\n            }, void 0, false, {\n                fileName: \"/home/jmhar/Development/code/projects/tgif/src/components/activity/window/ActivityHighlight.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ActivityHighlight, \"3pukcO2NGpa74vNaeucBEqcQhBY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean\n    ];\n});\n_c = ActivityHighlight;\nvar _c;\n$RefreshReg$(_c, \"ActivityHighlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3Rpdml0eS93aW5kb3cvQWN0aXZpdHlIaWdobGlnaHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBVTBCO0FBSWM7QUFFakMsSUFBTU8saUJBQWlCLEdBQUcsV0FBTTs7SUFDckMsSUFBOENILEdBQVksb0ZBQVpBLDREQUFVLEVBQUUsTUFBbkRJLGVBQWUsR0FBd0JKLEdBQVksR0FBcEMsRUFBRUssa0JBQWtCLEdBQUlMLEdBQVksR0FBaEI7SUFFMUMsSUFBTU0sUUFBUSxHQUFHO1FBQ2ZDLEtBQUssRUFBRSxxQkFBcUI7UUFDNUJDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLEtBQUssRUFBRSxpREFBaUQ7UUFDeERDLEtBQUssRUFBRTtZQUNMLGlCQUFpQjtZQUNqQiw2QkFBNkI7WUFDN0IsdUJBQXVCO1NBQ3hCO0tBQ0Y7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNYLG9EQUFNO2dCQUNMWSxlQUFlLEVBQUMsbUJBQW1CO2dCQUNuQ0MsVUFBVSxFQUFDLFNBQVM7Z0JBQ3BCQyxNQUFNLEVBQUU7b0JBQUVGLGVBQWUsRUFBRSxjQUFjO2lCQUFFO2dCQUMzQ0csT0FBTyxFQUFFVCxrQkFBa0IsQ0FBQ1UsRUFBRTtnQkFDOUJDLEtBQUssRUFBQyxhQUFhO2dCQUNuQkMsWUFBWSxFQUFDLElBQUk7Z0JBQ2pCQyxRQUFRLEVBQUMsUUFBUTtnQkFDakJDLENBQUMsRUFBQyxNQUFNO2dCQUNSQyxJQUFJLEVBQUMsT0FBTzswQkFFWiw0RUFBQ3hCLG9EQUFNO29CQUFDeUIsT0FBTyxFQUFDLEdBQUc7O3NDQUNqQiw4REFBQ3pCLG9EQUFNOzRCQUNMMEIsQ0FBQyxFQUFDLEdBQUc7NEJBQ0xDLEtBQUssRUFBQyxVQUFVOzRCQUNoQkMsT0FBTyxFQUFDLFlBQVk7NEJBQ3BCQyxFQUFFLEVBQUUsTUFBSyxDQUFpQixNQUF3QixDQUF2Q25CLFFBQVEsQ0FBQ0MsS0FBSyxFQUFDLDBCQUF3QixDQUFDOzRCQUNuRFksQ0FBQyxFQUFDLE1BQU07NEJBQ1JDLElBQUksRUFBQyxPQUFPO3NDQUVaLDRFQUFDdkIsaURBQUc7Z0NBQUM2QixHQUFHLEVBQUMsb0JBQW9CO2dDQUFDQyxJQUFJLEVBQUMsR0FBRzs7Ozs7cUNBQUc7Ozs7O2lDQUNsQztzQ0FDVCw4REFBQy9CLG9EQUFNOzRCQUFDMEIsQ0FBQyxFQUFDLEdBQUc7NEJBQUNHLEVBQUUsRUFBQyxlQUFlOzRCQUFDRyxTQUFTLEVBQUMsUUFBUTs0QkFBQ0MsQ0FBQyxFQUFDLE1BQU07OzhDQUMxRCw4REFBQzVCLG9EQUFNO29DQUFDdUIsT0FBTyxFQUFDLFFBQVE7b0NBQUNMLENBQUMsRUFBQyxNQUFNOzhDQUM5QmIsUUFBUSxDQUFDSSxLQUFLLENBQUNvQixHQUFHLENBQUMsU0FBQ0MsSUFBSTs2REFDdkIsOERBQUNsQyxpREFBRzs0Q0FBQzZCLEdBQUcsRUFBRUssSUFBSTs0Q0FBRUosSUFBSSxFQUFDLElBQUk7Ozs7O2lEQUFHO3FDQUM3QixDQUFDOzs7Ozt5Q0FDSzs4Q0FDVCw4REFBQzdCLGtEQUFJOzhDQUFFUSxRQUFRLENBQUNHLEtBQUs7Ozs7O3lDQUFROzs7Ozs7aUNBQ3RCOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzBCQUVULDhEQUFDUCx3RUFBaUI7Z0JBQ2hCOEIsTUFBTSxFQUFFNUIsZUFBZTtnQkFDdkI2QixPQUFPLEVBQUU1QixrQkFBa0IsQ0FBQzZCLEdBQUc7Z0JBQy9CNUIsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFDbEI7O29CQUNELENBQ0g7Q0FDSCxDQUFDO0dBeERXSCxpQkFBaUI7O1FBQ2tCSCx3REFBVTs7O0FBRDdDRyxLQUFBQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWN0aXZpdHkvd2luZG93L0FjdGl2aXR5SGlnaGxpZ2h0LnRzeD8zMmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBWU3RhY2ssXG4gIEhlYWRpbmcsXG4gIEltZyxcbiAgVGV4dCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICB1c2VCb29sZWFuLFxuICBIU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQge1xuICBBY3Rpdml0eUluZm9Nb2RhbCxcbiAgQWN0aXZpdHlEYXRhLFxufSBmcm9tIFwiLi4vLi4vbW9kYWxzL0FjdGl2aXR5SW5mb01vZGFsXCI7XG5cbmV4cG9ydCBjb25zdCBBY3Rpdml0eUhpZ2hsaWdodCA9ICgpID0+IHtcbiAgY29uc3QgW2lzSW5mb01vZGFsT3Blbiwgc2V0SXNJbmZvTW9kYWxPcGVuXSA9IHVzZUJvb2xlYW4oKTtcblxuICBjb25zdCBhY3Rpdml0eSA9IHtcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2dhcmRlbnMuanBnXCIsXG4gICAgdGl0bGU6IFwiU29hayB1cCBzb21lIHN1blwiLFxuICAgIGJsdXJiOiBcIkdvIGZvciBhIHN0cm9sbCBhbmQgZmluZCBzb21ld2hlcmUgbmljZSB0byByZWFkXCIsXG4gICAgaWNvbnM6IFtcbiAgICAgIFwiL2ltYWdlcy9zdW4ucG5nXCIsXG4gICAgICBcIi9pbWFnZXMvd2Fsa2luZy10aGUtZG9nLnBuZ1wiLFxuICAgICAgXCIvaW1hZ2VzL29wZW4tYm9vay5wbmdcIixcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwibmV1dHJhbC5ib2xkU2hlZXJcIlxuICAgICAgICB0cmFuc2l0aW9uPVwiYWxsIC4zc1wiXG4gICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwibmV1dHJhbC5tYWluXCIgfX1cbiAgICAgICAgb25DbGljaz17c2V0SXNJbmZvTW9kYWxPcGVuLm9ufVxuICAgICAgICBjb2xvcj1cImFjY2VudC5tYWluXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHc9XCIxMjAlXCJcbiAgICAgICAgbWluSD1cIjMwMHB4XCJcbiAgICAgID5cbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPVwiMFwiPlxuICAgICAgICAgIDxWU3RhY2tcbiAgICAgICAgICAgIHA9XCIzXCJcbiAgICAgICAgICAgIGFsaWduPVwiZmxleC1lbmRcIlxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgYmc9e2B1cmwoJHthY3Rpdml0eS5pbWFnZX0pIGNlbnRlci9jb3ZlciBuby1yZXBlYXRgfVxuICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgbWluSD1cIjE1MHB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvcmVsb2FkLnBuZ1wiIG1heFc9XCI5XCIgLz5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICA8VlN0YWNrIHA9XCIzXCIgYmc9XCJuZXV0cmFsLmxpZ2h0XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgaD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIHthY3Rpdml0eS5pY29ucy5tYXAoKGljb24pID0+IChcbiAgICAgICAgICAgICAgICA8SW1nIHNyYz17aWNvbn0gbWF4Vz1cIjEyXCIgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgIDxUZXh0PnthY3Rpdml0eS5ibHVyYn08L1RleHQ+XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxBY3Rpdml0eUluZm9Nb2RhbFxuICAgICAgICBpc09wZW49e2lzSW5mb01vZGFsT3Blbn1cbiAgICAgICAgb25DbG9zZT17c2V0SXNJbmZvTW9kYWxPcGVuLm9mZn1cbiAgICAgICAgYWN0aXZpdHk9e2FjdGl2aXR5fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVlN0YWNrIiwiSW1nIiwiVGV4dCIsIkJ1dHRvbiIsInVzZUJvb2xlYW4iLCJIU3RhY2siLCJBY3Rpdml0eUluZm9Nb2RhbCIsIkFjdGl2aXR5SGlnaGxpZ2h0IiwiaXNJbmZvTW9kYWxPcGVuIiwic2V0SXNJbmZvTW9kYWxPcGVuIiwiYWN0aXZpdHkiLCJpbWFnZSIsInRpdGxlIiwiYmx1cmIiLCJpY29ucyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJfaG92ZXIiLCJvbkNsaWNrIiwib24iLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidyIsIm1pbkgiLCJzcGFjaW5nIiwicCIsImFsaWduIiwianVzdGlmeSIsImJnIiwic3JjIiwibWF4VyIsInRleHRBbGlnbiIsImgiLCJtYXAiLCJpY29uIiwiaXNPcGVuIiwib25DbG9zZSIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/activity/window/ActivityHighlight.tsx\n"));

/***/ })

});