class ItemLink {
    constructor(link) {
        // grab NodeList item = button link
        this.link = link;
        // grab the datatype of button link
        this.itemData = this.link.dataset.item;
        
        // Check to see if this.itemData is equal to 'all'
        if(this.itemData === 'all'){
            // If yes, select all cards
            this.cards = document.querySelectorAll('.card-wrapper');
        } else {
            // else, select the cards with matching this.itemData values
            this.cards = document.querySelectorAll(`.card-wrapper[data-item="${this.itemData}"]`);
        }

        // Map over the NodeList and convert each element into a new instance of the ItemCard class
        this.cards = Array.from(this.cards).map(card => new ItemCard(card));

        this.link.addEventListener('click', () => this.selectTab());
    }

    selectTab() {
        // Select all elements with the .ov-link class on them
        const links = document.querySelectorAll('.ov-link');
        // Iterate through the NodeList removing the .link-select class from each element
        links.forEach(link => link.classList.remove('link-select'));
            
        // Select all of the elements with the .card-wrapper class on them
        const cards = document.querySelectorAll('.card-wrapper');
    
        // Iterate through the NodeList setting the display style to 'none'
        cards.forEach(card => card.style = "display: none");
        
        // Add a class of ".link-select" to this.link
        this.link.classList.add('link-select');
      
        // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        this.cards.forEach(card => card.selectItemCard());
    }
}


class ItemCard {
  constructor(cardItem){
    // Assign this.cardItem to the cardItem DOM reference
    this.cardItem = cardItem;
  }
  selectItemCard(){
    // Update the style of this.cardItem to display = "flex"
    this.cardItem.style = 'display: flex;';
  }
}

// grab all elements with .ov-link class into NodeList and iterate over it creating new class for every element
let overviewLinks = document.querySelectorAll('.ov-link').forEach(link => new ItemLink(link));

