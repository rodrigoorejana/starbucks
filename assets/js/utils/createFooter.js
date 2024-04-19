import { createNavLink } from "./createNavLink.js";
export function createFooter() {
    const footer = document.createElement("footer");
    const copyright = document.createElement("div");
    const copyrighta = createNavLink("Desenvolvido por Rodrigo Orejana da Costa", "https://github.com/rodrigoorejana");

    copyright.setAttribute("id", "copyright");
    footer.appendChild(copyright);
    copyright.appendChild(copyrighta);

    return footer;
}