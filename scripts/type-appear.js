// heavens know how this works //

// gsap.registerPlugin(ScrollTrigger);  

const baseDelay = 0.05; // Base delay between letters

document.querySelectorAll('.type-appear').forEach(el => {
    // Preserve HTML structure
    const originalHTML = el.innerHTML;

    // Function to wrap each letter (including spaces) in spans
    function wrapText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            for (const char of node.nodeValue) {
                if (char === ' ') {
                    frag.appendChild(document.createTextNode(' ')); // Keep spaces
                } else {
                    const span = document.createElement('span');
                    span.textContent = char;
                    if (/[a-zA-Z]/.test(char)) {
                        span.style.opacity = 0;
                        span.classList.add('anim-letter');
                    }
                    frag.appendChild(span);
                }
            }
            node.replaceWith(frag);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
            // Process child nodes (skip <br> tags)
            Array.from(node.childNodes).forEach(wrapText);
        }
    }

    // Create spans inside the original structure
    el.innerHTML = originalHTML;
    wrapText(el);

    // Get only the spans that are to be animated from this container.
    const animLetters = Array.from(el.querySelectorAll('.anim-letter'));

    // Sort letters alphabetically (case-insensitive)
    animLetters.sort((a, b) => {
        const aChar = a.innerText.toLowerCase();
        const bChar = b.innerText.toLowerCase();
        return aChar < bChar ? -1 : aChar > bChar ? 1 : 0;
    });

    // Use ScrollTrigger to trigger animation on scroll
    if (isMobile) {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                animLetters.forEach((span, i) => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: 0, // No fade — instant jump
                        delay: i * baseDelay
                    });
                });
            }
        });
    } else {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                animLetters.forEach((span, i) => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: 0, // No fade — instant jump
                        delay: i * baseDelay
                    });
                });
            }
        });
    }
});