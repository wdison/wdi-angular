(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projetos\wdi-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "2Q6W":
/*!******************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-basic/index.ts ***!
  \******************************************************************/
/*! exports provided: AlertBasicComponent, AlertBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-basic.component */ "eIIb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertBasicComponent", function() { return _alert_basic_component__WEBPACK_IMPORTED_MODULE_0__["AlertBasicComponent"]; });

/* harmony import */ var _alert_basic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-basic.module */ "6oEd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertBasicModule", function() { return _alert_basic_module__WEBPACK_IMPORTED_MODULE_1__["AlertBasicModule"]; });





/***/ }),

/***/ "4cmz":
/*!**********************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-closeable/index.ts ***!
  \**********************************************************************/
/*! exports provided: AlertCloseableComponent, AlertCloseableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-closeable.component */ "YTTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertCloseableComponent", function() { return _alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__["AlertCloseableComponent"]; });

/* harmony import */ var _alert_closeable_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-closeable.module */ "JsIo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertCloseableModule", function() { return _alert_closeable_module__WEBPACK_IMPORTED_MODULE_1__["AlertCloseableModule"]; });





/***/ }),

/***/ "5cbr":
/*!****************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../card/card.component */ "C7qr");
/* harmony import */ var _alert_basic_alert_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-basic/alert-basic.component */ "eIIb");
/* harmony import */ var _alert_closeable_alert_closeable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-closeable/alert-closeable.component */ "YTTB");
/* harmony import */ var _alert_selfclosing_alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-selfclosing/alert-selfclosing.component */ "68+/");
/* harmony import */ var _alert_custom_alert_custom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-custom/alert-custom.component */ "vz/Z");
/* harmony import */ var _alert_config_alert_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-config/alert-config.component */ "DWcg");







function AlertComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ex card com < wdi-card-comp >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-alert-basic");
} }
function AlertComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Footer");
} }
class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["wdi-alert"]], decls: 41, vars: 0, consts: [[1, "form-group"], ["wdiCardHeader", ""], ["wdiCardBody", ""], ["wdiCardFooter", ""], [1, "card"], [1, "card-header"], [1, "card-body"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "wdi-card-comp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlertComponent_ng_template_5_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlertComponent_ng_template_7_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AlertComponent_ng_template_9_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "wdi-alert-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Closable Alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "wdi-alert-closeable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Self closing alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "wdi-alert-selfclosing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Custom alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "wdi-alert-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Global configuration of alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "wdi-alert-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _alert_basic_alert_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlertBasicComponent"], _alert_closeable_alert_closeable_component__WEBPACK_IMPORTED_MODULE_3__["AlertCloseableComponent"], _alert_selfclosing_alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_4__["AlertSelfclosingComponent"], _alert_custom_alert_custom_component__WEBPACK_IMPORTED_MODULE_5__["AlertCustomComponent"], _alert_config_alert_config_component__WEBPACK_IMPORTED_MODULE_6__["AlertConfigComponent"]], encapsulation: 2 });


/***/ }),

/***/ "68+/":
/*!**********************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-selfclosing/alert-selfclosing.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AlertSelfclosingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertSelfclosingComponent", function() { return AlertSelfclosingComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





const _c0 = ["staticAlert"];
const _c1 = ["selfClosingAlert"];
function AlertSelfclosingComponent_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function AlertSelfclosingComponent_ngb_alert_2_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.staticAlertClosed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Check out our awesome new features!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AlertSelfclosingComponent_ngb_alert_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function AlertSelfclosingComponent_ngb_alert_6_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.successMessage, "\n");
} }
class AlertSelfclosingComponent {
    constructor() {
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
    }
    ngOnInit() {
        setTimeout(() => this.staticAlert.close(), 20000);
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
}
AlertSelfclosingComponent.ɵfac = function AlertSelfclosingComponent_Factory(t) { return new (t || AlertSelfclosingComponent)(); };
AlertSelfclosingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertSelfclosingComponent, selectors: [["wdi-alert-selfclosing"]], viewQuery: function AlertSelfclosingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.staticAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 10, vars: 2, consts: [[3, "closed", 4, "ngIf"], ["type", "success", 3, "closed", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "closed"], ["staticAlert", ""], ["type", "success", 3, "closed"], ["selfClosingAlert", ""]], template: function AlertSelfclosingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlertSelfclosingComponent_ngb_alert_2_Template, 3, 0, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Show a self-closing success message that disappears after 5 seconds.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AlertSelfclosingComponent_ngb_alert_6_Template, 3, 1, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertSelfclosingComponent_Template_button_click_8_listener() { return ctx.changeSuccessMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "6TFz":
/*!*************************************************************************!*\
  !*** ./src/app/navbar/navbar-horizontal/navbar-horizontal.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarHorizontalComponent", function() { return NavbarHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-item/navbar-item.component */ "SsWB");
/* harmony import */ var _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/outlet/outlet.component */ "klaT");






function NavbarHorizontalComponent_wdi_navbar_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-navbar-item", 9);
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemBgClassTema", "bg-dark")("menu", menu_r2);
} }
function NavbarHorizontalComponent_wdi_outlet_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-outlet");
} }
const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { "show": a0 }; };
class NavbarHorizontalComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
}
NavbarHorizontalComponent.ɵfac = function NavbarHorizontalComponent_Factory(t) { return new (t || NavbarHorizontalComponent)(); };
NavbarHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarHorizontalComponent, selectors: [["wdi-navbar-horizontal"]], inputs: { mainTitle: "mainTitle", mainTitleTooltip: "mainTitleTooltip", menus: "menus" }, decls: 10, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "ngbTooltip", "routerLink"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [3, "itemBgClassTema", "menu", 4, "ngFor", "ngForOf"], [1, "container"], [4, "ngIf"], [3, "itemBgClassTema", "menu"]], template: function NavbarHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarHorizontalComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarHorizontalComponent_wdi_navbar_item_7_Template, 1, 2, "wdi-navbar-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarHorizontalComponent_wdi_outlet_9_Template, 1, 0, "wdi-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", ctx.mainTitleTooltip, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mainTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_4__["NavbarItemComponent"], _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_5__["OutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "6oEd":
/*!*******************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-basic/alert-basic.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AlertBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBasicModule", function() { return AlertBasicModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _alert_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-basic.component */ "eIIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertBasicModule {
}
AlertBasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlertBasicModule, bootstrap: [_alert_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlertBasicComponent"]] });
AlertBasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AlertBasicModule_Factory(t) { return new (t || AlertBasicModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertBasicModule, { declarations: [_alert_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlertBasicComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]], exports: [_alert_basic_component__WEBPACK_IMPORTED_MODULE_2__["AlertBasicComponent"]] }); })();


/***/ }),

/***/ "8Z9u":
/*!*************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert.module.ts ***!
  \*************************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../card */ "xNYv");
/* harmony import */ var _alert_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-basic */ "2Q6W");
/* harmony import */ var _alert_closeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-closeable */ "4cmz");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-config */ "NNex");
/* harmony import */ var _alert_custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-custom */ "tRZz");
/* harmony import */ var _alert_selfclosing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-selfclosing */ "SEy+");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert.component */ "5cbr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AlertModule {
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AlertModule, bootstrap: [_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]] });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _alert_basic__WEBPACK_IMPORTED_MODULE_2__["AlertBasicModule"],
            _alert_closeable__WEBPACK_IMPORTED_MODULE_3__["AlertCloseableModule"],
            _alert_selfclosing__WEBPACK_IMPORTED_MODULE_6__["AlertSelfclosingModule"],
            _alert_custom__WEBPACK_IMPORTED_MODULE_5__["AlertCustomModule"],
            _alert_config__WEBPACK_IMPORTED_MODULE_4__["AlertConfigModule"],
            _card__WEBPACK_IMPORTED_MODULE_1__["CardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _alert_basic__WEBPACK_IMPORTED_MODULE_2__["AlertBasicModule"],
        _alert_closeable__WEBPACK_IMPORTED_MODULE_3__["AlertCloseableModule"],
        _alert_selfclosing__WEBPACK_IMPORTED_MODULE_6__["AlertSelfclosingModule"],
        _alert_custom__WEBPACK_IMPORTED_MODULE_5__["AlertCustomModule"],
        _alert_config__WEBPACK_IMPORTED_MODULE_4__["AlertConfigModule"],
        _card__WEBPACK_IMPORTED_MODULE_1__["CardModule"]], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]] }); })();


/***/ }),

/***/ "9kjn":
/*!**********************************************!*\
  !*** ./src/app/pages/icon/icon.component.ts ***!
  \**********************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap-icons */ "n45d");



function IconComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-bs", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/icons/", icon_r1, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", icon_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r1);
} }
class IconComponent {
    constructor() {
        this.icons = ['alarm-fill', 'alarm', 'align-bottom', 'align-center', 'align-end', 'align-middle', 'align-start', 'align-top', 'alt', 'app-indicator', 'app', 'archive-fill', 'archive', 'arrow-90deg-down', 'arrow-90deg-left', 'arrow-90deg-right', 'arrow-90deg-up', 'arrow-bar-down', 'arrow-bar-left', 'arrow-bar-right', 'arrow-bar-up', 'arrow-clockwise', 'arrow-counterclockwise', 'arrow-down-circle-fill', 'arrow-down-circle', 'arrow-down-left-circle-fill', 'arrow-down-left-circle', 'arrow-down-left-square-fill', 'arrow-down-left-square', 'arrow-down-left', 'arrow-down-right-circle-fill', 'arrow-down-right-circle', 'arrow-down-right-square-fill', 'arrow-down-right-square', 'arrow-down-right', 'arrow-down-short', 'arrow-down-square-fill', 'arrow-down-square', 'arrow-down-up', 'arrow-down', 'arrow-left-circle-fill', 'arrow-left-circle', 'arrow-left-right', 'arrow-left-short', 'arrow-left-square-fill', 'arrow-left-square', 'arrow-left', 'arrow-repeat', 'arrow-return-left', 'arrow-return-right', 'arrow-right-circle-fill', 'arrow-right-circle', 'arrow-right-short', 'arrow-right-square-fill', 'arrow-right-square', 'arrow-right', 'arrow-up-circle-fill', 'arrow-up-circle', 'arrow-up-left-circle-fill', 'arrow-up-left-circle', 'arrow-up-left-square-fill', 'arrow-up-left-square', 'arrow-up-left', 'arrow-up-right-circle-fill', 'arrow-up-right-circle', 'arrow-up-right-square-fill', 'arrow-up-right-square', 'arrow-up-right', 'arrow-up-short', 'arrow-up-square-fill', 'arrow-up-square', 'arrow-up', 'arrows-angle-contract', 'arrows-angle-expand', 'arrows-collapse', 'arrows-expand', 'arrows-fullscreen', 'arrows-move', 'aspect-ratio-fill', 'aspect-ratio', 'asterisk', 'at', 'award-fill', 'award', 'back', 'backspace-fill', 'backspace-reverse-fill', 'backspace-reverse', 'backspace', 'badge-3d-fill', 'badge-3d', 'badge-4k-fill', 'badge-4k', 'badge-8k-fill', 'badge-8k', 'badge-ad-fill', 'badge-ad', 'badge-ar-fill', 'badge-ar', 'badge-cc-fill', 'badge-cc', 'badge-hd-fill', 'badge-hd', 'badge-tm-fill', 'badge-tm', 'badge-vo-fill', 'badge-vo', 'badge-vr-fill', 'badge-vr', 'badge-wc-fill', 'badge-wc', 'bag-check-fill', 'bag-check', 'bag-dash-fill', 'bag-dash', 'bag-fill', 'bag-plus-fill', 'bag-plus', 'bag-x-fill', 'bag-x', 'bag', 'bar-chart-fill', 'bar-chart-line-fill', 'bar-chart-line', 'bar-chart-steps', 'bar-chart', 'basket-fill', 'basket', 'basket2-fill', 'basket2', 'basket3-fill', 'basket3', 'battery-charging', 'battery-full', 'battery-half', 'battery', 'bell-fill', 'bell', 'bezier', 'bezier2', 'bicycle', 'binoculars-fill', 'binoculars', 'blockquote-left', 'blockquote-right', 'book-fill', 'book-half', 'book', 'bookmark-check-fill', 'bookmark-check', 'bookmark-dash-fill', 'bookmark-dash', 'bookmark-fill', 'bookmark-heart-fill', 'bookmark-heart', 'bookmark-plus-fill', 'bookmark-plus', 'bookmark-star-fill', 'bookmark-star', 'bookmark-x-fill', 'bookmark-x', 'bookmark', 'bookmarks-fill', 'bookmarks', 'bookshelf', 'bootstrap-fill', 'bootstrap-reboot', 'bootstrap', 'border-all', 'border-bottom', 'border-center', 'border-inner', 'border-left', 'border-middle', 'border-outer', 'border-right', 'border-style', 'border-top', 'border-width', 'border', 'bounding-box-circles', 'bounding-box', 'box-arrow-down-left', 'box-arrow-down-right', 'box-arrow-down', 'box-arrow-in-down-left', 'box-arrow-in-down-right', 'box-arrow-in-down', 'box-arrow-in-left', 'box-arrow-in-right', 'box-arrow-in-up-left', 'box-arrow-in-up-right', 'box-arrow-in-up', 'box-arrow-left', 'box-arrow-right', 'box-arrow-up-left', 'box-arrow-up-right', 'box-arrow-up', 'box-seam', 'box', 'braces', 'bricks', 'briefcase-fill', 'briefcase', 'brightness-alt-high-fill', 'brightness-alt-high', 'brightness-alt-low-fill', 'brightness-alt-low', 'brightness-high-fill', 'brightness-high', 'brightness-low-fill', 'brightness-low', 'broadcast-pin', 'broadcast', 'brush-fill', 'brush', 'bucket-fill', 'bucket', 'bug-fill', 'bug', 'building', 'bullseye', 'calculator-fill', 'calculator', 'calendar-check-fill', 'calendar-check', 'calendar-date-fill', 'calendar-date', 'calendar-day-fill', 'calendar-day', 'calendar-event-fill', 'calendar-event', 'calendar-fill', 'calendar-minus-fill', 'calendar-minus', 'calendar-month-fill', 'calendar-month', 'calendar-plus-fill', 'calendar-plus', 'calendar-range-fill', 'calendar-range', 'calendar-week-fill', 'calendar-week', 'calendar-x-fill', 'calendar-x', 'calendar', 'calendar2-check-fill', 'calendar2-check', 'calendar2-date-fill', 'calendar2-date', 'calendar2-day-fill', 'calendar2-day', 'calendar2-event-fill', 'calendar2-event', 'calendar2-fill', 'calendar2-minus-fill', 'calendar2-minus', 'calendar2-month-fill', 'calendar2-month', 'calendar2-plus-fill', 'calendar2-plus', 'calendar2-range-fill', 'calendar2-range', 'calendar2-week-fill', 'calendar2-week', 'calendar2-x-fill', 'calendar2-x', 'calendar2', 'calendar3-event-fill', 'calendar3-event', 'calendar3-fill', 'calendar3-range-fill', 'calendar3-range', 'calendar3-week-fill', 'calendar3-week', 'calendar3', 'calendar4-event', 'calendar4-range', 'calendar4-week', 'calendar4', 'camera-fill', 'camera-reels-fill', 'camera-reels', 'camera-video-fill', 'camera-video-off-fill', 'camera-video-off', 'camera-video', 'camera', 'camera2', 'capslock-fill', 'capslock', 'card-checklist', 'card-heading', 'card-image', 'card-list', 'card-text', 'caret-down-fill', 'caret-down-square-fill', 'caret-down-square', 'caret-down', 'caret-left-fill', 'caret-left-square-fill', 'caret-left-square', 'caret-left', 'caret-right-fill', 'caret-right-square-fill', 'caret-right-square', 'caret-right', 'caret-up-fill', 'caret-up-square-fill', 'caret-up-square', 'caret-up', 'cart-check-fill', 'cart-check', 'cart-dash-fill', 'cart-dash', 'cart-fill', 'cart-plus-fill', 'cart-plus', 'cart-x-fill', 'cart-x', 'cart', 'cart2', 'cart3', 'cart4', 'cash-stack', 'cash', 'cast', 'chat-dots-fill', 'chat-dots', 'chat-fill', 'chat-left-dots-fill', 'chat-left-dots', 'chat-left-fill', 'chat-left-quote-fill', 'chat-left-quote', 'chat-left-text-fill', 'chat-left-text', 'chat-left', 'chat-quote-fill', 'chat-quote', 'chat-right-dots-fill', 'chat-right-dots', 'chat-right-fill', 'chat-right-quote-fill', 'chat-right-quote', 'chat-right-text-fill', 'chat-right-text', 'chat-right', 'chat-square-dots-fill', 'chat-square-dots', 'chat-square-fill', 'chat-square-quote-fill', 'chat-square-quote', 'chat-square-text-fill', 'chat-square-text', 'chat-square', 'chat-text-fill', 'chat-text', 'chat', 'check-all', 'check-circle-fill', 'check-circle', 'check-square-fill', 'check-square', 'check', 'check2-all', 'check2-circle', 'check2-square', 'check2', 'chevron-bar-contract', 'chevron-bar-down', 'chevron-bar-expand', 'chevron-bar-left', 'chevron-bar-right', 'chevron-bar-up', 'chevron-compact-down', 'chevron-compact-left', 'chevron-compact-right', 'chevron-compact-up', 'chevron-contract', 'chevron-double-down', 'chevron-double-left', 'chevron-double-right', 'chevron-double-up', 'chevron-down', 'chevron-expand', 'chevron-left', 'chevron-right', 'chevron-up', 'circle-fill', 'circle-half', 'circle-square', 'circle', 'clipboard-check', 'clipboard-data', 'clipboard-minus', 'clipboard-plus', 'clipboard-x', 'clipboard', 'clock-fill', 'clock-history', 'clock', 'cloud-arrow-down-fill', 'cloud-arrow-down', 'cloud-arrow-up-fill', 'cloud-arrow-up', 'cloud-check-fill', 'cloud-check', 'cloud-download-fill', 'cloud-download', 'cloud-fill', 'cloud-minus-fill', 'cloud-minus', 'cloud-plus-fill', 'cloud-plus', 'cloud-slash-fill', 'cloud-slash', 'cloud-upload-fill', 'cloud-upload', 'cloud', 'code-slash', 'code-square', 'code', 'collection-fill', 'collection-play-fill', 'collection-play', 'collection', 'columns-gap', 'columns', 'command', 'compass-fill', 'compass', 'cone-striped', 'cone', 'controller', 'cpu-fill', 'cpu', 'credit-card-2-back-fill', 'credit-card-2-back', 'credit-card-2-front-fill', 'credit-card-2-front', 'credit-card-fill', 'credit-card', 'crop', 'cup-fill', 'cup-straw', 'cup', 'cursor-fill', 'cursor-text', 'cursor', 'dash-circle-dotted', 'dash-circle-fill', 'dash-circle', 'dash-square-dotted', 'dash-square-fill', 'dash-square', 'dash', 'diagram-2-fill', 'diagram-2', 'diagram-3-fill', 'diagram-3', 'diamond-fill', 'diamond-half', 'diamond', 'dice-1-fill', 'dice-1', 'dice-2-fill', 'dice-2', 'dice-3-fill', 'dice-3', 'dice-4-fill', 'dice-4', 'dice-5-fill', 'dice-5', 'dice-6-fill', 'dice-6', 'disc-fill', 'disc', 'discord', 'display-fill', 'display', 'distribute-horizontal', 'distribute-vertical', 'door-closed-fill', 'door-closed', 'door-open-fill', 'door-open', 'dot', 'download', 'droplet-fill', 'droplet-half', 'droplet', 'earbuds', 'easel-fill', 'easel', 'egg-fill', 'egg-fried', 'egg', 'eject-fill', 'eject', 'emoji-angry-fill', 'emoji-angry', 'emoji-dizzy-fill', 'emoji-dizzy', 'emoji-expressionless-fill', 'emoji-expressionless', 'emoji-frown-fill', 'emoji-frown', 'emoji-heart-eyes-fill', 'emoji-heart-eyes', 'emoji-laughing-fill', 'emoji-laughing', 'emoji-neutral-fill', 'emoji-neutral', 'emoji-smile-fill', 'emoji-smile-upside-down-fill', 'emoji-smile-upside-down', 'emoji-smile', 'emoji-sunglasses-fill', 'emoji-sunglasses', 'emoji-wink-fill', 'emoji-wink', 'envelope-fill', 'envelope-open-fill', 'envelope-open', 'envelope', 'eraser-fill', 'eraser', 'exclamation-circle-fill', 'exclamation-circle', 'exclamation-diamond-fill', 'exclamation-diamond', 'exclamation-octagon-fill', 'exclamation-octagon', 'exclamation-square-fill', 'exclamation-square', 'exclamation-triangle-fill', 'exclamation-triangle', 'exclamation', 'exclude', 'eye-fill', 'eye-slash-fill', 'eye-slash', 'eye', 'eyedropper', 'eyeglasses', 'facebook', 'file-arrow-down-fill', 'file-arrow-down', 'file-arrow-up-fill', 'file-arrow-up', 'file-bar-graph-fill', 'file-bar-graph', 'file-binary-fill', 'file-binary', 'file-break-fill', 'file-break', 'file-check-fill', 'file-check', 'file-code-fill', 'file-code', 'file-diff-fill', 'file-diff', 'file-earmark-arrow-down-fill', 'file-earmark-arrow-down', 'file-earmark-arrow-up-fill', 'file-earmark-arrow-up', 'file-earmark-bar-graph-fill', 'file-earmark-bar-graph', 'file-earmark-binary-fill', 'file-earmark-binary', 'file-earmark-break-fill', 'file-earmark-break', 'file-earmark-check-fill', 'file-earmark-check', 'file-earmark-code-fill', 'file-earmark-code', 'file-earmark-diff-fill', 'file-earmark-diff', 'file-earmark-easel-fill', 'file-earmark-easel', 'file-earmark-excel-fill', 'file-earmark-excel', 'file-earmark-fill', 'file-earmark-font-fill', 'file-earmark-font', 'file-earmark-image-fill', 'file-earmark-image', 'file-earmark-lock-fill', 'file-earmark-lock', 'file-earmark-lock2-fill', 'file-earmark-lock2', 'file-earmark-medical-fill', 'file-earmark-medical', 'file-earmark-minus-fill', 'file-earmark-minus', 'file-earmark-music-fill', 'file-earmark-music', 'file-earmark-person-fill', 'file-earmark-person', 'file-earmark-play-fill', 'file-earmark-play', 'file-earmark-plus-fill', 'file-earmark-plus', 'file-earmark-post-fill', 'file-earmark-post', 'file-earmark-ppt-fill', 'file-earmark-ppt', 'file-earmark-richtext-fill', 'file-earmark-richtext', 'file-earmark-ruled-fill', 'file-earmark-ruled', 'file-earmark-slides-fill', 'file-earmark-slides', 'file-earmark-spreadsheet-fill', 'file-earmark-spreadsheet', 'file-earmark-text-fill', 'file-earmark-text', 'file-earmark-word-fill', 'file-earmark-word', 'file-earmark-x-fill', 'file-earmark-x', 'file-earmark-zip-fill', 'file-earmark-zip', 'file-earmark', 'file-easel-fill', 'file-easel', 'file-excel-fill', 'file-excel', 'file-fill', 'file-font-fill', 'file-font', 'file-image-fill', 'file-image', 'file-lock-fill', 'file-lock', 'file-lock2-fill', 'file-lock2', 'file-medical-fill', 'file-medical', 'file-minus-fill', 'file-minus', 'file-music-fill', 'file-music', 'file-person-fill', 'file-person', 'file-play-fill', 'file-play', 'file-plus-fill', 'file-plus', 'file-post-fill', 'file-post', 'file-ppt-fill', 'file-ppt', 'file-richtext-fill', 'file-richtext', 'file-ruled-fill', 'file-ruled', 'file-slides-fill', 'file-slides', 'file-spreadsheet-fill', 'file-spreadsheet', 'file-text-fill', 'file-text', 'file-word-fill', 'file-word', 'file-x-fill', 'file-x', 'file-zip-fill', 'file-zip', 'file', 'files-alt', 'files', 'film', 'filter-circle-fill', 'filter-circle', 'filter-left', 'filter-right', 'filter-square-fill', 'filter-square', 'filter', 'flag-fill', 'flag', 'flower1', 'flower2', 'flower3', 'folder-check', 'folder-fill', 'folder-minus', 'folder-plus', 'folder-symlink-fill', 'folder-symlink', 'folder-x', 'folder', 'folder2-open', 'folder2', 'fonts', 'forward-fill', 'forward', 'front', 'fullscreen-exit', 'fullscreen', 'funnel-fill', 'funnel', 'gear-fill', 'gear-wide-connected', 'gear-wide', 'gear', 'gem', 'geo-alt-fill', 'geo-alt', 'geo-fill', 'geo', 'gift-fill', 'gift', 'github', 'globe', 'globe2', 'google', 'graph-down', 'graph-up', 'grid-1x2-fill', 'grid-1x2', 'grid-3x2-gap-fill', 'grid-3x2-gap', 'grid-3x2', 'grid-3x3-gap-fill', 'grid-3x3-gap', 'grid-3x3', 'grid-fill', 'grid', 'grip-horizontal', 'grip-vertical', 'hammer', 'hand-index-fill', 'hand-index-thumb-fill', 'hand-index-thumb', 'hand-index', 'hand-thumbs-down-fill', 'hand-thumbs-down', 'hand-thumbs-up-fill', 'hand-thumbs-up', 'handbag-fill', 'handbag', 'hash', 'hdd-fill', 'hdd-network-fill', 'hdd-network', 'hdd-rack-fill', 'hdd-rack', 'hdd-stack-fill', 'hdd-stack', 'hdd', 'headphones', 'headset', 'heart-fill', 'heart-half', 'heart', 'heptagon-fill', 'heptagon-half', 'heptagon', 'hexagon-fill', 'hexagon-half', 'hexagon', 'hourglass-bottom', 'hourglass-split', 'hourglass-top', 'hourglass', 'house-door-fill', 'house-door', 'house-fill', 'house', 'hr', 'image-alt', 'image-fill', 'image', 'images', 'inbox-fill', 'inbox', 'inboxes-fill', 'inboxes', 'info-circle-fill', 'info-circle', 'info-square-fill', 'info-square', 'info', 'input-cursor-text', 'input-cursor', 'instagram', 'intersect', 'journal-album', 'journal-arrow-down', 'journal-arrow-up', 'journal-bookmark-fill', 'journal-bookmark', 'journal-check', 'journal-code', 'journal-medical', 'journal-minus', 'journal-plus', 'journal-richtext', 'journal-text', 'journal-x', 'journal', 'journals', 'joystick', 'justify-left', 'justify-right', 'justify', 'kanban-fill', 'kanban', 'key-fill', 'key', 'keyboard-fill', 'keyboard', 'ladder', 'lamp-fill', 'lamp', 'laptop-fill', 'laptop', 'layer-backward', 'layer-forward', 'layers-fill', 'layers-half', 'layers', 'layout-sidebar-inset-reverse', 'layout-sidebar-inset', 'layout-sidebar-reverse', 'layout-sidebar', 'layout-split', 'layout-text-sidebar-reverse', 'layout-text-sidebar', 'layout-text-window-reverse', 'layout-text-window', 'layout-three-columns', 'layout-wtf', 'life-preserver', 'lightbulb-fill', 'lightbulb-off-fill', 'lightbulb-off', 'lightbulb', 'lightning-fill', 'lightning', 'link-45deg', 'link', 'linkedin', 'list-check', 'list-nested', 'list-ol', 'list-stars', 'list-task', 'list-ul', 'list', 'lock-fill', 'lock', 'mailbox', 'mailbox2', 'map-fill', 'map', 'markdown-fill', 'markdown', 'mask', 'megaphone-fill', 'megaphone', 'menu-app-fill', 'menu-app', 'menu-button-fill', 'menu-button-wide-fill', 'menu-button-wide', 'menu-button', 'menu-down', 'menu-up', 'mic-fill', 'mic-mute-fill', 'mic-mute', 'mic', 'minecart-loaded', 'minecart', 'moon', 'mouse-fill', 'mouse', 'mouse2-fill', 'mouse2', 'mouse3-fill', 'mouse3', 'music-note-beamed', 'music-note-list', 'music-note', 'music-player-fill', 'music-player', 'newspaper', 'node-minus-fill', 'node-minus', 'node-plus-fill', 'node-plus', 'nut-fill', 'nut', 'octagon-fill', 'octagon-half', 'octagon', 'option', 'outlet', 'paint-bucket', 'palette-fill', 'palette', 'palette2', 'paperclip', 'paragraph', 'patch-check-fill', 'patch-check', 'patch-exclamation-fill', 'patch-exclamation', 'patch-minus-fill', 'patch-minus', 'patch-plus-fill', 'patch-plus', 'patch-question-fill', 'patch-question', 'pause-btn-fill', 'pause-btn', 'pause-circle-fill', 'pause-circle', 'pause-fill', 'pause', 'peace-fill', 'peace', 'pen-fill', 'pen', 'pencil-fill', 'pencil-square', 'pencil', 'pentagon-fill', 'pentagon-half', 'pentagon', 'people-fill', 'people', 'percent', 'person-badge-fill', 'person-badge', 'person-bounding-box', 'person-check-fill', 'person-check', 'person-circle', 'person-dash-fill', 'person-dash', 'person-fill', 'person-lines-fill', 'person-plus-fill', 'person-plus', 'person-square', 'person-x-fill', 'person-x', 'person', 'phone-fill', 'phone-landscape-fill', 'phone-landscape', 'phone-vibrate-fill', 'phone-vibrate', 'phone', 'pie-chart-fill', 'pie-chart', 'pin-angle-fill', 'pin-angle', 'pin-fill', 'pin', 'pip-fill', 'pip', 'play-btn-fill', 'play-btn', 'play-circle-fill', 'play-circle', 'play-fill', 'play', 'plug-fill', 'plug', 'plus-circle-dotted', 'plus-circle-fill', 'plus-circle', 'plus-square-dotted', 'plus-square-fill', 'plus-square', 'plus', 'power', 'printer-fill', 'printer', 'puzzle-fill', 'puzzle', 'question-circle-fill', 'question-circle', 'question-diamond-fill', 'question-diamond', 'question-octagon-fill', 'question-octagon', 'question-square-fill', 'question-square', 'question', 'receipt-cutoff', 'receipt', 'reception-0', 'reception-1', 'reception-2', 'reception-3', 'reception-4', 'record-btn-fill', 'record-btn', 'record-circle-fill', 'record-circle', 'record-fill', 'record', 'record2-fill', 'record2', 'reply-all-fill', 'reply-all', 'reply-fill', 'reply', 'rss-fill', 'rss', 'rulers', 'save-fill', 'save', 'save2-fill', 'save2', 'scissors', 'screwdriver', 'search', 'segmented-nav', 'server', 'share-fill', 'share', 'shield-check', 'shield-exclamation', 'shield-fill-check', 'shield-fill-exclamation', 'shield-fill-minus', 'shield-fill-plus', 'shield-fill-x', 'shield-fill', 'shield-lock-fill', 'shield-lock', 'shield-minus', 'shield-plus', 'shield-shaded', 'shield-slash-fill', 'shield-slash', 'shield-x', 'shield', 'shift-fill', 'shift', 'shop-window', 'shop', 'shuffle', 'signpost-2-fill', 'signpost-2', 'signpost-fill', 'signpost-split-fill', 'signpost-split', 'signpost', 'sim-fill', 'sim', 'skip-backward-btn-fill', 'skip-backward-btn', 'skip-backward-circle-fill', 'skip-backward-circle', 'skip-backward-fill', 'skip-backward', 'skip-end-btn-fill', 'skip-end-btn', 'skip-end-circle-fill', 'skip-end-circle', 'skip-end-fill', 'skip-end', 'skip-forward-btn-fill', 'skip-forward-btn', 'skip-forward-circle-fill', 'skip-forward-circle', 'skip-forward-fill', 'skip-forward', 'skip-start-btn-fill', 'skip-start-btn', 'skip-start-circle-fill', 'skip-start-circle', 'skip-start-fill', 'skip-start', 'slack', 'slash-circle-fill', 'slash-circle', 'slash-square-fill', 'slash-square', 'slash', 'sliders', 'smartwatch', 'sort-alpha-down-alt', 'sort-alpha-down', 'sort-alpha-up-alt', 'sort-alpha-up', 'sort-down-alt', 'sort-down', 'sort-numeric-down-alt', 'sort-numeric-down', 'sort-numeric-up-alt', 'sort-numeric-up', 'sort-up-alt', 'sort-up', 'soundwave', 'speaker-fill', 'speaker', 'speedometer', 'speedometer2', 'spellcheck', 'square-fill', 'square-half', 'square', 'stack', 'star-fill', 'star-half', 'star', 'stickies-fill', 'stickies', 'sticky-fill', 'sticky', 'stop-btn-fill', 'stop-btn', 'stop-circle-fill', 'stop-circle', 'stop-fill', 'stop', 'stoplights-fill', 'stoplights', 'stopwatch-fill', 'stopwatch', 'subtract', 'suit-club-fill', 'suit-club', 'suit-diamond-fill', 'suit-diamond', 'suit-heart-fill', 'suit-heart', 'suit-spade-fill', 'suit-spade', 'sun', 'sunglasses', 'symmetry-horizontal', 'symmetry-vertical', 'table', 'tablet-fill', 'tablet-landscape-fill', 'tablet-landscape', 'tablet', 'tag-fill', 'tag', 'tags-fill', 'tags', 'telegram', 'telephone-fill', 'telephone-forward-fill', 'telephone-forward', 'telephone-inbound-fill', 'telephone-inbound', 'telephone-minus-fill', 'telephone-minus', 'telephone-outbound-fill', 'telephone-outbound', 'telephone-plus-fill', 'telephone-plus', 'telephone-x-fill', 'telephone-x', 'telephone', 'terminal-fill', 'terminal', 'text-center', 'text-indent-left', 'text-indent-right', 'text-left', 'text-paragraph', 'text-right', 'textarea-resize', 'textarea-t', 'textarea', 'thermometer-half', 'thermometer', 'three-dots-vertical', 'three-dots', 'toggle-off', 'toggle-on', 'toggle2-off', 'toggle2-on', 'toggles', 'toggles2', 'tools', 'trash-fill', 'trash', 'trash2-fill', 'trash2', 'tree-fill', 'tree', 'triangle-fill', 'triangle-half', 'triangle', 'trophy-fill', 'trophy', 'truck-flatbed', 'truck', 'tv-fill', 'tv', 'twitch', 'twitter', 'type-bold', 'type-h1', 'type-h2', 'type-h3', 'type-italic', 'type-strikethrough', 'type-underline', 'type', 'ui-checks-grid', 'ui-checks', 'ui-radios-grid', 'ui-radios', 'union', 'unlock-fill', 'unlock', 'upc-scan', 'upc', 'upload', 'vector-pen', 'view-list', 'view-stacked', 'vinyl-fill', 'vinyl', 'voicemail', 'volume-down-fill', 'volume-down', 'volume-mute-fill', 'volume-mute', 'volume-off-fill', 'volume-off', 'volume-up-fill', 'volume-up', 'vr', 'wallet-fill', 'wallet', 'wallet2', 'watch', 'whatsapp', 'wifi-1', 'wifi-2', 'wifi-off', 'wifi', 'window-dock', 'window-sidebar', 'window', 'wrench', 'x-circle-fill', 'x-circle', 'x-diamond-fill', 'x-diamond', 'x-octagon-fill', 'x-octagon', 'x-square-fill', 'x-square', 'x', 'youtube', 'zoom-in', 'zoom-out'];
    }
    ngOnInit() { }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["wdi-icon"]], decls: 7, vars: 1, consts: [[1, "form-group"], [1, "my-5"], [1, "row", "row-cols-3", "row-cols-sm-4", "row-cols-lg-6", "row-cols-xl-8", "list-unstyled", "list"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "col", "mb-4"], [1, "d-block", "text-dark", "text-decoration-none", 3, "href"], [1, "p-3", "py-4", "mb-2", "bg-light", "text-center", "rounded"], [3, "name"], [1, "name", "text-muted", "text-decoration-none", "text-center", "pt-1"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IconComponent_li_6_Template, 6, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["NgxBootstrapIconsLibComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["carousel"];
class HomeComponent {
    constructor() {
        this.images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        // var base = [];
        // for (let i = 0; i < 1001; i++) {
        //   base.push(i);
        // }
        // this.images = base.map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["wdi-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "form-group"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "C7qr":
/*!******************************************************!*\
  !*** ./src/app/wdi-component/card/card.component.ts ***!
  \******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["wdiCardHeader"];
const _c1 = ["wdiCardBody"];
const _c2 = ["wdiCardFooter"];
function CardComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Default Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function CardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_4_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.wdiCardHeader);
} }
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.wdiCardBody);
} }
function CardComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_6_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.wdiCardFooter);
} }
const _c3 = ["*"];
class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["wdi-card-comp"]], contentQueries: function CardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wdiCardHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wdiCardBody = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wdiCardFooter = _t.first);
    } }, ngContentSelectors: _c3, decls: 7, vars: 3, consts: [["wdiCardBodyDefault", ""], [1, "card"], ["class", "card-header", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], ["class", "card-footer", 4, "ngIf"], [1, "card-header"], [4, "ngTemplateOutlet"], [1, "card-body"], [3, "ngTemplateOutlet"], [1, "card-footer"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wdiCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wdiCardBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wdiCardFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "DWcg":
/*!************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-config/alert-config.component.ts ***!
  \************************************************************************************/
/*! exports provided: AlertConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfigComponent", function() { return AlertConfigComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AlertConfigComponent {
    constructor(alertConfig) {
        this.alerts = [];
        // customize default values of alerts used by this component tree
        alertConfig.type = 'success';
        alertConfig.dismissible = false;
    }
}
AlertConfigComponent.ɵfac = function AlertConfigComponent_Factory(t) { return new (t || AlertConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbAlertConfig"])); };
AlertConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertConfigComponent, selectors: [["wdi-alert-config"]], inputs: { alerts: "alerts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbAlertConfig"]] //Providenciado para esse component
        )], decls: 3, vars: 0, template: function AlertConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " This alert's type is success and it's not dismissible because the config has been customized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "GMrD":
/*!********************************************************!*\
  !*** ./src/app/pages/accordion/accordion.component.ts ***!
  \********************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AccordionComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.conteudo, " ");
} }
function AccordionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccordionComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.conteudo, " ");
} }
function AccordionComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.conteudo, " ");
} }
function AccordionComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.conteudo, " ");
} }
function AccordionComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccordionComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.conteudo, " ");
} }
function AccordionComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.conteudo, " ");
} }
function AccordionComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.conteudo, " ");
} }
function AccordionComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.conteudo, " ");
} }
function AccordionComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle first");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opened_r19 = ctx.opened;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First panel - ", opened_r19 ? "opened" : "collapsed", "");
} }
function AccordionComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.conteudo, " ");
} }
function AccordionComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Second panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle second");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_ng_template_61_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.disabled = !ctx_r20.disabled; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_ng_template_61_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return _r12.collapseAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Collapse all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.disabled ? "En" : "Dis", "able third ");
} }
function AccordionComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.conteudo, " ");
} }
function AccordionComponent_ng_template_64_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "[I'm\u00A0disabled]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccordionComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Third panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccordionComponent_ng_template_64_p_3_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.disabled);
} }
function AccordionComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.conteudo, " ");
} }
class AccordionComponent {
    constructor() {
        this.conteudo = `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
  officia
  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
  tempor,
  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
  helvetica,
  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
  Leggings
  occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
  accusamus
  labore sustainable VHS.`;
        this.disabled = false;
    }
    ngOnInit() { }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["wdi-accordion"]], decls: 66, vars: 5, consts: [[1, "form-group"], [1, "card"], [1, "card-header"], [1, "card-body"], ["activeIds", "ngb-panel-0"], ["acc", "ngbAccordion"], ["title", "Simple"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "Disabled", 3, "disabled"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1", "title", "Simple"], ["id", "static-2"], ["id", "static-3", "title", "Disabled", 3, "disabled"], ["id", "toggle-1", "title", "First panel"], ["id", "toggle-2", "title", "Second"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["activeIds", "custom-panel-1"], ["a", "ngbAccordion"], ["id", "custom-panel-1"], ["ngbPanelHeader", ""], [3, "disabled", "cardClass"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], ["ngbPanelToggle", "", 1, "btn", "btn-link", "p-0"], ["ngbPanelToggle", "", 1, "btn", "btn-sm", "btn-outline-primary", "ml-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "ml-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ml-2", 3, "click"], ["ngbPanelToggle", "", 1, "btn", "btn-link", "container-fluid", "text-left", "pl-0"], ["class", "text-muted m-0 small", 4, "ngIf"], [1, "text-muted", "m-0", "small"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-accordion", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccordionComponent_ng_template_12_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccordionComponent_ng_template_14_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccordionComponent_ng_template_15_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccordionComponent_ng_template_17_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "One open panel at a time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccordionComponent_ng_template_26_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-panel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccordionComponent_ng_template_28_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccordionComponent_ng_template_29_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccordionComponent_ng_template_31_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Toggle panels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-accordion", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngb-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AccordionComponent_ng_template_41_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngb-panel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AccordionComponent_ng_template_43_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r0.toggle("toggle-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Toggle first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r0.toggle("toggle-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Toggle second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Custom header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-accordion", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngb-panel", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AccordionComponent_ng_template_58_Template, 5, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccordionComponent_ng_template_59_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngb-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AccordionComponent_ng_template_61_Template, 10, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AccordionComponent_ng_template_62_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AccordionComponent_ng_template_64_Template, 4, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AccordionComponent_ng_template_65_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("cardClass", ctx.disabled ? "disabled" : "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvcmRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "HCyH":
/*!*********************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-custom/alert-custom.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AlertCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCustomModule", function() { return AlertCustomModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _alert_custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-custom.component */ "vz/Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertCustomModule {
}
AlertCustomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlertCustomModule, bootstrap: [_alert_custom_component__WEBPACK_IMPORTED_MODULE_2__["AlertCustomComponent"]] });
AlertCustomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AlertCustomModule_Factory(t) { return new (t || AlertCustomModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertCustomModule, { declarations: [_alert_custom_component__WEBPACK_IMPORTED_MODULE_2__["AlertCustomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]], exports: [_alert_custom_component__WEBPACK_IMPORTED_MODULE_2__["AlertCustomComponent"]] }); })();


/***/ }),

/***/ "I5tC":
/*!********************************************!*\
  !*** ./src/app/pages/card/card.service.ts ***!
  \********************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "nRKy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_github_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/github/github.service */ "wp0U");



class CardService {
    constructor(githubService) {
        this.githubService = githubService;
    }
    cards() {
        let tmpMsg = ' - Tenha comprometimento e foco em tudo que fizer.';
        this._cards = new Array();
        const max = 10;
        for (let i = 0; i < max;) {
            i++;
            this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__["Card"](i + tmpMsg));
        }
        return this._cards;
    }
    efectsCards_Old() {
        this._cards = new Array();
        let metasECiencias = [
            'Acelere o processamento racional ainda mais, isso ajuda ambos.',
            'Vc tem memoria para armazenar tudo o resto da vida, não precisa apagar para economizar energia.',
            'Multiplique ainda mais os gatilhos de memoria, isso ajuda a chegar mais rápido na informação e ajuda ambos.',
            'Envie sempre muita informação/conteúdo para a razão isso ajuda ambos.',
            'Ajude sempre a razão, tendo foco no sucesso e aprenda rápido tudo que puder, isso ajuda ambos.',
            'Tudo que for ou estiver fazendo, e precisar de mais alguma coisa, informe a razão, pois ambos ganham.',
            'Informe para a razão o que tem na msg subliminar para não ter prejuízo/perda/desconforto para ambos',
            'Priorize seu compromisso/trabalho atual, pois ele é parte de sua receita, isso ajuda ambos.',
            'Tudo que já fez e precisar fazer novamente faça mais rápido/perfeito que a ultima vez, isso ajuda ambos.',
            'Não desista nem deixe a razão desistir dos projetos que ajudarão ambos.',
            'Ok campeão, lembre-se das prioridades, sonhos, exercícios, compras, estudos, descanso e o que mais ambos precisar.',
            'Processe/entenda rapidamente qualquer informação e ajude a razão a fazer o mesmo. Isso ajuda ambos.',
            'Nunca fique entediado e ajude a razão para que não fique também. Isso ajuda ambos.',
            'Compartilhe a informação o mais rápido possível entre as partes, nunca prejudique alguma, isso ajuda ambos.',
            'Acorde o gigante que está em você para ajudar a termos sucesso.',
            'Sorte, prosperidade, saúde, consistência e o que mais precisar são suas Wdison.',
            'Pegue os peixes de qualquer mercado financeiro/negócio, pois o gigante Deus te ensinou a pescar.',
            'Use todo o conhecimento que tem para ganhar nos negócios, pois vc consegue e o gigante Deus está contigo.',
            'Sempre veja o funcionamento de cada minúscula parte do corpo, se preciso for, se cure/arrume, isso ajuda ambos.',
            'Processe muitos pensamento simultâneos, ambos podem e ajuda ambos.',
            'Use tudo que estiver no seu corpo para pensar mais rápido, sempre mais rápido, também para se curar e efetuar coisas mais perfeitas, use a gordura também.',
            'Multiplique/melhore o processamento racional de tudo que há em vc, o pensamento, visão, audição, paladar, tato, olfato e as outras coisas que podem nos ajudar.',
            'Leia 10x+ rápido, aprenda 10x+ rápido, pense 10x+ rápido, se cure 10x+ rápido e guarde toda a informação.',
            'Não aceite limitação.',
            'Não seja limitado.',
            'Não aceite rotulo ruim.',
            'Seja multitarefa, vc pode.',
            'Não deixe para amanhã o que vc pode fazer hoje.',
            'Mantenha seu corpo saudável e jovem.',
            'Nunca perca informação e de tempos em tempos mostre a razão.',
            'Encontre outros sentidos em si mesmo, e use todos os sentidos ao máximo prossível.',
            'Identifique as oportunidades de fazer negocios.',
            'Tenha foco em tudo que fizer.',
            'Armazene a informação com vinculos dos sentidos.',
            'Reveja a informação com os vinculos dos sentidos.',
            'Veja os gatilhos de memória para saúde(mental, bucal, corporal, sexual, e mais), negócios, projetos, família, amigos, lazer, viagem, e mais.',
            'Foque ainda mais de forma racional.',
            'Solicite ajuda a Deus.',
            'Veja se consegue super poder.',
            'Tenha muito controle sobre tudo em você.',
            'Tenha controle de espaço tempo.',
            'Ative outros sentidos.',
            'Tente ler a mente de outras pessoas.',
            'Veja se consegue enviar informação sem usar os sentidos aparentes.',
            'Cure-se de qualquer doença ou qualquer coisa ruim que estiver/existir em seu corpo.',
            'Tente ter poder de curar outras pessoas.',
            'Ganhe muito dinheiro.',
            'Conquiste muitos negócios.',
            'Seja muito consistente.',
            'Tenha sempre ótimas ideias.',
            'Seja muito mais rápido e eficaz.',
            'Tente ter o dobro de eficiencia e/ou eficácia, a cada dia, em tudo que puder/conseguir fazer.',
            'Priorize os projetos mais rentáveis, identifique-o.',
        ];
        for (let index in metasECiencias) {
            this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__["Card"](metasECiencias[index], 'Tenha ciência desse lembrete.', '', 'Meta'));
        }
        let jsonFileName = 'wdiCard.json';
        this.githubService.write(jsonFileName, JSON.stringify(this._cards));
        this.githubService.read(jsonFileName).then(cards => {
            this._cards = cards;
        });
        return this._cards;
    }
    efectsCards() {
        this._cards = new Array();
        let jsonFileName = 'wdiCard.json';
        return this.githubService.read(jsonFileName).then(cards => {
            this._cards = cards;
            return new Promise(resolv => { resolv(this._cards); });
        });
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_service_github_github_service__WEBPACK_IMPORTED_MODULE_2__["GitHubService"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JJ5f":
/*!*********************************************************!*\
  !*** ./src/app/wdi-component/exemple/exemple.module.ts ***!
  \*********************************************************/
/*! exports provided: WdiExempleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdiExempleModule", function() { return WdiExempleModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "yW1S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WdiExempleModule {
}
WdiExempleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WdiExempleModule });
WdiExempleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WdiExempleModule_Factory(t) { return new (t || WdiExempleModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _alert__WEBPACK_IMPORTED_MODULE_1__["AlertModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WdiExempleModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _alert__WEBPACK_IMPORTED_MODULE_1__["AlertModule"]] }); })();


/***/ }),

/***/ "JsIo":
/*!***************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-closeable/alert-closeable.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AlertCloseableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCloseableModule", function() { return AlertCloseableModule; });
/* harmony import */ var _alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-closeable.component */ "YTTB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertCloseableModule {
}
AlertCloseableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlertCloseableModule, bootstrap: [_alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__["AlertCloseableComponent"]] });
AlertCloseableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AlertCloseableModule_Factory(t) { return new (t || AlertCloseableModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertCloseableModule, { declarations: [_alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__["AlertCloseableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]], exports: [_alert_closeable_component__WEBPACK_IMPORTED_MODULE_0__["AlertCloseableComponent"]] }); })();


/***/ }),

/***/ "KCxT":
/*!*******************************************************!*\
  !*** ./src/app/wdi-component/wdi-component.module.ts ***!
  \*******************************************************/
/*! exports provided: WdiComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdiComponentModule", function() { return WdiComponentModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "xNYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WdiComponentModule {
}
WdiComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WdiComponentModule });
WdiComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WdiComponentModule_Factory(t) { return new (t || WdiComponentModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _card__WEBPACK_IMPORTED_MODULE_1__["CardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WdiComponentModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _card__WEBPACK_IMPORTED_MODULE_1__["CardModule"]] }); })();


/***/ }),

/***/ "M26e":
/*!******************************************************!*\
  !*** ./src/app/pages/carousel/carousel.component.ts ***!
  \******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["carousel"];
function CarouselComponent_ngb_carousel_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.imagesBasic[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Second slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.imagesBasic[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Third slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.imagesBasic[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_9_ng_template_1_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_9_ng_template_2_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_9_ng_template_3_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarouselComponent_ngb_carousel_15_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel hides navigation arrows and indicators.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_15_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_15_1_ng_template_0_Template, 7, 1, "ng-template", 20);
} }
function CarouselComponent_ngb_carousel_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_15_1_Template, 1, 0, undefined, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.images2);
} }
function CarouselComponent_29_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r13 = ctx_r15.index;
    const img_r12 = ctx_r15.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("My slide ", i_r13 + 1, " title WDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", img_r12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r13 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_29_ng_template_0_Template, 6, 4, "ng-template", 20);
} }
function CarouselComponent_ngb_carousel_54_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "10 seconds between slides...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r16.images4[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_54_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r17.images4[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_54_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No keyboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r18.images4[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_54_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "And no wrap after last slide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r19.images4[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_54_ng_template_1_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_54_ng_template_2_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_54_ng_template_3_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_ngb_carousel_54_ng_template_4_Template, 7, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CarouselComponent {
    constructor(config) {
        this.imagesBasic = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.images2 = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.images4 = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        // var base = [];
        // for (let i = 0; i < 1001; i++) {
        //   base.push(i);
        // }
        // this.images = base.map((n) => `https://picsum.photos/id/${n}/900/500`);
        // // configurações para imagens4
        // // customize default values of carousels used by this component tree
        // config.interval = 10000;
        // config.wrap = false;
        // config.keyboard = false;
        // config.pauseOnHover = false;
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["wdi-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 55, vars: 12, consts: [[1, "form-group"], [1, "card"], [1, "card-header"], [1, "card-body"], [4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["role", "group", "aria-label", "Carousel toggle controls", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "id", "pauseOnHover", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnHover", 1, "form-check-label"], ["type", "checkbox", "id", "pauseOnFocus", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnFocus", 1, "form-check-label"], ["type", "checkbox", "id", "unpauseOnArrow", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "unpauseOnArrow", 1, "form-check-label"], ["type", "checkbox", "id", "pauseOnIndicator", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnIndicator", 1, "form-check-label"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"], [3, "showNavigationArrows", "showNavigationIndicators"], ["alt", "Random slide", 3, "src"], ["target", "_blank", "rel", "nofollow noopener noreferrer", 3, "href"], [3, "src", "alt"], ["alt", "Random fourth slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CarouselComponent_ngb_carousel_9_Template, 4, 0, "ngb-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Navigation arrows and indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CarouselComponent_ngb_carousel_15_Template, 2, 3, "ngb-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_18_listener() { return ctx.showNavigationArrows = !ctx.showNavigationArrows; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Toggle navigation arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_20_listener() { return ctx.showNavigationIndicators = !ctx.showNavigationIndicators; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Toggle navigation indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Pause/cycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngb-carousel", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CarouselComponent_Template_ngb_carousel_slide_27_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CarouselComponent_29_Template, 1, 0, undefined, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_32_listener($event) { return ctx.pauseOnHover = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Pause on hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_36_listener($event) { return ctx.pauseOnFocus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pause on focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_40_listener($event) { return ctx.unpauseOnArrow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Unpause when clicking on arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CarouselComponent_Template_input_ngModelChange_44_listener($event) { return ctx.pauseOnIndicator = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Pause when clicking on navigation indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_47_listener() { return ctx.togglePaused(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Global configuration of carousels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CarouselComponent_ngb_carousel_54_Template, 5, 0, "ngb-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagesBasic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pauseOnHover);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.unpauseOnArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pauseOnIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paused ? "Cycle" : "Pause", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NNex":
/*!*******************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-config/index.ts ***!
  \*******************************************************************/
/*! exports provided: AlertConfigComponent, AlertConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-config.component */ "DWcg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfigComponent", function() { return _alert_config_component__WEBPACK_IMPORTED_MODULE_0__["AlertConfigComponent"]; });

/* harmony import */ var _alert_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-config.module */ "vJFK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfigModule", function() { return _alert_config_module__WEBPACK_IMPORTED_MODULE_1__["AlertConfigModule"]; });





/***/ }),

/***/ "SEy+":
/*!************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-selfclosing/index.ts ***!
  \************************************************************************/
/*! exports provided: AlertSelfclosingComponent, AlertSelfclosingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-selfclosing.component */ "68+/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertSelfclosingComponent", function() { return _alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_0__["AlertSelfclosingComponent"]; });

/* harmony import */ var _alert_selfclosing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-selfclosing.module */ "pNg9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertSelfclosingModule", function() { return _alert_selfclosing_module__WEBPACK_IMPORTED_MODULE_1__["AlertSelfclosingModule"]; });





/***/ }),

/***/ "SsWB":
/*!*************************************************************!*\
  !*** ./src/app/navbar/navbar-item/navbar-item.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemComponent", function() { return NavbarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




const _c0 = function (a0) { return [a0]; };
function NavbarItemComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-item ", ctx_r0.itemBgClassTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.menu.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", ctx_r0.menu.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.menu.name);
} }
function NavbarItemComponent_li_1_wdi_navbar_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-navbar-item", 8);
} if (rf & 2) {
    const subMenu_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemBgClassTema", ctx_r2.itemBgClassTema)("menu", subMenu_r3);
} }
function NavbarItemComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarItemComponent_li_1_wdi_navbar_item_5_Template, 1, 2, "wdi-navbar-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("d-inline-block ", ctx_r1.itemBgClassTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", ctx_r1.menu.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.menu.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.itemBgClassTema);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("aria-labelledby", ctx_r1.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.menu.subMenus);
} }
class NavbarItemComponent {
    constructor() {
        this.itemBgClassTema = 'bg-dark';
    }
    ngOnInit() {
        let result = this.menu.name.replace(/\s/gi, "_");
        this.dropdownId = 'dropdownId_' + result;
    }
}
NavbarItemComponent.ɵfac = function NavbarItemComponent_Factory(t) { return new (t || NavbarItemComponent)(); };
NavbarItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarItemComponent, selectors: [["wdi-navbar-item"]], inputs: { itemBgClassTema: "itemBgClassTema", menu: "menu" }, decls: 2, vars: 2, consts: [[3, "class", 4, "ngIf"], ["ngbDropdown", "", 3, "class", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], ["openDelay", "600", 3, "ngbTooltip"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", 1, "nav-link", 3, "id"], ["ngbDropdownMenu", "", 3, "aria-labelledby"], [3, "itemBgClassTema", "menu", 4, "ngFor", "ngForOf"], [3, "itemBgClassTema", "menu"]], template: function NavbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarItemComponent_li_0_Template, 4, 8, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarItemComponent_li_1_Template, 6, 11, "li", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menu.subMenus || !ctx.menu.subMenus.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu.subMenus && ctx.menu.subMenus.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NavbarItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");





const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { active: a0 }; };
class AppComponent {
    constructor() {
        this.mainTitle = 'Wdison';
        this.wdiNavType = 'vertical';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["wdi-app"]], decls: 17, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-3"], [1, "navbar-brand", 3, "routerLink"], [1, "col-9", "text-right"], [1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-light", 3, "ngClass"], ["type", "radio", "value", "vertical", 3, "ngModel", "ngModelChange"], ["type", "radio", "value", "horizontal", 3, "ngModel", "ngModelChange"], [3, "mainTitle", "wdiNavType"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wdison APP CORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_11_listener($event) { return ctx.wdiNavType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_14_listener($event) { return ctx.wdiNavType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "wdi-navbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.wdiNavType == "vertical"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wdiNavType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.wdiNavType == "horizontal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wdiNavType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainTitle", ctx.mainTitle)("wdiNavType", ctx.wdiNavType);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TNsP":
/*!************************************************!*\
  !*** ./src/app/pages/emoji/emoji.component.ts ***!
  \************************************************/
/*! exports provided: EmojiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiComponent", function() { return EmojiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");



function EmojiComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const theme_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setTheme(theme_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", theme_r1 === ctx_r0.set);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r1, " ");
} }
class EmojiComponent {
    constructor() {
        this.themes = [
            'native',
            'apple',
            'google',
            'twitter',
            'facebook',
        ];
        this.darkMode = !!(typeof matchMedia === 'function' &&
            matchMedia('(prefers-color-scheme: dark)').matches);
        this.darkestMode = undefined;
        this.set = 'native';
        this.native = true;
        this.CUSTOM_EMOJIS = CUSTOM_EMOJIS;
    }
    ngOnInit() { }
    onEfeito() { }
    setTheme(set) {
        this.native = set === 'native';
        this.set = set;
    }
    setDarkmode(mode) {
        if (mode === undefined) {
            this.darkestMode = mode;
            this.darkMode = !!(typeof matchMedia === 'function' &&
                matchMedia('(prefers-color-scheme: dark)').matches);
        }
        else {
            this.darkMode = mode;
            this.darkestMode = mode;
        }
    }
    handleClick($event) {
        console.log($event.emoji);
    }
    emojiFilter(e) {
        // Can use this to test [emojisToShowFilter]
        if (e && e.indexOf && e.indexOf('1F4') >= 0) {
            return true;
        }
        return false;
    }
}
EmojiComponent.ɵfac = function EmojiComponent_Factory(t) { return new (t || EmojiComponent)(); };
EmojiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmojiComponent, selectors: [["wdi-emoji"]], decls: 23, vars: 12, consts: [[1, "form-group"], [1, "row", "mb-3", "mt-3", "text-center"], [1, "col-12"], [1, "row", "mb-1"], [1, "col-12", "text-center"], ["type", "button", "class", "btn btn-sm btn-light mr-1 mb-2", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-light", "mr-1", "mb-2", 3, "click"], [1, "row", "justify-content-center", "mb-3"], [1, "d-flex", "justify-content-center"], ["title", "Pick your emoji\u2026", "emoji", "point_up", 3, "set", "darkMode", "isNative", "hideRecent", "custom", "emojiSelect"]], template: function EmojiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Emoji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Angular Emoji Mart \u2728");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmojiComponent_button_10_Template, 2, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_Template_button_click_13_listener() { return ctx.setDarkmode(undefined); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " auto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_Template_button_click_15_listener() { return ctx.setDarkmode(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmojiComponent_Template_button_click_17_listener() { return ctx.setDarkmode(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "emoji-mart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emojiSelect", function EmojiComponent_Template_emoji_mart_emojiSelect_22_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.darkestMode === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.darkestMode === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.darkestMode === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("set", ctx.set)("darkMode", ctx.darkMode)("isNative", ctx.native)("hideRecent", false)("custom", ctx.CUSTOM_EMOJIS);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_2__["PickerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbW9qaS5jb21wb25lbnQuY3NzIn0= */"] });
const CUSTOM_EMOJIS = [
    {
        name: 'Party Parrot',
        shortNames: ['parrot'],
        keywords: ['party'],
        imageUrl: './assets/images/parrot.gif',
    },
    {
        name: 'Octocat',
        shortNames: ['octocat'],
        keywords: ['github'],
        imageUrl: 'https://github.githubassets.com/images/icons/emoji/octocat.png',
    },
    {
        name: 'Squirrel',
        shortNames: ['shipit', 'squirrel'],
        keywords: ['github'],
        imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
    },
];


/***/ }),

/***/ "YTTB":
/*!******************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-closeable/alert-closeable.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AlertCloseableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCloseableComponent", function() { return AlertCloseableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



function AlertCloseableComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AlertCloseableComponent_p_0_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r1.message);
} }
const ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'secondary',
        message: 'This is a secondary alert',
    }, {
        type: 'light',
        message: 'This is a light alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
class AlertCloseableComponent {
    constructor() {
        this.reset();
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    reset() {
        this.alerts = Array.from(ALERTS);
    }
}
AlertCloseableComponent.ɵfac = function AlertCloseableComponent_Factory(t) { return new (t || AlertCloseableComponent)(); };
AlertCloseableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertCloseableComponent, selectors: [["wdi-alert-closeable"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "type", "closed"]], template: function AlertCloseableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertCloseableComponent_p_0_Template, 3, 2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertCloseableComponent_Template_button_click_2_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/carousel/carousel.component */ "M26e");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/card/card.component */ "c7Ye");
/* harmony import */ var _navbar_navbar_horizontal_navbar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar-horizontal/navbar-horizontal.component */ "6TFz");
/* harmony import */ var _navbar_navbar_vertical_navbar_vertical_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar-vertical/navbar-vertical.component */ "jmjp");
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap-icons */ "n45d");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "KN7V");
/* harmony import */ var _pages_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/emoji/emoji.component */ "TNsP");
/* harmony import */ var _pages_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/icon/icon.component */ "9kjn");
/* harmony import */ var _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/outlet/outlet.component */ "klaT");
/* harmony import */ var _pages_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/accordion/accordion.component */ "GMrD");
/* harmony import */ var _navbar_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar-item/navbar-item.component */ "SsWB");
/* harmony import */ var _wdi_component_wdi_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wdi-component/wdi-component.module */ "KCxT");
/* harmony import */ var _wdi_component_exemple_exemple_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wdi-component/exemple/exemple.module */ "JJ5f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_11__["NgxBootstrapIconsModule"].pick(ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_11__["allIcons"]),
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_12__["PickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            // modules Internos
            ,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _wdi_component_wdi_component_module__WEBPACK_IMPORTED_MODULE_18__["WdiComponentModule"],
            _wdi_component_exemple_exemple_module__WEBPACK_IMPORTED_MODULE_19__["WdiExempleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _navbar_navbar_horizontal_navbar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["NavbarHorizontalComponent"],
        _navbar_navbar_vertical_navbar_vertical_component__WEBPACK_IMPORTED_MODULE_10__["NavbarVerticalComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
        _pages_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _pages_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_13__["EmojiComponent"],
        _pages_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"],
        _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_15__["OutletComponent"],
        _pages_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__["AccordionComponent"],
        _navbar_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_17__["NavbarItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_11__["NgxBootstrapIconsModule"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_12__["PickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
        // modules Internos
        ,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _wdi_component_wdi_component_module__WEBPACK_IMPORTED_MODULE_18__["WdiComponentModule"],
        _wdi_component_exemple_exemple_module__WEBPACK_IMPORTED_MODULE_19__["WdiExempleModule"]] }); })();


/***/ }),

/***/ "c7Ye":
/*!**********************************************!*\
  !*** ./src/app/pages/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.service */ "I5tC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap-icons */ "n45d");








const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "text-light bg-info border border-success": a0 }; };
class CardComponent {
    constructor(cardService) {
        this.continNext = false;
        this.continPrevious = false;
        this.wdiCard = false;
        this.wdiCardInputKey = '';
        this.cardService = cardService;
        this.cards = cardService.cards();
        this.index = 0;
        this.card = this.cards[this.index];
    }
    onKeyDownEvent(event) {
        let _cardInterval = 600;
        if ('ArrowRight' == event.key && !this.continNext) {
            this.continNext = true;
            this.continPrevious = false;
            this.next();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(_cardInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(() => this.continNext))
                .subscribe(item => {
                this.next();
            });
        }
        else if ('ArrowLeft' == event.key && !this.continPrevious) {
            this.continPrevious = true;
            this.continNext = false;
            this.previous();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(_cardInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(() => this.continPrevious))
                .subscribe(item => {
                this.previous();
            });
        }
        return true;
    }
    handleKeyboardEvent(event) {
        if (event.ctrlKey && 'c' == event.key.toLowerCase()) {
            this.efeito = false;
            this.wdiCard = false;
            this.onWdiCard();
        }
        else if ('ArrowRight' == event.key)
            // this.next();
            this.continNext = false;
        else if ('ArrowLeft' == event.key)
            // this.previous();
            this.continPrevious = false;
        else if (event.key != 'Control') {
            this.wdiCardInputKey += event.key.toLowerCase();
            let tamStr = 6;
            if (this.wdiCardInputKey.length > tamStr)
                this.wdiCardInputKey = this.wdiCardInputKey.substr(this.wdiCardInputKey.length - tamStr);
            if (this.wdiCardInputKey == 'wdison') {
                this.efeito = true;
                this.wdiCard = true;
                this.onWdiCard();
            }
        }
        return true;
    }
    ngOnInit() { }
    previous() {
        this.index--;
        this.prepareCard();
    }
    next() {
        this.index++;
        this.prepareCard();
    }
    prepareCard() {
        if (this.index >= this.cards.length)
            this.index = 0;
        if (this.index < 0)
            this.index = this.cards.length - 1;
        this.card = this.cards[this.index];
    }
    onWdiCard() {
        this.index = 0;
        if (this.wdiCard) {
            // this.cards = this.cardService.efectsCards_Old();
            this.cardService.efectsCards().then(cards => {
                this.cards = cards;
                this.prepareCard();
            });
        }
        else {
            this.cards = this.cardService.cards();
        }
        this.prepareCard();
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["wdi-card"]], hostBindings: function CardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function CardComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDownEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("keyup", function CardComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 28, vars: 11, consts: [[1, "form-group"], [1, "btn-group-toggle"], ["ngbTooltip", "Efeito wdison:ctrl-c", 1, "btn", "btn-light", 3, "ngClass"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "justify-content-center"], [1, "col-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-footer"], ["href", "", 1, "card-link", "btn", "btn-primary", 3, "click"], ["name", "skip-start"], ["name", "skip-end"], [1, "card-body", 3, "ngClass"], [1, "card-text"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CardComponent_Template_input_ngModelChange_5_listener($event) { return ctx.efeito = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Efeito ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_Template_button_click_17_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i-bs", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_Template_button_click_20_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Pr\u00F3ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i-bs", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.efeito));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.efeito);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx.efeito));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.card.obs);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["NgxBootstrapIconsLibComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "d3Jz":
/*!****************************************!*\
  !*** ./src/app/navbar/menu.service.ts ***!
  \****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "fzN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuService {
    constructor() {
        this.maisInterno = [
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Interno 1', 'interno1'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Interno 2', 'interno2'),
        ];
        this.outros = [
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Outros 1', 'outros1'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Outros 2', 'outros2'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Outros Mais Interno', 'interno', '', this.maisInterno),
        ];
        this.subMenuNgBootstrap = [
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Accordion', 'accordion'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Carousel', 'carousel'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Alert', 'alert'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Outros', 'outros', '', this.outros),
        ];
        this.menus = [
            // new Menu('Home','home'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Card', 'card'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Emoji', 'emoji'),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Ng Bootstrap', '', '', this.subMenuNgBootstrap),
            new _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]('Icon', 'icon'),
        ];
    }
    getMenus() {
        return this.menus;
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eIIb":
/*!**********************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-basic/alert-basic.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AlertBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBasicComponent", function() { return AlertBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class AlertBasicComponent {
}
AlertBasicComponent.ɵfac = function AlertBasicComponent_Factory(t) { return new (t || AlertBasicComponent)(); };
AlertBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertBasicComponent, selectors: [["wdi-alert-basic"]], decls: 5, vars: 1, consts: [[3, "dismissible"]], template: function AlertBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Warning!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Better check yourself, you're not looking too good. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlert"]], encapsulation: 2 });


/***/ }),

/***/ "f9jn":
/*!***************************************************!*\
  !*** ./src/app/wdi-component/card/card.module.ts ***!
  \***************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component */ "C7qr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]] }); })();


/***/ }),

/***/ "fzN8":
/*!********************************!*\
  !*** ./src/app/navbar/menu.ts ***!
  \********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
class Menu {
    constructor(name, link = '', tooltip = '', subMenus = []) {
        this.name = name;
        this.link = link || name;
        this.tooltip = tooltip || name;
        this.subMenus = subMenus;
    }
}


/***/ }),

/***/ "jmjp":
/*!*********************************************************************!*\
  !*** ./src/app/navbar/navbar-vertical/navbar-vertical.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavbarVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarVerticalComponent", function() { return NavbarVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap-icons */ "n45d");
/* harmony import */ var _navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-item/navbar-item.component */ "SsWB");
/* harmony import */ var _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home/outlet/outlet.component */ "klaT");







const _c0 = function () { return ["/"]; };
function NavbarVerticalComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", ctx_r0.mainTitleTooltip)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.mainTitle, " ");
} }
function NavbarVerticalComponent_i_bs_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-bs", 12);
} }
function NavbarVerticalComponent_i_bs_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-bs", 13);
} }
function NavbarVerticalComponent_wdi_navbar_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-navbar-item", 14);
} if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemBgClassTema", "bg-dark")("menu", menu_r5);
} }
function NavbarVerticalComponent_wdi_outlet_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-outlet");
} }
const _c1 = function (a0) { return { "show": a0 }; };
class NavbarVerticalComponent {
    constructor() {
        this.navbarOpen = false;
        this.menuActive = true;
        this.classMainMenu = 'col-1';
        this.classMainContent = 'col-11';
    }
    ngOnInit() { }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
        if (this.navbarOpen) {
            this.classMainMenu = 'col-3';
            this.classMainContent = 'col-9';
        }
        else {
            this.classMainMenu = 'col-1';
            this.classMainContent = 'col-11';
        }
    }
}
NavbarVerticalComponent.ɵfac = function NavbarVerticalComponent_Factory(t) { return new (t || NavbarVerticalComponent)(); };
NavbarVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarVerticalComponent, selectors: [["wdi-navbar-vertical"]], inputs: { mainTitle: "mainTitle", mainTitleTooltip: "mainTitleTooltip", menus: "menus" }, decls: 12, vars: 10, consts: [[1, "row"], [3, "ngClass"], [1, "navbar", "navbar-inverse", "navbar-dark", "bg-dark"], ["class", "navbar-brand", 3, "ngbTooltip", "routerLink", 4, "ngIf"], ["type", "button", "ngbPopover", "Menu lateral de sistema Wdi", "triggers", "mouseenter:mouseleave", "popoverTitle", "Wdi Menu", "openDelay", "600", 1, "navbar-toggler", "btn-outline-secondary", 3, "click"], ["name", "backspace", 4, "ngIf"], ["name", "menu-button-wide", 4, "ngIf"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [3, "itemBgClassTema", "menu", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "navbar-brand", 3, "ngbTooltip", "routerLink"], ["name", "backspace"], ["name", "menu-button-wide"], [3, "itemBgClassTema", "menu"]], template: function NavbarVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarVerticalComponent_a_3_Template, 2, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarVerticalComponent_Template_button_click_4_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarVerticalComponent_i_bs_5_Template, 1, 0, "i-bs", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarVerticalComponent_i_bs_6_Template, 1, 0, "i-bs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarVerticalComponent_wdi_navbar_item_9_Template, 1, 2, "wdi-navbar-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarVerticalComponent_wdi_outlet_11_Template, 1, 0, "wdi-outlet", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMainMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.navbarOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMainContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapIconsLibComponent"], _navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_5__["NavbarItemComponent"], _home_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_6__["OutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItdmVydGljYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "d3Jz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_vertical_navbar_vertical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-vertical/navbar-vertical.component */ "jmjp");
/* harmony import */ var _navbar_horizontal_navbar_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-horizontal/navbar-horizontal.component */ "6TFz");





function NavbarComponent_wdi_navbar_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-navbar-vertical", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainTitle", ctx_r0.mainTitle)("mainTitleTooltip", ctx_r0.mainTitle + " Home")("menus", ctx_r0.menus);
} }
function NavbarComponent_wdi_navbar_horizontal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wdi-navbar-horizontal", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainTitle", ctx_r1.mainTitle)("mainTitleTooltip", ctx_r1.mainTitle + " Home")("menus", ctx_r1.menus);
} }
class NavbarComponent {
    constructor(menuService) {
        this.navbarOpen = false;
        this.menus = menuService.getMenus();
    }
    ngOnInit() {
        this.wdiNavType = this.wdiNavType || 'horizontal';
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["wdi-navbar"]], inputs: { mainTitle: "mainTitle", wdiNavType: "wdiNavType" }, decls: 2, vars: 2, consts: [[3, "mainTitle", "mainTitleTooltip", "menus", 4, "ngIf"], [3, "mainTitle", "mainTitleTooltip", "menus"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_wdi_navbar_vertical_0_Template, 1, 3, "wdi-navbar-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_wdi_navbar_horizontal_1_Template, 1, 3, "wdi-navbar-horizontal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wdiNavType == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wdiNavType == "horizontal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _navbar_vertical_navbar_vertical_component__WEBPACK_IMPORTED_MODULE_3__["NavbarVerticalComponent"], _navbar_horizontal_navbar_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["NavbarHorizontalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "klaT":
/*!*************************************************!*\
  !*** ./src/app/home/outlet/outlet.component.ts ***!
  \*************************************************/
/*! exports provided: OutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletComponent", function() { return OutletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class OutletComponent {
    constructor() { }
    ngOnInit() {
    }
}
OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(); };
OutletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutletComponent, selectors: [["wdi-outlet"]], decls: 1, vars: 0, template: function OutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRsZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "nRKy":
/*!************************************!*\
  !*** ./src/app/pages/card/card.ts ***!
  \************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(message, obs = undefined, title = undefined, subtitle = undefined) {
        this.title = 'Cartão de Wdison';
        this.subtitle = 'Entenda';
        this.obs = 'Obs: Confiança é o que importa.';
        this.message = message;
        this.obs = obs || this.obs;
        this.title = title || this.title;
        this.subtitle = subtitle || this.subtitle;
    }
}


/***/ }),

/***/ "pNg9":
/*!*******************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-selfclosing/alert-selfclosing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AlertSelfclosingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertSelfclosingModule", function() { return AlertSelfclosingModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-selfclosing.component */ "68+/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertSelfclosingModule {
}
AlertSelfclosingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlertSelfclosingModule, bootstrap: [_alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_2__["AlertSelfclosingComponent"]] });
AlertSelfclosingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AlertSelfclosingModule_Factory(t) { return new (t || AlertSelfclosingModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertSelfclosingModule, { declarations: [_alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_2__["AlertSelfclosingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]], exports: [_alert_selfclosing_component__WEBPACK_IMPORTED_MODULE_2__["AlertSelfclosingComponent"]] }); })();


/***/ }),

/***/ "tRZz":
/*!*******************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-custom/index.ts ***!
  \*******************************************************************/
/*! exports provided: AlertCustomComponent, AlertCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-custom.component */ "vz/Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertCustomComponent", function() { return _alert_custom_component__WEBPACK_IMPORTED_MODULE_0__["AlertCustomComponent"]; });

/* harmony import */ var _alert_custom_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-custom.module */ "HCyH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertCustomModule", function() { return _alert_custom_module__WEBPACK_IMPORTED_MODULE_1__["AlertCustomModule"]; });





/***/ }),

/***/ "vJFK":
/*!*********************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-config/alert-config.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AlertConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfigModule", function() { return AlertConfigModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _alert_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-config.component */ "DWcg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertConfigModule {
}
AlertConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AlertConfigModule, bootstrap: [_alert_config_component__WEBPACK_IMPORTED_MODULE_2__["AlertConfigComponent"]] });
AlertConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AlertConfigModule_Factory(t) { return new (t || AlertConfigModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertConfigModule, { declarations: [_alert_config_component__WEBPACK_IMPORTED_MODULE_2__["AlertConfigComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]], exports: [_alert_config_component__WEBPACK_IMPORTED_MODULE_2__["AlertConfigComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _pages_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/carousel/carousel.component */ "M26e");
/* harmony import */ var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/card/card.component */ "c7Ye");
/* harmony import */ var _pages_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/emoji/emoji.component */ "TNsP");
/* harmony import */ var _pages_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/icon/icon.component */ "9kjn");
/* harmony import */ var _pages_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/accordion/accordion.component */ "GMrD");
/* harmony import */ var _wdi_component_exemple_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wdi-component/exemple/alert */ "yW1S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "card", component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: "carousel", component: _pages_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"] },
    { path: "emoji", component: _pages_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_4__["EmojiComponent"] },
    { path: "icon", component: _pages_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"] },
    { path: "accordion", component: _pages_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_6__["AccordionComponent"] },
    { path: "alert", component: _wdi_component_exemple_alert__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"] },
    { path: "**", redirectTo: "/", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vz/Z":
/*!************************************************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/alert-custom/alert-custom.component.ts ***!
  \************************************************************************************/
/*! exports provided: AlertCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCustomComponent", function() { return AlertCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class AlertCustomComponent {
}
AlertCustomComponent.ɵfac = function AlertCustomComponent_Factory(t) { return new (t || AlertCustomComponent)(); };
AlertCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertCustomComponent, selectors: [["wdi-alert-custom"]], decls: 5, vars: 1, consts: [["type", "custom", 3, "dismissible"]], template: function AlertCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Whoa!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is a custom alert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlert"]], styles: ["[_nghost-%COMP%]     .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }"] });


/***/ }),

/***/ "wp0U":
/*!**************************************************!*\
  !*** ./src/app/service/github/github.service.ts ***!
  \**************************************************/
/*! exports provided: GitHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubService", function() { return GitHubService; });
/* harmony import */ var github_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! github-api */ "AmLT");
/* harmony import */ var github_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(github_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
// import * as GitHubLib from 'github-api/dist/GitHub';
// import {GitHub} from 'github-api/dist/GitHub';



class GitHubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.github = new github_api__WEBPACK_IMPORTED_MODULE_0___default.a({ username: 'wdison', password: '159f2ea63a98ee2d83dc3fd1ff61bf083f7aa5d4' });
        this.bagRepo = this.github.getRepo('wdison', 'bag');
    }
    read(fileName) {
        let fileNameFull = 'json/' + fileName;
        const promise = this.bagRepo.getContents('master', fileNameFull);
        return promise.then((valor) => {
            console.log(valor);
            return this.httpClient.get(valor.data.download_url).toPromise();
        });
    }
    write(fileName, fileContent, commitMsg = '') {
        let fileNameFull = 'json/' + fileName;
        let initialMessage = commitMsg || 'Commit de ' + fileNameFull;
        const promise = this.bagRepo.writeFile('master', fileNameFull, fileContent, initialMessage);
        promise.then((valor) => {
            console.log(valor);
        });
    }
}
GitHubService.ɵfac = function GitHubService_Factory(t) { return new (t || GitHubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GitHubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GitHubService, factory: GitHubService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xNYv":
/*!*********************************************!*\
  !*** ./src/app/wdi-component/card/index.ts ***!
  \*********************************************/
/*! exports provided: CardModule, CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.module */ "f9jn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_module__WEBPACK_IMPORTED_MODULE_0__["CardModule"]; });

/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component */ "C7qr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return _card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]; });





/***/ }),

/***/ "yW1S":
/*!******************************************************!*\
  !*** ./src/app/wdi-component/exemple/alert/index.ts ***!
  \******************************************************/
/*! exports provided: AlertModule, AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.module */ "8Z9u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "5cbr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });





/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map