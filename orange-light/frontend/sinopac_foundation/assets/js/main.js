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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src@4.0/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src@4.0/assets/js/main.js":
/*!***********************************!*\
  !*** ./src@4.0/assets/js/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ajax 配合JQ3 引入設置
$(document).ready(function () {
  $.ajax({
    url: "ajax/_header.html",
    method: "GET",
    dataType: "html"
  }).done(function (data) {
    $("#header").html(data);
    headerFunction();
  });
  $.ajax({
    url: "ajax/_footer.html",
    method: "GET",
    dataType: "html"
  }).done(function (data) {
    $("#footer").html(data);
    goTopShow();
    goTop();
    goTopFixed();
  });
});

function toolsListener() {
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 9) {
      document.body.classList.remove("js-useMouse");
      document.body.classList.add("js-useKeyboard");
    }
  });
  window.addEventListener("mousedown", function (e) {
    document.body.classList.remove("js-useKeyboard");
    document.body.classList.add("js-useMouse");
  });
}

function toggleMobileMenu(mediaQuery) {
  var trigger = document.querySelector("#hamburger");
  var target = document.querySelector("#menu");
  trigger.addEventListener("click", function () {
    this.classList.toggle("js-menuOpened");
    target.classList.toggle("js-menuOpened");
    document.documentElement.classList.toggle("js-menuOpened");
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= mediaQuery) {
      trigger.classList.remove("js-menuOpened");
      target.classList.remove("js-menuOpened");
      document.documentElement.classList.remove("js-menuOpened");
    }
  });
}

function toggleMobileSubmenu(mediaQuery) {
  var triggers = document.querySelectorAll(".l-header-menu-link");
  var targets = document.querySelectorAll(".l-header-submenu--hidden");
  Array.prototype.slice.call(triggers).forEach(function (trigger) {
    if (trigger.nextElementSibling !== null) {
      trigger.addEventListener("click", function (e) {
        // e.preventDefault();
        var target = trigger.nextElementSibling;

        if (window.innerWidth < mediaQuery) {
          target.classList.toggle("js-submenuOpened");
        }
      });
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth <= mediaQuery) {
      Array.prototype.slice.call(targets).forEach(function (target) {
        target.classList.remove("js-submenuOpened");
      });
    }
  });
}

function togglePcHoverState(mediaQuery) {
  var triggers = document.querySelectorAll(".l-header-menu-item");
  Array.prototype.slice.call(triggers).forEach(function (trigger) {
    if (trigger.querySelector(".l-header-submenu") !== null) {
      trigger.addEventListener("mouseover", function () {
        trigger.querySelector(".l-header-menu-link").classList.add("js-hover");
      });
      trigger.addEventListener("mouseout", function () {
        trigger.querySelector(".l-header-menu-link").classList.remove("js-hover");
      });
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth < mediaQuery) {
      Array.prototype.slice.call(document.querySelectorAll(".l-header-menu-link")).forEach(function (item) {
        item.classList.remove("js-hover");
      });
    }
  });
}

function headerFunction() {
  var breakpoint = 768;
  toggleMobileMenu(breakpoint);
  togglePcHoverState(breakpoint);
  toggleMobileSubmenu(breakpoint); // 試套google search
  // var mysetInterval = setInterval(function () {
  //   if ($("#gsc-i-id1")) {
  //     $("#gsc-i-id1").attr('placeholder', 'SEARCH');
  //     console.log("找到了!");
  //     clearInterval(mysetInterval);
  //   }else{
  //     console.log("還沒找到!");
  //   }
  // }, 300);
} //go top---------------


function goTopShow() {
  // console.log($(window).scrollTop());
  if ($(window).scrollTop() > 400) {
    $(".l-footer-goTop").addClass('js-show');
  } else {
    $(".l-footer-goTop").removeClass('js-show');
  }
}

function goTop() {
  //置頂按鈕的捲動速度
  $(".l-footer-goTop").click(function (event) {
    event.preventDefault;
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}

function goTopFixed() {
  var el = document.querySelector(".l-footer");
  var targetEl = document.querySelector(".l-footer-goTop");

  if (el !== null) {
    var triggerNum = window.pageYOffset + window.innerHeight;
    var targerNum = el.offsetTop;

    if (triggerNum >= targerNum) {
      targetEl.classList.remove('js-acitve');
    } else {
      targetEl.classList.add('js-acitve');
    }
  }
} //[end]go top----------


function sideBarFixed() {
  var el = document.querySelector(".l-footer");
  var targetEl = document.querySelector(".p-index-sideBar");

  if (el !== null && targetEl !== null) {
    var triggerNum = window.pageYOffset + window.innerHeight;
    var targerNum = el.offsetTop;

    if (triggerNum >= targerNum) {
      targetEl.classList.remove('js-acitve');
    } else {
      targetEl.classList.add('js-acitve');
    }
  }
}

function setKvInterval() {
  $('#kv').carousel({
    interval: 3000
  });
}

function videoShow() {
  var el = document.querySelector(".p-index-video-content-cover");

  if (el !== null) {
    el.addEventListener("click", function () {
      this.classList.add("d-none");
    });
  }
}

function slickSwitcher() {
  var el = document.querySelector(".v-slick");

  if (el !== null) {
    $('.v-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
}

;

function timelineAnimation() {
  var el = document.querySelector("#timelineId");
  var targetEl = document.querySelector("#timelineId");

  if (el !== null) {
    var triggerNum = window.pageYOffset + window.innerHeight;
    var targerNum = el.offsetTop;

    if (triggerNum >= targerNum) {
      targetEl.classList.add('js-acitve');
    } else {
      targetEl.classList.remove('js-acitve');
    }
  }
}

function aosSwitcher() {
  var el = document.querySelector("div[data-aos]");

  if (el !== null) {
    AOS.init({
      duration: 1000
    });
  }
} // function aboutUsSlideshow() {
//   $('.p-aboutUs-slideshow').each(function () {
//     let slideImgs = $(this).find('img'),
//       slideImgsCount = slideImgs.length,
//       currentIndex = 0;
//     slideImgs.eq(currentIndex).fadeIn();
//     setInterval(showNextSlide, 3000);
//     function showNextSlide() {
//       let nextIndex = (currentIndex + 1) % slideImgsCount;
//       // console.log(nextIndex)
//       slideImgs.eq(currentIndex).fadeOut();
//       slideImgs.eq(nextIndex).fadeIn();
//       currentIndex = nextIndex;
//     }
//   })
// }


function boardOfDirectorCardCollapse() {
  var elBtn = document.querySelector(".p-aboutUs-boardOfDirector-card-btn");
  var elContent = document.querySelector(".p-aboutUs-boardOfDirector-card-content");

  if (elBtn !== null && elContent !== null) {
    $(".p-aboutUs-boardOfDirector-card-btn").on("click", function () {
      $(this).toggleClass("js-openBtn");
      $(this).prev().toggleClass("js-openContent");
    });
  }
}

function winnerCardCollapse() {
  var elBtn = document.querySelector(".p-winner-card-btn");
  var elContent = document.querySelector(".p-winner-card-content");

  if (elBtn !== null && elContent !== null) {
    $(".p-winner-card-btn").on("click", function () {
      $(this).toggleClass("js-openBtn");
      $(this).prev().toggleClass("js-openContent");
    });
  }
}

function fileUploads() {
  $('#file-upload').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
  });
  $('#file-upload2').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload2')[0].files[0].name;
    $(this).prev('label').text(file);
  });
  $('#file-upload3').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload3')[0].files[0].name;
    $(this).prev('label').text(file);
  });
}

function nodeListToArray(nodeListCollection) {
  return Array.prototype.slice.call(nodeListCollection);
}

function autoFixHeight() {
  var el = document.querySelectorAll('.p-winner-card-table');
  var thisHeight = -1;
  var maxHeight = -1;
  var breakpoint = 768; //為了ie不支援nodelist的forEach修正

  nodeListToArray(el).forEach(function (item) {
    item.style.height = ""; //清空之前的style

    thisHeight = item.clientHeight; //取得已經減過高度的

    maxHeight = maxHeight > thisHeight ? maxHeight : thisHeight;
  });

  if (document.body.clientWidth > breakpoint) {
    nodeListToArray(el).forEach(function (item) {
      item.style.height = "".concat(maxHeight, "px");
    });
  }
} //首頁的按鈕換iframe影片


function iframeButton() {
  $("ul#links li a").click(function (e) {
    e.preventDefault();
    $("#video").attr("src", $(this).attr("href"));
  });
} //呼叫function-網頁載入完成後


$(document).ready(function () {
  toolsListener();
  setKvInterval();
  videoShow();
  slickSwitcher();
  sideBarFixed();
  aosSwitcher(); // aboutUsSlideshow();

  fileUploads();
  boardOfDirectorCardCollapse();
  winnerCardCollapse();
  autoFixHeight();
  iframeButton();
}); //呼叫function-視窗大小變更

$(window).resize(function () {
  goTopFixed();
  autoFixHeight();
}); //呼叫function-捲動

$(window).scroll(function () {
  goTopShow();
  goTopFixed();
  sideBarFixed();
  timelineAnimation();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImRvbmUiLCJkYXRhIiwiaHRtbCIsImhlYWRlckZ1bmN0aW9uIiwiZ29Ub3BTaG93IiwiZ29Ub3AiLCJnb1RvcEZpeGVkIiwidG9vbHNMaXN0ZW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibWVkaWFRdWVyeSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidG9nZ2xlIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5uZXJXaWR0aCIsInRvZ2dsZU1vYmlsZVN1Ym1lbnUiLCJ0cmlnZ2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YXJnZXRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJmb3JFYWNoIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9nZ2xlUGNIb3ZlclN0YXRlIiwiaXRlbSIsImJyZWFrcG9pbnQiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImVsIiwidGFyZ2V0RWwiLCJ0cmlnZ2VyTnVtIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsInRhcmdlck51bSIsIm9mZnNldFRvcCIsInNpZGVCYXJGaXhlZCIsInNldEt2SW50ZXJ2YWwiLCJjYXJvdXNlbCIsImludGVydmFsIiwidmlkZW9TaG93Iiwic2xpY2tTd2l0Y2hlciIsInNsaWNrIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInRpbWVsaW5lQW5pbWF0aW9uIiwiYW9zU3dpdGNoZXIiLCJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJib2FyZE9mRGlyZWN0b3JDYXJkQ29sbGFwc2UiLCJlbEJ0biIsImVsQ29udGVudCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJwcmV2Iiwid2lubmVyQ2FyZENvbGxhcHNlIiwiZmlsZVVwbG9hZHMiLCJjaGFuZ2UiLCJpIiwiY2xvbmUiLCJmaWxlIiwiZmlsZXMiLCJuYW1lIiwidGV4dCIsIm5vZGVMaXN0VG9BcnJheSIsIm5vZGVMaXN0Q29sbGVjdGlvbiIsImF1dG9GaXhIZWlnaHQiLCJ0aGlzSGVpZ2h0IiwibWF4SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImlmcmFtZUJ1dHRvbiIsImF0dHIiLCJyZXNpemUiLCJzY3JvbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBQSxDQUFDLENB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LENBYkQsRSxDQWNBOztBQUNBakcsQ0FBQyxDQUFDZSxNQUFELENBQUQsQ0FBVW9GLE1BQVYsQ0FBaUIsWUFBWTtFQUMzQnRGLFVBQVU7RUFDVjZFLGFBQWE7QUFDZCxDQUhELEUsQ0FJQTs7QUFDQTFGLENBQUMsQ0FBQ2UsTUFBRCxDQUFELENBQVVxRixNQUFWLENBQWlCLFlBQVk7RUFDM0J6RixTQUFTO0VBQ1RFLFVBQVU7RUFDVjZDLFlBQVk7RUFDWlUsaUJBQWlCO0FBQ2xCLENBTEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmNANC4wL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiLy8gYWpheCDphY3lkIhKUTMg5byV5YWl6Kit572uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBcImFqYXgvX2hlYWRlci5odG1sXCIsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImh0bWxcIlxuICB9KS5kb25lKFxuICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgICAgaGVhZGVyRnVuY3Rpb24oKTtcbiAgICB9XG4gICk7XG4gICQuYWpheCh7XG4gICAgdXJsOiBcImFqYXgvX2Zvb3Rlci5odG1sXCIsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImh0bWxcIlxuICB9KS5kb25lKFxuICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAkKFwiI2Zvb3RlclwiKS5odG1sKGRhdGEpO1xuICAgICAgZ29Ub3BTaG93KCk7XG4gICAgICBnb1RvcCgpO1xuICAgICAgZ29Ub3BGaXhlZCgpO1xuICAgIH1cbiAgKTtcbn0pO1xuXG5mdW5jdGlvbiB0b29sc0xpc3RlbmVyKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy11c2VNb3VzZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzLXVzZUtleWJvYXJkXCIpO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdXNlS2V5Ym9hcmRcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwianMtdXNlTW91c2VcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNb2JpbGVNZW51KG1lZGlhUXVlcnkpIHtcbiAgdmFyIHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbWJ1cmdlclwiKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcblxuICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IG1lZGlhUXVlcnkpIHtcbiAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlU3VibWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubC1oZWFkZXItbWVudS1saW5rXCIpO1xuICB2YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubC1oZWFkZXItc3VibWVudS0taGlkZGVuXCIpO1xuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0cmlnZ2VycykuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgIGlmICh0cmlnZ2VyLm5leHRFbGVtZW50U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdHJpZ2dlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImpzLXN1Ym1lbnVPcGVuZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zdWJtZW51T3BlbmVkXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGNIb3ZlclN0YXRlKG1lZGlhUXVlcnkpIHtcbiAgdmFyIHRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sLWhlYWRlci1tZW51LWl0ZW1cIik7XG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRyaWdnZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgaWYgKHRyaWdnZXIucXVlcnlTZWxlY3RvcihcIi5sLWhlYWRlci1zdWJtZW51XCIpICE9PSBudWxsKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmlnZ2VyLnF1ZXJ5U2VsZWN0b3IoXCIubC1oZWFkZXItbWVudS1saW5rXCIpLmNsYXNzTGlzdC5hZGQoXCJqcy1ob3ZlclwiKTtcbiAgICAgIH0pO1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmlnZ2VyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubC1oZWFkZXItbWVudS1saW5rXCIpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1ob3ZlclwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1lZGlhUXVlcnkpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmwtaGVhZGVyLW1lbnUtbGlua1wiKSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1ob3ZlclwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyRnVuY3Rpb24oKSB7XG4gIHZhciBicmVha3BvaW50ID0gNzY4O1xuICB0b2dnbGVNb2JpbGVNZW51KGJyZWFrcG9pbnQpO1xuICB0b2dnbGVQY0hvdmVyU3RhdGUoYnJlYWtwb2ludCk7XG4gIHRvZ2dsZU1vYmlsZVN1Ym1lbnUoYnJlYWtwb2ludCk7XG4gIC8vIOippuWll2dvb2dsZSBzZWFyY2hcbiAgLy8gdmFyIG15c2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgaWYgKCQoXCIjZ3NjLWktaWQxXCIpKSB7XG4gIC8vICAgICAkKFwiI2dzYy1pLWlkMVwiKS5hdHRyKCdwbGFjZWhvbGRlcicsICdTRUFSQ0gnKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwi5om+5Yiw5LqGIVwiKTtcbiAgLy8gICAgIGNsZWFySW50ZXJ2YWwobXlzZXRJbnRlcnZhbCk7XG4gIC8vICAgfWVsc2V7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIumChOaykuaJvuWIsCFcIik7XG4gIC8vICAgfVxuICAvLyB9LCAzMDApO1xufVxuLy9nbyB0b3AtLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGdvVG9wU2hvdygpIHtcbiAgLy8gY29uc29sZS5sb2coJCh3aW5kb3cpLnNjcm9sbFRvcCgpKTtcbiAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCkge1xuICAgICQoXCIubC1mb290ZXItZ29Ub3BcIikuYWRkQ2xhc3MoJ2pzLXNob3cnKTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiLmwtZm9vdGVyLWdvVG9wXCIpLnJlbW92ZUNsYXNzKCdqcy1zaG93Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIC8v572u6aCC5oyJ6YiV55qE5o2y5YuV6YCf5bqmXG4gICQoXCIubC1mb290ZXItZ29Ub3BcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvVG9wRml4ZWQoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXJcIik7XG4gIHZhciB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXItZ29Ub3BcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIHZhciB0cmlnZ2VyTnVtID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciB0YXJnZXJOdW0gPSBlbC5vZmZzZXRUb3A7XG4gICAgaWYgKHRyaWdnZXJOdW0gPj0gdGFyZ2VyTnVtKSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1hY2l0dmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnanMtYWNpdHZlJyk7XG4gICAgfVxuICB9XG59XG4vL1tlbmRdZ28gdG9wLS0tLS0tLS0tLVxuZnVuY3Rpb24gc2lkZUJhckZpeGVkKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtZm9vdGVyXCIpO1xuICB2YXIgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtaW5kZXgtc2lkZUJhclwiKTtcbiAgaWYgKGVsICE9PSBudWxsICYmIHRhcmdldEVsICE9PSBudWxsKSB7XG4gICAgdmFyIHRyaWdnZXJOdW0gPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIHRhcmdlck51bSA9IGVsLm9mZnNldFRvcDtcbiAgICBpZiAodHJpZ2dlck51bSA+PSB0YXJnZXJOdW0pIHtcbiAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWFjaXR2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCdqcy1hY2l0dmUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0S3ZJbnRlcnZhbCgpIHtcbiAgJCgnI2t2JykuY2Fyb3VzZWwoe1xuICAgIGludGVydmFsOiAzMDAwLFxuICB9KVxufVxuXG5mdW5jdGlvbiB2aWRlb1Nob3coKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1pbmRleC12aWRlby1jb250ZW50LWNvdmVyXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNsaWNrU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi1zbGlja1wiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJCgnLnYtc2xpY2snKS5zbGljayh7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIH0pXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVsaW5lQW5pbWF0aW9uKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVsaW5lSWRcIik7XG4gIHZhciB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZWxpbmVJZFwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgdmFyIHRyaWdnZXJOdW0gPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIHRhcmdlck51bSA9IGVsLm9mZnNldFRvcDtcbiAgICBpZiAodHJpZ2dlck51bSA+PSB0YXJnZXJOdW0pIHtcbiAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoJ2pzLWFjaXR2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1hY2l0dmUnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYW9zU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1hb3NdXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBhYm91dFVzU2xpZGVzaG93KCkge1xuXG4vLyAgICQoJy5wLWFib3V0VXMtc2xpZGVzaG93JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbi8vICAgICBsZXQgc2xpZGVJbWdzID0gJCh0aGlzKS5maW5kKCdpbWcnKSxcbi8vICAgICAgIHNsaWRlSW1nc0NvdW50ID0gc2xpZGVJbWdzLmxlbmd0aCxcbi8vICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG5cbi8vICAgICBzbGlkZUltZ3MuZXEoY3VycmVudEluZGV4KS5mYWRlSW4oKTtcblxuLy8gICAgIHNldEludGVydmFsKHNob3dOZXh0U2xpZGUsIDMwMDApO1xuXG4vLyAgICAgZnVuY3Rpb24gc2hvd05leHRTbGlkZSgpIHtcbi8vICAgICAgIGxldCBuZXh0SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZUltZ3NDb3VudDtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRJbmRleClcbi8vICAgICAgIHNsaWRlSW1ncy5lcShjdXJyZW50SW5kZXgpLmZhZGVPdXQoKTtcbi8vICAgICAgIHNsaWRlSW1ncy5lcShuZXh0SW5kZXgpLmZhZGVJbigpO1xuLy8gICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuLy8gICAgIH1cbi8vICAgfSlcbi8vIH1cblxuZnVuY3Rpb24gYm9hcmRPZkRpcmVjdG9yQ2FyZENvbGxhcHNlKCkge1xuICB2YXIgZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtYWJvdXRVcy1ib2FyZE9mRGlyZWN0b3ItY2FyZC1idG5cIik7XG4gIHZhciBlbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtYWJvdXRVcy1ib2FyZE9mRGlyZWN0b3ItY2FyZC1jb250ZW50XCIpO1xuICBpZiAoZWxCdG4gIT09IG51bGwgJiYgZWxDb250ZW50ICE9PSBudWxsKSB7XG4gICAgJChcIi5wLWFib3V0VXMtYm9hcmRPZkRpcmVjdG9yLWNhcmQtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImpzLW9wZW5CdG5cIik7XG4gICAgICAkKHRoaXMpLnByZXYoKS50b2dnbGVDbGFzcyhcImpzLW9wZW5Db250ZW50XCIpO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gd2lubmVyQ2FyZENvbGxhcHNlKCkge1xuICB2YXIgZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtd2lubmVyLWNhcmQtYnRuXCIpO1xuICB2YXIgZWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLXdpbm5lci1jYXJkLWNvbnRlbnRcIik7XG4gIGlmIChlbEJ0biAhPT0gbnVsbCAmJiBlbENvbnRlbnQgIT09IG51bGwpIHtcbiAgICAkKFwiLnAtd2lubmVyLWNhcmQtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImpzLW9wZW5CdG5cIik7XG4gICAgICAkKHRoaXMpLnByZXYoKS50b2dnbGVDbGFzcyhcImpzLW9wZW5Db250ZW50XCIpO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsZVVwbG9hZHMoKSB7XG5cbiAgJCgnI2ZpbGUtdXBsb2FkJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9ICQodGhpcykucHJldignbGFiZWwnKS5jbG9uZSgpO1xuICAgIHZhciBmaWxlID0gJCgnI2ZpbGUtdXBsb2FkJylbMF0uZmlsZXNbMF0ubmFtZTtcbiAgICAkKHRoaXMpLnByZXYoJ2xhYmVsJykudGV4dChmaWxlKTtcbiAgfSk7XG5cbiAgJCgnI2ZpbGUtdXBsb2FkMicpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSAkKHRoaXMpLnByZXYoJ2xhYmVsJykuY2xvbmUoKTtcbiAgICB2YXIgZmlsZSA9ICQoJyNmaWxlLXVwbG9hZDInKVswXS5maWxlc1swXS5uYW1lO1xuICAgICQodGhpcykucHJldignbGFiZWwnKS50ZXh0KGZpbGUpO1xuICB9KTtcblxuICAkKCcjZmlsZS11cGxvYWQzJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9ICQodGhpcykucHJldignbGFiZWwnKS5jbG9uZSgpO1xuICAgIHZhciBmaWxlID0gJCgnI2ZpbGUtdXBsb2FkMycpWzBdLmZpbGVzWzBdLm5hbWU7XG4gICAgJCh0aGlzKS5wcmV2KCdsYWJlbCcpLnRleHQoZmlsZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub2RlTGlzdFRvQXJyYXkobm9kZUxpc3RDb2xsZWN0aW9uKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdENvbGxlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBhdXRvRml4SGVpZ2h0KCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC13aW5uZXItY2FyZC10YWJsZScpO1xuICB2YXIgdGhpc0hlaWdodCA9IC0xO1xuICB2YXIgbWF4SGVpZ2h0ID0gLTE7XG4gIHZhciBicmVha3BvaW50ID0gNzY4O1xuICAvL+eCuuS6hmll5LiN5pSv5o+0bm9kZWxpc3TnmoRmb3JFYWNo5L+u5q2jXG4gIG5vZGVMaXN0VG9BcnJheShlbCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gXCJcIjsgLy/muIXnqbrkuYvliY3nmoRzdHlsZVxuICAgIHRoaXNIZWlnaHQgPSBpdGVtLmNsaWVudEhlaWdodDsgLy/lj5blvpflt7LntpPmuJvpgY7pq5jluqbnmoRcbiAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgPiB0aGlzSGVpZ2h0ID8gbWF4SGVpZ2h0IDogdGhpc0hlaWdodDtcbiAgfSk7XG4gIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID4gYnJlYWtwb2ludCkge1xuICAgIG5vZGVMaXN0VG9BcnJheShlbCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSBgJHttYXhIZWlnaHR9cHhgO1xuICAgIH0pO1xuICB9XG59XG5cbi8v6aaW6aCB55qE5oyJ6YiV5o+baWZyYW1l5b2x54mHXG5mdW5jdGlvbiBpZnJhbWVCdXR0b24oKSB7XG4gICQoXCJ1bCNsaW5rcyBsaSBhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoXCIjdmlkZW9cIikuYXR0cihcInNyY1wiLCAkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgfSlcbn1cblxuLy/lkbzlj6tmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgdG9vbHNMaXN0ZW5lcigpO1xuICBzZXRLdkludGVydmFsKCk7XG4gIHZpZGVvU2hvdygpO1xuICBzbGlja1N3aXRjaGVyKCk7XG4gIHNpZGVCYXJGaXhlZCgpO1xuICBhb3NTd2l0Y2hlcigpO1xuICAvLyBhYm91dFVzU2xpZGVzaG93KCk7XG4gIGZpbGVVcGxvYWRzKCk7XG4gIGJvYXJkT2ZEaXJlY3RvckNhcmRDb2xsYXBzZSgpO1xuICB3aW5uZXJDYXJkQ29sbGFwc2UoKTtcbiAgYXV0b0ZpeEhlaWdodCgpO1xuICBpZnJhbWVCdXR0b24oKTtcbn0pO1xuLy/lkbzlj6tmdW5jdGlvbi3oppbnqpflpKflsI/orormm7RcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICBnb1RvcEZpeGVkKCk7XG4gIGF1dG9GaXhIZWlnaHQoKTtcbn0pO1xuLy/lkbzlj6tmdW5jdGlvbi3mjbLli5VcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICBnb1RvcFNob3coKTtcbiAgZ29Ub3BGaXhlZCgpO1xuICBzaWRlQmFyRml4ZWQoKTtcbiAgdGltZWxpbmVBbmltYXRpb24oKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=