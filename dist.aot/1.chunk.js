webpackJsonp([1,6],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_my_my_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout_media_query_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_shared_shared_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_my_routing_my_routing_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_media_query_breakpoints_break_point_registry__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout_media_query_match_media__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_typings_index_ngfactory__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__qna_my_questions_component_ngfactory__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__qna_qna_upsert_component_ngfactory__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_flex_layout_media_query_breakpoints_break_points_provider__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_flex_layout_media_query_media_monitor_provider__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout_media_query_media_monitor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout_media_query_observable_media_provider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_observable_media__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_my_qna_my_questions_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_core_services_auth_guard__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_my_qna_qna_upsert_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_flex_layout_media_query_breakpoints_break_points_token__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModuleNgFactory", function() { return MyModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


























var MyModuleInjector = (function (_super) {
    __extends(MyModuleInjector, _super);
    function MyModuleInjector(parent) {
        return _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_typings_index_ngfactory__["a" /* MdSnackBarContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_typings_index_ngfactory__["b" /* SimpleSnackBarNgFactory */],
            __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_typings_index_ngfactory__["c" /* MdDialogContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_13__qna_my_questions_component_ngfactory__["a" /* MyQuestionsComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_14__qna_qna_upsert_component_ngfactory__["a" /* QnaUpsertComponentNgFactory */]
        ], []) || this;
    }
    Object.defineProperty(MyModuleInjector.prototype, "_NgLocalization_35", {
        get: function () {
            if ((this.__NgLocalization_35 == null)) {
                (this.__NgLocalization_35 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_FormBuilder_36", {
        get: function () {
            if ((this.__FormBuilder_36 == null)) {
                (this.__FormBuilder_36 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]());
            }
            return this.__FormBuilder_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_\u0275i_37", {
        get: function () {
            if ((this.__ɵi_37 == null)) {
                (this.__ɵi_37 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ɵi */]());
            }
            return this.__ɵi_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_Platform_38", {
        get: function () {
            if ((this.__Platform_38 == null)) {
                (this.__Platform_38 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* Platform */]());
            }
            return this.__Platform_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_InteractivityChecker_39", {
        get: function () {
            if ((this.__InteractivityChecker_39 == null)) {
                (this.__InteractivityChecker_39 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* InteractivityChecker */](this._Platform_38));
            }
            return this.__InteractivityChecker_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_FocusTrapFactory_40", {
        get: function () {
            if ((this.__FocusTrapFactory_40 == null)) {
                (this.__FocusTrapFactory_40 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* FocusTrapFactory */](this._InteractivityChecker_39, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__FocusTrapFactory_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_LiveAnnouncer_41", {
        get: function () {
            if ((this.__LiveAnnouncer_41 == null)) {
                (this.__LiveAnnouncer_41 = __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* ɵg */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* LiveAnnouncer */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */], null), this._Platform_38));
            }
            return this.__LiveAnnouncer_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_ScrollDispatcher_42", {
        get: function () {
            if ((this.__ScrollDispatcher_42 == null)) {
                (this.__ScrollDispatcher_42 = __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* ɵd */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* ScrollDispatcher */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */]), this._Platform_38));
            }
            return this.__ScrollDispatcher_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_OverlayContainer_43", {
        get: function () {
            if ((this.__OverlayContainer_43 == null)) {
                (this.__OverlayContainer_43 = __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* ɵb */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* OverlayContainer */], null)));
            }
            return this.__OverlayContainer_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_\u0275o_44", {
        get: function () {
            if ((this.__ɵo_44 == null)) {
                (this.__ɵo_44 = __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* ɵp */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* ɵo */], null), this._ScrollDispatcher_42));
            }
            return this.__ɵo_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_\u0275r_45", {
        get: function () {
            if ((this.__ɵr_45 == null)) {
                (this.__ɵr_45 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* ɵr */](this._ɵo_44));
            }
            return this.__ɵr_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_Overlay_46", {
        get: function () {
            if ((this.__Overlay_46 == null)) {
                (this.__Overlay_46 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* Overlay */](this._OverlayContainer_43, this.componentFactoryResolver, this._ɵr_45, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ApplicationRef */]), this, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__Overlay_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_MdIconRegistry_47", {
        get: function () {
            if ((this.__MdIconRegistry_47 == null)) {
                (this.__MdIconRegistry_47 = __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* ICON_REGISTRY_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdIconRegistry */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* Http */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["q" /* DomSanitizer */])));
            }
            return this.__MdIconRegistry_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_FocusOriginMonitor_48", {
        get: function () {
            if ((this.__FocusOriginMonitor_48 == null)) {
                (this.__FocusOriginMonitor_48 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* FocusOriginMonitor */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */]), this._Platform_38));
            }
            return this.__FocusOriginMonitor_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_MdSnackBar_49", {
        get: function () {
            if ((this.__MdSnackBar_49 == null)) {
                (this.__MdSnackBar_49 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdSnackBar */](this._Overlay_46, this._LiveAnnouncer_41, this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdSnackBar */], null)));
            }
            return this.__MdSnackBar_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_MdDialog_50", {
        get: function () {
            if ((this.__MdDialog_50 == null)) {
                (this.__MdDialog_50 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdDialog */](this._Overlay_46, this, this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdDialog */], null)));
            }
            return this.__MdDialog_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_BREAKPOINTS_51", {
        get: function () {
            if ((this.__BREAKPOINTS_51 == null)) {
                (this.__BREAKPOINTS_51 = __WEBPACK_IMPORTED_MODULE_17__angular_flex_layout_media_query_breakpoints_break_points_provider__["a" /* DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */]());
            }
            return this.__BREAKPOINTS_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_BreakPointRegistry_52", {
        get: function () {
            if ((this.__BreakPointRegistry_52 == null)) {
                (this.__BreakPointRegistry_52 = new __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_media_query_breakpoints_break_point_registry__["a" /* BreakPointRegistry */](this._BREAKPOINTS_51));
            }
            return this.__BreakPointRegistry_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_MatchMedia_53", {
        get: function () {
            if ((this.__MatchMedia_53 == null)) {
                (this.__MatchMedia_53 = new __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout_media_query_match_media__["a" /* MatchMedia */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__MatchMedia_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_MediaMonitor_54", {
        get: function () {
            if ((this.__MediaMonitor_54 == null)) {
                (this.__MediaMonitor_54 = __WEBPACK_IMPORTED_MODULE_18__angular_flex_layout_media_query_media_monitor_provider__["a" /* MEDIA_MONITOR_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_19__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */], null), this._BreakPointRegistry_52, this._MatchMedia_53));
            }
            return this.__MediaMonitor_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyModuleInjector.prototype, "_ObservableMedia_55", {
        get: function () {
            if ((this.__ObservableMedia_55 == null)) {
                (this.__ObservableMedia_55 = __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout_media_query_observable_media_provider__["a" /* OBSERVABLE_MEDIA_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_observable_media__["a" /* ObservableMedia */], null), this._MatchMedia_53, this._BreakPointRegistry_52));
            }
            return this.__ObservableMedia_55;
        },
        enumerable: true,
        configurable: true
    });
    MyModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]();
        this._ɵba_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ɵba */]();
        this._ReactiveFormsModule_2 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]();
        this._MATERIAL_SANITY_CHECKS_3 = true;
        this._CompatibilityModule_4 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* CompatibilityModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["c" /* DOCUMENT */], null), this._MATERIAL_SANITY_CHECKS_3);
        this._MdCommonModule_5 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MdCommonModule */]();
        this._MdToolbarModule_6 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdToolbarModule */]();
        this._PlatformModule_7 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* PlatformModule */]();
        this._A11yModule_8 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* A11yModule */]();
        this._PortalModule_9 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* PortalModule */]();
        this._ɵm_10 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* ɵm */]();
        this._OverlayModule_11 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* OverlayModule */]();
        this._MdSidenavModule_12 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MdSidenavModule */]();
        this._MdIconModule_13 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MdIconModule */]();
        this._MdLineModule_14 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MdLineModule */]();
        this._MdRippleModule_15 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MdRippleModule */]();
        this._MdListModule_16 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MdListModule */]();
        this._MdCardModule_17 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MdCardModule */]();
        this._MdChipsModule_18 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MdChipsModule */]();
        this._FormsModule_19 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */]();
        this._MdInputModule_20 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MdInputModule */]();
        this._MdSelectionModule_21 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MdSelectionModule */]();
        this._MdOptionModule_22 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["K" /* MdOptionModule */]();
        this._MdSelectModule_23 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["L" /* MdSelectModule */]();
        this._StyleModule_24 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["M" /* StyleModule */]();
        this._MdButtonModule_25 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["N" /* MdButtonModule */]();
        this._MdCheckboxModule_26 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["O" /* MdCheckboxModule */]();
        this._MdSnackBarModule_27 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["P" /* MdSnackBarModule */]();
        this._MdDialogModule_28 = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["Q" /* MdDialogModule */]();
        this._MediaQueriesModule_29 = new __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout_media_query_module__["a" /* MediaQueriesModule */]();
        this._FlexLayoutModule_30 = new __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_module__["a" /* FlexLayoutModule */]();
        this._SharedModule_31 = new __WEBPACK_IMPORTED_MODULE_7__app_shared_shared_module__["a" /* SharedModule */]();
        this._RouterModule_32 = new __WEBPACK_IMPORTED_MODULE_8__angular_router__["q" /* RouterModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_8__angular_router__["r" /* ɵa */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_8__angular_router__["j" /* Router */], null));
        this._MyRoutingModule_33 = new __WEBPACK_IMPORTED_MODULE_9__app_my_routing_my_routing_module__["a" /* MyRoutingModule */]();
        this._MyModule_34 = new __WEBPACK_IMPORTED_MODULE_1__app_my_my_module__["a" /* MyModule */]();
        this._ROUTES_56 = [[
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_22__app_my_qna_my_questions_component__["a" /* MyQuestionsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_23__app_core_services_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_24__app_my_qna_qna_upsert_component__["a" /* QnaUpsertComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_23__app_core_services_auth_guard__["a" /* AuthGuard */]]
                }
            ]
        ];
        return this._MyModule_34;
    };
    MyModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ɵba */])) {
            return this._ɵba_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["R" /* MATERIAL_SANITY_CHECKS */])) {
            return this._MATERIAL_SANITY_CHECKS_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* CompatibilityModule */])) {
            return this._CompatibilityModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MdCommonModule */])) {
            return this._MdCommonModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdToolbarModule */])) {
            return this._MdToolbarModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* PlatformModule */])) {
            return this._PlatformModule_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* A11yModule */])) {
            return this._A11yModule_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* PortalModule */])) {
            return this._PortalModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* ɵm */])) {
            return this._ɵm_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* OverlayModule */])) {
            return this._OverlayModule_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MdSidenavModule */])) {
            return this._MdSidenavModule_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MdIconModule */])) {
            return this._MdIconModule_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MdLineModule */])) {
            return this._MdLineModule_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MdRippleModule */])) {
            return this._MdRippleModule_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MdListModule */])) {
            return this._MdListModule_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MdCardModule */])) {
            return this._MdCardModule_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MdChipsModule */])) {
            return this._MdChipsModule_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */])) {
            return this._FormsModule_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MdInputModule */])) {
            return this._MdInputModule_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MdSelectionModule */])) {
            return this._MdSelectionModule_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["K" /* MdOptionModule */])) {
            return this._MdOptionModule_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["L" /* MdSelectModule */])) {
            return this._MdSelectModule_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["M" /* StyleModule */])) {
            return this._StyleModule_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["N" /* MdButtonModule */])) {
            return this._MdButtonModule_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["O" /* MdCheckboxModule */])) {
            return this._MdCheckboxModule_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["P" /* MdSnackBarModule */])) {
            return this._MdSnackBarModule_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["Q" /* MdDialogModule */])) {
            return this._MdDialogModule_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout_media_query_module__["a" /* MediaQueriesModule */])) {
            return this._MediaQueriesModule_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_module__["a" /* FlexLayoutModule */])) {
            return this._FlexLayoutModule_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__app_shared_shared_module__["a" /* SharedModule */])) {
            return this._SharedModule_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router__["q" /* RouterModule */])) {
            return this._RouterModule_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__app_my_routing_my_routing_module__["a" /* MyRoutingModule */])) {
            return this._MyRoutingModule_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_my_my_module__["a" /* MyModule */])) {
            return this._MyModule_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgLocalization */])) {
            return this._NgLocalization_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */])) {
            return this._FormBuilder_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ɵi */])) {
            return this._ɵi_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* Platform */])) {
            return this._Platform_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* InteractivityChecker */])) {
            return this._InteractivityChecker_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* FocusTrapFactory */])) {
            return this._FocusTrapFactory_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* LiveAnnouncer */])) {
            return this._LiveAnnouncer_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* ScrollDispatcher */])) {
            return this._ScrollDispatcher_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* OverlayContainer */])) {
            return this._OverlayContainer_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* ɵo */])) {
            return this._ɵo_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* ɵr */])) {
            return this._ɵr_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* Overlay */])) {
            return this._Overlay_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdIconRegistry */])) {
            return this._MdIconRegistry_47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* FocusOriginMonitor */])) {
            return this._FocusOriginMonitor_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdSnackBar */])) {
            return this._MdSnackBar_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdDialog */])) {
            return this._MdDialog_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_flex_layout_media_query_breakpoints_break_points_token__["a" /* BREAKPOINTS */])) {
            return this._BREAKPOINTS_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_media_query_breakpoints_break_point_registry__["a" /* BreakPointRegistry */])) {
            return this._BreakPointRegistry_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout_media_query_match_media__["a" /* MatchMedia */])) {
            return this._MatchMedia_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */])) {
            return this._MediaMonitor_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_observable_media__["a" /* ObservableMedia */])) {
            return this._ObservableMedia_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router__["u" /* ROUTES */])) {
            return this._ROUTES_56;
        }
        return notFoundResult;
    };
    MyModuleInjector.prototype.destroyInternal = function () {
    };
    return MyModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ɵNgModuleInjector */]));
var MyModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* NgModuleFactory */](MyModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_my_my_module__["a" /* MyModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL0FhbWlyL0RldmVsb3BtZW50L0pTL3J3YS10cml2aWEvc3JjL2FwcC9teS9teS5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvQWFtaXIvRGV2ZWxvcG1lbnQvSlMvcndhLXRyaXZpYS9zcmMvYXBwL215L215Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=my.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map