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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-new-year.js");
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

/***/ "./src/SASS_version3.2/assets/js/main-new-year.js":
/*!********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-new-year.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_new_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_new-year */ "./src/SASS_version3.2/assets/js/theme/_new-year.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_theme_new_year__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  Object(_theme_new_year__WEBPACK_IMPORTED_MODULE_0__["creatDecoRelative"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_new-year.js":
/*!**********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_new-year.js ***!
  \**********************************************************/
/*! exports provided: createCanvas, creatDecoRelative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatDecoRelative", function() { return creatDecoRelative; });
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
    this.ctx.scale(f.f, 1);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, f.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.scale(f.f2, 1);
    this.ctx.rotate(45 / 180 * Math.PI);
    this.ctx.clearRect(-f.r / 4, -f.r / 4, f.r / 2, f.r / 2);
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
  this.maxNumber = 8;
  this.children = [];
  this.angle = 0;
  this.ww = window.innerWidth;
  this.wh = window.innerHeight;
  this.color = "#edb66d";
}

Flakes.prototype.init = function () {
  var Pi = Math.PI;
  var Pi2 = Math.PI * 2;

  for (var i = 0; i < this.maxNumber; i++) {
    this.children.push({
      x: Math.floor(Math.random() * this.ww),
      y: Math.floor(Math.random() * this.wh),
      r: Math.random() * 5 + 10,
      d: Math.random() * this.maxNumber,
      f: 0,
      fi: Math.random()
    });
  }
};

Flakes.prototype.update = function () {
  this.angle += 0.01;

  var _this = this;

  for (var i = 0; i < this.maxNumber; i++) {
    var f = _this.children[i];
    f.y += Math.abs(Math.cos(this.angle + f.d)) + f.d / 2;

    f.f = function () {
      if (Math.abs(Math.sin(_this.angle * 4 + f.fi * 6)) < 0.2) {
        return 0.2;
      } else {
        return Math.sin(_this.angle * 4 + f.fi * 6);
      }
    }();

    f.f2 = Math.sin(_this.angle * 4 + f.fi * 6);

    if (this.checkBoundary(f.x, f.y) === true) {
      this.children[i] = {
        x: Math.random() * this.ww,
        y: -10,
        r: f.r,
        d: f.d,
        f: 0,
        fi: Math.random()
      };
    }
  }
};

Flakes.prototype.checkBoundary = function (x, y) {
  return x > this.ww + 10 || x < -10 || y > this.wh;
}; // 首頁節慶裝飾
// function createDecoFixed() {
//   if (document.querySelector("#event") !== null) {
//     var node = document.createElement("div");
//     node.className = "t-deco-fixed";
//     node.innerHTML =
//       '<div class="t-deco-new-year-lantern-1">\
// 			<img src="assets/img/theme/new-year/new-year-lantern.svg" alt="" class="img-fluid">\
//       </div>\
//       <div class="t-deco-new-year-lantern-2">\
// 			<img src="assets/img/theme/new-year/new-year-lantern.svg" alt="" class="img-fluid">\
//       </div>\
//       ';
//     document
//       .querySelector("main")
//       .insertBefore(node, document.querySelector("#event"));
//     fixedToAbsoluteBottom();
//   }
// }


function creatDecoRelative() {
  if (document.querySelector(".wrapper") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-relative";
    node.style.cssText = "z-index:-1";
    node.innerHTML = '<div class="t-deco-new-year-lantern-1">\
    <img src="assets/img/theme/new-year/new-year-lantern.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-new-year-lantern-2">\
    <img src="assets/img/theme/new-year/new-year-lantern.svg" alt="" class="img-fluid">\
    </div>\
    ';
    document.querySelector(".wrapper").insertBefore(node, document.querySelector("main"));
    var pc = window.matchMedia("(min-width: 1200px)");
    pc.addListener(mediaMatch);
    mediaMatch(pc);
  }
}

function mediaMatch(matchMedia) {
  if (matchMedia.matches) {
    window.addEventListener("scroll", relativeToFixed);
  } else {
    window.removeEventListener("scroll", relativeToFixed);
    document.querySelector(".t-deco-relative").style.cssText = "z-index:-1;";
  }
}

function relativeToFixed() {
  var scrollY = window.pageYOffset;
  var target = document.querySelector("#event");
  var targetTop = getTop(target);

  if (scrollY + window.innerHeight * 0.3 >= targetTop) {
    document.querySelector(".t-deco-relative").style.cssText = "position:fixed; left:0; top:30%; width:100%";
  } else {
    document.querySelector(".t-deco-relative").style.cssText = "z-index:-1;";
  }
}

function getTop(el) {
  var absTop = el.offsetTop;
  var elParent = el.offsetParent;

  while (elParent !== null) {
    absTop += elParent.offsetTop + elParent.clientTop;
    elParent = elParent.offsetParent;
  }

  return absTop;
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tbmV3LXllYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvdGhlbWUvX25ldy15ZWFyLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwibWV0aG9kIiwidXJsIiwidHlwZSIsImRvbmUiLCJkYXRhIiwiaHRtbCIsImFjdGl2ZU1lbnUiLCJsb2FkIiwidGFyZ2V0IiwiZHJvcGRvd25Ub2dnbGUiLCJ1bmJpbmQiLCJvbiIsInRvZ2dsZUNsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVUb2dnbGUiLCJkcm9wZG93blRyaWdnZXIiLCJkcm9wZG93biIsImRyb3Bkb3duU2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcyIsImhlaWdodCIsInVzZXIiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJvdmVyZmxvdyIsInVzZXJUcmlnZ2VyIiwidXNlclNob3ciLCJ3aW5kb3ciLCJiaW5kIiwid2lkdGgiLCJ0cmlnZ2VyIiwic2xpY2siLCJzbGlja1NldHRpbmciLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJhdXRvcGxheSIsInNsaWNrVGFyZ2V0IiwiZm9yRWFjaCIsIml0ZW0iLCJ2aXBTbGljayIsInNsaWRlc1BlclJvdyIsInJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmlwRmF2b3JpdGUiLCJjYXJvdXNlbFNwZWVkIiwiY2Fyb3VzZWwiLCJpbnRlcnZhbCIsImFjY29yZGlvblRvZ2dsZSIsInNldFVybFJlZGlyZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmxSZWciLCJoYXNoUmVnIiwibmV3VXJsIiwidmFsdWUiLCJ0ZXN0IiwiZGV2aWNlQWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0lvcyIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJsb2NhdGlvbiIsImhyZWYiLCJvcGVuIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhhc2giLCJ1cmxOb3ciLCJzbGljZSIsImxhc3RJbmRleE9mIiwibGVuZ3RoIiwicmVwbGFjZSIsImFuaW1hdGVTY3JvbGwiLCJjbGljayIsImF0dHIiLCJ0YXJnZXRQb3MiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZiIsInNjcm9sbCIsInZpcFRhYnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluZGV4QWQiLCJtb2RhbCIsInJlc2l6ZSIsImxvYWRGYlNkayIsImQiLCJzIiwiaWQiLCJqcyIsImZqcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImNyZWF0ZUNhbnZhcyIsImNyZWF0RGVjb1JlbGF0aXZlIiwibm9kZSIsImNsYXNzTmFtZSIsImNhbnZhcyIsIkNhbnZhc0FuaW1hdGlvbiIsImluaXQiLCJmbGFrZXMiLCJGbGFrZXMiLCJwcm90b3R5cGUiLCJjdHgiLCJnZXRDb250ZXh0Iiwid3ciLCJpbm5lcldpZHRoIiwid2giLCJpbm5lckhlaWdodCIsInJlbmRlciIsImNsZWFyUmVjdCIsImRyYXdGbGFrZXMiLCJ1cGRhdGUiLCJfdGhpcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpbGxTdHlsZSIsImNvbG9yIiwiaSIsIm1heE51bWJlciIsImYiLCJjaGlsZHJlbiIsInNhdmUiLCJ0cmFuc2xhdGUiLCJ4IiwieSIsInNjYWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIk1hdGgiLCJQSSIsImZpbGwiLCJmMiIsInJvdGF0ZSIsInJlc3RvcmUiLCJhbmdsZSIsIlBpIiwiUGkyIiwicHVzaCIsImZsb29yIiwicmFuZG9tIiwiZmkiLCJhYnMiLCJjb3MiLCJzaW4iLCJjaGVja0JvdW5kYXJ5Iiwic3R5bGUiLCJjc3NUZXh0IiwiaW5uZXJIVE1MIiwicGMiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJtZWRpYU1hdGNoIiwibWF0Y2hlcyIsInJlbGF0aXZlVG9GaXhlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRUb3AiLCJnZXRUb3AiLCJlbCIsImFic1RvcCIsIm9mZnNldFRvcCIsImVsUGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiY2xpZW50VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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a0JBQXZCLEVBQTJDNEcsS0FBM0MsQ0FBaURDLE9BQWpELEdBQ0UsNkNBREY7QUFFRCxHQUhELE1BR087QUFDTDFLLFlBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDNEcsS0FBM0MsQ0FBaURDLE9BQWpELEdBQTJELGFBQTNEO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTWSxNQUFULENBQWdCQyxFQUFoQixFQUFvQjtBQUNsQixNQUFJQyxNQUFNLEdBQUdELEVBQUUsQ0FBQ0UsU0FBaEI7QUFDQSxNQUFJQyxRQUFRLEdBQUdILEVBQUUsQ0FBQ0ksWUFBbEI7O0FBQ0EsU0FBT0QsUUFBUSxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCRixVQUFNLElBQUlFLFFBQVEsQ0FBQ0QsU0FBVCxHQUFxQkMsUUFBUSxDQUFDRSxTQUF4QztBQUNBRixZQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsWUFBcEI7QUFDRDs7QUFDRCxTQUFPSCxNQUFQO0FBQ0QiLCJmaWxlIjoibWFpbi1uZXcteWVhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvbWFpbi1uZXcteWVhci5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZnVuY3Rpb24gYmFzaWMoKSB7XG4gIC8vIGFqYXgg6YWN5ZCISlEzIOW8leWFpeioree9rlxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJChcIiNoZWFkZXJcIikuaHRtbChkYXRhKTtcbiAgICAgIGFjdGl2ZU1lbnUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2Zvb3RlclwiKS5sb2FkKFwiYWpheC9fZm9vdGVyLmh0bWxcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFjdGl2ZU1lbnUoKSB7XG4gICAgLy9kcm9wZG93biB0b2dnbGVcbiAgICB2YXIgdGFyZ2V0ID0gJChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnVuYmluZChcImNsaWNrXCIpO1xuICAgICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAuZmluZChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIC8vIG1vYmlsZSBkcm9wZG93biBvcGVuXG4gICAgdmFyIGRyb3Bkb3duVHJpZ2dlciA9ICQoXCIubC1kcm9wZG93bi1pY29uXCIpO1xuICAgIHZhciBkcm9wZG93biA9ICQoXCIubC1kcm9wZG93bi1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duU2hvdygpIHtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAodXNlci5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgdXNlciBvcGVuXG4gICAgdmFyIHVzZXJUcmlnZ2VyID0gJChcIi5sLXVzZXItaWNvblwiKTtcbiAgICB2YXIgdXNlciA9ICQoXCIubC11c2VyLWxpc3RcIik7XG4gICAgZnVuY3Rpb24gdXNlclNob3coKSB7XG4gICAgICB1c2VyVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHVzZXJUcmlnZ2VyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgIGlmIChkcm9wZG93bi5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1c2VyLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgZHJvcGRvd25Ub2dnbGUoKTtcbiAgICAgICAgICBkcm9wZG93blNob3coKTtcbiAgICAgICAgICB1c2VyU2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKDk5MiA8ICQodGhpcykud2lkdGgoKSAmJiAkKHRoaXMpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVUb2dnbGUoKTtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuXG4gIC8vIOmmlumggSBzbGlja1xuICBmdW5jdGlvbiBzbGljaygpIHtcbiAgICB2YXIgc2xpY2tTZXR0aW5nID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBjZW50ZXJQYWRkaW5nOiBcIjBweFwiLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdmFyIHNsaWNrVGFyZ2V0ID0gWyQoXCIucC1ldmVudC1jb250YWluZXJcIiksICQoXCIucC1zZXJ2aWNlLXdyYXBwZXJcIildO1xuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDw9IDc2Nykge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnNsaWNrKHNsaWNrU2V0dGluZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpY2tUYXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSkge1xuICAgICAgICAgICAgICBpdGVtLnNsaWNrKFwidW5zbGlja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50cmlnZ2VyKFwicmVzaXplXCIpO1xuICB9XG4gIC8vdmlwIHNsaWNrXG4gIGZ1bmN0aW9uIHZpcFNsaWNrKCkge1xuICAgICQoXCIudi1zbGljay1jYXJvdXNlbC12aXBcIikuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNQZXJSb3c6IDMsXG4gICAgICByb3dzOiAyLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAyLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG4gIC8v5Yqg5YWl5pyA5oSbdG9nZ2xlXG4gIGZ1bmN0aW9uIHZpcEZhdm9yaXRlKCkge1xuICAgICQoXCIucC12aXAtZmF2b3JpdGUtaWNvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo57ay56uZIOW5u+eHiOeJh+mAn+W6plxuICBmdW5jdGlvbiBjYXJvdXNlbFNwZWVkKCkge1xuICAgICQoXCIjY2Fyb3VzZWxJbmRpY2F0b3JzXCIpLmNhcm91c2VsKHtcbiAgICAgIGludGVydmFsOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgLy/nubPosrvmlrnlvI/oqqrmmI7poqjnkLTliqDmuJvmjInpiJVcbiAgZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuICAgICQoJ2J1dHRvbltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtcGx1c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICQodGhpcykuZmluZChcIi5mYS1taW51c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOewoeaYk+mmrOi3r+Wwj+WkqeS9v+aJi+apn+eJiOmggeexpOmBuOWWriDoq4vkuIrntZXlsI3ntrLlnYAg5oiW5pivIOebuOWwjei3r+W+kVxuICBmdW5jdGlvbiBzZXRVcmxSZWRpcmVjdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIikgIT09IG51bGwpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIik7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsUmVnID0gL2h0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolX1xcKy5+Iz8mLy89XSopLztcbiAgICAgICAgdmFyIGhhc2hSZWcgPSAvXiMvO1xuICAgICAgICB2YXIgbmV3VXJsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHVybFJlZy50ZXN0KG5ld1VybCkpIHtcbiAgICAgICAgICB2YXIgZGV2aWNlQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgIHZhciBpc0lvcyA9IGRldmljZUFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhtYWN8aXBhZHxpcGhvbmUpLyk7XG4gICAgICAgICAgLy/liKTmlrfmmK/lkKZTYWZhcmnngI/opr3lmahcbiAgICAgICAgICBpZiAoaXNJb3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBuZXdVcmw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKG5ld1VybCwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhhc2hSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKG5ld1VybCkub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDgwMCxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdXJsTm93ID0gbG9jYXRpb24uaHJlZi5zbGljZShcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoXCIvXCIpICsgMSxcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKHVybE5vdywgbmV3VXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9qcee3qeaNsuWLlSvnm7TmjqXosrzmnIloYXNo55qE6YCj57WQ5Lmf6IO957ep5o2y5YuVXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgJChcIi5qcy1hbmltYXRlU2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIHZhciB0YXJnZXRQb3MgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0UG9zKTtcbiAgICAgIGlmICh0YXJnZXQuaW5kZXhPZihcIiNcIikgIT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHRhcmdldFBvcyAtIDUwIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGlmIHdlIGhhdmUgYW5jaG9yIG9uIHRoZSB1cmwgKGNhbGxpbmcgZnJvbSBvdGhlciBwYWdlKVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgLy8gZGlyZWN0IGJyb3dzZXIgdG8gdG9wIHJpZ2h0IGF3YXlcbiAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIC8vIHRha2VzIGNhcmUgb2Ygc29tZSBicm93c2VycyBpc3N1ZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIH0sIDEpO1xuICAgICAgLy8gc21vb3RoIHNjcm9sbCB0byB0aGUgYW5jaG9yIGlkXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQod2luZG93LmxvY2F0aW9uLmhhc2gpLm9mZnNldCgpLnRvcCArIFwicHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgODAwLFxuICAgICAgICBcInN3aW5nXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlwVGFicygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKTtcblxuICAgICAgW10uc2xpY2UuY2FsbCh0cmlnZ2VyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleEFkKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkXCIpICE9PSBudWxsKSB7XG4gICAgICAkKFwiI2FkXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9XG4gIH1cblxuICAvL+WVn+WLlWZ1bmN0aW9uLee2sumggei8ieWFpeWujOaIkOW+jFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgc2xpY2soKTtcbiAgICBjYXJvdXNlbFNwZWVkKCk7XG4gICAgYWNjb3JkaW9uVG9nZ2xlKCk7XG4gICAgc2V0VXJsUmVkaXJlY3Rpb24oKTtcbiAgICBhbmltYXRlU2Nyb2xsKCk7XG4gICAgdmlwU2xpY2soKTtcbiAgICB2aXBGYXZvcml0ZSgpO1xuICAgIHZpcFRhYnMoKTtcbiAgICBpbmRleEFkKCk7XG4gIH0pO1xuICAvL+WVn+WLlWZ1bmN0aW9uLeimlueql+Wkp+Wwj+iuiuabtFxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHt9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3mjbLli5VcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXZlbnRDb2xvcigpO1xuICB9KTtcblxuICAvLyAkKCcuc2xpY2snKS5zbGljayh7XG4gIC8vIFx0c2xpZGVzVG9TaG93OiAyLFxuICAvLyBcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAvLyB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkRmJTZGsoKSB7XG5cdChmdW5jdGlvbiAoZCwgcywgaWQpIHtcblx0XHR2YXIganMsXG5cdFx0XHRmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuXHRcdGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuXHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpO1xuXHRcdGpzLmlkID0gaWQ7XG5cdFx0anMuc3JjID0gJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvemhfVFcvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12OS4wJztcblx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG5cdH0pKGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJyk7XG59XG4iLCIvLyDovInlhaXmqKHntYRcbi8vIOevgOaFtuS4u+mhjFxuaW1wb3J0IHsgY3JlYXRlQ2FudmFzLCBjcmVhdERlY29SZWxhdGl2ZSB9IGZyb20gXCIuL3RoZW1lL19uZXcteWVhclwiO1xuLy8g5Z+65pys6Kit5a6aXG5pbXBvcnQgeyBsb2FkRmJTZGsgfSBmcm9tIFwiLi9jb21wb25lbnRzL19mYi1zZGtcIjtcbmltcG9ydCB7IGJhc2ljIH0gZnJvbSBcIi4vY29tcG9uZW50cy9fYmFzaWNcIjtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgbG9hZEZiU2RrKCk7XG4gIGNyZWF0ZUNhbnZhcygpO1xuICBjcmVhdERlY29SZWxhdGl2ZSgpO1xuICBiYXNpYygpO1xufSk7XG4iLCIvLyDpppbpoIHnr4DmhbYgY2FudmFzXG5mdW5jdGlvbiBjcmVhdGVDYW52YXMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpICE9PSBudWxsKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQ0FOVkFTXCIpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gXCJ0LWNhbnZhc1wiO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpXG4gICAgICAuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpKTtcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhc0FuaW1hdGlvbigpO1xuICAgIGNhbnZhcy5pbml0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQ2FudmFzQW5pbWF0aW9uKCkge1xuICB0aGlzLmZsYWtlcyA9IG5ldyBGbGFrZXMoKTtcbn1cblxuQ2FudmFzQW5pbWF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1jYW52YXNcIik7XG4gIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB0aGlzLnd3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHRoaXMud2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53dztcbiAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy53aDtcbiAgdGhpcy5mbGFrZXMuaW5pdCgpO1xuICB0aGlzLnJlbmRlcigpO1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxuQ2FudmFzQW5pbWF0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnd3LCB0aGlzLndoKTtcbiAgdGhpcy5kcmF3Rmxha2VzKCk7XG4gIHRoaXMuZmxha2VzLnVwZGF0ZSgpO1xuXG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMucmVuZGVyKCk7XG4gIH0pO1xufTtcblxuQ2FudmFzQW5pbWF0aW9uLnByb3RvdHlwZS5kcmF3Rmxha2VzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZsYWtlcy5jb2xvcjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZsYWtlcy5tYXhOdW1iZXI7IGkrKykge1xuICAgIHZhciBmID0gdGhpcy5mbGFrZXMuY2hpbGRyZW5baV07XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShmLngsIGYueSk7XG4gICAgdGhpcy5jdHguc2NhbGUoZi5mLCAxKTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5hcmMoMCwgMCwgZi5yLCAwLCBNYXRoLlBJICogMik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LnNjYWxlKGYuZjIsIDEpO1xuICAgIHRoaXMuY3R4LnJvdGF0ZSgoNDUgLyAxODApICogTWF0aC5QSSk7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KC1mLnIgLyA0LCAtZi5yIC8gNCwgZi5yIC8gMiwgZi5yIC8gMik7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG59O1xuXG5DYW52YXNBbmltYXRpb24ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLnd3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgX3RoaXMud2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgX3RoaXMuY2FudmFzLndpZHRoID0gX3RoaXMud3c7XG4gICAgX3RoaXMuY2FudmFzLmhlaWdodCA9IF90aGlzLndoO1xuICAgIF90aGlzLmZsYWtlcy53dyA9IF90aGlzLnd3O1xuICAgIF90aGlzLmZsYWtlcy53aCA9IF90aGlzLndoO1xuICB9KTtcbn07XG5cbi8vIGZsYWtlc1xuZnVuY3Rpb24gRmxha2VzKCkge1xuICB0aGlzLm1heE51bWJlciA9IDg7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgdGhpcy5hbmdsZSA9IDA7XG4gIHRoaXMud3cgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdGhpcy53aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdGhpcy5jb2xvciA9IFwiI2VkYjY2ZFwiO1xufVxuXG5GbGFrZXMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBQaSA9IE1hdGguUEk7XG4gIHZhciBQaTIgPSBNYXRoLlBJICogMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heE51bWJlcjsgaSsrKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud3cpLFxuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aCksXG4gICAgICByOiBNYXRoLnJhbmRvbSgpICogNSArIDEwLFxuICAgICAgZDogTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4TnVtYmVyLFxuICAgICAgZjogMCxcbiAgICAgIGZpOiBNYXRoLnJhbmRvbSgpLFxuICAgIH0pO1xuICB9XG59O1xuXG5GbGFrZXMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbmdsZSArPSAwLjAxO1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4TnVtYmVyOyBpKyspIHtcbiAgICB2YXIgZiA9IF90aGlzLmNoaWxkcmVuW2ldO1xuICAgIGYueSArPSBNYXRoLmFicyhNYXRoLmNvcyh0aGlzLmFuZ2xlICsgZi5kKSkgKyBmLmQgLyAyO1xuICAgIGYuZiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoTWF0aC5zaW4oX3RoaXMuYW5nbGUgKiA0ICsgZi5maSAqIDYpKSA8IDAuMikge1xuICAgICAgICByZXR1cm4gMC4yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc2luKF90aGlzLmFuZ2xlICogNCArIGYuZmkgKiA2KTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIGYuZjIgPSBNYXRoLnNpbihfdGhpcy5hbmdsZSAqIDQgKyBmLmZpICogNik7XG4gICAgaWYgKHRoaXMuY2hlY2tCb3VuZGFyeShmLngsIGYueSkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5baV0gPSB7XG4gICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB0aGlzLnd3LFxuICAgICAgICB5OiAtMTAsXG4gICAgICAgIHI6IGYucixcbiAgICAgICAgZDogZi5kLFxuICAgICAgICBmOiAwLFxuICAgICAgICBmaTogTWF0aC5yYW5kb20oKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5GbGFrZXMucHJvdG90eXBlLmNoZWNrQm91bmRhcnkgPSBmdW5jdGlvbiAoeCwgeSkge1xuICByZXR1cm4geCA+IHRoaXMud3cgKyAxMCB8fCB4IDwgLTEwIHx8IHkgPiB0aGlzLndoO1xufTtcblxuLy8g6aaW6aCB56+A5oW26KOd6aO+XG4vLyBmdW5jdGlvbiBjcmVhdGVEZWNvRml4ZWQoKSB7XG4vLyAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpICE9PSBudWxsKSB7XG4vLyAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIG5vZGUuY2xhc3NOYW1lID0gXCJ0LWRlY28tZml4ZWRcIjtcbi8vICAgICBub2RlLmlubmVySFRNTCA9XG4vLyAgICAgICAnPGRpdiBjbGFzcz1cInQtZGVjby1uZXcteWVhci1sYW50ZXJuLTFcIj5cXFxuLy8gXHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL25ldy15ZWFyL25ldy15ZWFyLWxhbnRlcm4uc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuLy8gICAgICAgPC9kaXY+XFxcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJ0LWRlY28tbmV3LXllYXItbGFudGVybi0yXCI+XFxcbi8vIFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90aGVtZS9uZXcteWVhci9uZXcteWVhci1sYW50ZXJuLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbi8vICAgICAgIDwvZGl2PlxcXG4vLyAgICAgICAnO1xuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAucXVlcnlTZWxlY3RvcihcIm1haW5cIilcbi8vICAgICAgIC5pbnNlcnRCZWZvcmUobm9kZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKSk7XG4vLyAgICAgZml4ZWRUb0Fic29sdXRlQm90dG9tKCk7XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gY3JlYXREZWNvUmVsYXRpdmUoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikgIT09IG51bGwpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBcInQtZGVjby1yZWxhdGl2ZVwiO1xuICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwiei1pbmRleDotMVwiO1xuICAgIG5vZGUuaW5uZXJIVE1MID1cbiAgICAgICc8ZGl2IGNsYXNzPVwidC1kZWNvLW5ldy15ZWFyLWxhbnRlcm4tMVwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL25ldy15ZWFyL25ldy15ZWFyLWxhbnRlcm4uc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby1uZXcteWVhci1sYW50ZXJuLTJcIj5cXFxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90aGVtZS9uZXcteWVhci9uZXcteWVhci1sYW50ZXJuLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICA8L2Rpdj5cXFxuICAgICc7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIilcbiAgICAgIC5pbnNlcnRCZWZvcmUobm9kZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuXG4gICAgdmFyIHBjID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjAwcHgpXCIpO1xuICAgIHBjLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2gpO1xuICAgIG1lZGlhTWF0Y2gocGMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhTWF0Y2gobWF0Y2hNZWRpYSkge1xuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgcmVsYXRpdmVUb0ZpeGVkKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCByZWxhdGl2ZVRvRml4ZWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1kZWNvLXJlbGF0aXZlXCIpLnN0eWxlLmNzc1RleHQgPSBcInotaW5kZXg6LTE7XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUb0ZpeGVkKCkge1xuICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIik7XG4gIHZhciB0YXJnZXRUb3AgPSBnZXRUb3AodGFyZ2V0KTtcbiAgaWYgKHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjMgPj0gdGFyZ2V0VG9wKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50LWRlY28tcmVsYXRpdmVcIikuc3R5bGUuY3NzVGV4dCA9XG4gICAgICBcInBvc2l0aW9uOmZpeGVkOyBsZWZ0OjA7IHRvcDozMCU7IHdpZHRoOjEwMCVcIjtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1yZWxhdGl2ZVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJ6LWluZGV4Oi0xO1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvcChlbCkge1xuICB2YXIgYWJzVG9wID0gZWwub2Zmc2V0VG9wO1xuICB2YXIgZWxQYXJlbnQgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gIHdoaWxlIChlbFBhcmVudCAhPT0gbnVsbCkge1xuICAgIGFic1RvcCArPSBlbFBhcmVudC5vZmZzZXRUb3AgKyBlbFBhcmVudC5jbGllbnRUb3A7XG4gICAgZWxQYXJlbnQgPSBlbFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIGFic1RvcDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2FudmFzLCBjcmVhdERlY29SZWxhdGl2ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==