export async function getAds() {
    let ads = []

    try {
        const response = await fetch('http://localhost:8000/api/ads')
        ads = await response.json()
    } catch (error) {
        throw new Error("No existen anuncios en este momento, intentelo de nuevo más tarde")
    }

    return ads
}