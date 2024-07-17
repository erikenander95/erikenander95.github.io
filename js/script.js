document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");
  const arrowButton = document.querySelector(".hero-content .btn");

  const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      if (targetId !== "") {
        scrollToTarget(targetId);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  });

  arrowButton.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = arrowButton.getAttribute("href").substring(1);
    scrollToTarget(targetId);
  });
});
