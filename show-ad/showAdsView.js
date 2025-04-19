export const buildAd = (ad) => {
    
    let imageHtml = '';

    if (ad.image) {
        imageHtml = `<img src="${ad.image}" alt="Imagen del anuncio" style="max-width: 25%; height: auto; margin-bottom: 10px;">`;
    }

    let adView = `
        <div class="card p-3 m-3 shadow-sm">
            ${imageHtml}
            <h5>${ad.name}</h5>
            <p>${ad.description}</p>
            <p><strong>${ad.price}€</strong> - Estado: ${ad.state}</p>
        </div>
        `
    return adView
}

export const buildNoAdsAdvice = () => {
    return '<h3>No hay anuncios disponibles de momento</h3>'
}