function fitText(el) {
    el.style.fontSize = "100px"; // start big
    const parentWidth = el.offsetWidth;

    // Hidden clone to measure each line
    const clone = el.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.whiteSpace = "nowrap";
    clone.style.width = "auto";
    document.body.appendChild(clone);

    const lines = el.innerHTML.split(/<br\s*\/?>/i);
    let maxWidth = 0;

    for (let line of lines) {
        clone.innerHTML = line.trim();
        maxWidth = Math.max(maxWidth, clone.scrollWidth);
    }

    document.body.removeChild(clone);

    const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
    const scaleFactor = (parentWidth / maxWidth) * 0.95;
    el.style.fontSize = currentSize * scaleFactor + "px";
}

window.addEventListener("load", () => {
    document.querySelectorAll(".text-fit-container").forEach(fitText);
});