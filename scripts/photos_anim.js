window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let viewportHeight = window.innerHeight;
    let baseAngle = 90; // Base angle for all squares (start position)

    // Set the offset point where the rotation starts (in viewport height %)
    let offset = 20;
    let offsetInPixels = (offset / 100) * viewportHeight;

    // Function to determine rotation factors based on screen size
    function setRotationFactors() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            // Mobile values
            return { rotationFactor1: 1.0, rotationFactor2: 1.2, rotationFactor3: 1.4 };
        } else {
            // Desktop values
            return { rotationFactor1: 0.6, rotationFactor2: 0.7, rotationFactor3: 0.8 };
        }
    }

    // Set rotation factors based on screen size
    let { rotationFactor1, rotationFactor2, rotationFactor3 } = setRotationFactors();

    // Optional: Update values on window resize
    window.addEventListener("resize", () => {
        ({ rotationFactor1, rotationFactor2, rotationFactor3 } = setRotationFactors());
    });

    // Function to update the rotation based on scroll
    function updateRotation() {
        if (scrollY > offsetInPixels) {
            // Calculate rotation angle based on scroll distance and rotation factor
            let rotationAngle1 = Math.min((scrollY - offsetInPixels) / viewportHeight * 180 * rotationFactor1, 87);
            let rotationAngle2 = Math.min((scrollY - offsetInPixels) / viewportHeight * 180 * rotationFactor2, 97);
            let rotationAngle3 = Math.min((scrollY - offsetInPixels) / viewportHeight * 180 * rotationFactor3, 112);

            // Apply different rotation for each square
            document.getElementById('rotateSquare1').style.transform = `rotate(${baseAngle - rotationAngle1}deg)`;
            document.getElementById('rotateSquare2').style.transform = `rotate(${baseAngle - rotationAngle2}deg)`;
            document.getElementById('rotateSquare3').style.transform = `rotate(${baseAngle - rotationAngle3}deg)`;
        } else {
            // If scroll is below the offset, keep all squares at the initial rotation angle
            document.getElementById('rotateSquare1').style.transform = `rotate(${baseAngle}deg)`;
            document.getElementById('rotateSquare2').style.transform = `rotate(${baseAngle}deg)`;
            document.getElementById('rotateSquare3').style.transform = `rotate(${baseAngle}deg)`;
        }
    }

    // Use requestAnimationFrame to optimize performance
    window.requestAnimationFrame(updateRotation);
});
