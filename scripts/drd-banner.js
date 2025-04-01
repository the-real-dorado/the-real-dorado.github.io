document.addEventListener("DOMContentLoaded", function () {
    const bannerRow = document.querySelector(".drd-banner-row");

    function getStacksPerRow() {
        const stackWidth = window.innerHeight * 0.1; // Example: 15svh, adjust as needed
        return Math.floor(window.innerWidth / stackWidth);
    }

    // function createBannerStack() {
    //     return `
    //         <div class="drd-banner-stack"><p class="top blu">dorado</p><p class="mid red">dorado</p><p class="bot wht">dorado</p></div>
    //         <div class="drd-banner-stack"><p class="top wht">dorado</p><p class="mid blu">dorado</p><p class="bot red">dorado</p></div>
    //         <div class="drd-banner-stack"><p class="top red">dorado</p><p class="mid wht">dorado</p><p class="bot blu">dorado</p></div>
    //     `;
    // }

    function createBannerStack() {
        return `
        <div class="drd-banner-stack"><p class="top blu">dorado</p><p class="mid red">dorado</p><p class="bot wht">dorado</p></div>
        <div class="drd-banner-stack"><p class="top blu">dorado</p><p class="mid red">dorado</p><p class="bot wht">dorado</p></div>
        <div class="drd-banner-stack"><p class="top blu">dorado</p><p class="mid red">dorado</p><p class="bot wht">dorado</p></div>
        `;
    }

    function populateBanner() {
        bannerRow.innerHTML = "";
        const stacksPerRow = getStacksPerRow();
        let stacks = "";
        for (let i = 0; i < stacksPerRow; i++) {
            stacks += createBannerStack();
        }
        bannerRow.innerHTML = stacks;
    }

    populateBanner();
    window.addEventListener("resize", populateBanner);
});
