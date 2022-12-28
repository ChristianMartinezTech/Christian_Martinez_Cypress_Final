homeLocators = {
    carousel: '.active > .d-block',
    carouselNextButton: '.carousel-control-next-icon',
    carouselPrevButton: '.carousel-control-prev-icon',
}

export class Homepage {

    goHomepage() {
        return cy.visit('https://www.demoblaze.com/');
    }

    carousel() {
        return cy.get(homeLocators.carousel);
    }

    carouselNextButton() {
        return cy.get(homeLocators.carouselNextButton);
    }

    carousePrevButton() {
        return cy.get(homeLocators.carouselPrevButton);
    }
}