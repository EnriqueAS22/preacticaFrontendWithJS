import { adDetailController } from "./ad-detail/adDetailController.js";

document.addEventListener("DOMContentLoaded", () => {

    // fuera del controlador -  sacar id de la url
    const searchParams = new URLSearchParams(window.location.search);
    const adId = searchParams.get("id");

    // fuera del controlador - gestionar id inexistente
    if (adId) {
        const adContainer = document.querySelector(".ad-container")
        // ejecutar un controlador
        adDetailController(adContainer, adId)
    } else {
        window.location = '/'
    }
})