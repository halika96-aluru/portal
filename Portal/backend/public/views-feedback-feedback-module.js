(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-feedback-feedback-module"],{

/***/ "0GG+":
/*!*******************************************************************!*\
  !*** ./src/app/views/feedback/feedbacks/feedbacks.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFja3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5VY1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/feedback/feedback/feedback.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "PURR":
/*!***************************************************!*\
  !*** ./src/app/views/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-routing.module */ "X+Qs");
/* harmony import */ var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbacks/feedbacks.component */ "WhVb");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.component */ "zFgl");






var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__["FeedbacksComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"]
            ]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ }),

/***/ "VetB":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/feedback/feedbacks/feedbacks.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>feedbacks works!</p>\r\n");

/***/ }),

/***/ "WhVb":
/*!*****************************************************************!*\
  !*** ./src/app/views/feedback/feedbacks/feedbacks.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksComponent", function() { return FeedbacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedbacks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedbacks.component.html */ "VetB");
/* harmony import */ var _feedbacks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedbacks.component.scss */ "0GG+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var FeedbacksComponent = /** @class */ (function () {
    function FeedbacksComponent() {
    }
    FeedbacksComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    FeedbacksComponent.ctorParameters = function () { return []; };
    FeedbacksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-feedbacks',
            template: _raw_loader_feedbacks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_feedbacks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FeedbacksComponent);
    return FeedbacksComponent;
}());



/***/ }),

/***/ "X+Qs":
/*!***********************************************************!*\
  !*** ./src/app/views/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback/feedback.component */ "zFgl");
/* harmony import */ var _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbacks/feedbacks.component */ "WhVb");





var routes = [
    { path: '', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"], children: [
            {
                path: 'list',
                component: _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__["FeedbacksComponent"],
            },
            {
                path: '',
                component: _feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_4__["FeedbacksComponent"],
            }
        ] },
];
var FeedbackRoutingModule = /** @class */ (function () {
    function FeedbackRoutingModule() {
    }
    FeedbackRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeedbackRoutingModule);
    return FeedbackRoutingModule;
}());



/***/ }),

/***/ "ou7K":
/*!*****************************************************************!*\
  !*** ./src/app/views/feedback/feedback/feedback.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zFgl":
/*!***************************************************************!*\
  !*** ./src/app/views/feedback/feedback/feedback.component.ts ***!
  \***************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.component.html */ "5VY1");
/* harmony import */ var _feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.component.scss */ "ou7K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.ctorParameters = function () { return []; };
    FeedbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-feedback',
            template: _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-feedback-feedback-module.js.map