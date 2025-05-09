export const buildAd = (ad) => {
    
    let imageHtml = '';

    if (ad.image) {
        imageHtml = `<img src="${ad.image}" alt="Imagen del anuncio" style="max-width: 100%; height: auto; margin-bottom: 10px;">`;
    }

    let adView = `
        <div class="card h-100">
            ${imageHtml}
            <div class="card-body">
                <h5 class="card-title">${ad.name}</h5>
                <p class="card-text">${ad.description}</p>
                <h3 class="card-text">${ad.state} - ${ad.price}€</h3>
            </div>
        </div>

        <br />
    `
    return adView
}

export const buildNoAdsAdvice = () => {
    return '<h3>There are no available ads right now.</h3>'
}