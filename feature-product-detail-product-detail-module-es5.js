function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-product-detail-product-detail-module"], {
  /***/
  "./src/app/feature/product-detail/product-detail-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/feature/product-detail/product-detail-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductDetailRoutingModule */

  /***/
  function srcAppFeatureProductDetailProductDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function () {
      return ProductDetailRoutingModule;
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


    var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-detail.component */
    "./src/app/feature/product-detail/product-detail.component.ts");

    var routes = [{
      path: '',
      component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]
    }];

    var ProductDetailRoutingModule = function ProductDetailRoutingModule() {
      _classCallCheck(this, ProductDetailRoutingModule);
    };

    ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductDetailRoutingModule
    });
    ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductDetailRoutingModule_Factory(t) {
        return new (t || ProductDetailRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailRoutingModule, [{
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
  "./src/app/feature/product-detail/product-detail.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/feature/product-detail/product-detail.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductDetailModule */

  /***/
  function srcAppFeatureProductDetailProductDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function () {
      return ProductDetailModule;
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


    var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-detail-routing.module */
    "./src/app/feature/product-detail/product-detail-routing.module.ts");

    var ProductDetailModule = function ProductDetailModule() {
      _classCallCheck(this, ProductDetailModule);
    };

    ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductDetailModule
    });
    ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductDetailModule_Factory(t) {
        return new (t || ProductDetailModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-product-detail-product-detail-module-es5.js.map