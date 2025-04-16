import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js";
import { showAdsController } from "./show-ad/showAdsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ads-container")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    container.addEventListener('load-ads-started', () => {
        show()
    })
    container.addEventListener('load-ads-finished', () => {
        hide()
        showNotification('ya he terminado de cargar los anuncios')
    })
    container.addEventListener('load-ads-error', (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage)
    })

    showAdsController(container)
})