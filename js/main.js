const botaoTema = document.querySelector("#botao-tema");

// Verificar se o botão existe na página
if (botaoTema) {
    // Recuperar o tema guardado no navegador
    const temaGuardado = localStorage.getItem("tema");

    // Aplicar o tema guardado
    if (temaGuardado === "claro") {
        document.documentElement.setAttribute("data-tema", "claro");
        botaoTema.textContent = "🌙 Modo escuro";
        botaoTema.setAttribute("aria-label", "Activar modo escuro");
    }

    // Alternar entre os temas
    botaoTema.addEventListener("click", function () {
        const temaActual =
            document.documentElement.getAttribute("data-tema");

        if (temaActual === "claro") {
            document.documentElement.removeAttribute("data-tema");
            localStorage.setItem("tema", "escuro");

            botaoTema.textContent = "☀️ Modo claro";
            botaoTema.setAttribute("aria-label", "Activar modo claro");
        } else {
            document.documentElement.setAttribute("data-tema", "claro");
            localStorage.setItem("tema", "claro");

            botaoTema.textContent = "🌙 Modo escuro";
            botaoTema.setAttribute("aria-label", "Activar modo escuro");
        }
    });
}

const botaoMenu = document.querySelector("#botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");

if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("click", function () {
        const menuAberto =
            menuPrincipal.style.display === "flex";

        if (menuAberto) {
            menuPrincipal.style.display = "none";
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        } else {
            menuPrincipal.style.display = "flex";
            botaoMenu.setAttribute("aria-expanded", "true");
            botaoMenu.setAttribute("aria-label", "Fechar menu");
        }
    });

    menuPrincipal.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 600) {
                menuPrincipal.style.display = "none";
                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute("aria-label", "Abrir menu");
            }
        });
    });
}