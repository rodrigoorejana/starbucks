import { createHeader } from "./utils/createHeader.js";
import { createFooter } from "./utils/createFooter.js";

// DOM Elements
const root = document.getElementById("root");
const header = createHeader();
const main = document.createElement("main");
const footer = createFooter();

// Appending Elements
root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);


// Creating elements
const banner = document.createElement("div");
const img = document.createElement("img");
const communique =  document.createElement("div");
const comuParagraph = document.createElement("p"); 
const section1 = document.createElement("section");
const allitens = document.createElement("div");
const column1 = document.createElement("div");
const column1h1 = document.createElement("h1");
const column1p = document.createElement("p");
const column1btn = document.createElement("button");
const column2 = document.createElement("div");
const bannercolumn2 = document.createElement("img");
const section2 = document.createElement("section");
const firstcolumnsec2 = document.createElement("div");
const bannerfrstc2 = document.createElement("img");
const secondcolumnsec2 = document.createElement("div");
const allitens2 = document.createElement("div");
const secondcolumnsec2h1 = document.createElement("h1");
const secondcolumnsec2p = document.createElement("p");
const secondcolumnsec2btn = document.createElement("button");
const section3 = document.createElement("section");
const firstcolumnsec3 = document.createElement("div");
const allitens3 = document.createElement("div");
const firstcolumnsec3h1 = document.createElement("h1");
const firstcolumnsec3p = document.createElement("p");
const firstcolumnsec3btn = document.createElement("button");
const secondcolumnsec3 = document.createElement("div");
const secondcolumnsec3banner = document.createElement("img");

// Setting attributes
banner.setAttribute("id", "banner");
img.setAttribute("id", "banner-img");
img.setAttribute("src", "./assets/images/banner.jpg");
communique.setAttribute("id", "communique");
comuParagraph.setAttribute("id", "comuParagraph");
comuParagraph.textContent = "“Comunicado encerramento do Programa Starbucks Rewards, Starbucks Card e aplicativo Starbucks Brasil.”";
section1.setAttribute("id", "section1");
column1.setAttribute("id", "column1");
allitens.setAttribute("id", "allitens");
column1h1.textContent = "Uma surpresa refrescante para você";
column1p.textContent = "Conheça nossa linha de Cold Brew e Refreshers™";
column1btn.textContent = "Saiba mais";
column1btn.setAttribute("href", "#menu-list");
column2.setAttribute("id", "column2");
bannercolumn2.src = "./assets/images/bannercolumn2.png";
bannercolumn2.alt = "bannercolumn2";
section2.setAttribute("id", "section2");
firstcolumnsec2.setAttribute("id", "firstcolumnsec2");
bannerfrstc2.src = "./assets/images/guatemala.jpg";
bannercolumn2.alt = "bannercolumn2";
secondcolumnsec2.setAttribute("id", "secondcolumnsec2");
allitens2.setAttribute("id", "allitens2");
secondcolumnsec2h1.textContent = "Coisas boas estão acontecendo";
secondcolumnsec2p.textContent = "Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos."
secondcolumnsec2btn.textContent = "Saiba mais";
secondcolumnsec2btn.setAttribute("href", "#responsabilidade");
section3.setAttribute("id", "section3");
firstcolumnsec3.setAttribute("id", "firstcolumnsec3");
allitens3.setAttribute("id","allitens3");
firstcolumnsec3h1.textContent = "Histórias e Notícias Starbucks";
firstcolumnsec3p.textContent = "Fique por dentro das novidades e conheça mais sobre nossas iniciativas.";
firstcolumnsec3btn.textContent = "Saiba mais";
secondcolumnsec3.setAttribute("id", "secondcolumnsec3");
secondcolumnsec3banner.src = "./assets/images/team.jpg";
secondcolumnsec3banner.alt = "banner-team";



// Appending elements
main.appendChild(banner);
banner.appendChild(img);
main.appendChild(communique);
communique.appendChild(comuParagraph);
main.appendChild(section1);
section1.append(column1);
column1.appendChild(allitens);
allitens.appendChild(column1h1);
allitens.appendChild(column1p);
allitens.appendChild(column1btn);
section1.appendChild(column2);
column2.appendChild(bannercolumn2);
main.appendChild(section2);
section2.appendChild(firstcolumnsec2);
firstcolumnsec2.appendChild(bannerfrstc2);
section2.appendChild(secondcolumnsec2);
secondcolumnsec2.appendChild(allitens2);
allitens2.appendChild(secondcolumnsec2h1);
allitens2.appendChild(secondcolumnsec2p);
allitens2.appendChild(secondcolumnsec2btn);
main.appendChild(section3);
section3.appendChild(firstcolumnsec3);
firstcolumnsec3.appendChild(allitens3);
allitens3.appendChild(firstcolumnsec3h1);
allitens3.appendChild(firstcolumnsec3p);
allitens3.appendChild(firstcolumnsec3btn);
section3.appendChild(secondcolumnsec3);
secondcolumnsec3.appendChild(secondcolumnsec3banner);