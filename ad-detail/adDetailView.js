export const buildAdDetailView = (ad) => {
    let adView = `
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