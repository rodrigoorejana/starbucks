import { createNavLink } from "./createNavLink.js";

export function createHeader() {
    const header = document.createElement("header");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const divheaderright = document.createElement("div");
    const btnhistory = createButton("https://historias.starbucks.com/br/", "./assets/images/sb-historias-logo.svg", "Starbucks Historias Logo");
    const btnstore = createButton("https://www.starbucks.com.br/lojas", "./assets/images/location-icon.png", "Encontre uma loja");
    const findstore = document.createElement("span");
    
    logo.src = "./assets/images/logo.svg";
    logo.alt = "brand-logo";

    const menuLink = createNavLink("MENU", "https://www.starbucks.com.br/menu-list");
    const nossoCafeLink = createNavLink("NOSSO CAFÉ", "https://www.starbucks.com.br/cafe");
    const impactoSocialLink = createNavLink("IMPACTO SOCIAL", "https://www.starbucks.com.br/responsabilidade");

    btnhistory.id = "btnhistory";
    btnstore.id = "btnstore";
    divheaderright.id = "divheaderright";
    btnstore.href = "https://www.starbucks.com.br/lojas";
    findstore.textContent = "Encontre uma loja";

    nav.appendChild(ul);
    ul.appendChild(menuLink);
    ul.appendChild(nossoCafeLink);
    ul.appendChild(impactoSocialLink);
    divheaderright.appendChild(btnhistory);
    divheaderright.appendChild(btnstore);
    divheaderright.appendChild(findstore); 
    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(divheaderright);

    return header;
}
function createButton(href, src, alt) {
    const button = document.createElement("a");
    const img = document.createElement("img");

    img.src = src;
    img.alt = alt;

    button.href = href;
    button.target = "_blank";

    button.appendChild(img);

    return button;
}


