!(function (e) {
  "use strict";
  let t = document.querySelector("header");
  window.addEventListener("scroll", () => {
    window.scrollY > 500
      ? t.classList.add("sticky")
      : t.classList.remove("sticky");
  });
  var o = window.screen.width,
    s = document.querySelector(".overlay-switcher-close");
  if (
    (e(document).ready(function () {
      e("#container").addClass("loaded"),
        e("#container").hasClass("loaded") &&
          e("#preloader")
            .delay(1e3)
            .queue(function () {
              e(this).remove();
            });
    }),
    gsap.registerPlugin(ScrollTrigger),
    e(".image-popup").length &&
      "magnificPopup" in jQuery &&
      e(".image-popup").magnificPopup({
        type: "image",
        gallery: { enabled: !0 },
      }),
    e(".video-popup").length &&
      "magnificPopup" in jQuery &&
      e(".video-popup").magnificPopup({ type: "iframe" }),
    o > 767 &&
      document.querySelector("#has_smooth").classList.contains("has-smooth") &&
      ScrollSmoother.create({
        smooth: 0.5,
        effects: !(o < 1025),
        smoothTouch: 0.5,
        normalizeScroll: !0,
        ignoreMobileResize: !0,
      }),
    "counterUp" in window)
  ) {
    let a = window.counterUp.default,
      i = (e) => {
        e.forEach((e) => {
          let t = e.target;
          e.isIntersecting &&
            !t.classList.contains("is-visible") &&
            (a(t, { duration: 1500, delay: 16 }),
            t.classList.add("is-visible"));
        });
      },
      n = new IntersectionObserver(i, { threshold: 1 }),
      r = document.querySelectorAll(".wc-counter");
    r.forEach((e) => {
      n.observe(e);
    });
  }
  let c = document.getElementById("scroll_top");
  c &&
    ((window.onscroll = function () {
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
        ? c.classList.add("showed")
        : c.classList.remove("showed");
    }),
    c.addEventListener("click", function () {
      (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
    })),
    e(".offcanvas__menu").meanmenu({
      meanScreenWidth: "5000",
      meanMenuContainer: ".offcanvas__menu-wrapper",
      meanMenuCloseSize: "28px",
    }),
    e(".main-menu").meanmenu({
      meanScreenWidth: "1199",
      meanMenuContainer: ".offcanvas__menu-wrapper",
      meanMenuCloseSize: "28px",
    });
  let l = gsap.utils.toArray(".btn-move"),
    u = gsap.utils.toArray(".btn-item");
  l.forEach((t, o) => {
    e(t).mousemove(function (s) {
      var a, i, n, r, c, l, d;
      (a = s),
        (r = 80),
        (i = a),
        (n = u[o]),
        (c = e(t)),
        (l = i.pageX - c.offset().left),
        (d = i.pageY - c.offset().top),
        gsap.to(n, 0.3, {
          x: ((l - c.width() / 2) / c.width()) * r,
          y: ((d - c.height() / 2) / c.height()) * r,
          scale: 1.2,
          ease: Power2.easeOut,
        });
    }),
      e(t).mouseleave(function (e) {
        gsap.to(u[o], 0.3, { x: 0, y: 0, scale: 1, ease: Power2.easeOut });
      });
  });
  var d = document.querySelectorAll(".btn-hover-bgchange");
  if (d) {
    for (let h of d) {
      var p = document.createElement("span");
      h.appendChild(p);
    }
    e(".btn-hover-bgchange").on("mouseenter", function (t) {
      var o = t.pageX - e(this).offset().left,
        s = t.pageY - e(this).offset().top;
      e(this).find("span").css({ top: s, left: o });
    }),
      e(".btn-hover-bgchange").on("mouseout", function (t) {
        var o = t.pageX - e(this).offset().left,
          s = t.pageY - e(this).offset().top;
        e(this).find("span").css({ top: s, left: o });
      });
  }
  function f() {
    document.querySelector(".wc-cursor").style.display = "none";
  }
  document.querySelector(".pin__element") &&
    o > 991 &&
    gsap.to(".pin__element", {
      scrollTrigger: {
        trigger: ".pin__area",
        pin: ".pin__element",
        start: "top top",
        end: "bottom bottom",
        pinSpacing: !1,
      },
    }),
    document.querySelector(".pin__elem") &&
      o > 991 &&
      gsap.utils.toArray(".pin__elem").forEach((e, t, o) => {
        t !== o.length - 1 &&
          ScrollTrigger.create({
            trigger: e,
            start: "top top",
            pin: !0,
            pinSpacing: !1,
          });
      }),
    document.addEventListener("mousemove", function e(t) {
      try {
        t.target;
        gsap
          .timeline({ defaults: { x: t.clientX, y: t.clientY } })
          .to(".cursor1", { ease: "power2.out" })
          .to(".cursor2", { ease: "power2.out" }, "-=0.4");
      } catch (o) {
        console.log(o);
      }
    });
  document.querySelectorAll(".img_anim_reveal").forEach((e) => {
    let t = e.querySelector("img"),
      o = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 50%" } });
    o.set(e, { autoAlpha: 1 }),
      o.from(e, 1.5, { xPercent: -100, ease: Power2.out }),
      o.from(t, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
  });
  var m = document.getElementById("open_offcanvas"),
    g = document.getElementById("close_offcanvas");
  m &&
    g &&
    (m.addEventListener("click", function () {
      (document.querySelector(".offcanvas-area").style.opacity = "1"),
        (document.querySelector(".offcanvas-area").style.visibility =
          "visible");
    }),
    g.addEventListener("click", function () {
      (document.querySelector(".offcanvas-area").style.opacity = "0"),
        (document.querySelector(".offcanvas-area").style.visibility = "hidden");
    }));
  var y = e("#switcher_open").on("click", function () {
      e(this).hide(),
        e("#switcher_close").show(),
        e(".switcher__icon").css("right", "280px"),
        e(".switcher__items").css({ right: "0" }),
        s.classList.add("show-overlay");
    }),
    v = e("#switcher_close").on("click", function () {
      e(this).hide(),
        e("#switcher_open").show(),
        e(".switcher__icon").css("right", "0"),
        e(".switcher__items").css({ right: "-280px" }),
        s.classList.remove("show-overlay");
    });
  e(".overlay-switcher-close").on("click", function () {
    y.hide(),
      v.hide(),
      e("#switcher_open").show(),
      e(".switcher__icon").css("right", "0"),
      e(".switcher__items").css({ right: "-280px" }),
      s.classList.remove("show-overlay");
  }),
    e(".mode-type button").on("click", function (t) {
      e(this).addClass("active").siblings().removeClass("active"),
        "dark" == e(".mode-type button.active").attr("data-mode")
          ? e("body").addClass("dark")
          : e("body").removeClass("dark");
    }),
    e(".layout-type button").on("click", function (t) {
      e(this).addClass("active").siblings().removeClass("active"),
        "box-layout" == e(".layout-type button.active").attr("data-mode")
          ? (e("#smooth-content").addClass("box-layout"),
            e("header").addClass("box-layout"))
          : (e("#smooth-content").removeClass("box-layout"),
            e("header").removeClass("box-layout"));
    }),
    e(".lang_dir button").on("click", function (t) {
      e(this).addClass("active").siblings().removeClass("active"),
        "rtl" == e(".lang_dir button.active").attr("data-mode")
          ? e("body").addClass("dir-rtl")
          : e("body").removeClass("dir-rtl");
    }),
    e("#cursor_style").on("change", function () {
      "1" == e(this).val()
        ? (e(".cursor1").hide(), e(".cursor2").hide())
        : (e(".cursor1").show(), e(".cursor2").show());
    }),
    e("a[href='#top']").on("click", function () {
      return e("html, body").animate({ scrollTop: 0 }, "slow"), !1;
    }),
    !(function () {
      let t = e(".wcf__toggle_switcher"),
        o = e("input", t),
        s = e(".toggle-pane", t),
        a = e(".before_label, .after_label", t);
      o.change(function () {
        s.toggleClass("show"), a.toggleClass("active");
      });
    })();
})(jQuery);
