import { buildNotification } from "./notificationsView.js";

export function notificationsController(notifications){
  
    const removeNotification = (newNotification) => {
        newNotification.remove();
    }

    const showNotification = (message, type = 'error') => {
        const newNotification = document.createElement('div');
        newNotification.classList.add('notification')
        newNotification.classList.add(type)
        newNotification.innerHTML = buildNotification(message, type)

        notifications.appendChild(newNotification)
    
        setTimeout(() => {
            removeNotification(newNotification)
        }, 2000);
    }

    return {
        showNotification
    }
}