import Swiper from "swiper";
import animate from "./animate";

$(document).ready(function() {
  $("body").addClass("ready");

  // product-card slider
  if ($(".swiper-card").length) {
    const slider = new Swiper(".swiper-card", {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 20,
      scrollbar: {
        el: ".swiper-scrollbar",
        clickable: true
      }
    });
  }

  // anchor links
  $('.main-hero-nav-list a[href^="#"]').on("click", function(event, history) {
    const hash = `#${
      $(this)
        .attr("href")
        .split("#")[1]
    }`;
    const $element = $(hash);
    if ($element.length) {
      event.preventDefault();
      window.history.pushState(hash, undefined, hash);
      $("html, body").animate({ scrollTop: $element.offset().top }, 700);
    }
  });

  // main-page nav toggle
  if ($(".main-product-nav-list").length) {
    $(".main-product-nav-list-category").on("click", function(e) {
      e.preventDefault();
      if (!$(this).hasClass("open")) {
        $(".main-product-nav-list-category").removeClass("open");
        $(this).addClass("open");
        $(this)
          .find(".main-product-nav-list-category-droplist li:first-child a")
          .addClass("active");
        $(".main-product-nav-list").addClass("menuUse");
      }
    });
    $(".main-product-nav-list-category-droplist a").on("click", function(e) {
      e.preventDefault();
      if (!$(this).hasClass("active")) {
        $(".main-product-nav-list-category-droplist a").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".main-product-nav-list-cancel").on("click", function(e) {
      e.preventDefault();
      $(".main-product-nav-list").removeClass("menuUse");
      $(".main-product-nav-list-category").removeClass("open");
      $(".main-product-nav-list-category-droplist a").removeClass("active");
    });
  }

  // main-page nav toggle
  if ($(".main-bundle-nav-list").length) {
    $(".main-bundle-nav-list-item").on("click", function(e) {
      e.preventDefault();
      if (!$(this).hasClass("active")) {
        $(".main-bundle-nav-list-item").removeClass("active");
        $(this).addClass("active");
      }
    });
  }

  // video
  if ($(".video-block").length) {
    const video = document.getElementById("video-play");
    const playButton = document.getElementById("video-block");

    const muteButton = document.getElementById("mute-video");
    muteButton.addEventListener("click", function() {
      if (video.muted === false) {
        video.muted = true;
        this.className += " muted";
      } else {
        video.muted = false;

        this.classList.remove("muted");
      }
    });

    video.addEventListener("timeupdate", function() {
      if (this.currentTime >= this.duration) {
        this.pause();
        playButton.classList.remove("active");
      }
    });
    video.addEventListener("click", function() {
      if (video.paused === true) {
        video.play();
        playButton.className += " active";
      } else {
        video.pause();
        playButton.classList.remove("active");
      }
    });
    if (window.innerWidth <= 767) {
      video.controls = true;
    }
  }

  // tabs
  if ($(".tabs-list").length) {
    $(".tabs-list .tabs-list-head__item").on("click", function(e) {
      e.preventDefault();
      const tabItem = $(this).index();
      const parent = $(this).closest(".tabs-list");
      const tabLink = $(this)
        .attr("href")
        .replace("#", "");
      if (!$(this).hasClass("active")) {
        parent
          .find(".tabs-list-body__item")
          .hide()
          .removeClass("active");

        $(`#${tabLink}`).fadeIn(100, function() {
          $(`#${tabLink}`).addClass("active");
        });
        parent.find(".tabs-list-head__item").removeClass("active");
        $(this).addClass("active");
      }
    });
  }

  // start functions
  animate();
});

// October 2019
// yarovoy.studio
