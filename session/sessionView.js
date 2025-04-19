export const buildUnauthorizedSession = () => {
    return `
        <ul class="navbar-nav">
            <a class="nav-link disable" href="./login.html">Login</a>
            <a class="nav-link disable" href="./register.html">Registro</a>
        </ul>
    `;
}

export const buildAuthorizedSession = () => {
    return `
        <a href="./create-ad.html">Crear Anuncio</a>
        <button class="logout">Cerrar sesión</button>
    `;
}