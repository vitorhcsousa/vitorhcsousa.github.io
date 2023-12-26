"use strict";

/* Dependency: js-cookie plugin - Ref: https://github.com/js-cookie/js-cookie */

const modeToggler = document.getElementById('darkmode');
const documentBody = document.getElementsByTagName('body')[0];

function setThemeFromCookie() {
    documentBody.classList.add('dark-mode');
    modeToggler.checked = true; // toggle change
    Cookies.set('mode', 'dark-mode', { expires: 7 }); // Set cookies for 7 days 

    console.log('Dark mode set');
}

setThemeFromCookie();

modeToggler.addEventListener('change', () => {

    console.log(modeToggler.checked);

    if (modeToggler.checked) {
        documentBody.classList.add('dark-mode');
        //Set cookies for 7 days 
        Cookies.set('mode', 'dark-mode', { expires: 7 });

        console.log('change to dark mode');

    } else {
        documentBody.classList.remove('dark-mode');
        Cookies.remove('mode'); // Remove the cookie

        console.log('change to light mode');
    }
});