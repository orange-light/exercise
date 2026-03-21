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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-summer.js");
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

/***/ "./src/SASS_version3.2/assets/js/main-summer.js":
/*!******************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-summer.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_summer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_summer */ "./src/SASS_version3.2/assets/js/theme/_summer.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_theme_summer__WEBPACK_IMPORTED_MODULE_0__["createDecoFixed"])();
  Object(_theme_summer__WEBPACK_IMPORTED_MODULE_0__["createDecoRelative"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_summer.js":
/*!********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_summer.js ***!
  \********************************************************/
/*! exports provided: createDecoFixed, createDecoRelative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecoFixed", function() { return createDecoFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecoRelative", function() { return createDecoRelative; });
// 首頁節慶裝飾
function createDecoFixed() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-fixed";
    node.innerHTML = '<div class="t-deco-summer-wave">\
        <img src="assets/img/theme/summer/summer-wave.png" alt="" class="img-fluid">\
      </div>';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
    fixedToAbsoluteBottom();
  }
}

function createDecoRelative() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-relative";
    node.innerHTML = '<div class="t-deco-summer-leaf-1">\
          <img src="assets/img/theme/summer/summer-leaf1.svg" alt="" class="img-fluid">\
        </div>\
        <div class="t-deco-summer-leaf-2">\
          <img src="assets/img/theme/summer/summer-leaf2.svg" alt="" class="img-fluid">\
      </div>';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tc3VtbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL3RoZW1lL19zdW1tZXIuanMiXSwibmFtZXMiOlsiYmFzaWMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJ0eXBlIiwiZG9uZSIsImRhdGEiLCJodG1sIiwiYWN0aXZlTWVudSIsImxvYWQiLCJ0YXJnZXQiLCJkcm9wZG93blRvZ2dsZSIsInVuYmluZCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZVRvZ2dsZSIsImRyb3Bkb3duVHJpZ2dlciIsImRyb3Bkb3duIiwiZHJvcGRvd25TaG93IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NzIiwiaGVpZ2h0IiwidXNlciIsImhhc0NsYXNzIiwic2V0VGltZW91dCIsIm92ZXJmbG93IiwidXNlclRyaWdnZXIiLCJ1c2VyU2hvdyIsIndpbmRvdyIsImJpbmQiLCJ3aWR0aCIsInRyaWdnZXIiLCJzbGljayIsInNsaWNrU2V0dGluZyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiY2VudGVyTW9kZSIsImF1dG9wbGF5Iiwic2xpY2tUYXJnZXQiLCJmb3JFYWNoIiwiaXRlbSIsInZpcFNsaWNrIiwic2xpZGVzUGVyUm93Iiwicm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2aXBGYXZvcml0ZSIsImNhcm91c2VsU3BlZWQiLCJjYXJvdXNlbCIsImludGVydmFsIiwiYWNjb3JkaW9uVG9nZ2xlIiwic2V0VXJsUmVkaXJlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybFJlZyIsImhhc2hSZWciLCJuZXdVcmwiLCJ2YWx1ZSIsInRlc3QiLCJkZXZpY2VBZ2VudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSW9zIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGFzaCIsInVybE5vdyIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYW5pbWF0ZVNjcm9sbCIsImNsaWNrIiwiYXR0ciIsInRhcmdldFBvcyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwic2Nyb2xsIiwidmlwVGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5kZXhBZCIsIm1vZGFsIiwicmVzaXplIiwibG9hZEZiU2RrIiwiZCIsInMiLCJpZCIsImpzIiwiZmpzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlRGVjb0ZpeGVkIiwiY3JlYXRlRGVjb1JlbGF0aXZlIiwibm9kZSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImZpeGVkVG9BYnNvbHV0ZUJvdHRvbSIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTyxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCO0FBQ0FDLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsS0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMsU0FBRyxFQUFFLG1CQUZBO0FBR0xDLFVBQUksRUFBRTtBQUhELEtBQVAsRUFJR0MsSUFKSCxDQUlRLFVBQVVDLElBQVYsRUFBZ0I7QUFDdEJSLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYixDQUFrQkQsSUFBbEI7QUFDQUUsZ0JBQVU7QUFDWCxLQVBEO0FBUUFWLEtBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVcsSUFBYixDQUFrQixtQkFBbEI7QUFDRCxHQVZEOztBQVlBLFdBQVNELFVBQVQsR0FBc0I7QUFDcEI7QUFDQSxRQUFJRSxNQUFNLEdBQUdaLENBQUMsQ0FBQyxtQkFBRCxDQUFkOztBQUNBLGFBQVNhLGNBQVQsR0FBMEI7QUFDeEJELFlBQU0sQ0FBQ0UsTUFBUCxDQUFjLE9BQWQ7QUFDQUYsWUFBTSxDQUFDRyxFQUFQLENBQVUsT0FBVixFQUFtQixZQUFZO0FBQzdCZixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixXQUFSLENBQW9CLFdBQXBCO0FBQ0FoQixTQUFDLENBQUMsSUFBRCxDQUFELENBQ0dpQixNQURILEdBRUdDLFFBRkgsR0FHR0MsSUFISCxDQUdRLG1CQUhSLEVBSUdDLFdBSkgsQ0FJZSxXQUpmO0FBS0QsT0FQRDtBQVFEOztBQUVELGFBQVNDLFlBQVQsR0FBd0I7QUFDdEJULFlBQU0sQ0FBQ1EsV0FBUCxDQUFtQixXQUFuQjtBQUNELEtBakJtQixDQW1CcEI7OztBQUNBLFFBQUlFLGVBQWUsR0FBR3RCLENBQUMsQ0FBQyxrQkFBRCxDQUF2QjtBQUNBLFFBQUl1QixRQUFRLEdBQUd2QixDQUFDLENBQUMsa0JBQUQsQ0FBaEI7O0FBQ0EsYUFBU3dCLFlBQVQsR0FBd0I7QUFDdEJGLHFCQUFlLENBQUNSLE1BQWhCLENBQXVCLE9BQXZCO0FBQ0FRLHFCQUFlLENBQUNQLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVVVLENBQVYsRUFBYTtBQUN2Q0EsU0FBQyxDQUFDQyxjQUFGO0FBQ0ExQixTQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQixHQUFWLENBQWM7QUFBRUMsZ0JBQU0sRUFBRSxNQUFWO0FBQWtCLHdCQUFjO0FBQWhDLFNBQWQ7QUFDQTVCLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJCLEdBQVYsQ0FBYztBQUFFQyxnQkFBTSxFQUFFLE1BQVY7QUFBa0Isd0JBQWM7QUFBaEMsU0FBZDs7QUFDQSxZQUFJQyxJQUFJLENBQUNDLFFBQUwsQ0FBYyxTQUFkLENBQUosRUFBOEI7QUFDNUJELGNBQUksQ0FBQ1QsV0FBTCxDQUFpQixTQUFqQjtBQUNBVyxvQkFBVSxDQUFDLFlBQVk7QUFDckJSLG9CQUFRLENBQUNQLFdBQVQsQ0FBcUIsU0FBckI7QUFDRCxXQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0QsU0FMRCxNQUtPO0FBQ0xoQixXQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQixHQUFWLENBQWM7QUFBRUssb0JBQVEsRUFBRTtBQUFaLFdBQWQ7QUFDQWhDLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJCLEdBQVYsQ0FBYztBQUFFSyxvQkFBUSxFQUFFO0FBQVosV0FBZDtBQUNBVCxrQkFBUSxDQUFDUCxXQUFULENBQXFCLFNBQXJCO0FBQ0Q7QUFDRixPQWREO0FBZUQsS0F2Q21CLENBeUNwQjs7O0FBQ0EsUUFBSWlCLFdBQVcsR0FBR2pDLENBQUMsQ0FBQyxjQUFELENBQW5CO0FBQ0EsUUFBSTZCLElBQUksR0FBRzdCLENBQUMsQ0FBQyxjQUFELENBQVo7O0FBQ0EsYUFBU2tDLFFBQVQsR0FBb0I7QUFDbEJELGlCQUFXLENBQUNuQixNQUFaLENBQW1CLE9BQW5CO0FBQ0FtQixpQkFBVyxDQUFDbEIsRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBVVUsQ0FBVixFQUFhO0FBQ25DQSxTQUFDLENBQUNDLGNBQUY7QUFDQTFCLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJCLEdBQVYsQ0FBYztBQUFFQyxnQkFBTSxFQUFFLE1BQVY7QUFBa0Isd0JBQWM7QUFBaEMsU0FBZDtBQUNBNUIsU0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkIsR0FBVixDQUFjO0FBQUVDLGdCQUFNLEVBQUUsTUFBVjtBQUFrQix3QkFBYztBQUFoQyxTQUFkOztBQUNBLFlBQUlMLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQixTQUFsQixDQUFKLEVBQWtDO0FBQ2hDUCxrQkFBUSxDQUFDSCxXQUFULENBQXFCLFNBQXJCO0FBQ0FXLG9CQUFVLENBQUMsWUFBWTtBQUNyQkYsZ0JBQUksQ0FBQ2IsV0FBTCxDQUFpQixTQUFqQjtBQUNELFdBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxTQUxELE1BS087QUFDTGhCLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJCLEdBQVYsQ0FBYztBQUFFSyxvQkFBUSxFQUFFO0FBQVosV0FBZDtBQUNBaEMsV0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkIsR0FBVixDQUFjO0FBQUVLLG9CQUFRLEVBQUU7QUFBWixXQUFkO0FBQ0FILGNBQUksQ0FBQ2IsV0FBTCxDQUFpQixTQUFqQjtBQUNEO0FBQ0YsT0FkRDtBQWVEOztBQUVEaEIsS0FBQyxDQUFDbUMsTUFBRCxDQUFELENBQ0dDLElBREgsQ0FDUSxRQURSLEVBQ2tCLFlBQVk7QUFDMUIsVUFBSXBDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLEtBQVIsS0FBa0IsR0FBdEIsRUFBMkI7QUFDekJ4QixzQkFBYztBQUNkVyxvQkFBWTtBQUNaVSxnQkFBUTtBQUNULE9BSkQsTUFJTyxJQUFJLE1BQU1sQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQyxLQUFSLEVBQU4sSUFBeUJyQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQyxLQUFSLEtBQWtCLElBQS9DLEVBQXFEO0FBQzFESCxnQkFBUTtBQUNULE9BRk0sTUFFQTtBQUNMYixvQkFBWTtBQUNaUSxZQUFJLENBQUNULFdBQUwsQ0FBaUIsU0FBakI7QUFDQUcsZ0JBQVEsQ0FBQ0gsV0FBVCxDQUFxQixTQUFyQjtBQUNEO0FBQ0YsS0FiSCxFQWNHa0IsT0FkSCxDQWNXLFFBZFg7QUFlRCxHQTVGcUIsQ0E4RnRCOzs7QUFDQSxXQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQ2YsUUFBSUMsWUFBWTtBQUNkQyxVQUFJLEVBQUUsSUFEUTtBQUVkQyxjQUFRLEVBQUUsSUFGSTtBQUdkQyxXQUFLLEVBQUUsR0FITztBQUlkQyxrQkFBWSxFQUFFLENBSkE7QUFLZEMsZ0JBQVUsRUFBRSxJQUxFO0FBTWRDLGNBQVEsRUFBRTtBQU5JLGlIQU9GLElBUEUsZ0hBUUMsS0FSRCx5R0FTTixLQVRNLGlCQUFoQjtBQVlBLFFBQUlDLFdBQVcsR0FBRyxDQUFDL0MsQ0FBQyxDQUFDLG9CQUFELENBQUYsRUFBMEJBLENBQUMsQ0FBQyxvQkFBRCxDQUEzQixDQUFsQjtBQUNBQSxLQUFDLENBQUNtQyxNQUFELENBQUQsQ0FDR0MsSUFESCxDQUNRLFFBRFIsRUFDa0IsWUFBWTtBQUMxQixVQUFJcEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsS0FBUixNQUFtQixHQUF2QixFQUE0QjtBQUMxQlUsbUJBQVcsQ0FBQ0MsT0FBWixDQUFvQixVQUFVQyxJQUFWLEVBQWdCO0FBQ2xDLGNBQUlBLElBQUksQ0FBQ25CLFFBQUwsQ0FBYyxtQkFBZCxDQUFKLEVBQXdDO0FBQ3RDbUIsZ0JBQUksQ0FBQ1YsS0FBTCxDQUFXLFNBQVg7QUFDRDs7QUFDRFUsY0FBSSxDQUFDVixLQUFMLENBQVdDLFlBQVg7QUFDRCxTQUxEO0FBTUQsT0FQRCxNQU9PO0FBQ0xPLG1CQUFXLENBQUNDLE9BQVosQ0FBb0IsVUFBVUMsSUFBVixFQUFnQjtBQUNsQyxjQUFJQSxJQUFJLENBQUNuQixRQUFMLENBQWMsbUJBQWQsQ0FBSixFQUF3QztBQUN0Q21CLGdCQUFJLENBQUNWLEtBQUwsQ0FBVyxTQUFYO0FBQ0Q7QUFDRixTQUpEO0FBS0Q7QUFDRixLQWhCSCxFQWlCR0QsT0FqQkgsQ0FpQlcsUUFqQlg7QUFrQkQsR0EvSHFCLENBZ0l0Qjs7O0FBQ0EsV0FBU1ksUUFBVCxHQUFvQjtBQUNsQmxELEtBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCdUMsS0FBM0IsQ0FBaUM7QUFDL0JHLGNBQVEsRUFBRSxJQURxQjtBQUUvQlMsa0JBQVksRUFBRSxDQUZpQjtBQUcvQkMsVUFBSSxFQUFFLENBSHlCO0FBSS9CQyxnQkFBVSxFQUFFLENBQ1Y7QUFDRUMsa0JBQVUsRUFBRSxJQURkO0FBRUVDLGdCQUFRLEVBQUU7QUFDUkosc0JBQVksRUFBRSxDQUROO0FBRVJDLGNBQUksRUFBRTtBQUZFO0FBRlosT0FEVSxFQVFWO0FBQ0VFLGtCQUFVLEVBQUUsR0FEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1JKLHNCQUFZLEVBQUUsQ0FETjtBQUVSQyxjQUFJLEVBQUU7QUFGRTtBQUZaLE9BUlU7QUFKbUIsS0FBakM7QUFxQkQsR0F2SnFCLENBd0p0Qjs7O0FBQ0EsV0FBU0ksV0FBVCxHQUF1QjtBQUNyQnhELEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCZSxFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hEZixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixXQUFSLENBQW9CLFFBQXBCO0FBQ0QsS0FGRDtBQUdELEdBN0pxQixDQThKdEI7OztBQUNBLFdBQVN5QyxhQUFULEdBQXlCO0FBQ3ZCekQsS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIwRCxRQUF6QixDQUFrQztBQUNoQ0MsY0FBUSxFQUFFO0FBRHNCLEtBQWxDO0FBR0QsR0FuS3FCLENBcUt0Qjs7O0FBQ0EsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QjVELEtBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DZSxFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxZQUFZO0FBQzFEZixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixJQUFSLENBQWEsVUFBYixFQUF5QkgsV0FBekIsQ0FBcUMsUUFBckM7QUFDQWhCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1CLElBQVIsQ0FBYSxXQUFiLEVBQTBCSCxXQUExQixDQUFzQyxRQUF0QztBQUNELEtBSEQ7QUFJRCxHQTNLcUIsQ0E2S3RCOzs7QUFDQSxXQUFTNkMsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSTVELFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsWUFBdkIsTUFBeUMsSUFBN0MsRUFBbUQ7QUFDakQsVUFBSXhCLE9BQU8sR0FBR3JDLFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZDtBQUNBeEIsYUFBTyxDQUFDeUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUMsWUFBWTtBQUM3QyxZQUFJQyxNQUFNLEdBQUcsNkZBQWI7QUFDQSxZQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLFlBQUlDLE1BQU0sR0FBRyxLQUFLQyxLQUFsQjs7QUFDQSxZQUFJSCxNQUFNLENBQUNJLElBQVAsQ0FBWUYsTUFBWixDQUFKLEVBQXlCO0FBQ3ZCLGNBQUlHLFdBQVcsR0FBR0MsU0FBUyxDQUFDQyxTQUE1QjtBQUNBLGNBQUlDLEtBQUssR0FBR0gsV0FBVyxDQUFDSSxXQUFaLEdBQTBCQyxLQUExQixDQUFnQyxtQkFBaEMsQ0FBWixDQUZ1QixDQUd2Qjs7QUFDQSxjQUFJRixLQUFKLEVBQVc7QUFDVEcsb0JBQVEsQ0FBQ0MsSUFBVCxHQUFnQlYsTUFBaEI7QUFDRCxXQUZELE1BRU87QUFDTC9CLGtCQUFNLENBQUMwQyxJQUFQLENBQVlYLE1BQVosRUFBb0IsUUFBcEI7QUFDRDtBQUNGLFNBVEQsTUFTTyxJQUFJRCxPQUFPLENBQUNHLElBQVIsQ0FBYUYsTUFBYixDQUFKLEVBQTBCO0FBQy9CbEUsV0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjhFLE9BQWhCLENBQ0U7QUFDRUMscUJBQVMsRUFBRS9FLENBQUMsQ0FBQ2tFLE1BQUQsQ0FBRCxDQUFVYyxNQUFWLEdBQW1CQztBQURoQyxXQURGLEVBSUUsR0FKRixFQUtFLFlBQVk7QUFDVjlDLGtCQUFNLENBQUN3QyxRQUFQLENBQWdCTyxJQUFoQixHQUF1QmhCLE1BQXZCO0FBQ0QsV0FQSDtBQVNELFNBVk0sTUFVQTtBQUNMLGNBQUlpQixNQUFNLEdBQUdSLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjUSxLQUFkLENBQ1hULFFBQVEsQ0FBQ0MsSUFBVCxDQUFjUyxXQUFkLENBQTBCLEdBQTFCLElBQWlDLENBRHRCLEVBRVhWLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjVSxNQUZILENBQWI7QUFJQVgsa0JBQVEsQ0FBQ0MsSUFBVCxHQUFnQkQsUUFBUSxDQUFDQyxJQUFULENBQWNXLE9BQWQsQ0FBc0JKLE1BQXRCLEVBQThCakIsTUFBOUIsQ0FBaEI7QUFDRDtBQUNGLE9BOUJEO0FBK0JEO0FBQ0YsR0FqTnFCLENBbU50Qjs7O0FBQ0EsV0FBU3NCLGFBQVQsR0FBeUI7QUFDdkJ4RixLQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnlGLEtBQXZCLENBQTZCLFVBQVVoRSxDQUFWLEVBQWE7QUFDeEMsVUFBSWIsTUFBTSxHQUFHWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRixJQUFSLENBQWEsTUFBYixDQUFiO0FBQ0EsVUFBSUMsU0FBUyxHQUFHM0YsQ0FBQyxDQUFDWSxNQUFELENBQUQsQ0FBVW9FLE1BQVYsR0FBbUJDLEdBQW5DO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaOztBQUNBLFVBQUkvRSxNQUFNLENBQUNrRixPQUFQLENBQWUsR0FBZixLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzdCckUsU0FBQyxDQUFDQyxjQUFGO0FBQ0ExQixTQUFDLENBQUMsV0FBRCxDQUFELENBQWU4RSxPQUFmLENBQXVCO0FBQUVDLG1CQUFTLEVBQUVZLFNBQVMsR0FBRztBQUF6QixTQUF2QixFQUFzRCxJQUF0RDtBQUNEO0FBQ0YsS0FSRCxFQUR1QixDQVV2Qjs7QUFDQSxRQUFJeEQsTUFBTSxDQUFDd0MsUUFBUCxDQUFnQk8sSUFBcEIsRUFBMEI7QUFDeEI7QUFDQWEsWUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQU4sQ0FGd0IsQ0FHeEI7O0FBQ0FoRSxnQkFBVSxDQUFDLFlBQVk7QUFDckJnRSxjQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTjtBQUNELE9BRlMsRUFFUCxDQUZPLENBQVYsQ0FKd0IsQ0FPeEI7O0FBQ0EvRixPQUFDLENBQUMsV0FBRCxDQUFELENBQWU4RSxPQUFmLENBQ0U7QUFDRUMsaUJBQVMsRUFBRS9FLENBQUMsQ0FBQ21DLE1BQU0sQ0FBQ3dDLFFBQVAsQ0FBZ0JPLElBQWpCLENBQUQsQ0FBd0JGLE1BQXhCLEdBQWlDQyxHQUFqQyxHQUF1QztBQURwRCxPQURGLEVBSUUsR0FKRixFQUtFLE9BTEY7QUFPRDtBQUNGOztBQUVELFdBQVNlLE9BQVQsR0FBbUI7QUFDakIsUUFBSS9GLFFBQVEsQ0FBQ2dHLGdCQUFULENBQTBCLHVCQUExQixFQUFtRFgsTUFBbkQsS0FBOEQsQ0FBbEUsRUFBcUU7QUFDbkUsVUFBSWhELE9BQU8sR0FBR3JDLFFBQVEsQ0FBQ2dHLGdCQUFULENBQTBCLHVCQUExQixDQUFkO0FBRUEsU0FBR2IsS0FBSCxDQUFTYyxJQUFULENBQWM1RCxPQUFkLEVBQXVCVSxPQUF2QixDQUErQixVQUFVQyxJQUFWLEVBQWdCO0FBQzdDQSxZQUFJLENBQUNjLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFlBQVk7QUFDN0NkLGNBQUksQ0FBQ2tELFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtBQUNELFNBRkQ7QUFHQW5ELFlBQUksQ0FBQ2MsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsWUFBWTtBQUM1Q2QsY0FBSSxDQUFDa0QsU0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0QsU0FGRDtBQUdELE9BUEQ7QUFRRDtBQUNGOztBQUVELFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsUUFBSXJHLFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsS0FBdkIsTUFBa0MsSUFBdEMsRUFBNEM7QUFDMUM5RCxPQUFDLENBQUMsS0FBRCxDQUFELENBQVN1RyxLQUFULENBQWUsTUFBZjtBQUNEO0FBQ0YsR0FwUXFCLENBc1F0Qjs7O0FBQ0F2RyxHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUJxQyxTQUFLO0FBQ0xrQixpQkFBYTtBQUNiRyxtQkFBZTtBQUNmQyxxQkFBaUI7QUFDakIyQixpQkFBYTtBQUNidEMsWUFBUTtBQUNSTSxlQUFXO0FBQ1h3QyxXQUFPO0FBQ1BNLFdBQU87QUFDUixHQVZELEVBdlFzQixDQWtSdEI7O0FBQ0F0RyxHQUFDLENBQUNtQyxNQUFELENBQUQsQ0FBVXFFLE1BQVYsQ0FBaUIsWUFBWSxDQUFFLENBQS9CLEVBblJzQixDQW9SdEI7O0FBQ0F4RyxHQUFDLENBQUNtQyxNQUFELENBQUQsQ0FBVTRELE1BQVYsQ0FBaUIsWUFBWSxDQUMzQjtBQUNELEdBRkQsRUFyUnNCLENBeVJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQzdSRDtBQUFBO0FBQU8sU0FBU1UsU0FBVCxHQUFxQjtBQUMzQixHQUFDLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsRUFBaEIsRUFBb0I7QUFDcEIsUUFBSUMsRUFBSjtBQUFBLFFBQ0NDLEdBQUcsR0FBR0osQ0FBQyxDQUFDSyxvQkFBRixDQUF1QkosQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FEUDtBQUVBLFFBQUlELENBQUMsQ0FBQ00sY0FBRixDQUFpQkosRUFBakIsQ0FBSixFQUEwQjtBQUMxQkMsTUFBRSxHQUFHSCxDQUFDLENBQUNPLGFBQUYsQ0FBZ0JOLENBQWhCLENBQUw7QUFDQUUsTUFBRSxDQUFDRCxFQUFILEdBQVFBLEVBQVI7QUFDQUMsTUFBRSxDQUFDSyxHQUFILEdBQVMsZ0VBQVQ7QUFDQUosT0FBRyxDQUFDSyxVQUFKLENBQWVDLFlBQWYsQ0FBNEJQLEVBQTVCLEVBQWdDQyxHQUFoQztBQUNBLEdBUkQsRUFRRzdHLFFBUkgsRUFRYSxRQVJiLEVBUXVCLGdCQVJ2QjtBQVNBLEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQUQsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCdUcsc0VBQVM7QUFDVFksdUVBQWU7QUFDZkMsMEVBQWtCO0FBQ2xCdkgsaUVBQUs7QUFDTixDQUxELEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0EsU0FBU3NILGVBQVQsR0FBMkI7QUFDekIsTUFBSXBILFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsUUFBdkIsTUFBcUMsSUFBekMsRUFBK0M7QUFDN0MsUUFBSXlELElBQUksR0FBR3RILFFBQVEsQ0FBQ2dILGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBTSxRQUFJLENBQUNDLFNBQUwsR0FBaUIsY0FBakI7QUFDQUQsUUFBSSxDQUFDRSxTQUFMLEdBQ0U7QUFDTjtBQUNBLGFBSEk7QUFJQXhILFlBQVEsQ0FDTDZELGFBREgsQ0FDaUIsUUFEakIsRUFFR3NELFlBRkgsQ0FFZ0JHLElBRmhCLEVBRXNCdEgsUUFBUSxDQUFDNkQsYUFBVCxDQUF1QixlQUF2QixDQUZ0QjtBQUdBNEQseUJBQXFCO0FBQ3RCO0FBQ0Y7O0FBRUQsU0FBU0osa0JBQVQsR0FBOEI7QUFDNUIsTUFBSXJILFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsUUFBdkIsTUFBcUMsSUFBekMsRUFBK0M7QUFDN0MsUUFBSXlELElBQUksR0FBR3RILFFBQVEsQ0FBQ2dILGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBTSxRQUFJLENBQUNDLFNBQUwsR0FBaUIsaUJBQWpCO0FBQ0FELFFBQUksQ0FBQ0UsU0FBTCxHQUNFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQU5JO0FBT0F4SCxZQUFRLENBQ0w2RCxhQURILENBQ2lCLFFBRGpCLEVBRUdzRCxZQUZILENBRWdCRyxJQUZoQixFQUVzQnRILFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsZUFBdkIsQ0FGdEI7QUFHRDtBQUNGOztBQUVELFNBQVM0RCxxQkFBVCxHQUFpQztBQUMvQnZGLFFBQU0sQ0FBQzRCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVk7QUFDNUMsUUFBSTRELE9BQU8sR0FBR3hGLE1BQU0sQ0FBQ3lGLFdBQXJCOztBQUNBLFFBQ0VELE9BQU8sR0FBR3hGLE1BQU0sQ0FBQzBGLFdBQWpCLElBQ0E1SCxRQUFRLENBQUM2RCxhQUFULENBQXVCLFNBQXZCLEVBQWtDZ0UsU0FGcEMsRUFHRTtBQUNBN0gsY0FBUSxDQUFDNkQsYUFBVCxDQUF1QixlQUF2QixFQUF3Q3FDLFNBQXhDLENBQWtEQyxHQUFsRCxDQUFzRCxXQUF0RDtBQUNELEtBTEQsTUFLTztBQUNMbkcsY0FBUSxDQUFDNkQsYUFBVCxDQUF1QixlQUF2QixFQUF3Q3FDLFNBQXhDLENBQWtERSxNQUFsRCxDQUF5RCxXQUF6RDtBQUNEO0FBQ0YsR0FWRDtBQVdEIiwiZmlsZSI6Im1haW4tc3VtbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvU0FTU192ZXJzaW9uMy4yL2Fzc2V0cy9qcy9tYWluLXN1bW1lci5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZnVuY3Rpb24gYmFzaWMoKSB7XG4gIC8vIGFqYXgg6YWN5ZCISlEzIOW8leWFpeioree9rlxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJChcIiNoZWFkZXJcIikuaHRtbChkYXRhKTtcbiAgICAgIGFjdGl2ZU1lbnUoKTtcbiAgICB9KTtcbiAgICAkKFwiI2Zvb3RlclwiKS5sb2FkKFwiYWpheC9fZm9vdGVyLmh0bWxcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFjdGl2ZU1lbnUoKSB7XG4gICAgLy9kcm9wZG93biB0b2dnbGVcbiAgICB2YXIgdGFyZ2V0ID0gJChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnVuYmluZChcImNsaWNrXCIpO1xuICAgICAgdGFyZ2V0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAuZmluZChcIi5sLWRyb3Bkb3duLXRpdGxlXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9nZ2xlKCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIC8vIG1vYmlsZSBkcm9wZG93biBvcGVuXG4gICAgdmFyIGRyb3Bkb3duVHJpZ2dlciA9ICQoXCIubC1kcm9wZG93bi1pY29uXCIpO1xuICAgIHZhciBkcm9wZG93biA9ICQoXCIubC1kcm9wZG93bi1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duU2hvdygpIHtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIGRyb3Bkb3duVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAodXNlci5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgZHJvcGRvd24udG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgdXNlciBvcGVuXG4gICAgdmFyIHVzZXJUcmlnZ2VyID0gJChcIi5sLXVzZXItaWNvblwiKTtcbiAgICB2YXIgdXNlciA9ICQoXCIubC11c2VyLWxpc3RcIik7XG4gICAgZnVuY3Rpb24gdXNlclNob3coKSB7XG4gICAgICB1c2VyVHJpZ2dlci51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHVzZXJUcmlnZ2VyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgIGlmIChkcm9wZG93bi5oYXNDbGFzcyhcImpzLXNob3dcIikpIHtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1c2VyLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoXCJodG1sXCIpLmNzcyh7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgZHJvcGRvd25Ub2dnbGUoKTtcbiAgICAgICAgICBkcm9wZG93blNob3coKTtcbiAgICAgICAgICB1c2VyU2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKDk5MiA8ICQodGhpcykud2lkdGgoKSAmJiAkKHRoaXMpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVUb2dnbGUoKTtcbiAgICAgICAgICB1c2VyLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgICBkcm9wZG93bi5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuXG4gIC8vIOmmlumggSBzbGlja1xuICBmdW5jdGlvbiBzbGljaygpIHtcbiAgICB2YXIgc2xpY2tTZXR0aW5nID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICBjZW50ZXJQYWRkaW5nOiBcIjBweFwiLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdmFyIHNsaWNrVGFyZ2V0ID0gWyQoXCIucC1ldmVudC1jb250YWluZXJcIiksICQoXCIucC1zZXJ2aWNlLXdyYXBwZXJcIildO1xuICAgICQod2luZG93KVxuICAgICAgLmJpbmQoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDw9IDc2Nykge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLnNsaWNrKHNsaWNrU2V0dGluZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpY2tUYXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSkge1xuICAgICAgICAgICAgICBpdGVtLnNsaWNrKFwidW5zbGlja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50cmlnZ2VyKFwicmVzaXplXCIpO1xuICB9XG4gIC8vdmlwIHNsaWNrXG4gIGZ1bmN0aW9uIHZpcFNsaWNrKCkge1xuICAgICQoXCIudi1zbGljay1jYXJvdXNlbC12aXBcIikuc2xpY2soe1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNQZXJSb3c6IDMsXG4gICAgICByb3dzOiAyLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAyLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG4gIC8v5Yqg5YWl5pyA5oSbdG9nZ2xlXG4gIGZ1bmN0aW9uIHZpcEZhdm9yaXRlKCkge1xuICAgICQoXCIucC12aXAtZmF2b3JpdGUtaWNvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo57ay56uZIOW5u+eHiOeJh+mAn+W6plxuICBmdW5jdGlvbiBjYXJvdXNlbFNwZWVkKCkge1xuICAgICQoXCIjY2Fyb3VzZWxJbmRpY2F0b3JzXCIpLmNhcm91c2VsKHtcbiAgICAgIGludGVydmFsOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgLy/nubPosrvmlrnlvI/oqqrmmI7poqjnkLTliqDmuJvmjInpiJVcbiAgZnVuY3Rpb24gYWNjb3JkaW9uVG9nZ2xlKCkge1xuICAgICQoJ2J1dHRvbltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtcGx1c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICQodGhpcykuZmluZChcIi5mYS1taW51c1wiKS50b2dnbGVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOewoeaYk+mmrOi3r+Wwj+WkqeS9v+aJi+apn+eJiOmggeexpOmBuOWWriDoq4vkuIrntZXlsI3ntrLlnYAg5oiW5pivIOebuOWwjei3r+W+kVxuICBmdW5jdGlvbiBzZXRVcmxSZWRpcmVjdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIikgIT09IG51bGwpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJTZWxlY3RcIik7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsUmVnID0gL2h0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolX1xcKy5+Iz8mLy89XSopLztcbiAgICAgICAgdmFyIGhhc2hSZWcgPSAvXiMvO1xuICAgICAgICB2YXIgbmV3VXJsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHVybFJlZy50ZXN0KG5ld1VybCkpIHtcbiAgICAgICAgICB2YXIgZGV2aWNlQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgIHZhciBpc0lvcyA9IGRldmljZUFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhtYWN8aXBhZHxpcGhvbmUpLyk7XG4gICAgICAgICAgLy/liKTmlrfmmK/lkKZTYWZhcmnngI/opr3lmahcbiAgICAgICAgICBpZiAoaXNJb3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBuZXdVcmw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKG5ld1VybCwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhhc2hSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKG5ld1VybCkub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDgwMCxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdXJsTm93ID0gbG9jYXRpb24uaHJlZi5zbGljZShcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoXCIvXCIpICsgMSxcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKHVybE5vdywgbmV3VXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9qcee3qeaNsuWLlSvnm7TmjqXosrzmnIloYXNo55qE6YCj57WQ5Lmf6IO957ep5o2y5YuVXG4gIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKSB7XG4gICAgJChcIi5qcy1hbmltYXRlU2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIHZhciB0YXJnZXRQb3MgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0UG9zKTtcbiAgICAgIGlmICh0YXJnZXQuaW5kZXhPZihcIiNcIikgIT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHRhcmdldFBvcyAtIDUwIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGlmIHdlIGhhdmUgYW5jaG9yIG9uIHRoZSB1cmwgKGNhbGxpbmcgZnJvbSBvdGhlciBwYWdlKVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgLy8gZGlyZWN0IGJyb3dzZXIgdG8gdG9wIHJpZ2h0IGF3YXlcbiAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIC8vIHRha2VzIGNhcmUgb2Ygc29tZSBicm93c2VycyBpc3N1ZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbCgwLCAwKTtcbiAgICAgIH0sIDEpO1xuICAgICAgLy8gc21vb3RoIHNjcm9sbCB0byB0aGUgYW5jaG9yIGlkXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQod2luZG93LmxvY2F0aW9uLmhhc2gpLm9mZnNldCgpLnRvcCArIFwicHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgODAwLFxuICAgICAgICBcInN3aW5nXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlwVGFicygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXRhYnMtZHJvcGRvd24tbWVudVwiKTtcblxuICAgICAgW10uc2xpY2UuY2FsbCh0cmlnZ2VyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleEFkKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkXCIpICE9PSBudWxsKSB7XG4gICAgICAkKFwiI2FkXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9XG4gIH1cblxuICAvL+WVn+WLlWZ1bmN0aW9uLee2sumggei8ieWFpeWujOaIkOW+jFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgc2xpY2soKTtcbiAgICBjYXJvdXNlbFNwZWVkKCk7XG4gICAgYWNjb3JkaW9uVG9nZ2xlKCk7XG4gICAgc2V0VXJsUmVkaXJlY3Rpb24oKTtcbiAgICBhbmltYXRlU2Nyb2xsKCk7XG4gICAgdmlwU2xpY2soKTtcbiAgICB2aXBGYXZvcml0ZSgpO1xuICAgIHZpcFRhYnMoKTtcbiAgICBpbmRleEFkKCk7XG4gIH0pO1xuICAvL+WVn+WLlWZ1bmN0aW9uLeimlueql+Wkp+Wwj+iuiuabtFxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHt9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3mjbLli5VcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXZlbnRDb2xvcigpO1xuICB9KTtcblxuICAvLyAkKCcuc2xpY2snKS5zbGljayh7XG4gIC8vIFx0c2xpZGVzVG9TaG93OiAyLFxuICAvLyBcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAvLyB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkRmJTZGsoKSB7XG5cdChmdW5jdGlvbiAoZCwgcywgaWQpIHtcblx0XHR2YXIganMsXG5cdFx0XHRmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuXHRcdGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuXHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpO1xuXHRcdGpzLmlkID0gaWQ7XG5cdFx0anMuc3JjID0gJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvemhfVFcvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12OS4wJztcblx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG5cdH0pKGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJyk7XG59XG4iLCIvLyDovInlhaXmqKHntYRcbi8vIOevgOaFtuS4u+mhjFxuaW1wb3J0IHsgY3JlYXRlRGVjb0ZpeGVkLCBjcmVhdGVEZWNvUmVsYXRpdmUgfSBmcm9tIFwiLi90aGVtZS9fc3VtbWVyXCI7XG4vLyDln7rmnKzoqK3lrppcbmltcG9ydCB7IGxvYWRGYlNkayB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2ZiLXNka1wiO1xuaW1wb3J0IHsgYmFzaWMgfSBmcm9tIFwiLi9jb21wb25lbnRzL19iYXNpY1wiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBsb2FkRmJTZGsoKTtcbiAgY3JlYXRlRGVjb0ZpeGVkKCk7XG4gIGNyZWF0ZURlY29SZWxhdGl2ZSgpO1xuICBiYXNpYygpO1xufSk7XG4iLCIvLyDpppbpoIHnr4Dmhbboo53po75cbmZ1bmN0aW9uIGNyZWF0ZURlY29GaXhlZCgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIikgIT09IG51bGwpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBcInQtZGVjby1maXhlZFwiO1xuICAgIG5vZGUuaW5uZXJIVE1MID1cbiAgICAgICc8ZGl2IGNsYXNzPVwidC1kZWNvLXN1bW1lci13YXZlXCI+XFxcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3N1bW1lci9zdW1tZXItd2F2ZS5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxcXG4gICAgICA8L2Rpdj4nO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKVxuICAgICAgLmluc2VydEJlZm9yZShub2RlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtbWFpbi10aXRsZVwiKSk7XG4gICAgZml4ZWRUb0Fic29sdXRlQm90dG9tKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb1JlbGF0aXZlKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKSAhPT0gbnVsbCkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IFwidC1kZWNvLXJlbGF0aXZlXCI7XG4gICAgbm9kZS5pbm5lckhUTUwgPVxuICAgICAgJzxkaXYgY2xhc3M9XCJ0LWRlY28tc3VtbWVyLWxlYWYtMVwiPlxcXG4gICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL3N1bW1lci9zdW1tZXItbGVhZjEuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLXN1bW1lci1sZWFmLTJcIj5cXFxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90aGVtZS9zdW1tZXIvc3VtbWVyLWxlYWYyLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2Pic7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpXG4gICAgICAuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1tYWluLXRpdGxlXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaXhlZFRvQWJzb2x1dGVCb3R0b20oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAoXG4gICAgICBzY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKS5vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1kZWNvLWZpeGVkXCIpLmNsYXNzTGlzdC5hZGQoXCJqcy1ib3R0b21cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1kZWNvLWZpeGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1ib3R0b21cIik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVjb0ZpeGVkLCBjcmVhdGVEZWNvUmVsYXRpdmUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=