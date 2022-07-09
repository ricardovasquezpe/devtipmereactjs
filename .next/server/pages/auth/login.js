"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/login";
exports.ids = ["pages/auth/login"];
exports.modules = {

/***/ "./components/authLayout.tsx":
/*!***********************************!*\
  !*** ./components/authLayout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AuthLayout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login layout\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\components\\\\authLayout.tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            children\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGhMYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFWCxTQUFTQyxVQUFVLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFDL0MscUJBQ0U7OzBCQUNJLDhEQUFDQyxJQUFFOzBCQUFDLGNBQVk7Ozs7O29CQUFLO1lBQ3BCRCxRQUFROztvQkFDVixDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlcHRpcG1lcmVhY3Rqc25leHRqcy8uL2NvbXBvbmVudHMvYXV0aExheW91dC50c3g/OTY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8aDE+TG9naW4gbGF5b3V0PC9oMT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF1dGhMYXlvdXQiLCJjaGlsZHJlbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/authLayout.tsx\n");

/***/ }),

/***/ "./pages/auth/login/index.tsx":
/*!************************************!*\
  !*** ./pages/auth/login/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_authLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/authLayout */ \"./components/authLayout.tsx\");\n/* harmony import */ var _redux_auth_authAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/auth/authAction */ \"./redux/auth/authAction.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/store */ \"./redux/store.ts\");\n\n\n\n\n\n\n\nfunction index() {\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { 0: loggedIn , 1: setLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe(()=>{\n        var isLoggedIn = _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState();\n        console.log(isLoggedIn.auth.isLoggedIn);\n        setLoggedIn(isLoggedIn.auth.isLoggedIn);\n    });\n    const isLoggedIn1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth.isLoggedIn\n    );\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"render!\");\n        return ()=>console.log(\"unmounting...\")\n        ;\n    });\n    const goToRegister = ()=>{\n        navigate.replace(\"/auth/register\");\n    };\n    const login = ()=>{\n        dispatch((0,_redux_auth_authAction__WEBPACK_IMPORTED_MODULE_5__.onLogin)());\n    };\n    const logout = ()=>{\n        dispatch((0,_redux_auth_authAction__WEBPACK_IMPORTED_MODULE_5__.onLogout)());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_authLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"Login Page \",\n                        loggedIn.toString(),\n                        isLoggedIn1.toString()\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\pages\\\\auth\\\\login\\\\index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: login,\n                    children: \"Login Action\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\pages\\\\auth\\\\login\\\\index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    children: \"Logout Action\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\pages\\\\auth\\\\login\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goToRegister,\n                    children: \"Go To register\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\pages\\\\auth\\\\login\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\reactjs\\\\devtipmereactjsnextjs\\\\devtipmereactjs\\\\pages\\\\auth\\\\login\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}; //index.Layout = AuthLayout;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNJO0FBQ1c7QUFDQztBQUNXO0FBQzFCO0FBRTFCLFNBQVNTLEtBQUssR0FBRztJQUM1QixNQUFNQyxRQUFRLEdBQUdWLHNEQUFTLEVBQUU7SUFDNUIsTUFBTVcsUUFBUSxHQUFHUix3REFBVyxFQUFFO0lBQzlCLE1BQU0sRUFWVixHQVVXUyxRQUFRLEdBVm5CLEdBVXFCQyxXQUFXLE1BQUlYLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRS9DTSw4REFBZSxDQUFDLElBQU07UUFDbEIsSUFBSU8sVUFBVSxHQUFHUCw2REFBYyxFQUFFO1FBQ2pDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDSSxJQUFJLENBQUNKLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDRixXQUFXLENBQUNFLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDSixVQUFVLENBQUMsQ0FBQztLQUMzQyxDQUFDLENBQUM7SUFFSCxNQUFNQSxXQUFVLEdBQUdYLHdEQUFXLENBQUMsQ0FBQ2dCLEtBQVMsR0FBS0EsS0FBSyxDQUFDRCxJQUFJLENBQUNKLFVBQVU7SUFBQSxDQUFDO0lBRXBFZCxnREFBUyxDQUFDLElBQU07UUFDWmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBTUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQUEsQ0FBQztLQUM3QyxDQUFDO0lBRUYsTUFBTUcsWUFBWSxHQUFHLElBQU07UUFDdkJYLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDdEM7SUFFRCxNQUFNQyxLQUFLLEdBQUcsSUFBTTtRQUNoQlosUUFBUSxDQUFDTCwrREFBTyxFQUFFLENBQUMsQ0FBQztLQUN2QjtJQUVELE1BQU1rQixNQUFNLEdBQUcsSUFBTTtRQUNqQmIsUUFBUSxDQUFDSixnRUFBUSxFQUFFLENBQUMsQ0FBQztLQUN4QjtJQUVELHFCQUNJO2tCQUNJLDRFQUFDRiw4REFBVTs7OEJBQ1AsOERBQUNvQixJQUFFOzt3QkFBQyxhQUNXO3dCQUFDYixRQUFRLENBQUNjLFFBQVEsRUFBRTt3QkFDOUJYLFdBQVUsQ0FBQ1csUUFBUSxFQUFFOzs7Ozs7d0JBQ3JCOzhCQUNMLDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUVMLEtBQUs7OEJBQUUsY0FBWTs7Ozs7d0JBQVM7OEJBQzdDLDhEQUFDSSxRQUFNO29CQUFDQyxPQUFPLEVBQUVKLE1BQU07OEJBQUUsZUFBYTs7Ozs7d0JBQVM7OEJBQy9DLDhEQUFDRyxRQUFNO29CQUFDQyxPQUFPLEVBQUVQLFlBQVk7OEJBQUUsZ0JBQWM7Ozs7O3dCQUFTOzs7Ozs7Z0JBQzdDO3FCQUNkLENBQ0w7Q0FDTCxFQUVELDRCQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVwdGlwbWVyZWFjdGpzbmV4dGpzLy4vcGFnZXMvYXV0aC9sb2dpbi9pbmRleC50c3g/NDE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEF1dGhMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aExheW91dFwiO1xyXG5pbXBvcnQgeyBvbkxvZ2luLCBvbkxvZ291dCB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hdXRoL2F1dGhBY3Rpb25cIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB2YXIgaXNMb2dnZWRJbiA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXNMb2dnZWRJbi5hdXRoLmlzTG9nZ2VkSW4pO1xyXG4gICAgICAgIHNldExvZ2dlZEluKGlzTG9nZ2VkSW4uYXV0aC5pc0xvZ2dlZEluKTtcclxuICAgIH0pOyBcclxuXHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuYXV0aC5pc0xvZ2dlZEluKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXIhJyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKCd1bm1vdW50aW5nLi4uJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGdvVG9SZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKFwiL2F1dGgvcmVnaXN0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gob25Mb2dpbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gob25Mb2dvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpbiBQYWdlIHtsb2dnZWRJbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0xvZ2dlZEluLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0+TG9naW4gQWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+TG9nb3V0IEFjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUmVnaXN0ZXJ9PkdvIFRvIHJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQXV0aExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vaW5kZXguTGF5b3V0ID0gQXV0aExheW91dDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQXV0aExheW91dCIsIm9uTG9naW4iLCJvbkxvZ291dCIsInN0b3JlIiwiaW5kZXgiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInN1YnNjcmliZSIsImlzTG9nZ2VkSW4iLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwic3RhdGUiLCJnb1RvUmVnaXN0ZXIiLCJyZXBsYWNlIiwibG9naW4iLCJsb2dvdXQiLCJoMyIsInRvU3RyaW5nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/login/index.tsx\n");

/***/ }),

/***/ "./redux/auth/authAction.ts":
/*!**********************************!*\
  !*** ./redux/auth/authAction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onLogin\": () => (/* binding */ onLogin),\n/* harmony export */   \"onLogout\": () => (/* binding */ onLogout)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./redux/types.ts\");\n\nconst onLogin = ()=>({\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.LOGIN\n    })\n;\nconst onLogout = ()=>({\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hdXRoL2F1dGhBY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRWxDLE1BQU1FLE9BQU8sR0FBRyxJQUFNLENBQUM7UUFDNUJDLElBQUksRUFBRUgseUNBQUs7S0FDWixDQUFDO0FBQUEsQ0FBQztBQUNJLE1BQU1JLFFBQVEsR0FBRyxJQUFNLENBQUM7UUFDN0JELElBQUksRUFBRUYsMENBQU07S0FDYixDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVwdGlwbWVyZWFjdGpzbmV4dGpzLy4vcmVkdXgvYXV0aC9hdXRoQWN0aW9uLnRzP2M2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9HSU4sIExPR09VVCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uTG9naW4gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR0lOLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dPVVQsXHJcbn0pOyJdLCJuYW1lcyI6WyJMT0dJTiIsIkxPR09VVCIsIm9uTG9naW4iLCJ0eXBlIiwib25Mb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/auth/authAction.ts\n");

/***/ }),

/***/ "./redux/auth/authReducer.ts":
/*!***********************************!*\
  !*** ./redux/auth/authReducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./redux/types.ts\");\n\nconst initialState = {\n    isLoggedIn: false\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n    const { type , payload  } = action;\n    switch(type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.LOGIN:\n            return {\n                ...state,\n                isLoggedIn: true\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:\n            return {\n                ...state,\n                isLoggedIn: false\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hdXRoL2F1dGhSZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLFlBQVksR0FBRztJQUFFQyxVQUFVLEVBQUUsS0FBSztDQUFFO0FBQzFDLDZCQUFlLG9DQUFVQyxLQUFLLEdBQUdGLFlBQVksRUFBRUcsTUFBVyxFQUFFO0lBQzFELE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsTUFBTTtJQUNoQyxPQUFRQyxJQUFJO1FBQ1YsS0FBS04seUNBQUs7WUFDUixPQUFPO2dCQUNMLEdBQUdJLEtBQUs7Z0JBQ1JELFVBQVUsRUFBRSxJQUFJO2FBQ2pCLENBQUM7UUFDSixLQUFLRiwwQ0FBTTtZQUNULE9BQU87Z0JBQ0wsR0FBR0csS0FBSztnQkFDUkQsVUFBVSxFQUFFLEtBQUs7YUFDbEIsQ0FBQztRQUNKO1lBQ0UsT0FBT0MsS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlcHRpcG1lcmVhY3Rqc25leHRqcy8uL3JlZHV4L2F1dGgvYXV0aFJlZHVjZXIudHM/MGExZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGlzTG9nZ2VkSW46IGZhbHNlIH07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpIHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJMT0dJTiIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/auth/authReducer.ts\n");

/***/ }),

/***/ "./redux/root-reducer.ts":
/*!*******************************!*\
  !*** ./redux/root-reducer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authReducer */ \"./redux/auth/authReducer.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _auth_authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yb290LXJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNGO0FBRXRDLGlFQUFlQSxzREFBZSxDQUFDO0lBQUVDLElBQUk7Q0FBRSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlcHRpcG1lcmVhY3Rqc25leHRqcy8uL3JlZHV4L3Jvb3QtcmVkdWNlci50cz8zZjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoL2F1dGhSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoeyBhdXRoIH0pO1xyXG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/root-reducer.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../redux/root-reducer */ \"./redux/root-reducer.ts\");\n\n\n\n\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())\n];\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_root_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxRDtBQUNVO0FBQy9CO0FBQ2tCO0FBQ2xELE1BQU1LLFVBQVUsR0FBRztJQUFDRixvREFBSztDQUFDO0FBQzFCLE1BQU1HLEtBQUssR0FBR0wsa0RBQVcsQ0FDdkJHLDJEQUFXLEVBQ1hGLDZFQUFtQixDQUFDRixzREFBZSxJQUFJSyxVQUFVLENBQUMsQ0FBQyxDQUNwRDtBQUNELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlcHRpcG1lcmVhY3Rqc25leHRqcy8uL3JlZHV4L3N0b3JlLnRzPzkzYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi8uLi9yZWR1eC9yb290LXJlZHVjZXJcIjtcclxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgcm9vdFJlZHVjZXIsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ0aHVuayIsInJvb3RSZWR1Y2VyIiwibWlkZGxld2FyZSIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./redux/types.ts":
/*!************************!*\
  !*** ./redux/types.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOGIN\": () => (/* binding */ LOGIN),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT)\n/* harmony export */ });\nconst LOGIN = \"LOGIN\";\nconst LOGOUT = \"LOGOUT\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC90eXBlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsTUFBTUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVwdGlwbWVyZWFjdGpzbmV4dGpzLy4vcmVkdXgvdHlwZXMudHM/Nzg0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSBcIkxPR09VVFwiOyJdLCJuYW1lcyI6WyJMT0dJTiIsIkxPR09VVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/types.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/login/index.tsx"));
module.exports = __webpack_exports__;

})();