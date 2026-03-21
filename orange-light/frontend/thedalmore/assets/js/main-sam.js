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
} //最新消息vue




function newsListVue() {
  var el = document.querySelector("#newsPagination_Id");

  if (el !== null) {
    var PAGE_SIZE = 8; //一個頁面要顯示多少筆資料

    var FOO_DATA = _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    Vue.component("paginate", VuejsPaginate);
    var vue = new Vue({
      el: "#newsPagination_Id",
      data: {
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
        vm.listdata = FOO_DATA;
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
        selected_city_area :"",
		qtext:"",
		city_areas : []
      },
	  
	  created:function(){
        this.area_change(this.selected_area);
      },
	   
      methods: {
		area_change : function(e){
			
		
		   
		   
		  this.qtext="";
		  $("#qtext").val("");
		  
			
		  var rows =  this.sections[0].stores.filter(function (element, index) {
            return element["area"] == e;
          });
		  
		  var found ={};
		  var groupRwos = rows.filter(function(element){
				return found.hasOwnProperty(element["city_area"])? false : (found[element["city_area"]]=true);
		  });
			 
		  this.city_areas = groupRwos;
		
		  this.selected_city_area="";
		  $("#city_area").val("");
		   
        },
		
		city_area_change:function(){
			  this.qtext="";
		      $("#qtext").val("");
		},
		
		query: function(qtext) {
			var text = $("#qtext").val().trim();
			
			if (text=="") {
				
				alert("請輸入通路名稱或地址");
				return;
			}
			
			this.qtext = text;
			this.selected_area ="all";
			this.selected_city_area ="";
			
			//this.rowData(this.selected_area , this.selected_city_area, this.qtext);
		},
		
        rowData: function (e , city_area, qtext) {
		  var text = qtext.trim();
			
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
				 
				  flag = element["store"].indexOf(text) >=0  ||  element["address"].indexOf(text) >= 0;
				  
				  console.log(flag , text, element["store"] , element["address"], element["address"].indexOf(text));
				 
				 
			 } else if (city_area != "") {
				 if (e == "all") {
					flag = element["city_area"] ==city_area;
				 } else {
					flag = element["area"] == e &&  element["city_area"] ==city_area;
				 }
			 } else {
				 if (e == "all") {
					flag = true;
				 } else {
					 flag = element["area"] == e;
				 }
			 }
			 
			
			 
			 return flag;
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
  fixSmartphone100vh();
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
  imgSrc: 'assets/img/news/img_newsInpage-01.webp',
  textContent: '坐擁蘇格蘭最古老橡木桶藏的「老酒銀行」大摩酒廠，發布全新系列《大摩典藏珍稀年份系列 The Dalmore Vintages》歡慶釀酒工藝至高成就，限量酒款 Vintage 2002、Vintage 2005 將在特定亞洲市場預先曝光，再往全球各大城市發布，而尚格酒業更將限量精裝木盒版本獨獻台灣，搶先全球首發上市。',
  aHref: 'news-inpage-01.html'
}, {
  title: '大摩2022鎏金奢展<br>雋藏奧藝l老酒銀行',
  imgSrc: 'assets/img/news/img_newsInpage-02.webp',
  textContent: '「大摩2022鎏金奢展」於01月13日展出至01月23日於台北微風南山藝文中心，限期展出11天。以「老酒銀行」金庫大門及鎏光熠熠的保險櫃，​其中存放著來自時光淬鍊的大摩歷史里程碑及珍稀酒液為展覽設計核心概念，演繹大摩近兩百年來的酒廠歷史、人文精神、極致工藝，深度探究時間沉澱下的非凡價值。',
  aHref: 'news-inpage-02.html'
}, {
  title: '稀世珍品大摩62年<br>再破拍賣紀錄',
  imgSrc: 'assets/img/news/img_newsInpage-03.webp',
  textContent: "蘇富比於2020年5月14日展開一場名為點滴成金的線上烈酒拍賣會，共有216項威士忌、干邑等烈酒珍稀拍品。此拍賣已於倫敦時間2020年5月28日晚上8點結束，並由兩瓶大摩62年以預估價兩倍多的高價並列成為此拍賣會最高拍價的珍品，成交價同為 GBP£266,200英鎊(約台幣1000萬)。「大摩62年，一滴都不能浪費。」（Dalmore 62 –can't let a drop hit the floor！），這句來自電影《金牌特務》的經典對白，說明了大摩威士忌的彌足珍貴，更屢屢締造拍賣市場不朽傳奇。",
  aHref: 'news-inpage-03.html'
}, {
  title: '歡慶大摩酒廠180年<br>雪莉12年驚豔上市',
  imgSrc: 'assets/img/news/img_newsInpage-04.webp',
  textContent: "蘇格蘭高地區的「老酒銀行」大摩酒廠在2019年末歡度180歲生日，這場世紀慶生持續到2020年，仍讓全球威士忌市場興奮不已，大摩不只推出紀念輝煌時刻的180週年紀念酒──全球限量三瓶的大摩60年單一麥芽威士忌，並上市目前最高年份的大摩51年與全新「雪莉甄選系列」12年單一麥芽威士忌，不僅如此，大摩全系列包裝也全面換新裝，設計更顯尊榮奢華，邀請全世界酒迷一同慶祝大摩威士忌走入下一個180年。",
  aHref: 'news-inpage-04.html'
}, {
  title: '大摩50年珍稀登場<br>首創入香檳桶',
  imgSrc: 'assets/img/news/img_newsInpage-05.webp',
  textContent: "為了誌慶大摩（The Dalmore）單一麥芽威士忌首席釀酒師Richard Paterson，自17歲踏進威士忌領域，26歲當上大摩首席釀酒師至今屆滿50年，這位素有「神之鼻」美譽的威士忌大師以累積50年的輝煌製酒成就，悉心打造一款史無前例的大摩50年大師典藏單一麥芽蘇格蘭威士忌，全球限量發行50瓶",
  aHref: 'news-inpage-05.html'
}, {
  title: '大摩築光大師系列No.1<br>攜手隈研吾再創高峰',
  imgSrc: 'assets/img/news/img_newsInpage-06.webp',
  textContent: "全球窖藏最稀有威士忌的「老酒銀行」大摩酒廠，近年來與蘇格蘭第一座設計博物館V&A Dundee合作密切，促成當代建築大師與威士忌大師的協作，並於2022年上市全新酒款系列，「大摩築光大師系列」。",
  aHref: 'news-inpage-06.html'
}, {
  title: '大摩築光大師系列No.1<br>2022限定版 限量首發',
  imgSrc: 'assets/img/news/img_newsInpage-07.webp',
  textContent: "首創以三種珍稀橡木桶，蘇格蘭橡木桶 (Tay Oak)、日本水楢桶和美國白橡木桶，訂製成「金繼」（Kintsugi）橡木桶，並陳釀出具有多重獨特風味且完美平衡的單一麥芽威士忌，全球限量15,000瓶。",
  aHref: 'news-inpage-07.html'
}, {
  title: '大摩典藏珍稀年份<br>雋永時光定義珍稀',
  imgSrc: 'assets/img/news/img_newsInpage-08.webp',
  textContent: "擁有最尊貴威士忌的大摩酒廠，去年發布全新系列《大摩典藏珍稀年份系列 Vintages 2002/2005》歡慶釀酒工藝至高成就，以限量精裝木盒版本獨獻台灣，成為去年最熱門的收藏話題。",
  aHref: 'news-inpage-08.html'
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
  "store": "進益",
  "address": "基隆市仁愛區愛一路19號",
  "tel": 224224845,
  "area": "基隆市",
  "city_area": "仁愛區"
 },
 {
  "store": "晶鴻",
  "address": "基隆市安樂區基金一路117號",
  "tel": 224347000,
  "area": "基隆市",
  "city_area": "安樂區"
 },
 {
  "store": "銀盤-士林",
  "address": "台北市士林區大北路85號",
  "tel": 228816828,
  "area": "台北市",
  "city_area": "士林區"
 },
 {
  "store": "承合",
  "address": "台北市士林區文林路587巷115號",
  "tel": 228322911,
  "area": "台北市",
  "city_area": "士林區"
 },
 {
  "store": "展宸",
  "address": "台北市士林區福港街149巷15弄8號",
  "tel": 228815818,
  "area": "台北市",
  "city_area": "士林區"
 },
 {
  "store": "劉恆裕",
  "address": "台北市大同區民生西路342號",
  "tel": 225560948,
  "area": "台北市",
  "city_area": "大同區"
 },
 {
  "store": "丹騰",
  "address": "台北市大安區大安路一段31巷19號C室",
  "tel": 227043507,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "買酒網-仁愛門市",
  "address": "台北市大安區仁愛路4段29號1樓",
  "tel": 287732607,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "洋酒城-仁愛",
  "address": "台北市大安區仁愛路四段112巷21號",
  "tel": 227095168,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "金釀",
  "address": "台北市大安區仁愛路四段411號",
  "tel": 227720101,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "珈品",
  "address": "台北市大安區永康街42號",
  "tel": 223578772,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "佳賀洋行-延吉店",
  "address": "台北市大安區延吉街128-1號",
  "tel": 227790866,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "康齡酒藏-遠東SOGO忠孝店",
  "address": "台北市大安區忠孝東路四段45號B2",
  "tel": 227403758,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "買酒網-古亭門市",
  "address": "台北市大安區杭州南路二段107號1樓",
  "tel": 223910700,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "佳賀洋行-仁愛店",
  "address": "台北市大安區東豐街21號",
  "tel": 223256256,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "美多客",
  "address": "台北市大安區東豐街77號",
  "tel": 227088721,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "佳賀洋行-信義店",
  "address": "台北市大安區信義路三段128號",
  "tel": 227080583,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "提瑪",
  "address": "台北市大安區信義路四段254號",
  "tel": 227000259,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "買酒網-信義門市",
  "address": "台北市大安區信義路四段267號1樓",
  "tel": 227030233,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "買酒網-敦一門市",
  "address": "台北市大安區敦化南路一段196號",
  "tel": 227110019,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "買酒網-敦二門市",
  "address": "台北市大安區敦化南路二段98號1樓",
  "tel": 227080751,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "飛久",
  "address": "台北市士林區中山北路六段27號",
  "tel": 228321099,
  "area": "台北市",
  "city_area": "士林區"
 },
 {
  "store": "買酒網-中山門市",
  "address": "台北市中山區中山北路二段46號1樓",
  "tel": 225319751,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "永利菸酒行",
  "address": "台北市中山區民生東路二段79號",
  "tel": 225238019,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "柏達洋酒",
  "address": "台北市中山區民權東路二段152巷22弄2號",
  "tel": 225098480,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "買酒網-松江門市",
  "address": "台北市中山區松江路131號",
  "tel": 225161916,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "陽光美酒薈-佳醇",
  "address": "台北市中山區松江路18號",
  "tel": 225818520,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "橡木桶松江店",
  "address": "台北市中山區松江路190號",
  "tel": 225628000,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "銀豐",
  "address": "台北市中山區林森北路133巷68號",
  "tel": 225116804,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "嘉利",
  "address": "台北市中山區林森北路438號",
  "tel": 225633969,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "好窩",
  "address": "台北市中山區長安東路二段286號",
  "tel": 287720014,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "松林洋酒",
  "address": "台北市中山區南京東路二段21巷8號",
  "tel": 225315741,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "橘子酒坊-阿爾發",
  "address": "台北市中山區復興北路514巷2號",
  "tel": 225047123,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "買酒網-復興門市",
  "address": "台北市中山區復興北路84號1樓",
  "tel": 227525991,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "佳賀洋行-光華店",
  "address": "台北市中山區渭水路56號",
  "tel": 227116118,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "金盃",
  "address": "台北市中山區新生北路二段62巷42號",
  "tel": 225811651,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "小六",
  "address": "台北市中正區中華路二段311巷6號",
  "tel": 935315308,
  "area": "台北市",
  "city_area": "中正區"
 },
 {
  "store": "酒世界-中正",
  "address": "台北市中正區中華路二段313巷16號",
  "tel": 223376665,
  "area": "台北市",
  "city_area": "中正區"
 },
 {
  "store": "康齡酒藏-新光三越站前店",
  "address": "台北市中正區忠孝西路一段66號B2",
  "tel": 223713992,
  "area": "台北市",
  "city_area": "中正區"
 },
 {
  "store": "七三七",
  "address": "台北市內湖區內湖路一段737巷51弄3號",
  "tel": 226579130,
  "area": "台北市",
  "city_area": "內湖區"
 },
 {
  "store": "灃姵酒業",
  "address": "台北市內湖區安康路422號",
  "tel": 226315761,
  "area": "台北市",
  "city_area": "內湖區"
 },
 {
  "store": "買酒網-內湖旗艦門市",
  "address": "台北市內湖區行愛路77巷69號1樓",
  "tel": 287925186,
  "area": "台北市",
  "city_area": "內湖區"
 },
 {
  "store": "大象台玖",
  "address": "台北市文山區保儀路124號",
  "tel": 229393439,
  "area": "台北市",
  "city_area": "文山區"
 },
 {
  "store": "世達",
  "address": "台北市北投區文林北路176號",
  "tel": 228235777,
  "area": "台北市",
  "city_area": "北投區"
 },
 {
  "store": "海納川",
  "address": "台北市中山區吉林路225號",
  "tel": 225818590,
  "area": "台北市",
  "city_area": "中山區"
 },
 {
  "store": "鼎豐",
  "address": "台北市大安區延吉街62巷6弄1號",
  "tel": 287728820,
  "area": "台北市",
  "city_area": "大安區"
 },
 {
  "store": "好酒多",
  "address": "台北市松山區八德路四段200號",
  "tel": 227681786,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "一酒七五",
  "address": "台北市松山區市民大道五段127號",
  "tel": 227681975,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "買酒網-民生門市",
  "address": "台北市松山區民生東路四段58號1樓",
  "tel": 227188826,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "康喜客-松山",
  "address": "台北市松山區光復北路136號",
  "tel": 287707555,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "大葡園",
  "address": "台北市松山區敦化南路一段102-1號",
  "tel": 227025053,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "佳賀洋行-永吉店",
  "address": "台北市信義區永吉路120巷90號",
  "tel": 277294999,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "沃利特",
  "address": "台北市信義區永吉路278巷2-3號",
  "tel": "0933-475-210",
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "佳賀洋行-忠孝店",
  "address": "台北市信義區忠孝東路6段386號",
  "tel": 226519939,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "康齡酒藏-台北忠五門市",
  "address": "台北市信義區忠孝東路五段504號1樓",
  "tel": 227260868,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "買酒網-市政府門市",
  "address": "台北市信義區忠孝東路五段51號1樓",
  "tel": 227696099,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "振宜洋酒",
  "address": "台北市信義區忠孝東路六段491號",
  "tel": 226511328,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "海城菸酒-松山店",
  "address": "台北市信義區松山路289號",
  "tel": 227659366,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "康齡酒藏-新光三越信義A11",
  "address": "台北市信義區松壽路11號B2",
  "tel": 227222317,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "忠佳洋行",
  "address": "台北市信義區松德路287號",
  "tel": 227597533,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "楠興",
  "address": "台北市信義區信義路六段91號",
  "tel": 227282775,
  "area": "台北市",
  "city_area": "信義區"
 },
 {
  "store": "金瑞成",
  "address": "台北市南港區忠孝東路七段601號",
  "tel": 227862239,
  "area": "台北市",
  "city_area": "南港區"
 },
 {
  "store": "添酒",
  "address": "台北市南港區東興街94號",
  "tel": "0965-435-145",
  "area": "台北市",
  "city_area": "南港區"
 },
 {
  "store": "友美",
  "address": "台北市南港區舊莊街二段3號",
  "tel": "02-2782-8469",
  "area": "台北市",
  "city_area": "南港區"
 },
 {
  "store": "昌富菸酒",
  "address": "台北市松山區塔悠路17號",
  "tel": 237655899,
  "area": "台北市",
  "city_area": "松山區"
 },
 {
  "store": "萬華煙酒",
  "address": "台北市萬華區和平西路三段103號",
  "tel": "02-2302-7896",
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "風格-和平",
  "address": "台北市萬華區和平西路三段163號",
  "tel": 223361759,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "齊泰洋行",
  "address": "台北市萬華區昆明街150號",
  "tel": 223315147,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "酒國大亨",
  "address": "台北市萬華區南寧路45-2號",
  "tel": 223060102,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "富盛",
  "address": "台北市萬華區柳州街38號",
  "tel": 223313269,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "萬益",
  "address": "台北市萬華區柳州街40-1號",
  "tel": 223821665,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "駱北洋行",
  "address": "台北市萬華區貴陽街二段164巷32號",
  "tel": 223832201,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "金淬",
  "address": "台北市萬華區廣州街202號",
  "tel": 223085647,
  "area": "台北市",
  "city_area": "萬華區"
 },
 {
  "store": "阿米可",
  "address": "新北市三重區三和路4段292巷13號",
  "tel": 222807000,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "恆生商行",
  "address": "新北市三重區三陽路37號",
  "tel": 289829299,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "賣酒坊",
  "address": "新北市三重區大榮街9號",
  "tel": 289816670,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "豪久",
  "address": "新北市三重區中正北路16號1樓",
  "tel": 229802450,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "仟恩",
  "address": "新北市三重區五華街110號",
  "tel": 229896633,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "三禾菸酒",
  "address": "新北市三重區介壽路19號",
  "tel": 229722792,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "萬泰",
  "address": "新北市三重區民生街70號",
  "tel": 229831924,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "宏聲",
  "address": "新北市三重區自強路二段23號",
  "tel": 289883201,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "金盈酒藏-忠孝店",
  "address": "新北市三重區忠孝路三段9號",
  "tel": 229890986,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "大楚",
  "address": "新北市三重區進安街41號",
  "tel": 228578957,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "全億菸酒有限公司",
  "address": "新北市三重區集美街234-236-238號1F",
  "tel": 229770466,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "酒饌",
  "address": "新北市三重區福隆路3號",
  "tel": 222809666,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "久倫酒國聯軍",
  "address": "新北市三重區雙園街134號",
  "tel": 289817707,
  "area": "新北市",
  "city_area": "三重區"
 },
 {
  "store": "尚峰",
  "address": "新北市三峽區大勇路15號",
  "tel": 226729786,
  "area": "新北市",
  "city_area": "三峽區"
 },
 {
  "store": "正誠行",
  "address": "新北市三峽區國光街386號",
  "tel": 226731515,
  "area": "新北市",
  "city_area": "三峽區"
 },
 {
  "store": "麥德理-土城店",
  "address": "新北市土城區中央路一段170號",
  "tel": 282616328,
  "area": "新北市",
  "city_area": "土城區"
 },
 {
  "store": "土城酒庫-婕羽",
  "address": "新北市土城區中正路64號1樓",
  "tel": 282615100,
  "area": "新北市",
  "city_area": "土城區"
 },
 {
  "store": "佳賀洋行-中和店",
  "address": "新北市中和區中山路二段401-1號",
  "tel": 222286981,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "佳賀洋行-環球店",
  "address": "新北市中和區中山路三段99號",
  "tel": 222269990,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "宇釀",
  "address": "新北市中和區自立路99巷13號",
  "tel": 229475557,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "京翰",
  "address": "新北市中和區員山路400號",
  "tel": 222289897,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "瑞騰恆大",
  "address": "新北市中和區莒光路55號",
  "tel": 222235788,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "嘉展",
  "address": "新北市中和區景平路576號",
  "tel": 222438361,
  "area": "新北市",
  "city_area": "中和區"
 },
 {
  "store": "立萬行",
  "address": "新北市五股區成泰路三段161號",
  "tel": 222918837,
  "area": "新北市",
  "city_area": "五股區"
 },
 {
  "store": "三華",
  "address": "新北市五股區更洲路23-1號",
  "tel": 222821112,
  "area": "新北市",
  "city_area": "五股區"
 },
 {
  "store": "富淯煙酒",
  "address": "新北市永和區中正路383號",
  "tel": 229262188,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "宥翔",
  "address": "新北市永和區民享街7號",
  "tel": 222289877,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "佳賀洋行-樂華店",
  "address": "新北市永和區永和路一段127號",
  "tel": 229267108,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "佳釀I CHEERS 愛酒窩",
  "address": "新北市永和區成功路一段80號",
  "tel": 229263667,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "名酒集",
  "address": "新北市永和區成功路一段93巷23弄13號",
  "tel": 222324199,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "168酒業",
  "address": "新北市永和區保福路二段69號",
  "tel": "0958-135-925",
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "迪達",
  "address": "新北市永和區福和路131號",
  "tel": 916333938,
  "area": "新北市",
  "city_area": "永和區"
 },
 {
  "store": "嘉辰",
  "address": "新北市汐止區康寧街514號",
  "tel": 226956697,
  "area": "新北市",
  "city_area": "汐止區"
 },
 {
  "store": "榮榮菸酒專賣店",
  "address": "新北市板橋區大仁街42號",
  "tel": 222720102,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "薰嵐菸酒-展順2店",
  "address": "新北市板橋區大觀路2段11號",
  "tel": 229677779,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "佳賀洋行-板新店",
  "address": "新北市板橋區中山路二段9號",
  "tel": 289538966,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "龍合",
  "address": "新北市板橋區四川路一段8號",
  "tel": 970666126,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "覓九洋酒行",
  "address": "新北市板橋區民族路147號",
  "tel": 229558889,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "昭業",
  "address": "新北市板橋區雨農路5號",
  "tel": 222555011,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "正琪",
  "address": "新北市板橋區重慶路291號",
  "tel": 289533600,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "酒海商行",
  "address": "新北市板橋區貴興路1號",
  "tel": 229504515,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "展順",
  "address": "新北市板橋區僑中一街126號",
  "tel": 229661167,
  "area": "新北市",
  "city_area": "板橋區"
 },
 {
  "store": "金盈酒藏-泰山店",
  "address": "新北市泰山區福興三街32號",
  "tel": 285312289,
  "area": "新北市",
  "city_area": "泰山區"
 },
 {
  "store": "啤酒大學-竹圍店",
  "address": "新北市淡水區民權路177-3號",
  "tel": 286314329,
  "area": "新北市",
  "city_area": "淡水區"
 },
 {
  "store": "開翔",
  "address": "新北市淡水區學府路60-3號",
  "tel": 226202080,
  "area": "新北市",
  "city_area": "淡水區"
 },
 {
  "store": "鼎級網",
  "address": "新北市深坑區北深路三段111號",
  "tel": 226644888,
  "area": "新北市",
  "city_area": "深坑區"
 },
 {
  "store": "春泰",
  "address": "新北市新店區中興路一段291號",
  "tel": 229175159,
  "area": "新北市",
  "city_area": "新店區"
 },
 {
  "store": "新店李",
  "address": "新北市新店區安康路二段359號",
  "tel": 222156555,
  "area": "新北市",
  "city_area": "新店區"
 },
 {
  "store": "酒源",
  "address": "新北市新店區車子路121號",
  "tel": 285555395,
  "area": "新北市",
  "city_area": "新店區"
 },
 {
  "store": "恆世聖鼎",
  "address": "新北市新莊區中央路220號4樓",
  "tel": 285223900,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "祥特利-豊棋",
  "address": "新北市新莊區中平路32號",
  "tel": 289936137,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "叡鴻",
  "address": "新北市新莊區中正路899-1號",
  "tel": 918326903,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "喜沅商行",
  "address": "新北市新莊區中和街84號",
  "tel": 289941632,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "圜桂桶",
  "address": "新北市新莊區中誠街46巷4弄1號",
  "tel": 229905100,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "歐洲酒集",
  "address": "新北市新莊區立信一街52號",
  "tel": 222768898,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "新莊昌富",
  "address": "新北市新莊區新樹路226號",
  "tel": 222040691,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "麥德理-新莊店",
  "address": "新北市新莊區龍安街226號",
  "tel": 222085116,
  "area": "新北市",
  "city_area": "新莊區"
 },
 {
  "store": "酒世界-樹林",
  "address": "新北市樹林區中華路233號",
  "tel": 286868768,
  "area": "新北市",
  "city_area": "樹林區"
 },
 {
  "store": "拿破崙-樹林",
  "address": "新北市樹林區保安街二段2-7號",
  "tel": 226750780,
  "area": "新北市",
  "city_area": "樹林區"
 },
 {
  "store": "譽揚",
  "address": "新北市蘆洲區三民路263號",
  "tel": 282850118,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "百萬家",
  "address": "新北市蘆洲區三民路26巷49弄2號",
  "tel": 222851230,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "酒霸王-蘆洲",
  "address": "新北市蘆洲區中山一路258號",
  "tel": 282860592,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "偉成洋酒",
  "address": "新北市蘆洲區中正路217號",
  "tel": 282858232,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "琮茂",
  "address": "新北市蘆洲區中原路12巷15號",
  "tel": 282827337,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "巷弄洋酒",
  "address": "新北市蘆洲區光榮路136號",
  "tel": 916873749,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "良新菸酒",
  "address": "新北市蘆洲區長興路152號",
  "tel": 282861942,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "酒州",
  "address": "新北市蘆洲區信義路158號",
  "tel": 282860640,
  "area": "新北市",
  "city_area": "蘆洲區"
 },
 {
  "store": "立誠行",
  "address": "新北市鶯歌區尖山路185號",
  "tel": 286781505,
  "area": "新北市",
  "city_area": "鶯歌區"
 },
 {
  "store": "森寶",
  "address": "桃園市八德區介壽路二段1466號",
  "tel": 937963424,
  "area": "桃園市",
  "city_area": "八德區"
 },
 {
  "store": "榑倉洋行",
  "address": "桃園市八德區和平路142號1 樓",
  "tel": 33673505,
  "area": "桃園市",
  "city_area": "八德區"
 },
 {
  "store": "宸瀧煙酒",
  "address": "桃園市八德區義勇街35號",
  "tel": 33779919,
  "area": "桃園市",
  "city_area": "八德區"
 },
 {
  "store": "海珊菸酒",
  "address": "桃園市大園區新興路50號",
  "tel": 33863955,
  "area": "桃園市",
  "city_area": "大園區"
 },
 {
  "store": "巨江洋酒",
  "address": "桃園市大溪區介壽路924號",
  "tel": 33802056,
  "area": "桃園市",
  "city_area": "大溪區"
 },
 {
  "store": "安勝",
  "address": "桃園市中壢區中山東路三段15號",
  "tel": 34666919,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "別緻便利商店",
  "address": "桃園市中壢區中山路247號",
  "tel": 900045583,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "佳品-中壢",
  "address": "桃園市中壢區中園路二段435號之1",
  "tel": 34626666,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "康齡酒藏-遠東SOGO中壢店",
  "address": "桃園市中壢區元化路357號B1",
  "tel": 34279354,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "喜洋洋-中壢",
  "address": "桃園市中壢區元生三街123號1F",
  "tel": 34355938,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "立基菸酒",
  "address": "桃園市中壢區民族路五段101號",
  "tel": 34901050,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "同洵洋行",
  "address": "桃園市中壢區民權路三段299號",
  "tel": 34268448,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "杜拜",
  "address": "桃園市中壢區延平路二段9號",
  "tel": 34023666,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "桂冠酒莊",
  "address": "桃園市中壢區莒光路43號",
  "tel": 32830079,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "威市集",
  "address": "桃園市中壢區華祥一街3巷8號",
  "tel": 987177778,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "松山洋行",
  "address": "桃園市中壢區廈門路38號",
  "tel": 34591512,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "金豪酒",
  "address": "桃園市中壢區新明路37號",
  "tel": 34932121,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "新聯合菸酒",
  "address": "桃園市中壢區過嶺里民族路五段108號",
  "tel": 34203610,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "弘軒菸酒",
  "address": "桃園市中壢區福州路107號",
  "tel": 34560191,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "酒超市",
  "address": "桃園市中壢區領航北路二段75號",
  "tel": 32873823,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "阿樹洋酒-中壢",
  "address": "桃園市中壢區龍岡路3段289號",
  "tel": 34607375,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "紅酒堡",
  "address": "桃園市中壢區環北路375號",
  "tel": 34225646,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "酒盟",
  "address": "桃園市中壢區環西路33號",
  "tel": 915001381,
  "area": "桃園市",
  "city_area": "中壢區"
 },
 {
  "store": "安勝-上海",
  "address": "桃園市平鎮區上海路171號",
  "tel": 34399957,
  "area": "桃園市",
  "city_area": "平鎮區"
 },
 {
  "store": "九冠",
  "address": "桃園市平鎮區民族路153-1號",
  "tel": 912887727,
  "area": "桃園市",
  "city_area": "平鎮區"
 },
 {
  "store": "總元洋酒",
  "address": "桃園市平鎮區延平路二段302號",
  "tel": 34926000,
  "area": "桃園市",
  "city_area": "平鎮區"
 },
 {
  "store": "泓泰行",
  "address": "桃園市桃園區大林路18號",
  "tel": 33637772,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "奕鑫行",
  "address": "桃園市桃園區大業路一段290號",
  "tel": 33253272,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "怡和名酒",
  "address": "桃園市桃園區大興西路一段311號",
  "tel": 33581305,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "醇酒坊",
  "address": "桃園市桃園區大興西路二段18號",
  "tel": 33262999,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "光泉",
  "address": "桃園市桃園區大興路7號",
  "tel": 33554482,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "中華煙酒",
  "address": "桃園市桃園區中平路152號",
  "tel": 32200521,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "木適坊酒窖",
  "address": "桃園市桃園區中正路1108號",
  "tel": "03-375-3292#9188",
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "吉隆行",
  "address": "桃園市桃園區民生路533號",
  "tel": 33361899,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "桃山",
  "address": "桃園市桃園區民族路190號",
  "tel": 33322455,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "嵩威-桃園",
  "address": "桃園市桃園區桃鶯路119號",
  "tel": 33660782,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "吉安洋行",
  "address": "桃園市桃園區慈文路347號",
  "tel": 33580407,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "金弘笙-桃園店",
  "address": "桃園市桃園區經國路402號",
  "tel": 32631444,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "酒園-龜山",
  "address": "桃園市桃園區龜山區萬壽路二段1230號",
  "tel": 33495548,
  "area": "桃園市",
  "city_area": "桃園區"
 },
 {
  "store": "昌成",
  "address": "桃園市楊梅區秀才路63號",
  "tel": 34784989,
  "area": "桃園市",
  "city_area": "楊梅區"
 },
 {
  "store": "利來福",
  "address": "桃園市楊梅區泰圳路408巷61號",
  "tel": 34606169,
  "area": "桃園市",
  "city_area": "楊梅區"
 },
 {
  "store": "碧洱",
  "address": "桃園市龍潭區中正路239號",
  "tel": 34805385,
  "area": "桃園市",
  "city_area": "龍潭區"
 },
 {
  "store": "順宏洋酒",
  "address": "桃園市龍潭區龍元路111號",
  "tel": 34802057,
  "area": "桃園市",
  "city_area": "龍潭區"
 },
 {
  "store": "久典煙酒",
  "address": "桃園市龍潭區龍華路371號",
  "tel": 34990611,
  "area": "桃園市",
  "city_area": "龍潭區"
 },
 {
  "store": "瀧德菸酒",
  "address": "桃園市龜山區忠義路二段395號",
  "tel": 980347818,
  "area": "桃園市",
  "city_area": "龜山區"
 },
 {
  "store": "萬達桃園",
  "address": "桃園市龜山區萬壽路二段925號",
  "tel": 33597806,
  "area": "桃園市",
  "city_area": "龜山區"
 },
 {
  "store": "桃鑫",
  "address": "桃園市蘆竹區大竹路426-3號",
  "tel": 33133328,
  "area": "桃園市",
  "city_area": "蘆竹區"
 },
 {
  "store": "欣酒",
  "address": "桃園市蘆竹區新南路一段18號",
  "tel": 33117838,
  "area": "桃園市",
  "city_area": "蘆竹區"
 },
 {
  "store": "大豐行",
  "address": "新竹市北區北門街193號",
  "tel": 35253092,
  "area": "新竹市",
  "city_area": "北區"
 },
 {
  "store": "國暉",
  "address": "新竹市北區延平路一段340號",
  "tel": 35256599,
  "area": "新竹市",
  "city_area": "北區"
 },
 {
  "store": "太丸",
  "address": "新竹市東區民權路61號",
  "tel": 35352527,
  "area": "新竹市",
  "city_area": "東區"
 },
 {
  "store": "旭品洋酒",
  "address": "新竹市東區東門街104號",
  "tel": 35222622,
  "area": "新竹市",
  "city_area": "東區"
 },
 {
  "store": "合順洋酒",
  "address": "新竹市東區民生路266號",
  "tel": 965393669,
  "area": "新竹市",
  "city_area": "東區"
 },
 {
  "store": "呈鑫商行",
  "address": "新竹市東區光復路一段48號",
  "tel": 35779069,
  "area": "新竹市",
  "city_area": "東區"
 },
 {
  "store": "布萊恩煙酒",
  "address": "新竹市東區長春街121號",
  "tel": 35790377,
  "area": "新竹市",
  "city_area": "東區"
 },
 {
  "store": "茂豐行",
  "address": "新竹市北區林森路275號",
  "tel": 938027028,
  "area": "新竹市",
  "city_area": "北區"
 },
 {
  "store": "文彬",
  "address": "新竹市香山區牛埔南路532號",
  "tel": 35381225,
  "area": "新竹市",
  "city_area": "香山區"
 },
 {
  "store": "新茂洋洋酒",
  "address": "新竹市北區經國路二段249號",
  "tel": 35334579,
  "area": "新竹市",
  "city_area": "北區"
 },
 {
  "store": "彬宏煙酒",
  "address": "新竹縣竹北市中華路119號",
  "tel": 36565888,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "金樽-竹北",
  "address": "新竹縣竹北市光明六路東二段7號",
  "tel": 35509309,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "正泓洋酒",
  "address": "新竹縣竹北市博愛街204-1號",
  "tel": 36565166,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "酒管家",
  "address": "新竹縣竹北市福興路794號",
  "tel": 916633221,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "景裕商行",
  "address": "新竹縣竹北市鳳岡路二段151巷56號",
  "tel": 35560160,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "旭亨-竹北",
  "address": "新竹縣竹北市縣政二路512號",
  "tel": 35557388,
  "area": "新竹縣",
  "city_area": "竹北市"
 },
 {
  "store": "八八八",
  "address": "新竹縣竹東鎮長春路三段82號",
  "tel": 35966151,
  "area": "新竹縣",
  "city_area": "竹東鎮"
 },
 {
  "store": "國豐",
  "address": "新竹縣湖口鄉成功路89號",
  "tel": 35991055,
  "area": "新竹縣",
  "city_area": "湖口鄉"
 },
 {
  "store": "發發發",
  "address": "新竹縣新豐鄉新興路269號",
  "tel": 35591199,
  "area": "新竹縣",
  "city_area": "新豐鄉"
 },
 {
  "store": "尚進菸酒",
  "address": "苗栗縣苗栗市為公路179號",
  "tel": 37261223,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "皇品洋酒",
  "address": "苗栗縣竹南鎮中港里12鄰環市路二段1號1樓",
  "tel": 37483366,
  "area": "苗栗縣",
  "city_area": "竹南鎮"
 },
 {
  "store": "慶佳行-光復店",
  "address": "苗栗縣竹南鎮光復路293-4號",
  "tel": 37465257,
  "area": "苗栗縣",
  "city_area": "竹南鎮"
 },
 {
  "store": "卓蘭",
  "address": "苗栗縣卓蘭鎮中正西路99之1號",
  "tel": 425896881,
  "area": "苗栗縣",
  "city_area": "卓蘭鎮"
 },
 {
  "store": "謙泰行",
  "address": "苗栗縣後龍鎮大庄里中山路498號",
  "tel": 37729156,
  "area": "苗栗縣",
  "city_area": "後龍鎮"
 },
 {
  "store": "逍遙菸酒",
  "address": "苗栗縣後龍鎮中山路330號",
  "tel": 37729448,
  "area": "苗栗縣",
  "city_area": "後龍鎮"
 },
 {
  "store": "筌球商行",
  "address": "苗栗縣後龍鎮南港里1鄰南勢山17-7號",
  "tel": 37921222,
  "area": "苗栗縣",
  "city_area": "後龍鎮"
 },
 {
  "store": "遠東洋酒",
  "address": "苗栗縣苑裡鎮房裡里1鄰3之1號",
  "tel": 37853391,
  "area": "苗栗縣",
  "city_area": "苑裡鎮"
 },
 {
  "store": "瑩芳行",
  "address": "苗栗縣苑裡鎮社苓里7鄰74號",
  "tel": 37742707,
  "area": "苗栗縣",
  "city_area": "苑裡鎮"
 },
 {
  "store": "博酒萊洋酒",
  "address": "苗栗縣苑裡鎮博愛路2號",
  "tel": 37860127,
  "area": "苗栗縣",
  "city_area": "苑裡鎮"
 },
 {
  "store": "東溢行菸酒-新興店",
  "address": "苗栗縣苑裡鎮新復里9鄰新復125號",
  "tel": 37868063,
  "area": "苗栗縣",
  "city_area": "苑裡鎮"
 },
 {
  "store": "陽光商行",
  "address": "苗栗縣苗栗市文發路481號",
  "tel": 37352752,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "喜洋洋菸酒-為公店",
  "address": "苗栗縣苗栗市為公路288號",
  "tel": 37264673,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "喜洋洋菸酒-英才店",
  "address": "苗栗縣苗栗市英才路52號",
  "tel": 37371056,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "勝和菸酒",
  "address": "苗栗縣苗栗市新東街41號",
  "tel": 37336536,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "尚好菸酒",
  "address": "苗栗縣苗栗市縣府路118號",
  "tel": 37361801,
  "area": "苗栗縣",
  "city_area": "苗栗市"
 },
 {
  "store": "大登洋酒",
  "address": "苗栗縣通霄鎮福德路20號",
  "tel": 37758095,
  "area": "苗栗縣",
  "city_area": "通霄鎮"
 },
 {
  "store": "卡諾曼菸酒",
  "address": "苗栗縣頭份市八德一路226號",
  "tel": 37692386,
  "area": "苗栗縣",
  "city_area": "頭份市"
 },
 {
  "store": "喜洋洋菸酒-頭份店",
  "address": "苗栗縣頭份市中央路310號",
  "tel": 37670456,
  "area": "苗栗縣",
  "city_area": "頭份市"
 },
 {
  "store": "喜洋洋菸酒-日新店",
  "address": "苗栗縣頭份市日新街2鄰33號",
  "tel": 37681466,
  "area": "苗栗縣",
  "city_area": "頭份市"
 },
 {
  "store": "慶佳行-光華店",
  "address": "苗栗縣頭份市光華北路90號",
  "tel": 37611998,
  "area": "苗栗縣",
  "city_area": "頭份市"
 },
 {
  "store": "慶佳行-東民店",
  "address": "苗栗縣頭份市東民路107號",
  "tel": 37690089,
  "area": "苗栗縣",
  "city_area": "頭份市"
 },
 {
  "store": "拉菲菸酒",
  "address": "台中市大雅區雅潭路四段502號",
  "tel": 425673819,
  "area": "台中市",
  "city_area": "大雅區"
 },
 {
  "store": "酒湖洋酒-大甲店",
  "address": "台中市大甲區中山路一段486號",
  "tel": 426805836,
  "area": "台中市",
  "city_area": "大甲區"
 },
 {
  "store": "紅酒莊洋酒",
  "address": "台中市大甲區光明路131號",
  "tel": 932677946,
  "area": "台中市",
  "city_area": "大甲區"
 },
 {
  "store": "酒號倉庫-大甲店",
  "address": "台中市大甲區忠孝路60巷1號",
  "tel": 426803798,
  "area": "台中市",
  "city_area": "大甲區"
 },
 {
  "store": "同懋菸酒",
  "address": "台中市大甲區信義路158號",
  "tel": 426860340,
  "area": "台中市",
  "city_area": "大甲區"
 },
 {
  "store": "酒港菸酒",
  "address": "台中市大甲區經國路1號",
  "tel": 426868071,
  "area": "台中市",
  "city_area": "大甲區"
 },
 {
  "store": "七七會社洋酒",
  "address": "台中市大肚區自治路77號",
  "tel": 426998323,
  "area": "台中市",
  "city_area": "大肚區"
 },
 {
  "store": "京旺菸酒-大明店",
  "address": "台中市大里區大明路525號",
  "tel": 424060152,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "利百加洋酒-大里店",
  "address": "台中市大里區中興路一段11-4號",
  "tel": 424960639,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "利百加洋酒-內新店",
  "address": "台中市大里區中興路二段576號",
  "tel": 424860869,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "金橋食品",
  "address": "台中市大里區中興路二段709號",
  "tel": 424854646,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "富三洋酒",
  "address": "台中市大里區仁慈街350號",
  "tel": 910529524,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "艾霏漾酒品專門店",
  "address": "台中市大里區永隆路577號",
  "tel": 424069000,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "京旺菸酒-益民店",
  "address": "台中市大里區益民路二段301號",
  "tel": 424875390,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "酒號倉庫-大里店",
  "address": "台中市大里區爽文路1121號",
  "tel": 424063246,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "酒號倉庫-總倉",
  "address": "台中市大里區爽文路398號",
  "tel": 424064648,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "京旺菸酒-塗城店",
  "address": "台中市大里區塗城路657號",
  "tel": 424951675,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "京旺菸酒-新仁店",
  "address": "台中市大里區新仁路一段221號",
  "tel": 422791247,
  "area": "台中市",
  "city_area": "大里區"
 },
 {
  "store": "酒湖洋酒-大雅店",
  "address": "台中市大雅區民生路一段263號",
  "tel": 425665945,
  "area": "台中市",
  "city_area": "大雅區"
 },
 {
  "store": "酒國英豪菸酒",
  "address": "台中市大雅區民生路三段356號",
  "tel": 425664710,
  "area": "台中市",
  "city_area": "大雅區"
 },
 {
  "store": "酒倉洋酒",
  "address": "台中市大雅區科雅路398號",
  "tel": 425679159,
  "area": "台中市",
  "city_area": "大雅區"
 },
 {
  "store": "茂峰菸酒",
  "address": "台中市中區自由路二段54號",
  "tel": 422252525,
  "area": "台中市",
  "city_area": "中區"
 },
 {
  "store": "利百加洋酒-中山店",
  "address": "台中市太平區中山路四段124號",
  "tel": 423950749,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "京旺菸酒-永豐店",
  "address": "台中市太平區永豐路19號",
  "tel": 422753489,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "京旺菸酒-東平店",
  "address": "台中市太平區東平路455號",
  "tel": 422705309,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "松賀洋酒-太平店",
  "address": "台中市太平區東平路800號",
  "tel": 422791119,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "茂林洋酒",
  "address": "台中市太平區新平路三段171號",
  "tel": 423910582,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "金順商行",
  "address": "台中市太平區新福路1096號",
  "tel": 910491323,
  "area": "台中市",
  "city_area": "太平區"
 },
 {
  "store": "禾紳洋酒",
  "address": "台中市北屯區中平路696號1樓",
  "tel": 422958138,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "酒甕菸酒",
  "address": "台中市北屯區中清路二段1026號",
  "tel": 424260208,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "清泰菸酒",
  "address": "台中市北屯區中清路二段128號",
  "tel": 936231190,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "葡晶洋酒-中清店",
  "address": "台中市北屯區中清路二段242號",
  "tel": "04-2297-8055",
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "酒江村菸酒-太順店",
  "address": "台中市北屯區太順路17號",
  "tel": 424369214,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "北台中商行",
  "address": "台中市北屯區昌平路一段143號",
  "tel": 422440529,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "大墩東山洋酒",
  "address": "台中市北屯區東山路1段148號",
  "tel": 424373166,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "利百加洋酒-東山店",
  "address": "台中市北屯區東山路一段125號",
  "tel": 424378009,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "群茂洋酒",
  "address": "台中市北屯區東山路一段326號",
  "tel": 424368319,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "寶佳洋酒",
  "address": "台中市北屯區崇德路2段482號",
  "tel": 422491710,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "哈利洋酒",
  "address": "台中市北屯區崇德路二段308號",
  "tel": 422416658,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "古典洋酒",
  "address": "台中市北屯區遼陽五街25號",
  "tel": 422444263,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "集玖庄菸酒",
  "address": "台中市北屯區瀋陽路一段82號",
  "tel": 422989909,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "世傳菸酒行",
  "address": "台中市北屯區北屯路267號",
  "tel": 900005970,
  "area": "台中市",
  "city_area": "北屯區"
 },
 {
  "store": "利百加洋酒-五權店",
  "address": "台中市北區五權路146號",
  "tel": 422020958,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "國泰洋酒-五權店",
  "address": "台中市北區五權路235號",
  "tel": 422060338,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "茂綸菸酒",
  "address": "台中市北區公園路140號",
  "tel": 422067675,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "利百加洋酒-北平店",
  "address": "台中市北區北平路二段186號",
  "tel": 422910959,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "竤將商行",
  "address": "台中市北區尚德街91巷7號",
  "tel": 422033298,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "宸逸洋酒",
  "address": "台中市北區進化北路364號",
  "tel": 422360092,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "桂貫洋酒",
  "address": "台中市北區漢口路3段259號",
  "tel": 422994100,
  "area": "台中市",
  "city_area": "北區"
 },
 {
  "store": "耕坊行",
  "address": "台中市西屯區工業區16路5號",
  "tel": 423593579,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "國泰洋酒-千勝店",
  "address": "台中市西屯區文心路三段159號",
  "tel": 423133399,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "酒湖洋酒-安和店",
  "address": "台中市西屯區安和路151號",
  "tel": 424625711,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "利百加洋酒-漢口店",
  "address": "台中市西屯區西屯路二段32-1號",
  "tel": 423143359,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "利百加洋酒-中科店",
  "address": "台中市西屯區西屯路三段101號",
  "tel": 424621559,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "龍穴酒坊",
  "address": "台中市西屯區河南路ㄧ段56號",
  "tel": 423172929,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "哈斯葵洋酒",
  "address": "台中市西屯區河南路二段301巷50號",
  "tel": 424376878,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "葡晶洋酒-市政店",
  "address": "台中市西屯區河南路四段103號",
  "tel": 422978055,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "酒號倉庫-朝富店",
  "address": "台中市西屯區朝富路66-1號",
  "tel": 422549512,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "安迪洋行",
  "address": "台中市西屯區寧夏路217號",
  "tel": 423173430,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "利百加洋酒-黎明店",
  "address": "台中市西屯區黎明路三段116號",
  "tel": 424529709,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "弘川藏酒閣",
  "address": "台中市西屯區黎明路三段30號",
  "tel": 424526000,
  "area": "台中市",
  "city_area": "西屯區"
 },
 {
  "store": "富雅酒莊",
  "address": "台中市西區中興街122巷19號",
  "tel": 423013699,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "利百加洋酒-公益店",
  "address": "台中市西區公益路337號",
  "tel": 423205634,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "顏新珍洋酒商行",
  "address": "台中市西區日進街101號",
  "tel": 422065187,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "界明洋酒",
  "address": "台中市西區台灣大道2段50號",
  "tel": 422012103,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "美感臨酒",
  "address": "台中市西區向上路一段502號",
  "tel": 423205723,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "星泰洋酒",
  "address": "台中市西區向上路一段58號",
  "tel": 423013389,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "宸來洋酒",
  "address": "台中市西區東興路三段17號",
  "tel": 424729877,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "麥金酒洋行",
  "address": "台中市西區柳川西路二段188號",
  "tel": 422202582,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "暐倫洋酒",
  "address": "台中市西區美村路一段241號",
  "tel": 423050688,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "利百加洋酒-美村店",
  "address": "台中市西區美村路一段268號",
  "tel": 423059112,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "貳零酒商行",
  "address": "台中市西區樂群街209號1樓",
  "tel": 423718181,
  "area": "台中市",
  "city_area": "西區"
 },
 {
  "store": "一品夫人菸酒-旱溪店",
  "address": "台中市東區旱溪街54號",
  "tel": 422113784,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "昇品行",
  "address": "台中市沙鹿區中山路安利巷2號",
  "tel": 426651187,
  "area": "台中市",
  "city_area": "沙鹿區"
 },
 {
  "store": "酒湖洋酒-沙鹿店",
  "address": "台中市沙鹿區台灣大道七段761號",
  "tel": 426634939,
  "area": "台中市",
  "city_area": "沙鹿區"
 },
 {
  "store": "源利菸酒",
  "address": "台中市沙鹿區光華路333號",
  "tel": 973205660,
  "area": "台中市",
  "city_area": "沙鹿區"
 },
 {
  "store": "利百加洋酒-十甲店",
  "address": "台中市東區十甲路413號",
  "tel": 422132729,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "京旺菸酒-十甲店",
  "address": "台中市東區十甲路517號",
  "tel": 422155379,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "大衛洋行",
  "address": "台中市東區建成路733號",
  "tel": 422831199,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "厚昌洋酒",
  "address": "台中市東區精武路161號1樓",
  "tel": 975379362,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "一品夫人菸酒",
  "address": "台中市東區樂業路211號",
  "tel": 422111765,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "精湛酒藏",
  "address": "台中市東區樂業路396號",
  "tel": 422121788,
  "area": "台中市",
  "city_area": "東區"
 },
 {
  "store": "高腳杯商行",
  "address": "台中市東勢區延平里第一橫街31號1樓",
  "tel": 978930579,
  "area": "台中市",
  "city_area": "東勢區"
 },
 {
  "store": "鎮昌菸酒",
  "address": "台中市東勢區忠孝街173號",
  "tel": 425870000,
  "area": "台中市",
  "city_area": "東勢區"
 },
 {
  "store": "劉福",
  "address": "台中市東勢區東坑路216號",
  "tel": 425877261,
  "area": "台中市",
  "city_area": "東勢區"
 },
 {
  "store": "下新菸酒",
  "address": "台中市東勢區東蘭路43號",
  "tel": 425872256,
  "area": "台中市",
  "city_area": "東勢區"
 },
 {
  "store": "利百加洋酒-大墩店",
  "address": "台中市南屯區大墩路184號",
  "tel": 424715809,
  "area": "台中市",
  "city_area": "南屯區"
 },
 {
  "store": "文心商行",
  "address": "台中市南屯區文心路1段437號",
  "tel": 422582088,
  "area": "台中市",
  "city_area": "南屯區"
 },
 {
  "store": "安泰洋酒",
  "address": "台中市南屯區向上南路一段321號",
  "tel": 424735089,
  "area": "台中市",
  "city_area": "南屯區"
 },
 {
  "store": "南區楊菸酒",
  "address": "台中市南區五權南路243號",
  "tel": 422656789,
  "area": "台中市",
  "city_area": "南區"
 },
 {
  "store": "日盛菸酒",
  "address": "台中市南區合作街50號",
  "tel": 422850961,
  "area": "台中市",
  "city_area": "南區"
 },
 {
  "store": "雅仕洋酒",
  "address": "台中市南區信義南街320號",
  "tel": 928094930,
  "area": "台中市",
  "city_area": "南區"
 },
 {
  "store": "松賀洋酒-高工店",
  "address": "台中市南區高工路500號",
  "tel": 422655885,
  "area": "台中市",
  "city_area": "南區"
 },
 {
  "store": "利百加洋酒-復興店",
  "address": "台中市南區復興路二段120-6號",
  "tel": 422625523,
  "area": "台中市",
  "city_area": "南區"
 },
 {
  "store": "松賀洋酒-烏日店",
  "address": "台中市烏日區中山路一段503號",
  "tel": 423388639,
  "area": "台中市",
  "city_area": "烏日區"
 },
 {
  "store": "日升菸酒",
  "address": "台中市烏日區五光路1003號",
  "tel": 423374858,
  "area": "台中市",
  "city_area": "烏日區"
 },
 {
  "store": "百淳洋酒",
  "address": "台中市烏日區新興路433號",
  "tel": 423379953,
  "area": "台中市",
  "city_area": "烏日區"
 },
 {
  "store": "榮瑋商店",
  "address": "台中市烏日區中山路一段374號3F",
  "tel": 925186093,
  "area": "台中市",
  "city_area": "烏日區"
 },
 {
  "store": "酒江村菸酒",
  "address": "台中市神岡區大富路9號",
  "tel": 425278861,
  "area": "台中市",
  "city_area": "神岡區"
 },
 {
  "store": "吉菖洋酒",
  "address": "台中市神岡區神林路88號",
  "tel": 425631080,
  "area": "台中市",
  "city_area": "神岡區"
 },
 {
  "store": "榮好菸酒",
  "address": "台中市梧棲區居仁街212號",
  "tel": 426579889,
  "area": "台中市",
  "city_area": "梧棲區"
 },
 {
  "store": "酒湖洋酒-清水店",
  "address": "台中市清水區中華路417之2號",
  "tel": 426281550,
  "area": "台中市",
  "city_area": "清水區"
 },
 {
  "store": "歐巴馬菸酒",
  "address": "台中市清水區中華路609-1號",
  "tel": 426281077,
  "area": "台中市",
  "city_area": "清水區"
 },
 {
  "store": "東峻商行",
  "address": "台中市清水區民族路二段517號",
  "tel": 958785009,
  "area": "台中市",
  "city_area": "清水區"
 },
 {
  "store": "威爾森洋酒",
  "address": "台中市潭子區雅潭路二段252號",
  "tel": 425335883,
  "area": "台中市",
  "city_area": "潭子區"
 },
 {
  "store": "以全菸酒商行",
  "address": "台中市潭子區潭秀里中山路二段474-2號1樓",
  "tel": 425331621,
  "area": "台中市",
  "city_area": "潭子區"
 },
 {
  "store": "紅頂菸酒",
  "address": "台中市南屯區環中路四段56號",
  "tel": 423850480,
  "area": "台中市",
  "city_area": "南屯區"
 },
 {
  "store": "亞德倫菸酒-大勇店",
  "address": "台中市豐原區三豐路一段169號之2",
  "tel": 425155473,
  "area": "台中市",
  "city_area": "豐原區"
 },
 {
  "store": "亞德倫菸酒-向陽店",
  "address": "台中市豐原區向陽路170巷9號",
  "tel": 425251425,
  "area": "台中市",
  "city_area": "豐原區"
 },
 {
  "store": "康齡酒藏-太平洋SOGO-豊原店",
  "address": "台中市豐原區復興路2號 B1",
  "tel": 425256559,
  "area": "台中市",
  "city_area": "豐原區"
 },
 {
  "store": "酒哉菸酒",
  "address": "台中市豐原區豐東路556號",
  "tel": 425261419,
  "area": "台中市",
  "city_area": "豐原區"
 },
 {
  "store": "寶聯行",
  "address": "台中市豐原區豐勢路二段31號",
  "tel": 425230403,
  "area": "台中市",
  "city_area": "豐原區"
 },
 {
  "store": "京旺菸酒-霧峰店",
  "address": "台中市霧峰區育仁街11號",
  "tel": 423397126,
  "area": "台中市",
  "city_area": "霧峰區"
 },
 {
  "store": "鵬馳菸酒",
  "address": "台中市霧峰區環河路一段718號",
  "tel": 919089168,
  "area": "台中市",
  "city_area": "霧峰區"
 },
 {
  "store": "加納洋酒-大埔店",
  "address": "彰化縣彰化市大埔路492號",
  "tel": 47139998,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "宏信商行",
  "address": "彰化縣二林鎮大成路一段336號",
  "tel": 48965061,
  "area": "彰化縣",
  "city_area": "二林鎮"
 },
 {
  "store": "富為企業有限公司",
  "address": "彰化縣二林鎮斗苑路三段125號",
  "tel": "04-895-0559",
  "area": "彰化縣",
  "city_area": "二林鎮"
 },
 {
  "store": "臻品菸酒",
  "address": "彰化縣二林鎮斗苑路五段399號",
  "tel": 48968308,
  "area": "彰化縣",
  "city_area": "二林鎮"
 },
 {
  "store": "員外茶莊",
  "address": "彰化縣二林鎮西平里建國路411號",
  "tel": 48962037,
  "area": "彰化縣",
  "city_area": "二林鎮"
 },
 {
  "store": "甲揚有限公司",
  "address": "彰化縣二林鎮豐田里南安路43號1樓 ",
  "tel": "04-896-4210",
  "area": "彰化縣",
  "city_area": "二林鎮"
 },
 {
  "store": "萬芳菸酒",
  "address": "彰化縣大村鄉大仁路一段144號",
  "tel": 48525430,
  "area": "彰化縣",
  "city_area": "大村鄉"
 },
 {
  "store": "金思維洋酒",
  "address": "彰化縣北斗鎮斗苑路一段291號",
  "tel": 48888915,
  "area": "彰化縣",
  "city_area": "北斗鎮"
 },
 {
  "store": "永承商行-北斗店",
  "address": "彰化縣北斗鎮斗苑路二段71號",
  "tel": 48874055,
  "area": "彰化縣",
  "city_area": "北斗鎮"
 },
 {
  "store": "品銘菸酒",
  "address": "彰化縣北斗鎮復興路232號",
  "tel": 48782966,
  "area": "彰化縣",
  "city_area": "北斗鎮"
 },
 {
  "store": "年代菸酒",
  "address": "彰化縣田中鎮南北街140號",
  "tel": 48745016,
  "area": "彰化縣",
  "city_area": "田中鎮"
 },
 {
  "store": "上海菸酒",
  "address": "彰化縣秀水鄉番花路362號",
  "tel": 47696194,
  "area": "彰化縣",
  "city_area": "秀水鄉"
 },
 {
  "store": "金馬菸酒",
  "address": "彰化縣秀水鄉雅興街229號",
  "tel": 47630813,
  "area": "彰化縣",
  "city_area": "秀水鄉"
 },
 {
  "store": "酒尊洋酒",
  "address": "彰化縣和美鎮和頭路21號",
  "tel": 47566711,
  "area": "彰化縣",
  "city_area": "和美鎮"
 },
 {
  "store": "大旺菸酒",
  "address": "彰化縣社頭鄉員集路二段229號",
  "tel": 48711009,
  "area": "彰化縣",
  "city_area": "社頭鄉"
 },
 {
  "store": "永承商行-芬園店",
  "address": "彰化縣芬園鄉彰南路四段41號",
  "tel": 492511543,
  "area": "彰化縣",
  "city_area": "芬園鄉"
 },
 {
  "store": "加納洋酒-花壇店",
  "address": "彰化縣花壇鄉花壇街346號",
  "tel": 47860472,
  "area": "彰化縣",
  "city_area": "花壇鄉"
 },
 {
  "store": "酒之店菸酒",
  "address": "彰化縣員林市三民東街51號",
  "tel": 48340730,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "光輝菸酒",
  "address": "彰化縣員林市中山路一段583號",
  "tel": 48355666,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "永承商行-員林店",
  "address": "彰化縣員林市中山路二段598號",
  "tel": 48363413,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "大芳菸酒",
  "address": "彰化縣員林市光明街152號",
  "tel": 48321475,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "日進菸酒",
  "address": "彰化縣員林市員水路二段155號",
  "tel": 48360781,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "博酒萊菸酒",
  "address": "彰化縣員林市浮圳路二段25號",
  "tel": 48395599,
  "area": "彰化縣",
  "city_area": "員林市"
 },
 {
  "store": "宇夏菸酒",
  "address": "彰化縣埔心鄉員鹿路一段435號",
  "tel": 48281190,
  "area": "彰化縣",
  "city_area": "埔心鄉"
 },
 {
  "store": "榮芳商行",
  "address": "彰化縣埔心鄉瑤鳳路一段62號",
  "tel": 48299806,
  "area": "彰化縣",
  "city_area": "埔心鄉"
 },
 {
  "store": "青旺菸酒",
  "address": "彰化縣埤頭鄉彰水路三段550號",
  "tel": 48910252,
  "area": "彰化縣",
  "city_area": "埤頭鄉"
 },
 {
  "store": "源鑫菸酒",
  "address": "彰化縣鹿港鎮中正路387號",
  "tel": 47754227,
  "area": "彰化縣",
  "city_area": "鹿港鎮"
 },
 {
  "store": "佳沅菸酒",
  "address": "彰化縣鹿港鎮鹿和路三段440號",
  "tel": 47711968,
  "area": "彰化縣",
  "city_area": "鹿港鎮"
 },
 {
  "store": "永記商行",
  "address": "彰化縣鹿港鎮鹿草路5段243號",
  "tel": 47712629,
  "area": "彰化縣",
  "city_area": "鹿港鎮"
 },
 {
  "store": "江夏菸酒",
  "address": "彰化縣溪湖鎮西環路492號",
  "tel": 48859227,
  "area": "彰化縣",
  "city_area": "溪湖鎮"
 },
 {
  "store": "金元富",
  "address": "彰化縣彰化市水源路568號",
  "tel": 47639918,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "加納洋酒",
  "address": "彰化縣彰化市民生路15號",
  "tel": 47226371,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "吉福菸酒",
  "address": "彰化縣彰化市自強路32號",
  "tel": 47262688,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "松勇菸酒",
  "address": "彰化縣彰化市阿夷里建國東路269號",
  "tel": 47287883,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "摩登菸酒",
  "address": "彰化縣彰化市南郭路一段55號",
  "tel": 986703602,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "酒樂菸酒",
  "address": "彰化縣彰化市員林市三民東街63號",
  "tel": 48397566,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "加納洋酒-大竹圍店",
  "address": "彰化縣彰化市彰南路二段19號",
  "tel": 47385818,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "日享商行",
  "address": "彰化縣彰化市彰南路二段232號",
  "tel": 47388507,
  "area": "彰化縣",
  "city_area": "彰化市"
 },
 {
  "store": "元阜商行",
  "address": "南投縣南投市三民里南陽路461號",
  "tel": 492238598,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "錡毅菸酒",
  "address": "南投縣民間鄉濁水村員集路67號",
  "tel": 492732071,
  "area": "南投縣",
  "city_area": "民間鄉"
 },
 {
  "store": "台元洋酒",
  "address": "南投縣竹山鎮大明路233號",
  "tel": 492653393,
  "area": "南投縣",
  "city_area": "竹山鎮"
 },
 {
  "store": "文和菸酒-南投店",
  "address": "南投縣南投市三和里復興路119號",
  "tel": 492224601,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "文和菸酒-中興店",
  "address": "南投縣南投市中興新村中興路72號",
  "tel": 492390342,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "豪酒運菸酒",
  "address": "南投縣南投市南陽路98號",
  "tel": 492229906,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "羊哥菸酒",
  "address": "南投縣南投市草屯鎮炎峰街82號",
  "tel": 492367775,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "承暘菸酒",
  "address": "南投縣南投市康壽里民生街26號",
  "tel": 492202998,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "嘉峰商行",
  "address": "南投縣南投市彰南路一段613號",
  "tel": 492225742,
  "area": "南投縣",
  "city_area": "南投市"
 },
 {
  "store": "呵呵商行",
  "address": "南投縣埔里鎮中正路745號",
  "tel": 926939299,
  "area": "南投縣",
  "city_area": "埔里鎮"
 },
 {
  "store": "酒園商行",
  "address": "南投縣埔里鎮中華路188號",
  "tel": 492999903,
  "area": "南投縣",
  "city_area": "埔里鎮"
 },
 {
  "store": "進南號菸酒",
  "address": "南投縣埔里鎮西安路1段93號",
  "tel": 492982123,
  "area": "南投縣",
  "city_area": "埔里鎮"
 },
 {
  "store": "金利菸酒",
  "address": "南投縣埔里鎮西安路一段95號",
  "tel": 492984401,
  "area": "南投縣",
  "city_area": "埔里鎮"
 },
 {
  "store": "博酒萊-埔里",
  "address": "南投縣埔里鎮東華路182號",
  "tel": 492983652,
  "area": "南投縣",
  "city_area": "埔里鎮"
 },
 {
  "store": "大禾屋菸酒",
  "address": "南投縣草屯鎮上林里太平路一段139號",
  "tel": 492312965,
  "area": "南投縣",
  "city_area": "草屯鎮"
 },
 {
  "store": "百淳菸酒",
  "address": "南投縣草屯鎮太平路一段516號",
  "tel": 492392496,
  "area": "南投縣",
  "city_area": "草屯鎮"
 },
 {
  "store": "元太洋行",
  "address": "南投縣草屯鎮和平街4號",
  "tel": 492322008,
  "area": "南投縣",
  "city_area": "草屯鎮"
 },
 {
  "store": "家家有洋酒",
  "address": "南投縣草屯鎮敦和路敦成巷1之1號",
  "tel": 492310884,
  "area": "南投縣",
  "city_area": "草屯鎮"
 },
 {
  "store": "酒玖商行",
  "address": "南投縣國姓鄉中興路236號",
  "tel": 492723951,
  "area": "南投縣",
  "city_area": "國姓鄉"
 },
 {
  "store": "三元行",
  "address": "南投縣集集鎮集集街100號",
  "tel": 492762371,
  "area": "南投縣",
  "city_area": "集集鎮"
 },
 {
  "store": "唯君股份有限公司",
  "address": "雲林縣二崙鄉裕民路12號",
  "tel": 55989588,
  "area": "雲林縣",
  "city_area": "二崙鄉"
 },
 {
  "store": "杜康菸酒",
  "address": "雲林縣斗六市上海路253號",
  "tel": 55346869,
  "area": "雲林縣",
  "city_area": "斗六市"
 },
 {
  "store": "鼎典菸酒",
  "address": "雲林縣斗六市民生路283-12號",
  "tel": 55339784,
  "area": "雲林縣",
  "city_area": "斗六市"
 },
 {
  "store": "徠圓酒莊",
  "address": "雲林縣斗六市成功路218號",
  "tel": 55327568,
  "area": "雲林縣",
  "city_area": "斗六市"
 },
 {
  "store": "佳亨洋行",
  "address": "雲林縣斗六市明德北路二段81號",
  "tel": 55325898,
  "area": "雲林縣",
  "city_area": "斗六市"
 },
 {
  "store": "隆泰行",
  "address": "雲林縣斗南鎮中山路113號",
  "tel": 55973360,
  "area": "雲林縣",
  "city_area": "斗南鎮"
 },
 {
  "store": "斯威特商行",
  "address": "雲林縣斗南鎮義德路100號",
  "tel": 55972468,
  "area": "雲林縣",
  "city_area": "斗南鎮"
 },
 {
  "store": "禾源盛菸酒",
  "address": "雲林縣台西鄉民族路44號",
  "tel": 56981916,
  "area": "雲林縣",
  "city_area": "台西鄉"
 },
 {
  "store": "寶園洋酒",
  "address": "雲林縣台西鄉民權路82號",
  "tel": 56982801,
  "area": "雲林縣",
  "city_area": "台西鄉"
 },
 {
  "store": "欣州酒莊",
  "address": "雲林縣西螺鎮光明西路245號",
  "tel": 55872568,
  "area": "雲林縣",
  "city_area": "西螺鎮"
 },
 {
  "store": "有成菸酒",
  "address": "雲林縣西螺鎮光復西路333號",
  "tel": 55991990,
  "area": "雲林縣",
  "city_area": "西螺鎮"
 },
 {
  "store": "翔賀菸酒-西螺店",
  "address": "雲林縣西螺鎮興農西路63號",
  "tel": 955670970,
  "area": "雲林縣",
  "city_area": "西螺鎮"
 },
 {
  "store": "正峰煙酒量販店",
  "address": "雲林縣虎尾鎮光復路416號",
  "tel": 56361475,
  "area": "雲林縣",
  "city_area": "虎尾鎮"
 },
 {
  "store": "八八煙酒水-虎尾店",
  "address": "雲林縣虎尾鎮光復路443號",
  "tel": 56310388,
  "area": "雲林縣",
  "city_area": "虎尾鎮"
 },
 {
  "store": "勝輝",
  "address": "雲林縣崙背鄉大明街38號",
  "tel": 56969362,
  "area": "雲林縣",
  "city_area": "崙背鄉"
 },
 {
  "store": "尚品",
  "address": "雲林縣崙背鄉東興路119號",
  "tel": 55864822,
  "area": "雲林縣",
  "city_area": "崙背鄉"
 },
 {
  "store": "通洋酒莊",
  "address": "雲林縣麥寮鄉中興路78-13號",
  "tel": 56934568,
  "area": "雲林縣",
  "city_area": "麥寮鄉"
 },
 {
  "store": "翔賀菸酒-橋頭店",
  "address": "雲林縣麥寮鄉仁德路241號",
  "tel": 56917788,
  "area": "雲林縣",
  "city_area": "麥寮鄉"
 },
 {
  "store": "翔賀菸酒-麥寮店",
  "address": "雲林縣麥寮鄉泰順路331號",
  "tel": "05-693-7089",
  "area": "雲林縣",
  "city_area": "麥寮鄉"
 },
 {
  "store": "酒馳菸酒",
  "address": "雲林縣麥寮鄉麥豐村新興路橫街巷8之8號1樓",
  "tel": 56930656,
  "area": "雲林縣",
  "city_area": "麥寮鄉"
 },
 {
  "store": "順飲-嘉義店",
  "address": "嘉義縣嘉義市上海路209號",
  "tel": 52838383,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "萬鴻菸酒-太保店",
  "address": "嘉義縣太保市後潭188-5號",
  "tel": 53703069,
  "area": "嘉義縣",
  "city_area": "太保市"
 },
 {
  "store": "林酒",
  "address": "嘉義縣太保市祥和一路東段50號",
  "tel": 53625050,
  "area": "嘉義縣",
  "city_area": "太保市"
 },
 {
  "store": "源和菸酒",
  "address": "嘉義縣民雄鄉興南村建國路三段43號一樓",
  "tel": "05-221-2977",
  "area": "嘉義縣",
  "city_area": "民雄鄉"
 },
 {
  "store": "酒仙商行",
  "address": "嘉義縣竹崎鄉中華路2-3號",
  "tel": 905037371,
  "area": "嘉義縣",
  "city_area": "竹崎鄉"
 },
 {
  "store": "那間菸酒",
  "address": "嘉義縣竹崎鄉和平村7鄰坑仔坪152-1號1樓",
  "tel": 52612700,
  "area": "嘉義縣",
  "city_area": "竹崎鄉"
 },
 {
  "store": "鑫多實業有限公司",
  "address": "嘉義縣番路鄉下坑村下坑55-12號",
  "tel": 52594475,
  "area": "嘉義縣",
  "city_area": "番路鄉"
 },
 {
  "store": "八八煙酒水-友愛店",
  "address": "嘉義縣嘉義市友愛路138-1號",
  "tel": 52315188,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "酒客菸酒",
  "address": "嘉義縣嘉義市友愛路138號",
  "tel": 52810669,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "酒國英雄菸酒",
  "address": "嘉義縣嘉義市友愛路221號",
  "tel": 52331212,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "八八煙酒水-新生店",
  "address": "嘉義縣嘉義市友愛路337號",
  "tel": 52163988,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "品銘菸酒",
  "address": "嘉義縣嘉義市台林街207號附2",
  "tel": 52756779,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "克林菸酒",
  "address": "嘉義縣嘉義市民生北路213號",
  "tel": 52288833,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "晉福菸酒",
  "address": "嘉義縣嘉義市民生北路233號",
  "tel": 52225943,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "上村行菸酒",
  "address": "嘉義縣嘉義市民族路109號",
  "tel": 52760970,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "八八煙酒水-後庄店",
  "address": "嘉義縣嘉義市東區吳鳳南路340號",
  "tel": 52395788,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "盈嘉商行",
  "address": "嘉義縣嘉義市南京路401號",
  "tel": 52368882,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "歡喜菸酒顏福來",
  "address": "嘉義縣嘉義市新生路642號",
  "tel": 52776111,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "西部菸酒",
  "address": "嘉義縣嘉義市嘉義市荖藤里後厝1之6號",
  "tel": 52321858,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "萬鴻菸酒",
  "address": "嘉義縣嘉義市興業西路71號",
  "tel": 52861698,
  "area": "嘉義縣",
  "city_area": "嘉義市"
 },
 {
  "store": "御品下營",
  "address": "台南市下營區健康路281號",
  "tel": 66790022,
  "area": "台南市",
  "city_area": "下營區"
 },
 {
  "store": "州翔酒翔",
  "address": "台南市中西區西和路220號",
  "tel": 62586958,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "康齡酒藏-新光三越台南西門新天地",
  "address": "台南市中西區西門路一段658號B2",
  "tel": 63030165,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "高登-台南",
  "address": "台南市中西區和意路78號",
  "tel": 973063215,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "大眾-武聖",
  "address": "台南市中西區武聖路265號",
  "tel": 62800129,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "翔發",
  "address": "台南市中西區金華路三段60號",
  "tel": 62239729,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "龍憶",
  "address": "台南市中西區南門路243號之3",
  "tel": 62130289,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "醇爵",
  "address": "台南市中西區海安路一段26號",
  "tel": 62200507,
  "area": "台南市",
  "city_area": "中西區"
 },
 {
  "store": "富冠商行",
  "address": "台南市仁德區中正路二段341號",
  "tel": 62794232,
  "area": "台南市",
  "city_area": "仁德區"
 },
 {
  "store": "鼎大",
  "address": "台南市北區中華北路一段78巷25號",
  "tel": 968702927,
  "area": "台南市",
  "city_area": "北區"
 },
 {
  "store": "昕悅揚",
  "address": "台南市永康區中華一路150-1號",
  "tel": 63129699,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "順飲-中華店",
  "address": "台南市永康區中華路403號",
  "tel": 62756222,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "家禎",
  "address": "台南市永康區永華路66號",
  "tel": 62734129,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "壹玲",
  "address": "台南市永康區忠孝路108號",
  "tel": 63120078,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "龍亨菸酒",
  "address": "台南市永康區東橋七路153號",
  "tel": 63020329,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "宏瑋菸酒行",
  "address": "台南市永康區南灣里大灣路578號",
  "tel": " 06-205-9050",
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "順飲-復國店",
  "address": "台南市永康區復國一路361號",
  "tel": 62031831,
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "南都菸酒",
  "address": "台南市永康區復國二路63巷",
  "tel": "06-312-2828",
  "area": "台南市",
  "city_area": "永康區"
 },
 {
  "store": "大大菸酒",
  "address": "台南市安平區中華西路二段573號",
  "tel": 62803078,
  "area": "台南市",
  "city_area": "安平區"
 },
 {
  "store": "順飲-永華總店",
  "address": "台南市安平區永華路二段678號",
  "tel": 62999123,
  "area": "台南市",
  "city_area": "安平區"
 },
 {
  "store": "賀鼎",
  "address": "台南市安平區永華路二段690號",
  "tel": 62930022,
  "area": "台南市",
  "city_area": "安平區"
 },
 {
  "store": "大眾-安平",
  "address": "台南市安平區建平路696號",
  "tel": 62938999,
  "area": "台南市",
  "city_area": "安平區"
 },
 {
  "store": "鍾愛",
  "address": "台南市安南區安和路四段480號",
  "tel": 63561127,
  "area": "台南市",
  "city_area": "安南區"
 },
 {
  "store": "順飲-西門店",
  "address": "台南市安南區西門路四段375號",
  "tel": 62810333,
  "area": "台南市",
  "city_area": "安南區"
 },
 {
  "store": "高僑",
  "address": "台南市安南區海沺路一段99號",
  "tel": 63506423,
  "area": "台南市",
  "city_area": "安南區"
 },
 {
  "store": "西港菸酒",
  "address": "台南市西港區慶安路82號",
  "tel": 67950225,
  "area": "台南市",
  "city_area": "西港區"
 },
 {
  "store": "僑領",
  "address": "台南市佳里區中山路225號",
  "tel": 67236072,
  "area": "台南市",
  "city_area": "佳里區"
 },
 {
  "store": "廣來",
  "address": "台南市東區大同路二段139號",
  "tel": 62466272,
  "area": "台南市",
  "city_area": "東區"
 },
 {
  "store": "柏彣洋酒",
  "address": "台南市東區小東路330號",
  "tel": 62756621,
  "area": "台南市",
  "city_area": "東區"
 },
 {
  "store": "合歡-東門門市",
  "address": "台南市東區東門路一段188號",
  "tel": 62365301,
  "area": "台南市",
  "city_area": "東區"
 },
 {
  "store": "槓頂菸酒",
  "address": "台南市東區崇德路456號",
  "tel": 63362189,
  "area": "台南市",
  "city_area": "東區"
 },
 {
  "store": "合歡-夏林門市",
  "address": "台南市南區夏林路148號",
  "tel": 62644252,
  "area": "台南市",
  "city_area": "南區"
 },
 {
  "store": "棋勝",
  "address": "台南市南區惠南街83號",
  "tel": 932706906,
  "area": "台南市",
  "city_area": "南區"
 },
 {
  "store": "鼎豐",
  "address": "台南市麻豆區自由路32-16號",
  "tel": 65728041,
  "area": "台南市",
  "city_area": "麻豆區"
 },
 {
  "store": "大勝",
  "address": "台南市善化區中山路472號",
  "tel": 65817928,
  "area": "台南市",
  "city_area": "善化區"
 },
 {
  "store": "明輝",
  "address": "台南市新化區中山路111巷10號",
  "tel": 65981166,
  "area": "台南市",
  "city_area": "新化區"
 },
 {
  "store": "泰安-德佳",
  "address": "台南市新化區中正路462.464號",
  "tel": 65907527,
  "area": "台南市",
  "city_area": "新化區"
 },
 {
  "store": "金富祥",
  "address": "台南市新市區銘傳街76號",
  "tel": 65998278,
  "area": "台南市",
  "city_area": "新市區"
 },
 {
  "store": "御品",
  "address": "台南市新營區三民路69號",
  "tel": 66376999,
  "area": "台南市",
  "city_area": "新營區"
 },
 {
  "store": "晴瑒",
  "address": "台南市新營區和平路87號",
  "tel": 66355035,
  "area": "台南市",
  "city_area": "新營區"
 },
 {
  "store": "酒堡-新營",
  "address": "台南市新營區東泰七街48號",
  "tel": 934324777,
  "area": "台南市",
  "city_area": "新營區"
 },
 {
  "store": "名家",
  "address": "台南市新營區新進路二段183號",
  "tel": 66379237,
  "area": "台南市",
  "city_area": "新營區"
 },
 {
  "store": "涼亭",
  "address": "台南市歸仁區保大路三段270號",
  "tel": 62650334,
  "area": "台南市",
  "city_area": "歸仁區"
 },
 {
  "store": "寶檳-九如",
  "address": "高雄市三民區九如一路229號",
  "tel": 73873300,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "臻酒仙-九如",
  "address": "高雄市三民區九如一路501號",
  "tel": 73974444,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "醇酒城-大昌店",
  "address": "高雄市三民區大昌二路48號",
  "tel": 73875333,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "大連-上景",
  "address": "高雄市三民區大連街198",
  "tel": 73236096,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "高鑫",
  "address": "高雄市三民區大順二路239號",
  "tel": 73891111,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "嘉瑝洋行-大順店",
  "address": "高雄市三民區大順二路72號",
  "tel": 73893366,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "東良",
  "address": "高雄市三民區北平二街187號",
  "tel": 73229287,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "廣財",
  "address": "高雄市三民區民族一路591號",
  "tel": 73599955,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "奕欣行-建國",
  "address": "高雄市三民區建國一路406號",
  "tel": 72257269,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "宏美",
  "address": "高雄市三民區裕誠路115號",
  "tel": 73505529,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "極品",
  "address": "高雄市三民區嫩江街163號",
  "tel": 73133119,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "長慶洋行",
  "address": "高雄市三民區漢口街333號",
  "tel": 73153838,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "嘉瑝洋行",
  "address": "高雄市三民區澄清路381號",
  "tel": 73986404,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "信禕-灣中店",
  "address": "高雄市三民區灣中街280號",
  "tel": 73952220,
  "area": "高雄市",
  "city_area": "三民區"
 },
 {
  "store": "九久-大寮",
  "address": "高雄市大寮區大寮路662-682號",
  "tel": 77878296,
  "area": "高雄市",
  "city_area": "大寮區"
 },
 {
  "store": "寶檳-大寮",
  "address": "高雄市大寮區鳳林三路35號",
  "tel": 77868877,
  "area": "高雄市",
  "city_area": "大寮區"
 },
 {
  "store": "寶檳-中庄",
  "address": "高雄市大寮區鳳屏一路183號",
  "tel": 77037000,
  "area": "高雄市",
  "city_area": "大寮區"
 },
 {
  "store": "富沅",
  "address": "高雄市大樹區中興南路新興巷22號",
  "tel": 76521169,
  "area": "高雄市",
  "city_area": "大樹區"
 },
 {
  "store": "大鵬",
  "address": "高雄市小港區大鵬路158號",
  "tel": 78019660,
  "area": "高雄市",
  "city_area": "小港區"
 },
 {
  "store": "奕欣行-中安店",
  "address": "高雄市小港區中安路648號",
  "tel": 77912757,
  "area": "高雄市",
  "city_area": "小港區"
 },
 {
  "store": "奕欣行-小港",
  "address": "高雄市小港區平治街163號1樓",
  "tel": 78063150,
  "area": "高雄市",
  "city_area": "小港區"
 },
 {
  "store": "柏森-金鴻昌",
  "address": "高雄市小港區華昌路105號",
  "tel": 77916998,
  "area": "高雄市",
  "city_area": "小港區"
 },
 {
  "store": "阿波羅-豐年",
  "address": "高雄市小港區漢民路111號",
  "tel": 78060898,
  "area": "高雄市",
  "city_area": "小港區"
 },
 {
  "store": "全麥洋行",
  "address": "高雄市仁武區八卦村永仁街313號",
  "tel": 73731801,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "黃金酒洋酒行",
  "address": "高雄市仁武區仁和街8號",
  "tel": 73722722,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "多多",
  "address": "高雄市仁武區仁忠路60號",
  "tel": 73755371,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "寰亨-仁武",
  "address": "高雄市仁武區仁雄路316號",
  "tel": 73745122,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "佳酒莊",
  "address": "高雄市仁武區仁樂街264號",
  "tel": 73710058,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "佳酒莊-赤仁",
  "address": "高雄市仁武區赤仁路60號",
  "tel": 909193513,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "寶檳-仁武店",
  "address": "高雄市仁武區鳳仁路95-17號",
  "tel": 73737755,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "上景商行-大連",
  "address": "高雄市仁武區澄觀路788號",
  "tel": 73723223,
  "area": "高雄市",
  "city_area": "仁武區"
 },
 {
  "store": "林記-文自店",
  "address": "高雄市左營區文自路974號",
  "tel": 73429090,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "大第",
  "address": "高雄市左營區自由二路125號",
  "tel": 75561366,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "奕欣行-自由店",
  "address": "高雄市左營區自由二路331、333 號",
  "tel": 75508665,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "阿瑟-辛亥店",
  "address": "高雄市左營區辛亥路253號",
  "tel": 75508155,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "全允-昇發",
  "address": "高雄市左營區南屏路261號",
  "tel": 75505161,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "達玖-左營",
  "address": "高雄市左營區重信路542號",
  "tel": 979670649,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "康齡酒藏-新光三越左營店",
  "address": "高雄市左營區高鐵路115號3樓",
  "tel": 73417798,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "酒谷",
  "address": "高雄市左營區崇德路416號",
  "tel": 73413863,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "寰亨",
  "address": "高雄市左營區榮總路271號",
  "tel": 73599656,
  "area": "高雄市",
  "city_area": "左營區"
 },
 {
  "store": "全允-昇發",
  "address": "高雄市岡山區巨輪路55-1號",
  "tel": 76258185,
  "area": "高雄市",
  "city_area": "岡山區"
 },
 {
  "store": "達玖-岡山",
  "address": "高雄市岡山區岡山路262號",
  "tel": 76218601,
  "area": "高雄市",
  "city_area": "岡山區"
 },
 {
  "store": "寶檳-岡山",
  "address": "高雄市岡山區岡山路395號",
  "tel": 76230055,
  "area": "高雄市",
  "city_area": "岡山區"
 },
 {
  "store": "大眾-岡山",
  "address": "高雄市岡山區柳橋東路9-1號",
  "tel": 76296157,
  "area": "高雄市",
  "city_area": "岡山區"
 },
 {
  "store": "福記-林園",
  "address": "高雄市林園區文賢北路6號",
  "tel": 76416633,
  "area": "高雄市",
  "city_area": "林園區"
 },
 {
  "store": "寶檳-林園",
  "address": "高雄市林園區東林西路62號",
  "tel": 76439000,
  "area": "高雄市",
  "city_area": "林園區"
 },
 {
  "store": "大和-阿蓮",
  "address": "高雄市阿蓮區忠孝路93號",
  "tel": 76312182,
  "area": "高雄市",
  "city_area": "阿蓮區"
 },
 {
  "store": "林記",
  "address": "高雄市前金區光復三街132號",
  "tel": 72218313,
  "area": "高雄市",
  "city_area": "前金區"
 },
 {
  "store": "和易門市",
  "address": "高雄市前金區成功一路302號",
  "tel": 72113488,
  "area": "高雄市",
  "city_area": "前金區"
 },
 {
  "store": "宏美-自強",
  "address": "高雄市前金區自強二路80-1號",
  "tel": 72619955,
  "area": "高雄市",
  "city_area": "前金區"
 },
 {
  "store": "凱記",
  "address": "高雄市前金區青年二路164號",
  "tel": 916012899,
  "area": "高雄市",
  "city_area": "前金區"
 },
 {
  "store": "東瀛",
  "address": "高雄市前鎮區二聖路218號",
  "tel": 77161717,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "阿瑟",
  "address": "高雄市前鎮區二聖路67號",
  "tel": 77172802,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "奕欣行-中山店",
  "address": "高雄市前鎮區中山二路186、188號",
  "tel": 75361285,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "京鴻莊園菸酒",
  "address": "高雄市前鎮區民裕街101號",
  "tel": 913665239,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "廣爺-永豐店",
  "address": "高雄市前鎮區永豐路228號",
  "tel": 77167878,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "亨銘",
  "address": "高雄市前鎮區光華二路300號",
  "tel": 77130209,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "玖邑",
  "address": "高雄市前鎮區明鳳三路135號",
  "tel": 77935891,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "福記",
  "address": "高雄市前鎮區瑞隆路597號",
  "tel": 77613656,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "呂記",
  "address": "高雄市前鎮區鎮東一街143號",
  "tel": 78318545,
  "area": "高雄市",
  "city_area": "前鎮區"
 },
 {
  "store": "鼓山莊美濃店",
  "address": "高雄市美濃區中正路二段185號",
  "tel": 76617315,
  "area": "高雄市",
  "city_area": "美濃區"
 },
 {
  "store": "振昌-美濃",
  "address": "高雄市美濃區泰安路38號",
  "tel": 909537811,
  "area": "高雄市",
  "city_area": "美濃區"
 },
 {
  "store": "醇酒益",
  "address": "高雄市苓雅區三多二路151號",
  "tel": 77230909,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "南威海洋行",
  "address": "高雄市苓雅區三多二路308號",
  "tel": 75360000,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "廣爺",
  "address": "高雄市苓雅區四維三路181號",
  "tel": 75365252,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "開普-五福店",
  "address": "高雄市苓雅區民權一路239號",
  "tel": 72265545,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "振昌-武廟",
  "address": "高雄市苓雅區武廟路159號之3",
  "tel": 77229255,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "尊城",
  "address": "高雄市苓雅區青年一路8",
  "tel": 72232693,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "銀盤洋酒",
  "address": "高雄市苓雅區建民路158號",
  "tel": 77229018,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "吉恩",
  "address": "高雄市苓雅區苓雅一路354號",
  "tel": 75355999,
  "area": "高雄市",
  "city_area": "苓雅區"
 },
 {
  "store": "大和茄萣",
  "address": "高雄市茄定區白砂路172號",
  "tel": 76906003,
  "area": "高雄市",
  "city_area": "茄定區"
 },
 {
  "store": "奕欣行-梓官",
  "address": "高雄市梓官區中正路272-1號",
  "tel": 76109896,
  "area": "高雄市",
  "city_area": "梓官區"
 },
 {
  "store": "冠德-八德店",
  "address": "高雄市新興區八德一路196號",
  "tel": 72360639,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "奕欣行-五福店",
  "address": "高雄市新興區五福二路190號",
  "tel": 72115444,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "葡園酒品專賣",
  "address": "高雄市新興區六合一路109號",
  "tel": 72363308,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "拿破崙洋行",
  "address": "高雄市新興區自立二路142號",
  "tel": 72883755,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "柯林頓",
  "address": "高雄市新興區自立二路80號",
  "tel": 72856161,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "六合洋行",
  "address": "高雄市新興區南台路73巷21號",
  "tel": 920390767,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "信禕",
  "address": "高雄市新興區復興二路328號",
  "tel": 72220113,
  "area": "高雄市",
  "city_area": "新興區"
 },
 {
  "store": "振昌-右昌",
  "address": "高雄市楠梓區三山街220號",
  "tel": 73634036,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "揚洲",
  "address": "高雄市楠梓區右昌街516號",
  "tel": 73637369,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "寶檳橋頭店",
  "address": "高雄市楠梓區市場街8號",
  "tel": 76110033,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "品鑫",
  "address": "高雄市楠梓區軍校路862號",
  "tel": 73625588,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "寶檳-楠梓",
  "address": "高雄市楠梓區鳳楠路142號",
  "tel": 73581333,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "寶檳-德賢",
  "address": "高雄市楠梓區德賢路418號",
  "tel": 73640888,
  "area": "高雄市",
  "city_area": "楠梓區"
 },
 {
  "store": "寶檳-路竹",
  "address": "高雄市路竹區中山路716",
  "tel": 76977000,
  "area": "高雄市",
  "city_area": "路竹區"
 },
 {
  "store": "高都菸酒",
  "address": "高雄市路竹區中山路832號",
  "tel": 76976588,
  "area": "高雄市",
  "city_area": "路竹區"
 },
 {
  "store": "明春",
  "address": "高雄市路竹區延平路520號",
  "tel": 76076699,
  "area": "高雄市",
  "city_area": "路竹區"
 },
 {
  "store": "大成洋行",
  "address": "高雄市鳯山區立志街142號",
  "tel": 77425888,
  "area": "高雄市",
  "city_area": "鳯山區"
 },
 {
  "store": "邑東洋行-九如",
  "address": "高雄市鼓山區九如四路1005號",
  "tel": 75332732,
  "area": "高雄市",
  "city_area": "鼓山區"
 },
 {
  "store": "振昌-明誠",
  "address": "高雄市鼓山區明誠三路638號",
  "tel": 75557999,
  "area": "高雄市",
  "city_area": "鼓山區"
 },
 {
  "store": "奕欣行-旗山店",
  "address": "高雄市鼓山區美術東二路622號",
  "tel": 75531566,
  "area": "高雄市",
  "city_area": "鼓山區"
 },
 {
  "store": "奕欣行-美術旗艦",
  "address": "高雄市旗山區延平一路359號",
  "tel": 76621188,
  "area": "高雄市",
  "city_area": "旗山區"
 },
 {
  "store": "鼓山莊-旗山店",
  "address": "高雄市旗山區延平一路508號",
  "tel": 76612875,
  "area": "高雄市",
  "city_area": "旗山區"
 },
 {
  "store": "巨洋菸酒",
  "address": "高雄市旗山鎮中華路530之1號",
  "tel": 76611072,
  "area": "高雄市",
  "city_area": "旗山鎮"
 },
 {
  "store": "九久-中山東",
  "address": "高雄市鳳山區中山東路382號",
  "tel": 77033555,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "寶檳-中崙",
  "address": "高雄市鳳山區中崙二路537號",
  "tel": 77550000,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "鳳翊洋行",
  "address": "高雄市鳳山區五甲二路52號",
  "tel": 77672835,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "奕欣行-鳳山店",
  "address": "高雄市鳳山區文化西路170號",
  "tel": 77779062,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "酒室酒窖",
  "address": "高雄市鳳山區文殿街16號",
  "tel": 77779633,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "千倉廩",
  "address": "高雄市鳳山區文龍東路128號",
  "tel": 77333986,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "奕欣行-文龍東店",
  "address": "高雄市鳳山區文龍東路781號",
  "tel": 77777689,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "嘉瑝洋行-文龍店",
  "address": "高雄市鳳山區文龍東路785號",
  "tel": 77801989,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "寶檳-鳳山",
  "address": "高雄市鳳山區光遠路426號",
  "tel": 77106661,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "開普-鳳山店",
  "address": "高雄市鳳山區青年路一段360號",
  "tel": 77470466,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "柏格達",
  "address": "高雄市鳳山區南京路173號",
  "tel": 77675586,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "九久-鳳甲",
  "address": "高雄市鳳山區南華一路180號、182號",
  "tel": 77969928,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "九久-一甲",
  "address": "高雄市鳳山區善美里南華路149號右側",
  "tel": 77162899,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "揚昇",
  "address": "高雄市鳳山區過勇路260號",
  "tel": 77929156,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "奕欣行-鳳東店",
  "address": "高雄市鳳山區鳳東路533號",
  "tel": 78828389,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "福記-五甲店",
  "address": "高雄市鳳山區鎮南里五甲二路740號",
  "tel": 78138811,
  "area": "高雄市",
  "city_area": "鳳山區"
 },
 {
  "store": "酒市場",
  "address": "高雄市鹽埕區七賢三路87號",
  "tel": 75337040,
  "area": "高雄市",
  "city_area": "鹽埕區"
 },
 {
  "store": "東大",
  "address": "屏東縣屏東市中正路548號",
  "tel": 87381245,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "大同-內埔",
  "address": "屏東縣內埔鄉廣濟路114號",
  "tel": 87799046,
  "area": "屏東縣",
  "city_area": "內埔鄉"
 },
 {
  "store": "東鑫",
  "address": "屏東縣里港鄉大平村仁和路23號",
  "tel": 87751199,
  "area": "屏東縣",
  "city_area": "里港鄉"
 },
 {
  "store": "金和順",
  "address": "屏東縣里港鄉里港路114、112號",
  "tel": 87756043,
  "area": "屏東縣",
  "city_area": "里港鄉"
 },
 {
  "store": "裕陞-東港",
  "address": "屏東縣東港鎮新勝街180號",
  "tel": 88323585,
  "area": "屏東縣",
  "city_area": "東港鎮"
 },
 {
  "store": "吉昌",
  "address": "屏東縣枋寮鄉中山路75號",
  "tel": 88782362,
  "area": "屏東縣",
  "city_area": "枋寮鄉"
 },
 {
  "store": "裕陞-水底寮",
  "address": "屏東縣枋寮鄉中山路二段353號",
  "tel": 88714122,
  "area": "屏東縣",
  "city_area": "枋寮鄉"
 },
 {
  "store": "裕陞-林邊",
  "address": "屏東縣林邊鄉仁和村中山路285號",
  "tel": 88758070,
  "area": "屏東縣",
  "city_area": "林邊鄉"
 },
 {
  "store": "裕陞-南州",
  "address": "屏東縣南州鄉三民路137號",
  "tel": 88646300,
  "area": "屏東縣",
  "city_area": "南州鄉"
 },
 {
  "store": "洋基",
  "address": "屏東縣屏東市公園西路121號",
  "tel": 87337272,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "冠華-正東",
  "address": "屏東縣屏東市民生路57-8號",
  "tel": 87226806,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "冠德-總店",
  "address": "屏東縣屏東市武成街103號",
  "tel": 87516553,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "冠德-大埔店",
  "address": "屏東縣屏東市柳洲街34號",
  "tel": 87337007,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "銘鴻海豐",
  "address": "屏東縣屏東市海豐街119巷34-2號",
  "tel": 87369901,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "冠德-華盛店",
  "address": "屏東縣屏東市華盛街16號",
  "tel": 87510633,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "禾大",
  "address": "屏東縣屏東市瑞光路三段299號",
  "tel": 87386653,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "東京",
  "address": "屏東縣屏東市廣東路158號",
  "tel": 87231119,
  "area": "屏東縣",
  "city_area": "屏東市"
 },
 {
  "store": "百利",
  "address": "屏東縣恆春鎮中正路138號",
  "tel": 88892615,
  "area": "屏東縣",
  "city_area": "恆春鎮"
 },
 {
  "store": "葡園-恆春",
  "address": "屏東縣恆春鎮復興路99-1號",
  "tel": 88882422,
  "area": "屏東縣",
  "city_area": "恆春鎮"
 },
 {
  "store": "葡園-墾丁",
  "address": "屏東縣恆春鎮墾丁路320號",
  "tel": 88862604,
  "area": "屏東縣",
  "city_area": "恆春鎮"
 },
 {
  "store": "鴻昇",
  "address": "屏東縣崁頂鄉力社村舊店路1-12號",
  "tel": 88631409,
  "area": "屏東縣",
  "city_area": "崁頂鄉"
 },
 {
  "store": "千上菸酒商行",
  "address": "屏東縣萬丹鄉萬全村萬丹路一段321號",
  "tel": 87764636,
  "area": "屏東縣",
  "city_area": "萬丹鄉"
 },
 {
  "store": "大同",
  "address": "屏東縣潮洲鎮朝昇路84號",
  "tel": 87882058,
  "area": "屏東縣",
  "city_area": "潮洲鎮"
 },
 {
  "store": "福記-屏東",
  "address": "屏東縣鹽埔鄉維新路193號",
  "tel": 87935061,
  "area": "屏東縣",
  "city_area": "鹽埔鄉"
 },
 {
  "store": "德豐",
  "address": "台東縣台東市傳廣路507號",
  "tel": 89228372,
  "area": "台東縣",
  "city_area": "台東市"
 },
 {
  "store": "酒堡",
  "address": "台東縣台東市新生路116號",
  "tel": 89321235,
  "area": "台東縣",
  "city_area": "台東市"
 },
 {
  "store": "明月",
  "address": "花蓮縣花蓮市中正路146號",
  "tel": 38315966,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "上醇",
  "address": "花蓮縣吉安鄉中華路二段159號",
  "tel": 38512068,
  "area": "花蓮縣",
  "city_area": "吉安鄉"
 },
 {
  "store": "民侁",
  "address": "花蓮縣吉安鄉吉安路一段768號",
  "tel": 338580768,
  "area": "花蓮縣",
  "city_area": "吉安鄉"
 },
 {
  "store": "自立",
  "address": "花蓮縣吉安鄉自立路二段42號",
  "tel": 38566355,
  "area": "花蓮縣",
  "city_area": "吉安鄉"
 },
 {
  "store": "酒江街",
  "address": "花蓮縣花蓮市化道路162號",
  "tel": 38222520,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "加酒行",
  "address": "花蓮縣花蓮市軒轅路22號",
  "tel": 38314960,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "雄寰",
  "address": "花蓮縣花蓮市國聯一路211號",
  "tel": 338326147,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "全家來",
  "address": "花蓮縣花蓮市國聯五路51號",
  "tel": 38360101,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "金雄寰",
  "address": "花蓮縣花蓮市博愛街135號",
  "tel": 38327622,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "上揚",
  "address": "花蓮縣花蓮市富祥街97號",
  "tel": 38576543,
  "area": "花蓮縣",
  "city_area": "花蓮市"
 },
 {
  "store": "酒淵",
  "address": "花蓮縣新城鄉嘉里三街92之8號",
  "tel": 338261786,
  "area": "花蓮縣",
  "city_area": "新城鄉"
 },
 {
  "store": "申野",
  "address": "宜蘭縣宜蘭市宜興路一段283號",
  "tel": 39380822,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "一路發",
  "address": "宜蘭縣冬山鄉冬山路五段269號",
  "tel": 39585499,
  "area": "宜蘭縣",
  "city_area": "冬山鄉"
 },
 {
  "store": "欣龍",
  "address": "宜蘭縣冬山鄉冬山路五段277號",
  "tel": 39589352,
  "area": "宜蘭縣",
  "city_area": "冬山鄉"
 },
 {
  "store": "酒殿",
  "address": "宜蘭縣宜蘭市宜興路二段2號",
  "tel": 339329579,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "明興",
  "address": "宜蘭縣宜蘭市神農路一段26號",
  "tel": 39325259,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "鵬業",
  "address": "宜蘭縣宜蘭市進士路一段28號",
  "tel": 39255722,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "酒樂",
  "address": "宜蘭縣宜蘭市新民路84號",
  "tel": 39325085,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "皇后道",
  "address": "宜蘭縣宜蘭市新興路88號",
  "tel": 39333385,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "堡鳳",
  "address": "宜蘭縣宜蘭市農權路23號",
  "tel": 39352532,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "花天酒地-翰德",
  "address": "宜蘭縣宜蘭市舊城東路49號",
  "tel": 39332038,
  "area": "宜蘭縣",
  "city_area": "宜蘭市"
 },
 {
  "store": "酒窩",
  "address": "宜蘭縣礁溪鄉中山路二段29號",
  "tel": 39887311,
  "area": "宜蘭縣",
  "city_area": "礁溪鄉"
 },
 {
  "store": "愛琳酒",
  "address": "宜蘭縣羅東鎮公正路289-1號",
  "tel": 39510209,
  "area": "宜蘭縣",
  "city_area": "羅東鎮"
 },
 {
  "store": "百晟行",
  "address": "宜蘭縣羅東鎮興東南路49號",
  "tel": 39560476,
  "area": "宜蘭縣",
  "city_area": "羅東鎮"
 },
 {
  "store": "光昌",
  "address": "宜蘭縣羅東鎮興東路9號",
  "tel": 39558286,
  "area": "宜蘭縣",
  "city_area": "羅東鎮"
 },
 {
  "store": "上暘洋菸酒",
  "address": "澎湖縣馬公市光復路142號",
  "tel": 69265576,
  "area": "澎湖縣",
  "city_area": "馬公市"
 }
]
/* harmony default export */ __webpack_exports__["default"] = (all_stores);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmNANC4wL2Fzc2V0cy9wbHVnaW5zL2phc29uX2RhdGEvbmV3c19saXN0LmpzIiwid2VicGFjazovLy8uL3NyY0A0LjAvYXNzZXRzL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXhTZXR1cCIsImNhY2hlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZG9uZSIsImRhdGEiLCJodG1sIiwiaGVhZGVyRnVuY3Rpb24iLCJnb1RvcCIsImFnZUdhdGVTd2l0Y2hlciIsInByaXZhY3lTd2l0Y2hlciIsImFncmVlbWVudFN3aXRjaGVyIiwidG9vbHNMaXN0ZW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibWVkaWFRdWVyeSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidG9nZ2xlIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5uZXJXaWR0aCIsImJyZWFrcG9pbnQiLCJvbiIsInJlc2l6ZSIsImFkZENsYXNzIiwicHJvcCIsImdldENvb2tpZSIsInVuZGVmaW5lZCIsInJlbW92ZUNsYXNzIiwic2V0Q29va2llWWVhciIsImdvVG9wU2hvdyIsImVsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsImdvVG9wRml4ZWQiLCJ0YXJnZXRFbCIsInRyaWdnZXJOdW0iLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwidGFyZ2VyTnVtIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwic2V0S3ZJbnRlcnZhbCIsImNhcm91c2VsIiwiaW50ZXJ2YWwiLCJzbGlja1N3aXRjaGVyIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsInNldHRpbmdzIiwidGFiIiwiJGxpbmsiLCJlcSIsImZpbmQiLCJhdHRyIiwic2libGluZ3MiLCJoaWRlIiwibm90IiwiY2hpbGRyZW4iLCJmYWRlSW4iLCJsb2FkIiwidGFiRml4ZWQiLCJzdHlsZSIsImNzc1RleHQiLCJmaXhTbWFydHBob25lMTAwdmgiLCJ2aCIsInNldFByb3BlcnR5IiwibmV3c0xpc3RWdWUiLCJQQUdFX1NJWkUiLCJGT09fREFUQSIsIm5ld3NfbGlzdCIsIlZ1ZSIsImNvbXBvbmVudCIsIlZ1ZWpzUGFnaW5hdGUiLCJ2dWUiLCJsaXN0ZGF0YSIsImN1cnJlbnRQYWdlIiwicGFnZUNvdW50IiwiY29tcHV0ZWQiLCJwYWdlZExpc3RkYXRhIiwidm0iLCJsZW5ndGgiLCJmaWx0ZXIiLCJ4IiwicGFnZSIsIndhdGNoIiwidmFsIiwiX3NldFBhZ2UyTW9kZWwiLCJmaWx0ZXJzIiwiZWxsaXBzaXMiLCJ2YWx1ZSIsImxlbiIsInNsaWNlIiwibWV0aG9kcyIsInBhcnNlSW50IiwiaSIsIiRzZXQiLCJwYWdlQ2FsbGJhY2siLCJjcmVhdGVkIiwic3RvcmVMaXN0VnVlIiwic2VjdGlvbnMiLCJzdG9yZXMiLCJzdG9yZXNfbGlzdCIsInNlbGVjdGVkX2FyZWEiLCJyb3dEYXRhIiwiZWxlbWVudCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNjcm9sbCIsImxhenlMb2FkIiwidGl0bGUiLCJpbWdTcmMiLCJ0ZXh0Q29udGVudCIsImFIcmVmIiwiYWxsX3N0b3JlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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Q0FqekhlLENBQW5CO0FBd3pIZUEseUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmNANC4wL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiLy8gYWpheCDphY3lkIhKUTMg5byV5YWl6Kit572uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuYWpheFNldHVwKHsgY2FjaGU6IGZhbHNlIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgIGhlYWRlckZ1bmN0aW9uKCk7XG4gIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19mb290ZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2Zvb3RlclwiKS5odG1sKGRhdGEpO1xuICAgIGdvVG9wKCk7XG4gICAgYWdlR2F0ZVN3aXRjaGVyKCk7XG4gICAgcHJpdmFjeVN3aXRjaGVyKCk7XG4gICAgYWdyZWVtZW50U3dpdGNoZXIoKTtcbiAgfSk7XG59KTtcbi8vIOmBuOWWrlxuZnVuY3Rpb24gdG9vbHNMaXN0ZW5lcigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdXNlTW91c2VcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJqcy11c2VLZXlib2FyZFwiKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImpzLXVzZUtleWJvYXJkXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzLXVzZU1vdXNlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZ1bmN0aW9uKCkge1xuICB2YXIgYnJlYWtwb2ludCA9IDc2ODtcbiAgdG9nZ2xlTW9iaWxlTWVudShicmVha3BvaW50KTtcbn1cbi8vIFtFbmRdIOmBuOWWrlxuLy/kvb/nlKjmop3mrL5cbmZ1bmN0aW9uIGFncmVlbWVudFN3aXRjaGVyKCkge1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIilbMV0ucmVtb3ZlKCk7XG4gICAgLy8gJCgnI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkJykuY3NzKFwicGFkZGluZy1yaWdodFwiLCBcIjE3cHhcIik7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAkKCcjYWdyZWVtZW50TW9kYWxDZW50ZXJfSWQnKS5jc3MoXCJwYWRkaW5nLWxlZnRcIiwgXCIwcHhcIik7XG4gICAgfSk7XG4gIH0pO1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xuICB9KTtcbiAgJChcIiNhZ3JlZW1lbnRCdXR0b25fSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNsZWdhbENoZWNrYm94X0lkXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICB9KTtcbn1cbi8v6Zqx57Wy5qyK5pS/562WKOmFjeWQiGFnZUdhdGUuanPoo6HpnaLnmoRzZXRDb29raWVZZWFyKCkpXG5mdW5jdGlvbiBwcml2YWN5U3dpdGNoZXIoKSB7XG4gIGlmIChnZXRDb29raWUoXCJwcml2YWN5X2RhbG1vcmVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIubC1mb290ZXItcHJpdmFjeVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAkKFwiI2FjY2VwdFByaXZhY3lfSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmwtZm9vdGVyLXByaXZhY3lcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICBzZXRDb29raWVZZWFyKFwicHJpdmFjeV9kYWxtb3JlXCIpO1xuICAgIH0pO1xuICB9XG59XG4vL2dvIHRvcFxuZnVuY3Rpb24gZ29Ub3BTaG93KCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtZm9vdGVyLWdvVG9wIGFcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCkge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXItZ29Ub3AgYVwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgLy/nva7poILmjInpiJXnmoTmjbLli5XpgJ/luqZcbiAgICAkKFwiLmwtZm9vdGVyLWdvVG9wIGFcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3BGaXhlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3RlclwiKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3Rlci1nb1RvcCBhXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgdHJpZ2dlck51bSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRyaWdnZXJOdW0gPT0gXCIgKyB0cmlnZ2VyTnVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgKGVsLm9mZnNldFRvcCArIChlbC5vZmZzZXRIZWlnaHQgLyAzKSkpO1xuICAgIHZhciB0YXJnZXJOdW0gPSBlbC5vZmZzZXRUb3A7XG4gICAgaWYgKHRyaWdnZXJOdW0gPj0gdGFyZ2VyTnVtICsgZWwub2Zmc2V0SGVpZ2h0IC8gMS41KSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKFwianMtYWNpdHZlXCIpO1xuICAgIH1cbiAgfVxufVxuLy9bRW5kXSBnbyB0b3Bcbi8vIOmmlumggei8quaSrVxuZnVuY3Rpb24gc2V0S3ZJbnRlcnZhbCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdlwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJChcIiNrdlwiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaWNrU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImFqYXgvX3Byb2R1Y3RJbnBhZ2Vfc2xpY2suaHRtbFwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpLmh0bWwoZGF0YSk7XG4gICAgICAkKFwiLnYtc2xpY2tcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4vL+eUouWTgemggXRhYlxuZnVuY3Rpb24gdGFiKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtdGFiXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgJGxpbmsgPSAkKFwiLnRhYi1saXN0IC50YWItYnRuXCIpO1xuICAgICQoJGxpbmsuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcImFcIikuYXR0cihcImhyZWZcIikpXG4gICAgICAuc2libGluZ3MoXCIudGFiLWNvbnRlbnRcIilcbiAgICAgIC5oaWRlKCk7XG4gICAgJGxpbmsuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChcImh0bWwsYm9keVwiKS5zY3JvbGxUb3AoMCk7XG4gICAgICAvLyAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIDEwMDBcbiAgICAgIC8vICk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi50YWItbGlzdCAudGFiLWJ0blwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKCQodGhpcykuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJocmVmXCIpKVxuICAgICAgICAuZmFkZUluKClcbiAgICAgICAgLnNpYmxpbmdzKFwiLnRhYi1jb250ZW50XCIpXG4gICAgICAgIC5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmpzLWNsYXNzaWNcIikubG9hZChcImFqYXgvX3Byb2R1Y3RfY2xhc3NpYy5odG1sXCIpO1xuICAgICQoXCIuanMtb2xkXCIpLmxvYWQoXCJhamF4L19wcm9kdWN0X29sZC5odG1sXCIpO1xuICAgICQoXCIuanMtbGltaXRlZFwiKS5sb2FkKFwiYWpheC9fcHJvZHVjdF9saW1pdGVkLmh0bWxcIik7XG4gIH1cbn1cbi8v55Si5ZOB6aCBdGFiRml4ZWRUb3BcbmZ1bmN0aW9uIHRhYkZpeGVkKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtcHJvZHVjdC10YWJcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93LnBhZ2VZT2Zmc2V0ID09IFwiICsgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgZWwub2Zmc2V0VG9wKTtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGVsLm9mZnNldFRvcCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImpzLWFjaXR2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcInBhZGRpbmctdG9wOiBjYWxjKDcycHggKyA2OXB4KVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG4vL+ino+axuuaJi+apn+S4iiBzYWZhcmksIGNocm9tZSDngI/opr3lmaggMTAwdmgg54Sh5rOV5Ymb5aW95LiA5pW06aCB55qE5ZWP6aGMXG5mdW5jdGlvbiBmaXhTbWFydHBob25lMTAwdmgoKSB7XG4gIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmhcIiwgYCR7dmh9cHhgKTtcbn1cbi8v5pyA5paw5raI5oGvdnVlXG5pbXBvcnQgbmV3c19saXN0IGZyb20gXCIuLi9wbHVnaW5zL2phc29uX2RhdGEvbmV3c19saXN0LmpzXCI7XG5mdW5jdGlvbiBuZXdzTGlzdFZ1ZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdzUGFnaW5hdGlvbl9JZFwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgUEFHRV9TSVpFID0gODsgLy/kuIDlgIvpoIHpnaLopoHpoa/npLrlpJrlsJHnrYbos4fmlplcbiAgICBjb25zdCBGT09fREFUQSA9IG5ld3NfbGlzdDtcbiAgICBWdWUuY29tcG9uZW50KFwicGFnaW5hdGVcIiwgVnVlanNQYWdpbmF0ZSk7XG4gICAgY29uc3QgdnVlID0gbmV3IFZ1ZSh7XG4gICAgICBlbDogXCIjbmV3c1BhZ2luYXRpb25fSWRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlzdGRhdGE6IFtdLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZUNvdW50OiAxLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2VkTGlzdGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICh2bS5saXN0ZGF0YSAmJiB2bS5saXN0ZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0ubGlzdGRhdGEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB4LnBhZ2UgPT09IHZtLmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSAvLyDlpoLmnpxsaXN0ZGF0Yeacieizh+aWmVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBsaXN0ZGF0YTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3NldFBhZ2UyTW9kZWwoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGVsbGlwc2lzKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgbGVuID0gMTE3O1xuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCBsZW4pICsgXCIuLi5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgX3NldFBhZ2UyTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICghdm0ubGlzdGRhdGEgfHwgdm0ubGlzdGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9XG4gICAgICAgICAgICAgIHBhcnNlSW50KHZtLmxpc3RkYXRhLmxlbmd0aCAvIFBBR0VfU0laRSkgK1xuICAgICAgICAgICAgICAodm0ubGlzdGRhdGEubGVuZ3RoICUgUEFHRV9TSVpFID4gMCA/IDEgOiAwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm0ubGlzdGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdm0uJHNldCh2bS5saXN0ZGF0YVtpXSwgXCJwYWdlXCIsIHBhcnNlSW50KGkgLyBQQUdFX1NJWkUpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYWdlQ2FsbGJhY2s6IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICB0aGlzLiRzZXQodm0sIFwiY3VycmVudFBhZ2VcIiwgcGFnZSk7XG4gICAgICAgICAgLy8g6K6TIGN1cnJlbnRQYWdlIOetieaWvCBwYWdlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0ubGlzdGRhdGEgPSBGT09fREFUQTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbi8v5ZWG5bqX5YiX6KGoVnVlXG4vL2ltcG9ydCBzdG9yZXNfbGlzdCBmcm9tICcuLi9wbHVnaW5zL2phc29uX2RhdGEvc3RvcmVzX2xpc3QuanMnO1xuaW1wb3J0IHN0b3Jlc19saXN0IGZyb20gXCIuLi9wbHVnaW5zL2phc29uX2RhdGEvc3RvcmVzX2xpc3QuanNcIjtcbmZ1bmN0aW9uIHN0b3JlTGlzdFZ1ZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9yZUZpbHRlcl9JZFwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgdnVlID0gbmV3IFZ1ZSh7XG4gICAgICBlbDogXCIjc3RvcmVGaWx0ZXJfSWRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdG9yZXM6IHN0b3Jlc19saXN0LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdGVkX2FyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICByb3dEYXRhKGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uc1swXS5zdG9yZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgZWxlbWVudFtcImFyZWFcIl0gPT0gZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFtcImFyZWFcIl0gPT0gZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbi8v5ZG85Y+rZnVuY3Rpb24t57ay6aCB6LyJ5YWl5a6M5oiQ5b6MXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHRvb2xzTGlzdGVuZXIoKTtcbiAgc2V0S3ZJbnRlcnZhbCgpO1xuICBzbGlja1N3aXRjaGVyKCk7XG4gIHRhYigpO1xuICB0YWJGaXhlZCgpO1xuICBuZXdzTGlzdFZ1ZSgpO1xuICBzdG9yZUxpc3RWdWUoKTtcbiAgZml4U21hcnRwaG9uZTEwMHZoKCk7XG59KTtcbi8v5ZG85Y+rZnVuY3Rpb24t6KaW56qX5aSn5bCP6K6K5pu0XG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHt9KTtcbi8v5ZG85Y+rZnVuY3Rpb24t5o2y5YuVXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgdGFiRml4ZWQoKTtcbiAgbGF6eUxvYWQoKTtcbn0pO1xuIiwiY29uc3QgbmV3c19saXN0ID0gW3tcbiAgICB0aXRsZTogJ+Wkp+aRqeWFuOiXj+ePjeeogOW5tOS7vTxicj7lhbjol4/mnKjnm5Lnjajnjbvlj7DngaMnLFxuICAgIGltZ1NyYzogJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMS53ZWJwJyxcbiAgICB0ZXh0Q29udGVudDogJ+WdkOaTgeiYh+agvOiYreacgOWPpOiAgeapoeacqOahtuiXj+eahOOAjOiAgemFkumKgOihjOOAjeWkp+aRqemFkuW7oO+8jOeZvOW4g+WFqOaWsOezu+WIl+OAiuWkp+aRqeWFuOiXj+ePjeeogOW5tOS7veezu+WIlyBUaGUgRGFsbW9yZSBWaW50YWdlc+OAi+atoeaFtumHgOmFkuW3peiXneiHs+mrmOaIkOWwse+8jOmZkOmHj+mFkuasviBWaW50YWdlIDIwMDLjgIFWaW50YWdlIDIwMDUg5bCH5Zyo54m55a6a5Lqe5rSy5biC5aC06aCQ5YWI5pud5YWJ77yM5YaN5b6A5YWo55CD5ZCE5aSn5Z+O5biC55m85biD77yM6ICM5bCa5qC86YWS5qWt5pu05bCH6ZmQ6YeP57K+6KOd5pyo55uS54mI5pys542o54275Y+w54Gj77yM5pC25YWI5YWo55CD6aaW55m85LiK5biC44CCJyxcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTAxLmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkakyMDIy6Y6P6YeR5aWi5bGVPGJyPumbi+iXj+Wlp+iXnWzogIHphZLpioDooYwnLFxuICAgIGltZ1NyYzogJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMi53ZWJwJyxcbiAgICB0ZXh0Q29udGVudDogJ+OAjOWkp+aRqTIwMjLpjo/ph5HlpaLlsZXjgI3mlrwwMeaciDEz5pel5bGV5Ye66IezMDHmnIgyM+aXpeaWvOWPsOWMl+W+rumiqOWNl+WxseiXneaWh+S4reW/g++8jOmZkOacn+WxleWHujEx5aSp44CC5Lul44CM6ICB6YWS6YqA6KGM44CN6YeR5bqr5aSn6ZaA5Y+K6Y6P5YWJ54ag54ag55qE5L+d6Zqq5quD77yM4oCL5YW25Lit5a2Y5pS+6JGX5L6G6Ieq5pmC5YWJ5res6Y2K55qE5aSn5pGp5q235Y+y6YeM56iL56KR5Y+K54+N56iA6YWS5ray54K65bGV6Ka96Kit6KiI5qC45b+D5qaC5b+177yM5ryU57m55aSn5pGp6L+R5YWp55m+5bm05L6G55qE6YWS5bug5q235Y+y44CB5Lq65paH57K+56We44CB5qW16Ie05bel6Jed77yM5rex5bqm5o6i56m25pmC6ZaT5rKJ5r6x5LiL55qE6Z2e5Yeh5YO55YC844CCJyxcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTAyLmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICfnqIDkuJbnj43lk4HlpKfmkak2MuW5tDxicj7lho3noLTmi43os6PntIDpjIQnLFxuICAgIGltZ1NyYzogJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMy53ZWJwJyxcbiAgICB0ZXh0Q29udGVudDogXCLomIflr4zmr5TmlrwyMDIw5bm0NeaciDE05pel5bGV6ZaL5LiA5aC05ZCN54K66bue5ru05oiQ6YeR55qE57ea5LiK54OI6YWS5ouN6LOj5pyD77yM5YWx5pyJMjE26aCF5aiB5aOr5b+M44CB5bmy6YKR562J54OI6YWS54+N56iA5ouN5ZOB44CC5q2k5ouN6LOj5bey5pa85YCr5pWm5pmC6ZaTMjAyMOW5tDXmnIgyOOaXpeaZmuS4ijjpu57ntZDmnZ/vvIzkuKbnlLHlhannk7blpKfmkak2MuW5tOS7pemgkOS8sOWDueWFqeWAjeWkmueahOmrmOWDueS4puWIl+aIkOeCuuatpOaLjeizo+acg+acgOmrmOaLjeWDueeahOePjeWTge+8jOaIkOS6pOWDueWQjOeCuiBHQlDCozI2NiwyMDDoi7Hpjooo57SE5Y+w5bmjMTAwMOiQrCnjgILjgIzlpKfmkak2MuW5tO+8jOS4gOa7tOmDveS4jeiDvea1quiyu+OAguOAje+8iERhbG1vcmUgNjIg4oCTY2FuJ3QgbGV0IGEgZHJvcCBoaXQgdGhlIGZsb29y77yB77yJ77yM6YCZ5Y+l5L6G6Ieq6Zu75b2x44CK6YeR54mM54m55YuZ44CL55qE57aT5YW45bCN55m977yM6Kqq5piO5LqG5aSn5pGp5aiB5aOr5b+M55qE5b2M6Laz54+N6LK077yM5pu05bGi5bGi57eg6YCg5ouN6LOj5biC5aC05LiN5py95YKz5aWH44CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wMy5odG1sJ1xufSwge1xuICAgIHRpdGxlOiAn5q2h5oW25aSn5pGp6YWS5bugMTgw5bm0PGJyPumbquiOiTEy5bm06ama6LGU5LiK5biCJyxcbiAgICBpbWdTcmM6ICdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDQud2VicCcsXG4gICAgdGV4dENvbnRlbnQ6IFwi6JiH5qC86Jit6auY5Zyw5Y2A55qE44CM6ICB6YWS6YqA6KGM44CN5aSn5pGp6YWS5bug5ZyoMjAxOeW5tOacq+atoeW6pjE4MOatsueUn+aXpe+8jOmAmeWgtOS4lue0gOaFtueUn+aMgee6jOWIsDIwMjDlubTvvIzku43orpPlhajnkIPlqIHlo6vlv4zluILloLToiIjlpa7kuI3lt7LvvIzlpKfmkankuI3lj6rmjqjlh7rntIDlv7XovJ3nhYzmmYLliLvnmoQxODDpgLHlubTntIDlv7XphZLilIDilIDlhajnkIPpmZDph4/kuInnk7bnmoTlpKfmkak2MOW5tOWWruS4gOm6peiKveWogeWjq+W/jO+8jOS4puS4iuW4guebruWJjeacgOmrmOW5tOS7veeahOWkp+aRqTUx5bm06IiH5YWo5paw44CM6Zuq6I6J55SE6YG457O75YiX44CNMTLlubTllq7kuIDpuqXoir3lqIHlo6vlv4zvvIzkuI3lg4XlpoLmraTvvIzlpKfmkanlhajns7vliJfljIXoo53kuZ/lhajpnaLmj5vmlrDoo53vvIzoqK3oqIjmm7Tpoa/lsIrmpq7lpaLoj6/vvIzpgoDoq4vlhajkuJbnlYzphZLov7fkuIDlkIzmhbbnpZ3lpKfmkanlqIHlo6vlv4zotbDlhaXkuIvkuIDlgIsxODDlubTjgIJcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA0Lmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkak1MOW5tOePjeeogOeZu+WgtDxicj7pppblibXlhaXpppnmqrPmobYnLFxuICAgIGltZ1NyYzogJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNS53ZWJwJyxcbiAgICB0ZXh0Q29udGVudDogXCLngrrkuoboqozmhbblpKfmkanvvIhUaGUgRGFsbW9yZe+8ieWWruS4gOm6peiKveWogeWjq+W/jOmmluW4remHgOmFkuW4q1JpY2hhcmQgUGF0ZXJzb27vvIzoh6oxN+atsui4j+mAsuWogeWjq+W/jOmgmOWfn++8jDI25q2y55W25LiK5aSn5pGp6aaW5bit6YeA6YWS5bir6Iez5LuK5bGG5ru/NTDlubTvvIzpgJnkvY3ntKDmnInjgIznpZ7kuYvpvLvjgI3nvo7orb3nmoTlqIHlo6vlv4zlpKfluKvku6XntK/nqY01MOW5tOeahOi8neeFjOijvemFkuaIkOWwse+8jOaCieW/g+aJk+mAoOS4gOasvuWPsueEoeWJjeS+i+eahOWkp+aRqTUw5bm05aSn5bir5YW46JeP5Zau5LiA6bql6Iq96JiH5qC86Jit5aiB5aOr5b+M77yM5YWo55CD6ZmQ6YeP55m86KGMNTDnk7ZcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA1Lmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkannr4nlhYnlpKfluKvns7vliJdOby4xPGJyPuaUnOaJi+maiOeglOWQvuWGjeWJtemrmOWzsCcsXG4gICAgaW1nU3JjOiAnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA2LndlYnAnLFxuICAgIHRleHRDb250ZW50OiBcIuWFqOeQg+eqluiXj+acgOeogOacieWogeWjq+W/jOeahOOAjOiAgemFkumKgOihjOOAjeWkp+aRqemFkuW7oO+8jOi/keW5tOS+huiIh+iYh+agvOiYreesrOS4gOW6p+ioreioiOWNmueJqemkqFYmQSBEdW5kZWXlkIjkvZzlr4bliIfvvIzkv4PmiJDnlbbku6Plu7rnr4nlpKfluKvoiIflqIHlo6vlv4zlpKfluKvnmoTljZTkvZzvvIzkuKbmlrwyMDIy5bm05LiK5biC5YWo5paw6YWS5qy+57O75YiX77yM44CM5aSn5pGp56+J5YWJ5aSn5bir57O75YiX44CN44CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wNi5odG1sJ1xufSwge1xuICAgIHRpdGxlOiAn5aSn5pGp56+J5YWJ5aSn5bir57O75YiXTm8uMTxicj4yMDIy6ZmQ5a6a54mIIOmZkOmHj+mmlueZvCcsXG4gICAgaW1nU3JjOiAnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA3LndlYnAnLFxuICAgIHRleHRDb250ZW50OiBcIummluWJteS7peS4ieeoruePjeeogOapoeacqOahtu+8jOiYh+agvOiYreapoeacqOahtiAoVGF5IE9haynjgIHml6XmnKzmsLTmpaLmobblkoznvo7lnIvnmb3mqaHmnKjmobbvvIzoqILoo73miJDjgIzph5HnubzjgI3vvIhLaW50c3Vnae+8ieapoeacqOahtu+8jOS4pumZs+mHgOWHuuWFt+acieWkmumHjeeNqOeJuemiqOWRs+S4lOWujOe+juW5s+ihoeeahOWWruS4gOm6peiKveWogeWjq+W/jO+8jOWFqOeQg+mZkOmHjzE1LDAwMOeTtuOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDcuaHRtbCdcbn0sIHtcbiAgICB0aXRsZTogJ+Wkp+aRqeWFuOiXj+ePjeeogOW5tOS7vTxicj7pm4vmsLjmmYLlhYnlrprnvqnnj43nqIAnLFxuICAgIGltZ1NyYzogJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wOC53ZWJwJyxcbiAgICB0ZXh0Q29udGVudDogXCLmk4HmnInmnIDlsIrosrTlqIHlo6vlv4znmoTlpKfmkanphZLlu6DvvIzljrvlubTnmbzluIPlhajmlrDns7vliJfjgIrlpKfmkanlhbjol4/nj43nqIDlubTku73ns7vliJcgVmludGFnZXMgMjAwMi8yMDA144CL5q2h5oW26YeA6YWS5bel6Jed6Iez6auY5oiQ5bCx77yM5Lul6ZmQ6YeP57K+6KOd5pyo55uS54mI5pys542o54275Y+w54Gj77yM5oiQ54K65Y675bm05pyA54ax6ZaA55qE5pS26JeP6Kmx6aGM44CCXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wOC5odG1sJ1xufV07XG5leHBvcnQgZGVmYXVsdCBuZXdzX2xpc3QiLCJjb25zdCBhbGxfc3RvcmVzID0gW1xuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumAsuebilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLln7rpmobluILku4HmhJvljYDmhJvkuIDot68xOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI0MjItNDg0NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLln7rpmobluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pm26bS7XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWfuumahuW4guWfuumHkeS4gOi3rzExN+S5izE56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjQzNC03MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWfuumahuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpioDnm6Qt5aOr5p6XXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWjq+ael+WNgOWkp+WMl+i3rzg16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjg4MS02ODI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmib/lkIhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A5paH5p6X6LevNTg35be3MTE16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjgzMi0yOTExXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlsZXlrrhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A56aP5riv6KGXMTQ55be3MTXlvIQ46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjg4MS01ODE4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlionmgYboo5VcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5ZCM5Y2A5rCR55Sf6KW/6LevMzQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjU1Ni0wOTQ4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuLnpqLBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5aSn5a6J6Lev5LiA5q61MzHlt7cxOeiZn0PlrqRcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzA0LTM1MDdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiyt+mFkue2si3ku4HmhJvploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5LuB5oSb6LevNOautTI56JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg3NzMtMjYwN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rSL6YWS5Z+OLeS7geaEm1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDku4HmhJvot6/lm5vmrrUxMTLlt7cyMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3MDktNTE2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YeR6YeAXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWkp+WuieWNgOS7geaEm+i3r+Wbm+autTQxMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3NzItMDEwMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi54+I5ZOBXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWkp+WuieWNgOawuOW6t+ihlzQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjM1Ny04NzcyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkvbPos4DmtIvooYwt5bu25ZCJ5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWkp+WuieWNgOW7tuWQieihlzEyOC0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjc3OS0wODY2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlurfpvaHphZLol48t6YGg5p2xU09HT+W/oOWtneW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDlv6DlrZ3mnbHot6/lm5vmrrU0NeiZn0IyXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjc0MC0zNzU4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLosrfphZLntrIt5Y+k5Lqt6ZaA5biCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWkp+WuieWNgOadreW3nuWNl+i3r+S6jOautTEwN+iZnzHmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMzkxLTA3MDBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS9s+izgOa0i+ihjC3ku4HmhJvlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5p2x6LGQ6KGXMjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMzI1LTYyNTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIue+juWkmuWuolwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDmnbHosZDooZc3N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3MDgtODcyMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z6LOA5rSL6KGMLeS/oee+qeW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDkv6Hnvqnot6/kuInmrrUxMjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzA4LTA1ODNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaPkOeRqlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDkv6Hnvqnot6/lm5vmrrUyNTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzAwLTAyNTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiyt+mFkue2si3kv6HnvqnploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5L+h576p6Lev5Zub5q61MjY36JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3MDMtMDIzM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6LK36YWS57ayLeaVpuS4gOmWgOW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILlpKflronljYDmlabljJbljZfot6/kuIDmrrUxOTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzExLTAwMTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiyt+mFkue2si3mlabkuozploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5pWm5YyW5Y2X6Lev5LqM5q61OTjomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjcwOC0wNzUxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpo5vkuYVcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5YyX6Lev5YWt5q61MjfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yODMyLTEwOTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiyt+mFkue2si3kuK3lsbHploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5Lit5bGx5YyX6Lev5LqM5q61NDbomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjUzMS05NzUxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmsLjliKnoj7jphZLooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5rCR55Sf5p2x6Lev5LqM5q61NznomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNTIzLTgwMTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuafj+mBlOa0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDmsJHmrIrmnbHot6/kuozmrrUxNTLlt7cyMuW8hDLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNTA5LTg0ODBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiyt+mFkue2si3mnb7msZ/ploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTMx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjUxNi0xOTE2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpmb3lhYnnvo7phZLologt5L2z6YaHXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guS4reWxseWNgOadvuaxn+i3rzE46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjU4MS04NTIwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmqaHmnKjmobbmnb7msZ/lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTkw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjU2Mi04MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpioDosZBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p6X5qOu5YyX6LevMTMz5be3NjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNTExLTY4MDRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWYieWIqVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDmnpfmo67ljJfot680MzjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNTYzLTM5NjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWlveeqqVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDplbflronmnbHot6/kuozmrrUyODbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04NzcyLTAwMTRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadvuael+a0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6/kuozmrrUyMeW3tzjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNTMxLTU3NDFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuapmOWtkOmFkuWdii3pmL/niL7nmbxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5b6p6IiI5YyX6LevNTE05be3MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI1MDQtNzEyM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6LK36YWS57ayLeW+qeiIiOmWgOW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDlvqnoiIjljJfot684NOiZnzHmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzUyLTU5OTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS9s+izgOa0i+ihjC3lhYnoj6/lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5rit5rC06LevNTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzExLTYxMThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumHkeebg1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3lsbHljYDmlrDnlJ/ljJfot6/kuozmrrU2MuW3tzQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjU4MS0xNjUxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlsI/lha1cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Lit5q2j5Y2A5Lit6I+v6Lev5LqM5q61MzEx5be3NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MzUtMzE1LTMwOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5LiW55WMLeS4reato1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3mraPljYDkuK3oj6/ot6/kuozmrrUzMTPlt7cxNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIzMzctNjY2NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5bq36b2h6YWS6JePLeaWsOWFieS4iei2iuermeWJjeW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkuK3mraPljYDlv6DlrZ3opb/ot6/kuIDmrrU2NuiZn0IyXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjM3MS0zOTkyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuIPkuInkuINcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5YWn5rmW5Y2A5YWn5rmW6Lev5LiA5q61NzM35be3NTHlvIQz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjY1Ny05MTMwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLngYPlp7XphZLmpa1cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5YWn5rmW5Y2A5a6J5bq36LevNDIy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjYzMS01NzYxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLosrfphZLntrIt5YWn5rmW5peX6Imm6ZaA5biCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guWFp+a5luWNgOihjOaEm+i3rzc35be3NjnomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODc5Mi01MTg2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfosaHlj7DnjpZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5paH5bGx5Y2A5L+d5YSA6LevMTI06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjkzOS0zNDM5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuJbpgZRcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5YyX5oqV5Y2A5paH5p6X5YyX6LevMTc26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjgyMy01Nzc3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmtbfntI3lt51cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5ZCJ5p6X6LevMjI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjU4MS04NTkwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvI7osZBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5bu25ZCJ6KGXNjLlt7c25byEMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg3NzItODgyMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aW96YWS5aSaXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guadvuWxseWNgOWFq+W+t+i3r+Wbm+autTIwMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3NjgtMTc4NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5LiA6YWS5LiD5LqUXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guadvuWxseWNgOW4guawkeWkp+mBk+S6lOautTEyN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3NjgtMTk3NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6LK36YWS57ayLeawkeeUn+mWgOW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILmnb7lsbHljYDmsJHnlJ/mnbHot6/lm5vmrrU1OOiZnzHmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzE4LTg4MjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW6t+WWnOWuoi3mnb7lsbFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5p2+5bGx5Y2A5YWJ5b6p5YyX6LevMTM26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODc3MC03NTU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfokaHlnJJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5p2+5bGx5Y2A5pWm5YyW5Y2X6Lev5LiA5q61MTAyLTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzAyLTUwNTNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS9s+izgOa0i+ihjC3msLjlkInlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5L+h576p5Y2A5rC45ZCJ6LevMTIw5be3OTDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi03NzI5LTQ5OTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuayg+WIqeeJuVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkv6HnvqnljYDmsLjlkInot68yNzjlt7cyLTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTMzLTQ3NS0yMTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS9s+izgOa0i+ihjC3lv6DlrZ3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5L+h576p5Y2A5b+g5a2d5p2x6LevNuautTM4NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI2NTEtOTkzOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5bq36b2h6YWS6JePLeWPsOWMl+W/oOS6lOmWgOW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkv6HnvqnljYDlv6DlrZ3mnbHot6/kupTmrrU1MDTomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjcyNi0wODY4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLosrfphZLntrIt5biC5pS/5bqc6ZaA5biCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guS/oee+qeWNgOW/oOWtneadsei3r+S6lOautTUx6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3NjktNjA5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5oyv5a6c5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guS/oee+qeWNgOW/oOWtneadsei3r+WFreautTQ5MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI2NTEtMTMyOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rW35Z+O6I+46YWSLeadvuWxseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILkv6HnvqnljYDmnb7lsbHot68yODnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNzY1LTkzNjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotorkv6HnvqlBMTFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5L+h576p5Y2A5p2+5aO96LevMTHomZ9CMlwiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3MjItMjMxN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5b+g5L2z5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guS/oee+qeWNgOadvuW+t+i3rzI4N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI3NTktNzUzM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qWg6IiIXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guS/oee+qeWNgOS/oee+qei3r+WFreautTkx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjcyOC0yNzc1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HnkZ7miJBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Y2X5riv5Y2A5b+g5a2d5p2x6Lev5LiD5q61NjAx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjc4Ni0yMjM5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmt7vphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5Y2X5riv5Y2A5p2x6IiI6KGXOTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTY1LTQzNS0xNDVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWPi+e+jlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILljZfmuK/ljYDoiIrojorooZfkuozmrrUz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjc4Mi04NDY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmIzlr4zoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5aGU5oKg6LevMTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0zNzY1LTU4OTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiQrOiPr+eFmemFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljJfluILokKzoj6/ljYDlkozlubPopb/ot6/kuInmrrUxMDPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMzAyLTc4OTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumiqOagvC3lkozlubNcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5ZKM5bmz6KW/6Lev5LiJ5q61MTYz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjMzNi0xNzU5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvYrms7DmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5piG5piO6KGXMTUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjMzMS01MTQ3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLlnIvlpKfkuqhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5Y2X5a+n6LevNDUtMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIzMDYtMDEwMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+M55ubXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guiQrOiPr+WNgOafs+W3nuihlzM46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjMzMS0zMjY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLokKznm4pcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5p+z5bee6KGXNDAtMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIzODItMTY2NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6aex5YyX5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWMl+W4guiQrOiPr+WNgOiytOmZveihl+S6jOautTE2NOW3tzMy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjM4My0yMjAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5Hmt6xcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5YyX5biC5buj5bee6KGXMjAy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjMwOC01NjQ3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpmL/nsbPlj69cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LiJ5ZKM6LevNOautTI5MuW3tzEz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjI4MC03MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmgYbnlJ/llYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LiJ6Zm96LevMzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04OTgyLTkyOTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuizo+mFkuWdilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuInph43ljYDlpKfmpq7ooZc56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODk4MS02NjcwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLosarkuYVcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5Lit5q2j5YyX6LevMTbomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjk4MC0yNDUwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLku5/mgalcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LqU6I+v6KGXMTEw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjk4OS02NjMzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuInnpr7oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LuL5aO96LevMTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTcyLTI3OTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiQrOazsFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuInph43ljYDmsJHnlJ/ooZc3MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI5ODMtMTkyNFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a6P6IGyXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS4iemHjeWNgOiHquW8t+i3r+S6jOautTIz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODk4OC0zMjAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5Hnm4jphZLol48t5b+g5a2d5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS4iemHjeWNgOW/oOWtnei3r+S4ieautTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTg5LTA5ODZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+almlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuInph43ljYDpgLLlronooZc0MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI4NTctODk1N1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWo5YSE6I+46YWS5pyJ6ZmQ5YWs5Y+4XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS4iemHjeWNgOmbhue+juihlzIzNC0yMzYtMjM46JmfMUZcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTc3LTA0NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkumljFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuInph43ljYDnpo/pmobot68z6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjI4MC05NjY2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuYXlgKvphZLlnIvoga/ou41cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ6YeN5Y2A6ZuZ5ZyS6KGXMTM06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODk4MS03NzA3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlsJrls7BcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5LiJ5bO95Y2A5aSn5YuH6LevMTXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNjcyLTk3ODZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuato+iqoOihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuInls73ljYDlnIvlhYnooZczODbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNjczLTE1MTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum6peW+t+eQhi3lnJ/ln47lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5Zyf5Z+O5Y2A5Lit5aSu6Lev5LiA5q61MTcw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODI2MS02MzI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlnJ/ln47phZLluqst5amV5769XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guWcn+WfjuWNgOS4reato+i3rzY06JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTgyNjEtNTEwMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z6LOA5rSL6KGMLeS4reWSjOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuK3lkozljYDkuK3lsbHot6/kuozmrrU0MDEtMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyMjgtNjk4MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z6LOA5rSL6KGMLeeSsOeQg+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuK3lkozljYDkuK3lsbHot6/kuInmrrU5OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyMjYtOTk5MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a6H6YeAXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS4reWSjOWNgOiHqueri+i3rzk55be3MTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTQ3LTU1NTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS6rOe/sFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuK3lkozljYDlk6HlsbHot680MDDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMjI4LTk4OTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIueRnumosOaBhuWkp1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILkuK3lkozljYDojpLlhYnot681NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyMjMtNTc4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZiJ5bGVXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS4reWSjOWNgOaZr+W5s+i3rzU3NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyNDMtODM2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56uL6JCs6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS6lOiCoeWNgOaIkOazsOi3r+S4ieautTE2MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyOTEtODgzN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5LiJ6I+vXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guS6lOiCoeWNgOabtOa0sui3rzIzLTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMjgyLTExMTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWvjOa3r+eFmemFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmsLjlkozljYDkuK3mraPot68zODPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTI2LTIxODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWupee/lFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmsLjlkozljYDmsJHkuqvooZc36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjIyOC05ODc3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkvbPos4DmtIvooYwt5qiC6I+v5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guawuOWSjOWNgOawuOWSjOi3r+S4gOautTEyN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTI5MjYtNzEwOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z6YeASSBDSEVFUlMg5oSb6YWS56qpXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guawuOWSjOWNgOaIkOWKn+i3r+S4gOautTgw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjkyNi0zNjY3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlkI3phZLpm4ZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5rC45ZKM5Y2A5oiQ5Yqf6Lev5LiA5q61OTPlt7cyM+W8hDEz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjIzMi00MTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCIxNjjphZLmpa1cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5rC45ZKM5Y2A5L+d56aP6Lev5LqM5q61NjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTU4LTEzNS05MjVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIui/qumBlFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmsLjlkozljYDnpo/lkozot68xMzHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTE2LTMzMy05MzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWYiei+sFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmsZDmraLljYDlurflr6fooZc1MTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNjk1LTY2OTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuamruamruiPuOmFkuWwiOizo+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmnb/mqYvljYDlpKfku4HooZc0MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyNzItMDEwMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6Jaw5bWQ6I+46YWSLeWxlemghjLlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5p2/5qmL5Y2A5aSn6KeA6LevMuautTEx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjk2Ny03Nzc5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkvbPos4DmtIvooYwt5p2/5paw5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guadv+api+WNgOS4reWxsei3r+S6jOautTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04OTUzLTg5NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum+jeWQiFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmnb/mqYvljYDlm5vlt53ot6/kuIDmrrU46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDk3MC02NjYtMTI2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoppPkuZ3mtIvphZLooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5p2/5qmL5Y2A5rCR5peP6LevMTQ36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjk1NS04ODg5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmK3mpa1cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5p2/5qmL5Y2A6Zuo6L6y6LevNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyNTUtNTAxMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5q2j55CqXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guadv+api+WNgOmHjeaFtui3rzI5MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg5NTMtMzYwMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5rW35ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guadv+api+WNgOiytOiIiOi3rzHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTUwLTQ1MTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWxlemghlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmnb/mqYvljYDlg5HkuK3kuIDooZcxMjbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yOTY2LTExNjdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumHkeebiOmFkuiXjy3ms7DlsbHlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5rOw5bGx5Y2A56aP6IiI5LiJ6KGXMzLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04NTMxLTIyODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWVpOmFkuWkp+WtuC3nq7nlnI3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5reh5rC05Y2A5rCR5qyK6LevMTc3LTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04NjMxLTQzMjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumWi+e/lFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmt6HmsLTljYDlrbjlupzot682MC0z6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjYyMC0yMDgwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvI7ntJrntrJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5rex5Z2R5Y2A5YyX5rex6Lev5LiJ5q61MTEx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjY2NC00ODg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmKXms7BcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw5bqX5Y2A5Lit6IiI6Lev5LiA5q61Mjkx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjkxNy01MTU5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmlrDlupfmnY5cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw5bqX5Y2A5a6J5bq36Lev5LqM5q61MzU56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjIxNS02NTU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmupBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw5bqX5Y2A6LuK5a2Q6LevMTIx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODU1NS01Mzk1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmgYbkuJbogZbpvI5cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw6I6K5Y2A5Lit5aSu6LevMjIw6JmfNOaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg1MjItMzkwMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56Wl54m55YipLeixiuaji1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmlrDojorljYDkuK3lubPot68zMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg5OTMtNjEzN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Y+h6bS7XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guaWsOiOiuWNgOS4reato+i3rzg5OS0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkxOC0zMjYtOTAzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLllpzmsoXllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw6I6K5Y2A5Lit5ZKM6KGXODTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04OTk0LTE2MzJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWcnOahguahtlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmlrDojorljYDkuK3oqqDooZc0NuW3tzTlvIQx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjk5MC01MTAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmrZDmtLLphZLpm4ZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw6I6K5Y2A56uL5L+h5LiA6KGXNTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMjc2LTg4OThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaWsOiOiuaYjOWvjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmlrDojorljYDmlrDmqLnot68yMjbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yMjA0LTA2OTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum6peW+t+eQhi3mlrDojorlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC5paw6I6K5Y2A6b6N5a6J6KGXMjI26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItMjIwOC01MTE2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLkuJbnlYwt5qi55p6XXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOWMl+W4guaoueael+WNgOS4reiPr+i3rzIzM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTg2ODYtODc2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ou/56C05bSZLeaoueael1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILmqLnmnpfljYDkv53lronooZfkuozmrrUyLTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi0yNjc1LTA3ODBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuitveaPmlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILomIbmtLLljYDkuInmsJHot68yNjPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04Mjg1LTAxMThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIueZvuiQrOWutlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILomIbmtLLljYDkuInmsJHot68yNuW3tzQ55byEMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAyLTIyODUtMTIzMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDljJfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS6Zy4546LLeiYhua0slwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILomIbmtLLljYDkuK3lsbHkuIDot68yNTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04Mjg2LTA1OTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWBieaIkOa0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILomIbmtLLljYDkuK3mraPot68yMTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMi04Mjg1LTgyMzJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw5YyX5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIueQruiMglwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDljJfluILomIbmtLLljYDkuK3ljp/ot68xMuW3tzE16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODI4Mi03MzM3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlt7flvITmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC6JiG5rSy5Y2A5YWJ5qau6LevMTM26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkxNi04NzMtNzQ5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoia/mlrDoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC6JiG5rSy5Y2A6ZW36IiI6LevMTUy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODI4Ni0xOTQyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLlt55cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC6JiG5rSy5Y2A5L+h576p6LevMTU46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODI4Ni0wNjQwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnq4voqqDooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw5YyX5biC6bav5q2M5Y2A5bCW5bGx6LevMTg16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDItODY3OC0xNTA1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOWMl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmo67lr7ZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5YWr5b635Y2A5LuL5aO96Lev5LqM5q61MTQ2NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MzctOTYzLTQyNFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qaR5YCJ5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guWFq+W+t+WNgOWSjOW5s+i3rzE0MuiZnzEg5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzY3LTM1MDVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWuuOeAp+eFmemFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILlhavlvrfljYDnvqnli4fooZczNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM3Ny05OTE5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmtbfnj4roj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5aSn5ZyS5Y2A5paw6IiI6LevNTDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0zODYtMzk1NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5beo5rGf5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guWkp+a6quWNgOS7i+Wjvei3rzkyNOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM4MC0yMDU2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlronli51cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5Lit5bGx5p2x6Lev5LiJ5q61MTXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00NjYtNjkxOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yil57e75L6/5Yip5ZWG5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOS4reWxsei3rzI0N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MDAtMDQ1LTU4M1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z5ZOBLeS4reWjolwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILkuK3lo6LljYDkuK3lnJLot6/kuozmrrU0MzXomZ/kuYsxXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDYyLTY2NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW6t+m9oemFkuiXjy3pgaDmnbFTT0dP5Lit5aOi5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOWFg+WMlui3rzM1N+iZn0IxXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDI3LTkzNTRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWWnOa0i+a0iy3kuK3lo6JcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5YWD55Sf5LiJ6KGXMTIz6JmfMUZcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00MzUtNTkzOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56uL5Z+66I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOawkeaXj+i3r+S6lOautTEwMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQ5MC0xMDUwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlkIzmtLXmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5rCR5qyK6Lev5LiJ5q61Mjk56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDI2LTg0NDhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadnOaLnFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILkuK3lo6LljYDlu7blubPot6/kuozmrrU56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDAyLTM2NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuahguWGoOmFkuiOilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILkuK3lo6LljYDojpLlhYnot680M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTI4My0wMDc5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlqIHluILpm4ZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6I+v56Wl5LiA6KGXM+W3tzjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTg3LTE3Ny03NzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadvuWxsea0i+ihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILkuK3lo6LljYDlu4jploDot68zOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQ1OS0xNTEyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HosarphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5paw5piO6LevMzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00OTMtMjEyMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5paw6IGv5ZCI6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOmBjuW2uumHjOawkeaXj+i3r+S6lOautTEwOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQyMC0zNjEwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlvJjou5Loj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A56aP5bee6LevMTA36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDU2LTAxOTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkui2heW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILkuK3lo6LljYDpoJjoiKrljJfot6/kuozmrrU3NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTI4Ny0zODIzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpmL/mqLnmtIvphZIt5Lit5aOiXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOm+jeWyoei3rzPmrrUyODnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00NjAtNzM3NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57SF6YWS5aChXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guS4reWjouWNgOeSsOWMl+i3rzM3NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQyMi01NjQ2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLnm59cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A55Kw6KW/6LevMzPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTE1LTAwMS0zODFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWuieWLnS3kuIrmtbdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5bmz6Y6u5Y2A5LiK5rW36LevMTcx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDM5LTk5NTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS5neWGoFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILlubPpjq7ljYDmsJHml4/ot68xNTMtMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MTItODg3LTcyN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57i95YWD5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guW5s+mOruWNgOW7tuW5s+i3r+S6jOautTMwMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQ5Mi02MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLms5Pms7DooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn5p6X6LevMTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0zNjMtNzc3MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV6ZGr6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guahg+WckuWNgOWkp+alrei3r+S4gOautTI5MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTMyNS0zMjcyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmgKHlkozlkI3phZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn6IiI6KW/6Lev5LiA5q61MzEx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzU4LTEzMDVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumGh+mFkuWdilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmoYPlnJLljYDlpKfoiIjopb/ot6/kuozmrrUxOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTMyNi0yOTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhYnms4lcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn6IiI6LevN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM1NS00NDgyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuK3oj6/nhZnphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5Lit5bmz6LevMTUy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMjIwLTA1MjFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuacqOmBqeWdiumFkueqllwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmoYPlnJLljYDkuK3mraPot68xMTA46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzc1LTMyOTIjOTE4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZCJ6ZqG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guahg+WckuWNgOawkeeUn+i3rzUzM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTMzNi0xODk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmoYPlsbFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5rCR5peP6LevMTkw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzMyLTI0NTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW1qeWogS3moYPlnJJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5qGD6bav6LevMTE56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzY2LTA3ODJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQieWuiea0i+ihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmoYPlnJLljYDmhYjmlofot68zNDfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0zNTgtMDQwN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YeR5byY56yZLeahg+WckuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmoYPlnJLljYDntpPlnIvot680MDLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0yNjMtMTQ0NFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5ZySLem+nOWxsVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmoYPlnJLljYDpvpzlsbHljYDokKzlo73ot6/kuozmrrUxMjMw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzQ5LTU1NDhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaYjOaIkFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILmpYrmooXljYDnp4DmiY3ot682M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQ3OC00OTg5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLliKnkvobnpo9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC5qWK5qKF5Y2A5rOw5Zyz6LevNDA45be3NjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00NjAtNjE2OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56Kn5rSxXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4gum+jea9reWNgOS4reato+i3rzIzOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTQ4MC01Mzg1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpoIblro/mtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A6b6N5YWD6LevMTEx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNDgwLTIwNTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS5heWFuOeFmemFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmoYPlnJLluILpvo3mva3ljYDpvo3oj6/ot68zNzHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy00OTktMDYxMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi54Cn5b636I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4gum+nOWxseWNgOW/oOe+qei3r+S6jOautTM5NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5ODAtMzQ3LTgxOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6JCs6YGU5qGD5ZySXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4gum+nOWxseWNgOiQrOWjvei3r+S6jOautTkyNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM1OS03ODA2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuahg+WckuW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmoYPpkatcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5qGD5ZyS5biC6JiG56u55Y2A5aSn56u56LevNDI2LTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0zMTMtMzMyOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLmoYPlnJLluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qyj6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuahg+WckuW4guiYhuerueWNgOaWsOWNl+i3r+S4gOautTE46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzExLTc4MzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5qGD5ZyS5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+ixkOihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDnq7nluILljJfploDooZcxOTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01MjUtMzA5MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZyL5pqJXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOerueW4guWMl+WNgOW7tuW5s+i3r+S4gOautTM0MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTUyNS02NTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOerueW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKrkuLhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u55biC5rCR5qyK6LevNjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01MzUtMjUyN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pet5ZOB5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOerueW4guadsemWgOihlzEwNOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTUyMi0yNjIyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOerueW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlkIjpoIbmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u55biC5p2x5Y2A5rCR55Sf6LevMjY26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDk2NS0zOTMtNjY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOerueW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlkYjpkavllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LiA5q61NDjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01NzctOTA2OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5biD6JCK5oGp54WZ6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOerueW4guadseWNgOmVt+aYpeihlzEyMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTU3OS0wMzc3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOerueW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLojILosZDooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u55biC5p6X5qOu6LevMjc16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkzOC0wMjctMDI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOerueW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmloflvaxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u55biC6aaZ5bGx5Y2A54mb5Z+U5Y2X6LevNTMy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNTM4LTEyMjVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw56u55biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaWsOiMgua0i+a0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDnq7nluILntpPlnIvot6/kuozmrrUyNDnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01MzMtNDU3OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5b2s5a6P54WZ6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOeruee4o+erueWMl+W4guS4reiPr+i3rzExOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTY1Ni01ODg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOeruee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HmqL0t56u55YyXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOeruee4o+erueWMl+W4guWFieaYjuWFrei3r+adseS6jOautTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01NTAtOTMwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5q2j5rOT5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOeruee4o+erueWMl+W4guWNmuaEm+ihlzIwNC0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNjU2LTUxNjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw56u557ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkueuoeWutlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDnq7nnuKPnq7nljJfluILnpo/oiIjot683OTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTE2LTYzMy0yMjFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw56u557ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaZr+ijleWVhuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDnq7nnuKPnq7nljJfluILps7PlsqHot6/kuozmrrUxNTHlt7c1NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTU1Ni0wMTYwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOeruee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLml63kuqgt56u55YyXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOeruee4o+erueWMl+W4gue4o+aUv+S6jOi3rzUxMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTU1NS03Mzg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuaWsOeruee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhavlhavlhatcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5paw56u557ij56u55p2x6Y6u6ZW35pil6Lev5LiJ5q61ODLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01OTYtNjE1MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZyL6LGQXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuaWsOeruee4o+a5luWPo+mEieaIkOWKn+i3rzg56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNTk5LTEwNTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5paw56u557ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIueZvOeZvOeZvFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmlrDnq7nnuKPmlrDosZDphInmlrDoiIjot68yNjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy01NTktMTE5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLmlrDnq7nnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5bCa6YCy6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+iLl+agl+W4gueCuuWFrOi3rzE3OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTcyNi0xMjIzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnmoflk4HmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij56u55Y2X6Y6u5Lit5riv6YeMMTLphLDnkrDluILot6/kuozmrrUx6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc0OC0zMzY2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmhbbkvbPooYwt5YWJ5b6p5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+erueWNl+mOruWFieW+qei3rzI5My006JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzQ2LTUyNTdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNk+iYrVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPljZPomK3pjq7kuK3mraPopb/ot685OeS5izHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNTg5LTY4ODFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuismeazsOihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPlvozpvo3pjq7lpKfluoTph4zkuK3lsbHot680OTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03NzItOTE1NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YCN6YGZ6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+W+jOm+jemOruS4reWxsei3rzMzMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc3Mi05NDQ4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnrYznkIPllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij5b6M6b6N6Y6u5Y2X5riv6YeMMemEsOWNl+WLouWxsTE3LTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03OTItMTIyMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YGg5p2x5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+iLkeijoemOruaIv+ijoemHjDHphLAz5LmLMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc4NS0zMzkxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnkanoirPooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij6IuR6KOh6Y6u56S+6IuT6YeMN+mEsDc06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzc0LTI3MDdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNmumFkuiQiua0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPoi5Hoo6Hpjq7ljZrmhJvot68y6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzg2LTAxMjdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadsea6ouihjOiPuOmFki3mlrDoiIjlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij6IuR6KOh6Y6u5paw5b6p6YeMOemEsOaWsOW+qTEyNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc4Ni04MDYzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpmb3lhYnllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij6IuX5qCX5biC5paH55m86LevNDgx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzM1LTI3NTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWWnOa0i+a0i+iPuOmFki3ngrrlhazlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij6IuX5qCX5biC54K65YWs6LevMjg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzI2LTQ2NzNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWWnOa0i+a0i+iPuOmFki3oi7HmiY3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6IuX5qCX57ij6IuX5qCX5biC6Iux5omN6LevNTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03MzctMTA1NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yud5ZKM6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+iLl+agl+W4guaWsOadseihlzQx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzMzLTY1MzZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWwmuWlveiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPoi5fmoJfluILnuKPlupzot68xMTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03MzYtMTgwMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn55m75rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+mAmumchOmOruemj+W+t+i3rzIw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtNzc1LTgwOTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6IuX5qCX57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNoeirvuabvOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPpoK3ku73luILlhavlvrfkuIDot68yMjbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03NjktMjM4NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Zac5rSL5rSL6I+46YWSLemgreS7veW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPpoK3ku73luILkuK3lpK7ot68zMTDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03NjctMDQ1NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Zac5rSL5rSL6I+46YWSLeaXpeaWsOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPpoK3ku73luILml6XmlrDooZcy6YSwMzPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy03NjgtMTQ2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLoi5fmoJfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5oW25L2z6KGMLeWFieiPr+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoi5fmoJfnuKPpoK3ku73luILlhYnoj6/ljJfot685MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc2MS0xOTk4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmhbbkvbPooYwt5p2x5rCR5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiLl+agl+e4o+mgreS7veW4guadseawkei3rzEwN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTc2OS0wMDg5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiLl+agl+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmi4noj7Loj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6ZuF5Y2A6ZuF5r2t6Lev5Zub5q61NTAy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjU2Ny0zODE5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmuZbmtIvphZIt5aSn55Sy5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+eUsuWNgOS4reWxsei3r+S4gOautTQ4NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI2ODAtNTgzNlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57SF6YWS6I6K5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+eUsuWNgOWFieaYjui3rzEzMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MzItNjc3LTk0NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS6Jmf5YCJ5bqrLeWkp+eUsuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKfnlLLljYDlv6DlrZ3ot682MOW3tzHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNjgwLTM3OThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQjOaHi+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKfnlLLljYDkv6Hnvqnot68xNTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNjg2LTAzNDBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkua4r+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKfnlLLljYDntpPlnIvot68x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjY4Ni04MDcxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuIPkuIPmnIPnpL7mtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6IKa5Y2A6Ieq5rK76LevNzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNjk5LTgzMjNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS6rOaXuuiPuOmFki3lpKfmmI7lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5aSn5piO6LevNTI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQwNi0wMTUyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLliKnnmb7liqDmtIvphZIt5aSn6YeM5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mHjOWNgOS4reiIiOi3r+S4gOautTExLTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDk2LTA2MzlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3lhafmlrDlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5Lit6IiI6Lev5LqM5q61NTc26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQ4Ni0wODY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HmqYvpo5/lk4FcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5Lit6IiI6Lev5LqM5q61NzA56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQ4NS00NjQ2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr4zkuInmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5LuB5oWI6KGXMzUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkxMC01MjktNTI0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoib7pnI/mvL7phZLlk4HlsIjploDlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5rC46ZqG6LevNTc36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQwNi05MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuqzml7roj7jphZIt55uK5rCR5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mHjOWNgOebiuawkei3r+S6jOautTMwMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0ODctNTM5MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS6Jmf5YCJ5bqrLeWkp+mHjOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKfph4zljYDniL3mlofot68xMTIx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQwNi0zMjQ2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLomZ/lgInluqst57i95YCJXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mHjOWNgOeIveaWh+i3rzM5OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0MDYtNDY0OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqs5pe66I+46YWSLeWhl+WfjuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKfph4zljYDloZfln47ot682NTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDk1LTE2NzVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS6rOaXuuiPuOmFki3mlrDku4HlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSn6YeM5Y2A5paw5LuB6Lev5LiA5q61MjIx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI3OS0xMjQ3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmuZbmtIvphZIt5aSn6ZuF5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mbheWNgOawkeeUn+i3r+S4gOautTI2M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1NjYtNTk0NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5ZyL6Iux6LGq6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mbheWNgOawkeeUn+i3r+S4ieautTM1NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1NjYtNDcxMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5YCJ5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkp+mbheWNgOenkembhei3rzM5OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1NjctOTE1OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6IyC5bOw6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guS4reWNgOiHqueUsei3r+S6jOautTU06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjIyNS0yNTI1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLliKnnmb7liqDmtIvphZIt5Lit5bGx5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWkquW5s+WNgOS4reWxsei3r+Wbm+autTEyNOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzOTUtMDc0OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqs5pe66I+46YWSLeawuOixkOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKrlubPljYDmsLjosZDot68xOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyNzUtMzQ4OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqs5pe66I+46YWSLeadseW5s+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILlpKrlubPljYDmnbHlubPot680NTXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjcwLTUzMDlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadvuizgOa0i+mFki3lpKrlubPlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5p2x5bmz6LevODAw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI3OS0xMTE5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLojILmnpfmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5paw5bmz6Lev5LiJ5q61MTcx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjM5MS0wNTgyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HpoIbllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5paw56aP6LevMTA5NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MTAtNDkxLTMyM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56a+57Sz5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOS4reW5s+i3rzY5NuiZnzHmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjk1LTgxMzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkueUleiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJflsa/ljYDkuK3muIXot6/kuozmrrUxMDI26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQyNi0wMjA4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmuIXms7Doj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5Lit5riF6Lev5LqM5q61MTI46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkzNi0yMzEtMTkwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLokaHmmbbmtIvphZIt5Lit5riF5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOS4rea4hei3r+S6jOautTI0MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyOTctODA1NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5rGf5p2R6I+46YWSLeWkqumghuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJflsa/ljYDlpKrpoIbot68xN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0MzYtOTIxNFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YyX5Y+w5Lit5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOaYjOW5s+i3r+S4gOautTE0M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyNDQtMDUyOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn5aKp5p2x5bGx5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOadseWxsei3rzHmrrUxNDjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDM3LTMxNjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3mnbHlsbHlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQzNy04MDA5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnvqTojILmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MzI26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQzNi04MzE5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bkvbPmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5bSH5b636LevMuautTQ4MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyNDktMTcxMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZOI5Yip5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOW0h+W+t+i3r+S6jOautTMwOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyNDEtNjY1OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Y+k5YW45rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+Wxr+WNgOmBvOmZveS6lOihlzI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI0NC00MjYzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpm4bnjpbluoToj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A54CL6Zm96Lev5LiA5q61ODLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjk4LTk5MDlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4luWCs+iPuOmFkuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJflsa/ot68yNjfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTAwLTAwNS05NzBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3kupTmrIrlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5YyX5Y2A5LqU5qyK6LevMTQ26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjIwMi0wOTU4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlnIvms7DmtIvphZIt5LqU5qyK5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+WNgOS6lOasiui3rzIzNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyMDYtMDMzOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6IyC57a46I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWMl+WNgOWFrOWckui3rzE0MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyMDYtNzY3NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yip55m+5Yqg5rSL6YWSLeWMl+W5s+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJfljYDljJflubPot6/kuozmrrUxODbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjkxLTA5NTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuerpOWwh+WVhuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJfljYDlsJrlvrfooZc5MeW3tzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjAzLTMyOThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWuuOmAuOa0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJfljYDpgLLljJbljJfot68zNjTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjM2LTAwOTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuahguiyq+a0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljJfljYDmvKLlj6Pot68z5q61MjU56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI5OS00MTAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLogJXlnYrooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A5bel5qWt5Y2AMTbot6816JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjM1OS0zNTc5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlnIvms7DmtIvphZIt5Y2D5Yud5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+Wxr+WNgOaWh+W/g+i3r+S4ieautTE1OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMTMtMzM5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5rmW5rSL6YWSLeWuieWSjOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/lsa/ljYDlronlkozot68xNTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDYyLTU3MTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3mvKLlj6PlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A6KW/5bGv6Lev5LqM5q61MzItMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMTQtMzM1OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yip55m+5Yqg5rSL6YWSLeS4reenkeW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/lsa/ljYDopb/lsa/ot6/kuInmrrUxMDHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDYyLTE1NTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum+jeeptOmFkuWdilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/lsa/ljYDmsrPljZfot6/jhKfmrrU1NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMTctMjkyOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZOI5pav6JG15rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+Wxr+WNgOays+WNl+i3r+S6jOautTMwMeW3tzUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQzNy02ODc4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLokaHmmbbmtIvphZIt5biC5pS/5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+Wxr+WNgOays+WNl+i3r+Wbm+autTEwM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyOTctODA1NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS6Jmf5YCJ5bqrLeacneWvjOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/lsa/ljYDmnJ3lr4zot682Ni0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI1NC05NTEyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlronov6rmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A5a+n5aSP6LevMjE36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjMxNy0zNDMwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLliKnnmb7liqDmtIvphZIt6buO5piO5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+Wxr+WNgOm7juaYjui3r+S4ieautTExNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0NTItOTcwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5byY5bed6JeP6YWS6ZajXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+Wxr+WNgOm7juaYjui3r+S4ieautTMw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjQ1Mi02MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr4zpm4XphZLojopcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5Lit6IiI6KGXMTIy5be3MTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMzAxLTM2OTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3lhaznm4rlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5YWs55uK6LevMzM36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjMyMC01NjM0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpoY/mlrDnj43mtIvphZLllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5pel6YCy6KGXMTAx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjIwNi01MTg3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnlYzmmI7mtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5Y+w54Gj5aSn6YGTMuautTUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjIwMS0yMTAzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnvo7mhJ/oh6jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5ZCR5LiK6Lev5LiA5q61NTAy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjMyMC01NzIzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmJ/ms7DmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6KW/5Y2A5ZCR5LiK6Lev5LiA5q61NTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMzAxLTMzODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWuuOS+hua0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/ljYDmnbHoiIjot6/kuInmrrUxN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0NzItOTg3N1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6bql6YeR6YWS5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+WNgOafs+W3neilv+i3r+S6jOautTE4OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyMjAtMjU4MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pqQ5YCr5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guilv+WNgOe+juadkei3r+S4gOautTI0MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMDUtMDY4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yip55m+5Yqg5rSL6YWSLee+juadkeW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/ljYDnvo7mnZHot6/kuIDmrrUyNjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMzA1LTkxMTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiys+mbtumFkuWVhuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILopb/ljYDmqILnvqTooZcyMDnomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjM3MS04MTgxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuIDlk4HlpKvkurroj7jphZIt5pex5rqq5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guaXsea6quihlzU0LTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjExLTM3ODRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaYh+WTgeihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILmspnpub/ljYDkuK3lsbHot6/lronliKnlt7cy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjY2NS0xMTg3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmuZbmtIvphZIt5rKZ6bm/5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guaymem5v+WNgOWPsOeBo+Wkp+mBk+S4g+autTc2MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI2NjMtNDkzOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rqQ5Yip6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guaymem5v+WNgOWFieiPr+i3rzMzM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5NzMtMjA1LTY2MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yip55m+5Yqg5rSL6YWSLeWNgeeUsuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILmnbHljYDljYHnlLLot680MTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjEzLTI3MjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS6rOaXuuiPuOmFki3ljYHnlLLlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5p2x5Y2A5Y2B55Sy6LevNTE36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjIxNS01Mzc5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfooZvmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5p2x5Y2A5bu65oiQ6LevNzMz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjI4My0xMTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLljprmmIzmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5p2x5Y2A57K+5q2m6LevMTYx6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5NzUtMzc5LTM2MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5LiA5ZOB5aSr5Lq66I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWNgOaogualrei3rzIxMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyMTEtMTc2NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57K+5rmb6YWS6JePXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWNgOaogualrei3rzM5NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyMTItMTc4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6auY6IWz5p2v5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWLouWNgOW7tuW5s+mHjOesrOS4gOapq+ihlzMx6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5NzgtOTMwLTU3OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6Y6u5piM6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWLouWNgOW/oOWtneihlzE3M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1ODctMDAwMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YqJ56aPXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWLouWNgOadseWdkei3rzIxNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1ODctNzI2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5LiL5paw6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guadseWLouWNgOadseiYrei3rzQz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjU4Ny0yMjU2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLliKnnmb7liqDmtIvphZIt5aSn5aKp5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWNl+Wxr+WNgOWkp+Wiqei3rzE4NOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI0NzEtNTgwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5paH5b+D5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWNl+Wxr+WNgOaWh+W/g+i3rzHmrrU0MzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjU4LTIwODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWuieazsOa0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljZflsa/ljYDlkJHkuIrljZfot6/kuIDmrrUzMjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNDczLTUwODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNl+WNgOaliuiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljZfljYDkupTmrIrljZfot68yNDPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjY1LTY3ODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaXpeebm+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljZfljYDlkIjkvZzooZc1MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIyODUtMDk2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6ZuF5LuV5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guWNl+WNgOS/oee+qeWNl+ihlzMyMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MjgtMDk0LTkzMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p2+6LOA5rSL6YWSLemrmOW3peW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILljZfljYDpq5jlt6Xot681MDDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjY1LTU4ODVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWIqeeZvuWKoOa0i+mFki3lvqnoiIjlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5Y2X5Y2A5b6p6IiI6Lev5LqM5q61MTIwLTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yMjYyLTU1MjNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadvuizgOa0i+mFki3ng4/ml6XlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC54OP5pel5Y2A5Lit5bGx6Lev5LiA5q61NTAz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjMzOC04NjM5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLml6XljYfoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC54OP5pel5Y2A5LqU5YWJ6LevMTAwM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMzctNDg1OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi55m+5rez5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gueDj+aXpeWNgOaWsOiIiOi3rzQzM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMzctOTk1M1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qau55GL5ZWG5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gueDj+aXpemEieS4reWxsei3r+S4gOautTM3NOiZnzNGXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkyNS0xODYtMDkzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmsZ/mnZHoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC56We5bKh5Y2A5aSn5a+M6LevOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1MjctODg2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZCJ6I+W5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guelnuWyoeWNgOelnuael+i3rzg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjU2My0xMDgwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmpq7lpb3oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC5qKn5qOy5Y2A5bGF5LuB6KGXMjEy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjY1Ny05ODg5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmuZbmtIvphZIt5riF5rC05bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gua4heawtOWNgOS4reiPr+i3rzQxN+S5izLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNjI4LTE1NTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuatkOW3tOmmrOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILmuIXmsLTljYDkuK3oj6/ot682MDktMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI2MjgtMTA3N1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p2x5bO75ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gua4heawtOWNgOawkeaXj+i3r+S6jOautTUxN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5NTgtNzg1LTAwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aiB54i+5qOu5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gua9reWtkOWNgOmbhea9rei3r+S6jOautTI1MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1MzMtNTg4M1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lul5YWo6I+46YWS5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gua9reWtkOWNgOa9reengOmHjOS4reWxsei3r+S6jOautTQ3NC0y6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1MzMtMTYyMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57SF6aCC6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gueSsOS4rei3r+Wbm+autTU26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtMjM4NS0wNDgwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOS4reW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkup7lvrflgKvoj7jphZIt5aSn5YuH5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guixkOWOn+WNgOS4ieixkOi3r+S4gOautTE2OeiZn+S5izJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNTE1LTU0NzNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS6nuW+t+WAq+iPuOmFki3lkJHpmb3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Lit5biC6LGQ5Y6f5Y2A5ZCR6Zm96LevMTcw5be3OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1MjUtMTQyNVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5bq36b2h6YWS6JePLeWkquW5s+a0i1NPR08t6LGK5Y6f5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4guixkOWOn+WNgOW+qeiIiOi3rzLomZ8gQjFcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNTI1LTY1NTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkuWTieiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILosZDljp/ljYDosZDmnbHot681NTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC0yNTI2LTE0MTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Lit5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWvtuiBr+ihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILosZDljp/ljYDosZDli6Lot6/kuozmrrUzMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTI1MjMtMDQwM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqs5pe66I+46YWSLemcp+WzsOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DkuK3luILpnKfls7DljYDogrLku4HooZcxMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTIzMzktNzEyNlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6bWs6aaz6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOS4reW4gumcp+WzsOWNgOeSsOays+i3r+S4gOautTcxOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MTktMDg5LTE2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DkuK3luIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yqg57SN5rSL6YWSLeWkp+WflOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlvbDljJbluILlpKfln5Tot680OTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03MTMtOTk5OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a6P5L+h5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+S6jOael+mOruWkp+aIkOi3r+S4gOautTMzNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTg5Ni01MDYxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr4zngrrkvIHmpa3mnInpmZDlhazlj7hcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5LqM5p6X6Y6u5paX6IuR6Lev5LiJ5q61MTI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODk1LTA1NTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiHu+WTgeiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPkuozmnpfpjq7mlpfoi5Hot6/kupTmrrUzOTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04OTYtODMwOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZOh5aSW6Iy26I6KXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+S6jOael+mOruilv+W5s+mHjOW7uuWci+i3rzQxMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTg5Ni0yMDM3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnlLLmj5rmnInpmZDlhazlj7hcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5LqM5p6X6Y6u6LGQ55Sw6YeM5Y2X5a6J6LevNDPomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODk2LTQyMTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiQrOiKs+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlpKfmnZHphInlpKfku4Hot6/kuIDmrrUxNDTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04NTItNTQzMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YeR5oCd57at5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+WMl+aWl+mOruaWl+iLkei3r+S4gOautTI5MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTg4OC04OTE1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmsLjmib/llYbooYwt5YyX5paX5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+WMl+aWl+mOruaWl+iLkei3r+S6jOautTcx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODg3LTQwNTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWTgemKmOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPljJfmlpfpjq7lvqnoiIjot68yMzLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04NzgtMjk2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5bm05Luj6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+eUsOS4remOruWNl+WMl+ihlzE0MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTg3NC01MDE2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuIrmtbfoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij56eA5rC06YSJ55Wq6Iqx6LevMzYy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtNzY5LTYxOTRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumHkemmrOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPnp4DmsLTphInpm4XoiIjooZcyMjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03NjMtMDgxM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5bCK5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+WSjOe+jumOruWSjOmgrei3rzIx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtNzU2LTY3MTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+aXuuiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPnpL7poK3phInlk6Hpm4bot6/kuozmrrUyMjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04NzEtMTAwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rC45om/5ZWG6KGMLeiKrOWckuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPoiqzlnJLphInlvbDljZfot6/lm5vmrrU0MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTkyNTEtMTU0M1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yqg57SN5rSL6YWSLeiKseWjh+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPoirHlo4fphInoirHlo4fooZczNDbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03ODYtMDQ3MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5LmL5bqX6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+WToeael+W4guS4ieawkeadseihlzUx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODM0LTA3MzBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFiei8neiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlk6HmnpfluILkuK3lsbHot6/kuIDmrrU1ODPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04MzUtNTY2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rC45om/5ZWG6KGMLeWToeael+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlk6HmnpfluILkuK3lsbHot6/kuozmrrU1OTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC04MzYtMzQxM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn6Iqz6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+WToeael+W4guWFieaYjuihlzE1MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTgzMi0xNDc1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLml6XpgLLoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5ZOh5p6X5biC5ZOh5rC06Lev5LqM5q61MTU16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODM2LTA3ODFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNmumFkuiQiuiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlk6Hmnpfpjq7mta7lnLPot6/kuozmrrUyNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTgzOS01NTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlroflpI/oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5Z+U5b+D6YSJ5ZOh6bm/6Lev5LiA5q61NDM16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODI4LTExOTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuamruiKs+WVhuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPln5Tlv4PphInnkaTps7Pot6/kuIDmrrU2MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTgyOS05ODA2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpnZLml7roj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5Z+k6aCt6YSJ5b2w5rC06Lev5LiJ5q61NTUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODkxLTAyNTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIua6kOmRq+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPpub/muK/pjq7kuK3mraPot68zODfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03NzUtNDIyN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z5rKF6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+m5v+a4r+mOrum5v+WSjOi3r+S4ieautTQ0MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTc3MS0xOTY4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmsLjoqJjllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij6bm/5riv6Y6u6bm/6I2J6LevNeautTI0M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTc3MS0yNjI5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmsZ/lpI/oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5rqq5rmW6Y6u6KW/55Kw6LevNDky6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODg1LTkyMjdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumHkeWFg+WvjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlvbDljJbluILmsLTmupDot681NjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03NjMtOTkxOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yqg57SN5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+W9sOWMluW4guawkeeUn+i3rzE16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtNzIyLTYzNzFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQieemj+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlvbDljJbluILoh6rlvLfot68zMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTcyNi0yNjg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmnb7li4foj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5b2w5YyW5biC6Zi/5aS36YeM5bu65ZyL5p2x6LevMjY56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtNzI4LTc4ODNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaRqeeZu+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlvbDljJbnuKPlvbDljJbluILljZfpg63ot6/kuIDmrrU1NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5ODYtNzAzLTYwMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5qiC6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+W9sOWMluW4guWToeael+W4guS4ieawkeadseihlzYz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtODM5LTc1NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5b2w5YyW57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWKoOe0jea0i+mFki3lpKfnq7nlnI3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5b2w5YyW57ij5b2w5YyW5biC5b2w5Y2X6Lev5LqM5q61MTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC03MzgtNTgxOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlvbDljJbnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pel5Lqr5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuW9sOWMlue4o+W9sOWMluW4guW9sOWNl+i3r+S6jOautTIzMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTczOC04NTA3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuW9sOWMlue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhYPpmJzllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Y2X5oqV5biC5LiJ5rCR6YeM5Y2X6Zm96LevNDYx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIyMy04NTk4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpjKHmr4Xoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5rCR6ZaT6YSJ5r+B5rC05p2R5ZOh6ZuG6LevNjfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC05MjczLTIwNzFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y2X5oqV57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWPsOWFg+a0i+mFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLljZfmipXnuKPnq7nlsbHpjq7lpKfmmI7ot68yMzPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC05MjY1LTMzOTNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y2X5oqV57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaWh+WSjOiPuOmFki3ljZfmipXlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Y2X5oqV5biC5LiJ5ZKM6YeM5b6p6IiI6LevMTE56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIyMi00NjAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmloflkozoj7jphZIt5Lit6IiI5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWNl+aKlee4o+WNl+aKleW4guS4reiIiOaWsOadkeS4reiIiOi3rzcy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIzOS0wMzQyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLosarphZLpgYvoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Y2X5oqV5biC5Y2X6Zm96LevOTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC05MjIyLTk5MDZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y2X5oqV57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIue+iuWTpeiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLljZfmipXnuKPljZfmipXluILojYnlsa/pjq7ngo7ls7DooZc4MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTkyMzYtNzc3NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLljZfmipXnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5om/5pqY6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWNl+aKlee4o+WNl+aKleW4guW6t+WjvemHjOawkeeUn+ihlzI26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIyMC0yOTk4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlmInls7DllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Y2X5oqV5biC5b2w5Y2X6Lev5LiA5q61NjEz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIyMi01NzQyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlkbXlkbXllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5Lit5q2j6LevNzQ16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkyNi05MzktMjk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLlnJLllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5Lit6I+v6LevMTg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTI5OS05OTAzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpgLLljZfomZ/oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u6KW/5a6J6LevMeautTkz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTI5OC0yMTIzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HliKnoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u6KW/5a6J6Lev5LiA5q61OTXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNC05Mjk4LTQ0MDFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y2X5oqV57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNmumFkuiQii3ln5Tph4xcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5p2x6I+v6LevMTgy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTI5OC0zNjUyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfnpr7lsYvoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij6I2J5bGv6Y6u5LiK5p6X6YeM5aSq5bmz6Lev5LiA5q61MTM56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIzMS0yOTY1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnmb7mt7Poj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij6I2J5bGv6Y6u5aSq5bmz6Lev5LiA5q61NTE26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIzOS0yNDk2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhYPlpKrmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij6I2J5bGv6Y6u5ZKM5bmz6KGXNOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA0LTkyMzItMjAwOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLljZfmipXnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a625a625pyJ5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWNl+aKlee4o+iNieWxr+mOruaVpuWSjOi3r+aVpuaIkOW3tzHkuYsx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTIzMS0wODg0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLnjpbllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij5ZyL5aeT6YSJ5Lit6IiI6LevMjM26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTI3Mi0zOTUxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuInlhYPooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y2X5oqV57ij6ZuG6ZuG6Y6u6ZuG6ZuG6KGXMTAw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDQtOTI3Ni0yMzcxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWNl+aKlee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLllK/lkJvogqHku73mnInpmZDlhazlj7hcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij5LqM5bSZ6YSJ6KOV5rCR6LevMTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS01OTgtOTU4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpm7LmnpfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p2c5bq36I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+aWl+WFreW4guS4iua1t+i3rzI1M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTUzNC02ODY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvI7lhbjoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij5paX5YWt5biC5rCR55Sf6LevMjgzLTEy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNTMzLTk3ODRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW+oOWck+mFkuiOilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpm7LmnpfnuKPmlpflha3luILmiJDlip/ot68yMTjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS01MzItNzU2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpm7LmnpfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z5Lqo5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+aWl+WFreW4guaYjuW+t+WMl+i3r+S6jOautTgx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNTMyLTU4OThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumahuazsOihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpm7LmnpfnuKPmlpfljZfpjq7kuK3lsbHot68xMTPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS01OTctMzM2MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpm7LmnpfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pav5aiB54m55ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+aWl+WNl+mOrue+qeW+t+i3rzEwMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTU5Ny0yNDY4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnpr7mupDnm5voj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij5Y+w6KW/6YSJ5rCR5peP6LevNDTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS02OTgtMTkxNlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpm7LmnpfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+25ZyS5rSL6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+WPsOilv+mEieawkeasiui3rzgy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNjk4LTI4MDFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaso+W3numFkuiOilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpm7LmnpfnuKPopb/onrrpjq7lhYnmmI7opb/ot68yNDXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS01ODctMjU2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpm7LmnpfnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pyJ5oiQ6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+ilv+ieuumOruWFieW+qeilv+i3rzMzM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTU5OS0xOTkwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnv5Tos4Doj7jphZIt6KW/6J665bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+ilv+ieuumOruiIiOi+suilv+i3rzYz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDk1NS02NzAtOTcwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmraPls7DnhZnphZLph4/osqnlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij6JmO5bC+6Y6u5YWJ5b6p6LevNDE26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNjM2LTE0NzVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFq+WFq+eFmemFkuawtC3omY7lsL7lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij6JmO5bC+6Y6u5YWJ5b6p6LevNDQz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNjMxLTAzODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWLnei8nVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpm7LmnpfnuKPltJnog4zphInlpKfmmI7ooZczOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTY5Ni05MzYyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlsJrlk4FcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij5bSZ6IOM6YSJ5p2x6IiI6LevMTE56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNTg2LTQ4MjJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumAmua0i+mFkuiOilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpm7LmnpfnuKPpuqXlr67phInkuK3oiIjot683OC0xM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTY5My00NTY4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnv5Tos4Doj7jphZIt5qmL6aCt5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+m6peWvrumEieS7geW+t+i3rzI0MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTY5MS03Nzg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnv5Tos4Doj7jphZIt6bql5a+u5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumbsuael+e4o+m6peWvrumEieazsOmghui3rzMzMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTY5My03MDg5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumbsuael+e4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLpprPoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Zuy5p6X57ij6bql5a+u6YSJ6bql6LGQ5p2R5paw6IiI6Lev5qmr6KGX5be3OOS5izjomZ8x5qiTXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtNjkzLTA2NTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Zuy5p6X57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumghumjsi3lmInnvqnlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5ZiJ576p5biC5LiK5rW36LevMjA56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtMjgzLTgzODNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5ZiJ576p57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiQrOm0u+iPuOmFki3lpKrkv53lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5aSq5L+d5biC5b6M5r2tMTg4LTXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0zNzAtMzA2OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p6X6YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWYiee+qee4o+WkquS/neW4guelpeWSjOS4gOi3r+adseautTUw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtMzYyLTUwNTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5ZiJ576p57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIua6kOWSjOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPmsJHpm4TphInoiIjljZfmnZHlu7rlnIvot6/kuInmrrU0M+iZn+S4gOaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTIyMS0yOTc3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLku5nllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij56u55bSO6YSJ5Lit6I+v6LevMi0z6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkwNS0wMzctMzcxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpgqPplpPoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij56u55bSO6YSJ5ZKM5bmz5p2RN+mEsOWdkeS7lOWdqjE1Mi0x6JmfMeaok1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTI2MS0yNzAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpkavlpJrlr6bmpa3mnInpmZDlhazlj7hcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij55Wq6Lev6YSJ5LiL5Z2R5p2R5LiL5Z2RNTUtMTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yNTktNDQ3NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWr5YWr54WZ6YWS5rC0LeWPi+aEm+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILlj4vmhJvot68xMzgtMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTIzMS01MTg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLlrqLoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5ZiJ576p5biC5Y+L5oSb6LevMTM46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtMjgxLTA2NjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5ZiJ576p57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkuWci+iLsembhOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILlj4vmhJvot68yMjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yMzMtMTIxMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWr5YWr54WZ6YWS5rC0LeaWsOeUn+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILlj4vmhJvot68zMzfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yMTYtMzk4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZOB6YqY6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWYiee+qee4o+WYiee+qeW4guWPsOael+ihlzIwN+iZn+mZhDJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yNzUtNjc3OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWL5p6X6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWYiee+qee4o+WYiee+qeW4guawkeeUn+WMl+i3rzIxM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTIyOC04ODMzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmYnnpo/oj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5ZiJ576p5biC5rCR55Sf5YyX6LevMjMz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtMjIyLTU5NDNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5ZiJ576p57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4iuadkeihjOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILmsJHml4/ot68xMDnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yNzYtMDk3MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWr5YWr54WZ6YWS5rC0LeW+jOW6hOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILmnbHljYDlkLPps7PljZfot68zNDDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yMzktNTc4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi55uI5ZiJ5ZWG6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWYiee+qee4o+WYiee+qeW4guWNl+S6rOi3rzQwMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTIzNi04ODgyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmraHllpzoj7jphZLpoY/npo/kvoZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5ZiJ576p5biC5paw55Sf6LevNjQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDUtMjc3LTYxMTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5ZiJ576p57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuilv+mDqOiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlmInnvqnnuKPlmInnvqnluILlmInnvqnluILojZbol6Tph4zlvozljp0x5LmLNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA1LTIzMi0xODU4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWYiee+qee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLokKzptLvoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5ZiJ576p57ij5ZiJ576p5biC6IiI5qWt6KW/6LevNzHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNS0yODYtMTY5OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlmInnvqnnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5b6h5ZOB5LiL54efXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guS4i+eHn+WNgOWBpeW6t+i3rzI4MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTY3OS0wMDIyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlt57nv5TphZLnv5RcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A6KW/5ZKM6LevMjIw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjU4LTY5NThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW6t+m9oemFkuiXjy3mlrDlhYnkuInotorlj7DljZfopb/ploDmlrDlpKnlnLBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A6KW/6ZaA6Lev5LiA5q61NjU46JmfQjJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0zMDMtMDE2NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6auY55m7LeWPsOWNl1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILkuK3opb/ljYDlkozmhI/ot683OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5NzMtMDYzLTIxNVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn55y+LeatpuiBllwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILkuK3opb/ljYDmrabogZbot68yNjXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0yODAtMDEyOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi57+U55m8XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guS4reilv+WNgOmHkeiPr+i3r+S4ieautTYw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjIzLTk3MjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum+jeaGtlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILkuK3opb/ljYDljZfploDot68yNDPomZ/kuYszXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjEzLTAyODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumGh+eItVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILkuK3opb/ljYDmtbflronot6/kuIDmrrUyNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTIyMC0wNTA3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr4zlhqDllYbooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5LuB5b635Y2A5Lit5q2j6Lev5LqM5q61MzQx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjc5LTQyMzJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum8juWkp1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILljJfljYDkuK3oj6/ljJfot6/kuIDmrrU3OOW3tzI16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDk2OC03MDItOTI3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmJXmgoXmj5pcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5Lit6I+v5LiA6LevMTUwLTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0zMTItOTY5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6aCG6aOyLeS4reiPr+W6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmsLjlurfljYDkuK3oj6/ot680MDPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0yNzUtNjIyMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a6256aOXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guawuOW6t+WNgOawuOiPr+i3rzY26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjczLTQxMjlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWjueeOslwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmsLjlurfljYDlv6DlrZ3ot68xMDjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0zMTItMDA3OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6b6N5Lqo6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guawuOW6t+WNgOadseapi+S4g+i3rzE1M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTMwMi0wMzI5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlro/nkYvoj7jphZLooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5Y2X54Gj6YeM5aSn54Gj6LevNTc46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjA1LTkwNTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumghumjsi3lvqnlnIvlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5b6p5ZyL5LiA6LevMzYx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjAzLTE4MzFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNl+mDveiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmsLjlurfljYDlvqnlnIvkuozot682M+W3t1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTMxMi0yODI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKflpKfoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5a6J5bmz5Y2A5Lit6I+v6KW/6Lev5LqM5q61NTcz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjgwLTMwNzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumghumjsi3msLjoj6/nuL3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5a6J5bmz5Y2A5rC46I+v6Lev5LqM5q61Njc46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjk5LTkxMjNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuizgOm8jlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILlronlubPljYDmsLjoj6/ot6/kuozmrrU2OTDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0yOTMtMDAyMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn55y+LeWuieW5s1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILlronlubPljYDlu7rlubPot682OTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0yOTMtODk5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6Y2+5oSbXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guWuieWNl+WNgOWuieWSjOi3r+Wbm+autTQ4MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTM1Ni0xMTI3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpoIbpo7It6KW/6ZaA5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guWuieWNl+WNgOilv+mWgOi3r+Wbm+autTM3NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTI4MS0wMzMzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpq5jlg5FcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5a6J5Y2X5Y2A5rW35rK66Lev5LiA5q61OTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0zNTAtNjQyM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6KW/5riv6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guilv+a4r+WNgOaFtuWuiei3rzgy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtNzk1LTAyMjVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWDkemgmFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILkvbPph4zljYDkuK3lsbHot68yMjXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi03MjMtNjA3MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5buj5L6GXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guadseWNgOWkp+WQjOi3r+S6jOautTEzOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTI0Ni02MjcyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmn4/lvaPmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5p2x5Y2A5bCP5p2x6LevMzMw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjc1LTY2MjFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQiOatoS3mnbHploDploDluIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5p2x5Y2A5p2x6ZaA6Lev5LiA5q61MTg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtMjM2LTUzMDFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuank+mgguiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmnbHljYDltIflvrfot680NTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0zMzYtMjE4OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZCI5q2hLeWkj+ael+mWgOW4glwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILljZfljYDlpI/mnpfot68xNDjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi0yNjQtNDI1MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qOL5YudXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guWNl+WNgOaDoOWNl+ihlzgz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkzMi03MDYtOTA2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvI7osZBcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC6bq76LGG5Y2A6Ieq55Sx6LevMzItMTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi01NzItODA0MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn5YudXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guWWhOWMluWNgOS4reWxsei3rzQ3MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTU4MS03OTI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmI7ovJ1cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5paw5YyW5Y2A5Lit5bGx6LevMTEx5be3MTDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi01OTgtMTE2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rOw5a6JLeW+t+S9s1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmlrDljJbljYDkuK3mraPot680NjIuNDY06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtNTkwLTc1MjdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumHkeWvjOelpVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmlrDluILljYDpipjlgrPooZc3NuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTU5OS04Mjc4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlvqHlk4FcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5paw54ef5Y2A5LiJ5rCR6LevNjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi02MzctNjk5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5pm055GSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guaWsOeHn+WNgOWSjOW5s+i3rzg36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDYtNjM1LTUwMzVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkuWgoS3mlrDnh59cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5Y+w5Y2X5biC5paw54ef5Y2A5p2x5rOw5LiD6KGXNDjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTM0LTMyNC03NzdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5Y+w5Y2X5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQjeWutlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DljZfluILmlrDnh5/ljYDmlrDpgLLot6/kuozmrrUxODPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi02MzctOTIzN1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DljZfluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ra85LqtXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOWNl+W4guatuOS7geWNgOS/neWkp+i3r+S4ieautTI3MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA2LTI2NS0wMzM0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOWNl+W4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrMt5Lmd5aaCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOS5neWmguS4gOi3rzIyOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM4Ny0zMzAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoh7vphZLku5kt5Lmd5aaCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOS5neWmguS4gOi3rzUwMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM5Ny00NDQ0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphofphZLln44t5aSn5piM5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOWkp+aYjOS6jOi3rzQ46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzg3LTUzMzNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+mAoy3kuIrmma9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5aSn6YCj6KGXMTk4XCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzIzLTYwOTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumrmOmRq1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILkuInmsJHljYDlpKfpoIbkuozot68yMznomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zODktMTExMVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZiJ55Gd5rSL6KGMLeWkp+mghuW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILkuInmsJHljYDlpKfpoIbkuozot683MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM4OS0zMzY2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmnbHoia9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5YyX5bmz5LqM6KGXMTg36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzIyLTkyODdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW7o+iyoVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILkuInmsJHljYDmsJHml4/kuIDot681OTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zNTktOTk1NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV5qyj6KGMLeW7uuWci1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILkuInmsJHljYDlu7rlnIvkuIDot680MDbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yMjUtNzI2OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a6P576OXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOijleiqoOi3rzExNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM1MC01NTI5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmpbXlk4FcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LiJ5rCR5Y2A5aup5rGf6KGXMTYz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzEzLTMxMTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumVt+aFtua0i+ihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILkuInmsJHljYDmvKLlj6PooZczMzPomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zMTUtMzgzOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZiJ55Gd5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOa+hOa4hei3rzM4MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM5OC02NDA0XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkv6HnppUt54Gj5Lit5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS4ieawkeWNgOeBo+S4reihlzI4MOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM5NS0yMjIwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuZ3kuYUt5aSn5a+uXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWkp+WvruWNgOWkp+Wvrui3rzY2Mi02ODLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03ODctODI5NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+25qqzLeWkp+WvrlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILlpKflr67ljYDps7PmnpfkuInot68zNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTc4Ni04ODc3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrMt5Lit5bqEXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWkp+WvruWNgOmzs+Wxj+S4gOi3rzE4M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcwMy03MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr4zmsoVcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5aSn5qi55Y2A5Lit6IiI5Y2X6Lev5paw6IiI5be3MjLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy02NTItMTE2OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn6bWsXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWwj+a4r+WNgOWkp+m1rOi3rzE1OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTgwMS05NjYwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpZXmrKPooYwt5Lit5a6J5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWwj+a4r+WNgOS4reWuiei3rzY0OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTc5MS0yNzU3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpZXmrKPooYwt5bCP5rivXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWwj+a4r+WNgOW5s+ayu+ihlzE2M+iZnzHmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy04MDYtMzE1MFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p+P5qOuLemHkem0u+aYjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILlsI/muK/ljYDoj6/mmIzot68xMDXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03OTEtNjk5OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6Zi/5rOi576FLeixkOW5tFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILlsI/muK/ljYDmvKLmsJHot68xMTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy04MDYtMDg5OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWo6bql5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS7geatpuWNgOWFq+WNpuadkeawuOS7geihlzMxM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM3My0xODAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpu4Pph5HphZLmtIvphZLooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5ZKM6KGXOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM3Mi0yNzIyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpJrlpJpcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5b+g6LevNjDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zNzUtNTM3MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+w5LqoLeS7geatplwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILku4HmrabljYDku4Hpm4Tot68zMTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zNzQtNTEyMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5L2z6YWS6I6KXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS7geatpuWNgOS7geaoguihlzI2NOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM3MS0wMDU4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkvbPphZLojoot6LWk5LuBXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS7geatpuWNgOi1pOS7gei3rzYw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDkwOS0xOTMtNTEzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrMt5LuB5q2m5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guS7geatpuWNgOmzs+S7gei3rzk1LTE36JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzczLTc3NTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4iuaZr+WVhuihjC3lpKfpgKNcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5r6E6KeA6LevNzg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzcyLTMyMjNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuael+iomC3mlofoh6rlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bem54ef5Y2A5paH6Ieq6LevOTc06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzQyLTkwOTBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+esrFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILlt6bnh5/ljYDoh6rnlLHkuozot68xMjXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy01NTYtMTM2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV5qyj6KGMLeiHqueUseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILlt6bnh5/ljYDoh6rnlLHkuozot68zMzHjgIEzMzMg6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNTUwLTg2NjVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumYv+eRny3ovpvkuqXlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bem54ef5Y2A6L6b5Lql6LevMjUz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNTUwLTgxNTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFqOWFgS3mmIfnmbxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bem54ef5Y2A5Y2X5bGP6LevMjYx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNTUwLTUxNjFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumBlOeOli3lt6bnh59cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bem54ef5Y2A6YeN5L+h6LevNTQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDk3OS02NzAtNjQ5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlurfpvaHphZLol48t5paw5YWJ5LiJ6LaK5bem54ef5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guW3pueHn+WNgOmrmOmQtei3rzExNeiZnzPmqJNcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zNDEtNzc5OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS6LC3XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guW3pueHn+WNgOW0h+W+t+i3rzQxNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM0MS0zODYzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7DkuqhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bem54ef5Y2A5qau57i96LevMjcx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzU5LTk2NTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFqOWFgS3mmIfnmbxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5bKh5bGx5Y2A5beo6Lyq6LevNTUtMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYyNS04MTg1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpgZTnjpYt5bKh5bGxXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWyoeWxseWNgOWyoeWxsei3rzI2MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYyMS04NjAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrMt5bKh5bGxXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWyoeWxseWNgOWyoeWxsei3rzM5NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYyMy0wMDU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfnnL4t5bKh5bGxXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWyoeWxseWNgOafs+api+adsei3rzktMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYyOS02MTU3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnpo/oqJgt5p6X5ZySXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guael+WckuWNgOaWh+izouWMl+i3rzbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy02NDEtNjYzM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+25qqzLeael+WcklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILmnpflnJLljYDmnbHmnpfopb/ot682MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTY0My05MDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKflkowt6Zi/6JOuXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumYv+iTruWNgOW/oOWtnei3rzkz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNjMxLTIxODJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuael+iomFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILliY3ph5HljYDlhYnlvqnkuInooZcxMzLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yMjEtODMxM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZKM5piT6ZaA5biCXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemHkeWNgOaIkOWKn+S4gOi3rzMwMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTIxMS0zNDg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlro/nvo4t6Ieq5by3XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemHkeWNgOiHquW8t+S6jOi3rzgwLTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yNjEtOTk1NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yex6KiYXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemHkeWNgOmdkuW5tOS6jOi3rzE2NOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MTYtMDEyLTg5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p2x54CbXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemOruWNgOS6jOiBlui3rzIxOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcxNi0xNzE3XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpmL/nkZ9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5LqM6IGW6LevNjfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03MTctMjgwMlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV5qyj6KGMLeS4reWxseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILliY3pjq7ljYDkuK3lsbHkuozot68xODbjgIExODjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy01MzYtMTI4NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqs6bS76I6K5ZyS6I+46YWSXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemOruWNgOawkeijleihlzEwMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA5MTMtNjY1LTIzOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5buj54i6LeawuOixkOW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILliY3pjq7ljYDmsLjosZDot68yMjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03MTYtNzg3OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Lqo6YqYXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemOruWNgOWFieiPr+S6jOi3rzMwMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcxMy0wMjA5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnjpbpgpFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5piO6bOz5LiJ6LevMTM16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNzkzLTU4OTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuemj+iomFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILliY3pjq7ljYDnkZ7pmobot681OTfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03NjEtMzY1NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZGC6KiYXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guWJjemOruWNgOmOruadseS4gOihlzE0M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTgzMS04NTQ1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvJPlsbHojornvo7mv4PlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC576O5r+D5Y2A5Lit5q2j6Lev5LqM5q61MTg16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNjYxLTczMTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaMr+aYjC3nvo7mv4NcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC576O5r+D5Y2A5rOw5a6J6LevMzjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTA5LTUzNy04MTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumGh+mFkuebilwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILoi5Ppm4XljYDkuInlpJrkuozot68xNTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03MjMtMDkwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Y2X5aiB5rW35rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guiLk+mbheWNgOS4ieWkmuS6jOi3rzMwOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTUzNi0wMDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlu6PniLpcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5Zub57at5LiJ6LevMTgx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNTM2LTUyNTJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumWi+aZri3kupTnpo/lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5rCR5qyK5LiA6LevMjM56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMjI2LTU1NDVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuaMr+aYjC3mrablu59cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5q2m5buf6LevMTU56Jmf5LmLM1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcyMi05MjU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlsIrln45cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A6Z2S5bm05LiA6LevOFwiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTIyMy0yNjkzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpioDnm6TmtIvphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5bu65rCR6LevMTU46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNzIyLTkwMThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQieaBqVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILoi5Ppm4XljYDoi5Ppm4XkuIDot68zNTTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy01MzUtNTk5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn5ZKM6IyE6JCjXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guiMhOWumuWNgOeZveeggui3rzE3MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTY5MC02MDAzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpZXmrKPooYwt5qKT5a6YXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guaik+WumOWNgOS4reato+i3rzI3Mi0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNjEwLTk4OTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWGoOW+ty3lhavlvrflupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5paw6IiI5Y2A5YWr5b635LiA6LevMTk26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMjM2LTA2MzlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWlleaso+ihjC3kupTnpo/lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5paw6IiI5Y2A5LqU56aP5LqM6LevMTkw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMjExLTU0NDRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiRoeWckumFkuWTgeWwiOizo1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILmlrDoiIjljYDlha3lkIjkuIDot68xMDnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yMzYtMzMwOFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ou/56C05bSZ5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guaWsOiIiOWNgOiHqueri+S6jOi3rzE0MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTI4OC0zNzU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmn6/mnpfpoJNcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5paw6IiI5Y2A6Ieq56uL5LqM6LevODDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yODUtNjE2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5YWt5ZCI5rSL6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guaWsOiIiOWNgOWNl+WPsOi3rzcz5be3MjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOTIwLTM5MC03NjdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS/oeemlVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILmlrDoiIjljYDlvqnoiIjkuozot68zMjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0yMjItMDExM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5oyv5piMLeWPs+aYjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILmpaDmopPljYDkuInlsbHooZcyMjDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy0zNjMtNDAzNlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5o+a5rSyXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gualoOaik+WNgOWPs+aYjOihlzUxNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTM2My03MzY5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrPmqYvpoK3lupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5qWg5qKT5Y2A5biC5aC06KGXOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYxMS0wMDMzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlk4HpkatcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5qWg5qKT5Y2A6LuN5qCh6LevODYy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzYyLTU1ODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWvtuaqsy3mpaDmopNcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5qWg5qKT5Y2A6bOz5qWg6LevMTQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzU4LTEzMzNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWvtuaqsy3lvrfos6JcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5qWg5qKT5Y2A5b636LOi6LevNDE46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctMzY0LTA4ODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWvtuaqsy3ot6/nq7lcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6Lev56u55Y2A5Lit5bGx6LevNzE2XCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNjk3LTcwMDBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumrmOmDveiPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILot6/nq7nljYDkuK3lsbHot684MzLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy02OTctNjU4OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5piO5pilXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gui3r+erueWNgOW7tuW5s+i3rzUyMOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTYwNy02Njk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpKfmiJDmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6bOv5bGx5Y2A56uL5b+X6KGXMTQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNzQyLTU4ODhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumCkeadsea0i+ihjC3kuZ3lpoJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6byT5bGx5Y2A5Lmd5aaC5Zub6LevMTAwNeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTUzMy0yNzMyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmjK/mmIwt5piO6KqgXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gum8k+WxseWNgOaYjuiqoOS4iei3rzYzOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTU1NS03OTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpZXmrKPooYwt5peX5bGx5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gum8k+WxseWNgOe+juihk+adseS6jOi3rzYyMuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTU1My0xNTY2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlpZXmrKPooYwt576O6KGT5peX6ImmXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guaXl+WxseWNgOW7tuW5s+S4gOi3rzM1OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTY2Mi0xMTg4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLpvJPlsbHojoot5peX5bGx5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4guaXl+WxseWNgOW7tuW5s+S4gOi3rzUwOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTY2MS0yODc1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlt6jmtIvoj7jphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC5peX5bGx6Y6u5Lit6I+v6LevNTMw5LmLMeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTY2MS0xMDcyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuZ3kuYUt5Lit5bGx5p2xXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOS4reWxseadsei3rzM4MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcwMy0zNTU1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlr7bmqrMt5Lit5bSZXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOS4reW0meS6jOi3rzUzN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTc1NS0wMDAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLps7Pnv4rmtIvooYxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5LqU55Sy5LqM6LevNTLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03NjctMjgzNVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV5qyj6KGMLemzs+WxseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDmlofljJbopb/ot68xNzDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03NzctOTA2MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5a6k6YWS56qWXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOaWh+auv+ihlzE26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNzc3LTk2MzNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNg+WAieW7qVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDmlofpvo3mnbHot68xMjjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03MzMtMzk4NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aWV5qyj6KGMLeaWh+m+jeadseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDmlofpvo3mnbHot683ODHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03NzctNzY4OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5ZiJ55Gd5rSL6KGMLeaWh+m+jeW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDmlofpvo3mnbHot683ODXomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03ODAtMTk4OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5a+25qqzLemzs+WxsVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDlhYnpgaDot680MjbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03MTAtNjY2MVwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6ZaL5pmuLemzs+WxseW6l1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILps7PlsbHljYDpnZLlubTot6/kuIDmrrUzNjDomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNy03NDctMDQ2NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLpq5jpm4TluIJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5p+P5qC86YGUXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOWNl+S6rOi3rzE3M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTc2Ny01NTg2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuZ3kuYUt6bOz55SyXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOWNl+iPr+S4gOi3rzE4MOiZn+OAgTE4MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTc5Ni05OTI4XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLkuZ3kuYUt5LiA55SyXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIumrmOmbhOW4gumzs+WxseWNgOWWhOe+jumHjOWNl+iPr+i3rzE0OeiZn+WPs+WBtFwiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTcxNi0yODk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmj5rmmIdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6YGO5YuH6LevMjYw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctNzkyLTkxNTZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWlleaso+ihjC3ps7PmnbHlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6bOz5p2x6LevNTMz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctODgyLTgzODlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuemj+iomC3kupTnlLLlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6Y6u5Y2X6YeM5LqU55Sy5LqM6LevNzQw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDctODEzLTg4MTFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6auY6ZuE5biCXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkuW4guWgtFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLpq5jpm4TluILpub3ln5XljYDkuIPos6LkuInot684N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA3LTUzMy03MDQwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIumrmOmbhOW4glwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmnbHlpKdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5bGP5p2x5biC5Lit5q2j6LevNTQ46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzM4LTEyNDVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWkp+WQjC3lhafln5RcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5YWn5Z+U6YSJ5buj5r+f6LevMTE06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzc5LTkwNDZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuadsemRq1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPph4zmuK/phInlpKflubPmnZHku4Hlkozot68yM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTc3NS0xMTk5XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5HlkozpoIZcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij6YeM5riv6YSJ6YeM5riv6LevMTE044CBMTEy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzc1LTYwNDNcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuijlemZni3mnbHmuK9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5p2x5riv6Y6u5paw5Yud6KGXMTgw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtODMyLTM1ODVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWQieaYjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPmnovlr67phInkuK3lsbHot683NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTg3OC0yMzYyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoo5XpmZ4t5rC05bqV5a+uXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+aei+WvrumEieS4reWxsei3r+S6jOautTM1M+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTg3MS00MTIyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoo5XpmZ4t5p6X6YKKXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+ael+mCiumEieS7geWSjOadkeS4reWxsei3rzI4NeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTg3NS04MDcwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoo5XpmZ4t5Y2X5beeXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+WNl+W3numEieS4ieawkei3rzEzN+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTg2NC02MzAwXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmtIvln7pcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5bGP5p2x5biC5YWs5ZyS6KW/6LevMTIx6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzMzLTcyNzJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWGoOiPry3mraPmnbFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5bGP5p2x5biC5rCR55Sf6LevNTctOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTcyMi02ODA2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhqDlvrct57i95bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+Wxj+adseW4guatpuaIkOihlzEwM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTc1MS02NTUzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLlhqDlvrct5aSn5Z+U5bqXXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+Wxj+adseW4guafs+a0suihlzM06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzMzLTcwMDdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumKmOm0u+a1t+ixkFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPlsY/mnbHluILmtbfosZDooZcxMTnlt7czNC0y6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzM2LTk5MDFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWGoOW+ty3oj6/nm5vlupdcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5bGP5p2x5biC6I+v55ub6KGXMTbomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOC03NTEtMDYzM1wiLFxuICAgICAgICBcImFyZWFcIjogXCLlsY/mnbHnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi56a+5aSnXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+Wxj+adseW4gueRnuWFiei3r+S4ieautTI5OeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTczOC02NjUzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWxj+adsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmnbHkuqxcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5bGP5p2x5biC5buj5p2x6LevMTU46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzIzLTExMTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIueZvuWIqVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPmgYbmmKXpjq7kuK3mraPot68xMzjomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOC04ODktMjYxNVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlsY/mnbHnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6JGh5ZySLeaBhuaYpVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPmgYbmmKXpjq7lvqnoiIjot685OS0x6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtODg4LTI0MjJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuiRoeWcki3lor7kuIFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij5oGG5pil6Y6u5aK+5LiB6LevMzIw6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtODg2LTI2MDRcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum0u+aYh1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPltIHpoILphInlipvnpL7mnZHoiIrlupfot68xLTEy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtODYzLTE0MDlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWNg+S4iuiPuOmFkuWVhuihjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlsY/mnbHnuKPokKzkuLnphInokKzlhajmnZHokKzkuLnot6/kuIDmrrUzMjHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOC03NzYtNDYzNlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlsY/mnbHnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5aSn5ZCMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWxj+adsee4o+a9rua0sumOruacneaYh+i3rzg06JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzg4LTIwNThcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuemj+iomC3lsY/mnbFcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5bGP5p2x57ij6bm95Z+U6YSJ57at5paw6LevMTkz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDgtNzkzLTUwNjFcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5bGP5p2x57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuW+t+ixkFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlj7DmnbHnuKPlj7DmnbHluILlgrPlu6Pot681MDfomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwOC05MjItODM3MlwiLFxuICAgICAgICBcImFyZWFcIjogXCLlj7DmnbHnuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6YWS5aChXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWPsOadsee4o+WPsOadseW4guaWsOeUn+i3rzExNuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjA4LTkzMi0xMjM1XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWPsOadsee4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmmI7mnIhcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Iqx6JOu57ij6Iqx6JOu5biC5Lit5q2j6LevMTQ26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtODMxLTU5NjZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Iqx6JOu57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4iumGh1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoirHok67nuKPlkInlronphInkuK3oj6/ot6/kuozmrrUxNTnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy04NTEtMjA2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLoirHok67nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5rCR5L6BXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiKseiTrue4o+WQieWuiemEieWQieWuiei3r+S4gOautTc2OOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM4NTgtMDc2OFwiLFxuICAgICAgICBcImFyZWFcIjogXCLoirHok67nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi6Ieq56uLXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiKseiTrue4o+WQieWuiemEieiHqueri+i3r+S6jOautTQy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtODU2LTYzNTVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Iqx6JOu57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkuaxn+ihl1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoirHok67nuKPoirHok67luILljJbpgZPot68xNjLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy04MjItMjUyMFwiLFxuICAgICAgICBcImFyZWFcIjogXCLoirHok67nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5Yqg6YWS6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuiKseiTrue4o+iKseiTruW4gui7kui9hei3rzIy6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtODMxLTQ5NjBcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Iqx6JOu57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumbhOWvsFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoirHok67nuKPoirHok67luILlnIvoga/kuIDot68yMTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy0zODMyLTYxNDdcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Iqx6JOu57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFqOWutuS+hlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoirHok67nuKPoirHok67luILlnIvoga/kupTot681MeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTgzNi0wMTAxXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiKseiTrue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLph5Hpm4Tlr7BcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Iqx6JOu57ij6Iqx6JOu5biC5Y2a5oSb6KGXMTM16JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtODMyLTc2MjJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi6Iqx6JOu57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4iuaPmlwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLoirHok67nuKPoirHok67luILlr4znpaXooZc5N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTg1Ny02NTQzXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiKseiTrue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmt7VcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi6Iqx6JOu57ij5paw5Z+O6YSJ5ZiJ6YeM5LiJ6KGXOTLkuYs46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtMzgyNi0xNzg2XCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuiKseiTrue4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLnlLPph45cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5a6c6Jit57ij5a6c6Jit5biC5a6c6IiI6Lev5LiA5q61Mjgz6JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTM4LTA4MjJcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4gOi3r+eZvFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlrpzomK3nuKPlhqzlsbHphInlhqzlsbHot6/kupTmrrUyNjnomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy05NTgtNTQ5OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlrpzomK3nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5qyj6b6NXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWunOiYree4o+WGrOWxsemEieWGrOWxsei3r+S6lOautTI3N+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTk1OC05MzUyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWunOiYree4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmrr9cIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5a6c6Jit57ij5a6c6Jit5biC5a6c6IiI6Lev5LqM5q61MuiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTM5MzItOTU3OVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlrpzomK3nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi5piO6IiIXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWunOiYree4o+WunOiYreW4guelnui+sui3r+S4gOautTI26JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTMyLTUyNTlcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIum1rOalrVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlrpzomK3nuKPlrpzomK3luILpgLLlo6vot6/kuIDmrrUyOOiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTkyNS01NzIyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWunOiYree4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLphZLmqIJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5a6c6Jit57ij5a6c6Jit5biC5paw5rCR6LevODTomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy05MzItNTA4NVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlrpzomK3nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi55qH5ZCO6YGTXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWunOiYree4o+WunOiYreW4guaWsOiIiOi3rzg46JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTMzLTMzODVcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWgoemzs1wiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlrpzomK3nuKPlrpzomK3luILovrLmrIrot68yM+iZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTkzNS0yNTMyXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWunOiYree4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLoirHlpKnphZLlnLAt57+w5b63XCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWunOiYree4o+WunOiYreW4guiIiuWfjuadsei3rzQ56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTMzLTIwMzhcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIumFkueqqVwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlrpzomK3nuKPnpIHmuqrphInkuK3lsbHot6/kuozmrrUyOeiZn1wiLFxuICAgICAgICBcInRlbFwiOiBcIjAzLTk4OC03MzExXCIsXG4gICAgICAgIFwiYXJlYVwiOiBcIuWunOiYree4o1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic3RvcmVcIjogXCLmhJvnkLPphZJcIixcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwi5a6c6Jit57ij576F5p2x6Y6u5YWs5q2j6LevMjg5LTHomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwMy05NTEtMDIwOVwiLFxuICAgICAgICBcImFyZWFcIjogXCLlrpzomK3nuKNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInN0b3JlXCI6IFwi55m+5pmf6KGMXCIsXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIuWunOiYree4o+e+headsemOruiIiOadseWNl+i3rzQ56JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTU2LTA0NzZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuWFieaYjFwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLlrpzomK3nuKPnvoXmnbHpjq7oiIjmnbHot6856JmfXCIsXG4gICAgICAgIFwidGVsXCI6IFwiMDMtOTU1LTgyODZcIixcbiAgICAgICAgXCJhcmVhXCI6IFwi5a6c6Jit57ijXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzdG9yZVwiOiBcIuS4iuaamOa0i+iPuOmFklwiLFxuICAgICAgICBcImFkZHJlc3NcIjogXCLmvo7muZbnuKPppqzlhazluILlhYnlvqnot68xNDLomZ9cIixcbiAgICAgICAgXCJ0ZWxcIjogXCIwNi05MjYtNTU3NlwiLFxuICAgICAgICBcImFyZWFcIjogXCLmvo7muZbnuKNcIlxuICAgIH1cbl07XG5leHBvcnQgZGVmYXVsdCBhbGxfc3RvcmVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==