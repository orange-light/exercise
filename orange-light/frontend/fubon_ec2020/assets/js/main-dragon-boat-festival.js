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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-dragon-boat-festival.js");
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

/***/ "./src/SASS_version3.2/assets/js/main-dragon-boat-festival.js":
/*!********************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-dragon-boat-festival.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_dragon_boat_festival__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_dragon-boat-festival */ "./src/SASS_version3.2/assets/js/theme/_dragon-boat-festival.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
  Object(_theme_dragon_boat_festival__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_dragon-boat-festival.js":
/*!**********************************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_dragon-boat-festival.js ***!
  \**********************************************************************/
/*! exports provided: createCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
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
  var _this = this;

  for (var i = 0; i < _this.flakes.maxNumber; i++) {
    var f = _this.flakes.children[i];
    f.img.addEventListener("load", function (obj) {
      _this.ctx.save();

      _this.ctx.translate(obj.x, obj.y);

      _this.ctx.rotate(obj.a / 180 * Math.PI);

      _this.ctx.drawImage(obj.img, 0, 0, 40 * obj.s, 40 * obj.s);

      _this.ctx.restore();
    }(f));
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
  this.maxNumber = 8;
  this.children = [];
  this.angle = 0;
  this.ww = window.innerWidth;
  this.wh = window.innerHeight;
}

Flakes.prototype.init = function () {
  var Pi = Math.PI;
  var Pi2 = Math.PI * 2;

  for (var i = 0; i < this.maxNumber; i++) {
    this.children.push({
      x: Math.floor(Math.random() * this.ww),
      y: Math.floor(Math.random() * this.wh),
      d: Math.random() * this.maxNumber,
      s: function () {
        var num = Math.random();

        if (num < 0.7) {
          return 0.7;
        }

        return num;
      }(),
      a: Math.random() * 70,
      img: new Image(),
      src: "assets/img/theme/dragon-boat-festival/leaf.svg"
    });
    console.log(this.children[i].s);
  }

  for (var i = 0; i < this.maxNumber; i++) {
    var f = this.children[i];
    f.img.src = f.src;
  }
};

Flakes.prototype.update = function () {
  this.angle += 0.01;

  for (var i = 0; i < this.maxNumber; i++) {
    var f = this.children[i];
    f.y += Math.abs(Math.cos(this.angle + f.d)) + f.d / 10;
    f.x += Math.sin(this.angle) * 2;
    f.a += Math.sin(this.angle);

    if (this.checkBoundary(f.x, f.y) === true) {
      if (i % 4 > 0) {
        this.children[i] = {
          x: Math.random() * this.ww,
          y: -10,
          d: f.d,
          s: f.s,
          a: f.a,
          img: f.img,
          src: f.src
        };
      } else {
        if (f.x > 0) {
          this.children[i] = {
            x: -5,
            y: Math.random() * this.wh,
            d: f.d,
            s: f.s,
            a: f.a,
            img: f.img,
            src: f.src
          };
        } else {
          this.children[i] = {
            x: this.ww + 5,
            y: Math.random() * this.wh,
            d: f.d,
            s: f.s,
            a: f.a,
            img: f.img,
            src: f.src
          };
        }
      }
    }
  }
};

Flakes.prototype.checkBoundary = function (x, y) {
  return x > this.ww + 50 || x < -50 || y > this.wh;
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tZHJhZ29uLWJvYXQtZmVzdGl2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvdGhlbWUvX2RyYWdvbi1ib2F0LWZlc3RpdmFsLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwibWV0aG9kIiwidXJsIiwidHlwZSIsImRvbmUiLCJkYXRhIiwiaHRtbCIsImFjdGl2ZU1lbnUiLCJsb2FkIiwidGFyZ2V0IiwiZHJvcGRvd25Ub2dnbGUiLCJ1bmJpbmQiLCJvbiIsInRvZ2dsZUNsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVUb2dnbGUiLCJkcm9wZG93blRyaWdnZXIiLCJkcm9wZG93biIsImRyb3Bkb3duU2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyIsImhlaWdodCIsInVzZXIiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJvdmVyZmxvdyIsInVzZXJUcmlnZ2VyIiwidXNlclNob3ciLCJ3aW5kb3ciLCJiaW5kIiwid2lkdGgiLCJ0cmlnZ2VyIiwic2xpY2siLCJzbGlja1NldHRpbmciLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsInNsaWNrVGFyZ2V0IiwiZm9yRWFjaCIsIml0ZW0iLCJ2aXBTbGljayIsInNsaWRlc1BlclJvdyIsInJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmlwRmF2b3JpdGUiLCJjYXJvdXNlbFNwZWVkIiwiY2Fyb3VzZWwiLCJpbnRlcnZhbCIsImFjY29yZGlvblRvZ2dsZSIsInNldFVybFJlZGlyZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmxSZWciLCJoYXNoUmVnIiwibmV3VXJsIiwidmFsdWUiLCJ0ZXN0IiwiZGV2aWNlQWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0lvcyIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJsb2NhdGlvbiIsImhyZWYiLCJvcGVuIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhhc2giLCJ1cmxOb3ciLCJzbGljZSIsImxhc3RJbmRleE9mIiwibGVuZ3RoIiwicmVwbGFjZSIsImFuaW1hdGVTY3JvbGwiLCJjbGljayIsImF0dHIiLCJ0YXJnZXRQb3MiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZiIsInNjcm9sbCIsInZpcFRhYnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluZGV4QWQiLCJtb2RhbCIsInJlc2l6ZSIsImxvYWRGYlNkayIsImQiLCJzIiwiaWQiLCJqcyIsImZqcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImNyZWF0ZUNhbnZhcyIsIm5vZGUiLCJjbGFzc05hbWUiLCJjYW52YXMiLCJDYW52YXNBbmltYXRpb24iLCJpbml0IiwiZmxha2VzIiwiRmxha2VzIiwicHJvdG90eXBlIiwiY3R4IiwiZ2V0Q29udGV4dCIsInd3IiwiaW5uZXJXaWR0aCIsIndoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXIiLCJjbGVhclJlY3QiLCJkcmF3Rmxha2VzIiwidXBkYXRlIiwiX3RoaXMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpIiwibWF4TnVtYmVyIiwiZiIsImNoaWxkcmVuIiwiaW1nIiwib2JqIiwic2F2ZSIsInRyYW5zbGF0ZSIsIngiLCJ5Iiwicm90YXRlIiwiYSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJhbmdsZSIsIlBpIiwiUGkyIiwicHVzaCIsImZsb29yIiwicmFuZG9tIiwibnVtIiwiSW1hZ2UiLCJhYnMiLCJjb3MiLCJzaW4iLCJjaGVja0JvdW5kYXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTyxTQUFTQSxL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SUFBK0JDLENBQUMsR0FBRyxLQUFLakIsRUFBL0M7QUFDRCxDQUZEIiwiZmlsZSI6Im1haW4tZHJhZ29uLWJvYXQtZmVzdGl2YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tZHJhZ29uLWJvYXQtZmVzdGl2YWwuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2ljKCkge1xuICAvLyBhamF4IOmFjeWQiEpRMyDlvJXlhaXoqK3nva5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiYWpheC9faGVhZGVyLmh0bWxcIixcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjaGVhZGVyXCIpLmh0bWwoZGF0YSk7XG4gICAgICBhY3RpdmVNZW51KCk7XG4gICAgfSk7XG4gICAgJChcIiNmb290ZXJcIikubG9hZChcImFqYXgvX2Zvb3Rlci5odG1sXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBhY3RpdmVNZW51KCkge1xuICAgIC8vZHJvcGRvd24gdG9nZ2xlXG4gICAgdmFyIHRhcmdldCA9ICQoXCIubC1kcm9wZG93bi10aXRsZVwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLmZpbmQoXCIubC1kcm9wZG93bi10aXRsZVwiKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgZHJvcGRvd24gb3BlblxuICAgIHZhciBkcm9wZG93blRyaWdnZXIgPSAkKFwiLmwtZHJvcGRvd24taWNvblwiKTtcbiAgICB2YXIgZHJvcGRvd24gPSAkKFwiLmwtZHJvcGRvd24tbGlzdFwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blNob3coKSB7XG4gICAgICBkcm9wZG93blRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICBkcm9wZG93blRyaWdnZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCJodG1sXCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgaWYgKHVzZXIuaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbW9iaWxlIHVzZXIgb3BlblxuICAgIHZhciB1c2VyVHJpZ2dlciA9ICQoXCIubC11c2VyLWljb25cIik7XG4gICAgdmFyIHVzZXIgPSAkKFwiLmwtdXNlci1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIHVzZXJTaG93KCkge1xuICAgICAgdXNlclRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICB1c2VyVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAoZHJvcGRvd24uaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIHVzZXIudG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgIGRyb3Bkb3duVG9nZ2xlKCk7XG4gICAgICAgICAgZHJvcGRvd25TaG93KCk7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmICg5OTIgPCAkKHRoaXMpLndpZHRoKCkgJiYgJCh0aGlzKS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICAgIHVzZXJTaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVG9nZ2xlKCk7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRyaWdnZXIoXCJyZXNpemVcIik7XG4gIH1cblxuICAvLyDpppbpoIEgc2xpY2tcbiAgZnVuY3Rpb24gc2xpY2soKSB7XG4gICAgdmFyIHNsaWNrU2V0dGluZyA9IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgY2VudGVyUGFkZGluZzogXCIwcHhcIixcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgfTtcblxuICAgIHZhciBzbGlja1RhcmdldCA9IFskKFwiLnAtZXZlbnQtY29udGFpbmVyXCIpLCAkKFwiLnAtc2VydmljZS13cmFwcGVyXCIpXTtcbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8PSA3NjcpIHtcbiAgICAgICAgICBzbGlja1RhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgICAgICAgIGl0ZW0uc2xpY2soXCJ1bnNsaWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zbGljayhzbGlja1NldHRpbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuICAvL3ZpcCBzbGlja1xuICBmdW5jdGlvbiB2aXBTbGljaygpIHtcbiAgICAkKFwiLnYtc2xpY2stY2Fyb3VzZWwtdmlwXCIpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyUm93OiAzLFxuICAgICAgcm93czogMixcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMixcbiAgICAgICAgICAgIHJvd3M6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuICAvL+WKoOWFpeacgOaEm3RvZ2dsZVxuICBmdW5jdGlvbiB2aXBGYXZvcml0ZSgpIHtcbiAgICAkKFwiLnAtdmlwLWZhdm9yaXRlLWljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG4gIC8vIOWFqOe2suermSDlubvnh4jniYfpgJ/luqZcbiAgZnVuY3Rpb24gY2Fyb3VzZWxTcGVlZCgpIHtcbiAgICAkKFwiI2Nhcm91c2VsSW5kaWNhdG9yc1wiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8v57mz6LK75pa55byP6Kqq5piO6aKo55C05Yqg5rib5oyJ6YiVXG4gIGZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcbiAgICAkKCdidXR0b25bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5maW5kKFwiLmZhLXBsdXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtbWludXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSk7XG4gIH1cblxuICAvLyDnsKHmmJPppqzot6/lsI/lpKnkvb/miYvmqZ/niYjpoIHnsaTpgbjllq4g6KuL5LiK57WV5bCN57ay5Z2AIOaIluaYryDnm7jlsI3ot6/lvpFcbiAgZnVuY3Rpb24gc2V0VXJsUmVkaXJlY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpICE9PSBudWxsKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpO1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybFJlZyA9IC9odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYihbLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKS87XG4gICAgICAgIHZhciBoYXNoUmVnID0gL14jLztcbiAgICAgICAgdmFyIG5ld1VybCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh1cmxSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgdmFyIGRldmljZUFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICB2YXIgaXNJb3MgPSBkZXZpY2VBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8obWFjfGlwYWR8aXBob25lKS8pO1xuICAgICAgICAgIC8v5Yik5pa35piv5ZCmU2FmYXJp54CP6Ka95ZmoXG4gICAgICAgICAgaWYgKGlzSW9zKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbmV3VXJsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihuZXdVcmwsIFwiX2JsYW5rXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoYXNoUmVnLnRlc3QobmV3VXJsKSkge1xuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChuZXdVcmwpLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4MDAsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHVybE5vdyA9IGxvY2F0aW9uLmhyZWYuc2xpY2UoXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSh1cmxOb3csIG5ld1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vanHnt6nmjbLli5Ur55u05o6l6LK85pyJaGFzaOeahOmAo+e1kOS5n+iDvee3qeaNsuWLlVxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgICQoXCIuanMtYW5pbWF0ZVNjcm9sbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICB2YXIgdGFyZ2V0UG9zID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldFBvcyk7XG4gICAgICBpZiAodGFyZ2V0LmluZGV4T2YoXCIjXCIpICE9IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0YXJnZXRQb3MgLSA1MCB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpZiB3ZSBoYXZlIGFuY2hvciBvbiB0aGUgdXJsIChjYWxsaW5nIGZyb20gb3RoZXIgcGFnZSlcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIC8vIGRpcmVjdCBicm93c2VyIHRvIHRvcCByaWdodCBhd2F5XG4gICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICAvLyB0YWtlcyBjYXJlIG9mIHNvbWUgYnJvd3NlcnMgaXNzdWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICB9LCAxKTtcbiAgICAgIC8vIHNtb290aCBzY3JvbGwgdG8gdGhlIGFuY2hvciBpZFxuICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5vZmZzZXQoKS50b3AgKyBcInB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDgwMCxcbiAgICAgICAgXCJzd2luZ1wiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpcFRhYnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIikubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIik7XG5cbiAgICAgIFtdLnNsaWNlLmNhbGwodHJpZ2dlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhBZCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZFwiKSAhPT0gbnVsbCkge1xuICAgICAgJChcIiNhZFwiKS5tb2RhbChcInNob3dcIik7XG4gICAgfVxuICB9XG5cbiAgLy/llZ/li5VmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHNsaWNrKCk7XG4gICAgY2Fyb3VzZWxTcGVlZCgpO1xuICAgIGFjY29yZGlvblRvZ2dsZSgpO1xuICAgIHNldFVybFJlZGlyZWN0aW9uKCk7XG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xuICAgIHZpcFNsaWNrKCk7XG4gICAgdmlwRmF2b3JpdGUoKTtcbiAgICB2aXBUYWJzKCk7XG4gICAgaW5kZXhBZCgpO1xuICB9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3oppbnqpflpKflsI/orormm7RcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7fSk7XG4gIC8v5ZWf5YuVZnVuY3Rpb24t5o2y5YuVXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIC8vIGV2ZW50Q29sb3IoKTtcbiAgfSk7XG5cbiAgLy8gJCgnLnNsaWNrJykuc2xpY2soe1xuICAvLyBcdHNsaWRlc1RvU2hvdzogMixcbiAgLy8gXHRzbGlkZXNUb1Njcm9sbDogMSxcbiAgLy8gfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEZiU2RrKCkge1xuXHQoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG5cdFx0dmFyIGpzLFxuXHRcdFx0ZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcblx0XHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcblx0XHRqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcblx0XHRqcy5pZCA9IGlkO1xuXHRcdGpzLnNyYyA9ICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L3poX1RXL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djkuMCc7XG5cdFx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuXHR9KShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpO1xufVxuIiwiLy8g6LyJ5YWl5qih57WEXG4vLyDnr4DmhbbkuLvpoYxcbmltcG9ydCB7Y3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4vdGhlbWUvX2RyYWdvbi1ib2F0LWZlc3RpdmFsXCI7XG4vLyDln7rmnKzoqK3lrppcbmltcG9ydCB7IGxvYWRGYlNkayB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2ZiLXNka1wiO1xuaW1wb3J0IHsgYmFzaWMgfSBmcm9tIFwiLi9jb21wb25lbnRzL19iYXNpY1wiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBsb2FkRmJTZGsoKTtcbiAgYmFzaWMoKTtcbiAgY3JlYXRlQ2FudmFzKCk7XG59KTtcbiIsIi8vIOmmlumggeevgOaFtiBjYW52YXNcbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhcygpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIikgIT09IG51bGwpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJDQU5WQVNcIik7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBcInQtY2FudmFzXCI7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIilcbiAgICAgIC5pbnNlcnRCZWZvcmUobm9kZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIikpO1xuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzQW5pbWF0aW9uKCk7XG4gICAgY2FudmFzLmluaXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBDYW52YXNBbmltYXRpb24oKSB7XG4gIHRoaXMuZmxha2VzID0gbmV3IEZsYWtlcygpO1xufVxuXG5DYW52YXNBbmltYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50LWNhbnZhc1wiKTtcbiAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHRoaXMud3cgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdGhpcy53aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnd3O1xuICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLndoO1xuICB0aGlzLmZsYWtlcy5pbml0KCk7XG4gIHRoaXMucmVuZGVyKCk7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG5DYW52YXNBbmltYXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud3csIHRoaXMud2gpO1xuICB0aGlzLmRyYXdGbGFrZXMoKTtcbiAgdGhpcy5mbGFrZXMudXBkYXRlKCk7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMucmVuZGVyKCk7XG4gIH0pO1xufTtcblxuQ2FudmFzQW5pbWF0aW9uLnByb3RvdHlwZS5kcmF3Rmxha2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmZsYWtlcy5tYXhOdW1iZXI7IGkrKykge1xuICAgIHZhciBmID0gX3RoaXMuZmxha2VzLmNoaWxkcmVuW2ldO1xuICAgIGYuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImxvYWRcIixcbiAgICAgIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIF90aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIF90aGlzLmN0eC50cmFuc2xhdGUob2JqLngsIG9iai55KTtcbiAgICAgICAgX3RoaXMuY3R4LnJvdGF0ZSgob2JqLmEgLyAxODApICogTWF0aC5QSSk7XG4gICAgICAgIF90aGlzLmN0eC5kcmF3SW1hZ2Uob2JqLmltZywgMCwgMCwgNDAgKiBvYmoucywgNDAgKiBvYmoucyk7XG4gICAgICAgIF90aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICB9KShmKVxuICAgICk7XG4gIH1cbn07XG5cbkNhbnZhc0FuaW1hdGlvbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMud3cgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBfdGhpcy53aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBfdGhpcy5jYW52YXMud2lkdGggPSBfdGhpcy53dztcbiAgICBfdGhpcy5jYW52YXMuaGVpZ2h0ID0gX3RoaXMud2g7XG4gICAgX3RoaXMuZmxha2VzLnd3ID0gX3RoaXMud3c7XG4gICAgX3RoaXMuZmxha2VzLndoID0gX3RoaXMud2g7XG4gIH0pO1xufTtcblxuLy8gZmxha2VzXG5mdW5jdGlvbiBGbGFrZXMoKSB7XG4gIHRoaXMubWF4TnVtYmVyID0gODtcbiAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB0aGlzLmFuZ2xlID0gMDtcbiAgdGhpcy53dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB0aGlzLndoID0gd2luZG93LmlubmVySGVpZ2h0O1xufVxuXG5GbGFrZXMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBQaSA9IE1hdGguUEk7XG4gIHZhciBQaTIgPSBNYXRoLlBJICogMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heE51bWJlcjsgaSsrKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud3cpLFxuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aCksXG4gICAgICBkOiBNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhOdW1iZXIsXG4gICAgICBzOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnVtID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgaWYgKG51bSA8IDAuNykge1xuICAgICAgICAgIHJldHVybiAwLjc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgIH0pKCksXG4gICAgICBhOiBNYXRoLnJhbmRvbSgpICogNzAsXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxuICAgICAgc3JjOiBcImFzc2V0cy9pbWcvdGhlbWUvZHJhZ29uLWJvYXQtZmVzdGl2YWwvbGVhZi5zdmdcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuW2ldLnMpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXhOdW1iZXI7IGkrKykge1xuICAgIHZhciBmID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICBmLmltZy5zcmMgPSBmLnNyYztcbiAgfVxufTtcblxuRmxha2VzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYW5nbGUgKz0gMC4wMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heE51bWJlcjsgaSsrKSB7XG4gICAgdmFyIGYgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgIGYueSArPSBNYXRoLmFicyhNYXRoLmNvcyh0aGlzLmFuZ2xlICsgZi5kKSkgKyBmLmQgLyAxMDtcbiAgICBmLnggKz0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiAyO1xuICAgIGYuYSArPSBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICBpZiAodGhpcy5jaGVja0JvdW5kYXJ5KGYueCwgZi55KSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGkgJSA0ID4gMCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0ge1xuICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB0aGlzLnd3LFxuICAgICAgICAgIHk6IC0xMCxcbiAgICAgICAgICBkOiBmLmQsXG4gICAgICAgICAgczogZi5zLFxuICAgICAgICAgIGE6IGYuYSxcbiAgICAgICAgICBpbWc6IGYuaW1nLFxuICAgICAgICAgIHNyYzogZi5zcmMsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZi54ID4gMCkge1xuICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gPSB7XG4gICAgICAgICAgICB4OiAtNSxcbiAgICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiB0aGlzLndoLFxuICAgICAgICAgICAgZDogZi5kLFxuICAgICAgICAgICAgczogZi5zLFxuICAgICAgICAgICAgYTogZi5hLFxuICAgICAgICAgICAgaW1nOiBmLmltZyxcbiAgICAgICAgICAgIHNyYzogZi5zcmMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0ge1xuICAgICAgICAgICAgeDogdGhpcy53dyArIDUsXG4gICAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogdGhpcy53aCxcbiAgICAgICAgICAgIGQ6IGYuZCxcbiAgICAgICAgICAgIHM6IGYucyxcbiAgICAgICAgICAgIGE6IGYuYSxcbiAgICAgICAgICAgIGltZzogZi5pbWcsXG4gICAgICAgICAgICBzcmM6IGYuc3JjLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkZsYWtlcy5wcm90b3R5cGUuY2hlY2tCb3VuZGFyeSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHJldHVybiB4ID4gdGhpcy53dyArIDUwIHx8IHggPCAtNTAgfHwgeSA+IHRoaXMud2g7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDYW52YXMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=