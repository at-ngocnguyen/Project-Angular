function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-products-products-module"], {
  /***/
  "./src/app/feature/products/products-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/feature/products/products-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppFeatureProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/feature/products/products.component.ts");
    /* harmony import */


    var _tkd_tkd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tkd/tkd.component */
    "./src/app/feature/products/tkd/tkd.component.ts");
    /* harmony import */


    var _tkkd_tkkd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tkkd/tkkd.component */
    "./src/app/feature/products/tkkd/tkkd.component.ts");
    /* harmony import */


    var _tpcn_tpcn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tpcn/tpcn.component */
    "./src/app/feature/products/tpcn/tpcn.component.ts");

    var routes = [{
      path: '',
      component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
      children: [{
        path: 'thuockedon',
        component: _tkd_tkd_component__WEBPACK_IMPORTED_MODULE_3__["TkdComponent"]
      }, {
        path: 'thuockhongkedon',
        component: _tkkd_tkkd_component__WEBPACK_IMPORTED_MODULE_4__["TkkdComponent"]
      }, {
        path: 'thucphamchucnang',
        component: _tpcn_tpcn_component__WEBPACK_IMPORTED_MODULE_5__["TpcnComponent"]
      }]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/products/products.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/feature/products/products.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppFeatureProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/feature/products/products-routing.module.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-products-products-module-es5.js.map