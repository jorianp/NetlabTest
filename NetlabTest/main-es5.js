(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\">\n  <form action=\"\" class=\"form__content\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <h2 class=\"form__title\">Форма для тебя</h2>\n    <div class=\"form__input\">\n      <label for=\"\"></label>\n      <input class=\"form__name\" type=\"text\" formControlName=\"name\" placeholder=\"Представьтесь пожалуйста\" value=\"{{data.name}}\">\n      <div class=\"wrong\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#F8478D\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"7\" width=\"3\" height=\"10\">\n            <path d=\"M12.4375 13.1582H11.0078L10.709 7.43359H12.7363L12.4375 13.1582ZM10.6855 15.1621C10.6855 14.834 10.7734 14.5859 10.9492 14.418C11.125 14.25 11.3809 14.166 11.7168 14.166C12.041 14.166 12.291 14.252 12.4668 14.4238C12.6465 14.5957 12.7363 14.8418 12.7363 15.1621C12.7363 15.4707 12.6465 15.7148 12.4668 15.8945C12.2871 16.0703 12.0371 16.1582 11.7168 16.1582C11.3887 16.1582 11.1348 16.0723 10.9551 15.9004C10.7754 15.7246 10.6855 15.4785 10.6855 15.1621Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n      <div class=\"correct\" *ngIf=\"form.get('name').valid && form.get('name').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#13C98A\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"8\" width=\"10\" height=\"8\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.891 9.55671L11.0084 15.881C10.9454 15.9559 10.8463 16 10.7411 16C10.6358 16 10.5368 15.9559 10.4738 15.881L10.3499 15.7539L10.221 15.6153L9.66637 15.0184L7.11128 12.2502C6.96291 12.081 6.96291 11.8438 7.11128 11.6746L7.91068 10.812C7.97369 10.737 8.07276 10.6929 8.17798 10.6929C8.28321 10.6929 8.38227 10.737 8.44528 10.812L10.7356 13.2905L15.553 8.11845C15.6162 8.04386 15.7152 8 15.8203 8C15.9253 8 16.0243 8.04386 16.0876 8.11845L16.887 8.98105C17.0362 9.14956 17.0378 9.38657 16.891 9.55671Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <div class=\"form__input\">\n      <label for=\"\"></label>\n      <input class=\"form__email\" type=\"text\" formControlName=\"email\" placeholder=\"Введите ваш e-mail\" value=\"{{data.email}}\">\n      <div class=\"wrong\" *ngIf=\"form.get('email').invalid && form.get('email').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#F8478D\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"7\" width=\"3\" height=\"10\">\n            <path d=\"M12.4375 13.1582H11.0078L10.709 7.43359H12.7363L12.4375 13.1582ZM10.6855 15.1621C10.6855 14.834 10.7734 14.5859 10.9492 14.418C11.125 14.25 11.3809 14.166 11.7168 14.166C12.041 14.166 12.291 14.252 12.4668 14.4238C12.6465 14.5957 12.7363 14.8418 12.7363 15.1621C12.7363 15.4707 12.6465 15.7148 12.4668 15.8945C12.2871 16.0703 12.0371 16.1582 11.7168 16.1582C11.3887 16.1582 11.1348 16.0723 10.9551 15.9004C10.7754 15.7246 10.6855 15.4785 10.6855 15.1621Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n      <div class=\"correct\" *ngIf=\"form.get('email').valid && form.get('email').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#13C98A\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"8\" width=\"10\" height=\"8\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.891 9.55671L11.0084 15.881C10.9454 15.9559 10.8463 16 10.7411 16C10.6358 16 10.5368 15.9559 10.4738 15.881L10.3499 15.7539L10.221 15.6153L9.66637 15.0184L7.11128 12.2502C6.96291 12.081 6.96291 11.8438 7.11128 11.6746L7.91068 10.812C7.97369 10.737 8.07276 10.6929 8.17798 10.6929C8.28321 10.6929 8.38227 10.737 8.44528 10.812L10.7356 13.2905L15.553 8.11845C15.6162 8.04386 15.7152 8 15.8203 8C15.9253 8 16.0243 8.04386 16.0876 8.11845L16.887 8.98105C17.0362 9.14956 17.0378 9.38657 16.891 9.55671Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <div class=\"form__selectDrop\">\n      <select class=\"form__select\" name=\"\" id=\"\" formControlName=\"select\" value=\"{{data.select}}\">\n        <option value=\"0\" value selected disabled>Тема сообщения</option>\n        <option style=\"color: #000000\" value=\"Тема 1\">Тема 1</option>\n        <option value=\"Тема 2\">Тема 2</option>\n        <option value=\"Тема 3\">Тема 3</option>\n        <option value=\"Тема 4\">Тема 4</option>\n      </select>\n      <svg class=\"arrow\" width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM6 6L5.64645 6.35355L6 6.70711L6.35355 6.35355L6 6ZM11.3536 1.35355C11.5488 1.15829 11.5488 0.841709 11.3536 0.646447C11.1583 0.451184 10.8417 0.451184 10.6464 0.646447L11.3536 1.35355ZM0.646447 1.35355L5.64645 6.35355L6.35355 5.64645L1.35355 0.646447L0.646447 1.35355ZM6.35355 6.35355L11.3536 1.35355L10.6464 0.646447L5.64645 5.64645L6.35355 6.35355Z\" fill=\"#202020\"/>\n      </svg>\n    </div>\n    <textarea class=\"form__area\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" formControlName=\"area\" placeholder=\"Введите сообщение\" value=\"{{data.area}}\"></textarea>\n    <div class=\"form__buttons\">\n      <button type=\"button\" class=\"form__reset\" (click)=\"form.reset()\">Сбросить</button>\n      <button type=\"submit\" class=\"form__submit\" [disabled]=\"form.invalid || form.pending\" (click)=\"submit()\" routerLink=\"/\">Изменить</button>\n    </div>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\" *ngIf=\"data == null\">\n  <form action=\"\" class=\"form__content\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <h2 class=\"form__title\">Форма для тебя</h2>\n    <div class=\"form__input\">\n      <label for=\"\"></label>\n      <input class=\"form__name\" type=\"text\" formControlName=\"name\" placeholder=\"Представьтесь пожалуйста\">\n      <div class=\"wrong\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#F8478D\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"7\" width=\"3\" height=\"10\">\n            <path d=\"M12.4375 13.1582H11.0078L10.709 7.43359H12.7363L12.4375 13.1582ZM10.6855 15.1621C10.6855 14.834 10.7734 14.5859 10.9492 14.418C11.125 14.25 11.3809 14.166 11.7168 14.166C12.041 14.166 12.291 14.252 12.4668 14.4238C12.6465 14.5957 12.7363 14.8418 12.7363 15.1621C12.7363 15.4707 12.6465 15.7148 12.4668 15.8945C12.2871 16.0703 12.0371 16.1582 11.7168 16.1582C11.3887 16.1582 11.1348 16.0723 10.9551 15.9004C10.7754 15.7246 10.6855 15.4785 10.6855 15.1621Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n      <div class=\"correct\" *ngIf=\"form.get('name').valid && form.get('name').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#13C98A\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"8\" width=\"10\" height=\"8\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.891 9.55671L11.0084 15.881C10.9454 15.9559 10.8463 16 10.7411 16C10.6358 16 10.5368 15.9559 10.4738 15.881L10.3499 15.7539L10.221 15.6153L9.66637 15.0184L7.11128 12.2502C6.96291 12.081 6.96291 11.8438 7.11128 11.6746L7.91068 10.812C7.97369 10.737 8.07276 10.6929 8.17798 10.6929C8.28321 10.6929 8.38227 10.737 8.44528 10.812L10.7356 13.2905L15.553 8.11845C15.6162 8.04386 15.7152 8 15.8203 8C15.9253 8 16.0243 8.04386 16.0876 8.11845L16.887 8.98105C17.0362 9.14956 17.0378 9.38657 16.891 9.55671Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <div class=\"form__input\">\n      <label for=\"\"></label>\n      <input class=\"form__email\" type=\"text\" formControlName=\"email\" placeholder=\"Введите ваш e-mail\">\n      <div class=\"wrong\" *ngIf=\"form.get('email').invalid && form.get('email').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#F8478D\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"7\" width=\"3\" height=\"10\">\n            <path d=\"M12.4375 13.1582H11.0078L10.709 7.43359H12.7363L12.4375 13.1582ZM10.6855 15.1621C10.6855 14.834 10.7734 14.5859 10.9492 14.418C11.125 14.25 11.3809 14.166 11.7168 14.166C12.041 14.166 12.291 14.252 12.4668 14.4238C12.6465 14.5957 12.7363 14.8418 12.7363 15.1621C12.7363 15.4707 12.6465 15.7148 12.4668 15.8945C12.2871 16.0703 12.0371 16.1582 11.7168 16.1582C11.3887 16.1582 11.1348 16.0723 10.9551 15.9004C10.7754 15.7246 10.6855 15.4785 10.6855 15.1621Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n      <div class=\"correct\" *ngIf=\"form.get('email').valid && form.get('email').touched\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#13C98A\"/>\n          <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"7\" y=\"8\" width=\"10\" height=\"8\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.891 9.55671L11.0084 15.881C10.9454 15.9559 10.8463 16 10.7411 16C10.6358 16 10.5368 15.9559 10.4738 15.881L10.3499 15.7539L10.221 15.6153L9.66637 15.0184L7.11128 12.2502C6.96291 12.081 6.96291 11.8438 7.11128 11.6746L7.91068 10.812C7.97369 10.737 8.07276 10.6929 8.17798 10.6929C8.28321 10.6929 8.38227 10.737 8.44528 10.812L10.7356 13.2905L15.553 8.11845C15.6162 8.04386 15.7152 8 15.8203 8C15.9253 8 16.0243 8.04386 16.0876 8.11845L16.887 8.98105C17.0362 9.14956 17.0378 9.38657 16.891 9.55671Z\" fill=\"white\"/>\n          </mask>\n          <g mask=\"url(#mask0)\">\n            <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <div class=\"form__selectDrop\">\n      <select class=\"form__select\" name=\"\" id=\"\" formControlName=\"select\">\n        <option value=\"0\" value selected disabled>Тема сообщения</option>\n        <option style=\"color: #000000\" value=\"Тема 1\">Тема 1</option>\n        <option value=\"Тема 2\">Тема 2</option>\n        <option value=\"Тема 3\">Тема 3</option>\n        <option value=\"Тема 4\">Тема 4</option>\n      </select>\n      <svg class=\"arrow\" width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM6 6L5.64645 6.35355L6 6.70711L6.35355 6.35355L6 6ZM11.3536 1.35355C11.5488 1.15829 11.5488 0.841709 11.3536 0.646447C11.1583 0.451184 10.8417 0.451184 10.6464 0.646447L11.3536 1.35355ZM0.646447 1.35355L5.64645 6.35355L6.35355 5.64645L1.35355 0.646447L0.646447 1.35355ZM6.35355 6.35355L11.3536 1.35355L10.6464 0.646447L5.64645 5.64645L6.35355 6.35355Z\" fill=\"#202020\"/>\n      </svg>\n    </div>\n    <textarea class=\"form__area\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" formControlName=\"area\" placeholder=\"Введите сообщение\"></textarea>\n    <div class=\"form__buttons\">\n      <button type=\"button\" class=\"form__reset\" (click)=\"form.reset()\">Сбросить</button>\n      <button type=\"submit\" class=\"form__submit\" [disabled]=\"form.invalid || form.pending\" (click)=\"submit()\" routerLink=\"/\">Отправить</button>\n    </div>\n  </form>\n</div>\n\n<router-outlet *ngIf=\"data\"></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\n  <p class=\"home__title\">Form data:</p>\n  <p *ngIf=\"data == null\">Форма пока не заполнена</p>\n  <div class=\"home__info\" *ngIf=\"data\">\n    <p><strong>ФИО:</strong> {{data.name}}</p>\n    <p><strong>E-mail:</strong> {{data.email}}</p>\n    <p><strong>Тема:</strong> {{data.select}}</p>\n  </div>\n  <button class=\"home__button\" type=\"button\" routerLink=\"/form\" *ngIf=\"data == null\">Заполнить форму</button>\n  <button class=\"home__button\" type=\"button\" [routerLink]=\"['/form', 'edit']\" *ngIf=\"data\">Изменить</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
            /* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], children: [
                        { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] }
                    ] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'NetlabTest';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
            /* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                        _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/edit/edit.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/edit/edit.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form {\n  width: 100%;\n  height: 100vh;\n  background: #333333;\n  display: flex;\n  margin: auto;\n  font-family: LetoSans;\n}\n.form__input {\n  position: relative;\n}\n.form__input .ng-invalid.ng-touched {\n  border: 2px solid #F8478D;\n}\n.form__input .wrong {\n  position: absolute;\n  top: 32px;\n  right: 35px;\n}\n.form__input .ng-valid.ng-touched {\n  border: 2px solid #13C98A;\n}\n.form__input .correct {\n  position: absolute;\n  top: 32px;\n  right: 35px;\n}\n.form__title {\n  margin: 0;\n  margin-top: 24px;\n  margin-left: 22px;\n}\n.form__content {\n  width: 384px;\n  height: 490px;\n  margin: auto;\n  background: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n}\n.form__name {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-right: 35px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__name::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__name::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__name::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__name::placeholder {\n  color: #9B99AA;\n}\n.form__name:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__area:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__email {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-right: 35px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__email::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__email::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__email::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__email::placeholder {\n  color: #9B99AA;\n}\n.form__email:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__email:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__selectDrop {\n  position: relative;\n}\n.form__selectDrop .arrow {\n  position: absolute;\n  top: 42px;\n  right: 40px;\n}\n.form__select {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  background: #FFFFFF;\n  position: relative;\n  padding-left: 16px;\n  padding-top: 5px;\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__select:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__select:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__select:focus .arrow {\n  transform: rotate(180deg);\n}\n.form__area {\n  width: 336px;\n  height: 99px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-top: 15px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n  resize: none;\n}\n.form__area::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__area::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__area::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__area::placeholder {\n  color: #9B99AA;\n}\n.form__area:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__area:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__buttons {\n  width: 336px;\n  display: flex;\n  justify-content: space-between;\n  margin-left: 22px;\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\n.form__reset {\n  width: 128px;\n  height: 48px;\n  border: none;\n  border-radius: 44px;\n  outline: none;\n  cursor: pointer;\n  background: #BDBDBD;\n  color: #FFFFFF;\n}\n.form__reset:hover {\n  background: #C2C2C2;\n}\n.form__submit {\n  width: 192px;\n  height: 48px;\n  border: none;\n  border-radius: 44px;\n  outline: none;\n  cursor: pointer;\n  background: #13C98A;\n  color: #FFFFFF;\n}\n.form__submit:hover {\n  border: 2px solid #2E09B6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJrZXIvRG9jdW1lbnRzL0dpdEh1Yi9OZXRsYWJUZXN0L3NyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSx5QkFBQTtBQ0NOO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ047QURDSTtFQUNFLHlCQUFBO0FDQ047QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBTjtBRElFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFlFO0VBQ0UsY0FBQTtBQ1ZKO0FEU0U7RUFDRSxjQUFBO0FDVko7QURTRTtFQUNFLGNBQUE7QUNWSjtBRFNFO0VBQ0UsY0FBQTtBQ1ZKO0FEYUU7RUFDRSx5QkFBQTtBQ1hKO0FEY0U7RUFDRSx5QkFBQTtBQ1pKO0FEZUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEa0JFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRG1CRTtFQUNFLHlCQUFBO0FDakJKO0FEb0JFO0VBQ0UseUJBQUE7QUNsQko7QURxQkU7RUFDRSxrQkFBQTtBQ25CSjtBRHFCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNuQk47QUR1QkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDekJKO0FENEJFO0VBQ0UseUJBQUE7QUMxQko7QUQ2QkU7RUFDRSx5QkFBQTtBQzNCSjtBRDRCSTtFQUNFLHlCQUFBO0FDMUJOO0FEOEJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0FDL0JKO0FEa0NFO0VBQ0UsY0FBQTtBQ2hDSjtBRCtCRTtFQUNFLGNBQUE7QUNoQ0o7QUQrQkU7RUFDRSxjQUFBO0FDaENKO0FEK0JFO0VBQ0UsY0FBQTtBQ2hDSjtBRG1DRTtFQUNFLHlCQUFBO0FDakNKO0FEb0NFO0VBQ0UseUJBQUE7QUNsQ0o7QURxQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbkNKO0FEc0NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtBQ3ZDSjtBRDBDRTtFQUNFLG1CQUFBO0FDeENKO0FEMkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtBQzVDSjtBRCtDRTtFQUNFLHlCQUFBO0FDN0NKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2FucztcblxuICAmX19pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjg0NzhEO1xuICAgIH1cbiAgICAud3Jvbmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzMnB4O1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5uZy12YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxM0M5OEE7XG4gICAgfVxuXG4gICAgLmNvcnJlY3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzMnB4O1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgd2lkdGg6IDM4NHB4O1xuICAgIGhlaWdodDogNDkwcHg7XG5cbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREU4Rjc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAmX19uYW1lOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19uYW1lOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fYXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2VtYWlsIHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICZfX2VtYWlsOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19lbWFpbDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2VtYWlsOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fc2VsZWN0RHJvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFycm93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNDJweDtcbiAgICAgIHJpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3NlbGVjdCB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICZfX3NlbGVjdDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX3NlbGVjdDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgICAuYXJyb3cge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cblxuICAmX19hcmVhIHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgaGVpZ2h0OiA5OXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREU4Rjc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAmX19hcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19hcmVhOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fYXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2J1dHRvbnMge1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cblxuICAmX19yZXNldCB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogNDhweDtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiAjQkRCREJEO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgJl9fcmVzZXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNDMkMyQzI7XG4gIH1cblxuICAmX19zdWJtaXQge1xuICAgIHdpZHRoOiAxOTJweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYmFja2dyb3VuZDogIzEzQzk4QTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gICZfX3N1Ym1pdDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJFMDlCNjtcbiAgfVxuXG59XG4iLCIuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2Fucztcbn1cbi5mb3JtX19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtX19pbnB1dCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0Y4NDc4RDtcbn1cbi5mb3JtX19pbnB1dCAud3Jvbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgcmlnaHQ6IDM1cHg7XG59XG4uZm9ybV9faW5wdXQgLm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTNDOThBO1xufVxuLmZvcm1fX2lucHV0IC5jb3JyZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAzNXB4O1xufVxuLmZvcm1fX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbi5mb3JtX19jb250ZW50IHtcbiAgd2lkdGg6IDM4NHB4O1xuICBoZWlnaHQ6IDQ5MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybV9fbmFtZSB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZm9ybV9fbmFtZTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzlCOTlBQTtcbn1cbi5mb3JtX19uYW1lOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19hcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19lbWFpbCB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZm9ybV9fZW1haWw6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5Qjk5QUE7XG59XG4uZm9ybV9fZW1haWw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2VtYWlsOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19zZWxlY3REcm9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm1fX3NlbGVjdERyb3AgLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQycHg7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLmZvcm1fX3NlbGVjdCB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZvcm1fX3NlbGVjdDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNDMEJBRDU7XG59XG4uZm9ybV9fc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19zZWxlY3Q6Zm9jdXMgLmFycm93IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5mb3JtX19hcmVhIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDk5cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5mb3JtX19hcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOUI5OUFBO1xufVxuLmZvcm1fX2FyZWE6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2FyZWE6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2J1dHRvbnMge1xuICB3aWR0aDogMzM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4uZm9ybV9fcmVzZXQge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNCREJEQkQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm1fX3Jlc2V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0MyQzJDMjtcbn1cbi5mb3JtX19zdWJtaXQge1xuICB3aWR0aDogMTkycHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxM0M5OEE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm1fX3N1Ym1pdDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRTA5QjY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/edit/edit.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/edit/edit.component.ts ***!
          \****************************************/
        /*! exports provided: EditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function () { return EditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var EditComponent = /** @class */ (function () {
                function EditComponent() {
                    this.data = JSON.parse(localStorage.getItem('data'));
                }
                EditComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        select: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                };
                EditComponent.prototype.submit = function () {
                    if (this.form.valid) {
                        var formData = Object.assign({}, this.form.value);
                        localStorage.setItem('data', JSON.stringify(formData));
                        console.log(formData);
                    }
                };
                return EditComponent;
            }());
            EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/edit/edit.component.scss")).default]
                })
            ], EditComponent);
            /***/ 
        }),
        /***/ "./src/app/form/form.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/form/form.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form {\n  width: 100%;\n  height: 100vh;\n  background: #333333;\n  display: flex;\n  margin: auto;\n  font-family: LetoSans;\n}\n.form__input {\n  position: relative;\n}\n.form__input .ng-invalid.ng-touched {\n  border: 2px solid #F8478D;\n}\n.form__input .wrong {\n  position: absolute;\n  top: 32px;\n  right: 35px;\n}\n.form__input .ng-valid.ng-touched {\n  border: 2px solid #13C98A;\n}\n.form__input .correct {\n  position: absolute;\n  top: 32px;\n  right: 35px;\n}\n.form__title {\n  margin: 0;\n  margin-top: 24px;\n  margin-left: 22px;\n}\n.form__content {\n  width: 384px;\n  height: 490px;\n  margin: auto;\n  background: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n}\n.form__name {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-right: 35px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__name::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__name::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__name::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__name::placeholder {\n  color: #9B99AA;\n}\n.form__name:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__area:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__email {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-right: 35px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__email::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__email::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__email::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__email::placeholder {\n  color: #9B99AA;\n}\n.form__email:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__email:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__selectDrop {\n  position: relative;\n}\n.form__selectDrop .arrow {\n  position: absolute;\n  top: 42px;\n  right: 40px;\n}\n.form__select {\n  width: 336px;\n  height: 56px;\n  margin-left: 22px;\n  margin-top: 16px;\n  background: #FFFFFF;\n  position: relative;\n  padding-left: 16px;\n  padding-top: 5px;\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.form__select:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__select:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__select:focus .arrow {\n  transform: rotate(180deg);\n}\n.form__area {\n  width: 336px;\n  height: 99px;\n  margin-left: 22px;\n  margin-top: 16px;\n  padding-left: 16px;\n  padding-top: 15px;\n  outline: none;\n  border: 2px solid #EDE8F7;\n  box-sizing: border-box;\n  border-radius: 6px;\n  resize: none;\n}\n.form__area::-webkit-input-placeholder {\n  color: #9B99AA;\n}\n.form__area::-moz-placeholder {\n  color: #9B99AA;\n}\n.form__area::-ms-input-placeholder {\n  color: #9B99AA;\n}\n.form__area::placeholder {\n  color: #9B99AA;\n}\n.form__area:hover {\n  border: 2px solid #C0BAD5;\n}\n.form__area:focus {\n  border: 2px solid #C0BAD5;\n}\n.form__buttons {\n  width: 336px;\n  display: flex;\n  justify-content: space-between;\n  margin-left: 22px;\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\n.form__reset {\n  width: 128px;\n  height: 48px;\n  border: none;\n  border-radius: 44px;\n  outline: none;\n  cursor: pointer;\n  background: #BDBDBD;\n  color: #FFFFFF;\n}\n.form__reset:hover {\n  background: #C2C2C2;\n}\n.form__submit {\n  width: 192px;\n  height: 48px;\n  border: none;\n  border-radius: 44px;\n  outline: none;\n  cursor: pointer;\n  background: #13C98A;\n  color: #FFFFFF;\n}\n.form__submit:hover {\n  border: 2px solid #2E09B6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJrZXIvRG9jdW1lbnRzL0dpdEh1Yi9OZXRsYWJUZXN0L3NyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSx5QkFBQTtBQ0NOO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ047QURDSTtFQUNFLHlCQUFBO0FDQ047QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBTjtBRElFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFlFO0VBQ0UsY0FBQTtBQ1ZKO0FEU0U7RUFDRSxjQUFBO0FDVko7QURTRTtFQUNFLGNBQUE7QUNWSjtBRFNFO0VBQ0UsY0FBQTtBQ1ZKO0FEYUU7RUFDRSx5QkFBQTtBQ1hKO0FEY0U7RUFDRSx5QkFBQTtBQ1pKO0FEZUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEa0JFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRGVFO0VBQ0UsY0FBQTtBQ2hCSjtBRG1CRTtFQUNFLHlCQUFBO0FDakJKO0FEb0JFO0VBQ0UseUJBQUE7QUNsQko7QURxQkU7RUFDRSxrQkFBQTtBQ25CSjtBRHFCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNuQk47QUR1QkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDekJKO0FENEJFO0VBQ0UseUJBQUE7QUMxQko7QUQ2QkU7RUFDRSx5QkFBQTtBQzNCSjtBRDRCSTtFQUNFLHlCQUFBO0FDMUJOO0FEOEJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0FDL0JKO0FEa0NFO0VBQ0UsY0FBQTtBQ2hDSjtBRCtCRTtFQUNFLGNBQUE7QUNoQ0o7QUQrQkU7RUFDRSxjQUFBO0FDaENKO0FEK0JFO0VBQ0UsY0FBQTtBQ2hDSjtBRG1DRTtFQUNFLHlCQUFBO0FDakNKO0FEb0NFO0VBQ0UseUJBQUE7QUNsQ0o7QURxQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbkNKO0FEc0NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtBQ3ZDSjtBRDBDRTtFQUNFLG1CQUFBO0FDeENKO0FEMkNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtBQzVDSjtBRCtDRTtFQUNFLHlCQUFBO0FDN0NKIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2FucztcblxuICAmX19pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjg0NzhEO1xuICAgIH1cbiAgICAud3Jvbmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzMnB4O1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5uZy12YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxM0M5OEE7XG4gICAgfVxuXG4gICAgLmNvcnJlY3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzMnB4O1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgd2lkdGg6IDM4NHB4O1xuICAgIGhlaWdodDogNDkwcHg7XG5cbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREU4Rjc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAmX19uYW1lOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19uYW1lOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fYXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2VtYWlsIHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICZfX2VtYWlsOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19lbWFpbDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2VtYWlsOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fc2VsZWN0RHJvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFycm93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNDJweDtcbiAgICAgIHJpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3NlbGVjdCB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICZfX3NlbGVjdDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX3NlbGVjdDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgICAuYXJyb3cge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cblxuICAmX19hcmVhIHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgaGVpZ2h0OiA5OXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFREU4Rjc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAmX19hcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5Qjk5QUE7XG4gIH1cblxuICAmX19hcmVhOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xuICB9XG5cbiAgJl9fYXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbiAgfVxuXG4gICZfX2J1dHRvbnMge1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cblxuICAmX19yZXNldCB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogNDhweDtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xuXG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiAjQkRCREJEO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbiAgJl9fcmVzZXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNDMkMyQzI7XG4gIH1cblxuICAmX19zdWJtaXQge1xuICAgIHdpZHRoOiAxOTJweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYmFja2dyb3VuZDogIzEzQzk4QTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuXG4gICZfX3N1Ym1pdDpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJFMDlCNjtcbiAgfVxuXG59XG4iLCIuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2Fucztcbn1cbi5mb3JtX19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtX19pbnB1dCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0Y4NDc4RDtcbn1cbi5mb3JtX19pbnB1dCAud3Jvbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgcmlnaHQ6IDM1cHg7XG59XG4uZm9ybV9faW5wdXQgLm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTNDOThBO1xufVxuLmZvcm1fX2lucHV0IC5jb3JyZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAzNXB4O1xufVxuLmZvcm1fX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbi5mb3JtX19jb250ZW50IHtcbiAgd2lkdGg6IDM4NHB4O1xuICBoZWlnaHQ6IDQ5MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybV9fbmFtZSB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZm9ybV9fbmFtZTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzlCOTlBQTtcbn1cbi5mb3JtX19uYW1lOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19hcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19lbWFpbCB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZm9ybV9fZW1haWw6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5Qjk5QUE7XG59XG4uZm9ybV9fZW1haWw6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2VtYWlsOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19zZWxlY3REcm9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm1fX3NlbGVjdERyb3AgLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQycHg7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLmZvcm1fX3NlbGVjdCB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI0VERThGNztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZvcm1fX3NlbGVjdDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNDMEJBRDU7XG59XG4uZm9ybV9fc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0MwQkFENTtcbn1cbi5mb3JtX19zZWxlY3Q6Zm9jdXMgLmFycm93IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5mb3JtX19hcmVhIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDk5cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRURFOEY3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5mb3JtX19hcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOUI5OUFBO1xufVxuLmZvcm1fX2FyZWE6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2FyZWE6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzBCQUQ1O1xufVxuLmZvcm1fX2J1dHRvbnMge1xuICB3aWR0aDogMzM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4uZm9ybV9fcmVzZXQge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNCREJEQkQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm1fX3Jlc2V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0MyQzJDMjtcbn1cbi5mb3JtX19zdWJtaXQge1xuICB3aWR0aDogMTkycHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0NHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxM0M5OEE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm1fX3N1Ym1pdDpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRTA5QjY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/form/form.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/form/form.component.ts ***!
          \****************************************/
        /*! exports provided: FormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return FormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var FormComponent = /** @class */ (function () {
                function FormComponent() {
                    this.data = JSON.parse(localStorage.getItem('data'));
                }
                FormComponent.prototype.ngOnInit = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        select: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                };
                FormComponent.prototype.submit = function () {
                    if (this.form.valid) {
                        var formData = Object.assign({}, this.form.value);
                        localStorage.setItem('data', JSON.stringify(formData));
                        console.log(formData);
                    }
                };
                return FormComponent;
            }());
            FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")).default]
                })
            ], FormComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".home {\n  margin-top: 88px;\n  margin-left: 72px;\n  font-family: LetoSans;\n}\n.home__info {\n  margin-top: 40px;\n}\n.home__button {\n  width: 232px;\n  height: 48px;\n  margin-top: 37px;\n  border-radius: 44px;\n  background: #13C98A;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-family: LetoSans;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #FFFFFF;\n}\n.home__button:hover {\n  border: 2px solid #2E09B6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJrZXIvRG9jdW1lbnRzL0dpdEh1Yi9OZXRsYWJUZXN0L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0U7RUFDRSx5QkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICBtYXJnaW4tdG9wOiA4OHB4O1xuICBtYXJnaW4tbGVmdDogNzJweDtcbiAgZm9udC1mYW1pbHk6IExldG9TYW5zO1xuXG4gICZfX2luZm8ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHdpZHRoOiAyMzJweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBtYXJnaW4tdG9wOiAzN3B4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTNDOThBO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZm9udC1mYW1pbHk6IExldG9TYW5zO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuICAmX19idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRTA5QjY7XG4gIH1cbn1cbiIsIi5ob21lIHtcbiAgbWFyZ2luLXRvcDogODhweDtcbiAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2Fucztcbn1cbi5ob21lX19pbmZvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5ob21lX19idXR0b24ge1xuICB3aWR0aDogMjMycHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMzdweDtcbiAgYm9yZGVyLXJhZGl1czogNDRweDtcbiAgYmFja2dyb3VuZDogIzEzQzk4QTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBMZXRvU2FucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5ob21lX19idXR0b246aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMkUwOUI2O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                    this.data = JSON.parse(localStorage.getItem('data'));
                }
                HomeComponent.prototype.ngOnInit = function () {
                    // localStorage.clear();
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/parker/Documents/GitHub/NetlabTest/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map