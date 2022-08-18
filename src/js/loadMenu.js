import { createDiv } from "./initWebsite.js";
import brisket from '/src/assets/brisket.jpg';

function createMenuItem(dishName, imgSrc, imgAlt, description) {
    const menuItem = createDiv('menu-item');

    const menuItemHeading = document.createElement('h6');
    menuItemHeading.setAttribute('class', 'menu-item-heading');
    menuItemHeading.textContent = dishName;

    const menuItemImage = document.createElement('img');
    menuItemImage.setAttribute('class', 'menu-item-image');
    menuItemImage.src = imgSrc;
    menuItemImage.alt = imgAlt;

    const menuItemDescription = document.createElement('p');
    menuItemDescription.setAttribute('class', 'menu-item-description');
    menuItemDescription.textContent = description;

    menuItem.appendChild(menuItemHeading);
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}

export default function loadMenu() {
    const main = document.querySelector("main");
    main.replaceChildren(); //Deleting all current children

    main.setAttribute('id', 'menu');

    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
    main.appendChild(
        createMenuItem(
            "Brisket",
            brisket,
            "Smoked brisket",
            "A cut of meat from the breast or lower chest of beef or veal."
        )
    );
}
