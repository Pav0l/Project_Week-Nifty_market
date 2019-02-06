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
    { name: "Wizard Kittie", author: "Cool Author", cost: "$30", game: "Kittie", featured: true },
    { name: "Shark attack!", author: "Mega Author", cost: "$45", game: "Fortnite", featured: true },
    { name: "Coolio costume", author: "Johny Pasta", cost: "$15", game: "Fortnite", featured: false },
    { name: "Adorable Meow", author: "Mr. Meow", cost: "$11", game: "Kittie", featured: false },
    { name: "Squid them up!", author: "Aquarius Nauticus", cost: "$30", game: "Fortnite", featured: false },
    { name: "Bender Wannabe", author: "Gear Head", cost: "$5", game: "Robot", featured: false },
    { name: "Mouse Catcher", author: "Mr. Meow", cost: "$23", game: "Kittie", featured: false },
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

// Create new div with updated Top Author - author with the most items on market.
const formDiv = document.querySelector('.form-container');
const updateTopAuthor = (cb) => {
    const newDiv = document.createElement('div');
    newDiv.innerText = `Top author is ${cb}`;
    formDiv.appendChild(newDiv);
}

// grab all values from user form into variables
const iname = document.querySelector('input[name="iname"]');
const aname = document.querySelector('input[name="aname"]');
const icost = document.querySelector('input[name="icost"]');
const igame = document.querySelector('input[name="igame"]');

// grab "CREATE" button to create new Item
const createBtn = document.querySelector('#btn-create');
//  add CLICK listener and callback to create new item
createBtn.addEventListener('click', (e) => {
    createNewItem(iname.value, aname.value, icost.value, igame.value);
    updateTopAuthor(topContributor(contributors));
    e.preventDefault();
});
