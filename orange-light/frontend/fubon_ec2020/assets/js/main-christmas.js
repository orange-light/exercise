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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SASS_version3.2/assets/js/main-christmas.js");
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

/***/ "./src/SASS_version3.2/assets/js/main-christmas.js":
/*!*********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/main-christmas.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_christmas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/_christmas */ "./src/SASS_version3.2/assets/js/theme/_christmas.js");
/* harmony import */ var _components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fb-sdk */ "./src/SASS_version3.2/assets/js/components/_fb-sdk.js");
/* harmony import */ var _components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_basic */ "./src/SASS_version3.2/assets/js/components/_basic.js");
// 載入模組
// 節慶主題
 // 基本設定



$(document).ready(function () {
  Object(_components_fb_sdk__WEBPACK_IMPORTED_MODULE_1__["loadFbSdk"])();
  Object(_theme_christmas__WEBPACK_IMPORTED_MODULE_0__["createDecoFixed"])();
  Object(_theme_christmas__WEBPACK_IMPORTED_MODULE_0__["creatDecoRelative"])();
  Object(_components_basic__WEBPACK_IMPORTED_MODULE_2__["basic"])();
});

/***/ }),

/***/ "./src/SASS_version3.2/assets/js/theme/_christmas.js":
/*!***********************************************************!*\
  !*** ./src/SASS_version3.2/assets/js/theme/_christmas.js ***!
  \***********************************************************/
/*! exports provided: createDecoFixed, creatDecoRelative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecoFixed", function() { return createDecoFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatDecoRelative", function() { return creatDecoRelative; });
// 首頁節慶裝飾
function createDecoFixed() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-fixed";
    node.style.cssText = "display:block";
    node.innerHTML = '<div class="t-deco-christmas">\
    <div class="t-deco-christmas-train">\
    <img src="assets/img/theme/christmas/christmas-train.svg" alt="" class="img-fluid">\
    </div>\
    <div class="t-deco-christmas-railroad">\
    <img src="assets/img/theme/christmas/christmas-railroad.svg" alt="" class="img-fluid">\
    </div>\
    </div>';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
    fixedToAbsoluteBottom();
  }
}

function creatDecoRelative() {
  if (document.querySelector("#event") !== null) {
    var node = document.createElement("div");
    node.className = "t-deco-relative";
    node.innerHTML = '<div class="t-deco-christmas-cane-1">\
        <img src="assets/img/theme/christmas/christmas-cane.svg" alt="" class="img-fluid">\
      </div>\
      <div class="t-deco-christmas-cane-2">\
        <img src="assets/img/theme/christmas/christmas-cane.svg" alt="" class="img-fluid">\
      </div>\
      <div class="t-deco-christmas-cane-3">\
        <img src="assets/img/theme/christmas/christmas-cane.svg" alt="" class="img-fluid">\
      </div>\
      <div class="t-deco-christmas-cane-4">\
        <img src="assets/img/theme/christmas/christmas-cane.svg" alt="" class="img-fluid">\
      </div>\
      <div class="t-deco-christmas-cane-5">\
        <img src="assets/img/theme/christmas/christmas-cane.svg" alt="" class="img-fluid">\
      </div>';
    document.querySelector("#event").insertBefore(node, document.querySelector(".l-main-title"));
    var pc = window.matchMedia("(min-width: 1200px)");
    pc.addListener(mediaMatch);
    mediaMatch(pc);
  }
}

function fixedToAbsoluteBottom() {
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;

    if (window.innerWidth >= 1400) {
      if (scrollY + window.innerHeight >= document.querySelector("#footer").offsetTop) {
        document.querySelector(".t-deco-fixed").classList.add("js-bottom");
        document.querySelector(".t-deco-christmas-train").classList.add("t-deco-animation-stop");
      } else {
        document.querySelector(".t-deco-fixed").classList.remove("js-bottom");
        document.querySelector(".t-deco-christmas-train").classList.remove("t-deco-animation-stop");
      }
    } else {
      if (scrollY + window.innerHeight >= document.querySelector("#footer").offsetTop) {
        document.querySelector(".t-deco-fixed").classList.add("js-bottom");
      } else {
        document.querySelector(".t-deco-fixed").classList.remove("js-bottom");
      }
    }
  });
}

function mediaMatch(matchMedia) {
  if (matchMedia.matches) {
    window.addEventListener("scroll", relativeToFixed);
  } else {
    window.removeEventListener("scroll", relativeToFixed);
    document.querySelector(".t-deco-relative").style.cssText = "";
  }
}

function relativeToFixed() {
  var scrollY = window.pageYOffset;
  var target = document.querySelector("#event");
  var targetTop = getTop(target);

  if (scrollY + window.innerHeight * 0.3 >= targetTop) {
    document.querySelector(".t-deco-relative").style.cssText = "position:fixed; left:0; top:30%; width:100%";
  } else {
    document.querySelector(".t-deco-relative").style.cssText = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvY29tcG9uZW50cy9fZmItc2RrLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL21haW4tY2hyaXN0bWFzLmpzIiwid2VicGFjazovLy8uL3NyYy9TQVNTX3ZlcnNpb24zLjIvYXNzZXRzL2pzL3RoZW1lL19jaHJpc3RtYXMuanMiXSwibmFtZXMiOlsiYmFzaWMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJ0eXBlIiwiZG9uZSIsImRhdGEiLCJodG1sIiwiYWN0aXZlTWVudSIsImxvYWQiLCJ0YXJnZXQiLCJkcm9wZG93blRvZ2dsZSIsInVuYmluZCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZVRvZ2dsZSIsImRyb3Bkb3duVHJpZ2dlciIsImRyb3Bkb3duIiwiZHJvcGRvd25TaG93IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NzIiwiaGVpZ2h0IiwidXNlciIsImhhc0NsYXNzIiwic2V0VGltZW91dCIsIm92ZXJmbG93IiwidXNlclRyaWdnZXIiLCJ1c2VyU2hvdyIsIndpbmRvdyIsImJpbmQiLCJ3aWR0aCIsInRyaWdnZXIiLCJzbGljayIsInNsaWNrU2V0dGluZyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiY2VudGVyTW9kZSIsImF1dG9wbGF5Iiwic2xpY2tUYXJnZXQiLCJmb3JFYWNoIiwiaXRlbSIsInZpcFNsaWNrIiwic2xpZGVzUGVyUm93Iiwicm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2aXBGYXZvcml0ZSIsImNhcm91c2VsU3BlZWQiLCJjYXJvdXNlbCIsImludGVydmFsIiwiYWNjb3JkaW9uVG9nZ2xlIiwic2V0VXJsUmVkaXJlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybFJlZyIsImhhc2hSZWciLCJuZXdVcmwiLCJ2YWx1ZSIsInRlc3QiLCJkZXZpY2VBZ2VudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSW9zIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGFzaCIsInVybE5vdyIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYW5pbWF0ZVNjcm9sbCIsImNsaWNrIiwiYXR0ciIsInRhcmdldFBvcyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwic2Nyb2xsIiwidmlwVGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5kZXhBZCIsIm1vZGFsIiwicmVzaXplIiwibG9hZEZiU2RrIiwiZCIsInMiLCJpZCIsImpzIiwiZmpzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlRGVjb0ZpeGVkIiwiY3JlYXREZWNvUmVsYXRpdmUiLCJub2RlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjc3NUZXh0IiwiaW5uZXJIVE1MIiwiZml4ZWRUb0Fic29sdXRlQm90dG9tIiwicGMiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJtZWRpYU1hdGNoIiwic2Nyb2xsWSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9mZnNldFRvcCIsIm1hdGNoZXMiLCJyZWxhdGl2ZVRvRml4ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRUb3AiLCJnZXRUb3AiLCJlbCIsImFic1RvcCIsImVsUGFyZW50Iiwib2Zmc2V0UGFyZW50IiwiY2xpZW50VG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTyxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCO0FBQ0FDLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsS0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFF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QVEsR0FBR0EsUUFBUSxDQUFDQyxZQUFwQjtBQUNEOztBQUNELFNBQU9GLE1BQVA7QUFDRCIsImZpbGUiOiJtYWluLWNocmlzdG1hcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1NBU1NfdmVyc2lvbjMuMi9hc3NldHMvanMvbWFpbi1jaHJpc3RtYXMuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2ljKCkge1xuICAvLyBhamF4IOmFjeWQiEpRMyDlvJXlhaXoqK3nva5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiYWpheC9faGVhZGVyLmh0bWxcIixcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjaGVhZGVyXCIpLmh0bWwoZGF0YSk7XG4gICAgICBhY3RpdmVNZW51KCk7XG4gICAgfSk7XG4gICAgJChcIiNmb290ZXJcIikubG9hZChcImFqYXgvX2Zvb3Rlci5odG1sXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBhY3RpdmVNZW51KCkge1xuICAgIC8vZHJvcGRvd24gdG9nZ2xlXG4gICAgdmFyIHRhcmdldCA9ICQoXCIubC1kcm9wZG93bi10aXRsZVwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgIHRhcmdldC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLmZpbmQoXCIubC1kcm9wZG93bi10aXRsZVwiKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZ2dsZSgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgZHJvcGRvd24gb3BlblxuICAgIHZhciBkcm9wZG93blRyaWdnZXIgPSAkKFwiLmwtZHJvcGRvd24taWNvblwiKTtcbiAgICB2YXIgZHJvcGRvd24gPSAkKFwiLmwtZHJvcGRvd24tbGlzdFwiKTtcbiAgICBmdW5jdGlvbiBkcm9wZG93blNob3coKSB7XG4gICAgICBkcm9wZG93blRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICBkcm9wZG93blRyaWdnZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCJodG1sXCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICAkKFwiYm9keVwiKS5jc3MoeyBoZWlnaHQ6IFwiMTAwJVwiLCBcIm92ZXJmbG93LXlcIjogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgaWYgKHVzZXIuaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkcm9wZG93bi50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIGRyb3Bkb3duLnRvZ2dsZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbW9iaWxlIHVzZXIgb3BlblxuICAgIHZhciB1c2VyVHJpZ2dlciA9ICQoXCIubC11c2VyLWljb25cIik7XG4gICAgdmFyIHVzZXIgPSAkKFwiLmwtdXNlci1saXN0XCIpO1xuICAgIGZ1bmN0aW9uIHVzZXJTaG93KCkge1xuICAgICAgdXNlclRyaWdnZXIudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICB1c2VyVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKHsgaGVpZ2h0OiBcIjEwMCVcIiwgXCJvdmVyZmxvdy15XCI6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7IGhlaWdodDogXCIxMDAlXCIsIFwib3ZlcmZsb3cteVwiOiBcImhpZGRlblwiIH0pO1xuICAgICAgICBpZiAoZHJvcGRvd24uaGFzQ2xhc3MoXCJqcy1zaG93XCIpKSB7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlci50b2dnbGVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5jc3MoeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgJChcImJvZHlcIikuY3NzKHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIHVzZXIudG9nZ2xlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgIGRyb3Bkb3duVG9nZ2xlKCk7XG4gICAgICAgICAgZHJvcGRvd25TaG93KCk7XG4gICAgICAgICAgdXNlclNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmICg5OTIgPCAkKHRoaXMpLndpZHRoKCkgJiYgJCh0aGlzKS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICAgIHVzZXJTaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVG9nZ2xlKCk7XG4gICAgICAgICAgdXNlci5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRyaWdnZXIoXCJyZXNpemVcIik7XG4gIH1cblxuICAvLyDpppbpoIEgc2xpY2tcbiAgZnVuY3Rpb24gc2xpY2soKSB7XG4gICAgdmFyIHNsaWNrU2V0dGluZyA9IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAzMDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgY2VudGVyUGFkZGluZzogXCIwcHhcIixcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgfTtcblxuICAgIHZhciBzbGlja1RhcmdldCA9IFskKFwiLnAtZXZlbnQtY29udGFpbmVyXCIpLCAkKFwiLnAtc2VydmljZS13cmFwcGVyXCIpXTtcbiAgICAkKHdpbmRvdylcbiAgICAgIC5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykud2lkdGgoKSA8PSA3NjcpIHtcbiAgICAgICAgICBzbGlja1RhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgICAgICAgIGl0ZW0uc2xpY2soXCJ1bnNsaWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zbGljayhzbGlja1NldHRpbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWNrVGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgICAgaXRlbS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcbiAgfVxuICAvL3ZpcCBzbGlja1xuICBmdW5jdGlvbiB2aXBTbGljaygpIHtcbiAgICAkKFwiLnYtc2xpY2stY2Fyb3VzZWwtdmlwXCIpLnNsaWNrKHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyUm93OiAzLFxuICAgICAgcm93czogMixcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMixcbiAgICAgICAgICAgIHJvd3M6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuICAvL+WKoOWFpeacgOaEm3RvZ2dsZVxuICBmdW5jdGlvbiB2aXBGYXZvcml0ZSgpIHtcbiAgICAkKFwiLnAtdmlwLWZhdm9yaXRlLWljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG4gIC8vIOWFqOe2suermSDlubvnh4jniYfpgJ/luqZcbiAgZnVuY3Rpb24gY2Fyb3VzZWxTcGVlZCgpIHtcbiAgICAkKFwiI2Nhcm91c2VsSW5kaWNhdG9yc1wiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8v57mz6LK75pa55byP6Kqq5piO6aKo55C05Yqg5rib5oyJ6YiVXG4gIGZ1bmN0aW9uIGFjY29yZGlvblRvZ2dsZSgpIHtcbiAgICAkKCdidXR0b25bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5maW5kKFwiLmZhLXBsdXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAkKHRoaXMpLmZpbmQoXCIuZmEtbWludXNcIikudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSk7XG4gIH1cblxuICAvLyDnsKHmmJPppqzot6/lsI/lpKnkvb/miYvmqZ/niYjpoIHnsaTpgbjllq4g6KuL5LiK57WV5bCN57ay5Z2AIOaIluaYryDnm7jlsI3ot6/lvpFcbiAgZnVuY3Rpb24gc2V0VXJsUmVkaXJlY3Rpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpICE9PSBudWxsKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiU2VsZWN0XCIpO1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybFJlZyA9IC9odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYihbLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKS87XG4gICAgICAgIHZhciBoYXNoUmVnID0gL14jLztcbiAgICAgICAgdmFyIG5ld1VybCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh1cmxSZWcudGVzdChuZXdVcmwpKSB7XG4gICAgICAgICAgdmFyIGRldmljZUFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICB2YXIgaXNJb3MgPSBkZXZpY2VBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8obWFjfGlwYWR8aXBob25lKS8pO1xuICAgICAgICAgIC8v5Yik5pa35piv5ZCmU2FmYXJp54CP6Ka95ZmoXG4gICAgICAgICAgaWYgKGlzSW9zKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gbmV3VXJsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihuZXdVcmwsIFwiX2JsYW5rXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoYXNoUmVnLnRlc3QobmV3VXJsKSkge1xuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChuZXdVcmwpLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4MDAsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHVybE5vdyA9IGxvY2F0aW9uLmhyZWYuc2xpY2UoXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSh1cmxOb3csIG5ld1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vanHnt6nmjbLli5Ur55u05o6l6LK85pyJaGFzaOeahOmAo+e1kOS5n+iDvee3qeaNsuWLlVxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgICQoXCIuanMtYW5pbWF0ZVNjcm9sbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICB2YXIgdGFyZ2V0UG9zID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldFBvcyk7XG4gICAgICBpZiAodGFyZ2V0LmluZGV4T2YoXCIjXCIpICE9IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0YXJnZXRQb3MgLSA1MCB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpZiB3ZSBoYXZlIGFuY2hvciBvbiB0aGUgdXJsIChjYWxsaW5nIGZyb20gb3RoZXIgcGFnZSlcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIC8vIGRpcmVjdCBicm93c2VyIHRvIHRvcCByaWdodCBhd2F5XG4gICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICAvLyB0YWtlcyBjYXJlIG9mIHNvbWUgYnJvd3NlcnMgaXNzdWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY3JvbGwoMCwgMCk7XG4gICAgICB9LCAxKTtcbiAgICAgIC8vIHNtb290aCBzY3JvbGwgdG8gdGhlIGFuY2hvciBpZFxuICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKHdpbmRvdy5sb2NhdGlvbi5oYXNoKS5vZmZzZXQoKS50b3AgKyBcInB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIDgwMCxcbiAgICAgICAgXCJzd2luZ1wiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpcFRhYnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIikubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy10YWJzLWRyb3Bkb3duLW1lbnVcIik7XG5cbiAgICAgIFtdLnNsaWNlLmNhbGwodHJpZ2dlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhBZCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZFwiKSAhPT0gbnVsbCkge1xuICAgICAgJChcIiNhZFwiKS5tb2RhbChcInNob3dcIik7XG4gICAgfVxuICB9XG5cbiAgLy/llZ/li5VmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHNsaWNrKCk7XG4gICAgY2Fyb3VzZWxTcGVlZCgpO1xuICAgIGFjY29yZGlvblRvZ2dsZSgpO1xuICAgIHNldFVybFJlZGlyZWN0aW9uKCk7XG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xuICAgIHZpcFNsaWNrKCk7XG4gICAgdmlwRmF2b3JpdGUoKTtcbiAgICB2aXBUYWJzKCk7XG4gICAgaW5kZXhBZCgpO1xuICB9KTtcbiAgLy/llZ/li5VmdW5jdGlvbi3oppbnqpflpKflsI/orormm7RcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7fSk7XG4gIC8v5ZWf5YuVZnVuY3Rpb24t5o2y5YuVXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIC8vIGV2ZW50Q29sb3IoKTtcbiAgfSk7XG5cbiAgLy8gJCgnLnNsaWNrJykuc2xpY2soe1xuICAvLyBcdHNsaWRlc1RvU2hvdzogMixcbiAgLy8gXHRzbGlkZXNUb1Njcm9sbDogMSxcbiAgLy8gfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEZiU2RrKCkge1xuXHQoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG5cdFx0dmFyIGpzLFxuXHRcdFx0ZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcblx0XHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcblx0XHRqcyA9IGQuY3JlYXRlRWxlbWVudChzKTtcblx0XHRqcy5pZCA9IGlkO1xuXHRcdGpzLnNyYyA9ICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L3poX1RXL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djkuMCc7XG5cdFx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuXHR9KShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpO1xufVxuIiwiLy8g6LyJ5YWl5qih57WEXG4vLyDnr4DmhbbkuLvpoYxcbmltcG9ydCB7IGNyZWF0ZURlY29GaXhlZCwgY3JlYXREZWNvUmVsYXRpdmUgfSBmcm9tIFwiLi90aGVtZS9fY2hyaXN0bWFzXCI7XG4vLyDln7rmnKzoqK3lrppcbmltcG9ydCB7IGxvYWRGYlNkayB9IGZyb20gXCIuL2NvbXBvbmVudHMvX2ZiLXNka1wiO1xuaW1wb3J0IHsgYmFzaWMgfSBmcm9tIFwiLi9jb21wb25lbnRzL19iYXNpY1wiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBsb2FkRmJTZGsoKTtcbiAgY3JlYXRlRGVjb0ZpeGVkKCk7XG4gIGNyZWF0RGVjb1JlbGF0aXZlKCk7XG4gIGJhc2ljKCk7XG59KTtcbiIsIi8vIOmmlumggeevgOaFtuijnemjvlxuZnVuY3Rpb24gY3JlYXRlRGVjb0ZpeGVkKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKSAhPT0gbnVsbCkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9IFwidC1kZWNvLWZpeGVkXCI7XG4gICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmJsb2NrXCI7XG4gICAgbm9kZS5pbm5lckhUTUwgPVxuICAgICAgJzxkaXYgY2xhc3M9XCJ0LWRlY28tY2hyaXN0bWFzXCI+XFxcbiAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy10cmFpblwiPlxcXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RoZW1lL2NocmlzdG1hcy9jaHJpc3RtYXMtdHJhaW4uc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cXFxuICAgIDwvZGl2PlxcXG4gICAgPGRpdiBjbGFzcz1cInQtZGVjby1jaHJpc3RtYXMtcmFpbHJvYWRcIj5cXFxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90aGVtZS9jaHJpc3RtYXMvY2hyaXN0bWFzLXJhaWxyb2FkLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICA8L2Rpdj5cXFxuICAgIDwvZGl2Pic7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpXG4gICAgICAuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1tYWluLXRpdGxlXCIpKTtcbiAgICBmaXhlZFRvQWJzb2x1dGVCb3R0b20oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdERlY29SZWxhdGl2ZSgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRcIikgIT09IG51bGwpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBcInQtZGVjby1yZWxhdGl2ZVwiO1xuICAgIG5vZGUuaW5uZXJIVE1MID1cbiAgICAgICc8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy1jYW5lLTFcIj5cXFxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGhlbWUvY2hyaXN0bWFzL2NocmlzdG1hcy1jYW5lLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy1jYW5lLTJcIj5cXFxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGhlbWUvY2hyaXN0bWFzL2NocmlzdG1hcy1jYW5lLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy1jYW5lLTNcIj5cXFxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGhlbWUvY2hyaXN0bWFzL2NocmlzdG1hcy1jYW5lLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy1jYW5lLTRcIj5cXFxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGhlbWUvY2hyaXN0bWFzL2NocmlzdG1hcy1jYW5lLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgICA8ZGl2IGNsYXNzPVwidC1kZWNvLWNocmlzdG1hcy1jYW5lLTVcIj5cXFxuICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGhlbWUvY2hyaXN0bWFzL2NocmlzdG1hcy1jYW5lLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XFxcbiAgICAgIDwvZGl2Pic7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50XCIpXG4gICAgICAuaW5zZXJ0QmVmb3JlKG5vZGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1tYWluLXRpdGxlXCIpKTtcblxuICAgIHZhciBwYyA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIwMHB4KVwiKTtcbiAgICBwYy5hZGRMaXN0ZW5lcihtZWRpYU1hdGNoKTtcbiAgICBtZWRpYU1hdGNoKHBjKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaXhlZFRvQWJzb2x1dGVCb3R0b20oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxNDAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIikub2Zmc2V0VG9wXG4gICAgICApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50LWRlY28tZml4ZWRcIikuY2xhc3NMaXN0LmFkZChcImpzLWJvdHRvbVwiKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi50LWRlY28tY2hyaXN0bWFzLXRyYWluXCIpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJ0LWRlY28tYW5pbWF0aW9uLXN0b3BcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1maXhlZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYm90dG9tXCIpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1jaHJpc3RtYXMtdHJhaW5cIilcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInQtZGVjby1hbmltYXRpb24tc3RvcFwiKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGlmIChcbiAgICAgICAgc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA+PVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKS5vZmZzZXRUb3BcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1maXhlZFwiKS5jbGFzc0xpc3QuYWRkKFwianMtYm90dG9tXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50LWRlY28tZml4ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcImpzLWJvdHRvbVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZWRpYU1hdGNoKG1hdGNoTWVkaWEpIHtcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJlbGF0aXZlVG9GaXhlZCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgcmVsYXRpdmVUb0ZpeGVkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1yZWxhdGl2ZVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRvRml4ZWQoKSB7XG4gIHZhciBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFwiKTtcbiAgdmFyIHRhcmdldFRvcCA9IGdldFRvcCh0YXJnZXQpO1xuICBpZiAoc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMyA+PSB0YXJnZXRUb3ApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnQtZGVjby1yZWxhdGl2ZVwiKS5zdHlsZS5jc3NUZXh0ID1cbiAgICAgIFwicG9zaXRpb246Zml4ZWQ7IGxlZnQ6MDsgdG9wOjMwJTsgd2lkdGg6MTAwJVwiO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudC1kZWNvLXJlbGF0aXZlXCIpLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvcChlbCkge1xuICB2YXIgYWJzVG9wID0gZWwub2Zmc2V0VG9wO1xuICB2YXIgZWxQYXJlbnQgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gIHdoaWxlIChlbFBhcmVudCAhPT0gbnVsbCkge1xuICAgIGFic1RvcCArPSBlbFBhcmVudC5vZmZzZXRUb3AgKyBlbFBhcmVudC5jbGllbnRUb3A7XG4gICAgZWxQYXJlbnQgPSBlbFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIGFic1RvcDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGVjb0ZpeGVkLCBjcmVhdERlY29SZWxhdGl2ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==