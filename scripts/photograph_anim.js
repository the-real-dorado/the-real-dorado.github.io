document.addEventListener("scroll", () => {
    const triggerElement = document.querySelector(".photograph1"); // Use first photograph as trigger reference
    if (!triggerElement) return;

    const triggerPoint = triggerElement.getBoundingClientRect().top < window.innerHeight * 0.7;

    if (triggerPoint) {
        document.querySelectorAll(".photograph").forEach(photograph => {
            photograph.classList.add("active");
        });
    }
});
