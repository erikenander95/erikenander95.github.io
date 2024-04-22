document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
