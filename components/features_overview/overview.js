class ItemLink {
    constructor(link) {
        // grab NodeList item = button link
        this.link = link;
        // grab the datatype of button link
        this.itemData = this.link.dataset.item;
        
        // Check to see if this.itemData is equal to 'all'
        if(this.itemData === 'all'){
            // If `all` is true, select all cards regardless of their data attribute values
            this.cards = document.querySelectorAll('.card-wrapper');
        } else {
            // else if `all` is false, only select the cards with matching this.itemData values
            this.cards = document.querySelectorAll(`.card-wrapper[data-item="${this.itemData}"]`);
        }

        // Map over the newly converted NodeList we just created in our if statement above. 
        // Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
        this.cards = Array.from(this.cards).map(card => new ItemCard(card));

        // Add a click event that invokes this.selectTab
        this.link.addEventListener('click', () => this.selectTab());
    }

    selectTab() {

        // Select all elements with the .tab class on them
        const links = document.querySelectorAll('.ov-link');
        // Iterate through the NodeList removing the .active-tab class from each element
        links.forEach(link => link.classList.remove('link-select'));
        
    
        // Select all of the elements with the .card class on them
        const cards = document.querySelectorAll('.card-wrapper');
    
        // Iterate through the NodeList setting the display style each one to 'none'
        cards.forEach(card => card.style = "display: none");
        
        // Add a class of ".active-tab" to this.tabElement
        this.link.classList.add('link-select');
      
        // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        this.cards.forEach(card => card.selectCard());
    }
}


class ItemCard {
  constructor(cardItem){
    // Assign this.cardItem to the cardItem DOM reference
    this.cardItem = cardItem;
  }
  selectCard(){
    // Update the style of this.cardItem to display = "flex"
    this.cardItem.style = 'display: flex;';
  }

}





let overviewLinks = document.querySelectorAll('.ov-link');
overviewLinks.forEach(link => new ItemLink(link));
// console.log(overviewLinks);