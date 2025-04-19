export const buildUnauthorizedSession = () => {
    return `
        <div class="navbar-nav">
            <a class="nav-link disable" href="./login.html">Login</a>
            <a class="nav-link disable" href="./register.html">Registro</a>
        </div>
    `;
}

export const buildAuthorizedSession = () => {
    return `
        <div class="navbar-nav">
            <a class="nav-link disable" href="./create-ad.html">Crear Anuncio</a>
            <button class="logout">Cerrar sesión</button>
        </div>    
    `;
}