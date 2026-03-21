/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src@4.0/assets/js/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src@4.0/assets/js/main.js":
      /*!***********************************!*\
  !*** ./src@4.0/assets/js/main.js ***!
  \***********************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../plugins/jason_data/news_list.js */ "./src@4.0/assets/plugins/jason_data/news_list.js"
          );
        /* harmony import */ var _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../plugins/jason_data/stores_list.js */ "./src@4.0/assets/plugins/jason_data/stores_list.js"
          );
        // ajax 配合JQ3 引入設置
        $(document).ready(function () {
          $.ajaxSetup({
            cache: false,
          });
          $.ajax({
            url: "ajax/_header.html",
            method: "GET",
            dataType: "html",
          }).done(function (data) {
            $("#header").html(data);
            headerFunction();
          });
          $.ajax({
            url: "ajax/_footer.html",
            method: "GET",
            dataType: "html",
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

            $(window).resize(function () {
              // $('#agreementModalCenter_Id').css("padding-left", "0px");
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
              $("html,body").animate(
                {
                  scrollTop: 0,
                },
                1000
              );
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
              interval: false,
            });
          }
        }

        function slickSwitcher() {
          var el = document.querySelector("#productInpageSlick_Id");

          if (el !== null) {
            $.ajax({
              url: "ajax/_productInpage_slick.html",
              method: "GET",
              dataType: "html",
            }).done(function (data) {
              $("#productInpageSlick_Id").html(data);
              $(".v-slick").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ],
              });
            });
          }
        } //產品頁tab

        function tab() {
          var el = document.querySelector(".v-tab");

          if (el !== null) {
            var $link = $(".tab-list .tab-btn");
            $($link.eq(0).addClass("active").find("a").attr("href"))
              .siblings(".tab-content")
              .hide();
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
              $($(this).children("a").attr("href"))
                .fadeIn()
                .siblings(".tab-content")
                .hide();
              $(this)
                .addClass("active")
                .siblings(".active")
                .removeClass("active");
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
              document.querySelector("main").style.cssText =
                "padding-top: calc(72px + 69px)";
            } else {
              el.classList.remove("js-acitve");
              document.querySelector("main").style.cssText = "";
            }
          }
        } //解決手機上 safari, chrome 瀏覽器 100vh 無法剛好一整頁的問題

        function fixSmartphone100vh() {
          // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
          var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

          document.documentElement.style.setProperty(
            "--vh",
            "".concat(vh, "px")
          );
        } // 商店下拉複選選單相關-----------
        // 判斷下拉選單中是否有選項被選取，選單上會有勾勾

        function storeFilterNotification() {
          var el = document.querySelector(".v-dropdown-menu");
          var target = document.querySelector("#dropdownMenuButton");

          if (el && target) {
            // 預設全選，選單上有勾勾
            target.classList.add("js-inputChecked"); // console.log(inputContainer + " + " + target);

            var triggers = el.querySelectorAll("input[type='checkbox']"); // console.log(triggers);

            triggers.forEach(function (trigger) {
              trigger.addEventListener("click", function () {
                var checkedNum = el.querySelectorAll(
                  "input[type=checkbox]:checked"
                ).length; // console.log(checkedNum);

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
                // console.log("toggleVisiabl");
                event.preventDefault();
                this.classList.toggle("js-active");
                target.classList.toggle("js-active");
                var hasMediaQuery = mediaQuery;

                if (hasMediaQuery !== "") {
                  var isMobile = window.innerWidth < mediaQuery;

                  if (isMobile) {
                    document.documentElement.classList.toggle(
                      "js-functionMenuOpened"
                    );
                  }
                } else {
                  document.documentElement.classList.remove(
                    "js-functionMenuOpened"
                  );
                }

                window.addEventListener("resize", function () {
                  if (window.innerWidth >= mediaQuery) {
                    document.documentElement.classList.remove(
                      "js-functionMenuOpened"
                    );
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
                document.documentElement.classList.remove(
                  "js-functionMenuOpened"
                );
              });
            });
          }
        } // 點擊空白處關閉下拉

        function clickNonTarget(el, target) {
          var triggerEl = document.querySelector(el);
          var targetEl = document.querySelector(target);

          if (targetEl) {
            document.addEventListener("click", function (event) {
              if (
                !targetEl.contains(event.target) &&
                event.target !== triggerEl
              ) {
                triggerEl.classList.remove("js-active");
                targetEl.classList.remove("js-active");
              }
            });
          }
        } // -----------
        //最新消息vue
        // Vue.config.devtools = true;

        function newsListVue() {
          var el = document.querySelector("#newsPagination_Id");

          if (el !== null) {
            var PAGE_SIZE = 6; //一個頁面要顯示多少筆資料

            var FOO_DATA =
              _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ];
            Vue.component("paginate", VuejsPaginate);
            var vue = new Vue({
              el: "#newsPagination_Id",
              data: {
                inpagedata: [],
                listdata: [],
                currentPage: 1,
                pageCount: 1,
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
                },
              },
              watch: {
                listdata: function listdata(val) {
                  this._setPage2Model();
                },
              },
              filters: {
                ellipsis: function ellipsis(value) {
                  var len = 117;
                  if (!value) return "";

                  if (value.length > len) {
                    return value.slice(0, len) + "...";
                  }

                  return value;
                },
              },
              methods: {
                _setPage2Model: function _setPage2Model() {
                  var vm = this;

                  if (!vm.listdata || vm.listdata.length <= 0) {
                    vm.pageCount = 1;
                  } else {
                    vm.pageCount =
                      parseInt(vm.listdata.length / PAGE_SIZE) +
                      (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);

                    for (var i = 0; i < vm.listdata.length; i++) {
                      vm.$set(
                        vm.listdata[i],
                        "page",
                        parseInt(i / PAGE_SIZE) + 1
                      );
                    }
                  }
                },
                pageCallback: function pageCallback(page) {
                  var vm = this;
                  this.$set(vm, "currentPage", page); // 讓 currentPage 等於 page
                },
              },
              created: function created() {
                var vm = this;
                vm.listdata = FOO_DATA.slice().reverse(); // 為了不污染數據，針對listdat做淺拷貝

                vm.inpagedata = FOO_DATA; // 另外開了一組順序正常的，給一般取用
              },
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
                sections: [
                  {
                    stores:
                      _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                      ],
                  },
                ],
                selected_area: "台北市",
                selected_city_area: "",
                qtext: "",
                vintage2003: false,
                vintage2007: false,
                thedalmore18: false,
                thedalmore21: false,
                thedalmore25: false,
                city_areas: [],
              },
              created: function created() {
                this.area_change(this.selected_area);
              },
              methods: {
                area_change: function area_change(e) {
                  this.qtext = "";
                  $("#qtext").val("");
                  var rows = this.sections[0].stores.filter(function (
                    element,
                    index
                  ) {
                    return element["area"] == e;
                  });
                  var found = {};
                  var groupRwos = rows.filter(function (element) {
                    return found.hasOwnProperty(element["city_area"])
                      ? false
                      : (found[element["city_area"]] = true);
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
                  } // sam20230913

                  /*
          if (text == "") {
           // alert("請輸入通路名稱或地址");
          Swal.fire({
          title: '提示!',
          text: '請輸入通路名稱或地址',
          icon: 'warning',
          })
                return;
          }
          */

                  this.qtext = text;
                  this.selected_area = "all";
                  this.selected_city_area = ""; //this.rowData(this.selected_area , this.selected_city_area, this.qtext);
                },
                rowData: function rowData(e, city_area, qtext) {
                  var text = qtext.trim();
                  var i = 1;
                  var arr = this.sections[0].stores.filter(function (
                    element,
                    index
                  ) {
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
                      flag =
                        element["store"].indexOf(text) >= 0 ||
                        element["address"].indexOf(text) >= 0; // console.log(
                      //   flag,
                      //   text,
                      //   element["store"],
                      //   element["address"],
                      //   element["address"].indexOf(text)
                      // );
                    } else if (city_area != "") {
                      if (e == "all") {
                        flag = element["city_area"] == city_area;
                      } else {
                        flag =
                          element["area"] == e &&
                          element["city_area"] == city_area;
                      }
                    } else {
                      if (e == "all") {
                        flag = true;
                      } else {
                        flag = element["area"] == e;
                      }
                    }

                    var isType = false; //預設都不勾 全選商品

                    if (
                      !$("#vintage2003").is(":checked") &&
                      !$("#vintage2007").is(":checked") &&
                      !$("#thedalmore18").is(":checked") &&
                      !$("#thedalmore21").is(":checked") &&
                      !$("#thedalmore25").is(":checked")
                    ) {
                      isType = true;
                    } else {
                      if ($("#vintage2003").is(":checked")) {
                        if (element["vintage2003"]) {
                          isType = true;
                        } else {
                          return flag && false;
                        }
                      }

                      if ($("#vintage2007").is(":checked")) {
                        if (element["vintage2007"]) {
                          isType = true;
                        } else {
                          return flag && false;
                        }
                      }

                      if ($("#thedalmore18").is(":checked")) {
                        if (element["thedalmore18"]) {
                          isType = true;
                        } else {
                          return flag && false;
                        }
                      }

                      if ($("#thedalmore21").is(":checked")) {
                        if (element["thedalmore21"]) {
                          isType = true;
                        } else {
                          return flag && false;
                        }
                      }

                      if ($("#thedalmore25").is(":checked")) {
                        if (element["thedalmore25"]) {
                          isType = true;
                        } else {
                          return flag && false;
                        }
                      } //console.log((i++) + element["store"]  +" 2003Val=" + $("#vintage2003").val() +" show=" + element["vintage2003"] +  " 2003=" + ($("#vintage2003").val() == "on")   +" 2007=" + $("#vintage2007").val());
                    }

                    return flag && isType;
                  });
                  var arr = arr.sort(function (a, b) {
                    if (a.sort < b.sort) {
                      return -1;
                    }

                    if (a.sort > b.sort) {
                      return 1;
                    } // names must be equal

                    return 0;
                  });
                  return arr;
                },
              },
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
          clickNonTarget(".v-dropdown-btn", ".v-dropdown-menu");
          toggleVisiable(".close", ".v-dropdown-menu", "");
          clickConfirm("#js-confirm", ".v-dropdown-menu"); //-----[end]酒款下拉相關js
        }); //呼叫function-視窗大小變更

        $(window).resize(function () {}); //呼叫function-捲動

        $(window).scroll(function () {
          tabFixed();
          lazyLoad();
        });

        /***/
      },

    /***/ "./src@4.0/assets/js/src_main20230914備份.js":
      /*!*************************************************!*\
  !*** ./src@4.0/assets/js/src_main20230914備份.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../plugins/jason_data/news_list.js */ "./src@4.0/assets/plugins/jason_data/news_list.js"
          );
        /* harmony import */ var _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../plugins/jason_data/stores_list.js */ "./src@4.0/assets/plugins/jason_data/stores_list.js"
          );
        // ajax 配合JQ3 引入設置
        $(document).ready(function () {
          $.ajaxSetup({
            cache: false,
          });
          $.ajax({
            url: "ajax/_header.html",
            method: "GET",
            dataType: "html",
          }).done(function (data) {
            $("#header").html(data);
            headerFunction();
          });
          $.ajax({
            url: "ajax/_footer.html",
            method: "GET",
            dataType: "html",
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

            $(window).resize(function () {
              // $('#agreementModalCenter_Id').css("padding-left", "0px");
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
              $("html,body").animate(
                {
                  scrollTop: 0,
                },
                1000
              );
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
              interval: false,
            });
          }
        }

        function slickSwitcher() {
          var el = document.querySelector("#productInpageSlick_Id");

          if (el !== null) {
            $.ajax({
              url: "ajax/_productInpage_slick.html",
              method: "GET",
              dataType: "html",
            }).done(function (data) {
              $("#productInpageSlick_Id").html(data);
              $(".v-slick").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ],
              });
            });
          }
        } //產品頁tab

        function tab() {
          var el = document.querySelector(".v-tab");

          if (el !== null) {
            var $link = $(".tab-list .tab-btn");
            $($link.eq(0).addClass("active").find("a").attr("href"))
              .siblings(".tab-content")
              .hide();
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
              $($(this).children("a").attr("href"))
                .fadeIn()
                .siblings(".tab-content")
                .hide();
              $(this)
                .addClass("active")
                .siblings(".active")
                .removeClass("active");
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
              document.querySelector("main").style.cssText =
                "padding-top: calc(72px + 69px)";
            } else {
              el.classList.remove("js-acitve");
              document.querySelector("main").style.cssText = "";
            }
          }
        } //解決手機上 safari, chrome 瀏覽器 100vh 無法剛好一整頁的問題

        function fixSmartphone100vh() {
          // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
          var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

          document.documentElement.style.setProperty(
            "--vh",
            "".concat(vh, "px")
          );
        } // 商店下拉複選選單相關-----------
        // 判斷下拉選單中是否有選項被選取，選單上會有勾勾

        function storeFilterNotification() {
          var el = document.querySelector(".v-dropdown-menu");
          var target = document.querySelector("#dropdownMenuButton");

          if (el) {
            // console.log(inputContainer + " + " + target);
            var triggers = el.querySelectorAll("input[type='checkbox']"); // console.log(triggers);

            triggers.forEach(function (trigger) {
              trigger.addEventListener("click", function () {
                var checkedNum = el.querySelectorAll(
                  "input[type=checkbox]:checked"
                ).length; // console.log(checkedNum);

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
                // console.log("toggleVisiabl");
                event.preventDefault();
                this.classList.toggle("js-active");
                target.classList.toggle("js-active");
                var hasMediaQuery = mediaQuery;

                if (hasMediaQuery !== "") {
                  var isMobile = window.innerWidth < mediaQuery;

                  if (isMobile) {
                    document.documentElement.classList.toggle(
                      "js-functionMenuOpened"
                    );
                  }
                } else {
                  document.documentElement.classList.remove(
                    "js-functionMenuOpened"
                  );
                }

                window.addEventListener("resize", function () {
                  if (window.innerWidth >= mediaQuery) {
                    document.documentElement.classList.remove(
                      "js-functionMenuOpened"
                    );
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
                document.documentElement.classList.remove(
                  "js-functionMenuOpened"
                );
              });
            });
          }
        } // 點擊空白處關閉下拉

        function clickNonTarget(el, target) {
          var triggerEl = document.querySelector(el);
          var targetEl = document.querySelector(target);

          if (targetEl) {
            document.addEventListener("click", function (event) {
              if (
                !targetEl.contains(event.target) &&
                event.target !== triggerEl
              ) {
                triggerEl.classList.remove("js-active");
                targetEl.classList.remove("js-active");
              }
            });
          }
        } // -----------
        //最新消息vue
        // Vue.config.devtools = true;

        function newsListVue() {
          var el = document.querySelector("#newsPagination_Id");

          if (el !== null) {
            var PAGE_SIZE = 6; //一個頁面要顯示多少筆資料

            var FOO_DATA =
              _plugins_jason_data_news_list_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ];
            Vue.component("paginate", VuejsPaginate);
            var vue = new Vue({
              el: "#newsPagination_Id",
              data: {
                inpagedata: [],
                listdata: [],
                currentPage: 1,
                pageCount: 1,
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
                },
              },
              watch: {
                listdata: function listdata(val) {
                  this._setPage2Model();
                },
              },
              filters: {
                ellipsis: function ellipsis(value) {
                  var len = 117;
                  if (!value) return "";

                  if (value.length > len) {
                    return value.slice(0, len) + "...";
                  }

                  return value;
                },
              },
              methods: {
                _setPage2Model: function _setPage2Model() {
                  var vm = this;

                  if (!vm.listdata || vm.listdata.length <= 0) {
                    vm.pageCount = 1;
                  } else {
                    vm.pageCount =
                      parseInt(vm.listdata.length / PAGE_SIZE) +
                      (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);

                    for (var i = 0; i < vm.listdata.length; i++) {
                      vm.$set(
                        vm.listdata[i],
                        "page",
                        parseInt(i / PAGE_SIZE) + 1
                      );
                    }
                  }
                },
                pageCallback: function pageCallback(page) {
                  var vm = this;
                  this.$set(vm, "currentPage", page); // 讓 currentPage 等於 page
                },
              },
              created: function created() {
                var vm = this;
                vm.listdata = FOO_DATA.slice().reverse(); // 為了不污染數據，針對listdat做淺拷貝

                vm.inpagedata = FOO_DATA; // 另外開了一組順序正常的，給一般取用
              },
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
                sections: [
                  {
                    stores:
                      _plugins_jason_data_stores_list_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                      ],
                  },
                ],
                selected_area: "台北市",
                selected_city_area: "",
                qtext: "",
                vintage2003: false,
                vintage2007: false,
                thedalmore18: false,
                thedalmore21: false,
                thedalmore25: false,
                city_areas: [],
              },
              created: function created() {
                this.area_change(this.selected_area);
              },
              methods: {
                area_change: function area_change(e) {
                  this.qtext = "";
                  $("#qtext").val("");
                  var rows = this.sections[0].stores.filter(function (
                    element,
                    index
                  ) {
                    return element["area"] == e;
                  });
                  var found = {};
                  var groupRwos = rows.filter(function (element) {
                    return found.hasOwnProperty(element["city_area"])
                      ? false
                      : (found[element["city_area"]] = true);
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
                  var i = 1;
                  return this.sections[0].stores.filter(function (
                    element,
                    index
                  ) {
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
                      flag =
                        element["store"].indexOf(text) >= 0 ||
                        element["address"].indexOf(text) >= 0; // console.log(
                      //   flag,
                      //   text,
                      //   element["store"],
                      //   element["address"],
                      //   element["address"].indexOf(text)
                      // );
                    } else if (city_area != "") {
                      if (e == "all") {
                        flag = element["city_area"] == city_area;
                      } else {
                        flag =
                          element["area"] == e &&
                          element["city_area"] == city_area;
                      }
                    } else {
                      if (e == "all") {
                        flag = true;
                      } else {
                        flag = element["area"] == e;
                      }
                    }

                    var isType = false; //預設都不勾 全選商品

                    if (
                      !$("#vintage2003").is(":checked") &&
                      !$("#vintage2007").is(":checked") &&
                      !$("#thedalmore18").is(":checked") &&
                      !$("#thedalmore21").is(":checked") &&
                      !$("#thedalmore25").is(":checked")
                    ) {
                      isType = true;
                    } else if (
                      ($("#vintage2003").is(":checked") &&
                        element["vintage2003"] == true) ||
                      ($("#vintage2007").is(":checked") &&
                        element["vintage2007"] == true) ||
                      ($("#thedalmore18").is(":checked") &&
                        element["thedalmore18"] == true) ||
                      ($("#thedalmore21").is(":checked") &&
                        element["thedalmore21"] == true) ||
                      ($("#thedalmore25").is(":checked") &&
                        element["thedalmore25"] == true)
                    ) {
                      isType = true; //console.log((i++) + element["store"]  +" 2003Val=" + $("#vintage2003").val() +" show=" + element["vintage2003"] +  " 2003=" + ($("#vintage2003").val() == "on")   +" 2007=" + $("#vintage2007").val());
                    }

                    return flag && isType;
                  });
                },
              },
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
          clickNonTarget(".v-dropdown-btn", ".v-dropdown-menu");
          toggleVisiable(".close", ".v-dropdown-menu", "");
          clickConfirm("#js-confirm", ".v-dropdown-menu"); //-----[end]酒款下拉相關js
        }); //呼叫function-視窗大小變更

        $(window).resize(function () {}); //呼叫function-捲動

        $(window).scroll(function () {
          tabFixed();
          lazyLoad();
        });

        /***/
      },

    /***/ "./src@4.0/assets/plugins/jason_data/news_list.js":
      /*!********************************************************!*\
  !*** ./src@4.0/assets/plugins/jason_data/news_list.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var news_list = [
          {
            title: "大摩典藏珍稀年份<br>典藏木盒獨獻台灣",
            imgSrc: [
              "assets/img/news/img_newsInpage-01.webp",
              "assets/img/news/img_newsInpage-01.webp",
            ],
            textContent:
              "坐擁蘇格蘭最古老橡木桶藏的「老酒銀行」大摩酒廠，發布全新系列《大摩典藏珍稀年份系列 The Dalmore Vintages》歡慶釀酒工藝至高成就，限量酒款 Vintage 2002、Vintage 2005 將在特定亞洲市場預先曝光，再往全球各大城市發布，而尚格酒業更將限量精裝木盒版本獨獻台灣，搶先全球首發上市。",
            aHref: "news-inpage-01.html",
          },
          {
            title: "大摩2022鎏金奢展<br>雋藏奧藝l老酒銀行",
            imgSrc: [
              "assets/img/news/img_newsInpage-02.webp",
              "assets/img/news/img_newsInpage-02.webp",
            ],
            textContent:
              "「大摩2022鎏金奢展」於01月13日展出至01月23日於台北微風南山藝文中心，限期展出11天。以「老酒銀行」金庫大門及鎏光熠熠的保險櫃，​其中存放著來自時光淬鍊的大摩歷史里程碑及珍稀酒液為展覽設計核心概念，演繹大摩近兩百年來的酒廠歷史、人文精神、極致工藝，深度探究時間沉澱下的非凡價值。",
            aHref: "news-inpage-02.html",
          },
          {
            title: "稀世珍品大摩62年<br>再破拍賣紀錄",
            imgSrc: [
              "assets/img/news/img_newsInpage-03.webp",
              "assets/img/news/img_newsInpage-03.webp",
            ],
            textContent:
              "蘇富比於2020年5月14日展開一場名為點滴成金的線上烈酒拍賣會，共有216項威士忌、干邑等烈酒珍稀拍品。此拍賣已於倫敦時間2020年5月28日晚上8點結束，並由兩瓶大摩62年以預估價兩倍多的高價並列成為此拍賣會最高拍價的珍品，成交價同為 GBP£266,200英鎊(約台幣1000萬)。「大摩62年，一滴都不能浪費。」（Dalmore 62 –can't let a drop hit the floor！），這句來自電影《金牌特務》的經典對白，說明了大摩威士忌的彌足珍貴，更屢屢締造拍賣市場不朽傳奇。",
            aHref: "news-inpage-03.html",
          },
          {
            title: "歡慶大摩酒廠180年<br>雪莉12年驚豔上市",
            imgSrc: [
              "assets/img/news/img_newsInpage-04.webp",
              "assets/img/news/img_newsInpage-04.webp",
            ],
            textContent:
              "蘇格蘭高地區的「老酒銀行」大摩酒廠在2019年末歡度180歲生日，這場世紀慶生持續到2020年，仍讓全球威士忌市場興奮不已，大摩不只推出紀念輝煌時刻的180週年紀念酒──全球限量三瓶的大摩60年單一麥芽威士忌，並上市目前最高年份的大摩51年與全新「雪莉甄選系列」12年單一麥芽威士忌，不僅如此，大摩全系列包裝也全面換新裝，設計更顯尊榮奢華，邀請全世界酒迷一同慶祝大摩威士忌走入下一個180年。",
            aHref: "news-inpage-04.html",
          },
          {
            title: "大摩50年珍稀登場<br>首創入香檳桶",
            imgSrc: [
              "assets/img/news/img_newsInpage-05.webp",
              "assets/img/news/img_newsInpage-05.webp",
            ],
            textContent:
              "為了誌慶大摩（The Dalmore）單一麥芽威士忌首席釀酒師Richard Paterson，自17歲踏進威士忌領域，26歲當上大摩首席釀酒師至今屆滿50年，這位素有「神之鼻」美譽的威士忌大師以累積50年的輝煌製酒成就，悉心打造一款史無前例的大摩50年大師典藏單一麥芽蘇格蘭威士忌，全球限量發行50瓶",
            aHref: "news-inpage-05.html",
          },
          {
            title: "大摩築光大師系列No.1<br>攜手隈研吾再創高峰",
            imgSrc: [
              "assets/img/news/img_newsInpage-06.webp",
              "assets/img/news/img_newsInpage-06.webp",
            ],
            textContent:
              "全球窖藏最稀有威士忌的「老酒銀行」大摩酒廠，近年來與蘇格蘭第一座設計博物館V&A Dundee合作密切，促成當代建築大師與威士忌大師的協作，並於2022年上市全新酒款系列，「大摩築光大師系列」。",
            aHref: "news-inpage-06.html",
          },
          {
            title: "大摩築光大師系列No.1<br>2022限定版 限量首發",
            imgSrc: [
              "assets/img/news/img_newsInpage-07.webp",
              "assets/img/news/img_newsInpage-07.webp",
            ],
            textContent:
              "首創以三種珍稀橡木桶，蘇格蘭橡木桶 (Tay Oak)、日本水楢桶和美國白橡木桶，訂製成「金繼」（Kintsugi）橡木桶，並陳釀出具有多重獨特風味且完美平衡的單一麥芽威士忌，全球限量15,000瓶。",
            aHref: "news-inpage-07.html",
          },
          {
            title: "大摩璀璨18年 2023 Edition<br>鎏光之藝 限量桶藏",
            imgSrc: [
              "assets/img/news/img_newsInpage-09.webp",
              "assets/img/news/img_newsInpage-09-mb.webp",
            ],
            textContent:
              "大摩老酒經典之一－大摩18年單一麥芽蘇格蘭威士忌，於2021年全球熱銷一空後，造成威士忌鑑賞家的一片惋惜。今年，2023年全面升級，全新磅礡上市「大摩璀璨18年單一麥芽蘇格蘭威士忌 －2023 Edition -」",
            aHref: "news-inpage-09.html",
          },
          {
            title: "大摩典藏珍稀年份<br>雋永時光定義珍稀",
            imgSrc: [
              "assets/img/news/img_newsInpage-08.webp",
              "assets/img/news/img_newsInpage-08-mb.webp",
            ],
            textContent:
              "擁有最尊貴威士忌的大摩酒廠，去年發布全新系列《大摩典藏珍稀年份系列 Vintages 2002/2005》歡慶釀酒工藝至高成就，以限量精裝木盒版本獨獻台灣，成為去年最熱門的收藏話題。",
            aHref: "news-inpage-08.html",
          },
          {
            title: "攜手台北慕舍酒店<br>打造輝煌8月盛宴",
            imgSrc: [
              "assets/img/news/img_newsInpage-10.webp",
              "assets/img/news/img_newsInpage-10.webp",
            ],
            textContent:
              "尚格酒業為歡慶屬於每一位父親的8月，從8月8日至9月10日為期一個月，大摩單一麥芽蘇格蘭威士忌與薈萃美食、藝術與生活品味的國際精品酒店HOTEL MVSA 慕舍酒店雙強聯名，透過世界最尊貴威士忌和令人嚮往傾慕的生活居舍，共享點滴珍藏的美好時光。",
            aHref: "news-inpage-10.html",
          },
          {
            title: "大摩傳奇巡禮<br>共譜恆久璀璨",
            imgSrc: [
              "assets/img/news/img_newsInpage-11.webp",
              "assets/img/news/img_newsInpage-11.webp",
            ],
            textContent:
              "「大摩傳奇巡禮・共譜恆久璀璨」邀請消費者經歷一場跨時空、跨國界的奢華之旅。在有「神之鼻」美譽的大摩首席釀酒師Richard Paterson及新科年度最佳釀酒師－大摩總製酒師Gregg Glass的帶領下，消費者得以藝遊大摩經典佳釀的傳奇篇章，並駐足品酩全新上市的「大摩璀璨18年－2023 Edition -」",
            aHref: "news-inpage-11.html",
          },
        ];
        /* harmony default export */ __webpack_exports__["default"] = news_list;

        /***/
      },

    /***/ "./src@4.0/assets/plugins/jason_data/stores_list.js":
      /*!**********************************************************!*\
  !*** ./src@4.0/assets/plugins/jason_data/stores_list.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var all_stores = [
          {
            sort: 1,
            store: "萬華煙酒",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區和平西路三段103號",
            tel: "02-2302-7896",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "酒國大亨",
            area: "台北市",
            city_area: "萬華區",
            address: "台北萬華區南寧路45-2號",
            tel: "02-2306-0102",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "金淬",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區廣州街202號",
            tel: "02-2308-5647",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(仁愛店)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區東豐街21號",
            tel: "02-2325-6256",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "富盛",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區柳州街38號",
            tel: "02-2331-3269",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "齊泰",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區昆明街150號",
            tel: "02-2331-5147",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "風格和平",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區和平西路三段163號",
            tel: "02-2336-1759",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "酒世界中正",
            area: "台北市",
            city_area: "中正區",
            address: "台北市中正區中華路二段313巷16號",
            tel: "02-2337-6665",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "珈品",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區永康街42號",
            tel: "02-2357-8772",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "萬益",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區柳州街40-1號",
            tel: "02-2382-1665",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "駱北洋行",
            area: "台北市",
            city_area: "萬華區",
            address: "台北市萬華區貴陽街二段164巷32號",
            tel: "02-2383-2201",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(古亭門市)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區杭州南路二段107號1樓",
            tel: "02-2391-0700",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "阿爾發",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區復興北路514巷2號",
            tel: "02-2504-7123",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "柏達",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區民權東路二段152巷22弄2號",
            tel: "02-2509-8480",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "銀豐",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區林森北路133巷68號",
            tel: "02-2511-6804",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(松江門市)",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區松江路131號",
            tel: "02-2516-1916",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "永利",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區民生東路二段79號",
            tel: "02-2523-8019",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "松林",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區南京東路二段21巷8號",
            tel: "02-2531-5741",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(中山門市)",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區中山北路二段46號1樓",
            tel: "02-2531-9751",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "劉恆裕",
            area: "台北市",
            city_area: "大同區",
            address: "台北市大同區民生西路342號",
            tel: "02-2556-0948",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "橡木桶松江店",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區松江路190號",
            tel: "02-2562-8000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "嘉利",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區林森北路438號",
            tel: "02-2563-3969",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "金盃",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區新生北路二段62巷42號",
            tel: "02-2581-1651",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "陽光美酒薈(佳醇)",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區松江路18號",
            tel: "02-2581-8520",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "海納川",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區吉林路225號",
            tel: "02-2581-8590",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "灃姵酒業",
            area: "台北市",
            city_area: "內湖區",
            address: "台北市內湖區安康路422號",
            tel: "02-2631-5761",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "振宜",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區忠孝東路六段491號",
            tel: "02-2651-1328",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(忠孝店)",
            area: "台北市",
            city_area: "南港區",
            address: "台北市南港區忠孝東路六段386號",
            tel: "02-2651-9939",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "七三七",
            area: "台北市",
            city_area: "內湖區",
            address: "台北市內湖區內湖路一段737巷51弄3號",
            tel: "02-2657-9130",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "提瑪",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區信義路四段254號",
            tel: "02-2700-0259",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "大葡園",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區敦化南路一段102-1號",
            tel: "02-2702-5053",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(信義門市)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區信義路四段267號1樓",
            tel: "02-2703-0233",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "丹騰",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區大安路一段31巷19號C室",
            tel: "02-2704-3507",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(信義店)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區信義路3段128號",
            tel: "02-2708-0583",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(敦二門市)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區敦化南路二段98號1樓",
            tel: "02-2708-0751",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "美多客",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區東豐街77號",
            tel: "02-2708-8721",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "洋酒城-仁愛",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區仁愛路四段112巷21號",
            tel: "02-2709-5168",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(敦一門市)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區敦化南路1段196號",
            tel: "02-2711-0019",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(光華店)",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區渭水路56號",
            tel: "02-2711-6118",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(民生門市)",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區民生東路四段58號1樓",
            tel: "02-2718-8826",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "酒州復興店",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區復興南路一段31號",
            tel: "02-2721-6111",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "楠興",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區信義路六段91號",
            tel: "02-2728-2775",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(復興門市)",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區復興北路84號1樓",
            tel: "02-2752-5991",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "忠佳",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區松德路287號",
            tel: "02-2759-7533",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "海城",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區松山路289號",
            tel: "02-2765-9366",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "好酒多",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區八德路四段200號",
            tel: "02-2768-1786",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "一酒七五",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區市民大道五段127號",
            tel: "02-2768-1975",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(市政府門市)",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區忠孝東路五段51號1樓",
            tel: "02-2769-6099",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "金釀",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區仁愛路四段411號",
            tel: "02-2772-0101",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(延吉店)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區延吉街128-1號",
            tel: "02-2779-0866",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "友美",
            area: "台北市",
            city_area: "南港區",
            address: "台北市南港區舊莊街二段3號",
            tel: "02-2782-8469",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "金瑞成",
            area: "台北市",
            city_area: "南港區",
            address: "台北市南港區忠孝東路七段601號",
            tel: "02-2786-2239",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "世達",
            area: "台北市",
            city_area: "北投區",
            address: "台北市北投區文林北路176號",
            tel: "02-2823-5777",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "飛久",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區北路六段27號",
            tel: "02-2832-1099",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "承合",
            area: "台北市",
            city_area: "士林區",
            address: "台北市士林區文林路587巷115號",
            tel: "02-2832-2911",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "展宸",
            area: "台北市",
            city_area: "士林區",
            address: "台北市士林區福港街149巷15弄8號",
            tel: "02-2881-5818",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "銀盤士林",
            area: "台北市",
            city_area: "士林區",
            address: "台北市士林區大北路85號",
            tel: "02-2881-6828",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "大象",
            area: "台北市",
            city_area: "文山區",
            address: "台北市文山區保儀路124號",
            tel: "02-2939-3439",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "昌富塔悠",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區塔悠路17號",
            tel: "02-3765-5899",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "佳賀(永吉店)",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區永吉路120巷90號",
            tel: "02-7729-4999",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "康喜客-松山",
            area: "台北市",
            city_area: "松山區",
            address: "台北市松山區光復北路136號",
            tel: "02-8770-7555",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "好窩",
            area: "台北市",
            city_area: "中山區",
            address: "台北市中山區長安東路二段286號",
            tel: "02-8772-0014",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "鼎豐",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區延吉街62巷6弄1號",
            tel: "02-8772-8820",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(仁愛門市)",
            area: "台北市",
            city_area: "大安區",
            address: "台北市大安區仁愛路4段29號1樓",
            tel: "02-8773-2607",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "買酒網(內湖旗艦門市)",
            area: "台北市",
            city_area: "內湖區",
            address: "台北市內湖區行愛路77巷69號1樓",
            tel: "02-8792-5186",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "沃利特",
            area: "台北市",
            city_area: "信義區",
            address: "台北市信義區永吉路278巷2-3號",
            tel: "0933-475-210",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "小六",
            area: "台北市",
            city_area: "中正區",
            address: "台北市中正區中華路二段311巷6號",
            tel: "0935-315-308",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 1,
            store: "添酒",
            area: "台北市",
            city_area: "南港區",
            address: "台北市南港區東興街94號",
            tel: "0965-435-145",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "新莊昌富",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區新樹路226號",
            tel: "02-2204-0691",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "麥德理新莊",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區龍安街226號",
            tel: "02-2208-5116",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "新店李",
            area: "新北市",
            city_area: "新店區",
            address: "新北市新店區安康路二段359號",
            tel: "02-2215-6555",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "瑞騰恆大",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區莒光路55號",
            tel: "02-2223-5788",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "佳賀(環球店)",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區中山路三段99號",
            tel: "02-2226-9990",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "佳賀(中和店)",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區中山路二段401-1號",
            tel: "02-2228-6981",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "宥翔洋行",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區民享街7號",
            tel: "02-2228-9877",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "京翰",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區員山路400號",
            tel: "02-2228-9897",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "名酒集",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區成功路一段93巷23弄13號",
            tel: "02-2232-4199",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "嘉展",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區景平路576號",
            tel: "02-2243-8361",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "昭業",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區雨農路5號",
            tel: "02-2255-5011",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "榮榮菸酒專賣店",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區大仁街42號",
            tel: "02-2272-0102",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "歐洲酒集",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區立信一街52號",
            tel: "02-2276-8898",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "阿米可",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區三和路4段292巷13號",
            tel: "02-2280-7000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "酒饌",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區福隆路3號",
            tel: "02-2280-9666",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "三華",
            area: "新北市",
            city_area: "五股區",
            address: "新北市五股區更洲路23-1號",
            tel: "02-2282-1112",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "百萬家",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區三民路26巷49弄2號",
            tel: "02-2285-1230",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "立萬行",
            area: "新北市",
            city_area: "五股區",
            address: "新北市五股區成泰路三段161號",
            tel: "02-2291-8837",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "全球(林口)",
            area: "新北市",
            city_area: "林口區",
            address: "新北市林口區中山路237號",
            tel: "02-2601-9757",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 2,
            store: "開翔",
            area: "新北市",
            city_area: "淡水區",
            address: "新北市淡水區學府路60-3號",
            tel: "02-2620-2080",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "鼎級",
            area: "新北市",
            city_area: "深坑區",
            address: "新北市深坑區北深路三段111號",
            tel: "02-2664-4888",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "尚鋒",
            area: "新北市",
            city_area: "三峽區",
            address: "新北市三峽區大勇路15號",
            tel: "02-2672-9786",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "正誠行",
            area: "新北市",
            city_area: "三峽區",
            address: "新北市三峽區國光街386號",
            tel: "02-2673-1515",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "匯眾",
            area: "新北市",
            city_area: "三峽區",
            address: "新北市三峽區光明路72號",
            tel: "02-2673-7310",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "拿破崙",
            area: "新北市",
            city_area: "樹林區",
            address: "新北市樹林區保安街二段2-7號",
            tel: "02-2675-0780",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "嘉辰",
            area: "新北市",
            city_area: "汐止區",
            address: "新北市汐止區康寧街514號",
            tel: "02-2695-6697",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "大楚",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區進安街41號",
            tel: "02-2857-8957",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "玖頻道",
            area: "新北市",
            city_area: "泰山區",
            address: "新北市泰山區明志路三段217號",
            tel: "02-2906-6566",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 2,
            store: "春泰",
            area: "新北市",
            city_area: "新店區",
            address: "新北市新店區中興路一段291號",
            tel: "02-2917-5159",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "富淯",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區中正路383號",
            tel: "02-2926-2188",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "佳釀I CHEERS 愛酒窩",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區成功路一段80號",
            tel: "02-2926-3667",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "佳賀(樂華店)",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區永和路一段127號",
            tel: "02-2926-7108",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "宇釀",
            area: "新北市",
            city_area: "中和區",
            address: "新北市中和區自立路99巷13號",
            tel: "02-2947-5557",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "酒海商行",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區貴興路1號",
            tel: "02-2950-4515",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "覓九洋酒行",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區民族路147號",
            tel: "02-2955-8889",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "展順",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區僑中一街126號",
            tel: "02-2966-1167",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "薰嵐菸酒",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區大觀路2段11號",
            tel: "02-2967-7779",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "三禾菸酒",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區介壽路19號",
            tel: "02-2972-2792",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "金盈酒藏集成店",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區集成路30號",
            tel: "02-2976-1989",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "全億菸酒有限公司",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區集美街234-236-238號1F",
            tel: "02-2977-0466",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "豪久",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區中正北路16號1樓",
            tel: "02-2980-2450",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "萬泰",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區民生街70號",
            tel: "02-2983-1924",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "金盈酒藏忠孝店",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區忠孝路三段9號",
            tel: "02-2989-0986",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "仟恩",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區五華街110號",
            tel: "02-2989-6633",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "圜桂桶",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區中誠街46巷4弄1號",
            tel: "02-2990-5100",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "土城酒庫(婕羽)",
            area: "新北市",
            city_area: "土城區",
            address: "新北市土城區中正路64號1樓",
            tel: "02-8261-5100",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "麥德理土城",
            area: "新北市",
            city_area: "土城區",
            address: "新北市土城區中央路一段170號",
            tel: "02-8261-6328",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "琮茂",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區中原路12巷15號",
            tel: "02-8282-7337",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "民族商行",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區復興路277號",
            tel: "02-8283-5576",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "譽揚洋酒",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區三民路263號",
            tel: "02-8285-0118",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "偉成",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區中正路217號",
            tel: "02-8285-8232",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "酒霸王蘆洲",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區中山一路258號",
            tel: "02-8286-0592",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "良新",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區長興路152號",
            tel: "02-8286-1942",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "恆世聖鼎",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區中央路220號4樓",
            tel: "02-8522-3900",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "酒源",
            area: "新北市",
            city_area: "新店區",
            address: "新北市新店區車子路121號",
            tel: "02-8555-5395",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "啤酒大學",
            area: "新北市",
            city_area: "淡水區",
            address: "新北市淡水區民權路177-3號",
            tel: "02-8631-4329",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "立誠行",
            area: "新北市",
            city_area: "鶯歌區",
            address: "新北市鶯歌區尖山路185號",
            tel: "02-8678-1505",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "酒世界樹林",
            area: "新北市",
            city_area: "樹林區",
            address: "新北市樹林區中華路233號",
            tel: "02-8686-8768",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "正琪",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區重慶路291號",
            tel: "02-8953-3600",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "佳賀(板新店)",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區中山路二段9號",
            tel: "02-8953-8966",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "賣酒",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區大榮街9號",
            tel: "02-8981-6670",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "久倫酒國聯軍",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區雙園街134號",
            tel: "02-8981-7707",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "恆生",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區三陽路37號",
            tel: "02-8982-9299",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "宏聲",
            area: "新北市",
            city_area: "三重區",
            address: "新北市三重區自強路二段23號",
            tel: "02-8988-3201",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "豊棋",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區中平路32號",
            tel: "02-8993-6137",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "喜沅商行",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區中和街84號",
            tel: "02-8994-1632",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "迪達",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區福和路131號",
            tel: "0916-333-938",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "巷弄洋酒",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區光榮路136號",
            tel: "0916-873-749",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "叡鴻",
            area: "新北市",
            city_area: "新莊區",
            address: "新北市新莊區中正路899-1號",
            tel: "0918-326-903",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "緯峰洋酒",
            area: "新北市",
            city_area: "蘆洲區",
            address: "新北市蘆洲區復興路176號",
            tel: "0933-818-435",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 2,
            store: "168酒業",
            area: "新北市",
            city_area: "永和區",
            address: "新北市永和區保福路二段69號",
            tel: "0958-135-925",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "熊鑽菸酒",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區金門街335號",
            tel: "0958-919-335",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 2,
            store: "龍合",
            area: "新北市",
            city_area: "板橋區",
            address: "新北市板橋區四川路一段8號",
            tel: "0970-666-126",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 3,
            store: "進益",
            area: "基隆市",
            city_area: "仁愛區",
            address: "基隆市仁愛區愛一路19號",
            tel: "02-2422-4845",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 3,
            store: "晶鴻",
            area: "基隆市",
            city_area: "安樂區",
            address: "基隆市安樂區基金一路117-19號",
            tel: "02-2434-7000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "中華菸酒",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區中平路152號",
            tel: "03-220-0521",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "金弘笙桃園店",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區經國路402號",
            tel: "03-263-1444",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "桂冠",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區莒光路43號",
            tel: "03-283-0079",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "酒超市",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區領航北路二段75號",
            tel: "03-287-3823",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "欣酒",
            area: "桃園市",
            city_area: "蘆竹區",
            address: "桃園市蘆竹區新南路一段18號",
            tel: "03-311-7838",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "桃鑫",
            area: "桃園市",
            city_area: "蘆竹區",
            address: "桃園市蘆竹區大竹路426-3號",
            tel: "03-313-3328",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "奕鑫行",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區大業路一段290號",
            tel: "03-325-3272",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "醇酒坊",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區大興西路二段18號",
            tel: "03-326-2999",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "桃山",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區民族路190號",
            tel: "03-332-2455",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "吉隆行",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區民生路533號",
            tel: "03-336-1899",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "酒園龜山",
            area: "桃園市",
            city_area: "龜山區",
            address: "桃園市龜山區萬壽路二段1230號",
            tel: "03-349-5548",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "光泉",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區大興路7號",
            tel: "03-355-4482",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "吉安",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區慈文路347號",
            tel: "03-358-0407",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "怡和",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區大興西路一段311號",
            tel: "03-358-1305",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "萬達(桃園)",
            area: "桃園市",
            city_area: "龜山區",
            address: "桃園市龜山區萬壽路二段925號",
            tel: "03-359-7806",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "醇金酒藏",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區樹仁三街27號",
            tel: "03-363-0191",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 4,
            store: "泓泰行",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區大林路18號",
            tel: "03-363-7772",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "嵩威",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區桃鶯路119號",
            tel: "03-366-0782",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "榑倉",
            area: "桃園市",
            city_area: "八德區",
            address: "桃園市八德區和平路142號1樓",
            tel: "03-367-3505",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "木適坊",
            area: "桃園市",
            city_area: "桃園區",
            address: "桃園市桃園區中正路1108號",
            tel: "03-375-3292#9188",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "宸瀧煙酒",
            area: "桃園市",
            city_area: "八德區",
            address: "桃園市八德區義勇街35號",
            tel: "03-377-9919",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "巨江洋酒",
            area: "桃園市",
            city_area: "大溪區",
            address: "桃園市大溪區介壽路924號",
            tel: "03-380-2056",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "海珊",
            area: "桃園市",
            city_area: "大園區",
            address: "桃園市大園區新興路50號",
            tel: "03-386-3955",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "大樹",
            area: "桃園市",
            city_area: "大園區",
            address: "桃園市大園區新生路91號",
            tel: "03-386-9499",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 4,
            store: "杜拜",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區延平路二段9號",
            tel: "03-402-3666",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "新聯合",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區過嶺里民族路五段108號",
            tel: "03-420-3610",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "紅酒堡",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區環北路375號",
            tel: "03-422-5646",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "同洵洋行",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區民權路三段299號",
            tel: "03-426-8448",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "喜洋洋中壢",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區元生三街123號1F",
            tel: "03-435-5938",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "安勝上海",
            area: "桃園市",
            city_area: "平鎮區",
            address: "桃園市平鎮區上海路171號",
            tel: "03-439-9957",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "成功",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區成章二街200號",
            tel: "03-451-6317",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 4,
            store: "弘軒煙酒",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區福州路107號",
            tel: "03-456-0191",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "松山洋行",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區廈門路38號",
            tel: "03-459-1512",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "利來福",
            area: "桃園市",
            city_area: "楊梅區",
            address: "桃園市楊梅區泰圳路408巷61號",
            tel: "03-460-6169",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "阿樹菸酒",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區龍岡路3段289號",
            tel: "03-460-7375",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "佳品中壢",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區中園路二段435號之1",
            tel: "03-462-6666",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "安勝",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區中山東路三段15號",
            tel: "03-466-6919",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "昌成商行",
            area: "桃園市",
            city_area: "楊梅區",
            address: "桃園市楊梅區秀才路63號",
            tel: "03-478-4989",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "世鴻商行",
            area: "桃園市",
            city_area: "楊梅區",
            address: "桃園市楊梅區楊新北路21巷1號",
            tel: "03-478-7289",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 4,
            store: "順宏洋酒",
            area: "桃園市",
            city_area: "龍潭區",
            address: "桃園市龍潭區龍元路111號",
            tel: "03-480-2057",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "碧洱龍潭",
            area: "桃園市",
            city_area: "龍潭區",
            address: "桃園市龍潭區中正路239號",
            tel: "03-480-5385",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "立基",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區民族路五段101號",
            tel: "03-490-1050",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "總元",
            area: "桃園市",
            city_area: "平鎮區",
            address: "桃園市平鎮區延平路二段302號",
            tel: "03-492-6000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "金豪酒",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區新明路37號",
            tel: "03-493-2121",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "久典",
            area: "桃園市",
            city_area: "龍潭區",
            address: "桃園市龍潭區龍華路371號",
            tel: "03-499-0611",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "別緻",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區中山路247號",
            tel: "0900-045-583",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "九冠",
            area: "桃園市",
            city_area: "平鎮區",
            address: "桃園市平鎮區民族路153-1號",
            tel: "0912-887-727",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "酒盟",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區環西路33號",
            tel: "0915-001-381",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "森寶",
            area: "桃園市",
            city_area: "八德區",
            address: "桃園市八德區介壽路二段1466號",
            tel: "0937-963-424",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "瀧德菸酒",
            area: "桃園市",
            city_area: "龜山區",
            address: "桃園市龜山區忠義路二段395號",
            tel: "0980-347-818",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 4,
            store: "威市集",
            area: "桃園市",
            city_area: "中壢區",
            address: "桃園市中壢區華祥一街3巷8號",
            tel: "0987-177-778",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "金樽竹北",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市光明六路東二段7號",
            tel: "03-550-9309",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "旭亨竹北",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市縣政二路512號",
            tel: "03-555-7388",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "景裕商行",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市鳳岡路二段151巷56號",
            tel: "03-556-0160",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "發發發",
            area: "新竹縣",
            city_area: "新豐鄉",
            address: "新竹縣新豐鄉新興路269號",
            tel: "03-559-1199",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "八八八",
            area: "新竹縣",
            city_area: "竹東鎮",
            address: "新竹縣竹東鎮長春路三段82號",
            tel: "03-596-6151",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "國豐",
            area: "新竹縣",
            city_area: "湖口鄉",
            address: "新竹縣湖口鄉成功路89號",
            tel: "03-599-1055",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "正泓洋酒",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市博愛街204-1號",
            tel: "03-656-5166",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "彬宏煙酒",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市中華路119號",
            tel: "03-656-5888",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 5,
            store: "艾薇洋酒",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市莊敬南路53號",
            tel: "03-657-6354",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 5,
            store: "酒心",
            area: "新竹縣",
            city_area: "湖口鄉",
            address: "新竹縣湖口鄉中山路一段608號",
            tel: "0910-733-249",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 5,
            store: "酒管家",
            area: "新竹縣",
            city_area: "竹北市",
            address: "新竹縣竹北市福興路794號",
            tel: "0916-633-221",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "旭品洋酒",
            area: "新竹市",
            city_area: "東區",
            address: "新竹市東區東門街104號",
            tel: "03-522-2622",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "大豐行",
            area: "新竹市",
            city_area: "北區",
            address: "新竹市北區北門街193號",
            tel: "03-525-3092",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "國暉",
            area: "新竹市",
            city_area: "北區",
            address: "新竹市北區延平路一段340號",
            tel: "03-525-6599",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "新茂洋菸酒",
            area: "新竹市",
            city_area: "北區",
            address: "新竹市北區經國路二段249號",
            tel: "03-533-4579",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "太丸",
            area: "新竹市",
            city_area: "東區",
            address: "新竹市東區民權路61號",
            tel: "03-535-2527",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "文彬",
            area: "新竹市",
            city_area: "香山區",
            address: "新竹市香山區牛埔南路532號",
            tel: "03-538-1225",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "呈鑫",
            area: "新竹市",
            city_area: "東區",
            address: "新竹市東區光復路一段48號",
            tel: "03-577-9069",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "布萊恩菸酒",
            area: "新竹市",
            city_area: "東區",
            address: "新竹市東區長春街121號",
            tel: "03-579-0377",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "茂豐行",
            area: "新竹市",
            city_area: "北區",
            address: "新竹市北區林森路275號",
            tel: "0938-027-028",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 6,
            store: "合順",
            area: "新竹市",
            city_area: "東區",
            address: "新竹市東區民生路266號",
            tel: "0965-393-669",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "酒樂",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市新民路84號",
            tel: "03-932-5085",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "明興",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市神農路一段26號",
            tel: "03-932-5259",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "酒殿",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市宜興路二段2號",
            tel: "03-932-9579",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "花天酒地(翰德)",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市舊城東路49號",
            tel: "03-933-2038",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "皇后道",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市新興路88號",
            tel: "03-933-3385",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "堡鳳",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市農權路23號",
            tel: "03-935-2532",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "申野",
            area: "宜蘭縣",
            city_area: "宜蘭市",
            address: "宜蘭縣宜蘭市宜興路一段283號",
            tel: "03-938-0822",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "愛琳酒",
            area: "宜蘭縣",
            city_area: "羅東鎮",
            address: "宜蘭縣羅東鎮公正路289-1號",
            tel: "03-951-0209",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "光昌商行",
            area: "宜蘭縣",
            city_area: "羅東鎮",
            address: "宜蘭縣羅東鎮興東路9號",
            tel: "03-955-8286",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "百晟行",
            area: "宜蘭縣",
            city_area: "羅東鎮",
            address: "宜蘭縣羅東鎮興東南路49號",
            tel: "03-956-0476",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "一路發",
            area: "宜蘭縣",
            city_area: "冬山鄉",
            address: "宜蘭縣冬山鄉冬山路五段269號",
            tel: "03-958-5499",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "欣龍",
            area: "宜蘭縣",
            city_area: "冬山鄉",
            address: "宜蘭縣冬山鄉冬山路五段277號",
            tel: "03-958-9352",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 7,
            store: "酒窩",
            area: "宜蘭縣",
            city_area: "礁溪鄉",
            address: "宜蘭縣礁溪鄉中山路二段29號",
            tel: "03-988-7311",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "界明洋酒",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區台灣大道2段50號",
            tel: "04-2201-2103",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "茂綸菸酒",
            area: "台中市",
            city_area: "北區",
            address: "台中市北區公園路140號",
            tel: "04-2206-7675",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "一品夫人菸酒",
            area: "台中市",
            city_area: "東區",
            address: "台中市東區樂業路211號",
            tel: "04-2211-1765",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "一品夫人菸酒-旱溪店",
            area: "台中市",
            city_area: "東區",
            address: "台中市東區旱溪街54-1號",
            tel: "04-2211-3784",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "精湛酒藏",
            area: "台中市",
            city_area: "東區",
            address: "台中市東區樂業路396號",
            tel: "04-2212-1788",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "麥金酒洋行",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區柳川西路二段188號",
            tel: "04-2220-2582",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "茂峰菸酒",
            area: "台中市",
            city_area: "中區",
            address: "台中市中區自由路二段54號",
            tel: "04-2225-2525",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "宸逸洋酒",
            area: "台中市",
            city_area: "北區",
            address: "台中市北區進化北路364號",
            tel: "04-2236-0092",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "哈利洋酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區崇德路二段308號",
            tel: "04-2241-6658",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "北台中商行",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區昌平路一段143號",
            tel: "04-2244-0529",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "寶佳洋酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區崇德路2段482號",
            tel: "04-2249-1710",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "文心商行",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區文心路1段437號",
            tel: "04-2258-2088",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "利百加洋酒-復興店",
            area: "台中市",
            city_area: "南區",
            address: "台中市南區復興路二段120-6號",
            tel: "04-2262-5523",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "松賀洋酒-高工店",
            area: "台中市",
            city_area: "南區",
            address: "台中市南區高工路500號",
            tel: "04-2265-5885",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "南區楊菸酒",
            area: "台中市",
            city_area: "南區",
            address: "台中市南區五權南路243號",
            tel: "04-2265-6789",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "大衛洋行",
            area: "台中市",
            city_area: "東區",
            address: "台中市東區建成路733號",
            tel: "04-2283-1199",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "日盛菸酒",
            area: "台中市",
            city_area: "南區",
            address: "台中市南區合作街50號",
            tel: "04-2285-0961",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "禾紳洋酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區中平路696號1樓",
            tel: "04-2295-8138",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "葡晶洋酒-市政店",
            area: "台中市",
            city_area: "西屯區",
            address: "台中市西屯區河南路四段103號",
            tel: "04-2297-8055",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "桂貫洋酒",
            area: "台中市",
            city_area: "北區",
            address: "台中市北區漢口路3段259號",
            tel: "04-2299-4100",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "富雅酒莊",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區中興街122巷19號",
            tel: "04-2301-3699",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "暐倫洋酒",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區美村路一段241號",
            tel: "04-2305-0688",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "龍穴酒坊",
            area: "台中市",
            city_area: "西屯區",
            address: "台中市西屯區河南路ㄧ段56號",
            tel: "04-2317-2929",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "安迪洋行",
            area: "台中市",
            city_area: "西屯區",
            address: "台中市西屯區寧夏路217號",
            tel: "04-2317-3430",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "美感臨酒",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區向上路一段502號",
            tel: "04-2320-5723",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "金業洋酒",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區大業路5號",
            tel: "04-2326-1701",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "日升菸酒",
            area: "台中市",
            city_area: "烏日區",
            address: "台中市烏日區五光路1003號",
            tel: "04-2337-4858",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "百淳洋酒",
            area: "台中市",
            city_area: "烏日區",
            address: "台中市烏日區新興路433號",
            tel: "04-2337-9953",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "貳零酒商行",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區樂群街209號1樓",
            tel: "04-2371-8181",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "紅頂菸酒",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區環中路四段56號",
            tel: "04-2385-0480",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "犁頭店菸酒",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區黎明路一段1079號",
            tel: "04-2385-1925",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "茂林洋酒",
            area: "台中市",
            city_area: "太平區",
            address: "台中市太平區新平路三段171號",
            tel: "04-2391-0582",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒號倉庫-大里店",
            area: "台中市",
            city_area: "大里區",
            address: "台中市大里區爽文路1121號",
            tel: "04-2406-3246",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 8,
            store: "酒號倉庫-總倉",
            area: "台中市",
            city_area: "大里區",
            address: "台中市大里區爽文路398號",
            tel: "04-2406-4648",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒甕菸酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區中清路二段1026號",
            tel: "04-2426-0208",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "盛紅菸酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區中清路二段918號",
            tel: "04-2426-9068",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "威富酒坊",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區軍福十六路356-2號",
            tel: "04-2436-2953",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "群茂洋酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區東山路一段326號",
            tel: "04-2436-8319",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "大墩東山洋酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區東山路1段148號",
            tel: "04-2437-3166",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "哈斯葵洋酒",
            area: "台中市",
            city_area: "西屯區",
            address: "台中市西屯區河南路二段301巷50號",
            tel: "04-2437-6878",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "弘川藏酒閣",
            area: "台中市",
            city_area: "西屯區",
            address: "台中市西屯區黎明路三段30號",
            tel: "04-2452-6000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "台灣自來酒",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區大墩四街327號",
            tel: "04-2471-8833",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "安泰洋酒",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區向上南路一段321號",
            tel: "04-2473-5089",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "收藏家洋酒",
            area: "台中市",
            city_area: "南屯區",
            address: "台中市南屯區永春東路198號",
            tel: "04-2473-9696",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 8,
            store: "京旺菸酒-益民店",
            area: "台中市",
            city_area: "大里區",
            address: "台中市大里區益民路二段301號",
            tel: "04-2487-5390",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "寶聯行",
            area: "台中市",
            city_area: "豐原區",
            address: "台中市豐原區豐勢路二段31號",
            tel: "04-2523-0403",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "亞德倫菸酒-向陽店",
            area: "台中市",
            city_area: "豐原區",
            address: "台中市豐原區向陽路170巷9號",
            tel: "04-2525-1425",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒哉菸酒",
            area: "台中市",
            city_area: "豐原區",
            address: "台中市豐原區豐東路556號",
            tel: "04-2526-1419",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒江村菸酒",
            area: "台中市",
            city_area: "神岡區",
            address: "台中市神岡區大富路9號",
            tel: "04-2527-8861",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "品藏洋酒(豐原店)",
            area: "台中市",
            city_area: "豐原區",
            address: "台中市豐原區大明路32號",
            tel: "04-2529-5288",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "以全菸酒商行",
            area: "台中市",
            city_area: "潭子區",
            address: "台中市潭子區潭秀里中山路二段474-2號1樓",
            tel: "04-2533-1621",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "威爾森洋酒",
            area: "台中市",
            city_area: "潭子區",
            address: "台中市潭子區雅潭路二段252號",
            tel: "04-2533-5883",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "吉菖洋酒",
            area: "台中市",
            city_area: "神岡區",
            address: "台中市神岡區神林路88號",
            tel: "04-2563-1080",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒國英豪菸酒",
            area: "台中市",
            city_area: "大雅區",
            address: "台中市大雅區民生路三段356號",
            tel: "04-2566-4710",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "拉菲菸酒",
            area: "台中市",
            city_area: "大雅區",
            address: "台中市大雅區雅潭路四段502號",
            tel: "04-2567-3819",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒倉洋酒",
            area: "台中市",
            city_area: "大雅區",
            address: "台中市大雅區科雅路398號",
            tel: "04-2567-9159",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "鎮昌菸酒",
            area: "台中市",
            city_area: "東勢區",
            address: "台中市東勢區忠孝街173號",
            tel: "04-2587-0000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "下新菸酒",
            area: "台中市",
            city_area: "東勢區",
            address: "台中市東勢區東蘭路43號",
            tel: "04-2587-2256",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "劉福",
            area: "台中市",
            city_area: "東勢區",
            address: "台中市東勢區東坑路216號",
            tel: "04-2587-7261",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "歐巴馬菸酒",
            area: "台中市",
            city_area: "清水區",
            address: "台中市清水區中華路609-1號",
            tel: "04-2628-1077",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "榮好菸酒",
            area: "台中市",
            city_area: "梧棲區",
            address: "台中市梧棲區居仁街212號",
            tel: "04-2657-9889",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒湖洋酒-大甲店",
            area: "台中市",
            city_area: "大甲區",
            address: "台中市大甲區中山路一段486號",
            tel: "04-2680-5836",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "同懋菸酒",
            area: "台中市",
            city_area: "大甲區",
            address: "台中市大甲區信義路158號",
            tel: "04-2686-0340",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "酒港菸酒",
            area: "台中市",
            city_area: "大甲區",
            address: "台中市大甲區經國路1號",
            tel: "04-2686-8071",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "七七會社洋酒",
            area: "台中市",
            city_area: "大肚區",
            address: "台中市大肚區自治路77號",
            tel: "04-2699-8323",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "世傳菸酒行",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區路267號",
            tel: "0900-005-970",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "富三洋酒",
            area: "台中市",
            city_area: "大里區",
            address: "台中市大里區仁慈街350號",
            tel: "0910-529-524",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "紅酒莊洋酒",
            area: "台中市",
            city_area: "大甲區",
            address: "台中市大甲區光明路131號",
            tel: "0932-677-946",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "清泰菸酒",
            area: "台中市",
            city_area: "北屯區",
            address: "台中市北屯區中清路二段128號",
            tel: "0936-231-190",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "源利菸酒",
            area: "台中市",
            city_area: "沙鹿區",
            address: "台中市沙鹿區光華路333號",
            tel: "0973-205-660",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "厚昌洋酒",
            area: "台中市",
            city_area: "東區",
            address: "台中市東區精武路161號1樓",
            tel: "0975-379-362",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "不倒翁菸酒",
            area: "台中市",
            city_area: "豐原區",
            address: "台中市豐原區向陽路97號",
            tel: "0976-477-376",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "豪酒運菸酒",
            area: "台中市",
            city_area: "北區",
            address: "台中市北區健行路858號",
            tel: "0978-106-155",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 8,
            store: "顏新珍洋酒商行",
            area: "台中市",
            city_area: "西區",
            address: "台中市西區日進街101號",
            tel: "04-2206-5187",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "勝和菸酒",
            area: "苗栗縣",
            city_area: "苗栗市",
            address: "苗栗縣苗栗市新東街41號",
            tel: "03-733-6536",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "陽光商行",
            area: "苗栗縣",
            city_area: "苗栗市",
            address: "苗栗縣苗栗市文發路481號",
            tel: "03-735-2752",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "尚好菸酒",
            area: "苗栗縣",
            city_area: "苗栗市",
            address: "苗栗縣苗栗市縣府路118號",
            tel: "03-736-1801",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "喜洋洋菸酒-英才店",
            area: "苗栗縣",
            city_area: "苗栗市",
            address: "苗栗縣苗栗市英才路52號",
            tel: "03-737-1056",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "慶佳行-光復店",
            area: "苗栗縣",
            city_area: "竹南鎮",
            address: "苗栗縣竹南鎮光復路293-4號",
            tel: "03-746-5257",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "皇品洋酒",
            area: "苗栗縣",
            city_area: "竹南鎮",
            address: "苗栗縣竹南鎮中港里12鄰環市路二段1號1樓",
            tel: "03-748-3366",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "卡諾曼菸酒",
            area: "苗栗縣",
            city_area: "頭份市",
            address: "苗栗縣頭份市八德一路226號",
            tel: "03-769-2386",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "逍遙菸酒",
            area: "苗栗縣",
            city_area: "後龍鎮",
            address: "苗栗縣後龍鎮中山路330號",
            tel: "03-772-9448",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "瑩芳行",
            area: "苗栗縣",
            city_area: "苑裡鎮",
            address: "苗栗縣苑裡鎮社苓里7鄰74號",
            tel: "03-774-2707",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 9,
            store: "大登洋酒",
            area: "苗栗縣",
            city_area: "通霄鎮",
            address: "苗栗縣通霄鎮福德路20號",
            tel: "03-775-8095",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "博酒萊洋酒",
            area: "苗栗縣",
            city_area: "苑裡鎮",
            address: "苗栗縣苑裡鎮博愛路2號",
            tel: "03-786-0127",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "筌球商行",
            area: "苗栗縣",
            city_area: "後龍鎮",
            address: "苗栗縣後龍鎮南港里1鄰南勢山17-7號",
            tel: "03-792-1222",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 9,
            store: "卓蘭",
            area: "苗栗縣",
            city_area: "卓蘭鎮",
            address: "苗栗縣卓蘭鎮中正西路99之1號",
            tel: "04-2589-6881",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "加納洋酒",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市民生路15號",
            tel: "04-722-6371",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "吉福菸酒",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市自強路32號",
            tel: "04-726-2688",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 10,
            store: "日享商行",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市彰南路二段232號",
            tel: "04-738-8507",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "酒尊洋酒",
            area: "彰化縣",
            city_area: "和美鎮",
            address: "彰化縣和美鎮和頭路21號",
            tel: "04-756-6711",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "金馬菸酒",
            area: "彰化縣",
            city_area: "秀水鄉",
            address: "彰化縣秀水鄉雅興街229號",
            tel: "04-763-0813",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "金元富",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市水源路568號",
            tel: "047-63-9918",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "上海菸酒",
            area: "彰化縣",
            city_area: "秀水鄉",
            address: "彰化縣秀水鄉番花路362號",
            tel: "04-769-6194",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "佳沅菸酒",
            area: "彰化縣",
            city_area: "鹿港鎮",
            address: "彰化縣鹿港鎮鹿和路三段440號",
            tel: "04-771-1968",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "永記商行",
            area: "彰化縣",
            city_area: "鹿港鎮",
            address: "彰化縣鹿港鎮鹿草路5段243號",
            tel: "04-771-2629",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "宇夏菸酒",
            area: "彰化縣",
            city_area: "埔心鄉",
            address: "彰化縣埔心鄉員鹿路一段435號",
            tel: "04-828-1190",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "隆豐菸酒",
            area: "彰化縣",
            city_area: "埔心鄉",
            address: "彰化縣埔心鄉東門村正義路70號",
            tel: "04-829-2053",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "大芳菸酒",
            area: "彰化縣",
            city_area: "員林市",
            address: "彰化縣員林市光明街152號",
            tel: "04-832-1475",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "萬桶菸酒",
            area: "彰化縣",
            city_area: "員林市",
            address: "彰化縣員林市靜修東路81號",
            tel: "04-832-3777",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "酒之店菸酒",
            area: "彰化縣",
            city_area: "員林市",
            address: "彰化縣員林市三民東街51號",
            tel: "04-834-0730",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "光輝菸酒",
            area: "彰化縣",
            city_area: "員林市",
            address: "彰化縣員林市中山路一段583號",
            tel: "04-835-5666",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "日進菸酒",
            area: "彰化縣",
            city_area: "員林市",
            address: "彰化縣員林市員水路二段155號",
            tel: "04-836-0781",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "酒樂菸酒",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市員林市三民東街63號",
            tel: "04-839-7566",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "萬芳菸酒",
            area: "彰化縣",
            city_area: "大村鄉",
            address: "彰化縣大村鄉大仁路一段144號",
            tel: "04-852-5430",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "大旺菸酒",
            area: "彰化縣",
            city_area: "社頭鄉",
            address: "彰化縣社頭鄉員集路二段229號",
            tel: "04-871-1009",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "年代菸酒",
            area: "彰化縣",
            city_area: "田中鎮",
            address: "彰化縣田中鎮南北街140號",
            tel: "04-874-5016",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "品銘菸酒",
            area: "彰化縣",
            city_area: "北斗鎮",
            address: "彰化縣北斗鎮復興路158號",
            tel: "04-878-2966",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "江夏菸酒",
            area: "彰化縣",
            city_area: "溪湖鎮",
            address: "彰化縣溪湖鎮西環路492號",
            tel: "04-885-9227",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "永承商行-北斗店",
            area: "彰化縣",
            city_area: "北斗鎮",
            address: "彰化縣北斗鎮斗苑路二段71號",
            tel: "04-887-4055",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "金思維洋酒",
            area: "彰化縣",
            city_area: "北斗鎮",
            address: "彰化縣北斗鎮斗苑路一段291號",
            tel: "04-888-8915",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "青旺菸酒",
            area: "彰化縣",
            city_area: "埤頭鄉",
            address: "彰化縣埤頭鄉彰水路三段550號",
            tel: "048-91-0252",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "員外茶莊",
            area: "彰化縣",
            city_area: "二林鎮",
            address: "彰化縣二林鎮西平里建國路411號",
            tel: "04-896-2037",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "臻品菸酒",
            area: "彰化縣",
            city_area: "二林鎮",
            address: "彰化縣二林鎮斗苑路五段399號",
            tel: "04-896-8308",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "摩登菸酒",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市南郭路一段55號",
            tel: "0986-703-602",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 10,
            store: "酒樓洋行",
            area: "彰化縣",
            city_area: "彰化市",
            address: "彰化縣彰化市林森路387號",
            tel: "0987-117-755",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "承暘菸酒",
            area: "南投縣",
            city_area: "南投市",
            address: "南投縣南投市康壽里民生街26號",
            tel: "04-9220-2998",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "嘉峰商行",
            area: "南投縣",
            city_area: "南投市",
            address: "南投縣南投市彰南路一段613號",
            tel: "04-9222-5742",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "宏龍菸酒",
            area: "南投縣",
            city_area: "南投市",
            address: "南投縣南投市彰南路3段132號",
            tel: "04-9226-0699",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "家家有洋酒",
            area: "南投縣",
            city_area: "草屯鎮",
            address: "南投縣草屯鎮敦和路敦成巷1之1號",
            tel: "04-9231-0884",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "大禾屋菸酒",
            area: "南投縣",
            city_area: "草屯鎮",
            address: "南投縣草屯鎮上林里太平路一段139號",
            tel: "04-9231-2965",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "元太洋行",
            area: "南投縣",
            city_area: "草屯鎮",
            address: "南投縣草屯鎮和平街4號",
            tel: "04-9232-2008",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "羊哥菸酒",
            area: "南投縣",
            city_area: "南投市",
            address: "南投縣南投市草屯鎮炎峰街82號",
            tel: "04-9236-7775",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "文和菸酒-中興店",
            area: "南投縣",
            city_area: "南投市",
            address: "南投縣南投市中興新村中興路72號",
            tel: "04-9239-0342",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "台元洋酒",
            area: "南投縣",
            city_area: "竹山鎮",
            address: "南投縣竹山鎮大明路233號",
            tel: "04-9265-3393",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "酒玖商行",
            area: "南投縣",
            city_area: "國姓鄉",
            address: "南投縣國姓鄉中興路236號",
            tel: "04-9272-3951",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "錡毅菸酒",
            area: "南投縣",
            city_area: "民間鄉",
            address: "南投縣民間鄉濁水村員集路67號",
            tel: "04-9273-2071",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "三元行",
            area: "南投縣",
            city_area: "集集鎮",
            address: "南投縣集集鎮集集街100號",
            tel: "04-9276-2371",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "新進順商行",
            area: "南投縣",
            city_area: "埔里鎮",
            address: "南投縣埔里鎮東華路182號",
            tel: "04-9298-3652",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "金利菸酒",
            area: "南投縣",
            city_area: "埔里鎮",
            address: "南投縣埔里鎮西安路一段95號",
            tel: "04-9298-4401",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "酒園商行",
            area: "南投縣",
            city_area: "埔里鎮",
            address: "南投縣埔里鎮中華路188號",
            tel: "04-9299-9903",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 11,
            store: "呵呵商行",
            area: "南投縣",
            city_area: "埔里鎮",
            address: "南投縣埔里鎮中正路745號",
            tel: "0926-939-299",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 12,
            store: "佳亨洋行",
            area: "雲林縣",
            city_area: "斗六市",
            address: "雲林縣斗六市明德北路二段81號",
            tel: "05-532-5898",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "杜康菸酒",
            area: "雲林縣",
            city_area: "斗六市",
            address: "雲林縣斗六市長春路10號",
            tel: "05-534-6869",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "尚品",
            area: "雲林縣",
            city_area: "崙背鄉",
            address: "雲林縣崙背鄉東興路119號",
            tel: "05-586-4822",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "欣州酒莊",
            area: "雲林縣",
            city_area: "西螺鎮",
            address: "雲林縣西螺鎮光明西路245號",
            tel: "05-587-2568",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "斯威特商行",
            area: "雲林縣",
            city_area: "斗南鎮",
            address: "雲林縣斗南鎮義德路100號",
            tel: "05-597-2468",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "唯君股份有限公司",
            area: "雲林縣",
            city_area: "二崙鄉",
            address: "雲林縣二崙鄉裕民路12號",
            tel: "05-598-9588",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 12,
            store: "有成菸酒",
            area: "雲林縣",
            city_area: "西螺鎮",
            address: "雲林縣西螺鎮光復西路333號",
            tel: "05-599-1990",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "寶園洋酒",
            area: "雲林縣",
            city_area: "台西鄉",
            address: "雲林縣台西鄉民權路82號",
            tel: "05-698-2801",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 12,
            store: "翔賀菸酒-西螺店",
            area: "雲林縣",
            city_area: "西螺鎮",
            address: "雲林縣西螺鎮興農西路63號",
            tel: "0955-670-970",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "林記",
            area: "高雄市",
            city_area: "前金區",
            address: "高雄市前金區光復三街132號",
            tel: "07-221-8313",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "信禕",
            area: "高雄市",
            city_area: "新興區",
            address: "高雄市新興區復興二路328號",
            tel: "07-222-0113",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "開普五福店",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區民權一路239號",
            tel: "07-226-5545",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "冠德-八德店",
            area: "高雄市",
            city_area: "新興區",
            address: "高雄市新興區八德一路196號",
            tel: "07-236-0639",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "宏美-自強",
            area: "高雄市",
            city_area: "前金區",
            address: "高雄市前金區自強二路80-1號",
            tel: "07-261-9955",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "柯林頓",
            area: "高雄市",
            city_area: "新興區",
            address: "高雄市新興區自立二路80號",
            tel: "07-285-6161",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "長慶洋行",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區漢口街333號",
            tel: "07-315-3838",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "東良",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區北平二街187號",
            tel: "07-322-9287",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大連-上景",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區大連街198",
            tel: "07-323-6096",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳林森店",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區林森二路2號",
            tel: "07-331-9333",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 13,
            store: "酒谷",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區崇德路416號",
            tel: "07-341-3863",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "林記-文自店",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區文自路974號",
            tel: "07-342-9090",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "宏美",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區裕誠路115號",
            tel: "07-350-5529",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳楠梓",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區鳳楠路142號",
            tel: "07-358-1333",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寰亨",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區榮總路271號",
            tel: "07-359-9656",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "廣財",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區民族一路591號",
            tel: "07-359-9955",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "品鑫",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區軍校路862號",
            tel: "07-362-5588",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "振昌-右昌",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區三山街220號",
            tel: "07-363-4036",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "揚洲",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區右昌街516號",
            tel: "07-363-7369",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳德賢",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區德賢路418號",
            tel: "07-364-0888",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "佳酒莊",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區仁樂街264號",
            tel: "07-371-0058",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "上景商行-大連",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區澄觀路788號",
            tel: "07-372-3223",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "全麥洋行",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區八卦村永仁街313號",
            tel: "07-373-1801",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳仁武店",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區鳳仁路95-17號",
            tel: "07-373-7755",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大仁-(寰亨)",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區仁雄路316號",
            tel: "07-374-5122",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "多多",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區仁忠路60號",
            tel: "07-375-5371",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳九如",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區九如一路229號",
            tel: "07-387-3300",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "醇酒城(大昌店)",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區大昌二路48號",
            tel: "07-387-5333",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "高鑫",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區大順二路239號",
            tel: "07-389-1111",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "信禕灣中店",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區灣中街280號",
            tel: "07-395-2220",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "臻酒仙-九如",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區九如一路501號",
            tel: "07-397-4444",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "嘉瑝洋行",
            area: "高雄市",
            city_area: "三民區",
            address: "高雄市三民區澄清路381號",
            tel: "07-398-6404",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: 1,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "邑東洋行九如",
            area: "高雄市",
            city_area: "鼓山區",
            address: "高雄市鼓山區九如四路1005號",
            tel: "07-533-2732",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "吉恩",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區苓雅一路354號",
            tel: "07-535-5999",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "南威海洋行",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區三多二路308號",
            tel: "07-536-0000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "奕欣行中山店",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區中山二路186、188號",
            tel: "07-5361285",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "廣爺",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區四維三路181號",
            tel: "07-536-5252",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "柯林頓南屏店",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區南屏路261號",
            tel: "07-550-5161",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "阿瑟辛亥店",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區辛亥路253號",
            tel: "07-550-8155",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "奕欣行自由店",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區自由二路331、333號",
            tel: "07-550-8665",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "振昌-明誠",
            area: "高雄市",
            city_area: "鼓山區",
            address: "高雄市鼓山區明誠三路638號",
            tel: "07-555-7999",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大第",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區自由二路125號",
            tel: "07-556-1366",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "明春",
            area: "高雄市",
            city_area: "路竹區",
            address: "高雄市路竹區延平路520號",
            tel: "07-607-6699",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "奕欣行-梓官",
            area: "高雄市",
            city_area: "梓官區",
            address: "高雄市梓官區中正路272-1號",
            tel: "07-610-9896",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳橋頭店",
            area: "高雄市",
            city_area: "楠梓區",
            address: "高雄市楠梓區市場街8號",
            tel: "07-611-0033",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "達玖岡山",
            area: "高雄市",
            city_area: "岡山區",
            address: "高雄市岡山區岡山路262號",
            tel: "07-621-8601",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳岡山",
            area: "高雄市",
            city_area: "岡山區",
            address: "高雄市岡山區岡山路395號",
            tel: "07-623-0055",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "全允(昇發)",
            area: "高雄市",
            city_area: "岡山區",
            address: "高雄市岡山區巨輪路55-1號",
            tel: "07-625-8185",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大眾岡山",
            area: "高雄市",
            city_area: "岡山區",
            address: "高雄市岡山區柳橋東路9-1號",
            tel: "07-629-6157",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大和阿蓮",
            area: "高雄市",
            city_area: "阿蓮區",
            address: "高雄市阿蓮區忠孝路93號",
            tel: "07-631-2182",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "福記林園",
            area: "高雄市",
            city_area: "林園區",
            address: "高雄市林園區文賢北路6號",
            tel: "07-641-6633",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳林園",
            area: "高雄市",
            city_area: "林園區",
            address: "高雄市林園區東林西路62號",
            tel: "07-643-9000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "富沅",
            area: "高雄市",
            city_area: "大樹區",
            address: "高雄市大樹區中興南路新興巷22號",
            tel: "07-652-1169",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "鼓山莊旗山店",
            area: "高雄市",
            city_area: "旗山區",
            address: "高雄市旗山區延平一路508號",
            tel: "07-661-2875",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "鼓山莊美濃店",
            area: "高雄市",
            city_area: "美濃區",
            address: "高雄市美濃區中正路二段185號",
            tel: "07-661-7315",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "奕欣行-美術旗艦",
            area: "高雄市",
            city_area: "旗山區",
            address: "高雄市旗山區延平一路359號",
            tel: "07-662-1188",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大和-茄萣",
            area: "高雄市",
            city_area: "茄定區",
            address: "高雄市茄定區白砂路172號",
            tel: "07-690-6003",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "高都菸酒",
            area: "高雄市",
            city_area: "路竹區",
            address: "高雄市路竹區中山路832號",
            tel: "07-697-6588",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳路竹",
            area: "高雄市",
            city_area: "路竹區",
            address: "高雄市路竹區中山路716",
            tel: "07-697-7000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "九久中山東",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區中山東路382號",
            tel: "07-703-3555",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳中庄",
            area: "高雄市",
            city_area: "大寮區",
            address: "高雄市大寮區鳳屏一路183號",
            tel: "07-703-7000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳鳳山 ",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區光遠路426號",
            tel: "07-710-6661",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "亨銘",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區光華二路300號",
            tel: "07-713-0209",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "東瀛",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區二聖路218號",
            tel: "07-716-1717",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "九久一甲",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區善美里南華路149號右側",
            tel: "07-716-2899",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "廣爺 永豐店",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區永豐路228號",
            tel: "07-716-7878",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "阿瑟",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區二聖路67號",
            tel: "07-717-2802",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "銀盤洋酒",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區建民路158號",
            tel: "07-722-9018",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "振昌-武廟",
            area: "高雄市",
            city_area: "苓雅區",
            address: "高雄市苓雅區武廟路159號之3",
            tel: "07-722-9255",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "千倉廩",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區文龍東路128號",
            tel: "07-733-3986",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "大成",
            area: "高雄市",
            city_area: "鳯山區",
            address: "高雄市鳯山區立志街142號",
            tel: "07-742-5888",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "開普鳳山店",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區青年路一段360號",
            tel: "07-747-0466",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳中崙",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區中崙二路537號",
            tel: "07-755-0000",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "福記",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區瑞隆路597號",
            tel: "07-761-3656",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "鳳翊洋行",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區五甲二路52號",
            tel: "07-767-2835",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "柏格達",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區南京路173號",
            tel: "07-767-5586",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "嘉瑝洋行文龍店",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區文龍東路785號",
            tel: "07-780-1989",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: 1,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "寶檳大寮 ",
            area: "高雄市",
            city_area: "大寮區",
            address: "高雄市大寮區鳳林三路35號",
            tel: "07-786-8877",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "九久大寮",
            area: "高雄市",
            city_area: "大寮區",
            address: "高雄市大寮區大寮路662-682號",
            tel: "07-787-8296",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "奕欣行-中安店",
            area: "高雄市",
            city_area: "小港區",
            address: "高雄市小港區中安路648號",
            tel: "07-791-2757",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "柏森(金鴻昌)",
            area: "高雄市",
            city_area: "小港區",
            address: "高雄市小港區華昌路105號",
            tel: "07-791-6998",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "揚昇",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區過勇路260號",
            tel: "07-792-9156",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "玖邑",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區明鳳三路135號",
            tel: "07-793-5891",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "九久鳳甲",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區南華一路180號、182號",
            tel: "07-796-9928",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "允泰",
            area: "高雄市",
            city_area: "小港區",
            address: "高雄市小港區金府路145號",
            tel: "07-805-3909",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "阿波羅(豐年)",
            area: "高雄市",
            city_area: "小港區",
            address: "高雄市小港區漢民路111號",
            tel: "07-806-0898",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "福記五甲店",
            area: "高雄市",
            city_area: "鳳山區",
            address: "高雄市鳳山區鎮南里五甲二路740號",
            tel: "07-813-8811",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "呂記",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區鎮東一街143號",
            tel: "07-831-8545",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "佳酒莊-赤仁",
            area: "高雄市",
            city_area: "仁武區",
            address: "高雄市仁武區赤仁路60號",
            tel: "0909-193-513",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "振昌-美濃",
            area: "高雄市",
            city_area: "美濃區",
            address: "高雄市美濃區泰安路38號",
            tel: "0909-537-811",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "京鴻莊園菸酒",
            area: "高雄市",
            city_area: "前鎮區",
            address: "高雄市前鎮區民裕街101號",
            tel: "0913-665-239",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "凱記",
            area: "高雄市",
            city_area: "前金區",
            address: "高雄市前金區青年二路164號",
            tel: "0916-012-899",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "六合洋行",
            area: "高雄市",
            city_area: "新興區",
            address: "高雄市新興區南台路73巷21號",
            tel: "0920-390-767",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 13,
            store: "達玖岡山",
            area: "高雄市",
            city_area: "左營區",
            address: "高雄市左營區重信路542號",
            tel: "0979-670-649",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "宏瑋菸酒行",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區南灣里大灣路578號",
            tel: " 06-205-9050",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "順飲-復國店",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區復國一路361號",
            tel: "06-203-1831",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 14,
            store: "龍憶",
            area: "台南市",
            city_area: "中西區",
            address: "台南市中西區南門路243號之3",
            tel: "06-213-0289",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "醇爵",
            area: "台南市",
            city_area: "中西區",
            address: "台南市中西區海安路一段26號",
            tel: "06-220-0507",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "酣呷餐酒館",
            area: "台南市",
            city_area: "南區",
            address: "台南市南區西門路一段669號",
            tel: "06-225-7669",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "廣來",
            area: "台南市",
            city_area: "東區",
            address: "台南市東區大同路二段139號",
            tel: "06-246-6272",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "州翔酒翔",
            area: "台南市",
            city_area: "中西區",
            address: "台南市中西區西和路220號",
            tel: "06-258-6958",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "家禎",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區永華路66號",
            tel: "06-273-4129",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "順飲-中華店",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區中華路二段80號",
            tel: "06-275-6222",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 14,
            store: "柏文",
            area: "台南市",
            city_area: "東區",
            address: "台南市東區小東路330號",
            tel: "06-275-6621",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "富冠商行",
            area: "台南市",
            city_area: "仁德區",
            address: "台南市仁德區中正路二段341號",
            tel: "06-279-4232",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "大眾-武聖",
            area: "台南市",
            city_area: "中西區",
            address: "台南市中西區武聖路265號",
            tel: "06-280-0129",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "大大菸酒",
            area: "台南市",
            city_area: "安平區",
            address: "台南市安平區中華西路二段573號",
            tel: "06-280-3078",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "順飲-西門店",
            area: "台南市",
            city_area: "安南區",
            address: "台南市安南區西門路四段375號",
            tel: "06-281-0333",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 14,
            store: "賀鼎",
            area: "台南市",
            city_area: "安平區",
            address: "台南市安平區永華路二段690號",
            tel: "06-293-0022",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "大眾-安平",
            area: "台南市",
            city_area: "安平區",
            address: "台南市安平區建平路696號",
            tel: "06-293-8999",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "順飲永華總店",
            area: "台南市",
            city_area: "安平區",
            address: "台南市安平區永華路二段678號",
            tel: "06-299-9123",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "龍亨菸酒",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區東橋七路153號",
            tel: "06-302-0329",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "壹玲",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區忠孝路108號",
            tel: "06-312-0078",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "昕悅揚",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區中華一路150-1號",
            tel: "06-312-9699",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "槓頂菸酒",
            area: "台南市",
            city_area: "東區",
            address: "台南市東區崇德路456號",
            tel: "06-336-2189",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "高僑",
            area: "台南市",
            city_area: "安南區",
            address: "台南市安南區海沺路一段99號",
            tel: "06-350-6423",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "鍾愛",
            area: "台南市",
            city_area: "安南區",
            address: "台南市安南區安和路四段480號",
            tel: "06-356-1127",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "泰安(德佳)",
            area: "台南市",
            city_area: "新化區",
            address: "台南市新化區中正路462.464號",
            tel: "06-590-7527",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "南都菸酒",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區復國二路63巷",
            tel: "06-598-1166",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "明輝",
            area: "台南市",
            city_area: "新化區",
            address: "台南市新化區中山路111巷10號",
            tel: "06-598-1166",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "金富祥",
            area: "台南市",
            city_area: "新市區",
            address: "台南市新市區銘傳街76號",
            tel: "06-599-8278",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "晴瑒",
            area: "台南市",
            city_area: "新營區",
            address: "台南市新營區和平路87號",
            tel: "06-635-5035",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "御品",
            area: "台南市",
            city_area: "新營區",
            address: "台南市新營區三民路69號",
            tel: "06-637-6999",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "名家",
            area: "台南市",
            city_area: "新營區",
            address: "台南市新營區新進路二段183號",
            tel: "06-637-9237",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "御品下營",
            area: "台南市",
            city_area: "下營區",
            address: "台南市下營區健康路281號",
            tel: "06-679-0022",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "僑領",
            area: "台南市",
            city_area: "佳里區",
            address: "台南市佳里區中山路225號",
            tel: "06-723-6072",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: 1,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "酒堡-新營",
            area: "台南市",
            city_area: "新營區",
            address: "台南市新營區東泰七街48號",
            tel: "0934-324-777",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "品漢",
            area: "台南市",
            city_area: "永康區",
            address: "台南市永康區埔園街418號",
            tel: "0956-982-731",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "鼎大",
            area: "台南市",
            city_area: "北區",
            address: "台南市北區中華北路一段78巷25號",
            tel: "0968-702-927",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 14,
            store: "高登-台南",
            area: "台南市",
            city_area: "中西區",
            address: "台南市中西區和意路78號",
            tel: "0973-063-215",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "八八煙酒水-新生店",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市友愛路337號",
            tel: "05-216-3988",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "晉福菸酒",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市民生北路233號",
            tel: "05-222-5943",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "盈嘉商行",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市南京路401號",
            tel: "05-236-8882",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "上村行菸酒",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市民族路109號",
            tel: "05-276-0970",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "歡喜菸酒顏福來",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市新生路642號",
            tel: "05-277-6111",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "萬鴻菸酒",
            area: "嘉義縣",
            city_area: "嘉義市",
            address: "嘉義縣嘉義市興業西路71號",
            tel: "05-286-1698",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 15,
            store: "酒仙商行",
            area: "嘉義縣",
            city_area: "竹崎鄉",
            address: "嘉義縣竹崎鄉中華路2-3號",
            tel: "0905-037-371",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 16,
            store: "酒客菸酒",
            area: "嘉義市",
            city_area: "友愛路",
            address: "嘉義市友愛路138號",
            tel: "05-281-0669",
            thedalmore18: false,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 16,
            store: "順飲-嘉義店",
            area: "嘉義市",
            city_area: "西區",
            address: "嘉義市西區上海路209號",
            tel: "05-283-8383",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: false,
          },
          {
            sort: 17,
            store: "冠德-大埔店",
            area: "屏東市",
            city_area: "屏東市",
            address: "屏東縣屏東市柳州街34號",
            tel: "08-733-7007",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 17,
            store: "銘鴻海豐",
            area: "屏東市",
            city_area: "屏東市",
            address: "屏東縣屏東市北平路20號",
            tel: "08-736-9901",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 17,
            store: "禾大",
            area: "屏東市",
            city_area: "屏東市",
            address: "屏東縣屏東市瑞光路三段299號",
            tel: "08-738-6653",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 17,
            store: "冠德-華盛店",
            area: "屏東市",
            city_area: "屏東市",
            address: "屏東縣屏東市華盛街16號",
            tel: "08-751-0633",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 17,
            store: "冠德-總店",
            area: "屏東市",
            city_area: "屏東市",
            address: "屏東縣屏東市武成街103號",
            tel: "08-751-6553",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "洋基",
            area: "屏東縣",
            city_area: "屏東市",
            address: "屏東縣屏東市公園西路121號",
            tel: "08-733-7272",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "冠華自由店",
            area: "屏東縣",
            city_area: "屏東市",
            address: "屏東縣屏東市自由路96號",
            tel: "08-735-1331",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "皇加",
            area: "屏東縣",
            city_area: "屏東市",
            address: "屏東縣屏東市建豐路281號",
            tel: "08-735-3566",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "華欣(柏融)",
            area: "屏東縣",
            city_area: "屏東市",
            address: "屏東縣屏東市大連路107-3號",
            tel: "08-736-2358",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "東大",
            area: "屏東縣",
            city_area: "屏東市",
            address: "屏東縣屏東市中正路548號",
            tel: "08-738-1245",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "東鑫",
            area: "屏東縣",
            city_area: "里港鄉",
            address: "屏東縣里港鄉大平村仁和路23號",
            tel: "08-775-1199",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "金和順",
            area: "屏東縣",
            city_area: "里港鄉",
            address: "屏東縣里港鄉里港路114、112號",
            tel: "08-775-6043",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "千上菸酒商行",
            area: "屏東縣",
            city_area: "萬丹鄉",
            address: "屏東縣萬丹鄉萬全村萬丹路一段321號",
            tel: "08-776-4636",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "大同內埔",
            area: "屏東縣",
            city_area: "內埔鄉",
            address: "屏東縣內埔鄉廣濟路114號",
            tel: "08-779-9046",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "洪郁",
            area: "屏東縣",
            city_area: "潮州鎮",
            address: "屏東縣潮州鎮榮祥巷18號",
            tel: "08-788-0183",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "大同",
            area: "屏東縣",
            city_area: "潮洲鎮",
            address: "屏東縣潮洲鎮朝昇路84號",
            tel: "08-788-2058",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "福記屏東",
            area: "屏東縣",
            city_area: "鹽埔鄉",
            address: "屏東縣鹽埔鄉維新路193號",
            tel: "08-793-5061",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: " 鴻昇",
            area: "屏東縣",
            city_area: "崁頂鄉",
            address: "屏東縣崁頂鄉力社村舊店路1-12號",
            tel: "08-863-1409",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "吉昌",
            area: "屏東縣",
            city_area: "枋寮鄉",
            address: "屏東縣枋寮鄉中山路75號",
            tel: "08-878-2362",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "百利",
            area: "屏東縣",
            city_area: "恆春鎮",
            address: "屏東縣恆春鎮中正路138號",
            tel: "08-889-2615",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 18,
            store: "承龍",
            area: "屏東縣",
            city_area: "東港鎮",
            address: "屏東縣東港鎮明德路62號",
            tel: "0939-375-260",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 19,
            store: "上暘洋菸酒",
            area: "澎湖縣",
            city_area: "馬公市",
            address: "澎湖縣馬公市光復路142號",
            tel: "06-926-5576",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 19,
            store: "澎湖小紅莓",
            area: "澎湖縣",
            city_area: "馬公市",
            address: "澎湖縣馬公市民福路41號",
            tel: "06-927-3733",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 20,
            store: "明月",
            area: "花蓮市",
            city_area: "中正路",
            address: "花蓮市中正路146號",
            tel: "03-831-5966",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "酒淵",
            area: "花蓮縣",
            city_area: "新城鄉",
            address: "花蓮縣新城鄉嘉里三街92之8號",
            tel: "03-382-61786",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "雄寰",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市國聯一路211號",
            tel: "03-383-26147",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "民侁",
            area: "花蓮縣",
            city_area: "吉安鄉",
            address: "花蓮縣吉安鄉吉安路一段76-8號",
            tel: "03-385-80768",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "酒江街",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市化道路162號",
            tel: "03-822-2520",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "加酒行",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市軒轅路2-2號",
            tel: "03-831-4960",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "金雄寰",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市博愛街135號",
            tel: "03-832-7622",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "全家來",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市國聯五路51號",
            tel: "03-836-0101",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "上醇商行",
            area: "花蓮縣",
            city_area: "吉安鄉",
            address: "花蓮縣吉安鄉中華路二段159號",
            tel: "03-851-2068",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "自立",
            area: "花蓮縣",
            city_area: "吉安鄉",
            address: "花蓮縣吉安鄉自立路二段42號",
            tel: "03-856-6355",
            thedalmore18: true,
            thedalmore21: false,
            thedalmore25: false,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 21,
            store: "上揚",
            area: "花蓮縣",
            city_area: "花蓮市",
            address: "花蓮縣花蓮市富祥街97號",
            tel: "03-857-6543",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 22,
            store: "德豐",
            area: "台東縣",
            city_area: "台東市",
            address: "台東縣台東市傳廣路507號",
            tel: "08-922-8372",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
          {
            sort: 22,
            store: "酒堡",
            area: "台東縣",
            city_area: "台東市",
            address: "台東縣台東市新生路116號",
            tel: "08-932-1235",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: false,
            vintage2003: false,
            vintage2007: true,
          },
          {
            sort: 16,
            store: "酒國英雄菸酒",
            area: "嘉義市",
            city_area: "友愛路",
            address: "嘉義市友愛路221號",
            tel: "05-233-1212",
            thedalmore18: true,
            thedalmore21: true,
            thedalmore25: true,
            vintage2003: true,
            vintage2007: true,
          },
        ];
        /* harmony default export */ __webpack_exports__["default"] =
          all_stores;

        /***/
      },

    /***/ 0:
      /*!***********************************************************************************!*\
  !*** multi ./src@4.0/assets/js/main.js ./src@4.0/assets/js/src_main20230914備份.js ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/gary/thedalmore/src@4.0/assets/js/main.js */ "./src@4.0/assets/js/main.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/gary/thedalmore/src@4.0/assets/js/src_main20230914備份.js */ "./src@4.0/assets/js/src_main20230914備份.js"
        );

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmNANC4wL2Fzc2V0cy9qcy9zcmNfbWFpbjIwMjMwOTE05YKZ5Lu9LmpzIiwid2VicGFjazovLy8uL3NyY0A0LjAvYXNzZXRzL3BsdWdpbnMvamFzb25fZGF0YS9uZXdzX2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjQDQuMC9hc3NldHMvcGx1Z2lucy9qYXNvbl9kYXRhL3N0b3Jlc19saXN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheFNldHVwIiwiY2FjaGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkb25lIiwiZGF0YSIsImh0bWwiLCJoZWFkZXJGdW5jdGlvbiIsImdvVG9wIiwiYWdlR2F0ZVN3aXRjaGVyIiwicHJpdmFjeVN3aXRjaGVyIiwiYWdyZWVtZW50U3dpdGNoZXIiLCJ0b29sc0xpc3RlbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJtZWRpYVF1ZXJ5IiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJ0b2dnbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJpbm5lcldpZHRoIiwiYnJlYWtwb2ludCIsIm9uIiwicmVzaXplIiwiYWRkQ2xhc3MiLCJwcm9wIiwiZ2V0Q29va2llIiwidW5kZWZpbmVkIiwicmVtb3ZlQ2xhc3MiLCJzZXRDb29raWVZZWFyIiwiZ29Ub3BTaG93IiwiZWwiLCJzY3JvbGxUb3AiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwiZ29Ub3BGaXhlZCIsInRhcmdldEVsIiwidHJpZ2dlck51bSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJ0YXJnZXJOdW0iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzZXRLdkludGVydmFsIiwiY2Fyb3VzZWwiLCJpbnRlcnZhbCIsInNsaWNrU3dpdGNoZXIiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwic2V0dGluZ3MiLCJ0YWIiLCIkbGluayIsImVxIiwiZmluZCIsImF0dHIiLCJzaWJsaW5ncyIsImhpZGUiLCJub3QiLCJjaGlsZHJlbiIsImZhZGVJbiIsImxvYWQiLCJ0YWJGaXhlZCIsInN0eWxlIiwiY3NzVGV4dCIsImZpeFNtYXJ0cGhvbmUxMDB2aCIsInZoIiwic2V0UHJvcGVydHkiLCJzdG9yZUZpbHRlck5vdGlmaWNhdGlvbiIsInRyaWdnZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaGVja2VkTnVtIiwibGVuZ3RoIiwiY2xlYXJBbGxCdG5FbCIsImNsZWFyQ2hlY2tCb3giLCJ0YXJnZXRzIiwiYmx1ciIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY2hlY2tlZCIsInRvZ2dsZVZpc2lhYmxlIiwiaGFzTWVkaWFRdWVyeSIsImlzTW9iaWxlIiwiY2xpY2tDb25maXJtIiwiY2xpY2tOb25UYXJnZXQiLCJ0cmlnZ2VyRWwiLCJjb250YWlucyIsIm5ld3NMaXN0VnVlIiwiUEFHRV9TSVpFIiwiRk9PX0RBVEEiLCJuZXdzX2xpc3QiLCJWdWUiLCJjb21wb25lbnQiLCJWdWVqc1BhZ2luYXRlIiwidnVlIiwiaW5wYWdlZGF0YSIsImxpc3RkYXRhIiwiY3VycmVudFBhZ2UiLCJwYWdlQ291bnQiLCJjb21wdXRlZCIsInBhZ2VkTGlzdGRhdGEiLCJ2bSIsImZpbHRlciIsIngiLCJwYWdlIiwid2F0Y2giLCJ2YWwiLCJfc2V0UGFnZTJNb2RlbCIsImZpbHRlcnMiLCJlbGxpcHNpcyIsInZhbHVlIiwibGVuIiwibWV0aG9kcyIsInBhcnNlSW50IiwiaSIsIiRzZXQiLCJwYWdlQ2FsbGJhY2siLCJjcmVhdGVkIiwicmV2ZXJzZSIsInN0b3JlTGlzdFZ1ZSIsInNlY3Rpb25zIiwic3RvcmVzIiwic3RvcmVzX2xpc3QiLCJzZWxlY3RlZF9hcmVhIiwic2VsZWN0ZWRfY2l0eV9hcmVhIiwicXRleHQiLCJ2aW50YWdlMjAwMyIsInZpbnRhZ2UyMDA3IiwidGhlZGFsbW9yZTE4IiwidGhlZGFsbW9yZTIxIiwidGhlZGFsbW9yZTI1IiwiY2l0eV9hcmVhcyIsImFyZWFfY2hhbmdlIiwicm93cyIsImVsZW1lbnQiLCJpbmRleCIsImZvdW5kIiwiZ3JvdXBSd29zIiwiaGFzT3duUHJvcGVydHkiLCJjaXR5X2FyZWFfY2hhbmdlIiwicXVlcnkiLCJ0ZXh0IiwidHJpbSIsImFsZXJ0Iiwicm93RGF0YSIsImNpdHlfYXJlYSIsImFyciIsImZsYWciLCJpbmRleE9mIiwiaXNUeXBlIiwiaXMiLCJzb3J0IiwiYSIsImIiLCJzY3JvbGwiLCJsYXp5TG9hZCIsInRpdGxlIiwiaW1nU3JjIiwidGV4dENvbnRlbnQiLCJhSHJlZiIsImFsbF9zdG9yZXMiLCJzdG9yZSIsImFyZWEiLCJhZGRyZXNzIiwidGVsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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eUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gYWpheCDphY3lkIhKUTMg5byV5YWl6Kit572uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuYWpheFNldHVwKHsgY2FjaGU6IGZhbHNlIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgIGhlYWRlckZ1bmN0aW9uKCk7XG4gIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19mb290ZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2Zvb3RlclwiKS5odG1sKGRhdGEpO1xuICAgIGdvVG9wKCk7XG4gICAgYWdlR2F0ZVN3aXRjaGVyKCk7XG4gICAgcHJpdmFjeVN3aXRjaGVyKCk7XG4gICAgYWdyZWVtZW50U3dpdGNoZXIoKTtcbiAgfSk7XG59KTtcbi8vIOmBuOWWrlxuZnVuY3Rpb24gdG9vbHNMaXN0ZW5lcigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdXNlTW91c2VcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJqcy11c2VLZXlib2FyZFwiKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImpzLXVzZUtleWJvYXJkXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzLXVzZU1vdXNlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZ1bmN0aW9uKCkge1xuICB2YXIgYnJlYWtwb2ludCA9IDc2ODtcbiAgdG9nZ2xlTW9iaWxlTWVudShicmVha3BvaW50KTtcbn1cbi8vIFtFbmRdIOmBuOWWrlxuLy/kvb/nlKjmop3mrL5cbmZ1bmN0aW9uIGFncmVlbWVudFN3aXRjaGVyKCkge1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIilbMV0ucmVtb3ZlKCk7XG4gICAgLy8gJCgnI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkJykuY3NzKFwicGFkZGluZy1yaWdodFwiLCBcIjE3cHhcIik7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAkKCcjYWdyZWVtZW50TW9kYWxDZW50ZXJfSWQnKS5jc3MoXCJwYWRkaW5nLWxlZnRcIiwgXCIwcHhcIik7XG4gICAgfSk7XG4gIH0pO1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xuICB9KTtcbiAgJChcIiNhZ3JlZW1lbnRCdXR0b25fSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNsZWdhbENoZWNrYm94X0lkXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICB9KTtcbn1cbi8v6Zqx57Wy5qyK5pS/562WKOmFjeWQiGFnZUdhdGUuanPoo6HpnaLnmoRzZXRDb29raWVZZWFyKCkpXG5mdW5jdGlvbiBwcml2YWN5U3dpdGNoZXIoKSB7XG4gIGlmIChnZXRDb29raWUoXCJwcml2YWN5X2RhbG1vcmVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIubC1mb290ZXItcHJpdmFjeVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAkKFwiI2FjY2VwdFByaXZhY3lfSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmwtZm9vdGVyLXByaXZhY3lcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICBzZXRDb29raWVZZWFyKFwicHJpdmFjeV9kYWxtb3JlXCIpO1xuICAgIH0pO1xuICB9XG59XG4vL2dvIHRvcFxuZnVuY3Rpb24gZ29Ub3BTaG93KCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtZm9vdGVyLWdvVG9wIGFcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCkge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXItZ29Ub3AgYVwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgLy/nva7poILmjInpiJXnmoTmjbLli5XpgJ/luqZcbiAgICAkKFwiLmwtZm9vdGVyLWdvVG9wIGFcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3BGaXhlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3RlclwiKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3Rlci1nb1RvcCBhXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgdHJpZ2dlck51bSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRyaWdnZXJOdW0gPT0gXCIgKyB0cmlnZ2VyTnVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgKGVsLm9mZnNldFRvcCArIChlbC5vZmZzZXRIZWlnaHQgLyAzKSkpO1xuICAgIHZhciB0YXJnZXJOdW0gPSBlbC5vZmZzZXRUb3A7XG4gICAgaWYgKHRyaWdnZXJOdW0gPj0gdGFyZ2VyTnVtICsgZWwub2Zmc2V0SGVpZ2h0IC8gMS41KSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKFwianMtYWNpdHZlXCIpO1xuICAgIH1cbiAgfVxufVxuLy9bRW5kXSBnbyB0b3Bcbi8vIOmmlumggei8quaSrVxuZnVuY3Rpb24gc2V0S3ZJbnRlcnZhbCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdlwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJChcIiNrdlwiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaWNrU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImFqYXgvX3Byb2R1Y3RJbnBhZ2Vfc2xpY2suaHRtbFwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpLmh0bWwoZGF0YSk7XG4gICAgICAkKFwiLnYtc2xpY2tcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4vL+eUouWTgemggXRhYlxuZnVuY3Rpb24gdGFiKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtdGFiXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgJGxpbmsgPSAkKFwiLnRhYi1saXN0IC50YWItYnRuXCIpO1xuICAgICQoJGxpbmsuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcImFcIikuYXR0cihcImhyZWZcIikpXG4gICAgICAuc2libGluZ3MoXCIudGFiLWNvbnRlbnRcIilcbiAgICAgIC5oaWRlKCk7XG4gICAgJGxpbmsuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChcImh0bWwsYm9keVwiKS5zY3JvbGxUb3AoMCk7XG4gICAgICAvLyAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIDEwMDBcbiAgICAgIC8vICk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi50YWItbGlzdCAudGFiLWJ0blwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKCQodGhpcykuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJocmVmXCIpKVxuICAgICAgICAuZmFkZUluKClcbiAgICAgICAgLnNpYmxpbmdzKFwiLnRhYi1jb250ZW50XCIpXG4gICAgICAgIC5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmpzLWNsYXNzaWNcIikubG9hZChcImFqYXgvX3Byb2R1Y3RfY2xhc3NpYy5odG1sXCIpO1xuICAgICQoXCIuanMtb2xkXCIpLmxvYWQoXCJhamF4L19wcm9kdWN0X29sZC5odG1sXCIpO1xuICAgICQoXCIuanMtbGltaXRlZFwiKS5sb2FkKFwiYWpheC9fcHJvZHVjdF9saW1pdGVkLmh0bWxcIik7XG4gIH1cbn1cbi8v55Si5ZOB6aCBdGFiRml4ZWRUb3BcbmZ1bmN0aW9uIHRhYkZpeGVkKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtcHJvZHVjdC10YWJcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93LnBhZ2VZT2Zmc2V0ID09IFwiICsgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgZWwub2Zmc2V0VG9wKTtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGVsLm9mZnNldFRvcCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImpzLWFjaXR2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcInBhZGRpbmctdG9wOiBjYWxjKDcycHggKyA2OXB4KVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG4vL+ino+axuuaJi+apn+S4iiBzYWZhcmksIGNocm9tZSDngI/opr3lmaggMTAwdmgg54Sh5rOV5Ymb5aW95LiA5pW06aCB55qE5ZWP6aGMXG5mdW5jdGlvbiBmaXhTbWFydHBob25lMTAwdmgoKSB7XG4gIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmhcIiwgYCR7dmh9cHhgKTtcbn1cblxuLy8g5ZWG5bqX5LiL5ouJ6KSH6YG46YG45Zau55u46ZecLS0tLS0tLS0tLS1cbi8vIOWIpOaWt+S4i+aLiemBuOWWruS4reaYr+WQpuaciemBuOmgheiiq+mBuOWPlu+8jOmBuOWWruS4iuacg+acieWLvuWLvlxuZnVuY3Rpb24gc3RvcmVGaWx0ZXJOb3RpZmljYXRpb24oKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi1kcm9wZG93bi1tZW51XCIpO1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1lbnVCdXR0b25cIik7XG4gIGlmIChlbCAmJiB0YXJnZXQpIHtcbiAgICAvLyDpoJDoqK3lhajpgbjvvIzpgbjllq7kuIrmnInli77li75cbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImpzLWlucHV0Q2hlY2tlZFwiKTsgLy8gY29uc29sZS5sb2coaW5wdXRDb250YWluZXIgKyBcIiArIFwiICsgdGFyZ2V0KTtcbiAgICB2YXIgdHJpZ2dlcnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cmlnZ2Vycyk7XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2hlY2tlZE51bSA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgXCJpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkXCJcbiAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrZWROdW0pO1xuICAgICAgICBpZiAoY2hlY2tlZE51bSA+IDApIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImpzLWlucHV0Q2hlY2tlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWlucHV0Q2hlY2tlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNsZWFyQWxsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWNsZWFyQ2hlY2tCb3hlc1wiKTtcbiAgICBjbGVhckFsbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWlucHV0Q2hlY2tlZFwiKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyDkuIDpjbXmuIXpmaRpbnB1dOmBuOmghVxuZnVuY3Rpb24gY2xlYXJDaGVja0JveCgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi1kcm9wZG93bi1tZW51XCIpKSB7XG4gICAgdmFyIHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWNsZWFyQ2hlY2tCb3hlc1wiKTtcbiAgICB2YXIgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cmlnZ2VyLmJsdXIoKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgdHJpZ2dlci5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuLy8g5YiH5o+b6aGv56S6XG5mdW5jdGlvbiB0b2dnbGVWaXNpYWJsZShlbCwgdGFyZ2V0LCBtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvZ2dsZVZpc2lhYmxcIik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIHZhciBoYXNNZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcbiAgICAgICAgaWYgKGhhc01lZGlhUXVlcnkgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IG1lZGlhUXVlcnk7XG4gICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWZ1bmN0aW9uTWVudU9wZW5lZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWZ1bmN0aW9uTWVudU9wZW5lZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsaWNrQ29uZmlybShlbCwgdGFyZ2V0KSB7XG4gIHZhciB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuLy8g6bue5pOK56m655m96JmV6Zec6ZaJ5LiL5ouJXG5mdW5jdGlvbiBjbGlja05vblRhcmdldChlbCwgdGFyZ2V0KSB7XG4gIHZhciB0cmlnZ2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAodGFyZ2V0RWwpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIXRhcmdldEVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgZXZlbnQudGFyZ2V0ICE9PSB0cmlnZ2VyRWwpIHtcbiAgICAgICAgdHJpZ2dlckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8vIC0tLS0tLS0tLS0tXG4vL+acgOaWsOa2iOaBr3Z1ZVxuLy8gVnVlLmNvbmZpZy5kZXZ0b29scyA9IHRydWU7XG5pbXBvcnQgbmV3c19saXN0IGZyb20gXCIuLi9wbHVnaW5zL2phc29uX2RhdGEvbmV3c19saXN0LmpzXCI7XG5mdW5jdGlvbiBuZXdzTGlzdFZ1ZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdzUGFnaW5hdGlvbl9JZFwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgUEFHRV9TSVpFID0gNjsgLy/kuIDlgIvpoIHpnaLopoHpoa/npLrlpJrlsJHnrYbos4fmlplcbiAgICBjb25zdCBGT09fREFUQSA9IG5ld3NfbGlzdDtcbiAgICBWdWUuY29tcG9uZW50KFwicGFnaW5hdGVcIiwgVnVlanNQYWdpbmF0ZSk7XG4gICAgY29uc3QgdnVlID0gbmV3IFZ1ZSh7XG4gICAgICBlbDogXCIjbmV3c1BhZ2luYXRpb25fSWRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaW5wYWdlZGF0YTogW10sXG4gICAgICAgIGxpc3RkYXRhOiBbXSxcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIHBhZ2VDb3VudDogMSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICBwYWdlZExpc3RkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICBpZiAodm0ubGlzdGRhdGEgJiYgdm0ubGlzdGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RkYXRhLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICByZXR1cm4geC5wYWdlID09PSB2bS5jdXJyZW50UGFnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gLy8g5aaC5p6cbGlzdGRhdGHmnInos4fmlplcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgbGlzdGRhdGE6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9zZXRQYWdlMk1vZGVsKCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmlsdGVyczoge1xuICAgICAgICBlbGxpcHNpcyh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGxlbiA9IDExNztcbiAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gXCJcIjtcbiAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gbGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgbGVuKSArIFwiLi4uXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIF9zZXRQYWdlMk1vZGVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICBpZiAoIXZtLmxpc3RkYXRhIHx8IHZtLmxpc3RkYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICB2bS5wYWdlQ291bnQgPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5wYWdlQ291bnQgPVxuICAgICAgICAgICAgICBwYXJzZUludCh2bS5saXN0ZGF0YS5sZW5ndGggLyBQQUdFX1NJWkUpICtcbiAgICAgICAgICAgICAgKHZtLmxpc3RkYXRhLmxlbmd0aCAlIFBBR0VfU0laRSA+IDAgPyAxIDogMCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZtLmxpc3RkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZtLiRzZXQodm0ubGlzdGRhdGFbaV0sIFwicGFnZVwiLCBwYXJzZUludChpIC8gUEFHRV9TSVpFKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGFnZUNhbGxiYWNrOiBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgdGhpcy4kc2V0KHZtLCBcImN1cnJlbnRQYWdlXCIsIHBhZ2UpO1xuICAgICAgICAgIC8vIOiukyBjdXJyZW50UGFnZSDnrYnmlrwgcGFnZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgIHZtLmxpc3RkYXRhID0gRk9PX0RBVEEuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIC8vIOeCuuS6huS4jeaxoeafk+aVuOaTmu+8jOmHneWwjWxpc3RkYXTlgZrmt7rmi7fosp1cbiAgICAgICAgdm0uaW5wYWdlZGF0YSA9IEZPT19EQVRBO1xuICAgICAgICAvLyDlj6blpJbplovkuobkuIDntYTpoIbluo/mraPluLjnmoTvvIzntabkuIDoiKzlj5bnlKhcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbi8v5ZWG5bqX5YiX6KGoVnVlXG4vL2ltcG9ydCBzdG9yZXNfbGlzdCBmcm9tICcuLi9wbHVnaW5zL2phc29uX2RhdGEvc3RvcmVzX2xpc3QuanMnO1xuaW1wb3J0IHN0b3Jlc19saXN0IGZyb20gXCIuLi9wbHVnaW5zL2phc29uX2RhdGEvc3RvcmVzX2xpc3QuanNcIjtcbmZ1bmN0aW9uIHN0b3JlTGlzdFZ1ZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9yZUZpbHRlcl9JZFwiKTtcblxuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBjb25zdCB2dWUgPSBuZXcgVnVlKHtcbiAgICAgIGVsOiBcIiNzdG9yZUZpbHRlcl9JZFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0b3Jlczogc3RvcmVzX2xpc3QsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0ZWRfYXJlYTogXCLlj7DljJfluIJcIixcbiAgICAgICAgc2VsZWN0ZWRfY2l0eV9hcmVhOiBcIlwiLFxuICAgICAgICBxdGV4dDogXCJcIixcbiAgICAgICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgICAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gICAgICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgICAgIGNpdHlfYXJlYXM6IFtdLFxuICAgICAgfSxcblxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFyZWFfY2hhbmdlKHRoaXMuc2VsZWN0ZWRfYXJlYSk7XG4gICAgICB9LFxuXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIGFyZWFfY2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHRoaXMucXRleHQgPSBcIlwiO1xuICAgICAgICAgICQoXCIjcXRleHRcIikudmFsKFwiXCIpO1xuXG4gICAgICAgICAgdmFyIHJvd3MgPSB0aGlzLnNlY3Rpb25zWzBdLnN0b3Jlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFtcImFyZWFcIl0gPT0gZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBmb3VuZCA9IHt9O1xuICAgICAgICAgIHZhciBncm91cFJ3b3MgPSByb3dzLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmhhc093blByb3BlcnR5KGVsZW1lbnRbXCJjaXR5X2FyZWFcIl0pXG4gICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgOiAoZm91bmRbZWxlbWVudFtcImNpdHlfYXJlYVwiXV0gPSB0cnVlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY2l0eV9hcmVhcyA9IGdyb3VwUndvcztcblxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfY2l0eV9hcmVhID0gXCJcIjtcbiAgICAgICAgICAkKFwiI2NpdHlfYXJlYVwiKS52YWwoXCJcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2l0eV9hcmVhX2NoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucXRleHQgPSBcIlwiO1xuICAgICAgICAgICQoXCIjcXRleHRcIikudmFsKFwiXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAocXRleHQpIHtcbiAgICAgICAgICB2YXIgdGV4dCA9ICQoXCIjcXRleHRcIikudmFsKCkudHJpbSgpO1xuXG4gICAgICAgICAgaWYgKHRleHQgPT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCLoq4vovLjlhaXpgJrot6/lkI3nqLHmiJblnLDlnYBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2FtMjAyMzA5MTNcbiAgICAgICAgICAvKlxuICAgICAgICAgIGlmICh0ZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgLy8gYWxlcnQoXCLoq4vovLjlhaXpgJrot6/lkI3nqLHmiJblnLDlnYBcIik7XG5cdFx0XHRcblx0XHRcdFN3YWwuZmlyZSh7XG5cdFx0XHQgIHRpdGxlOiAn5o+Q56S6IScsXG5cdFx0XHQgIHRleHQ6ICfoq4vovLjlhaXpgJrot6/lkI3nqLHmiJblnLDlnYAnLFxuXHRcdFx0ICBpY29uOiAnd2FybmluZycsXG5cdFx0XHR9KVxuXHRcdFx0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuKi9cblxuICAgICAgICAgIHRoaXMucXRleHQgPSB0ZXh0O1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfYXJlYSA9IFwiYWxsXCI7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEgPSBcIlwiO1xuXG4gICAgICAgICAgLy90aGlzLnJvd0RhdGEodGhpcy5zZWxlY3RlZF9hcmVhICwgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEsIHRoaXMucXRleHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJvd0RhdGE6IGZ1bmN0aW9uIChlLCBjaXR5X2FyZWEsIHF0ZXh0KSB7XG4gICAgICAgICAgdmFyIHRleHQgPSBxdGV4dC50cmltKCk7XG4gICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgIHZhciBhcnIgPSB0aGlzLnNlY3Rpb25zWzBdLnN0b3Jlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGV4dCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICBpZiAoY2l0eV9hcmVhICE9IFwiXCIpIHtcbiAgICAgICAgICBmbGFnID0gZWxlbWVudFtcImFyZWFcIl0gPT0gZSAmJiAgZWxlbWVudFtcImNpdHlfYXJlYVwiXSA9PWNpdHlfYXJlYTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhZyA9IGVsZW1lbnRbXCJhcmVhXCJdID09IGU7XG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICBpZiAoZmxhZyA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgKi9cblxuICAgICAgICAgICAgICBmbGFnID1cbiAgICAgICAgICAgICAgICBlbGVtZW50W1wic3RvcmVcIl0uaW5kZXhPZih0ZXh0KSA+PSAwIHx8XG4gICAgICAgICAgICAgICAgZWxlbWVudFtcImFkZHJlc3NcIl0uaW5kZXhPZih0ZXh0KSA+PSAwO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAvLyAgIGZsYWcsXG4gICAgICAgICAgICAgIC8vICAgdGV4dCxcbiAgICAgICAgICAgICAgLy8gICBlbGVtZW50W1wic3RvcmVcIl0sXG4gICAgICAgICAgICAgIC8vICAgZWxlbWVudFtcImFkZHJlc3NcIl0sXG4gICAgICAgICAgICAgIC8vICAgZWxlbWVudFtcImFkZHJlc3NcIl0uaW5kZXhPZih0ZXh0KVxuICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaXR5X2FyZWEgIT0gXCJcIikge1xuICAgICAgICAgICAgICBpZiAoZSA9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGVsZW1lbnRbXCJjaXR5X2FyZWFcIl0gPT0gY2l0eV9hcmVhO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPVxuICAgICAgICAgICAgICAgICAgZWxlbWVudFtcImFyZWFcIl0gPT0gZSAmJiBlbGVtZW50W1wiY2l0eV9hcmVhXCJdID09IGNpdHlfYXJlYTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGUgPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBlbGVtZW50W1wiYXJlYVwiXSA9PSBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpc1R5cGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy/poJDoqK3pg73kuI3li74g5YWo6YG45ZWG5ZOBXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkKFwiI3ZpbnRhZ2UyMDAzXCIpLmlzKFwiOmNoZWNrZWRcIikgJiZcbiAgICAgICAgICAgICAgISQoXCIjdmludGFnZTIwMDdcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMThcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMjFcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMjVcIikuaXMoXCI6Y2hlY2tlZFwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoJChcIiN2aW50YWdlMjAwM1wiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbXCJ2aW50YWdlMjAwM1wiXSkge1xuICAgICAgICAgICAgICAgICAgaXNUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYWcgJiYgZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCQoXCIjdmludGFnZTIwMDdcIikuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50W1widmludGFnZTIwMDdcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbGFnICYmIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkKFwiI3RoZWRhbG1vcmUxOFwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbXCJ0aGVkYWxtb3JlMThcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbGFnICYmIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkKFwiI3RoZWRhbG1vcmUyMVwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbXCJ0aGVkYWxtb3JlMjFcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbGFnICYmIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkKFwiI3RoZWRhbG1vcmUyNVwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbXCJ0aGVkYWxtb3JlMjVcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbGFnICYmIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coKGkrKykgKyBlbGVtZW50W1wic3RvcmVcIl0gICtcIiAyMDAzVmFsPVwiICsgJChcIiN2aW50YWdlMjAwM1wiKS52YWwoKSArXCIgc2hvdz1cIiArIGVsZW1lbnRbXCJ2aW50YWdlMjAwM1wiXSArICBcIiAyMDAzPVwiICsgKCQoXCIjdmludGFnZTIwMDNcIikudmFsKCkgPT0gXCJvblwiKSAgICtcIiAyMDA3PVwiICsgJChcIiN2aW50YWdlMjAwN1wiKS52YWwoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbGFnICYmIGlzVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhcnIgPSBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEuc29ydCA8IGIuc29ydCkge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhLnNvcnQgPiBiLnNvcnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5hbWVzIG11c3QgYmUgZXF1YWxcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn0gLy/lkbzlj6tmdW5jdGlvbi3ntrLpoIHovInlhaXlrozmiJDlvoxcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgdG9vbHNMaXN0ZW5lcigpO1xuICBzZXRLdkludGVydmFsKCk7XG4gIHNsaWNrU3dpdGNoZXIoKTtcbiAgdGFiKCk7XG4gIHRhYkZpeGVkKCk7XG4gIG5ld3NMaXN0VnVlKCk7XG4gIHN0b3JlTGlzdFZ1ZSgpO1xuICBmaXhTbWFydHBob25lMTAwdmgoKTtcbiAgLy8tLS0tLemFkuasvuS4i+aLieebuOmXnGpzXG4gIHN0b3JlRmlsdGVyTm90aWZpY2F0aW9uKCk7XG4gIGNsZWFyQ2hlY2tCb3goKTtcbiAgdG9nZ2xlVmlzaWFibGUoXCIudi1kcm9wZG93bi1idG5cIiwgXCIudi1kcm9wZG93bi1tZW51XCIsIDk5Mik7XG4gIGNsaWNrTm9uVGFyZ2V0KFwiLnYtZHJvcGRvd24tYnRuXCIsIFwiLnYtZHJvcGRvd24tbWVudVwiKTtcbiAgdG9nZ2xlVmlzaWFibGUoXCIuY2xvc2VcIiwgXCIudi1kcm9wZG93bi1tZW51XCIsIFwiXCIpO1xuICBjbGlja0NvbmZpcm0oXCIjanMtY29uZmlybVwiLCBcIi52LWRyb3Bkb3duLW1lbnVcIik7XG4gIC8vLS0tLS1bZW5kXemFkuasvuS4i+aLieebuOmXnGpzXG59KTtcbi8v5ZG85Y+rZnVuY3Rpb24t6KaW56qX5aSn5bCP6K6K5pu0XG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHt9KTtcbi8v5ZG85Y+rZnVuY3Rpb24t5o2y5YuVXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgdGFiRml4ZWQoKTtcbiAgbGF6eUxvYWQoKTtcbn0pO1xuIiwiLy8gYWpheCDphY3lkIhKUTMg5byV5YWl6Kit572uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuYWpheFNldHVwKHsgY2FjaGU6IGZhbHNlIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19oZWFkZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2hlYWRlclwiKS5odG1sKGRhdGEpO1xuICAgIGhlYWRlckZ1bmN0aW9uKCk7XG4gIH0pO1xuICAkLmFqYXgoe1xuICAgIHVybDogXCJhamF4L19mb290ZXIuaHRtbFwiLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAkKFwiI2Zvb3RlclwiKS5odG1sKGRhdGEpO1xuICAgIGdvVG9wKCk7XG4gICAgYWdlR2F0ZVN3aXRjaGVyKCk7XG4gICAgcHJpdmFjeVN3aXRjaGVyKCk7XG4gICAgYWdyZWVtZW50U3dpdGNoZXIoKTtcbiAgfSk7XG59KTtcbi8vIOmBuOWWrlxuZnVuY3Rpb24gdG9vbHNMaXN0ZW5lcigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwianMtdXNlTW91c2VcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJqcy11c2VLZXlib2FyZFwiKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImpzLXVzZUtleWJvYXJkXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzLXVzZU1vdXNlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTWVudShtZWRpYVF1ZXJ5KSB7XG4gIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXJcIik7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW1lbnVPcGVuZWRcIik7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwianMtbWVudU9wZW5lZFwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtZWRpYVF1ZXJ5KSB7XG4gICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1tZW51T3BlbmVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZ1bmN0aW9uKCkge1xuICB2YXIgYnJlYWtwb2ludCA9IDc2ODtcbiAgdG9nZ2xlTW9iaWxlTWVudShicmVha3BvaW50KTtcbn1cbi8vIFtFbmRdIOmBuOWWrlxuLy/kvb/nlKjmop3mrL5cbmZ1bmN0aW9uIGFncmVlbWVudFN3aXRjaGVyKCkge1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubW9kYWwtYmFja2Ryb3BcIilbMV0ucmVtb3ZlKCk7XG4gICAgLy8gJCgnI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkJykuY3NzKFwicGFkZGluZy1yaWdodFwiLCBcIjE3cHhcIik7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAkKCcjYWdyZWVtZW50TW9kYWxDZW50ZXJfSWQnKS5jc3MoXCJwYWRkaW5nLWxlZnRcIiwgXCIwcHhcIik7XG4gICAgfSk7XG4gIH0pO1xuICAkKFwiI2FncmVlbWVudE1vZGFsQ2VudGVyX0lkXCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xuICB9KTtcbiAgJChcIiNhZ3JlZW1lbnRCdXR0b25fSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNsZWdhbENoZWNrYm94X0lkXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICB9KTtcbn1cbi8v6Zqx57Wy5qyK5pS/562WKOmFjeWQiGFnZUdhdGUuanPoo6HpnaLnmoRzZXRDb29raWVZZWFyKCkpXG5mdW5jdGlvbiBwcml2YWN5U3dpdGNoZXIoKSB7XG4gIGlmIChnZXRDb29raWUoXCJwcml2YWN5X2RhbG1vcmVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICQoXCIubC1mb290ZXItcHJpdmFjeVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAkKFwiI2FjY2VwdFByaXZhY3lfSWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmwtZm9vdGVyLXByaXZhY3lcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICBzZXRDb29raWVZZWFyKFwicHJpdmFjeV9kYWxtb3JlXCIpO1xuICAgIH0pO1xuICB9XG59XG4vL2dvIHRvcFxuZnVuY3Rpb24gZ29Ub3BTaG93KCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwtZm9vdGVyLWdvVG9wIGFcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCkge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5sLWZvb3Rlci1nb1RvcCBhXCIpLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3AoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubC1mb290ZXItZ29Ub3AgYVwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgLy/nva7poILmjInpiJXnmoTmjbLli5XpgJ/luqZcbiAgICAkKFwiLmwtZm9vdGVyLWdvVG9wIGFcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29Ub3BGaXhlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3RlclwiKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sLWZvb3Rlci1nb1RvcCBhXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgdHJpZ2dlck51bSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRyaWdnZXJOdW0gPT0gXCIgKyB0cmlnZ2VyTnVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgKGVsLm9mZnNldFRvcCArIChlbC5vZmZzZXRIZWlnaHQgLyAzKSkpO1xuICAgIHZhciB0YXJnZXJOdW0gPSBlbC5vZmZzZXRUb3A7XG4gICAgaWYgKHRyaWdnZXJOdW0gPj0gdGFyZ2VyTnVtICsgZWwub2Zmc2V0SGVpZ2h0IC8gMS41KSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKFwianMtYWNpdHZlXCIpO1xuICAgIH1cbiAgfVxufVxuLy9bRW5kXSBnbyB0b3Bcbi8vIOmmlumggei8quaSrVxuZnVuY3Rpb24gc2V0S3ZJbnRlcnZhbCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdlwiKTtcbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgJChcIiNrdlwiKS5jYXJvdXNlbCh7XG4gICAgICBpbnRlcnZhbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaWNrU3dpdGNoZXIoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBcImFqYXgvX3Byb2R1Y3RJbnBhZ2Vfc2xpY2suaHRtbFwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoXCIjcHJvZHVjdElucGFnZVNsaWNrX0lkXCIpLmh0bWwoZGF0YSk7XG4gICAgICAkKFwiLnYtc2xpY2tcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4vL+eUouWTgemggXRhYlxuZnVuY3Rpb24gdGFiKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtdGFiXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICB2YXIgJGxpbmsgPSAkKFwiLnRhYi1saXN0IC50YWItYnRuXCIpO1xuICAgICQoJGxpbmsuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcImFcIikuYXR0cihcImhyZWZcIikpXG4gICAgICAuc2libGluZ3MoXCIudGFiLWNvbnRlbnRcIilcbiAgICAgIC5oaWRlKCk7XG4gICAgJGxpbmsuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChcImh0bWwsYm9keVwiKS5zY3JvbGxUb3AoMCk7XG4gICAgICAvLyAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIDEwMDBcbiAgICAgIC8vICk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi50YWItbGlzdCAudGFiLWJ0blwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKCQodGhpcykuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJocmVmXCIpKVxuICAgICAgICAuZmFkZUluKClcbiAgICAgICAgLnNpYmxpbmdzKFwiLnRhYi1jb250ZW50XCIpXG4gICAgICAgIC5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpLnNpYmxpbmdzKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmpzLWNsYXNzaWNcIikubG9hZChcImFqYXgvX3Byb2R1Y3RfY2xhc3NpYy5odG1sXCIpO1xuICAgICQoXCIuanMtb2xkXCIpLmxvYWQoXCJhamF4L19wcm9kdWN0X29sZC5odG1sXCIpO1xuICAgICQoXCIuanMtbGltaXRlZFwiKS5sb2FkKFwiYWpheC9fcHJvZHVjdF9saW1pdGVkLmh0bWxcIik7XG4gIH1cbn1cbi8v55Si5ZOB6aCBdGFiRml4ZWRUb3BcbmZ1bmN0aW9uIHRhYkZpeGVkKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtcHJvZHVjdC10YWJcIik7XG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93LnBhZ2VZT2Zmc2V0ID09IFwiICsgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImVsLm9mZnNldFRvcCA9PVwiICsgZWwub2Zmc2V0VG9wKTtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGVsLm9mZnNldFRvcCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImpzLWFjaXR2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcInBhZGRpbmctdG9wOiBjYWxjKDcycHggKyA2OXB4KVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWNpdHZlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG4vL+ino+axuuaJi+apn+S4iiBzYWZhcmksIGNocm9tZSDngI/opr3lmaggMTAwdmgg54Sh5rOV5Ymb5aW95LiA5pW06aCB55qE5ZWP6aGMXG5mdW5jdGlvbiBmaXhTbWFydHBob25lMTAwdmgoKSB7XG4gIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmhcIiwgYCR7dmh9cHhgKTtcbn1cblxuLy8g5ZWG5bqX5LiL5ouJ6KSH6YG46YG45Zau55u46ZecLS0tLS0tLS0tLS1cbi8vIOWIpOaWt+S4i+aLiemBuOWWruS4reaYr+WQpuaciemBuOmgheiiq+mBuOWPlu+8jOmBuOWWruS4iuacg+acieWLvuWLvlxuZnVuY3Rpb24gc3RvcmVGaWx0ZXJOb3RpZmljYXRpb24oKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi1kcm9wZG93bi1tZW51XCIpO1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1lbnVCdXR0b25cIik7XG4gIGlmIChlbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0Q29udGFpbmVyICsgXCIgKyBcIiArIHRhcmdldCk7XG4gICAgdmFyIHRyaWdnZXJzID0gZWwucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG4gICAgLy8gY29uc29sZS5sb2codHJpZ2dlcnMpO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoZWNrZWROdW0gPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIFwiaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZFwiXG4gICAgICAgICkubGVuZ3RoO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGVja2VkTnVtKTtcbiAgICAgICAgaWYgKGNoZWNrZWROdW0gPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBjbGVhckFsbEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1jbGVhckNoZWNrQm94ZXNcIik7XG4gICAgY2xlYXJBbGxCdG5FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1pbnB1dENoZWNrZWRcIik7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8g5LiA6Y215riF6ZmkaW5wdXTpgbjpoIVcbmZ1bmN0aW9uIGNsZWFyQ2hlY2tCb3goKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnYtZHJvcGRvd24tbWVudVwiKSkge1xuICAgIHZhciB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1jbGVhckNoZWNrQm94ZXNcIik7XG4gICAgdmFyIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJpZ2dlci5ibHVyKCk7XG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIHRyaWdnZXIuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbi8vIOWIh+aPm+mhr+ekulxuZnVuY3Rpb24gdG9nZ2xlVmlzaWFibGUoZWwsIHRhcmdldCwgbWVkaWFRdWVyeSkge1xuICB2YXIgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKHRhcmdldCkge1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2dnbGVWaXNpYWJsXCIpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwianMtYWN0aXZlXCIpO1xuICAgICAgICB2YXIgaGFzTWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIGlmIChoYXNNZWRpYVF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCBtZWRpYVF1ZXJ5O1xuICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtZnVuY3Rpb25NZW51T3BlbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1mdW5jdGlvbk1lbnVPcGVuZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBjbGlja0NvbmZpcm0oZWwsIHRhcmdldCkge1xuICB2YXIgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKHRhcmdldCkge1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtZnVuY3Rpb25NZW51T3BlbmVkXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbi8vIOm7nuaTiuepuueZveiZlemXnOmWieS4i+aLiVxuZnVuY3Rpb24gY2xpY2tOb25UYXJnZXQoZWwsIHRhcmdldCl7XG4gIHZhciB0cmlnZ2VyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgdmFyIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAodGFyZ2V0RWwpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIXRhcmdldEVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgZXZlbnQudGFyZ2V0ICE9PSB0cmlnZ2VyRWwpIHtcbiAgICAgICAgdHJpZ2dlckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICAgIHRhcmdldEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuLy8gLS0tLS0tLS0tLS1cbi8v5pyA5paw5raI5oGvdnVlXG4vLyBWdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcbmltcG9ydCBuZXdzX2xpc3QgZnJvbSBcIi4uL3BsdWdpbnMvamFzb25fZGF0YS9uZXdzX2xpc3QuanNcIjtcbmZ1bmN0aW9uIG5ld3NMaXN0VnVlKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3NQYWdpbmF0aW9uX0lkXCIpO1xuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBjb25zdCBQQUdFX1NJWkUgPSA2OyAvL+S4gOWAi+mggemdouimgemhr+ekuuWkmuWwkeethuizh+aWmVxuICAgIGNvbnN0IEZPT19EQVRBID0gbmV3c19saXN0O1xuICAgIFZ1ZS5jb21wb25lbnQoXCJwYWdpbmF0ZVwiLCBWdWVqc1BhZ2luYXRlKTtcbiAgICBjb25zdCB2dWUgPSBuZXcgVnVlKHtcbiAgICAgIGVsOiBcIiNuZXdzUGFnaW5hdGlvbl9JZFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbnBhZ2VkYXRhOiBbXSxcbiAgICAgICAgbGlzdGRhdGE6IFtdLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZUNvdW50OiAxLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2VkTGlzdGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICh2bS5saXN0ZGF0YSAmJiB2bS5saXN0ZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0ubGlzdGRhdGEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB4LnBhZ2UgPT09IHZtLmN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSAvLyDlpoLmnpxsaXN0ZGF0Yeacieizh+aWmVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB3YXRjaDoge1xuICAgICAgICBsaXN0ZGF0YTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3NldFBhZ2UyTW9kZWwoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGVsbGlwc2lzKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgbGVuID0gMTE3O1xuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCBsZW4pICsgXCIuLi5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgX3NldFBhZ2UyTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgIGlmICghdm0ubGlzdGRhdGEgfHwgdm0ubGlzdGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnBhZ2VDb3VudCA9XG4gICAgICAgICAgICAgIHBhcnNlSW50KHZtLmxpc3RkYXRhLmxlbmd0aCAvIFBBR0VfU0laRSkgK1xuICAgICAgICAgICAgICAodm0ubGlzdGRhdGEubGVuZ3RoICUgUEFHRV9TSVpFID4gMCA/IDEgOiAwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm0ubGlzdGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdm0uJHNldCh2bS5saXN0ZGF0YVtpXSwgXCJwYWdlXCIsIHBhcnNlSW50KGkgLyBQQUdFX1NJWkUpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYWdlQ2FsbGJhY2s6IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICB0aGlzLiRzZXQodm0sIFwiY3VycmVudFBhZ2VcIiwgcGFnZSk7XG4gICAgICAgICAgLy8g6K6TIGN1cnJlbnRQYWdlIOetieaWvCBwYWdlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0ubGlzdGRhdGEgPSBGT09fREFUQS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgLy8g54K65LqG5LiN5rGh5p+T5pW45pOa77yM6Yed5bCNbGlzdGRhdOWBmua3uuaLt+iynVxuICAgICAgICB2bS5pbnBhZ2VkYXRhID0gRk9PX0RBVEE7XG4gICAgICAgIC8vIOWPpuWklumWi+S6huS4gOe1hOmghuW6j+ato+W4uOeahO+8jOe1puS4gOiIrOWPlueUqFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuLy/llYblupfliJfooahWdWVcbi8vaW1wb3J0IHN0b3Jlc19saXN0IGZyb20gJy4uL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qcyc7XG5pbXBvcnQgc3RvcmVzX2xpc3QgZnJvbSBcIi4uL3BsdWdpbnMvamFzb25fZGF0YS9zdG9yZXNfbGlzdC5qc1wiO1xuZnVuY3Rpb24gc3RvcmVMaXN0VnVlKCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3JlRmlsdGVyX0lkXCIpO1xuXG5cbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgY29uc3QgdnVlID0gbmV3IFZ1ZSh7XG4gICAgICBlbDogXCIjc3RvcmVGaWx0ZXJfSWRcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdG9yZXM6IHN0b3Jlc19saXN0LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdGVkX2FyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgICAgIHNlbGVjdGVkX2NpdHlfYXJlYTogXCJcIixcbiAgICAgICAgcXRleHQ6IFwiXCIsXG4gICAgICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICAgICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICAgICAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgICAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgICAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgICAgICBjaXR5X2FyZWFzOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcmVhX2NoYW5nZSh0aGlzLnNlbGVjdGVkX2FyZWEpO1xuICAgICAgfSxcblxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBhcmVhX2NoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aGlzLnF0ZXh0ID0gXCJcIjtcbiAgICAgICAgICAkKFwiI3F0ZXh0XCIpLnZhbChcIlwiKTtcblxuICAgICAgICAgIHZhciByb3dzID0gdGhpcy5zZWN0aW9uc1swXS5zdG9yZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRbXCJhcmVhXCJdID09IGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgZm91bmQgPSB7fTtcbiAgICAgICAgICB2YXIgZ3JvdXBSd29zID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5oYXNPd25Qcm9wZXJ0eShlbGVtZW50W1wiY2l0eV9hcmVhXCJdKVxuICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgIDogKGZvdW5kW2VsZW1lbnRbXCJjaXR5X2FyZWFcIl1dID0gdHJ1ZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmNpdHlfYXJlYXMgPSBncm91cFJ3b3M7XG5cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkX2NpdHlfYXJlYSA9IFwiXCI7XG4gICAgICAgICAgJChcIiNjaXR5X2FyZWFcIikudmFsKFwiXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNpdHlfYXJlYV9jaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnF0ZXh0ID0gXCJcIjtcbiAgICAgICAgICAkKFwiI3F0ZXh0XCIpLnZhbChcIlwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBxdWVyeTogZnVuY3Rpb24gKHF0ZXh0KSB7XG4gICAgICAgICAgdmFyIHRleHQgPSAkKFwiI3F0ZXh0XCIpLnZhbCgpLnRyaW0oKTtcblxuICAgICAgICAgIGlmICh0ZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL6Ly45YWl6YCa6Lev5ZCN56ix5oiW5Zyw5Z2AXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucXRleHQgPSB0ZXh0O1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfYXJlYSA9IFwiYWxsXCI7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEgPSBcIlwiO1xuXG4gICAgICAgICAgLy90aGlzLnJvd0RhdGEodGhpcy5zZWxlY3RlZF9hcmVhICwgdGhpcy5zZWxlY3RlZF9jaXR5X2FyZWEsIHRoaXMucXRleHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJvd0RhdGE6IGZ1bmN0aW9uIChlLCBjaXR5X2FyZWEsIHF0ZXh0KSB7XG4gICAgICAgICAgdmFyIHRleHQgPSBxdGV4dC50cmltKCk7XG4gICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb25zWzBdLnN0b3Jlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGV4dCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICBpZiAoY2l0eV9hcmVhICE9IFwiXCIpIHtcbiAgICAgICAgICBmbGFnID0gZWxlbWVudFtcImFyZWFcIl0gPT0gZSAmJiAgZWxlbWVudFtcImNpdHlfYXJlYVwiXSA9PWNpdHlfYXJlYTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhZyA9IGVsZW1lbnRbXCJhcmVhXCJdID09IGU7XG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICBpZiAoZmxhZyA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgKi9cblxuICAgICAgICAgICAgICBmbGFnID1cbiAgICAgICAgICAgICAgICBlbGVtZW50W1wic3RvcmVcIl0uaW5kZXhPZih0ZXh0KSA+PSAwIHx8XG4gICAgICAgICAgICAgICAgZWxlbWVudFtcImFkZHJlc3NcIl0uaW5kZXhPZih0ZXh0KSA+PSAwO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAvLyAgIGZsYWcsXG4gICAgICAgICAgICAgIC8vICAgdGV4dCxcbiAgICAgICAgICAgICAgLy8gICBlbGVtZW50W1wic3RvcmVcIl0sXG4gICAgICAgICAgICAgIC8vICAgZWxlbWVudFtcImFkZHJlc3NcIl0sXG4gICAgICAgICAgICAgIC8vICAgZWxlbWVudFtcImFkZHJlc3NcIl0uaW5kZXhPZih0ZXh0KVxuICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaXR5X2FyZWEgIT0gXCJcIikge1xuICAgICAgICAgICAgICBpZiAoZSA9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGVsZW1lbnRbXCJjaXR5X2FyZWFcIl0gPT0gY2l0eV9hcmVhO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPVxuICAgICAgICAgICAgICAgICAgZWxlbWVudFtcImFyZWFcIl0gPT0gZSAmJiBlbGVtZW50W1wiY2l0eV9hcmVhXCJdID09IGNpdHlfYXJlYTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGUgPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBlbGVtZW50W1wiYXJlYVwiXSA9PSBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpc1R5cGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy/poJDoqK3pg73kuI3li74g5YWo6YG45ZWG5ZOBXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkKFwiI3ZpbnRhZ2UyMDAzXCIpLmlzKFwiOmNoZWNrZWRcIikgJiZcbiAgICAgICAgICAgICAgISQoXCIjdmludGFnZTIwMDdcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMThcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMjFcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAhJChcIiN0aGVkYWxtb3JlMjVcIikuaXMoXCI6Y2hlY2tlZFwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlzVHlwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAoJChcIiN2aW50YWdlMjAwM1wiKS5pcyhcIjpjaGVja2VkXCIpICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudFtcInZpbnRhZ2UyMDAzXCJdID09IHRydWUpIHx8XG4gICAgICAgICAgICAgICgkKFwiI3ZpbnRhZ2UyMDA3XCIpLmlzKFwiOmNoZWNrZWRcIikgJiZcbiAgICAgICAgICAgICAgICBlbGVtZW50W1widmludGFnZTIwMDdcIl0gPT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgICAgKCQoXCIjdGhlZGFsbW9yZTE4XCIpLmlzKFwiOmNoZWNrZWRcIikgJiZcbiAgICAgICAgICAgICAgICBlbGVtZW50W1widGhlZGFsbW9yZTE4XCJdID09IHRydWUpIHx8XG4gICAgICAgICAgICAgICgkKFwiI3RoZWRhbG1vcmUyMVwiKS5pcyhcIjpjaGVja2VkXCIpICYmXG4gICAgICAgICAgICAgICAgZWxlbWVudFtcInRoZWRhbG1vcmUyMVwiXSA9PSB0cnVlKSB8fFxuICAgICAgICAgICAgICAoJChcIiN0aGVkYWxtb3JlMjVcIikuaXMoXCI6Y2hlY2tlZFwiKSAmJlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJ0aGVkYWxtb3JlMjVcIl0gPT0gdHJ1ZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpc1R5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKChpKyspICsgZWxlbWVudFtcInN0b3JlXCJdICArXCIgMjAwM1ZhbD1cIiArICQoXCIjdmludGFnZTIwMDNcIikudmFsKCkgK1wiIHNob3c9XCIgKyBlbGVtZW50W1widmludGFnZTIwMDNcIl0gKyAgXCIgMjAwMz1cIiArICgkKFwiI3ZpbnRhZ2UyMDAzXCIpLnZhbCgpID09IFwib25cIikgICArXCIgMjAwNz1cIiArICQoXCIjdmludGFnZTIwMDdcIikudmFsKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxhZyAmJiBpc1R5cGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59IC8v5ZG85Y+rZnVuY3Rpb24t57ay6aCB6LyJ5YWl5a6M5oiQ5b6MXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHRvb2xzTGlzdGVuZXIoKTtcbiAgc2V0S3ZJbnRlcnZhbCgpO1xuICBzbGlja1N3aXRjaGVyKCk7XG4gIHRhYigpO1xuICB0YWJGaXhlZCgpO1xuICBuZXdzTGlzdFZ1ZSgpO1xuICBzdG9yZUxpc3RWdWUoKTtcbiAgZml4U21hcnRwaG9uZTEwMHZoKCk7XG4gIC8vLS0tLS3phZLmrL7kuIvmi4nnm7jpl5xqc1xuICBzdG9yZUZpbHRlck5vdGlmaWNhdGlvbigpO1xuICBjbGVhckNoZWNrQm94KCk7XG4gIHRvZ2dsZVZpc2lhYmxlKFwiLnYtZHJvcGRvd24tYnRuXCIsIFwiLnYtZHJvcGRvd24tbWVudVwiLCA5OTIpO1xuICBjbGlja05vblRhcmdldChcIi52LWRyb3Bkb3duLWJ0blwiLCBcIi52LWRyb3Bkb3duLW1lbnVcIik7XG4gIHRvZ2dsZVZpc2lhYmxlKFwiLmNsb3NlXCIsIFwiLnYtZHJvcGRvd24tbWVudVwiLCBcIlwiKTtcbiAgY2xpY2tDb25maXJtKFwiI2pzLWNvbmZpcm1cIiwgXCIudi1kcm9wZG93bi1tZW51XCIpO1xuICAvLy0tLS0tW2VuZF3phZLmrL7kuIvmi4nnm7jpl5xqc1xufSk7XG4vL+WRvOWPq2Z1bmN0aW9uLeimlueql+Wkp+Wwj+iuiuabtFxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7IH0pO1xuLy/lkbzlj6tmdW5jdGlvbi3mjbLli5VcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICB0YWJGaXhlZCgpO1xuICBsYXp5TG9hZCgpO1xufSk7XG4iLCJjb25zdCBuZXdzX2xpc3QgPSBbe1xuICAgIHRpdGxlOiAn5aSn5pGp5YW46JeP54+N56iA5bm05Lu9PGJyPuWFuOiXj+acqOebkueNqOeNu+WPsOeBoycsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMS53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTAxLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogJ+WdkOaTgeiYh+agvOiYreacgOWPpOiAgeapoeacqOahtuiXj+eahOOAjOiAgemFkumKgOihjOOAjeWkp+aRqemFkuW7oO+8jOeZvOW4g+WFqOaWsOezu+WIl+OAiuWkp+aRqeWFuOiXj+ePjeeogOW5tOS7veezu+WIlyBUaGUgRGFsbW9yZSBWaW50YWdlc+OAi+atoeaFtumHgOmFkuW3peiXneiHs+mrmOaIkOWwse+8jOmZkOmHj+mFkuasviBWaW50YWdlIDIwMDLjgIFWaW50YWdlIDIwMDUg5bCH5Zyo54m55a6a5Lqe5rSy5biC5aC06aCQ5YWI5pud5YWJ77yM5YaN5b6A5YWo55CD5ZCE5aSn5Z+O5biC55m85biD77yM6ICM5bCa5qC86YWS5qWt5pu05bCH6ZmQ6YeP57K+6KOd5pyo55uS54mI5pys542o54275Y+w54Gj77yM5pC25YWI5YWo55CD6aaW55m85LiK5biC44CCJyxcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTAxLmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkakyMDIy6Y6P6YeR5aWi5bGVPGJyPumbi+iXj+Wlp+iXnWzogIHphZLpioDooYwnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDIud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wMi53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6ICfjgIzlpKfmkakyMDIy6Y6P6YeR5aWi5bGV44CN5pa8MDHmnIgxM+aXpeWxleWHuuiHszAx5pyIMjPml6Xmlrzlj7DljJflvq7poqjljZflsbHol53mlofkuK3lv4PvvIzpmZDmnJ/lsZXlh7oxMeWkqeOAguS7peOAjOiAgemFkumKgOihjOOAjemHkeW6q+Wkp+mWgOWPiumOj+WFieeGoOeGoOeahOS/nemaquarg++8jOKAi+WFtuS4reWtmOaUvuiRl+S+huiHquaZguWFiea3rOmNiueahOWkp+aRqeatt+WPsumHjOeoi+eikeWPiuePjeeogOmFkua2sueCuuWxleimveioreioiOaguOW/g+amguW/te+8jOa8lOe5ueWkp+aRqei/keWFqeeZvuW5tOS+hueahOmFkuW7oOatt+WPsuOAgeS6uuaWh+eyvuelnuOAgealteiHtOW3peiXne+8jOa3seW6puaOoueptuaZgumWk+ayiea+seS4i+eahOmdnuWHoeWDueWAvOOAgicsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wMi5odG1sJ1xufSwge1xuICAgIHRpdGxlOiAn56iA5LiW54+N5ZOB5aSn5pGpNjLlubQ8YnI+5YaN56C05ouN6LOj57SA6YyEJyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTAzLndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDMud2VicCddLFxuICAgIHRleHRDb250ZW50OiBcIuiYh+WvjOavlOaWvDIwMjDlubQ15pyIMTTml6XlsZXplovkuIDloLTlkI3ngrrpu57mu7TmiJDph5HnmoTnt5rkuIrng4jphZLmi43os6PmnIPvvIzlhbHmnIkyMTbpoIXlqIHlo6vlv4zjgIHlubLpgpHnrYnng4jphZLnj43nqIDmi43lk4HjgILmraTmi43os6Plt7LmlrzlgKvmlabmmYLplpMyMDIw5bm0NeaciDI45pel5pma5LiKOOm7nue1kOadn++8jOS4pueUseWFqeeTtuWkp+aRqTYy5bm05Lul6aCQ5Lyw5YO55YWp5YCN5aSa55qE6auY5YO55Lim5YiX5oiQ54K65q2k5ouN6LOj5pyD5pyA6auY5ouN5YO555qE54+N5ZOB77yM5oiQ5Lqk5YO55ZCM54K6IEdCUMKjMjY2LDIwMOiLsemOiijntITlj7DluaMxMDAw6JCsKeOAguOAjOWkp+aRqTYy5bm077yM5LiA5ru06YO95LiN6IO95rWq6LK744CC44CN77yIRGFsbW9yZSA2MiDigJNjYW4ndCBsZXQgYSBkcm9wIGhpdCB0aGUgZmxvb3LvvIHvvInvvIzpgJnlj6Xkvoboh6rpm7vlvbHjgIrph5HniYznibnli5njgIvnmoTntpPlhbjlsI3nmb3vvIzoqqrmmI7kuoblpKfmkanlqIHlo6vlv4znmoTlvYzotrPnj43osrTvvIzmm7TlsaLlsaLnt6DpgKDmi43os6PluILloLTkuI3mnL3lgrPlpYfjgIJcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTAzLmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICfmraHmhbblpKfmkanphZLlu6AxODDlubQ8YnI+6Zuq6I6JMTLlubTpqZrosZTkuIrluIInLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDQud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNC53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi6JiH5qC86Jit6auY5Zyw5Y2A55qE44CM6ICB6YWS6YqA6KGM44CN5aSn5pGp6YWS5bug5ZyoMjAxOeW5tOacq+atoeW6pjE4MOatsueUn+aXpe+8jOmAmeWgtOS4lue0gOaFtueUn+aMgee6jOWIsDIwMjDlubTvvIzku43orpPlhajnkIPlqIHlo6vlv4zluILloLToiIjlpa7kuI3lt7LvvIzlpKfmkankuI3lj6rmjqjlh7rntIDlv7XovJ3nhYzmmYLliLvnmoQxODDpgLHlubTntIDlv7XphZLilIDilIDlhajnkIPpmZDph4/kuInnk7bnmoTlpKfmkak2MOW5tOWWruS4gOm6peiKveWogeWjq+W/jO+8jOS4puS4iuW4guebruWJjeacgOmrmOW5tOS7veeahOWkp+aRqTUx5bm06IiH5YWo5paw44CM6Zuq6I6J55SE6YG457O75YiX44CNMTLlubTllq7kuIDpuqXoir3lqIHlo6vlv4zvvIzkuI3lg4XlpoLmraTvvIzlpKfmkanlhajns7vliJfljIXoo53kuZ/lhajpnaLmj5vmlrDoo53vvIzoqK3oqIjmm7Tpoa/lsIrmpq7lpaLoj6/vvIzpgoDoq4vlhajkuJbnlYzphZLov7fkuIDlkIzmhbbnpZ3lpKfmkanlqIHlo6vlv4zotbDlhaXkuIvkuIDlgIsxODDlubTjgIJcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA0Lmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkak1MOW5tOePjeeogOeZu+WgtDxicj7pppblibXlhaXpppnmqrPmobYnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDUud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNS53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi54K65LqG6KqM5oW25aSn5pGp77yIVGhlIERhbG1vcmXvvInllq7kuIDpuqXoir3lqIHlo6vlv4zpppbluK3ph4DphZLluKtSaWNoYXJkIFBhdGVyc29u77yM6IeqMTfmrbLouI/pgLLlqIHlo6vlv4zpoJjln5/vvIwyNuatsueVtuS4iuWkp+aRqemmluW4remHgOmFkuW4q+iHs+S7iuWxhua7vzUw5bm077yM6YCZ5L2N57Sg5pyJ44CM56We5LmL6by744CN576O6K2955qE5aiB5aOr5b+M5aSn5bir5Lul57Sv56mNNTDlubTnmoTovJ3nhYzoo73phZLmiJDlsLHvvIzmgonlv4PmiZPpgKDkuIDmrL7lj7LnhKHliY3kvovnmoTlpKfmkak1MOW5tOWkp+W4q+WFuOiXj+WWruS4gOm6peiKveiYh+agvOiYreWogeWjq+W/jO+8jOWFqOeQg+mZkOmHj+eZvOihjDUw55O2XCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0wNS5odG1sJ1xufSwge1xuICAgIHRpdGxlOiAn5aSn5pGp56+J5YWJ5aSn5bir57O75YiXTm8uMTxicj7mlJzmiYvpmojnoJTlkL7lho3libXpq5jls7AnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDYud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wNi53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi5YWo55CD56qW6JeP5pyA56iA5pyJ5aiB5aOr5b+M55qE44CM6ICB6YWS6YqA6KGM44CN5aSn5pGp6YWS5bug77yM6L+R5bm05L6G6IiH6JiH5qC86Jit56ys5LiA5bqn6Kit6KiI5Y2a54mp6aSoViZBIER1bmRlZeWQiOS9nOWvhuWIh++8jOS/g+aIkOeVtuS7o+W7uuevieWkp+W4q+iIh+WogeWjq+W/jOWkp+W4q+eahOWNlOS9nO+8jOS4puaWvDIwMjLlubTkuIrluILlhajmlrDphZLmrL7ns7vliJfvvIzjgIzlpKfmkannr4nlhYnlpKfluKvns7vliJfjgI3jgIJcIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA2Lmh0bWwnXG59LCB7XG4gICAgdGl0bGU6ICflpKfmkannr4nlhYnlpKfluKvns7vliJdOby4xPGJyPjIwMjLpmZDlrprniYgg6ZmQ6YeP6aaW55m8JyxcbiAgICBpbWdTcmM6IFsnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA3LndlYnAnLCdhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDcud2VicCddLFxuICAgIHRleHRDb250ZW50OiBcIummluWJteS7peS4ieeoruePjeeogOapoeacqOahtu+8jOiYh+agvOiYreapoeacqOahtiAoVGF5IE9haynjgIHml6XmnKzmsLTmpaLmobblkoznvo7lnIvnmb3mqaHmnKjmobbvvIzoqILoo73miJDjgIzph5HnubzjgI3vvIhLaW50c3Vnae+8ieapoeacqOahtu+8jOS4pumZs+mHgOWHuuWFt+acieWkmumHjeeNqOeJuemiqOWRs+S4lOWujOe+juW5s+ihoeeahOWWruS4gOm6peiKveWogeWjq+W/jO+8jOWFqOeQg+mZkOmHjzE1LDAwMOeTtuOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDcuaHRtbCdcbn0sXG57XG4gICAgdGl0bGU6ICflpKfmkannkoDnkqgxOOW5tCAyMDIzIEVkaXRpb248YnI+6Y6P5YWJ5LmL6JedIOmZkOmHj+ahtuiXjycsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wOS53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTA5LW1iLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLlpKfmkanogIHphZLntpPlhbjkuYvkuIDvvI3lpKfmkakxOOW5tOWWruS4gOm6peiKveiYh+agvOiYreWogeWjq+W/jO+8jOaWvDIwMjHlubTlhajnkIPnhrHpirfkuIDnqbrlvozvvIzpgKDmiJDlqIHlo6vlv4zpkZHos57lrrbnmoTkuIDniYfmg4vmg5zjgILku4rlubTvvIwyMDIz5bm05YWo6Z2i5Y2H57Sa77yM5YWo5paw56OF56Sh5LiK5biC44CM5aSn5pGp55KA55KoMTjlubTllq7kuIDpuqXoir3omIfmoLzomK3lqIHlo6vlv4wg77yNMjAyMyBFZGl0aW9uIC3jgI1cIixcbiAgICBhSHJlZjogJ25ld3MtaW5wYWdlLTA5Lmh0bWwnXG59LCBcbntcbiAgICB0aXRsZTogJ+Wkp+aRqeWFuOiXj+ePjeeogOW5tOS7vTxicj7pm4vmsLjmmYLlhYnlrprnvqnnj43nqIAnLFxuICAgIGltZ1NyYzogWydhc3NldHMvaW1nL25ld3MvaW1nX25ld3NJbnBhZ2UtMDgud2VicCcsJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0wOC1tYi53ZWJwJ10sXG4gICAgdGV4dENvbnRlbnQ6IFwi5pOB5pyJ5pyA5bCK6LK05aiB5aOr5b+M55qE5aSn5pGp6YWS5bug77yM5Y675bm055m85biD5YWo5paw57O75YiX44CK5aSn5pGp5YW46JeP54+N56iA5bm05Lu957O75YiXIFZpbnRhZ2VzIDIwMDIvMjAwNeOAi+atoeaFtumHgOmFkuW3peiXneiHs+mrmOaIkOWwse+8jOS7pemZkOmHj+eyvuijneacqOebkueJiOacrOeNqOeNu+WPsOeBo++8jOaIkOeCuuWOu+W5tOacgOeGsemWgOeahOaUtuiXj+ipsemhjOOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMDguaHRtbCdcbn0sXG57XG4gICAgdGl0bGU6ICfmlJzmiYvlj7DljJfmhZXoiI3phZLlupc8YnI+5omT6YCg6Lyd54WMOOaciOebm+WutCcsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0xMC53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTEwLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLlsJrmoLzphZLmpa3ngrrmraHmhbblsazmlrzmr4/kuIDkvY3niLbopqrnmoQ45pyI77yM5b6eOOaciDjml6Xoh7M55pyIMTDml6XngrrmnJ/kuIDlgIvmnIjvvIzlpKfmkanllq7kuIDpuqXoir3omIfmoLzomK3lqIHlo6vlv4zoiIfolojokIPnvo7po5/jgIHol53ooZPoiIfnlJ/mtLvlk4HlkbPnmoTlnIvpmpvnsr7lk4HphZLlupdIT1RFTCBNVlNBIOaFleiIjemFkuW6l+mbmeW8t+iBr+WQje+8jOmAj+mBjuS4lueVjOacgOWwiuiytOWogeWjq+W/jOWSjOS7pOS6uuWaruW+gOWCvuaFleeahOeUn+a0u+WxheiIje+8jOWFseS6q+m7nua7tOePjeiXj+eahOe+juWlveaZguWFieOAglwiLFxuICAgIGFIcmVmOiAnbmV3cy1pbnBhZ2UtMTAuaHRtbCdcbn0se1xuICAgIHRpdGxlOiAn5aSn5pGp5YKz5aWH5beh56auPGJyPuWFseitnOaBhuS5heeSgOeSqCcsXG4gICAgaW1nU3JjOiBbJ2Fzc2V0cy9pbWcvbmV3cy9pbWdfbmV3c0lucGFnZS0xMS53ZWJwJywnYXNzZXRzL2ltZy9uZXdzL2ltZ19uZXdzSW5wYWdlLTExLndlYnAnXSxcbiAgICB0ZXh0Q29udGVudDogXCLjgIzlpKfmkanlgrPlpYflt6Hnpq7jg7vlhbHorZzmgYbkuYXnkoDnkqjjgI3pgoDoq4vmtojosrvogIXntpPmrbfkuIDloLTot6jmmYLnqbrjgIHot6jlnIvnlYznmoTlpaLoj6/kuYvml4XjgILlnKjmnInjgIznpZ7kuYvpvLvjgI3nvo7orb3nmoTlpKfmkanpppbluK3ph4DphZLluKtSaWNoYXJkIFBhdGVyc29u5Y+K5paw56eR5bm05bqm5pyA5L2z6YeA6YWS5bir77yN5aSn5pGp57i96KO96YWS5birR3JlZ2cgR2xhc3PnmoTluLbpoJjkuIvvvIzmtojosrvogIXlvpfku6Xol53pgYrlpKfmkanntpPlhbjkvbPph4DnmoTlgrPlpYfnr4fnq6DvvIzkuKbpp5DotrPlk4HphanlhajmlrDkuIrluILnmoTjgIzlpKfmkannkoDnkqgxOOW5tO+8jTIwMjMgRWRpdGlvbiAt44CNXCIsXG4gICAgYUhyZWY6ICduZXdzLWlucGFnZS0xMS5odG1sJ1xufSxcbl07XG5leHBvcnQgZGVmYXVsdCBuZXdzX2xpc3QiLCJjb25zdCBhbGxfc3RvcmVzID0gW1xuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLokKzoj6/nhZnphZJcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLokKzoj6/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOWSjOW5s+ilv+i3r+S4ieautTEwM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yMzAyLTc4OTZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIumFkuWci+Wkp+S6qFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX6JCs6I+v5Y2A5Y2X5a+n6LevNDUtMuiZn1wiLFxuICAgIHRlbDogXCIwMi0yMzA2LTAxMDJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6YeR5resXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs6I+v5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILokKzoj6/ljYDlu6Plt57ooZcyMDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjMwOC01NjQ3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5L2z6LOAKOS7geaEm+W6lylcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOadseixkOihlzIx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMjUtNjI1NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlr4znm5tcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLokKzoj6/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOafs+W3nuihlzM46JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMzEtMzI2OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIum9iuazsFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiQrOiPr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC6JCs6I+v5Y2A5piG5piO6KGXMTUw6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMzEtNTE0N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6aKo5qC85ZKM5bmzXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs6I+v5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILokKzoj6/ljYDlkozlubPopb/ot6/kuInmrrUxNjPomZ9cIixcbiAgICB0ZWw6IFwiMDItMjMzNi0xNzU5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLphZLkuJbnlYzkuK3mraNcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3mraPljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reato+WNgOS4reiPr+i3r+S6jOautTMxM+W3tzE26JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzMzctNjY2NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLnj4jlk4FcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOawuOW6t+ihlzQy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIzNTctODc3MlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLokKznm4pcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLokKzoj6/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guiQrOiPr+WNgOafs+W3nuihlzQwLTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjM4Mi0xNjY1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6aex5YyX5rSL6KGMXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs6I+v5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILokKzoj6/ljYDosrTpmb3ooZfkuozmrrUxNjTlt7czMuiZn1wiLFxuICAgIHRlbDogXCIwMi0yMzgzLTIyMDFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLosrfphZLntrIo5Y+k5Lqt6ZaA5biCKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5p2t5bee5Y2X6Lev5LqM5q61MTA36JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yMzkxLTA3MDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6Zi/54i+55m8XCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDlvqnoiIjljJfot681MTTlt7cy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1MDQtNzEyM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuafj+mBlFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5rCR5qyK5p2x6Lev5LqM5q61MTUy5be3MjLlvIQy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1MDktODQ4MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIumKgOixkFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p6X5qOu5YyX6LevMTMz5be3NjjomZ9cIixcbiAgICB0ZWw6IFwiMDItMjUxMS02ODA0XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuiyt+mFkue2sijmnb7msZ/ploDluIIpXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDmnb7msZ/ot68xMzHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjUxNi0xOTE2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuawuOWIqVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5rCR55Sf5p2x6Lev5LqM5q61NznomZ9cIixcbiAgICB0ZWw6IFwiMDItMjUyMy04MDE5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLmnb7mnpdcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOWNl+S6rOadsei3r+S6jOautTIx5be3OOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNTMxLTU3NDFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOS4reWxsemWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOS4reWxseWMl+i3r+S6jOautTQ26JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNTMxLTk3NTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5YqJ5oGG6KOVXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5ZCM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflkIzljYDmsJHnlJ/opb/ot68zNDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU1Ni0wOTQ4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuapoeacqOahtuadvuaxn+W6l1wiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTkw6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1NjItODAwMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuWYieWIqVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p6X5qOu5YyX6LevNDM46JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1NjMtMzk2OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLph5Hnm4NcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOaWsOeUn+WMl+i3r+S6jOautTYy5be3NDLomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU4MS0xNjUxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLpmb3lhYnnvo7phZLologo5L2z6YaHKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5p2+5rGf6LevMTjomZ9cIixcbiAgICB0ZWw6IFwiMDItMjU4MS04NTIwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIua1t+e0jeW3nVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5ZCJ5p6X6LevMjI16JmfXCIsXG4gICAgdGVsOiBcIjAyLTI1ODEtODU5MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLngYPlp7XphZLmpa1cIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlhafmuZbljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWFp+a5luWNgOWuieW6t+i3rzQyMuiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjMxLTU3NjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5oyv5a6cXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDlv6DlrZ3mnbHot6/lha3mrrU0OTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY1MS0xMzI4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5L2z6LOAKOW/oOWtneW6lylcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmuK/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWNl+a4r+WNgOW/oOWtneadsei3r+WFreautTM4NuiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjUxLTk5MzlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5LiD5LiJ5LiDXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YWn5rmW5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlhafmuZbljYDlhafmuZbot6/kuIDmrrU3Mzflt7c1MeW8hDPomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY1Ny05MTMwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5o+Q55GqXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDkv6Hnvqnot6/lm5vmrrUyNTTomZ9cIixcbiAgICB0ZWw6IFwiMDItMjcwMC0wMjU5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5aSn6JGh5ZySXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2+5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDmlabljJbljZfot6/kuIDmrrUxMDItMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzAyLTUwNTNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLosrfphZLntrIo5L+h576p6ZaA5biCKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5L+h576p6Lev5Zub5q61MjY36JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzAzLTAyMzNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5Li56aiwXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDlpKflronot6/kuIDmrrUzMeW3tzE56JmfQ+WupFwiLFxuICAgIHRlbDogXCIwMi0yNzA0LTM1MDdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLkvbPos4Ao5L+h576p5bqXKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WuieWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aSn5a6J5Y2A5L+h576p6LevM+autTEyOOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzA4LTA1ODNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOaVpuS6jOmWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOaVpuWMluWNl+i3r+S6jOautTk46JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzA4LTA3NTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi576O5aSa5a6iXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDmnbHosZDooZc3N+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNzA4LTg3MjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLmtIvphZLln44t5LuB5oSbXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDku4HmhJvot6/lm5vmrrUxMTLlt7cyMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzA5LTUxNjhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOaVpuS4gOmWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOaVpuWMluWNl+i3rzHmrrUxOTbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjcxMS0wMDE5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuS9s+izgCjlhYnoj6/lupcpXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDmuK3msLTot681NuiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzExLTYxMThcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOawkeeUn+mWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOawkeeUn+adsei3r+Wbm+autTU46JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzE4LTg4MjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6YWS5bee5b6p6IiI5bqXXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2+5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDlvqnoiIjljZfot6/kuIDmrrUzMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzIxLTYxMTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5qWg6IiIXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDkv6Hnvqnot6/lha3mrrU5MeiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzI4LTI3NzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOW+qeiIiOmWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reWxseWNgOW+qeiIiOWMl+i3rzg06JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzUyLTU5OTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5b+g5L2zXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L+h576p5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkv6HnvqnljYDmnb7lvrfot68yODfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc1OS03NTMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIua1t+WfjlwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5p2+5bGx6LevMjg56JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3NjUtOTM2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlpb3phZLlpJpcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOWFq+W+t+i3r+Wbm+autTIwMOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNzY4LTE3ODZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5LiA6YWS5LiD5LqUXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2+5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILmnb7lsbHljYDluILmsJHlpKfpgZPkupTmrrUxMjfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc2OC0xOTc1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6LK36YWS57ayKOW4guaUv+W6nOmWgOW4gilcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkv6HnvqnljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS/oee+qeWNgOW/oOWtneadsei3r+S6lOautTUx6JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi0yNzY5LTYwOTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6YeR6YeAXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDku4HmhJvot6/lm5vmrrU0MTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc3Mi0wMTAxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5L2z6LOAKOW7tuWQieW6lylcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflronljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWkp+WuieWNgOW7tuWQieihlzEyOC0x6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI3NzktMDg2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlj4vnvo5cIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmuK/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWNl+a4r+WNgOiIiuiOiuihl+S6jOautTPomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc4Mi04NDY5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6YeR55Ge5oiQXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5riv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILljZfmuK/ljYDlv6DlrZ3mnbHot6/kuIPmrrU2MDHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjc4Ni0yMjM5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5LiW6YGUXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5oqV5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILljJfmipXljYDmlofmnpfljJfot68xNzbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjgyMy01Nzc3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIumjm+S5hVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5Lit5bGx5Y2A5YyX6Lev5YWt5q61MjfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjgzMi0xMDk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuaJv+WQiFwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWjq+ael+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5aOr5p6X5Y2A5paH5p6X6LevNTg35be3MTE16JmfXCIsXG4gICAgdGVsOiBcIjAyLTI4MzItMjkxMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlsZXlrrhcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlo6vmnpfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWjq+ael+WNgOemj+a4r+ihlzE0OeW3tzE15byEOOiZn1wiLFxuICAgIHRlbDogXCIwMi0yODgxLTU4MThcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLpioDnm6Tlo6vmnpdcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlo6vmnpfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWjq+ael+WNgOWkp+WMl+i3rzg16JmfXCIsXG4gICAgdGVsOiBcIjAyLTI4ODEtNjgyOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlpKfosaFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmloflsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guaWh+WxseWNgOS/neWEgOi3rzEyNOiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTM5LTM0MzlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLmmIzlr4zloZTmgqBcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOWhlOaCoOi3rzE36JmfXCIsXG4gICAgdGVsOiBcIjAyLTM3NjUtNTg5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLkvbPos4Ao5rC45ZCJ5bqXKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5rC45ZCJ6LevMTIw5be3OTDomZ9cIixcbiAgICB0ZWw6IFwiMDItNzcyOS00OTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuW6t+WWnOWuoi3mnb7lsbFcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb7lsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guadvuWxseWNgOWFieW+qeWMl+i3rzEzNuiZn1wiLFxuICAgIHRlbDogXCIwMi04NzcwLTc1NTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi5aW956qpXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILkuK3lsbHljYDplbflronmnbHot6/kuozmrrUyODbomZ9cIixcbiAgICB0ZWw6IFwiMDItODc3Mi0wMDE0XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEsXG4gICAgc3RvcmU6IFwi6byO6LGQXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDlu7blkInooZc2MuW3tzblvIQx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTg3NzItODgyMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuiyt+mFkue2sijku4HmhJvploDluIIpXCIsXG4gICAgYXJlYTogXCLlj7DljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn5a6J5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljJfluILlpKflronljYDku4HmhJvot6805q61MjnomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAyLTg3NzMtMjYwN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLosrfphZLntrIo5YWn5rmW5peX6Imm6ZaA5biCKVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFp+a5luWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5YWn5rmW5Y2A6KGM5oSb6LevNzflt7c2OeiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDItODc5Mi01MTg2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxLFxuICAgIHN0b3JlOiBcIuayg+WIqeeJuVwiLFxuICAgIGFyZWE6IFwi5Y+w5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS/oee+qeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5YyX5biC5L+h576p5Y2A5rC45ZCJ6LevMjc45be3Mi0z6JmfXCIsXG4gICAgdGVsOiBcIjA5MzMtNDc1LTIxMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLlsI/lha1cIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3mraPljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guS4reato+WNgOS4reiPr+i3r+S6jOautTMxMeW3tzbomZ9cIixcbiAgICB0ZWw6IFwiMDkzNS0zMTUtMzA4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMSxcbiAgICBzdG9yZTogXCLmt7vphZJcIixcbiAgICBhcmVhOiBcIuWPsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmuK/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWMl+W4guWNl+a4r+WNgOadseiIiOihlzk06JmfXCIsXG4gICAgdGVsOiBcIjA5NjUtNDM1LTE0NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5paw6I6K5piM5a+MXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6I6K5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDmlrDmqLnot68yMjbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIwNC0wNjkxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6bql5b6355CG5paw6I6KXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6I6K5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDpvo3lronooZcyMjbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIwOC01MTE2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmlrDlupfmnY5cIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDlupfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOW6l+WNgOWuieW6t+i3r+S6jOautTM1OeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjE1LTY1NTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi55Ge6aiw5oGG5aSnXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuK3lkozljYDojpLlhYnot681NeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjIzLTU3ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLkvbPos4Ao55Kw55CD5bqXKVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWSjOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A5Lit5bGx6Lev5LiJ5q61OTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIyNi05OTkwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuS9s+izgCjkuK3lkozlupcpXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuK3lkozljYDkuK3lsbHot6/kuozmrrU0MDEtMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjI4LTY5ODFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5a6l57+U5rSL6KGMXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmsJHkuqvooZc36JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMjgtOTg3N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuS6rOe/sFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWSjOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A5ZOh5bGx6LevNDAw6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyMjgtOTg5N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5ZCN6YWS6ZuGXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmiJDlip/ot6/kuIDmrrU5M+W3tzIz5byEMTPomZ9cIixcbiAgICB0ZWw6IFwiMDItMjIzMi00MTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuWYieWxlVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWSjOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A5pmv5bmz6LevNTc26JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyNDMtODM2MVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuaYrealrVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadv+api+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A6Zuo6L6y6LevNeiZn1wiLFxuICAgIHRlbDogXCIwMi0yMjU1LTUwMTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmpq7mpq7oj7jphZLlsIjos6PlupdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guadv+api+WNgOWkp+S7geihlzQy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyNzItMDEwMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmrZDmtLLphZLpm4ZcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOeri+S/oeS4gOihlzUy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyNzYtODg5OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIumYv+exs+WPr1wiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LiJ5ZKM6LevNOautTI5MuW3tzEz6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyODAtNzAwMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIumFkumljFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A56aP6ZqG6LevM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yMjgwLTk2NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLkuInoj69cIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkupTogqHljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS6lOiCoeWNgOabtOa0sui3rzIzLTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjI4Mi0xMTEyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLnmb7okKzlrrZcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOS4ieawkei3rzI25be3NDnlvIQy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyODUtMTIzMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIueri+iQrOihjFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6lOiCoeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LqU6IKh5Y2A5oiQ5rOw6Lev5LiJ5q61MTYx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTIyOTEtODgzN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5YWo55CDKOael+WPoylcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnpflj6PljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guael+WPo+WNgOS4reWxsei3rzIzN+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNjAxLTk3NTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIumWi+e/lFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIua3oeawtOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5reh5rC05Y2A5a245bqc6LevNjAtM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNjIwLTIwODBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6byO57SaXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rex5Z2R5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmt7HlnZHljYDljJfmt7Hot6/kuInmrrUxMTHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY2NC00ODg4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuWwmumLklwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4ieWzveWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ5bO95Y2A5aSn5YuH6LevMTXomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY3Mi05Nzg2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5q2j6Kqg6KGMXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5bO95Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInls73ljYDlnIvlhYnooZczODbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjY3My0xNTE1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5Yyv55y+XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5bO95Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInls73ljYDlhYnmmI7ot683MuiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjczLTczMTBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmi7/noLTltJlcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmqLnmnpfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaoueael+WNgOS/neWuieihl+S6jOautTItN+iZn1wiLFxuICAgIHRlbDogXCIwMi0yNjc1LTA3ODBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLlmInovrBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsZDmraLljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaxkOatouWNgOW6t+Wvp+ihlzUxNOiZn1wiLFxuICAgIHRlbDogXCIwMi0yNjk1LTY2OTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLlpKfmpZpcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOmAsuWuieihlzQx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI4NTctODk1N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIueOlumgu+mBk1wiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuazsOWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5rOw5bGx5Y2A5piO5b+X6Lev5LiJ5q61MjE36JmfXCIsXG4gICAgdGVsOiBcIjAyLTI5MDYtNjU2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmmKXms7BcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDlupfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOW6l+WNgOS4reiIiOi3r+S4gOautTI5MeiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTE3LTUxNTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5a+M5revXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDkuK3mraPot68zODPomZ9cIixcbiAgICB0ZWw6IFwiMDItMjkyNi0yMTg4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5L2z6YeASSBDSEVFUlMg5oSb6YWS56qpXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmiJDlip/ot6/kuIDmrrU4MOiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTI2LTM2NjdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuS9s+izgCjmqILoj6/lupcpXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45ZKM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmsLjlkozljYDmsLjlkozot6/kuIDmrrUxMjfomZ9cIixcbiAgICB0ZWw6IFwiMDItMjkyNi03MTA4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuWuh+mHgFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWSjOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Lit5ZKM5Y2A6Ieq56uL6LevOTnlt7cxM+iZn1wiLFxuICAgIHRlbDogXCIwMi0yOTQ3LTU1NTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLphZLmtbfllYbooYxcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guadv+api+WNgOiytOiIiOi3rzHomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk1MC00NTE1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuimk+S5nea0i+mFkuihjFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadv+api+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A5rCR5peP6LevMTQ36JmfXCIsXG4gICAgdGVsOiBcIjAyLTI5NTUtODg4OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5bGV6aCGXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2/5qmL5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmnb/mqYvljYDlg5HkuK3kuIDooZcxMjbomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk2Ni0xMTY3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLolrDltZDoj7jphZJcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guadv+api+WNgOWkp+ingOi3rzLmrrUxMeiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTY3LTc3NzlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuS4ieemvuiPuOmFklwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5LuL5aO96LevMTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk3Mi0yNzkyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6YeR55uI6YWS6JeP6ZuG5oiQ5bqXXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDpm4bmiJDot68zMOiZn1wiLFxuICAgIHRlbDogXCIwMi0yOTc2LTE5ODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLlhajlhIToj7jphZLmnInpmZDlhazlj7hcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOmbhue+juihlzIzNC0yMzYtMjM46JmfMUZcIixcbiAgICB0ZWw6IFwiMDItMjk3Ny0wNDY2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuixquS5hVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5Lit5q2j5YyX6LevMTbomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjAyLTI5ODAtMjQ1MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuiQrOazsFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A5rCR55Sf6KGXNzDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4My0xOTI0XCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLph5Hnm4jphZLol4/lv6DlrZ3lupdcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInph43ljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guS4iemHjeWNgOW/oOWtnei3r+S4ieautTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4OS0wOTg2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5Luf5oGpXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDkupToj6/ooZcxMTDomZ9cIixcbiAgICB0ZWw6IFwiMDItMjk4OS02NjMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5Zyc5qGC5qG2XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw6I6K5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmlrDojorljYDkuK3oqqDooZc0NuW3tzTlvIQx6JmfXCIsXG4gICAgdGVsOiBcIjAyLTI5OTAtNTEwMFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5Zyf5Z+O6YWS5bqrKOWplee+vSlcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlnJ/ln47ljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guWcn+WfjuWNgOS4reato+i3rzY06JmfMeaok1wiLFxuICAgIHRlbDogXCIwMi04MjYxLTUxMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIum6peW+t+eQhuWcn+WfjlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWcn+WfjuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5Zyf5Z+O5Y2A5Lit5aSu6Lev5LiA5q61MTcw6JmfXCIsXG4gICAgdGVsOiBcIjAyLTgyNjEtNjMyOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIueQruiMglwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiYhua0suWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC6JiG5rSy5Y2A5Lit5Y6f6LevMTLlt7cxNeiZn1wiLFxuICAgIHRlbDogXCIwMi04MjgyLTczMzdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5rCR5peP5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDlvqnoiIjot68yNzfomZ9cIixcbiAgICB0ZWw6IFwiMDItODI4My01NTc2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6K295o+a5rSL6YWSXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDkuInmsJHot68yNjPomZ9cIixcbiAgICB0ZWw6IFwiMDItODI4NS0wMTE4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5YGJ5oiQXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6JiG5rSy5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILomIbmtLLljYDkuK3mraPot68yMTfomZ9cIixcbiAgICB0ZWw6IFwiMDItODI4NS04MjMyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLphZLpnLjnjovomIbmtLJcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOS4reWxseS4gOi3rzI1OOiZn1wiLFxuICAgIHRlbDogXCIwMi04Mjg2LTA1OTJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLoia/mlrBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOmVt+iIiOi3rzE1MuiZn1wiLFxuICAgIHRlbDogXCIwMi04Mjg2LTE5NDJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuaBhuS4luiBlum8jlwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiOiuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5paw6I6K5Y2A5Lit5aSu6LevMjIw6JmfNOaok1wiLFxuICAgIHRlbDogXCIwMi04NTIyLTM5MDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLphZLmupBcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDlupfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOW6l+WNgOi7iuWtkOi3rzEyMeiZn1wiLFxuICAgIHRlbDogXCIwMi04NTU1LTUzOTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5ZWk6YWS5aSn5a24XCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5reh5rC05Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmt6HmsLTljYDmsJHmrIrot68xNzctM+iZn1wiLFxuICAgIHRlbDogXCIwMi04NjMxLTQzMjlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi56uL6Kqg6KGMXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bav5q2M5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILptq/mrYzljYDlsJblsbHot68xODXomZ9cIixcbiAgICB0ZWw6IFwiMDItODY3OC0xNTA1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6YWS5LiW55WM5qi55p6XXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qi55p6X5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILmqLnmnpfljYDkuK3oj6/ot68yMzPomZ9cIixcbiAgICB0ZWw6IFwiMDItODY4Ni04NzY4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLmraPnkKpcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnb/mqYvljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guadv+api+WNgOmHjeaFtui3rzI5MeiZn1wiLFxuICAgIHRlbDogXCIwMi04OTUzLTM2MDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLkvbPos4Ao5p2/5paw5bqXKVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadv+api+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A5Lit5bGx6Lev5LqM5q61OeiZn1wiLFxuICAgIHRlbDogXCIwMi04OTUzLTg5NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi6LOj6YWSXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDlpKfmpq7ooZc56JmfXCIsXG4gICAgdGVsOiBcIjAyLTg5ODEtNjY3MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuS5heWAq+mFkuWci+iBr+i7jVwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4iemHjeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5LiJ6YeN5Y2A6ZuZ5ZyS6KGXMTM06JmfXCIsXG4gICAgdGVsOiBcIjAyLTg5ODEtNzcwN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5oGG55SfXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDkuInpmb3ot68zN+iZn1wiLFxuICAgIHRlbDogXCIwMi04OTgyLTkyOTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIsXG4gICAgc3RvcmU6IFwi5a6P6IGyXCIsXG4gICAgYXJlYTogXCLmlrDljJfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ6YeN5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDljJfluILkuInph43ljYDoh6rlvLfot6/kuozmrrUyM+iZn1wiLFxuICAgIHRlbDogXCIwMi04OTg4LTMyMDFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLosYrmo4tcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOS4reW5s+i3rzMy6JmfXCIsXG4gICAgdGVsOiBcIjAyLTg5OTMtNjEzN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLllpzmsoXllYbooYxcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOS4reWSjOihlzg06JmfXCIsXG4gICAgdGVsOiBcIjAyLTg5OTQtMTYzMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIui/qumBlFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOWSjOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5rC45ZKM5Y2A56aP5ZKM6LevMTMx6JmfXCIsXG4gICAgdGVsOiBcIjA5MTYtMzMzLTkzOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIuW3t+W8hOa0i+mFklwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiYhua0suWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC6JiG5rSy5Y2A5YWJ5qau6LevMTM26JmfXCIsXG4gICAgdGVsOiBcIjA5MTYtODczLTc0OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLlj6HptLtcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDojorljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guaWsOiOiuWNgOS4reato+i3rzg5OS0x6JmfXCIsXG4gICAgdGVsOiBcIjA5MTgtMzI2LTkwM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCLnt6/ls7DmtIvphZJcIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbmtLLljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guiYhua0suWNgOW+qeiIiOi3rzE3NuiZn1wiLFxuICAgIHRlbDogXCIwOTMzLTgxOC00MzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogMixcbiAgICBzdG9yZTogXCIxNjjphZLmpa1cIixcbiAgICBhcmVhOiBcIuaWsOWMl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlkozljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOWMl+W4guawuOWSjOWNgOS/neemj+i3r+S6jOautTY56JmfXCIsXG4gICAgdGVsOiBcIjA5NTgtMTM1LTkyNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIueGiumRveiPuOmFklwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadv+api+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A6YeR6ZaA6KGXMzM16JmfXCIsXG4gICAgdGVsOiBcIjA5NTgtOTE5LTMzNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyLFxuICAgIHN0b3JlOiBcIum+jeWQiFwiLFxuICAgIGFyZWE6IFwi5paw5YyX5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadv+api+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw5YyX5biC5p2/5qmL5Y2A5Zub5bed6Lev5LiA5q61OOiZn1wiLFxuICAgIHRlbDogXCIwOTcwLTY2Ni0xMjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAzLFxuICAgIHN0b3JlOiBcIumAsuebilwiLFxuICAgIGFyZWE6IFwi5Z+66ZqG5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geaEm+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Z+66ZqG5biC5LuB5oSb5Y2A5oSb5LiA6LevMTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjQyMi00ODQ1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDMsXG4gICAgc3RvcmU6IFwi5pm26bS7XCIsXG4gICAgYXJlYTogXCLln7rpmobluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5qiC5Y2AXCIsXG4gICAgYWRkcmVzczogXCLln7rpmobluILlronmqILljYDln7rph5HkuIDot68xMTctMTnomZ9cIixcbiAgICB0ZWw6IFwiMDItMjQzNC03MDAwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5Lit6I+v6I+46YWSXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qGD5ZyS5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDkuK3lubPot68xNTLomZ9cIixcbiAgICB0ZWw6IFwiMDMtMjIwLTA1MjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi6YeR5byY56yZ5qGD5ZyS5bqXXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qGD5ZyS5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDntpPlnIvot680MDLomZ9cIixcbiAgICB0ZWw6IFwiMDMtMjYzLTE0NDRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5qGC5YagXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDojpLlhYnot680M+iZn1wiLFxuICAgIHRlbDogXCIwMy0yODMtMDA3OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLphZLotoXluIJcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOmgmOiIquWMl+i3r+S6jOautTc16JmfXCIsXG4gICAgdGVsOiBcIjAzLTI4Ny0zODIzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmrKPphZJcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLomIbnq7nljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guiYhuerueWNgOaWsOWNl+i3r+S4gOautTE46JmfXCIsXG4gICAgdGVsOiBcIjAzLTMxMS03ODM4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuahg+mRq1wiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiYhuerueWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6JiG56u55Y2A5aSn56u56LevNDI2LTPomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzEzLTMzMjhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuWllemRq+ihjFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn5qWt6Lev5LiA5q61Mjkw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTMyNS0zMjcyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIumGh+mFkuWdilwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn6IiI6KW/6Lev5LqM5q61MTjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzI2LTI5OTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuahg+WxsVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5rCR5peP6LevMTkw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTMzMi0yNDU1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLlkInpmobooYxcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOawkeeUn+i3rzUzM+iZn1wiLFxuICAgIHRlbDogXCIwMy0zMzYtMTg5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLphZLlnJLpvpzlsbFcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLpvpzlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4gum+nOWxseWNgOiQrOWjvei3r+S6jOautTEyMzDomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzQ5LTU1NDhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5YWJ5rOJXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qGD5ZyS5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmoYPlnJLljYDlpKfoiIjot6836JmfXCIsXG4gICAgdGVsOiBcIjAzLTM1NS00NDgyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuWQieWuiVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5oWI5paH6LevMzQ36JmfXCIsXG4gICAgdGVsOiBcIjAzLTM1OC0wNDA3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmgKHlkoxcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOWkp+iIiOilv+i3r+S4gOautTMxMeiZn1wiLFxuICAgIHRlbDogXCIwMy0zNTgtMTMwNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLokKzpgZQo5qGD5ZySKVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+nOWxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6c5bGx5Y2A6JCs5aO96Lev5LqM5q61OTI16JmfXCIsXG4gICAgdGVsOiBcIjAzLTM1OS03ODA2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIumGh+mHkemFkuiXj1wiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5qi55LuB5LiJ6KGXMjfomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzYzLTAxOTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuazk+azsOihjFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn5p6X6LevMTjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzYzLTc3NzJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuW1qeWogVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuahg+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qGD5ZyS5Y2A5qGD6bav6LevMTE56JmfXCIsXG4gICAgdGVsOiBcIjAzLTM2Ni0wNzgyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuamkeWAiVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFq+W+t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5YWr5b635Y2A5ZKM5bmz6LevMTQy6JmfMeaok1wiLFxuICAgIHRlbDogXCIwMy0zNjctMzUwNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmnKjpganlnYpcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmoYPlnJLljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guahg+WckuWNgOS4reato+i3rzExMDjomZ9cIixcbiAgICB0ZWw6IFwiMDMtMzc1LTMyOTIjOTE4OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5a6454Cn54WZ6YWSXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YWr5b635Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlhavlvrfljYDnvqnli4fooZczNeiZn1wiLFxuICAgIHRlbDogXCIwMy0zNzctOTkxOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLlt6jmsZ/mtIvphZJcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfmuqrljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guWkp+a6quWNgOS7i+Wjvei3rzkyNOiZn1wiLFxuICAgIHRlbDogXCIwMy0zODAtMjA1NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmtbfnj4pcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflnJLljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guWkp+WckuWNgOaWsOiIiOi3rzUw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTM4Ni0zOTU1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLlpKfmqLlcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflnJLljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guWkp+WckuWNgOaWsOeUn+i3rzkx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTM4Ni05NDk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmnZzmi5xcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOW7tuW5s+i3r+S6jOautTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDAyLTM2NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5paw6IGv5ZCIXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDpgY7ltrrph4zmsJHml4/ot6/kupTmrrUxMDjomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDIwLTM2MTBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIue0hemFkuWgoVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A55Kw5YyX6LevMzc16JmfXCIsXG4gICAgdGVsOiBcIjAzLTQyMi01NjQ2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLlkIzmtLXmtIvooYxcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOawkeasiui3r+S4ieautTI5OeiZn1wiLFxuICAgIHRlbDogXCIwMy00MjYtODQ0OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLllpzmtIvmtIvkuK3lo6JcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOWFg+eUn+S4ieihlzEyM+iZnzFGXCIsXG4gICAgdGVsOiBcIjAzLTQzNS01OTM4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuWuieWLneS4iua1t1wiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW5s+mOruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5bmz6Y6u5Y2A5LiK5rW36LevMTcx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQzOS05OTU3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLmiJDlip9cIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOaIkOeroOS6jOihlzIwMOiZn1wiLFxuICAgIHRlbDogXCIwMy00NTEtNjMxN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5byY6LuS54WZ6YWSXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDnpo/lt57ot68xMDfomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDU2LTAxOTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5p2+5bGx5rSL6KGMXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDlu4jploDot68zOOiZn1wiLFxuICAgIHRlbDogXCIwMy00NTktMTUxMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLliKnkvobnpo9cIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmpYrmooXljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4gualiuaiheWNgOazsOWcs+i3rzQwOOW3tzYx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ2MC02MTY5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIumYv+aoueiPuOmFklwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6b6N5bKh6LevM+autTI4OeiZn1wiLFxuICAgIHRlbDogXCIwMy00NjAtNzM3NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5L2z5ZOB5Lit5aOiXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDkuK3lnJLot6/kuozmrrU0MzXomZ/kuYsxXCIsXG4gICAgdGVsOiBcIjAzLTQ2Mi02NjY2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuWuieWLnVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5Lit5bGx5p2x6Lev5LiJ5q61MTXomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDY2LTY5MTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuaYjOaIkOWVhuihjFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIualiuaiheWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5qWK5qKF5Y2A56eA5omN6LevNjPomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDc4LTQ5ODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5LiW6bS75ZWG6KGMXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWK5qKF5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILmpYrmooXljYDmpYrmlrDljJfot68yMeW3tzHomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDc4LTcyODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIumghuWuj+a0i+mFklwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+jea9reWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A6b6N5YWD6LevMTEx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ4MC0yMDU3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIueip+a0sem+jea9rVwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+jea9reWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A5Lit5q2j6LevMjM56JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ4MC01Mzg1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIueri+WfulwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5rCR5peP6Lev5LqU5q61MTAx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ5MC0xMDUwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIue4veWFg1wiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW5s+mOruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5bmz6Y6u5Y2A5bu25bmz6Lev5LqM5q61MzAy6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ5Mi02MDAwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIumHkeixqumFklwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A5paw5piO6LevMzfomZ9cIixcbiAgICB0ZWw6IFwiMDMtNDkzLTIxMjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuS5heWFuFwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum+jea9reWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC6b6N5r2t5Y2A6b6N6I+v6LevMzcx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTQ5OS0wNjExXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNCxcbiAgICBzdG9yZTogXCLliKXnt7tcIixcbiAgICBhcmVhOiBcIuahg+WckuW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3lo6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuahg+WckuW4guS4reWjouWNgOS4reWxsei3rzI0N+iZn1wiLFxuICAgIHRlbDogXCIwOTAwLTA0NS01ODNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi5Lmd5YagXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bmz6Y6u5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILlubPpjq7ljYDmsJHml4/ot68xNTMtMeiZn1wiLFxuICAgIHRlbDogXCIwOTEyLTg4Ny03MjdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi6YWS55ufXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Lit5aOi5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILkuK3lo6LljYDnkrDopb/ot68zM+iZn1wiLFxuICAgIHRlbDogXCIwOTE1LTAwMS0zODFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuajruWvtlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWFq+W+t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5YWr5b635Y2A5LuL5aO96Lev5LqM5q61MTQ2NuiZn1wiLFxuICAgIHRlbDogXCIwOTM3LTk2My00MjRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDQsXG4gICAgc3RvcmU6IFwi54Cn5b636I+46YWSXCIsXG4gICAgYXJlYTogXCLmoYPlnJLluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6b6c5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmoYPlnJLluILpvpzlsbHljYDlv6Dnvqnot6/kuozmrrUzOTXomZ9cIixcbiAgICB0ZWw6IFwiMDk4MC0zNDctODE4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA0LFxuICAgIHN0b3JlOiBcIuWogeW4gumbhlwiLFxuICAgIGFyZWE6IFwi5qGD5ZyS5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWjouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5qGD5ZyS5biC5Lit5aOi5Y2A6I+v56Wl5LiA6KGXM+W3tzjomZ9cIixcbiAgICB0ZWw6IFwiMDk4Ny0xNzctNzc4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIumHkeaoveerueWMl1wiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55YyX5biC5YWJ5piO5YWt6Lev5p2x5LqM5q61N+iZn1wiLFxuICAgIHRlbDogXCIwMy01NTAtOTMwOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIuaXreS6qOerueWMl1wiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55YyX5biC57ij5pS/5LqM6LevNTEy6JmfXCIsXG4gICAgdGVsOiBcIjAzLTU1NS03Mzg4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIuaZr+ijleWVhuihjFwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWMl+W4glwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55YyX5biC6bOz5bKh6Lev5LqM5q61MTUx5be3NTbomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTU2LTAxNjBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIueZvOeZvOeZvFwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOixkOmEiVwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij5paw6LGQ6YSJ5paw6IiI6LevMjY56JmfXCIsXG4gICAgdGVsOiBcIjAzLTU1OS0xMTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIuWFq+WFq+WFq1wiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueadsemOrlwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij56u55p2x6Y6u6ZW35pil6Lev5LiJ5q61ODLomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTk2LTYxNTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA1LFxuICAgIHN0b3JlOiBcIuWci+ixkFwiLFxuICAgIGFyZWE6IFwi5paw56u557ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIua5luWPo+mEiVwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u557ij5rmW5Y+j6YSJ5oiQ5Yqf6LevODnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTk5LTEwNTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDUsXG4gICAgc3RvcmU6IFwi5q2j5rOT5rSL6YWSXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55YyX5biCXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPnq7nljJfluILljZrmhJvooZcyMDQtMeiZn1wiLFxuICAgIHRlbDogXCIwMy02NTYtNTE2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDUsXG4gICAgc3RvcmU6IFwi5b2s5a6P54WZ6YWSXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55YyX5biCXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPnq7nljJfluILkuK3oj6/ot68xMTnomZ9cIixcbiAgICB0ZWw6IFwiMDMtNjU2LTU4ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDUsXG4gICAgc3RvcmU6IFwi6Im+6JaH5rSL6YWSXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55YyX5biCXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPnq7nljJfluILojormlazljZfot681M+iZn1wiLFxuICAgIHRlbDogXCIwMy02NTctNjM1NFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDUsXG4gICAgc3RvcmU6IFwi6YWS5b+DXCIsXG4gICAgYXJlYTogXCLmlrDnq7nnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5rmW5Y+j6YSJXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nnuKPmuZblj6PphInkuK3lsbHot6/kuIDmrrU2MDjomZ9cIixcbiAgICB0ZWw6IFwiMDkxMC03MzMtMjQ5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogNSxcbiAgICBzdG9yZTogXCLphZLnrqHlrrZcIixcbiAgICBhcmVhOiBcIuaWsOeruee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnq7nljJfluIJcIixcbiAgICBhZGRyZXNzOiBcIuaWsOeruee4o+erueWMl+W4guemj+iIiOi3rzc5NOiZn1wiLFxuICAgIHRlbDogXCIwOTE2LTYzMy0yMjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5pet5ZOB5rSL6YWSXCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILmnbHljYDmnbHploDooZcxMDTomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTIyLTI2MjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5aSn6LGQ6KGMXCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILljJfljYDljJfploDooZcxOTPomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTI1LTMwOTJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA2LFxuICAgIHN0b3JlOiBcIuWci+aaiVwiLFxuICAgIGFyZWE6IFwi5paw56u55biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5paw56u55biC5YyX5Y2A5bu25bmz6Lev5LiA5q61MzQw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTUyNS02NTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNixcbiAgICBzdG9yZTogXCLmlrDojILmtIvoj7jphZJcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guWMl+WNgOe2k+Wci+i3r+S6jOautTI0OeiZn1wiLFxuICAgIHRlbDogXCIwMy01MzMtNDU3OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5aSq5Li4XCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILmnbHljYDmsJHmrIrot682MeiZn1wiLFxuICAgIHRlbDogXCIwMy01MzUtMjUyN1wiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5paH5b2sXCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6aaZ5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILpppnlsbHljYDniZvln5TljZfot681MzLomZ9cIixcbiAgICB0ZWw6IFwiMDMtNTM4LTEyMjVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5ZGI6ZGrXCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILmnbHljYDlhYnlvqnot6/kuIDmrrU0OOiZn1wiLFxuICAgIHRlbDogXCIwMy01NzctOTA2OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNixcbiAgICBzdG9yZTogXCLluIPokIrmganoj7jphZJcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guadseWNgOmVt+aYpeihlzEyMeiZn1wiLFxuICAgIHRlbDogXCIwMy01NzktMDM3N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNixcbiAgICBzdG9yZTogXCLojILosZDooYxcIixcbiAgICBhcmVhOiBcIuaWsOerueW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcbiAgICBhZGRyZXNzOiBcIuaWsOerueW4guWMl+WNgOael+ajrui3rzI3NeiZn1wiLFxuICAgIHRlbDogXCIwOTM4LTAyNy0wMjhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDYsXG4gICAgc3RvcmU6IFwi5ZCI6aCGXCIsXG4gICAgYXJlYTogXCLmlrDnq7nluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLmlrDnq7nluILmnbHljYDmsJHnlJ/ot68yNjbomZ9cIixcbiAgICB0ZWw6IFwiMDk2NS0zOTMtNjY5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLphZLmqIJcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlrpzomK3luIJcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WunOiYreW4guaWsOawkei3rzg06JmfXCIsXG4gICAgdGVsOiBcIjAzLTkzMi01MDg1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDcsXG4gICAgc3RvcmU6IFwi5piO6IiIXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6c6Jit5biCXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILnpZ7ovrLot6/kuIDmrrUyNuiZn1wiLFxuICAgIHRlbDogXCIwMy05MzItNTI1OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA3LFxuICAgIHN0b3JlOiBcIumFkuauv1wiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij5a6c6Jit5biC5a6c6IiI6Lev5LqM5q61MuiZn1wiLFxuICAgIHRlbDogXCIwMy05MzItOTU3OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLoirHlpKnphZLlnLAo57+w5b63KVwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWunOiYreW4glwiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij5a6c6Jit5biC6IiK5Z+O5p2x6LevNDnomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTMzLTIwMzhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLnmoflkI7pgZNcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlrpzomK3luIJcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WunOiYreW4guaWsOiIiOi3rzg46JmfXCIsXG4gICAgdGVsOiBcIjAzLTkzMy0zMzg1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDcsXG4gICAgc3RvcmU6IFwi5aCh6bOzXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6c6Jit5biCXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILovrLmrIrot68yM+iZn1wiLFxuICAgIHRlbDogXCIwMy05MzUtMjUzMlwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDcsXG4gICAgc3RvcmU6IFwi55Sz6YeOXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6c6Jit5biCXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlrpzomK3luILlrpzoiIjot6/kuIDmrrUyODPomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTM4LTA4MjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLmhJvnkLPphZJcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnvoXmnbHpjq5cIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+e+headsemOruWFrOato+i3rzI4OS0x6JmfXCIsXG4gICAgdGVsOiBcIjAzLTk1MS0wMjA5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLlhYnmmIzllYbooYxcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnvoXmnbHpjq5cIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+e+headsemOruiIiOadsei3rznomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTU1LTgyODZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA3LFxuICAgIHN0b3JlOiBcIueZvuaZn+ihjFwiLFxuICAgIGFyZWE6IFwi5a6c6Jit57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIue+headsemOrlwiLFxuICAgIGFkZHJlc3M6IFwi5a6c6Jit57ij576F5p2x6Y6u6IiI5p2x5Y2X6LevNDnomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTU2LTA0NzZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogNyxcbiAgICBzdG9yZTogXCLkuIDot6/nmbxcIixcbiAgICBhcmVhOiBcIuWunOiYree4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlhqzlsbHphIlcIixcbiAgICBhZGRyZXNzOiBcIuWunOiYree4o+WGrOWxsemEieWGrOWxsei3r+S6lOautTI2OeiZn1wiLFxuICAgIHRlbDogXCIwMy05NTgtNTQ5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDcsXG4gICAgc3RvcmU6IFwi5qyj6b6NXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Yas5bGx6YSJXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPlhqzlsbHphInlhqzlsbHot6/kupTmrrUyNzfomZ9cIixcbiAgICB0ZWw6IFwiMDMtOTU4LTkzNTJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDcsXG4gICAgc3RvcmU6IFwi6YWS56qpXCIsXG4gICAgYXJlYTogXCLlrpzomK3nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56SB5rqq6YSJXCIsXG4gICAgYWRkcmVzczogXCLlrpzomK3nuKPnpIHmuqrphInkuK3lsbHot6/kuozmrrUyOeiZn1wiLFxuICAgIHRlbDogXCIwMy05ODgtNzMxMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi55WM5piO5rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDlj7DngaPlpKfpgZMy5q61NTDomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIwMS0yMTAzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLojILntrjoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+WNgOWFrOWckui3rzE0MOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjA2LTc2NzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuS4gOWTgeWkq+S6uuiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Y2A5qiC5qWt6LevMjEx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMTEtMTc2NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLkuIDlk4HlpKvkurroj7jphZIt5pex5rqq5bqXXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHljYDml7HmuqrooZc1NC0x6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyMTEtMzc4NFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLnsr7muZvphZLol49cIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guadseWNgOaogualrei3rzM5NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjEyLTE3ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi6bql6YeR6YWS5rSL6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDmn7Plt53opb/ot6/kuozmrrUxODjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIyMC0yNTgyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuiMguWzsOiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Lit5Y2A6Ieq55Sx6Lev5LqM5q61NTTomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIyNS0yNTI1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLlrrjpgLjmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+WNgOmAsuWMluWMl+i3rzM2NOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjM2LTAwOTJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5ZOI5Yip5rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDltIflvrfot6/kuozmrrUzMDjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI0MS02NjU4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWMl+WPsOS4reWVhuihjFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5piM5bmz6Lev5LiA5q61MTQz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyNDQtMDUyOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLlr7bkvbPmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOW0h+W+t+i3rzLmrrU0ODLomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI0OS0xNzEwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuaWh+W/g+WVhuihjFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5bGv5Y2A5paH5b+D6LevMeautTQzN+iZn1wiLFxuICAgIHRlbDogXCIwNC0yMjU4LTIwODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5Yip55m+5Yqg5rSL6YWSLeW+qeiIiOW6l1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5Y2A5b6p6IiI6Lev5LqM5q61MTIwLTbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI2Mi01NTIzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuadvuizgOa0i+mFki3pq5jlt6XlupdcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+WNgOmrmOW3pei3rzUwMOiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjY1LTU4ODVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5Y2X5Y2A5qWK6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZfljYDkupTmrIrljZfot68yNDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI2NS02Nzg5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWkp+ihm+a0i+ihjFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Y2A5bu65oiQ6LevNzMz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyODMtMTE5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLml6Xnm5voj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWNl+WNgOWQiOS9nOihlzUw6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIyODUtMDk2MVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLnpr7ntLPmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOS4reW5s+i3rzY5NuiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDQtMjI5NS04MTM4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLokaHmmbbmtIvphZIt5biC5pS/5bqXXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDmsrPljZfot6/lm5vmrrUxMDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjI5Ny04MDU1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuahguiyq+a0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5Y2A5ryi5Y+j6LevM+autTI1OeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMjk5LTQxMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5a+M6ZuF6YWS6I6KXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDkuK3oiIjooZcxMjLlt7cxOeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzAxLTM2OTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuaakOWAq+a0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5Y2A576O5p2R6Lev5LiA5q61MjQx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMDUtMDY4OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLpvo3nqbTphZLlnYpcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/lsa/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+Wxr+WNgOays+WNl+i3r+OEp+autTU26JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMTctMjkyOVwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5a6J6L+q5rSL6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDlr6flpI/ot68yMTfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMxNy0zNDMwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIue+juaEn+iHqOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5Y2A5ZCR5LiK6Lev5LiA5q61NTAy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMjAtNTcyM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLph5Hmpa3mtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLopb/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guilv+WNgOWkp+alrei3rzXomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMyNi0xNzAxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLml6XljYfoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLng4/ml6XljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gueDj+aXpeWNgOS6lOWFiei3rzEwMDPomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjMzNy00ODU4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIueZvua3s+a0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIueDj+aXpeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC54OP5pel5Y2A5paw6IiI6LevNDMz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzMzctOTk1M1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi6LKz6Zu26YWS5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDmqILnvqTooZcyMDnomZ8x5qiTXCIsXG4gICAgdGVsOiBcIjA0LTIzNzEtODE4MVwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi57SF6aCC6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZflsa/ljYDnkrDkuK3ot6/lm5vmrrU1NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzg1LTA0ODBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIueKgemgreW6l+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5bGv5Y2A6buO5piO6Lev5LiA5q61MTA3OeiZn1wiLFxuICAgIHRlbDogXCIwNC0yMzg1LTE5MjVcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuiMguael+a0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkquW5s+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSq5bmz5Y2A5paw5bmz6Lev5LiJ5q61MTcx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTIzOTEtMDU4MlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLphZLomZ/lgInluqst5aSn6YeM5bqXXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn6YeM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfph4zljYDniL3mlofot68xMTIx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MDYtMzI0NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIumFkuiZn+WAieW6qy3nuL3lgIlcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOeIveaWh+i3rzM5OOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDA2LTQ2NDhcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi6YWS55SV6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDkuK3muIXot6/kuozmrrUxMDI26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MjYtMDIwOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuebm+e0heiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5Lit5riF6Lev5LqM5q61OTE46JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MjYtOTA2OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLlqIHlr4zphZLlnYpcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJflsa/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+Wxr+WNgOi7jeemj+WNgeWFrei3rzM1Ni0y6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0MzYtMjk1M1wiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi576k6IyC5rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljJflsa/ljYDmnbHlsbHot6/kuIDmrrUzMjbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQzNi04MzE5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWkp+WiqeadseWxsea0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6LevMeautTE0OOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM3LTMxNjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5ZOI5pav6JG15rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/lsa/ljYDmsrPljZfot6/kuozmrrUzMDHlt7c1MOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDM3LTY4NzhcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuW8mOW3neiXj+mFkumWo1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC6KW/5bGv5Y2A6buO5piO6Lev5LiJ5q61MzDomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ1Mi02MDAwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5Y+w54Gj6Ieq5L6G6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5bGv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILljZflsa/ljYDlpKfloqnlm5vooZczMjfomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjQ3MS04ODMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWuieazsOa0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5bGv5Y2A5ZCR5LiK5Y2X6Lev5LiA5q61MzIx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0NzMtNTA4OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuaUtuiXj+Wutua0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5Y2X5bGv5Y2A5rC45pil5p2x6LevMTk46JmfXCIsXG4gICAgdGVsOiBcIjA0LTI0NzMtOTY5NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuS6rOaXuuiPuOmFki3nm4rmsJHlupdcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOebiuawkei3r+S6jOautTMwMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNDg3LTUzOTBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5a+26IGv6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6LGQ5Y6f5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILosZDljp/ljYDosZDli6Lot6/kuozmrrUzMeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTIzLTA0MDNcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuS6nuW+t+WAq+iPuOmFki3lkJHpmb3lupdcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLosZDljp/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guixkOWOn+WNgOWQkemZvei3rzE3MOW3tznomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjUyNS0xNDI1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLphZLlk4noj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLosZDljp/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guixkOWOn+WNgOixkOadsei3rzU1NuiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTI2LTE0MTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIumFkuaxn+adkeiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuelnuWyoeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC56We5bKh5Y2A5aSn5a+M6LevOeiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTI3LTg4NjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWTgeiXj+a0i+mFkijosZDljp/lupcpXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6LGQ5Y6f5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILosZDljp/ljYDlpKfmmI7ot68zMuiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTI5LTUyODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5Lul5YWo6I+46YWS5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5r2t5a2Q5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmva3lrZDljYDmva3np4Dph4zkuK3lsbHot6/kuozmrrU0NzQtMuiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDQtMjUzMy0xNjIxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5aiB54i+5qOu5rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5r2t5a2Q5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmva3lrZDljYDpm4Xmva3ot6/kuozmrrUyNTLomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjUzMy01ODgzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWQieiPlua0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuelnuWyoeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC56We5bKh5Y2A56We5p6X6LevODjomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjU2My0xMDgwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIumFkuWci+iLseixquiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mbheWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6ZuF5Y2A5rCR55Sf6Lev5LiJ5q61MzU26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1NjYtNDcxMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuaLieiPsuiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+mbheWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn6ZuF5Y2A6ZuF5r2t6Lev5Zub5q61NTAy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1NjctMzgxOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLphZLlgInmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfpm4XljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mbheWNgOenkembhei3rzM5OOiZn1wiLFxuICAgIHRlbDogXCIwNC0yNTY3LTkxNTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLpjq7mmIzoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHli6LljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guadseWLouWNgOW/oOWtneihlzE3M+iZn1wiLFxuICAgIHRlbDogXCIwNC0yNTg3LTAwMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi5LiL5paw6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Yui5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILmnbHli6LljYDmnbHomK3ot680M+iZn1wiLFxuICAgIHRlbDogXCIwNC0yNTg3LTIyNTZcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWKieemj1wiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWLouWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5p2x5Yui5Y2A5p2x5Z2R6LevMjE26JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1ODctNzI2MVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLmrZDlt7Tppqzoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmuIXmsLTljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4gua4heawtOWNgOS4reiPr+i3rzYwOS0x6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2MjgtMTA3N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuamruWlveiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaip+ajsuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5qKn5qOy5Y2A5bGF5LuB6KGXMjEy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2NTctOTg4OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLphZLmuZbmtIvphZIt5aSn55Sy5bqXXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn55Sy5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfnlLLljYDkuK3lsbHot6/kuIDmrrU0ODbomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjY4MC01ODM2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuWQjOaHi+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+eUsuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5aSn55Sy5Y2A5L+h576p6LevMTU46JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2ODYtMDM0MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLphZLmuK/oj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfnlLLljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+eUsuWNgOe2k+Wci+i3rzHomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjY4Ni04MDcxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLkuIPkuIPmnIPnpL7mtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfogprljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+iCmuWNgOiHquayu+i3rzc36JmfXCIsXG4gICAgdGVsOiBcIjA0LTI2OTktODMyM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIuS4luWCs+iPuOmFkuihjFwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A6LevMjY36JmfXCIsXG4gICAgdGVsOiBcIjA5MDAtMDA1LTk3MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLlr4zkuInmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKfph4zljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWkp+mHjOWNgOS7geaFiOihlzM1MOiZn1wiLFxuICAgIHRlbDogXCIwOTEwLTUyOS01MjRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi57SF6YWS6I6K5rSL6YWSXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5aSn55Sy5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILlpKfnlLLljYDlhYnmmI7ot68xMzHomZ9cIixcbiAgICB0ZWw6IFwiMDkzMi02NzctOTQ2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIua4heazsOiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+Wxr+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5YyX5bGv5Y2A5Lit5riF6Lev5LqM5q61MTI46JmfXCIsXG4gICAgdGVsOiBcIjA5MzYtMjMxLTE5MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA4LFxuICAgIHN0b3JlOiBcIua6kOWIqeiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y+w5Lit5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaymem5v+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Lit5biC5rKZ6bm/5Y2A5YWJ6I+v6LevMzMz6JmfXCIsXG4gICAgdGVsOiBcIjA5NzMtMjA1LTY2MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLljprmmIzmtIvphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmnbHljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guadseWNgOeyvuatpui3rzE2MeiZnzHmqJNcIixcbiAgICB0ZWw6IFwiMDk3NS0zNzktMzYyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLkuI3lgJLnv4Hoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLosZDljp/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guixkOWOn+WNgOWQkemZvei3rzk36JmfXCIsXG4gICAgdGVsOiBcIjA5NzYtNDc3LTM3NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOCxcbiAgICBzdG9yZTogXCLosarphZLpgYvoj7jphZJcIixcbiAgICBhcmVhOiBcIuWPsOS4reW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljJfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOS4reW4guWMl+WNgOWBpeihjOi3rzg1OOiZn1wiLFxuICAgIHRlbDogXCIwOTc4LTEwNi0xNTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDgsXG4gICAgc3RvcmU6IFwi6aGP5paw54+N5rSL6YWS5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlj7DkuK3luIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DkuK3luILopb/ljYDml6XpgLLooZcxMDHomZ9cIixcbiAgICB0ZWw6IFwiMDQtMjIwNi01MTg3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIuWLneWSjOiPuOmFklwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLl+agl+W4glwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuX5qCX5biC5paw5p2x6KGXNDHomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzMzLTY1MzZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIumZveWFieWVhuihjFwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLl+agl+W4glwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuX5qCX5biC5paH55m86LevNDgx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTczNS0yNzUyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOSxcbiAgICBzdG9yZTogXCLlsJrlpb3oj7jphZJcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoi5fmoJfluIJcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+iLl+agl+W4gue4o+W6nOi3rzExOOiZn1wiLFxuICAgIHRlbDogXCIwMy03MzYtMTgwMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOSxcbiAgICBzdG9yZTogXCLllpzmtIvmtIvoj7jphZIt6Iux5omN5bqXXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuX5qCX5biCXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPoi5fmoJfluILoi7HmiY3ot681MuiZn1wiLFxuICAgIHRlbDogXCIwMy03MzctMTA1NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDksXG4gICAgc3RvcmU6IFwi5oW25L2z6KGMLeWFieW+qeW6l1wiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWNl+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij56u55Y2X6Y6u5YWJ5b6p6LevMjkzLTTomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzQ2LTUyNTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIueah+WTgea0i+mFklwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuerueWNl+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij56u55Y2X6Y6u5Lit5riv6YeMMTLphLDnkrDluILot6/kuozmrrUx6JmfMeaok1wiLFxuICAgIHRlbDogXCIwMy03NDgtMzM2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogOSxcbiAgICBzdG9yZTogXCLljaHoq77mm7zoj7jphZJcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpoK3ku73luIJcIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+mgreS7veW4guWFq+W+t+S4gOi3rzIyNuiZn1wiLFxuICAgIHRlbDogXCIwMy03NjktMjM4NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDksXG4gICAgc3RvcmU6IFwi6YCN6YGZ6I+46YWSXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b6M6b6N6Y6uXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPlvozpvo3pjq7kuK3lsbHot68zMzDomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzcyLTk0NDhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDksXG4gICAgc3RvcmU6IFwi55Gp6Iqz6KGMXCIsXG4gICAgYXJlYTogXCLoi5fmoJfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuR6KOh6Y6uXCIsXG4gICAgYWRkcmVzczogXCLoi5fmoJfnuKPoi5Hoo6Hpjq7npL7oi5Pph4w36YSwNzTomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzc0LTI3MDdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogOSxcbiAgICBzdG9yZTogXCLlpKfnmbvmtIvphZJcIixcbiAgICBhcmVhOiBcIuiLl+agl+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLpgJrpnITpjq5cIixcbiAgICBhZGRyZXNzOiBcIuiLl+agl+e4o+mAmumchOmOruemj+W+t+i3rzIw6JmfXCIsXG4gICAgdGVsOiBcIjAzLTc3NS04MDk1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIuWNmumFkuiQiua0i+mFklwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLkeijoemOrlwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij6IuR6KOh6Y6u5Y2a5oSb6LevMuiZn1wiLFxuICAgIHRlbDogXCIwMy03ODYtMDEyN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIuetjOeQg+WVhuihjFwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW+jOm+jemOrlwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij5b6M6b6N6Y6u5Y2X5riv6YeMMemEsOWNl+WLouWxsTE3LTfomZ9cIixcbiAgICB0ZWw6IFwiMDMtNzkyLTEyMjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiA5LFxuICAgIHN0b3JlOiBcIuWNk+iYrVwiLFxuICAgIGFyZWE6IFwi6IuX5qCX57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWNk+iYremOrlwiLFxuICAgIGFkZHJlc3M6IFwi6IuX5qCX57ij5Y2T6Jit6Y6u5Lit5q2j6KW/6LevOTnkuYsx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTI1ODktNjg4MVwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuWKoOe0jea0i+mFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5rCR55Sf6LevMTXomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzIyLTYzNzFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuWQieemj+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC6Ieq5by36LevMzLomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzI2LTI2ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5pel5Lqr5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5b2w5YyW5biCXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlvbDljJbluILlvbDljZfot6/kuozmrrUyMzLomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzM4LTg1MDdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIumFkuWwiua0i+mFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWSjOe+jumOrlwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZKM576O6Y6u5ZKM6aCt6LevMjHomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzU2LTY3MTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIumHkemmrOiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuengOawtOmEiVwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij56eA5rC06YSJ6ZuF6IiI6KGXMjI56JmfXCIsXG4gICAgdGVsOiBcIjA0LTc2My0wODEzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLph5HlhYPlr4xcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+W9sOWMluW4guawtOa6kOi3rzU2OOiZn1wiLFxuICAgIHRlbDogXCIwNDctNjMtOTkxOFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5LiK5rW36I+46YWSXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56eA5rC06YSJXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPnp4DmsLTphInnlaroirHot68zNjLomZ9cIixcbiAgICB0ZWw6IFwiMDQtNzY5LTYxOTRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuS9s+ayheiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIum5v+a4r+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij6bm/5riv6Y6u6bm/5ZKM6Lev5LiJ5q61NDQw6JmfXCIsXG4gICAgdGVsOiBcIjA0LTc3MS0xOTY4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5rC46KiY5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6bm/5riv6Y6uXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPpub/muK/pjq7pub/ojYnot6815q61MjQz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTc3MS0yNjI5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLlroflpI/oj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLln5Tlv4PphIlcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WflOW/g+mEieWToem5v+i3r+S4gOautTQzNeiZn1wiLFxuICAgIHRlbDogXCIwNC04MjgtMTE5MFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIumahuixkOiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOW/g+mEiVwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5Z+U5b+D6YSJ5p2x6ZaA5p2R5q2j576p6LevNzDomZ9cIixcbiAgICB0ZWw6IFwiMDQtODI5LTIwNTNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuWkp+iKs+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWToeael+W4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5YWJ5piO6KGXMTUy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzMi0xNDc1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLokKzmobboj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlk6HmnpfluIJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WToeael+W4gumdnOS/ruadsei3rzgx6JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzMi0zNzc3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi6YWS5LmL5bqX6I+46YWSXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZOh5p6X5biCXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPlk6HmnpfluILkuInmsJHmnbHooZc1MeiZn1wiLFxuICAgIHRlbDogXCIwNC04MzQtMDczMFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuWFiei8neiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWToeael+W4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5ZOh5p6X5biC5Lit5bGx6Lev5LiA5q61NTgz6JmfXCIsXG4gICAgdGVsOiBcIjA0LTgzNS01NjY2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLml6XpgLLoj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlk6HmnpfluIJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WToeael+W4guWToeawtOi3r+S6jOautTE1NeiZn1wiLFxuICAgIHRlbDogXCIwNC04MzYtMDc4MVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIumFkuaoguiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5ZOh5p6X5biC5LiJ5rCR5p2x6KGXNjPomZ9cIixcbiAgICB0ZWw6IFwiMDQtODM5LTc1NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuiQrOiKs+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+adkemEiVwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5aSn5p2R6YSJ5aSn5LuB6Lev5LiA5q61MTQ06JmfXCIsXG4gICAgdGVsOiBcIjA0LTg1Mi01NDMwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5aSn5pe66I+46YWSXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56S+6aCt6YSJXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPnpL7poK3phInlk6Hpm4bot6/kuozmrrUyMjnomZ9cIixcbiAgICB0ZWw6IFwiMDQtODcxLTEwMDlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLlubTku6Poj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnlLDkuK3pjq5cIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+eUsOS4remOruWNl+WMl+ihlzE0MOiZn1wiLFxuICAgIHRlbDogXCIwNC04NzQtNTAxNlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuWTgemKmOiPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWMl+aWl+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5YyX5paX6Y6u5b6p6IiI6LevMTU46JmfXCIsXG4gICAgdGVsOiBcIjA0LTg3OC0yOTY2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5rGf5aSP6I+46YWSXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5rqq5rmW6Y6uXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPmuqrmuZbpjq7opb/nkrDot680OTLomZ9cIixcbiAgICB0ZWw6IFwiMDQtODg1LTkyMjdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLmsLjmib/llYbooYwt5YyX5paX5bqXXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5paX6Y6uXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPljJfmlpfpjq7mlpfoi5Hot6/kuozmrrU3MeiZn1wiLFxuICAgIHRlbDogXCIwNC04ODctNDA1NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLph5HmgJ3ntq3mtIvphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljJfmlpfpjq5cIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WMl+aWl+mOruaWl+iLkei3r+S4gOautTI5MeiZn1wiLFxuICAgIHRlbDogXCIwNC04ODgtODkxNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLpnZLml7roj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLln6TpoK3phIlcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+WfpOmgremEieW9sOawtOi3r+S4ieautTU1MOiZn1wiLFxuICAgIHRlbDogXCIwNDgtOTEtMDI1MlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTAsXG4gICAgc3RvcmU6IFwi5ZOh5aSW6Iy26I6KXCIsXG4gICAgYXJlYTogXCLlvbDljJbnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5LqM5p6X6Y6uXCIsXG4gICAgYWRkcmVzczogXCLlvbDljJbnuKPkuozmnpfpjq7opb/lubPph4zlu7rlnIvot680MTHomZ9cIixcbiAgICB0ZWw6IFwiMDQtODk2LTIwMzdcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLoh7vlk4Hoj7jphZJcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLkuozmnpfpjq5cIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+S6jOael+mOruaWl+iLkei3r+S6lOautTM5OeiZn1wiLFxuICAgIHRlbDogXCIwNC04OTYtODMwOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEwLFxuICAgIHN0b3JlOiBcIuaRqeeZu+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5b2w5YyW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW9sOWMluW4glwiLFxuICAgIGFkZHJlc3M6IFwi5b2w5YyW57ij5b2w5YyW5biC5Y2X6YOt6Lev5LiA5q61NTXomZ9cIixcbiAgICB0ZWw6IFwiMDk4Ni03MDMtNjAyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMCxcbiAgICBzdG9yZTogXCLphZLmqJPmtIvooYxcIixcbiAgICBhcmVhOiBcIuW9sOWMlue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlvbDljJbluIJcIixcbiAgICBhZGRyZXNzOiBcIuW9sOWMlue4o+W9sOWMluW4guael+ajrui3rzM4N+iZn1wiLFxuICAgIHRlbDogXCIwOTg3LTExNy03NTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMSxcbiAgICBzdG9yZTogXCLmib/mmpjoj7jphZJcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmipXluIJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guW6t+WjvemHjOawkeeUn+ihlzI26JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMjAtMjk5OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5ZiJ5bOw5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5oqV5biCXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPljZfmipXluILlvbDljZfot6/kuIDmrrU2MTPomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTIyMi01NzQyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5a6P6b6N6I+46YWSXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5oqV5biCXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPljZfmipXluILlvbDljZfot68z5q61MTMy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMjYtMDY5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDExLFxuICAgIHN0b3JlOiBcIuWutuWutuaciea0i+mFklwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiNieWxr+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij6I2J5bGv6Y6u5pWm5ZKM6Lev5pWm5oiQ5be3MeS5izHomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTIzMS0wODg0XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMSxcbiAgICBzdG9yZTogXCLlpKfnpr7lsYvoj7jphZJcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLojYnlsa/pjq5cIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+iNieWxr+mOruS4iuael+mHjOWkquW5s+i3r+S4gOautTEzOeiZn1wiLFxuICAgIHRlbDogXCIwNC05MjMxLTI5NjVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5YWD5aSq5rSL6KGMXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6I2J5bGv6Y6uXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPojYnlsa/pjq7lkozlubPooZc06JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMzItMjAwOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi576K5ZOl6I+46YWSXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y2X5oqV5biCXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPljZfmipXluILojYnlsa/pjq7ngo7ls7DooZc4MuiZn1wiLFxuICAgIHRlbDogXCIwNC05MjM2LTc3NzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDExLFxuICAgIHN0b3JlOiBcIuaWh+WSjOiPuOmFki3kuK3oiIjlupdcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLljZfmipXluIJcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+WNl+aKleW4guS4reiIiOaWsOadkeS4reiIiOi3rzcy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyMzktMDM0MlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5Y+w5YWD5rSL6YWSXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi56u55bGx6Y6uXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPnq7nlsbHpjq7lpKfmmI7ot68yMzPomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI2NS0zMzkzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMSxcbiAgICBzdG9yZTogXCLphZLnjpbllYbooYxcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlnIvlp5PphIlcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+Wci+Wnk+mEieS4reiIiOi3rzIzNuiZn1wiLFxuICAgIHRlbDogXCIwNC05MjcyLTM5NTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMSxcbiAgICBzdG9yZTogXCLpjKHmr4Xoj7jphZJcIixcbiAgICBhcmVhOiBcIuWNl+aKlee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmsJHplpPphIlcIixcbiAgICBhZGRyZXNzOiBcIuWNl+aKlee4o+awkemWk+mEiea/geawtOadkeWToembhui3rzY36JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyNzMtMjA3MVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5LiJ5YWD6KGMXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6ZuG6ZuG6Y6uXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPpm4bpm4bpjq7pm4bpm4booZcxMDDomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI3Ni0yMzcxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDExLFxuICAgIHN0b3JlOiBcIuaWsOmAsumghuWVhuihjFwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOmHjOmOrlwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u5p2x6I+v6LevMTgy6JmfXCIsXG4gICAgdGVsOiBcIjA0LTkyOTgtMzY1MlwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDExLFxuICAgIHN0b3JlOiBcIumHkeWIqeiPuOmFklwiLFxuICAgIGFyZWE6IFwi5Y2X5oqV57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWflOmHjOmOrlwiLFxuICAgIGFkZHJlc3M6IFwi5Y2X5oqV57ij5Z+U6YeM6Y6u6KW/5a6J6Lev5LiA5q61OTXomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI5OC00NDAxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi6YWS5ZyS5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Z+U6YeM6Y6uXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPln5Tph4zpjq7kuK3oj6/ot68xODjomZ9cIixcbiAgICB0ZWw6IFwiMDQtOTI5OS05OTAzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTEsXG4gICAgc3RvcmU6IFwi5ZG15ZG15ZWG6KGMXCIsXG4gICAgYXJlYTogXCLljZfmipXnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Z+U6YeM6Y6uXCIsXG4gICAgYWRkcmVzczogXCLljZfmipXnuKPln5Tph4zpjq7kuK3mraPot683NDXomZ9cIixcbiAgICB0ZWw6IFwiMDkyNi05MzktMjk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEyLFxuICAgIHN0b3JlOiBcIuS9s+S6qOa0i+ihjFwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWl+WFreW4glwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5paX5YWt5biC5piO5b635YyX6Lev5LqM5q61ODHomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTMyLTU4OThcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMixcbiAgICBzdG9yZTogXCLmnZzlurfoj7jphZJcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmlpflha3luIJcIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+aWl+WFreW4gumVt+aYpei3rzEw6JmfXCIsXG4gICAgdGVsOiBcIjA1LTUzNC02ODY5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTIsXG4gICAgc3RvcmU6IFwi5bCa5ZOBXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bSZ6IOM6YSJXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPltJnog4zphInmnbHoiIjot68xMTnomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTg2LTQ4MjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMixcbiAgICBzdG9yZTogXCLmrKPlt57phZLojopcIixcbiAgICBhcmVhOiBcIumbsuael+e4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLopb/onrrpjq5cIixcbiAgICBhZGRyZXNzOiBcIumbsuael+e4o+ilv+ieuumOruWFieaYjuilv+i3rzI0NeiZn1wiLFxuICAgIHRlbDogXCIwNS01ODctMjU2OFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTIsXG4gICAgc3RvcmU6IFwi5pav5aiB54m55ZWG6KGMXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5paX5Y2X6Y6uXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPmlpfljZfpjq7nvqnlvrfot68xMDDomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTk3LTI0NjhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEyLFxuICAgIHN0b3JlOiBcIuWUr+WQm+iCoeS7veaciemZkOWFrOWPuFwiLFxuICAgIGFyZWE6IFwi6Zuy5p6X57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS6jOW0memEiVwiLFxuICAgIGFkZHJlc3M6IFwi6Zuy5p6X57ij5LqM5bSZ6YSJ6KOV5rCR6LevMTLomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTk4LTk1ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTIsXG4gICAgc3RvcmU6IFwi5pyJ5oiQ6I+46YWSXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/6J666Y6uXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPopb/onrrpjq7lhYnlvqnopb/ot68zMzPomZ9cIixcbiAgICB0ZWw6IFwiMDUtNTk5LTE5OTBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTIsXG4gICAgc3RvcmU6IFwi5a+25ZyS5rSL6YWSXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5Y+w6KW/6YSJXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPlj7Dopb/phInmsJHmrIrot684MuiZn1wiLFxuICAgIHRlbDogXCIwNS02OTgtMjgwMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMixcbiAgICBzdG9yZTogXCLnv5Tos4Doj7jphZIt6KW/6J665bqXXCIsXG4gICAgYXJlYTogXCLpm7LmnpfnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6KW/6J666Y6uXCIsXG4gICAgYWRkcmVzczogXCLpm7LmnpfnuKPopb/onrrpjq7oiIjovrLopb/ot682M+iZn1wiLFxuICAgIHRlbDogXCIwOTU1LTY3MC05NzBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuael+iomFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWJjemHkeWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6YeR5Y2A5YWJ5b6p5LiJ6KGXMTMy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTIyMS04MzEzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuS/oeemlVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiIiOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A5b6p6IiI5LqM6LevMzI46JmfXCIsXG4gICAgdGVsOiBcIjA3LTIyMi0wMTEzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLplovmma7kupTnpo/lupdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLoi5Ppm4XljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOawkeasiuS4gOi3rzIzOeiZn1wiLFxuICAgIHRlbDogXCIwNy0yMjYtNTU0NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5Yag5b63LeWFq+W+t+W6l1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiIiOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A5YWr5b635LiA6LevMTk26JmfXCIsXG4gICAgdGVsOiBcIjA3LTIzNi0wNjM5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlro/nvo4t6Ieq5by3XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6YeR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3ph5HljYDoh6rlvLfkuozot684MC0x6JmfXCIsXG4gICAgdGVsOiBcIjA3LTI2MS05OTU1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLmn6/mnpfpoJNcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDoiIjljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guaWsOiIiOWNgOiHqueri+S6jOi3rzgw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTI4NS02MTYxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLplbfmhbbmtIvooYxcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOa8ouWPo+ihlzMzM+iZn1wiLFxuICAgIHRlbDogXCIwNy0zMTUtMzgzOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLmnbHoia9cIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOWMl+W5s+S6jOihlzE4N+iZn1wiLFxuICAgIHRlbDogXCIwNy0zMjItOTI4N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpKfpgKMt5LiK5pmvXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDlpKfpgKPooZcxOThcIixcbiAgICB0ZWw6IFwiMDctMzIzLTYwOTZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+ael+ajruW6l1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiLk+mbheWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6IuT6ZuF5Y2A5p6X5qOu5LqM6LevMuiZn1wiLFxuICAgIHRlbDogXCIwNy0zMzEtOTMzM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLphZLosLdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOW0h+W+t+i3rzQxNuiZn1wiLFxuICAgIHRlbDogXCIwNy0zNDEtMzg2M1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLmnpfoqJgt5paH6Ieq5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bem54ef5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlt6bnh5/ljYDmlofoh6rot685NzTomZ9cIixcbiAgICB0ZWw6IFwiMDctMzQyLTkwOTBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5a6P576OXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDoo5XoqqDot68xMTXomZ9cIixcbiAgICB0ZWw6IFwiMDctMzUwLTU1MjlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+aloOaik1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIualoOaik+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5qWg5qKT5Y2A6bOz5qWg6LevMTQy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTM1OC0xMzMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlr7DkuqhcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOamrue4vei3rzI3MeiZn1wiLFxuICAgIHRlbDogXCIwNy0zNTktOTY1NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlu6PosqFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOawkeaXj+S4gOi3rzU5MeiZn1wiLFxuICAgIHRlbDogXCIwNy0zNTktOTk1NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5ZOB6ZGrXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDou43moKHot684NjLomZ9cIixcbiAgICB0ZWw6IFwiMDctMzYyLTU1ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuaMr+aYjC3lj7PmmIxcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmpaDmopPljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gualoOaik+WNgOS4ieWxseihlzIyMOiZn1wiLFxuICAgIHRlbDogXCIwNy0zNjMtNDAzNlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5o+a5rSyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDlj7PmmIzooZc1MTbomZ9cIixcbiAgICB0ZWw6IFwiMDctMzYzLTczNjlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5a+25qqz5b636LOiXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDlvrfos6Lot680MTjomZ9cIixcbiAgICB0ZWw6IFwiMDctMzY0LTA4ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuS9s+mFkuiOilwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5qiC6KGXMjY06JmfXCIsXG4gICAgdGVsOiBcIjA3LTM3MS0wMDU4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuS4iuaZr+WVhuihjC3lpKfpgKNcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLku4HmrabljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS7geatpuWNgOa+hOingOi3rzc4OOiZn1wiLFxuICAgIHRlbDogXCIwNy0zNzItMzIyM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5YWo6bql5rSL6KGMXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LuB5q2m5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDlhavljabmnZHmsLjku4HooZczMTPomZ9cIixcbiAgICB0ZWw6IFwiMDctMzczLTE4MDFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+S7geatpuW6l1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A6bOz5LuB6LevOTUtMTfomZ9cIixcbiAgICB0ZWw6IFwiMDctMzczLTc3NTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWkp+S7gS0o5a+w5LqoKVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB6ZuE6LevMzE26JmfXCIsXG4gICAgdGVsOiBcIjA3LTM3NC01MTIyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWkmuWkmlwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geatpuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5LuB5q2m5Y2A5LuB5b+g6LevNjDomZ9cIixcbiAgICB0ZWw6IFwiMDctMzc1LTUzNzFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5a+25qqz5Lmd5aaCXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDkuZ3lpoLkuIDot68yMjnomZ9cIixcbiAgICB0ZWw6IFwiMDctMzg3LTMzMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIumGh+mFkuWfjijlpKfmmIzlupcpXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDlpKfmmIzkuozot680OOiZn1wiLFxuICAgIHRlbDogXCIwNy0zODctNTMzM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLpq5jpkatcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuInmsJHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guS4ieawkeWNgOWkp+mghuS6jOi3rzIzOeiZn1wiLFxuICAgIHRlbDogXCIwNy0zODktMTExMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5L+h56aV54Gj5Lit5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDngaPkuK3ooZcyODDomZ9cIixcbiAgICB0ZWw6IFwiMDctMzk1LTIyMjBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLoh7vphZLku5kt5Lmd5aaCXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDkuZ3lpoLkuIDot681MDHomZ9cIixcbiAgICB0ZWw6IFwiMDctMzk3LTQ0NDRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5ZiJ55Gd5rSL6KGMXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiJ5rCR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILkuInmsJHljYDmvoTmuIXot68zODHomZ9cIixcbiAgICB0ZWw6IFwiMDctMzk4LTY0MDRcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogMSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIumCkeadsea0i+ihjOS5neWmglwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum8k+WxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6byT5bGx5Y2A5Lmd5aaC5Zub6LevMTAwNeiZn1wiLFxuICAgIHRlbDogXCIwNy01MzMtMjczMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlkInmgalcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLoi5Ppm4XljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOiLk+mbheS4gOi3rzM1NOiZn1wiLFxuICAgIHRlbDogXCIwNy01MzUtNTk5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5Y2X5aiB5rW35rSL6KGMXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILoi5Ppm4XljYDkuInlpJrkuozot68zMDjomZ9cIixcbiAgICB0ZWw6IFwiMDctNTM2LTAwMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5aWV5qyj6KGM5Lit5bGx5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6Y6u5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDkuK3lsbHkuozot68xODbjgIExODjomZ9cIixcbiAgICB0ZWw6IFwiMDctNTM2MTI4NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5buj54i6XCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILoi5Ppm4XljYDlm5vntq3kuInot68xODHomZ9cIixcbiAgICB0ZWw6IFwiMDctNTM2LTUyNTJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuafr+ael+mgk+WNl+Wxj+W6l1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW3pueHn+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bem54ef5Y2A5Y2X5bGP6LevMjYx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTU1MC01MTYxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLpmL/nkZ/ovpvkuqXlupdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOi+m+S6pei3rzI1M+iZn1wiLFxuICAgIHRlbDogXCIwNy01NTAtODE1NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpZXmrKPooYzoh6rnlLHlupdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOiHqueUseS6jOi3rzMzMeOAgTMzM+iZn1wiLFxuICAgIHRlbDogXCIwNy01NTAtODY2NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5oyv5piMLeaYjuiqoFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIum8k+WxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6byT5bGx5Y2A5piO6Kqg5LiJ6LevNjM46JmfXCIsXG4gICAgdGVsOiBcIjA3LTU1NS03OTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpKfnrKxcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlt6bnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guW3pueHn+WNgOiHqueUseS6jOi3rzEyNeiZn1wiLFxuICAgIHRlbDogXCIwNy01NTYtMTM2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLmmI7mmKVcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLot6/nq7nljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gui3r+erueWNgOW7tuW5s+i3rzUyMOiZn1wiLFxuICAgIHRlbDogXCIwNy02MDctNjY5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpZXmrKPooYwt5qKT5a6YXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qKT5a6Y5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmopPlrpjljYDkuK3mraPot68yNzItMeiZn1wiLFxuICAgIHRlbDogXCIwNy02MTAtOTg5NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5a+25qqz5qmL6aCt5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5qWg5qKT5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmpaDmopPljYDluILloLTooZc46JmfXCIsXG4gICAgdGVsOiBcIjA3LTYxMS0wMDMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLpgZTnjpblsqHlsbFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsqHlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWyoeWxseWNgOWyoeWxsei3rzI2MuiZn1wiLFxuICAgIHRlbDogXCIwNy02MjEtODYwMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlr7bmqrPlsqHlsbFcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsqHlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWyoeWxseWNgOWyoeWxsei3rzM5NeiZn1wiLFxuICAgIHRlbDogXCIwNy02MjMtMDA1NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5YWo5YWBKOaYh+eZvClcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsqHlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWyoeWxseWNgOW3qOi8qui3rzU1LTHomZ9cIixcbiAgICB0ZWw6IFwiMDctNjI1LTgxODVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5aSn55y+5bKh5bGxXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bKh5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsqHlsbHljYDmn7PmqYvmnbHot685LTHomZ9cIixcbiAgICB0ZWw6IFwiMDctNjI5LTYxNTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWkp+WSjOmYv+iTrlwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumYv+iTruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6Zi/6JOu5Y2A5b+g5a2d6LevOTPomZ9cIixcbiAgICB0ZWw6IFwiMDctNjMxLTIxODJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi56aP6KiY5p6X5ZySXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p6X5ZyS5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILmnpflnJLljYDmlofos6LljJfot6826JmfXCIsXG4gICAgdGVsOiBcIjA3LTY0MS02NjMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+ael+WcklwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuael+WckuWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5p6X5ZyS5Y2A5p2x5p6X6KW/6LevNjLomZ9cIixcbiAgICB0ZWw6IFwiMDctNjQzLTkwMDBcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvjOayhVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+aoueWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5aSn5qi55Y2A5Lit6IiI5Y2X6Lev5paw6IiI5be3MjLomZ9cIixcbiAgICB0ZWw6IFwiMDctNjUyLTExNjlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi6byT5bGx6I6K5peX5bGx5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5peX5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILml5flsbHljYDlu7blubPkuIDot681MDjomZ9cIixcbiAgICB0ZWw6IFwiMDctNjYxLTI4NzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi6byT5bGx6I6K576O5r+D5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi576O5r+D5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILnvo7mv4PljYDkuK3mraPot6/kuozmrrUxODXomZ9cIixcbiAgICB0ZWw6IFwiMDctNjYxLTczMTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5aWV5qyj6KGMLee+juihk+aXl+iJplwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaXl+WxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5peX5bGx5Y2A5bu25bmz5LiA6LevMzU56JmfXCIsXG4gICAgdGVsOiBcIjA3LTY2Mi0xMTg4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpKflkowt6IyE6JCjXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IyE5a6a5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILojITlrprljYDnmb3noILot68xNzLomZ9cIixcbiAgICB0ZWw6IFwiMDctNjkwLTYwMDNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi6auY6YO96I+46YWSXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6Lev56u55Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILot6/nq7nljYDkuK3lsbHot684MzLomZ9cIixcbiAgICB0ZWw6IFwiMDctNjk3LTY1ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlr7bmqrPot6/nq7lcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLot6/nq7nljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gui3r+erueWNgOS4reWxsei3rzcxNlwiLFxuICAgIHRlbDogXCIwNy02OTctNzAwMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5Lmd5LmF5Lit5bGx5p2xXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDkuK3lsbHmnbHot68zODLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzAzLTM1NTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+S4reW6hFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWkp+WvruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5aSn5a+u5Y2A6bOz5bGP5LiA6LevMTgz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTcwMy03MDAwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlr7bmqrPps7PlsbEgXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDlhYnpgaDot680MjbomZ9cIixcbiAgICB0ZWw6IFwiMDctNzEwLTY2NjFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuS6qOmKmFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWJjemOruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5YWJ6I+v5LqM6LevMzAw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTcxMy0wMjA5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuadseeAm1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWJjemOruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A5LqM6IGW6LevMjE46JmfXCIsXG4gICAgdGVsOiBcIjA3LTcxNi0xNzE3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLkuZ3kuYXkuIDnlLJcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOWWhOe+jumHjOWNl+iPr+i3rzE0OeiZn+WPs+WBtFwiLFxuICAgIHRlbDogXCIwNy03MTYtMjg5OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuW7o+eIuiDmsLjosZDlupdcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWJjemOruWNgOawuOixkOi3rzIyOOiZn1wiLFxuICAgIHRlbDogXCIwNy03MTYtNzg3OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi6Zi/55GfXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6Y6u5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDkuozogZbot682N+iZn1wiLFxuICAgIHRlbDogXCIwNy03MTctMjgwMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLpioDnm6TmtIvphZJcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLoi5Ppm4XljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guiLk+mbheWNgOW7uuawkei3rzE1OOiZn1wiLFxuICAgIHRlbDogXCIwNy03MjItOTAxOFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLmjK/mmIwt5q2m5bufXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6IuT6ZuF5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILoi5Ppm4XljYDmrablu5/ot68xNTnomZ/kuYszXCIsXG4gICAgdGVsOiBcIjA3LTcyMi05MjU1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLljYPlgInlu6lcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOaWh+m+jeadsei3rzEyOOiZn1wiLFxuICAgIHRlbDogXCIwNy03MzMtMzk4NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5aSn5oiQXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOv5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps6/lsbHljYDnq4vlv5fooZcxNDLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzQyLTU4ODhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi6ZaL5pmu6bOz5bGx5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDpnZLlubTot6/kuIDmrrUzNjDomZ9cIixcbiAgICB0ZWw6IFwiMDctNzQ3LTA0NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+S4reW0mVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumzs+WxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A5Lit5bSZ5LqM6LevNTM36JmfXCIsXG4gICAgdGVsOiBcIjA3LTc1NS0wMDAwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLnpo/oqJhcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWJjemOruWNgOeRnumahui3rzU5N+iZn1wiLFxuICAgIHRlbDogXCIwNy03NjEtMzY1NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLps7Pnv4rmtIvooYxcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLps7PlsbHljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4gumzs+WxseWNgOS6lOeUsuS6jOi3rzUy6JmfXCIsXG4gICAgdGVsOiBcIjA3LTc2Ny0yODM1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5p+P5qC86YGUXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDljZfkuqzot68xNzPomZ9cIixcbiAgICB0ZWw6IFwiMDctNzY3LTU1ODZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5ZiJ55Gd5rSL6KGM5paH6b6N5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDmlofpvo3mnbHot683ODXomZ9cIixcbiAgICB0ZWw6IFwiMDctNzgwLTE5ODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogMSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWvtuaqs+Wkp+WvriBcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflr67ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWkp+WvruWNgOmzs+ael+S4iei3rzM16JmfXCIsXG4gICAgdGVsOiBcIjA3LTc4Ni04ODc3XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLkuZ3kuYXlpKflr65cIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlpKflr67ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWkp+WvruWNgOWkp+Wvrui3rzY2Mi02ODLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzg3LTgyOTZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlpZXmrKPooYwt5Lit5a6J5bqXXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bCP5riv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsI/muK/ljYDkuK3lronot682NDjomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkxLTI3NTdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuafj+ajrijph5HptLvmmIwpXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bCP5riv5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILlsI/muK/ljYDoj6/mmIzot68xMDXomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkxLTY5OThcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5o+a5piHXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDpgY7li4fot68yNjDomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkyLTkxNTZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi546W6YKRXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6Y6u5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3pjq7ljYDmmI7ps7PkuInot68xMzXomZ9cIixcbiAgICB0ZWw6IFwiMDctNzkzLTU4OTFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5Lmd5LmF6bOz55SyXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi6bOz5bGx5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILps7PlsbHljYDljZfoj6/kuIDot68xODDomZ/jgIExODLomZ9cIixcbiAgICB0ZWw6IFwiMDctNzk2LTk5MjhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLlhYHms7BcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsI/muK/ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWwj+a4r+WNgOmHkeW6nOi3rzE0NeiZn1wiLFxuICAgIHRlbDogXCIwNy04MDUtMzkwOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLpmL/ms6LnvoUo6LGQ5bm0KVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWwj+a4r+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bCP5riv5Y2A5ryi5rCR6LevMTEx6JmfXCIsXG4gICAgdGVsOiBcIjA3LTgwNi0wODk4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuemj+iomOS6lOeUsuW6l1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIumzs+WxseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC6bOz5bGx5Y2A6Y6u5Y2X6YeM5LqU55Sy5LqM6LevNzQw6JmfXCIsXG4gICAgdGVsOiBcIjA3LTgxMy04ODExXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWRguiomFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWJjemOruWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5YmN6Y6u5Y2A6Y6u5p2x5LiA6KGXMTQz6JmfXCIsXG4gICAgdGVsOiBcIjA3LTgzMS04NTQ1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLkvbPphZLojoot6LWk5LuBXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LuB5q2m5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILku4HmrabljYDotaTku4Hot682MOiZn1wiLFxuICAgIHRlbDogXCIwOTA5LTE5My01MTNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5oyv5piMLee+jua/g1wiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIue+jua/g+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC576O5r+D5Y2A5rOw5a6J6LevMzjomZ9cIixcbiAgICB0ZWw6IFwiMDkwOS01MzctODExXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxMyxcbiAgICBzdG9yZTogXCLkuqzptLvojorlnJLoj7jphZJcIixcbiAgICBhcmVhOiBcIumrmOmbhOW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLliY3pjq7ljYBcIixcbiAgICBhZGRyZXNzOiBcIumrmOmbhOW4guWJjemOruWNgOawkeijleihlzEwMeiZn1wiLFxuICAgIHRlbDogXCIwOTEzLTY2NS0yMzlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTMsXG4gICAgc3RvcmU6IFwi5Yex6KiYXCIsXG4gICAgYXJlYTogXCLpq5jpm4TluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YmN6YeR5Y2AXCIsXG4gICAgYWRkcmVzczogXCLpq5jpm4TluILliY3ph5HljYDpnZLlubTkuozot68xNjTomZ9cIixcbiAgICB0ZWw6IFwiMDkxNi0wMTItODk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIuWFreWQiOa0i+ihjFwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOiIiOWNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5paw6IiI5Y2A5Y2X5Y+w6LevNzPlt7cyMeiZn1wiLFxuICAgIHRlbDogXCIwOTIwLTM5MC03NjdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDEzLFxuICAgIHN0b3JlOiBcIumBlOeOluWyoeWxsVwiLFxuICAgIGFyZWE6IFwi6auY6ZuE5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuW3pueHn+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi6auY6ZuE5biC5bem54ef5Y2A6YeN5L+h6LevNTQy6JmfXCIsXG4gICAgdGVsOiBcIjA5NzktNjcwLTY0OVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLlro/nkYvoj7jphZLooYxcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlurfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guawuOW6t+WNgOWNl+eBo+mHjOWkp+eBo+i3rzU3OOiZn1wiLFxuICAgIHRlbDogXCLCoDA2LTIwNS05MDUwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6aCG6aOyLeW+qeWci+W6l1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5b6p5ZyL5LiA6LevMzYx6JmfXCIsXG4gICAgdGVsOiBcIjA2LTIwMy0xODMxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLpvo3mhrZcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3opb/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS4reilv+WNgOWNl+mWgOi3rzI0M+iZn+S5izNcIixcbiAgICB0ZWw6IFwiMDYtMjEzLTAyODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIumGh+eItVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A5rW35a6J6Lev5LiA5q61MjbomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjIwLTA1MDdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLphaPlkbfppJDphZLppKhcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWNl+WNgOilv+mWgOi3r+S4gOautTY2OeiZn1wiLFxuICAgIHRlbDogXCIwNi0yMjUtNzY2OVwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5buj5L6GXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmnbHljYDlpKflkIzot6/kuozmrrUxMznomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjQ2LTYyNzJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLlt57nv5TphZLnv5RcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLkuK3opb/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guS4reilv+WNgOilv+WSjOi3rzIyMOiZn1wiLFxuICAgIHRlbDogXCIwNi0yNTgtNjk1OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5a6256aOXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45bq35Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDmsLjoj6/ot682NuiZn1wiLFxuICAgIHRlbDogXCIwNi0yNzMtNDEyOVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6aCG6aOyLeS4reiPr+W6l1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5Lit6I+v6Lev5LqM5q61ODDomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjc1LTYyMjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuafj+aWh1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadseWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5p2x5Y2A5bCP5p2x6LevMzMw6JmfXCIsXG4gICAgdGVsOiBcIjA2LTI3NS02NjIxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuWvjOWGoOWVhuihjFwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS7geW+t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5LuB5b635Y2A5Lit5q2j6Lev5LqM5q61MzQx6JmfXCIsXG4gICAgdGVsOiBcIjA2LTI3OS00MjMyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5aSn55y+LeatpuiBllwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A5q2m6IGW6LevMjY16JmfXCIsXG4gICAgdGVsOiBcIjA2LTI4MC0wMTI5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5aSn5aSn6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5bmz5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILlronlubPljYDkuK3oj6/opb/ot6/kuozmrrU1NzPomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjgwLTMwNzhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIumghumjsi3opb/ploDlupdcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieWNl+WNgOilv+mWgOi3r+Wbm+autTM3NeiZn1wiLFxuICAgIHRlbDogXCIwNi0yODEtMDMzM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6LOA6byOXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5bmz5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILlronlubPljYDmsLjoj6/ot6/kuozmrrU2OTDomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjkzLTAwMjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5aSn55y+LeWuieW5s1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWuieW5s+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5a6J5bmz5Y2A5bu65bmz6LevNjk26JmfXCIsXG4gICAgdGVsOiBcIjA2LTI5My04OTk5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6aCG6aOy5rC46I+v57i95bqXXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5a6J5bmz5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILlronlubPljYDmsLjoj6/ot6/kuozmrrU2NzjomZ9cIixcbiAgICB0ZWw6IFwiMDYtMjk5LTkxMjNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6b6N5Lqo6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45bq35Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDmnbHmqYvkuIPot68xNTPomZ9cIixcbiAgICB0ZWw6IFwiMDYtMzAyLTAzMjlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5aO5546yXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45bq35Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDlv6DlrZ3ot68xMDjomZ9cIixcbiAgICB0ZWw6IFwiMDYtMzEyLTAwNzhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuaYleaCheaPmlwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuawuOW6t+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5rC45bq35Y2A5Lit6I+v5LiA6LevMTUwLTHomZ9cIixcbiAgICB0ZWw6IFwiMDYtMzEyLTk2OTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5qeT6aCC6I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5p2x5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmnbHljYDltIflvrfot680NTbomZ9cIixcbiAgICB0ZWw6IFwiMDYtMzM2LTIxODlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLpq5jlg5FcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieWNl+WNgOa1t+ayuui3r+S4gOautTk56JmfXCIsXG4gICAgdGVsOiBcIjA2LTM1MC02NDIzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLpjb7mhJtcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlronljZfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guWuieWNl+WNgOWuieWSjOi3r+Wbm+autTQ4MOiZn1wiLFxuICAgIHRlbDogXCIwNi0zNTYtMTEyN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLms7Dlroko5b635L2zKVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOWMluWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw5YyW5Y2A5Lit5q2j6LevNDYyLjQ2NOiZn1wiLFxuICAgIHRlbDogXCIwNi01OTAtNzUyN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5Y2X6YO96I+46YWSXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5rC45bq35Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmsLjlurfljYDlvqnlnIvkuozot682M+W3t1wiLFxuICAgIHRlbDogXCIwNi01OTgtMTE2NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuaYjui8nVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOWMluWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw5YyW5Y2A5Lit5bGx6LevMTEx5be3MTDomZ9cIixcbiAgICB0ZWw6IFwiMDYtNTk4LTExNjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIumHkeWvjOelpVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOW4guWNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw5biC5Y2A6YqY5YKz6KGXNzbomZ9cIixcbiAgICB0ZWw6IFwiMDYtNTk5LTgyNzhcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuaZtOeRklwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOeHn+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw54ef5Y2A5ZKM5bmz6LevODfomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjM1LTUwMzVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIuW+oeWTgVwiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOeHn+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5paw54ef5Y2A5LiJ5rCR6LevNjnomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjM3LTY5OTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5ZCN5a62XCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5paw54ef5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILmlrDnh5/ljYDmlrDpgLLot6/kuozmrrUxODPomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjM3LTkyMzdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5b6h5ZOB5LiL54efXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5LiL54ef5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkuIvnh5/ljYDlgaXlurfot68yODHomZ9cIixcbiAgICB0ZWw6IFwiMDYtNjc5LTAwMjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi5YOR6aCYXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5L2z6YeM5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILkvbPph4zljYDkuK3lsbHot68yMjXomZ9cIixcbiAgICB0ZWw6IFwiMDYtNzIzLTYwNzJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogMSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE0LFxuICAgIHN0b3JlOiBcIumFkuWgoS3mlrDnh59cIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmlrDnh5/ljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guaWsOeHn+WNgOadseazsOS4g+ihlzQ46JmfXCIsXG4gICAgdGVsOiBcIjA5MzQtMzI0LTc3N1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNCxcbiAgICBzdG9yZTogXCLlk4HmvKJcIixcbiAgICBhcmVhOiBcIuWPsOWNl+W4glwiLFxuICAgIGNpdHlfYXJlYTogXCLmsLjlurfljYBcIixcbiAgICBhZGRyZXNzOiBcIuWPsOWNl+W4guawuOW6t+WNgOWflOWckuihlzQxOOiZn1wiLFxuICAgIHRlbDogXCIwOTU2LTk4Mi03MzFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6byO5aSnXCIsXG4gICAgYXJlYTogXCLlj7DljZfluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5YyX5Y2AXCIsXG4gICAgYWRkcmVzczogXCLlj7DljZfluILljJfljYDkuK3oj6/ljJfot6/kuIDmrrU3OOW3tzI16JmfXCIsXG4gICAgdGVsOiBcIjA5NjgtNzAyLTkyN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTQsXG4gICAgc3RvcmU6IFwi6auY55m7LeWPsOWNl1wiLFxuICAgIGFyZWE6IFwi5Y+w5Y2X5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5Y2X5biC5Lit6KW/5Y2A5ZKM5oSP6LevNzjomZ9cIixcbiAgICB0ZWw6IFwiMDk3My0wNjMtMjE1XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE1LFxuICAgIHN0b3JlOiBcIuWFq+WFq+eFmemFkuawtC3mlrDnlJ/lupdcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guWPi+aEm+i3rzMzN+iZn1wiLFxuICAgIHRlbDogXCIwNS0yMTYtMzk4OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTUsXG4gICAgc3RvcmU6IFwi5pmJ56aP6I+46YWSXCIsXG4gICAgYXJlYTogXCLlmInnvqnnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZiJ576p5biCXCIsXG4gICAgYWRkcmVzczogXCLlmInnvqnnuKPlmInnvqnluILmsJHnlJ/ljJfot68yMzPomZ9cIixcbiAgICB0ZWw6IFwiMDUtMjIyLTU5NDNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE1LFxuICAgIHN0b3JlOiBcIuebiOWYieWVhuihjFwiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5Y2X5Lqs6LevNDAx6JmfXCIsXG4gICAgdGVsOiBcIjA1LTIzNi04ODgyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNSxcbiAgICBzdG9yZTogXCLkuIrmnZHooYzoj7jphZJcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guawkeaXj+i3rzEwOeiZn1wiLFxuICAgIHRlbDogXCIwNS0yNzYtMDk3MFwiLFxuICAgIHRoZWRhbG1vcmUxODogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTIxOiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE1LFxuICAgIHN0b3JlOiBcIuatoeWWnOiPuOmFkumhj+emj+S+hlwiLFxuICAgIGFyZWE6IFwi5ZiJ576p57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWYiee+qeW4glwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p57ij5ZiJ576p5biC5paw55Sf6LevNjQy6JmfXCIsXG4gICAgdGVsOiBcIjA1LTI3Ny02MTExXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNSxcbiAgICBzdG9yZTogXCLokKzptLvoj7jphZJcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlmInnvqnluIJcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+WYiee+qeW4guiIiOalreilv+i3rzcx6JmfXCIsXG4gICAgdGVsOiBcIjA1LTI4Ni0xNjk4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNSxcbiAgICBzdG9yZTogXCLphZLku5nllYbooYxcIixcbiAgICBhcmVhOiBcIuWYiee+qee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLnq7nltI7phIlcIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qee4o+erueW0jumEieS4reiPr+i3rzItM+iZn1wiLFxuICAgIHRlbDogXCIwOTA1LTAzNy0zNzFcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE2LFxuICAgIHN0b3JlOiBcIumFkuWuouiPuOmFklwiLFxuICAgIGFyZWE6IFwi5ZiJ576p5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWPi+aEm+i3r1wiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p5biC5Y+L5oSb6LevMTM46JmfXCIsXG4gICAgdGVsOiBcIjA1LTI4MS0wNjY5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiBmYWxzZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTYsXG4gICAgc3RvcmU6IFwi6aCG6aOyLeWYiee+qeW6l1wiLFxuICAgIGFyZWE6IFwi5ZiJ576p5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuilv+WNgFwiLFxuICAgIGFkZHJlc3M6IFwi5ZiJ576p5biC6KW/5Y2A5LiK5rW36LevMjA56JmfXCIsXG4gICAgdGVsOiBcIjA1LTI4My04MzgzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNyxcbiAgICBzdG9yZTogXCLlhqDlvrct5aSn5Z+U5bqXXCIsXG4gICAgYXJlYTogXCLlsY/mnbHluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILmn7Plt57ooZczNOiZn1wiLFxuICAgIHRlbDogXCIwOC03MzMtNzAwN1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTcsXG4gICAgc3RvcmU6IFwi6YqY6bS75rW36LGQXCIsXG4gICAgYXJlYTogXCLlsY/mnbHluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILljJflubPot68yMOiZn1wiLFxuICAgIHRlbDogXCIwOC03MzYtOTkwMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNyxcbiAgICBzdG9yZTogXCLnpr7lpKdcIixcbiAgICBhcmVhOiBcIuWxj+adseW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlsY/mnbHluIJcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4gueRnuWFiei3r+S4ieautTI5OeiZn1wiLFxuICAgIHRlbDogXCIwOC03MzgtNjY1M1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNyxcbiAgICBzdG9yZTogXCLlhqDlvrct6I+v55ub5bqXXCIsXG4gICAgYXJlYTogXCLlsY/mnbHluIJcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILoj6/nm5vooZcxNuiZn1wiLFxuICAgIHRlbDogXCIwOC03NTEtMDYzM1wiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTcsXG4gICAgc3RvcmU6IFwi5Yag5b63Lee4veW6l1wiLFxuICAgIGFyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWxj+adseW4glwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5bGP5p2x5biC5q2m5oiQ6KGXMTAz6JmfXCIsXG4gICAgdGVsOiBcIjA4LTc1MS02NTUzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxOCxcbiAgICBzdG9yZTogXCLmtIvln7pcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlsY/mnbHluIJcIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+Wxj+adseW4guWFrOWckuilv+i3rzEyMeiZn1wiLFxuICAgIHRlbDogXCIwOC03MzMtNzI3MlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi5Yag6I+v6Ieq55Sx5bqXXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILoh6rnlLHot685NuiZn1wiLFxuICAgIHRlbDogXCIwOC03MzUtMTMzMVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi55qH5YqgXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILlu7rosZDot68yODHomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzM1LTM1NjZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuiPr+asoyjmn4/ono0pXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILlpKfpgKPot68xMDctM+iZn1wiLFxuICAgIHRlbDogXCIwOC03MzYtMjM1OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi5p2x5aSnXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bGP5p2x5biCXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlsY/mnbHluILkuK3mraPot681NDjomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzM4LTEyNDVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuadsemRq1wiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIumHjOa4r+mEiVwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij6YeM5riv6YSJ5aSn5bmz5p2R5LuB5ZKM6LevMjPomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzc1LTExOTlcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi6YeR5ZKM6aCGXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6YeM5riv6YSJXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPph4zmuK/phInph4zmuK/ot68xMTTjgIExMTLomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzc1LTYwNDNcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi5Y2D5LiK6I+46YWS5ZWG6KGMXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi6JCs5Li56YSJXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPokKzkuLnphInokKzlhajmnZHokKzkuLnot6/kuIDmrrUzMjHomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzc2LTQ2MzZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi5aSn5ZCM5YWn5Z+UXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5YWn5Z+U6YSJXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPlhafln5TphInlu6Pmv5/ot68xMTTomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzc5LTkwNDZcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxOCxcbiAgICBzdG9yZTogXCLmtKrpg4FcIixcbiAgICBhcmVhOiBcIuWxj+adsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLmva7lt57pjq5cIixcbiAgICBhZGRyZXNzOiBcIuWxj+adsee4o+a9ruW3numOruamruelpeW3tzE46JmfXCIsXG4gICAgdGVsOiBcIjA4LTc4OC0wMTgzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuWkp+WQjFwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIua9rua0sumOrlwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5r2u5rSy6Y6u5pyd5piH6LevODTomZ9cIixcbiAgICB0ZWw6IFwiMDgtNzg4LTIwNThcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuemj+iomOWxj+adsVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIum5veWflOmEiVwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij6bm95Z+U6YSJ57at5paw6LevMTkz6JmfXCIsXG4gICAgdGVsOiBcIjA4LTc5My01MDYxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIsKg6bS75piHXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5bSB6aCC6YSJXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPltIHpoILphInlipvnpL7mnZHoiIrlupfot68xLTEy6JmfXCIsXG4gICAgdGVsOiBcIjA4LTg2My0xNDA5XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuWQieaYjFwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaei+WvrumEiVwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5p6L5a+u6YSJ5Lit5bGx6LevNzXomZ9cIixcbiAgICB0ZWw6IFwiMDgtODc4LTIzNjJcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMTgsXG4gICAgc3RvcmU6IFwi55m+5YipXCIsXG4gICAgYXJlYTogXCLlsY/mnbHnuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5oGG5pil6Y6uXCIsXG4gICAgYWRkcmVzczogXCLlsY/mnbHnuKPmgYbmmKXpjq7kuK3mraPot68xMzjomZ9cIixcbiAgICB0ZWw6IFwiMDgtODg5LTI2MTVcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE4LFxuICAgIHN0b3JlOiBcIuaJv+m+jVwiLFxuICAgIGFyZWE6IFwi5bGP5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuadsea4r+mOrlwiLFxuICAgIGFkZHJlc3M6IFwi5bGP5p2x57ij5p2x5riv6Y6u5piO5b636LevNjLomZ9cIixcbiAgICB0ZWw6IFwiMDkzOS0zNzUtMjYwXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDE5LFxuICAgIHN0b3JlOiBcIuS4iuaamOa0i+iPuOmFklwiLFxuICAgIGFyZWE6IFwi5r6O5rmW57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIummrOWFrOW4glwiLFxuICAgIGFkZHJlc3M6IFwi5r6O5rmW57ij6aas5YWs5biC5YWJ5b6p6LevMTQy6JmfXCIsXG4gICAgdGVsOiBcIjA2LTkyNi01NTc2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxOSxcbiAgICBzdG9yZTogXCLmvo7muZblsI/ntIXojpNcIixcbiAgICBhcmVhOiBcIua+jua5lue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLppqzlhazluIJcIixcbiAgICBhZGRyZXNzOiBcIua+jua5lue4o+mmrOWFrOW4guawkeemj+i3rzQx6JmfXCIsXG4gICAgdGVsOiBcIjA2LTkyNy0zNzMzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIwLFxuICAgIHN0b3JlOiBcIuaYjuaciFwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu5biCXCIsXG4gICAgY2l0eV9hcmVhOiBcIuS4reato+i3r1wiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu5biC5Lit5q2j6LevMTQ26JmfXCIsXG4gICAgdGVsOiBcIjAzLTgzMS01OTY2XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIxLFxuICAgIHN0b3JlOiBcIumFkua3tVwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuaWsOWfjumEiVwiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu57ij5paw5Z+O6YSJ5ZiJ6YeM5LiJ6KGXOTLkuYs46JmfXCIsXG4gICAgdGVsOiBcIjAzLTM4Mi02MTc4NlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMSxcbiAgICBzdG9yZTogXCLpm4Tlr7BcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWci+iBr+S4gOi3rzIxMeiZn1wiLFxuICAgIHRlbDogXCIwMy0zODMtMjYxNDdcIixcbiAgICB0aGVkYWxtb3JlMTg6IHRydWUsXG4gICAgdGhlZGFsbW9yZTIxOiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMjEsXG4gICAgc3RvcmU6IFwi5rCR5L6BXCIsXG4gICAgYXJlYTogXCLoirHok67nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZCJ5a6J6YSJXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPlkInlronphInlkInlronot6/kuIDmrrU3Ni046JmfXCIsXG4gICAgdGVsOiBcIjAzLTM4NS04MDc2OFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMSxcbiAgICBzdG9yZTogXCLphZLmsZ/ooZdcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWMlumBk+i3rzE2MuiZn1wiLFxuICAgIHRlbDogXCIwMy04MjItMjUyMFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMSxcbiAgICBzdG9yZTogXCLliqDphZLooYxcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4gui7kui9hei3rzItMuiZn1wiLFxuICAgIHRlbDogXCIwMy04MzEtNDk2MFwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogdHJ1ZSxcbiAgICB2aW50YWdlMjAwMzogdHJ1ZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIxLFxuICAgIHN0b3JlOiBcIumHkembhOWvsFwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuiKseiTruW4glwiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu57ij6Iqx6JOu5biC5Y2a5oSb6KGXMTM16JmfXCIsXG4gICAgdGVsOiBcIjAzLTgzMi03NjIyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMSxcbiAgICBzdG9yZTogXCLlhajlrrbkvoZcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWci+iBr+S6lOi3rzUx6JmfXCIsXG4gICAgdGVsOiBcIjAzLTgzNi0wMTAxXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIxLFxuICAgIHN0b3JlOiBcIuS4iumGh+WVhuihjFwiLFxuICAgIGFyZWE6IFwi6Iqx6JOu57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWQieWuiemEiVwiLFxuICAgIGFkZHJlc3M6IFwi6Iqx6JOu57ij5ZCJ5a6J6YSJ5Lit6I+v6Lev5LqM5q61MTU56JmfXCIsXG4gICAgdGVsOiBcIjAzLTg1MS0yMDY4XCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogZmFsc2UsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuICB7XG4gICAgc29ydDogMjEsXG4gICAgc3RvcmU6IFwi6Ieq56uLXCIsXG4gICAgYXJlYTogXCLoirHok67nuKNcIixcbiAgICBjaXR5X2FyZWE6IFwi5ZCJ5a6J6YSJXCIsXG4gICAgYWRkcmVzczogXCLoirHok67nuKPlkInlronphInoh6rnq4vot6/kuozmrrU0MuiZn1wiLFxuICAgIHRlbDogXCIwMy04NTYtNjM1NVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IGZhbHNlLFxuICAgIHRoZWRhbG1vcmUyNTogZmFsc2UsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMSxcbiAgICBzdG9yZTogXCLkuIrmj5pcIixcbiAgICBhcmVhOiBcIuiKseiTrue4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLoirHok67luIJcIixcbiAgICBhZGRyZXNzOiBcIuiKseiTrue4o+iKseiTruW4guWvjOelpeihlzk36JmfXCIsXG4gICAgdGVsOiBcIjAzLTg1Ny02NTQzXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IGZhbHNlLFxuICAgIHZpbnRhZ2UyMDAzOiBmYWxzZSxcbiAgICB2aW50YWdlMjAwNzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHNvcnQ6IDIyLFxuICAgIHN0b3JlOiBcIuW+t+ixkFwiLFxuICAgIGFyZWE6IFwi5Y+w5p2x57ijXCIsXG4gICAgY2l0eV9hcmVhOiBcIuWPsOadseW4glwiLFxuICAgIGFkZHJlc3M6IFwi5Y+w5p2x57ij5Y+w5p2x5biC5YKz5buj6LevNTA36JmfXCIsXG4gICAgdGVsOiBcIjA4LTkyMi04MzcyXCIsXG4gICAgdGhlZGFsbW9yZTE4OiB0cnVlLFxuICAgIHRoZWRhbG1vcmUyMTogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjU6IHRydWUsXG4gICAgdmludGFnZTIwMDM6IHRydWUsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAyMixcbiAgICBzdG9yZTogXCLphZLloKFcIixcbiAgICBhcmVhOiBcIuWPsOadsee4o1wiLFxuICAgIGNpdHlfYXJlYTogXCLlj7DmnbHluIJcIixcbiAgICBhZGRyZXNzOiBcIuWPsOadsee4o+WPsOadseW4guaWsOeUn+i3rzExNuiZn1wiLFxuICAgIHRlbDogXCIwOC05MzItMTIzNVwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiBmYWxzZSxcbiAgICB2aW50YWdlMjAwMzogZmFsc2UsXG4gICAgdmludGFnZTIwMDc6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBzb3J0OiAxNixcbiAgICBzdG9yZTogXCLphZLlnIvoi7Hpm4Toj7jphZJcIixcbiAgICBhcmVhOiBcIuWYiee+qeW4glwiLFxuICAgIGNpdHlfYXJlYTogXCLlj4vmhJvot69cIixcbiAgICBhZGRyZXNzOiBcIuWYiee+qeW4guWPi+aEm+i3rzIyMeiZn1wiLFxuICAgIHRlbDogXCIwNS0yMzMtMTIxMlwiLFxuICAgIHRoZWRhbG1vcmUxODogdHJ1ZSxcbiAgICB0aGVkYWxtb3JlMjE6IHRydWUsXG4gICAgdGhlZGFsbW9yZTI1OiB0cnVlLFxuICAgIHZpbnRhZ2UyMDAzOiB0cnVlLFxuICAgIHZpbnRhZ2UyMDA3OiB0cnVlLFxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGFsbF9zdG9yZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9
