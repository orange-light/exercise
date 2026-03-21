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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-valentine.js");
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

/***/ "./src/SASS_version3.2/assets/js/main-valentine.js":
/*!*********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-valentine.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_valentine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_valentine */ "./src/SASS_version3.2/assets/js/theme/_valentine.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_theme_valentine__WEBPACK_IMPORTED_MODULE_0__["creatDecoRelative"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_valentine.js":
/*!***********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_valentine.js ***!
  \***********************************************************/
/*! exports provided: creatDecoRelative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatDecoRelative", function() { return creatDecoRelative; });
function creatDecoRelative() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-relative";
    node.style.cssText = "z-index:-1";
    node.innerHTML = '<div class="t-deco-valentine-heart-1">\
    <img src="assets/img/theme/valentine/heart1.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-valentine-heart-2">\
    <img src="assets/img/theme/valentine/heart2.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-valentine-heart-3">\
    <img src="assets/img/theme/valentine/heart3.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-valentine-heart-4">\
    <img src="assets/img/theme/valentine/heart4.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-valentine-heart-5">\
    <img src="assets/img/theme/valentine/heart5.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-valentine-heart-6">\
    <img src="assets/img/theme/valentine/heart6.svg" alt="" class="img-fluid">\
    </div>\
    ';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tdmFsZW50aW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL3RoZW1lL192YWxlbnRpbmUuanMiXSwibmFtZXMiOlsiYmFzaWMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJ0eXBlIiwiZG9uZSIsImRhdGEiLCJodG1sIiwiYWN0aXZlTWVudSIsImxvYWQiLCJ0YXJnZXQiLCJkcm9wZG93blRvZ2dsZSIsInVuYmluZCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZVRvZ2dsZSIsImRyb3Bkb3duVHJpZ2dlciIsImRyb3Bkb3duIiwiZHJvcGRvd25TaG93IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NzIiwiaGVpZ2h0IiwidXNlciIsImhhc0NsYXNzIiwic2V0VGltZW91dCIsIm92ZXJmbG93IiwidXNlclRyaWdnZXIiLCJ1c2VyU2hvdyIsIndpbmRvdyIsImJpbmQiLCJ3aWR0aCIsInRyaWdnZXIiLCJzbGljayIsInNsaWNrU2V0dGluZyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiY2VudGVyTW9kZSIsImF1dG9wbGF5Iiwic2xpY2tUYXJnZXQiLCJmb3JFYWNoIiwiaXRlbSIsInZpcFNsaWNrIiwic2xpZGVzUGVyUm93Iiwicm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2aXBGYXZvcml0ZSIsImNhcm91c2VsU3BlZWQiLCJjYXJvdXNlbCIsImludGVydmFsIiwiYWNjb3JkaW9uVG9nZ2xlIiwic2V0VXJsUmVkaXJlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybFJlZyIsImhhc2hSZWciLCJuZXdVcmwiLCJ2YWx1ZSIsInRlc3QiLCJkZXZpY2VBZ2VudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSW9zIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGFzaCIsInVybE5vdyIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYW5pbWF0ZVNjcm9sbCIsImNsaWNrIiwiYXR0ciIsInRhcmdldFBvcyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwic2Nyb2xsIiwidmlwVGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5kZXhBZCIsIm1vZGFsIiwicmVzaXplIiwibG9hZEZiU2RrIiwiZCIsInMiLCJpZCIsImpzIiwiZmpzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXREZWNvUmVsYXRpdmUiLCJub2RlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjc3NUZXh0IiwiaW5uZXJIVE1MIiwicGMiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJtZWRpYU1hdGNoIiwibWF0Y2hlcyIsInJlbGF0aXZlVG9GaXhlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRUb3AiLCJnZXRUb3AiLCJpbm5lckhlaWdodCIsImVsIiwiYWJzVG9wIiwib2Zmc2V0VG9wIiwiZWxQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJjbGllbnRUb3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEI7QUFDQUMsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCRixLQUFDLENBQUNHLElBQUYsQ0FBTztBQUNMQyxZQUFNLEVBQUUsS0FESDtBQUVMQyxTQUFHLEVBQUUsbUJBRkE7QUFHTEMsVUFBSSxFQUFFO0FBSEQsS0FBUCxFQUlHQyxJQUpI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Q0FBQ3pILE1BQUQsQ0FBdEI7O0FBQ0EsTUFBSXNILE9BQU8sR0FBRy9GLE1BQU0sQ0FBQ21HLFdBQVAsR0FBcUIsR0FBL0IsSUFBc0NGLFNBQTFDLEVBQXFEO0FBQ25EbkksWUFBUSxDQUFDNkQsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMwRCxLQUEzQyxDQUFpREMsT0FBakQsR0FDRSw2Q0FERjtBQUVELEdBSEQsTUFHTztBQUNMeEgsWUFBUSxDQUFDNkQsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMwRCxLQUEzQyxDQUFpREMsT0FBakQsR0FBMkQsYUFBM0Q7QUFDRDtBQUNGOztBQUVELFNBQVNZLE1BQVQsQ0FBZ0JFLEVBQWhCLEVBQW9CO0FBQ2xCLE1BQUlDLE1BQU0sR0FBR0QsRUFBRSxDQUFDRSxTQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBR0gsRUFBRSxDQUFDSSxZQUFsQjs7QUFDQSxTQUFPRCxRQUFRLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJGLFVBQU0sSUFBSUUsUUFBUSxDQUFDRCxTQUFULEdBQXFCQyxRQUFRLENBQUNFLFNBQXhDO0FBQ0FGLFlBQVEsR0FBR0EsUUFBUSxDQUFDQyxZQUFwQjtBQUNEOztBQUNELFNBQU9ILE1BQVA7QUFDRCIsImZpbGUiOiJtYWluLXZhbGVudGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvbWFpbi12YWxlbnRpbmUuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2ljKCkge1xuICAvLyBhamF4IOmFjeWQiEpRMyDlvJXlhaXoqK3nva5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiYWpheC9faGVhZGVyLmh0bWxcIixcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjaGVhZGVyXCIpLmh0bWwoZGF0YSk7XG4gICAgICBhY3RpdmVNZW51KCk7XG4gICAgfSk7XG4gICAgJChcIiNmb290ZXJcIikubG9hZChcImFqYXgvX2Zvb3Rlci5odG1sXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBhY3RpdmVNZW51KCkge1xuICAgIC8vZHJvcGRvd24gdG9nZ2xlXG4gICAgdmFyIHRhcmdldCA9ICQoXCIubC1kcm9wZG93bi10aXRsZVwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLmZpbmQoXCIubC1kcm9wZG93bi10aXRsZVwiKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgZHJvcGRvd24gb3BlblxuICAgIHZhciBkcm9wZG93blRyaWdnZXIgPSAkKFwiLmwtZHJvcGRvd24taWNvblwiKTtcbiAgICB2YXIgZHJvcGRvd24gPSAkKFwiLmwtZHJvcGRvd24tbGlzdFwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blNob3coKSB7XG4gICAgICBkcm9wZG93blRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICBkcm9wZG93blRyaWdnZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCJodG1sXCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgaWYgKHVzZXIuaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbW9iaWxlIHVzZXIgb3BlblxuICAgIHZhciB1c2VyVHJpZ2dlciA9ICQoXCIubC11c2VyLWljb25cIik7XG4gICAgdmFyIHVzZXIgPSAkKFwiLmwtdXNlci1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIHVzZXJTaG93KCkge1xuICAgICAgdXNlclRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICB1c2VyVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAoZHJvcGRvd24uaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIHVzZXIudG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgIGRyb3Bkb3duVG9nZ2xlKCk7XG4gICAgICAgICAgZHJvcGRvd25TaG93KCk7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmICg5OTIgPCAkKHRoaXMpLndpZHRoKCkgJiYgJCh0aGlzKS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICAgIHVzZXJTaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVG9nZ2xlKCk7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRyaWdnZXIoXCJyZXNpemVcIik7XG4gIH1cblxuICAvLyDpppbpoIEgc2xpY2tcbiAgZnVuY3Rpb24gc2xpY2soKSB7XG4gICAgdmFyIHNsaWNrU2V0dGluZyA9IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgY2VudGVyUGFkZGluZzogXCIwcHhcIixcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgfTtcblxuICAgIHZhciBzbGlja1RhcmdldCA9IFskKFwiLnAtZXZlbnQtY29udGFpbmVyXCIpLCAkKFwiLnAtc2VydmljZS13cmFwcGVyXCIpXTtcbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8PSA3NjcpIHtcbiAgICAgICAgICBzbGlja1RhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgICAgICAgIGl0ZW0uc2xpY2soXCJ1bnNsaWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zbGljayhzbGlja1NldHRpbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuICAvL3ZpcCBzbGlja1xuICBmdW5jdGlvbiB2aXBTbGljaygpIHtcbiAgICAkKFwiLnYtc2xpY2stY2Fyb3VzZWwtdmlwXCIpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyUm93OiAzLFxuICAgICAgcm93czogMixcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMixcbiAgICAgICAgICAgIHJvd3M6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuICAvL+WKoOWFpeacgOaEm3RvZ2dsZVxuICBmdW5jdGlvbiB2aXBGYXZvcml0ZSgpIHtcbiAgICAkKFwiLnAtdmlwLWZhdm9yaXRlLWljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG4gIC8vIOWFqOe2suermSDlubvnh4jniYfpgJ/luqZcbiAgZnVuY3Rpb24gY2Fyb3VzZWxTcGVlZCgpIHtcbiAgICAkKFwiI2Nhcm91c2VsSW5kaWNhdG9yc1wiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8v57mz6LK75pa55byP6Kqq5piO6aKo55C05Yqg5rib5oyJ6YiVXG4gIGZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcbiAgICAkKCdidXR0b25bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5maW5kKFwiLmZhLXBsdXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtbWludXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSk7XG4gIH1cblxuICAvLyDnsKHmmJPppqzot6/lsI/lpKnkvb/miYvmqZ/niYjpoIHnsaTpgbjllq4g6KuL5LiK57WV5bCN57ay5Z2AIOaIluaYryDnm7jlsI3ot6/lvpFcbiAgZnVuY3Rpb24gc2V0VXJsUmVkaXJlY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpICE9PSBudWxsKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpO1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybFJlZyA9IC9odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYihbLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKS87XG4gICAgICAgIHZhciBoYXNoUmVnID0gL14jLztcbiAgICAgICAgdmFyIG5ld1VybCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh1cmxSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgdmFyIGRldmljZUFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICB2YXIgaXNJb3MgPSBkZXZpY2VBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8obWFjfGlwYWR8aXBob25lKS8pO1xuICAgICAgICAgIC8v5Yik5pa35piv5ZCmU2FmYXJp54CP6Ka95ZmoXG4gICAgICAgICAgaWYgKGlzSW9zKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbmV3VXJsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihuZXdVcmwsIFwiX2JsYW5rXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoYXNoUmVnLnRlc3QobmV3VXJsKSkge1xuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChuZXdVcmwpLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4MDAsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHVybE5vdyA9IGxvY2F0aW9uLmhyZWYuc2xpY2UoXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSh1cmxOb3csIG5ld1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vanHnt6nmjbLli5Ur55u05o6l6LK85pyJaGFzaOeahOmAo+e1kOS5n+iDvee3qeaNsuWLlVxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgICQoXCIuanMtYW5pbWF0ZVNjcm9sbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICB2YXIgdGFyZ2V0UG9zID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldFBvcyk7XG4gICAgICBpZiAodGFyZ2V0LmluZGV4T2YoXCIjXCIpICE9IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0YXJnZXRQb3MgLSA1MCB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpZiB3ZSBoYXZlIGFuY2hvciBvbiB0aGUgdXJsIChjYWxsaW5nIGZyb20gb3RoZXIgcGFnZSlcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIC8vIGRpcmVjdCBicm93c2VyIHRvIHRvcCByaWdodCBhd2F5XG4gICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICAvLyB0YWtlcyBjYXJlIG9mIHNvbWUgYnJvd3NlcnMgaXNzdWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICB9LCAxKTtcbiAgICAgIC8vIHNtb290aCBzY3JvbGwgdG8gdGhlIGFuY2hvciBpZFxuICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5vZmZzZXQoKS50b3AgKyBcInB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDgwMCxcbiAgICAgICAgXCJzd2luZ1wiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpcFRhYnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIikubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIik7XG5cbiAgICAgIFtdLnNsaWNlLmNhbGwodHJpZ2dlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhBZCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZFwiKSAhPT0gbnVsbCkge1xuICAgICAgJChcIiNhZFwiKS5tb2RhbChcInNob3dcIik7XG4gICAgfVxuICB9XG5cbiAgLy/llZ/li5VmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHNsaWNrKCk7XG4gICAgY2Fyb3VzZWxTcGVlZCgpO1xuICAgIGFjY29yZGlvblRvZ2dsZSgpO1xuICAgIHNldFVybFJlZGlyZWN0aW9uKCk7XG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xuICAgIHZpcFNsaWNrKCk7XG4gICAgdmlwRmF2b3JpdGUoKTtcbiAgICB2aXBUYWJzKCk7XG4gICAgaW5kZXhBZCgpO1xuICB9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3oppbnqpflpKflsI/orormm7RcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7fSk7XG4gIC8v5ZWf5YuVZnVuY3Rpb24t5o2y5YuVXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIC8vIGV2ZW50Q29sb3IoKTtcbiAgfSk7XG5cbiAgLy8gJCgnLnNsaWNrJykuc2xpY2soe1xuICAvLyBcdHNsaWRlc1RvU2hvdzogMixcbiAgLy8gXHRzbGlkZXNUb1Njcm9sbDogMSxcbiAgLy8gfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEZiU2RrKCkge1xuXHQoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG5cdFx0dmFyIGpzLFxuXHRcdFx0ZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcblx0XHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcblx0XHRqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcblx0XHRqcy5pZCA9IGlkO1xuXHRcdGpzLnNyYyA9ICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L3poX1RXL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djkuMCc7XG5cdFx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuXHR9KShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpO1xufVxuIiwiLy8g6LyJ5YWl5qih57WEXG4vLyDnr4DmhbbkuLvpoYxcbmltcG9ydCB7Y3JlYXREZWNvUmVsYXRpdmUgfSBmcm9tIFwiLi90aGVtZS9fdmFsZW50aW5lXCI7XG4vLyDln7rmnKzoqK3lrppcbmltcG9ydCB7IGxvYWRGYlNkayB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2ZiLXNka1wiO1xuaW1wb3J0IHsgYmFzaWMgfSBmcm9tIFwiLi9jb21wb25lbnRzL19iYXNpY1wiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBsb2FkRmJTZGsoKTtcbiAgY3JlYXREZWNvUmVsYXRpdmUoKTtcbiAgYmFzaWMoKTtcbn0pO1xuIiwiZnVuY3Rpb24gY3JlYXREZWNvUmVsYXRpdmUoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpICE9PSBudWxsKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gXCJ0LWRlY28tcmVsYXRpdmVcIjtcbiAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcInotaW5kZXg6LTFcIjtcbiAgICBub2RlLmlubmVySFRNTCA9XG4gICAgICAnPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtMVwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDEuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtMlwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDIuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtM1wiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDMuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtNFwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDQuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtNVwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDUuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby12YWxlbnRpbmUtaGVhcnQtNlwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3ZhbGVudGluZS9oZWFydDYuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgJztcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIilcbiAgICAgIC5pbnNlcnRCZWZvcmUobm9kZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLW1haW4tdGl0bGVcIikpO1xuXG4gICAgdmFyIHBjID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjAwcHgpXCIpO1xuICAgIHBjLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2gpO1xuICAgIG1lZGlhTWF0Y2gocGMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhTWF0Y2gobWF0Y2hNZWRpYSkge1xuICBpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgcmVsYXRpdmVUb0ZpeGVkKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCByZWxhdGl2ZVRvRml4ZWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1kZWNvLXJlbGF0aXZlXCIpLnN0eWxlLmNzc1RleHQgPSBcInotaW5kZXg6LTE7XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUb0ZpeGVkKCkge1xuICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIik7XG4gIHZhciB0YXJnZXRUb3AgPSBnZXRUb3AodGFyZ2V0KTtcbiAgaWYgKHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjMgPj0gdGFyZ2V0VG9wKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50LWRlY28tcmVsYXRpdmVcIikuc3R5bGUuY3NzVGV4dCA9XG4gICAgICBcInBvc2l0aW9uOmZpeGVkOyBsZWZ0OjA7IHRvcDozMCU7IHdpZHRoOjEwMCVcIjtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1yZWxhdGl2ZVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJ6LWluZGV4Oi0xO1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvcChlbCkge1xuICB2YXIgYWJzVG9wID0gZWwub2Zmc2V0VG9wO1xuICB2YXIgZWxQYXJlbnQgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gIHdoaWxlIChlbFBhcmVudCAhPT0gbnVsbCkge1xuICAgIGFic1RvcCArPSBlbFBhcmVudC5vZmZzZXRUb3AgKyBlbFBhcmVudC5jbGllbnRUb3A7XG4gICAgZWxQYXJlbnQgPSBlbFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIGFic1RvcDtcbn1cblxuZXhwb3J0IHtjcmVhdERlY29SZWxhdGl2ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==