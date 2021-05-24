(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-complaints-complaints-module"],{

/***/ "EnGh":
/*!***************************************************************************!*\
  !*** ./node_modules/jw-angular-pagination/lib/jw-pagination.component.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(/*! @angular/core */ "8Y7J");

var paginate = __webpack_require__(/*! jw-paginate */ "TNpa");

var JwPaginationComponent =
/** @class */
function () {
  function JwPaginationComponent() {
    this.changePage = new core_1.EventEmitter(true);
    this.initialPage = 1;
    this.pageSize = 10;
    this.maxPages = 10;
    this.pager = {};
  }

  JwPaginationComponent.prototype.ngOnInit = function () {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  };

  JwPaginationComponent.prototype.ngOnChanges = function (changes) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  };

  JwPaginationComponent.prototype.setPage = function (page) {
    // get new pager object for specified page
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages); // get new page of items from items array

    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1); // call change page function in parent component

    this.changePage.emit(pageOfItems);
  };

  JwPaginationComponent.decorators = [{
    type: core_1.Component,
    args: [{
      moduleId: module.i,
      selector: 'jw-pagination',
      template: "<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item first-item\">\n      <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item previous-item\">\n      <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n  </li>\n  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item number-item\">\n      <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item next-item\">\n      <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item last-item\">\n      <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n  </li>\n</ul>"
    }]
  }];
  /** @nocollapse */

  JwPaginationComponent.propDecorators = {
    "items": [{
      type: core_1.Input
    }],
    "changePage": [{
      type: core_1.Output
    }],
    "initialPage": [{
      type: core_1.Input
    }],
    "pageSize": [{
      type: core_1.Input
    }],
    "maxPages": [{
      type: core_1.Input
    }]
  };
  return JwPaginationComponent;
}();

exports.JwPaginationComponent = JwPaginationComponent;

/***/ }),

/***/ "EwBV":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/complaints/complaintslist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"Complaints\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"tokenID\">\r\n      <th mat-header-cell *matHeaderCellDef> Token ID. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.tokenID}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"requestID\">\r\n        <th mat-header-cell *matHeaderCellDef> Request ID. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.requestID}} </td>\r\n      </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"_id\">\r\n      <th mat-header-cell *matHeaderCellDef> Customer Details </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"riderdetails\">\r\n        <th mat-header-cell *matHeaderCellDef> Rider Details </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.riderdetails}} </td>\r\n      </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"Category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Category}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Complaint\">\r\n        <th mat-header-cell *matHeaderCellDef> Complaints </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Complaint}} </td>\r\n      </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef width=\"5%\"> </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.view}}\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-pill\"  [routerLink]=\"['/complaints/complaintslist/',element._id]\">view</button>\r\n       </td>\r\n    </ng-container>\r\n  \r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  ");

/***/ }),

/***/ "Hz7s":
/*!***************************************************************!*\
  !*** ./src/app/views/complaints/complaints-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComplaintsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsRoutingModule", function() { return ComplaintsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _complaintslist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaintslist.component */ "fHHM");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.component */ "pQd7");





var routes = [
    {
        path: '',
        data: {
            title: 'complaints'
        },
        children: [
            {
                path: 'complaintslist',
                component: _complaintslist_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintslistComponent"],
            },
            {
                path: 'complaintslist/:id',
                component: _view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
            },
        ]
    }
];
var ComplaintsRoutingModule = /** @class */ (function () {
    function ComplaintsRoutingModule() {
    }
    ComplaintsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComplaintsRoutingModule);
    return ComplaintsRoutingModule;
}());



/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-angular-pagination */ "EnGh");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/shared/confirm-dialog/confirm-dialog.component */ "ZokB");





//import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule, MatInputModule } from '@angular/material';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__["JwPaginationComponent"], _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__["JwPaginationComponent"],
                _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]
                // MatDatepickerModule,
                // MatNativeDateModule,
                // MatFormFieldModule,
                // MatInputModule
            ],
            entryComponents: [_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "M5B9":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-action[align=end] {\n  justify-content: flex-end;\n}\n.mat-dialog-action[align=center] {\n  justify-content: center;\n}\n.mat-dialog-title {\n  font-size: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FBQVI7QUFFSTtFQUNJLHVCQUFBO0FBQVI7QUFJQTtFQUNJLDZCQUFBO0FBREoiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb257XHJcbiAgICAmW2FsaWduPVwiZW5kXCJde1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICAmW2FsaWduPVwiY2VudGVyXCJde1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "RaJN":
/*!******************************************************!*\
  !*** ./src/app/views/complaints/view.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-large-box {\n  background-color: white;\n}\n.example-large-box tr .row {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtBQUVSIiwiZmlsZSI6InZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1sYXJnZS1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyIC5yb3d7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG59Il19 */");

/***/ }),

/***/ "TNpa":
/*!*****************************************************!*\
  !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function paginate(totalItems, currentPage, pageSize, maxPages) {
  if (currentPage === void 0) {
    currentPage = 1;
  }

  if (pageSize === void 0) {
    pageSize = 10;
  }

  if (maxPages === void 0) {
    maxPages = 10;
  } // calculate total pages


  var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  var startPage, endPage;

  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  } // calculate start and end item indexes


  var startIndex = (currentPage - 1) * pageSize;
  var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

  var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
    return startPage + i;
  }); // return object with all pager properties required by the view

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
}

module.exports = paginate;

/***/ }),

/***/ "ZokB":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "yB71");
/* harmony import */ var _confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog.component.scss */ "M5B9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "s6ns");





var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-confirm-dialog',
            template: _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "dN0/":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/complaints/view.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\r\n    <mat-tab label=\"Complaints\" >\r\n        <div class=\"container\" >\r\n            <div>\r\n                    <div>\r\n                        <table  class=\"example-large-box mat-elevation-z4\">\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Token ID:</span></div>\r\n                                    <div class=\"col-8\">11111</div>\r\n                                    \r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Request ID:</span></div>\r\n                                    <div class=\"col-8\">2323</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Transaction Status:</span></div>\r\n                                    <div class=\"col-8\">Pending</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Complaints:</span></div>\r\n                                    <div class=\"col-8\">charge Gone</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-4\"><span>Before CarWash Picture</span></div>\r\n                                  <div class=\"col-8\"><img src=\"{{bcpic}}\"> </div>\r\n                                </div>\r\n                              </tr>\r\n                              <tr>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-4\"><span>After CarWash Picture</span></div>\r\n                                  <div class=\"col-8\"><img src=\"{{acpic}}\"></div>\r\n                                </div>\r\n                              </tr>\r\n                        </table>\r\n                    </div> \r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Customer Details\">\r\n        <div class=\"container\" >\r\n            <div>\r\n                    <div>\r\n                        <table  class=\"example-large-box mat-elevation-z4\">\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Name:</span></div>\r\n                                    <div class=\"col-8\">kalyan</div>\r\n                                    \r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Ph NO:</span></div>\r\n                                    <div class=\"col-8\">9393939393</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Car Type:</span></div>\r\n                                    <div class=\"col-8\">Sedan</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Services:</span></div>\r\n                                    <div class=\"col-8\"></div>\r\n                                </div> \r\n                            </tr>\r\n                            \r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Slot Details:</span></div>\r\n                                    <div class=\"col-8\"> start time 11am, end time 12pm</div>\r\n                                </div> \r\n                            </tr>\r\n                        </table>\r\n                    </div> \r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Vendor Details\">\r\n        <div class=\"container\" >\r\n            <div>\r\n                    <div>\r\n                        <table  class=\"example-large-box mat-elevation-z4\">\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Service Centre Name:</span></div>\r\n                                    <div class=\"col-8\">Automobiles</div>\r\n                                    \r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Name:</span></div>\r\n                                    <div class=\"col-8\">Rajveer</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Ph NO:</span></div>\r\n                                    <div class=\"col-8\">9594227892</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Aadress:</span></div>\r\n                                    <div class=\"col-8\"></div>\r\n                                </div> \r\n                            </tr>\r\n                        </table>\r\n                    </div> \r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Rider Details\">\r\n        <div class=\"container\" >\r\n            <div>\r\n                    <div>\r\n                        <table  class=\"example-large-box mat-elevation-z4\">\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Name:</span></div>\r\n                                    <div class=\"col-8\">Rajveer</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Ph NO:</span></div>\r\n                                    <div class=\"col-8\">9594227892</div>\r\n                                </div> \r\n                            </tr>\r\n                            <tr>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-4\"><span>Aadress:</span></div>\r\n                                    <div class=\"col-8\"></div>\r\n                                </div> \r\n                            </tr>\r\n                        </table>\r\n                    </div> \r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Feedbacks\">\r\n        <div class=\"container\">\r\n            <mat-card>\r\n                <div>\r\n                    FeedBack 1\r\n                </div>\r\n                <div>\r\n                    FeedBack 2\r\n                </div>\r\n                <div>\r\n                    FeedBack 3\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </mat-tab>\r\n\r\n</mat-tab-group>");

/***/ }),

/***/ "fHHM":
/*!**************************************************************!*\
  !*** ./src/app/views/complaints/complaintslist.component.ts ***!
  \**************************************************************/
/*! exports provided: ComplaintslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintslistComponent", function() { return ComplaintslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_complaintslist_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./complaintslist.component.html */ "EwBV");
/* harmony import */ var _complaintslist_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complaintslist.component.scss */ "moe9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ELEMENT_DATA = [
    { tokenID: 11122, _id: 'kalyan', requestID: 89085, riderdetails: 'raju', Category: 'randr', Complaint: 'pending' },
    { tokenID: 16342, _id: 'phanny', requestID: 36570, riderdetails: 'karthik', Category: 'wooz', Complaint: 'pending' },
    { tokenID: 53423, _id: 'rajji', requestID: 57465, riderdetails: 'naveen', Category: 'wooz', Complaint: 'completed' },
    { tokenID: 74867, _id: 'ramu', requestID: 11343, riderdetails: 'geevan', Category: 'randr', Complaint: 'pending' },
];
var ComplaintslistComponent = /** @class */ (function () {
    function ComplaintslistComponent() {
        this.displayedColumns = ['tokenID', 'requestID', '_id', 'riderdetails', 'Category', 'Complaint', 'view'];
        this.Complaints = ELEMENT_DATA;
    }
    ComplaintslistComponent.prototype.ngOnInit = function () {
    };
    ComplaintslistComponent.ctorParameters = function () { return []; };
    ComplaintslistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-complaintslist',
            template: _raw_loader_complaintslist_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_complaintslist_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ComplaintslistComponent);
    return ComplaintslistComponent;
}());



/***/ }),

/***/ "moe9":
/*!****************************************************************!*\
  !*** ./src/app/views/complaints/complaintslist.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGFpbnRzbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pQd7":
/*!****************************************************!*\
  !*** ./src/app/views/complaints/view.component.ts ***!
  \****************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view.component.html */ "dN0/");
/* harmony import */ var _view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component.scss */ "RaJN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.ctorParameters = function () { return []; };
    ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view',
            template: _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "vuwD":
/*!*******************************************************!*\
  !*** ./src/app/views/complaints/complaints.module.ts ***!
  \*******************************************************/
/*! exports provided: ComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsModule", function() { return ComplaintsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-routing.module */ "Hz7s");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.component */ "pQd7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "KZX/");
/* harmony import */ var _complaintslist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complaintslist.component */ "fHHM");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "l+oi");








var ComplaintsModule = /** @class */ (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], _complaintslist_component__WEBPACK_IMPORTED_MODULE_6__["ComplaintslistComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
            ]
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());



/***/ }),

/***/ "yB71":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h4 mat-dialog-title align=\"center\">Confirm</h4>\r\n<div mat-dialog-content>{{data.message}}</div>\r\n<div mat-dialog-action align=\"center\">\r\n    <button type=\"button\" color=\"primary\" mat-button mat-dialog-close>Yes</button>&nbsp;\r\n    <button type=\"button\" color=\"warn\" mat-button (click)=\"onNoClick()\">NO</button>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-complaints-complaints-module.js.map