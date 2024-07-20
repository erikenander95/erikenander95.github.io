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

  const tablinks = document.querySelectorAll(".tablinks");
  const tabcontents = document.querySelectorAll(".tabcontent");

  function openProject(evt, projectName) {
    tabcontents.forEach((tabcontent) => {
      tabcontent.style.display = "none";
    });

    tablinks.forEach((tablink) => {
      tablink.className = tablink.className.replace(" active", "");
    });

    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  if (tablinks.length > 0) {
    tablinks[0].click();
  }

  tablinks.forEach((tablink) => {
    tablink.addEventListener("click", (e) => {
      const projectName = tablink.getAttribute("onclick").split("'")[1];
      openProject(e, projectName);
    });
  });
});
