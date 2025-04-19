export const buildAdDetailView = (ad) => {

    let imageHtml = '';

    if (ad.image) {
        imageHtml = `<img src="${ad.image}" alt="Imagen del anuncio" style="max-width: 25%; height: auto; margin-bottom: 10px;">`;
    }

    let adView = `
            ${imageHtml}
            <p>${ad.user.name}</p>
            <p>${ad.name}</p>
            <p>${ad.description}</p>
            <p>${ad.price}€ - ${ad.state}</p>
            <p>---------</p>
        `
    return adView
}

export const buildRemoveAdButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Borrar anuncio';

    return removeButton;
}