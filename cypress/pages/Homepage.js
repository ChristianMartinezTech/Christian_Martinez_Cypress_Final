/// <reference types='cypress' />

// Selectors
const elements = {
    carousel: '.active > .d-block',
    carouselNextButton: '.carousel-control-next',
    carouselPrevButton: '.carousel-control-prev',
    carouselSliding: '.carousel-item-left',
    carouselFirstSlide: '[alt="First slide"]',
    carouselSecondSlide: '[alt="Second slide"]',
    carouselThridSlide: '[alt="Third slide"]',
    carouselClass: 'carousel-item-next'
}

module.exports = {
    elements
};