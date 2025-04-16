import { createAd } from "./createAdModel.js";

export const createAdController = (form) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const adNameElement = form.querySelector('#ad-name');
        const adName = adNameElement.value;

        const adDescriptionElement = form.querySelector('#ad-description');
        const adDescription = adDescriptionElement.value;

        const adPriceElement = form.querySelector('#ad-price');
        const adPrice = adPriceElement.value;

        const adStateElement = form.querySelector('#ad-state');
        const adState = adStateElement.value;

        try {
            await createAd(adName, adDescription, adPrice, adState)
            setTimeout(() => {
                window.location = '/';
            }, 2000)
        } catch (error) {
            alert(error.message)
        }
    })
}