import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./loginModel.js";

export function loginController(loginForm) {
  
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userEmailElement = loginForm.querySelector("#email");
        const passwordElement = loginForm.querySelector("#password");
        
        const userEmail = userEmailElement.value;
        const password = passwordElement.value;
        

        // 2- validar el mail
        const emailRegExp = new RegExp(REGEXP.mail);
        if (!emailRegExp.test(userEmail)) {
            alert('Email format is not valid')
        } else {
            handleLoginUser(userEmail, password, loginForm)
        }

    })

    const handleLoginUser = async (userEmail, password, loginForm) => {
        try {
            const token = await loginUser(userEmail, password);
    
            localStorage.setItem("token", token)
            const event = new CustomEvent("register-ok", {
                detail: {
                    message: 'User found',
                    type: 'success'
                }
            });
            loginForm.dispatchEvent(event)
            setTimeout(() => {
                window.location = '/'
            }, 2000);
        } catch (error) {
            const event = new CustomEvent("register-error", {
                detail: {
                    message: 'User not found',
                    type: 'error'
                }
            });
            loginForm.dispatchEvent(event)
        }
    }
}