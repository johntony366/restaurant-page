import { createDiv } from './initWebsite';
import wineClink from '/src/assets/wine-clink.jpg';

export default function loadContact() {
    const main = document.querySelector("main");
    main.replaceChildren(); //Deleting all current children

    main.setAttribute("id", "contact");

    const contactContainer = createDiv('contact-container');
    const callP = document.createElement('p');
    callP.textContent = "📞 Call us at +91 98765 43 210";
    const mailP = document.createElement('p');
    mailP.textContent = "✉️ Mail us at realrestaurant@gmail.com";
    const contactImg = document.createElement('img');
    contactImg.src = wineClink;
    contactImg.alt = "Two wine glasses being clinked"

    contactContainer.appendChild(callP);
    contactContainer.appendChild(mailP);
    contactContainer.appendChild(contactImg);

    main.appendChild(contactContainer);
}
