/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-moon-festival.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/components/_basic.js":
/*!************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/components/_basic.js ***!
  \************************************************************/
/*! exports provided: basic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basic", function() { return basic; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

function basic() {
  // ajax 配合JQ3 引入設置
  $(document).ready(function () {
    $.ajax({
      method: "GET",
      url: "ajax/_header.html",
      type: "html"
    }).done(function (data) {
      $("#header").html(data);
      activeMenu();
    });
    $("#footer").load("ajax/_footer.html");
  });

  function activeMenu() {
    //dropdown toggle
    var target = $(".l-dropdown-title");

    function dropdownToggle() {
      target.unbind("click");
      target.on("click", function () {
        $(this).toggleClass("js-active");
        $(this).parent().siblings().find(".l-dropdown-title").removeClass("js-active");
      });
    }

    function removeToggle() {
      target.removeClass("js-active");
    } // mobile dropdown open


    var dropdownTrigger = $(".l-dropdown-icon");
    var dropdown = $(".l-dropdown-list");

    function dropdownShow() {
      dropdownTrigger.unbind("click");
      dropdownTrigger.on("click", function (e) {
        e.preventDefault();
        $("html").css({
          height: "100%",
          "overflow-y": "hidden"
        });
        $("body").css({
          height: "100%",
          "overflow-y": "hidden"
        });

        if (user.hasClass("js-show")) {
          user.removeClass("js-show");
          setTimeout(function () {
            dropdown.toggleClass("js-show");
          }, 500);
        } else {
          $("html").css({
            overflow: "auto"
          });
          $("body").css({
            overflow: "auto"
          });
          dropdown.toggleClass("js-show");
        }
      });
    } // mobile user open


    var userTrigger = $(".l-user-icon");
    var user = $(".l-user-list");

    function userShow() {
      userTrigger.unbind("click");
      userTrigger.on("click", function (e) {
        e.preventDefault();
        $("html").css({
          height: "100%",
          "overflow-y": "hidden"
        });
        $("body").css({
          height: "100%",
          "overflow-y": "hidden"
        });

        if (dropdown.hasClass("js-show")) {
          dropdown.removeClass("js-show");
          setTimeout(function () {
            user.toggleClass("js-show");
          }, 500);
        } else {
          $("html").css({
            overflow: "auto"
          });
          $("body").css({
            overflow: "auto"
          });
          user.toggleClass("js-show");
        }
      });
    }

    $(window).bind("resize", function () {
      if ($(this).width() < 992) {
        dropdownToggle();
        dropdownShow();
        userShow();
      } else if (992 < $(this).width() && $(this).width() < 1200) {
        userShow();
      } else {
        removeToggle();
        user.removeClass("js-show");
        dropdown.removeClass("js-show");
      }
    }).trigger("resize");
  } // 首頁 slick


  function slick() {
    var _slickSetting;

    var slickSetting = (_slickSetting = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      autoplay: true
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_slickSetting, "centerMode", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_slickSetting, "centerPadding", "0px"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_slickSetting, "arrows", false), _slickSetting);
    var slickTarget = [$(".p-event-container"), $(".p-service-wrapper")];
    $(window).bind("resize", function () {
      if ($(this).width() <= 767) {
        slickTarget.forEach(function (item) {
          if (item.hasClass("slick-initialized")) {
            item.slick("unslick");
          }

          item.slick(slickSetting);
        });
      } else {
        slickTarget.forEach(function (item) {
          if (item.hasClass("slick-initialized")) {
            item.slick("unslick");
          }
        });
      }
    }).trigger("resize");
  } //vip slick


  function vipSlick() {
    $(".v-slick-carousel-vip").slick({
      infinite: true,
      slidesPerRow: 3,
      rows: 2,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesPerRow: 2,
          rows: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          rows: 1
        }
      }]
    });
  } //加入最愛toggle


  function vipFavorite() {
    $(".p-vip-favorite-icon").on("click", function () {
      $(this).toggleClass("active");
    });
  } // 全網站 幻燈片速度


  function carouselSpeed() {
    $("#carouselIndicators").carousel({
      interval: 2000
    });
  } //繳費方式說明風琴加減按鈕


  function accordionToggle() {
    $('button[data-toggle="collapse"]').on("click", function () {
      $(this).find(".fa-plus").toggleClass("d-none");
      $(this).find(".fa-minus").toggleClass("d-none");
    });
  } // 簡易馬路小天使手機版頁籤選單 請上絕對網址 或是 相對路徑


  function setUrlRedirection() {
    if (document.querySelector("#tabSelect") !== null) {
      var trigger = document.querySelector("#tabSelect");
      trigger.addEventListener("change", function () {
        var urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        var hashReg = /^#/;
        var newUrl = this.value;

        if (urlReg.test(newUrl)) {
          var deviceAgent = navigator.userAgent;
          var isIos = deviceAgent.toLowerCase().match(/(mac|ipad|iphone)/); //判斷是否Safari瀏覽器

          if (isIos) {
            location.href = newUrl;
          } else {
            window.open(newUrl, "_blank");
          }
        } else if (hashReg.test(newUrl)) {
          $("html, body").animate({
            scrollTop: $(newUrl).offset().top
          }, 800, function () {
            window.location.hash = newUrl;
          });
        } else {
          var urlNow = location.href.slice(location.href.lastIndexOf("/") + 1, location.href.length);
          location.href = location.href.replace(urlNow, newUrl);
        }
      });
    }
  } //jq緩捲動+直接貼有hash的連結也能緩捲動


  function animateScroll() {
    $(".js-animateScroll").click(function (e) {
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      console.log(targetPos);

      if (target.indexOf("#") != -1) {
        e.preventDefault();
        $("html,body").animate({
          scrollTop: targetPos - 50
        }, 1000);
      }
    }); // if we have anchor on the url (calling from other page)

    if (window.location.hash) {
      // direct browser to top right away
      scroll(0, 0); // takes care of some browsers issue

      setTimeout(function () {
        scroll(0, 0);
      }, 1); // smooth scroll to the anchor id

      $("html,body").animate({
        scrollTop: $(window.location.hash).offset().top + "px"
      }, 800, "swing");
    }
  }

  function vipTabs() {
    if (document.querySelectorAll(".c-tabs-dropdown-menu").length !== 0) {
      var trigger = document.querySelectorAll(".c-tabs-dropdown-menu");
      [].slice.call(trigger).forEach(function (item) {
        item.addEventListener("mouseover", function () {
          item.classList.add("js-active");
        });
        item.addEventListener("mouseout", function () {
          item.classList.remove("js-active");
        });
      });
    }
  }

  function indexAd() {
    if (document.querySelector("#ad") !== null) {
      $("#ad").modal("show");
    }
  } //啟動function-網頁載入完成後


  $(document).ready(function () {
    slick();
    carouselSpeed();
    accordionToggle();
    setUrlRedirection();
    animateScroll();
    vipSlick();
    vipFavorite();
    vipTabs();
    indexAd();
  }); //啟動function-視窗大小變更

  $(window).resize(function () {}); //啟動function-捲動

  $(window).scroll(function () {// eventColor();
  }); // $('.slick').slick({
  // 	slidesToShow: 2,
  // 	slidesToScroll: 1,
  // });
}

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js":
/*!*************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/components/_fb-sdk.js ***!
  \*************************************************************/
/*! exports provided: loadFbSdk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFbSdk", function() { return loadFbSdk; });
function loadFbSdk() {
  (function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v9.0';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/main-moon-festival.js":
/*!*************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-moon-festival.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_moon_festival__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_moon-festival */ "./src/SASS_version3.2/assets/js/theme/_moon-festival.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
  Object(_theme_moon_festival__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  Object(_theme_moon_festival__WEBPACK_IMPORTED_MODULE_0__["createDecoFixed"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_moon-festival.js":
/*!***************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_moon-festival.js ***!
  \***************************************************************/
/*! exports provided: createCanvas, createDecoFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecoFixed", function() { return createDecoFixed; });
// 首頁節慶 canvas
function createCanvas() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("CANVAS");
    node.className = "t-canvas";
    document.querySelector(".wrapper").insertBefore(node, document.querySelector("#header"));
    var canvas = new CanvasAnimation();
    canvas.init();
  }
}

function CanvasAnimation() {
  this.flakes = new Flakes();
}

CanvasAnimation.prototype.init = function () {
  this.canvas = document.querySelector(".t-canvas");
  this.ctx = this.canvas.getContext("2d");
  this.ww = window.innerWidth;
  this.wh = window.innerHeight;
  this.canvas.width = this.ww;
  this.canvas.height = this.wh;
  this.flakes.init();
  this.render();
  this.resize();
};

CanvasAnimation.prototype.render = function () {
  this.ctx.clearRect(0, 0, this.ww, this.wh);
  this.drawFlakes();
  this.flakes.update();

  var _this = this;

  requestAnimationFrame(function () {
    _this.render();
  });
};

CanvasAnimation.prototype.drawFlakes = function () {
  this.ctx.fillStyle = this.flakes.color;

  for (var i = 0; i < this.flakes.maxNumber; i++) {
    var f = this.flakes.children[i];
    this.ctx.save();
    this.ctx.translate(f.x, f.y);
    this.ctx.rotate(f.r);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(f.curve.cp1x, f.curve.cp1y, f.curve.cp2x, f.curve.cp2y, f.curve.x, f.curve.y);
    this.ctx.fill();
    this.ctx.restore();
  }
};

CanvasAnimation.prototype.resize = function () {
  var _this = this;

  window.addEventListener("resize", function () {
    _this.ww = window.innerWidth;
    _this.wh = window.innerHeight;
    _this.canvas.width = _this.ww;
    _this.canvas.height = _this.wh;
    _this.flakes.ww = _this.ww;
    _this.flakes.wh = _this.wh;
  });
}; // flakes


function Flakes() {
  this.maxNumber = 15;
  this.children = [];
  this.angle = 0;
  this.ww = window.innerWidth;
  this.wh = window.innerHeight;
  this.color = "#facf38";
}

Flakes.prototype.init = function () {
  for (var i = 0; i < this.maxNumber; i++) {
    this.children.push({
      x: Math.random() * this.ww,
      y: Math.random() * this.wh,
      r: 0,
      d: Math.random() * this.maxNumber,
      curve: {
        cp1x: Math.abs(Math.random()) * 8 + 4,
        cp1y: Math.abs(Math.random()) * 8 + 20,
        cp2x: Math.abs(Math.random()) * 8 + 17,
        cp2y: Math.abs(Math.random()) * 8 + 8,
        x: 0,
        y: 0
      }
    });
  }
};

Flakes.prototype.update = function () {
  this.angle += 0.01;

  for (var i = 0; i < this.maxNumber; i++) {
    var f = this.children[i];
    f.y += Math.abs(Math.cos(this.angle + f.d)) + f.d / 4;
    f.x += Math.sin(this.angle) * 2;
    f.r = Math.sin(this.angle) * Math.PI + 1;

    if (this.checkBoundary(f.x, f.y) === true) {
      if (i % 4 > 0) {
        this.children[i] = {
          x: Math.random() * this.ww,
          y: -10,
          r: f.r,
          d: f.d,
          curve: {
            cp1x: Math.abs(Math.random()) * 8 + 4,
            cp1y: Math.abs(Math.random()) * 8 + 20,
            cp2x: Math.abs(Math.random()) * 8 + 17,
            cp2y: Math.abs(Math.random()) * 8 + 8,
            x: 0,
            y: 0
          }
        };
      } else {
        if (f.x > 0) {
          this.children[i] = {
            x: -5,
            y: Math.random() * this.wh,
            r: f.r,
            d: f.d,
            curve: {
              cp1x: Math.abs(Math.random()) * 8 + 4,
              cp1y: Math.abs(Math.random()) * 8 + 20,
              cp2x: Math.abs(Math.random()) * 8 + 17,
              cp2y: Math.abs(Math.random()) * 8 + 8,
              x: 0,
              y: 0
            }
          };
        } else {
          this.children[i] = {
            x: this.ww + 5,
            y: Math.random() * this.wh,
            r: f.r,
            d: f.d,
            curve: {
              cp1x: Math.abs(Math.random()) * 8 + 4,
              cp1y: Math.abs(Math.random()) * 8 + 20,
              cp2x: Math.abs(Math.random()) * 8 + 17,
              cp2y: Math.abs(Math.random()) * 8 + 8,
              x: 0,
              y: 0
            }
          };
        }
      }
    }
  }
};

Flakes.prototype.checkBoundary = function (x, y) {
  return x > this.ww + 10 || x < -10 || y > this.wh;
}; // 首頁節慶裝飾


function createDecoFixed() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-fixed d-block";
    node.innerHTML = '<div class="t-deco-moon-festival">\
        <img src="assets/img/theme/moon-festival/moon-cake.png" alt="" class="img-fluid">\
      </div>';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
    fixedToAbsoluteBottom();
  }
}

function fixedToAbsoluteBottom() {
  window.addEventListener("scroll", function () {
    var scrollY = window.pageYOffset;

    if (scrollY + window.innerHeight >= document.querySelector("#footer").offsetTop) {
      document.querySelector(".t-deco-fixed").classList.add("js-bottom");
    } else {
      document.querySelector(".t-deco-fixed").classList.remove("js-bottom");
    }
  });
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tbW9vbi1mZXN0aXZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0FTU192ZXJzaW9uMy4yL2Fzc2V0cy9qcy90aGVtZS9fbW9vbi1mZXN0aXZhbC5qcyJdLCJuYW1lcyI6WyJiYXNpYyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheCIsIm1ldGhvZCIsInVybCIsInR5cGUiLCJkb25lIiwiZGF0YSIsImh0bWwiLCJhY3RpdmVNZW51IiwibG9hZCIsInRhcmdldCIsImRyb3Bkb3duVG9nZ2xlIiwidW5iaW5kIiwib24iLCJ0b2dnbGVDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlVG9nZ2xlIiwiZHJvcGRvd25UcmlnZ2VyIiwiZHJvcGRvd24iLCJkcm9wZG93blNob3ciLCJlIiwicHJldmVudERlZmF1bHQiLCJjc3MiLCJoZWlnaHQiLCJ1c2VyIiwiaGFzQ2xhc3MiLCJzZXRUaW1lb3V0Iiwib3ZlcmZsb3ciLCJ1c2VyVHJpZ2dlciIsInVzZXJTaG93Iiwid2luZG93IiwiYmluZCIsIndpZHRoIiwidHJpZ2dlciIsInNsaWNrIiwic2xpY2tTZXR0aW5nIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJjZW50ZXJNb2RlIiwiYXV0b3BsYXkiLCJzbGlja1RhcmdldCIsImZvckVhY2giLCJpdGVtIiwidmlwU2xpY2siLCJzbGlkZXNQZXJSb3ciLCJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZpcEZhdm9yaXRlIiwiY2Fyb3VzZWxTcGVlZCIsImNhcm91c2VsIiwiaW50ZXJ2YWwiLCJhY2NvcmRpb25Ub2dnbGUiLCJzZXRVcmxSZWRpcmVjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsUmVnIiwiaGFzaFJlZyIsIm5ld1VybCIsInZhbHVlIiwidGVzdCIsImRldmljZUFnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNJb3MiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwibG9jYXRpb24iLCJocmVmIiwib3BlbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJoYXNoIiwidXJsTm93Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImxlbmd0aCIsInJlcGxhY2UiLCJhbmltYXRlU2Nyb2xsIiwiY2xpY2siLCJhdHRyIiwidGFyZ2V0UG9zIiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJzY3JvbGwiLCJ2aXBUYWJzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbmRleEFkIiwibW9kYWwiLCJyZXNpemUiLCJsb2FkRmJTZGsiLCJkIiwicyIsImlkIiwianMiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVEZWNvRml4ZWQiLCJub2RlIiwiY2xhc3NOYW1lIiwiY2FudmFzIiwiQ2FudmFzQW5pbWF0aW9uIiwiaW5pdCIsImZsYWtlcyIsIkZsYWtlcyIsInByb3RvdHlwZSIsImN0eCIsImdldENvbnRleHQiLCJ3dyIsImlubmVyV2lkdGgiLCJ3aCIsImlubmVySGVpZ2h0IiwicmVuZGVyIiwiY2xlYXJSZWN0IiwiZHJhd0ZsYWtlcyIsInVwZGF0ZSIsIl90aGlzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJpIiwibWF4TnVtYmVyIiwiZiIsImNoaWxkcmVuIiwic2F2ZSIsInRyYW5zbGF0ZSIsIngiLCJ5Iiwicm90YXRlIiwiciIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImJlemllckN1cnZlVG8iLCJjdXJ2ZSIsImNwMXgiLCJjcDF5IiwiY3AyeCIsImNwMnkiLCJmaWxsIiwicmVzdG9yZSIsImFuZ2xlIiwicHVzaCIsIk1hdGgiLCJyYW5kb20iLCJhYnMiLCJjb3MiLCJzaW4iLCJQSSIsImNoZWNrQm91bmRhcnkiLCJpbm5lckhUTUwiLCJmaXhlZFRvQWJzb2x1dGVCb3R0b20iLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRUb3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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b0JrQixDQUFDLEdBQUcsQ0FBQyxFQUF6QixJQUErQkMsQ0FBQyxHQUFHLEtBQUtqQixFQUEvQztBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxTQUFTYixlQUFULEdBQTJCO0FBQ3pCLE1BQUlySCxRQUFRLENBQUM2RCxhQUFULENBQXVCLFFBQXZCLE1BQXFDLElBQXpDLEVBQStDO0FBQzdDLFFBQUl5RCxJQUFJLEdBQUd0SCxRQUFRLENBQUNnSCxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQU0sUUFBSSxDQUFDQyxTQUFMLEdBQWlCLHNCQUFqQjtBQUNBRCxRQUFJLENBQUNtRCxTQUFMLEdBQ0U7QUFDTjtBQUNBLGFBSEk7QUFJQXpLLFlBQVEsQ0FDTDZELGFBREgsQ0FDaUIsUUFEakIsRUFFR3NELFlBRkgsQ0FFZ0JHLElBRmhCLEVBRXNCdEgsUUFBUSxDQUFDNkQsYUFBVCxDQUF1QixlQUF2QixDQUZ0QjtBQUdBNkcseUJBQXFCO0FBQ3RCO0FBQ0Y7O0FBRUQsU0FBU0EscUJBQVQsR0FBaUM7QUFDL0J4SSxRQUFNLENBQUM0QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDLFFBQUk2RyxPQUFPLEdBQUd6SSxNQUFNLENBQUMwSSxXQUFyQjs7QUFDQSxRQUNFRCxPQUFPLEdBQUd6SSxNQUFNLENBQUNpRyxXQUFqQixJQUNBbkksUUFBUSxDQUFDNkQsYUFBVCxDQUF1QixTQUF2QixFQUFrQ2dILFNBRnBDLEVBR0U7QUFDQTdLLGNBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NxQyxTQUF4QyxDQUFrREMsR0FBbEQsQ0FBc0QsV0FBdEQ7QUFDRCxLQUxELE1BS087QUFDTG5HLGNBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NxQyxTQUF4QyxDQUFrREUsTUFBbEQsQ0FBeUQsV0FBekQ7QUFDRDtBQUNGLEdBVkQ7QUFXRCIsImZpbGUiOiJtYWluLW1vb24tZmVzdGl2YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tbW9vbi1mZXN0aXZhbC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZnVuY3Rpb24gYmFzaWMoKSB7XG4gIC8vIGFqYXgg6YWN5ZCISlEzIOW8leWFpeioree9rlxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJChcIiNoZWFkZXJcIikuaHRtbChkYXRhKTtcbiAgICAgIGFjdGl2ZU1lbnUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2Zvb3RlclwiKS5sb2FkKFwiYWpheC9fZm9vdGVyLmh0bWxcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFjdGl2ZU1lbnUoKSB7XG4gICAgLy9kcm9wZG93biB0b2dnbGVcbiAgICB2YXIgdGFyZ2V0ID0gJChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnVuYmluZChcImNsaWNrXCIpO1xuICAgICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAuZmluZChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIC8vIG1vYmlsZSBkcm9wZG93biBvcGVuXG4gICAgdmFyIGRyb3Bkb3duVHJpZ2dlciA9ICQoXCIubC1kcm9wZG93bi1pY29uXCIpO1xuICAgIHZhciBkcm9wZG93biA9ICQoXCIubC1kcm9wZG93bi1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duU2hvdygpIHtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAodXNlci5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgdXNlciBvcGVuXG4gICAgdmFyIHVzZXJUcmlnZ2VyID0gJChcIi5sLXVzZXItaWNvblwiKTtcbiAgICB2YXIgdXNlciA9ICQoXCIubC11c2VyLWxpc3RcIik7XG4gICAgZnVuY3Rpb24gdXNlclNob3coKSB7XG4gICAgICB1c2VyVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHVzZXJUcmlnZ2VyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgIGlmIChkcm9wZG93bi5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1c2VyLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgZHJvcGRvd25Ub2dnbGUoKTtcbiAgICAgICAgICBkcm9wZG93blNob3coKTtcbiAgICAgICAgICB1c2VyU2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKDk5MiA8ICQodGhpcykud2lkdGgoKSAmJiAkKHRoaXMpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVUb2dnbGUoKTtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuXG4gIC8vIOmmlumggSBzbGlja1xuICBmdW5jdGlvbiBzbGljaygpIHtcbiAgICB2YXIgc2xpY2tTZXR0aW5nID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBjZW50ZXJQYWRkaW5nOiBcIjBweFwiLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdmFyIHNsaWNrVGFyZ2V0ID0gWyQoXCIucC1ldmVudC1jb250YWluZXJcIiksICQoXCIucC1zZXJ2aWNlLXdyYXBwZXJcIildO1xuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDw9IDc2Nykge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnNsaWNrKHNsaWNrU2V0dGluZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpY2tUYXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSkge1xuICAgICAgICAgICAgICBpdGVtLnNsaWNrKFwidW5zbGlja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50cmlnZ2VyKFwicmVzaXplXCIpO1xuICB9XG4gIC8vdmlwIHNsaWNrXG4gIGZ1bmN0aW9uIHZpcFNsaWNrKCkge1xuICAgICQoXCIudi1zbGljay1jYXJvdXNlbC12aXBcIikuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNQZXJSb3c6IDMsXG4gICAgICByb3dzOiAyLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAyLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG4gIC8v5Yqg5YWl5pyA5oSbdG9nZ2xlXG4gIGZ1bmN0aW9uIHZpcEZhdm9yaXRlKCkge1xuICAgICQoXCIucC12aXAtZmF2b3JpdGUtaWNvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo57ay56uZIOW5u+eHiOeJh+mAn+W6plxuICBmdW5jdGlvbiBjYXJvdXNlbFNwZWVkKCkge1xuICAgICQoXCIjY2Fyb3VzZWxJbmRpY2F0b3JzXCIpLmNhcm91c2VsKHtcbiAgICAgIGludGVydmFsOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgLy/nubPosrvmlrnlvI/oqqrmmI7poqjnkLTliqDmuJvmjInpiJVcbiAgZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuICAgICQoJ2J1dHRvbltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtcGx1c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICQodGhpcykuZmluZChcIi5mYS1taW51c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOewoeaYk+mmrOi3r+Wwj+WkqeS9v+aJi+apn+eJiOmggeexpOmBuOWWriDoq4vkuIrntZXlsI3ntrLlnYAg5oiW5pivIOebuOWwjei3r+W+kVxuICBmdW5jdGlvbiBzZXRVcmxSZWRpcmVjdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIikgIT09IG51bGwpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIik7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsUmVnID0gL2h0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolX1xcKy5+Iz8mLy89XSopLztcbiAgICAgICAgdmFyIGhhc2hSZWcgPSAvXiMvO1xuICAgICAgICB2YXIgbmV3VXJsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHVybFJlZy50ZXN0KG5ld1VybCkpIHtcbiAgICAgICAgICB2YXIgZGV2aWNlQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgIHZhciBpc0lvcyA9IGRldmljZUFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhtYWN8aXBhZHxpcGhvbmUpLyk7XG4gICAgICAgICAgLy/liKTmlrfmmK/lkKZTYWZhcmnngI/opr3lmahcbiAgICAgICAgICBpZiAoaXNJb3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBuZXdVcmw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKG5ld1VybCwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhhc2hSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKG5ld1VybCkub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDgwMCxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdXJsTm93ID0gbG9jYXRpb24uaHJlZi5zbGljZShcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoXCIvXCIpICsgMSxcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKHVybE5vdywgbmV3VXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9qcee3qeaNsuWLlSvnm7TmjqXosrzmnIloYXNo55qE6YCj57WQ5Lmf6IO957ep5o2y5YuVXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgJChcIi5qcy1hbmltYXRlU2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIHZhciB0YXJnZXRQb3MgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0UG9zKTtcbiAgICAgIGlmICh0YXJnZXQuaW5kZXhPZihcIiNcIikgIT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHRhcmdldFBvcyAtIDUwIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGlmIHdlIGhhdmUgYW5jaG9yIG9uIHRoZSB1cmwgKGNhbGxpbmcgZnJvbSBvdGhlciBwYWdlKVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgLy8gZGlyZWN0IGJyb3dzZXIgdG8gdG9wIHJpZ2h0IGF3YXlcbiAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIC8vIHRha2VzIGNhcmUgb2Ygc29tZSBicm93c2VycyBpc3N1ZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIH0sIDEpO1xuICAgICAgLy8gc21vb3RoIHNjcm9sbCB0byB0aGUgYW5jaG9yIGlkXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQod2luZG93LmxvY2F0aW9uLmhhc2gpLm9mZnNldCgpLnRvcCArIFwicHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgODAwLFxuICAgICAgICBcInN3aW5nXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlwVGFicygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKTtcblxuICAgICAgW10uc2xpY2UuY2FsbCh0cmlnZ2VyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleEFkKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkXCIpICE9PSBudWxsKSB7XG4gICAgICAkKFwiI2FkXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9XG4gIH1cblxuICAvL+WVn+WLlWZ1bmN0aW9uLee2sumggei8ieWFpeWujOaIkOW+jFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgc2xpY2soKTtcbiAgICBjYXJvdXNlbFNwZWVkKCk7XG4gICAgYWNjb3JkaW9uVG9nZ2xlKCk7XG4gICAgc2V0VXJsUmVkaXJlY3Rpb24oKTtcbiAgICBhbmltYXRlU2Nyb2xsKCk7XG4gICAgdmlwU2xpY2soKTtcbiAgICB2aXBGYXZvcml0ZSgpO1xuICAgIHZpcFRhYnMoKTtcbiAgICBpbmRleEFkKCk7XG4gIH0pO1xuICAvL+WVn+WLlWZ1bmN0aW9uLeimlueql+Wkp+Wwj+iuiuabtFxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHt9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3mjbLli5VcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXZlbnRDb2xvcigpO1xuICB9KTtcblxuICAvLyAkKCcuc2xpY2snKS5zbGljayh7XG4gIC8vIFx0c2xpZGVzVG9TaG93OiAyLFxuICAvLyBcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAvLyB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkRmJTZGsoKSB7XG5cdChmdW5jdGlvbiAoZCwgcywgaWQpIHtcblx0XHR2YXIganMsXG5cdFx0XHRmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuXHRcdGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuXHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpO1xuXHRcdGpzLmlkID0gaWQ7XG5cdFx0anMuc3JjID0gJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvemhfVFcvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12OS4wJztcblx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG5cdH0pKGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJyk7XG59XG4iLCIvLyDovInlhaXmqKHntYRcbi8vIOevgOaFtuS4u+mhjFxuaW1wb3J0IHsgY3JlYXRlQ2FudmFzLCBjcmVhdGVEZWNvRml4ZWQgfSBmcm9tIFwiLi90aGVtZS9fbW9vbi1mZXN0aXZhbFwiO1xuLy8g5Z+65pys6Kit5a6aXG5pbXBvcnQgeyBsb2FkRmJTZGsgfSBmcm9tIFwiLi9jb21wb25lbnRzL19mYi1zZGtcIjtcbmltcG9ydCB7IGJhc2ljIH0gZnJvbSBcIi4vY29tcG9uZW50cy9fYmFzaWNcIjtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgbG9hZEZiU2RrKCk7XG4gIGJhc2ljKCk7XG4gIGNyZWF0ZUNhbnZhcygpO1xuICBjcmVhdGVEZWNvRml4ZWQoKTtcbn0pO1xuIiwiLy8g6aaW6aCB56+A5oW2IGNhbnZhc1xuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKSAhPT0gbnVsbCkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkNBTlZBU1wiKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IFwidC1jYW52YXNcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKVxuICAgICAgLmluc2VydEJlZm9yZShub2RlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKSk7XG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXNBbmltYXRpb24oKTtcbiAgICBjYW52YXMuaW5pdCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIENhbnZhc0FuaW1hdGlvbigpIHtcbiAgdGhpcy5mbGFrZXMgPSBuZXcgRmxha2VzKCk7XG59XG5cbkNhbnZhc0FuaW1hdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtY2FudmFzXCIpO1xuICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgdGhpcy53dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB0aGlzLndoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud3c7XG4gIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMud2g7XG4gIHRoaXMuZmxha2VzLmluaXQoKTtcbiAgdGhpcy5yZW5kZXIoKTtcbiAgdGhpcy5yZXNpemUoKTtcbn07XG5cbkNhbnZhc0FuaW1hdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53dywgdGhpcy53aCk7XG4gIHRoaXMuZHJhd0ZsYWtlcygpO1xuICB0aGlzLmZsYWtlcy51cGRhdGUoKTtcblxuICB2YXIgX3RoaXMgPSB0aGlzO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLnJlbmRlcigpO1xuICB9KTtcbn07XG5cbkNhbnZhc0FuaW1hdGlvbi5wcm90b3R5cGUuZHJhd0ZsYWtlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5mbGFrZXMuY29sb3I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mbGFrZXMubWF4TnVtYmVyOyBpKyspIHtcbiAgICB2YXIgZiA9IHRoaXMuZmxha2VzLmNoaWxkcmVuW2ldO1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC50cmFuc2xhdGUoZi54LCBmLnkpO1xuICAgIHRoaXMuY3R4LnJvdGF0ZShmLnIpO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCAwKTtcbiAgICB0aGlzLmN0eC5iZXppZXJDdXJ2ZVRvKFxuICAgICAgZi5jdXJ2ZS5jcDF4LFxuICAgICAgZi5jdXJ2ZS5jcDF5LFxuICAgICAgZi5jdXJ2ZS5jcDJ4LFxuICAgICAgZi5jdXJ2ZS5jcDJ5LFxuICAgICAgZi5jdXJ2ZS54LFxuICAgICAgZi5jdXJ2ZS55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG59O1xuXG5DYW52YXNBbmltYXRpb24ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLnd3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgX3RoaXMud2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgX3RoaXMuY2FudmFzLndpZHRoID0gX3RoaXMud3c7XG4gICAgX3RoaXMuY2FudmFzLmhlaWdodCA9IF90aGlzLndoO1xuICAgIF90aGlzLmZsYWtlcy53dyA9IF90aGlzLnd3O1xuICAgIF90aGlzLmZsYWtlcy53aCA9IF90aGlzLndoO1xuICB9KTtcbn07XG5cbi8vIGZsYWtlc1xuZnVuY3Rpb24gRmxha2VzKCkge1xuICB0aGlzLm1heE51bWJlciA9IDE1O1xuICB0aGlzLmNoaWxkcmVuID0gW107XG4gIHRoaXMuYW5nbGUgPSAwO1xuICB0aGlzLnd3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHRoaXMud2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHRoaXMuY29sb3IgPSBcIiNmYWNmMzhcIjtcbn1cblxuRmxha2VzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4TnVtYmVyOyBpKyspIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goe1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHRoaXMud3csXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogdGhpcy53aCxcbiAgICAgIHI6IDAsXG4gICAgICBkOiBNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhOdW1iZXIsXG4gICAgICBjdXJ2ZToge1xuICAgICAgICBjcDF4OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyA0LFxuICAgICAgICBjcDF5OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyAyMCxcbiAgICAgICAgY3AyeDogTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA4ICsgMTcsXG4gICAgICAgIGNwMnk6IE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOCArIDgsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuXG5GbGFrZXMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbmdsZSArPSAwLjAxO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4TnVtYmVyOyBpKyspIHtcbiAgICB2YXIgZiA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgZi55ICs9IE1hdGguYWJzKE1hdGguY29zKHRoaXMuYW5nbGUgKyBmLmQpKSArIGYuZCAvIDQ7XG4gICAgZi54ICs9IE1hdGguc2luKHRoaXMuYW5nbGUpICogMjtcbiAgICBmLnIgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGguUEkgKyAxO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tCb3VuZGFyeShmLngsIGYueSkgPT09IHRydWUpIHtcbiAgICAgIGlmIChpICUgNCA+IDApIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IHtcbiAgICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogdGhpcy53dyxcbiAgICAgICAgICB5OiAtMTAsXG4gICAgICAgICAgcjogZi5yLFxuICAgICAgICAgIGQ6IGYuZCxcbiAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgY3AxeDogTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA4ICsgNCxcbiAgICAgICAgICAgIGNwMXk6IE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOCArIDIwLFxuICAgICAgICAgICAgY3AyeDogTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA4ICsgMTcsXG4gICAgICAgICAgICBjcDJ5OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyA4LFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmLnggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IHtcbiAgICAgICAgICAgIHg6IC01LFxuICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMud2gsXG4gICAgICAgICAgICByOiBmLnIsXG4gICAgICAgICAgICBkOiBmLmQsXG4gICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICBjcDF4OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyA0LFxuICAgICAgICAgICAgICBjcDF5OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyAyMCxcbiAgICAgICAgICAgICAgY3AyeDogTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA4ICsgMTcsXG4gICAgICAgICAgICAgIGNwMnk6IE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOCArIDgsXG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMud3cgKyA1LFxuICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMud2gsXG4gICAgICAgICAgICByOiBmLnIsXG4gICAgICAgICAgICBkOiBmLmQsXG4gICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICBjcDF4OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyA0LFxuICAgICAgICAgICAgICBjcDF5OiBNYXRoLmFicyhNYXRoLnJhbmRvbSgpKSAqIDggKyAyMCxcbiAgICAgICAgICAgICAgY3AyeDogTWF0aC5hYnMoTWF0aC5yYW5kb20oKSkgKiA4ICsgMTcsXG4gICAgICAgICAgICAgIGNwMnk6IE1hdGguYWJzKE1hdGgucmFuZG9tKCkpICogOCArIDgsXG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkZsYWtlcy5wcm90b3R5cGUuY2hlY2tCb3VuZGFyeSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHJldHVybiB4ID4gdGhpcy53dyArIDEwIHx8IHggPCAtMTAgfHwgeSA+IHRoaXMud2g7XG59O1xuXG4vLyDpppbpoIHnr4Dmhbboo53po75cbmZ1bmN0aW9uIGNyZWF0ZURlY29GaXhlZCgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIikgIT09IG51bGwpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBcInQtZGVjby1maXhlZCBkLWJsb2NrXCI7XG4gICAgbm9kZS5pbm5lckhUTUwgPVxuICAgICAgJzxkaXYgY2xhc3M9XCJ0LWRlY28tbW9vbi1mZXN0aXZhbFwiPlxcXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90aGVtZS9tb29uLWZlc3RpdmFsL21vb24tY2FrZS5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxcXG4gICAgICA8L2Rpdj4nO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKVxuICAgICAgLmluc2VydEJlZm9yZShub2RlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtbWFpbi10aXRsZVwiKSk7XG4gICAgZml4ZWRUb0Fic29sdXRlQm90dG9tKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZml4ZWRUb0Fic29sdXRlQm90dG9tKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKFxuICAgICAgc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA+PVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIikub2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1maXhlZFwiKS5jbGFzc0xpc3QuYWRkKFwianMtYm90dG9tXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1maXhlZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYm90dG9tXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhbnZhcywgY3JlYXRlRGVjb0ZpeGVkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9