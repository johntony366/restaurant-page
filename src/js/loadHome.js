export default function loadHome() {
    const content = document.querySelector("#content");

    const section = createSection();
    content.appendChild(section);

    const introRow = section
        .appendChild(createDiv("container-lg"))
        .appendChild(
            createDiv("row justify-content-center align-items-center")
        );

    const introHeading = document.createElement("h1");

    introRow
        .appendChild(createDiv("col-md-5 text-center"))
        .appendChild(introHeading);

    introHeading.appendChild(createDiv("display-2", "Steak House"));
    introHeading.appendChild(
        createDiv("display-5 text-muted", "You couldn't be more stoked")
    );

    const introImage = document.createElement("img");

    introImage.setAttribute("id", "intro-img");
    introImage.setAttribute("alt", "picture of steak");
    introImage.setAttribute("class", "img-fluid d-none d-md-block");

    introRow
        .appendChild(createDiv("col-md-5 text-center"))
        .appendChild(introImage);
}

function createDiv(_class, text) {
    const div = document.createElement("div");
    div.setAttribute("class", _class);
    div.textContent = text;

    return div;
}

function createSection() {
    const section = document.createElement("section");
    section.setAttribute("id", "intro");
    content.appendChild(section);

    return section;
}
