// Novacore cinematic preview — interactions
(function () {
  "use strict";

  // 1. Roll the letterbox bars away shortly after load
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("rolled");
    }, 700);
  });
  // Fallback if load is slow
  setTimeout(function () {
    document.body.classList.add("rolled");
  }, 3500);

  // 2. Scroll-reveal for .reveal elements
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });

  // 3. Animated counters for .stat-num
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600;
    var start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var cio = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".stat-num").forEach(function (el) {
    cio.observe(el);
  });

  // 4. Subtle mouse parallax on the hero media
  var hero = document.querySelector(".hero");
  var media = document.querySelector(".hero-media");
  if (hero && media && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", function (ev) {
      var x = (ev.clientX / window.innerWidth - 0.5) * 14;
      var y = (ev.clientY / window.innerHeight - 0.5) * 10;
      media.style.transform = "translate(" + -x + "px," + -y + "px)";
    });
    hero.addEventListener("mouseleave", function () {
      media.style.transform = "";
    });
  }
})();
