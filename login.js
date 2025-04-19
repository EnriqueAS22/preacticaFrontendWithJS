import { loginController } from "./login/loginController.js"
import { notificationsController } from "./notifications/notificationsController.js"
 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form")

    const notifications = document.querySelector("#notifications");

    const { showNotification } = notificationsController(notifications)
  
    loginForm.addEventListener("register-error", (event) => {
        const message = event.detail;
        showNotification(message)
    })

    loginForm.addEventListener("register-ok", (event) => {
        const message = event.detail.message;
        const type = event.detail.type;
        showNotification(message, type)
    })

    loginController(loginForm)
})