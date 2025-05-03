import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

const setHeaderInfo = (data) => {
    const heroBanner = document.querySelector('.hero-banner__title');
    heroBanner.innerHTML = parkInfoTemplate(data);

    const title = document.querySelector('head > title');
    title.innerHTML = data.fullName;

    const heroImageElement = document.querySelector('.hero-banner > img');
    const heroImageUrl = data.images[0].url;
    heroImageElement.src = heroImageUrl;
}

function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

const setHeaderFooter = (data) => {
    setFooter(data);
    setHeaderInfo(data);
}

export default setHeaderFooter;
