
window.onload = function getLocalStorage() {
    if (localStorage.getItem('topAuthor') !== null) {         
        console.log('creating new div');
        const newDiv = document.createElement('div');
        newDiv.classList.add('author-style');
        newDiv.innerText = JSON.parse(localStorage.getItem('topAuthor'));
        document.querySelector('.top-author').appendChild(newDiv);            
    }
}
