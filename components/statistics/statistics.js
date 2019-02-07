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

        // add CLICK eventlistener with callback that will set setInterval on method
        // setInterval will repeadetly calls this.startCounter function counter >= this.dataValue
        /*
        statsElement.addEventListener('click', () => {        
            let startInt = setInterval(() => {
                counter += 1;
                this.startCounter(counter);
                if (counter >= parseInt(this.dataValue)) {
                    clearInterval(startInt);
                }
            }, 0.01) 
        });
        */

        // This event listener can be performance heavy.
        // if (window.scrollY / bodyHeight > 0.50) {}
            window.addEventListener("scroll", (event) => {
                let scroll = window.scrollY;
                // Calculate the scroll bar position divided by window height. 
                // 0.57 is ratio where the elements sits on desktop screen
                if (scroll / bodyHeight > 0.57 && parseInt(this.stat.textContent) <= this.text) {
                    // setInterval will repeadetly calls this.startCounter 
                    let startInt = setInterval(() => {
                        counter += 1;
                        this.startCounter(counter);
                        // setInterval stops if the counter reaches dataset constant
                        if (counter >= parseInt(this.dataValue)) {
                            clearInterval(startInt);
                        }
                    }, 0.01)
                }
            });



    }
    
    // pass in the counter value as a text value to be displayed on page
    startCounter(value) {
        this.stat.textContent = value;
    }
}

let statsElement = document.querySelector('.stats-section');

let bodyHeight = document.querySelector('body').clientHeight;

let countUpItems = document.querySelectorAll('span[data-count="countUp"]').forEach(stat => new Stats(stat));
