(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages.json ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*********************************************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages/index/index.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************************************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", [
        _c("button", { attrs: { _i: 2 }, on: { click: _vm.btnPhoto } })
      ]),
      _c("view", [
        _c("image", {
          attrs: { src: _vm._$s(4, "a-src", _vm.imgfile), _i: 4 }
        }),
        _vm._$s(5, "i", _vm.recResults.length > 0)
          ? _c("view", [
              _c("view"),
              _c("view", [
                _vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.selectedName)))
              ]),
              _vm._$s(8, "i", _vm.searchResults)
                ? _c("view", [
                    _vm._$s(9, "i", _vm.searchResults.matched)
                      ? _c("view", [
                          _vm._v(
                            _vm._$s(
                              9,
                              "t0-0",
                              _vm._s(_vm.searchResults.matched.typename)
                            )
                          )
                        ])
                      : _c(
                          "view",
                          _vm._l(
                            _vm._$s(11, "f", {
                              forItems: _vm.searchResults.similars
                            }),
                            function(item, index, $20, $30) {
                              return _c(
                                "view",
                                {
                                  key: _vm._$s(11, "f", {
                                    forIndex: $20,
                                    key: 11 + "-" + $30
                                  })
                                },
                                [
                                  _c("view", [
                                    _vm._v(
                                      _vm._$s(
                                        "12-" + $30,
                                        "t0-0",
                                        _vm._s(item.keywords)
                                      )
                                    )
                                  ]),
                                  _c("view", [
                                    _vm._v(
                                      _vm._$s(
                                        "13-" + $30,
                                        "t0-0",
                                        _vm._s(item.typename)
                                      )
                                    )
                                  ])
                                ]
                              )
                            }
                          ),
                          0
                        )
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*********************************************************************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      imgfile: \"\",\n      recResults: [],\n      selectedName: \"\",\n      searchResults: null };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    btnPhoto: function btnPhoto() {var _this = this;\n      uni.chooseImage({\n        count: 1,\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:45\");\n          _this.imgfile = res.tempFilePaths[0];\n          _this.readImage2Base64(_this.imgfile);\n          // // 重置上一次选择查询的名称\n          // this.selectedName = \"\";\n          // this.searchResults = null;\n          // this.recResults = [];\n\n          // let candonext = true;\n\n          // // 由于图片转Base64的方法在跨端时API并不统一，所以我们需要根据条件编译，使用对应端的特定API来完成此功能。\n\n          // if (candonext) this.readImage2Base64(this.imgfile);\n        } });\n\n    },\n    readImage2Base64: function readImage2Base64(path) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      var that = this;\n      plus.io.resolveLocalFileSystemURL(\n      path,\n      function (entry) {\n        entry.file(function (file) {\n          var reader = new plus.io.FileReader();\n          reader.onloadend = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {var base64, result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                      base64 = e.target.result.substr(22);_context.next = 3;return (\n                        that.imageClassify(base64));case 3:result = _context.sent;\n                      __f__(\"log\", 33, result, \" at pages/index/index.vue:85\");\n                      that.parseResults(result.result);case 6:case \"end\":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}();\n\n          reader.readAsDataURL(file);\n        });\n      });\n\n\n    },\n    imageClassify: function imageClassify(imgB64) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt(\"return\",\n                new Promise(function (resolve, reject) {\n                  uniCloud.callFunction({\n                    name: \"ImageClassify\",\n                    data: {\n                      image: imgB64 },\n\n                    success: function success(res) {\n                      resolve(res.result);\n                    } });\n\n                }));case 1:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    parseResults: function parseResults(result) {var _this2 = this;\n      this.recResults = result;\n      var itemList = [];\n      var abs_result_index;\n      for (var i = 0; i < result.length; i++) {\n        if (result[i].score > .7) {\n          abs_result_index = i;\n          break;\n        }\n        itemList.push(result[i].keyword + \"\" + result[i].score);\n      }\n\n      if (abs_result_index >= 0) {\n        this.selectRecResult(abs_result_index);\n        return;\n      }\n      uni.showActionSheet({\n        itemList: itemList,\n        success: function success(res) {\n          _this2.selectRecResult(res.tapIndex);\n        } });\n\n    },\n    selectRecResult: function selectRecResult(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var searchRes;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                _this3.selectedName = _this3.recResults[index].keyword;_context3.next = 3;return (\n                  _this3.searchKeyword(_this3.selectedName));case 3:searchRes = _context3.sent;\n                __f__(\"log\", searchRes, \" at pages/index/index.vue:133\");\n                _this3.searchResults = searchRes;\n                uni.hideLoading();case 7:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    searchKeyword: function searchKeyword(kw) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt(\"return\",\n                new Promise(function (resolve, reject) {\n                  uniCloud.callFunction({\n                    name: \"TrashClassify\",\n                    data: {\n                      keyword: kw },\n\n                    success: function success(res) {\n                      resolve(res.result);\n                    } });\n\n                }));case 1:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsb0JBRkE7QUFHQSxzQkFIQTtBQUlBLHlCQUpBOztBQU1BLEdBUkE7QUFTQSxRQVRBLG9CQVNBOztBQUVBLEdBWEE7QUFZQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBaEJBOztBQWtCQSxLQXBCQTtBQXFCQSxvQkFyQkEsNEJBcUJBLElBckJBLEVBcUJBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0EsVUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREEsR0FDQSwwQkFEQTtBQUVBLGtEQUZBLFNBRUEsTUFGQTtBQUdBO0FBQ0EsdURBSkE7O0FBTUE7QUFDQSxTQVRBO0FBVUEsT0FiQTs7O0FBZ0JBLEtBckRBO0FBc0RBLGlCQXREQSx5QkFzREEsTUF0REEsRUFzREE7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUNBLG1DQURBLEVBRkE7O0FBS0E7QUFDQTtBQUNBLHFCQVBBOztBQVNBLGlCQVZBLENBREE7QUFZQSxLQWxFQTtBQW1FQSxnQkFuRUEsd0JBbUVBLE1BbkVBLEVBbUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQTtBQUNBLFNBSkE7O0FBTUEsS0F6RkE7QUEwRkEsbUJBMUZBLDJCQTBGQSxLQTFGQSxFQTBGQTtBQUNBLHVFQURBO0FBRUEsMkRBRkEsU0FFQSxTQUZBO0FBR0E7QUFDQTtBQUNBLGtDQUxBO0FBTUEsS0FoR0E7O0FBa0dBLGlCQWxHQSx5QkFrR0EsRUFsR0EsRUFrR0E7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUNBLGlDQURBLEVBRkE7O0FBS0E7QUFDQTtBQUNBLHFCQVBBOztBQVNBLGlCQVZBLENBREE7QUFZQSxLQTlHQSxFQVpBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDEwMCU7cGFkZGluZzoxMHB4IDIwcHg7XCI+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiYnRuUGhvdG9cIj7mi43nhafmiJbku47nm7jlhozpgInmi6nkuIDlvKDnhafniYc8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDEwMCU7cGFkZGluZzoxMHB4IDIwcHg7XCI+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nZmlsZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInJlY1Jlc3VsdHMubGVuZ3RoPjBcIiBzdHlsZT1cIndpZHRoOiAxMDAlO2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOiAxMHB4O3BhZGRpbmc6MTBweDtcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDE0cHg7Y29sb3I6ICM5OTk7XCI+6K+G5Yir57uT5p6cPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO2hlaWdodDogMzBweDtsaW5lLWhlaWdodDogMzBweDtcIj5cclxuXHRcdFx0XHRcdHt7c2VsZWN0ZWROYW1lfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNlYXJjaFJlc3VsdHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJzZWFyY2hSZXN1bHRzLm1hdGNoZWRcIiBzdHlsZT1cIndpZHRoOiAxMDAlO3RleHQtYWxpZ246IGNlbnRlcjtcIj57e3NlYXJjaFJlc3VsdHMubWF0Y2hlZC50eXBlbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1lbHNlIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIml0ZW0saW5kZXggaW4gc2VhcmNoUmVzdWx0cy5zaW1pbGFyc1wiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImZsZXg6IDE7dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7d2hpdGUtc3BhY2U6IG5vd3JhcDtvdmVyZmxvdzogaGlkZGVuO21hcmdpbi1yaWdodDogMjBweDtcIj57e2l0ZW0ua2V5d29yZHN9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz57e2l0ZW0udHlwZW5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbWdmaWxlOiBcIlwiLFxyXG5cdFx0XHRcdHJlY1Jlc3VsdHM6IFtdLFxyXG5cdFx0XHRcdHNlbGVjdGVkTmFtZTogXCJcIixcclxuXHRcdFx0XHRzZWFyY2hSZXN1bHRzOiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YnRuUGhvdG8oKSB7XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdHRoaXMuaW1nZmlsZSA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlYWRJbWFnZTJCYXNlNjQodGhpcy5pbWdmaWxlKTtcclxuXHRcdFx0XHRcdFx0Ly8gLy8g6YeN572u5LiK5LiA5qyh6YCJ5oup5p+l6K+i55qE5ZCN56ewXHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc2VsZWN0ZWROYW1lID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zZWFyY2hSZXN1bHRzID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5yZWNSZXN1bHRzID0gW107XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBsZXQgY2FuZG9uZXh0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIC8vIOeUseS6juWbvueJh+i9rEJhc2U2NOeahOaWueazleWcqOi3qOerr+aXtkFQSeW5tuS4jee7n+S4gO+8jOaJgOS7peaIkeS7rOmcgOimgeagueaNruadoeS7tue8luivke+8jOS9v+eUqOWvueW6lOerr+eahOeJueWumkFQSeadpeWujOaIkOatpOWKn+iDveOAglxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgKGNhbmRvbmV4dCkgdGhpcy5yZWFkSW1hZ2UyQmFzZTY0KHRoaXMuaW1nZmlsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVhZEltYWdlMkJhc2U2NChwYXRoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdHd4LmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCkucmVhZEZpbGUoe1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHBhdGgsXHJcblx0XHRcdFx0XHRlbmNvZGluZzogJ2Jhc2U2NCcsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaW1hZ2VDbGFzc2lmeShyZXMuZGF0YSk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcnNlUmVzdWx0cyhyZXN1bHQucmVzdWx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHRwbHVzLmlvLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHQoZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdGVudHJ5LmZpbGUoZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgcmVhZGVyID0gbmV3IHBsdXMuaW8uRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gYXN5bmMgKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBiYXNlNjQgPSBlLnRhcmdldC5yZXN1bHQuc3Vic3RyKDIyKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGF0LmltYWdlQ2xhc3NpZnkoYmFzZTY0KTtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygzMywgcmVzdWx0KVxuXHRcdFx0XHRcdFx0XHRcdHRoYXQucGFyc2VSZXN1bHRzKHJlc3VsdC5yZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGltYWdlQ2xhc3NpZnkoaW1nQjY0KSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiSW1hZ2VDbGFzc2lmeVwiLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0aW1hZ2U6IGltZ0I2NFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMucmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFyc2VSZXN1bHRzKHJlc3VsdCkge1xyXG5cdFx0XHRcdHRoaXMucmVjUmVzdWx0cyA9IHJlc3VsdDtcclxuXHRcdFx0XHRsZXQgaXRlbUxpc3QgPSBbXTtcclxuXHRcdFx0XHRsZXQgYWJzX3Jlc3VsdF9pbmRleDtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdFtpXS5zY29yZSA+IC43KSB7XHJcblx0XHRcdFx0XHRcdGFic19yZXN1bHRfaW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGl0ZW1MaXN0LnB1c2gocmVzdWx0W2ldLmtleXdvcmQgKyBcIlwiICsgcmVzdWx0W2ldLnNjb3JlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhYnNfcmVzdWx0X2luZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0UmVjUmVzdWx0KGFic19yZXN1bHRfaW5kZXgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkuc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0XHRcdGl0ZW1MaXN0OiBpdGVtTGlzdCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RSZWNSZXN1bHQocmVzLnRhcEluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgc2VsZWN0UmVjUmVzdWx0KGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZE5hbWUgPSB0aGlzLnJlY1Jlc3VsdHNbaW5kZXhdLmtleXdvcmQ7XHJcblx0XHRcdFx0Y29uc3Qgc2VhcmNoUmVzID0gYXdhaXQgdGhpcy5zZWFyY2hLZXl3b3JkKHRoaXMuc2VsZWN0ZWROYW1lKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhzZWFyY2hSZXMpO1xyXG5cdFx0XHRcdHRoaXMuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlcztcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFzeW5jIHNlYXJjaEtleXdvcmQoa3cpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJUcmFzaENsYXNzaWZ5XCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRrZXl3b3JkOiBrd1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMucmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubG9nbyB7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMDBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LnRleHQtYXJlYSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGNvbG9yOiAjOGY4Zjk0O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 9)))

/***/ }),
/* 9 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var r = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),r = {},o = r.lib = {},s = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = s.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,r = this.sigBytes,o = e.sigBytes;if (this.clamp(), r % 4) for (var s = 0; s < o; s++) {var i = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;t[r + s >>> 2] |= i << 24 - (r + s) % 4 * 8;} else for (s = 0; s < o; s += 4) {t[r + s >>> 2] = n[s >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = s.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, r = [], o = function o(t) {t = t;var n = 987654321,r = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, s = 0; s < t; s += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), r.push(4294967296 * a() | 0);}return new i.init(r, t);} }),a = r.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r += 2) {n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(s));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },f = o.BufferedBlockAlgorithm = s.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,r = n.words,o = n.sigBytes,s = this.blockSize,a = o / (4 * s),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += s) {this._doProcessBlock(r, l);}var f = r.splice(0, c);n.sigBytes -= u;}return new i.init(f, u);}, clone: function clone() {var e = s.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),p = (o.Hasher = f.extend({ cfg: s.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {f.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new p.HMAC.init(e, n).finalize(t);};} }), r.algo = {});return r;}(Math), n);}),o = (n(function (e, t) {var n;e.exports = (n = r, function (e) {var t = n,r = t.lib,o = r.WordArray,s = r.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = s.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var r = t + n,o = e[r];e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var s = this._hash.words,i = e[t + 0],c = e[t + 1],h = e[t + 2],d = e[t + 3],y = e[t + 4],g = e[t + 5],v = e[t + 6],_ = e[t + 7],m = e[t + 8],b = e[t + 9],w = e[t + 10],T = e[t + 11],E = e[t + 12],S = e[t + 13],O = e[t + 14],k = e[t + 15],A = s[0],P = s[1],I = s[2],N = s[3];A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, h, 17, a[2]), P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, g, 12, a[5]), I = u(I, N, A, P, v, 17, a[6]), P = u(P, I, N, A, _, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, T, 22, a[11]), A = u(A, P, I, N, E, 7, a[12]), N = u(N, A, P, I, S, 12, a[13]), I = u(I, N, A, P, O, 17, a[14]), A = l(A, P = u(P, I, N, A, k, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, v, 9, a[17]), I = l(I, N, A, P, T, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, g, 5, a[20]), N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, k, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, O, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, S, 5, a[28]), N = l(N, A, P, I, h, 9, a[29]), I = l(I, N, A, P, _, 14, a[30]), A = f(A, P = l(P, I, N, A, E, 20, a[31]), I, N, g, 4, a[32]), N = f(N, A, P, I, m, 11, a[33]), I = f(I, N, A, P, T, 16, a[34]), P = f(P, I, N, A, O, 23, a[35]), A = f(A, P, I, N, c, 4, a[36]), N = f(N, A, P, I, y, 11, a[37]), I = f(I, N, A, P, _, 16, a[38]), P = f(P, I, N, A, w, 23, a[39]), A = f(A, P, I, N, S, 4, a[40]), N = f(N, A, P, I, i, 11, a[41]), I = f(I, N, A, P, d, 16, a[42]), P = f(P, I, N, A, v, 23, a[43]), A = f(A, P, I, N, b, 4, a[44]), N = f(N, A, P, I, E, 11, a[45]), I = f(I, N, A, P, k, 16, a[46]), A = p(A, P = f(P, I, N, A, h, 23, a[47]), I, N, i, 6, a[48]), N = p(N, A, P, I, _, 10, a[49]), I = p(I, N, A, P, O, 15, a[50]), P = p(P, I, N, A, g, 21, a[51]), A = p(A, P, I, N, E, 6, a[52]), N = p(N, A, P, I, d, 10, a[53]), I = p(I, N, A, P, w, 15, a[54]), P = p(P, I, N, A, c, 21, a[55]), A = p(A, P, I, N, m, 6, a[56]), N = p(N, A, P, I, k, 10, a[57]), I = p(I, N, A, P, v, 15, a[58]), P = p(P, I, N, A, S, 21, a[59]), A = p(A, P, I, N, y, 6, a[60]), N = p(N, A, P, I, T, 10, a[61]), I = p(I, N, A, P, h, 15, a[62]), P = p(P, I, N, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,r = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var s = e.floor(r / 4294967296),i = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = s.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, r, o, s, i) {var a = e + (t & n | ~t & r) + o + i;return (a << s | a >>> 32 - s) + t;}function l(e, t, n, r, o, s, i) {var a = e + (t & r | n & ~r) + o + i;return (a << s | a >>> 32 - s) + t;}function f(e, t, n, r, o, s, i) {var a = e + (t ^ n ^ r) + o + i;return (a << s | a >>> 32 - s) + t;}function p(e, t, n, r, o, s, i) {var a = e + (n ^ (t | ~r)) + o + i;return (a << s | a >>> 32 - s) + t;}t.MD5 = s._createHelper(c), t.HmacMD5 = s._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, o, s;e.exports = (o = (n = r).lib.Base, s = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = r.HmacMD5;}));function s(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}).catch(function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var a;try {a = __webpack_require__(/*! uni-stat-config */ 12).default || __webpack_require__(/*! uni-stat-config */ 12);} catch (e) {a = { appid: "" };}var c, u;function l() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function f() {if ("n" === p()) {try {c = plus.runtime.getDCloudId();} catch (e) {c = "";}return c;}return c || (c = l(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: c })), c;}function p() {return { "app-plus": "n", h5: "h5", "mp-weixin": "wx", "mp-alipay": "ali", "mp-baidu": "bd", "mp-toutiao": "tt", "mp-qq": "qq", "quickapp-native": "qn" }["app-plus"];}var h = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, r) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return r(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return r(new i({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});} };var d = { image: "image/*", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", gif: "image/gif", webp: "image/webp", svg: "image/svg+xml", mp3: "audio/mp3", mp4: "video/mp4", ogg: "audio/ogg", webm: "video/webm" };function y(e) {return d[e.toLowerCase()];}var g = /*#__PURE__*/function () {function g(e) {_classCallCheck(this, g);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("缺少参数" + t);}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId;}_createClass(g, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return h.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : this.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = h.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),r = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = h.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : n(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,r = _ref.filePath,o = _ref.fileType,s = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: n, filePath: r, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(e);} });"function" == typeof s && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,r = _ref2.onUploadProgress,o = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var s = o && o.envType || this.config.envType;var a, c, u;var l = t.split("?")[0].split(".").pop();if (!y(l)) throw new i({ code: "UNSUPPORTED_FILE_TYPE", message: "不支持的文件类型" });return this.getOSSUploadOptionsFromPath({ env: s, filename: t }).then(function (t) {var o = t.result;a = y(l), c = o.id, u = "https://" + o.cdnDomain + "/" + o.ossPath;var s = { url: "https://" + o.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o.accessKeyId, Signature: o.signature, host: o.host, id: c, key: o.ossPath, policy: o.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n, contentType: a };return _this5.uploadFileToOSS(Object.assign({}, s, { onUploadProgress: r }));}).then(function () {return _this5.reportOSSUpload({ id: c, contentType: a });}).then(function (t) {return new Promise(function (n, r) {t.success ? n({ success: !0, filePath: e, fileID: u }) : r(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return g;}();var v = { init: function init(e) {var t = new g(e);["uploadFile", "deleteFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);});var n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t;} };var _;function m(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;}!function (e) {e.local = "local", e.none = "none", e.session = "session";}(_ || (_ = {}));var _b,w = (_b = function b(e, t) {return (_b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_b(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),_T = function T() {return (_T = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);};var E = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return w(t, e), t.prototype.post = function (e) {var t = e.url,n = e.data,r = e.headers;return new Promise(function (e, o) {uni.request({ url: m("https:", t), data: n, method: "POST", header: r, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});}, t.prototype.upload = function (e) {return new Promise(function (t, n) {var r = e.url,o = e.file,s = e.data,i = e.headers,a = e.fileType,c = uni.uploadFile({ url: m("https:", r), name: "file", formData: Object.assign({}, s), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && s.success_action_status && (n.statusCode = parseInt(s.success_action_status, 10)), t(n);}, fail: function fail(e) { false && false, n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});}, t.prototype.download = function (e) {var t = e.url,n = e.headers;return new Promise(function (e, r) {uni.downloadFile({ url: m("https:", t), header: n, success: function success(t) {200 === t.statusCode && t.tempFilePath ? e({ statusCode: 200, tempFilePath: t.tempFilePath }) : e(t);}, fail: function fail(e) {r(e);} });});}, t;}(function () {}),S = { setItem: function setItem(e, t) {uni.setStorageSync(e, t);}, getItem: function getItem(e) {return uni.getStorageSync(e);}, removeItem: function removeItem(e) {uni.removeStorageSync(e);}, clear: function clear() {uni.clearStorageSync();} },O = function O(e, t) {void 0 === t && (t = {});var n = uni.connectSocket(_T({ url: e }, t));return { set onopen(e) {n.onOpen(e);}, set onmessage(e) {n.onMessage(e);}, set onclose(e) {n.onClose(e);}, set onerror(e) {n.onError(e);}, send: function send(e) {return n.send({ data: e });}, close: function close(e, t) {return n.close({ code: e, reason: t });}, get readyState() {return n.readyState;}, CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 };};var k,A,P = { genAdapter: function genAdapter() {return { root: {}, reqClass: E, wsClass: O, localStorage: S, primaryStorage: _.local };}, isMatch: function isMatch() {return "undefined" != typeof uni && !!uni.request;}, runtime: "uni_app" },I = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.getQuery = function (e, t) {if ("undefined" == typeof window) return !1;var n = t || window.location.search,r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),o = n.substr(n.indexOf("?") + 1).match(r);return null != o ? o[2] : "";}, t.getHash = function (e) {var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));return t ? t[1] : "";}, t.removeParam = function (e, t) {var n = t.split("?")[0],r = [],o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";if ("" !== o) {for (var s = (r = o.split("&")).length - 1; s >= 0; s -= 1) {r[s].split("=")[0] === e && r.splice(s, 1);}n = n + "?" + r.join("&");}return n;}, t.createPromiseCallback = function () {var e;if (!Promise) {(e = function e() {}).promise = {};var t = function t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;}var n = new Promise(function (t, n) {e = function e(_e, r) {return _e ? n(_e) : t(r);};});return e.promise = n, e;}, t.getWeixinCode = function () {return t.getQuery("code") || t.getHash("code");}, t.getMiniAppCode = function () {return new Promise(function (e, t) {wx.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(e);} });});}, t.isArray = function (e) {return "[object Array]" === Object.prototype.toString.call(e);}, t.isString = function (e) {return "string" == typeof e;}, t.isUndefined = function (e) {return void 0 === e;}, t.isInstanceOf = function (e, t) {return e instanceof t;}, t.isFormData = function (e) {return "[object FormData]" === Object.prototype.toString.call(e);}, t.genSeqId = function () {return Math.random().toString(16).slice(2);}, t.getArgNames = function (e) {var t = e.toString();return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);}, t.formatUrl = function (e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;};}),N = "dist/index.js",C = "./dist/index.d.ts",x = { build: "npm run tsc && webpack", tsc: "tsc -p tsconfig.json", "tsc:w": "tsc -p tsconfig.json -w", test: "jest --verbose false -i", e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"', start: "webpack-dev-server --hot --open", eslint: 'eslint "./**/*.js" "./**/*.ts"', "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"', test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js" },R = { type: "git", url: "https://github.com/TencentCloudBase/tcb-js-sdk" },q = ["tcb", "js-sdk"],U = { "@cloudbase/adapter-interface": "^0.2.0", "@cloudbase/adapter-wx_mp": "^0.2.1", "@cloudbase/database": "^0.9.8" },j = { "@babel/core": "^7.6.2", "@babel/plugin-proposal-class-properties": "^7.5.5", "@babel/plugin-proposal-object-rest-spread": "^7.6.2", "@babel/plugin-transform-runtime": "^7.6.2", "@babel/preset-env": "^7.6.2", "@babel/preset-typescript": "^7.6.0", "@babel/runtime": "^7.6.2", "@types/jest": "^23.1.4", "@types/node": "^10.14.4", "@types/superagent": "^4.1.4", axios: "^0.19.0", "babel-eslint": "^10.0.1", "babel-loader": "^8.0.6", "babel-polyfill": "^6.26.0", eslint: "^5.16.0", "eslint-config-alloy": "^1.4.2", "eslint-config-prettier": "^4.1.0", "eslint-plugin-prettier": "^3.0.1", "eslint-plugin-typescript": "^1.0.0-rc.3", express: "^4.17.1", husky: "^3.1.0", jest: "^24.7.1", "jest-puppeteer": "^4.3.0", "lint-staged": "^9.5.0", "power-assert": "^1.6.1", puppeteer: "^1.20.0", "serve-static": "^1.14.1", "ts-jest": "^23.10.4", "ts-loader": "^6.2.1", typescript: "^3.4.3", "typescript-eslint-parser": "^22.0.0", webpack: "^4.41.3", "webpack-bundle-analyzer": "^3.4.1", "webpack-cli": "^3.3.0", "webpack-dev-server": "^3.3.1", "webpack-merge": "^4.2.2", "webpack-visualizer-plugin": "^0.1.11" },L = { hooks: { "pre-commit": "lint-staged" } },D = { name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: N, types: C, scripts: x, repository: R, keywords: q, author: "jimmyjzhang", license: "ISC", dependencies: U, devDependencies: j, husky: L, "lint-staged": { "*.{js,ts}": ["eslint --fix", "git add"] } },M = (k = Object.freeze({ __proto__: null, name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: N, types: C, scripts: x, repository: R, keywords: q, author: "jimmyjzhang", license: "ISC", dependencies: U, devDependencies: j, husky: L, default: D })) && k.default || k,K = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o = r(M);n.SDK_VERISON = o.version, n.ACCESS_TOKEN = "access_token", n.ACCESS_TOKEN_Expire = "access_token_expire", n.REFRESH_TOKEN = "refresh_token", n.ANONYMOUS_UUID = "anonymous_uuid", n.LOGIN_TYPE_KEY = "login_type", n.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", n.BASE_URL =  false ? undefined : "//tcb-api.tencentcloudapi.com/web";});!function (e) {e.local = "local", e.none = "none", e.session = "session";}(A || (A = {}));var F = function F() {},G = function G() {};var H = Object.freeze({ __proto__: null, get StorageType() {return A;}, AbstractSDKRequest: F, AbstractStorage: G, formatUrl: function formatUrl(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;} }),V = n(function (t, n) {var r = e && e.__extends || function () {var _e2 = function e(t, n) {return (_e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e2(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var a = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return r(t, e), t.prototype.get = function (e) {return this._request(o(o({}, e), { method: "get" }));}, t.prototype.post = function (e) {return this._request(o(o({}, e), { method: "post" }));}, t.prototype.upload = function (e) {var t = e.data,n = e.file,r = e.name,s = new FormData();for (var i in t) {s.append(i, t[i]);}return s.append("key", r), s.append("file", n), this._request(o(o({}, e), { data: s, method: "post" }));}, t.prototype.download = function (e) {return s(this, void 0, void 0, function () {var t, n;return i(this, function (r) {return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), [2, new Promise(function (t) {t({ statusCode: 200, tempFilePath: e.url });})];});});}, t.prototype._request = function (e) {var t = String(e.method).toLowerCase() || "get";return new Promise(function (n) {var r = e.url,o = e.headers,s = void 0 === o ? {} : o,i = e.data,a = e.responseType,c = I.formatUrl(K.protocol, r, "get" === t ? i : {}),u = new XMLHttpRequest();for (var l in u.open(t, c), a && (u.responseType = a), s) {u.setRequestHeader(l, s[l]);}u.onreadystatechange = function () {if (4 === u.readyState) {var e = { statusCode: u.status };try {e.data = JSON.parse(u.responseText);} catch (e) {}n(e);}}, u.send("post" === t && I.isFormData(i) ? i : JSON.stringify(i || {}));});}, t;}(H.AbstractSDKRequest);n.WebRequest = a, n.genAdapter = function () {return { root: window, reqClass: a, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage };};}),Y = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o,s = r(V);!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(o = n.RUNTIME || (n.RUNTIME = {})), n.useAdapters = function (e) {for (var t = 0, n = I.isArray(e) ? e : [e]; t < n.length; t++) {var r = n[t],o = r.isMatch,s = r.genAdapter,i = r.runtime;if (o()) return { adapter: s(), runtime: i };}}, n.useDefaultAdapter = function () {return { adapter: s.genAdapter(), runtime: o.WEB };}, n.Adapter = { adapter: null, runtime: void 0 };}),B = n(function (t, n) {var r = e && e.__extends || function () {var _e3 = function e(t, n) {return (_e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e3(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}();Object.defineProperty(n, "__esModule", { value: !0 });var o = function () {function e(e) {switch (Y.Adapter.adapter.primaryStorage || e) {case "local":this.storageClass = Y.Adapter.adapter.localStorage || new s();break;case "none":this.storageClass = new s();break;default:this.storageClass = Y.Adapter.adapter.sessionStorage || new s();}}return e.prototype.setStore = function (e, t, n) {try {if (!this.storageClass) return;} catch (e) {return;}var r,o = {};o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);try {this.storageClass.setItem(e, r);} catch (e) {return;}}, e.prototype.getStore = function (e, t) {try {if (!this.storageClass) return;} catch (e) {return "";}t = t || "localCachev1";var n = this.storageClass.getItem(e);return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";}, e.prototype.removeStore = function (e) {this.storageClass.removeItem(e);}, e;}();n.Cache = o;var s = function (e) {function t() {var t = e.call(this) || this;return Y.Adapter.adapter.root.tcbObject || (Y.Adapter.adapter.root.tcbObject = {}), t;}return r(t, e), t.prototype.setItem = function (e, t) {Y.Adapter.adapter.root.tcbObject[e] = t;}, t.prototype.getItem = function (e) {return Y.Adapter.adapter.root.tcbObject[e];}, t.prototype.removeItem = function (e) {delete Y.Adapter.adapter.root.tcbObject[e];}, t.prototype.clear = function () {delete Y.Adapter.adapter.root.tcbObject;}, t;}(H.AbstractStorage);}),W = n(function (t, n) {var r = e && e.__extends || function () {var _e4 = function e(t, n) {return (_e4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e4(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__spreadArrays || function () {for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}var r = Array(e),o = 0;for (t = 0; t < n; t++) {for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) {r[o] = s[i];}}return r;};Object.defineProperty(n, "__esModule", { value: !0 });var s = function s(e, t) {this.data = t || null, this.name = e;};n.IEvent = s;var i = function (e) {function t(t, n) {var r = e.call(this, "error", { error: t, data: n }) || this;return r.error = t, r;}return r(t, e), t;}(s);n.IErrorEvent = i;var a = function () {function e() {this._listeners = {};}return e.prototype.on = function (e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;}, e.prototype.off = function (e, t) {return function (e, t, n) {if (n && n[e]) {var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}}(e, t, this._listeners), this;}, e.prototype.fire = function (e, t) {if (I.isInstanceOf(e, i)) return console.error(e.error), this;var n = I.isString(e) ? new s(e, t || {}) : e,r = n.name;if (this._listens(r)) {n.target = this;for (var a = 0, c = this._listeners[r] ? o(this._listeners[r]) : []; a < c.length; a++) {c[a].call(this, n);}}return this;}, e.prototype._listens = function (e) {return this._listeners[e] && this._listeners[e].length > 0;}, e;}();n.IEventEmitter = a;var c = new a();n.addEventListener = function (e, t) {c.on(e, t);}, n.activateEvent = function (e, t) {void 0 === t && (t = {}), c.fire(e, t);}, n.removeEventListener = function (e, t) {c.off(e, t);}, n.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRE: "loginStateExpire", LOGIN_TYPE_CHANGE: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", REFRESH_ACCESS_TOKEN: "refreshAccessToken" };}),z = n(function (t, n) {var r = e && e.__assign || function () {return (r = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var i = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously"],a = { "X-SDK-Version": K.SDK_VERISON };function c(e, t, n) {var o = e[t];e[t] = function (t) {var s = {},i = {};n.forEach(function (n) {var r = n.call(e, t),o = r.data,a = r.headers;Object.assign(s, o), Object.assign(i, a);});var a = t.data;return a && function () {if (I.isFormData(a)) for (var e in s) {a.append(e, s[e]);} else t.data = r(r({}, a), s);}(), t.headers = r(r({}, t.headers || {}), i), o.call(e, t);};}function u() {var e = I.genSeqId();return { data: { seqId: e }, headers: r(r({}, a), { "x-seqid": e }) };}var l = function () {function e(e) {void 0 === e && (e = {}), this.config = e, this.cache = new B.Cache(e.persistence), this.accessTokenKey = K.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = K.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = K.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = K.ANONYMOUS_UUID + "_" + e.env, this.loginTypeKey = K.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new Y.Adapter.adapter.reqClass(), c(this._reqClass, "post", [u]), c(this._reqClass, "upload", [u]), c(this._reqClass, "download", [u]);}return e.prototype.post = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.post(e)];case 1:return [2, t.sent()];}});});}, e.prototype.upload = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.upload(e)];case 1:return [2, t.sent()];}});});}, e.prototype.download = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.download(e)];case 1:return [2, t.sent()];}});});}, e.prototype.refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, this._refreshAccessTokenPromise];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;return [2, e];}});});}, e.prototype._refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");return t = { refresh_token: e }, this.cache.getStore(this.loginTypeKey) === J.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), [4, this.request("auth.getJwt", t)];case 1:if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (W.activateEvent(W.EVENTS.LOGIN_STATE_EXPIRE), this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);return n.data.access_token ? (W.activateEvent(W.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [2, { accessToken: n.data.access_token, accessTokenExpire: n.data.access_token_expire }]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), this._refreshAccessToken()), [2]);}});});}, e.prototype.getAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, (r = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(e, t)] : [3, 2];case 1:r = !o.sent(), o.label = 2;case 2:return r && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, { accessToken: e, accessTokenExpire: t }];}});});}, e.prototype.request = function (e, t, n) {return o(this, void 0, void 0, function () {var o, a, c, u, l, f, p, h, d, y, g, v;return s(this, function (s) {switch (s.label) {case 0:return o = "application/x-www-form-urlencoded", a = r({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t), -1 !== i.indexOf(e) ? [3, 2] : (c = a, [4, this.getAccessToken()]);case 1:c.access_token = s.sent().accessToken, s.label = 2;case 2:if ("storage.uploadFile" === e) {for (l in u = new FormData()) {u.hasOwnProperty(l) && void 0 !== u[l] && u.append(l, a[l]);}o = "multipart/form-data";} else o = "application/json;charset=UTF-8", u = a;return f = { headers: { "content-type": o } }, n && n.onUploadProgress && (f.onUploadProgress = n.onUploadProgress), p = t.parse, h = t.query, d = t.search, y = { env: this.config.env }, p && (y.parse = !0), h && (y = r(r({}, h), y)), g = I.formatUrl(K.protocol, K.BASE_URL, y), d && (g += d), [4, this.post(r({ url: g, data: u }, f))];case 3:if (v = s.sent(), 200 !== Number(v.status) && 200 !== Number(v.statusCode) || !v.data) throw new Error("network request error");return [2, v];}});});}, e.prototype.send = function (e, t) {return void 0 === t && (t = {}), o(this, void 0, void 0, function () {var n, r, o;return s(this, function (s) {switch (s.label) {case 0:return n = setTimeout(function () {console.warn("Database operation is longer than 3s. Please check query performance and your network environment.");}, 3e3), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 1:return r = s.sent(), clearTimeout(n), "ACCESS_TOKEN_EXPIRED" !== r.data.code || -1 !== i.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];case 2:return s.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 3:if ((o = s.sent()).data.code) throw new Error("[" + o.data.code + "] " + o.data.message);return [2, o.data];case 4:if (r.data.code) throw new Error("[" + r.data.code + "] " + r.data.message);return [2, r.data];}});});}, e;}();n.Request = l;}),J = n(function (t, n) {var r,o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";}(r = n.LOGINTYPE || (n.LOGINTYPE = {}));var i = function () {function e(e) {this._loginType = r.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);}return e.prototype.init = function () {this.httpRequest = new z.Request(this.config), this.cache = new B.Cache(this.config.persistence), this.accessTokenKey = K.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = K.ACCESS_TOKEN_Expire + "_" + this.config.env, this.refreshTokenKey = K.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = K.LOGIN_TYPE_KEY + "_" + this.config.env;}, e.prototype.onLoginTypeChanged = function (e) {this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);}, Object.defineProperty(e.prototype, "loginType", { get: function get() {return this._loginType;}, enumerable: !0, configurable: !0 }), e.prototype.setRefreshToken = function (e) {this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), this.cache.setStore(this.refreshTokenKey, e);}, e.prototype.getRefreshTokenByWXCode = function (e, t, n) {return o(this, void 0, void 0, function () {var r;return s(this, function (o) {return "auth.getJwt", r = Y.Adapter.runtime === Y.RUNTIME.WX_MP ? "1" : "0", [2, this.httpRequest.send("auth.getJwt", { appid: e, loginType: t, code: n, hybridMiniapp: r }).then(function (e) {if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire };throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");})];});});}, e;}();n.default = i;}),X = n(function (t, n) {var r = e && e.__extends || function () {var _e5 = function e(t, n) {return (_e5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e5(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},i = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var a,c,u = i(I),l = i(J);!function (e) {e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";}(a || (a = {})), function (e) {e.redirect = "redirect", e.prompt = "prompt";}(c || (c = {}));var f = {},p = function (e) {function t(t, n, r, o, s) {var i = e.call(this, t) || this;return i.config = t, i.appid = n, i.scope = Y.Adapter.runtime === Y.RUNTIME.WX_MP ? "snsapi_base" : r, i.state = s || "weixin", i.loginMode = o || "redirect", i;}return r(t, e), t.prototype.signIn = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, f[this.config.env]];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (f[this.config.env] = null, t) throw t;return [2, e];}});});}, t.prototype._signIn = function () {return o(this, void 0, void 0, function () {var e, t, n, r, o, i;return s(this, function (s) {switch (s.label) {case 0:if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), e) {if (t && t > Date.now()) return [2, { credential: { accessToken: e, refreshToken: this.cache.getStore(this.refreshTokenKey) } }];this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);}if (!1 === Object.values(a).includes(a[this.scope])) throw new Error("错误的scope类型");return Y.Adapter.runtime !== Y.RUNTIME.WX_MP ? [3, 2] : [4, u.getMiniAppCode()];case 1:return n = s.sent(), [3, 4];case 2:return [4, u.getWeixinCode()];case 3:if (!(n = s.sent())) return [2, this.redirect()];s.label = 4;case 4:return r = function (e) {switch (e) {case a.snsapi_login:return "WECHAT-OPEN";default:return "WECHAT-PUBLIC";}}(this.scope), [4, this.getRefreshTokenByWXCode(this.appid, r, n)];case 5:return o = s.sent(), i = o.refreshToken, this.cache.setStore(this.refreshTokenKey, i), o.accessToken && this.cache.setStore(this.accessTokenKey, o.accessToken), o.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, o.accessTokenExpire + Date.now()), W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.WECHAT), [2, { credential: { refreshToken: i } }];}});});}, t.prototype.redirect = function () {var e = u.removeParam("code", location.href);e = u.removeParam("state", e), e = encodeURIComponent(e);var t = "//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === c[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");}, t;}(l.default);n.default = p;}),$ = n(function (t, n) {var r = e && e.__extends || function () {var _e6 = function e(t, n) {return (_e6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e6(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var c = a(J),u = function (e) {function t(t) {var n = e.call(this, o(o({}, t), { persistence: "local" })) || this;return n._anonymousUuidKey = K.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = K.LOGIN_TYPE_KEY + "_" + n.config.env, n;}return r(t, e), t.prototype.init = function () {e.prototype.init.call(this);}, t.prototype.signIn = function () {return s(this, void 0, void 0, function () {var e, t, n;return i(this, function (r) {switch (r.label) {case 0:return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, [4, this.httpRequest.send("auth.signInAnonymously", { anonymous_uuid: e, refresh_token: t })];case 1:return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), this.setRefreshToken(n.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return r.sent(), W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.ANONYMOUS), [2, { credential: { refreshToken: n.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败");}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return s(this, void 0, void 0, function () {var t, n, r;return i(this, function (o) {switch (o.label) {case 0:return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), [4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: t, refresh_token: n, ticket: e })];case 1:return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return o.sent(), W.activateEvent(W.EVENTS.ANONYMOUS_CONVERTED, { refresh_token: r.refresh_token }), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, c.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: r.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败");}});});}, t.prototype.getAllStore = function () {var e = {};return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", e;}, t.prototype._setAnonymousUUID = function (e) {this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), this.cache.setStore(this._loginTypeKey, c.LOGINTYPE.ANONYMOUS);}, t.prototype._clearAnonymousUUID = function () {this.cache.removeStore(this._anonymousUuidKey);}, t;}(c.default);n.AnonymousAuthProvider = u;}),Q = n(function (t, n) {var r = e && e.__extends || function () {var _e7 = function e(t, n) {return (_e7 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(t, n);};return function (t, n) {function r() {this.constructor = t;}_e7(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());};}(),o = e && e.__assign || function () {return (o = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},c = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var u = a(X),l = c(J),f = function (e) {function t(t) {var n = e.call(this, t) || this;return n.config = t, n;}return r(t, e), t.prototype.init = function () {e.prototype.init.call(this), this.customAuthProvider = new l.default(this.config), this.customAuthProvider.init();}, t.prototype.weixinAuthProvider = function (e) {var t = e.appid,n = e.scope,r = e.loginMode,o = e.state,s = new u.default(this.config, t, n, r, o);return s.init(), s;}, t.prototype.signInAnonymously = function () {return s(this, void 0, void 0, function () {var e = this;return i(this, function (t) {switch (t.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new $.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE, function (t) {if (t && t.data === l.LOGINTYPE.ANONYMOUS) {var n = e._anonymousAuthProvider.getAllStore();for (var r in n) {n[r] && e.httpRequest.cache.setStore(r, n[r]);}}}), [4, this._anonymousAuthProvider.signIn()];case 1:return [2, t.sent()];}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return s(this, void 0, void 0, function () {var t = this;return i(this, function (n) {switch (n.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new $.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), W.addEventListener(W.EVENTS.ANONYMOUS_CONVERTED, function (e) {var n = e.data.refresh_token;n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);}), [4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return [2, n.sent()];}});});}, t.prototype.signOut = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o, s, a;return i(this, function (i) {switch (i.label) {case 0:if (this.loginType === l.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, o = e.accessTokenExpireKey, "auth.logout", (s = t.getStore(n)) ? [4, this.httpRequest.send("auth.logout", { refresh_token: s })] : [2];case 1:return a = i.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.NULL), [2, a];}});});}, t.prototype.getAccessToken = function () {return s(this, void 0, void 0, function () {var e;return i(this, function (t) {switch (t.label) {case 0:return e = {}, [4, this.httpRequest.getAccessToken()];case 1:return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)];}});});}, t.prototype.onLoginStateExpire = function (e) {W.addEventListener("loginStateExpire", e);}, t.prototype.getLoginState = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o;return i(this, function (s) {switch (s.label) {case 0:if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, !(o = t.getStore(n))) return [3, 5];s.label = 1;case 1:return s.trys.push([1, 3,, 4]), [4, this.httpRequest.refreshAccessToken()];case 2:return s.sent(), [3, 4];case 3:return s.sent(), [2, null];case 4:return [2, { isAnonymous: this.loginType === l.LOGINTYPE.ANONYMOUS, credential: { refreshToken: o, accessToken: t.getStore(r) } }];case 5:return [2, null];}});});}, t.prototype.signInWithTicket = function (e) {return s(this, void 0, void 0, function () {var t, n, r, o;return i(this, function (s) {switch (s.label) {case 0:if ("string" != typeof e) throw new Error("ticket must be a string");return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [4, this.httpRequest.send("auth.signInWithTicket", { ticket: e, refresh_token: n.getStore(r) || "" })];case 1:return (o = s.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return s.sent(), W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED), W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE, l.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: o.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败");}});});}, t.prototype.shouldRefreshAccessToken = function (e) {this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);}, t.prototype.getUserInfo = function () {return this.httpRequest.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : o(o({}, e.data), { requestId: e.seqId });});}, t;}(l.default);n.default = f;}),Z = n(function (t, n) {var r = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},o = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), n.uploadFile = function (e, t) {t = t || I.createPromiseCallback();var n = new z.Request(this.config),r = e.cloudPath,o = e.filePath,s = e.onUploadProgress,i = e.fileType || "image";return n.send("storage.getUploadMetadata", { path: r }).then(function (e) {var a = e.data,c = a.url,u = a.authorization,l = a.token,f = a.fileId,p = a.cosFileId,h = e.requestId,d = { key: r, signature: u, "x-cos-meta-fileid": p, success_action_status: "201", "x-cos-security-token": l };n.upload({ url: c, data: d, file: o, name: r, fileType: i, onUploadProgress: s }).then(function (e) {201 === e.statusCode ? t(null, { fileID: f, requestId: h }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;}, n.deleteFile = function (e, t) {var n = e.fileList;if (t = t || I.createPromiseCallback(), !n || !Array.isArray(n)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };for (var r = 0, o = n; r < o.length; r++) {var s = o[r];if (!s || "string" != typeof s) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}var i = { fileid_list: n };return new z.Request(this.config).send("storage.batchDeleteFile", i).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.getTempFileURL = function (e, t) {var n = e.fileList;t = t || I.createPromiseCallback(), n && Array.isArray(n) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });for (var r = [], o = 0, s = n; o < s.length; o++) {var i = s[o];"object" == typeof i ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), r.push({ fileid: i.fileID, max_age: i.maxAge })) : "string" == typeof i ? r.push({ fileid: i }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}var a = { file_list: r };return new z.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.downloadFile = function (e, t) {var s = e.fileID;return r(this, void 0, void 0, function () {var e, r, i, a, c;return o(this, function (o) {switch (o.label) {case 0:return [4, n.getTempFileURL.call(this, { fileList: [{ fileID: s, maxAge: 600 }] })];case 1:return e = o.sent(), "SUCCESS" !== (r = e.fileList[0]).code ? [2, t ? t(r) : new Promise(function (e) {e(r);})] : (i = r.download_url, i = encodeURI(i), a = new z.Request(this.config), t ? [4, a.download({ url: i })] : [3, 3]);case 2:return c = o.sent(), t(c), [3, 4];case 3:return [2, a.download({ url: i })];case 4:return [2];}});});};}),ee = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.callFunction = function (e, t) {var n,r = e.name,o = e.data,s = e.query,i = e.parse,a = e.search,c = t || I.createPromiseCallback();try {n = o ? JSON.stringify(o) : "";} catch (e) {return Promise.reject(e);}if (!r) return Promise.reject(new Error("函数名不能为空"));var u = { query: s, parse: i, search: a, function_name: r, request_data: n };return new z.Request(this.config).send("functions.invokeFunction", u).then(function (e) {if (e.code) c(null, e);else {var t = e.data.response_data;if (i) c(null, { result: t, requestId: e.requestId });else try {t = JSON.parse(e.data.response_data), c(null, { result: t, requestId: e.requestId });} catch (e) {c(new Error("response data must be json"));}}return c.promise;}).catch(function (e) {c(e);}), c.promise;};}),te = t(n(function (t) {var n = e && e.__assign || function () {return (n = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},r = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},o = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;},s = r(P),i = r(Q),a = o(Z),c = o(ee),u = { timeout: 15e3 },l = new (function () {function e(e) {var t = this;this.config = e || this.config, this.authObj = void 0, W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE, function (e) {e.data === J.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");});}return e.prototype.init = function (t) {return this.config = n(n({}, u), t), Y.Adapter.adapter || this._useDefaultAdapter(), new e(this.config);}, e.prototype.auth = function (e) {var t = (void 0 === e ? {} : e).persistence;return this.authObj || (this.config = n(n({}, this.config), { persistence: t || Y.Adapter.adapter.primaryStorage || "session" }), this.authObj = new i.default(this.config), this.authObj.init()), this.authObj;}, e.prototype.on = function (e, t) {return W.addEventListener.apply(this, [e, t]);}, e.prototype.off = function (e, t) {return W.removeEventListener.apply(this, [e, t]);}, e.prototype.callFunction = function (e, t) {return c.callFunction.apply(this, [e, t]);}, e.prototype.deleteFile = function (e, t) {return a.deleteFile.apply(this, [e, t]);}, e.prototype.getTempFileURL = function (e, t) {return a.getTempFileURL.apply(this, [e, t]);}, e.prototype.downloadFile = function (e, t) {return a.downloadFile.apply(this, [e, t]);}, e.prototype.uploadFile = function (e, t) {return a.uploadFile.apply(this, [e, t]);}, e.prototype.useAdapters = function (e) {var t = Y.useAdapters(e) || {},n = t.adapter,r = t.runtime;n && (Y.Adapter.adapter = n), r && (Y.Adapter.runtime = r);}, e.prototype._useDefaultAdapter = function () {var e = Y.useDefaultAdapter(),t = e.adapter,n = e.runtime;Y.Adapter.adapter = t, Y.Adapter.runtime = n;}, e;}())();l.useAdapters(s.default);try {window.tcb = l;} catch (e) {}t.exports = l;}));te.useAdapters(P);var ne = te,re = ne.init;ne.init = function (e) {e.env = e.spaceId;var t = re.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};return ["uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};var oe, se;function ie(e) {oe || (oe = { PLATFORM: "app-plus", OS: u, APPID: a.appid, CLIENT_SDK_VERSION: "1.0.0" }, se = { ak: a.appid, p: "android" === u ? "a" : "i", ut: p(), uuid: f() });var t = JSON.parse(JSON.stringify(e.data || {})),n = e.name,r = this.config.spaceId,o = { tencent: "t", aliyun: "a" }[this.config.provider],s = Object.assign({}, se, { fn: n, sid: r, pvd: o });Object.assign(t, { clientInfo: oe, uniCloudClientInfo: encodeURIComponent(JSON.stringify(s)) });var i = this.adapter.getStore("uni_id_token") || this.adapter.getStore("uniIdToken");return i && (t.uniIdToken = i), e.data = t, e;}var ae = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStore: function setStore(e, t) {return  false ? undefined : uni.setStorageSync(e, t);}, getStore: function getStore(e) {return  false ? undefined : uni.getStorageSync(e);} };var ce = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this.adapter = ae;}_createClass(_class, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "app-plus");switch (e.provider) {case "tencent":t = ne.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = v.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}if (t.isReady = !1, !1 !== e.autoSignIn) {var _e8 = t.auth();t.initSignIn = _e8.getLoginState().then(function (t) {return t ? Promise.resolve() : _e8.signInAnonymously();}).then(function () {return new Promise(function (e) { false ? (undefined) : setTimeout(function () {u = uni.getSystemInfoSync().platform, c = uni.getStorageSync("__DC_CLOUD_UUID") || l(32), e();}, 0);});}).then(function () {t.isReady = !0;});}return function (e) {var t = e.callFunction;e.callFunction = function (e) {var _this6 = this;var n;return n = this.isReady ? Promise.resolve() : this.initSignIn, n.then(function () {var n = ie.call(_this6, e),r = { aliyun: "aliyun", tencent: "tcb" }[_this6.config.provider];return new Promise(function (o, s) {t.call(_this6, n).then(function (t) {if (_this6.config.useDebugFunction && t && t.requestId) {var _n = JSON.stringify({ spaceId: _this6.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n, "[/").concat(r, "-request]"));}o(t);}).catch(function (t) {if (_this6.config.useDebugFunction && t && t.requestId) {var _n2 = JSON.stringify({ spaceId: _this6.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n2, "[/").concat(r, "-request]"));}t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), s(t);});});});};var n = e.callFunction;e.callFunction = function (e) {return s(n).call(this, e);};}(t), t.init = this.init, t.adapter = this.adapter, t;} }, { key: "setAdapter", value: function setAdapter(e) {this.adapter = e;} }]);return _class;}())();try {var _e9 = {};1 === [{"provider":"aliyun","spaceName":"uni-test-cloud","spaceId":"810ab13a-ae04-4fa4-b164-39c0c48b112e","clientSecret":"61S1obJbJnNZQZhGYKnEZw==","endpoint":"https://api.bspapp.com"}].length && (_e9 = [{"provider":"aliyun","spaceName":"uni-test-cloud","spaceId":"810ab13a-ae04-4fa4-b164-39c0c48b112e","clientSecret":"61S1obJbJnNZQZhGYKnEZw==","endpoint":"https://api.bspapp.com"}][0]), ce = ce.init(_e9);} catch (e) {["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {ce[e] = function () {var e = [{"provider":"aliyun","spaceName":"uni-test-cloud","spaceId":"810ab13a-ae04-4fa4-b164-39c0c48b112e","clientSecret":"61S1obJbJnNZQZhGYKnEZw==","endpoint":"https://api.bspapp.com"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e), Promise.reject(new i({ code: "SYS_ERR", message: e }));};});}var ue = ce;var _default = ue;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 9), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 8)["default"]))

/***/ }),
/* 12 */
/*!**************************************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/pages.json?{"type":"stat"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__98EB856" };exports.default = _default;

/***/ }),
/* 13 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 14);

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 15);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 15 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!*******************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/App.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!********************************************************************************************!*\
  !*** /Users/yangdanying/2020/fullweb/uni-project/uni-spy/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangdanying/2020/fullweb/uni-project/uni-spy/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ })
],[[0,"app-config"]]]);