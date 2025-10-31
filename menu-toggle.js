document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const openIcon = document.getElementById("menu-open");
  const closeIcon = document.getElementById("menu-close");
  const links = menu.querySelectorAll("a");

  // Helper function to close menu (used in multiple places)
  function closeMenu() {
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  // Toggle menu when clicking the hamburger button
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));

    menu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close menu when any link is clicked (on mobile only)
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1280) closeMenu();
    });
  });

  // Close menu when scrolling (on mobile only)
  window.addEventListener("scroll", () => {
    if (window.innerWidth < 1280 && menuBtn.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  // Handle window resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) {
      // Desktop view: menu always visible, reset icons
      menu.classList.remove("hidden");
      openIcon.classList.add("hidden");
      closeIcon.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    } else {
      // Mobile view: always start closed (don't remember open state)
      closeMenu();
    }
  });
});

  /*menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));

    // Toggle menu visibility
    menu.classList.toggle("hidden");

    // Toggle icons
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});*/
