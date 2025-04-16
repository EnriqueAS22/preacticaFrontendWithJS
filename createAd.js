import { createAdController } from "./create-ad/createAdController.js";

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location = '/login.html'
    }

    const createAdForm = document.querySelector('form')
    createAdController(createAdForm)
})