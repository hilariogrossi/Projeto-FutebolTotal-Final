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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./app/Header.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Noticia = (param)=>{\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticia_1),\n        target: \"_blank\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageFirstPage),\n                alt: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleFirstPage),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Noticia;\nconst NoticiaSemImagem = (param)=>{\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticia_1),\n        target: \"_blank\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleFirstPage),\n            children: title\n        }, void 0, false, {\n            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = NoticiaSemImagem;\nconst Home = ()=>{\n    _s();\n    const [noticias, setNoticias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [noticiasComImagem, setNoticiasComImagem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [noticiasSemImagem, setNoticiasSemImagem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://api.futeboltotal.cloud/noticias\");\n                const noticiasComImagem = response.data.filter((item)=>item.imageUrl && item.imageUrl !== \"\");\n                const noticiasSemImagem = response.data.filter((item)=>!item.imageUrl || item.imageUrl === \"\");\n                setNoticias(noticiasComImagem.concat(noticiasSemImagem));\n                setNoticiasComImagem(noticiasComImagem);\n                setNoticiasSemImagem(noticiasSemImagem);\n            } catch (error) {\n                console.error(\"Erro ao buscar API\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasContainerMaxWidth),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticias),\n                    children: [\n                        noticiasComImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasComImagem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[0].title,\n                                        image: noticiasComImagem[0].imageUrl,\n                                        href: noticiasComImagem[0].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[1].title,\n                                        image: noticiasComImagem[1].imageUrl,\n                                        href: noticiasComImagem[1].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[2].title,\n                                        image: noticiasComImagem[2].imageUrl,\n                                        href: noticiasComImagem[2].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[3].title,\n                                        image: noticiasComImagem[3].imageUrl,\n                                        href: noticiasComImagem[3].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[4].title,\n                                        image: noticiasComImagem[4].imageUrl,\n                                        href: noticiasComImagem[4].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[5].title,\n                                        image: noticiasComImagem[5].imageUrl,\n                                        href: noticiasComImagem[5].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        noticiasSemImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiasComImagem),\n                            children: noticiasSemImagem.map((noticia, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoticiaSemImagem, {\n                                        title: noticia.title,\n                                        href: noticia.url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        noticias.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Nenhuma not\\xedcia encontrada.\"\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 84,\n                            columnNumber: 37\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/githubdev\",\n                    target: \"_blanck\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Todos direitos reservados a Hil\\xe1rio, Lu\\xeds, Mauro e Thayn\\xe1! \\xa9 Copyright\"\n                    }, void 0, false, {\n                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 47\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"OAk1X175wR1v2WpkJbfDrkmcbdI=\");\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Noticia\");\n$RefreshReg$(_c1, \"NoticiaSemImagem\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakMsOERBQUNDO2dCQUFPcEMsV0FBV1AsZ0VBQWE7MEJBQzlCLDRFQUFDTTtvQkFBRUQsTUFBSztvQkFBYUksUUFBTzs4QkFBVSw0RUFBQ2lDO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7R0ExRU16QjtNQUFBQTtBQTRFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jb25zdCBOb3RpY2lhID0gKHsgdGl0bGUsIGltYWdlLCBocmVmIH0pID0+IChcbiAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYV8xfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGltZyBzcmM9e2ltYWdlfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUZpcnN0UGFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVGaXJzdFBhZ2V9Pnt0aXRsZX08L2gyPlxuICA8L2E+XG4pO1xuXG5jb25zdCBOb3RpY2lhU2VtSW1hZ2VtID0gKHsgdGl0bGUsIGltYWdlLCBocmVmIH0pID0+IChcbiAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYV8xfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlRmlyc3RQYWdlfT57dGl0bGV9PC9oMj5cbiAgPC9hPlxuKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW25vdGljaWFzLCBzZXROb3RpY2lhc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtub3RpY2lhc0NvbUltYWdlbSwgc2V0Tm90aWNpYXNDb21JbWFnZW1dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbm90aWNpYXNTZW1JbWFnZW0sIHNldE5vdGljaWFzU2VtSW1hZ2VtXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZ1dGVib2x0b3RhbC5jbG91ZC9ub3RpY2lhcycpO1xuXG4gICAgICAgIGNvbnN0IG5vdGljaWFzQ29tSW1hZ2VtID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW1hZ2VVcmwgJiYgaXRlbS5pbWFnZVVybCAhPT0gJycpO1xuICAgICAgICBjb25zdCBub3RpY2lhc1NlbUltYWdlbSA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5pbWFnZVVybCB8fCBpdGVtLmltYWdlVXJsID09PSAnJyk7XG5cbiAgICAgICAgc2V0Tm90aWNpYXMobm90aWNpYXNDb21JbWFnZW0uY29uY2F0KG5vdGljaWFzU2VtSW1hZ2VtKSk7XG4gICAgICAgIHNldE5vdGljaWFzQ29tSW1hZ2VtKG5vdGljaWFzQ29tSW1hZ2VtKTtcbiAgICAgICAgc2V0Tm90aWNpYXNTZW1JbWFnZW0obm90aWNpYXNTZW1JbWFnZW0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgQVBJJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYXNDb250YWluZXJNYXhXaWR0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYXN9PlxuICAgICAgICAgIHtub3RpY2lhc0NvbUltYWdlbS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYXNDb21JbWFnZW19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bMF0udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVswXS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bMF0udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bMV0udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVsxXS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bMV0udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bMl0udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVsyXS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bMl0udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bM10udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVszXS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bM10udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bNF0udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVs0XS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bNF0udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYSB0aXRsZT17bm90aWNpYXNDb21JbWFnZW1bNV0udGl0bGV9IGltYWdlPXtub3RpY2lhc0NvbUltYWdlbVs1XS5pbWFnZVVybH0gaHJlZj17bm90aWNpYXNDb21JbWFnZW1bNV0udXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25vdGljaWFzU2VtSW1hZ2VtLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhc0NvbUltYWdlbX0+XG4gICAgICAgICAgICAgIHtub3RpY2lhc1NlbUltYWdlbS5tYXAoKG5vdGljaWEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2lhQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RpY2lhU2VtSW1hZ2VtIHRpdGxlPXtub3RpY2lhLnRpdGxlfSBocmVmPXtub3RpY2lhLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25vdGljaWFzLmxlbmd0aCA9PT0gMCAmJiA8cD5OZW5odW1hIG5vdMOtY2lhIGVuY29udHJhZGEuPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YSBocmVmPScvZ2l0aHViZGV2JyB0YXJnZXQ9J19ibGFuY2snPjxwPlRvZG9zIGRpcmVpdG9zIHJlc2VydmFkb3MgYSBIaWzDoXJpbywgTHXDrXMsIE1hdXJvIGUgVGhheW7DoSEgJmNvcHk7IENvcHlyaWdodDwvcD48L2E+XG5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJIZWFkZXIiLCJOb3RpY2lhIiwidGl0bGUiLCJpbWFnZSIsImhyZWYiLCJhIiwiY2xhc3NOYW1lIiwibm90aWNpYV8xIiwidGFyZ2V0IiwiaW1nIiwic3JjIiwiaW1hZ2VGaXJzdFBhZ2UiLCJhbHQiLCJoMiIsInRpdGxlRmlyc3RQYWdlIiwiTm90aWNpYVNlbUltYWdlbSIsIkhvbWUiLCJub3RpY2lhcyIsInNldE5vdGljaWFzIiwibm90aWNpYXNDb21JbWFnZW0iLCJzZXROb3RpY2lhc0NvbUltYWdlbSIsIm5vdGljaWFzU2VtSW1hZ2VtIiwic2V0Tm90aWNpYXNTZW1JbWFnZW0iLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiaW1hZ2VVcmwiLCJjb25jYXQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJub3RpY2lhc0NvbnRhaW5lck1heFdpZHRoIiwibGVuZ3RoIiwibm90aWNpYUNvbnRhaW5lciIsInVybCIsIm1hcCIsIm5vdGljaWEiLCJpbmRleCIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});