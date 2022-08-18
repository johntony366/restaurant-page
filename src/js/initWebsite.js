import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";

function createDiv(className) {
    const div = document.createElement("div");
    div.setAttribute("class", className);

    return div;
}

function setActiveButton() {
    const btns = document.querySelectorAll('.nav-btn');

    btns.forEach(btn => {
        if (btn != this) {
            btn.classList.remove('active-btn');
        }
    });

    this.classList.add('active-btn');
}

function createHeader() {
    const nav = document.createElement("nav");
    nav.setAttribute("class", "navbar");

    const tabs = document.createElement("ul");
    tabs.setAttribute("class", "tabs");
    nav.appendChild(tabs);

    function createNavEntry(className) {
        const li = document.createElement("li");

        const btn = document.createElement("button");
        btn.setAttribute("class", className);
        btn.textContent = className[0].toUpperCase() + className.slice(1);

        btn.addEventListener('click', (e) => {
            setActiveButton();
            switch (e.target.textContent) {
                case "Home":
                    loadHome();
                    break;
                case "Menu":
                    loadMenu();
                    break;
                case "Contant":
                    loadContact();
                    break;
            }
        })
        
        li.appendChild(btn);

        return li;
    }

    tabs.appendChild(createNavEntry("home-btn"));
    tabs.appendChild(createNavEntry("menu-btn"));
    tabs.appendChild(createNavEntry("contact-btn"));

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.setAttribute("class", "footer");

    const copyrightNotice = document.createElement("span");
    copyrightNotice.textContent = "Copyright © 2022 johntony366";
    footer.appendChild(copyrightNotice);

    const ghIcon = document.createElement("a");
    ghIcon.href = "https://github.com/johntony366";
    ghIcon.appendChild(createDiv("gh-icon"));
    footer.appendChild(ghIcon);

    return footer;
}

function createBg() {
    const bg = document.createElement("div");
    bg.setAttribute("class", "bg-image");

    return bg;
}

function createBadge() {
    const badge = document.createElement("div");
    badge.setAttribute("class", "badge");

    return badge;
}

function initWebsite() {
    document.body.appendChild(createBg());
    document.body.appendChild(createBadge());

    const content = document.querySelector("#content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.querySelector('.home-btn').classList.add('active-btn');
    loadHome();
}

export default initWebsite;
