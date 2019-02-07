// On window load
window.onload = function getLocalStorage() {
    // check if 'topAuthor' is stored in browsers local storage
    if (localStorage.getItem('topAuthor') !== null) {
        // if yes, create new div and add style into it
        const newDiv = document.createElement('div');
        newDiv.classList.add('author-style');
        // pull the value of 'topAuthor' from local storage and parse it
        newDiv.innerText = JSON.parse(localStorage.getItem('topAuthor'));
        document.querySelector('.top-author').appendChild(newDiv);            
    }
}
