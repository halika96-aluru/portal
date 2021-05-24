(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admins-admins-module"],{

/***/ "+LQs":
/*!*********************************************************************!*\
  !*** ./src/app/views/admins/departments/departments.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "9eB/":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admins/admin/admin.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "ZJSW":
/*!*******************************************************!*\
  !*** ./src/app/views/admins/admins-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsRoutingModule", function() { return AdminsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments/departments.component */ "uyX6");




var routes = [
    { path: 'departments', component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"] }
];
var AdminsRoutingModule = /** @class */ (function () {
    function AdminsRoutingModule() {
    }
    AdminsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminsRoutingModule);
    return AdminsRoutingModule;
}());



/***/ }),

/***/ "hQEY":
/*!*******************************************************!*\
  !*** ./src/app/views/admins/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "9eB/");
/* harmony import */ var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.scss */ "olRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.ctorParameters = function () { return []; };
    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-admin',
            template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "olRh":
/*!*********************************************************!*\
  !*** ./src/app/views/admins/admin/admin.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "sg+m":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admins/departments/departments.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>departments works!</p>\r\n");

/***/ }),

/***/ "uyX6":
/*!*******************************************************************!*\
  !*** ./src/app/views/admins/departments/departments.component.ts ***!
  \*******************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_departments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./departments.component.html */ "sg+m");
/* harmony import */ var _departments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./departments.component.scss */ "+LQs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent() {
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.ctorParameters = function () { return []; };
    DepartmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-departments',
            template: _raw_loader_departments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_departments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "war2":
/*!***********************************************!*\
  !*** ./src/app/views/admins/admins.module.ts ***!
  \***********************************************/
/*! exports provided: AdminsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsModule", function() { return AdminsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _admins_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admins-routing.module */ "ZJSW");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "hQEY");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/departments.component */ "uyX6");






var AdminsModule = /** @class */ (function () {
    function AdminsModule() {
    }
    AdminsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admins_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminsRoutingModule"]
            ]
        })
    ], AdminsModule);
    return AdminsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admins-admins-module.js.map