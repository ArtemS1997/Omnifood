allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      let sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});
