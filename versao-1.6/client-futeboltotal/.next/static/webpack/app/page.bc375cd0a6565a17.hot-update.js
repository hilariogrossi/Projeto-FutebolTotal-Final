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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./app/Header.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Noticia = (param)=>{\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticia_1),\n        target: \"_blank\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageFirstPage),\n                alt: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleFirstPage),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Noticia;\nconst NoticiaSemImagem = (param)=>{\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticia_1),\n        target: \"_blank\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleFirstPage),\n            children: title\n        }, void 0, false, {\n            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = NoticiaSemImagem;\nconst Home = ()=>{\n    _s();\n    const [noticias, setNoticias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [noticiasComImagem, setNoticiasComImagem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [noticiasSemImagem, setNoticiasSemImagem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://api.futeboltotal.cloud/noticias\");\n                const noticiasComImagem = response.data.filter((item)=>item.imageUrl && item.imageUrl !== \"\");\n                const noticiasSemImagem = response.data.filter((item)=>!item.imageUrl || item.imageUrl === \"\");\n                setNoticias(noticiasComImagem.concat(noticiasSemImagem));\n                setNoticiasComImagem(noticiasComImagem);\n                setNoticiasSemImagem(noticiasSemImagem);\n            } catch (error) {\n                console.error(\"Erro ao buscar API\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasContainerMaxWidth),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticias),\n                    children: [\n                        noticiasComImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasComImagem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[0].title,\n                                        image: noticiasComImagem[0].imageUrl,\n                                        href: noticiasComImagem[0].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[1].title,\n                                        image: noticiasComImagem[1].imageUrl,\n                                        href: noticiasComImagem[1].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[2].title,\n                                        image: noticiasComImagem[2].imageUrl,\n                                        href: noticiasComImagem[2].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[3].title,\n                                        image: noticiasComImagem[3].imageUrl,\n                                        href: noticiasComImagem[3].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[4].title,\n                                        image: noticiasComImagem[4].imageUrl,\n                                        href: noticiasComImagem[4].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[5].title,\n                                        image: noticiasComImagem[5].imageUrl,\n                                        href: noticiasComImagem[5].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        noticiasSemImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasComImagem),\n                            children: noticiasSemImagem.map((noticia, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoticiaSemImagem, {\n                                        title: noticia.title,\n                                        href: noticia.url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        noticias.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Nenhuma not\\xedcia encontrada.\"\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 84,\n                            columnNumber: 37\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Todos direitos reservados a Hil\\xe1rio, Lu\\xeds, Mauro e Thayn\\xe1! \\xa9 Copyright\"\n                    }, void 0, false, {\n                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 12\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"OAk1X175wR1v2WpkJbfDrkmcbdI=\");\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Noticia\");\n$RefreshReg$(_c1, \"NoticiaSemImagem\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakMsOERBQUNDO2dCQUFPcEMsV0FBV1AsZ0VBQWE7MEJBQzlCLDRFQUFDTTs4QkFBRSw0RUFBQ29DO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZDtHQTFFTXpCO01BQUFBO0FBNEVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IE5vdGljaWEgPSAoeyB0aXRsZSwgaW1hZ2UsIGhyZWYgfSkgPT4gKFxuICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhXzF9IHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aW1nIHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlRmlyc3RQYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUZpcnN0UGFnZX0+e3RpdGxlfTwvaDI+XG4gIDwvYT5cbik7XG5cbmNvbnN0IE5vdGljaWFTZW1JbWFnZW0gPSAoeyB0aXRsZSwgaW1hZ2UsIGhyZWYgfSkgPT4gKFxuICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhXzF9IHRhcmdldD0nX2JsYW5rJz5cbiAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVGaXJzdFBhZ2V9Pnt0aXRsZX08L2gyPlxuICA8L2E+XG4pO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbm90aWNpYXMsIHNldE5vdGljaWFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGljaWFzQ29tSW1hZ2VtLCBzZXROb3RpY2lhc0NvbUltYWdlbV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtub3RpY2lhc1NlbUltYWdlbSwgc2V0Tm90aWNpYXNTZW1JbWFnZW1dID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9hcGkuZnV0ZWJvbHRvdGFsLmNsb3VkL25vdGljaWFzJyk7XG5cbiAgICAgICAgY29uc3Qgbm90aWNpYXNDb21JbWFnZW0gPSByZXNwb25zZS5kYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbWFnZVVybCAmJiBpdGVtLmltYWdlVXJsICE9PSAnJyk7XG4gICAgICAgIGNvbnN0IG5vdGljaWFzU2VtSW1hZ2VtID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmltYWdlVXJsIHx8IGl0ZW0uaW1hZ2VVcmwgPT09ICcnKTtcblxuICAgICAgICBzZXROb3RpY2lhcyhub3RpY2lhc0NvbUltYWdlbS5jb25jYXQobm90aWNpYXNTZW1JbWFnZW0pKTtcbiAgICAgICAgc2V0Tm90aWNpYXNDb21JbWFnZW0obm90aWNpYXNDb21JbWFnZW0pO1xuICAgICAgICBzZXROb3RpY2lhc1NlbUltYWdlbShub3RpY2lhc1NlbUltYWdlbSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBBUEknLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhc0NvbnRhaW5lck1heFdpZHRofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhc30+XG4gICAgICAgICAge25vdGljaWFzQ29tSW1hZ2VtLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhc0NvbUltYWdlbX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVswXS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzBdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVswXS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVsxXS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzFdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVsxXS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVsyXS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzJdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVsyXS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVszXS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzNdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVszXS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVs0XS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzRdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVs0XS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhIHRpdGxlPXtub3RpY2lhc0NvbUltYWdlbVs1XS50aXRsZX0gaW1hZ2U9e25vdGljaWFzQ29tSW1hZ2VtWzVdLmltYWdlVXJsfSBocmVmPXtub3RpY2lhc0NvbUltYWdlbVs1XS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bm90aWNpYXNTZW1JbWFnZW0ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFzQ29tSW1hZ2VtfT5cbiAgICAgICAgICAgICAge25vdGljaWFzU2VtSW1hZ2VtLm1hcCgobm90aWNpYSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWFTZW1JbWFnZW0gdGl0bGU9e25vdGljaWEudGl0bGV9IGhyZWY9e25vdGljaWEudXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bm90aWNpYXMubGVuZ3RoID09PSAwICYmIDxwPk5lbmh1bWEgbm90w61jaWEgZW5jb250cmFkYS48L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhPjxwPlRvZG9zIGRpcmVpdG9zIHJlc2VydmFkb3MgYSBIaWzDoXJpbywgTHXDrXMsIE1hdXJvIGUgVGhheW7DoSEgJmNvcHk7IENvcHlyaWdodDwvcD48L2E+XG5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJIZWFkZXIiLCJOb3RpY2lhIiwidGl0bGUiLCJpbWFnZSIsImhyZWYiLCJhIiwiY2xhc3NOYW1lIiwibm90aWNpYV8xIiwidGFyZ2V0IiwiaW1nIiwic3JjIiwiaW1hZ2VGaXJzdFBhZ2UiLCJhbHQiLCJoMiIsInRpdGxlRmlyc3RQYWdlIiwiTm90aWNpYVNlbUltYWdlbSIsIkhvbWUiLCJub3RpY2lhcyIsInNldE5vdGljaWFzIiwibm90aWNpYXNDb21JbWFnZW0iLCJzZXROb3RpY2lhc0NvbUltYWdlbSIsIm5vdGljaWFzU2VtSW1hZ2VtIiwic2V0Tm90aWNpYXNTZW1JbWFnZW0iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiaW1hZ2VVcmwiLCJjb25jYXQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJub3RpY2lhc0NvbnRhaW5lck1heFdpZHRoIiwibGVuZ3RoIiwibm90aWNpYUNvbnRhaW5lciIsInVybCIsIm1hcCIsIm5vdGljaWEiLCJpbmRleCIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});