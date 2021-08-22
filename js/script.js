$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true
    });

    // Add animation properties
    function setAnimation(items, nameAnim, speedAnim = 0) {
        if (Array.from(items).length === 0) {
            items.style.animation = nameAnim;
            items.style.animationDuration = `${speedAnim}s`;
            return null;
        }
        items = Array.from(items);
        let index = 0;
        let interval = setInterval(() => {

            if (index >= items.length - 1) clearInterval(interval);
            items[index].style.animation = nameAnim;
            items[index].style.animationDuration = `${speedAnim}s`;
            index++;
        }, speedAnim * 1000)
    }

    function isScrolledIntoView(elem, viewFull = false) {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $(elem).offset().top;
        let elemBottom = elemTop + $(elem).height();

        // Show coords
        // console.log(`
        // Top and bottom of document: ${docViewTop} : ${docViewBottom}
        // Top and bottom of element: ${elemTop} : ${elemBottom}
        // `)

        if (viewFull) {
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        } else {
            return ((docViewBottom >= elemTop));
        }
    }

    // Open menu
    document.querySelector('.menu-btn').onclick = () => {
        document.querySelector('.open-menu').style.display = 'block';
        let menuList = document.querySelector('.menu-list').querySelectorAll('li');
        setAnimation(menuList, 'pulse', 0.3);
    }
    // Close menu
    document.querySelector('.close-btn').onclick = (item) => {
        document.querySelector('.open-menu').style.display = 'none';
    }

    window.addEventListener('scroll', () => {
        // Animate indicators
        const indicators = document.querySelector('.indicators');
        let isVisible = isScrolledIntoView(indicators, true);
        if (isVisible) setAnimation($('.indicators-item'), 'rubberBand', 0.5);
    });

    window.addEventListener('scroll', () => {
        // Animate speed block
        const speedBlock = document.querySelector('.speed-block');
        let isVisible = isScrolledIntoView(speedBlock);
        if (isVisible) setAnimation(speedBlock, 'fadeInLeft', 1);
    });

    window.addEventListener('scroll', () => {
        // Animate design-text
        const designText = document.querySelectorAll('.design-text p');
        let isVisible = isScrolledIntoView(designText);
        if (isVisible) setAnimation(designText, 'pulse', 0.5);
    });

    window.addEventListener('scroll', () => {
        // Animate footer btn
        const footerBtn = document.querySelectorAll('footer a');
        let isVisible = isScrolledIntoView(footerBtn);
        if (isVisible) setAnimation(footerBtn, 'fadeInLeft', 0.5);
    });
});