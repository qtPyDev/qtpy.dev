"use strict";
function createButton(name, linkPath) {
    const button = document.createElement("button");
    button.innerText = name;
    button.className = 'navbar-btn';
    button.addEventListener('click', () => {
        window.location.href = linkPath;
    });
    return button;
}
const navbar = document.getElementById("navbar");
if (navbar) {
    navbar.appendChild(createButton("Home", "./index.html"));
    navbar.appendChild(createButton("Projects", "https://github.com/qtPyDev"));
    navbar.appendChild(createButton("Gallery", "https://qtpy.straw.page/gallery"));
    navbar.appendChild(createButton("Contact", "./contact.html"));
    navbar.appendChild(createButton("About Me", "./aboutme.html"));
}
;
