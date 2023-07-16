// Na ovoj nacin probrav vo console dev tools i funkcionirashe

let googleLogo = document.querySelector('.lnXdpd');
googleLogo.src = 'https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png';
googleLogo.srcset = '';

let searchButton = document.querySelector('input[name="btnK"]');
let newButton = document.createElement('input');
searchButton.parentNode.replaceChild(newButton, searchButton);

newButton = document.querySelector('input[name="btnK"]');
newButton.value = 'Yahooo!';