import { adDetailModel, getLoggedInUserInfo, removeAd } from "./adDetailModel.js"
import { buildAdDetailView, buildRemoveAdButton } from "./adDetailView.js"

export const adDetailController = async (adContainer, adId) => {

    const showRemoveAdButton = (adId) => {
        const removeButton = buildRemoveAdButton()
        adContainer.appendChild(removeButton)

        removeButton.addEventListener("click", () => {
            if (confirm("¿estás seguro de borrar el anuncio?")) {
                removeAd(adId)
                setTimeout(() => {
                    window.location = '/'
                }, 2000);
            }
        })
    }

    try {
        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = buildAdDetailView(adDetail)

        const user = await getLoggedInUserInfo();
        if (user.id === adDetail.userId) {
            showRemoveAdButton(adId)
        }
    } catch (error) {
        alert(error.message)
    }
    
}