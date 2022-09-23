

var timeDisplayEl = $('#time-display');

// function for displaying current date and time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);
console.log(moment().format()); //console log it to see it