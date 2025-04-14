export const buildAd = (ad) => {
    let adView = `
            <p>${ad.name}</p>
            <p>${ad.description}</p>
            <p>${ad.price}€ - ${ad.state}</p>
            <p>---------</p>
        `
    return adView
}