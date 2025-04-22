export async function getAds() {
    let ads = []

    try {
        const response = await fetch('http://localhost:8000/api/ads')
        ads = await response.json()
    } catch (error) {
        throw new Error("There are no ads at the moment, please try again later.")
    }

    return ads
}