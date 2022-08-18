import { createDiv } from "./initWebsite";

export default function loadHome() {
    const main = document.querySelector("main");
    main.replaceChildren(); //Deleting all current children

    main.setAttribute("id", "home");
    const homeText = createDiv("home-text");

    const h1 = document.createElement("h1");
    h1.textContent = "Steak House";
    const h3 = document.createElement("h3");
    h3.textContent = "You couldn't be more stoked";
    homeText.appendChild(h1);
    homeText.appendChild(h3);

    main.appendChild(homeText);

    const booking = createDiv("booking");
    const bookBtn = document.createElement("button");
    bookBtn.setAttribute("class", "book-btn");
    bookBtn.textContent = "Book Now";
    booking.appendChild(bookBtn);

    main.appendChild(booking);
}
