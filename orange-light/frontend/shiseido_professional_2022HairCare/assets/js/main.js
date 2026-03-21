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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
    goToAnchor();
    goTop();
    goTopFixed();
  });
  $("#footer").load("ajax/_footer.html");
  $.ajax({
    url: "ajax/_carousel.html",
    method: "GET",
    dataType: "html"
  }).done(function (data) {
    $("#carousel").html(data);
    setKvInterval();
    aosSwitcher();
  });
}); //go top

function goTopShow() {
  // console.log($(window).scrollTop());
  if ($(window).scrollTop() > 400) {
    $(".l-header-goTop").addClass("js-show");
  } else {
    $(".l-header-goTop").removeClass("js-show");
  }
}

function goTop() {
  //置頂按鈕的捲動速度
  $(".l-header-goTop").click(function (event) {
    console.log("ccc");
    event.preventDefault;
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  });
}

function goTopFixed() {
  var el = document.querySelector(".l-footer");
  var targetEl = document.querySelector(".l-header-goTop");

  if (targetEl !== null) {
    var triggerNum = window.pageYOffset + window.innerHeight; // console.log("triggerNum == " + triggerNum);
    // console.log("el.offsetTop ==" + el.offsetTop);

    var targerNum = el.offsetTop;

    if (triggerNum >= targerNum + el.offsetHeight / 1.5) {
      targetEl.classList.remove("js-acitve");
    } else {
      targetEl.classList.add("js-acitve");
    }
  }
}

function goToAnchor() {
  $(".js-goToAnchor").click(function (e) {
    var switchEl = window.location.pathname.split("/");

    if (switchEl.includes("index.php") === true || switchEl.includes("index.html") === true || switchEl[1] === '') {
      e.preventDefault();
      var target = $(this.hash);
      var targetPos = $(target).offset().top;
      $("html,body").animate({
        scrollTop: targetPos - 50
      }, 1000);
    } else if (window.location.origin == 'https://demo.ai-ad.com.tw') {
      e.preventDefault();
      window.location = "index.html" + $(this).attr("href");
      console.log($(this).attr("href"));
    } else {
      e.preventDefault();
      window.location = "index.php" + $(this).attr("href");
      console.log($(this).attr("href"));
    }

    var trigger02 = document.querySelector("#hamburger");
    var target02 = document.querySelector("#menu");
    trigger02.classList.remove("js-menuOpened");
    target02.classList.remove("js-menuOpened");
    document.documentElement.classList.remove("js-menuOpened");
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

function headerFunction() {
  var breakpoint = 992;
  toggleMobileMenu(breakpoint);
}

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

function setKvInterval() {
  var el = document.querySelector("#introduceCarousel_Id");

  if (el !== null) {
    $("#introduceCarousel_Id").carousel({
      interval: false
    });
    $(".p-introduce-tab , .carousel-indicators li").on("click", function () {
      var slideNum = $(this).attr("data-slide-to");
      $(".p-introduce-tab").eq(slideNum).addClass("js-active").siblings().removeClass("js-active");
    });
  }
}

function readMore() {
  el = document.querySelector(".p-notice-arrow");

  if (el) {
    el.addEventListener("click", function () {
      event.preventDefault();
      this.classList.toggle("js-active");
      document.querySelector(".p-notice-content").classList.toggle("js-active");
    });
  }
}

function modalViewMore() {
  el = document.querySelector(".p-ig-modal-more");

  if (el !== null) {
    $(".p-ig-modal-more").on("click", function () {
      $(".p-ig-modal-txt").toggleClass("js-active");
      $(".p-ig-modal-more button span").toggle();
      $(".p-ig-modal-more button i").toggleClass("js-active");
    });
    $(".p-ig-modal-close").on("click", function () {
      $(".p-ig-modal-txt").removeClass("js-active");
      $(".p-ig-modal-more button span:nth-child(1)").show();
      $(".p-ig-modal-more button span:nth-child(2)").hide();
      $(".p-ig-modal-more button i").removeClass("js-active");
    });
  }
}

function aosSwitcher() {
  var el = document.querySelector("div[data-aos]");

  if (el !== null) {
    AOS.init({
      once: false,
      duration: 1000
    });
    $(".p-introduce-tab , .carousel-indicators li").on("click", function () {
      var slideNum = $(this).attr("data-slide-to"); // console.log(slideNum);
      // console.log($(".carousel-item").eq(slideNum));

      if ($(".carousel-item").eq(slideNum).hasClass("active") !== true) {
        $(".carousel-item").eq(slideNum).find("div[data-aos]").removeClass("aos-animate");
        setTimeout(function () {
          $(".carousel-item").eq(slideNum).find("div[data-aos]").addClass("aos-animate");
        }, 400);
      }
    });
  }
} //呼叫function-網頁載入完成後


$(document).ready(function () {
  // toolsListener();
  readMore();
  modalViewMore();
}); //呼叫function-視窗大小變更

$(window).resize(function () {}); //呼叫function-捲動

$(window).scroll(function () {
  goTopShow();
  goTopFixed();
});

/***/ }),

/***/ "./src@4.0/assets/js/vue.js":
/*!**********************************!*\
  !*** ./src@4.0/assets/js/vue.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_data_winner_w1_winners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/data/winner/w1_winners.js */ "./src@4.0/assets/plugins/data/winner/w1_winners.js");
/* harmony import */ var _plugins_data_winner_w2_winners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/data/winner/w2_winners.js */ "./src@4.0/assets/plugins/data/winner/w2_winners.js");
/* harmony import */ var _plugins_data_winner_final_winners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/data/winner/final_winners.js */ "./src@4.0/assets/plugins/data/winner/final_winners.js");
// import file
//北區 中區 南區
// import north_stores from './data/north_stores.js';
// import center_stores from './data/center_stores.js';
// import south_stores from './data/south_stores.js';
//import east_stores from './data/east_stores.js';


 // import w4_winners from './winner/w4_winners.js';
// import w5_winners from './winner/w5_winners.js';
// 每週import一個js  
// console.log(w1_winners);
// console.log(north_stores)
// console.log(center_stores)
// console.log(south_stores)
// console.log(east_stores)
//{ id: 'east', name: '東區', stores: east_stores }

var storeEl = document.querySelector("#app");

if (storeEl !== null) {
  var vue = new Vue({
    el: '#app',
    data: {
      activeItem: 'north',
      sections: [{
        id: 'north',
        name: '北區',
        stores: north_stores
      }, {
        id: 'center',
        name: '中區',
        stores: center_stores
      }, {
        id: 'south',
        name: '南區',
        stores: south_stores
      }]
    },
    methods: {
      isActive: function isActive(menuItem) {
        return this.activeItem === menuItem;
      },
      setActive: function setActive(menuItem) {
        this.activeItem = menuItem;
      }
    }
  });
}

var winnerEl = document.querySelector("#appwin");

if (winnerEl !== null) {
  var vue2 = new Vue({
    el: '#appwin',
    data: {
      winners: [{
        id: 1,
        title: _plugins_data_winner_w1_winners_js__WEBPACK_IMPORTED_MODULE_0__["default"].title,
        winners: _plugins_data_winner_w1_winners_js__WEBPACK_IMPORTED_MODULE_0__["default"].datas
      }, {
        id: 2,
        title: _plugins_data_winner_w2_winners_js__WEBPACK_IMPORTED_MODULE_1__["default"].title,
        winners: _plugins_data_winner_w2_winners_js__WEBPACK_IMPORTED_MODULE_1__["default"].datas
      } // { id: 3, title: w3_winners.title, winners: w3_winners.datas },
      // { id: 4, title: w4_winners.title, winners: w4_winners.datas },
      // { id: 4, title: w5_winners.title, winners: w5_winners.datas }
      ],
      //使用時，複製一行物件：修改id 與 w1編號就可以
      // 每週放入一個obj  
      openItem: '得獎名單預計於11月3日公布，敬請期待！' // 每週放入一個obj    
      // winners: [
      // { id: 1, title: w1_winners.title, winners: w1_winners.datas },
      // { id: 2, title: w2_winners.title, winners: w2_winners.datas },
      // { id: 3, title: w3_winners.title, winners: w3_winners.datas },
      // ]

    }
  });
}

var finalWinnerEl = document.querySelector("#finalappwin");

if (finalWinnerEl !== null) {
  var _vue = new Vue({
    el: '#finalappwin',
    data: {
      winners: [{
        id: 1,
        title: _plugins_data_winner_final_winners_js__WEBPACK_IMPORTED_MODULE_2__["default"].title,
        winners: _plugins_data_winner_final_winners_js__WEBPACK_IMPORTED_MODULE_2__["default"].datas
      }],
      //使用時，複製一行物件：修改id 與 w1編號就可以
      // 每週放入一個obj  
      openItem: '得獎名單預計於11月3日公布，敬請期待！' // 每週放入一個obj    
      // winners: [
      // { id: 1, title: w1_winners.title, winners: w1_winners.datas },
      // { id: 2, title: w2_winners.title, winners: w2_winners.datas },
      // { id: 3, title: w3_winners.title, winners: w3_winners.datas },
      // ]

    }
  });
}

/***/ }),

/***/ "./src@4.0/assets/plugins/data/winner/final_winners.js":
/*!*************************************************************!*\
  !*** ./src@4.0/assets/plugins/data/winner/final_winners.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var final_winners = {
  "title": "恭喜以下得獎者獲得",
  "datas": [{
    "name": "林x暄",
    "tel": "0938-xxx-669",
    "email": "winxxx@kimo.com"
  }, {
    "name": "褚x盈",
    "tel": "0989-xxx-511",
    "email": "yoho84xxx@yahoo.com.tw"
  }, {
    "name": "莊x婷",
    "tel": "0936-xxx-936",
    "email": "laura21xxx@hotmail.com"
  }, {
    "name": "胡x云",
    "tel": "0968-xxx-399",
    "email": "hyj204168xxx@gmail.com"
  }, {
    "name": "楊x媗",
    "tel": "0958-xxx-773",
    "email": "pubmos1xxx@gmail.com"
  }, {
    "name": "楊x苓",
    "tel": "0978-xxx-061",
    "email": "ling19840xxx@gmail.com"
  }, {
    "name": "林x婷",
    "tel": "0912-xxx-851",
    "email": "les01030xxx@gmail.com"
  }, {
    "name": "陳x諭",
    "tel": "0985-xxx-979",
    "email": "x950xxx@gmail.com"
  }, {
    "name": "薛x芳",
    "tel": "0911-xxx-125",
    "email": "shelly881xxx@gmail.com"
  }, {
    "name": "洪x姍",
    "tel": "0978-xxx-858",
    "email": "sammihung0xxx@gmail.com"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (final_winners);

/***/ }),

/***/ "./src@4.0/assets/plugins/data/winner/w1_winners.js":
/*!**********************************************************!*\
  !*** ./src@4.0/assets/plugins/data/winner/w1_winners.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var w1_winners = {
  "title": "第一批 入選名單",
  "datas": [{
    "name": "王x慧",
    "tel": "0958-xxx-608",
    "email": "fbxxx88@gmail.com"
  }, {
    "name": "袁x璘",
    "tel": "0970-xxx-102",
    "email": "loxxxifeyuan@gmail.com"
  }, {
    "name": "高x",
    "tel": "0983-xxx-121",
    "email": "kaxxx99@gmail.com"
  }, {
    "name": "邱x淳",
    "tel": "0973-xxx-826",
    "email": "cixxx1238654@gmail.com"
  }, {
    "name": "王x茵",
    "tel": "0930-xxx-707",
    "email": "ayxxx790719@hotmail.com"
  }, {
    "name": "郭x雯",
    "tel": "0963-xxx-942",
    "email": "Lixxx225@hotmail.com"
  }, {
    "name": "陳x如",
    "tel": "0921-xxx-776",
    "email": "zzxxxzz68@yahoo.com.tw"
  }, {
    "name": "楊x晨",
    "tel": "0918-xxx-225",
    "email": "Klxxxeleilei@gmail.com"
  }, {
    "name": "吳x渝 ",
    "tel": "0917-xxx-336",
    "email": "n5xxx6@yahoo.com.tw"
  }, {
    "name": "許x",
    "tel": "0922-xxx-186",
    "email": "mixxxsu321@gmail.com"
  }, {
    "name": "林x筑",
    "tel": "0916-xxx-866",
    "email": "l0xxx745866@gmail.com"
  }, {
    "name": "張x維",
    "tel": "0922-xxx-198",
    "email": "51xxx0@gmail.com"
  }, {
    "name": "邱x芳",
    "tel": "0963-xxx-735",
    "email": "Scxxx63@hotmail.com"
  }, {
    "name": "曾x華",
    "tel": "0970-xxx-963",
    "email": "mixxx997makeup@gmail.com"
  }, {
    "name": "吳x玫",
    "tel": "0912-xxx-639",
    "email": "shxxxymei@gmail.com"
  }, {
    "name": "李x儒",
    "tel": "0970-xxx-528",
    "email": "aaxxx28tw93@gmail.com"
  }, {
    "name": "陳x柔",
    "tel": "0981-xxx-807",
    "email": "yuxxx881018@gmail.com"
  }, {
    "name": "邱x瑜",
    "tel": "0989-xxx-091",
    "email": "mmxxx883@gmail.com"
  }, {
    "name": "張x菁",
    "tel": "0978-xxx-117",
    "email": "raxxxt1997923@gmail.com"
  }, {
    "name": "李x慧",
    "tel": "0931-xxx-904",
    "email": "kwxxx79@gmail.com"
  }, {
    "name": "林x芯",
    "tel": "0912-xxx-901",
    "email": "alxxx21L2335@yahoo.com.tw"
  }, {
    "name": "王x晴",
    "tel": "0976-xxx-540",
    "email": "e_xxx3252@yahoo.com.tw"
  }, {
    "name": "羅x凡",
    "tel": "0913-xxx-315",
    "email": "ilxxx850817@yahoo.com.tw"
  }, {
    "name": "廖x伶",
    "tel": "0922-xxx-981",
    "email": "mixxxummel@hotmail.com"
  }, {
    "name": "吳x妮",
    "tel": "0985-xxx-949",
    "email": "wuxxxnysunny@gmail.com"
  }, {
    "name": "洪x姍",
    "tel": "0978-xxx-858",
    "email": "saxxxhung0320@gmail.com"
  }, {
    "name": "陳x祺",
    "tel": "0926-xxx-986",
    "email": "b7xxx17@hotmail.com"
  }, {
    "name": "吳x頤",
    "tel": "0919-xxx-429",
    "email": "Clxxx919@life.fubon.com"
  }, {
    "name": "高x玲",
    "tel": "0916-xxx-138",
    "email": "maxxx33@yahoo.com.tw"
  }, {
    "name": "林x暄",
    "tel": "0938-xxx-669",
    "email": "wixxx4@kimo.com"
  }, {
    "name": "古x靈",
    "tel": "0985-xxx-604",
    "email": "llxxx52000tw@yahoo.com.tw"
  }, {
    "name": "柯x珊",
    "tel": "0920-xxx-218",
    "email": "koxxxhan@gmail.com"
  }, {
    "name": "陳x",
    "tel": "0916-xxx-429",
    "email": "juxxx0527@yahoo.com.tw"
  }, {
    "name": "陳x家",
    "tel": "0916-xxx-292",
    "email": "cyxxx880191208@gmail.com"
  }, {
    "name": "陳x瑜",
    "tel": "0917-xxx-290",
    "email": "58xxxlili@gmail.com"
  }, {
    "name": "林x儒",
    "tel": "0909-xxx-077",
    "email": "loxxxne191101@gmail.com"
  }, {
    "name": "王x慧",
    "tel": "0961-xxx-019",
    "email": "loxxxuck0311@yahoo.com.tw"
  }, {
    "name": "薛x芳",
    "tel": "0911-xxx-125",
    "email": "shxxxy881225@gmail.com"
  }, {
    "name": "羅x治",
    "tel": "0933-xxx-072",
    "email": "smxxx761214@gmail.com"
  }, {
    "name": "張x寧",
    "tel": "0979-xxx-588",
    "email": "crxxxijayca@gmail.com"
  }, {
    "name": "黃x倩",
    "tel": "0965-xxx-425",
    "email": "jexxx900722@gmail.com"
  }, {
    "name": "李x絨",
    "tel": "0968-xxx-898",
    "email": "kixxx71028@yahoo.com.tw"
  }, {
    "name": "洪x媛",
    "tel": "0908-xxx-829",
    "email": "erxxx0829@gmail.com"
  }, {
    "name": "謝x儒",
    "tel": "0910-xxx-931",
    "email": "moxxx5021.mh@gmail.com"
  }, {
    "name": "黃x榕",
    "tel": "0937-xxx-364",
    "email": "laxxx760305@gmail.com"
  }, {
    "name": "蔡x琦",
    "tel": "0905-xxx-589",
    "email": "bexxxycorner.chichi@gmail.com"
  }, {
    "name": "歐x真",
    "tel": "0981-xxx-387",
    "email": "pexxxenou0728@gmail.com"
  }, {
    "name": "李x柔 ",
    "tel": "0968-xxx-258",
    "email": "evxxxe1114@yahoo.com.tw"
  }, {
    "name": "鄭x綺",
    "tel": "0968-xxx-332",
    "email": "chxxxy525888@gmail.com"
  }, {
    "name": "黃x雯",
    "tel": "0928-xxx-093",
    "email": "cuxxx308112012@gmail.com"
  }, {
    "name": "汪x雯",
    "tel": "0900-xxx-303",
    "email": "onxxxeywen123@gmail.com"
  }, {
    "name": "廖x文",
    "tel": "0917-xxx-131",
    "email": "moxxxat424@yahoo.com.tw"
  }, {
    "name": "李x婷 ",
    "tel": "0976-xxx-020",
    "email": "isxxx052043a@gmail.com"
  }, {
    "name": "吳x璇",
    "tel": "0987-xxx-625",
    "email": "anxxxnwutw@gmail.com"
  }, {
    "name": "楊x筑",
    "tel": "0968-xxx-244",
    "email": "alxxx11040325@gmail.com"
  }, {
    "name": "洪x雅",
    "tel": "0905-xxx-866",
    "email": "hgxxxe868@gmail.com"
  }, {
    "name": "馮x雯",
    "tel": "0918-xxx-660",
    "email": "dixxx52@yahoo.com.tw"
  }, {
    "name": "張x寧",
    "tel": "0930-xxx-642",
    "email": "isxxx382@gmail.com"
  }, {
    "name": "李x倫",
    "tel": "0953-xxx-126",
    "email": "elxxx91206@gmail.com"
  }, {
    "name": "唐x媜",
    "tel": "0978-xxx-287",
    "email": "abxxx330@gmail.com"
  }, {
    "name": "莊x柔",
    "tel": "0972-xxx-456",
    "email": "vixxxn8203@yahoo.com.tw"
  }, {
    "name": "陳x怡",
    "tel": "0989-xxx-566",
    "email": "inxxxt_love_23@yahoo.com.tw"
  }, {
    "name": "廖x萱",
    "tel": "0975-xxx-277",
    "email": "ftxxx1165542@yahoo.com.tw"
  }, {
    "name": "何x緋",
    "tel": "0953-xxx-212",
    "email": "Pixxxei0212@gmail.com"
  }, {
    "name": "胡x云",
    "tel": "0968-xxx-399",
    "email": "hyxxx4168161@gmail.com"
  }, {
    "name": "古xx幸子",
    "tel": "0976-xxx-608",
    "email": "amxxx724@yahoo.com.tw"
  }, {
    "name": "周x均",
    "tel": "0919-xxx-285",
    "email": "aaxxxittaa70702@yahoo.com.tw"
  }, {
    "name": "張x涵",
    "tel": "0934-xxx-462",
    "email": "vexxxballet@gmail.com"
  }, {
    "name": "劉x瑄",
    "tel": "0912-xxx-149",
    "email": "anxxxa99319@gmail.com"
  }, {
    "name": "王x婷",
    "tel": "0908-xxx-372",
    "email": "coxxxutcosmetics2022@gmail.com"
  }, {
    "name": "呂x芸",
    "tel": "0903-xxx-118",
    "email": "b2xxx4359@gmail.com"
  }, {
    "name": "李x慈",
    "tel": "0983-xxx-007",
    "email": "lixxxmakeup71@gmail.com"
  }, {
    "name": "邱x晴",
    "tel": "0978-xxx-199",
    "email": "ivxxx4225336@gmail.com"
  }, {
    "name": "王x琪",
    "tel": "0972-xxx-821",
    "email": "gaxxx@livemail.tw"
  }, {
    "name": "羅x宜",
    "tel": "0932-xxx-715",
    "email": "evxxxna19950204@gmail.com"
  }, {
    "name": "林x婷",
    "tel": "0912-xxx-851",
    "email": "lexxx030915@gmail.com"
  }, {
    "name": "裘x媗",
    "tel": "0910-xxx-212",
    "email": "qaxxxl@outlook.com"
  }, {
    "name": "傅x雯",
    "tel": "0988-xxx-753",
    "email": "c8xxx78@hotmail.com"
  }, {
    "name": "饒x彤",
    "tel": "0976-xxx-928",
    "email": "saxxxnina1315@gmail.c"
  }, {
    "name": "郭x菡",
    "tel": "0988-xxx-486",
    "email": "bexxx4042788@yahoo.com.tw"
  }, {
    "name": "關x蔚",
    "tel": "0922-xxx-054",
    "email": "ssxxx16zz@yahoo.com.tw"
  }, {
    "name": "黃x茵",
    "tel": "0988-xxx-670",
    "email": "lixxxan8116@gmail.com"
  }, {
    "name": "楊x媗",
    "tel": "0958-xxx-773",
    "email": "puxxxs1110@gmail.com"
  }, {
    "name": "林x欣",
    "tel": "0921-xxx-799",
    "email": "mfxxx97@gmail.com"
  }, {
    "name": "陳x諭",
    "tel": "0985-xxx-979",
    "email": "x9xxx71@gmail.com"
  }, {
    "name": "林x華 ",
    "tel": "0922-xxx-526",
    "email": "ddxxxitmtj@gmail.com"
  }, {
    "name": "羅x欣",
    "tel": "0933-xxx-152",
    "email": "rexxx081@gmail.com"
  }, {
    "name": "方x晴",
    "tel": "0912-xxx-327",
    "email": "chxxx1227@gmail.com"
  }, {
    "name": "胡x任",
    "tel": "0939-xxx-825",
    "email": "xcxxx388@yahoo.com.tw"
  }, {
    "name": "于x淳",
    "tel": "0912-xxx-289",
    "email": "alxxx0227@gmail.com"
  }, {
    "name": "曾x琴 ",
    "tel": "0933-xxx-924",
    "email": "s0xxx09891727@gmail.com"
  }, {
    "name": "眭x瑩",
    "tel": "0983-xxx-041",
    "email": "kixxxoro0901@gmail.com"
  }, {
    "name": "夏x萱",
    "tel": "0972-xxx-799",
    "email": "raxxxain28011@gmail.com"
  }, {
    "name": "許x涵",
    "tel": "0938-xxx-491",
    "email": "caxxx2007cd@yahoo.com.tw"
  }, {
    "name": "吳x嘉",
    "tel": "0920-xxx-699",
    "email": "toxxx11002@yahoo.com.tw"
  }, {
    "name": "查x恩",
    "tel": "0919-xxx-878",
    "email": "jexxxfree725@hotmail.com"
  }, {
    "name": "褚x盈",
    "tel": "0989-xxx-511",
    "email": "yoxxx4427@yahoo.com.tw"
  }, {
    "name": "郭x良",
    "tel": "0958-xxx-685",
    "email": "kyxxx5@gmail.com"
  }, {
    "name": "張x方",
    "tel": "0934-xxx-726",
    "email": "mixxxicole@gmail.com"
  }, {
    "name": "王x瑩",
    "tel": "0936-xxx-167",
    "email": "vixxx02202@icloud.com"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (w1_winners);

/***/ }),

/***/ "./src@4.0/assets/plugins/data/winner/w2_winners.js":
/*!**********************************************************!*\
  !*** ./src@4.0/assets/plugins/data/winner/w2_winners.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var w2_winners = {
  "title": "第二批 入選名單",
  "datas": [{
    name: "王x蕎",
    tel: "0910-xxx-611",
    email: "a0xxx635611@gmail.com"
  }, {
    name: "曹x茹",
    tel: "0928-xxx-213",
    email: "anxxx97521@yahoo.com.tw"
  }, {
    name: "黃x文",
    tel: "0961-xxx-708",
    email: "chxxx1999s@gmail.com"
  }, {
    name: "袁x璘",
    tel: "0970-xxx-102",
    email: "loxxxifeyuan@gmail.com"
  }, {
    name: "蘇x萱",
    tel: "0976-xxx-356",
    email: "wexxx6579@kimo.com"
  }, {
    name: " 寇x芳",
    tel: "0987-xxx-798",
    email: "aaxxx25cute@yahoo.com.tw"
  }, {
    name: "王x薇",
    tel: "0986-xxx-609",
    email: "a7xxx101@gmail.com"
  }, {
    name: "劉x瑀",
    tel: "0973-xxx-675",
    email: "maxxxna@gmail.com"
  }, {
    name: "蔡x珊",
    tel: "0978-xxx-861",
    email: "pcxxx503@gmail.com"
  }, {
    name: "詹x韻",
    tel: "0930-xxx-817",
    email: "suxxxr_tile@hotmail.com"
  }, {
    name: "沈x諭",
    tel: "0902-xxx-669",
    email: "40xxx1055@gms.tku.edu.tw"
  }, {
    name: "張x彤",
    tel: "0917-xxx-235",
    email: "Blxxxun@gmail.com"
  }, {
    name: "譚x翎",
    tel: "0988-xxx-606",
    email: "stxxx6400000@gmail.com"
  }, {
    name: "蕭x譯",
    tel: "0975-xxx-472",
    email: "Cexx.xlogger09@gmail.com"
  }, {
    name: "黃x葳",
    tel: "0955-xxx-128",
    email: "stxxxnt9631032@yahoo.com.tw"
  }, {
    name: "林x英",
    tel: "0939-xxx-696",
    email: "a0xxx118426@gmail.com"
  }, {
    name: "x惠",
    tel: "0933-xxx-464",
    email: "maxxxoffee123g1@gmail.com"
  }, {
    name: "王x翊",
    tel: "0906-xxx-034",
    email: "waxxxonya0125@gmail.com"
  }, {
    name: "王x雯",
    tel: "0952-xxx-312",
    email: "caxxxna19930821@gmail.com"
  }, {
    name: "顏x苓",
    tel: "0921-xxx-439",
    email: "jaxxxn1231@icloud.com"
  }, {
    name: "何x毅",
    tel: "0983-xxx-101",
    email: "e0xxx316050@gmail.com"
  }, {
    name: "陳x怡",
    tel: "0916-xxx-983",
    email: "chxxxql@gmail.com"
  }, {
    name: "楊x涵",
    tel: "0926-xxx-520",
    email: "stxxx0433@yahoo.com.tw"
  }, {
    name: "毛x欣",
    tel: "0909-xxx-780",
    email: "s1xxx0166@gmail.com"
  }, {
    name: "鍾x萱",
    tel: "0926-xxx-006",
    email: "lixxxe7227937@gmail.com"
  }, {
    name: "劉x君",
    tel: "0905-xxx-996",
    email: "syxxxaliutaiwan@gmail.com"
  }, {
    name: "李x倢",
    tel: "0925-xxx-707",
    email: "wexxxe0310@gmail.com"
  }, {
    name: "李x雯",
    tel: "0988-xxx-301",
    email: "wexxx25@gmail.com"
  }, {
    name: "陳x婷",
    tel: "0910-xxx-462",
    email: "moxx@cttape.com.tw"
  }, {
    name: "簡x臻",
    tel: "0910-xxx-472",
    email: "suxxxse0910342472@gmail.com"
  }, {
    name: "姚x芸",
    tel: "0934-xxx-525",
    email: "iaxxxng109@hotmail.com"
  }, {
    name: "張x米",
    tel: "0916-xxx-428",
    email: "Jmxxx1111@gmail.com"
  }, {
    name: "王x琳",
    tel: "0938-xxx-422",
    email: "fixxx8422@yahoo.com.tw"
  }, {
    name: "詹x湄",
    tel: "0910-xxx-973",
    email: "puxxxepig321@gmail.com"
  }, {
    name: "劉x雯",
    tel: "0925-xxx-995",
    email: "ywxxx226iphone@gmail.com"
  }, {
    name: "吳x芬",
    tel: "0976-xxx-213",
    email: "smxxxkid05@yahoo.com.tw"
  }, {
    name: "劉x宜",
    tel: "0925-xxx-822",
    email: "jixxx4933@gmail.com"
  }, {
    name: "蔣x宇",
    tel: "0970-xxx-798",
    email: "yuxxx6798@gmail.com"
  }, {
    name: "蔡x穎",
    tel: "0935-xxx-180",
    email: "s9xxx048@gmail.com"
  }, {
    name: "陳x",
    tel: "0958-xxx-176",
    email: "naxxxpockett@gmail.com"
  }, {
    name: "黃x亭",
    tel: "0975-xxx-512",
    email: "shxxxing322@gmail.com"
  }, {
    name: "邱x婕",
    tel: "0979-xxx-299",
    email: "a5xxx4.4564874@gmail.com"
  }, {
    name: "張x云 ",
    tel: "0976-xxx-820",
    email: "cuxxxaoyao08241@gmail.com"
  }, {
    name: "陳x柔",
    tel: "0981-xxx-807",
    email: "yuxxx881018@gmail.com"
  }, {
    name: "劉x臻",
    tel: "0978-xxx-915",
    email: "v9xxx325@yahoo.com.tw"
  }, {
    name: "莊x妤",
    tel: "0928-xxx-977",
    email: "lixxx00126@yahoo.com.tw"
  }, {
    name: "楊x潔",
    tel: "0938-xxx-968",
    email: "y0xxx334968@gmail.com"
  }, {
    name: "邱x瑜",
    tel: "0989-xxx-091",
    email: "mmxxx883@gmail.com"
  }, {
    name: "花x鴻",
    tel: "0981-xxx-359",
    email: "salxxxaw@yahoo.com.tw"
  }, {
    name: "林x妤",
    tel: "0970-xxx-322",
    email: "a0xxx396322@gmail.com"
  }, {
    name: "曾x庭",
    tel: "0908-xxx-626",
    email: "86xxx6sh@gmail.com"
  }, {
    name: "姚x姮",
    tel: "0958-xxx-303",
    email: "c5xxx1@hotmail.com"
  }, {
    name: "鄧x惠",
    tel: "0986-xxx-722",
    email: "yuxxx70222@gmail.com"
  }, {
    name: "蔣x慧",
    tel: "0903-xxx-908",
    email: "trxxx112438@gmail.com"
  }, {
    name: "羅x鏵",
    tel: "0977-xxx-279",
    email: "haxxx2457@gmail.com"
  }, {
    name: "陳x璇",
    tel: "0936-xxx-117",
    email: "anxxx19970529@yahoo.com.tw"
  }, {
    name: "李x婷",
    tel: "0956-xxx-663",
    email: "a0xxx897663@gmail.com"
  }, {
    name: "蘇x婷",
    tel: "0975-xxx-806",
    email: "tixxx99672445@gmail.com"
  }, {
    name: "吳x璇",
    tel: "0938-xxx-410",
    email: "yuxxxu689@gmail.com"
  }, {
    name: "林x淇",
    tel: "0970-xxx-643",
    email: "Grxxxlin8911107@gmail.com"
  }, {
    name: "陳x淳",
    tel: "0909-xxx-609",
    email: "kuxxxhunchen0728@yahoo.co.jp"
  }, {
    name: "許x淇",
    tel: "0928-xxx-701",
    email: "Hyxxx021314@gmail.com"
  }, {
    name: "徐x伶",
    tel: "0972-xxx-722",
    email: "pexxxct6525@gmail.com"
  }, {
    name: "林x蓉",
    tel: "0903-xxx-383",
    email: "lixxxrong1030517@gmail.com"
  }, {
    name: "林x亭",
    tel: "0982-xxx-522",
    email: "boxxxusi@gmail.com"
  }, {
    name: "李x臻",
    tel: "0984-xxx-179",
    email: "aaxxxcd31718@gmail.con"
  }, {
    name: "何x頻",
    tel: "0930-xxx-336",
    email: "hexxxpin@gmail.com"
  }, {
    name: "吳x倩",
    tel: "0936-xxx-395",
    email: "caxxx052773@gmail.com"
  }, {
    name: "李x琪",
    tel: "0978-xxx-276",
    email: "o.oxxx777@gmail.com"
  }, {
    name: "陳x臻",
    tel: "0910-xxx-017",
    email: "yixxxn@gmail.com"
  }, {
    name: "黃x綺",
    tel: "0931-xxx-321",
    email: "doxxx5272000@gmail.com"
  }, {
    name: "朱x儀",
    tel: "0927-xxx-818",
    email: "g9xxx197s@yahoo.com.tw"
  }, {
    name: "胡x婷",
    tel: "0988-xxx-629",
    email: "salxxxu0913@gmail.com"
  }, {
    name: "林x潔",
    tel: "0926-xxx-110",
    email: "auxxxa890734@gmail.com"
  }, {
    name: "王x",
    tel: "0988-xxx-417",
    email: "frxxx091613@gmail.com"
  }, {
    name: "陳x霏",
    tel: "0911-xxx-782",
    email: "dwxxx.iyre@gmail.com"
  }, {
    name: "黃x倩",
    tel: "0965-xxx-425",
    email: "jexxx900722@gmail.com"
  }, {
    name: "韓x瑄",
    tel: "0978-xxx-288",
    email: "a8xxx11@yahoo.com.tw"
  }, {
    name: "湯x心",
    tel: "0908-xxx-658",
    email: "s0xxx288098@gmail.com"
  }, {
    name: "邱x芸",
    tel: "0913-xxx-309",
    email: "r3xxx410611@gmail.com"
  }, {
    name: "林x暄",
    tel: "0938-xxx-669",
    email: "wixxx4@kimo.com"
  }, {
    name: "高x玲",
    tel: "0916-xxx-138",
    email: "maxxx33@yahoo.com.tw"
  }, {
    name: "王x茹",
    tel: "0958-xxx-107",
    email: "luxxxsoyo@gmail.com"
  }, {
    name: "陳x秀",
    tel: "0918-xxx-614",
    email: "anxxxbelieve614@gmail.com"
  }, {
    name: "古x靈",
    tel: "0985-xxx-604",
    email: "llxxx52000tw@yahoo.com.tw"
  }, {
    name: "黃x怡",
    tel: "0906-xxx-633",
    email: "adxxx1206@gmail.com"
  }, {
    name: "鍾x謙",
    tel: "0933-xxx-851",
    email: "03xxxian@gmail.com"
  }, {
    name: "游x新",
    tel: "0979-xxx-668",
    email: "yuxxx811@gmail.com"
  }, {
    name: "黃x萍",
    tel: "0973-xxx-215",
    email: "ilxxxtoshare77@gmail.com"
  }, {
    name: "李x靜",
    tel: "0934-xxx-836",
    email: "maxxx19891026@gmail.com"
  }, {
    name: "張x靜",
    tel: "0921-xxx-217",
    email: "doxxxofasollasi60230@yahoo.com.tw"
  }, {
    name: "劉x宜",
    tel: "0979-xxx-519",
    email: "A0xxx133519@gmail.com"
  }, {
    name: "林x儒",
    tel: "0909-xxx-077",
    email: "loxxxne191101@gmail.com"
  }, {
    name: "林x妍",
    tel: "0936-xxx-236",
    email: "q8xxx7965@gmail.com"
  }, {
    name: "林x庭",
    tel: "0966-xxx-329",
    email: "gixxx797193@gmail.com"
  }, {
    name: "張x心",
    tel: "0907-xxx-951",
    email: "enxxx1130315@gmail.com"
  }, {
    name: "郭x儒",
    tel: "0921-xxx-592",
    email: "a0xxx225592@gmail.com"
  }, {
    name: "林x伃",
    tel: "0975-xxx-961",
    email: "a7xxx3why@gmail.com"
  }, {
    name: "沈x竹",
    tel: "0911-xxx-627",
    email: "09xxx53627w@gmail.com"
  }, {
    name: "吳x穎",
    tel: "0955-xxx-043",
    email: "Eixxxn9003134@gmail.com"
  }, {
    name: "施x馨",
    tel: "0920-xxx-080",
    email: "wuxxxn4190@gmail.com"
  }, {
    name: "黃x潔",
    tel: "0932-xxx-958",
    email: "hexxx71014@yahoo.com.tw"
  }, {
    name: "何x綺",
    tel: "0981-xxx-978",
    email: "saxxxa1232001@gmail.com"
  }, {
    name: "廖x琳",
    tel: "0921-xxx-315",
    email: "shxxxpovob@gmail.com"
  }, {
    name: "楊x苓",
    tel: "0978-xxx-061",
    email: "lixxx9840118@gmail.com"
  }, {
    name: "陳x璇",
    tel: "0912-xxx-422",
    email: "q8xxx453@gmail.com"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (w2_winners);

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./src@4.0/assets/js/main.js ./src@4.0/assets/js/vue.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Jane/Desktop/Joy/web/shiseido_professional_event/shiseido_professional_2022HairCare/src@4.0/assets/js/main.js */"./src@4.0/assets/js/main.js");
module.exports = __webpack_require__(/*! /Users/Jane/Desktop/Joy/web/shiseido_professional_event/shiseido_professional_2022HairCare/src@4.0/assets/js/vue.js */"./src@4.0/assets/js/vue.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmNANC4wL2Fzc2V0cy9qcy92dWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvcGx1Z2lucy9kYXRhL3dpbm5lci9maW5hbF93aW5uZXJzLmpzIiwid2VicGFjazovLy8uL3NyY0A0LjAvYXNzZXRzL3BsdWdpbnMvZGF0YS93aW5uZXIvdzFfd2lubmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmNANC4wL2Fzc2V0cy9wbHVnaW5zL2RhdGEvd2lubmVyL3cyX3dpbm5lcnMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkb25lIiwiZGF0YSIsImh0bWwiLCJoZWFkZXJGdW5jdGlvbiIsImdvVG9BbmNob3IiLCJnb1RvcCIsImdvVG9wRml4ZWQiLCJsb2FkIiwic2V0S3ZJbnRlcnZhbCIsImFvc1N3aXRjaGVyIiwiZ29Ub3BTaG93Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0RWwiLCJ0cmlnZ2VyTnVtIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsInRhcmdlck51bSIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImUiLCJzd2l0Y2hFbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImluY2x1ZGVzIiwidGFyZ2V0IiwiaGFzaCIsInRhcmdldFBvcyIsIm9mZnNldCIsInRvcCIsIm9yaWdpbiIsImF0dHIiLCJ0cmlnZ2VyMDIiLCJ0YXJnZXQwMiIsImRvY3VtZW50RWxlbWVudCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJtZWRpYVF1ZXJ5IiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJpbm5lcldpZHRoIiwiYnJlYWtwb2ludCIsInRvb2xzTGlzdGVuZXIiLCJrZXlDb2RlIiwiYm9keSIsImNhcm91c2VsIiwiaW50ZXJ2YWwiLCJvbiIsInNsaWRlTnVtIiwiZXEiLCJzaWJsaW5ncyIsInJlYWRNb3JlIiwibW9kYWxWaWV3TW9yZSIsInRvZ2dsZUNsYXNzIiwic2hvdyIsImhpZGUiLCJBT1MiLCJpbml0Iiwib25jZSIsImR1cmF0aW9uIiwiaGFzQ2xhc3MiLCJmaW5kIiwic2V0VGltZW91dCIsInJlc2l6ZSIsInNjcm9sbCIsInN0b3JlRWwiLCJ2dWUiLCJWdWUiLCJhY3RpdmVJdGVtIiwic2VjdGlvbnMiLCJpZCIsIm5hbWUiLCJzdG9yZXMiLCJub3J0aF9zdG9yZXMiLCJjZW50ZXJfc3RvcmVzIiwic291dGhfc3RvcmVzIiwibWV0aG9kcyIsImlzQWN0aXZlIiwibWVudUl0ZW0iLCJzZXRBY3RpdmUiLCJ3aW5uZXJFbCIsInZ1ZTIiLCJ3aW5uZXJzIiwidGl0bGUiLCJ3MV93aW5uZXJzIiwiZGF0YXMiLCJ3Ml93aW5uZXJzIiwib3Blbkl0ZW0iLCJmaW5hbFdpbm5lckVsIiwiZmluYWxfd2lubmVycyIsInRlbCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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RUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBakZLLEVBc0ZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdEZLLEVBMkZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBM0ZLLEVBZ0dMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaEdLLEVBcUdMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBckdLLEVBMEdMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBMUdLLEVBK0dMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBL0dLLEVBb0hMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcEhLLEVBeUhMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBekhLLEVBOEhMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBOUhLLEVBbUlMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbklLLEVBd0lMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeElLLEVBNklMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBN0lLLEVBa0pMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbEpLLEVBdUpMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdkpLLEVBNEpMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBNUpLLEVBaUtMO0FBQ0MsWUFBUSxJQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaktLLEVBc0tMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdEtLLEVBMktMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBM0tLLEVBZ0xMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaExLLEVBcUxMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBckxLLEVBMExMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBMUxLLEVBK0xMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBL0xLLEVBb01MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcE1LLEVBeU1MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBek1LLEVBOE1MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBOU1LLEVBbU5MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbk5LLEVBd05MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeE5LLEVBNk5MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBN05LLEVBa09MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbE9LLEVBdU9MO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdk9LLEVBNE9MO0FBQ0MsWUFBUSxNQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBNU9LLEVBaVBMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBalBLLEVBc1BMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdFBLLEVBMlBMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBM1BLLEVBZ1FMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaFFLLEVBcVFMO0FBQ0MsWUFBUSxNQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBclFLLEVBMFFMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBMVFLLEVBK1FMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBL1FLLEVBb1JMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcFJLLEVBeVJMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBelJLLEVBOFJMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBOVJLLEVBbVNMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBblNLLEVBd1NMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeFNLLEVBNlNMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBN1NLLEVBa1RMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbFRLLEVBdVRMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdlRLLEVBNFRMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBNVRLLEVBaVVMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBalVLLEVBc1VMO0FBQ0MsWUFBUSxPQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdFVLLEVBMlVMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBM1VLLEVBZ1ZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaFZLLEVBcVZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBclZLLEVBMFZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBMVZLLEVBK1ZMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBL1ZLLEVBb1dMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcFdLLEVBeVdMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeldLLEVBOFdMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBOVdLLEVBbVhMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBblhLLEVBd1hMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeFhLLEVBNlhMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBN1hLLEVBa1lMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbFlLLEVBdVlMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdllLLEVBNFlMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBNVlLLEVBaVpMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBalpLLEVBc1pMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdFpLLEVBMlpMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBM1pLLEVBZ2FMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBaGFLLEVBcWFMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcmFLLEVBMGFMO0FBQ0MsWUFBUSxNQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBMWFLLEVBK2FMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBL2FLLEVBb2JMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBcGJLLEVBeWJMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBemJLLEVBOGJMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBOWJLLEVBbWNMO0FBQ0MsWUFBUSxNQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbmNLLEVBd2NMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBeGNLLEVBNmNMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBN2NLLEVBa2RMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBbGRLLEVBdWRMO0FBQ0MsWUFBUSxLQURUO0FBRUMsV0FBTyxjQUZSO0FBR0MsYUFBUztBQUhWLEdBdmRLLEVBNGRMO0FBQ0MsWUFBUSxLQURU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QUdFQyxTQUFLLEVBQUU7QUFIVCxHQXJmTyxFQTBmUDtBQUNFcEIsUUFBSSxFQUFFLEtBRFI7QUFFRW1CLE9BQUcsRUFBRSxjQUZQO0FBR0VDLFNBQUssRUFBRTtBQUhULEdBMWZPLEVBK2ZQO0FBQ0VwQixRQUFJLEVBQUUsS0FEUjtBQUVFbUIsT0FBRyxFQUFFLGNBRlA7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0EvZk8sRUFvZ0JQO0FBQ0VwQixRQUFJLEVBQUUsS0FEUjtBQUVFbUIsT0FBRyxFQUFFLGNBRlA7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0FwZ0JPLEVBeWdCUDtBQUNFcEIsUUFBSSxFQUFFLEtBRFI7QUFFRW1CLE9BQUcsRUFBRSxjQUZQO0FBR0VDLFNBQUssRUFBRTtBQUhULEdBemdCTyxFQThnQlA7QUFDRXBCLFFBQUksRUFBRSxLQURSO0FBRUVtQixPQUFHLEVBQUUsY0FGUDtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQTlnQk87QUFGUSxDQUFuQjtBQXVoQmVMLHlFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGFqYXgg6YWN5ZCISlEzIOW8leWFpeioree9rlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgIGhlYWRlckZ1bmN0aW9uKCk7XG4gICAgZ29Ub0FuY2hvcigpO1xuICAgIGdvVG9wKCk7XG4gICAgZ29Ub3BGaXhlZCgpO1xuICB9KTtcbiAgJChcIiNmb290ZXJcIikubG9hZChcImFqYXgvX2Zvb3Rlci5odG1sXCIpO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19jYXJvdXNlbC5odG1sXCIsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImh0bWxcIixcbiAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICQoXCIjY2Fyb3VzZWxcIikuaHRtbChkYXRhKTtcbiAgICBzZXRLdkludGVydmFsKCk7XG4gICAgYW9zU3dpdGNoZXIoKTtcbiAgfSk7XG59KTtcbi8vZ28gdG9wXG5mdW5jdGlvbiBnb1RvcFNob3coKSB7XG4gIC8vIGNvbnNvbGUubG9nKCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA0MDApIHtcbiAgICAkKFwiLmwtaGVhZGVyLWdvVG9wXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiLmwtaGVhZGVyLWdvVG9wXCIpLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgfVxufVxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIC8v572u6aCC5oyJ6YiV55qE5o2y5YuV6YCf5bqmXG4gICQoXCIubC1oZWFkZXItZ29Ub3BcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJjY2NcIik7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxuICAgICAge1xuICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICB9LFxuICAgICAgMTAwMFxuICAgICk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ29Ub3BGaXhlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3RlclwiKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWhlYWRlci1nb1RvcFwiKTtcbiAgaWYgKHRhcmdldEVsICE9PSBudWxsKSB7XG4gICAgdmFyIHRyaWdnZXJOdW0gPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0cmlnZ2VyTnVtID09IFwiICsgdHJpZ2dlck51bSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJlbC5vZmZzZXRUb3AgPT1cIiArIGVsLm9mZnNldFRvcCk7XG4gICAgdmFyIHRhcmdlck51bSA9IGVsLm9mZnNldFRvcDtcbiAgICBpZiAodHJpZ2dlck51bSA+PSB0YXJnZXJOdW0gKyBlbC5vZmZzZXRIZWlnaHQgLyAxLjUpIHtcbiAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY2l0dmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoXCJqcy1hY2l0dmVcIik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnb1RvQW5jaG9yKCkge1xuICAkKFwiLmpzLWdvVG9BbmNob3JcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc3dpdGNoRWwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIGlmIChzd2l0Y2hFbC5pbmNsdWRlcyhcImluZGV4LnBocFwiKSA9PT0gdHJ1ZSB8fCBzd2l0Y2hFbC5pbmNsdWRlcyhcImluZGV4Lmh0bWxcIikgPT09IHRydWUgfHwgc3dpdGNoRWxbMV0gPT09ICcnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgdmFyIHRhcmdldFBvcyA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldFBvcyAtIDUwLFxuICAgICAgICB9LFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PSAnaHR0cHM6Ly9kZW1vLmFpLWFkLmNvbS50dycpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaW5kZXguaHRtbFwiICsgJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcImluZGV4LnBocFwiICsgJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgIH1cbiAgICB2YXIgdHJpZ2dlcjAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gICAgdmFyIHRhcmdldDAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICAgIHRyaWdnZXIwMi5jbGFzc0xpc3QucmVtb3ZlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgICB0YXJnZXQwMi5jbGFzc0xpc3QucmVtb3ZlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLW1lbnVPcGVuZWRcIik7XG4gIH0pO1xufVxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZ1bmN0aW9uKCkge1xuICB2YXIgYnJlYWtwb2ludCA9IDk5MjtcbiAgdG9nZ2xlTW9iaWxlTWVudShicmVha3BvaW50KTtcbn1cbmZ1bmN0aW9uIHRvb2xzTGlzdGVuZXIoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImpzLXVzZU1vdXNlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwianMtdXNlS2V5Ym9hcmRcIik7XG4gICAgfVxuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy11c2VLZXlib2FyZFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJqcy11c2VNb3VzZVwiKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRLdkludGVydmFsKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludHJvZHVjZUNhcm91c2VsX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAkKFwiI2ludHJvZHVjZUNhcm91c2VsX0lkXCIpLmNhcm91c2VsKHtcbiAgICAgIGludGVydmFsOiBmYWxzZSxcbiAgICB9KTtcbiAgICAkKFwiLnAtaW50cm9kdWNlLXRhYiAsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNsaWRlTnVtID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1zbGlkZS10b1wiKTtcbiAgICAgICQoXCIucC1pbnRyb2R1Y2UtdGFiXCIpXG4gICAgICAgIC5lcShzbGlkZU51bSlcbiAgICAgICAgLmFkZENsYXNzKFwianMtYWN0aXZlXCIpXG4gICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcmVhZE1vcmUoKSB7XG4gIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLW5vdGljZS1hcnJvd1wiKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtbm90aWNlLWNvbnRlbnRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gbW9kYWxWaWV3TW9yZSgpIHtcbiAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtaWctbW9kYWwtbW9yZVwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJChcIi5wLWlnLW1vZGFsLW1vcmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLnAtaWctbW9kYWwtdHh0XCIpLnRvZ2dsZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgJChcIi5wLWlnLW1vZGFsLW1vcmUgYnV0dG9uIHNwYW5cIikudG9nZ2xlKCk7XG4gICAgICAkKFwiLnAtaWctbW9kYWwtbW9yZSBidXR0b24gaVwiKS50b2dnbGVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLnAtaWctbW9kYWwtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLnAtaWctbW9kYWwtdHh0XCIpLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xuICAgICAgJChcIi5wLWlnLW1vZGFsLW1vcmUgYnV0dG9uIHNwYW46bnRoLWNoaWxkKDEpXCIpLnNob3coKTtcbiAgICAgICQoXCIucC1pZy1tb2RhbC1tb3JlIGJ1dHRvbiBzcGFuOm50aC1jaGlsZCgyKVwiKS5oaWRlKCk7XG4gICAgICAkKFwiLnAtaWctbW9kYWwtbW9yZSBidXR0b24gaVwiKS5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gYW9zU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1hb3NdXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBvbmNlOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIH0pO1xuICAgICQoXCIucC1pbnRyb2R1Y2UtdGFiICwgLmNhcm91c2VsLWluZGljYXRvcnMgbGlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2xpZGVOdW0gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXNsaWRlLXRvXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coc2xpZGVOdW0pO1xuICAgICAgLy8gY29uc29sZS5sb2coJChcIi5jYXJvdXNlbC1pdGVtXCIpLmVxKHNsaWRlTnVtKSk7XG4gICAgICBpZiAoJChcIi5jYXJvdXNlbC1pdGVtXCIpLmVxKHNsaWRlTnVtKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSAhPT0gdHJ1ZSkge1xuICAgICAgICAkKFwiLmNhcm91c2VsLWl0ZW1cIilcbiAgICAgICAgICAuZXEoc2xpZGVOdW0pXG4gICAgICAgICAgLmZpbmQoXCJkaXZbZGF0YS1hb3NdXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYW9zLWFuaW1hdGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoXCIuY2Fyb3VzZWwtaXRlbVwiKVxuICAgICAgICAgICAgLmVxKHNsaWRlTnVtKVxuICAgICAgICAgICAgLmZpbmQoXCJkaXZbZGF0YS1hb3NdXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJhb3MtYW5pbWF0ZVwiKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vL+WRvOWPq2Z1bmN0aW9uLee2sumggei8ieWFpeWujOaIkOW+jFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyB0b29sc0xpc3RlbmVyKCk7XG4gIHJlYWRNb3JlKCk7XG4gIG1vZGFsVmlld01vcmUoKTtcbn0pO1xuLy/lkbzlj6tmdW5jdGlvbi3oppbnqpflpKflsI/orormm7RcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge30pO1xuLy/lkbzlj6tmdW5jdGlvbi3mjbLli5VcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICBnb1RvcFNob3coKTtcbiAgZ29Ub3BGaXhlZCgpO1xufSk7XG4iLCIvLyBpbXBvcnQgZmlsZVxuLy/ljJfljYAg5Lit5Y2AIOWNl+WNgFxuLy8gaW1wb3J0IG5vcnRoX3N0b3JlcyBmcm9tICcuL2RhdGEvbm9ydGhfc3RvcmVzLmpzJztcbi8vIGltcG9ydCBjZW50ZXJfc3RvcmVzIGZyb20gJy4vZGF0YS9jZW50ZXJfc3RvcmVzLmpzJztcbi8vIGltcG9ydCBzb3V0aF9zdG9yZXMgZnJvbSAnLi9kYXRhL3NvdXRoX3N0b3Jlcy5qcyc7XG4vL2ltcG9ydCBlYXN0X3N0b3JlcyBmcm9tICcuL2RhdGEvZWFzdF9zdG9yZXMuanMnO1xuXG5pbXBvcnQgdzFfd2lubmVycyBmcm9tICcuLi9wbHVnaW5zL2RhdGEvd2lubmVyL3cxX3dpbm5lcnMuanMnO1xuaW1wb3J0IHcyX3dpbm5lcnMgZnJvbSAnLi4vcGx1Z2lucy9kYXRhL3dpbm5lci93Ml93aW5uZXJzLmpzJztcbmltcG9ydCBmaW5hbF93aW5uZXJzIGZyb20gJy4uL3BsdWdpbnMvZGF0YS93aW5uZXIvZmluYWxfd2lubmVycy5qcyc7XG4vLyBpbXBvcnQgdzRfd2lubmVycyBmcm9tICcuL3dpbm5lci93NF93aW5uZXJzLmpzJztcbi8vIGltcG9ydCB3NV93aW5uZXJzIGZyb20gJy4vd2lubmVyL3c1X3dpbm5lcnMuanMnO1xuLy8g5q+P6YCxaW1wb3J05LiA5YCLanMgIFxuLy8gY29uc29sZS5sb2codzFfd2lubmVycyk7XG4vLyBjb25zb2xlLmxvZyhub3J0aF9zdG9yZXMpXG4vLyBjb25zb2xlLmxvZyhjZW50ZXJfc3RvcmVzKVxuLy8gY29uc29sZS5sb2coc291dGhfc3RvcmVzKVxuLy8gY29uc29sZS5sb2coZWFzdF9zdG9yZXMpXG4vL3sgaWQ6ICdlYXN0JywgbmFtZTogJ+adseWNgCcsIHN0b3JlczogZWFzdF9zdG9yZXMgfVxudmFyIHN0b3JlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKTtcbmlmIChzdG9yZUVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgdnVlID0gbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAnI2FwcCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdub3J0aCcsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdub3J0aCcsIG5hbWU6ICfljJfljYAnLCBzdG9yZXM6IG5vcnRoX3N0b3JlcyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdjZW50ZXInLCBuYW1lOiAn5Lit5Y2AJywgc3RvcmVzOiBjZW50ZXJfc3RvcmVzIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3NvdXRoJywgbmFtZTogJ+WNl+WNgCcsIHN0b3Jlczogc291dGhfc3RvcmVzIH0sXG4gICAgICAgICAgICBdLFxuXG5cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaXNBY3RpdmUobWVudUl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtID09PSBtZW51SXRlbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEFjdGl2ZShtZW51SXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG1lbnVJdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxudmFyIHdpbm5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHB3aW5cIik7XG5pZiAod2lubmVyRWwgIT09IG51bGwpIHtcbiAgICBjb25zdCB2dWUyID0gbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAnI2FwcHdpbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdpbm5lcnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogdzFfd2lubmVycy50aXRsZSwgd2lubmVyczogdzFfd2lubmVycy5kYXRhcyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiB3Ml93aW5uZXJzLnRpdGxlLCB3aW5uZXJzOiB3Ml93aW5uZXJzLmRhdGFzIH0sXG4gICAgICAgICAgICAgICAgLy8geyBpZDogMywgdGl0bGU6IHczX3dpbm5lcnMudGl0bGUsIHdpbm5lcnM6IHczX3dpbm5lcnMuZGF0YXMgfSxcbiAgICAgICAgICAgICAgICAvLyB7IGlkOiA0LCB0aXRsZTogdzRfd2lubmVycy50aXRsZSwgd2lubmVyczogdzRfd2lubmVycy5kYXRhcyB9LFxuICAgICAgICAgICAgICAgIC8vIHsgaWQ6IDQsIHRpdGxlOiB3NV93aW5uZXJzLnRpdGxlLCB3aW5uZXJzOiB3NV93aW5uZXJzLmRhdGFzIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvL+S9v+eUqOaZgu+8jOikh+ijveS4gOihjOeJqeS7tu+8muS/ruaUuWlkIOiIhyB3Mee3qOiZn+WwseWPr+S7pVxuICAgICAgICAgICAgLy8g5q+P6YCx5pS+5YWl5LiA5YCLb2JqICBcbiAgICAgICAgICAgIG9wZW5JdGVtOiAn5b6X542O5ZCN5Zau6aCQ6KiI5pa8MTHmnIgz5pel5YWs5biD77yM5pWs6KuL5pyf5b6F77yBJ1xuICAgICAgICAgICAgLy8g5q+P6YCx5pS+5YWl5LiA5YCLb2JqICAgIFxuICAgICAgICAgICAgLy8gd2lubmVyczogW1xuICAgICAgICAgICAgLy8geyBpZDogMSwgdGl0bGU6IHcxX3dpbm5lcnMudGl0bGUsIHdpbm5lcnM6IHcxX3dpbm5lcnMuZGF0YXMgfSxcbiAgICAgICAgICAgIC8vIHsgaWQ6IDIsIHRpdGxlOiB3Ml93aW5uZXJzLnRpdGxlLCB3aW5uZXJzOiB3Ml93aW5uZXJzLmRhdGFzIH0sXG4gICAgICAgICAgICAvLyB7IGlkOiAzLCB0aXRsZTogdzNfd2lubmVycy50aXRsZSwgd2lubmVyczogdzNfd2lubmVycy5kYXRhcyB9LFxuICAgICAgICAgICAgLy8gXVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBmaW5hbFdpbm5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5hbGFwcHdpblwiKTtcbmlmIChmaW5hbFdpbm5lckVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgdnVlMiA9IG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNmaW5hbGFwcHdpbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdpbm5lcnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogZmluYWxfd2lubmVycy50aXRsZSwgd2lubmVyczogZmluYWxfd2lubmVycy5kYXRhcyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8v5L2/55So5pmC77yM6KSH6KO95LiA6KGM54mp5Lu277ya5L+u5pS5aWQg6IiHIHcx57eo6Jmf5bCx5Y+v5LulXG4gICAgICAgICAgICAvLyDmr4/pgLHmlL7lhaXkuIDlgItvYmogIFxuICAgICAgICAgICAgb3Blbkl0ZW06ICflvpfnjY7lkI3llq7poJDoqIjmlrwxMeaciDPml6XlhazluIPvvIzmlazoq4vmnJ/lvoXvvIEnXG4gICAgICAgICAgICAvLyDmr4/pgLHmlL7lhaXkuIDlgItvYmogICAgXG4gICAgICAgICAgICAvLyB3aW5uZXJzOiBbXG4gICAgICAgICAgICAvLyB7IGlkOiAxLCB0aXRsZTogdzFfd2lubmVycy50aXRsZSwgd2lubmVyczogdzFfd2lubmVycy5kYXRhcyB9LFxuICAgICAgICAgICAgLy8geyBpZDogMiwgdGl0bGU6IHcyX3dpbm5lcnMudGl0bGUsIHdpbm5lcnM6IHcyX3dpbm5lcnMuZGF0YXMgfSxcbiAgICAgICAgICAgIC8vIHsgaWQ6IDMsIHRpdGxlOiB3M193aW5uZXJzLnRpdGxlLCB3aW5uZXJzOiB3M193aW5uZXJzLmRhdGFzIH0sXG4gICAgICAgICAgICAvLyBdXG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJjb25zdCBmaW5hbF93aW5uZXJzID0ge1xuICBcInRpdGxlXCI6IFwi5oGt5Zac5Lul5LiL5b6X542O6ICF542y5b6XXCIsXG4gIFwiZGF0YXNcIjogW1xuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi5p6XeOaahFwiLFxuICAgICBcInRlbFwiOiBcIjA5MzgteHh4LTY2OVwiLFxuICAgICBcImVtYWlsXCI6IFwid2lueHh4QGtpbW8uY29tXCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi6KSaeOebiFwiLFxuICAgICBcInRlbFwiOiBcIjA5ODkteHh4LTUxMVwiLFxuICAgICBcImVtYWlsXCI6IFwieW9obzg0eHh4QHlhaG9vLmNvbS50d1wiXG4gICAgfSxcbiAgICB7XG4gICAgIFwibmFtZVwiOiBcIuiOinjlqbdcIixcbiAgICAgXCJ0ZWxcIjogXCIwOTM2LXh4eC05MzZcIixcbiAgICAgXCJlbWFpbFwiOiBcImxhdXJhMjF4eHhAaG90bWFpbC5jb21cIlxuICAgIH0sXG4gICAge1xuICAgICBcIm5hbWVcIjogXCLog6F45LqRXCIsXG4gICAgIFwidGVsXCI6IFwiMDk2OC14eHgtMzk5XCIsXG4gICAgIFwiZW1haWxcIjogXCJoeWoyMDQxNjh4eHhAZ21haWwuY29tXCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi5qWKeOWql1wiLFxuICAgICBcInRlbFwiOiBcIjA5NTgteHh4LTc3M1wiLFxuICAgICBcImVtYWlsXCI6IFwicHVibW9zMXh4eEBnbWFpbC5jb21cIlxuICAgIH0sXG4gICAge1xuICAgICBcIm5hbWVcIjogXCLmpYp46IuTXCIsXG4gICAgIFwidGVsXCI6IFwiMDk3OC14eHgtMDYxXCIsXG4gICAgIFwiZW1haWxcIjogXCJsaW5nMTk4NDB4eHhAZ21haWwuY29tXCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi5p6XeOWpt1wiLFxuICAgICBcInRlbFwiOiBcIjA5MTIteHh4LTg1MVwiLFxuICAgICBcImVtYWlsXCI6IFwibGVzMDEwMzB4eHhAZ21haWwuY29tXCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi6ZmzeOirrVwiLFxuICAgICBcInRlbFwiOiBcIjA5ODUteHh4LTk3OVwiLFxuICAgICBcImVtYWlsXCI6IFwieDk1MHh4eEBnbWFpbC5jb21cIlxuICAgIH0sXG4gICAge1xuICAgICBcIm5hbWVcIjogXCLolpt46IqzXCIsXG4gICAgIFwidGVsXCI6IFwiMDkxMS14eHgtMTI1XCIsXG4gICAgIFwiZW1haWxcIjogXCJzaGVsbHk4ODF4eHhAZ21haWwuY29tXCJcbiAgICB9LFxuICAgIHtcbiAgICAgXCJuYW1lXCI6IFwi5rSqeOWnjVwiLFxuICAgICBcInRlbFwiOiBcIjA5NzgteHh4LTg1OFwiLFxuICAgICBcImVtYWlsXCI6IFwic2FtbWlodW5nMHh4eEBnbWFpbC5jb21cIlxuICAgIH1cbiAgIF1cbn07XG5leHBvcnQgZGVmYXVsdCBmaW5hbF93aW5uZXJzO1xuIiwiY29uc3QgdzFfd2lubmVycyA9IHtcbiAgICBcInRpdGxlXCI6IFwi56ys5LiA5om5IOWFpemBuOWQjeWWrlwiLFxuICAgIFwiZGF0YXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnjot45oWnXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NTgteHh4LTYwOFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImZieHh4ODhAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6KKBeOeSmFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTcwLXh4eC0xMDJcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJsb3h4eGlmZXl1YW5AZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6auYeFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTgzLXh4eC0xMjFcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJrYXh4eDk5QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIumCsXjmt7NcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3My14eHgtODI2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiY2l4eHgxMjM4NjU0QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIueOi3jojLVcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkzMC14eHgtNzA3XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiYXl4eHg3OTA3MTlAaG90bWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpg6146ZuvXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NjMteHh4LTk0MlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcIkxpeHh4MjI1QGhvdG1haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6ZmzeOWmglwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTIxLXh4eC03NzZcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJ6enh4eHp6NjhAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5qWKeOaZqFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTE4LXh4eC0yMjVcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJLbHh4eGVsZWlsZWlAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5ZCzeOa4nSBcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxNy14eHgtMzM2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibjV4eHg2QHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuiosXhcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkyMi14eHgtMTg2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibWl4eHhzdTMyMUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmnpd4562RXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTYteHh4LTg2NlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImwweHh4NzQ1ODY2QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuW8tXjntq1cIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkyMi14eHgtMTk4XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiNTF4eHgwQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIumCsXjoirNcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk2My14eHgtNzM1XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiU2N4eHg2M0Bob3RtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuabvnjoj69cIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3MC14eHgtOTYzXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibWl4eHg5OTdtYWtldXBAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5ZCzeOeOq1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTEyLXh4eC02MzlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJzaHh4eHltZWlAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5p2OeOWEklwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTcwLXh4eC01MjhcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJhYXh4eDI4dHc5M0BnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpmbN45p+UXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5ODEteHh4LTgwN1wiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInl1eHh4ODgxMDE4QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIumCsXjnkZxcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk4OS14eHgtMDkxXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibW14eHg4ODNAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5by1eOiPgVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTc4LXh4eC0xMTdcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJyYXh4eHQxOTk3OTIzQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuadjnjmhadcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkzMS14eHgtOTA0XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwia3d4eHg3OUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmnpd46IqvXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTIteHh4LTkwMVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImFseHh4MjFMMjMzNUB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnjot45pm0XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NzYteHh4LTU0MFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImVfeHh4MzI1MkB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnvoV45YehXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTMteHh4LTMxNVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImlseHh4ODUwODE3QHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuW7lnjkvLZcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkyMi14eHgtOTgxXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibWl4eHh1bW1lbEBob3RtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuWQs3jlpq5cIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk4NS14eHgtOTQ5XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwid3V4eHhueXN1bm55QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIua0qnjlp41cIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3OC14eHgtODU4XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwic2F4eHhodW5nMDMyMEBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpmbN456W6XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MjYteHh4LTk4NlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImI3eHh4MTdAaG90bWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLlkLN46aCkXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTkteHh4LTQyOVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcIkNseHh4OTE5QGxpZmUuZnVib24uY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6auYeOeOslwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTE2LXh4eC0xMzhcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJtYXh4eDMzQHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuael3jmmoRcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkzOC14eHgtNjY5XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwid2l4eHg0QGtpbW8uY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5Y+keOmdiFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTg1LXh4eC02MDRcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJsbHh4eDUyMDAwdHdAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5p+veOePilwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTIwLXh4eC0yMThcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJrb3h4eGhhbkBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpmbN4XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTYteHh4LTQyOVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImp1eHh4MDUyN0B5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpmbN45a62XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTYteHh4LTI5MlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImN5eHh4ODgwMTkxMjA4QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIumZs3jnkZxcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxNy14eHgtMjkwXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiNTh4eHhsaWxpQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuael3jlhJJcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkwOS14eHgtMDc3XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwibG94eHhuZTE5MTEwMUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnjot45oWnXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NjEteHh4LTAxOVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImxveHh4dWNrMDMxMUB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLolpt46IqzXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTEteHh4LTEyNVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInNoeHh4eTg4MTIyNUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnvoV45rK7XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MzMteHh4LTA3MlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInNteHh4NzYxMjE0QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuW8tXjlr6dcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3OS14eHgtNTg4XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiY3J4eHhpamF5Y2FAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6buDeOWAqVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTY1LXh4eC00MjVcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJqZXh4eDkwMDcyMkBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmnY5457WoXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NjgteHh4LTg5OFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImtpeHh4NzEwMjhAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5rSqeOWqm1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTA4LXh4eC04MjlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJlcnh4eDA4MjlAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6KydeOWEklwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTEwLXh4eC05MzFcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJtb3h4eDUwMjEubWhAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6buDeOamlVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTM3LXh4eC0zNjRcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJsYXh4eDc2MDMwNUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLolKF455CmXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MDUteHh4LTU4OVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImJleHh4eWNvcm5lci5jaGljaGlAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5q2QeOecn1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTgxLXh4eC0zODdcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJwZXh4eGVub3UwNzI4QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuadjnjmn5QgXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NjgteHh4LTI1OFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImV2eHh4ZTExMTRAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6YSteOe2ulwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTY4LXh4eC0zMzJcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJjaHh4eHk1MjU4ODhAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6buDeOmbr1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTI4LXh4eC0wOTNcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJjdXh4eDMwODExMjAxMkBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmsap46ZuvXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MDAteHh4LTMwM1wiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcIm9ueHh4ZXl3ZW4xMjNAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5buWeOaWh1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTE3LXh4eC0xMzFcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJtb3h4eGF0NDI0QHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuadjnjlqbcgXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NzYteHh4LTAyMFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImlzeHh4MDUyMDQzYUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLlkLN455KHXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5ODcteHh4LTYyNVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImFueHh4bnd1dHdAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5qWKeOetkVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTY4LXh4eC0yNDRcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJhbHh4eDExMDQwMzI1QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIua0qnjpm4VcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkwNS14eHgtODY2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiaGd4eHhlODY4QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIummrnjpm69cIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxOC14eHgtNjYwXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiZGl4eHg1MkB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLlvLV45a+nXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MzAteHh4LTY0MlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImlzeHh4MzgyQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuadjnjlgKtcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk1My14eHgtMTI2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiZWx4eHg5MTIwNkBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLllJB45aqcXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5NzgteHh4LTI4N1wiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImFieHh4MzMwQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuiOinjmn5RcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3Mi14eHgtNDU2XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwidml4eHhuODIwM0B5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpmbN45oChXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5ODkteHh4LTU2NlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImlueHh4dF9sb3ZlXzIzQHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuW7lnjokLFcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3NS14eHgtMjc3XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiZnR4eHgxMTY1NTQyQHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuS9lXjnt4tcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk1My14eHgtMjEyXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiUGl4eHhlaTAyMTJAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6IOheOS6kVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTY4LXh4eC0zOTlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJoeXh4eDQxNjgxNjFAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5Y+keHjlubjlrZBcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3Ni14eHgtNjA4XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiYW14eHg3MjRAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5ZGoeOWdh1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTE5LXh4eC0yODVcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJhYXh4eGl0dGFhNzA3MDJAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5by1eOa2tVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTM0LXh4eC00NjJcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJ2ZXh4eGJhbGxldEBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLliol455GEXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTIteHh4LTE0OVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImFueHh4YTk5MzE5QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIueOi3jlqbdcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkwOC14eHgtMzcyXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiY294eHh1dGNvc21ldGljczIwMjJAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5ZGCeOiKuFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTAzLXh4eC0xMThcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJiMnh4eDQzNTlAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5p2OeOaFiFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTgzLXh4eC0wMDdcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJsaXh4eG1ha2V1cDcxQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIumCsXjmmbRcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3OC14eHgtMTk5XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiaXZ4eHg0MjI1MzM2QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIueOi3jnkKpcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk3Mi14eHgtODIxXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiZ2F4eHhAbGl2ZW1haWwudHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLnvoV45a6cXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MzIteHh4LTcxNVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImV2eHh4bmExOTk1MDIwNEBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmnpd45am3XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTIteHh4LTg1MVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImxleHh4MDMwOTE1QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuijmHjlqpdcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxMC14eHgtMjEyXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwicWF4eHhsQG91dGxvb2suY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5YKFeOmbr1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTg4LXh4eC03NTNcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJjOHh4eDc4QGhvdG1haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6aWSeOW9pFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTc2LXh4eC05MjhcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJzYXh4eG5pbmExMzE1QGdtYWlsLmNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpg6146I+hXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5ODgteHh4LTQ4NlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImJleHh4NDA0Mjc4OEB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpl5x46JSaXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MjIteHh4LTA1NFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInNzeHh4MTZ6ekB5YWhvby5jb20udHdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLpu4N46Iy1XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5ODgteHh4LTY3MFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImxpeHh4YW44MTE2QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIualinjlqpdcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDk1OC14eHgtNzczXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwicHV4eHhzMTExMEBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmnpd45qyjXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MjEteHh4LTc5OVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcIm1meHh4OTdAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6ZmzeOirrVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTg1LXh4eC05NzlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJ4OXh4eDcxQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuael3joj68gXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MjIteHh4LTUyNlwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImRkeHh4aXRtdGpAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi576FeOaso1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTMzLXh4eC0xNTJcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJyZXh4eDA4MUBnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLmlrl45pm0XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MTIteHh4LTMyN1wiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcImNoeHh4MTIyN0BnbWFpbC5jb21cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcIm5hbWVcIjogXCLog6F45Lu7XCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MzkteHh4LTgyNVwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInhjeHh4Mzg4QHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuS6jnjmt7NcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxMi14eHgtMjg5XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiYWx4eHgwMjI3QGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuabvnjnkLQgXCIsXG4gICAgICAgICBcInRlbFwiOiBcIjA5MzMteHh4LTkyNFwiLFxuICAgICAgICAgXCJlbWFpbFwiOiBcInMweHh4MDk4OTE3MjdAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi55yteOeRqVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTgzLXh4eC0wNDFcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJraXh4eG9ybzA5MDFAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5aSPeOiQsVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTcyLXh4eC03OTlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJyYXh4eGFpbjI4MDExQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuiosXjmtrVcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkzOC14eHgtNDkxXCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiY2F4eHgyMDA3Y2RAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5ZCzeOWYiVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTIwLXh4eC02OTlcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJ0b3h4eDExMDAyQHlhaG9vLmNvbS50d1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIuafpXjmgalcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkxOS14eHgtODc4XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwiamV4eHhmcmVlNzI1QGhvdG1haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6KSaeOebiFwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTg5LXh4eC01MTFcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJ5b3h4eDQ0MjdAeWFob28uY29tLnR3XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi6YOteOiJr1wiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTU4LXh4eC02ODVcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJreXh4eDVAZ21haWwuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgXCJuYW1lXCI6IFwi5by1eOaWuVwiLFxuICAgICAgICAgXCJ0ZWxcIjogXCIwOTM0LXh4eC03MjZcIixcbiAgICAgICAgIFwiZW1haWxcIjogXCJtaXh4eGljb2xlQGdtYWlsLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwibmFtZVwiOiBcIueOi3jnkalcIixcbiAgICAgICAgIFwidGVsXCI6IFwiMDkzNi14eHgtMTY3XCIsXG4gICAgICAgICBcImVtYWlsXCI6IFwidml4eHgwMjIwMkBpY2xvdWQuY29tXCJcbiAgICAgICAgfVxuICAgICAgIF1cbn07IFxuZXhwb3J0IGRlZmF1bHQgdzFfd2lubmVycyIsImNvbnN0IHcyX3dpbm5lcnMgPSB7XG4gIFwidGl0bGVcIjogXCLnrKzkuozmibkg5YWl6YG45ZCN5ZauXCIsXG4gIFwiZGF0YXNcIjogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi546LeOiVjlwiLFxuICAgICAgdGVsOiBcIjA5MTAteHh4LTYxMVwiLFxuICAgICAgZW1haWw6IFwiYTB4eHg2MzU2MTFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuabuXjojLlcIixcbiAgICAgIHRlbDogXCIwOTI4LXh4eC0yMTNcIixcbiAgICAgIGVtYWlsOiBcImFueHh4OTc1MjFAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIum7g3jmlodcIixcbiAgICAgIHRlbDogXCIwOTYxLXh4eC03MDhcIixcbiAgICAgIGVtYWlsOiBcImNoeHh4MTk5OXNAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiigXjnkphcIixcbiAgICAgIHRlbDogXCIwOTcwLXh4eC0xMDJcIixcbiAgICAgIGVtYWlsOiBcImxveHh4aWZleXVhbkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6JiHeOiQsVwiLFxuICAgICAgdGVsOiBcIjA5NzYteHh4LTM1NlwiLFxuICAgICAgZW1haWw6IFwid2V4eHg2NTc5QGtpbW8uY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIiDlr4d46IqzXCIsXG4gICAgICB0ZWw6IFwiMDk4Ny14eHgtNzk4XCIsXG4gICAgICBlbWFpbDogXCJhYXh4eDI1Y3V0ZUB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi546LeOiWh1wiLFxuICAgICAgdGVsOiBcIjA5ODYteHh4LTYwOVwiLFxuICAgICAgZW1haWw6IFwiYTd4eHgxMDFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWKiXjnkYBcIixcbiAgICAgIHRlbDogXCIwOTczLXh4eC02NzVcIixcbiAgICAgIGVtYWlsOiBcIm1heHh4bmFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiUoXjnj4pcIixcbiAgICAgIHRlbDogXCIwOTc4LXh4eC04NjFcIixcbiAgICAgIGVtYWlsOiBcInBjeHh4NTAzQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLoqbl46Z+7XCIsXG4gICAgICB0ZWw6IFwiMDkzMC14eHgtODE3XCIsXG4gICAgICBlbWFpbDogXCJzdXh4eHJfdGlsZUBob3RtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmsoh46KutXCIsXG4gICAgICB0ZWw6IFwiMDkwMi14eHgtNjY5XCIsXG4gICAgICBlbWFpbDogXCI0MHh4eDEwNTVAZ21zLnRrdS5lZHUudHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5by1eOW9pFwiLFxuICAgICAgdGVsOiBcIjA5MTcteHh4LTIzNVwiLFxuICAgICAgZW1haWw6IFwiQmx4eHh1bkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6K2aeOe/jlwiLFxuICAgICAgdGVsOiBcIjA5ODgteHh4LTYwNlwiLFxuICAgICAgZW1haWw6IFwic3R4eHg2NDAwMDAwQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLola146K2vXCIsXG4gICAgICB0ZWw6IFwiMDk3NS14eHgtNDcyXCIsXG4gICAgICBlbWFpbDogXCJDZXh4Lnhsb2dnZXIwOUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6buDeOiRs1wiLFxuICAgICAgdGVsOiBcIjA5NTUteHh4LTEyOFwiLFxuICAgICAgZW1haWw6IFwic3R4eHhudDk2MzEwMzJAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuael3joi7FcIixcbiAgICAgIHRlbDogXCIwOTM5LXh4eC02OTZcIixcbiAgICAgIGVtYWlsOiBcImEweHh4MTE4NDI2QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ45oOgXCIsXG4gICAgICB0ZWw6IFwiMDkzMy14eHgtNDY0XCIsXG4gICAgICBlbWFpbDogXCJtYXh4eG9mZmVlMTIzZzFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIueOi3jnv4pcIixcbiAgICAgIHRlbDogXCIwOTA2LXh4eC0wMzRcIixcbiAgICAgIGVtYWlsOiBcIndheHh4b255YTAxMjVAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIueOi3jpm69cIixcbiAgICAgIHRlbDogXCIwOTUyLXh4eC0zMTJcIixcbiAgICAgIGVtYWlsOiBcImNheHh4bmExOTkzMDgyMUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6aGPeOiLk1wiLFxuICAgICAgdGVsOiBcIjA5MjEteHh4LTQzOVwiLFxuICAgICAgZW1haWw6IFwiamF4eHhuMTIzMUBpY2xvdWQuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuS9lXjmr4VcIixcbiAgICAgIHRlbDogXCIwOTgzLXh4eC0xMDFcIixcbiAgICAgIGVtYWlsOiBcImUweHh4MzE2MDUwQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpmbN45oChXCIsXG4gICAgICB0ZWw6IFwiMDkxNi14eHgtOTgzXCIsXG4gICAgICBlbWFpbDogXCJjaHh4eHFsQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmpYp45ra1XCIsXG4gICAgICB0ZWw6IFwiMDkyNi14eHgtNTIwXCIsXG4gICAgICBlbWFpbDogXCJzdHh4eDA0MzNAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuavm3jmrKNcIixcbiAgICAgIHRlbDogXCIwOTA5LXh4eC03ODBcIixcbiAgICAgIGVtYWlsOiBcInMxeHh4MDE2NkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6Y2+eOiQsVwiLFxuICAgICAgdGVsOiBcIjA5MjYteHh4LTAwNlwiLFxuICAgICAgZW1haWw6IFwibGl4eHhlNzIyNzkzN0BnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5YqJeOWQm1wiLFxuICAgICAgdGVsOiBcIjA5MDUteHh4LTk5NlwiLFxuICAgICAgZW1haWw6IFwic3l4eHhhbGl1dGFpd2FuQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnY545YCiXCIsXG4gICAgICB0ZWw6IFwiMDkyNS14eHgtNzA3XCIsXG4gICAgICBlbWFpbDogXCJ3ZXh4eGUwMzEwQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnY546ZuvXCIsXG4gICAgICB0ZWw6IFwiMDk4OC14eHgtMzAxXCIsXG4gICAgICBlbWFpbDogXCJ3ZXh4eDI1QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpmbN45am3XCIsXG4gICAgICB0ZWw6IFwiMDkxMC14eHgtNDYyXCIsXG4gICAgICBlbWFpbDogXCJtb3h4QGN0dGFwZS5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi57CheOiHu1wiLFxuICAgICAgdGVsOiBcIjA5MTAteHh4LTQ3MlwiLFxuICAgICAgZW1haWw6IFwic3V4eHhzZTA5MTAzNDI0NzJAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWnmnjoirhcIixcbiAgICAgIHRlbDogXCIwOTM0LXh4eC01MjVcIixcbiAgICAgIGVtYWlsOiBcImlheHh4bmcxMDlAaG90bWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5by1eOexs1wiLFxuICAgICAgdGVsOiBcIjA5MTYteHh4LTQyOFwiLFxuICAgICAgZW1haWw6IFwiSm14eHgxMTExQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLnjot455CzXCIsXG4gICAgICB0ZWw6IFwiMDkzOC14eHgtNDIyXCIsXG4gICAgICBlbWFpbDogXCJmaXh4eDg0MjJAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuipuXjmuYRcIixcbiAgICAgIHRlbDogXCIwOTEwLXh4eC05NzNcIixcbiAgICAgIGVtYWlsOiBcInB1eHh4ZXBpZzMyMUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5YqJeOmbr1wiLFxuICAgICAgdGVsOiBcIjA5MjUteHh4LTk5NVwiLFxuICAgICAgZW1haWw6IFwieXd4eHgyMjZpcGhvbmVAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWQs3joiqxcIixcbiAgICAgIHRlbDogXCIwOTc2LXh4eC0yMTNcIixcbiAgICAgIGVtYWlsOiBcInNteHh4a2lkMDVAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWKiXjlrpxcIixcbiAgICAgIHRlbDogXCIwOTI1LXh4eC04MjJcIixcbiAgICAgIGVtYWlsOiBcImppeHh4NDkzM0BnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6JSjeOWuh1wiLFxuICAgICAgdGVsOiBcIjA5NzAteHh4LTc5OFwiLFxuICAgICAgZW1haWw6IFwieXV4eHg2Nzk4QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLolKF456mOXCIsXG4gICAgICB0ZWw6IFwiMDkzNS14eHgtMTgwXCIsXG4gICAgICBlbWFpbDogXCJzOXh4eDA0OEBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6ZmzeFwiLFxuICAgICAgdGVsOiBcIjA5NTgteHh4LTE3NlwiLFxuICAgICAgZW1haWw6IFwibmF4eHhwb2NrZXR0QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpu4N45LqtXCIsXG4gICAgICB0ZWw6IFwiMDk3NS14eHgtNTEyXCIsXG4gICAgICBlbWFpbDogXCJzaHh4eGluZzMyMkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6YKxeOWplVwiLFxuICAgICAgdGVsOiBcIjA5NzkteHh4LTI5OVwiLFxuICAgICAgZW1haWw6IFwiYTV4eHg0LjQ1NjQ4NzRAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuW8tXjkupEgXCIsXG4gICAgICB0ZWw6IFwiMDk3Ni14eHgtODIwXCIsXG4gICAgICBlbWFpbDogXCJjdXh4eGFveWFvMDgyNDFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIumZs3jmn5RcIixcbiAgICAgIHRlbDogXCIwOTgxLXh4eC04MDdcIixcbiAgICAgIGVtYWlsOiBcInl1eHh4ODgxMDE4QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLliol46Ie7XCIsXG4gICAgICB0ZWw6IFwiMDk3OC14eHgtOTE1XCIsXG4gICAgICBlbWFpbDogXCJ2OXh4eDMyNUB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6I6KeOWmpFwiLFxuICAgICAgdGVsOiBcIjA5MjgteHh4LTk3N1wiLFxuICAgICAgZW1haWw6IFwibGl4eHgwMDEyNkB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5qWKeOa9lFwiLFxuICAgICAgdGVsOiBcIjA5MzgteHh4LTk2OFwiLFxuICAgICAgZW1haWw6IFwieTB4eHgzMzQ5NjhAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIumCsXjnkZxcIixcbiAgICAgIHRlbDogXCIwOTg5LXh4eC0wOTFcIixcbiAgICAgIGVtYWlsOiBcIm1teHh4ODgzQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLoirF46bS7XCIsXG4gICAgICB0ZWw6IFwiMDk4MS14eHgtMzU5XCIsXG4gICAgICBlbWFpbDogXCJzYWx4eHhhd0B5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p6XeOWmpFwiLFxuICAgICAgdGVsOiBcIjA5NzAteHh4LTMyMlwiLFxuICAgICAgZW1haWw6IFwiYTB4eHgzOTYzMjJAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuabvnjluq1cIixcbiAgICAgIHRlbDogXCIwOTA4LXh4eC02MjZcIixcbiAgICAgIGVtYWlsOiBcIjg2eHh4NnNoQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLlp5p45aeuXCIsXG4gICAgICB0ZWw6IFwiMDk1OC14eHgtMzAzXCIsXG4gICAgICBlbWFpbDogXCJjNXh4eDFAaG90bWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6YSneOaDoFwiLFxuICAgICAgdGVsOiBcIjA5ODYteHh4LTcyMlwiLFxuICAgICAgZW1haWw6IFwieXV4eHg3MDIyMkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6JSjeOaFp1wiLFxuICAgICAgdGVsOiBcIjA5MDMteHh4LTkwOFwiLFxuICAgICAgZW1haWw6IFwidHJ4eHgxMTI0MzhAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIue+hXjpj7VcIixcbiAgICAgIHRlbDogXCIwOTc3LXh4eC0yNzlcIixcbiAgICAgIGVtYWlsOiBcImhheHh4MjQ1N0BnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6ZmzeOeSh1wiLFxuICAgICAgdGVsOiBcIjA5MzYteHh4LTExN1wiLFxuICAgICAgZW1haWw6IFwiYW54eHgxOTk3MDUyOUB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p2OeOWpt1wiLFxuICAgICAgdGVsOiBcIjA5NTYteHh4LTY2M1wiLFxuICAgICAgZW1haWw6IFwiYTB4eHg4OTc2NjNAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiYh3jlqbdcIixcbiAgICAgIHRlbDogXCIwOTc1LXh4eC04MDZcIixcbiAgICAgIGVtYWlsOiBcInRpeHh4OTk2NzI0NDVAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWQs3jnkodcIixcbiAgICAgIHRlbDogXCIwOTM4LXh4eC00MTBcIixcbiAgICAgIGVtYWlsOiBcInl1eHh4dTY4OUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p6XeOa3h1wiLFxuICAgICAgdGVsOiBcIjA5NzAteHh4LTY0M1wiLFxuICAgICAgZW1haWw6IFwiR3J4eHhsaW44OTExMTA3QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpmbN45rezXCIsXG4gICAgICB0ZWw6IFwiMDkwOS14eHgtNjA5XCIsXG4gICAgICBlbWFpbDogXCJrdXh4eGh1bmNoZW4wNzI4QHlhaG9vLmNvLmpwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiosXjmt4dcIixcbiAgICAgIHRlbDogXCIwOTI4LXh4eC03MDFcIixcbiAgICAgIGVtYWlsOiBcIkh5eHh4MDIxMzE0QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLlvpB45Ly2XCIsXG4gICAgICB0ZWw6IFwiMDk3Mi14eHgtNzIyXCIsXG4gICAgICBlbWFpbDogXCJwZXh4eGN0NjUyNUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p6XeOiTiVwiLFxuICAgICAgdGVsOiBcIjA5MDMteHh4LTM4M1wiLFxuICAgICAgZW1haWw6IFwibGl4eHhyb25nMTAzMDUxN0BnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p6XeOS6rVwiLFxuICAgICAgdGVsOiBcIjA5ODIteHh4LTUyMlwiLFxuICAgICAgZW1haWw6IFwiYm94eHh1c2lAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuadjnjoh7tcIixcbiAgICAgIHRlbDogXCIwOTg0LXh4eC0xNzlcIixcbiAgICAgIGVtYWlsOiBcImFheHh4Y2QzMTcxOEBnbWFpbC5jb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5L2VeOmgu1wiLFxuICAgICAgdGVsOiBcIjA5MzAteHh4LTMzNlwiLFxuICAgICAgZW1haWw6IFwiaGV4eHhwaW5AZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWQs3jlgKlcIixcbiAgICAgIHRlbDogXCIwOTM2LXh4eC0zOTVcIixcbiAgICAgIGVtYWlsOiBcImNheHh4MDUyNzczQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnY5455CqXCIsXG4gICAgICB0ZWw6IFwiMDk3OC14eHgtMjc2XCIsXG4gICAgICBlbWFpbDogXCJvLm94eHg3NzdAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIumZs3joh7tcIixcbiAgICAgIHRlbDogXCIwOTEwLXh4eC0wMTdcIixcbiAgICAgIGVtYWlsOiBcInlpeHh4bkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6buDeOe2ulwiLFxuICAgICAgdGVsOiBcIjA5MzEteHh4LTMyMVwiLFxuICAgICAgZW1haWw6IFwiZG94eHg1MjcyMDAwQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnLF45YSAXCIsXG4gICAgICB0ZWw6IFwiMDkyNy14eHgtODE4XCIsXG4gICAgICBlbWFpbDogXCJnOXh4eDE5N3NAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuiDoXjlqbdcIixcbiAgICAgIHRlbDogXCIwOTg4LXh4eC02MjlcIixcbiAgICAgIGVtYWlsOiBcInNhbHh4eHUwOTEzQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnpd45r2UXCIsXG4gICAgICB0ZWw6IFwiMDkyNi14eHgtMTEwXCIsXG4gICAgICBlbWFpbDogXCJhdXh4eGE4OTA3MzRAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIueOi3hcIixcbiAgICAgIHRlbDogXCIwOTg4LXh4eC00MTdcIixcbiAgICAgIGVtYWlsOiBcImZyeHh4MDkxNjEzQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpmbN46ZyPXCIsXG4gICAgICB0ZWw6IFwiMDkxMS14eHgtNzgyXCIsXG4gICAgICBlbWFpbDogXCJkd3h4eC5peXJlQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpu4N45YCpXCIsXG4gICAgICB0ZWw6IFwiMDk2NS14eHgtNDI1XCIsXG4gICAgICBlbWFpbDogXCJqZXh4eDkwMDcyMkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6Z+TeOeRhFwiLFxuICAgICAgdGVsOiBcIjA5NzgteHh4LTI4OFwiLFxuICAgICAgZW1haWw6IFwiYTh4eHgxMUB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5rmveOW/g1wiLFxuICAgICAgdGVsOiBcIjA5MDgteHh4LTY1OFwiLFxuICAgICAgZW1haWw6IFwiczB4eHgyODgwOThAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIumCsXjoirhcIixcbiAgICAgIHRlbDogXCIwOTEzLXh4eC0zMDlcIixcbiAgICAgIGVtYWlsOiBcInIzeHh4NDEwNjExQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnpd45pqEXCIsXG4gICAgICB0ZWw6IFwiMDkzOC14eHgtNjY5XCIsXG4gICAgICBlbWFpbDogXCJ3aXh4eDRAa2ltby5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6auYeOeOslwiLFxuICAgICAgdGVsOiBcIjA5MTYteHh4LTEzOFwiLFxuICAgICAgZW1haWw6IFwibWF4eHgzM0B5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi546LeOiMuVwiLFxuICAgICAgdGVsOiBcIjA5NTgteHh4LTEwN1wiLFxuICAgICAgZW1haWw6IFwibHV4eHhzb3lvQGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpmbN456eAXCIsXG4gICAgICB0ZWw6IFwiMDkxOC14eHgtNjE0XCIsXG4gICAgICBlbWFpbDogXCJhbnh4eGJlbGlldmU2MTRAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWPpHjpnYhcIixcbiAgICAgIHRlbDogXCIwOTg1LXh4eC02MDRcIixcbiAgICAgIGVtYWlsOiBcImxseHh4NTIwMDB0d0B5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6buDeOaAoVwiLFxuICAgICAgdGVsOiBcIjA5MDYteHh4LTYzM1wiLFxuICAgICAgZW1haWw6IFwiYWR4eHgxMjA2QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLpjb546KyZXCIsXG4gICAgICB0ZWw6IFwiMDkzMy14eHgtODUxXCIsXG4gICAgICBlbWFpbDogXCIwM3h4eGlhbkBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5ri4eOaWsFwiLFxuICAgICAgdGVsOiBcIjA5NzkteHh4LTY2OFwiLFxuICAgICAgZW1haWw6IFwieXV4eHg4MTFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIum7g3jokI1cIixcbiAgICAgIHRlbDogXCIwOTczLXh4eC0yMTVcIixcbiAgICAgIGVtYWlsOiBcImlseHh4dG9zaGFyZTc3QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLmnY546Z2cXCIsXG4gICAgICB0ZWw6IFwiMDkzNC14eHgtODM2XCIsXG4gICAgICBlbWFpbDogXCJtYXh4eDE5ODkxMDI2QGdtYWlsLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLlvLV46Z2cXCIsXG4gICAgICB0ZWw6IFwiMDkyMS14eHgtMjE3XCIsXG4gICAgICBlbWFpbDogXCJkb3h4eG9mYXNvbGxhc2k2MDIzMEB5YWhvby5jb20udHdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5YqJeOWunFwiLFxuICAgICAgdGVsOiBcIjA5NzkteHh4LTUxOVwiLFxuICAgICAgZW1haWw6IFwiQTB4eHgxMzM1MTlAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuael3jlhJJcIixcbiAgICAgIHRlbDogXCIwOTA5LXh4eC0wNzdcIixcbiAgICAgIGVtYWlsOiBcImxveHh4bmUxOTExMDFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuael3jlpo1cIixcbiAgICAgIHRlbDogXCIwOTM2LXh4eC0yMzZcIixcbiAgICAgIGVtYWlsOiBcInE4eHh4Nzk2NUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5p6XeOW6rVwiLFxuICAgICAgdGVsOiBcIjA5NjYteHh4LTMyOVwiLFxuICAgICAgZW1haWw6IFwiZ2l4eHg3OTcxOTNAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuW8tXjlv4NcIixcbiAgICAgIHRlbDogXCIwOTA3LXh4eC05NTFcIixcbiAgICAgIGVtYWlsOiBcImVueHh4MTEzMDMxNUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6YOteOWEklwiLFxuICAgICAgdGVsOiBcIjA5MjEteHh4LTU5MlwiLFxuICAgICAgZW1haWw6IFwiYTB4eHgyMjU1OTJAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuael3jkvINcIixcbiAgICAgIHRlbDogXCIwOTc1LXh4eC05NjFcIixcbiAgICAgIGVtYWlsOiBcImE3eHh4M3doeUBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5rKIeOeruVwiLFxuICAgICAgdGVsOiBcIjA5MTEteHh4LTYyN1wiLFxuICAgICAgZW1haWw6IFwiMDl4eHg1MzYyN3dAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuWQs3jnqY5cIixcbiAgICAgIHRlbDogXCIwOTU1LXh4eC0wNDNcIixcbiAgICAgIGVtYWlsOiBcIkVpeHh4bjkwMDMxMzRAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuaWvXjppqhcIixcbiAgICAgIHRlbDogXCIwOTIwLXh4eC0wODBcIixcbiAgICAgIGVtYWlsOiBcInd1eHh4bjQxOTBAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIum7g3jmvZRcIixcbiAgICAgIHRlbDogXCIwOTMyLXh4eC05NThcIixcbiAgICAgIGVtYWlsOiBcImhleHh4NzEwMTRAeWFob28uY29tLnR3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuS9lXjntrpcIixcbiAgICAgIHRlbDogXCIwOTgxLXh4eC05NzhcIixcbiAgICAgIGVtYWlsOiBcInNheHh4YTEyMzIwMDFAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIuW7lnjnkLNcIixcbiAgICAgIHRlbDogXCIwOTIxLXh4eC0zMTVcIixcbiAgICAgIGVtYWlsOiBcInNoeHh4cG92b2JAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIualinjoi5NcIixcbiAgICAgIHRlbDogXCIwOTc4LXh4eC0wNjFcIixcbiAgICAgIGVtYWlsOiBcImxpeHh4OTg0MDExOEBnbWFpbC5jb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi6ZmzeOeSh1wiLFxuICAgICAgdGVsOiBcIjA5MTIteHh4LTQyMlwiLFxuICAgICAgZW1haWw6IFwicTh4eHg0NTNAZ21haWwuY29tXCIsXG4gICAgfSxcbiAgXVxufTtcbmV4cG9ydCBkZWZhdWx0IHcyX3dpbm5lcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9