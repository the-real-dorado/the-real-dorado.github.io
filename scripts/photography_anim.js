document.addEventListener("scroll", () => {
    // Define trigger points based on screen width
    let photoTriggerValue = window.innerWidth <= 600 ? 0.8 : 0.7; // Smaller screens trigger earlier
    let containerTriggerValue = window.innerWidth <= 600 ? 1 : 0.7; // Adjust container trigger point

    // Trigger for photographs
    const photoTrigger = document.querySelector(".photograph1");
    if (photoTrigger) {
        const photoTriggerPoint = photoTrigger.getBoundingClientRect().top < window.innerHeight * photoTriggerValue;
        if (photoTriggerPoint) {
            document.querySelectorAll(".photograph").forEach(photograph => {
                photograph.classList.add("active");
            });
        }
    }

    // Trigger for photography container
    const containerTrigger = document.querySelector("#photography");
    if (containerTrigger) {
        const containerTriggerPoint = containerTrigger.getBoundingClientRect().top < window.innerHeight * containerTriggerValue;
        if (containerTriggerPoint) {
            document.querySelector(".photography-container").classList.add("active");
        }
    }
});
