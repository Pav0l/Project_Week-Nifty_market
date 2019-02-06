class Stats {
    constructor(stat) {
        // grab stats item
        this.stat = stat;
        // grab its text value
        this.text = this.stat.textContent;
        // grab its datatype
        this.dataValue = this.stat.dataset.value;        
        // define the starting point for counter
        let counter = 0;

        // add eventlistener with callback that will set setInterval on method
        // setInterval will repeadetly calls this.startCounter function counter >= this.dataValue
        statsElement.addEventListener('click', () => {        
        let startInt = setInterval(() => {
            counter += 1;
            this.startCounter(counter);
            if (counter >= parseInt(this.dataValue)) {
                clearInterval(startInt);
            }
        }, 0.01) 
      });
    }
    
    // pass in the counter value as a text value to be displayed on page
    startCounter(value) {
        this.stat.textContent = value;
    }
}

let statsElement = document.querySelector('.stats-section');

let countUpItems = document.querySelectorAll('span[data-count="countUp"]').forEach(stat => new Stats(stat));
