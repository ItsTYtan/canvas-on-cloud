"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/search.tsx":
/*!*******************************!*\
  !*** ./components/search.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Search(param) {\n    let { searchResults } = param;\n    var _searchParams_get;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [isSearching, setIsSearching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const files = JSON.parse(searchResults).map((file)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: file.file_name\n        }, file.file_name, false, {\n            fileName: \"C:\\\\Users\\\\tytan\\\\Documents\\\\canvas-on-cloud\\\\components\\\\search.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, this);\n    });\n    function handleSearch(term) {\n        console.log(\"Searching... \".concat(term));\n        const params = new URLSearchParams(searchParams);\n        if (term) {\n            params.set(\"query\", term);\n        } else {\n            params.delete(\"query\");\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative px-4 z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tytan\\\\Documents\\\\canvas-on-cloud\\\\components\\\\search.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"relative z-30 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                onFocus: ()=>setIsSearching(true),\n                onBlur: ()=>setIsSearching(false),\n                onChange: (e)=>{\n                    handleSearch(e.target.value);\n                },\n                defaultValue: (_searchParams_get = searchParams.get(\"query\")) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString(),\n                placeholder: \"type your filename here\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tytan\\\\Documents\\\\canvas-on-cloud\\\\components\\\\search.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            isSearching && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -top-2 -left-2 w-full z-20 pt-12 px-2 bg-white\",\n                children: files\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tytan\\\\Documents\\\\canvas-on-cloud\\\\components\\\\search.tsx\",\n                lineNumber: 50,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tytan\\\\Documents\\\\canvas-on-cloud\\\\components\\\\search.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"NOvRs+uV3JhszKooQZ1axhPIakU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwRTtBQUN6QztBQUVsQixTQUFTSSxPQUFPLEtBQXVCO1FBQXZCLEVBQUNDLGFBQWEsRUFBUyxHQUF2QjtRQXlDUEM7O0lBeEN0QixNQUFNQSxlQUFlTixnRUFBZUE7SUFDcEMsTUFBTU8sV0FBV04sNERBQVdBO0lBQzVCLE1BQU0sRUFBRU8sT0FBTyxFQUFFLEdBQUdOLDBEQUFTQTtJQUU3QixNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVEsUUFBUUMsS0FBS0MsS0FBSyxDQUFDUixlQUFlUyxHQUFHLENBQUMsQ0FBQ0M7UUFHekMscUJBQ0ksOERBQUNDO3NCQUNJRCxLQUFLRSxTQUFTO1dBRFRGLEtBQUtFLFNBQVM7Ozs7O0lBSWhDO0lBRUEsU0FBU0MsYUFBYUMsSUFBWTtRQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLGdCQUFxQixPQUFMRjtRQUU1QixNQUFNRyxTQUFTLElBQUlDLGdCQUFnQmpCO1FBQ25DLElBQUlhLE1BQU07WUFDUkcsT0FBT0UsR0FBRyxDQUFDLFNBQVNMO1FBQ3RCLE9BQU87WUFDTEcsT0FBT0csTUFBTSxDQUFDO1FBQ2hCO1FBQ0FqQixRQUFRLEdBQWVjLE9BQVpmLFVBQVMsS0FBcUIsT0FBbEJlLE9BQU9JLFFBQVE7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ1Y7UUFBSVcsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFTRixXQUFVOzBCQUFVOzs7Ozs7MEJBRzVDLDhEQUFDRztnQkFDQ0gsV0FBVTtnQkFDVkksU0FBUyxJQUFNckIsZUFBZTtnQkFDOUJzQixRQUFRLElBQU10QixlQUFlO2dCQUM3QnVCLFVBQVUsQ0FBQ0M7b0JBQ1RoQixhQUFhZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUM3QjtnQkFDQUMsWUFBWSxHQUFFL0Isb0JBQUFBLGFBQWFnQyxHQUFHLENBQUMsc0JBQWpCaEMsd0NBQUFBLGtCQUEyQm9CLFFBQVE7Z0JBQ2pEYSxhQUFhOzs7Ozs7WUFFZDlCLDZCQUFlLDhEQUFDTztnQkFBSVcsV0FBVTswQkFDNUJoQjs7Ozs7Ozs7Ozs7O0FBSVg7R0FqRHdCUDs7UUFDREosNERBQWVBO1FBQ25CQyx3REFBV0E7UUFDUkMsc0RBQVNBOzs7S0FIUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2gudHN4Pzg3NWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG4gXHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcywgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7c2VhcmNoUmVzdWx0c30gOiBQcm9wcykge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCB7IHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbaXNTZWFyY2hpbmcsIHNldElzU2VhcmNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmlsZXMgPSBKU09OLnBhcnNlKHNlYXJjaFJlc3VsdHMpLm1hcCgoZmlsZToge1xyXG4gICAgICBmaWxlX25hbWU6IHN0cmluZ1xyXG4gIH0pID0+IHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2ZpbGUuZmlsZV9uYW1lfT5cclxuICAgICAgICAgICAgICB7ZmlsZS5maWxlX25hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coYFNlYXJjaGluZy4uLiAke3Rlcm19YCk7XHJcbiAgIFxyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xyXG4gICAgaWYgKHRlcm0pIHtcclxuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCB0ZXJtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmFtcy5kZWxldGUoJ3F1ZXJ5Jyk7XHJcbiAgICB9XHJcbiAgICByZXBsYWNlKGAke3BhdGhuYW1lfT8ke3BhcmFtcy50b1N0cmluZygpfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIHJlbGF0aXZlIHB4LTQgei0xMCc+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICBTZWFyY2hcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzAgcGVlciBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LVs5cHhdIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0SXNTZWFyY2hpbmcodHJ1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IHNldElzU2VhcmNoaW5nKGZhbHNlKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoUGFyYW1zLmdldCgncXVlcnknKT8udG9TdHJpbmcoKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsndHlwZSB5b3VyIGZpbGVuYW1lIGhlcmUnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2lzU2VhcmNoaW5nICYmIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSAtdG9wLTIgLWxlZnQtMiB3LWZ1bGwgei0yMCBwdC0xMiBweC0yIGJnLXdoaXRlJz5cclxuICAgICAgICAgIHtmaWxlc31cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNlYXJjaFJlc3VsdHM6IHN0cmluZ1xyXG59Il0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJTZWFyY2giLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoUGFyYW1zIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaXNTZWFyY2hpbmciLCJzZXRJc1NlYXJjaGluZyIsImZpbGVzIiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZmlsZSIsImRpdiIsImZpbGVfbmFtZSIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwiZGVsZXRlIiwidG9TdHJpbmciLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsImdldCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/search.tsx\n"));

/***/ })

});