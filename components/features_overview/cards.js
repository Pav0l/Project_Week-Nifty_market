class CreateItem {
    constructor(name, author, cost, game, featured = false) {
        this.name = name;
        this.author = author;
        this.cost = cost;
        this.game = game;
        this.featured = featured;
    }
}

const itemsList = [
    { name: "Glork", author: "Cool Author", cost: "$30", game: "Alien", featured: true },
    { name: "Zork", author: "Mega Author", cost: "$45", game: "Alien", featured: true },
    { name: "King Frank", author: "Johny Pasta", cost: "$15", game: "Knights", featured: false },
    { name: "Loyal Stu", author: "Mr. Hook", cost: "$11", game: "Pirates of the Sea", featured: false },
    { name: "Adorable Green", author: "george251", cost: "$30", game: "Knights", featured: false },
    { name: "Bender Wannabe", author: "Gear Head", cost: "$5", game: "Robot", featured: false },
    { name: "Radio Bird", author: "Mr. Hook", cost: "$23", game: "Pirates of the Sea", featured: false },
    { name: "Frank Nogoodson", author: "johny587", cost: "$5", game: "Robot", featured: false },
];

// Create new Item and update the itemList array
function createNewItem(name, author, cost, game) {
    return itemsList.push(new CreateItem(name, author, cost, game));
}

// Create an array of contributors
const contributors = () => {
    const contributorsList = itemsList.map(item => item.author);
    return contributorsList
}

// Find top contributor
const topContributor = cb => {
    // store callback value (contributors array) in variable
    let contributorArr = cb();
    
    // create new object with key: value pairs being 'author':'items count'
    const contributorObj = contributorArr.reduce((obj, val) => {
        // define 'key'property in new array, if not defined
        obj[val] = obj[val] || 0;
        // increase count of "value" for that key
        obj[val]++;
        return obj;
        // set empty object as an initial value
    }, {});

    let author;
    // Create array from contributorObj and reduce it to find top contributor
    Object.keys(contributorObj).reduce((acc, item) => {        
        return author = contributorObj[item] > contributorObj[acc] ? item : acc;
    });
    return author;
}


// Create new table line with updated items of user
const updateItemTable = (name, cost, game) => {
    const tableEl = document.querySelector('table');
    // create table lines
    const newTr = document.createElement('tr');
    const newName = document.createElement('td');
    const newCost = document.createElement('td');
    const newGame = document.createElement('td');
    // add text to table lines
    newName.innerText = name;
    newCost.innerText = cost;
    newGame.innerText = game;
    // append lines to existing table
    newTr.appendChild(newName);
    newTr.appendChild(newCost);
    newTr.appendChild(newGame);
    tableEl.appendChild(newTr);
}


// grab all values from user form into variables
const iname = document.querySelector('input[name="iname"]');
const aname = document.querySelector('input[name="aname"]');
const icost = document.querySelector('input[name="icost"]');
const igame = document.querySelector('input[name="igame"]');

//  add CLICK listener
if (document.querySelector('#btn-create') !== null) {
    document.querySelector('#btn-create').addEventListener('click', (e) => {
        // Create new Item object via CreateItem class and push it to itemList array
        createNewItem(iname.value, aname.value, icost.value, igame.value);
        // Update user table with item
        updateItemTable(iname.value, icost.value, igame.value);
        alert(`Congrats ${aname.value}! ${iname.value} was added to the market!`)
        document.querySelector('#userForm').reset();
        e.preventDefault();
    });
}

document.querySelector('a[href="./index.html"').addEventListener('click', e => {
    // Save topContributors string in localStorage to pick up for index.html
    localStorage.setItem('topAuthor', JSON.stringify(topContributor(contributors)));
    window.location.replace('../index.html');
})
