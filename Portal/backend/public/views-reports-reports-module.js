(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "7++B":
/*!**************************************************************!*\
  !*** ./src/app/views/reports-list/reports-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsListComponent", function() { return ReportsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports-list.component.html */ "Ghda");
/* harmony import */ var _reports_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-list.component.scss */ "Iayl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent() {
    }
    ReportsListComponent.prototype.ngOnInit = function () {
    };
    ReportsListComponent.ctorParameters = function () { return []; };
    ReportsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reports-list',
            template: _raw_loader_reports_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reports_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReportsListComponent);
    return ReportsListComponent;
}());



/***/ }),

/***/ "G5b+":
/*!************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.component.html */ "H0lP");
/* harmony import */ var _reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component.scss */ "RoSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.ctorParameters = function () { return []; };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reports',
            template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "Ghda":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports-list/reports-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reports-list works!</p>\r\n");

/***/ }),

/***/ "H0lP":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports/reports.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reports works!</p>\r\n");

/***/ }),

/***/ "Iayl":
/*!****************************************************************!*\
  !*** ./src/app/views/reports-list/reports-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Jfv1":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports-list/reports-list.component */ "7++B");




var routes = [
    {
        path: '',
        data: { title: 'Reports' },
        children: [
            {
                path: 'list',
                component: _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__["ReportsListComponent"],
            }
        ]
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "RoSW":
/*!**************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qUkX":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "Jfv1");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports-list/reports-list.component */ "7++B");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reports.component */ "G5b+");






var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__["ReportsListComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]
            ],
            exports: [_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__["ReportsListComponent"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map