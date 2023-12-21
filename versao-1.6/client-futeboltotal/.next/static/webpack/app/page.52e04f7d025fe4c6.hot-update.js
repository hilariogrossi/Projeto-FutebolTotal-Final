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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./app/Header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"(app-pages-browser)/./app/footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Noticia = (param)=>{\n    let { title, image, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticia_1),\n        target: \"_blank\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageFirstPage),\n                alt: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleFirstPage),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Noticia;\n// const NoticiaSemImagem = ({ title, image, href }) => (\n//   <a href={href} className={styles.noticia_1} target='_blank'>\n//     <h2 className={styles.titleFirstPage}>{title}</h2>\n//   </a>\n// );\nconst Home = ()=>{\n    _s();\n    const [noticias, setNoticias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [noticiasComImagem, setNoticiasComImagem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [noticiasSemImagem, setNoticiasSemImagem] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://api.futeboltotal.cloud/noticias\");\n                const noticiasComImagem = response.data.filter((item)=>item.imageUrl && item.imageUrl !== \"\");\n                // const noticiasSemImagem = response.data.filter((item) => !item.imageUrl || item.imageUrl === '');\n                setNoticias(noticiasComImagem.concat(noticiasSemImagem));\n                setNoticiasComImagem(noticiasComImagem);\n            // setNoticiasSemImagem(noticiasSemImagem);\n            } catch (error) {\n                console.error(\"Erro ao buscar API\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiasContainerMaxWidth),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticias),\n                    children: [\n                        noticiasComImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiasComImagem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[0].title,\n                                        image: noticiasComImagem[0].imageUrl,\n                                        href: noticiasComImagem[0].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[1].title,\n                                        image: noticiasComImagem[1].imageUrl,\n                                        href: noticiasComImagem[1].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[2].title,\n                                        image: noticiasComImagem[2].imageUrl,\n                                        href: noticiasComImagem[2].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[3].title,\n                                        image: noticiasComImagem[3].imageUrl,\n                                        href: noticiasComImagem[3].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[4].title,\n                                        image: noticiasComImagem[4].imageUrl,\n                                        href: noticiasComImagem[4].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Noticia, {\n                                        title: noticiasComImagem[5].title,\n                                        image: noticiasComImagem[5].imageUrl,\n                                        href: noticiasComImagem[5].url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        noticiasComImagem.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiasComImagem),\n                            children: noticiasSemImagem.map((noticia, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().noticiaContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoticiaSemImagem, {\n                                        title: noticia.title,\n                                        href: noticia.url\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        noticias.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Nenhuma not\\xedcia encontrada.\"\n                        }, void 0, false, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                            lineNumber: 85,\n                            columnNumber: 37\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"ZDTg+g5kCLsQgQaGtHlY5eWIYYs=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Noticia\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzhDQUVsSCw4REFBQ0o7b0NBQUl6QixXQUFXUiwwRUFBdUI7OENBQ3JDLDRFQUFDRzt3Q0FBUUMsT0FBT2dCLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ2hCLEtBQUs7d0NBQUVDLE9BQU9lLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ1EsUUFBUTt3Q0FBRXRCLE1BQU1jLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ2lCLEdBQUc7Ozs7Ozs7Ozs7OzhDQUVsSCw4REFBQ0o7b0NBQUl6QixXQUFXUiwwRUFBdUI7OENBQ3JDLDRFQUFDRzt3Q0FBUUMsT0FBT2dCLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ2hCLEtBQUs7d0NBQUVDLE9BQU9lLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ1EsUUFBUTt3Q0FBRXRCLE1BQU1jLGlCQUFpQixDQUFDLEVBQUUsQ0FBQ2lCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU12SGpCLGtCQUFrQmUsTUFBTSxHQUFHLG1CQUMxQiw4REFBQ0Y7NEJBQUl6QixXQUFXUiwyRUFBd0I7c0NBQ3JDOEIsa0JBQWtCUSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQy9CLDhEQUFDUDtvQ0FBZ0J6QixXQUFXUiwwRUFBdUI7OENBQ2pELDRFQUFDeUM7d0NBQWlCckMsT0FBT21DLFFBQVFuQyxLQUFLO3dDQUFFRSxNQUFNaUMsUUFBUUYsR0FBRzs7Ozs7O21DQURqREc7Ozs7Ozs7Ozs7d0JBT2Z0QixTQUFTaUIsTUFBTSxLQUFLLG1CQUFLLDhEQUFDTztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpDLDhEQUFDeEMsK0NBQU1BOzs7Ozs7O0FBSWI7R0F2RU1lO01BQUFBO0FBeUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuY29uc3QgTm90aWNpYSA9ICh7IHRpdGxlLCBpbWFnZSwgaHJlZiB9KSA9PiAoXG4gIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFfMX0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VGaXJzdFBhZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlRmlyc3RQYWdlfT57dGl0bGV9PC9oMj5cbiAgPC9hPlxuKTtcblxuLy8gY29uc3QgTm90aWNpYVNlbUltYWdlbSA9ICh7IHRpdGxlLCBpbWFnZSwgaHJlZiB9KSA9PiAoXG4vLyAgIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFfMX0gdGFyZ2V0PSdfYmxhbmsnPlxuLy8gICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUZpcnN0UGFnZX0+e3RpdGxlfTwvaDI+XG4vLyAgIDwvYT5cbi8vICk7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtub3RpY2lhcywgc2V0Tm90aWNpYXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbm90aWNpYXNDb21JbWFnZW0sIHNldE5vdGljaWFzQ29tSW1hZ2VtXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW25vdGljaWFzU2VtSW1hZ2VtLCBzZXROb3RpY2lhc1NlbUltYWdlbV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwaS5mdXRlYm9sdG90YWwuY2xvdWQvbm90aWNpYXMnKTtcblxuICAgICAgICBjb25zdCBub3RpY2lhc0NvbUltYWdlbSA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmltYWdlVXJsICYmIGl0ZW0uaW1hZ2VVcmwgIT09ICcnKTtcbiAgICAgICAgLy8gY29uc3Qgbm90aWNpYXNTZW1JbWFnZW0gPSByZXNwb25zZS5kYXRhLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaW1hZ2VVcmwgfHwgaXRlbS5pbWFnZVVybCA9PT0gJycpO1xuXG4gICAgICAgIHNldE5vdGljaWFzKG5vdGljaWFzQ29tSW1hZ2VtLmNvbmNhdChub3RpY2lhc1NlbUltYWdlbSkpO1xuICAgICAgICBzZXROb3RpY2lhc0NvbUltYWdlbShub3RpY2lhc0NvbUltYWdlbSk7XG4gICAgICAgIC8vIHNldE5vdGljaWFzU2VtSW1hZ2VtKG5vdGljaWFzU2VtSW1hZ2VtKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIEFQSScsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFzQ29udGFpbmVyTWF4V2lkdGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFzfT5cbiAgICAgICAgICB7bm90aWNpYXNDb21JbWFnZW0ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFzQ29tSW1hZ2VtfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzBdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bMF0uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzBdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzFdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bMV0uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzFdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzJdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bMl0uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzJdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzNdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bM10uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzNdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzRdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bNF0uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzRdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGljaWFDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPE5vdGljaWEgdGl0bGU9e25vdGljaWFzQ29tSW1hZ2VtWzVdLnRpdGxlfSBpbWFnZT17bm90aWNpYXNDb21JbWFnZW1bNV0uaW1hZ2VVcmx9IGhyZWY9e25vdGljaWFzQ29tSW1hZ2VtWzVdLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtub3RpY2lhc0NvbUltYWdlbS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYXNDb21JbWFnZW19PlxuICAgICAgICAgICAgICB7bm90aWNpYXNTZW1JbWFnZW0ubWFwKChub3RpY2lhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubm90aWNpYUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8Tm90aWNpYVNlbUltYWdlbSB0aXRsZT17bm90aWNpYS50aXRsZX0gaHJlZj17bm90aWNpYS51cmx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtub3RpY2lhcy5sZW5ndGggPT09IDAgJiYgPHA+TmVuaHVtYSBub3TDrWNpYSBlbmNvbnRyYWRhLjwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiSGVhZGVyIiwiRm9vdGVyIiwiTm90aWNpYSIsInRpdGxlIiwiaW1hZ2UiLCJocmVmIiwiYSIsImNsYXNzTmFtZSIsIm5vdGljaWFfMSIsInRhcmdldCIsImltZyIsInNyYyIsImltYWdlRmlyc3RQYWdlIiwiYWx0IiwiaDIiLCJ0aXRsZUZpcnN0UGFnZSIsIkhvbWUiLCJub3RpY2lhcyIsInNldE5vdGljaWFzIiwibm90aWNpYXNDb21JbWFnZW0iLCJzZXROb3RpY2lhc0NvbUltYWdlbSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJpbWFnZVVybCIsImNvbmNhdCIsIm5vdGljaWFzU2VtSW1hZ2VtIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2Iiwibm90aWNpYXNDb250YWluZXJNYXhXaWR0aCIsImxlbmd0aCIsIm5vdGljaWFDb250YWluZXIiLCJ1cmwiLCJtYXAiLCJub3RpY2lhIiwiaW5kZXgiLCJOb3RpY2lhU2VtSW1hZ2VtIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});