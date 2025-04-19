import { createAd } from "./createAdModel.js";

export const createAdController = (form) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const adImgElement = form.querySelector('#ad-image');
        const adImg = adImgElement.files[0];

        const adNameElement = form.querySelector('#ad-name');
        const adName = adNameElement.value;

        const adDescriptionElement = form.querySelector('#ad-description');
        const adDescription = adDescriptionElement.value;

        const adPriceElement = form.querySelector('#ad-price');
        const adPrice = adPriceElement.value;

        const adStateElement = form.querySelector('#ad-state');
        const adState = adStateElement.value;

        try {
            const imgBase64 = await toBase64(adImg)

            await createAd(adName, adDescription, adPrice, adState, imgBase64)
            setTimeout(() => {
                window.location = '/';
            }, 2000)
        } catch (error) {
            alert(error.message)
        }
    })
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}