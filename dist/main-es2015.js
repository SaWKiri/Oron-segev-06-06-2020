(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");





const routes = [
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
    },
    {
        path: 'weather',
        loadChildren: () => __webpack_require__.e(/*! import() | weatherModule-weather-module */ "weatherModule-weather-module").then(__webpack_require__.bind(null, /*! ./weatherModule/weather.module */ "./src/app/weatherModule/weather.module.ts")).then(m => m.WeatherModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'WeatherApp';
        this.isDark = false;
    }
    get themeMode() {
        return this.isDark ? 'unicorn-dark-theme' : 'theme';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.themeMode);
    } }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { themeMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _weatherModule_interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weatherModule/interceptors */ "./src/app/weatherModule/interceptors/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_weatherModule_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                ],
                providers: [_weatherModule_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/weatherModule/interceptors/constData.ts":
/*!*********************************************************!*\
  !*** ./src/app/weatherModule/interceptors/constData.ts ***!
  \*********************************************************/
/*! exports provided: autocomplete, currentCondition, currentConditionTelAviv, currentCondition3431644, currentCondition325876, forcast, geoPositionSearchKriyatAtidim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCondition", function() { return currentCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentConditionTelAviv", function() { return currentConditionTelAviv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCondition3431644", function() { return currentCondition3431644; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCondition325876", function() { return currentCondition325876; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forcast", function() { return forcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoPositionSearchKriyatAtidim", function() { return geoPositionSearchKriyatAtidim; });
const autocomplete = [
    {
        AdministrativeArea: { ID: 'TA', LocalizedName: 'Tel Aviv' },
        Country: { ID: 'IL', LocalizedName: 'Israel' },
        Key: '215854',
        LocalizedName: 'Tel Aviv',
        Rank: 31,
        Type: 'City',
        Version: 1,
    },
    {
        AdministrativeArea: { ID: 'JA', LocalizedName: 'Jambi' },
        Country: { ID: 'ID', LocalizedName: 'Indonesia' },
        Key: '3431644',
        LocalizedName: 'Telanaipura',
        Rank: 45,
        Type: 'City',
        Version: 1,
    },
    {
        AdministrativeArea: { ID: 'TFW', LocalizedName: 'Telford and Wrekin' },
        Country: { ID: 'GB', LocalizedName: 'United Kingdom' },
        Key: '325876',
        LocalizedName: 'Telford',
        Rank: 51,
        Type: 'City',
        Version: 1,
    },
];
const currentCondition = {
    LocalObservationDateTime: new Date('2020-07-09T13:15:00+03:00'),
    EpochTime: 1594289700,
    WeatherText: 'Partly sunny',
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
        Metric: {
            Value: 29.9,
            Unit: 'C',
            UnitType: 17,
        },
        Imperial: {
            Value: 86,
            Unit: 'F',
            UnitType: 18,
        },
    },
    MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
};
const currentConditionTelAviv = {
    LocalObservationDateTime: '2020-07-19T00:16:00+03:00',
    EpochTime: 1595106960,
    WeatherText: 'Clear',
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
        Metric: { Value: 25.3, Unit: 'C', UnitType: 17 },
        Imperial: { Value: 78, Unit: 'F', UnitType: 18 },
    },
    MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
};
const currentCondition3431644 = {
    LocalObservationDateTime: '2020-07-19T04:25:00+07:00',
    EpochTime: 1595107500,
    WeatherText: 'Some clouds',
    WeatherIcon: 36,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
        Metric: { Value: 24.4, Unit: 'C', UnitType: 17 },
        Imperial: { Value: 76, Unit: 'F', UnitType: 18 },
    },
    MobileLink: 'http://m.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us',
    Link: 'http://www.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us',
};
const currentCondition325876 = {
    LocalObservationDateTime: '2020-07-19T05:25:00+08:00',
    EpochTime: 1595107500,
    WeatherText: 'Rain',
    WeatherIcon: 18,
    HasPrecipitation: true,
    PrecipitationType: 'Rain',
    IsDayTime: false,
    Temperature: {
        Metric: { Value: 27.2, Unit: 'C', UnitType: 17 },
        Imperial: { Value: 81, Unit: 'F', UnitType: 18 },
    },
    MobileLink: 'http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us',
    Link: 'http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us',
};
const forcast = {
    Headline: {
        EffectiveDate: '2020-07-11T08:00:00+03:00',
        EffectiveEpochDate: 1594443600,
        Severity: 4,
        Text: 'Pleasant this weekend',
        Category: 'mild',
        EndDate: null,
        EndEpochDate: null,
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    },
    DailyForecasts: [
        {
            Date: '2020-07-08T07:00:00+03:00',
            EpochDate: 1594180800,
            Temperature: {
                Minimum: {
                    Value: 75.0,
                    Unit: 'F',
                    UnitType: 18,
                },
                Maximum: {
                    Value: 86.0,
                    Unit: 'F',
                    UnitType: 18,
                },
            },
            Day: {
                Icon: 1,
                IconPhrase: 'Sunny',
                HasPrecipitation: false,
            },
            Night: {
                Icon: 34,
                IconPhrase: 'Mostly clear',
                HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
        },
        {
            Date: '2020-07-09T07:00:00+03:00',
            EpochDate: 1594267200,
            Temperature: {
                Minimum: {
                    Value: 72.0,
                    Unit: 'F',
                    UnitType: 18,
                },
                Maximum: {
                    Value: 86.0,
                    Unit: 'F',
                    UnitType: 18,
                },
            },
            Day: {
                Icon: 2,
                IconPhrase: 'Mostly sunny',
                HasPrecipitation: false,
            },
            Night: {
                Icon: 34,
                IconPhrase: 'Mostly clear',
                HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        },
        {
            Date: '2020-07-10T07:00:00+03:00',
            EpochDate: 1594353600,
            Temperature: {
                Minimum: {
                    Value: 74.0,
                    Unit: 'F',
                    UnitType: 18,
                },
                Maximum: {
                    Value: 86.0,
                    Unit: 'F',
                    UnitType: 18,
                },
            },
            Day: {
                Icon: 1,
                IconPhrase: 'Sunny',
                HasPrecipitation: false,
            },
            Night: {
                Icon: 34,
                IconPhrase: 'Mostly clear',
                HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        },
        {
            Date: '2020-07-11T07:00:00+03:00',
            EpochDate: 1594440000,
            Temperature: {
                Minimum: {
                    Value: 78.0,
                    Unit: 'F',
                    UnitType: 18,
                },
                Maximum: {
                    Value: 87.0,
                    Unit: 'F',
                    UnitType: 18,
                },
            },
            Day: {
                Icon: 2,
                IconPhrase: 'Mostly sunny',
                HasPrecipitation: false,
            },
            Night: {
                Icon: 35,
                IconPhrase: 'Partly cloudy',
                HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        },
        {
            Date: '2020-07-12T07:00:00+03:00',
            EpochDate: 1594526400,
            Temperature: {
                Minimum: {
                    Value: 76.0,
                    Unit: 'F',
                    UnitType: 18,
                },
                Maximum: {
                    Value: 87.0,
                    Unit: 'F',
                    UnitType: 18,
                },
            },
            Day: {
                Icon: 2,
                IconPhrase: 'Mostly sunny',
                HasPrecipitation: false,
            },
            Night: {
                Icon: 35,
                IconPhrase: 'Partly cloudy',
                HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        },
    ],
};
const geoPositionSearchKriyatAtidim = {
    Version: 1,
    Key: '215805',
    Type: 'City',
    Rank: 95,
    LocalizedName: 'Kiryat Atidim',
    EnglishName: 'Kiryat Atidim',
    PrimaryPostalCode: '',
    Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East',
    },
    Country: { ID: 'IL', LocalizedName: 'Israel', EnglishName: 'Israel' },
    AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL',
    },
    TimeZone: {
        Code: 'IDT',
        Name: 'Asia/Jerusalem',
        GmtOffset: 3,
        IsDaylightSaving: true,
        NextOffsetChange: '2020-10-24T23:00:00Z',
    },
    GeoPosition: {
        Latitude: 32.117,
        Longitude: 34.845,
        Elevation: {
            Metric: { Value: 47, Unit: 'm', UnitType: 5 },
            Imperial: { Value: 154, Unit: 'ft', UnitType: 0 },
        },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'ForecastConfidence',
    ],
};


/***/ }),

/***/ "./src/app/weatherModule/interceptors/fakeBackEnd.interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/weatherModule/interceptors/fakeBackEnd.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: FakeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeInterceptor", function() { return FakeInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constData */ "./src/app/weatherModule/interceptors/constData.ts");





class FakeInterceptor {
    constructor() {
        this.baseUrl = 'dataservice.accuweather.com';
    }
    intercept(req, next) {
        if (!req.url.includes(this.baseUrl)) {
            return next.handle(req);
        }
        console.warn('FakeInterceptor');
        if (req.url.includes('/cities/geoposition/search')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["geoPositionSearchKriyatAtidim"] }));
        }
        if (req.url.includes('/cities/autocomplete')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["autocomplete"] }));
        }
        if (req.url.includes('/daily/5day/')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["forcast"] }));
        }
        if (req.url.includes('/currentconditions/v1/') && req.url.includes('215805')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["currentConditionTelAviv"] }));
        }
        if (req.url.includes('/currentconditions/v1/') && req.url.includes('3431644')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["currentCondition3431644"] }));
        }
        if (req.url.includes('/currentconditions/v1/') && req.url.includes('3431644')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["currentCondition325876"] }));
        }
        if (req.url.includes('/currentconditions/v1/')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _constData__WEBPACK_IMPORTED_MODULE_3__["currentCondition"] }));
        }
        return next.handle(req);
    }
}
FakeInterceptor.ɵfac = function FakeInterceptor_Factory(t) { return new (t || FakeInterceptor)(); };
FakeInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeInterceptor, factory: FakeInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/weatherModule/interceptors/httpErrorHandler.interceptor.ts":
/*!****************************************************************************!*\
  !*** ./src/app/weatherModule/interceptors/httpErrorHandler.interceptor.ts ***!
  \****************************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





class HttpErrorInterceptor {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('this is client side error');
                errorMsg = `Error: ${error.error.message}`;
                this.toastr.error(errorMsg, 'Error');
            }
            else {
                console.log('this is server side error');
                if (error.status === 503) {
                    errorMsg = `Error Code: ${error.status},  Message: Maximum requests reach. please try later`;
                }
                else {
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                this.toastr.error(errorMsg, 'Error');
            }
            console.log(errorMsg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMsg);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/weatherModule/interceptors/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/weatherModule/interceptors/index.ts ***!
  \*****************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fakeBackEnd_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fakeBackEnd.interceptor */ "./src/app/weatherModule/interceptors/fakeBackEnd.interceptor.ts");
/* harmony import */ var _httpErrorHandler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpErrorHandler.interceptor */ "./src/app/weatherModule/interceptors/httpErrorHandler.interceptor.ts");



const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _fakeBackEnd_interceptor__WEBPACK_IMPORTED_MODULE_1__["FakeInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _httpErrorHandler_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpErrorInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 5, vars: 0, consts: [[1, "content"], ["routerLink", "/weather"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome To My Awsome Weather App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go To WeatherApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false,
    apiUrl: 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com',
    API_KEY: 'd8bTUfXaTWlLQLJlcmgFvEWUbWO6nczd',
    DefaultLocation: { lat: 32.109333, lon: 34.855499 },
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/blacky/Programming/weather-app/weather-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map