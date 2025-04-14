import { loaderController } from "./loader/loaderController.js"
import { showAdsController } from "./show-ad/showAdsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ads-container")
    const loader = document.querySelector(".loader")
    const { show, hide } = loaderController(loader)

    container.addEventListener('load-ads-started', () => {
        show()
    })
    container.addEventListener('load-ads-finished', () => {
        hide()
    })

    showAdsController(container)
})