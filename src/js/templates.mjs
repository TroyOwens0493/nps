export const footerTemplate = (data) => {
    // Find the mailing address
    const mailing = data.addresses.find(
        (address) => address.type === "Mailing"
    );

    // Find the voice phone number
    const voiceNumberInfo = data.contacts.phoneNumbers.find(
        (number) => number.type === "Voice"
    );
    const voiceNumber = voiceNumberInfo ? voiceNumberInfo.phoneNumber : '';

    return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voiceNumber}</p>
  </section>`;
};

export const mediacardTemplate = (info) => {
    return `<div class="media-card">
                <a href="${info.link}">
                    <img src="${info.image}">
                    <h3 class="headline">${info.name}</h3>
                </a>
                <p>${info.description}</p>
            </div>`;
}

export const introTemplate = (info) => {
    return `<h1>${info.name}</h1>
            <p>${info.description}</p>`;
}

export const parkInfoTemplate = (info) => {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}
