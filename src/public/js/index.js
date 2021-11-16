console.log('index.js');

// <script src="./js/index.js" async defer> 
// async after 'DOMContentLoaded'
// defer before 'DOMContentLoaded'
window.addEventListener('DOMContentLoaded', () => {
    console.log('ready');
});

window.addEventListener("load", function(event) {
    console.log("load");
});