function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-mobile-nav></app-mobile-nav>\n<router-outlet #outlet=\"outlet\"></router-outlet>\n<!-- [@routeAnimations]=\"prepareRoute(outlet)\" -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-card/landing-card-component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-card/landing-card-component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingCardLandingCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@flyInOut] class=\"landing card\">\n    <div class=\"container image\">\n      <img src=\"../assets/IMG_3486.jpg\" alt=\"Karan Singh\">\n    </div>\n    <h1>Karan Singh</h1>  \n    <hr>\n    <h2>About Me: </h2>\n    <p>\n      A Software Engineer in the DC Metro Area.\n      <br>\n      <u>Hobbies</u>: Tennis, Muay Thai, Music, etc.\n      <br>\n    </p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-nav/mobile-nav.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-nav/mobile-nav.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileNavMobileNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n    <!-- [ngClass]=\"status ? 'burger toggle' : 'burger'\" -->\n    <div \n    class = \"burger\"\n    (click)=\"onClick($event)\" \n    #burger>\n        <div class=\"line1\"></div>\n        <div class=\"line2\"></div>\n        <div class=\"line3\"></div>\n    </div>\n    <div class=\"name\">\n        <a href=\"/about\"><h4>Karan Singh</h4></a>\n    </div>\n\n    <!-- <ul [ngClass] = \"status ? 'nav-links nav-active' : 'nav-links'\" #navlinks> -->\n    <ul class=\"nav-links\" #navlinks>\n        <li class=\"about\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        <li class=\"projects\"><a routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a></li>\n        <!-- <li class=\"resume\"><a routerLink=\"/resume\" routerLinkActive=\"active\">Resume</a></li> -->\n    </ul>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"title\">Projects</h2>\n<hr>\n<section @slideIn class=\"card-list\">\n    <article class=\"card\">\n        <header>\n            <img src=\"../../assets/foodapp.png\" alt=\"FoodApp.dev\">\n        </header>\n        <hr>\n        <footer class=\"card-header\">\n            <h2><u>Food Finding App</u></h2>\n            <p>An app for finding local Restaurants and highlights</p>\n            <div>\n                <form class=\"double\" action=\"https://foodapp.dev\">\n                    <button>LIVE</button>\n                </form>\n                <form class=\"double\" action=\"https://github.com/KaranSaini/FoodFinderApp\">\n                    <button>CODE</button>\n                </form>\n            </div>\n        </footer>\n    </article>\n\n    <article class=\"card\">\n        <header>\n            <img src=\"../../assets/Screen Shot 2020-11-25 at 12.14.35 PM.png\" alt=\"Personal Website\">\n        </header>\n        <hr>\n        <footer class=\"card-header\">\n            <h2><u>Personal Website</u></h2>\n            <p>This Website! Click to view the code!</p>\n            <form action=\"https://github.com/KaranSaini/personal-website\">\n                <button>CODE</button>\n            </form>\n        </footer>\n    </article>\n    \n    \n    <article class=\"card\">\n        <header>\n            <img src=\"../../assets/Screen Shot 2020-11-25 at 1.40.10 PM.png\" alt=\"Bot Logo\">\n        </header>\n        <footer class=\"card-header\">\n            <h2><u>News Bot</u></h2>\n            <p>Bot that shows relevant news articles based on \n                user query. \n            </p>\n            <form action=\"https://github.com/KaranSaini/discordNewsBot\">\n                <button>CODE</button>\n            </form>\n        </footer>\n    </article>\n\n    <article class=\"card\">\n        <header>\n            \n        </header>\n        <footer class=\"card-header\">\n            <h2><u>Smaller Projects...</u></h2>\n            <form action=\"https://github.com/KaranSaini?tab=repositories\">\n                <button>CODE</button>\n            </form>\n        </footer>\n    </article>\n</section>\n\n<hr>\n\n<h2 class=\"idea\">Ideas/Works in Progress</h2>\n<section class=\"card-list ideas\">\n    <article class=\"card idea\">\n        <header>\n            \n        </header>\n        <footer class=\"card-header\">\n            <h2><u>iOS Pomodoro App</u></h2>\n            <p>Work Smarter.</p>\n            <form action=\"#\">\n                <button>Coming Soon...</button>\n            </form>\n        </footer>\n    </article>\n\n    <article class=\"card idea\">\n        <header>\n            \n        </header>\n        <footer class=\"card-header\">\n            <h2><u>Tennis Match App/Site</u></h2>\n            <p>Find Local Tennis Players w/ Rating System</p>\n            <form action=\"\">\n                <button>Coming Soon...</button>\n            </form>\n        </footer>\n    </article>\n\n    <article class=\"card idea\">\n        <header>\n            \n        </header>\n        <footer class=\"card-header\">\n            <h2>MORE TO COME</h2>\n            <p>Always Scheming</p>\n        </footer>\n    </article>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResumeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<article class=\"resume-container\">\n    <h2>RESUME PAGE UNDER DEVELOPMENT!!</h2>\n    <p>Feel free to contact me for my resume in the meantime</p>\n    <form action=\"mailto:kss4382@gmail.com\">\n        <button>Say Whatsup!</button>\n    </form>\n</article>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _landing_card_landing_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landing-card/landing-card.component */
    "./src/app/landing-card/landing-card.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts"); //component imports


    var routes = [{
      path: '',
      redirectTo: '/about',
      pathMatch: 'full'
    }, {
      path: 'about',
      component: _landing_card_landing_card_component__WEBPACK_IMPORTED_MODULE_4__["LandingCardComponent"],
      data: {
        animation: 'about'
      }
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
      data: {
        animation: 'projects'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      animations: [],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _landing_card_landing_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing-card/landing-card.component */
    "./src/app/landing-card/landing-card.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mobile-nav/mobile-nav.component */
    "./src/app/mobile-nav/mobile-nav.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _landing_card_landing_card_component__WEBPACK_IMPORTED_MODULE_6__["LandingCardComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"], _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_9__["MobileNavComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/landing-card/landing-card.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/landing-card/landing-card.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingCardLandingCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.landing {\n  padding: 3em 2em 3em 2em;\n  margin: 2em auto 0 auto;\n  position: relative;\n  width: 25em;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-shadow: 0 13.6px 10px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);\n  border-radius: 10px;\n  font-size: 150%;\n}\n\n.container {\n  box-sizing: border-box;\n  position: relative;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.container img {\n  width: 100%;\n  height: auto;\n  margin-top: -25%;\n}\n\n.container:hover {\n  transition: all 1s ease 1s;\n  width: 200px;\n  height: 200px;\n}\n\n.shrunk {\n  transition: all 1s ease 1s;\n  width: 75px;\n  height: 75px;\n}\n\n@media screen and (max-width: 768px) {\n  .landing {\n    width: auto;\n    margin-right: 1em;\n    margin-left: 1em;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJhbnNpbmdoL0RvY3VtZW50cy9kZXYvcGVyc29uYWx3ZWJzaXRlL3ZlcnNpb24yL1BlcnNvbmFsV2Vic2l0ZVYyL3NyYy9hcHAvbGFuZGluZy1jYXJkL2xhbmRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1jYXJkL2xhbmRpbmctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnRkFDRjtFQUdFLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRE1BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEo7O0FESUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRlI7O0FETUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSEo7O0FETUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLWNhcmQvbGFuZGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5sYW5kaW5nIHtcbiAgICBwYWRkaW5nOiAzZW0gMmVtIDNlbSAyZW07XG4gICAgbWFyZ2luOiAyZW0gYXV0byAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNWVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3gtc2hhZG93OlxuICAwIDEzLjZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLFxuICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA3KVxuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5cbi5jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IC0yNSU7XG4gICAgfVxufVxuXG4uY29udGFpbmVyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAxcztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNocnVuayB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UgMXM7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLmxhbmRpbmcge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGFuZGluZyB7XG4gIHBhZGRpbmc6IDNlbSAyZW0gM2VtIDJlbTtcbiAgbWFyZ2luOiAyZW0gYXV0byAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1ZW07XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNoYWRvdzogMCAxMy42cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTI1JTtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlIDFzO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zaHJ1bmsge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZSAxcztcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxhbmRpbmcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/landing-card/landing-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-card/landing-card.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingCardComponent */

  /***/
  function srcAppLandingCardLandingCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingCardComponent", function () {
      return LandingCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var LandingCardComponent = /*#__PURE__*/function () {
      function LandingCardComponent() {
        _classCallCheck(this, LandingCardComponent);

        this.imageContainer = document.getElementsByClassName('container image');
      }

      _createClass(LandingCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.imageContainer);
          setTimeout(function () {
            Array.from(_this.imageContainer).forEach(function (item) {
              item.classList.add('shrunk');
            });
          }, 1000);
        }
      }]);

      return LandingCardComponent;
    }();

    LandingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-card-component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-card/landing-card-component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200)])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-card.component.scss */
      "./src/app/landing-card/landing-card.component.scss"))["default"]]
    })], LandingCardComponent);
    /***/
  },

  /***/
  "./src/app/mobile-nav/mobile-nav.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/mobile-nav/mobile-nav.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileNavMobileNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  background-color: #171616;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 8vh;\n  width: 100%;\n}\n\nnav .name {\n  box-sizing: border-box;\n  margin-left: 3rem;\n  margin-right: 5vw;\n}\n\nnav div {\n  color: #fdfdfd;\n  letter-spacing: 5px;\n}\n\nnav .nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  width: 50vw;\n  align-content: center;\n  margin-right: 5rem;\n}\n\nnav .nav-links li {\n  padding: 0 1rem;\n}\n\nnav .burger {\n  display: none;\n}\n\nnav .burger div {\n  width: 25px;\n  height: 2.5px;\n  background-color: #fdfdfd;\n  margin: 5px;\n  transition: all 0.3s ease;\n}\n\na, a:active, a:visited {\n  color: #fdfdfd;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 1024px) {\n  .nav-links {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .burger {\n    display: block !important;\n    cursor: pointer;\n  }\n\n  nav {\n    display: flex;\n    justify-content: space-between;\n  }\n  nav .burger {\n    margin-left: 3rem;\n  }\n  nav .name {\n    margin-right: 3rem;\n  }\n\n  .nav-links {\n    position: absolute;\n    z-index: 5;\n    left: 0px;\n    height: 92vh;\n    top: 8vh;\n    background-color: #171616;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    transform: translateX(-100%);\n    transition: transform 0.5s ease-in;\n  }\n\n  a, a:active, a:visited {\n    text-decoration: none;\n    color: #fdfdfd;\n  }\n}\n\n.nav-active {\n  min-width: 100vw !important;\n  transform: translateX(0%);\n  position: absolute;\n  z-index: 5;\n}\n\n.nav-active .about {\n  -webkit-animation: navLinkFade 0.5s ease backwards 0.25s;\n          animation: navLinkFade 0.5s ease backwards 0.25s;\n}\n\n.nav-active .projects {\n  -webkit-animation: navLinkFade 0.5s ease backwards 0.5s;\n          animation: navLinkFade 0.5s ease backwards 0.5s;\n}\n\n.nav-active .resume {\n  -webkit-animation: navLinkFade 0.5s ease backwards 0.75s;\n          animation: navLinkFade 0.5s ease backwards 0.75s;\n}\n\n.toggle .line1 {\n  transform: rotate(-45deg) translate(-5px, 6px);\n}\n\n.toggle .line2 {\n  opacity: 0;\n}\n\n.toggle .line3 {\n  transform: rotate(45deg) translate(-5px, -6px);\n}\n\n@-webkit-keyframes navLinkFade {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes navLinkFade {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nimg {\n  height: 3em;\n  width: 3em;\n  background-color: white;\n  border-radius: 50%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {\n  nav {\n    min-height: 15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJhbnNpbmdoL0RvY3VtZW50cy9kZXYvcGVyc29uYWx3ZWJzaXRlL3ZlcnNpb24yL1BlcnNvbmFsV2Vic2l0ZVYyL3NyYy9hcHAvbW9iaWxlLW5hdi9tb2JpbGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUtbmF2L21vYmlsZS1uYXYuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMva2FyYW5zaW5naC9Eb2N1bWVudHMvZGV2L3BlcnNvbmFsd2Vic2l0ZS92ZXJzaW9uMi9QZXJzb25hbFdlYnNpdGVWMi9zcmMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLHlCRVBRO0VGUVIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDREo7O0FER0k7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGNFckJLO0VGc0JMLG1CQUFBO0FDRlI7O0FES0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0hSOztBRElRO0VBQ0ksZUFBQTtBQ0ZaOztBRE1JO0VBQ0ksYUFBQTtBQ0pSOztBREtRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkV6Q0M7RUYwQ0QsV0FBQTtFQUNBLHlCQUFBO0FDSFo7O0FEUUE7RUFDSSxjRWpEUztFRmtEVCxxQkFBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxVQUFBO0VDTE47QUFDRjs7QURRQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxlQUFBO0VDTk47O0VEU0U7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7RUNOTjtFRE9NO0lBQ0ksaUJBQUE7RUNMVjtFRE9NO0lBQ0ksa0JBQUE7RUNMVjs7RURVRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLHlCRXBGSTtJRnFGSixhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0Esa0NBQUE7RUNQTjs7RURTRTtJQUNJLHFCQUFBO0lBQ0EsY0U1Rks7RURzRlg7QUFDRjs7QURTQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNQSjs7QURRSTtFQUNJLHdEQUFBO1VBQUEsZ0RBQUE7QUNOUjs7QURRSTtFQUNJLHVEQUFBO1VBQUEsK0NBQUE7QUNOUjs7QURRSTtFQUNJLHdEQUFBO1VBQUEsZ0RBQUE7QUNOUjs7QURVQTtFQUNJLDhDQUFBO0FDUEo7O0FEU0E7RUFDSSxVQUFBO0FDTko7O0FEUUE7RUFDSSw4Q0FBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUNMTjtFRE9FO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VDTE47QUFDRjs7QURIQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VDTE47RURPRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURrQkM7RUFLSTtJQUNJLGdCQUFBO0VDbkJQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtbmF2L21vYmlsZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb2xvcnMnO1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLm5hbWUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgICAgY29sb3I6ICRtYWluLWxpZ2h0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIH1cblxuICAgIC5uYXYtbGlua3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnVyZ2VyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWxpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hLCBhOmFjdGl2ZSwgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogJG1haW4tbGlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xuICAgIC5uYXYtbGlua3Mge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5idXJnZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAuYnVyZ2VyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdi1saW5rcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDkydmg7XG4gICAgICAgIHRvcDogOHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluO1xuICAgIH1cbiAgICBhLCBhOmFjdGl2ZSwgYTp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJG1haW4tbGlnaHQ7XG4gICAgfVxufVxuXG4ubmF2LWFjdGl2ZSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50OyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIC5hYm91dCB7XG4gICAgICAgIGFuaW1hdGlvbjogbmF2TGlua0ZhZGUgMC41cyBlYXNlIGJhY2t3YXJkcyAuMjVzO1xuICAgIH1cbiAgICAucHJvamVjdHMge1xuICAgICAgICBhbmltYXRpb246IG5hdkxpbmtGYWRlIDAuNXMgZWFzZSBiYWNrd2FyZHMgLjVzO1xuICAgIH1cbiAgICAucmVzdW1lIHtcbiAgICAgICAgYW5pbWF0aW9uOiBuYXZMaW5rRmFkZSAwLjVzIGVhc2UgYmFja3dhcmRzIC43NXM7XG4gICAgfVxufVxuXG4udG9nZ2xlIC5saW5lMSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgNnB4KTtcbn1cbi50b2dnbGUgLmxpbmUyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuLnRvZ2dsZSAubGluZTMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwtNnB4KTtcbn1cblxuQGtleWZyYW1lcyBuYXZMaW5rRmFkZXtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxufVxuXG5pbWcge1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAzZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vL2lwaG9uZSBYXG5AbWVkaWEgb25seSBzY3JlZW4gXG5hbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgXG5hbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweCkgXG5hbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbmFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgeyBcbiAgIFxuIH1cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgXG4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpIFxuIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcbiAgICAgbmF2IHtcbiAgICAgICAgIG1pbi1oZWlnaHQ6IDE1dmg7XG4gICAgIH1cbiB9IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IC5uYW1lIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xufVxubmF2IGRpdiB7XG4gIGNvbG9yOiAjZmRmZGZkO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxubmF2IC5uYXYtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDUwdnc7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xufVxubmF2IC5uYXYtbGlua3MgbGkge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5uYXYgLmJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5uYXYgLmJ1cmdlciBkaXYge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgbWFyZ2luOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmEsIGE6YWN0aXZlLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZkZmRmZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdi1saW5rcyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIG5hdiAuYnVyZ2VyIHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgfVxuICBuYXYgLm5hbWUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgfVxuXG4gIC5uYXYtbGlua3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDkydmg7XG4gICAgdG9wOiA4dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XG4gIH1cblxuICBhLCBhOmFjdGl2ZSwgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZGZkZmQ7XG4gIH1cbn1cbi5uYXYtYWN0aXZlIHtcbiAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG59XG4ubmF2LWFjdGl2ZSAuYWJvdXQge1xuICBhbmltYXRpb246IG5hdkxpbmtGYWRlIDAuNXMgZWFzZSBiYWNrd2FyZHMgMC4yNXM7XG59XG4ubmF2LWFjdGl2ZSAucHJvamVjdHMge1xuICBhbmltYXRpb246IG5hdkxpbmtGYWRlIDAuNXMgZWFzZSBiYWNrd2FyZHMgMC41cztcbn1cbi5uYXYtYWN0aXZlIC5yZXN1bWUge1xuICBhbmltYXRpb246IG5hdkxpbmtGYWRlIDAuNXMgZWFzZSBiYWNrd2FyZHMgMC43NXM7XG59XG5cbi50b2dnbGUgLmxpbmUxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgNnB4KTtcbn1cblxuLnRvZ2dsZSAubGluZTIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udG9nZ2xlIC5saW5lMyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgLTZweCk7XG59XG5cbkBrZXlmcmFtZXMgbmF2TGlua0ZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbmltZyB7XG4gIGhlaWdodDogM2VtO1xuICB3aWR0aDogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIG5hdiB7XG4gICAgbWluLWhlaWdodDogMTV2aDtcbiAgfVxufSIsIi8vICRtYWluLWRhcms6ICMyZjJmMmY7XG4kbWFpbi1kYXJrOiAjMTcxNjE2O1xuJG1haW4tbGlnaHQ6ICNmZGZkZmQ7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile-nav/mobile-nav.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/mobile-nav/mobile-nav.component.ts ***!
    \****************************************************/

  /*! exports provided: MobileNavComponent */

  /***/
  function srcAppMobileNavMobileNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function () {
      return MobileNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MobileNavComponent = /*#__PURE__*/function () {
      function MobileNavComponent(router) {
        _classCallCheck(this, MobileNavComponent);

        this.router = router; // status starts off as true because onInit the router subscription below will change it to false
        // status: boolean = true;

        this.navList = document.getElementsByClassName('nav-links');
        this.burger = document.getElementsByClassName('burger');
      }

      _createClass(MobileNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // to close the sidebar everytime the user navigates away from page
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              // this.status = !this.status;
              // console.log(this.status);
              _this2.navList[0].classList.add('nav-active');
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this2.navList[0].classList.remove('nav-active');

              _this2.burger[0].classList.remove('toggle');
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick(data) {
          this.burger[0].classList.add('toggle');
          this.navList[0].classList.add('nav-active');
        }
      }]);

      return MobileNavComponent;
    }();

    MobileNavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MobileNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-mobile-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mobile-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-nav/mobile-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mobile-nav.component.scss */
      "./src/app/mobile-nav/mobile-nav.component.scss"))["default"]]
    })], MobileNavComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  padding: 0;\n  margin: 0.5rem 0 0.5rem 0;\n  display: flex;\n  justify-content: space-around;\n}\n\n.card-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.card-list .card {\n  cursor: pointer;\n  position: relative;\n  top: 15%;\n  box-sizing: border-box;\n  overflow: hidden;\n  height: 350px;\n  width: calc(100vw / 4);\n  padding: 1rem 1rem;\n  margin: 1rem 1rem;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.card-list .card header {\n  box-sizing: border-box;\n  padding: 0;\n  margin-top: 1em;\n}\n\n.card-list .card header img {\n  position: static;\n  z-index: 2;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  width: 100%;\n  height: 100%;\n  max-height: 7em;\n}\n\n.card-list .card footer {\n  box-sizing: border-box;\n  margin: 0.5rem 0.5rem;\n  padding: 0;\n}\n\n.card-list .card footer div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n}\n\n.card-list .card footer form {\n  display: inline;\n}\n\n.card-list .card footer form button {\n  width: 100%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.card-list .card footer .double {\n  width: 50%;\n  margin: 0 10px;\n}\n\n.ideas {\n  background-color: black;\n  height: 95vh;\n}\n\n.ideas ~ h2 {\n  color: #fdfdfd;\n}\n\n.ideas .card {\n  background-color: white;\n}\n\n.idea {\n  opacity: 0;\n}\n\n.idea button:hover {\n  background-color: #E9E9E9;\n  color: #171616;\n}\n\n.idea-show {\n  transition: opacity 2s ease-out 0s;\n  opacity: 1;\n}\n\n.card h2 {\n  font-size: 2vw;\n}\n\n@media screen and (max-width: 768px) {\n  .card-list {\n    justify-content: space-evenly;\n    height: 100%;\n  }\n\n  .card {\n    min-width: 90vw;\n  }\n\n  .idea {\n    margin-top: 2em;\n  }\n\n  .ideas {\n    margin-bottom: 0;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .card {\n    min-width: 45vw;\n  }\n  .card h2 {\n    font-size: 3vw;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {\n  .card {\n    min-width: 74vw;\n  }\n  .card h2 {\n    font-size: 5vw;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {\n  .card {\n    min-width: 80vw;\n  }\n  .card h2 {\n    font-size: 5vw;\n  }\n}\n\n@media screen and (min-width: 2560px) {\n  .card h2 {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJhbnNpbmdoL0RvY3VtZW50cy9kZXYvcGVyc29uYWx3ZWJzaXRlL3ZlcnNpb24yL1BlcnNvbmFsV2Vic2l0ZVYyL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2thcmFuc2luZ2gvRG9jdW1lbnRzL2Rldi9wZXJzb25hbHdlYnNpdGUvdmVyc2lvbjIvUGVyc29uYWxXZWJzaXRlVjIvc3JjL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNISjs7QURLSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBYUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2xCWjs7QURtQlk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsK0JBQUE7VUFBQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQ3BCaEI7O0FEd0JRO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUN0Qlo7O0FEdUJZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3JCaEI7O0FEdUJZO0VBQ0ksZUFBQTtBQ3JCaEI7O0FEc0JnQjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNwQnBCOztBRHVCWTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDckJoQjs7QUQyQkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUN4Qko7O0FEMEJJO0VBQ0ksY0VqR0s7QUR5RWI7O0FEMkJJO0VBQ0ksdUJBQUE7QUN6QlI7O0FENkJBO0VBQ0ksVUFBQTtBQzFCSjs7QUQ0Qkk7RUFDSSx5QkFBQTtFQUNBLGNFL0dJO0FEcUZaOztBRDhCQTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBQzNCSjs7QUQrQkk7RUFDSSxjQUFBO0FDNUJSOztBRGdDQTtFQUNJO0lBQ0ksNkJBQUE7SUFDQSxZQUFBO0VDN0JOOztFRGdDRTtJQUNJLGVBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksZUFBQTtFQzdCTjs7RURnQ0U7SUFDSSxnQkFBQTtFQzdCTjtBQUNGOztBRGdDQTtFQUNJO0lBQ0ksZUFBQTtFQzlCTjtFRGdDTTtJQUNJLGNBQUE7RUM5QlY7QUFDRjs7QURtQ0E7RUFLSTtJQUNJLGVBQUE7RUNyQ047RUR1Q007SUFDSSxjQUFBO0VDckNWO0FBQ0Y7O0FEeUNBO0VBS0k7SUFDSSxlQUFBO0VDM0NOO0VENkNNO0lBQ0ksY0FBQTtFQzNDVjtBQUNGOztBRGdEQztFQUVRO0lBQ0ksZUFBQTtFQy9DWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb2xvcnMnO1xuXG5oMiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IC41cmVtIDAgLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY2FyZC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLyBoZWlnaHQ6IDkwdmg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIC5jYXJkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTUlO1xuXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLyA0KTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OlxuICAgICAgICAvLyAgICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDE0KSxcbiAgICAgICAgLy8gICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyMiksXG4gICAgICAgIC8vICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyksXG4gICAgICAgIC8vICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjAzOCksXG4gICAgICAgIC8vICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgICAgIC8vICAgICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcblxuICAgICAgICAvLyBkaXNwbGF5OiBncmlkO1xuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0byBhdXRvO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gLjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb3VibGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pZGVhcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIFxuICAgIH5oMiB7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1saWdodDtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLmlkZWEge1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xuICAgICAgICBjb2xvcjogJG1haW4tZGFyaztcbiAgICB9XG59XG5cbi5pZGVhLXNob3cge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1vdXQgMHM7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNhcmQge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLmNhcmQtbGlzdCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgfVxuXG4gICAgLmlkZWEge1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgfVxuXG4gICAgLmlkZWFzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiA0NXZ3O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL01lZGlhIFF1ZXJpZXMgc3BlY2lmaWNhbGx5IGZvciBpcGhvbmUgWCAtLSBpbiBwb3J0cmFpdFxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIFxuYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpIFxuYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG5hbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHsgXG4gICAgLmNhcmQge1xuICAgICAgICBtaW4td2lkdGg6IDc0dnc7XG4gICAgICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgfVxuICAgIH1cbiB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KVxuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHggKVxuIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKVxuIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiA4MHZ3O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgICAgICB9XG4gICAgfVxuIH1cblxuIC8vIFNldHRpbmcgYSBtYXggZm9udCBzaXplIHVzaW5nIG1lZGlhIHF1ZXJ5XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XG4gICAgIC5jYXJkIHtcbiAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICB9XG4gICAgIH1cbiB9IiwiaDIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNhcmQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uY2FyZC1saXN0IC5jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogY2FsYygxMDB2dyAvIDQpO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbjogMXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZC1saXN0IC5jYXJkIGhlYWRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5jYXJkLWxpc3QgLmNhcmQgaGVhZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDdlbTtcbn1cbi5jYXJkLWxpc3QgLmNhcmQgZm9vdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtbGlzdCAuY2FyZCBmb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmNhcmQtbGlzdCAuY2FyZCBmb290ZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jYXJkLWxpc3QgLmNhcmQgZm9vdGVyIGZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uY2FyZC1saXN0IC5jYXJkIGZvb3RlciAuZG91YmxlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pZGVhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDk1dmg7XG59XG4uaWRlYXMgfiBoMiB7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuLmlkZWFzIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pZGVhIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5pZGVhIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG4gIGNvbG9yOiAjMTcxNjE2O1xufVxuXG4uaWRlYS1zaG93IHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLW91dCAwcztcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhcmQgaDIge1xuICBmb250LXNpemU6IDJ2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQtbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgfVxuXG4gIC5pZGVhIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cblxuICAuaWRlYXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2FyZCB7XG4gICAgbWluLXdpZHRoOiA0NXZ3O1xuICB9XG4gIC5jYXJkIGgyIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5jYXJkIHtcbiAgICBtaW4td2lkdGg6IDc0dnc7XG4gIH1cbiAgLmNhcmQgaDIge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1NjhweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmNhcmQge1xuICAgIG1pbi13aWR0aDogODB2dztcbiAgfVxuICAuY2FyZCBoMiB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xuICAuY2FyZCBoMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59IiwiLy8gJG1haW4tZGFyazogIzJmMmYyZjtcbiRtYWluLWRhcms6ICMxNzE2MTY7XG4kbWFpbi1saWdodDogI2ZkZmRmZDtcblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        this.browserWindow = window;
        this.cards = document.getElementsByClassName('idea');
      } // function for checking if an element is in the current viewport ... might turn this into a service for use with other comps


      _createClass(ProjectsComponent, [{
        key: "isElementInViewPort",
        value: function isElementInViewPort(el) {
          var rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //could refactor this later...animating cards in
          this.browserWindow.addEventListener('scroll', function (data) {
            var timeStamp = data.timeStamp;

            if (_this3.isElementInViewPort(_this3.cards.item(1))) {
              Array.from(_this3.cards).forEach(function (element) {
                element.classList.add('idea-show');
              });
            }
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200)])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/resume/resume.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/resume/resume.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResumeResumeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".resume-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.resume-container form button {\n  width: 50vw;\n}\n.resume-container button:hover {\n  background-color: #E9E9E9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJhbnNpbmdoL0RvY3VtZW50cy9kZXYvcGVyc29uYWx3ZWJzaXRlL3ZlcnNpb24yL1BlcnNvbmFsV2Vic2l0ZVYyL3NyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FESUk7RUFDSSx5QkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGZvcm0ge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xuICAgIH1cbn0iLCIucmVzdW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlc3VtZS1jb250YWluZXIgZm9ybSBidXR0b24ge1xuICB3aWR0aDogNTB2dztcbn1cbi5yZXN1bWUtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.component.scss */
      "./src/app/resume/resume.component.scss"))["default"]]
    })], ResumeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/karansingh/Documents/dev/personalwebsite/version2/PersonalWebsiteV2/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map