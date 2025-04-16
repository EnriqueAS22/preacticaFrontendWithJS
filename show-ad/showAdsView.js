export const buildAd = (ad) => {
    
    let adView = `
            <p>${ad.name}</p>
            <p>${ad.description}</p>
            <p>${ad.price}€ - ${ad.state}</p>
            <p>---------</p>
        `
    return adView
}

export const buildNoAdsAdvice = () => {
    return '<h3>No hay anuncios disponibles de momento</h3>'
}