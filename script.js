let tabs = document.querySelectorAll(".nav-item"); // also fix class name if needed

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove 'active' class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add 'active' class to clicked tab
    tab.classList.add("active");
  });
});
