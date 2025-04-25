import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector('.disclaimer > a');
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const parkInfoTemplate = (info) => {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const heroBanner = document.querySelector('.hero-banner__title');
heroBanner.innerHTML = parkInfoTemplate(parkData);

const title = document.querySelector('head > title');
title.innerHTML = parkData.fullName;

const heroImageElement = document.querySelector('.hero-banner > img');
const heroImageUrl = parkData.images[0].url;
heroImageElement.src = heroImageUrl;
