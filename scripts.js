const sideMenuButtons = document.querySelectorAll('.side-menu-button');
const midMenuButtons = document.querySelectorAll('.mid-menu-button');
const sections = document.querySelectorAll('.section');
const midMenus = document.querySelectorAll('.mid-menu-container')
const articles = document.querySelectorAll('article');

sideMenuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        // Remove the active class from all buttons and sections
        sideMenuButtons.forEach((button) => button.classList.remove('active'));
        sections.forEach((section) => section.classList.remove('active'));
        midMenus.forEach((midMenu) => midMenu.classList.remove('active'));

        // Set the clicked button and corresponding section to active
        sideMenuButtons[index].classList.add('active');
        sections[index].classList.add('active');
        midMenus[index].classList.add('active');
    });
});

midMenuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        // Remove the active class from all articles
        articles.forEach((article) => article.classList.remove('active'));

        // Set the corresponding article to active
        articles[index].classList.add('active');
    });
});

const iFrame = document.getElementsByClassName("colorétteembed");

// listen for messages from the iframe
window.addEventListener('message', event => {
    // check that the message came from the correct iframe
    if (event.source === iFrame.contentWindow) {
        // get the color parameter from the message data
        const colorParam = event.data.color;

        // set the background color of the article
        if (colorParam) {
            const article = document.getElementById('colorétte+');
            article.style.background = `linear-gradient(to bottom, #${colorParam}, #000000)`;
        }
    }
});
