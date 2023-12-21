"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.css */ \"(app-pages-browser)/./app/login/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header */ \"(app-pages-browser)/./app/Header.js\");\n/* harmony import */ var app_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/footer */ \"(app-pages-browser)/./app/footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const submitLogin = async function(e) {\n        e.preventDefault();\n        // Construir o objeto de dados para enviar no corpo da requisição\n        const formData = {\n            email: email,\n            senha: password\n        };\n        // Fazer a requisição usando a Fetch API\n        const loginData = await fetch(\"http://api.futeboltotal.cloud/usuario/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        }).then((response)=>response.json()).then((data)=>{\n            if (data.error) {\n                alert(data.error);\n                return false;\n            }\n            // Lógica para lidar com a resposta da requisição\n            localStorage.setItem(\"token\", data.token);\n            localStorage.setItem(\"nome\", data.nome);\n            localStorage.setItem(\"email\", data.email);\n            console.log(\"Resposta da requisi\\xe7\\xe3o:\", data);\n            alert(\"Login bem sucedido!\");\n            setTimeout(function() {\n                window.location.href = \"/\";\n            }, 300);\n        }).catch((error)=>{\n            // Lidar com erros durante a requisição\n            console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().containerLogin),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapLogin),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().loginForm),\n                            onSubmit: submitLogin,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().loginFormTitle),\n                                    children: \"Bem-vindo ao FT!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().loginFormTitle),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/images/boladefogo.png\",\n                                        width: 50,\n                                        height: 50,\n                                        alt: \"Imagem Bola de Fogo\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 55\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapInput),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"\".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().input), \" \").concat(password !== \"\" ? (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().hasVal) : \"\"),\n                                            type: \"email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().focusInput),\n                                            \"data-placeholder\": \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapInput),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"\".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().input), \" \").concat(password !== \"\" ? (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().hasVal) : \"\"),\n                                            type: \"password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().focusInput),\n                                            \"data-placeholder\": \"Senha\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().containerLoginFormBtn),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().loginFormBtn),\n                                        children: \"Entrar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().textCenter),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().txt1),\n                                            children: \"N\\xe3o possui conta?\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().txt2),\n                                            href: \"#\",\n                                            children: \"Criar Conta\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hilario/Projeto-FutebolTotal-Final/versao-1.6/client-futeboltotal/app/login/page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Login, \"/deCHtAMI3Baxt+F96uN6I2w1vU=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNTO0FBQ1A7QUFDRjtBQUNDO0FBRWhDLFNBQVNLOztJQUVQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLGNBQWMsZUFBZ0JDLENBQUM7UUFDbkNBLEVBQUVDLGNBQWM7UUFFaEIsaUVBQWlFO1FBQ2pFLE1BQU1DLFdBQVc7WUFDZlQsT0FBT0E7WUFDUFUsT0FBT047UUFDVDtRQUVBLHdDQUF3QztRQUN4QyxNQUFNTyxZQUFZLE1BQU1DLE1BQU0sK0NBQStDO1lBQzNFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBRWxCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1I7UUFDdkIsR0FDR1MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO1lBRUosSUFBSUEsS0FBS0MsS0FBSyxFQUFFO2dCQUNkQyxNQUFNRixLQUFLQyxLQUFLO2dCQUNoQixPQUFPO1lBQ1Q7WUFDQSxpREFBaUQ7WUFDakRFLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSixLQUFLSyxLQUFLO1lBQ3hDRixhQUFhQyxPQUFPLENBQUMsUUFBUUosS0FBS00sSUFBSTtZQUN0Q0gsYUFBYUMsT0FBTyxDQUFDLFNBQVNKLEtBQUtyQixLQUFLO1lBRXhDNEIsUUFBUUMsR0FBRyxDQUFDLGlDQUEyQlI7WUFFdkNFLE1BQU07WUFDTk8sV0FBVztnQkFDVEMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7WUFDekIsR0FBRztRQUNMLEdBQ0NDLEtBQUssQ0FBQ1osQ0FBQUE7WUFDTCx1Q0FBdUM7WUFDdkNNLFFBQVFOLEtBQUssQ0FBQyw2QkFBdUJBO1FBQ3ZDO0lBQ0o7SUFFQSxxQkFFRTs7MEJBRUUsOERBQUN6QiwrQ0FBTUE7Ozs7OzBCQUVQLDhEQUFDc0M7Z0JBQUlDLFdBQVd6QyxvRUFBZ0I7MEJBQzlCLDRFQUFDd0M7b0JBQUlDLFdBQVd6Qyx5RUFBcUI7OEJBQ25DLDRFQUFDd0M7d0JBQUlDLFdBQVd6QyxvRUFBZ0I7a0NBQzlCLDRFQUFDNkM7NEJBQUtKLFdBQVd6QyxvRUFBZ0I7NEJBQUUrQyxVQUFVcEM7OzhDQUMzQyw4REFBQ3FDO29DQUFLUCxXQUFXekMseUVBQXFCOzhDQUFFOzs7Ozs7OENBRXhDLDhEQUFDZ0Q7b0NBQUtQLFdBQVd6Qyx5RUFBcUI7OENBQUUsNEVBQUNELG1EQUFLQTt3Q0FBQ21ELEtBQUk7d0NBQXlCQyxPQUFPO3dDQUFJQyxRQUFRO3dDQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs4Q0FFdkcsOERBQUNiO29DQUFJQyxXQUFXekMsb0VBQWdCOztzREFDOUIsOERBQUN1RDs0Q0FDQ2QsV0FBVyxHQUFtQmhDLE9BQWhCVCxnRUFBWSxFQUFDLEtBQTJDLE9BQXhDUyxhQUFhLEtBQUtULGlFQUFnQixHQUFHOzRDQUNuRXdELE1BQUs7NENBQ0xDLE9BQU9wRDs0Q0FDUHFELFVBQVU5QyxDQUFBQSxJQUFLTixTQUFTTSxFQUFFK0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7c0RBSXhDLDhEQUFDVDs0Q0FBS1AsV0FBV3pDLHFFQUFpQjs0Q0FBRTZELG9CQUFpQjs7Ozs7Ozs7Ozs7OzhDQUl2RCw4REFBQ3JCO29DQUFJQyxXQUFXekMsb0VBQWdCOztzREFDOUIsOERBQUN1RDs0Q0FDQ2QsV0FBVyxHQUFtQmhDLE9BQWhCVCxnRUFBWSxFQUFDLEtBQTJDLE9BQXhDUyxhQUFhLEtBQUtULGlFQUFnQixHQUFHOzRDQUNuRXdELE1BQUs7NENBQ0xDLE9BQU9oRDs0Q0FDUGlELFVBQVU5QyxDQUFBQSxJQUFLRixZQUFZRSxFQUFFK0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7c0RBSTNDLDhEQUFDVDs0Q0FBS1AsV0FBV3pDLHFFQUFpQjs0Q0FBRTZELG9CQUFpQjs7Ozs7Ozs7Ozs7OzhDQUl2RCw4REFBQ3JCO29DQUFJQyxXQUFXekMsZ0ZBQTRCOzhDQUMxQyw0RUFBQytEO3dDQUFPdEIsV0FBV3pDLHVFQUFtQjtrREFBRTs7Ozs7Ozs7Ozs7OENBSTFDLDhEQUFDd0M7b0NBQUlDLFdBQVd6QyxxRUFBaUI7O3NEQUMvQiw4REFBQ2dEOzRDQUFLUCxXQUFXekMsK0RBQVc7c0RBQUU7Ozs7OztzREFFOUIsOERBQUNtRTs0Q0FBRTFCLFdBQVd6QywrREFBVzs0Q0FBRXNDLE1BQUs7c0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JwRDtHQW5IU2xDO0tBQUFBO0FBcUhULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLmpzPzZhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdhcHAvZm9vdGVyJztcblxuZnVuY3Rpb24gTG9naW4oKSB7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzdWJtaXRMb2dpbiA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQ29uc3RydWlyIG8gb2JqZXRvIGRlIGRhZG9zIHBhcmEgZW52aWFyIG5vIGNvcnBvIGRhIHJlcXVpc2nDp8Ojb1xuICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgc2VuaGE6IHBhc3N3b3JkLFxuICAgIH07XG5cbiAgICAvLyBGYXplciBhIHJlcXVpc2nDp8OjbyB1c2FuZG8gYSBGZXRjaCBBUElcbiAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5mdXRlYm9sdG90YWwuY2xvdWQvdXN1YXJpby9sb2dpbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAvLyBBZGljaW9uZSBvdXRyb3MgY2FiZcOnYWxob3MgY29uZm9ybWUgbmVjZXNzw6FyaW9cbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICAgIFxuICAgICAgICAvLyBMw7NnaWNhIHBhcmEgbGlkYXIgY29tIGEgcmVzcG9zdGEgZGEgcmVxdWlzacOnw6NvXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm9tZScsIGRhdGEubm9tZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGRhdGEuZW1haWwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb3N0YSBkYSByZXF1aXNpw6fDo286JywgZGF0YSk7XG5cbiAgICAgICAgYWxlcnQoJ0xvZ2luIGJlbSBzdWNlZGlkbyEnKVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIH0sIDMwMClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAvLyBMaWRhciBjb20gZXJyb3MgZHVyYW50ZSBhIHJlcXVpc2nDp8Ojb1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5hIHJlcXVpc2nDp8OjbzonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPD5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyTG9naW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcExvZ2lufT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0gb25TdWJtaXQ9e3N1Ym1pdExvZ2lufT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtVGl0bGV9PkJlbS12aW5kbyBhbyBGVCE8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtVGl0bGV9PjxJbWFnZSBzcmM9Jy9pbWFnZXMvYm9sYWRlZm9nby5wbmcnIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PSdJbWFnZW0gQm9sYSBkZSBGb2dvJyAvPjwvc3Bhbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBJbnB1dH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dH0gJHtwYXNzd29yZCAhPT0gJycgPyBzdHlsZXNbJ2hhc1ZhbCddIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvY3VzSW5wdXR9IGRhdGEtcGxhY2Vob2xkZXI9J0VtYWlsJz48L3NwYW4+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwSW5wdXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5wdXR9ICR7cGFzc3dvcmQgIT09ICcnID8gc3R5bGVzWydoYXNWYWwnXSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cblxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb2N1c0lucHV0fSBkYXRhLXBsYWNlaG9sZGVyPSdTZW5oYSc+PC9zcGFuPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyTG9naW5Gb3JtQnRufT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybUJ0bn0+RW50cmFyPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q2VudGVyfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50eHQxfT5Ow6NvIHBvc3N1aSBjb250YT88L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50eHQyfSBocmVmPScjJz5DcmlhciBDb250YTwvYT5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBcblxuICAgIDwvPlxuXG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZvb3RlciIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5hbWUiLCJzZXROYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN1Ym1pdExvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJzZW5oYSIsImxvZ2luRGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwibm9tZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjb250YWluZXJMb2dpbiIsIndyYXBMb2dpbiIsImZvcm0iLCJsb2dpbkZvcm0iLCJvblN1Ym1pdCIsInNwYW4iLCJsb2dpbkZvcm1UaXRsZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwid3JhcElucHV0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImZvY3VzSW5wdXQiLCJkYXRhLXBsYWNlaG9sZGVyIiwiY29udGFpbmVyTG9naW5Gb3JtQnRuIiwiYnV0dG9uIiwibG9naW5Gb3JtQnRuIiwidGV4dENlbnRlciIsInR4dDEiLCJhIiwidHh0MiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});