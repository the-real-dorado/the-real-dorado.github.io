const texts = document.querySelectorAll(".scroll-reveal");

texts.forEach(text => {
    const units = text.textContent.split("");
    text.innerHTML = units.map(unit => `<span>${unit}</span>`).join("");
    const spans = text.querySelectorAll("span");

    const startMobile = "top 50%";
    const endMobile = "bottom 100%";
    const startDesktop = "top 80%";
    const endDesktop = "bottom 60%";

    gsap.fromTo(
        spans,
        { yPercent: 0, opacity: 1 },
        {
            yPercent: 100,
            opacity: 1,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
                trigger: text,
                start: isMobile ? startMobile : startDesktop,
                end: isMobile ? endMobile : endDesktop,
                scrub: true,
                // markers: true
            }
        }
    );
});
