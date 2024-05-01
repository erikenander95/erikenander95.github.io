document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      // Check if the target id is not empty (not the Home button)
      if (targetId !== "") {
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        // Scroll to the top of the page for the Home button
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  });
});
