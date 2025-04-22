import { loaderController } from "./loader/loaderController.js"
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from "./session/sessionController.js";
import { showAdsController } from "./show-ad/showAdsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ads-container")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    const session = document.querySelector(".session")
    const { show, hide } = loaderController(loader)
    const { showNotification } = notificationsController(notifications)

    container.addEventListener('load-ads-started', () => {
        show()
    })
    container.addEventListener('load-ads-finished', () => {
        hide()
        showNotification('Ads loaded')
    })
    container.addEventListener('load-ads-error', (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage)
    })

    showAdsController(container)
    sessionController(session)
})