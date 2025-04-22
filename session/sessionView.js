export const buildUnauthorizedSession = () => {
    return `
        <div class="navbar-nav">
            <a class="nav-link disable" href="./login.html">Login</a>
            <a class="nav-link disable" href="./register.html">Register</a>
        </div>
    `;
}

export const buildAuthorizedSession = () => {
    return `
        <div class="navbar-nav">
            <a class="nav-link disable" href="./create-ad.html">Create Ad</a>
            <button class="logout">Log out</button>
        </div>    
    `;
}