(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-requests-requests-module"],{

/***/ "12zc":
/*!*************************************************************************!*\
  !*** ./src/app/views/requests/requests-list/requests-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: RequestsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsListComponent", function() { return RequestsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_requests_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./requests-list.component.html */ "51do");
/* harmony import */ var _requests_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests-list.component.scss */ "qxsV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var RequestsListComponent = /** @class */ (function () {
    function RequestsListComponent() {
    }
    RequestsListComponent.prototype.ngOnInit = function () {
    };
    RequestsListComponent.ctorParameters = function () { return []; };
    RequestsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-requests-list',
            template: _raw_loader_requests_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_requests_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RequestsListComponent);
    return RequestsListComponent;
}());



/***/ }),

/***/ "51do":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/requests/requests-list/requests-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>requests-list works!</p>\r\n");

/***/ }),

/***/ "Re/M":
/*!***************************************************!*\
  !*** ./src/app/views/requests/requests.module.ts ***!
  \***************************************************/
/*! exports provided: RequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModule", function() { return RequestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests-routing.module */ "lo12");
/* harmony import */ var _requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requests-list/requests-list.component */ "12zc");





var RequestsModule = /** @class */ (function () {
    function RequestsModule() {
    }
    RequestsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_4__["RequestsListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _requests_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestsRoutingModule"]
            ],
            exports: [
                _requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_4__["RequestsListComponent"]
            ]
        })
    ], RequestsModule);
    return RequestsModule;
}());



/***/ }),

/***/ "lo12":
/*!***********************************************************!*\
  !*** ./src/app/views/requests/requests-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsRoutingModule", function() { return RequestsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests-list/requests-list.component */ "12zc");




var routes = [
    {
        path: '',
        data: {
            title: 'requests'
        },
        children: [
            {
                path: 'list',
                component: _requests_list_requests_list_component__WEBPACK_IMPORTED_MODULE_3__["RequestsListComponent"],
            }
        ]
    }
];
var RequestsRoutingModule = /** @class */ (function () {
    function RequestsRoutingModule() {
    }
    RequestsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RequestsRoutingModule);
    return RequestsRoutingModule;
}());



/***/ }),

/***/ "qxsV":
/*!***************************************************************************!*\
  !*** ./src/app/views/requests/requests-list/requests-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=views-requests-requests-module.js.map