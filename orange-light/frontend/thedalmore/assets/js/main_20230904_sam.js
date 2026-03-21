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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/jason_data/news_list.js */ "./src@4.0/assets/plugins/jason_data/news_list.js");
/* harmony import */ var _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/jason_data/stores_list.js */ "./src@4.0/assets/plugins/jason_data/stores_list.js");
// ajax 配合JQ3 引入設置
$(document).ready(function () {
  $.ajaxSetup({
    cache: false
  });
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
    goTop();
    ageGateSwitcher();
    privacySwitcher();
    agreementSwitcher();
  });
}); // 選單

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

function headerFunction() {
  var breakpoint = 768;
  toggleMobileMenu(breakpoint);
} // [End] 選單
//使用條款


function agreementSwitcher() {
  $("#agreementModalCenter_Id").on("shown.bs.modal", function () {
    $(".modal-backdrop")[1].remove(); // $('#agreementModalCenter_Id').css("padding-right", "17px");

    $(window).resize(function () {// $('#agreementModalCenter_Id').css("padding-left", "0px");
    });
  });
  $("#agreementModalCenter_Id").on("hidden.bs.modal", function (e) {
    $("body").addClass("modal-open");
  });
  $("#agreementButton_Id").on("click", function () {
    $("#legalCheckbox_Id").prop("checked", true);
  });
} //隱絲權政策(配合ageGate.js裡面的setCookieYear())


function privacySwitcher() {
  if (getCookie("privacy_dalmore") === undefined) {
    $(".l-footer-privacy").removeClass("d-none");
    $("#acceptPrivacy_Id").on("click", function () {
      $(".l-footer-privacy").addClass("d-none");
      setCookieYear("privacy_dalmore");
    });
  }
} //go top


function goTopShow() {
  var el = document.querySelector(".l-footer-goTop a");

  if (el !== null) {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 400) {
      $(".l-footer-goTop a").addClass("js-show");
    } else {
      $(".l-footer-goTop a").removeClass("js-show");
    }
  }
}

function goTop() {
  var el = document.querySelector(".l-footer-goTop a");

  if (el !== null) {
    //置頂按鈕的捲動速度
    $(".l-footer-goTop a").click(function (event) {
      // console.log('clicked');
      event.preventDefault;
      $("html,body").animate({
        scrollTop: 0
      }, 1000);
    });
  }
}

function goTopFixed() {
  var el = document.querySelector(".l-footer");
  var targetEl = document.querySelector(".l-footer-goTop a");

  if (el !== null) {
    var triggerNum = window.pageYOffset + window.innerHeight; // console.log("triggerNum == " + triggerNum);
    // console.log("el.offsetTop ==" + (el.offsetTop + (el.offsetHeight / 3)));

    var targerNum = el.offsetTop;

    if (triggerNum >= targerNum + el.offsetHeight / 1.5) {
      targetEl.classList.remove("js-acitve");
    } else {
      targetEl.classList.add("js-acitve");
    }
  }
} //[End] go top
// 首頁輪播


function setKvInterval() {
  var el = document.querySelector("#kv");

  if (el !== null) {
    $("#kv").carousel({
      interval: false
    });
  }
}

function slickSwitcher() {
  var el = document.querySelector("#productInpageSlick_Id");

  if (el !== null) {
    $.ajax({
      url: "ajax/_productInpage_slick.html",
      method: "GET",
      dataType: "html"
    }).done(function (data) {
      $("#productInpageSlick_Id").html(data);
      $(".v-slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    });
  }
} //產品頁tab


function tab() {
  var el = document.querySelector(".v-tab");

  if (el !== null) {
    var $link = $(".tab-list .tab-btn");
    $($link.eq(0).addClass("active").find("a").attr("href")).siblings(".tab-content").hide();
    $link.click(function (event) {
      event.preventDefault();
      $("html,body").scrollTop(0); // $("html,body").animate(
      //   {
      //     scrollTop: 0,
      //   },
      //   1000
      // );

      $(this).addClass("active");
      $(".tab-list .tab-btn").not(this).removeClass("active");
      $($(this).children("a").attr("href")).fadeIn().siblings(".tab-content").hide();
      $(this).addClass("active").siblings(".active").removeClass("active");
    });
    $(".js-classic").load("ajax/_product_classic.html");
    $(".js-old").load("ajax/_product_old.html");
    $(".js-limited").load("ajax/_product_limited.html");
  }
} //產品頁tabFixedTop


function tabFixed() {
  var el = document.querySelector(".p-product-tab");

  if (el !== null) {
    // console.log("window.pageYOffset == " + window.pageYOffset);
    // console.log("el.offsetTop ==" + el.offsetTop);
    if (window.pageYOffset >= el.offsetTop) {
      el.classList.add("js-acitve");
      document.querySelector("main").style.cssText = "padding-top: calc(72px + 69px)";
    } else {
      el.classList.remove("js-acitve");
      document.querySelector("main").style.cssText = "";
    }
  }
} //解決手機上 safari, chrome 瀏覽器 100vh 無法剛好一整頁的問題


function fixSmartphone100vh() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
} // 商店下拉複選選單相關
// 判斷下拉選單中是否有選項被選取，選單上會有勾勾


function storeFilterNotification() {
  var el = document.querySelector(".v-dropdown-menu");
  var target = document.querySelector("#dropdownMenuButton");

  if (el) {
    // console.log(inputContainer + " + " + target);
    var triggers = el.querySelectorAll("input[type='checkbox']"); // console.log(triggers);

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var checkedNum = el.querySelectorAll("input[type=checkbox]:checked").length; // console.log(checkedNum);

        if (checkedNum > 0) {
          target.classList.add("js-inputChecked");
        } else {
          target.classList.remove("js-inputChecked");
        }
      });
    });
    var clearAllBtnEl = document.querySelector("#js-clearCheckBoxes");
    clearAllBtnEl.addEventListener("click", function () {
      target.classList.remove("js-inputChecked");
    });
  }
} // 一鍵清除input選項


function clearCheckBox() {
  if (document.querySelector(".v-dropdown-menu")) {
    var trigger = document.querySelector("#js-clearCheckBoxes");
    var targets = document.querySelectorAll("input[type='checkbox']");
    trigger.addEventListener("click", function () {
      event.preventDefault();
      trigger.blur();
      Array.prototype.slice.call(targets).forEach(function (trigger) {
        trigger.checked = false;
      });
    });
  }
} // 切換顯示


function toggleVisiable(el, target, mediaQuery) {
  var triggers = document.querySelectorAll(el);
  var target = document.querySelector(target);

  if (target) {
    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        console.log("toggleVisiabl");
        event.preventDefault();
        this.classList.toggle("js-active");
        target.classList.toggle("js-active");
        var hasMediaQuery = mediaQuery;

        if (hasMediaQuery !== "") {
          var isMobile = window.innerWidth < mediaQuery;

          if (isMobile) {
            document.documentElement.classList.toggle("js-functionMenuOpened");
          }
        } else {
          document.documentElement.classList.remove("js-functionMenuOpened");
        }

        window.addEventListener("resize", function () {
          if (window.innerWidth >= mediaQuery) {
            document.documentElement.classList.remove("js-functionMenuOpened");
          }
        });
      });
    });
  }
}

function clickConfirm(el, target) {
  var triggers = document.querySelectorAll(el);
  var target = document.querySelector(target);

  if (target) {
    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        event.preventDefault();
        target.classList.remove("js-active");
        document.documentElement.classList.remove("js-functionMenuOpened");
      });
    });
  }
} //最新消息vue
// Vue.config.devtools = true;




function newsListVue() {
  var el = document.querySelector("#newsPagination_Id");

  if (el !== null) {
    var PAGE_SIZE = 6; //一個頁面要顯示多少筆資料

    var FOO_DATA = _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    Vue.component("paginate", VuejsPaginate);
    var vue = new Vue({
      el: "#newsPagination_Id",
      data: {
        inpagedata: [],
        listdata: [],
        currentPage: 1,
        pageCount: 1
      },
      computed: {
        pagedListdata: function pagedListdata() {
          var vm = this;

          if (vm.listdata && vm.listdata.length > 0) {
            return vm.listdata.filter(function (x) {
              return x.page === vm.currentPage;
            });
          } // 如果listdata有資料
          else {
            return [];
          }
        }
      },
      watch: {
        listdata: function listdata(val) {
          this._setPage2Model();
        }
      },
      filters: {
        ellipsis: function ellipsis(value) {
          var len = 117;
          if (!value) return "";

          if (value.length > len) {
            return value.slice(0, len) + "...";
          }

          return value;
        }
      },
      methods: {
        _setPage2Model: function _setPage2Model() {
          var vm = this;

          if (!vm.listdata || vm.listdata.length <= 0) {
            vm.pageCount = 1;
          } else {
            vm.pageCount = parseInt(vm.listdata.length / PAGE_SIZE) + (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);

            for (var i = 0; i < vm.listdata.length; i++) {
              vm.$set(vm.listdata[i], "page", parseInt(i / PAGE_SIZE) + 1);
            }
          }
        },
        pageCallback: function pageCallback(page) {
          var vm = this;
          this.$set(vm, "currentPage", page); // 讓 currentPage 等於 page
        }
      },
      created: function created() {
        var vm = this;
        vm.listdata = FOO_DATA.slice().reverse(); // 為了不污染數據，針對listdat做淺拷貝

        vm.inpagedata = FOO_DATA; // 另外開了一組順序正常的，給一般取用
      }
    });
  }
} //商店列表Vue
//import stores_list from '../plugins/jason_data/stores_list.js';




function storeListVue() {
  var el = document.querySelector("#storeFilter_Id");

  if (el !== null) {
    var vue = new Vue({
      el: "#storeFilter_Id",
      data: {
        sections: [{
          stores: _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__["default"]
        }],
        selected_area: "台北市",
        selected_city_area: "",
        qtext: "",
		vintage2003:true,
		vintage2007:true,
		thedalmore18:true,
		thedalmore21:true,
		thedalmore25:true,
        city_areas: []
      },
      created: function created() {
        this.area_change(this.selected_area);
      },
      methods: {
        area_change: function area_change(e) {
          this.qtext = "";
          $("#qtext").val("");
          var rows = this.sections[0].stores.filter(function (element, index) {
            return element["area"] == e;
          });
          var found = {};
          var groupRwos = rows.filter(function (element) {
            return found.hasOwnProperty(element["city_area"]) ? false : found[element["city_area"]] = true;
          });
          this.city_areas = groupRwos;
          this.selected_city_area = "";
          $("#city_area").val("");
        },
        city_area_change: function city_area_change() {
          this.qtext = "";
          $("#qtext").val("");
        },
        query: function query(qtext) {
          var text = $("#qtext").val().trim();

          if (text == "") {
            alert("請輸入通路名稱或地址");
            return;
          }

          this.qtext = text;
          this.selected_area = "all";
          this.selected_city_area = ""; //this.rowData(this.selected_area , this.selected_city_area, this.qtext);
        },
        rowData: function rowData(e, city_area, qtext) {
          var text = qtext.trim();
		  var i=1;
          return this.sections[0].stores.filter(function (element, index) {
            var flag = false;

            if (text != "") {
              /*
              if (city_area != "") {
              flag = element["area"] == e &&  element["city_area"] ==city_area;
              } else {
              flag = element["area"] == e;
              }
              if (flag == false) return false;
              */
              flag = element["store"].indexOf(text) >= 0 || element["address"].indexOf(text) >= 0;
              //console.log(flag, text, element["store"], element["address"], element["address"].indexOf(text));
            } else if (city_area != "") {
              if (e == "all") {
                flag = element["city_area"] == city_area;
              } else {
                flag = element["area"] == e && element["city_area"] == city_area;
              }
            } else {
              if (e == "all") {
                flag = true;
              } else {
                flag = element["area"] == e;
              }
            }
			
			
			var isType = false;
			 
			if (
				($("#vintage2003").is(':checked')  && element["vintage2003"] ==true) || 
				($("#vintage2007").is(':checked')  && element["vintage2007"] ==true)  ||
				($("#thedalmore18").is(':checked') && element["thedalmore18"] ==true)  ||
				($("#thedalmore21").is(':checked') && element["thedalmore21"] ==true)  ||
				($("#thedalmore25").is(':checked')  && element["thedalmore25"] ==true) 
			 )  {
				isType = true;
				//console.log((i++) + element["store"]  +" 2003Val=" + $("#vintage2003").val() +" show=" + element["vintage2003"] +  " 2003=" + ($("#vintage2003").val() == "on")   +" 2007=" + $("#vintage2007").val());
			}  
			 
			 
            return flag && isType;
          });
        }
      }
    });
  }
} //呼叫function-網頁載入完成後


$(document).ready(function () {
  toolsListener();
  setKvInterval();
  slickSwitcher();
  tab();
  tabFixed();
  newsListVue();
  storeListVue();
  fixSmartphone100vh(); //-----酒款下拉相關js

  storeFilterNotification();
  clearCheckBox();
  toggleVisiable(".v-dropdown-btn", ".v-dropdown-menu", 992);
  toggleVisiable(".close", ".v-dropdown-menu", "");
  clickConfirm("#js-confirm", ".v-dropdown-menu"); //-----[end]酒款下拉相關js
}); //呼叫function-視窗大小變更

$(window).resize(function () {}); //呼叫function-捲動

$(window).scroll(function () {
  tabFixed();
  lazyLoad();
});

/***/ }),

/***/ "./src@4.0/assets/plugins/jason_data/news_list.js":
/*!********************************************************!*\
  !*** ./src@4.0/assets/plugins/jason_data/news_list.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var news_list = [{
  title: '大摩典藏珍稀年份<br>典藏木盒獨獻台灣',
  imgSrc: ['assets/img/news/img_newsInpage-01.webp', 'assets/img/news/img_newsInpage-01.webp'],
  textContent: '坐擁蘇格蘭最古老橡木桶藏的「老酒銀行」大摩酒廠，發布全新系列《大摩典藏珍稀年份系列 The Dalmore Vintages》歡慶釀酒工藝至高成就，限量酒款 Vintage 2002、Vintage 2005 將在特定亞洲市場預先曝光，再往全球各大城市發布，而尚格酒業更將限量精裝木盒版本獨獻台灣，搶先全球首發上市。',
  aHref: 'news-inpage-01.html'
}, {
  title: '大摩2022鎏金奢展<br>雋藏奧藝l老酒銀行',
  imgSrc: ['assets/img/news/img_newsInpage-02.webp', 'assets/img/news/img_newsInpage-02.webp'],
  textContent: '「大摩2022鎏金奢展」於01月13日展出至01月23日於台北微風南山藝文中心，限期展出11天。以「老酒銀行」金庫大門及鎏光熠熠的保險櫃，​其中存放著來自時光淬鍊的大摩歷史里程碑及珍稀酒液為展覽設計核心概念，演繹大摩近兩百年來的酒廠歷史、人文精神、極致工藝，深度探究時間沉澱下的非凡價值。',
  aHref: 'news-inpage-02.html'
}, {
  title: '稀世珍品大摩62年<br>再破拍賣紀錄',
  imgSrc: ['assets/img/news/img_newsInpage-03.webp', 'assets/img/news/img_newsInpage-03.webp'],
  textContent: "蘇富比於2020年5月14日展開一場名為點滴成金的線上烈酒拍賣會，共有216項威士忌、干邑等烈酒珍稀拍品。此拍賣已於倫敦時間2020年5月28日晚上8點結束，並由兩瓶大摩62年以預估價兩倍多的高價並列成為此拍賣會最高拍價的珍品，成交價同為 GBP£266,200英鎊(約台幣1000萬)。「大摩62年，一滴都不能浪費。」（Dalmore 62 –can't let a drop hit the floor！），這句來自電影《金牌特務》的經典對白，說明了大摩威士忌的彌足珍貴，更屢屢締造拍賣市場不朽傳奇。",
  aHref: 'news-inpage-03.html'
}, {
  title: '歡慶大摩酒廠180年<br>雪莉12年驚豔上市',
  imgSrc: ['assets/img/news/img_newsInpage-04.webp', 'assets/img/news/img_newsInpage-04.webp'],
  textContent: "蘇格蘭高地區的「老酒銀行」大摩酒廠在2019年末歡度180歲生日，這場世紀慶生持續到2020年，仍讓全球威士忌市場興奮不已，大摩不只推出紀念輝煌時刻的180週年紀念酒──全球限量三瓶的大摩60年單一麥芽威士忌，並上市目前最高年份的大摩51年與全新「雪莉甄選系列」12年單一麥芽威士忌，不僅如此，大摩全系列包裝也全面換新裝，設計更顯尊榮奢華，邀請全世界酒迷一同慶祝大摩威士忌走入下一個180年。",
  aHref: 'news-inpage-04.html'
}, {
  title: '大摩50年珍稀登場<br>首創入香檳桶',
  imgSrc: ['assets/img/news/img_newsInpage-05.webp', 'assets/img/news/img_newsInpage-05.webp'],
  textContent: "為了誌慶大摩（The Dalmore）單一麥芽威士忌首席釀酒師Richard Paterson，自17歲踏進威士忌領域，26歲當上大摩首席釀酒師至今屆滿50年，這位素有「神之鼻」美譽的威士忌大師以累積50年的輝煌製酒成就，悉心打造一款史無前例的大摩50年大師典藏單一麥芽蘇格蘭威士忌，全球限量發行50瓶",
  aHref: 'news-inpage-05.html'
}, {
  title: '大摩築光大師系列No.1<br>攜手隈研吾再創高峰',
  imgSrc: ['assets/img/news/img_newsInpage-06.webp', 'assets/img/news/img_newsInpage-06.webp'],
  textContent: "全球窖藏最稀有威士忌的「老酒銀行」大摩酒廠，近年來與蘇格蘭第一座設計博物館V&A Dundee合作密切，促成當代建築大師與威士忌大師的協作，並於2022年上市全新酒款系列，「大摩築光大師系列」。",
  aHref: 'news-inpage-06.html'
}, {
  title: '大摩築光大師系列No.1<br>2022限定版 限量首發',
  imgSrc: ['assets/img/news/img_newsInpage-07.webp', 'assets/img/news/img_newsInpage-07.webp'],
  textContent: "首創以三種珍稀橡木桶，蘇格蘭橡木桶 (Tay Oak)、日本水楢桶和美國白橡木桶，訂製成「金繼」（Kintsugi）橡木桶，並陳釀出具有多重獨特風味且完美平衡的單一麥芽威士忌，全球限量15,000瓶。",
  aHref: 'news-inpage-07.html'
}, {
  title: '大摩璀璨18年 2023 Edition<br>鎏光之藝 限量桶藏',
  imgSrc: ['assets/img/news/img_newsInpage-09.webp', 'assets/img/news/img_newsInpage-09-mb.webp'],
  textContent: "大摩老酒經典之一－大摩18年單一麥芽蘇格蘭威士忌，於2021年全球熱銷一空後，造成威士忌鑑賞家的一片惋惜。今年，2023年全面升級，全新磅礡上市「大摩璀璨18年單一麥芽蘇格蘭威士忌 －2023 Edition -」",
  aHref: 'news-inpage-09.html'
}, {
  title: '大摩典藏珍稀年份<br>雋永時光定義珍稀',
  imgSrc: ['assets/img/news/img_newsInpage-08.webp', 'assets/img/news/img_newsInpage-08-mb.webp'],
  textContent: "擁有最尊貴威士忌的大摩酒廠，去年發布全新系列《大摩典藏珍稀年份系列 Vintages 2002/2005》歡慶釀酒工藝至高成就，以限量精裝木盒版本獨獻台灣，成為去年最熱門的收藏話題。",
  aHref: 'news-inpage-08.html'
}, {
  title: '攜手台北慕舍酒店<br>打造輝煌8月盛宴',
  imgSrc: ['assets/img/news/img_newsInpage-10.webp', 'assets/img/news/img_newsInpage-10.webp'],
  textContent: "尚格酒業為歡慶屬於每一位父親的8月，從8月8日至9月10日為期一個月，大摩單一麥芽蘇格蘭威士忌與薈萃美食、藝術與生活品味的國際精品酒店HOTEL MVSA 慕舍酒店雙強聯名，透過世界最尊貴威士忌和令人嚮往傾慕的生活居舍，共享點滴珍藏的美好時光。",
  aHref: 'news-inpage-10.html'
}, {
  title: '大摩傳奇巡禮<br>共譜恆久璀璨',
  imgSrc: ['assets/img/news/img_newsInpage-11.webp', 'assets/img/news/img_newsInpage-11.webp'],
  textContent: "「大摩傳奇巡禮・共譜恆久璀璨」邀請消費者經歷一場跨時空、跨國界的奢華之旅。在有「神之鼻」美譽的大摩首席釀酒師Richard Paterson及新科年度最佳釀酒師－大摩總製酒師Gregg Glass的帶領下，消費者得以藝遊大摩經典佳釀的傳奇篇章，並駐足品酩全新上市的「大摩璀璨18年－2023 Edition -」",
  aHref: 'news-inpage-11.html'
}];
/* harmony default export */ __webpack_exports__["default"] = (news_list);

/***/ }),

/***/ "./src@4.0/assets/plugins/jason_data/stores_list.js":
/*!**********************************************************!*\
  !*** ./src@4.0/assets/plugins/jason_data/stores_list.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var all_stores = [
 {
  "store": "界明洋酒",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區台灣大道2段50號",
  "tel": "04-2201-2103",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "顏新珍洋酒商行",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區日進街101號",
  "tel": "04-2206-5187",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "茂綸菸酒",
  "area": "台中市",
  "city_area": "北區",
  "address": "台中市北區公園路140號",
  "tel": "04-2206-7675",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "一品夫人菸酒",
  "area": "台中市",
  "city_area": "東區",
  "address": "台中市東區樂業路211號",
  "tel": "04-2211-1765",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "一品夫人菸酒-旱溪店",
  "area": "台中市",
  "city_area": "東區",
  "address": "台中市東區旱溪街54-1號",
  "tel": "04-2211-3784",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "精湛酒藏",
  "area": "台中市",
  "city_area": "東區",
  "address": "台中市東區樂業路396號",
  "tel": "04-2212-1788",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "麥金酒洋行",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區柳川西路二段188號",
  "tel": "04-2220-2582",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "茂峰菸酒",
  "area": "台中市",
  "city_area": "中區",
  "address": "台中市中區自由路二段54號",
  "tel": "04-2225-2525",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "宸逸洋酒",
  "area": "台中市",
  "city_area": "北區",
  "address": "台中市北區進化北路364號",
  "tel": "04-2236-0092",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "哈利洋酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區崇德路二段308號",
  "tel": "04-2241-6658",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "北台中商行",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區昌平路一段143號",
  "tel": "04-2244-0529",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶佳洋酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區崇德路2段482號",
  "tel": "04-2249-1710",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "文心商行",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區文心路1段437號",
  "tel": "04-2258-2088",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "利百加洋酒-復興店",
  "area": "台中市",
  "city_area": "南區",
  "address": "台中市南區復興路二段120-6號",
  "tel": "04-2262-5523",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "松賀洋酒-高工店",
  "area": "台中市",
  "city_area": "南區",
  "address": "台中市南區高工路500號",
  "tel": "04-2265-5885",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "南區楊菸酒",
  "area": "台中市",
  "city_area": "南區",
  "address": "台中市南區五權南路243號",
  "tel": "04-2265-6789",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大衛洋行",
  "area": "台中市",
  "city_area": "東區",
  "address": "台中市東區建成路733號",
  "tel": "04-2283-1199",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "日盛菸酒",
  "area": "台中市",
  "city_area": "南區",
  "address": "台中市南區合作街50號",
  "tel": "04-2285-0961",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "禾紳洋酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區中平路696號1樓",
  "tel": "04-2295-8138",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "葡晶洋酒-市政店",
  "area": "台中市",
  "city_area": "西屯區",
  "address": "台中市西屯區河南路四段103號",
  "tel": "04-2297-8055",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "桂貫洋酒",
  "area": "台中市",
  "city_area": "北區",
  "address": "台中市北區漢口路3段259號",
  "tel": "04-2299-4100",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "富雅酒莊",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區中興街122巷19號",
  "tel": "04-2301-3699",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "暐倫洋酒",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區美村路一段241號",
  "tel": "04-2305-0688",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "龍穴酒坊",
  "area": "台中市",
  "city_area": "西屯區",
  "address": "台中市西屯區河南路ㄧ段56號",
  "tel": "04-2317-2929",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "安迪洋行",
  "area": "台中市",
  "city_area": "西屯區",
  "address": "台中市西屯區寧夏路217號",
  "tel": "04-2317-3430",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "美感臨酒",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區向上路一段502號",
  "tel": "04-2320-5723",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金業洋酒",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區大業路5號",
  "tel": "04-2326-1701",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "日升菸酒",
  "area": "台中市",
  "city_area": "烏日區",
  "address": "台中市烏日區五光路1003號",
  "tel": "04-2337-4858",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "百淳洋酒",
  "area": "台中市",
  "city_area": "烏日區",
  "address": "台中市烏日區新興路433號",
  "tel": "04-2337-9953",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "貳零酒商行",
  "area": "台中市",
  "city_area": "西區",
  "address": "台中市西區樂群街209號1樓",
  "tel": "04-2371-8181",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "紅頂菸酒",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區環中路四段56號",
  "tel": "04-2385-0480",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "犁頭店菸酒",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區黎明路一段1079號",
  "tel": "04-2385-1925",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "茂林洋酒",
  "area": "台中市",
  "city_area": "太平區",
  "address": "台中市太平區新平路三段171號",
  "tel": "04-2391-0582",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒號倉庫-大里店",
  "area": "台中市",
  "city_area": "大里區",
  "address": "台中市大里區爽文路1121號",
  "tel": "04-2406-3246",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "酒號倉庫-總倉",
  "area": "台中市",
  "city_area": "大里區",
  "address": "台中市大里區爽文路398號",
  "tel": "04-2406-4648",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒甕菸酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區中清路二段1026號",
  "tel": "04-2426-0208",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "盛紅菸酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區中清路二段918號",
  "tel": "04-2426-9068",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "威富酒坊",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區軍福十六路356-2號",
  "tel": "04-2436-2953",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "群茂洋酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區東山路一段326號",
  "tel": "04-2436-8319",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大墩東山洋酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區東山路1段148號",
  "tel": "04-2437-3166",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "哈斯葵洋酒",
  "area": "台中市",
  "city_area": "西屯區",
  "address": "台中市西屯區河南路二段301巷50號",
  "tel": "04-2437-6878",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "弘川藏酒閣",
  "area": "台中市",
  "city_area": "西屯區",
  "address": "台中市西屯區黎明路三段30號",
  "tel": "04-2452-6000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "台灣自來酒",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區大墩四街327號",
  "tel": "04-2471-8833",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "安泰洋酒",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區向上南路一段321號",
  "tel": "04-2473-5089",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "收藏家洋酒",
  "area": "台中市",
  "city_area": "南屯區",
  "address": "台中市南屯區永春東路198號",
  "tel": "04-2473-9696",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "京旺菸酒-益民店",
  "area": "台中市",
  "city_area": "大里區",
  "address": "台中市大里區益民路二段301號",
  "tel": "04-2487-5390",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶聯行",
  "area": "台中市",
  "city_area": "豐原區",
  "address": "台中市豐原區豐勢路二段31號",
  "tel": "04-2523-0403",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "亞德倫菸酒-向陽店",
  "area": "台中市",
  "city_area": "豐原區",
  "address": "台中市豐原區向陽路170巷9號",
  "tel": "04-2525-1425",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒哉菸酒",
  "area": "台中市",
  "city_area": "豐原區",
  "address": "台中市豐原區豐東路556號",
  "tel": "04-2526-1419",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒江村菸酒",
  "area": "台中市",
  "city_area": "神岡區",
  "address": "台中市神岡區大富路9號",
  "tel": "04-2527-8861",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "品藏洋酒(豐原店)",
  "area": "台中市",
  "city_area": "豐原區",
  "address": "台中市豐原區大明路32號",
  "tel": "04-2529-5288",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "以全菸酒商行",
  "area": "台中市",
  "city_area": "潭子區",
  "address": "台中市潭子區潭秀里中山路二段474-2號1樓",
  "tel": "04-2533-1621",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "威爾森洋酒",
  "area": "台中市",
  "city_area": "潭子區",
  "address": "台中市潭子區雅潭路二段252號",
  "tel": "04-2533-5883",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "吉菖洋酒",
  "area": "台中市",
  "city_area": "神岡區",
  "address": "台中市神岡區神林路88號",
  "tel": "04-2563-1080",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒國英豪菸酒",
  "area": "台中市",
  "city_area": "大雅區",
  "address": "台中市大雅區民生路三段356號",
  "tel": "04-2566-4710",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "拉菲菸酒",
  "area": "台中市",
  "city_area": "大雅區",
  "address": "台中市大雅區雅潭路四段502號",
  "tel": "04-2567-3819",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒倉洋酒",
  "area": "台中市",
  "city_area": "大雅區",
  "address": "台中市大雅區科雅路398號",
  "tel": "04-2567-9159",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鎮昌菸酒",
  "area": "台中市",
  "city_area": "東勢區",
  "address": "台中市東勢區忠孝街173號",
  "tel": "04-2587-0000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "下新菸酒",
  "area": "台中市",
  "city_area": "東勢區",
  "address": "台中市東勢區東蘭路43號",
  "tel": "04-2587-2256",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "劉福",
  "area": "台中市",
  "city_area": "東勢區",
  "address": "台中市東勢區東坑路216號",
  "tel": "04-2587-7261",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "歐巴馬菸酒",
  "area": "台中市",
  "city_area": "清水區",
  "address": "台中市清水區中華路609-1號",
  "tel": "04-2628-1077",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "榮好菸酒",
  "area": "台中市",
  "city_area": "梧棲區",
  "address": "台中市梧棲區居仁街212號",
  "tel": "04-2657-9889",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒湖洋酒-大甲店",
  "area": "台中市",
  "city_area": "大甲區",
  "address": "台中市大甲區中山路一段486號",
  "tel": "04-2680-5836",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "同懋菸酒",
  "area": "台中市",
  "city_area": "大甲區",
  "address": "台中市大甲區信義路158號",
  "tel": "04-2686-0340",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒港菸酒",
  "area": "台中市",
  "city_area": "大甲區",
  "address": "台中市大甲區經國路1號",
  "tel": "04-2686-8071",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "七七會社洋酒",
  "area": "台中市",
  "city_area": "大肚區",
  "address": "台中市大肚區自治路77號",
  "tel": "04-2699-8323",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "世傳菸酒行",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區路267號",
  "tel": "0900-005-970",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "富三洋酒",
  "area": "台中市",
  "city_area": "大里區",
  "address": "台中市大里區仁慈街350號",
  "tel": "0910-529-524",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "紅酒莊洋酒",
  "area": "台中市",
  "city_area": "大甲區",
  "address": "台中市大甲區光明路131號",
  "tel": "0932-677-946",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "清泰菸酒",
  "area": "台中市",
  "city_area": "北屯區",
  "address": "台中市北屯區中清路二段128號",
  "tel": "0936-231-190",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "源利菸酒",
  "area": "台中市",
  "city_area": "沙鹿區",
  "address": "台中市沙鹿區光華路333號",
  "tel": "0973-205-660",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "厚昌洋酒",
  "area": "台中市",
  "city_area": "東區",
  "address": "台中市東區精武路161號1樓",
  "tel": "0975-379-362",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "不倒翁菸酒",
  "area": "台中市",
  "city_area": "豐原區",
  "address": "台中市豐原區向陽路97號",
  "tel": "0976-477-376",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "豪酒運菸酒",
  "area": "台中市",
  "city_area": "北區",
  "address": "台中市北區健行路858號",
  "tel": "0978-106-155",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "萬華煙酒",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區和平西路三段103號",
  "tel": "02-2302-7896",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒國大亨",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北萬華區南寧路45-2號",
  "tel": "02-2306-0102",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金淬",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區廣州街202號",
  "tel": "02-2308-5647",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "佳賀(仁愛店)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區東豐街21號",
  "tel": "02-2325-6256",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "富盛",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區柳州街38號",
  "tel": "02-2331-3269",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "齊泰",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區昆明街150號",
  "tel": "02-2331-5147",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "風格和平",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區和平西路三段163號",
  "tel": "02-2336-1759",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒世界中正",
  "area": "台北市",
  "city_area": "中正區",
  "address": "台北市中正區中華路二段313巷16號",
  "tel": "02-2337-6665",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "珈品",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區永康街42號",
  "tel": "02-2357-8772",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "萬益",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區柳州街40-1號",
  "tel": "02-2382-1665",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "駱北洋行",
  "area": "台北市",
  "city_area": "萬華區",
  "address": "台北市萬華區貴陽街二段164巷32號",
  "tel": "02-2383-2201",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(古亭門市)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區杭州南路二段107號1樓",
  "tel": "02-2391-0700",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "阿爾發",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區復興北路514巷2號",
  "tel": "02-2504-7123",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "柏達",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區民權東路二段152巷22弄2號",
  "tel": "02-2509-8480",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "銀豐",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區林森北路133巷68號",
  "tel": "02-2511-6804",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(松江門市)",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區松江路131號",
  "tel": "02-2516-1916",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "永利",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區民生東路二段79號",
  "tel": "02-2523-8019",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "松林",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區南京東路二段21巷8號",
  "tel": "02-2531-5741",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "買酒網(中山門市)",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區中山北路二段46號1樓",
  "tel": "02-2531-9751",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "劉恆裕",
  "area": "台北市",
  "city_area": "大同區",
  "address": "台北市大同區民生西路342號",
  "tel": "02-2556-0948",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "橡木桶松江店",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區松江路190號",
  "tel": "02-2562-8000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "嘉利",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區林森北路438號",
  "tel": "02-2563-3969",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金盃",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區新生北路二段62巷42號",
  "tel": "02-2581-1651",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "陽光美酒薈(佳醇)",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區松江路18號",
  "tel": "02-2581-8520",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "海納川",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區吉林路225號",
  "tel": "02-2581-8590",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "灃姵酒業",
  "area": "台北市",
  "city_area": "內湖區",
  "address": "台北市內湖區安康路422號",
  "tel": "02-2631-5761",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "振宜",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區忠孝東路六段491號",
  "tel": "02-2651-1328",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(忠孝店)",
  "area": "台北市",
  "city_area": "南港區",
  "address": "台北市南港區忠孝東路六段386號",
  "tel": "02-2651-9939",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "七三七",
  "area": "台北市",
  "city_area": "內湖區",
  "address": "台北市內湖區內湖路一段737巷51弄3號",
  "tel": "02-2657-9130",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "提瑪",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區信義路四段254號",
  "tel": "02-2700-0259",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大葡園",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區敦化南路一段102-1號",
  "tel": "02-2702-5053",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(信義門市)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區信義路四段267號1樓",
  "tel": "02-2703-0233",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "丹騰",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區大安路一段31巷19號C室",
  "tel": "02-2704-3507",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(信義店)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區信義路3段128號",
  "tel": "02-2708-0583",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "買酒網(敦二門市)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區敦化南路二段98號1樓",
  "tel": "02-2708-0751",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "美多客",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區東豐街77號",
  "tel": "02-2708-8721",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "洋酒城-仁愛",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區仁愛路四段112巷21號",
  "tel": "02-2709-5168",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "買酒網(敦一門市)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區敦化南路1段196號",
  "tel": "02-2711-0019",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(光華店)",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區渭水路56號",
  "tel": "02-2711-6118",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "買酒網(民生門市)",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區民生東路四段58號1樓",
  "tel": "02-2718-8826",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒州復興店",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區復興南路一段31號",
  "tel": "02-2721-6111",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "楠興",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區信義路六段91號",
  "tel": "02-2728-2775",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(復興門市)",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區復興北路84號1樓",
  "tel": "02-2752-5991",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "忠佳",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區松德路287號",
  "tel": "02-2759-7533",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "海城",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區松山路289號",
  "tel": "02-2765-9366",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "好酒多",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區八德路四段200號",
  "tel": "02-2768-1786",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "一酒七五",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區市民大道五段127號",
  "tel": "02-2768-1975",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(市政府門市)",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區忠孝東路五段51號1樓",
  "tel": "02-2769-6099",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金釀",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區仁愛路四段411號",
  "tel": "02-2772-0101",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "佳賀(延吉店)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區延吉街128-1號",
  "tel": "02-2779-0866",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "友美",
  "area": "台北市",
  "city_area": "南港區",
  "address": "台北市南港區舊莊街二段3號",
  "tel": "02-2782-8469",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金瑞成",
  "area": "台北市",
  "city_area": "南港區",
  "address": "台北市南港區忠孝東路七段601號",
  "tel": "02-2786-2239",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "世達",
  "area": "台北市",
  "city_area": "北投區",
  "address": "台北市北投區文林北路176號",
  "tel": "02-2823-5777",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "飛久",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區北路六段27號",
  "tel": "02-2832-1099",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "承合",
  "area": "台北市",
  "city_area": "士林區",
  "address": "台北市士林區文林路587巷115號",
  "tel": "02-2832-2911",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "展宸",
  "area": "台北市",
  "city_area": "士林區",
  "address": "台北市士林區福港街149巷15弄8號",
  "tel": "02-2881-5818",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "銀盤士林",
  "area": "台北市",
  "city_area": "士林區",
  "address": "台北市士林區大北路85號",
  "tel": "02-2881-6828",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大象",
  "area": "台北市",
  "city_area": "文山區",
  "address": "台北市文山區保儀路124號",
  "tel": "02-2939-3439",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "昌富塔悠",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區塔悠路17號",
  "tel": "02-3765-5899",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "佳賀(永吉店)",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區永吉路120巷90號",
  "tel": "02-7729-4999",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "康喜客-松山",
  "area": "台北市",
  "city_area": "松山區",
  "address": "台北市松山區光復北路136號",
  "tel": "02-8770-7555",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "好窩",
  "area": "台北市",
  "city_area": "中山區",
  "address": "台北市中山區長安東路二段286號",
  "tel": "02-8772-0014",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鼎豐",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區延吉街62巷6弄1號",
  "tel": "02-8772-8820",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "買酒網(仁愛門市)",
  "area": "台北市",
  "city_area": "大安區",
  "address": "台北市大安區仁愛路4段29號1樓",
  "tel": "02-8773-2607",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "買酒網(內湖旗艦門市)",
  "area": "台北市",
  "city_area": "內湖區",
  "address": "台北市內湖區行愛路77巷69號1樓",
  "tel": "02-8792-5186",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "沃利特",
  "area": "台北市",
  "city_area": "信義區",
  "address": "台北市信義區永吉路278巷2-3號",
  "tel": "0933-475-210",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "小六",
  "area": "台北市",
  "city_area": "中正區",
  "address": "台北市中正區中華路二段311巷6號",
  "tel": "0935-315-308",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "添酒",
  "area": "台北市",
  "city_area": "南港區",
  "address": "台北市南港區東興街94號",
  "tel": "0965-435-145",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "德豐",
  "area": "台東縣",
  "city_area": "台東市",
  "address": "台東縣台東市傳廣路507號",
  "tel": "08-922-8372",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒堡",
  "area": "台東縣",
  "city_area": "台東市",
  "address": "台東縣台東市新生路116號",
  "tel": "08-932-1235",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "宏瑋菸酒行",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區南灣里大灣路578號",
  "tel": " 06-205-9050",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "順飲-復國店",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區復國一路361號",
  "tel": "06-203-1831",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "龍憶",
  "area": "台南市",
  "city_area": "中西區",
  "address": "台南市中西區南門路243號之3",
  "tel": "06-213-0289",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "醇爵",
  "area": "台南市",
  "city_area": "中西區",
  "address": "台南市中西區海安路一段26號",
  "tel": "06-220-0507",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酣呷餐酒館",
  "area": "台南市",
  "city_area": "南區",
  "address": "台南市南區西門路一段669號",
  "tel": "06-225-7669",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "廣來",
  "area": "台南市",
  "city_area": "東區",
  "address": "台南市東區大同路二段139號",
  "tel": "06-246-6272",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "州翔酒翔",
  "area": "台南市",
  "city_area": "中西區",
  "address": "台南市中西區西和路220號",
  "tel": "06-258-6958",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "家禎",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區永華路66號",
  "tel": "06-273-4129",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "順飲-中華店",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區中華路二段80號",
  "tel": "06-275-6222",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "柏文",
  "area": "台南市",
  "city_area": "東區",
  "address": "台南市東區小東路330號",
  "tel": "06-275-6621",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "富冠商行",
  "area": "台南市",
  "city_area": "仁德區",
  "address": "台南市仁德區中正路二段341號",
  "tel": "06-279-4232",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大眾-武聖",
  "area": "台南市",
  "city_area": "中西區",
  "address": "台南市中西區武聖路265號",
  "tel": "06-280-0129",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大大菸酒",
  "area": "台南市",
  "city_area": "安平區",
  "address": "台南市安平區中華西路二段573號",
  "tel": "06-280-3078",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "順飲-西門店",
  "area": "台南市",
  "city_area": "安南區",
  "address": "台南市安南區西門路四段375號",
  "tel": "06-281-0333",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "賀鼎",
  "area": "台南市",
  "city_area": "安平區",
  "address": "台南市安平區永華路二段690號",
  "tel": "06-293-0022",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大眾-安平",
  "area": "台南市",
  "city_area": "安平區",
  "address": "台南市安平區建平路696號",
  "tel": "06-293-8999",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "順飲永華總店",
  "area": "台南市",
  "city_area": "安平區",
  "address": "台南市安平區永華路二段678號",
  "tel": "06-299-9123",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "龍亨菸酒",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區東橋七路153號",
  "tel": "06-302-0329",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "壹玲",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區忠孝路108號",
  "tel": "06-312-0078",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "昕悅揚",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區中華一路150-1號",
  "tel": "06-312-9699",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "槓頂菸酒",
  "area": "台南市",
  "city_area": "東區",
  "address": "台南市東區崇德路456號",
  "tel": "06-336-2189",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "高僑",
  "area": "台南市",
  "city_area": "安南區",
  "address": "台南市安南區海沺路一段99號",
  "tel": "06-350-6423",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "鍾愛",
  "area": "台南市",
  "city_area": "安南區",
  "address": "台南市安南區安和路四段480號",
  "tel": "06-356-1127",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "泰安(德佳)",
  "area": "台南市",
  "city_area": "新化區",
  "address": "台南市新化區中正路462.464號",
  "tel": "06-590-7527",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "南都菸酒",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區復國二路63巷",
  "tel": "06-598-1166",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "明輝",
  "area": "台南市",
  "city_area": "新化區",
  "address": "台南市新化區中山路111巷10號",
  "tel": "06-598-1166",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金富祥",
  "area": "台南市",
  "city_area": "新市區",
  "address": "台南市新市區銘傳街76號",
  "tel": "06-599-8278",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "晴瑒",
  "area": "台南市",
  "city_area": "新營區",
  "address": "台南市新營區和平路87號",
  "tel": "06-635-5035",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "御品",
  "area": "台南市",
  "city_area": "新營區",
  "address": "台南市新營區三民路69號",
  "tel": "06-637-6999",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "名家",
  "area": "台南市",
  "city_area": "新營區",
  "address": "台南市新營區新進路二段183號",
  "tel": "06-637-9237",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "御品下營",
  "area": "台南市",
  "city_area": "下營區",
  "address": "台南市下營區健康路281號",
  "tel": "06-679-0022",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "僑領",
  "area": "台南市",
  "city_area": "佳里區",
  "address": "台南市佳里區中山路225號",
  "tel": "06-723-6072",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": 1,
  "vintage2007": true
 },
 {
  "store": "酒堡-新營",
  "area": "台南市",
  "city_area": "新營區",
  "address": "台南市新營區東泰七街48號",
  "tel": "0934-324-777",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "品漢",
  "area": "台南市",
  "city_area": "永康區",
  "address": "台南市永康區埔園街418號",
  "tel": "0956-982-731",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鼎大",
  "area": "台南市",
  "city_area": "北區",
  "address": "台南市北區中華北路一段78巷25號",
  "tel": "0968-702-927",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "高登-台南",
  "area": "台南市",
  "city_area": "中西區",
  "address": "台南市中西區和意路78號",
  "tel": "0973-063-215",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒樂",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市新民路84號",
  "tel": "03-932-5085",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "明興",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市神農路一段26號",
  "tel": "03-932-5259",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒殿",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市宜興路二段2號",
  "tel": "03-932-9579",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "花天酒地(翰德)",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市舊城東路49號",
  "tel": "03-933-2038",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "皇后道",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市新興路88號",
  "tel": "03-933-3385",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "堡鳳",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市農權路23號",
  "tel": "03-935-2532",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "申野",
  "area": "宜蘭縣",
  "city_area": "宜蘭市",
  "address": "宜蘭縣宜蘭市宜興路一段283號",
  "tel": "03-938-0822",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "愛琳酒",
  "area": "宜蘭縣",
  "city_area": "羅東鎮",
  "address": "宜蘭縣羅東鎮公正路289-1號",
  "tel": "03-951-0209",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "光昌商行",
  "area": "宜蘭縣",
  "city_area": "羅東鎮",
  "address": "宜蘭縣羅東鎮興東路9號",
  "tel": "03-955-8286",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "百晟行",
  "area": "宜蘭縣",
  "city_area": "羅東鎮",
  "address": "宜蘭縣羅東鎮興東南路49號",
  "tel": "03-956-0476",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "一路發",
  "area": "宜蘭縣",
  "city_area": "冬山鄉",
  "address": "宜蘭縣冬山鄉冬山路五段269號",
  "tel": "03-958-5499",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "欣龍",
  "area": "宜蘭縣",
  "city_area": "冬山鄉",
  "address": "宜蘭縣冬山鄉冬山路五段277號",
  "tel": "03-958-9352",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒窩",
  "area": "宜蘭縣",
  "city_area": "礁溪鄉",
  "address": "宜蘭縣礁溪鄉中山路二段29號",
  "tel": "03-988-7311",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "明月",
  "area": "花蓮市",
  "city_area": "中正路",
  "address": "花蓮市中正路146號",
  "tel": "03-831-5966",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒淵",
  "area": "花蓮縣",
  "city_area": "新城鄉",
  "address": "花蓮縣新城鄉嘉里三街92之8號",
  "tel": "03-382-61786",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "雄寰",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市國聯一路211號",
  "tel": "03-383-26147",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "民侁",
  "area": "花蓮縣",
  "city_area": "吉安鄉",
  "address": "花蓮縣吉安鄉吉安路一段76-8號",
  "tel": "03-385-80768",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒江街",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市化道路162號",
  "tel": "03-822-2520",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "加酒行",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市軒轅路2-2號",
  "tel": "03-831-4960",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金雄寰",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市博愛街135號",
  "tel": "03-832-7622",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "全家來",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市國聯五路51號",
  "tel": "03-836-0101",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "上醇商行",
  "area": "花蓮縣",
  "city_area": "吉安鄉",
  "address": "花蓮縣吉安鄉中華路二段159號",
  "tel": "03-851-2068",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "自立",
  "area": "花蓮縣",
  "city_area": "吉安鄉",
  "address": "花蓮縣吉安鄉自立路二段42號",
  "tel": "03-856-6355",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "上揚",
  "area": "花蓮縣",
  "city_area": "花蓮市",
  "address": "花蓮縣花蓮市富祥街97號",
  "tel": "03-857-6543",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "承暘菸酒",
  "area": "南投縣",
  "city_area": "南投市",
  "address": "南投縣南投市康壽里民生街26號",
  "tel": "04-9220-2998",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "嘉峰商行",
  "area": "南投縣",
  "city_area": "南投市",
  "address": "南投縣南投市彰南路一段613號",
  "tel": "04-9222-5742",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宏龍菸酒",
  "area": "南投縣",
  "city_area": "南投市",
  "address": "南投縣南投市彰南路3段132號",
  "tel": "04-9226-0699",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "家家有洋酒",
  "area": "南投縣",
  "city_area": "草屯鎮",
  "address": "南投縣草屯鎮敦和路敦成巷1之1號",
  "tel": "04-9231-0884",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大禾屋菸酒",
  "area": "南投縣",
  "city_area": "草屯鎮",
  "address": "南投縣草屯鎮上林里太平路一段139號",
  "tel": "04-9231-2965",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "元太洋行",
  "area": "南投縣",
  "city_area": "草屯鎮",
  "address": "南投縣草屯鎮和平街4號",
  "tel": "04-9232-2008",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "羊哥菸酒",
  "area": "南投縣",
  "city_area": "南投市",
  "address": "南投縣南投市草屯鎮炎峰街82號",
  "tel": "04-9236-7775",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "文和菸酒-中興店",
  "area": "南投縣",
  "city_area": "南投市",
  "address": "南投縣南投市中興新村中興路72號",
  "tel": "04-9239-0342",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "台元洋酒",
  "area": "南投縣",
  "city_area": "竹山鎮",
  "address": "南投縣竹山鎮大明路233號",
  "tel": "04-9265-3393",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒玖商行",
  "area": "南投縣",
  "city_area": "國姓鄉",
  "address": "南投縣國姓鄉中興路236號",
  "tel": "04-9272-3951",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "錡毅菸酒",
  "area": "南投縣",
  "city_area": "民間鄉",
  "address": "南投縣民間鄉濁水村員集路67號",
  "tel": "04-9273-2071",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "三元行",
  "area": "南投縣",
  "city_area": "集集鎮",
  "address": "南投縣集集鎮集集街100號",
  "tel": "04-9276-2371",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "新進順商行",
  "area": "南投縣",
  "city_area": "埔里鎮",
  "address": "南投縣埔里鎮東華路182號",
  "tel": "04-9298-3652",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金利菸酒",
  "area": "南投縣",
  "city_area": "埔里鎮",
  "address": "南投縣埔里鎮西安路一段95號",
  "tel": "04-9298-4401",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒園商行",
  "area": "南投縣",
  "city_area": "埔里鎮",
  "address": "南投縣埔里鎮中華路188號",
  "tel": "04-9299-9903",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "呵呵商行",
  "area": "南投縣",
  "city_area": "埔里鎮",
  "address": "南投縣埔里鎮中正路745號",
  "tel": "0926-939-299",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "冠德-大埔店",
  "area": "屏東市",
  "city_area": "屏東市",
  "address": "屏東縣屏東市柳州街34號",
  "tel": "08-733-7007",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "銘鴻海豐",
  "area": "屏東市",
  "city_area": "屏東市",
  "address": "屏東縣屏東市北平路20號",
  "tel": "08-736-9901",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "禾大",
  "area": "屏東市",
  "city_area": "屏東市",
  "address": "屏東縣屏東市瑞光路三段299號",
  "tel": "08-738-6653",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "冠德-華盛店",
  "area": "屏東市",
  "city_area": "屏東市",
  "address": "屏東縣屏東市華盛街16號",
  "tel": "08-751-0633",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "冠德-總店",
  "area": "屏東市",
  "city_area": "屏東市",
  "address": "屏東縣屏東市武成街103號",
  "tel": "08-751-6553",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "洋基",
  "area": "屏東縣",
  "city_area": "屏東市",
  "address": "屏東縣屏東市公園西路121號",
  "tel": "08-733-7272",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "冠華自由店",
  "area": "屏東縣",
  "city_area": "屏東市",
  "address": "屏東縣屏東市自由路96號",
  "tel": "08-735-1331",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "皇加",
  "area": "屏東縣",
  "city_area": "屏東市",
  "address": "屏東縣屏東市建豐路281號",
  "tel": "08-735-3566",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "華欣(柏融)",
  "area": "屏東縣",
  "city_area": "屏東市",
  "address": "屏東縣屏東市大連路107-3號",
  "tel": "08-736-2358",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "東大",
  "area": "屏東縣",
  "city_area": "屏東市",
  "address": "屏東縣屏東市中正路548號",
  "tel": "08-738-1245",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "東鑫",
  "area": "屏東縣",
  "city_area": "里港鄉",
  "address": "屏東縣里港鄉大平村仁和路23號",
  "tel": "08-775-1199",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金和順",
  "area": "屏東縣",
  "city_area": "里港鄉",
  "address": "屏東縣里港鄉里港路114、112號",
  "tel": "08-775-6043",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "千上菸酒商行",
  "area": "屏東縣",
  "city_area": "萬丹鄉",
  "address": "屏東縣萬丹鄉萬全村萬丹路一段321號",
  "tel": "08-776-4636",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大同內埔",
  "area": "屏東縣",
  "city_area": "內埔鄉",
  "address": "屏東縣內埔鄉廣濟路114號",
  "tel": "08-779-9046",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "洪郁",
  "area": "屏東縣",
  "city_area": "潮州鎮",
  "address": "屏東縣潮州鎮榮祥巷18號",
  "tel": "08-788-0183",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大同",
  "area": "屏東縣",
  "city_area": "潮洲鎮",
  "address": "屏東縣潮洲鎮朝昇路84號",
  "tel": "08-788-2058",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "福記屏東",
  "area": "屏東縣",
  "city_area": "鹽埔鄉",
  "address": "屏東縣鹽埔鄉維新路193號",
  "tel": "08-793-5061",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": " 鴻昇",
  "area": "屏東縣",
  "city_area": "崁頂鄉",
  "address": "屏東縣崁頂鄉力社村舊店路1-12號",
  "tel": "08-863-1409",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "吉昌",
  "area": "屏東縣",
  "city_area": "枋寮鄉",
  "address": "屏東縣枋寮鄉中山路75號",
  "tel": "08-878-2362",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "百利",
  "area": "屏東縣",
  "city_area": "恆春鎮",
  "address": "屏東縣恆春鎮中正路138號",
  "tel": "08-889-2615",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "承龍",
  "area": "屏東縣",
  "city_area": "東港鎮",
  "address": "屏東縣東港鎮明德路62號",
  "tel": "0939-375-260",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "勝和菸酒",
  "area": "苗栗縣",
  "city_area": "苗栗市",
  "address": "苗栗縣苗栗市新東街41號",
  "tel": "03-733-6536",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "陽光商行",
  "area": "苗栗縣",
  "city_area": "苗栗市",
  "address": "苗栗縣苗栗市文發路481號",
  "tel": "03-735-2752",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "尚好菸酒",
  "area": "苗栗縣",
  "city_area": "苗栗市",
  "address": "苗栗縣苗栗市縣府路118號",
  "tel": "03-736-1801",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "喜洋洋菸酒-英才店",
  "area": "苗栗縣",
  "city_area": "苗栗市",
  "address": "苗栗縣苗栗市英才路52號",
  "tel": "03-737-1056",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "慶佳行-光復店",
  "area": "苗栗縣",
  "city_area": "竹南鎮",
  "address": "苗栗縣竹南鎮光復路293-4號",
  "tel": "03-746-5257",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "皇品洋酒",
  "area": "苗栗縣",
  "city_area": "竹南鎮",
  "address": "苗栗縣竹南鎮中港里12鄰環市路二段1號1樓",
  "tel": "03-748-3366",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "卡諾曼菸酒",
  "area": "苗栗縣",
  "city_area": "頭份市",
  "address": "苗栗縣頭份市八德一路226號",
  "tel": "03-769-2386",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "逍遙菸酒",
  "area": "苗栗縣",
  "city_area": "後龍鎮",
  "address": "苗栗縣後龍鎮中山路330號",
  "tel": "03-772-9448",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "瑩芳行",
  "area": "苗栗縣",
  "city_area": "苑裡鎮",
  "address": "苗栗縣苑裡鎮社苓里7鄰74號",
  "tel": "03-774-2707",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "大登洋酒",
  "area": "苗栗縣",
  "city_area": "通霄鎮",
  "address": "苗栗縣通霄鎮福德路20號",
  "tel": "03-775-8095",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "博酒萊洋酒",
  "area": "苗栗縣",
  "city_area": "苑裡鎮",
  "address": "苗栗縣苑裡鎮博愛路2號",
  "tel": "03-786-0127",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "筌球商行",
  "area": "苗栗縣",
  "city_area": "後龍鎮",
  "address": "苗栗縣後龍鎮南港里1鄰南勢山17-7號",
  "tel": "03-792-1222",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "卓蘭",
  "area": "苗栗縣",
  "city_area": "卓蘭鎮",
  "address": "苗栗縣卓蘭鎮中正西路99之1號",
  "tel": "04-2589-6881",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "中華菸酒",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區中平路152號",
  "tel": "03-220-0521",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金弘笙桃園店",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區經國路402號",
  "tel": "03-263-1444",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "桂冠",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區莒光路43號",
  "tel": "03-283-0079",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒超市",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區領航北路二段75號",
  "tel": "03-287-3823",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "欣酒",
  "area": "桃園市",
  "city_area": "蘆竹區",
  "address": "桃園市蘆竹區新南路一段18號",
  "tel": "03-311-7838",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "桃鑫",
  "area": "桃園市",
  "city_area": "蘆竹區",
  "address": "桃園市蘆竹區大竹路426-3號",
  "tel": "03-313-3328",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "奕鑫行",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區大業路一段290號",
  "tel": "03-325-3272",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "醇酒坊",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區大興西路二段18號",
  "tel": "03-326-2999",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "桃山",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區民族路190號",
  "tel": "03-332-2455",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "吉隆行",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區民生路533號",
  "tel": "03-336-1899",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒園龜山",
  "area": "桃園市",
  "city_area": "龜山區",
  "address": "桃園市龜山區萬壽路二段1230號",
  "tel": "03-349-5548",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "光泉",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區大興路7號",
  "tel": "03-355-4482",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "吉安",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區慈文路347號",
  "tel": "03-358-0407",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "怡和",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區大興西路一段311號",
  "tel": "03-358-1305",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "萬達(桃園)",
  "area": "桃園市",
  "city_area": "龜山區",
  "address": "桃園市龜山區萬壽路二段925號",
  "tel": "03-359-7806",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "醇金酒藏",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區樹仁三街27號",
  "tel": "03-363-0191",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "泓泰行",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區大林路18號",
  "tel": "03-363-7772",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "嵩威",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區桃鶯路119號",
  "tel": "03-366-0782",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "榑倉",
  "area": "桃園市",
  "city_area": "八德區",
  "address": "桃園市八德區和平路142號1樓",
  "tel": "03-367-3505",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "木適坊",
  "area": "桃園市",
  "city_area": "桃園區",
  "address": "桃園市桃園區中正路1108號",
  "tel": "03-375-3292#9188",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宸瀧煙酒",
  "area": "桃園市",
  "city_area": "八德區",
  "address": "桃園市八德區義勇街35號",
  "tel": "03-377-9919",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "巨江洋酒",
  "area": "桃園市",
  "city_area": "大溪區",
  "address": "桃園市大溪區介壽路924號",
  "tel": "03-380-2056",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "海珊",
  "area": "桃園市",
  "city_area": "大園區",
  "address": "桃園市大園區新興路50號",
  "tel": "03-386-3955",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大樹",
  "area": "桃園市",
  "city_area": "大園區",
  "address": "桃園市大園區新生路91號",
  "tel": "03-386-9499",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "杜拜",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區延平路二段9號",
  "tel": "03-402-3666",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "新聯合",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區過嶺里民族路五段108號",
  "tel": "03-420-3610",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "紅酒堡",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區環北路375號",
  "tel": "03-422-5646",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "同洵洋行",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區民權路三段299號",
  "tel": "03-426-8448",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "喜洋洋中壢",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區元生三街123號1F",
  "tel": "03-435-5938",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "安勝上海",
  "area": "桃園市",
  "city_area": "平鎮區",
  "address": "桃園市平鎮區上海路171號",
  "tel": "03-439-9957",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "成功",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區成章二街200號",
  "tel": "03-451-6317",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "弘軒煙酒",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區福州路107號",
  "tel": "03-456-0191",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "松山洋行",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區廈門路38號",
  "tel": "03-459-1512",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "利來福",
  "area": "桃園市",
  "city_area": "楊梅區",
  "address": "桃園市楊梅區泰圳路408巷61號",
  "tel": "03-460-6169",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "阿樹菸酒",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區龍岡路3段289號",
  "tel": "03-460-7375",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳品中壢",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區中園路二段435號之1",
  "tel": "03-462-6666",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "安勝",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區中山東路三段15號",
  "tel": "03-466-6919",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "昌成商行",
  "area": "桃園市",
  "city_area": "楊梅區",
  "address": "桃園市楊梅區秀才路63號",
  "tel": "03-478-4989",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "世鴻商行",
  "area": "桃園市",
  "city_area": "楊梅區",
  "address": "桃園市楊梅區楊新北路21巷1號",
  "tel": "03-478-7289",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "順宏洋酒",
  "area": "桃園市",
  "city_area": "龍潭區",
  "address": "桃園市龍潭區龍元路111號",
  "tel": "03-480-2057",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "碧洱龍潭",
  "area": "桃園市",
  "city_area": "龍潭區",
  "address": "桃園市龍潭區中正路239號",
  "tel": "03-480-5385",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "立基",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區民族路五段101號",
  "tel": "03-490-1050",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "總元",
  "area": "桃園市",
  "city_area": "平鎮區",
  "address": "桃園市平鎮區延平路二段302號",
  "tel": "03-492-6000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金豪酒",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區新明路37號",
  "tel": "03-493-2121",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "久典",
  "area": "桃園市",
  "city_area": "龍潭區",
  "address": "桃園市龍潭區龍華路371號",
  "tel": "03-499-0611",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "別緻",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區中山路247號",
  "tel": "0900-045-583",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "九冠",
  "area": "桃園市",
  "city_area": "平鎮區",
  "address": "桃園市平鎮區民族路153-1號",
  "tel": "0912-887-727",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒盟",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區環西路33號",
  "tel": "0915-001-381",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "森寶",
  "area": "桃園市",
  "city_area": "八德區",
  "address": "桃園市八德區介壽路二段1466號",
  "tel": "0937-963-424",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "瀧德菸酒",
  "area": "桃園市",
  "city_area": "龜山區",
  "address": "桃園市龜山區忠義路二段395號",
  "tel": "0980-347-818",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "威市集",
  "area": "桃園市",
  "city_area": "中壢區",
  "address": "桃園市中壢區華祥一街3巷8號",
  "tel": "0987-177-778",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "林記",
  "area": "高雄市",
  "city_area": "前金區",
  "address": "高雄市前金區光復三街132號",
  "tel": "07-221-8313",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "信禕",
  "area": "高雄市",
  "city_area": "新興區",
  "address": "高雄市新興區復興二路328號",
  "tel": "07-222-0113",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "開普五福店",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區民權一路239號",
  "tel": "07-226-5545",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "冠德-八德店",
  "area": "高雄市",
  "city_area": "新興區",
  "address": "高雄市新興區八德一路196號",
  "tel": "07-236-0639",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宏美-自強",
  "area": "高雄市",
  "city_area": "前金區",
  "address": "高雄市前金區自強二路80-1號",
  "tel": "07-261-9955",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "柯林頓",
  "area": "高雄市",
  "city_area": "新興區",
  "address": "高雄市新興區自立二路80號",
  "tel": "07-285-6161",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "長慶洋行",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區漢口街333號",
  "tel": "07-315-3838",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "東良",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區北平二街187號",
  "tel": "07-322-9287",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大連-上景",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區大連街198",
  "tel": "07-323-6096",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳林森店",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區林森二路2號",
  "tel": "07-331-9333",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "酒谷",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區崇德路416號",
  "tel": "07-341-3863",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "林記-文自店",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區文自路974號",
  "tel": "07-342-9090",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "宏美",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區裕誠路115號",
  "tel": "07-350-5529",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳楠梓",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區鳳楠路142號",
  "tel": "07-358-1333",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寰亨",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區榮總路271號",
  "tel": "07-359-9656",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "廣財",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區民族一路591號",
  "tel": "07-359-9955",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "品鑫",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區軍校路862號",
  "tel": "07-362-5588",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "振昌-右昌",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區三山街220號",
  "tel": "07-363-4036",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "揚洲",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區右昌街516號",
  "tel": "07-363-7369",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶檳德賢",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區德賢路418號",
  "tel": "07-364-0888",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳酒莊",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區仁樂街264號",
  "tel": "07-371-0058",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "上景商行-大連",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區澄觀路788號",
  "tel": "07-372-3223",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "全麥洋行",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區八卦村永仁街313號",
  "tel": "07-373-1801",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳仁武店",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區鳳仁路95-17號",
  "tel": "07-373-7755",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大仁-(寰亨)",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區仁雄路316號",
  "tel": "07-374-5122",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "多多",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區仁忠路60號",
  "tel": "07-375-5371",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶檳九如",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區九如一路229號",
  "tel": "07-387-3300",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "醇酒城(大昌店)",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區大昌二路48號",
  "tel": "07-387-5333",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "高鑫",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區大順二路239號",
  "tel": "07-389-1111",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "信禕灣中店",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區灣中街280號",
  "tel": "07-395-2220",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "臻酒仙-九如",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區九如一路501號",
  "tel": "07-397-4444",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "嘉瑝洋行",
  "area": "高雄市",
  "city_area": "三民區",
  "address": "高雄市三民區澄清路381號",
  "tel": "07-398-6404",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": 1,
  "vintage2007": true
 },
 {
  "store": "邑東洋行九如",
  "area": "高雄市",
  "city_area": "鼓山區",
  "address": "高雄市鼓山區九如四路1005號",
  "tel": "07-533-2732",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "吉恩",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區苓雅一路354號",
  "tel": "07-535-5999",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "南威海洋行",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區三多二路308號",
  "tel": "07-536-0000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "奕欣行中山店",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區中山二路186、188號",
  "tel": "07-5361285",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "廣爺",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區四維三路181號",
  "tel": "07-536-5252",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "柯林頓南屏店",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區南屏路261號",
  "tel": "07-550-5161",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "阿瑟辛亥店",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區辛亥路253號",
  "tel": "07-550-8155",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "奕欣行自由店",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區自由二路331、333號",
  "tel": "07-550-8665",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "振昌-明誠",
  "area": "高雄市",
  "city_area": "鼓山區",
  "address": "高雄市鼓山區明誠三路638號",
  "tel": "07-555-7999",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大第",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區自由二路125號",
  "tel": "07-556-1366",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "明春",
  "area": "高雄市",
  "city_area": "路竹區",
  "address": "高雄市路竹區延平路520號",
  "tel": "07-607-6699",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "奕欣行-梓官",
  "area": "高雄市",
  "city_area": "梓官區",
  "address": "高雄市梓官區中正路272-1號",
  "tel": "07-610-9896",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳橋頭店",
  "area": "高雄市",
  "city_area": "楠梓區",
  "address": "高雄市楠梓區市場街8號",
  "tel": "07-611-0033",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "達玖岡山",
  "area": "高雄市",
  "city_area": "岡山區",
  "address": "高雄市岡山區岡山路262號",
  "tel": "07-621-8601",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶檳岡山",
  "area": "高雄市",
  "city_area": "岡山區",
  "address": "高雄市岡山區岡山路395號",
  "tel": "07-623-0055",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "全允(昇發)",
  "area": "高雄市",
  "city_area": "岡山區",
  "address": "高雄市岡山區巨輪路55-1號",
  "tel": "07-625-8185",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大眾岡山",
  "area": "高雄市",
  "city_area": "岡山區",
  "address": "高雄市岡山區柳橋東路9-1號",
  "tel": "07-629-6157",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大和阿蓮",
  "area": "高雄市",
  "city_area": "阿蓮區",
  "address": "高雄市阿蓮區忠孝路93號",
  "tel": "07-631-2182",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "福記林園",
  "area": "高雄市",
  "city_area": "林園區",
  "address": "高雄市林園區文賢北路6號",
  "tel": "07-641-6633",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶檳林園",
  "area": "高雄市",
  "city_area": "林園區",
  "address": "高雄市林園區東林西路62號",
  "tel": "07-643-9000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "富沅",
  "area": "高雄市",
  "city_area": "大樹區",
  "address": "高雄市大樹區中興南路新興巷22號",
  "tel": "07-652-1169",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鼓山莊旗山店",
  "area": "高雄市",
  "city_area": "旗山區",
  "address": "高雄市旗山區延平一路508號",
  "tel": "07-661-2875",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鼓山莊美濃店",
  "area": "高雄市",
  "city_area": "美濃區",
  "address": "高雄市美濃區中正路二段185號",
  "tel": "07-661-7315",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "奕欣行-美術旗艦",
  "area": "高雄市",
  "city_area": "旗山區",
  "address": "高雄市旗山區延平一路359號",
  "tel": "07-662-1188",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大和-茄萣",
  "area": "高雄市",
  "city_area": "茄定區",
  "address": "高雄市茄定區白砂路172號",
  "tel": "07-690-6003",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "高都菸酒",
  "area": "高雄市",
  "city_area": "路竹區",
  "address": "高雄市路竹區中山路832號",
  "tel": "07-697-6588",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳路竹",
  "area": "高雄市",
  "city_area": "路竹區",
  "address": "高雄市路竹區中山路716",
  "tel": "07-697-7000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "九久中山東",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區中山東路382號",
  "tel": "07-703-3555",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳中庄",
  "area": "高雄市",
  "city_area": "大寮區",
  "address": "高雄市大寮區鳳屏一路183號",
  "tel": "07-703-7000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳鳳山 ",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區光遠路426號",
  "tel": "07-710-6661",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "亨銘",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區光華二路300號",
  "tel": "07-713-0209",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "東瀛",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區二聖路218號",
  "tel": "07-716-1717",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "九久一甲",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區善美里南華路149號右側",
  "tel": "07-716-2899",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "廣爺 永豐店",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區永豐路228號",
  "tel": "07-716-7878",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "阿瑟",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區二聖路67號",
  "tel": "07-717-2802",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "銀盤洋酒",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區建民路158號",
  "tel": "07-722-9018",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "振昌-武廟",
  "area": "高雄市",
  "city_area": "苓雅區",
  "address": "高雄市苓雅區武廟路159號之3",
  "tel": "07-722-9255",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "千倉廩",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區文龍東路128號",
  "tel": "07-733-3986",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大成",
  "area": "高雄市",
  "city_area": "鳯山區",
  "address": "高雄市鳯山區立志街142號",
  "tel": "07-742-5888",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "開普鳳山店",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區青年路一段360號",
  "tel": "07-747-0466",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "寶檳中崙",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區中崙二路537號",
  "tel": "07-755-0000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "福記",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區瑞隆路597號",
  "tel": "07-761-3656",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鳳翊洋行",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區五甲二路52號",
  "tel": "07-767-2835",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "柏格達",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區南京路173號",
  "tel": "07-767-5586",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "嘉瑝洋行文龍店",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區文龍東路785號",
  "tel": "07-780-1989",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": 1,
  "vintage2007": true
 },
 {
  "store": "寶檳大寮 ",
  "area": "高雄市",
  "city_area": "大寮區",
  "address": "高雄市大寮區鳳林三路35號",
  "tel": "07-786-8877",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "九久大寮",
  "area": "高雄市",
  "city_area": "大寮區",
  "address": "高雄市大寮區大寮路662-682號",
  "tel": "07-787-8296",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "奕欣行-中安店",
  "area": "高雄市",
  "city_area": "小港區",
  "address": "高雄市小港區中安路648號",
  "tel": "07-791-2757",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "柏森(金鴻昌)",
  "area": "高雄市",
  "city_area": "小港區",
  "address": "高雄市小港區華昌路105號",
  "tel": "07-791-6998",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "揚昇",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區過勇路260號",
  "tel": "07-792-9156",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "玖邑",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區明鳳三路135號",
  "tel": "07-793-5891",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "九久鳳甲",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區南華一路180號、182號",
  "tel": "07-796-9928",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "允泰",
  "area": "高雄市",
  "city_area": "小港區",
  "address": "高雄市小港區金府路145號",
  "tel": "07-805-3909",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "阿波羅(豐年)",
  "area": "高雄市",
  "city_area": "小港區",
  "address": "高雄市小港區漢民路111號",
  "tel": "07-806-0898",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "福記五甲店",
  "area": "高雄市",
  "city_area": "鳳山區",
  "address": "高雄市鳳山區鎮南里五甲二路740號",
  "tel": "07-813-8811",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "呂記",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區鎮東一街143號",
  "tel": "07-831-8545",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳酒莊-赤仁",
  "area": "高雄市",
  "city_area": "仁武區",
  "address": "高雄市仁武區赤仁路60號",
  "tel": "0909-193-513",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "振昌-美濃",
  "area": "高雄市",
  "city_area": "美濃區",
  "address": "高雄市美濃區泰安路38號",
  "tel": "0909-537-811",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "京鴻莊園菸酒",
  "area": "高雄市",
  "city_area": "前鎮區",
  "address": "高雄市前鎮區民裕街101號",
  "tel": "0913-665-239",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "凱記",
  "area": "高雄市",
  "city_area": "前金區",
  "address": "高雄市前金區青年二路164號",
  "tel": "0916-012-899",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "六合洋行",
  "area": "高雄市",
  "city_area": "新興區",
  "address": "高雄市新興區南台路73巷21號",
  "tel": "0920-390-767",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "達玖岡山",
  "area": "高雄市",
  "city_area": "左營區",
  "address": "高雄市左營區重信路542號",
  "tel": "0979-670-649",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "進益",
  "area": "基隆市",
  "city_area": "仁愛區",
  "address": "基隆市仁愛區愛一路19號",
  "tel": "02-2422-4845",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "晶鴻",
  "area": "基隆市",
  "city_area": "安樂區",
  "address": "基隆市安樂區基金一路117-19號",
  "tel": "02-2434-7000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "佳亨洋行",
  "area": "雲林縣",
  "city_area": "斗六市",
  "address": "雲林縣斗六市明德北路二段81號",
  "tel": "05-532-5898",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "杜康菸酒",
  "area": "雲林縣",
  "city_area": "斗六市",
  "address": "雲林縣斗六市長春路10號",
  "tel": "05-534-6869",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "尚品",
  "area": "雲林縣",
  "city_area": "崙背鄉",
  "address": "雲林縣崙背鄉東興路119號",
  "tel": "05-586-4822",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "欣州酒莊",
  "area": "雲林縣",
  "city_area": "西螺鎮",
  "address": "雲林縣西螺鎮光明西路245號",
  "tel": "05-587-2568",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "斯威特商行",
  "area": "雲林縣",
  "city_area": "斗南鎮",
  "address": "雲林縣斗南鎮義德路100號",
  "tel": "05-597-2468",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "唯君股份有限公司",
  "area": "雲林縣",
  "city_area": "二崙鄉",
  "address": "雲林縣二崙鄉裕民路12號",
  "tel": "05-598-9588",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "有成菸酒",
  "area": "雲林縣",
  "city_area": "西螺鎮",
  "address": "雲林縣西螺鎮光復西路333號",
  "tel": "05-599-1990",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "寶園洋酒",
  "area": "雲林縣",
  "city_area": "台西鄉",
  "address": "雲林縣台西鄉民權路82號",
  "tel": "05-698-2801",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "翔賀菸酒-西螺店",
  "area": "雲林縣",
  "city_area": "西螺鎮",
  "address": "雲林縣西螺鎮興農西路63號",
  "tel": "0955-670-970",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "新莊昌富",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區新樹路226號",
  "tel": "02-2204-0691",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "麥德理新莊",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區龍安街226號",
  "tel": "02-2208-5116",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "新店李",
  "area": "新北市",
  "city_area": "新店區",
  "address": "新北市新店區安康路二段359號",
  "tel": "02-2215-6555",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "瑞騰恆大",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區莒光路55號",
  "tel": "02-2223-5788",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(環球店)",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區中山路三段99號",
  "tel": "02-2226-9990",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(中和店)",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區中山路二段401-1號",
  "tel": "02-2228-6981",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宥翔洋行",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區民享街7號",
  "tel": "02-2228-9877",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "京翰",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區員山路400號",
  "tel": "02-2228-9897",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "名酒集",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區成功路一段93巷23弄13號",
  "tel": "02-2232-4199",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "嘉展",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區景平路576號",
  "tel": "02-2243-8361",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "昭業",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區雨農路5號",
  "tel": "02-2255-5011",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "榮榮菸酒專賣店",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區大仁街42號",
  "tel": "02-2272-0102",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "歐洲酒集",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區立信一街52號",
  "tel": "02-2276-8898",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "阿米可",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區三和路4段292巷13號",
  "tel": "02-2280-7000",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒饌",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區福隆路3號",
  "tel": "02-2280-9666",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "三華",
  "area": "新北市",
  "city_area": "五股區",
  "address": "新北市五股區更洲路23-1號",
  "tel": "02-2282-1112",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "百萬家",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區三民路26巷49弄2號",
  "tel": "02-2285-1230",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "立萬行",
  "area": "新北市",
  "city_area": "五股區",
  "address": "新北市五股區成泰路三段161號",
  "tel": "02-2291-8837",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "全球(林口)",
  "area": "新北市",
  "city_area": "林口區",
  "address": "新北市林口區中山路237號",
  "tel": "02-2601-9757",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "開翔",
  "area": "新北市",
  "city_area": "淡水區",
  "address": "新北市淡水區學府路60-3號",
  "tel": "02-2620-2080",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "鼎級",
  "area": "新北市",
  "city_area": "深坑區",
  "address": "新北市深坑區北深路三段111號",
  "tel": "02-2664-4888",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "尚鋒",
  "area": "新北市",
  "city_area": "三峽區",
  "address": "新北市三峽區大勇路15號",
  "tel": "02-2672-9786",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "正誠行",
  "area": "新北市",
  "city_area": "三峽區",
  "address": "新北市三峽區國光街386號",
  "tel": "02-2673-1515",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "匯眾",
  "area": "新北市",
  "city_area": "三峽區",
  "address": "新北市三峽區光明路72號",
  "tel": "02-2673-7310",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "拿破崙",
  "area": "新北市",
  "city_area": "樹林區",
  "address": "新北市樹林區保安街二段2-7號",
  "tel": "02-2675-0780",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "嘉辰",
  "area": "新北市",
  "city_area": "汐止區",
  "address": "新北市汐止區康寧街514號",
  "tel": "02-2695-6697",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "大楚",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區進安街41號",
  "tel": "02-2857-8957",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "玖頻道",
  "area": "新北市",
  "city_area": "泰山區",
  "address": "新北市泰山區明志路三段217號",
  "tel": "02-2906-6566",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "春泰",
  "area": "新北市",
  "city_area": "新店區",
  "address": "新北市新店區中興路一段291號",
  "tel": "02-2917-5159",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "富淯",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區中正路383號",
  "tel": "02-2926-2188",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳釀I CHEERS 愛酒窩",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區成功路一段80號",
  "tel": "02-2926-3667",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(樂華店)",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區永和路一段127號",
  "tel": "02-2926-7108",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宇釀",
  "area": "新北市",
  "city_area": "中和區",
  "address": "新北市中和區自立路99巷13號",
  "tel": "02-2947-5557",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒海商行",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區貴興路1號",
  "tel": "02-2950-4515",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "覓九洋酒行",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區民族路147號",
  "tel": "02-2955-8889",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "展順",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區僑中一街126號",
  "tel": "02-2966-1167",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "薰嵐菸酒",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區大觀路2段11號",
  "tel": "02-2967-7779",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "三禾菸酒",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區介壽路19號",
  "tel": "02-2972-2792",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金盈酒藏集成店",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區集成路30號",
  "tel": "02-2976-1989",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "全億菸酒有限公司",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區集美街234-236-238號1F",
  "tel": "02-2977-0466",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "豪久",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區中正北路16號1樓",
  "tel": "02-2980-2450",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "萬泰",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區民生街70號",
  "tel": "02-2983-1924",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金盈酒藏忠孝店",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區忠孝路三段9號",
  "tel": "02-2989-0986",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "仟恩",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區五華街110號",
  "tel": "02-2989-6633",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "圜桂桶",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區中誠街46巷4弄1號",
  "tel": "02-2990-5100",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "土城酒庫(婕羽)",
  "area": "新北市",
  "city_area": "土城區",
  "address": "新北市土城區中正路64號1樓",
  "tel": "02-8261-5100",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "麥德理土城",
  "area": "新北市",
  "city_area": "土城區",
  "address": "新北市土城區中央路一段170號",
  "tel": "02-8261-6328",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "琮茂",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區中原路12巷15號",
  "tel": "02-8282-7337",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "民族商行",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區復興路277號",
  "tel": "02-8283-5576",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "譽揚洋酒",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區三民路263號",
  "tel": "02-8285-0118",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "偉成",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區中正路217號",
  "tel": "02-8285-8232",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒霸王蘆洲",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區中山一路258號",
  "tel": "02-8286-0592",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "良新",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區長興路152號",
  "tel": "02-8286-1942",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "恆世聖鼎",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區中央路220號4樓",
  "tel": "02-8522-3900",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒源",
  "area": "新北市",
  "city_area": "新店區",
  "address": "新北市新店區車子路121號",
  "tel": "02-8555-5395",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "啤酒大學",
  "area": "新北市",
  "city_area": "淡水區",
  "address": "新北市淡水區民權路177-3號",
  "tel": "02-8631-4329",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "立誠行",
  "area": "新北市",
  "city_area": "鶯歌區",
  "address": "新北市鶯歌區尖山路185號",
  "tel": "02-8678-1505",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒世界樹林",
  "area": "新北市",
  "city_area": "樹林區",
  "address": "新北市樹林區中華路233號",
  "tel": "02-8686-8768",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "正琪",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區重慶路291號",
  "tel": "02-8953-3600",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "佳賀(板新店)",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區中山路二段9號",
  "tel": "02-8953-8966",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "賣酒",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區大榮街9號",
  "tel": "02-8981-6670",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "久倫酒國聯軍",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區雙園街134號",
  "tel": "02-8981-7707",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "恆生",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區三陽路37號",
  "tel": "02-8982-9299",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宏聲",
  "area": "新北市",
  "city_area": "三重區",
  "address": "新北市三重區自強路二段23號",
  "tel": "02-8988-3201",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "豊棋",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區中平路32號",
  "tel": "02-8993-6137",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "喜沅商行",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區中和街84號",
  "tel": "02-8994-1632",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "迪達",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區福和路131號",
  "tel": "0916-333-938",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "巷弄洋酒",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區光榮路136號",
  "tel": "0916-873-749",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "叡鴻",
  "area": "新北市",
  "city_area": "新莊區",
  "address": "新北市新莊區中正路899-1號",
  "tel": "0918-326-903",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "緯峰洋酒",
  "area": "新北市",
  "city_area": "蘆洲區",
  "address": "新北市蘆洲區復興路176號",
  "tel": "0933-818-435",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "168酒業",
  "area": "新北市",
  "city_area": "永和區",
  "address": "新北市永和區保福路二段69號",
  "tel": "0958-135-925",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "熊鑽菸酒",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區金門街335號",
  "tel": "0958-919-335",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "龍合",
  "area": "新北市",
  "city_area": "板橋區",
  "address": "新北市板橋區四川路一段8號",
  "tel": "0970-666-126",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "旭品洋酒",
  "area": "新竹市",
  "city_area": "東區",
  "address": "新竹市東區東門街104號",
  "tel": "03-522-2622",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大豐行",
  "area": "新竹市",
  "city_area": "北區",
  "address": "新竹市北區北門街193號",
  "tel": "03-525-3092",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "國暉",
  "area": "新竹市",
  "city_area": "北區",
  "address": "新竹市北區延平路一段340號",
  "tel": "03-525-6599",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "新茂洋菸酒",
  "area": "新竹市",
  "city_area": "北區",
  "address": "新竹市北區經國路二段249號",
  "tel": "03-533-4579",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "太丸",
  "area": "新竹市",
  "city_area": "東區",
  "address": "新竹市東區民權路61號",
  "tel": "03-535-2527",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "文彬",
  "area": "新竹市",
  "city_area": "香山區",
  "address": "新竹市香山區牛埔南路532號",
  "tel": "03-538-1225",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "呈鑫",
  "area": "新竹市",
  "city_area": "東區",
  "address": "新竹市東區光復路一段48號",
  "tel": "03-577-9069",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "布萊恩菸酒",
  "area": "新竹市",
  "city_area": "東區",
  "address": "新竹市東區長春街121號",
  "tel": "03-579-0377",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "茂豐行",
  "area": "新竹市",
  "city_area": "北區",
  "address": "新竹市北區林森路275號",
  "tel": "0938-027-028",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "合順",
  "area": "新竹市",
  "city_area": "東區",
  "address": "新竹市東區民生路266號",
  "tel": "0965-393-669",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金樽竹北",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市光明六路東二段7號",
  "tel": "03-550-9309",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "旭亨竹北",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市縣政二路512號",
  "tel": "03-555-7388",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "景裕商行",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市鳳岡路二段151巷56號",
  "tel": "03-556-0160",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "發發發",
  "area": "新竹縣",
  "city_area": "新豐鄉",
  "address": "新竹縣新豐鄉新興路269號",
  "tel": "03-559-1199",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "八八八",
  "area": "新竹縣",
  "city_area": "竹東鎮",
  "address": "新竹縣竹東鎮長春路三段82號",
  "tel": "03-596-6151",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "國豐",
  "area": "新竹縣",
  "city_area": "湖口鄉",
  "address": "新竹縣湖口鄉成功路89號",
  "tel": "03-599-1055",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "正泓洋酒",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市博愛街204-1號",
  "tel": "03-656-5166",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "彬宏煙酒",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市中華路119號",
  "tel": "03-656-5888",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "艾薇洋酒",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市莊敬南路53號",
  "tel": "03-657-6354",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "酒心",
  "area": "新竹縣",
  "city_area": "湖口鄉",
  "address": "新竹縣湖口鄉中山路一段608號",
  "tel": "0910-733-249",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "酒管家",
  "area": "新竹縣",
  "city_area": "竹北市",
  "address": "新竹縣竹北市福興路794號",
  "tel": "0916-633-221",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒國英雄菸酒",
  "area": "嘉義市",
  "city_area": "友愛路",
  "address": "嘉義市友愛路221號",
  "tel": "05-233-1212",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒客菸酒",
  "area": "嘉義市",
  "city_area": "友愛路",
  "address": "嘉義市友愛路138號",
  "tel": "05-281-0669",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "順飲-嘉義店",
  "area": "嘉義市",
  "city_area": "西區",
  "address": "嘉義市西區上海路209號",
  "tel": "05-283-8383",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "八八煙酒水-新生店",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市友愛路337號",
  "tel": "05-216-3988",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "晉福菸酒",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市民生北路233號",
  "tel": "05-222-5943",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "盈嘉商行",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市南京路401號",
  "tel": "05-236-8882",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "上村行菸酒",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市民族路109號",
  "tel": "05-276-0970",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "歡喜菸酒顏福來",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市新生路642號",
  "tel": "05-277-6111",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "萬鴻菸酒",
  "area": "嘉義縣",
  "city_area": "嘉義市",
  "address": "嘉義縣嘉義市興業西路71號",
  "tel": "05-286-1698",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒仙商行",
  "area": "嘉義縣",
  "city_area": "竹崎鄉",
  "address": "嘉義縣竹崎鄉中華路2-3號",
  "tel": "0905-037-371",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "加納洋酒",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市民生路15號",
  "tel": "04-722-6371",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "吉福菸酒",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市自強路32號",
  "tel": "04-726-2688",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": false
 },
 {
  "store": "日享商行",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市彰南路二段232號",
  "tel": "04-738-8507",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒尊洋酒",
  "area": "彰化縣",
  "city_area": "和美鎮",
  "address": "彰化縣和美鎮和頭路21號",
  "tel": "04-756-6711",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金馬菸酒",
  "area": "彰化縣",
  "city_area": "秀水鄉",
  "address": "彰化縣秀水鄉雅興街229號",
  "tel": "04-763-0813",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "金元富",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市水源路568號",
  "tel": "047-63-9918",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "上海菸酒",
  "area": "彰化縣",
  "city_area": "秀水鄉",
  "address": "彰化縣秀水鄉番花路362號",
  "tel": "04-769-6194",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "佳沅菸酒",
  "area": "彰化縣",
  "city_area": "鹿港鎮",
  "address": "彰化縣鹿港鎮鹿和路三段440號",
  "tel": "04-771-1968",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "永記商行",
  "area": "彰化縣",
  "city_area": "鹿港鎮",
  "address": "彰化縣鹿港鎮鹿草路5段243號",
  "tel": "04-771-2629",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "宇夏菸酒",
  "area": "彰化縣",
  "city_area": "埔心鄉",
  "address": "彰化縣埔心鄉員鹿路一段435號",
  "tel": "04-828-1190",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "隆豐菸酒",
  "area": "彰化縣",
  "city_area": "埔心鄉",
  "address": "彰化縣埔心鄉東門村正義路70號",
  "tel": "04-829-2053",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大芳菸酒",
  "area": "彰化縣",
  "city_area": "員林市",
  "address": "彰化縣員林市光明街152號",
  "tel": "04-832-1475",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "萬桶菸酒",
  "area": "彰化縣",
  "city_area": "員林市",
  "address": "彰化縣員林市靜修東路81號",
  "tel": "04-832-3777",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "酒之店菸酒",
  "area": "彰化縣",
  "city_area": "員林市",
  "address": "彰化縣員林市三民東街51號",
  "tel": "04-834-0730",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "光輝菸酒",
  "area": "彰化縣",
  "city_area": "員林市",
  "address": "彰化縣員林市中山路一段583號",
  "tel": "04-835-5666",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "日進菸酒",
  "area": "彰化縣",
  "city_area": "員林市",
  "address": "彰化縣員林市員水路二段155號",
  "tel": "04-836-0781",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒樂菸酒",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市員林市三民東街63號",
  "tel": "04-839-7566",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "萬芳菸酒",
  "area": "彰化縣",
  "city_area": "大村鄉",
  "address": "彰化縣大村鄉大仁路一段144號",
  "tel": "04-852-5430",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "大旺菸酒",
  "area": "彰化縣",
  "city_area": "社頭鄉",
  "address": "彰化縣社頭鄉員集路二段229號",
  "tel": "04-871-1009",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "年代菸酒",
  "area": "彰化縣",
  "city_area": "田中鎮",
  "address": "彰化縣田中鎮南北街140號",
  "tel": "04-874-5016",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "品銘菸酒",
  "area": "彰化縣",
  "city_area": "北斗鎮",
  "address": "彰化縣北斗鎮復興路158號",
  "tel": "04-878-2966",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "江夏菸酒",
  "area": "彰化縣",
  "city_area": "溪湖鎮",
  "address": "彰化縣溪湖鎮西環路492號",
  "tel": "04-885-9227",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "永承商行-北斗店",
  "area": "彰化縣",
  "city_area": "北斗鎮",
  "address": "彰化縣北斗鎮斗苑路二段71號",
  "tel": "04-887-4055",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "金思維洋酒",
  "area": "彰化縣",
  "city_area": "北斗鎮",
  "address": "彰化縣北斗鎮斗苑路一段291號",
  "tel": "04-888-8915",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "青旺菸酒",
  "area": "彰化縣",
  "city_area": "埤頭鄉",
  "address": "彰化縣埤頭鄉彰水路三段550號",
  "tel": "048-91-0252",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "員外茶莊",
  "area": "彰化縣",
  "city_area": "二林鎮",
  "address": "彰化縣二林鎮西平里建國路411號",
  "tel": "04-896-2037",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "臻品菸酒",
  "area": "彰化縣",
  "city_area": "二林鎮",
  "address": "彰化縣二林鎮斗苑路五段399號",
  "tel": "04-896-8308",
  "thedalmore18": true,
  "thedalmore21": false,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "摩登菸酒",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市南郭路一段55號",
  "tel": "0986-703-602",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "酒樓洋行",
  "area": "彰化縣",
  "city_area": "彰化市",
  "address": "彰化縣彰化市林森路387號",
  "tel": "0987-117-755",
  "thedalmore18": false,
  "thedalmore21": false,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 },
 {
  "store": "上暘洋菸酒",
  "area": "澎湖縣",
  "city_area": "馬公市",
  "address": "澎湖縣馬公市光復路142號",
  "tel": "06-926-5576",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": true,
  "vintage2003": true,
  "vintage2007": true
 },
 {
  "store": "澎湖小紅莓",
  "area": "澎湖縣",
  "city_area": "馬公市",
  "address": "澎湖縣馬公市民福路41號",
  "tel": "06-927-3733",
  "thedalmore18": true,
  "thedalmore21": true,
  "thedalmore25": false,
  "vintage2003": false,
  "vintage2007": true
 }
];
/* harmony default export */ __webpack_exports__["default"] = (all_stores);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmNANC4wL2Fzc2V0cy9wbHVnaW5zL2phc29uX2RhdGEvbmV3c19saXN0LmpzIiwid2VicGFjazovLy8uL3NyY0A0LjAvYXNzZXRzL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXhTZXR1cCIsImNhY2hlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZG9uZSIsImRhdGEiLCJodG1sIiwiaGVhZGVyRnVuY3Rpb24iLCJnb1RvcCIsImFnZUdhdGVTd2l0Y2hlciIsInByaXZhY3lTd2l0Y2hlciIsImFncmVlbWVudFN3aXRjaGVyIiwidG9vbHNMaXN0ZW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibWVkaWFRdWVyeSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidG9nZ2xlIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5uZXJXaWR0aCIsImJyZWFrcG9pbnQiLCJvbiIsInJlc2l6ZSIsImFkZENsYXNzIiwicHJvcCIsImdldENvb2tpZSIsInVuZGVmaW5lZCIsInJlbW92ZUNsYXNzIiwic2V0Q29va2llWWVhciIsImdvVG9wU2hvdyIsImVsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImdvVG9wRml4ZWQiLCJ0YXJnZXRFbCIsInRyaWdnZXJOdW0iLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwidGFyZ2VyTnVtIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2V0S3ZJbnRlcnZhbCIsImNhcm91c2VsIiwiaW50ZXJ2YWwiLCJzbGlja1N3aXRjaGVyIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsInNldHRpbmdzIiwidGFiIiwiJGxpbmsiLCJlcSIsImZpbmQiLCJhdHRyIiwic2libGluZ3MiLCJoaWRlIiwibm90IiwiY2hpbGRyZW4iLCJmYWRlSW4iLCJsb2FkIiwidGFiRml4ZWQiLCJzdHlsZSIsImNzc1RleHQiLCJmaXhTbWFydHBob25lMTAwdmgiLCJ2aCIsInNldFByb3BlcnR5Iiwic3RvcmVGaWx0ZXJOb3RpZmljYXRpb24iLCJ0cmlnZ2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2hlY2tlZE51bSIsImxlbmd0aCIsImNsZWFyQWxsQnRuRWwiLCJjbGVhckNoZWNrQm94IiwidGFyZ2V0cyIsImJsdXIiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNoZWNrZWQiLCJ0b2dnbGVWaXNpYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJoYXNNZWRpYVF1ZXJ5IiwiaXNNb2JpbGUiLCJjbGlja0NvbmZpcm0iLCJuZXdzTGlzdFZ1ZSIsIlBBR0VfU0laRSIsIkZPT19EQVRBIiwibmV3c19saXN0IiwiVnVlIiwiY29tcG9uZW50IiwiVnVlanNQYWdpbmF0ZSIsInZ1ZSIsImlucGFnZWRhdGEiLCJsaXN0ZGF0YSIsImN1cnJlbnRQYWdlIiwicGFnZUNvdW50IiwiY29tcHV0ZWQiLCJwYWdlZExpc3RkYXRhIiwidm0iLCJmaWx0ZXIiLCJ4IiwicGFnZSIsIndhdGNoIiwidmFsIiwiX3NldFBhZ2UyTW9kZWwiLCJmaWx0ZXJzIiwiZWxsaXBzaXMiLCJ2YWx1ZSIsImxlbiIsIm1ldGhvZHMiLCJwYXJzZUludCIsImkiLCIkc2V0IiwicGFnZUNhbGxiYWNrIiwiY3JlYXRlZCIsInJldmVyc2UiLCJzdG9yZUxpc3RWdWUiLCJzZWN0aW9ucyIsInN0b3JlcyIsInN0b3Jlc19saXN0Iiwic2VsZWN0ZWRfYXJlYSIsInNlbGVjdGVkX2NpdHlfYXJlYSIsInF0ZXh0IiwiY2l0eV9hcmVhcyIsImFyZWFfY2hhbmdlIiwicm93cyIsImVsZW1lbnQiLCJpbmRleCIsImZvdW5kIiwiZ3JvdXBSd29zIiwiaGFzT3duUHJvcGVydHkiLCJjaXR5X2FyZWFfY2hhbmdlIiwicXVlcnkiLCJ0ZXh0IiwidHJpbSIsImFsZXJ0Iiwicm93RGF0YSIsImNpdHlfYXJlYSIsImZsYWciLCJpbmRleE9mIiwic2Nyb2xsIiwibGF6eUxvYWQiLCJ0aXRsZSIsImltZ1NyYyIsInRleHRDb250ZW50IiwiYUhyZWYiLCJhbGxfc3RvcmVzIiwic3RvcmUiLCJhZGRyZXNzIiwidGVsIiwiYXJlYSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7RUFDNUJG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RSxLQURUO0VBRUVDLE9BQU8sRUFBRSxpQkFGWDtFQUdFQyxHQUFHLEVBQUUsYUFIUDtFQUlFQyxJQUFJLEVBQUUsS0FKUjtFQUtFYixTQUFTLEVBQUU7QUFMYixDQXhsS2lCLEVBZ21LakI7RUFDRVUsS0FBSyxFQUFFLEtBRFQ7RUFFRUMsT0FBTyxFQUFFLGVBRlg7RUFHRUMsR0FBRyxFQUFFLGFBSFA7RUFJRUMsSUFBSSxFQUFFLEtBSlI7RUFLRWIsU0FBUyxFQUFFO0FBTGIsQ0FobUtpQixFQXdtS2pCO0VBQ0VVLEtBQUssRUFBRSxJQURUO0VBRUVDLE9BQU8sRUFBRSxhQUZYO0VBR0VDLEdBQUcsRUFBRSxhQUhQO0VBSUVDLElBQUksRUFBRSxLQUpSO0VBS0ViLFNBQVMsRUFBRTtBQUxiLENBeG1LaUIsRUFnbktqQjtFQUNFVSxLQUFLLEVBQUUsT0FEVDtFQUVFQyxPQUFPLEVBQUUsZUFGWDtFQUdFQyxHQUFHLEVBQUUsYUFIUDtFQUlFQyxJQUFJLEVBQUUsS0FKUjtFQUtFYixTQUFTLEVBQUU7QUFMYixDQWhuS2lCLENBQW5CO0FBeW5LZVMseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmNANC4wL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiLy8gYWpheCDphY3lkIhKUTMg5byV5YWl6Kit572uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuYWpheFNldHVwKHsgY2FjaGU6IGZhbHNlIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgIGhlYWRlckZ1bmN0aW9uKCk7XG4gIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19mb290ZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2Zvb3RlclwiKS5odG1sKGRhdGEpO1xuICAgIGdvVG9wKCk7XG4gICAgYWdlR2F0ZVN3aXRjaGVyKCk7XG4gICAgcHJpdmFjeVN3aXRjaGVyKCk7XG4gICAgYWdyZWVtZW50U3dpdGNoZXIoKTtcbiAgfSk7XG59KTtcbi8vIOmBuOWWrlxuZnVuY3Rpb24gdG9vbHNMaXN0ZW5lcigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdXNlTW91c2VcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJqcy11c2VLZXlib2FyZFwiKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImpzLXVzZUtleWJvYXJkXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzLXVzZU1vdXNlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZ1bmN0aW9uKCkge1xuICB2YXIgYnJlYWtwb2ludCA9IDc2ODtcbiAgdG9nZ2xlTW9iaWxlTWVudShicmVha3BvaW50KTtcbn1cbi8vIFtFbmRdIOmBuOWWrlxuLy/kvb/nlKjmop3mrL5cbmZ1bmN0aW9uIGFncmVlbWVudFN3aXRjaGVyKCkge1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIilbMV0ucmVtb3ZlKCk7XG4gICAgLy8gJCgnI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkJykuY3NzKFwicGFkZGluZy1yaWdodFwiLCBcIjE3cHhcIik7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAkKCcjYWdyZWVtZW50TW9kYWxDZW50ZXJfSWQnKS5jc3MoXCJwYWRkaW5nLWxlZnRcIiwgXCIwcHhcIik7XG4gICAgfSk7XG4gIH0pO1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xuICB9KTtcbiAgJChcIiNhZ3JlZW1lbnRCdXR0b25fSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNsZWdhbENoZWNrYm94X0lkXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICB9KTtcbn1cbi8v6Zqx57Wy5qyK5pS/562WKOmFjeWQiGFnZUdhdGUuanPoo6HpnaLnmoRzZXRDb29raWVZZWFyKCkpXG5mdW5jdGlvbiBwcml2YWN5U3dpdGNoZXIoKSB7XG4gIGlmIChnZXRDb29raWUoXCJwcml2YWN5X2RhbG1vcmVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIubC1mb290ZXItcHJpdmFjeVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAkKFwiI2FjY2VwdFByaXZhY3lfSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmwtZm9vdGVyLXByaXZhY3lcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICBzZXRDb29raWVZZWFyKFwicHJpdmFjeV9kYWxtb3JlXCIpO1xuICAgIH0pO1xuICB9XG59XG4vL2dvIHRvcFxuZnVuY3Rpb24gZ29Ub3BTaG93KCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtZm9vdGVyLWdvVG9wIGFcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCkge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXItZ29Ub3AgYVwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgLy/nva7poILmjInpiJXnmoTmjbLli5XpgJ/luqZcbiAgICAkKFwiLmwtZm9vdGVyLWdvVG9wIGFcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3BGaXhlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3RlclwiKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3Rlci1nb1RvcCBhXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgdHJpZ2dlck51bSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRyaWdnZXJOdW0gPT0gXCIgKyB0cmlnZ2VyTnVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgKGVsLm9mZnNldFRvcCArIChlbC5vZmZzZXRIZWlnaHQgLyAzKSkpO1xuICAgIHZhciB0YXJnZXJOdW0gPSBlbC5vZmZzZXRUb3A7XG4gICAgaWYgKHRyaWdnZXJOdW0gPj0gdGFyZ2VyTnVtICsgZWwub2Zmc2V0SGVpZ2h0IC8gMS41KSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKFwianMtYWNpdHZlXCIpO1xuICAgIH1cbiAgfVxufVxuLy9bRW5kXSBnbyB0b3Bcbi8vIOmmlumggei8quaSrVxuZnVuY3Rpb24gc2V0S3ZJbnRlcnZhbCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdlwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJChcIiNrdlwiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaWNrU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImFqYXgvX3Byb2R1Y3RJbnBhZ2Vfc2xpY2suaHRtbFwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpLmh0bWwoZGF0YSk7XG4gICAgICAkKFwiLnYtc2xpY2tcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4vL+eUouWTgemggXRhYlxuZnVuY3Rpb24gdGFiKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtdGFiXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgJGxpbmsgPSAkKFwiLnRhYi1saXN0IC50YWItYnRuXCIpO1xuICAgICQoJGxpbmsuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcImFcIikuYXR0cihcImhyZWZcIikpXG4gICAgICAuc2libGluZ3MoXCIudGFiLWNvbnRlbnRcIilcbiAgICAgIC5oaWRlKCk7XG4gICAgJGxpbmsuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChcImh0bWwsYm9keVwiKS5zY3JvbGxUb3AoMCk7XG4gICAgICAvLyAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIDEwMDBcbiAgICAgIC8vICk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi50YWItbGlzdCAudGFiLWJ0blwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKCQodGhpcykuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJocmVmXCIpKVxuICAgICAgICAuZmFkZUluKClcbiAgICAgICAgLnNpYmxpbmdzKFwiLnRhYi1jb250ZW50XCIpXG4gICAgICAgIC5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmpzLWNsYXNzaWNcIikubG9hZChcImFqYXgvX3Byb2R1Y3RfY2xhc3NpYy5odG1sXCIpO1xuICAgICQoXCIuanMtb2xkXCIpLmxvYWQoXCJhamF4L19wcm9kdWN0X29sZC5odG1sXCIpO1xuICAgICQoXCIuanMtbGltaXRlZFwiKS5sb2FkKFwiYWpheC9fcHJvZHVjdF9saW1pdGVkLmh0bWxcIik7XG4gIH1cbn1cbi8v55Si5ZOB6aCBdGFiRml4ZWRUb3BcbmZ1bmN0aW9uIHRhYkZpeGVkKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtcHJvZHVjdC10YWJcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93LnBhZ2VZT2Zmc2V0ID09IFwiICsgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgZWwub2Zmc2V0VG9wKTtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGVsLm9mZnNldFRvcCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImpzLWFjaXR2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcInBhZGRpbmctdG9wOiBjYWxjKDcycHggKyA2OXB4KVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG4vL+ino+axuuaJi+apn+S4iiBzYWZhcmksIGNocm9tZSDngI/opr3lmaggMTAwdmgg54Sh5rOV5Ymb5aW95LiA5pW06aCB55qE5ZWP6aGMXG5mdW5jdGlvbiBmaXhTbWFydHBob25lMTAwdmgoKSB7XG4gIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmhcIiwgYCR7dmh9cHhgKTtcbn1cblxuLy8g5ZWG5bqX5LiL5ouJ6KSH6YG46YG45Zau55u46ZecXG4vLyDliKTmlrfkuIvmi4npgbjllq7kuK3mmK/lkKbmnInpgbjpoIXooqvpgbjlj5bvvIzpgbjllq7kuIrmnIPmnInli77li75cbmZ1bmN0aW9uIHN0b3JlRmlsdGVyTm90aWZpY2F0aW9uKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtZHJvcGRvd24tbWVudVwiKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NZW51QnV0dG9uXCIpO1xuICBpZiAoZWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dENvbnRhaW5lciArIFwiICsgXCIgKyB0YXJnZXQpO1xuICAgIHZhciB0cmlnZ2VycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRyaWdnZXJzKTtcbiAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGVja2VkTnVtID0gZWwucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWRcIikubGVuZ3RoO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGVja2VkTnVtKTtcbiAgICAgICAgaWYgKGNoZWNrZWROdW0gPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBjbGVhckFsbEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1jbGVhckNoZWNrQm94ZXNcIik7XG4gICAgY2xlYXJBbGxCdG5FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8g5LiA6Y215riF6ZmkaW5wdXTpgbjpoIVcbmZ1bmN0aW9uIGNsZWFyQ2hlY2tCb3goKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtZHJvcGRvd24tbWVudVwiKSkge1xuICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1jbGVhckNoZWNrQm94ZXNcIik7XG4gICAgdmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJpZ2dlci5ibHVyKCk7XG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbi8vIOWIh+aPm+mhr+ekulxuZnVuY3Rpb24gdG9nZ2xlVmlzaWFibGUoZWwsIHRhcmdldCwgbWVkaWFRdWVyeSkge1xuICB2YXIgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKHRhcmdldCkge1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGVWaXNpYWJsXCIpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwianMtYWN0aXZlXCIpO1xuICAgICAgICB2YXIgaGFzTWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIGlmIChoYXNNZWRpYVF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCBtZWRpYVF1ZXJ5O1xuICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtZnVuY3Rpb25NZW51T3BlbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBjbGlja0NvbmZpcm0oZWwsIHRhcmdldCkge1xuICB2YXIgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKHRhcmdldCkge1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtZnVuY3Rpb25NZW51T3BlbmVkXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbi8v5pyA5paw5raI5oGvdnVlXG4vLyBWdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcbmltcG9ydCBuZXdzX2xpc3QgZnJvbSBcIi4uL3BsdWdpbnMvamFzb25fZGF0YS9uZXdzX2xpc3QuanNcIjtcbmZ1bmN0aW9uIG5ld3NMaXN0VnVlKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3NQYWdpbmF0aW9uX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBjb25zdCBQQUdFX1NJWkUgPSA2OyAvL+S4gOWAi+mggemdouimgemhr+ekuuWkmuWwkeethuizh+aWmVxuICAgIGNvbnN0IEZPT19EQVRBID0gbmV3c19saXN0O1xuICAgIFZ1ZS5jb21wb25lbnQoXCJwYWdpbmF0ZVwiLCBWdWVqc1BhZ2luYXRlKTtcbiAgICBjb25zdCB2dWUgPSBuZXcgVnVlKHtcbiAgICAgIGVsOiBcIiNuZXdzUGFnaW5hdGlvbl9JZFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbnBhZ2VkYXRhOiBbXSxcbiAgICAgICAgbGlzdGRhdGE6IFtdLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZUNvdW50OiAxLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2VkTGlzdGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICh2bS5saXN0ZGF0YSAmJiB2bS5saXN0ZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0ubGlzdGRhdGEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB4LnBhZ2UgPT09IHZtLmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSAvLyDlpoLmnpxsaXN0ZGF0Yeacieizh+aWmVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBsaXN0ZGF0YTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3NldFBhZ2UyTW9kZWwoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGVsbGlwc2lzKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgbGVuID0gMTE3O1xuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCBsZW4pICsgXCIuLi5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgX3NldFBhZ2UyTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICghdm0ubGlzdGRhdGEgfHwgdm0ubGlzdGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9XG4gICAgICAgICAgICAgIHBhcnNlSW50KHZtLmxpc3RkYXRhLmxlbmd0aCAvIFBBR0VfU0laRSkgK1xuICAgICAgICAgICAgICAodm0ubGlzdGRhdGEubGVuZ3RoICUgUEFHRV9TSVpFID4gMCA/IDEgOiAwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm0ubGlzdGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdm0uJHNldCh2bS5saXN0ZGF0YVtpXSwgXCJwYWdlXCIsIHBhcnNlSW50KGkgLyBQQUdFX1NJWkUpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYWdlQ2FsbGJhY2s6IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICB0aGlzLiRzZXQodm0sIFwiY3VycmVudFBhZ2VcIiwgcGFnZSk7XG4gICAgICAgICAgLy8g6K6TIGN1cnJlbnRQYWdlIOetieaWvCBwYWdlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0ubGlzdGRhdGEgPSBGT09fREFUQS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgLy8g54K65LqG5LiN5rGh5p+T5pW45pOa77yM6Yed5bCNbGlzdGRhdOWBmua3uuaLt+iynVxuICAgICAgICB2bS5pbnBhZ2VkYXRhID0gRk9PX0RBVEE7XG4gICAgICAgIC8vIOWPpuWklumWi+S6huS4gOe1hOmghuW6j+ato+W4uOeahO+8jOe1puS4gOiIrOWPlueUqFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuLy/llYblupfliJfooahWdWVcbi8vaW1wb3J0IHN0b3Jlc19saXN0IGZyb20gJy4uL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qcyc7XG5pbXBvcnQgc3RvcmVzX2xpc3QgZnJvbSBcIi4uL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qc1wiO1xuZnVuY3Rpb24gc3RvcmVMaXN0VnVlKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3JlRmlsdGVyX0lkXCIpO1xuXG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZ1ZSA9IG5ldyBWdWUoe1xuICAgICAgZWw6IFwiI3N0b3JlRmlsdGVyX0lkXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RvcmVzOiBzdG9yZXNfbGlzdCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RlZF9hcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgICAgICBzZWxlY3RlZF9jaXR5X2FyZWE6IFwiXCIsXG4gICAgICAgIHF0ZXh0OiBcIlwiLFxuICAgICAgICBjaXR5X2FyZWFzOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcmVhX2NoYW5nZSh0aGlzLnNlbGVjdGVkX2FyZWEpO1xuICAgICAgfSxcblxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBhcmVhX2NoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aGlzLnF0ZXh0ID0gXCJcIjtcbiAgICAgICAgICAkKFwiI3F0ZXh0XCIpLnZhbChcIlwiKTtcblxuICAgICAgICAgIHZhciByb3dzID0gdGhpcy5zZWN0aW9uc1swXS5zdG9yZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbXCJhcmVhXCJdID09IGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgZm91bmQgPSB7fTtcbiAgICAgICAgICB2YXIgZ3JvdXBSd29zID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5oYXNPd25Qcm9wZXJ0eShlbGVtZW50W1wiY2l0eV9hcmVhXCJdKVxuICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgIDogKGZvdW5kW2VsZW1lbnRbXCJjaXR5X2FyZWFcIl1dID0gdHJ1ZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmNpdHlfYXJlYXMgPSBncm91cFJ3b3M7XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkX2NpdHlfYXJlYSA9IFwiXCI7XG4gICAgICAgICAgJChcIiNjaXR5X2FyZWFcIikudmFsKFwiXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNpdHlfYXJlYV9jaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnF0ZXh0ID0gXCJcIjtcbiAgICAgICAgICAkKFwiI3F0ZXh0XCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVyeTogZnVuY3Rpb24gKHF0ZXh0KSB7XG4gICAgICAgICAgdmFyIHRleHQgPSAkKFwiI3F0ZXh0XCIpLnZhbCgpLnRyaW0oKTtcblxuICAgICAgICAgIGlmICh0ZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL6Ly45YWl6YCa6Lev5ZCN56ix5oiW5Zyw5Z2AXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucXRleHQgPSB0ZXh0O1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfYXJlYSA9IFwiYWxsXCI7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEgPSBcIlwiO1xuXG4gICAgICAgICAgLy90aGlzLnJvd0RhdGEodGhpcy5zZWxlY3RlZF9hcmVhICwgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEsIHRoaXMucXRleHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJvd0RhdGE6IGZ1bmN0aW9uIChlLCBjaXR5X2FyZWEsIHF0ZXh0KSB7XG4gICAgICAgICAgdmFyIHRleHQgPSBxdGV4dC50cmltKCk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uc1swXS5zdG9yZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRleHQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAvKlxuXHRcdFx0XHQgaWYgKGNpdHlfYXJlYSAhPSBcIlwiKSB7XG5cdFx0XHRcdFx0ZmxhZyA9IGVsZW1lbnRbXCJhcmVhXCJdID09IGUgJiYgIGVsZW1lbnRbXCJjaXR5X2FyZWFcIl0gPT1jaXR5X2FyZWE7XG5cdFx0XHRcdCB9IGVsc2Uge1xuXHRcdFx0XHRcdGZsYWcgPSBlbGVtZW50W1wiYXJlYVwiXSA9PSBlO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgXG5cdFx0XHRcdCAgaWYgKGZsYWcgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0ICovXG5cbiAgICAgICAgICAgICAgZmxhZyA9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtcInN0b3JlXCJdLmluZGV4T2YodGV4dCkgPj0gMCB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJhZGRyZXNzXCJdLmluZGV4T2YodGV4dCkgPj0gMDtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBmbGFnLFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgZWxlbWVudFtcInN0b3JlXCJdLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJhZGRyZXNzXCJdLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJhZGRyZXNzXCJdLmluZGV4T2YodGV4dClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2l0eV9hcmVhICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgaWYgKGUgPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBlbGVtZW50W1wiY2l0eV9hcmVhXCJdID09IGNpdHlfYXJlYTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGFnID1cbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJhcmVhXCJdID09IGUgJiYgZWxlbWVudFtcImNpdHlfYXJlYVwiXSA9PSBjaXR5X2FyZWE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChlID09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gZWxlbWVudFtcImFyZWFcIl0gPT0gZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxhZztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn0gLy/lkbzlj6tmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgdG9vbHNMaXN0ZW5lcigpO1xuICBzZXRLdkludGVydmFsKCk7XG4gIHNsaWNrU3dpdGNoZXIoKTtcbiAgdGFiKCk7XG4gIHRhYkZpeGVkKCk7XG4gIG5ld3NMaXN0VnVlKCk7XG4gIHN0b3JlTGlzdFZ1ZSgpO1xuICBmaXhTbWFydHBob25lMTAwdmgoKTtcbiAgLy8tLS0tLemFkuasvuS4i+aLieebuOmXnGpzXG4gIHN0b3JlRmlsdGVyTm90aWZpY2F0aW9uKCk7XG4gIGNsZWFyQ2hlY2tCb3goKTtcbiAgdG9nZ2xlVmlzaWFibGUoXCIudi1kcm9wZG93bi1idG5cIiwgXCIudi1kcm9wZG93bi1tZW51XCIsIDk5Mik7XG4gIHRvZ2dsZVZpc2lhYmxlKFwiLmNsb3NlXCIsIFwiLnYtZHJvcGRvd24tbWVudVwiLCBcIlwiKTtcbiAgY2xpY2tDb25maXJtKFwiI2pzLWNvbmZpcm1cIiwgXCIudi1kcm9wZG93bi1tZW51XCIpO1xuICAvLy0tLS0tW2VuZF3phZLmrL7kuIvmi4nnm7jpl5xqc1xufSk7XG4vL+WRvOWPq2Z1bmN0aW9uLeimlueql+Wkp+Wwj+iuiuabtFxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7fSk7XG4vL+WRvOWPq2Z1bmN0aW9uLeaNsuWLlVxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gIHRhYkZpeGVkKCk7XG4gIGxhenlMb2FkKCk7XG59KTtcbiIsImNvbnN0IG5ld3NfbGlzdCA9IFt7XG4gICAgdGl0bGU6ICflpKfmkanlhbjol4/nj43nqIDlubTku708YnI+5YW46JeP5pyo55uS542o54275Y+w54GjJyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTAxLndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDEud2VicCddLFxuICAgIHRleHRDb250ZW50OiAn5Z2Q5pOB6JiH5qC86Jit5pyA5Y+k6ICB5qmh5pyo5qG26JeP55qE44CM6ICB6YWS6YqA6KGM44CN5aSn5pGp6YWS5bug77yM55m85biD5YWo5paw57O75YiX44CK5aSn5pGp5YW46JeP54+N56iA5bm05Lu957O75YiXIFRoZSBEYWxtb3JlIFZpbnRhZ2Vz44CL5q2h5oW26YeA6YWS5bel6Jed6Iez6auY5oiQ5bCx77yM6ZmQ6YeP6YWS5qy+IFZpbnRhZ2UgMjAwMuOAgVZpbnRhZ2UgMjAwNSDlsIflnKjnibnlrprkup7mtLLluILloLTpoJDlhYjmm53lhYnvvIzlho3lvoDlhajnkIPlkITlpKfln47luILnmbzluIPvvIzogIzlsJrmoLzphZLmpa3mm7TlsIfpmZDph4/nsr7oo53mnKjnm5LniYjmnKznjajnjbvlj7DngaPvvIzmkLblhYjlhajnkIPpppbnmbzkuIrluILjgIInLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDEuaHRtbCdcbn0sIHtcbiAgICB0aXRsZTogJ+Wkp+aRqTIwMjLpjo/ph5HlpaLlsZU8YnI+6ZuL6JeP5aWn6JedbOiAgemFkumKgOihjCcsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMi53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTAyLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogJ+OAjOWkp+aRqTIwMjLpjo/ph5HlpaLlsZXjgI3mlrwwMeaciDEz5pel5bGV5Ye66IezMDHmnIgyM+aXpeaWvOWPsOWMl+W+rumiqOWNl+WxseiXneaWh+S4reW/g++8jOmZkOacn+WxleWHujEx5aSp44CC5Lul44CM6ICB6YWS6YqA6KGM44CN6YeR5bqr5aSn6ZaA5Y+K6Y6P5YWJ54ag54ag55qE5L+d6Zqq5quD77yM4oCL5YW25Lit5a2Y5pS+6JGX5L6G6Ieq5pmC5YWJ5res6Y2K55qE5aSn5pGp5q235Y+y6YeM56iL56KR5Y+K54+N56iA6YWS5ray54K65bGV6Ka96Kit6KiI5qC45b+D5qaC5b+177yM5ryU57m55aSn5pGp6L+R5YWp55m+5bm05L6G55qE6YWS5bug5q235Y+y44CB5Lq65paH57K+56We44CB5qW16Ie05bel6Jed77yM5rex5bqm5o6i56m25pmC6ZaT5rKJ5r6x5LiL55qE6Z2e5Yeh5YO55YC844CCJyxcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTAyLmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICfnqIDkuJbnj43lk4HlpKfmkak2MuW5tDxicj7lho3noLTmi43os6PntIDpjIQnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDMud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMy53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi6JiH5a+M5q+U5pa8MjAyMOW5tDXmnIgxNOaXpeWxlemWi+S4gOWgtOWQjeeCuum7nua7tOaIkOmHkeeahOe3muS4iueDiOmFkuaLjeizo+acg++8jOWFseaciTIxNumgheWogeWjq+W/jOOAgeW5sumCkeetieeDiOmFkuePjeeogOaLjeWTgeOAguatpOaLjeizo+W3suaWvOWAq+aVpuaZgumWkzIwMjDlubQ15pyIMjjml6XmmZrkuIo46bue57WQ5p2f77yM5Lim55Sx5YWp55O25aSn5pGpNjLlubTku6XpoJDkvLDlg7nlhanlgI3lpJrnmoTpq5jlg7nkuKbliJfmiJDngrrmraTmi43os6PmnIPmnIDpq5jmi43lg7nnmoTnj43lk4HvvIzmiJDkuqTlg7nlkIzngrogR0JQwqMyNjYsMjAw6Iux6Y6KKOe0hOWPsOW5ozEwMDDokKwp44CC44CM5aSn5pGpNjLlubTvvIzkuIDmu7Tpg73kuI3og73mtarosrvjgILjgI3vvIhEYWxtb3JlIDYyIOKAk2Nhbid0IGxldCBhIGRyb3AgaGl0IHRoZSBmbG9vcu+8ge+8ie+8jOmAmeWPpeS+huiHqumbu+W9seOAiumHkeeJjOeJueWLmeOAi+eahOe2k+WFuOWwjeeZve+8jOiqquaYjuS6huWkp+aRqeWogeWjq+W/jOeahOW9jOi2s+ePjeiytO+8jOabtOWxouWxoue3oOmAoOaLjeizo+W4guWgtOS4jeacveWCs+Wlh+OAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDMuaHRtbCdcbn0sIHtcbiAgICB0aXRsZTogJ+atoeaFtuWkp+aRqemFkuW7oDE4MOW5tDxicj7pm6rojokxMuW5tOmpmuixlOS4iuW4gicsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNC53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA0LndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLomIfmoLzomK3pq5jlnLDljYDnmoTjgIzogIHphZLpioDooYzjgI3lpKfmkanphZLlu6DlnKgyMDE55bm05pyr5q2h5bqmMTgw5q2y55Sf5pel77yM6YCZ5aC05LiW57SA5oW255Sf5oyB57qM5YiwMjAyMOW5tO+8jOS7jeiuk+WFqOeQg+WogeWjq+W/jOW4guWgtOiIiOWlruS4jeW3su+8jOWkp+aRqeS4jeWPquaOqOWHuue0gOW/tei8neeFjOaZguWIu+eahDE4MOmAseW5tOe0gOW/temFkuKUgOKUgOWFqOeQg+mZkOmHj+S4ieeTtueahOWkp+aRqTYw5bm05Zau5LiA6bql6Iq95aiB5aOr5b+M77yM5Lim5LiK5biC55uu5YmN5pyA6auY5bm05Lu955qE5aSn5pGpNTHlubToiIflhajmlrDjgIzpm6rojonnlITpgbjns7vliJfjgI0xMuW5tOWWruS4gOm6peiKveWogeWjq+W/jO+8jOS4jeWDheWmguatpO+8jOWkp+aRqeWFqOezu+WIl+WMheijneS5n+WFqOmdouaPm+aWsOijne+8jOioreioiOabtOmhr+WwiuamruWlouiPr++8jOmCgOiri+WFqOS4lueVjOmFkui/t+S4gOWQjOaFtuelneWkp+aRqeWogeWjq+W/jOi1sOWFpeS4i+S4gOWAizE4MOW5tOOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDQuaHRtbCdcbn0sIHtcbiAgICB0aXRsZTogJ+Wkp+aRqTUw5bm054+N56iA55m75aC0PGJyPummluWJteWFpemmmeaqs+ahticsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNS53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA1LndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLngrrkuoboqozmhbblpKfmkanvvIhUaGUgRGFsbW9yZe+8ieWWruS4gOm6peiKveWogeWjq+W/jOmmluW4remHgOmFkuW4q1JpY2hhcmQgUGF0ZXJzb27vvIzoh6oxN+atsui4j+mAsuWogeWjq+W/jOmgmOWfn++8jDI25q2y55W25LiK5aSn5pGp6aaW5bit6YeA6YWS5bir6Iez5LuK5bGG5ru/NTDlubTvvIzpgJnkvY3ntKDmnInjgIznpZ7kuYvpvLvjgI3nvo7orb3nmoTlqIHlo6vlv4zlpKfluKvku6XntK/nqY01MOW5tOeahOi8neeFjOijvemFkuaIkOWwse+8jOaCieW/g+aJk+mAoOS4gOasvuWPsueEoeWJjeS+i+eahOWkp+aRqTUw5bm05aSn5bir5YW46JeP5Zau5LiA6bql6Iq96JiH5qC86Jit5aiB5aOr5b+M77yM5YWo55CD6ZmQ6YeP55m86KGMNTDnk7ZcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA1Lmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkannr4nlhYnlpKfluKvns7vliJdOby4xPGJyPuaUnOaJi+maiOeglOWQvuWGjeWJtemrmOWzsCcsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNi53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA2LndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLlhajnkIPnqpbol4/mnIDnqIDmnInlqIHlo6vlv4znmoTjgIzogIHphZLpioDooYzjgI3lpKfmkanphZLlu6DvvIzov5HlubTkvoboiIfomIfmoLzomK3nrKzkuIDluqfoqK3oqIjljZrnianppKhWJkEgRHVuZGVl5ZCI5L2c5a+G5YiH77yM5L+D5oiQ55W25Luj5bu656+J5aSn5bir6IiH5aiB5aOr5b+M5aSn5bir55qE5Y2U5L2c77yM5Lim5pa8MjAyMuW5tOS4iuW4guWFqOaWsOmFkuasvuezu+WIl++8jOOAjOWkp+aRqeevieWFieWkp+W4q+ezu+WIl+OAjeOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDYuaHRtbCdcbn0sIHtcbiAgICB0aXRsZTogJ+Wkp+aRqeevieWFieWkp+W4q+ezu+WIl05vLjE8YnI+MjAyMumZkOWumueJiCDpmZDph4/pppbnmbwnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDcud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNy53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi6aaW5Ym15Lul5LiJ56iu54+N56iA5qmh5pyo5qG277yM6JiH5qC86Jit5qmh5pyo5qG2IChUYXkgT2FrKeOAgeaXpeacrOawtOalouahtuWSjOe+juWci+eZveapoeacqOahtu+8jOioguijveaIkOOAjOmHkee5vOOAje+8iEtpbnRzdWdp77yJ5qmh5pyo5qG277yM5Lim6Zmz6YeA5Ye65YW35pyJ5aSa6YeN542o54m56aKo5ZGz5LiU5a6M576O5bmz6KGh55qE5Zau5LiA6bql6Iq95aiB5aOr5b+M77yM5YWo55CD6ZmQ6YePMTUsMDAw55O244CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wNy5odG1sJ1xufSxcbntcbiAgICB0aXRsZTogJ+Wkp+aRqeeSgOeSqDE45bm0IDIwMjMgRWRpdGlvbjxicj7pjo/lhYnkuYvol50g6ZmQ6YeP5qG26JePJyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA5LndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDktbWIud2VicCddLFxuICAgIHRleHRDb250ZW50OiBcIuWkp+aRqeiAgemFkue2k+WFuOS5i+S4gO+8jeWkp+aRqTE45bm05Zau5LiA6bql6Iq96JiH5qC86Jit5aiB5aOr5b+M77yM5pa8MjAyMeW5tOWFqOeQg+eGsemKt+S4gOepuuW+jO+8jOmAoOaIkOWogeWjq+W/jOmRkeiznuWutueahOS4gOeJh+aDi+aDnOOAguS7iuW5tO+8jDIwMjPlubTlhajpnaLljYfntJrvvIzlhajmlrDno4XnpKHkuIrluILjgIzlpKfmkannkoDnkqgxOOW5tOWWruS4gOm6peiKveiYh+agvOiYreWogeWjq+W/jCDvvI0yMDIzIEVkaXRpb24gLeOAjVwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDkuaHRtbCdcbn0sIFxue1xuICAgIHRpdGxlOiAn5aSn5pGp5YW46JeP54+N56iA5bm05Lu9PGJyPumbi+awuOaZguWFieWumue+qeePjeeogCcsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wOC53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA4LW1iLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLmk4HmnInmnIDlsIrosrTlqIHlo6vlv4znmoTlpKfmkanphZLlu6DvvIzljrvlubTnmbzluIPlhajmlrDns7vliJfjgIrlpKfmkanlhbjol4/nj43nqIDlubTku73ns7vliJcgVmludGFnZXMgMjAwMi8yMDA144CL5q2h5oW26YeA6YWS5bel6Jed6Iez6auY5oiQ5bCx77yM5Lul6ZmQ6YeP57K+6KOd5pyo55uS54mI5pys542o54275Y+w54Gj77yM5oiQ54K65Y675bm05pyA54ax6ZaA55qE5pS26JeP6Kmx6aGM44CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wOC5odG1sJ1xufSxcbntcbiAgICB0aXRsZTogJ+aUnOaJi+WPsOWMl+aFleiIjemFkuW6lzxicj7miZPpgKDovJ3nhYw45pyI55ub5a60JyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTEwLndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMTAud2VicCddLFxuICAgIHRleHRDb250ZW50OiBcIuWwmuagvOmFkualreeCuuatoeaFtuWxrOaWvOavj+S4gOS9jeeItuimqueahDjmnIjvvIzlvp445pyIOOaXpeiHsznmnIgxMOaXpeeCuuacn+S4gOWAi+aciO+8jOWkp+aRqeWWruS4gOm6peiKveiYh+agvOiYreWogeWjq+W/jOiIh+iWiOiQg+e+jumjn+OAgeiXneihk+iIh+eUn+a0u+WTgeWRs+eahOWci+mam+eyvuWTgemFkuW6l0hPVEVMIE1WU0Eg5oWV6IiN6YWS5bqX6ZuZ5by36IGv5ZCN77yM6YCP6YGO5LiW55WM5pyA5bCK6LK05aiB5aOr5b+M5ZKM5Luk5Lq65Zqu5b6A5YK+5oWV55qE55Sf5rS75bGF6IiN77yM5YWx5Lqr6bue5ru054+N6JeP55qE576O5aW95pmC5YWJ44CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0xMC5odG1sJ1xufSx7XG4gICAgdGl0bGU6ICflpKfmkanlgrPlpYflt6Hnpq48YnI+5YWx6K2c5oGG5LmF55KA55KoJyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTExLndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMTEud2VicCddLFxuICAgIHRleHRDb250ZW50OiBcIuOAjOWkp+aRqeWCs+Wlh+W3oeemruODu+WFseitnOaBhuS5heeSgOeSqOOAjemCgOiri+a2iOiyu+iAhee2k+att+S4gOWgtOi3qOaZguepuuOAgei3qOWci+eVjOeahOWlouiPr+S5i+aXheOAguWcqOacieOAjOelnuS5i+m8u+OAjee+juitveeahOWkp+aRqemmluW4remHgOmFkuW4q1JpY2hhcmQgUGF0ZXJzb27lj4rmlrDnp5HlubTluqbmnIDkvbPph4DphZLluKvvvI3lpKfmkannuL3oo73phZLluKtHcmVnZyBHbGFzc+eahOW4tumgmOS4i++8jOa2iOiyu+iAheW+l+S7peiXnemBiuWkp+aRqee2k+WFuOS9s+mHgOeahOWCs+Wlh+evh+eroO+8jOS4pumnkOi2s+WTgemFqeWFqOaWsOS4iuW4gueahOOAjOWkp+aRqeeSgOeSqDE45bm077yNMjAyMyBFZGl0aW9uIC3jgI1cIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTExLmh0bWwnXG59LFxuXTtcbmV4cG9ydCBkZWZhdWx0IG5ld3NfbGlzdCIsImNvbnN0IGFsbF9zdG9yZXMgPSBbXG4gIHtcbiAgICBzdG9yZTogXCLpgLLnm4pcIixcbiAgICBhZGRyZXNzOiBcIuWfuumahuW4guS7geaEm+WNgOaEm+S4gOi3rzE56JmfXCIsXG4gICAgdGVsOiBcIjAyLTI0MjItNDg0NVwiLFxuICAgIGFyZWE6IFwi5Z+66ZqG5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geaEm+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmmbbptLtcIixcbiAgICBhZGRyZXNzOiBcIuWfuumahuW4guWuieaoguWNgOWfuumHkeS4gOi3rzExN+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNDM0LTcwMDBcIixcbiAgICBhcmVhOiBcIuWfuumahuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronmqILljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YqA55ukLeWjq+ael1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A5aSn5YyX6LevODXomZ9cIixcbiAgICB0ZWw6IFwiMDItMjg4MS02ODI4XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aOr5p6X5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaJv+WQiFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A5paH5p6X6LevNTg35be3MTE16JmfXCIsXG4gICAgdGVsOiBcIjAyLTI4MzItMjkxMVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWjq+ael+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlsZXlrrhcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWjq+ael+WNgOemj+a4r+ihlzE0OeW3tzE15byEOOiZn1wiLFxuICAgIHRlbDogXCIwMi0yODgxLTU4MThcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlo6vmnpfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YqJ5oGG6KOVXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflkIzljYDmsJHnlJ/opb/ot68zNDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU1Ni0wOTQ4XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5ZCM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4uemosFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5aSn5a6J6Lev5LiA5q61MzHlt7cxOeiZn0PlrqRcIixcbiAgICB0ZWw6IFwiMDItMjcwNC0zNTA3XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiyt+mFkue2si3ku4HmhJvploDluIJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOS7geaEm+i3rzTmrrUyOeiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItODc3My0yNjA3XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIua0i+mFkuWfji3ku4HmhJtcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOS7geaEm+i3r+Wbm+autTExMuW3tzIx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3MDktNTE2OFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5Hph4BcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOS7geaEm+i3r+Wbm+autTQxMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzcyLTAxMDFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi54+I5ZOBXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmsLjlurfooZc0MuiZn1wiLFxuICAgIHRlbDogXCIwMi0yMzU3LTg3NzJcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5L2z6LOA5rSL6KGMLeW7tuWQieW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5bu25ZCJ6KGXMTI4LTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc3OS0wODY2XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+m9oemFkuiXjy3pgaDmnbFTT0dP5b+g5a2d5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDlv6DlrZ3mnbHot6/lm5vmrrU0NeiZn0IyXCIsXG4gICAgdGVsOiBcIjAyLTI3NDAtMzc1OFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosrfphZLntrIt5Y+k5Lqt6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmna3lt57ljZfot6/kuozmrrUxMDfomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAyLTIzOTEtMDcwMFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkvbPos4DmtIvooYwt5LuB5oSb5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmnbHosZDooZcyMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMzI1LTYyNTZcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi576O5aSa5a6iXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmnbHosZDooZc3N+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNzA4LTg3MjFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5L2z6LOA5rSL6KGMLeS/oee+qeW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5L+h576p6Lev5LiJ5q61MTI46JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3MDgtMDU4M1wiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmj5DnkapcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOS/oee+qei3r+Wbm+autTI1NOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzAwLTAyNTlcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6LK36YWS57ayLeS/oee+qemWgOW4glwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5L+h576p6Lev5Zub5q61MjY36JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzAzLTAyMzNcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6LK36YWS57ayLeaVpuS4gOmWgOW4glwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5pWm5YyW5Y2X6Lev5LiA5q61MTk26JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3MTEtMDAxOVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosrfphZLntrIt5pWm5LqM6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmlabljJbljZfot6/kuozmrrU5OOiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItMjcwOC0wNzUxXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumjm+S5hVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A5Lit5bGx5YyX6Lev5YWt5q61MjfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjgzMi0xMDk5XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aOr5p6X5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiyt+mFkue2si3kuK3lsbHploDluIJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOS4reWxseWMl+i3r+S6jOautTQ26JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNTMxLTk3NTFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rC45Yip6I+46YWS6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDmsJHnlJ/mnbHot6/kuozmrrU3OeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNTIzLTgwMTlcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p+P6YGU5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDmsJHmrIrmnbHot6/kuozmrrUxNTLlt7cyMuW8hDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjUwOS04NDgwXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiyt+mFkue2si3mnb7msZ/ploDluIJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOadvuaxn+i3rzEzMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNTE2LTE5MTZcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6Zm95YWJ576O6YWS6JaILeS9s+mGh1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTjomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU4MS04NTIwXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuapoeacqOahtuadvuaxn+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTkw6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1NjItODAwMFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpioDosZBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOael+ajruWMl+i3rzEzM+W3tzY46JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1MTEtNjgwNFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlmInliKlcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOael+ajruWMl+i3rzQzOOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNTYzLTM5NjlcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aW956qpXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDplbflronmnbHot6/kuozmrrUyODbomZ9cIixcbiAgICB0ZWw6IFwiMDItODc3Mi0wMDE0XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuadvuael+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5Y2X5Lqs5p2x6Lev5LqM5q61MjHlt7c46JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1MzEtNTc0MVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmqZjlrZDphZLlnYot6Zi/54i+55m8XCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDlvqnoiIjljJfot681MTTlt7cy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1MDQtNzEyM1wiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosrfphZLntrIt5b6p6IiI6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDlvqnoiIjljJfot684NOiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItMjc1Mi01OTkxXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+izgOa0i+ihjC3lhYnoj6/lupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOa4reawtOi3rzU26JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3MTEtNjExOFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5Hnm4NcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOaWsOeUn+WMl+i3r+S6jOautTYy5be3NDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU4MS0xNjUxXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWwj+WFrVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5q2j5Y2A5Lit6I+v6Lev5LqM5q61MzEx5be3NuiZn1wiLFxuICAgIHRlbDogXCIwOS0zNTMxLTUzMDhcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3mraPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5LiW55WMLeS4reato1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5q2j5Y2A5Lit6I+v6Lev5LqM5q61MzEz5be3MTbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjMzNy02NjY1XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5q2j5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotornq5nliY3lupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reato+WNgOW/oOWtneilv+i3r+S4gOautTY26JmfQjJcIixcbiAgICB0ZWw6IFwiMDItMjM3MS0zOTkyXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5q2j5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4g+S4ieS4g1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5YWn5rmW5Y2A5YWn5rmW6Lev5LiA5q61NzM35be3NTHlvIQz6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI2NTctOTEzMFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFp+a5luWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLngYPlp7XphZLmpa1cIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWFp+a5luWNgOWuieW6t+i3rzQyMuiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjMxLTU3NjFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlhafmuZbljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6LK36YWS57ayLeWFp+a5luaXl+iJpumWgOW4glwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5YWn5rmW5Y2A6KGM5oSb6LevNzflt7c2OeiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItODc5Mi01MTg2XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YWn5rmW5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+ixoeWPsOeOllwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5paH5bGx5Y2A5L+d5YSA6LevMTI06JmfXCIsXG4gICAgdGVsOiBcIjAyLTI5MzktMzQzOVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWh+WxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuJbpgZRcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWMl+aKleWNgOaWh+ael+WMl+i3rzE3NuiZn1wiLFxuICAgIHRlbDogXCIwMi0yODIzLTU3NzdcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfmipXljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rW357SN5bedXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDlkInmnpfot68yMjXomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU4MS04NTkwXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIum8juixkFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5bu25ZCJ6KGXNjLlt7c25byEMeiZn1wiLFxuICAgIHRlbDogXCIwMi04NzcyLTg4MjBcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aW96YWS5aSaXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDlhavlvrfot6/lm5vmrrUyMDDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc2OC0xNzg2XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2+5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4gOmFkuS4g+S6lFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5p2+5bGx5Y2A5biC5rCR5aSn6YGT5LqU5q61MTI36JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3NjgtMTk3NVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadvuWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosrfphZLntrIt5rCR55Sf6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDmsJHnlJ/mnbHot6/lm5vmrrU1OOiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItMjcxOC04ODI2XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2+5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+WWnOWuoi3mnb7lsbFcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOWFieW+qeWMl+i3rzEzNuiZn1wiLFxuICAgIHRlbDogXCIwMi04NzcwLTc1NTVcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aSn6JGh5ZySXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDmlabljJbljZfot6/kuIDmrrUxMDItMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzAyLTUwNTNcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5L2z6LOA5rSL6KGMLeawuOWQieW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5rC45ZCJ6LevMTIw5be3OTDomZ9cIixcbiAgICB0ZWw6IFwiMDItNzcyOS00OTk5XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuayg+WIqeeJuVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5rC45ZCJ6LevMjc45be3Mi0z6JmfXCIsXG4gICAgdGVsOiBcIjA5MzMtNDc1LTIxMFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkvbPos4DmtIvooYwt5b+g5a2d5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDlv6DlrZ3mnbHot6825q61Mzg26JmfXCIsXG4gICAgdGVsOiBcIjAyLTI2NTEtOTkzOVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlurfpvaHphZLol48t5Y+w5YyX5b+g5LqU6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDlv6DlrZ3mnbHot6/kupTmrrU1MDTomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAyLTI3MjYtMDg2OFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosrfphZLntrIt5biC5pS/5bqc6ZaA5biCXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDlv6DlrZ3mnbHot6/kupTmrrU1MeiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItMjc2OS02MDk5XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaMr+WunOa0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5b+g5a2d5p2x6Lev5YWt5q61NDkx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI2NTEtMTMyOFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmtbfln47oj7jphZIt5p2+5bGx5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDmnb7lsbHot68yODnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc2NS05MzY2XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotorkv6HnvqlBMTFcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS/oee+qeWNgOadvuWjvei3rzEx6JmfQjJcIixcbiAgICB0ZWw6IFwiMDItMjcyMi0yMzE3XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW/oOS9s+a0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5p2+5b636LevMjg36JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3NTktNzUzM1wiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmpaDoiIhcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS/oee+qeWNgOS/oee+qei3r+WFreautTkx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3MjgtMjc3NVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5HnkZ7miJBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWNl+a4r+WNgOW/oOWtneadsei3r+S4g+autTYwMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzg2LTIyMzlcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmuK/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5re76YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILljZfmuK/ljYDmnbHoiIjooZc5NOiZn1wiLFxuICAgIHRlbDogXCIwOTY1LTQzNS0xNDVcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmuK/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y+L576OXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILljZfmuK/ljYDoiIrojorooZfkuozmrrUz6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3ODItODQ2OVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+a4r+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmmIzlr4zoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOWhlOaCoOi3rzE36JmfXCIsXG4gICAgdGVsOiBcIjAyLTM3NjUtNTg5OVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadvuWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLokKzoj6/nhZnphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOWSjOW5s+ilv+i3r+S4ieautTEwM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yMzAyLTc4OTZcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLokKzoj6/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6aKo5qC8LeWSjOW5s1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5ZKM5bmz6KW/6Lev5LiJ5q61MTYz6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMzYtMTc1OVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvYrms7DmtIvooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOaYhuaYjuihlzE1MOiZn1wiLFxuICAgIHRlbDogXCIwMi0yMzMxLTUxNDdcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLokKzoj6/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5ZyL5aSn5LqoXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILokKzoj6/ljYDljZflr6fot680NS0y6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMDYtMDEwMlwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4znm5tcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOafs+W3nuihlzM46JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMzEtMzI2OVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLokKznm4pcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOafs+W3nuihlzQwLTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjM4Mi0xNjY1XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs6I+v5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumnseWMl+a0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A6LK06Zm96KGX5LqM5q61MTY05be3MzLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjM4My0yMjAxXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs6I+v5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumHkea3rFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5buj5bee6KGXMjAy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMDgtNTY0N1wiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpmL/nsbPlj69cIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOS4ieWSjOi3rzTmrrUyOTLlt7cxM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yMjgwLTcwMDBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5oGG55Sf5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDkuInpmb3ot68zN+iZn1wiLFxuICAgIHRlbDogXCIwMi04OTgyLTkyOTlcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6LOj6YWS5Z2KXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDlpKfmpq7ooZc56JmfXCIsXG4gICAgdGVsOiBcIjAyLTg5ODEtNjY3MFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosarkuYVcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOS4reato+WMl+i3rzE26JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yOTgwLTI0NTBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Luf5oGpXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDkupToj6/ooZcxMTDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4OS02NjMzXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4ieemvuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LuL5aO96LevMTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk3Mi0yNzkyXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiQrOazsFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5rCR55Sf6KGXNzDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4My0xOTI0XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuj+iBslwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A6Ieq5by36Lev5LqM5q61MjPomZ9cIixcbiAgICB0ZWw6IFwiMDItODk4OC0zMjAxXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumHkeebiOmFkuiXjy3lv6DlrZ3lupdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOW/oOWtnei3r+S4ieautTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4OS0wOTg2XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+almlwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A6YCy5a6J6KGXNDHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjg1Ny04OTU3XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWFqOWEhOiPuOmFkuaciemZkOWFrOWPuFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A6ZuG576O6KGXMjM0LTIzNi0yMzjomZ8xRlwiLFxuICAgIHRlbDogXCIwMi0yOTc3LTA0NjZcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS6aWMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDnpo/pmobot68z6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyODAtOTY2NlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuYXlgKvphZLlnIvoga/ou41cIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOmbmeWckuihlzEzNOiZn1wiLFxuICAgIHRlbDogXCIwMi04OTgxLTc3MDdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5bCa5bOwXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInls73ljYDlpKfli4fot68xNeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjcyLTk3ODZcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInls73ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5q2j6Kqg6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInls73ljYDlnIvlhYnooZczODbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY3My0xNTE1XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5bO95Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIum6peW+t+eQhi3lnJ/ln47lupdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guWcn+WfjuWNgOS4reWkrui3r+S4gOautTE3MOiZn1wiLFxuICAgIHRlbDogXCIwMi04MjYxLTYzMjhcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlnJ/ln47ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Zyf5Z+O6YWS5bqrLeWplee+vVwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Zyf5Z+O5Y2A5Lit5q2j6LevNjTomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAyLTgyNjEtNTEwMFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWcn+WfjuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkvbPos4DmtIvooYwt5Lit5ZKM5bqXXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuK3lkozljYDkuK3lsbHot6/kuozmrrU0MDEtMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjI4LTY5ODFcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lkozljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5L2z6LOA5rSL6KGMLeeSsOeQg+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A5Lit5bGx6Lev5LiJ5q61OTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIyNi05OTkwXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5ZKM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuh+mHgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A6Ieq56uL6LevOTnlt7cxM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yOTQ3LTU1NTdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lkozljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Lqs57+wXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuK3lkozljYDlk6HlsbHot680MDDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIyOC05ODk3XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5ZKM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueRnumosOaBhuWkp1wiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A6I6S5YWJ6LevNTXomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIyMy01Nzg4XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5ZKM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWYieWxlVwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A5pmv5bmz6LevNTc26JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyNDMtODM2MVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWSjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnq4vokKzooYxcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS6lOiCoeWNgOaIkOazsOi3r+S4ieautTE2MeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjkxLTg4MzdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkupTogqHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiJ6I+vXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkupTogqHljYDmm7TmtLLot68yMy0x6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyODItMTExMlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6lOiCoeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zmt6/nhZnphZJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guawuOWSjOWNgOS4reato+i3rzM4M+iZn1wiLFxuICAgIHRlbDogXCIwMi0yOTI2LTIxODhcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlkozljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a6l57+UXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmsJHkuqvooZc36JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMjgtOTg3N1wiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOWSjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkvbPos4DmtIvooYwt5qiC6I+v5bqXXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmsLjlkozot6/kuIDmrrUxMjfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjkyNi03MTA4XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+mHgEkgQ0hFRVJTIOaEm+mFkueqqVwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5rC45ZKM5Y2A5oiQ5Yqf6Lev5LiA5q61ODDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjkyNi0zNjY3XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWQjemFkumbhlwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5rC45ZKM5Y2A5oiQ5Yqf6Lev5LiA5q61OTPlt7cyM+W8hDEz6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMzItNDE5OVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOWSjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCIxNjjphZLmpa1cIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guawuOWSjOWNgOS/neemj+i3r+S6jOautTY56JmfXCIsXG4gICAgdGVsOiBcIjA5NTgtMTM1LTkyNVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOWSjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLov6rpgZRcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guawuOWSjOWNgOemj+WSjOi3rzEzMeiZn1wiLFxuICAgIHRlbDogXCIwOTE2LTMzMy05MzhcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlkozljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZiJ6L6wXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsZDmraLljYDlurflr6fooZc1MTTomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY5NS02Njk3XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rGQ5q2i5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuamruamruiPuOmFkuWwiOizo+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A5aSn5LuB6KGXNDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjI3Mi0wMTAyXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiWsOW1kOiPuOmFki3lsZXpoIYy5bqXXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmnb/mqYvljYDlpKfop4Dot68y5q61MTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk2Ny03Nzc5XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+izgOa0i+ihjC3mnb/mlrDlupdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guadv+api+WNgOS4reWxsei3r+S6jOautTnomZ9cIixcbiAgICB0ZWw6IFwiMDItODk1My04OTY2XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIum+jeWQiFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A5Zub5bed6Lev5LiA5q61OOiZn1wiLFxuICAgIHRlbDogXCIwOTcwLTY2Ni0xMjZcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6KaT5Lmd5rSL6YWS6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmnb/mqYvljYDmsJHml4/ot68xNDfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk1NS04ODg5XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaYrealrVwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A6Zuo6L6y6LevNeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjU1LTUwMTFcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5q2j55CqXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmnb/mqYvljYDph43mhbbot68yOTHomZ9cIixcbiAgICB0ZWw6IFwiMDItODk1My0zNjAwXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkua1t+WVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A6LK06IiI6LevMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTUwLTQ1MTVcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5bGV6aCGXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmnb/mqYvljYDlg5HkuK3kuIDooZcxMjbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk2Ni0xMTY3XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumHkeebiOmFkuiXjy3ms7DlsbHlupdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guazsOWxseWNgOemj+iIiOS4ieihlzMy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTg1MzEtMjI4OVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuazsOWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLllaTphZLlpKflrbgt56u55ZyN5bqXXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmt6HmsLTljYDmsJHmrIrot68xNzctM+iZn1wiLFxuICAgIHRlbDogXCIwMi04NjMxLTQzMjlcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmt6HmsLTljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6ZaL57+UXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmt6HmsLTljYDlrbjlupzot682MC0z6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI2MjAtMjA4MFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIua3oeawtOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvI7ntJrntrJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4gua3seWdkeWNgOWMl+a3sei3r+S4ieautTExMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjY0LTQ4ODhcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmt7HlnZHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pil5rOwXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDlupfljYDkuK3oiIjot6/kuIDmrrUyOTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjkxNy01MTU5XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw5bqX5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaWsOW6l+adjlwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5paw5bqX5Y2A5a6J5bq36Lev5LqM5q61MzU56JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMTUtNjU1NVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOW6l+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmupBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOW6l+WNgOi7iuWtkOi3rzEyMeiZn1wiLFxuICAgIHRlbDogXCIwMi04NTU1LTUzOTVcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDlupfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5oGG5LiW6IGW6byOXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3lpK7ot68yMjDomZ805qiTXCIsXG4gICAgdGVsOiBcIjAyLTg1MjItMzkwMFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiOiuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnpaXnibnliKkt6LGK5qOLXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3lubPot68zMuiZn1wiLFxuICAgIHRlbDogXCIwMi04OTkzLTYxMzdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y+h6bS7XCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3mraPot684OTktMeiZn1wiLFxuICAgIHRlbDogXCIwOTE4LTMyNi05MDNcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Zac5rKF5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3lkozooZc4NOiZn1wiLFxuICAgIHRlbDogXCIwMi04OTk0LTE2MzJcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Zyc5qGC5qG2XCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3oqqDooZc0NuW3tzTlvIQx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI5OTAtNTEwMFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiOiuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmrZDmtLLphZLpm4ZcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOeri+S/oeS4gOihlzUy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyNzYtODg5OFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiOiuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmlrDojormmIzlr4xcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOaWsOaouei3rzIyNuiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjA0LTA2OTFcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6bql5b6355CGLeaWsOiOiuW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5paw6I6K5Y2A6b6N5a6J6KGXMjI26JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMDgtNTExNlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiOiuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLkuJbnlYwt5qi55p6XXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmqLnmnpfljYDkuK3oj6/ot68yMzPomZ9cIixcbiAgICB0ZWw6IFwiMDItODY4Ni04NzY4XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qi55p6X5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaLv+egtOW0mS3mqLnmnpdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaoueael+WNgOS/neWuieihl+S6jOautTItN+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNjc1LTA3ODBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmqLnmnpfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6K295o+aXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDkuInmsJHot68yNjPomZ9cIixcbiAgICB0ZWw6IFwiMDItODI4NS0wMTE4XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueZvuiQrOWutlwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC6JiG5rSy5Y2A5LiJ5rCR6LevMjblt7c0OeW8hDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjI4NS0xMjMwXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkumcuOeOiy3omIbmtLJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOS4reWxseS4gOi3rzI1OOiZn1wiLFxuICAgIHRlbDogXCIwMi04Mjg2LTA1OTJcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YGJ5oiQ5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDkuK3mraPot68yMTfomZ9cIixcbiAgICB0ZWw6IFwiMDItODI4NS04MjMyXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueQruiMglwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC6JiG5rSy5Y2A5Lit5Y6f6LevMTLlt7cxNeiZn1wiLFxuICAgIHRlbDogXCIwMi04MjgyLTczMzdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5be35byE5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDlhYnmpq7ot68xMzbomZ9cIixcbiAgICB0ZWw6IFwiMDkxNi04NzMtNzQ5XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiJr+aWsOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC6JiG5rSy5Y2A6ZW36IiI6LevMTUy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTgyODYtMTk0MlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiYhua0suWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLlt55cIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOS/oee+qei3rzE1OOiZn1wiLFxuICAgIHRlbDogXCIwMi04Mjg2LTA2NDBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi56uL6Kqg6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILptq/mrYzljYDlsJblsbHot68xODXomZ9cIixcbiAgICB0ZWw6IFwiMDItODY3OC0xNTA1XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bav5q2M5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuajruWvtlwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5YWr5b635Y2A5LuL5aO96Lev5LqM5q61MTQ2NuiZn1wiLFxuICAgIHRlbDogXCIwOTM3LTk2My00MjRcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlhavlvrfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5qaR5YCJ5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlhavlvrfljYDlkozlubPot68xNDLomZ8xIOaok1wiLFxuICAgIHRlbDogXCIwMy0zNjctMzUwNVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFq+W+t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlrrjngKfnhZnphZJcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guWFq+W+t+WNgOe+qeWLh+ihlzM16JmfXCIsXG4gICAgdGVsOiBcIjAzLTM3Ny05OTE5XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YWr5b635Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIua1t+ePiuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5aSn5ZyS5Y2A5paw6IiI6LevNTDomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzg2LTM5NTVcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflnJLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5beo5rGf5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlpKfmuqrljYDku4vlo73ot685MjTomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzgwLTIwNTZcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfmuqrljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a6J5YudXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDkuK3lsbHmnbHot6/kuInmrrUxNeiZn1wiLFxuICAgIHRlbDogXCIwMy00NjYtNjkxOVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLliKXnt7vkvr/liKnllYblupdcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOS4reWxsei3rzI0N+iZn1wiLFxuICAgIHRlbDogXCIwOTAwLTA0NS01ODNcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5L2z5ZOBLeS4reWjolwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5Lit5ZyS6Lev5LqM5q61NDM16Jmf5LmLMVwiLFxuICAgIHRlbDogXCIwMy00NjItNjY2NlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlurfpvaHphZLol48t6YGg5p2xU09HT+S4reWjouW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5YWD5YyW6LevMzU36JmfQjFcIixcbiAgICB0ZWw6IFwiMDMtNDI3LTkzNTRcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Zac5rSL5rSLLeS4reWjolwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5YWD55Sf5LiJ6KGXMTIz6JmfMUZcIixcbiAgICB0ZWw6IFwiMDMtNDM1LTU5MzhcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi56uL5Z+66I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDmsJHml4/ot6/kupTmrrUxMDHomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDkwLTEwNTBcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZCM5rS15rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDmsJHmrIrot6/kuInmrrUyOTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDI2LTg0NDhcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p2c5oucXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDlu7blubPot6/kuozmrrU56JmfXCIsXG4gICAgdGVsOiBcIjAzLTQwMi0zNjY2XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuahguWGoOmFkuiOilwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6I6S5YWJ6LevNDPomZ9cIixcbiAgICB0ZWw6IFwiMDMtMjgzLTAwNzlcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aiB5biC6ZuGXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDoj6/npaXkuIDooZcz5be3OOiZn1wiLFxuICAgIHRlbDogXCIwOTg3LTE3Ny03NzhcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p2+5bGx5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDlu4jploDot68zOOiZn1wiLFxuICAgIHRlbDogXCIwMy00NTktMTUxMlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5HosarphZJcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOaWsOaYjui3rzM36JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ5My0yMTIxXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaWsOiBr+WQiOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6YGO5ba66YeM5rCR5peP6Lev5LqU5q61MTA46JmfXCIsXG4gICAgdGVsOiBcIjAzLTQyMC0zNjEwXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW8mOi7kuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A56aP5bee6LevMTA36JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ1Ni0wMTkxXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkui2heW4glwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6aCY6Iiq5YyX6Lev5LqM5q61NzXomZ9cIixcbiAgICB0ZWw6IFwiMDMtMjg3LTM4MjNcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6Zi/5qi55rSL6YWSLeS4reWjolwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6b6N5bKh6LevM+autTI4OeiZn1wiLFxuICAgIHRlbDogXCIwMy00NjAtNzM3NVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLntIXphZLloKFcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOeSsOWMl+i3rzM3NeiZn1wiLFxuICAgIHRlbDogXCIwMy00MjItNTY0NlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLnm59cIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOeSsOilv+i3rzMz6JmfXCIsXG4gICAgdGVsOiBcIjA5MTUtMDAxLTM4MVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlronli50t5LiK5rW3XCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlubPpjq7ljYDkuIrmtbfot68xNzHomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDM5LTk5NTdcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlubPpjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Lmd5YagXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlubPpjq7ljYDmsJHml4/ot68xNTMtMeiZn1wiLFxuICAgIHRlbDogXCIwOTEyLTg4Ny03MjdcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlubPpjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi57i95YWD5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlubPpjq7ljYDlu7blubPot6/kuozmrrUzMDLomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDkyLTYwMDBcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlubPpjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rOT5rOw6KGMXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDlpKfmnpfot68xOOiZn1wiLFxuICAgIHRlbDogXCIwMy0zNjMtNzc3MlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpZXpkavooYxcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOWkp+alrei3r+S4gOautTI5MOiZn1wiLFxuICAgIHRlbDogXCIwMy0zMjUtMzI3MlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmgKHlkozlkI3phZJcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOWkp+iIiOilv+i3r+S4gOautTMxMeiZn1wiLFxuICAgIHRlbDogXCIwMy0zNTgtMTMwNVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphofphZLlnYpcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOWkp+iIiOilv+i3r+S6jOautTE46JmfXCIsXG4gICAgdGVsOiBcIjAzLTMyNi0yOTk5XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qGD5ZyS5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWFieaziVwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn6IiI6LevN+iZn1wiLFxuICAgIHRlbDogXCIwMy0zNTUtNDQ4MlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuK3oj6/nhZnphZJcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOS4reW5s+i3rzE1MuiZn1wiLFxuICAgIHRlbDogXCIwMy0yMjAtMDUyMVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnKjpganlnYrphZLnqpZcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOS4reato+i3rzExMDjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzc1LTMyOTIjOTE4OFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlkInpmobooYxcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOawkeeUn+i3rzUzM+iZn1wiLFxuICAgIHRlbDogXCIwMy0zMzYtMTg5OVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmoYPlsbFcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOawkeaXj+i3rzE5MOiZn1wiLFxuICAgIHRlbDogXCIwMy0zMzItMjQ1NVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLltanlqIEt5qGD5ZySXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDmoYPptq/ot68xMTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzY2LTA3ODJcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZCJ5a6J5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDmhYjmlofot68zNDfomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzU4LTA0MDdcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR5byY56yZLeahg+WckuW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A57aT5ZyL6LevNDAy6JmfXCIsXG4gICAgdGVsOiBcIjAzLTI2My0xNDQ0XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qGD5ZyS5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuWcki3pvpzlsbFcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOm+nOWxseWNgOiQrOWjvei3r+S6jOautTEyMzDomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzQ5LTU1NDhcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5piM5oiQXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmpYrmooXljYDnp4DmiY3ot682M+iZn1wiLFxuICAgIHRlbDogXCIwMy00NzgtNDk4OVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIualiuaiheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLliKnkvobnpo9cIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4gualiuaiheWNgOazsOWcs+i3rzQwOOW3tzYx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ2MC02MTY5XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWK5qKF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueip+a0sVwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A5Lit5q2j6LevMjM56JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ4MC01Mzg1XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6b6N5r2t5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumghuWuj+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A6b6N5YWD6LevMTEx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ4MC0yMDU3XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6b6N5r2t5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS5heWFuOeFmemFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A6b6N6I+v6LevMzcx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ5OS0wNjExXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6b6N5r2t5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueAp+W+t+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6c5bGx5Y2A5b+g576p6Lev5LqM5q61Mzk16JmfXCIsXG4gICAgdGVsOiBcIjA5ODAtMzQ3LTgxOFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+nOWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLokKzpgZTmoYPlnJJcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4gum+nOWxseWNgOiQrOWjvei3r+S6jOautTkyNeiZn1wiLFxuICAgIHRlbDogXCIwMy0zNTktNzgwNlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+nOWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmoYPpkatcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guiYhuerueWNgOWkp+eruei3rzQyNi0z6JmfXCIsXG4gICAgdGVsOiBcIjAzLTMxMy0zMzI4XCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG56u55Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaso+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6JiG56u55Y2A5paw5Y2X6Lev5LiA5q61MTjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzExLTc4MzhcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbnq7nljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aSn6LGQ6KGMXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILljJfljYDljJfploDooZcxOTPomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTI1LTMwOTJcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlnIvmmolcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guWMl+WNgOW7tuW5s+i3r+S4gOautTM0MOiZn1wiLFxuICAgIHRlbDogXCIwMy01MjUtNjU5OVwiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkquS4uFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5p2x5Y2A5rCR5qyK6LevNjHomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTM1LTI1MjdcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLml63lk4HmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guadseWNgOadsemWgOihlzEwNOiZn1wiLFxuICAgIHRlbDogXCIwMy01MjItMjYyMlwiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWQiOmghua0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5p2x5Y2A5rCR55Sf6LevMjY26JmfXCIsXG4gICAgdGVsOiBcIjA5NjUtMzkzLTY2OVwiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWRiOmRq+WVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LiA5q61NDjomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTc3LTkwNjlcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLluIPokIrmgannhZnphZJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guadseWNgOmVt+aYpeihlzEyMeiZn1wiLFxuICAgIHRlbDogXCIwMy01NzktMDM3N1wiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiMguixkOihjFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5YyX5Y2A5p6X5qOu6LevMjc16JmfXCIsXG4gICAgdGVsOiBcIjA5MzgtMDI3LTAyOFwiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaWh+W9rFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC6aaZ5bGx5Y2A54mb5Z+U5Y2X6LevNTMy6JmfXCIsXG4gICAgdGVsOiBcIjAzLTUzOC0xMjI1XCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6aaZ5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaWsOiMgua0i+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5YyX5Y2A57aT5ZyL6Lev5LqM5q61MjQ56JmfXCIsXG4gICAgdGVsOiBcIjAzLTUzMy00NTc5XCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5b2s5a6P54WZ6YWSXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPnq7nljJfluILkuK3oj6/ot68xMTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNjU2LTU4ODhcIixcbiAgICBhcmVhOiBcIuaWsOeruee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnq7nljJfluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR5qi9LeerueWMl1wiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55YyX5biC5YWJ5piO5YWt6Lev5p2x5LqM5q61N+iZn1wiLFxuICAgIHRlbDogXCIwMy01NTAtOTMwOVwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmraPms5PmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOeruee4o+erueWMl+W4guWNmuaEm+ihlzIwNC0x6JmfXCIsXG4gICAgdGVsOiBcIjAzLTY1Ni01MTY2XCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55YyX5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkueuoeWutlwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55YyX5biC56aP6IiI6LevNzk06JmfXCIsXG4gICAgdGVsOiBcIjA5MTYtNjMzLTIyMVwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmma/oo5XllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuaWsOeruee4o+erueWMl+W4gumzs+Wyoei3r+S6jOautTE1MeW3tzU26JmfXCIsXG4gICAgdGVsOiBcIjAzLTU1Ni0wMTYwXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55YyX5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaXreS6qC3nq7nljJdcIixcbiAgICBhZGRyZXNzOiBcIuaWsOeruee4o+erueWMl+W4gue4o+aUv+S6jOi3rzUxMuiZn1wiLFxuICAgIHRlbDogXCIwMy01NTUtNzM4OFwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhavlhavlhatcIixcbiAgICBhZGRyZXNzOiBcIuaWsOeruee4o+erueadsemOrumVt+aYpei3r+S4ieautTgy6JmfXCIsXG4gICAgdGVsOiBcIjAzLTU5Ni02MTUxXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55p2x6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWci+ixkFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij5rmW5Y+j6YSJ5oiQ5Yqf6LevODnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTk5LTEwNTVcIixcbiAgICBhcmVhOiBcIuaWsOeruee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmuZblj6PphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi55m855m855m8XCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPmlrDosZDphInmlrDoiIjot68yNjnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTU5LTExOTlcIixcbiAgICBhcmVhOiBcIuaWsOeruee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDosZDphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5bCa6YCy6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPoi5fmoJfluILngrrlhazot68xNznomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzI2LTEyMjNcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoi5fmoJfluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi55qH5ZOB5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPnq7nljZfpjq7kuK3muK/ph4wxMumEsOeSsOW4gui3r+S6jOautTHomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAzLTc0OC0zMzY2XCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55Y2X6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaFtuS9s+ihjC3lhYnlvqnlupdcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+erueWNl+mOruWFieW+qei3rzI5My006JmfXCIsXG4gICAgdGVsOiBcIjAzLTc0Ni01MjU3XCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55Y2X6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWNk+iYrVwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij5Y2T6Jit6Y6u5Lit5q2j6KW/6LevOTnkuYsx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1ODktNjg4MVwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNk+iYremOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLorJnms7DooYxcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+W+jOm+jemOruWkp+W6hOmHjOS4reWxsei3rzQ5OOiZn1wiLFxuICAgIHRlbDogXCIwMy03NzItOTE1NlwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW+jOm+jemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpgI3pgZnoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+W+jOm+jemOruS4reWxsei3rzMzMOiZn1wiLFxuICAgIHRlbDogXCIwMy03NzItOTQ0OFwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW+jOm+jemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnrYznkIPllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+W+jOm+jemOruWNl+a4r+mHjDHphLDljZfli6LlsbExNy036JmfXCIsXG4gICAgdGVsOiBcIjAzLTc5Mi0xMjIyXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b6M6b6N6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumBoOadsea0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuR6KOh6Y6u5oi/6KOh6YeMMemEsDPkuYsx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTc4NS0zMzkxXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuR6KOh6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueRqeiKs+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuR6KOh6Y6u56S+6IuT6YeMN+mEsDc06JmfXCIsXG4gICAgdGVsOiBcIjAzLTc3NC0yNzA3XCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuR6KOh6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWNmumFkuiQiua0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuR6KOh6Y6u5Y2a5oSb6LevMuiZn1wiLFxuICAgIHRlbDogXCIwMy03ODYtMDEyN1wiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLkeijoemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnbHmuqLooYzoj7jphZIt5paw6IiI5bqXXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPoi5Hoo6Hpjq7mlrDlvqnph4w56YSw5paw5b6pMTI16JmfXCIsXG4gICAgdGVsOiBcIjAzLTc4Ni04MDYzXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuR6KOh6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumZveWFieWVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuX5qCX5biC5paH55m86LevNDgx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTczNS0yNzUyXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuX5qCX5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWWnOa0i+a0i+iPuOmFki3ngrrlhazlupdcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+iLl+agl+W4gueCuuWFrOi3rzI4OOiZn1wiLFxuICAgIHRlbDogXCIwMy03MjYtNDY3M1wiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLl+agl+W4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLllpzmtIvmtIvoj7jphZIt6Iux5omN5bqXXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPoi5fmoJfluILoi7HmiY3ot681MuiZn1wiLFxuICAgIHRlbDogXCIwMy03MzctMTA1NlwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLl+agl+W4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLli53lkozoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+iLl+agl+W4guaWsOadseihlzQx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTczMy02NTM2XCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuX5qCX5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWwmuWlveiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuX5qCX5biC57ij5bqc6LevMTE46JmfXCIsXG4gICAgdGVsOiBcIjAzLTczNi0xODAxXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuX5qCX5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+eZu+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6YCa6ZyE6Y6u56aP5b636LevMjDomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzc1LTgwOTVcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpgJrpnITpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2h6Ku+5pu86I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPpoK3ku73luILlhavlvrfkuIDot68yMjbomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzY5LTIzODZcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpoK3ku73luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Zac5rSL5rSL6I+46YWSLemgreS7veW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6aCt5Lu95biC5Lit5aSu6LevMzEw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTc2Ny0wNDU2XCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6aCt5Lu95biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWWnOa0i+a0i+iPuOmFki3ml6XmlrDlupdcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+mgreS7veW4guaXpeaWsOihlzLphLAzM+iZn1wiLFxuICAgIHRlbDogXCIwMy03NjgtMTQ2NlwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIumgreS7veW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmhbbkvbPooYwt5YWJ6I+v5bqXXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPpoK3ku73luILlhYnoj6/ljJfot685MOiZn1wiLFxuICAgIHRlbDogXCIwMy03NjEtMTk5OFwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIumgreS7veW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmhbbkvbPooYwt5p2x5rCR5bqXXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPpoK3ku73luILmnbHmsJHot68xMDfomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzY5LTAwODlcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpoK3ku73luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ouJ6I+y6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfpm4XljYDpm4Xmva3ot6/lm5vmrrU1MDLomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU2Ny0zODE5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkua5lua0i+mFki3lpKfnlLLlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+eUsuWNgOS4reWxsei3r+S4gOautTQ4NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yNjgwLTU4MzZcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfnlLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi57SF6YWS6I6K5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfnlLLljYDlhYnmmI7ot68xMzHomZ9cIixcbiAgICB0ZWw6IFwiMDkzMi02NzctOTQ2XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn55Sy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuiZn+WAieW6qy3lpKfnlLLlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+eUsuWNgOW/oOWtnei3rzYw5be3MeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNjgwLTM3OThcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfnlLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZCM5oeL6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfnlLLljYDkv6Hnvqnot68xNTjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjY4Ni0wMzQwXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn55Sy5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkua4r+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn55Sy5Y2A57aT5ZyL6LevMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNjg2LTgwNzFcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfnlLLljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiD5LiD5pyD56S+5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfogprljYDoh6rmsrvot683N+iZn1wiLFxuICAgIHRlbDogXCIwNC0yNjk5LTgzMjNcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfogprljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Lqs5pe66I+46YWSLeWkp+aYjuW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5aSn5piO6LevNTI16JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MDYtMDE1MlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mHjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLliKnnmb7liqDmtIvphZIt5aSn6YeM5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfph4zljYDkuK3oiIjot6/kuIDmrrUxMS006JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0OTYtMDYzOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mHjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLliKnnmb7liqDmtIvphZIt5YWn5paw5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfph4zljYDkuK3oiIjot6/kuozmrrU1NzbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ4Ni0wODY5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6YeM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumHkeapi+mjn+WTgVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5Lit6IiI6Lev5LqM5q61NzA56JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0ODUtNDY0NlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mHjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zkuInmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOS7geaFiOihlzM1MOiZn1wiLFxuICAgIHRlbDogXCIwOTEwLTUyOS01MjRcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6Im+6ZyP5ry+6YWS5ZOB5bCI6ZaA5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfph4zljYDmsLjpmobot681NzfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQwNi05MDAwXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6YeM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS6rOaXuuiPuOmFki3nm4rmsJHlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOebiuawkei3r+S6jOautTMwMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDg3LTUzOTBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS6Jmf5YCJ5bqrLeWkp+mHjOW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A54i95paH6LevMTEyMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDA2LTMyNDZcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS6Jmf5YCJ5bqrLee4veWAiVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A54i95paH6LevMzk46JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MDYtNDY0OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mHjOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuqzml7roj7jphZIt5aGX5Z+O5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfph4zljYDloZfln47ot682NTfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ5NS0xNjc1XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6YeM5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS6rOaXuuiPuOmFki3mlrDku4HlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOaWsOS7gei3r+S4gOautTIyMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjc5LTEyNDdcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5rmW5rSL6YWSLeWkp+mbheW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6ZuF5Y2A5rCR55Sf6Lev5LiA5q61MjYz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1NjYtNTk0NVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mbheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLlnIvoi7Hosaroj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mbheWNgOawkeeUn+i3r+S4ieautTM1NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTY2LTQ3MTBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfpm4XljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5YCJ5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfpm4XljYDnp5Hpm4Xot68zOTjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU2Ny05MTU5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiMguWzsOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Lit5Y2A6Ieq55Sx6Lev5LqM5q61NTTomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIyNS0yNTI1XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLeS4reWxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5Lit5bGx6Lev5Zub5q61MTI06JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzOTUtMDc0OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkquW5s+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuqzml7roj7jphZIt5rC46LGQ5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKrlubPljYDmsLjosZDot68xOeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjc1LTM0ODlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKrlubPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Lqs5pe66I+46YWSLeadseW5s+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5p2x5bmz6LevNDU16JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyNzAtNTMwOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkquW5s+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnb7os4DmtIvphZIt5aSq5bmz5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKrlubPljYDmnbHlubPot684MDDomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI3OS0xMTE5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSq5bmz5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiMguael+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5paw5bmz6Lev5LiJ5q61MTcx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzOTEtMDU4MlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkquW5s+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5HpoIbllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkquW5s+WNgOaWsOemj+i3rzEwOTbomZ9cIixcbiAgICB0ZWw6IFwiMDkxMC00OTEtMzIzXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSq5bmz5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuemvue0s+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5Lit5bmz6LevNjk26JmfMeaok1wiLFxuICAgIHRlbDogXCIwNC0yMjk1LTgxMzhcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS55SV6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDkuK3muIXot6/kuozmrrUxMDI26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MjYtMDIwOFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmuIXms7Doj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOS4rea4hei3r+S6jOautTEyOOiZn1wiLFxuICAgIHRlbDogXCIwOTM2LTIzMS0xOTBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6JGh5pm25rSL6YWSLeS4rea4heW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5Lit5riF6Lev5LqM5q61MjQy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyOTctODA1NVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmsZ/mnZHoj7jphZIt5aSq6aCG5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDlpKrpoIbot68xN+iZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM2LTkyMTRcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YyX5Y+w5Lit5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDmmIzlubPot6/kuIDmrrUxNDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI0NC0wNTI5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5bGv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+WiqeadseWxsea0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6LevMeautTE0OOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM3LTMxNjZcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLeadseWxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTI16JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MzctODAwOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnvqTojILmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOadseWxsei3r+S4gOautTMyNuiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM2LTgzMTlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25L2z5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDltIflvrfot68y5q61NDgy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyNDktMTcxMFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlk4jliKnmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOW0h+W+t+i3r+S6jOautTMwOOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjQxLTY2NThcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y+k5YW45rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDpgbzpmb3kupTooZcyNeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjQ0LTQyNjNcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6ZuG546W5bqE6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDngIvpmb3ot6/kuIDmrrU4MuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjk4LTk5MDlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiW5YKz6I+46YWS6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDljJflsa/ot68yNjfomZ9cIixcbiAgICB0ZWw6IFwiMDkwMC0wMDUtOTcwXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5bGv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3kupTmrIrlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+WNgOS6lOasiui3rzE0NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjAyLTA5NThcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlnIvms7DmtIvphZIt5LqU5qyK5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJfljYDkupTmrIrot68yMzXomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIwNi0wMzM4XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6IyC57a46I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJfljYDlhazlnJLot68xNDDomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIwNi03Njc1XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLeWMl+W5s+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5Y2A5YyX5bmz6Lev5LqM5q61MTg26JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyOTEtMDk1OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuerpOWwh+WVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5Y2A5bCa5b636KGXOTHlt7c36JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMDMtMzI5OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuuOmAuOa0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5Y2A6YCy5YyW5YyX6LevMzY06JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMzYtMDA5MlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuahguiyq+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5Y2A5ryi5Y+j6LevM+autTI1OeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjk5LTQxMDBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLogJXlnYrooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOW3pealreWNgDE26LevNeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzU5LTM1NzlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZyL5rOw5rSL6YWSLeWNg+WLneW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A5paH5b+D6Lev5LiJ5q61MTU56JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMTMtMzM5OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmuZbmtIvphZIt5a6J5ZKM5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDlronlkozot68xNTHomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ2Mi01NzExXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5bGv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3mvKLlj6PlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOilv+Wxr+i3r+S6jOautTMyLTHomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMxNC0zMzU5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5bGv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3kuK3np5HlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOilv+Wxr+i3r+S4ieautTEwMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDYyLTE1NTlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6b6N56m06YWS5Z2KXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDmsrPljZfot6/jhKfmrrU1NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzE3LTI5MjlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZOI5pav6JG15rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDmsrPljZfot6/kuozmrrUzMDHlt7c1MOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM3LTY4NzhcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6JGh5pm25rSL6YWSLeW4guaUv+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A5rKz5Y2X6Lev5Zub5q61MTAz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyOTctODA1NVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLomZ/lgInluqst5pyd5a+M5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDmnJ3lr4zot682Ni0x6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyNTQtOTUxMlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlronov6rmtIvooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOWvp+Wkj+i3rzIxN+iZn1wiLFxuICAgIHRlbDogXCIwNC0yMzE3LTM0MzBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLem7juaYjuW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A6buO5piO6Lev5LiJ5q61MTE26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0NTItOTcwOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlvJjlt53ol4/phZLplqNcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOm7juaYjui3r+S4ieautTMw6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0NTItNjAwMFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zpm4XphZLojopcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOS4reiIiOihlzEyMuW3tzE56JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMDEtMzY5OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3lhaznm4rlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOWFrOebiui3rzMzN+iZn1wiLFxuICAgIHRlbDogXCIwNC0yMzIwLTU2MzRcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpoY/mlrDnj43mtIvphZLllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOaXpemAsuihlzEwMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjA2LTUxODdcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnlYzmmI7mtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOWPsOeBo+Wkp+mBkzLmrrU1MOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjAxLTIxMDNcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnvo7mhJ/oh6jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOWQkeS4iui3r+S4gOautTUwMuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzIwLTU3MjNcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmmJ/ms7DmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOWQkeS4iui3r+S4gOautTU46JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMDEtMzM4OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuuOS+hua0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5Y2A5p2x6IiI6Lev5LiJ5q61MTfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ3Mi05ODc3XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6bql6YeR6YWS5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDmn7Plt53opb/ot6/kuozmrrUxODjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIyMC0yNTgyXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pqQ5YCr5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDnvo7mnZHot6/kuIDmrrUyNDHomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMwNS0wNjg4XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLee+juadkeW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5Y2A576O5p2R6Lev5LiA5q61MjY46JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMDUtOTExMlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiys+mbtumFkuWVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5Y2A5qiC576k6KGXMjA56JmfMeaok1wiLFxuICAgIHRlbDogXCIwNC0yMzcxLTgxODFcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuIDlk4HlpKvkurroj7jphZIt5pex5rqq5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHljYDml7HmuqrooZc1NOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjExLTM3ODRcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmmIflk4HooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guaymem5v+WNgOS4reWxsei3r+WuieWIqeW3tzLomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjY2NS0xMTg3XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rKZ6bm/5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkua5lua0i+mFki3mspnpub/lupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guaymem5v+WNgOWPsOeBo+Wkp+mBk+S4g+autTc2MeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNjYzLTQ5MzlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmspnpub/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rqQ5Yip6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmspnpub/ljYDlhYnoj6/ot68zMzPomZ9cIixcbiAgICB0ZWw6IFwiMDk3My0yMDUtNjYwXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rKZ6bm/5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3ljYHnlLLlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guadseWNgOWNgeeUsui3rzQxM+iZn1wiLFxuICAgIHRlbDogXCIwNC0yMjEzLTI3MjlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuqzml7roj7jphZIt5Y2B55Sy5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHljYDljYHnlLLot681MTfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIxNS01Mzc5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aSn6KGb5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHljYDlu7rmiJDot683MzPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI4My0xMTk5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y6a5piM5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHljYDnsr7mrabot68xNjHomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA5NzUtMzc5LTM2MlwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4gOWTgeWkq+S6uuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Y2A5qiC5qWt6LevMjEx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMTEtMTc2NVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueyvua5m+mFkuiXj1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Y2A5qiC5qWt6LevMzk26JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMTItMTc4OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumrmOiFs+adr+WVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Yui5Y2A5bu25bmz6YeM56ys5LiA5qmr6KGXMzHomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA5NzgtOTMwLTU3OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWLouWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpjq7mmIzoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guadseWLouWNgOW/oOWtneihlzE3M+iZn1wiLFxuICAgIHRlbDogXCIwNC0yNTg3LTAwMDBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHli6LljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YqJ56aPXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHli6LljYDmnbHlnZHot68yMTbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU4Ny03MjYxXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Yui5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4i+aWsOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Yui5Y2A5p2x6Jit6LevNDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU4Ny0yMjU2XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Yui5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWIqeeZvuWKoOa0i+mFki3lpKfloqnlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+Wxr+WNgOWkp+Wiqei3rzE4NOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDcxLTU4MDlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5paH5b+D5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZflsa/ljYDmloflv4Pot68x5q61NDM36JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyNTgtMjA4OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlronms7DmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+Wxr+WNgOWQkeS4iuWNl+i3r+S4gOautTMyMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDczLTUwODlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZflsa/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2X5Y2A5qWK6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZfljYDkupTmrIrljZfot68yNDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI2NS02Nzg5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pel55ub6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZfljYDlkIjkvZzooZc1MOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjg1LTA5NjFcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpm4Xku5XmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+WNgOS/oee+qeWNl+ihlzMyMOiZn1wiLFxuICAgIHRlbDogXCIwOTI4LTA5NC05MzBcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnb7os4DmtIvphZIt6auY5bel5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZfljYDpq5jlt6Xot681MDDomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI2NS01ODg1XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLeW+qeiIiOW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5Y2A5b6p6IiI6Lev5LqM5q61MTIwLTbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI2Mi01NTIzXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p2+6LOA5rSL6YWSLeeDj+aXpeW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC54OP5pel5Y2A5Lit5bGx6Lev5LiA5q61NTAz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMzgtODYzOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIueDj+aXpeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLml6XljYfoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gueDj+aXpeWNgOS6lOWFiei3rzEwMDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMzNy00ODU4XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi54OP5pel5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueZvua3s+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC54OP5pel5Y2A5paw6IiI6LevNDMz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMzctOTk1M1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIueDj+aXpeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmpq7nkYvllYblupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gueDj+aXpeWNgOS4reWxsei3r+S4gOautTM3NOiZnzNGXCIsXG4gICAgdGVsOiBcIjA5MjUtMTg2LTA5M1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIueDj+aXpeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmsZ/mnZHoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guelnuWyoeWNgOWkp+WvjOi3rznomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjUyNy04ODYxXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi56We5bKh5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWQieiPlua0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC56We5bKh5Y2A56We5p6X6LevODjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU2My0xMDgwXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi56We5bKh5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuamruWlveiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5qKn5qOy5Y2A5bGF5LuB6KGXMjEy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2NTctOTg4OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaip+ajsuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmuZbmtIvphZIt5riF5rC05bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmuIXmsLTljYDkuK3oj6/ot680MTfkuYsy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2MjgtMTU1MFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIua4heawtOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmrZDlt7Tppqzoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gua4heawtOWNgOS4reiPr+i3rzYwOS0x6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2MjgtMTA3N1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIua4heawtOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnbHls7vllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gua4heawtOWNgOawkeaXj+i3r+S6jOautTUxN+iZn1wiLFxuICAgIHRlbDogXCIwOTU4LTc4NS0wMDlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmuIXmsLTljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aiB54i+5qOu5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmva3lrZDljYDpm4Xmva3ot6/kuozmrrUyNTLomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjUzMy01ODgzXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5r2t5a2Q5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS7peWFqOiPuOmFkuWVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5r2t5a2Q5Y2A5r2t56eA6YeM5Lit5bGx6Lev5LqM5q61NDc0LTLomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA0LTI1MzMtMTYyMVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIua9reWtkOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLntIXpoILoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+Wxr+WNgOeSsOS4rei3r+Wbm+autTU26JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzODUtMDQ4MFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkup7lvrflgKvoj7jphZIt5aSn5YuH5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILosZDljp/ljYDkuInosZDot6/kuIDmrrUxNjnomZ/kuYsyXCIsXG4gICAgdGVsOiBcIjA0LTI1MTUtNTQ3M1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuixkOWOn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkup7lvrflgKvoj7jphZIt5ZCR6Zm95bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILosZDljp/ljYDlkJHpmb3ot68xNzDlt7c56JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1MjUtMTQyNVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuixkOWOn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlurfpvaHphZLol48t5aSq5bmz5rSLU09HTy3osYrljp/lupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guixkOWOn+WNgOW+qeiIiOi3rzLomZ8gQjFcIixcbiAgICB0ZWw6IFwiMDQtMjUyNS02NTU5XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6LGQ5Y6f5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuWTieiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6LGQ5Y6f5Y2A6LGQ5p2x6LevNTU26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1MjYtMTQxOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuixkOWOn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr7boga/ooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guixkOWOn+WNgOixkOWLoui3r+S6jOautTMx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1MjMtMDQwM1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuixkOWOn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuqzml7roj7jphZIt6Zyn5bOw5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILpnKfls7DljYDogrLku4HooZcxMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzM5LTcxMjZcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLpnKfls7DljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6bWs6aaz6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILpnKfls7DljYDnkrDmsrPot6/kuIDmrrU3MTjomZ9cIixcbiAgICB0ZWw6IFwiMDkxOS0wODktMTY4XCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Zyn5bOw5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWKoOe0jea0i+mFki3lpKfln5TlupdcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+W9sOWMluW4guWkp+WflOi3rzQ5MuiZn1wiLFxuICAgIHRlbDogXCIwNC03MTMtOTk5OFwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlro/kv6HllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruWkp+aIkOi3r+S4gOautTMzNuiZn1wiLFxuICAgIHRlbDogXCIwNC04OTYtNTA2MVwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6jOael+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zngrrkvIHmpa3mnInpmZDlhazlj7hcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruaWl+iLkei3r+S4ieautTEyNeiZn1wiLFxuICAgIHRlbDogXCIwNC04OTUtMDU1OVwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6jOael+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLoh7vlk4Hoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruaWl+iLkei3r+S6lOautTM5OeiZn1wiLFxuICAgIHRlbDogXCIwNC04OTYtODMwOFwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6jOael+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlk6HlpJbojLbojopcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruilv+W5s+mHjOW7uuWci+i3rzQxMeiZn1wiLFxuICAgIHRlbDogXCIwNC04OTYtMjAzN1wiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6jOael+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnlLLmj5rmnInpmZDlhazlj7hcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruixkOeUsOmHjOWNl+Wuiei3rzQz6JmfMeaokyBcIixcbiAgICB0ZWw6IFwiMDQtODk2LTQyMTBcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLkuozmnpfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6JCs6Iqz6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlpKfmnZHphInlpKfku4Hot6/kuIDmrrUxNDTomZ9cIixcbiAgICB0ZWw6IFwiMDQtODUyLTU0MzBcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfmnZHphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR5oCd57at5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPljJfmlpfpjq7mlpfoi5Hot6/kuIDmrrUyOTHomZ9cIixcbiAgICB0ZWw6IFwiMDQtODg4LTg5MTVcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljJfmlpfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rC45om/5ZWG6KGMLeWMl+aWl+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5YyX5paX6Y6u5paX6IuR6Lev5LqM5q61NzHomZ9cIixcbiAgICB0ZWw6IFwiMDQtODg3LTQwNTVcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljJfmlpfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZOB6YqY6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPljJfmlpfpjq7lvqnoiIjot68yMzLomZ9cIixcbiAgICB0ZWw6IFwiMDQtODc4LTI5NjZcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljJfmlpfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5bm05Luj6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPnlLDkuK3pjq7ljZfljJfooZcxNDDomZ9cIixcbiAgICB0ZWw6IFwiMDQtODc0LTUwMTZcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnlLDkuK3pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiK5rW36I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPnp4DmsLTphInnlaroirHot68zNjLomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzY5LTYxOTRcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnp4DmsLTphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR6aas6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPnp4DmsLTphInpm4XoiIjooZcyMjnomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzYzLTA4MTNcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnp4DmsLTphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5bCK5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlkoznvo7pjq7lkozpoK3ot68yMeiZn1wiLFxuICAgIHRlbDogXCIwNC03NTYtNjcxMVwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWSjOe+jumOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKfml7roj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+ekvumgremEieWToembhui3r+S6jOautTIyOeiZn1wiLFxuICAgIHRlbDogXCIwNC04NzEtMTAwOVwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuekvumgremEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmsLjmib/llYbooYwt6Iqs5ZyS5bqXXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPoiqzlnJLphInlvbDljZfot6/lm5vmrrU0MeiZn1wiLFxuICAgIHRlbDogXCIwNC05MjUxLTE1NDNcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoiqzlnJLphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yqg57SN5rSL6YWSLeiKseWjh+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij6Iqx5aOH6YSJ6Iqx5aOH6KGXMzQ26JmfXCIsXG4gICAgdGVsOiBcIjA0LTc4Ni0wNDcyXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6Iqx5aOH6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuS5i+W6l+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5LiJ5rCR5p2x6KGXNTHomZ9cIixcbiAgICB0ZWw6IFwiMDQtODM0LTA3MzBcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlk6HmnpfluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWJ6Lyd6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlk6HmnpfluILkuK3lsbHot6/kuIDmrrU1ODPomZ9cIixcbiAgICB0ZWw6IFwiMDQtODM1LTU2NjZcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlk6HmnpfluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rC45om/5ZWG6KGMLeWToeael+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5Lit5bGx6Lev5LqM5q61NTk46JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzNi0zNDEzXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZOh5p6X5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+iKs+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5YWJ5piO6KGXMTUy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzMi0xNDc1XCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZOh5p6X5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaXpemAsuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5ZOh5rC06Lev5LqM5q61MTU16JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzNi0wNzgxXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZOh5p6X5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWNmumFkuiQiuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5rWu5Zyz6Lev5LqM5q61MjXomZ9cIixcbiAgICB0ZWw6IFwiMDQtODM5LTU1OTlcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlk6HmnpfluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a6H5aSP6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPln5Tlv4PphInlk6Hpub/ot6/kuIDmrrU0MzXomZ9cIixcbiAgICB0ZWw6IFwiMDQtODI4LTExOTBcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLln5Tlv4PphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5qau6Iqz5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPln5Tlv4PphInnkaTps7Pot6/kuIDmrrU2MuiZn1wiLFxuICAgIHRlbDogXCIwNC04MjktOTgwNlwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOW/g+mEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpnZLml7roj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WfpOmgremEieW9sOawtOi3r+S4ieautTU1MOiZn1wiLFxuICAgIHRlbDogXCIwNC04OTEtMDI1MlwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWfpOmgremEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmupDpkavoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+m5v+a4r+mOruS4reato+i3rzM4N+iZn1wiLFxuICAgIHRlbDogXCIwNC03NzUtNDIyN1wiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIum5v+a4r+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkvbPmsoXoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+m5v+a4r+mOrum5v+WSjOi3r+S4ieautTQ0MOiZn1wiLFxuICAgIHRlbDogXCIwNC03NzEtMTk2OFwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIum5v+a4r+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmsLjoqJjllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+m5v+a4r+mOrum5v+iNiei3rzXmrrUyNDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzcxLTI2MjlcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpub/muK/pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rGf5aSP6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPmuqrmuZbpjq7opb/nkrDot680OTLomZ9cIixcbiAgICB0ZWw6IFwiMDQtODg1LTkyMjdcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmuqrmuZbpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR5YWD5a+MXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlvbDljJbluILmsLTmupDot681NjjomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzYzLTk5MThcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yqg57SN5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlvbDljJbluILmsJHnlJ/ot68xNeiZn1wiLFxuICAgIHRlbDogXCIwNC03MjItNjM3MVwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlkInnpo/oj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+W9sOWMluW4guiHquW8t+i3rzMy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTcyNi0yNjg4XCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b2w5YyW5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuadvuWLh+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC6Zi/5aS36YeM5bu65ZyL5p2x6LevMjY56JmfXCIsXG4gICAgdGVsOiBcIjA0LTcyOC03ODgzXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b2w5YyW5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaRqeeZu+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5Y2X6YOt6Lev5LiA5q61NTXomZ9cIixcbiAgICB0ZWw6IFwiMDk4Ni03MDMtNjAyXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b2w5YyW5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuaoguiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5ZOh5p6X5biC5LiJ5rCR5p2x6KGXNjPomZ9cIixcbiAgICB0ZWw6IFwiMDQtODM5LTc1NjZcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yqg57SN5rSL6YWSLeWkp+erueWcjeW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5b2w5Y2X6Lev5LqM5q61MTnomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzM4LTU4MThcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pel5Lqr5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlvbDljJbluILlvbDljZfot6/kuozmrrUyMzLomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzM4LTg1MDdcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWD6Zic5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPljZfmipXluILkuInmsJHph4zljZfpmb3ot680NjHomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTIyMy04NTk4XCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5oqV5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumMoeavheiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij5rCR6ZaT6YSJ5r+B5rC05p2R5ZOh6ZuG6LevNjfomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI3My0yMDcxXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5rCR6ZaT6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWPsOWFg+a0i+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij56u55bGx6Y6u5aSn5piO6LevMjMz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyNjUtMzM5M1wiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWxsemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmloflkozoj7jphZIt5Y2X5oqV5bqXXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPljZfmipXluILkuInlkozph4zlvqnoiIjot68xMTnomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTIyMi00NjAxXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5oqV5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaWh+WSjOiPuOmFki3kuK3oiIjlupdcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guS4reiIiOaWsOadkeS4reiIiOi3rzcy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMzktMDM0MlwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+aKleW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLosarphZLpgYvoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guWNl+mZvei3rzk46JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMjItOTkwNlwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+aKleW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnvorlk6Xoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guiNieWxr+mOrueCjuWzsOihlzgy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMzYtNzc3NVwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+aKleW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmib/mmpjoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guW6t+WjvemHjOawkeeUn+ihlzI26JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMjAtMjk5OFwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+aKleW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlmInls7DllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guW9sOWNl+i3r+S4gOautTYxM+iZn1wiLFxuICAgIHRlbDogXCIwNC05MjIyLTU3NDJcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmipXluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZG15ZG15ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPln5Tph4zpjq7kuK3mraPot683NDXomZ9cIixcbiAgICB0ZWw6IFwiMDkyNi05MzktMjk5XCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Z+U6YeM6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuWckuWVhuihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5Lit6I+v6LevMTg46JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyOTktOTkwM1wiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOmHjOmOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpgLLljZfomZ/oj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WflOmHjOmOruilv+Wuiei3rzHmrrU5M+iZn1wiLFxuICAgIHRlbDogXCIwNC05Mjk4LTIxMjNcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLln5Tph4zpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YeR5Yip6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPln5Tph4zpjq7opb/lronot6/kuIDmrrU5NeiZn1wiLFxuICAgIHRlbDogXCIwNC05Mjk4LTQ0MDFcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLln5Tph4zpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2a6YWS6JCKLeWflOmHjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5p2x6I+v6LevMTgy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyOTgtMzY1MlwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOmHjOmOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKfnpr7lsYvoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+iNieWxr+mOruS4iuael+mHjOWkquW5s+i3r+S4gOautTEzOeiZn1wiLFxuICAgIHRlbDogXCIwNC05MjMxLTI5NjVcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLojYnlsa/pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi55m+5rez6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPojYnlsa/pjq7lpKrlubPot6/kuIDmrrU1MTbomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTIzOS0yNDk2XCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6I2J5bGv6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWFg+Wkqua0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij6I2J5bGv6Y6u5ZKM5bmz6KGXNOiZn1wiLFxuICAgIHRlbDogXCIwNC05MjMyLTIwMDhcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLojYnlsa/pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a625a625pyJ5rSL6YWSXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPojYnlsa/pjq7mlablkozot6/mlabmiJDlt7cx5LmLMeiZn1wiLFxuICAgIHRlbDogXCIwNC05MjMxLTA4ODRcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLojYnlsa/pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS546W5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPlnIvlp5PphInkuK3oiIjot68yMzbomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI3Mi0zOTUxXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZyL5aeT6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS4ieWFg+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij6ZuG6ZuG6Y6u6ZuG6ZuG6KGXMTAw6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyNzYtMjM3MVwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIumbhumbhumOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLllK/lkJvogqHku73mnInpmZDlhazlj7hcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+S6jOW0memEieijleawkei3rzEy6JmfXCIsXG4gICAgdGVsOiBcIjA1LTU5OC05NTg4XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5LqM5bSZ6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuadnOW6t+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5paX5YWt5biC5LiK5rW36LevMjUz6JmfXCIsXG4gICAgdGVsOiBcIjA1LTUzNC02ODY5XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5paX5YWt5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIum8juWFuOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5paX5YWt5biC5rCR55Sf6LevMjgzLTEy6JmfXCIsXG4gICAgdGVsOiBcIjA1LTUzMy05Nzg0XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5paX5YWt5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW+oOWck+mFkuiOilwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5paX5YWt5biC5oiQ5Yqf6LevMjE46JmfXCIsXG4gICAgdGVsOiBcIjA1LTUzMi03NTY4XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5paX5YWt5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+S6qOa0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5paX5YWt5biC5piO5b635YyX6Lev5LqM5q61ODHomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTMyLTU4OThcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmlpflha3luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6ZqG5rOw6KGMXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPmlpfljZfpjq7kuK3lsbHot68xMTPomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTk3LTMzNjBcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmlpfljZfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pav5aiB54m55ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPmlpfljZfpjq7nvqnlvrfot68xMDDomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTk3LTI0NjhcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmlpfljZfpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi56a+5rqQ55ub6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPlj7Dopb/phInmsJHml4/ot680NOiZn1wiLFxuICAgIHRlbDogXCIwNS02OTgtMTkxNlwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWPsOilv+mEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr7blnJLmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+WPsOilv+mEieawkeasiui3rzgy6JmfXCIsXG4gICAgdGVsOiBcIjA1LTY5OC0yODAxXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y+w6KW/6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaso+W3numFkuiOilwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij6KW/6J666Y6u5YWJ5piO6KW/6LevMjQ16JmfXCIsXG4gICAgdGVsOiBcIjA1LTU4Ny0yNTY4XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/6J666Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuacieaIkOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij6KW/6J666Y6u5YWJ5b6p6KW/6LevMzMz6JmfXCIsXG4gICAgdGVsOiBcIjA1LTU5OS0xOTkwXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/6J666Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIue/lOizgOiPuOmFki3opb/onrrlupdcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+ilv+ieuumOruiIiOi+suilv+i3rzYz6JmfXCIsXG4gICAgdGVsOiBcIjA5NTUtNjcwLTk3MFwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+ieuumOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmraPls7DnhZnphZLph4/osqnlupdcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+iZjuWwvumOruWFieW+qei3rzQxNuiZn1wiLFxuICAgIHRlbDogXCIwNS02MzYtMTQ3NVwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiZjuWwvumOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhavlhavnhZnphZLmsLQt6JmO5bC+5bqXXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPomY7lsL7pjq7lhYnlvqnot680NDPomZ9cIixcbiAgICB0ZWw6IFwiMDUtNjMxLTAzODhcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLomY7lsL7pjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yud6LydXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPltJnog4zphInlpKfmmI7ooZczOOiZn1wiLFxuICAgIHRlbDogXCIwNS02OTYtOTM2MlwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW0meiDjOmEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlsJrlk4FcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+W0meiDjOmEieadseiIiOi3rzExOeiZn1wiLFxuICAgIHRlbDogXCIwNS01ODYtNDgyMlwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW0meiDjOmEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpgJrmtIvphZLojopcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+m6peWvrumEieS4reiIiOi3rzc4LTEz6JmfXCIsXG4gICAgdGVsOiBcIjA1LTY5My00NTY4XCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6bql5a+u6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIue/lOizgOiPuOmFki3mqYvpoK3lupdcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+m6peWvrumEieS7geW+t+i3rzI0MeiZn1wiLFxuICAgIHRlbDogXCIwNS02OTEtNzc4OFwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIum6peWvrumEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnv5Tos4Doj7jphZIt6bql5a+u5bqXXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPpuqXlr67phInms7DpoIbot68zMzHomZ9cIixcbiAgICB0ZWw6IFwiMDUtNjkzLTcwODlcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpuqXlr67phIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS6aaz6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPpuqXlr67phInpuqXosZDmnZHmlrDoiIjot6/mqavooZflt7c45LmLOOiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDUtNjkzLTA2NTZcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpuqXlr67phIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6aCG6aOyLeWYiee+qeW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5LiK5rW36LevMjA56JmfXCIsXG4gICAgdGVsOiBcIjA1LTI4My04MzgzXCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZiJ576p5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiQrOm0u+iPuOmFki3lpKrkv53lupdcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WkquS/neW4guW+jOa9rTE4OC016JmfXCIsXG4gICAgdGVsOiBcIjA1LTM3MC0zMDY5XCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSq5L+d5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuael+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5aSq5L+d5biC56Wl5ZKM5LiA6Lev5p2x5q61NTDomZ9cIixcbiAgICB0ZWw6IFwiMDUtMzYyLTUwNTBcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlpKrkv53luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rqQ5ZKM6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPmsJHpm4TphInoiIjljZfmnZHlu7rlnIvot6/kuInmrrU0M+iZn+S4gOaok1wiLFxuICAgIHRlbDogXCIwNS0yMjEtMjk3N1wiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawkembhOmEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLku5nllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+erueW0jumEieS4reiPr+i3rzItM+iZn1wiLFxuICAgIHRlbDogXCIwOTA1LTAzNy0zNzFcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnq7nltI7phIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YKj6ZaT6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPnq7nltI7phInlkozlubPmnZE36YSw5Z2R5LuU5Z2qMTUyLTHomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA1LTI2MS0yNzAwXCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55bSO6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumRq+WkmuWvpualreaciemZkOWFrOWPuFwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij55Wq6Lev6YSJ5LiL5Z2R5p2R5LiL5Z2RNTUtMTLomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjU5LTQ0NzVcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnlarot6/phIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWr5YWr54WZ6YWS5rC0LeWPi+aEm+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5Y+L5oSb6LevMTM4LTHomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjMxLTUxODhcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5a6i6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILlj4vmhJvot68xMzjomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjgxLTA2NjlcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5ZyL6Iux6ZuE6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILlj4vmhJvot68yMjHomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjMzLTEyMTJcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWr5YWr54WZ6YWS5rC0LeaWsOeUn+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5Y+L5oSb6LevMzM36JmfXCIsXG4gICAgdGVsOiBcIjA1LTIxNi0zOTg4XCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZiJ576p5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWTgemKmOiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5Y+w5p6X6KGXMjA36Jmf6ZmEMlwiLFxuICAgIHRlbDogXCIwNS0yNzUtNjc3OVwiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhYvmnpfoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guawkeeUn+WMl+i3rzIxM+iZn1wiLFxuICAgIHRlbDogXCIwNS0yMjgtODgzM1wiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmmYnnpo/oj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guawkeeUn+WMl+i3rzIzM+iZn1wiLFxuICAgIHRlbDogXCIwNS0yMjItNTk0M1wiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuIrmnZHooYzoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guawkeaXj+i3rzEwOeiZn1wiLFxuICAgIHRlbDogXCIwNS0yNzYtMDk3MFwiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhavlhavnhZnphZLmsLQt5b6M5bqE5bqXXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILmnbHljYDlkLPps7PljZfot68zNDDomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjM5LTU3ODhcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi55uI5ZiJ5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILljZfkuqzot680MDHomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjM2LTg4ODJcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5q2h5Zac6I+46YWS6aGP56aP5L6GXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILmlrDnlJ/ot682NDLomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjc3LTYxMTFcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6KW/6YOo6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILlmInnvqnluILojZbol6Tph4zlvozljp0x5LmLNuiZn1wiLFxuICAgIHRlbDogXCIwNS0yMzItMTg1OFwiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLokKzptLvoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guiIiOalreilv+i3rzcx6JmfXCIsXG4gICAgdGVsOiBcIjA1LTI4Ni0xNjk4XCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZiJ576p5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW+oeWTgeS4i+eHn1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5LiL54ef5Y2A5YGl5bq36LevMjgx6JmfXCIsXG4gICAgdGVsOiBcIjA2LTY3OS0wMDIyXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiL54ef5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW3nue/lOmFkue/lFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A6KW/5ZKM6LevMjIw6JmfXCIsXG4gICAgdGVsOiBcIjA2LTI1OC02OTU4XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit6KW/5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotorlj7DljZfopb/ploDmlrDlpKnlnLBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS4reilv+WNgOilv+mWgOi3r+S4gOautTY1OOiZn0IyXCIsXG4gICAgdGVsOiBcIjA2LTMwMy0wMTY1XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit6KW/5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumrmOeZuy3lj7DljZdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS4reilv+WNgOWSjOaEj+i3rzc46JmfXCIsXG4gICAgdGVsOiBcIjA5NzMtMDYzLTIxNVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKfnnL4t5q2m6IGWXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkuK3opb/ljYDmrabogZbot68yNjXomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjgwLTAxMjlcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3opb/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi57+U55m8XCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkuK3opb/ljYDph5Hoj6/ot6/kuInmrrU2MOiZn1wiLFxuICAgIHRlbDogXCIwNi0yMjMtOTcyOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvo3mhrZcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS4reilv+WNgOWNl+mWgOi3rzI0M+iZn+S5izNcIixcbiAgICB0ZWw6IFwiMDYtMjEzLTAyODlcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3opb/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YaH54i1XCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkuK3opb/ljYDmtbflronot6/kuIDmrrUyNuiZn1wiLFxuICAgIHRlbDogXCIwNi0yMjAtMDUwN1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zlhqDllYbooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS7geW+t+WNgOS4reato+i3r+S6jOautTM0MeiZn1wiLFxuICAgIHRlbDogXCIwNi0yNzktNDIzMlwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geW+t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvI7lpKdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWMl+WNgOS4reiPr+WMl+i3r+S4gOautTc45be3MjXomZ9cIixcbiAgICB0ZWw6IFwiMDk2OC03MDItOTI3XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5piV5oKF5o+aXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDkuK3oj6/kuIDot68xNTAtMeiZn1wiLFxuICAgIHRlbDogXCIwNi0zMTItOTY5OVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpoIbpo7It5Lit6I+v5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDkuK3oj6/ot680MDPomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjc1LTYyMjJcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlurfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a6256aOXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDmsLjoj6/ot682NuiZn1wiLFxuICAgIHRlbDogXCIwNi0yNzMtNDEyOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlo7nnjrJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guawuOW6t+WNgOW/oOWtnei3rzEwOOiZn1wiLFxuICAgIHRlbDogXCIwNi0zMTItMDA3OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvo3kuqjoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guawuOW6t+WNgOadseapi+S4g+i3rzE1M+iZn1wiLFxuICAgIHRlbDogXCIwNi0zMDItMDMyOVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlro/nkYvoj7jphZLooYxcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guawuOW6t+WNgOWNl+eBo+mHjOWkp+eBo+i3rzU3OOiZn1wiLFxuICAgIHRlbDogXCIwNi0yMDUtOTA1MFwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpoIbpo7It5b6p5ZyL5bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDlvqnlnIvkuIDot68zNjHomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjAzLTE4MzFcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlurfljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2X6YO96I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDlvqnlnIvkuozot682M+W3t1wiLFxuICAgIHRlbDogXCIwNi0zMTItMjgyOFwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKflpKfoj7jphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieW5s+WNgOS4reiPr+ilv+i3r+S6jOautTU3M+iZn1wiLFxuICAgIHRlbDogXCIwNi0yODAtMzA3OFwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWuieW5s+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpoIbpo7It5rC46I+v57i95bqXXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILlronlubPljYDmsLjoj6/ot6/kuozmrrU2NzjomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjk5LTkxMjNcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronlubPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6LOA6byOXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILlronlubPljYDmsLjoj6/ot6/kuozmrrU2OTDomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjkzLTAwMjJcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronlubPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aSn55y+LeWuieW5s1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5a6J5bmz5Y2A5bu65bmz6LevNjk26JmfXCIsXG4gICAgdGVsOiBcIjA2LTI5My04OTk5XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5bmz5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumNvuaEm1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5a6J5Y2X5Y2A5a6J5ZKM6Lev5Zub5q61NDgw6JmfXCIsXG4gICAgdGVsOiBcIjA2LTM1Ni0xMTI3XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5Y2X5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumghumjsi3opb/ploDlupdcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieWNl+WNgOilv+mWgOi3r+Wbm+autTM3NeiZn1wiLFxuICAgIHRlbDogXCIwNi0yODEtMDMzM1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWuieWNl+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpq5jlg5FcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieWNl+WNgOa1t+ayuui3r+S4gOautTk56JmfXCIsXG4gICAgdGVsOiBcIjA2LTM1MC02NDIzXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5Y2X5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuilv+a4r+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC6KW/5riv5Y2A5oW25a6J6LevODLomZ9cIixcbiAgICB0ZWw6IFwiMDYtNzk1LTAyMjVcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/muK/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YOR6aCYXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkvbPph4zljYDkuK3lsbHot68yMjXomZ9cIixcbiAgICB0ZWw6IFwiMDYtNzIzLTYwNzJcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkvbPph4zljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5buj5L6GXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmnbHljYDlpKflkIzot6/kuozmrrUxMznomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjQ2LTYyNzJcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmn4/lvaPmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guadseWNgOWwj+adsei3rzMzMOiZn1wiLFxuICAgIHRlbDogXCIwNi0yNzUtNjYyMVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWQiOatoS3mnbHploDploDluIJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guadseWNgOadsemWgOi3r+S4gOautTE4OOiZn1wiLFxuICAgIHRlbDogXCIwNi0yMzYtNTMwMVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuank+mgguiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5p2x5Y2A5bSH5b636LevNDU26JmfXCIsXG4gICAgdGVsOiBcIjA2LTMzNi0yMTg5XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZCI5q2hLeWkj+ael+mWgOW4glwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5Y2X5Y2A5aSP5p6X6LevMTQ46JmfXCIsXG4gICAgdGVsOiBcIjA2LTI2NC00MjUyXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5Y2AXCIsXG5cblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5qOL5YudXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILljZfljYDmg6DljZfooZc4M+iZn1wiLFxuICAgIHRlbDogXCIwOTMyLTcwNi05MDZcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcblxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpvI7osZBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4gum6u+ixhuWNgOiHqueUsei3rzMyLTE26JmfXCIsXG4gICAgdGVsOiBcIjA2LTU3Mi04MDQxXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bq76LGG5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+WLnVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5ZaE5YyW5Y2A5Lit5bGx6LevNDcy6JmfXCIsXG4gICAgdGVsOiBcIjA2LTU4MS03OTI4XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZaE5YyW5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaYjui8nVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw5YyW5Y2A5Lit5bGx6LevMTEx5be3MTDomZ9cIixcbiAgICB0ZWw6IFwiMDYtNTk4LTExNjZcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDljJbljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rOw5a6JLeW+t+S9s1wiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw5YyW5Y2A5Lit5q2j6LevNDYyLjQ2NOiZn1wiLFxuICAgIHRlbDogXCIwNi01OTAtNzUyN1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOWMluWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5Hlr4znpaVcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guaWsOW4guWNgOmKmOWCs+ihlzc26JmfXCIsXG4gICAgdGVsOiBcIjA2LTU5OS04Mjc4XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw5biC5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW+oeWTgVwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw54ef5Y2A5LiJ5rCR6LevNjnomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjM3LTY5OTlcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5pm055GSXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmlrDnh5/ljYDlkozlubPot684N+iZn1wiLFxuICAgIHRlbDogXCIwNi02MzUtNTAzNVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOeHn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLloKEt5paw54efXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmlrDnh5/ljYDmnbHms7DkuIPooZc0OOiZn1wiLFxuICAgIHRlbDogXCIwOTM0LTMyNC03NzdcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZCN5a62XCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmlrDnh5/ljYDmlrDpgLLot6/kuozmrrUxODPomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjM3LTkyMzdcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ra85LqtXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmrbjku4HljYDkv53lpKfot6/kuInmrrUyNzDomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjY1LTAzMzRcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmrbjku4HljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25qqzLeS5neWmglwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5Lmd5aaC5LiA6LevMjI56JmfXCIsXG4gICAgdGVsOiBcIjA3LTM4Ny0zMzAwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiHu+mFkuS7mS3kuZ3lpoJcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOS5neWmguS4gOi3rzUwMeiZn1wiLFxuICAgIHRlbDogXCIwNy0zOTctNDQ0NFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4ieawkeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphofphZLln44t5aSn5piM5bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDlpKfmmIzkuozot680OOiZn1wiLFxuICAgIHRlbDogXCIwNy0zODctNTMzM1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4ieawkeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKfpgKMt5LiK5pmvXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDlpKfpgKPooZcxOThcIixcbiAgICB0ZWw6IFwiMDctMzIzLTYwOTZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6auY6ZGrXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDlpKfpoIbkuozot68yMznomZ9cIixcbiAgICB0ZWw6IFwiMDctMzg5LTExMTFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZiJ55Gd5rSL6KGMLeWkp+mghuW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5aSn6aCG5LqM6LevNzLomZ9cIixcbiAgICB0ZWw6IFwiMDctMzg5LTMzNjZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p2x6ImvXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDljJflubPkuozooZcxODfomZ9cIixcbiAgICB0ZWw6IFwiMDctMzIyLTkyODdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5buj6LKhXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDmsJHml4/kuIDot681OTHomZ9cIixcbiAgICB0ZWw6IFwiMDctMzU5LTk5NTVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLeW7uuWci1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5bu65ZyL5LiA6LevNDA26JmfXCIsXG4gICAgdGVsOiBcIjA3LTIyNS03MjY5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuj+e+jlwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A6KOV6Kqg6LevMTE16JmfXCIsXG4gICAgdGVsOiBcIjA3LTM1MC01NTI5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIualteWTgVwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5aup5rGf6KGXMTYz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTMxMy0zMTE5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumVt+aFtua0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5ryi5Y+j6KGXMzMz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTMxNS0zODM4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWYieeRnea0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5r6E5riF6LevMzgx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTM5OC02NDA0XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS/oeemlS3ngaPkuK3lupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOeBo+S4reihlzI4MOiZn1wiLFxuICAgIHRlbDogXCIwNy0zOTUtMjIyMFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4ieawkeWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuZ3kuYUt5aSn5a+uXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlpKflr67ljYDlpKflr67ot682NjItNjgy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc4Ny04Mjk2XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a+u5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWvtuaqsy3lpKflr65cIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWkp+WvruWNgOmzs+ael+S4iei3rzM16JmfXCIsXG4gICAgdGVsOiBcIjA3LTc4Ni04ODc3XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a+u5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWvtuaqsy3kuK3luoRcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWkp+WvruWNgOmzs+Wxj+S4gOi3rzE4M+iZn1wiLFxuICAgIHRlbDogXCIwNy03MDMtNzAwMFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WvruWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr4zmsoVcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWkp+aoueWNgOS4reiIiOWNl+i3r+aWsOiIiOW3tzIy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTY1Mi0xMTY5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5qi55Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+m1rFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bCP5riv5Y2A5aSn6bWs6LevMTU46JmfXCIsXG4gICAgdGVsOiBcIjA3LTgwMS05NjYwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bCP5riv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWlleaso+ihjC3kuK3lronlupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWwj+a4r+WNgOS4reWuiei3rzY0OOiZn1wiLFxuICAgIHRlbDogXCIwNy03OTEtMjc1N1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWwj+a4r+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpZXmrKPooYwt5bCP5rivXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsI/muK/ljYDlubPmsrvooZcxNjPomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA3LTgwNi0zMTUwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bCP5riv5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuafj+ajri3ph5HptLvmmIxcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWwj+a4r+WNgOiPr+aYjOi3rzEwNeiZn1wiLFxuICAgIHRlbDogXCIwNy03OTEtNjk5OFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWwj+a4r+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpmL/ms6LnvoUt6LGQ5bm0XCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsI/muK/ljYDmvKLmsJHot68xMTHomZ9cIixcbiAgICB0ZWw6IFwiMDctODA2LTA4OThcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsI/muK/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWo6bql5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDlhavljabmnZHmsLjku4HooZczMTPomZ9cIixcbiAgICB0ZWw6IFwiMDctMzczLTE4MDFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLku4HmrabljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6buD6YeR6YWS5rSL6YWS6KGMXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDku4HlkozooZc46JmfXCIsXG4gICAgdGVsOiBcIjA3LTM3Mi0yNzIyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LuB5q2m5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkmuWkmlwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5b+g6LevNjDomZ9cIixcbiAgICB0ZWw6IFwiMDctMzc1LTUzNzFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLku4HmrabljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+w5LqoLeS7geatplwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB6ZuE6LevMzE26JmfXCIsXG4gICAgdGVsOiBcIjA3LTM3NC01MTIyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LuB5q2m5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+mFkuiOilwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5qiC6KGXMjY06JmfXCIsXG4gICAgdGVsOiBcIjA3LTM3MS0wMDU4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LuB5q2m5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS9s+mFkuiOii3otaTku4FcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS7geatpuWNgOi1pOS7gei3rzYw6JmfXCIsXG4gICAgdGVsOiBcIjA5MDktMTkzLTUxM1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr7bmqrMt5LuB5q2m5bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDps7Pku4Hot685NS0xN+iZn1wiLFxuICAgIHRlbDogXCIwNy0zNzMtNzc1NVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuIrmma/llYbooYwt5aSn6YCjXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDmvoTop4Dot683ODjomZ9cIixcbiAgICB0ZWw6IFwiMDctMzcyLTMyMjNcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLku4HmrabljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5p6X6KiYLeaWh+iHquW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bem54ef5Y2A5paH6Ieq6LevOTc06JmfXCIsXG4gICAgdGVsOiBcIjA3LTM0Mi05MDkwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bem54ef5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+esrFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bem54ef5Y2A6Ieq55Sx5LqM6LevMTI16JmfXCIsXG4gICAgdGVsOiBcIjA3LTU1Ni0xMzY2XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bem54ef5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWlleaso+ihjC3oh6rnlLHlupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOiHqueUseS6jOi3rzMzMeOAgTMzMyDomZ9cIixcbiAgICB0ZWw6IFwiMDctNTUwLTg2NjVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6Zi/55GfLei+m+S6peW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bem54ef5Y2A6L6b5Lql6LevMjUz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTU1MC04MTU1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bem54ef5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWFqOWFgS3mmIfnmbxcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOWNl+Wxj+i3rzI2MeiZn1wiLFxuICAgIHRlbDogXCIwNy01NTAtNTE2MVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW3pueHn+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpgZTnjpYt5bem54efXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlt6bnh5/ljYDph43kv6Hot681NDLomZ9cIixcbiAgICB0ZWw6IFwiMDk3OS02NzAtNjQ5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bem54ef5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotorlt6bnh5/lupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOmrmOmQtei3rzExNeiZnzPmqJNcIixcbiAgICB0ZWw6IFwiMDctMzQxLTc3OThcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS6LC3XCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlt6bnh5/ljYDltIflvrfot680MTbomZ9cIixcbiAgICB0ZWw6IFwiMDctMzQxLTM4NjNcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+w5LqoXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlt6bnh5/ljYDmpq7nuL3ot68yNzHomZ9cIixcbiAgICB0ZWw6IFwiMDctMzU5LTk2NTZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWo5YWBLeaYh+eZvFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bKh5bGx5Y2A5beo6Lyq6LevNTUtMeiZn1wiLFxuICAgIHRlbDogXCIwNy02MjUtODE4NVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWyoeWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpgZTnjpYt5bKh5bGxXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsqHlsbHljYDlsqHlsbHot68yNjLomZ9cIixcbiAgICB0ZWw6IFwiMDctNjIxLTg2MDFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsqHlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25qqzLeWyoeWxsVwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bKh5bGx5Y2A5bKh5bGx6LevMzk16JmfXCIsXG4gICAgdGVsOiBcIjA3LTYyMy0wMDU1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bKh5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+ecvi3lsqHlsbFcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWyoeWxseWNgOafs+api+adsei3rzktMeiZn1wiLFxuICAgIHRlbDogXCIwNy02MjktNjE1N1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWyoeWxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnpo/oqJgt5p6X5ZySXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmnpflnJLljYDmlofos6LljJfot6826JmfXCIsXG4gICAgdGVsOiBcIjA3LTY0MS02NjMzXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p6X5ZyS5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWvtuaqsy3mnpflnJJcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guael+WckuWNgOadseael+ilv+i3rzYy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTY0My05MDAwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p6X5ZyS5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+WSjC3pmL/ok65cIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumYv+iTruWNgOW/oOWtnei3rzkz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTYzMS0yMTgyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Zi/6JOu5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuael+iomFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6YeR5Y2A5YWJ5b6p5LiJ6KGXMTMy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTIyMS04MzEzXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6YeR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWSjOaYk+mWgOW4glwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6YeR5Y2A5oiQ5Yqf5LiA6LevMzAy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTIxMS0zNDg4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6YeR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWuj+e+ji3oh6rlvLdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWJjemHkeWNgOiHquW8t+S6jOi3rzgwLTHomZ9cIixcbiAgICB0ZWw6IFwiMDctMjYxLTk5NTVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3ph5HljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yex6KiYXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3ph5HljYDpnZLlubTkuozot68xNjTomZ9cIixcbiAgICB0ZWw6IFwiMDkxNi0wMTItODk5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6YeR5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuadseeAm1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5LqM6IGW6LevMjE46JmfXCIsXG4gICAgdGVsOiBcIjA3LTcxNi0xNzE3XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6Y6u5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumYv+eRn1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5LqM6IGW6LevNjfomZ9cIixcbiAgICB0ZWw6IFwiMDctNzE3LTI4MDJcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLeS4reWxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5Lit5bGx5LqM6LevMTg244CBMTg46JmfXCIsXG4gICAgdGVsOiBcIjA3LTUzNi0xMjg1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6Y6u5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS6rOm0u+iOiuWckuiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5rCR6KOV6KGXMTAx6JmfXCIsXG4gICAgdGVsOiBcIjA5MTMtNjY1LTIzOVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWJjemOruWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlu6PniLot5rC46LGQ5bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDmsLjosZDot68yMjjomZ9cIixcbiAgICB0ZWw6IFwiMDctNzE2LTc4NzhcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Lqo6YqYXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDlhYnoj6/kuozot68zMDDomZ9cIixcbiAgICB0ZWw6IFwiMDctNzEzLTAyMDlcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi546W6YKRXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDmmI7ps7PkuInot68xMzXomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkzLTU4OTFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi56aP6KiYXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDnkZ7pmobot681OTfomZ9cIixcbiAgICB0ZWw6IFwiMDctNzYxLTM2NTZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5ZGC6KiYXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDpjq7mnbHkuIDooZcxNDPomZ9cIixcbiAgICB0ZWw6IFwiMDctODMxLTg1NDVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6byT5bGx6I6K576O5r+D5bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILnvo7mv4PljYDkuK3mraPot6/kuozmrrUxODXomZ9cIixcbiAgICB0ZWw6IFwiMDctNjYxLTczMTVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLnvo7mv4PljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5oyv5piMLee+jua/g1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC576O5r+D5Y2A5rOw5a6J6LevMzjomZ9cIixcbiAgICB0ZWw6IFwiMDkwOS01MzctODExXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi576O5r+D5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumGh+mFkuebilwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5LiJ5aSa5LqM6LevMTUx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTcyMy0wOTA5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWNl+Wogea1t+a0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5LiJ5aSa5LqM6LevMzA46JmfXCIsXG4gICAgdGVsOiBcIjA3LTUzNi0wMDAwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW7o+eIulwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5Zub57at5LiJ6LevMTgx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTUzNi01MjUyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumWi+aZri3kupTnpo/lupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOawkeasiuS4gOi3rzIzOeiZn1wiLFxuICAgIHRlbDogXCIwNy0yMjYtNTU0NVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLk+mbheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmjK/mmIwt5q2m5bufXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILoi5Ppm4XljYDmrablu5/ot68xNTnomZ/kuYszXCIsXG4gICAgdGVsOiBcIjA3LTcyMi05MjU1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWwiuWfjlwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A6Z2S5bm05LiA6LevOFwiLFxuICAgIHRlbDogXCIwNy0yMjMtMjY5M1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLk+mbheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpioDnm6TmtIvphZJcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOW7uuawkei3rzE1OOiZn1wiLFxuICAgIHRlbDogXCIwNy03MjItOTAxOFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLk+mbheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlkInmgalcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOiLk+mbheS4gOi3rzM1NOiZn1wiLFxuICAgIHRlbDogXCIwNy01MzUtNTk5OVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLk+mbheWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpKflkozojITokKNcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiMhOWumuWNgOeZveeggui3rzE3MuiZn1wiLFxuICAgIHRlbDogXCIwNy02OTAtNjAwM1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiMhOWumuWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpZXmrKPooYwt5qKT5a6YXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmopPlrpjljYDkuK3mraPot68yNzItMeiZn1wiLFxuICAgIHRlbDogXCIwNy02MTAtOTg5NlwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaik+WumOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhqDlvrct5YWr5b635bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmlrDoiIjljYDlhavlvrfkuIDot68xOTbomZ9cIixcbiAgICB0ZWw6IFwiMDctMjM2LTA2MzlcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDoiIjljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLeS6lOemj+W6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A5LqU56aP5LqM6LevMTkw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTIxMS01NDQ0XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6IiI5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiRoeWckumFkuWTgeWwiOizo1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A5YWt5ZCI5LiA6LevMTA56JmfXCIsXG4gICAgdGVsOiBcIjA3LTIzNi0zMzA4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6IiI5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaLv+egtOW0mea0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A6Ieq56uL5LqM6LevMTQy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTI4OC0zNzU1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6IiI5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuafr+ael+mgk1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A6Ieq56uL5LqM6LevODDomZ9cIixcbiAgICB0ZWw6IFwiMDctMjg1LTYxNjFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDoiIjljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWt5ZCI5rSL6KGMXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmlrDoiIjljYDljZflj7Dot683M+W3tzIx6JmfXCIsXG4gICAgdGVsOiBcIjA5MjAtMzkwLTc2N1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiIiOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkv6HnppVcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guaWsOiIiOWNgOW+qeiIiOS6jOi3rzMyOOiZn1wiLFxuICAgIHRlbDogXCIwNy0yMjItMDExM1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiIiOWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmjK/mmIwt5Y+z5piMXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDkuInlsbHooZcyMjDomZ9cIixcbiAgICB0ZWw6IFwiMDctMzYzLTQwMzZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmpaDmopPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5o+a5rSyXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDlj7PmmIzooZc1MTbomZ9cIixcbiAgICB0ZWw6IFwiMDctMzYzLTczNjlcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmpaDmopPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25qqz5qmL6aCt5bqXXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDluILloLTooZc46JmfXCIsXG4gICAgdGVsOiBcIjA3LTYxMS0wMDMzXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWTgemRq1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5qWg5qKT5Y2A6LuN5qCh6LevODYy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTM2Mi01NTg4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWvtuaqsy3mpaDmopNcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gualoOaik+WNgOmzs+aloOi3rzE0MuiZn1wiLFxuICAgIHRlbDogXCIwNy0zNTgtMTMzM1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIualoOaik+WNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr7bmqrMt5b636LOiXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDlvrfos6Lot680MTjomZ9cIixcbiAgICB0ZWw6IFwiMDctMzY0LTA4ODhcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmpaDmopPljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25qqzLei3r+eruVwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6Lev56u55Y2A5Lit5bGx6LevNzE2XCIsXG4gICAgdGVsOiBcIjA3LTY5Ny03MDAwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Lev56u55Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumrmOmDveiPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6Lev56u55Y2A5Lit5bGx6LevODMy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTY5Ny02NTg4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Lev56u55Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaYjuaYpVwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6Lev56u55Y2A5bu25bmz6LevNTIw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTYwNy02Njk5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Lev56u55Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+aIkOa0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOv5bGx5Y2A56uL5b+X6KGXMTQy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc0Mi01ODg4XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOv5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumCkeadsea0i+ihjC3kuZ3lpoJcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gum8k+WxseWNgOS5neWmguWbm+i3rzEwMDXomZ9cIixcbiAgICB0ZWw6IFwiMDctNTMzLTI3MzJcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLpvJPlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5oyv5piMLeaYjuiqoFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6byT5bGx5Y2A5piO6Kqg5LiJ6LevNjM46JmfXCIsXG4gICAgdGVsOiBcIjA3LTU1NS03OTk5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6byT5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWlleaso+ihjC3ml5flsbHlupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gum8k+WxseWNgOe+juihk+adseS6jOi3rzYyMuiZn1wiLFxuICAgIHRlbDogXCIwNy01NTMtMTU2NlwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum8k+WxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlpZXmrKPooYwt576O6KGT5peX6ImmXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILml5flsbHljYDlu7blubPkuIDot68zNTnomZ9cIixcbiAgICB0ZWw6IFwiMDctNjYyLTExODhcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLml5flsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6byT5bGx6I6KLeaXl+WxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5peX5bGx5Y2A5bu25bmz5LiA6LevNTA46JmfXCIsXG4gICAgdGVsOiBcIjA3LTY2MS0yODc1XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5peX5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuW3qOa0i+iPuOmFklwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5peX5bGx6Y6u5Lit6I+v6LevNTMw5LmLMeiZn1wiLFxuICAgIHRlbDogXCIwNy02NjEtMTA3MlwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaXl+WxsemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuZ3kuYUt5Lit5bGx5p2xXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDkuK3lsbHmnbHot68zODLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzAzLTM1NTVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5a+25qqzLeS4reW0mVwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5Lit5bSZ5LqM6LevNTM36JmfXCIsXG4gICAgdGVsOiBcIjA3LTc1NS0wMDAwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumzs+e/iua0i+ihjFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5LqU55Sy5LqM6LevNTLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzY3LTI4MzVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLemzs+WxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5paH5YyW6KW/6LevMTcw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc3Ny05MDYyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkuWupOmFkueqllwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5paH5q6/6KGXMTbomZ9cIixcbiAgICB0ZWw6IFwiMDctNzc3LTk2MzNcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2D5YCJ5bupXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDmlofpvo3mnbHot68xMjjomZ9cIixcbiAgICB0ZWw6IFwiMDctNzMzLTM5ODZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLeaWh+m+jeadseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5paH6b6N5p2x6LevNzgx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc3Ny03Njg5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWYieeRnea0i+ihjC3mlofpvo3lupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOaWh+m+jeadsei3rzc4NeiZn1wiLFxuICAgIHRlbDogXCIwNy03ODAtMTk4OVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumzs+WxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlr7bmqrMt6bOz5bGxXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDlhYnpgaDot680MjbomZ9cIixcbiAgICB0ZWw6IFwiMDctNzEwLTY2NjFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6ZaL5pmuLemzs+WxseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6Z2S5bm06Lev5LiA5q61MzYw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc0Ny0wNDY2XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuafj+agvOmBlFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5Y2X5Lqs6LevMTcz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc2Ny01NTg2XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuS5neS5hS3ps7PnlLJcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOWNl+iPr+S4gOi3rzE4MOiZn+OAgTE4MuiZn1wiLFxuICAgIHRlbDogXCIwNy03OTYtOTkyOFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumzs+WxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuZ3kuYUt5LiA55SyXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDlloTnvo7ph4zljZfoj6/ot68xNDnomZ/lj7PlgbRcIixcbiAgICB0ZWw6IFwiMDctNzE2LTI4OTlcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5o+a5piHXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDpgY7li4fot68yNjDomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkyLTkxNTZcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLemzs+adseW6l1wiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6bOz5p2x6LevNTMz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTg4Mi04Mzg5XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuemj+iomC3kupTnlLLlupdcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOmOruWNl+mHjOS6lOeUsuS6jOi3rzc0MOiZn1wiLFxuICAgIHRlbDogXCIwNy04MTMtODgxMVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumzs+WxseWNgFwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLluILloLRcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gum5veWfleWNgOS4g+izouS4iei3rzg36JmfXCIsXG4gICAgdGVsOiBcIjA3LTUzMy03MDQwXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bm95Z+V5Y2AXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuadseWkp1wiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5bGP5p2x5biC5Lit5q2j6LevNTQ46JmfXCIsXG4gICAgdGVsOiBcIjA4LTczOC0xMjQ1XCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWkp+WQjC3lhafln5RcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+WFp+WflOmEieW7o+a/n+i3rzExNOiZn1wiLFxuICAgIHRlbDogXCIwOC03NzktOTA0NlwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFp+WflOmEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnbHpkatcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+mHjOa4r+mEieWkp+W5s+adkeS7geWSjOi3rzIz6JmfXCIsXG4gICAgdGVsOiBcIjA4LTc3NS0xMTk5XCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6YeM5riv6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumHkeWSjOmghlwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij6YeM5riv6YSJ6YeM5riv6LevMTE044CBMTEy6JmfXCIsXG4gICAgdGVsOiBcIjA4LTc3NS02MDQzXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6YeM5riv6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuijlemZni3mnbHmuK9cIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+adsea4r+mOruaWsOWLneihlzE4MOiZn1wiLFxuICAgIHRlbDogXCIwOC04MzItMzU4NVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadsea4r+mOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlkInmmIxcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+aei+WvrumEieS4reWxsei3rzc16JmfXCIsXG4gICAgdGVsOiBcIjA4LTg3OC0yMzYyXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5p6L5a+u6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuijlemZni3msLTlupXlr65cIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+aei+WvrumEieS4reWxsei3r+S6jOautTM1M+iZn1wiLFxuICAgIHRlbDogXCIwOC04NzEtNDEyMlwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaei+WvrumEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLoo5XpmZ4t5p6X6YKKXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPmnpfpgorphInku4HlkozmnZHkuK3lsbHot68yODXomZ9cIixcbiAgICB0ZWw6IFwiMDgtODc1LTgwNzBcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmnpfpgorphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6KOV6ZmeLeWNl+W3nlwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5Y2X5bee6YSJ5LiJ5rCR6LevMTM36JmfXCIsXG4gICAgdGVsOiBcIjA4LTg2NC02MzAwXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5bee6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIua0i+WfulwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5bGP5p2x5biC5YWs5ZyS6KW/6LevMTIx6JmfXCIsXG4gICAgdGVsOiBcIjA4LTczMy03MjcyXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWGoOiPry3mraPmnbFcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4guawkeeUn+i3rzU3LTjomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzIyLTY4MDZcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlsY/mnbHluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yag5b63Lee4veW6l1wiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5bGP5p2x5biC5q2m5oiQ6KGXMTAz6JmfXCIsXG4gICAgdGVsOiBcIjA4LTc1MS02NTUzXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuWGoOW+ty3lpKfln5TlupdcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4guafs+a0suihlzM06JmfXCIsXG4gICAgdGVsOiBcIjA4LTczMy03MDA3XCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumKmOm0u+a1t+ixkFwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5bGP5p2x5biC5rW36LGQ6KGXMTE55be3MzQtMuiZn1wiLFxuICAgIHRlbDogXCIwOC03MzYtOTkwMVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWxj+adseW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhqDlvrct6I+v55ub5bqXXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILoj6/nm5vooZcxNuiZn1wiLFxuICAgIHRlbDogXCIwOC03NTEtMDYzM1wiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWxj+adseW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnpr7lpKdcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4gueRnuWFiei3r+S4ieautTI5OeiZn1wiLFxuICAgIHRlbDogXCIwOC03MzgtNjY1M1wiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWxj+adseW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmnbHkuqxcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4guW7o+adsei3rzE1OOiZn1wiLFxuICAgIHRlbDogXCIwOC03MjMtMTExOVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWxj+adseW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnmb7liKlcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+aBhuaYpemOruS4reato+i3rzEzOOiZn1wiLFxuICAgIHRlbDogXCIwOC04ODktMjYxNVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaBhuaYpemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLokaHlnJIt5oGG5pilXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPmgYbmmKXpjq7lvqnoiIjot685OS0x6JmfXCIsXG4gICAgdGVsOiBcIjA4LTg4OC0yNDIyXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5oGG5pil6Y6uXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiRoeWcki3lor7kuIFcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+aBhuaYpemOruWivuS4gei3rzMyMOiZn1wiLFxuICAgIHRlbDogXCIwOC04ODYtMjYwNFwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaBhuaYpemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLptLvmmIdcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+W0gemggumEieWKm+ekvuadkeiIiuW6l+i3rzEtMTLomZ9cIixcbiAgICB0ZWw6IFwiMDgtODYzLTE0MDlcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLltIHpoILphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Y2D5LiK6I+46YWS5ZWG6KGMXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPokKzkuLnphInokKzlhajmnZHokKzkuLnot6/kuIDmrrUzMjHomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzc2LTQ2MzZcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLokKzkuLnphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aSn5ZCMXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPmva7mtLLpjq7mnJ3mmIfot684NOiZn1wiLFxuICAgIHRlbDogXCIwOC03ODgtMjA1OFwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIua9rua0sumOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnpo/oqJgt5bGP5p2xXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPpub3ln5TphInntq3mlrDot68xOTPomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzkzLTUwNjFcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpub3ln5TphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5b636LGQXCIsXG4gICAgYWRkcmVzczogXCLlj7DmnbHnuKPlj7DmnbHluILlgrPlu6Pot681MDfomZ9cIixcbiAgICB0ZWw6IFwiMDgtOTIyLTgzNzJcIixcbiAgICBhcmVhOiBcIuWPsOadsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlj7DmnbHluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5aChXCIsXG4gICAgYWRkcmVzczogXCLlj7DmnbHnuKPlj7DmnbHluILmlrDnlJ/ot68xMTbomZ9cIixcbiAgICB0ZWw6IFwiMDgtOTMyLTEyMzVcIixcbiAgICBhcmVhOiBcIuWPsOadsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlj7DmnbHluIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5piO5pyIXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPoirHok67luILkuK3mraPot68xNDbomZ9cIixcbiAgICB0ZWw6IFwiMDMtODMxLTU5NjZcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiK6YaHXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPlkInlronphInkuK3oj6/ot6/kuozmrrUxNTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtODUxLTIwNjhcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlkInlronphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5rCR5L6BXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPlkInlronphInlkInlronot6/kuIDmrrU3NjjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzg1OC0wNzY4XCIsXG4gICAgYXJlYTogXCLoirHok67nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZCJ5a6J6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuiHqueri1wiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu57ij5ZCJ5a6J6YSJ6Ieq56uL6Lev5LqM5q61NDLomZ9cIixcbiAgICB0ZWw6IFwiMDMtODU2LTYzNTVcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlkInlronphIlcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6YWS5rGf6KGXXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPoirHok67luILljJbpgZPot68xNjLomZ9cIixcbiAgICB0ZWw6IFwiMDMtODIyLTI1MjBcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5Yqg6YWS6KGMXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPoirHok67luILou5LovYXot68yMuiZn1wiLFxuICAgIHRlbDogXCIwMy04MzEtNDk2MFwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiKseiTruW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLpm4Tlr7BcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWci+iBr+S4gOi3rzIxMeiZn1wiLFxuICAgIHRlbDogXCIwMy0zODMyLTYxNDdcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5YWo5a625L6GXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPoirHok67luILlnIvoga/kupTot681MeiZn1wiLFxuICAgIHRlbDogXCIwMy04MzYtMDEwMVwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiKseiTruW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLph5Hpm4Tlr7BcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWNmuaEm+ihlzEzNeiZn1wiLFxuICAgIHRlbDogXCIwMy04MzItNzYyMlwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiKseiTruW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuIrmj5pcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWvjOelpeihlzk36JmfXCIsXG4gICAgdGVsOiBcIjAzLTg1Ny02NTQzXCIsXG4gICAgYXJlYTogXCLoirHok67nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6Iqx6JOu5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIumFkua3tVwiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu57ij5paw5Z+O6YSJ5ZiJ6YeM5LiJ6KGXOTLkuYs46JmfXCIsXG4gICAgdGVsOiBcIjAzLTM4MjYtMTc4NlwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOWfjumEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLnlLPph45cIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WunOiYreW4guWunOiIiOi3r+S4gOautTI4M+iZn1wiLFxuICAgIHRlbDogXCIwMy05MzgtMDgyMlwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLkuIDot6/nmbxcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WGrOWxsemEieWGrOWxsei3r+S6lOautTI2OeiZn1wiLFxuICAgIHRlbDogXCIwMy05NTgtNTQ5OVwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWGrOWxsemEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLmrKPpvo1cIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WGrOWxsemEieWGrOWxsei3r+S6lOautTI3N+iZn1wiLFxuICAgIHRlbDogXCIwMy05NTgtOTM1MlwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWGrOWxsemEiVwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmrr9cIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WunOiYreW4guWunOiIiOi3r+S6jOautTLomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzkzMi05NTc5XCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6c6Jit5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaYjuiIiFwiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij5a6c6Jit5biC56We6L6y6Lev5LiA5q61MjbomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTMyLTUyNTlcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlrpzomK3luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi6bWs5qWtXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILpgLLlo6vot6/kuIDmrrUyOOiZn1wiLFxuICAgIHRlbDogXCIwMy05MjUtNTcyMlwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLmqIJcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WunOiYreW4guaWsOawkei3rzg06JmfXCIsXG4gICAgdGVsOiBcIjAzLTkzMi01MDg1XCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6c6Jit5biCXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIueah+WQjumBk1wiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij5a6c6Jit5biC5paw6IiI6LevODjomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTMzLTMzODVcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlrpzomK3luIJcIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5aCh6bOzXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILovrLmrIrot68yM+iZn1wiLFxuICAgIHRlbDogXCIwMy05MzUtMjUzMlwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLoirHlpKnphZLlnLAt57+w5b63XCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILoiIrln47mnbHot680OeiZn1wiLFxuICAgIHRlbDogXCIwMy05MzMtMjAzOFwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLphZLnqqlcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+ekgea6qumEieS4reWxsei3r+S6jOautTI56JmfXCIsXG4gICAgdGVsOiBcIjAzLTk4OC03MzExXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56SB5rqq6YSJXCIsXG5cbiAgfSxcbiAge1xuICAgIHN0b3JlOiBcIuaEm+eQs+mFklwiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij576F5p2x6Y6u5YWs5q2j6LevMjg5LTHomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTUxLTAyMDlcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnvoXmnbHpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi55m+5pmf6KGMXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPnvoXmnbHpjq7oiIjmnbHljZfot680OeiZn1wiLFxuICAgIHRlbDogXCIwMy05NTYtMDQ3NlwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIue+headsemOrlwiLFxuXG4gIH0sXG4gIHtcbiAgICBzdG9yZTogXCLlhYnmmIxcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+e+headsemOruiIiOadsei3rznomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTU1LTgyODZcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnvoXmnbHpjq5cIixcblxuICB9LFxuICB7XG4gICAgc3RvcmU6IFwi5LiK5pqY5rSL6I+46YWSXCIsXG4gICAgYWRkcmVzczogXCLmvo7muZbnuKPppqzlhazluILlhYnlvqnot68xNDLomZ9cIixcbiAgICB0ZWw6IFwiMDYtOTI2LTU1NzZcIixcbiAgICBhcmVhOiBcIua+jua5lue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLppqzlhazluIJcIixcblxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGFsbF9zdG9yZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9