
window.onload = function getLocalStorage() {
    if (localStorage.getItem('topAuthor') !== null) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('author-style');
        newDiv.innerText = JSON.parse(localStorage.getItem('topAuthor'));
        document.querySelector('.top-author').appendChild(newDiv);            
    }
}
