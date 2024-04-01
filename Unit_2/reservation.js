
/* 
var reading = new Reading();

reading.type = type;
reading.timeframe = timeframe;
reading.slots = slots;
reading.reserved = reserved;

reading.checkAvailableSlots = function() {
    return this.slots - this.reserved;
};

*/

/* Create a class for my tarot reading sessions.*/


class Reading {
    constructor(type, timeframe, slots, reserved) {
    this.type = type;
    this.timeframe = timeframe;
    this.slots = slots;
    this.reserved = reserved;
    }

    /* Create the metgod for checking the slots availbe for specific tarot readings */
    checkAvailableSlots () {
        return this.slots - this.reserved;
    };
}



let ancestralReading = new Reading ('Ancestral','60 minutes',10,6);
let simpleSpreadReading = new Reading ('Simple Spread','15 minutes',10,8);

document.getElementById('btn').addEventListener('click', function(){
    let availableSlots = ancestralReading.checkAvailableSlots();
    alert('Number of available reading slots: ' + availableSlots ) ; 
}, false); 

console.log(ancestralReading.checkAvailableSlots());







