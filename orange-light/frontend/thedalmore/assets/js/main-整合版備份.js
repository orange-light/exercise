// ajax 配合JQ3 引入設置
$(document).ready(function () {
  $.ajaxSetup({ cache: false });
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
});
// 選單
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
}
// [End] 選單
//使用條款
function agreementSwitcher() {
  $("#agreementModalCenter_Id").on("shown.bs.modal", function () {
    $(".modal-backdrop")[1].remove();
    // $('#agreementModalCenter_Id').css("padding-right", "17px");
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
}
//隱絲權政策(配合ageGate.js裡面的setCookieYear())
function privacySwitcher() {
  if (getCookie("privacy_dalmore") === undefined) {
    $(".l-footer-privacy").removeClass("d-none");
    $("#acceptPrivacy_Id").on("click", function () {
      $(".l-footer-privacy").addClass("d-none");
      setCookieYear("privacy_dalmore");
    });
  }
}
//go top
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
    var triggerNum = window.pageYOffset + window.innerHeight;
    // console.log("triggerNum == " + triggerNum);
    // console.log("el.offsetTop ==" + (el.offsetTop + (el.offsetHeight / 3)));
    var targerNum = el.offsetTop;
    if (triggerNum >= targerNum + el.offsetHeight / 1.5) {
      targetEl.classList.remove("js-acitve");
    } else {
      targetEl.classList.add("js-acitve");
    }
  }
}
//[End] go top
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
}
//產品頁tab
function tab() {
  var el = document.querySelector(".v-tab");
  if (el !== null) {
    var $link = $(".tab-list .tab-btn");
    $($link.eq(0).addClass("active").find("a").attr("href"))
      .siblings(".tab-content")
      .hide();
    $link.click(function (event) {
      event.preventDefault();
      $("html,body").scrollTop(0);
      // $("html,body").animate(
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
      $(this).addClass("active").siblings(".active").removeClass("active");
    });
    $(".js-classic").load("ajax/_product_classic.html");
    $(".js-old").load("ajax/_product_old.html");
    $(".js-limited").load("ajax/_product_limited.html");
  }
}
//產品頁tabFixedTop
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
}
//解決手機上 safari, chrome 瀏覽器 100vh 無法剛好一整頁的問題
function fixSmartphone100vh() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
//最新消息vue
import news_list from "../plugins/jason_data/news_list.js";
function newsListVue() {
  var el = document.querySelector("#newsPagination_Id");
  if (el !== null) {
    const PAGE_SIZE = 8; //一個頁面要顯示多少筆資料
    const FOO_DATA = news_list;
    Vue.component("paginate", VuejsPaginate);
    const vue = new Vue({
      el: "#newsPagination_Id",
      data: {
        listdata: [],
        currentPage: 1,
        pageCount: 1,
      },
      computed: {
        pagedListdata: function () {
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
        listdata: function (val) {
          this._setPage2Model();
        },
      },
      filters: {
        ellipsis(value) {
          const len = 117;
          if (!value) return "";
          if (value.length > len) {
            return value.slice(0, len) + "...";
          }
          return value;
        },
      },
      methods: {
        _setPage2Model: function () {
          var vm = this;
          if (!vm.listdata || vm.listdata.length <= 0) {
            vm.pageCount = 1;
          } else {
            vm.pageCount =
              parseInt(vm.listdata.length / PAGE_SIZE) +
              (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);
            for (let i = 0; i < vm.listdata.length; i++) {
              vm.$set(vm.listdata[i], "page", parseInt(i / PAGE_SIZE) + 1);
            }
          }
        },
        pageCallback: function (page) {
          var vm = this;
          this.$set(vm, "currentPage", page);
          // 讓 currentPage 等於 page
        },
      },
      created() {
        var vm = this;
        vm.listdata = FOO_DATA;
      },
    });
  }
}
//商店列表Vue
//import stores_list from '../plugins/jason_data/stores_list.js';
import stores_list from "../plugins/jason_data/stores_list.js";
function storeListVue() {
  var el = document.querySelector("#storeFilter_Id");

  if (el !== null) {
    const vue = new Vue({
      el: "#storeFilter_Id",
      data: {
        sections: [
          {
            stores: stores_list,
          },
        ],
        selected_area: "台北市",
        selected_city_area: "",
        qtext: "",
        city_areas: [],
      },

      created: function () {
        this.area_change(this.selected_area);
      },

      methods: {
        area_change: function (e) {
          this.qtext = "";
          $("#qtext").val("");

          var rows = this.sections[0].stores.filter(function (element, index) {
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

        city_area_change: function () {
          this.qtext = "";
          $("#qtext").val("");
        },

        query: function (qtext) {
          var text = $("#qtext").val().trim();

          if (text == "") {
            alert("請輸入通路名稱或地址");
            return;
          }

          this.qtext = text;
          this.selected_area = "all";
          this.selected_city_area = "";

          //this.rowData(this.selected_area , this.selected_city_area, this.qtext);
        },

        rowData: function (e, city_area, qtext) {
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

              flag =
                element["store"].indexOf(text) >= 0 ||
                element["address"].indexOf(text) >= 0;

              console.log(
                flag,
                text,
                element["store"],
                element["address"],
                element["address"].indexOf(text)
              );
            } else if (city_area != "") {
              if (e == "all") {
                flag = element["city_area"] == city_area;
              } else {
                flag =
                  element["area"] == e && element["city_area"] == city_area;
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
  fixSmartphone100vh();
});
//呼叫function-視窗大小變更
$(window).resize(function () {});
//呼叫function-捲動
$(window).scroll(function () {
  tabFixed();
  lazyLoad();
});
