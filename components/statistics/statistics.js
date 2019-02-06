class Stats {
    constructor(stat) {

        this.stat = stat;
        
        this.text = this.stat.textContent;

        this.dataValue = this.stat.dataset.value;

      // setInterval will repeadetly calls this.toggleContent function UNTIL WHEN? If counter > this.text
      statsElement.addEventListener('click', () => {        
        setInterval(() => {
            // console.log(parseInt(this.dataValue));
            counter += 100;
            this.toggleContent(counter);
            if (counter > parseInt(this.dataValue)) {
                console.log('clearinterval happend')
                clearInterval();
                // counter = 0;
            }
        }, 1000) 
      });

    }
    
    toggleContent(value) {
        // this.stat.textContent = value;  // UNCOMMENT THIS OUT TO MAKE IT WORK      
    }
}

let counter = 0;

let statsElement = document.querySelector('.stats-section');

let countUpItems = document.querySelectorAll('span[data-count="countUp"]');
countUpItems.forEach(stat => new Stats(stat));
