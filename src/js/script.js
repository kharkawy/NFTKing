function updateCopyrightYear() {
  const copyrightYear = document.getElementById("CopyrightYear");
  const currentYear = new Date().getFullYear();

  copyrightYear.innerText = currentYear;
}

function checkHeaderScroll() {
  const header = document.getElementById("Header");
  const headerPos = header.getBoundingClientRect().top;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (scrollPos > headerPos) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

function toggleMobileMenu() {
  const burgerButton = document.getElementById("BurgerButton");

  burgerButton.addEventListener("click", () =>
    document.body.classList.toggle("mobile-nav-visible")
  );
}

function toggleTabs() {
  const toplistTabButtons = document.querySelectorAll(
    ".toplist__tab-group .btn"
  );

  [...toplistTabButtons].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (btn.classList.contains("active")) {
        return;
      }

      let activeButton = document.querySelector(
        ".toplist__tab-group .btn.active"
      );
      activeButton.classList.remove("active");
      btn.classList.add("active");

      let targetTabId = btn.getAttribute("href");
      let targetTab = document.getElementById(targetTabId);
      let activeTab = document.querySelector(".toplist__slider.active");
      activeTab.classList.remove("active");
      targetTab.classList.add("active");

      fadeIn(targetTab, 600);
      fadeOut(activeTab, 600);
    });
  });

  function fadeOut(el, speed) {
    el.style.opacity = 1;

    const start = Date.now();

    function fade() {
      const elapsed = Date.now() - start;
      el.style.opacity = 1 - elapsed / speed;

      if (elapsed < speed) {
        requestAnimationFrame(fade);
      } else {
        el.style.opacity = 0;
      }
    }

    requestAnimationFrame(fade);
  }

  function fadeIn(el, speed) {
    el.style.opacity = 0;

    const start = Date.now();

    function fade() {
      const elapsed = Date.now() - start;
      el.style.opacity = elapsed / speed;

      if (elapsed < speed) {
        requestAnimationFrame(fade);
      }
    }

    requestAnimationFrame(fade);
  }
}

function toggleFollowButton() {
  let followButtons = document.querySelectorAll(".slide__button .btn");

  [...followButtons].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.classList.toggle("btn-unchecked");
      if (!btn.classList.contains("btn-unchecked")) {
        btn.innerHTML = "Followed";
      } else {
        btn.innerHTML = "Follow";
      }
    });
  });
}

function mountSliders() {
  new Glide(".glide-1", {
    perView: 4,
    bound: true,
    breakpoints: {
      1250: {
        perView: 3,
      },
      900: {
        perView: 2,
      },
      650: {
        perView: 1,
      },
    },
  }).mount();

  new Glide(".glide-2", {
    perView: 4,
    bound: true,
    breakpoints: {
      1250: {
        perView: 3,
      },
      900: {
        perView: 2,
      },
      650: {
        perView: 1,
      },
    },
  }).mount();
}

function main() {
  checkHeaderScroll();
  toggleMobileMenu();
  toggleTabs();
  mountSliders();
  toggleFollowButton();
  updateCopyrightYear();
}

document.addEventListener("DOMContentLoaded", ()=>{
  
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main()
}
