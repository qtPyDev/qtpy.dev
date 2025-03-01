


function createButton(name: string, linkPath: string) {
    const button = document.createElement("button");

    button.innerText = name;
    button.className = 'navbar-btn';
    button.addEventListener('click', () => {
        window.location.href = linkPath;
    });

    return button;
}


const navbar = document.getElementById("navbar");

if(navbar) {
    navbar.appendChild(createButton("home", "./index.html"));
    navbar.appendChild(createButton("projects", "https://github.com/qtPyDev"));
    navbar.appendChild(createButton("gallery", "https://qtpy.straw.page/gallery"));
    navbar.appendChild(createButton("contact", "./contact.html"));
    navbar.appendChild(createButton("about me", "./aboutme.html"));
};
